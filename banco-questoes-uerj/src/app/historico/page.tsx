import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';
import { QUIZ_MODE_LABEL } from '@/lib/quiz';
import { DifficultyBadge, EmptyState, PageHeader, StatusBadge } from '@/components/ui';

export const dynamic = 'force-dynamic';

const PAGE_SIZE = 40;

export default async function HistoricoPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam ?? '1') || 1);
  const userId = await getCurrentUserId();

  const [total, attempts] = await Promise.all([
    prisma.attempt.count({ where: { userId } }),
    prisma.attempt.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      include: {
        quiz: { select: { id: true, title: true, mode: true } },
        question: {
          select: {
            id: true,
            year: true,
            number: true,
            difficulty: true,
            statement: true,
            theme: { select: { name: true } },
          },
        },
      },
    }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div>
      <PageHeader title="Histórico" subtitle={`${total} respostas registradas`} />

      {attempts.length === 0 ? (
        <EmptyState
          title="Nenhuma resposta ainda"
          description="Cada questão respondida entra aqui, com data, resultado e o simulado de origem."
          action={
            <Link href="/questoes" className="btn-primary">
              Começar a resolver
            </Link>
          }
        />
      ) : (
        <>
          <ul className="space-y-2">
            {attempts.map((attempt) => (
              <li key={attempt.id}>
                <Link
                  href={`/questoes/${attempt.question.id}`}
                  className="card block py-3 transition-colors hover:border-brand-400 dark:hover:border-brand-600"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-mono text-slate-400">
                      {attempt.question.year} · Q{attempt.question.number}
                    </span>
                    <span className="badge bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {attempt.question.theme.name}
                    </span>
                    <DifficultyBadge difficulty={attempt.question.difficulty} />
                    <StatusBadge status={attempt.correct ? 'ACERTOU' : 'ERROU'} />
                    {attempt.quiz && (
                      <span className="text-slate-400">
                        {QUIZ_MODE_LABEL[attempt.quiz.mode]}
                      </span>
                    )}
                    <span className="ml-auto tabular-nums text-slate-400">
                      {new Date(attempt.createdAt).toLocaleString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                    {attempt.question.statement}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <nav className="mt-6 flex items-center justify-center gap-2" aria-label="Paginação">
              {page > 1 && (
                <Link href={`/historico?page=${page - 1}`} className="btn-secondary">
                  Anterior
                </Link>
              )}
              <span className="px-3 text-sm tabular-nums text-slate-500 dark:text-slate-400">
                Página {page} de {totalPages}
              </span>
              {page < totalPages && (
                <Link href={`/historico?page=${page + 1}`} className="btn-secondary">
                  Próxima
                </Link>
              )}
            </nav>
          )}
        </>
      )}
    </div>
  );
}
