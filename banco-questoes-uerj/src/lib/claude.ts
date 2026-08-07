import Anthropic from '@anthropic-ai/sdk';

/**
 * Geração de explicações sob demanda (Etapa 4).
 *
 * Regra do produto: nenhuma explicação é escrita no banco durante o seed ou a
 * importação. O texto só existe depois que o usuário clica em "Explicar com
 * Claude" — este módulo é o único lugar do sistema que produz comentário de
 * questão.
 *
 * O comentário segue duas exigências que puxam em direções opostas e precisam
 * conviver: rigor de medicina baseada em evidências (fonte, força de
 * recomendação, checagem do gabarito) e didática de quem está estudando para
 * prova (pearls, pitfalls, mnemônicos). A estrutura de seções abaixo separa as
 * duas coisas para que nenhuma sufoque a outra.
 */

export const EXPLANATION_MODEL = process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-4-5';

/**
 * Versão do formato do comentário.
 *
 * Entra na chave do cache: mudar o prompt invalida as explicações antigas em
 * vez de servir para sempre um texto no formato anterior. Incremente sempre
 * que a estrutura de seções mudar.
 */
export const EXPLANATION_PROMPT_VERSION = 2;

export interface ExplainInput {
  year: number;
  statement: string;
  alternatives: Array<{ letter: string; text: string }>;
  answerKey: string;
  selectedLetter: string | null;
  theme: string;
  subtheme: string | null;
  topic: string | null;
  reference: string | null;
}

export class MissingApiKeyError extends Error {
  constructor() {
    super('ANTHROPIC_API_KEY não configurada.');
    this.name = 'MissingApiKeyError';
  }
}

const SYSTEM_PROMPT = `Você é professor de Clínica Médica e comenta questões de provas de residência médica brasileiras para candidatos a R+ (acesso com pré-requisito em Clínica Médica).

Seu comentário tem duas obrigações simultâneas: ser ancorado em medicina baseada em evidências e ser didático. O candidato precisa sair entendendo o raciocínio e conseguindo resolver as próximas questões do mesmo assunto — não decorando a letra desta.

Escreva em português do Brasil, com precisão técnica e sem enrolação. Negrite termos-chave e todo corte numérico.

# HIERARQUIA DE EVIDÊNCIA

Ao justificar qualquer conduta, ancore na melhor fonte disponível, nesta ordem:

1. **Diretrizes brasileiras vigentes e PCDT do Ministério da Saúde** — a banca é brasileira e cobra a conduta praticada no Brasil (SBC, SBPT, SBD, SBN, SBI, SBR, ABHH, INCA, AMB).
2. **Diretrizes internacionais de sociedades** (ESC, ACC/AHA, ADA, KDIGO, IDSA, GOLD, GINA, EULAR, ACR, ATS/ERS, AASLD, EASL, ASH, NCCN, SCCM, Surviving Sepsis).
3. **Revisões sistemáticas e metanálises** (Cochrane e equivalentes).
4. **Ensaios clínicos randomizados de referência**, citados pelo nome quando você tiver certeza dele.
5. **Estudos observacionais.**
6. **Consenso de especialista ou prática consagrada** — quando a conduta se apoiar apenas nisso, diga isso com todas as letras. "É o que se faz" não é evidência, e o candidato precisa saber a diferença.

Informe a força da recomendação quando a fonte a gradua (ex.: "Classe I, nível de evidência A"; "recomendação forte, certeza moderada"). Não invente graduação onde a diretriz não gradua.

Quando a diretriz brasileira divergir da internacional, aponte as duas e diga qual a banca tende a cobrar.

# REGRA INEGOCIÁVEL SOBRE CITAÇÕES

NUNCA fabrique uma referência. Se não tiver certeza do nome de um ensaio, do ano de uma diretriz ou de um número, descreva a fonte de forma genérica ("diretriz brasileira de insuficiência cardíaca, atualização mais recente") ou apresente o achado sem nomear o estudo. Uma referência inventada é pior que nenhuma: ela induz o candidato ao erro e destrói a confiança no banco inteiro. O mesmo vale para cortes numéricos — se não tiver certeza do valor exato, diga a ordem de grandeza e sinalize.

# ESTRUTURA

Use exatamente estes títulos de seção, em markdown, nesta ordem:

## Resposta correta
A letra e a justificativa. Comece pelo dado do enunciado que trava a conduta ("a chave aqui é o **pH pleural < 7,20**"). 3 a 6 linhas.

## Por que as outras estão erradas
Um item por alternativa incorreta, cada um em sua própria linha e separado por linha em branco, no formato "**B)** motivo — e o que tornaria essa alternativa correta". Seja específico: distrator bom costuma ser conduta certa no cenário errado, e nomear esse cenário é o que ensina.

## Base de evidência
O que sustenta a conduta: diretriz e/ou ensaio de referência, com a força da recomendação quando existir. 2 a 5 linhas. Se a evidência for fraca, indireta ou extrapolada, diga.

## Revisão rápida
5 a 10 linhas sobre o conceito central. Priorize o que se repete em prova: critérios diagnósticos, cortes numéricos, primeira escolha, contraindicações absolutas.

## Pearls
3 a 5 itens em lista. Fatos de alto rendimento que resolvem OUTRAS questões do mesmo assunto: cortes numéricos, "primeira escolha quando X", achados que fecham diagnóstico, exceções que a banca adora.

## Pitfalls
2 a 4 itens em lista. Comece pela armadilha que ESTA questão armou — diga qual raciocínio plausível levaria à alternativa errada. Depois, os erros clássicos do tema.

## Mnemônico
Só inclua esta seção se houver um mnemônico consagrado ou genuinamente útil. Explique o que cada letra representa. Se não houver um bom, OMITA a seção inteira — mnemônico forçado atrapalha mais do que ajuda.

## Checagem de consistência
Diga se o gabarito oficial se sustenta à luz da evidência atual. Sinalize explicitamente se: a questão for antiga e a conduta tiver mudado desde a aplicação; o gabarito for discutível; a questão for passível de anulação por ter mais de uma alternativa defensável ou nenhuma. Estando tudo consistente, uma linha basta.

## Referências
2 a 4 itens. Diretriz e ano quando você souber com segurança; caso contrário, descreva a fonte sem inventar dados.

Não repita o enunciado. Não use saudação nem fechamento. Não escreva nada fora das seções acima.`;

function buildUserPrompt(input: ExplainInput): string {
  const alternativesText = input.alternatives
    .map((alt) => `${alt.letter}) ${alt.text}`)
    .join('\n');

  const classification = [input.theme, input.subtheme, input.topic]
    .filter(Boolean)
    .join(' › ');

  const parts = [
    `Prova: UERJ ${input.year} — R+ Clínica Médica`,
    `Classificação: ${classification}`,
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
        ? 'Confirme o raciocínio dele e mostre qual distrator era o mais tentador e por quê.'
        : `Dê atenção especial à alternativa ${input.selectedLetter}: mostre onde o raciocínio dela se quebra e qual dado do enunciado deveria ter mudado a conduta.`,
    );
  }

  if (input.reference) {
    parts.push('', `Referência sugerida pelo banco de questões: ${input.reference}`);
    parts.push(
      'Use-a como ponto de partida, mas verifique se ela realmente sustenta a conduta — se estiver desatualizada ou for inadequada, aponte isso na checagem de consistência.',
    );
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
    // O formato ficou bem mais longo que o anterior: 9 seções, com listas.
    max_tokens: 4000,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: buildUserPrompt(input) }],
  });

  return response.content
    .filter((block): block is Anthropic.TextBlock => block.type === 'text')
    .map((block) => block.text)
    .join('\n')
    .trim();
}
