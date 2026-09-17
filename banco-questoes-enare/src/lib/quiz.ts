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
  SIMULADO_INEDITO: 'Prova gerada',
  PROVA_INTEGRA: 'Prova na íntegra',
};

export interface BuildQuizOptions {
  userId: string;
  mode: QuizMode;
  size: number;
  /** Slugs de tema, usados no modo POR_TEMA. */
  themeSlugs?: string[];
  subthemeSlugs?: string[];
  years?: number[];
  difficulties?: Array<'FACIL' | 'MEDIA' | 'DIFICIL'>;
  /** Inclui questões de simulados inéditos no sorteio. Padrão: false. */
  includeMockExams?: boolean;
  /** Id da prova oficial, usado no modo PROVA_INTEGRA. */
  examId?: string;
  client?: PrismaClient;
}

export interface BuildQuizResult {
  quizId: string;
  title: string;
  mode: QuizMode;
  questionIds: string[];
  blueprint?: Array<{ label: string; slug: string; count: number; selected: number }>;
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
    case 'PROVA_INTEGRA': {
      // Reproduz uma prova oficial completa, na ordem original do caderno —
      // sem sorteio e sem truncar por `size`, pelo mesmo motivo do modo
      // SIMULADO_INEDITO: cortar quebraria a prova que o usuário quer refazer.
      if (!options.examId) {
        throw new Error('Escolha qual prova você quer refazer na íntegra.');
      }

      const exam = await client.exam.findUnique({
        where: { id: options.examId },
        select: { id: true, title: true, source: true, excludeFromStats: true },
      });
      if (!exam) {
        throw new Error('Prova não encontrada.');
      }
      // Só provas oficiais transcritas — a prova gerada pelo Claude já tem seu
      // próprio modo (SIMULADO_INEDITO), com o aviso de que é inédita.
      if (exam.source !== 'PROVA_OFICIAL' || exam.excludeFromStats) {
        throw new Error('Esse modo é só para provas oficiais aplicadas pela banca.');
      }

      const questions = await client.question.findMany({
        where: { examId: exam.id },
        orderBy: { number: 'asc' },
        select: { id: true },
      });
      questionIds = questions.map((q) => q.id);
      title = exam.title;
      break;
    }

    case 'SIMULADO_INEDITO': {
      // Puxa as questões da prova gerada mais recente, na ordem do caderno —
      // é uma prova montada, não um sorteio. O `size` é ignorado de propósito:
      // truncar quebraria a distribuição de assuntos que a prova reproduz.
      const latest = await client.exam.findFirst({
        where: { excludeFromStats: true },
        orderBy: { createdAt: 'desc' },
        select: { id: true, title: true },
      });
      if (!latest) {
        throw new Error(
          'Nenhuma prova gerada ainda. Use o botão "Gerar prova de 60 questões" antes de escolher este modo.',
        );
      }
      const questions = await client.question.findMany({
        where: { examId: latest.id },
        orderBy: { number: 'asc' },
        select: { id: true },
      });
      questionIds = questions.map((q) => q.id);
      title = latest.title;
      break;
    }

    case 'POR_INCIDENCIA': {
      // Monta o caderno respeitando a distribuição de assuntos da banca —
      // o mesmo nível do ranking, e não o agregado por tema.
      const analysis = await readAnalysis(client);
      const plan = buildBlueprint(analysis.subjects, size);
      blueprint = [];

      for (const slot of plan) {
        const pool = await client.question.findMany({
          where: { ...baseWhere(options), subthemeId: slot.subthemeId },
          select: { id: true },
        });
        const picked = shuffle(pool).slice(0, slot.count).map((q) => q.id);
        questionIds.push(...picked);
        blueprint.push({
          label: slot.label,
          slug: slot.slug,
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
      // Aceita recorte por tema e/ou por assunto.
      const where = {
        ...baseWhere(options),
        ...(options.themeSlugs?.length ? { theme: { slug: { in: options.themeSlugs } } } : {}),
        ...(options.subthemeSlugs?.length
          ? { subtheme: { slug: { in: options.subthemeSlugs } } }
          : {}),
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
        subthemeSlugs: options.subthemeSlugs ?? [],
        years: options.years ?? [],
        difficulties: options.difficulties ?? [],
        blueprint: blueprint ?? null,
        examId: options.examId ?? null,
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
