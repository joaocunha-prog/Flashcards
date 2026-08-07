import Link from 'next/link';
import type { SafeQuestion } from '@/lib/serializers';
import { DifficultyBadge, StatusBadge } from './ui';

/** Cartões de questão usados no banco, nas favoritas e nos resultados de busca. */
export function QuestionList({ questions }: { questions: SafeQuestion[] }) {
  return (
    <ul className="space-y-3">
      {questions.map((question) => (
        <li key={question.id}>
          <Link
            href={`/questoes/${question.id}`}
            className="card block transition-colors hover:border-brand-400 dark:hover:border-brand-600"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-mono text-slate-400">
                {question.year} · Q{question.number}
              </span>
              <span className="badge bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {question.theme.name}
              </span>
              {question.subtheme && (
                <span className="text-slate-400">{question.subtheme.name}</span>
              )}
              <DifficultyBadge difficulty={question.difficulty} />
              {question.userState && <StatusBadge status={question.userState.status} />}
              {question.userState?.favorite && (
                <span className="text-amber-500" title="Favorita">
                  ★
                </span>
              )}
              <span className="ml-auto text-slate-400">
                incidência do tema {question.themeFrequency.toFixed(1)}%
              </span>
            </div>

            <p className="line-clamp-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {question.statement}
            </p>

            {question.keywords.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {question.keywords.slice(0, 5).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded bg-slate-50 px-1.5 py-0.5 text-[11px] text-slate-500 dark:bg-slate-800/60 dark:text-slate-400"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Pagination({
  page,
  totalPages,
  buildHref,
}: {
  page: number;
  totalPages: number;
  buildHref: (page: number) => string;
}) {
  if (totalPages <= 1) return null;

  return (
    <nav className="mt-6 flex items-center justify-center gap-2" aria-label="Paginação">
      {page > 1 && (
        <Link href={buildHref(page - 1)} className="btn-secondary">
          Anterior
        </Link>
      )}
      <span className="px-3 text-sm tabular-nums text-slate-500 dark:text-slate-400">
        Página {page} de {totalPages}
      </span>
      {page < totalPages && (
        <Link href={buildHref(page + 1)} className="btn-secondary">
          Próxima
        </Link>
      )}
    </nav>
  );
}
