import Link from 'next/link';
import type { ResumoSummary } from '@/lib/resumos';

/** Card de um assunto na listagem de resumos — dados sempre vindos do ranking ao vivo. */
export function ResumoCard({ resumo }: { resumo: ResumoSummary }) {
  return (
    <Link
      href={`/resumos/${resumo.slug}`}
      className="card flex flex-col gap-3 transition-colors hover:border-brand-300 dark:hover:border-brand-700"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white dark:bg-brand-500 dark:text-slate-950">
          {resumo.rank || '—'}
        </span>
        <div className="flex flex-wrap justify-end gap-1.5">
          {resumo.isPareto && (
            <span className="badge bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
              🔥 80/20
            </span>
          )}
          {resumo.selected && (
            <span className="badge bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
              📌 Selecionado
            </span>
          )}
        </div>
      </div>

      <div className="min-w-0">
        <p className="font-semibold leading-snug">{resumo.name}</p>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{resumo.themeName}</p>
      </div>

      <dl className="mt-1 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="rounded-lg bg-slate-50 py-2 dark:bg-slate-800/50">
          <dt className="text-slate-500 dark:text-slate-400">Questões</dt>
          <dd className="mt-0.5 font-semibold tabular-nums">{resumo.total}</dd>
        </div>
        <div className="rounded-lg bg-slate-50 py-2 dark:bg-slate-800/50">
          <dt className="text-slate-500 dark:text-slate-400">Incidência</dt>
          <dd className="mt-0.5 font-semibold tabular-nums">{resumo.percent.toFixed(1)}%</dd>
        </div>
        <div className="rounded-lg bg-slate-50 py-2 dark:bg-slate-800/50">
          <dt className="text-slate-500 dark:text-slate-400">Acumulado</dt>
          <dd className="mt-0.5 font-semibold tabular-nums">{resumo.cumulativePercent.toFixed(1)}%</dd>
        </div>
      </dl>
    </Link>
  );
}
