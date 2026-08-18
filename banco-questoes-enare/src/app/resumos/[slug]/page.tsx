import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getResumo } from '@/lib/resumos';
import { parseResumoSections } from '@/lib/resumoSections';
import { PracticeResumoButton } from '@/components/PracticeResumoButton';
import { ResumoSections } from '@/components/ResumoSections';

export const dynamic = 'force-dynamic';

export default async function ResumoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resumo = await getResumo(slug);

  if (!resumo) notFound();

  const sections = parseResumoSections(resumo.content);

  return (
    <div>
      <Link
        href="/resumos"
        className="mb-4 inline-block text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
      >
        ← Voltar aos resumos
      </Link>

      <header className="card mb-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-base font-bold text-white dark:bg-brand-500 dark:text-slate-950">
              {resumo.rank}
            </span>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">{resumo.name}</h1>
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{resumo.themeName}</p>
            </div>
          </div>
          {resumo.isPareto && (
            <span className="badge bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
              🔥 Prioridade 80/20
            </span>
          )}
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-lg bg-slate-50 py-3 text-center dark:bg-slate-800/50">
            <dt className="text-xs text-slate-500 dark:text-slate-400">Posição no ranking</dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums">#{resumo.rank}</dd>
          </div>
          <div className="rounded-lg bg-slate-50 py-3 text-center dark:bg-slate-800/50">
            <dt className="text-xs text-slate-500 dark:text-slate-400">Questões no corpus</dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums">{resumo.total}</dd>
          </div>
          <div className="rounded-lg bg-slate-50 py-3 text-center dark:bg-slate-800/50">
            <dt className="text-xs text-slate-500 dark:text-slate-400">Incidência</dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums">{resumo.percent.toFixed(1)}%</dd>
          </div>
          <div className="rounded-lg bg-slate-50 py-3 text-center dark:bg-slate-800/50">
            <dt className="text-xs text-slate-500 dark:text-slate-400">Acumulado 80/20</dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums">
              {resumo.cumulativePercent.toFixed(1)}%
            </dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-2">
          <Link href={`/questoes?subtheme=${resumo.slug}`} className="btn-secondary">
            Questões relacionadas ({resumo.total})
          </Link>
          <PracticeResumoButton subthemeSlug={resumo.slug} size={resumo.total} />
        </div>
      </header>

      <ResumoSections sections={sections} />
    </div>
  );
}
