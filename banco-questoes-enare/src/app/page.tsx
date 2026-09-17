import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';
import { getUserStats } from '@/lib/stats';
import { readAnalysis } from '@/lib/analysis';
import { EmptyBankNotice, PageHeader, ProgressBar, StatCard, StatusBadge } from '@/components/ui';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const userId = await getCurrentUserId();
  const [stats, analysis, recentAttempts] = await Promise.all([
    getUserStats(userId),
    readAnalysis(),
    prisma.attempt.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 8,
      include: {
        question: {
          select: { id: true, year: true, number: true, theme: { select: { name: true } } },
        },
      },
    }),
  ]);

  const weakestSubjects = stats.bySubject
    .filter((subject) => subject.answered >= 2)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 5);

  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="ENARE"
        action={
          <div className="flex gap-2">
            <Link href="/questoes" className="btn-secondary">
              Banco de questões
            </Link>
            <Link href="/simulados" className="btn-primary">
              Novo simulado
            </Link>
          </div>
        }
      />

      {stats.totalQuestions === 0 && <EmptyBankNotice />}

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          label="Progresso"
          value={`${stats.progress}%`}
          hint={`${stats.answered} de ${stats.totalQuestions} questões`}
          tone="brand"
        />
        <StatCard
          label="Aproveitamento"
          value={`${stats.accuracy}%`}
          hint={`${stats.correct} acertos · ${stats.wrong} erros`}
          tone={stats.accuracy >= 70 ? 'positive' : stats.accuracy >= 50 ? 'neutral' : 'negative'}
        />
        <StatCard label="Para revisar" value={stats.toReview} hint="marcadas como revisar" />
        <StatCard
          label="Sequência"
          value={`${stats.streakDays}d`}
          hint={stats.streakDays > 0 ? 'dias seguidos estudando' : 'comece hoje'}
        />
      </section>

      <div className="mt-4">
        <div className="card">
          <div className="mb-2 flex items-baseline justify-between">
            <p className="label">Cobertura do banco</p>
            <p className="text-sm tabular-nums text-slate-500 dark:text-slate-400">
              {stats.answered}/{stats.totalQuestions}
            </p>
          </div>
          <ProgressBar value={stats.answered} max={stats.totalQuestions} />
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
            <span>
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
              {stats.correct} acertos
            </span>
            <span>
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-rose-500" />
              {stats.wrong} erros
            </span>
            <span>
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-indigo-500" />
              {stats.toReview} revisar
            </span>
            <span>
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
              {stats.untouched} não feitas
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <section className="card">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Lista de estudo 80/20</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {analysis.paretoSubjects.length} assuntos concentram ~{analysis.paretoCutoff}% das
                questões
              </p>
            </div>
            <Link href="/analise" className="text-sm font-medium text-brand-600 dark:text-brand-400">
              Ver análise
            </Link>
          </div>

          {analysis.paretoSubjects.length === 0 ? (
            <p className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">
              O ranking aparece assim que houver questões no banco.
            </p>
          ) : (
            <ol className="space-y-3">
              {analysis.paretoSubjects.slice(0, 10).map((subject) => {
                const progress = stats.bySubject.find((s) => s.slug === subject.slug);
                return (
                  <li key={subject.slug}>
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <Link
                        href={`/questoes?subtheme=${subject.slug}`}
                        className="min-w-0 truncate font-medium hover:text-brand-600 dark:hover:text-brand-400"
                      >
                        <span className="mr-2 tabular-nums text-slate-400">{subject.rank}.</span>
                        <span className="text-slate-500 dark:text-slate-400">
                          {subject.themeName}
                        </span>
                        <span className="mx-1.5 text-slate-300 dark:text-slate-600">—</span>
                        {subject.name}
                      </Link>
                      <span className="shrink-0 tabular-nums text-slate-500 dark:text-slate-400">
                        {subject.percent.toFixed(1)}%
                      </span>
                    </div>
                    <ProgressBar
                      className="mt-1.5"
                      value={progress?.answered ?? 0}
                      max={Math.max(1, progress?.total ?? subject.total)}
                      tone="brand"
                    />
                  </li>
                );
              })}
            </ol>
          )}
        </section>

        <div className="space-y-4">
          <section className="card">
            <h2 className="mb-3 font-semibold">Pontos fracos</h2>
            {weakestSubjects.length === 0 ? (
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Resolva ao menos 2 questões de um assunto para ele aparecer aqui.
              </p>
            ) : (
              <ul className="space-y-2">
                {weakestSubjects.map((subject) => (
                  <li key={subject.slug} className="flex items-center justify-between gap-3 text-sm">
                    <Link
                      href={`/questoes?subtheme=${subject.slug}`}
                      className="min-w-0 truncate hover:text-brand-600 dark:hover:text-brand-400"
                    >
                      {subject.label}
                    </Link>
                    <span
                      className={
                        subject.accuracy < 50
                          ? 'shrink-0 tabular-nums font-medium text-rose-600 dark:text-rose-400'
                          : 'shrink-0 tabular-nums text-slate-500 dark:text-slate-400'
                      }
                    >
                      {subject.accuracy}% ({subject.correct}/{subject.answered})
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="card">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-semibold">Atividade recente</h2>
              <Link href="/historico" className="text-sm font-medium text-brand-600 dark:text-brand-400">
                Histórico
              </Link>
            </div>
            {recentAttempts.length === 0 ? (
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Nenhuma questão respondida ainda.
              </p>
            ) : (
              <ul className="divide-y divide-slate-100 text-sm dark:divide-slate-800">
                {recentAttempts.map((attempt) => (
                  <li key={attempt.id} className="flex items-center justify-between gap-3 py-2">
                    <Link
                      href={`/questoes/${attempt.question.id}`}
                      className="truncate hover:text-brand-600 dark:hover:text-brand-400"
                    >
                      <span className="text-slate-400">
                        {attempt.question.year}·Q{attempt.question.number}
                      </span>{' '}
                      {attempt.question.theme.name}
                    </Link>
                    <StatusBadge status={attempt.correct ? 'ACERTOU' : 'ERROU'} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
