'use client';

import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import type { SubjectEntry } from '@/lib/analysis';

/**
 * Ranking de assuntos (tema — subtema). Clicar num assunto revela os tópicos
 * que o compõem, com a incidência de cada um.
 *
 * Ex.: "Neurologia — Síndromes vasculares" abre para
 *      "AVC isquêmico — trombólise", "Aneurisma e hemorragia subaracnoide", …
 */
export function SubjectRanking({
  subjects,
  years,
  emptyMessage,
}: {
  subjects: SubjectEntry[];
  years: number[];
  emptyMessage: string;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (subjects.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">{emptyMessage}</p>
    );
  }

  const maxPercent = Math.max(1, ...subjects.map((subject) => subject.percent));

  return (
    <ul className="divide-y divide-slate-100 dark:divide-slate-800">
      {subjects.map((subject) => {
        const isOpen = expanded === subject.slug;
        const hasTopics = subject.topics.length > 0;

        return (
          <li key={subject.slug}>
            <button
              type="button"
              onClick={() => setExpanded(isOpen ? null : subject.slug)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-3 py-3 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              <span
                className={clsx(
                  'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums',
                  subject.isPareto
                    ? 'bg-brand-600 text-white dark:bg-brand-500 dark:text-slate-950'
                    : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
                )}
              >
                {subject.rank}
              </span>

              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium">
                  <span className="text-slate-500 dark:text-slate-400">{subject.themeName}</span>
                  <span className="mx-1.5 text-slate-300 dark:text-slate-600">—</span>
                  {subject.name}
                </span>
                <span className="mt-1 block h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <span
                    className={clsx(
                      'block h-full rounded-full',
                      subject.isPareto ? 'bg-brand-500' : 'bg-slate-400 dark:bg-slate-600',
                    )}
                    style={{ width: `${(subject.percent / maxPercent) * 100}%` }}
                  />
                </span>
              </span>

              <span className="shrink-0 text-right">
                <span className="block text-sm tabular-nums">
                  {subject.total} q · {subject.percent.toFixed(1)}%
                </span>
                <span className="block text-xs tabular-nums text-slate-400">
                  acum. {subject.cumulativePercent.toFixed(1)}%
                </span>
              </span>

              <svg
                className={clsx(
                  'h-4 w-4 shrink-0 text-slate-400 transition-transform',
                  isOpen && 'rotate-90',
                )}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {isOpen && (
              <div className="animate-fade-in pb-4 pl-10 pr-2">
                <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <span>
                    Dificuldade média {subject.avgDifficulty.toFixed(2)} (1 fácil — 3 difícil)
                  </span>
                  {years.length > 0 && (
                    <span>
                      Por ano:{' '}
                      {years
                        .map((year) => `${year}: ${subject.perYear[String(year)] ?? 0}`)
                        .join('  ·  ')}
                    </span>
                  )}
                </div>

                {hasTopics ? (
                  <ul className="space-y-1.5">
                    {subject.topics.map((topic) => (
                      <li key={topic.slug} className="flex items-center gap-3 text-sm">
                        <Link
                          href={`/questoes?topic=${encodeURIComponent(topic.slug)}`}
                          className="min-w-0 flex-1 truncate text-slate-700 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                        >
                          <span className="mr-2 text-xs tabular-nums text-slate-400">
                            {topic.rank}.
                          </span>
                          {topic.name}
                        </Link>
                        <span className="h-1.5 w-16 shrink-0 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                          <span
                            className="block h-full rounded-full bg-brand-400"
                            style={{ width: `${topic.percentWithinSubject}%` }}
                          />
                        </span>
                        <span className="w-24 shrink-0 text-right text-xs tabular-nums text-slate-500 dark:text-slate-400">
                          {topic.total} q · {topic.percentWithinSubject.toFixed(0)}%
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    As questões deste assunto ainda não têm tópico classificado. Informe o campo{' '}
                    <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">topic</code> na
                    importação para ver este detalhamento.
                  </p>
                )}

                <Link
                  href={`/questoes?subtheme=${subject.slug}`}
                  className="mt-3 inline-block text-sm font-medium text-brand-600 dark:text-brand-400"
                >
                  Resolver questões deste assunto →
                </Link>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
