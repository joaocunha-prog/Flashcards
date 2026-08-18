import Anthropic from '@anthropic-ai/sdk';
import type { PrismaClient } from '@prisma/client';
import { prisma as defaultPrisma } from './prisma';
import { buildBlueprint, readAnalysis, type BlueprintSlot } from './analysis';
import { importExam } from './import';
import { MissingApiKeyError } from './claude';
import type { QuestionInput } from '@data/types';

/**
 * Geração de prova inédita a partir do banco existente.
 *
 * A prova NÃO é inventada do zero: o banco é a matéria-prima. O gerador
 *
 *   1. lê a análise de incidência e monta um blueprint por assunto
 *      (tema — subtema), com o número de questões proporcional ao que a banca
 *      historicamente cobra de cada um;
 *   2. respeita a distribuição de dificuldade observada no corpus;
 *   3. envia ao Claude, por assunto, questões reais do banco como exemplares
 *      de estilo, mais a lista de tópicos daquele assunto, mais os enunciados
 *      já existentes para que não sejam repetidos;
 *   4. valida cada questão e importa tudo como uma prova nova.
 *
 * Por isso o botão exige um banco populado: sem questões não há incidência,
 * não há estilo a imitar e não há como garantir que a prova gerada pareça
 * com a da banca. A checagem é feita no servidor, não só na interface.
 */

export const MIN_QUESTIONS_TO_GENERATE = 20;
export const DEFAULT_EXAM_SIZE = 60;

export class EmptyBankError extends Error {
  constructor(public readonly available: number) {
    super(
      `O banco precisa de pelo menos ${MIN_QUESTIONS_TO_GENERATE} questões classificadas para gerar uma prova (há ${available}).`,
    );
    this.name = 'EmptyBankError';
  }
}

export interface GenerationReadiness {
  ready: boolean;
  available: number;
  required: number;
  subjects: number;
  reason: string | null;
}

/** Diz se o botão de gerar prova pode ser habilitado, e por quê não. */
export async function checkReadiness(
  client: PrismaClient = defaultPrisma,
): Promise<GenerationReadiness> {
  const [available, subjects] = await Promise.all([
    client.question.count({
      where: { exam: { excludeFromStats: false }, subthemeId: { not: null } },
    }),
    client.subtheme.count({ where: { questions: { some: { exam: { excludeFromStats: false } } } } }),
  ]);

  const hasApiKey = Boolean(process.env.ANTHROPIC_API_KEY);

  let reason: string | null = null;
  if (available === 0) {
    reason =
      'O banco está vazio. Importe ao menos uma prova para que a geração tenha incidência e estilo em que se basear.';
  } else if (available < MIN_QUESTIONS_TO_GENERATE) {
    reason = `Há ${available} questões classificadas; são necessárias ao menos ${MIN_QUESTIONS_TO_GENERATE} para a prova gerada refletir o perfil da banca.`;
  } else if (!hasApiKey) {
    reason = 'ANTHROPIC_API_KEY não configurada no servidor.';
  }

  return {
    ready: reason === null,
    available,
    required: MIN_QUESTIONS_TO_GENERATE,
    subjects,
    reason,
  };
}

const GENERATION_MODEL = process.env.ANTHROPIC_MODEL ?? 'claude-opus-5';

const SYSTEM_PROMPT = `Você elabora questões de prova de residência médica brasileira no estilo do ENARE (Exame Nacional de Residência Médica, acesso direto a R1).

Escreva em português do Brasil. Cada questão deve ser:
- Um caso clínico curto e autossuficiente (3 a 6 linhas), com os dados que definem a conduta: idade, comorbidades relevantes, sinais vitais, exames com valores numéricos.
- Seguida de 4 alternativas plausíveis. Os distratores devem ser erros que um bom candidato de fato cometeria — condutas certas para outro cenário, ou certas mas fora do momento. Nunca use alternativas absurdas nem "todas as anteriores".
- Focada em conduta, diagnóstico diferencial ou interpretação de exame; evite pergunta de memorização pura.
- Tecnicamente correta, com uma única alternativa defensável, ancorada em diretriz vigente. Prefira diretriz brasileira (SBC, SBPT, SBD, SBN, MS/PCDT) quando existir, já que a banca é brasileira.

No campo "reference", nomeie a diretriz que sustenta o gabarito. NUNCA invente título, ano ou número: se não tiver certeza, descreva a fonte de forma genérica ("diretriz brasileira de insuficiência cardíaca"). Referência fabricada induz o candidato ao erro.

Não escreva comentário, justificativa nem explicação da resposta — apenas o enunciado, as alternativas e o gabarito. O comentário é gerado depois, sob demanda.

Responda EXCLUSIVAMENTE com um array JSON válido, sem cercas de código e sem texto ao redor. Cada item:

{"statement":"...","alternatives":[{"letter":"A","text":"..."},{"letter":"B","text":"..."},{"letter":"C","text":"..."},{"letter":"D","text":"..."}],"answerKey":"B","topic":"<um dos tópicos listados>","difficulty":"FACIL|MEDIA|DIFICIL","keywords":["...","..."],"reference":"diretriz de referência"}

A letra em answerKey deve existir nas alternativas. Varie a posição do gabarito entre as questões.`;

interface GeneratedQuestion {
  statement: string;
  alternatives: Array<{ letter: string; text: string }>;
  answerKey: string;
  topic?: string;
  difficulty: 'FACIL' | 'MEDIA' | 'DIFICIL';
  keywords?: string[];
  reference?: string;
}

/** Extrai o array JSON da resposta, tolerando cercas de código. */
function parseQuestions(raw: string): GeneratedQuestion[] {
  let text = raw.trim();

  const fence = /```(?:json)?\s*([\s\S]*?)```/.exec(text);
  if (fence) text = fence[1].trim();

  const start = text.indexOf('[');
  const end = text.lastIndexOf(']');
  if (start === -1 || end === -1 || end < start) {
    throw new Error('resposta do modelo não contém um array JSON');
  }

  const parsed = JSON.parse(text.slice(start, end + 1));
  if (!Array.isArray(parsed)) throw new Error('resposta do modelo não é um array');
  return parsed;
}

/** Descarta o que não serve antes de chegar ao importador. */
function isUsable(question: GeneratedQuestion): boolean {
  if (typeof question?.statement !== 'string' || question.statement.trim().length < 40) return false;
  if (!Array.isArray(question.alternatives) || question.alternatives.length < 3) return false;
  if (question.alternatives.some((alt) => !alt?.letter || !alt?.text?.trim())) return false;

  const letters = question.alternatives.map((alt) => alt.letter.trim().toUpperCase());
  if (new Set(letters).size !== letters.length) return false;
  if (!letters.includes(String(question.answerKey ?? '').trim().toUpperCase())) return false;

  return ['FACIL', 'MEDIA', 'DIFICIL'].includes(question.difficulty);
}

interface SlotContext {
  slot: BlueprintSlot;
  /** Questões reais do assunto, usadas como exemplares de estilo. */
  examples: Array<{ statement: string; alternatives: string[] }>;
  /** Enunciados já existentes no assunto, para evitar repetição. */
  existingStatements: string[];
  difficultyMix: string;
}

function buildUserPrompt(context: SlotContext): string {
  const { slot } = context;
  const parts: string[] = [
    `Elabore ${slot.count} ${slot.count === 1 ? 'questão inédita' : 'questões inéditas'} sobre: **${slot.label}**.`,
    '',
    `Distribua os tópicos entre: ${slot.topics.length > 0 ? slot.topics.join(' | ') : slot.name}.`,
    `O campo "topic" de cada questão deve ser exatamente um dos tópicos acima.`,
    '',
    `Dificuldade esperada nesta prova: ${context.difficultyMix}.`,
  ];

  if (context.examples.length > 0) {
    parts.push(
      '',
      'Questões reais deste assunto no banco, como referência de estilo, extensão e nível de detalhe (NÃO as repita):',
      '',
      ...context.examples.map(
        (example, index) =>
          `--- exemplo ${index + 1} ---\n${example.statement}\n${example.alternatives.join('\n')}`,
      ),
    );
  }

  if (context.existingStatements.length > 0) {
    parts.push(
      '',
      'Cenários já cobertos pelo banco. Escreva casos clínicos diferentes destes:',
      ...context.existingStatements.map((statement) => `- ${statement.slice(0, 160)}…`),
    );
  }

  parts.push('', 'Responda apenas com o array JSON.');
  return parts.join('\n');
}

/** Gera as questões de um assunto. Erro aqui não derruba a prova inteira. */
async function generateForSlot(
  anthropic: Anthropic,
  context: SlotContext,
): Promise<QuestionInput[]> {
  const response = await anthropic.messages.create({
    model: GENERATION_MODEL,
    // ~450 tokens por questão, com folga para o assunto com mais questões.
    max_tokens: Math.min(16000, 800 + context.slot.count * 700),
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: buildUserPrompt(context) }],
  });

  const text = response.content
    .filter((block): block is Anthropic.TextBlock => block.type === 'text')
    .map((block) => block.text)
    .join('\n');

  const validTopics = new Set(context.slot.topics);

  return parseQuestions(text)
    .filter(isUsable)
    .slice(0, context.slot.count)
    .map((question) => ({
      // O número definitivo é atribuído depois, ao montar o caderno.
      number: 0,
      statement: question.statement.trim(),
      alternatives: question.alternatives.map((alt) => ({
        letter: alt.letter.trim().toUpperCase(),
        text: alt.text.trim(),
      })),
      answerKey: question.answerKey.trim().toUpperCase(),
      theme: context.slot.themeName,
      subtheme: context.slot.name,
      // Um tópico inventado pelo modelo criaria lixo na taxonomia; nesse caso
      // a questão fica sem tópico e ainda assim conta para o assunto.
      topic: question.topic && validTopics.has(question.topic) ? question.topic : undefined,
      difficulty: question.difficulty,
      keywords: (question.keywords ?? []).filter((k) => typeof k === 'string' && k.trim()),
      reference: question.reference?.trim() || undefined,
    }));
}

/** Executa `tasks` com no máximo `limit` em voo — evita estourar rate limit. */
async function mapWithConcurrency<T, R>(
  items: T[],
  limit: number,
  worker: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let cursor = 0;

  async function run(): Promise<void> {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

export interface GenerateExamOptions {
  jobId: string;
  size?: number;
  client?: PrismaClient;
}

export interface GenerateExamResult {
  examSlug: string;
  examId: string;
  generated: number;
  requested: number;
  blueprint: BlueprintSlot[];
}

/**
 * Gera a prova completa e a importa. Atualiza o progresso do job conforme
 * cada assunto termina, para a interface poder acompanhar.
 */
export async function generateExam(options: GenerateExamOptions): Promise<GenerateExamResult> {
  const client = options.client ?? defaultPrisma;
  const size = options.size ?? DEFAULT_EXAM_SIZE;

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new MissingApiKeyError();

  const readiness = await checkReadiness(client);
  if (readiness.available < MIN_QUESTIONS_TO_GENERATE) {
    throw new EmptyBankError(readiness.available);
  }

  const analysis = await readAnalysis(client);
  const blueprint = buildBlueprint(analysis.subjects, size);
  if (blueprint.length === 0) {
    throw new EmptyBankError(readiness.available);
  }

  // Descreve a mistura de dificuldade do corpus para o prompt.
  const totalDifficulty =
    analysis.difficultyDistribution.FACIL +
    analysis.difficultyDistribution.MEDIA +
    analysis.difficultyDistribution.DIFICIL;
  const difficultyMix =
    totalDifficulty === 0
      ? 'predominantemente média'
      : (['FACIL', 'MEDIA', 'DIFICIL'] as const)
          .map((key) => {
            const label = key === 'FACIL' ? 'fácil' : key === 'MEDIA' ? 'média' : 'difícil';
            const pct = Math.round((analysis.difficultyDistribution[key] / totalDifficulty) * 100);
            return `${pct}% ${label}`;
          })
          .join(', ');

  await client.generationJob.update({
    where: { id: options.jobId },
    data: {
      status: 'GERANDO',
      blueprint: blueprint as unknown as object,
      requested: blueprint.reduce((sum, slot) => sum + slot.count, 0),
    },
  });

  // Contexto de estilo: questões reais de cada assunto.
  const contexts: SlotContext[] = await Promise.all(
    blueprint.map(async (slot) => {
      const pool = await client.question.findMany({
        where: { subthemeId: slot.subthemeId, exam: { excludeFromStats: false } },
        select: {
          statement: true,
          alternatives: { select: { letter: true, text: true }, orderBy: { letter: 'asc' } },
        },
        take: 12,
        orderBy: { year: 'desc' },
      });

      return {
        slot,
        examples: pool.slice(0, 2).map((question) => ({
          statement: question.statement,
          alternatives: question.alternatives.map((alt) => `${alt.letter}) ${alt.text}`),
        })),
        existingStatements: pool.map((question) => question.statement),
        difficultyMix,
      };
    }),
  );

  const anthropic = new Anthropic({ apiKey });
  let produced = 0;

  const perSlot = await mapWithConcurrency(contexts, 4, async (context) => {
    try {
      const questions = await generateForSlot(anthropic, context);
      produced += questions.length;
      await client.generationJob.update({
        where: { id: options.jobId },
        data: { generated: produced },
      });
      return questions;
    } catch (error) {
      // Um assunto que falhou não deve levar a prova inteira junto; a prova
      // sai um pouco menor e o log registra o motivo.
      console.error(`Falha ao gerar questões de "${context.slot.label}":`, error);
      return [];
    }
  });

  const questions = perSlot.flat().map((question, index) => ({ ...question, number: index + 1 }));

  if (questions.length === 0) {
    throw new Error('O modelo não retornou nenhuma questão válida. Tente novamente.');
  }

  const stamp = new Date().toISOString().slice(0, 19).replace(/[:T-]/g, '');
  const slug = `prova-gerada-${stamp}`;
  const year = new Date().getFullYear();

  const result = await importExam(
    {
      slug,
      year,
      board: 'ENARE',
      program: '',
      title: `Prova gerada — ${questions.length} questões (${new Date().toLocaleDateString('pt-BR')})`,
      source: 'AUTORAL_ESTILO_BANCA',
      reference: `Gerada a partir da incidência de ${analysis.totalQuestions} questões do banco.`,
      // Prova derivada da análise: incluí-la no cálculo realimentaria o ranking
      // que a originou.
      excludeFromStats: true,
      questions,
    },
    { client, recompute: true },
  );

  return {
    examSlug: result.examSlug,
    examId: result.examId,
    generated: questions.length,
    requested: size,
    blueprint,
  };
}
