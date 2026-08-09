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

/**
 * Como combinar os três níveis da taxonomia entre si.
 *
 * `ANINHADO` cruza os níveis (tema E subtema E tópico). É o que o banco de
 * questões e o drill-down do ranking precisam: `?theme=x&subtheme=y` descreve
 * um recorte só, refinado nível a nível.
 *
 * `UNIAO` soma os níveis (tema OU subtema OU tópico). É o que o montador de
 * simulado precisa: quem marca vários nós de uma árvore quer a união deles.
 * Cruzar seria pior que inútil — marcar Cardiologia e um tópico de Neurologia
 * daria zero questão, e marcar um tema a mais poderia *diminuir* o resultado.
 */
export type TaxonomyMatch = 'ANINHADO' | 'UNIAO';

export interface QuestionFilters {
  themes?: string[];
  subthemes?: string[];
  topics?: string[];
  /** Padrão: `ANINHADO`. */
  taxonomyMatch?: TaxonomyMatch;
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

/**
 * Cláusula que aceita a questão se ela cair sob *qualquer* nó marcado.
 * Devolve `null` quando nada foi marcado — o caso "banco inteiro".
 */
export function taxonomyUnionWhere(
  themes?: string[],
  subthemes?: string[],
  topics?: string[],
): Prisma.QuestionWhereInput | null {
  const branches: Prisma.QuestionWhereInput[] = [];

  if (themes?.length) branches.push({ theme: { slug: { in: themes } } });
  if (subthemes?.length) branches.push({ subtheme: { slug: { in: subthemes } } });
  if (topics?.length) branches.push({ topic: { slug: { in: topics } } });

  return branches.length ? { OR: branches } : null;
}

export function buildQuestionWhere(
  filters: QuestionFilters,
  userId: string,
): Prisma.QuestionWhereInput {
  const where: Prisma.QuestionWhereInput = {};
  // Condições que precisam conviver sem se sobrescrever. `where.OR` já é do
  // filtro de busca textual, então tudo que também usa OR entra aqui.
  const andConditions: Prisma.QuestionWhereInput[] = [];

  if (!filters.includeMocks) {
    where.exam = { excludeFromStats: false };
  }
  if (filters.taxonomyMatch === 'UNIAO') {
    const scope = taxonomyUnionWhere(filters.themes, filters.subthemes, filters.topics);
    if (scope) andConditions.push(scope);
  } else {
    if (filters.themes?.length) where.theme = { slug: { in: filters.themes } };
    if (filters.subthemes?.length) where.subtheme = { slug: { in: filters.subthemes } };
    if (filters.topics?.length) where.topic = { slug: { in: filters.topics } };
  }
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

  if (filters.favoritesOnly) {
    andConditions.push({ userStates: { some: { userId, favorite: true } } });
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
    andConditions.push({ OR: statusOr });
  }

  if (andConditions.length) {
    where.AND = andConditions;
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

/**
 * Só o tamanho do recorte, sem trazer questão nenhuma. É o que o montador de
 * simulado consulta a cada ajuste de filtro para dizer quantas questões existem.
 */
export async function countQuestions(
  filters: QuestionFilters,
  userId: string,
  client: PrismaClient = defaultPrisma,
): Promise<number> {
  return client.question.count({ where: buildQuestionWhere(filters, userId) });
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
    taxonomyMatch: params.get('taxonomy') === 'uniao' ? 'UNIAO' : 'ANINHADO',
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
