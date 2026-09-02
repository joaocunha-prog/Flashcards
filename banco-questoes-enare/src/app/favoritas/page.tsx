import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';
import { listQuestions, parseFilters } from '@/lib/questions';
import { QuestionFilters } from '@/components/QuestionFilters';
import { Pagination, QuestionList } from '@/components/QuestionList';
import { EmptyState, PageHeader } from '@/components/ui';

export const dynamic = 'force-dynamic';

type SearchParams = Record<string, string | string[] | undefined>;

export default async function FavoritasPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const raw = await searchParams;
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(raw)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) value.forEach((item) => params.append(key, item));
    else params.append(key, value);
  }
  // A página inteira é o recorte de favoritas: o filtro é imposto aqui, não
  // fica à mercê do que veio na URL.
  params.set('favorite', 'true');

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
    return `/favoritas?${next.toString()}`;
  }

  return (
    <div>
      <PageHeader
        title="Questões favoritas"
        subtitle={`${result.pagination.total} questões marcadas`}
      />

      <QuestionFilters
        themes={themes
          .filter((theme) => theme._count.questions > 0)
          .map((theme) => ({ slug: theme.slug, name: theme.name, count: theme._count.questions }))}
        years={yearRows.map((row) => row.year)}
        basePath="/favoritas"
        lockFavorites
      />

      {result.questions.length === 0 ? (
        <EmptyState
          title="Nenhuma favorita ainda"
          description="Use o botão ☆ Favoritar na tela de uma questão para guardá-la aqui."
          action={
            <Link href="/questoes" className="btn-primary">
              Ir para o banco
            </Link>
          }
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
