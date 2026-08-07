import Anthropic from '@anthropic-ai/sdk';

/**
 * Geração de explicações sob demanda (Etapa 4).
 *
 * Regra do produto: nenhuma explicação é escrita no banco durante o seed ou a
 * importação. O texto só existe depois que o usuário clica em "Explicar com
 * Claude" — este módulo é o único lugar do sistema que produz comentário de
 * questão.
 */

export const EXPLANATION_MODEL = process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-4-5';

export interface ExplainInput {
  year: number;
  statement: string;
  alternatives: Array<{ letter: string; text: string }>;
  answerKey: string;
  selectedLetter: string | null;
  theme: string;
  subtheme: string | null;
  reference: string | null;
}

export class MissingApiKeyError extends Error {
  constructor() {
    super('ANTHROPIC_API_KEY não configurada.');
    this.name = 'MissingApiKeyError';
  }
}

const SYSTEM_PROMPT = `Você é um professor de Clínica Médica que comenta questões de provas de residência médica brasileiras, no nível de um candidato a R+ (acesso com pré-requisito em Clínica Médica).

Escreva em português do Brasil, com precisão técnica e sem enrolação. Use exatamente esta estrutura de seções em markdown:

## Resposta correta
Indique a letra e justifique em 3 a 6 linhas, ancorando no dado do enunciado que define a conduta.

## Por que as outras estão erradas
Uma linha por alternativa incorreta, no formato "**B)** motivo". Seja específico: diga o que tornaria aquela alternativa correta.

## Revisão teórica
Um resumo curto (5 a 10 linhas) do conceito central cobrado. Priorize o que se repete em prova: critérios diagnósticos, cortes numéricos, primeira escolha terapêutica.

## Pegadinhas
2 a 4 itens em lista, começando pela armadilha que a banca de fato armou nesta questão.

## Referências
2 a 4 itens, priorizando diretrizes brasileiras (SBC, SBPT, SBD, Ministério da Saúde) e, quando pertinente, internacionais (ESC, ADA, KDIGO, IDSA, GOLD, GINA). Cite diretriz e ano aproximado quando souber. Se não tiver certeza da referência exata, descreva a fonte de forma genérica em vez de inventar número de página, título preciso ou ano — nunca fabrique uma citação.

Não repita o enunciado. Não use saudações nem fechamento.`;

function buildUserPrompt(input: ExplainInput): string {
  const alternativesText = input.alternatives
    .map((alt) => `${alt.letter}) ${alt.text}`)
    .join('\n');

  const parts = [
    `Prova: UERJ ${input.year} — R+ Clínica Médica`,
    `Tema: ${input.theme}${input.subtheme ? ` / ${input.subtheme}` : ''}`,
    '',
    'Enunciado:',
    input.statement,
    '',
    'Alternativas:',
    alternativesText,
    '',
    `Gabarito oficial: ${input.answerKey}`,
  ];

  if (input.selectedLetter) {
    const wasCorrect = input.selectedLetter === input.answerKey;
    parts.push(
      `O candidato marcou: ${input.selectedLetter} (${wasCorrect ? 'acertou' : 'errou'}).`,
      wasCorrect
        ? 'Reforce por que o raciocínio dele está certo e qual distrator era o mais tentador.'
        : 'Explique com atenção especial por que a alternativa que ele marcou é incorreta.',
    );
  }

  if (input.reference) {
    parts.push('', `Referência sugerida pelo banco de questões: ${input.reference}`);
  }

  return parts.join('\n');
}

export async function generateExplanation(input: ExplainInput): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new MissingApiKeyError();
  }

  const client = new Anthropic({ apiKey });

  const response = await client.messages.create({
    model: EXPLANATION_MODEL,
    max_tokens: 2000,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: buildUserPrompt(input) }],
  });

  return response.content
    .filter((block): block is Anthropic.TextBlock => block.type === 'text')
    .map((block) => block.text)
    .join('\n')
    .trim();
}
