import { PrismaClient } from '@prisma/client';
import {
  EXPLANATION_MODEL,
  EXPLANATION_PROMPT_VERSION,
  MissingApiKeyError,
  generateExplanation,
} from '../src/lib/claude';

/**
 * Escreve o comentário de todas as questões do banco, de uma vez.
 *
 *   npm run explain:all
 *   npm run explain:all -- --ano 2025 --concorrencia 6
 *   npm run explain:all -- --refazer
 *
 * Estas explicações são COMPARTILHADAS: ficam com `userId: null`, porque não
 * conhecem a resposta de nenhum usuário. O endpoint de explicação as serve como
 * segunda camada de cache, e a tela de resolução, ao encontrar uma, mostra o
 * comentário direto em vez do botão "Explicar com Claude".
 *
 * O script é retomável: pula o que já tem comentário na versão atual do
 * formato. Interromper no meio e rodar de novo continua de onde parou.
 *
 * Nota de produto: a especificação original pedia explicação exclusivamente sob
 * demanda. Gerar em lote é uma decisão consciente do dono do banco — troca
 * custo adiantado por espera zero na hora de estudar. O botão continua existindo
 * para as questões que este script ainda não cobriu.
 */

const prisma = new PrismaClient();

interface Options {
  ano: number | null;
  concorrencia: number;
  refazer: boolean;
  limite: number | null;
}

function parseArgs(argv: string[]): Options {
  const options: Options = { ano: null, concorrencia: 4, refazer: false, limite: null };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--refazer') options.refazer = true;
    else if (arg === '--ano') options.ano = Number(argv[++i]);
    else if (arg === '--concorrencia') options.concorrencia = Number(argv[++i]);
    else if (arg === '--limite') options.limite = Number(argv[++i]);
  }

  if (!Number.isFinite(options.concorrencia) || options.concorrencia < 1) {
    throw new Error('--concorrencia precisa ser um inteiro positivo');
  }

  return options;
}

/**
 * Executa as tarefas com no máximo `limite` chamadas em voo.
 *
 * Vale a pena manter baixo: a API tem limite de requisições por minuto, e uma
 * rajada de 247 chamadas simultâneas só serve para colecionar 429.
 */
async function mapWithConcurrency<T>(
  items: T[],
  limite: number,
  worker: (item: T, index: number) => Promise<void>,
): Promise<void> {
  let cursor = 0;

  async function run(): Promise<void> {
    while (cursor < items.length) {
      const index = cursor++;
      await worker(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limite, items.length) }, run));
}

/** Uma falha isolada não deve derrubar um lote de horas. */
async function comRetentativa<T>(fn: () => Promise<T>, tentativas = 3): Promise<T> {
  let ultimoErro: unknown;

  for (let tentativa = 1; tentativa <= tentativas; tentativa++) {
    try {
      return await fn();
    } catch (error) {
      if (error instanceof MissingApiKeyError) throw error;
      ultimoErro = error;
      if (tentativa < tentativas) {
        // 2s, 8s: dá tempo de a janela de rate limit virar.
        await new Promise((resolve) => setTimeout(resolve, 2000 * 4 ** (tentativa - 1)));
      }
    }
  }

  throw ultimoErro;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY não configurada. Defina a chave no .env e rode de novo.');
    process.exitCode = 1;
    return;
  }

  if (options.refazer) {
    const { count } = await prisma.explanation.deleteMany({
      where: {
        userId: null,
        promptVersion: EXPLANATION_PROMPT_VERSION,
        ...(options.ano ? { question: { year: options.ano } } : {}),
      },
    });
    console.log(`--refazer: ${count} comentários compartilhados apagados.\n`);
  }

  const questoes = await prisma.question.findMany({
    where: {
      ...(options.ano ? { year: options.ano } : {}),
      explanations: {
        none: { userId: null, promptVersion: EXPLANATION_PROMPT_VERSION },
      },
    },
    include: {
      alternatives: { orderBy: { letter: 'asc' } },
      theme: true,
      subtheme: true,
      topic: true,
    },
    orderBy: [{ year: 'asc' }, { number: 'asc' }],
    ...(options.limite ? { take: options.limite } : {}),
  });

  const total = await prisma.question.count({ where: options.ano ? { year: options.ano } : {} });
  const jaFeitas = total - questoes.length;

  console.log(`Modelo:      ${EXPLANATION_MODEL}`);
  console.log(`Formato:     v${EXPLANATION_PROMPT_VERSION}`);
  console.log(`Concorrência: ${options.concorrencia}`);
  console.log(`Questões:    ${total} no escopo, ${jaFeitas} já comentadas, ${questoes.length} a gerar\n`);

  if (questoes.length === 0) {
    console.log('Nada a fazer.');
    return;
  }

  let feitas = 0;
  const falhas: Array<{ year: number; number: number; erro: string }> = [];
  const inicio = Date.now();

  await mapWithConcurrency(questoes, options.concorrencia, async (questao) => {
    try {
      const content = await comRetentativa(() =>
        generateExplanation({
          year: questao.year,
          statement: questao.statement,
          alternatives: questao.alternatives.map((alt) => ({ letter: alt.letter, text: alt.text })),
          answerKey: questao.answerKey,
          // Sem letra marcada: o comentário é compartilhado e não comenta o
          // raciocínio de ninguém em particular.
          selectedLetter: null,
          theme: questao.theme.name,
          subtheme: questao.subtheme?.name ?? null,
          topic: questao.topic?.name ?? null,
          reference: questao.reference,
        }),
      );

      await prisma.explanation.create({
        data: {
          questionId: questao.id,
          userId: null,
          model: EXPLANATION_MODEL,
          content,
          selectedLetter: null,
          promptVersion: EXPLANATION_PROMPT_VERSION,
        },
      });

      feitas++;
      const decorrido = Math.round((Date.now() - inicio) / 1000);
      console.log(
        `[${String(feitas).padStart(3)}/${questoes.length}] ${questao.year} Q${String(questao.number).padStart(2)} · ${content.length} caracteres · ${decorrido}s`,
      );
    } catch (error) {
      if (error instanceof MissingApiKeyError) throw error;
      const erro = error instanceof Error ? error.message : String(error);
      falhas.push({ year: questao.year, number: questao.number, erro });
      console.error(`[falha] ${questao.year} Q${questao.number}: ${erro}`);
    }
  });

  console.log(`\n${feitas} comentários escritos em ${Math.round((Date.now() - inicio) / 1000)}s.`);

  if (falhas.length > 0) {
    console.log(`\n${falhas.length} falharam:`);
    falhas.forEach((f) => console.log(`  ${f.year} Q${f.number} — ${f.erro}`));
    console.log('\nRode o comando de novo: ele retoma só o que faltou.');
    process.exitCode = 1;
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
