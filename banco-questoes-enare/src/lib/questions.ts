import type { Prisma, PrismaClient } from '@prisma/client';
import { prisma as defaultPrisma } from './prisma';
import { questionInclude, toSafeQuestions, type SafeQuestion } from './serializers';

/**
 * Consulta do banco de questões — compartilhada pela rota de API e pelas
 * páginas server-side, para que filtro e paginação se comportem igual nos dois.
 */

export type Difficulty = 'FACIL' | 'MEDIA' | 'DIFICIL';
export type Status = 'NAO_FEITA' | 'ACERTOU' | 'ERROU' | 'REVISAR';
export type SortOption = 'recent' | 'oldest' | 'incidence';

export interface QuestionFilters {
  themes?: string[];
  subthemes?: string[];
  topics?: string[];
  years?: number[];
  difficulties?: Difficulty[];
  statuses?: Status[];
  search?: string;
  favoritesOnly?: boolean;
  includeMocks?: boolean;
  sort?: SortOption;
  page?: number;
  pageSize?: number;
}

export function buildQuestionWhere(
  filters: QuestionFilters,
  userId: string,
): Prisma.QuestionWhereInput {
  const where: Prisma.QuestionWhereInput = {};

  if (!filters.includeMocks) {
    where.exam = { excludeFromStats: false };
  }
  if (filters.themes?.length) where.theme = { slug: { in: filters.themes } };
  if (filters.subthemes?.length) where.subtheme = { slug: { in: filters.subthemes } };
  if (filters.topics?.length) where.topic = { slug: { in: filters.topics } };
  if (filters.years?.length) where.year = { in: filters.years };
  if (filters.difficulties?.length) where.difficulty = { in: filters.difficulties };

  const search = filters.search?.trim();
  if (search) {
    where.OR = [
      { statement: { contains: search, mode: 'insensitive' } },
      { keywords: { has: search.toLowerCase() } },
      { theme: { name: { contains: search, mode: 'insensitive' } } },
      { subtheme: { name: { contains: search, mode: 'insensitive' } } },
      { topic: { name: { contains: search, mode: 'insensitive' } } },
    ];
  }

  const stateConditions: Prisma.QuestionWhereInput[] = [];

  if (filters.favoritesOnly) {
    stateConditions.push({ userStates: { some: { userId, favorite: true } } });
  }

  if (filters.statuses?.length) {
    // "Não feita" abrange tanto o status explícito quanto a ausência de
    // qualquer registro de progresso — daí o ramo com `none`.
    const wantsUntouched = filters.statuses.includes('NAO_FEITA');
    const others = filters.statuses.filter((s) => s !== 'NAO_FEITA');
    const statusOr: Prisma.QuestionWhereInput[] = [];

    if (wantsUntouched) {
      statusOr.push({ userStates: { none: { userId } } });
      statusOr.push({ userStates: { some: { userId, status: 'NAO_FEITA' } } });
    }
    if (others.length) {
      statusOr.push({ userStates: { some: { userId, status: { in: others } } } });
    }
    stateConditions.push({ OR: statusOr });
  }

  if (stateConditions.length) {
    where.AND = stateConditions;
  }

  return where;
}

function buildOrderBy(sort: SortOption = 'recent'): Prisma.QuestionOrderByWithRelationInput[] {
  if (sort === 'incidence') {
    // Incidência do assunto, que é o nível do ranking.
    return [{ subjectFrequency: 'desc' }, { year: 'desc' }, { number: 'asc' }];
  }
  if (sort === 'oldest') {
    return [{ year: 'asc' }, { number: 'asc' }];
  }
  return [{ year: 'desc' }, { number: 'asc' }];
}

export interface ListQuestionsResult {
  questions: SafeQuestion[];
  pagination: { page: number; pageSize: number; total: number; totalPages: number };
}

export async function listQuestions(
  filters: QuestionFilters,
  userId: string,
  client: PrismaClient = defaultPrisma,
): Promise<ListQuestionsResult> {
  const page = Math.max(1, filters.page ?? 1);
  const pageSize = Math.min(50, Math.max(1, filters.pageSize ?? 20));
  const where = buildQuestionWhere(filters, userId);

  const [total, questions] = await Promise.all([
    client.question.count({ where }),
    client.question.findMany({
      where,
      orderBy: buildOrderBy(filters.sort),
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: questionInclude(userId),
    }),
  ]);

  return {
    questions: toSafeQuestions(questions),
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.max(1, Math.ceil(total / pageSize)),
    },
  };
}

/** Lê os filtros a partir de query params (URL da página ou da API). */
export function parseFilters(params: URLSearchParams): QuestionFilters {
  const difficulties = params
    .getAll('difficulty')
    .filter((d): d is Difficulty => d === 'FACIL' || d === 'MEDIA' || d === 'DIFICIL');

  const statuses = params
    .getAll('status')
    .filter((s): s is Status =>
      ['NAO_FEITA', 'ACERTOU', 'ERROU', 'REVISAR'].includes(s),
    );

  const sortParam = params.get('sort');
  const sort: SortOption =
    sortParam === 'oldest' || sortParam === 'incidence' ? sortParam : 'recent';

  return {
    themes: params.getAll('theme').filter(Boolean),
    subthemes: params.getAll('subtheme').filter(Boolean),
    topics: params.getAll('topic').filter(Boolean),
    years: params.getAll('year').map(Number).filter((y) => !Number.isNaN(y)),
    difficulties,
    statuses,
    search: params.get('q') ?? undefined,
    favoritesOnly: params.get('favorite') === 'true',
    includeMocks: params.get('includeMocks') === 'true',
    sort,
    page: Number(params.get('page') ?? '1') || 1,
    pageSize: Number(params.get('pageSize') ?? '20') || 20,
  };
}
