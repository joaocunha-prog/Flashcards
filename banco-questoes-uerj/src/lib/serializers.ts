import type {
  Alternative,
  Difficulty,
  Question,
  QuestionSource,
  QuestionStatus,
  Subtheme,
  Theme,
  UserQuestionState,
} from '@prisma/client';

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
 */

export type QuestionWithRelations = Question & {
  alternatives: Alternative[];
  theme: Theme;
  subtheme: Subtheme | null;
  userStates?: UserQuestionState[];
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
  difficulty: Difficulty;
  keywords: string[];
  source: QuestionSource;
  themeFrequency: number;
  /** Estado do usuário; ausente quando a consulta não pediu o progresso. */
  userState: SafeUserState | null;
}

export interface SafeUserState {
  status: QuestionStatus;
  favorite: boolean;
  notes: string | null;
  attemptCount: number;
  correctCount: number;
  lastAnsweredAt: string | null;
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
    difficulty: question.difficulty,
    keywords: question.keywords,
    source: question.source,
    themeFrequency: question.themeFrequency,
    userState: toSafeUserState(question.userStates?.[0]),
  };
}

export function toSafeQuestions(questions: QuestionWithRelations[]): SafeQuestion[] {
  return questions.map(toSafeQuestion);
}

/** Include padrão do Prisma para montar um SafeQuestion completo. */
export function questionInclude(userId: string) {
  return {
    alternatives: true,
    theme: true,
    subtheme: true,
    userStates: { where: { userId }, take: 1 },
  } as const;
}
