import type { PrismaClient, QuizMode } from '@prisma/client';
import { prisma as defaultPrisma } from './prisma';
import { buildBlueprint, readAnalysis } from './analysis';

/**
 * Gerador de simulados (Etapa 5).
 *
 * Cada modo é uma estratégia de seleção sobre o mesmo banco. Todos devolvem
 * uma lista de ids de questão; a criação do Quiz em si é comum a todos.
 */

export const QUIZ_MODE_LABEL: Record<QuizMode, string> = {
  ALEATORIO: 'Aleatório',
  POR_TEMA: 'Por tema',
  POR_INCIDENCIA: 'Por incidência',
  APENAS_ERRADAS: 'Apenas questões erradas',
  APENAS_REVISAO: 'Apenas revisões',
  SIMULADO_INEDITO: 'Simulado inédito 2026',
};

export interface BuildQuizOptions {
  userId: string;
  mode: QuizMode;
  size: number;
  /** Slugs de tema, usados no modo POR_TEMA. */
  themeSlugs?: string[];
  years?: number[];
  difficulties?: Array<'FACIL' | 'MEDIA' | 'DIFICIL'>;
  /** Inclui questões de simulados inéditos no sorteio. Padrão: false. */
  includeMockExams?: boolean;
  client?: PrismaClient;
}

export interface BuildQuizResult {
  quizId: string;
  title: string;
  mode: QuizMode;
  questionIds: string[];
  blueprint?: Array<{ slug: string; name: string; count: number; selected: number }>;
}

/** Embaralhamento Fisher-Yates. */
function shuffle<T>(items: T[]): T[] {
  const result = items.slice();
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function baseWhere(options: BuildQuizOptions) {
  const where: Record<string, unknown> = {};

  if (!options.includeMockExams) {
    where.exam = { excludeFromStats: false };
  }
  if (options.years?.length) {
    where.year = { in: options.years };
  }
  if (options.difficulties?.length) {
    where.difficulty = { in: options.difficulties };
  }

  return where;
}

export async function buildQuiz(options: BuildQuizOptions): Promise<BuildQuizResult> {
  const client = options.client ?? defaultPrisma;
  const size = Math.max(1, Math.min(options.size, 200));

  let questionIds: string[] = [];
  let blueprint: BuildQuizResult['blueprint'];
  let title = QUIZ_MODE_LABEL[options.mode];

  switch (options.mode) {
    case 'SIMULADO_INEDITO': {
      // Puxa exclusivamente as questões dos simulados inéditos já cadastrados,
      // na ordem original do caderno — é uma prova montada, não um sorteio.
      // O `size` é ignorado de propósito: um caderno inédito vale inteiro, e
      // truncá-lo quebraria a distribuição temática que ele reproduz.
      const questions = await client.question.findMany({
        where: { exam: { excludeFromStats: true } },
        orderBy: [{ year: 'desc' }, { number: 'asc' }],
        select: { id: true },
      });
      questionIds = questions.map((q) => q.id);
      title = 'Simulado Inédito UERJ 2026 — R+ Clínica Médica';
      break;
    }

    case 'POR_INCIDENCIA': {
      // Monta o caderno respeitando a distribuição temática histórica.
      const analysis = await readAnalysis(client);
      const plan = buildBlueprint(analysis.themes, size);
      blueprint = [];

      for (const slot of plan) {
        const pool = await client.question.findMany({
          where: { ...baseWhere(options), themeId: slot.themeId },
          select: { id: true },
        });
        const picked = shuffle(pool).slice(0, slot.count).map((q) => q.id);
        questionIds.push(...picked);
        blueprint.push({
          slug: slot.slug,
          name: slot.name,
          count: slot.count,
          selected: picked.length,
        });
      }

      // Se algum tema tinha menos questões que o previsto, completa com o
      // restante do banco para o simulado sair no tamanho pedido.
      if (questionIds.length < size) {
        const filler = await client.question.findMany({
          where: { ...baseWhere(options), id: { notIn: questionIds } },
          select: { id: true },
        });
        questionIds.push(...shuffle(filler).slice(0, size - questionIds.length).map((q) => q.id));
      }

      questionIds = shuffle(questionIds);
      break;
    }

    case 'POR_TEMA': {
      const where = {
        ...baseWhere(options),
        ...(options.themeSlugs?.length ? { theme: { slug: { in: options.themeSlugs } } } : {}),
      };
      const pool = await client.question.findMany({ where, select: { id: true } });
      questionIds = shuffle(pool).slice(0, size).map((q) => q.id);
      break;
    }

    case 'APENAS_ERRADAS': {
      const states = await client.userQuestionState.findMany({
        where: { userId: options.userId, status: 'ERROU' },
        select: { questionId: true },
      });
      const candidateIds = states.map((s) => s.questionId);
      const pool = await client.question.findMany({
        where: { ...baseWhere(options), id: { in: candidateIds } },
        select: { id: true },
      });
      questionIds = shuffle(pool).slice(0, size).map((q) => q.id);
      break;
    }

    case 'APENAS_REVISAO': {
      const states = await client.userQuestionState.findMany({
        where: { userId: options.userId, status: 'REVISAR' },
        select: { questionId: true },
      });
      const candidateIds = states.map((s) => s.questionId);
      const pool = await client.question.findMany({
        where: { ...baseWhere(options), id: { in: candidateIds } },
        select: { id: true },
      });
      questionIds = shuffle(pool).slice(0, size).map((q) => q.id);
      break;
    }

    case 'ALEATORIO':
    default: {
      const pool = await client.question.findMany({
        where: baseWhere(options),
        select: { id: true },
      });
      questionIds = shuffle(pool).slice(0, size).map((q) => q.id);
      break;
    }
  }

  if (questionIds.length === 0) {
    throw new Error(
      'Nenhuma questão disponível para os critérios escolhidos. Ajuste os filtros ou resolva mais questões.',
    );
  }

  const quiz = await client.quiz.create({
    data: {
      userId: options.userId,
      title,
      mode: options.mode,
      config: {
        size,
        requestedSize: options.size,
        themeSlugs: options.themeSlugs ?? [],
        years: options.years ?? [],
        difficulties: options.difficulties ?? [],
        blueprint: blueprint ?? null,
      },
      items: {
        create: questionIds.map((questionId, index) => ({
          questionId,
          position: index + 1,
        })),
      },
    },
  });

  return { quizId: quiz.id, title, mode: options.mode, questionIds, blueprint };
}
