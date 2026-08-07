import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';
import { listQuestions, parseFilters } from '@/lib/questions';
import { QuestionFilters } from '@/components/QuestionFilters';
import { Pagination, QuestionList } from '@/components/QuestionList';
import { EmptyState, PageHeader } from '@/components/ui';

export const dynamic = 'force-dynamic';

type SearchParams = Record<string, string | string[] | undefined>;

/** Converte os searchParams do Next em URLSearchParams (que suporta repetição). */
function toURLSearchParams(params: SearchParams): URLSearchParams {
  const result = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) value.forEach((item) => result.append(key, item));
    else result.append(key, value);
  }
  return result;
}

export default async function QuestoesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = toURLSearchParams(await searchParams);
  const userId = await getCurrentUserId();
  const filters = parseFilters(params);

  const [result, themes, yearRows] = await Promise.all([
    listQuestions(filters, userId),
    prisma.theme.findMany({
      orderBy: { order: 'asc' },
      select: { slug: true, name: true, _count: { select: { questions: true } } },
    }),
    prisma.question.findMany({
      distinct: ['year'],
      select: { year: true },
      orderBy: { year: 'desc' },
    }),
  ]);

  function buildHref(page: number) {
    const next = new URLSearchParams(params.toString());
    next.set('page', String(page));
    return `/questoes?${next.toString()}`;
  }

  return (
    <div>
      <PageHeader
        title="Banco de questões"
        subtitle={`${result.pagination.total} questões encontradas`}
      />

      <QuestionFilters
        themes={themes
          .filter((theme) => theme._count.questions > 0)
          .map((theme) => ({
            slug: theme.slug,
            name: theme.name,
            count: theme._count.questions,
          }))}
        years={yearRows.map((row) => row.year)}
      />

      {result.questions.length === 0 ? (
        <EmptyState
          title="Nenhuma questão encontrada"
          description="Ajuste os filtros ou limpe a busca para ver o banco completo."
        />
      ) : (
        <>
          <QuestionList questions={result.questions} />
          <Pagination
            page={result.pagination.page}
            totalPages={result.pagination.totalPages}
            buildHref={buildHref}
          />
        </>
      )}
    </div>
  );
}
