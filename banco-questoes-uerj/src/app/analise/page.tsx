import Link from 'next/link';
import { readAnalysis } from '@/lib/analysis';
import { PageHeader, SourceNotice, StatCard } from '@/components/ui';

export const dynamic = 'force-dynamic';

/**
 * Etapa 1 — análise da banca: incidência por tema/subtema, ranking e a lista
 * de estudo 80/20. Tudo lido do último snapshot; nenhum número é fixo no código.
 */
export default async function AnalisePage() {
  const analysis = await readAnalysis();
  const maxPercent = Math.max(1, ...analysis.themes.map((t) => t.percent));

  const difficultyTotal =
    analysis.difficultyDistribution.FACIL +
    analysis.difficultyDistribution.MEDIA +
    analysis.difficultyDistribution.DIFICIL;

  return (
    <div>
      <PageHeader
        title="Análise da banca"
        subtitle={`Corpus: ${analysis.totalQuestions} questões · ${analysis.totalExams} provas · ${analysis.years.join(', ')}`}
      />

      <SourceNotice />

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Questões analisadas" value={analysis.totalQuestions} />
        <StatCard label="Temas mapeados" value={analysis.themes.length} />
        <StatCard
          label="Temas no corte 80/20"
          value={analysis.paretoThemes.length}
          hint={`cobrem ${analysis.paretoThemes.at(-1)?.cumulativePercent.toFixed(1) ?? 0}% da prova`}
          tone="brand"
        />
        <StatCard label="Subtemas mapeados" value={analysis.subthemes.length} />
      </section>

      <section className="mt-6 card">
        <h2 className="mb-1 font-semibold">Lista de estudo 80/20</h2>
        <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
          Temas ordenados por incidência até somarem {analysis.paretoCutoff}% do acumulado. Estudar
          nesta ordem é o caminho de maior retorno esperado por hora investida.
        </p>

        <ol className="space-y-2">
          {analysis.paretoThemes.map((theme) => (
            <li
              key={theme.slug}
              className="flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 p-3 dark:border-slate-800"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white dark:bg-brand-500 dark:text-slate-950">
                {theme.rank}
              </span>
              <Link
                href={`/questoes?theme=${theme.slug}`}
                className="flex-1 truncate font-medium hover:text-brand-600 dark:hover:text-brand-400"
              >
                {theme.name}
              </Link>
              <span className="text-sm tabular-nums text-slate-500 dark:text-slate-400">
                {theme.total} q · {theme.percent.toFixed(1)}%
              </span>
              <span className="text-xs tabular-nums text-slate-400">
                acum. {theme.cumulativePercent.toFixed(1)}%
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-4 card">
        <h2 className="mb-4 font-semibold">Ranking de incidência por tema</h2>
        <div className="-mx-5 overflow-x-auto px-5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <th className="py-2 pr-2 font-semibold">#</th>
                <th className="py-2 pr-2 font-semibold">Tema</th>
                <th className="py-2 pr-2 text-right font-semibold">Questões</th>
                <th className="py-2 pr-2 text-right font-semibold">%</th>
                <th className="py-2 pr-2 font-semibold">Incidência</th>
                <th className="py-2 pr-2 text-right font-semibold">Dificuldade média</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {analysis.themes.map((theme) => (
                <tr key={theme.slug}>
                  <td className="py-2 pr-2 tabular-nums text-slate-400">
                    {theme.isPareto && <span className="mr-1 text-brand-500">★</span>}
                    {theme.rank}
                  </td>
                  <td className="py-2 pr-2">
                    <Link
                      href={`/questoes?theme=${theme.slug}`}
                      className="font-medium hover:text-brand-600 dark:hover:text-brand-400"
                    >
                      {theme.name}
                    </Link>
                    <div className="mt-0.5 text-xs text-slate-400">
                      {analysis.years
                        .map((year) => `${year}: ${theme.perYear[String(year)] ?? 0}`)
                        .join('  ·  ')}
                    </div>
                  </td>
                  <td className="py-2 pr-2 text-right tabular-nums">{theme.total}</td>
                  <td className="py-2 pr-2 text-right tabular-nums">{theme.percent.toFixed(1)}%</td>
                  <td className="py-2 pr-2">
                    <div className="h-2 w-full min-w-[80px] overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className={theme.isPareto ? 'h-full bg-brand-500' : 'h-full bg-slate-400'}
                        style={{ width: `${(theme.percent / maxPercent) * 100}%` }}
                      />
                    </div>
                  </td>
                  <td className="py-2 pr-2 text-right tabular-nums text-slate-500 dark:text-slate-400">
                    {theme.avgDifficulty.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          Dificuldade média numa escala de 1 (fácil) a 3 (difícil).
        </p>
      </section>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <section className="card lg:col-span-2">
          <h2 className="mb-4 font-semibold">Subtemas mais cobrados</h2>
          <ol className="space-y-2">
            {analysis.subthemes.slice(0, 20).map((sub) => (
              <li key={sub.slug} className="flex items-center justify-between gap-3 text-sm">
                <span className="min-w-0 flex-1 truncate">
                  <span className="mr-2 tabular-nums text-slate-400">{sub.rank}.</span>
                  <Link
                    href={`/questoes?subtheme=${sub.slug}`}
                    className="hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {sub.name}
                  </Link>
                  <span className="ml-2 text-xs text-slate-400">{sub.themeName}</span>
                </span>
                <span className="shrink-0 tabular-nums text-slate-500 dark:text-slate-400">
                  {sub.total} q · {sub.percent.toFixed(1)}%
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="card">
          <h2 className="mb-4 font-semibold">Perfil de dificuldade</h2>
          <ul className="space-y-3">
            {(
              [
                ['FACIL', 'Fácil', 'bg-emerald-500'],
                ['MEDIA', 'Média', 'bg-amber-500'],
                ['DIFICIL', 'Difícil', 'bg-rose-500'],
              ] as const
            ).map(([key, label, color]) => {
              const count = analysis.difficultyDistribution[key];
              const percent = difficultyTotal === 0 ? 0 : (count / difficultyTotal) * 100;
              return (
                <li key={key}>
                  <div className="flex justify-between text-sm">
                    <span>{label}</span>
                    <span className="tabular-nums text-slate-500 dark:text-slate-400">
                      {count} ({percent.toFixed(0)}%)
                    </span>
                  </div>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className={`h-full ${color}`} style={{ width: `${percent}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 rounded-lg bg-slate-50 p-3 text-xs leading-relaxed text-slate-600 dark:bg-slate-800/50 dark:text-slate-400">
            <p className="font-medium text-slate-700 dark:text-slate-300">Como atualizar</p>
            <p className="mt-1">
              Importe uma prova nova com{' '}
              <code className="rounded bg-slate-200 px-1 dark:bg-slate-700">
                npm run exam:import -- prova.json
              </code>{' '}
              e todos os números desta página são recalculados automaticamente.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
