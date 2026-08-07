import type { PrismaClient } from '@prisma/client';
import { prisma as defaultPrisma } from './prisma';

/**
 * Estatísticas de desempenho do usuário — alimenta o dashboard, a barra de
 * progresso e a página de estatísticas (Etapa 3).
 */

export interface UserStats {
  totalQuestions: number;
  answered: number;
  correct: number;
  wrong: number;
  toReview: number;
  untouched: number;
  favorites: number;
  accuracy: number;
  progress: number;
  byTheme: Array<{
    slug: string;
    name: string;
    total: number;
    answered: number;
    correct: number;
    accuracy: number;
  }>;
  byDifficulty: Array<{
    difficulty: string;
    answered: number;
    correct: number;
    accuracy: number;
  }>;
  /** Atividade dos últimos 30 dias, para o gráfico de constância. */
  daily: Array<{ date: string; answered: number; correct: number }>;
  streakDays: number;
}

function pct(part: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((part / total) * 1000) / 10;
}

export async function getUserStats(
  userId: string,
  client: PrismaClient = defaultPrisma,
): Promise<UserStats> {
  const [totalQuestions, states, themes, attempts] = await Promise.all([
    client.question.count({ where: { exam: { excludeFromStats: false } } }),
    client.userQuestionState.findMany({
      where: { userId },
      select: {
        status: true,
        favorite: true,
        correctCount: true,
        attemptCount: true,
        question: {
          select: {
            difficulty: true,
            theme: { select: { slug: true, name: true } },
          },
        },
      },
    }),
    client.theme.findMany({
      orderBy: { order: 'asc' },
      select: {
        slug: true,
        name: true,
        _count: { select: { questions: true } },
      },
    }),
    client.attempt.findMany({
      where: {
        userId,
        createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
      },
      select: { createdAt: true, correct: true },
      orderBy: { createdAt: 'asc' },
    }),
  ]);

  const correct = states.filter((s) => s.status === 'ACERTOU').length;
  const wrong = states.filter((s) => s.status === 'ERROU').length;
  const toReview = states.filter((s) => s.status === 'REVISAR').length;
  const favorites = states.filter((s) => s.favorite).length;
  const answered = states.filter((s) => s.attemptCount > 0).length;

  // Desempenho por tema: cruza o catálogo (para ter o denominador de cada
  // tema) com os estados do usuário.
  const themeProgress = new Map<string, { answered: number; correct: number }>();
  for (const state of states) {
    if (state.attemptCount === 0) continue;
    const slug = state.question.theme.slug;
    const entry = themeProgress.get(slug) ?? { answered: 0, correct: 0 };
    entry.answered += 1;
    if (state.status === 'ACERTOU') entry.correct += 1;
    themeProgress.set(slug, entry);
  }

  const byTheme = themes.map((theme) => {
    const progress = themeProgress.get(theme.slug) ?? { answered: 0, correct: 0 };
    return {
      slug: theme.slug,
      name: theme.name,
      total: theme._count.questions,
      answered: progress.answered,
      correct: progress.correct,
      accuracy: pct(progress.correct, progress.answered),
    };
  });

  const difficultyProgress = new Map<string, { answered: number; correct: number }>();
  for (const state of states) {
    if (state.attemptCount === 0) continue;
    const key = state.question.difficulty;
    const entry = difficultyProgress.get(key) ?? { answered: 0, correct: 0 };
    entry.answered += 1;
    if (state.status === 'ACERTOU') entry.correct += 1;
    difficultyProgress.set(key, entry);
  }

  const byDifficulty = (['FACIL', 'MEDIA', 'DIFICIL'] as const).map((difficulty) => {
    const entry = difficultyProgress.get(difficulty) ?? { answered: 0, correct: 0 };
    return {
      difficulty,
      answered: entry.answered,
      correct: entry.correct,
      accuracy: pct(entry.correct, entry.answered),
    };
  });

  const dailyMap = new Map<string, { answered: number; correct: number }>();
  for (const attempt of attempts) {
    const key = attempt.createdAt.toISOString().slice(0, 10);
    const entry = dailyMap.get(key) ?? { answered: 0, correct: 0 };
    entry.answered += 1;
    if (attempt.correct) entry.correct += 1;
    dailyMap.set(key, entry);
  }

  const daily = Array.from(dailyMap.entries())
    .map(([date, value]) => ({ date, ...value }))
    .sort((a, b) => a.date.localeCompare(b.date));

  // Sequência de dias consecutivos com atividade, contando de hoje para trás.
  const activeDays = new Set(daily.map((d) => d.date));
  let streakDays = 0;
  const cursor = new Date();
  while (activeDays.has(cursor.toISOString().slice(0, 10))) {
    streakDays += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return {
    totalQuestions,
    answered,
    correct,
    wrong,
    toReview,
    untouched: Math.max(0, totalQuestions - answered),
    favorites,
    accuracy: pct(correct, correct + wrong),
    progress: pct(answered, totalQuestions),
    byTheme,
    byDifficulty,
    daily,
    streakDays,
  };
}
