import Link from 'next/link';
import { getCurrentUserId } from '@/lib/auth';
import { getUserStats } from '@/lib/stats';
import { readAnalysis } from '@/lib/analysis';
import { PageHeader, ProgressBar, StatCard } from '@/components/ui';

export const dynamic = 'force-dynamic';

export default async function EstatisticasPage() {
  const userId = await getCurrentUserId();
  const [stats, analysis] = await Promise.all([getUserStats(userId), readAnalysis()]);

  const maxDaily = Math.max(1, ...stats.daily.map((day) => day.answered));

  // Cruza desempenho com incidência: errar num assunto muito cobrado custa
  // mais caro do que errar num assunto raro.
  const priority = stats.bySubject
    .map((subject) => {
      const incidence = analysis.subjects.find((s) => s.slug === subject.slug)?.percent ?? 0;
      const gap = subject.answered === 0 ? 100 : 100 - subject.accuracy;
      return { ...subject, incidence, score: (gap * incidence) / 100 };
    })
    .filter((subject) => subject.incidence > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return (
    <div>
      <PageHeader title="Estatísticas" subtitle="Seu desempenho no banco" />

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Respondidas" value={stats.answered} hint={`de ${stats.totalQuestions}`} />
        <StatCard label="Acertos" value={stats.correct} tone="positive" />
        <StatCard label="Erros" value={stats.wrong} tone="negative" />
        <StatCard
          label="Aproveitamento"
          value={`${stats.accuracy}%`}
          tone={stats.accuracy >= 70 ? 'positive' : stats.accuracy >= 50 ? 'neutral' : 'negative'}
        />
      </section>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <section className="card">
          <h2 className="mb-4 font-semibold">Aproveitamento por dificuldade</h2>
          <ul className="space-y-4">
            {stats.byDifficulty.map((entry) => (
              <li key={entry.difficulty}>
                <div className="flex justify-between text-sm">
                  <span>
                    {entry.difficulty === 'FACIL'
                      ? 'Fácil'
                      : entry.difficulty === 'MEDIA'
                        ? 'Média'
                        : 'Difícil'}
                  </span>
                  <span className="tabular-nums text-slate-500 dark:text-slate-400">
                    {entry.answered === 0
                      ? '—'
                      : `${entry.accuracy}% (${entry.correct}/${entry.answered})`}
                  </span>
                </div>
                <ProgressBar
                  className="mt-1.5"
                  value={entry.accuracy}
                  tone={entry.accuracy >= 70 ? 'emerald' : entry.accuracy >= 50 ? 'amber' : 'rose'}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2 className="mb-1 font-semibold">Prioridade de estudo</h2>
          <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">
            Combina o quanto o assunto cai na prova com o quanto você ainda erra nele.
          </p>
          {priority.length === 0 ? (
            <p className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">
              Aparece quando houver questões no banco.
            </p>
          ) : (
            <ol className="space-y-2">
              {priority.map((subject) => (
                <li key={subject.slug} className="flex items-center justify-between gap-3 text-sm">
                  <Link
                    href={`/questoes?subtheme=${subject.slug}`}
                    className="min-w-0 flex-1 truncate hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {subject.label}
                  </Link>
                  <span className="shrink-0 text-xs tabular-nums text-slate-500 dark:text-slate-400">
                    {subject.incidence.toFixed(1)}% da prova ·{' '}
                    {subject.answered === 0 ? 'não iniciado' : `${subject.accuracy}% de acerto`}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </section>
      </div>

      <section className="card mt-4">
        <h2 className="mb-4 font-semibold">Atividade dos últimos 30 dias</h2>
        {stats.daily.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Nenhuma questão respondida no período.
          </p>
        ) : (
          <div className="-mx-5 overflow-x-auto px-5">
            <div className="flex min-w-[560px] items-end gap-1" style={{ height: 140 }}>
              {stats.daily.map((day) => (
                <div key={day.date} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="flex w-full flex-col justify-end rounded-t bg-slate-200 dark:bg-slate-800"
                    style={{ height: `${(day.answered / maxDaily) * 110}px` }}
                    title={`${day.date}: ${day.answered} respondidas, ${day.correct} corretas`}
                  >
                    <div
                      className="w-full rounded-t bg-emerald-500"
                      style={{
                        height: `${day.answered === 0 ? 0 : (day.correct / day.answered) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-[10px] tabular-nums text-slate-400">
                    {day.date.slice(8)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          Barra cheia = questões respondidas · trecho verde = acertos.
        </p>
      </section>

      <section className="card mt-4">
        <h2 className="mb-4 font-semibold">Cobertura por assunto</h2>
        <div className="-mx-5 overflow-x-auto px-5">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <th className="py-2 pr-2 font-semibold">Assunto</th>
                <th className="py-2 pr-2 text-right font-semibold">Feitas</th>
                <th className="py-2 pr-2 text-right font-semibold">Acertos</th>
                <th className="py-2 pr-2 text-right font-semibold">Aproveitamento</th>
                <th className="py-2 font-semibold">Cobertura</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {stats.bySubject.map((subject) => (
                <tr key={subject.slug}>
                  <td className="py-2 pr-2">
                    <Link
                      href={`/questoes?subtheme=${subject.slug}`}
                      className="hover:text-brand-600 dark:hover:text-brand-400"
                    >
                      <span className="text-slate-500 dark:text-slate-400">
                        {subject.label.split(' — ')[0]}
                      </span>
                      <span className="mx-1.5 text-slate-300 dark:text-slate-600">—</span>
                      {subject.name}
                    </Link>
                  </td>
                  <td className="py-2 pr-2 text-right tabular-nums">
                    {subject.answered}/{subject.total}
                  </td>
                  <td className="py-2 pr-2 text-right tabular-nums">{subject.correct}</td>
                  <td className="py-2 pr-2 text-right tabular-nums">
                    {subject.answered === 0 ? '—' : `${subject.accuracy}%`}
                  </td>
                  <td className="py-2">
                    <ProgressBar value={subject.answered} max={subject.total} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
