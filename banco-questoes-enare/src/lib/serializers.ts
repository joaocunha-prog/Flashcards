import type {
  Alternative,
  Difficulty,
  Question,
  QuestionSource,
  QuestionStatus,
  Subtheme,
  Theme,
  Topic,
  UserQuestionState,
} from '@prisma/client';
import { EXPLANATION_PROMPT_VERSION } from './claude';

/**
 * Fronteira de segurança do banco de questões.
 *
 * A regra do produto é que o gabarito nunca aparece antes de o usuário
 * responder. Como o cliente é um bundle JavaScript inspecionável, "esconder na
 * interface" não basta: o `answerKey` precisa nunca sair do servidor. Todo
 * payload de questão enviado ao cliente passa por `toSafeQuestion`, que
 * constrói o objeto campo a campo — nunca por spread do registro do Prisma,
 * justamente para que um campo novo no schema não vaze por descuido.
 *
 * O gabarito só é revelado pelo endpoint de resposta, e ainda assim apenas
 * como um booleano (`correct`), conforme a Etapa 4.
 *
 * A mesma lógica vale para a CLASSIFICAÇÃO DO ASSUNTO na tela de resolução:
 * saber que a questão é de "Câncer de pulmão", ou ler a palavra-chave
 * "erlotinibe", estreita o diferencial antes de o usuário raciocinar. Na
 * listagem do banco isso é navegação legítima; resolvendo, é entrega. Por isso
 * `toSolveQuestion` agrupa esses campos em `subject` e devolve null enquanto
 * não houver tentativa registrada — e o endpoint de resposta os manda junto do
 * resultado, como já faz com a ressalva de gabarito.
 */

export type QuestionWithRelations = Question & {
  alternatives: Alternative[];
  theme: Theme;
  subtheme: Subtheme | null;
  topic: Topic | null;
  userStates?: UserQuestionState[];
  /** Presente quando a consulta usou `questionInclude`. */
  _count?: { explanations: number };
};

export interface SafeAlternative {
  id: string;
  letter: string;
  text: string;
}

export interface SafeQuestion {
  id: string;
  year: number;
  number: number;
  statement: string;
  alternatives: SafeAlternative[];
  theme: { id: string; slug: string; name: string };
  subtheme: { id: string; slug: string; name: string } | null;
  topic: { id: string; slug: string; name: string } | null;
  difficulty: Difficulty;
  keywords: string[];
  source: QuestionSource;
  themeFrequency: number;
  subjectFrequency: number;
  /** Estado do usuário; ausente quando a consulta não pediu o progresso. */
  userState: SafeUserState | null;
  /**
   * Há comentário pronto para esta questão (gerado em lote).
   *
   * É só o booleano — o TEXTO nunca vem junto, porque entrega o gabarito. Serve
   * para a tela mostrar o comentário direto depois da resposta, em vez do botão
   * "Explicar com Claude".
   */
  hasExplanation: boolean;
}

export interface SafeUserState {
  status: QuestionStatus;
  favorite: boolean;
  notes: string | null;
  attemptCount: number;
  correctCount: number;
  lastAnsweredAt: string | null;
}

/**
 * Tudo que revela do que a questão trata, num objeto só.
 *
 * Fica junto de propósito: separar "tema" de "palavras-chave" convidaria a
 * esconder um e esquecer o outro, e o efeito prático é o mesmo — entregar o
 * assunto antes da resposta.
 */
export interface QuestionSubject {
  theme: { id: string; slug: string; name: string };
  subtheme: { id: string; slug: string; name: string } | null;
  topic: { id: string; slug: string; name: string } | null;
  keywords: string[];
  themeFrequency: number;
  subjectFrequency: number;
}

/**
 * Questão como a tela de resolução a recebe: sem gabarito (como toda
 * SafeQuestion) e sem classificação de assunto enquanto não houver tentativa.
 */
export interface SolveQuestion {
  id: string;
  year: number;
  number: number;
  statement: string;
  alternatives: SafeAlternative[];
  difficulty: Difficulty;
  source: QuestionSource;
  userState: SafeUserState | null;
  hasExplanation: boolean;
  /** Null até o usuário responder. Ver o cabeçalho deste arquivo. */
  subject: QuestionSubject | null;
}

function toSafeUserState(state: UserQuestionState | undefined): SafeUserState | null {
  if (!state) return null;
  return {
    status: state.status,
    favorite: state.favorite,
    notes: state.notes,
    attemptCount: state.attemptCount,
    correctCount: state.correctCount,
    lastAnsweredAt: state.lastAnsweredAt ? state.lastAnsweredAt.toISOString() : null,
  };
}

export function toSafeQuestion(question: QuestionWithRelations): SafeQuestion {
  return {
    id: question.id,
    year: question.year,
    number: question.number,
    statement: question.statement,
    alternatives: question.alternatives
      .slice()
      .sort((a, b) => a.letter.localeCompare(b.letter))
      .map((alt) => ({ id: alt.id, letter: alt.letter, text: alt.text })),
    theme: {
      id: question.theme.id,
      slug: question.theme.slug,
      name: question.theme.name,
    },
    subtheme: question.subtheme
      ? {
          id: question.subtheme.id,
          slug: question.subtheme.slug,
          name: question.subtheme.name,
        }
      : null,
    topic: question.topic
      ? { id: question.topic.id, slug: question.topic.slug, name: question.topic.name }
      : null,
    difficulty: question.difficulty,
    keywords: question.keywords,
    source: question.source,
    themeFrequency: question.themeFrequency,
    subjectFrequency: question.subjectFrequency,
    userState: toSafeUserState(question.userStates?.[0]),
    hasExplanation: (question._count?.explanations ?? 0) > 0,
  };
}

export function toSafeQuestions(questions: QuestionWithRelations[]): SafeQuestion[] {
  return questions.map(toSafeQuestion);
}

/** Extrai a classificação de assunto de uma questão do Prisma. */
export function toQuestionSubject(question: QuestionWithRelations): QuestionSubject {
  return {
    theme: { id: question.theme.id, slug: question.theme.slug, name: question.theme.name },
    subtheme: question.subtheme
      ? {
          id: question.subtheme.id,
          slug: question.subtheme.slug,
          name: question.subtheme.name,
        }
      : null,
    topic: question.topic
      ? { id: question.topic.id, slug: question.topic.slug, name: question.topic.name }
      : null,
    keywords: question.keywords,
    themeFrequency: question.themeFrequency,
    subjectFrequency: question.subjectFrequency,
  };
}

/**
 * Payload da tela de resolução.
 *
 * O assunto só entra depois que existe tentativa registrada — reabrir uma
 * questão já respondida mostra tudo de novo, que é o comportamento desejado.
 */
export function toSolveQuestion(question: QuestionWithRelations): SolveQuestion {
  const userState = toSafeUserState(question.userStates?.[0]);
  const answered = (userState?.attemptCount ?? 0) > 0;

  return {
    id: question.id,
    year: question.year,
    number: question.number,
    statement: question.statement,
    alternatives: question.alternatives
      .slice()
      .sort((a, b) => a.letter.localeCompare(b.letter))
      .map((alt) => ({ id: alt.id, letter: alt.letter, text: alt.text })),
    difficulty: question.difficulty,
    source: question.source,
    userState,
    hasExplanation: (question._count?.explanations ?? 0) > 0,
    subject: answered ? toQuestionSubject(question) : null,
  };
}

/** Include padrão do Prisma para montar um SafeQuestion completo. */
export function questionInclude(userId: string) {
  return {
    alternatives: true,
    theme: true,
    subtheme: true,
    topic: true,
    userStates: { where: { userId }, take: 1 },
    // Só a CONTAGEM das explicações compartilhadas, nunca o texto: o conteúdo
    // entrega o gabarito e não pode acompanhar o payload da questão. O cliente
    // recebe apenas o booleano, que lhe basta para saber se troca o botão
    // "Explicar com Claude" pelo comentário já pronto.
    _count: {
      select: {
        explanations: {
          where: { userId: null, promptVersion: EXPLANATION_PROMPT_VERSION },
        },
      },
    },
  } as const;
}
