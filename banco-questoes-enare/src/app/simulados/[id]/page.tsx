import Link from 'next/link';
import { notFound } from 'next/navigation';
import clsx from 'clsx';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';
import { QUIZ_MODE_LABEL } from '@/lib/quiz';
import { PageHeader, ProgressBar, StatCard } from '@/components/ui';

export const dynamic = 'force-dynamic';

export default async function SimuladoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const userId = await getCurrentUserId();

  const quiz = await prisma.quiz.findFirst({
    where: { id, userId },
    include: {
      items: {
        orderBy: { position: 'asc' },
        include: {
          question: {
            select: {
              id: true,
              year: true,
              number: true,
              difficulty: true,
              theme: { select: { name: true, slug: true } },
            },
          },
        },
      },
    },
  });

  if (!quiz) notFound();

  const answered = quiz.items.filter((item) => item.answeredAt !== null).length;
  const correct = quiz.items.filter((item) => item.correct === true).length;
  const accuracy = answered === 0 ? 0 : Math.round((correct / answered) * 1000) / 10;
  const firstUnanswered = quiz.items.find((item) => item.answeredAt === null);

  // Desempenho por tema dentro deste simulado — mostra onde a prova doeu.
  const byTheme = new Map<string, { name: string; answered: number; correct: number }>();
  for (const item of quiz.items) {
    if (item.answeredAt === null) continue;
    const key = item.question.theme.slug;
    const entry = byTheme.get(key) ?? { name: item.question.theme.name, answered: 0, correct: 0 };
    entry.answered += 1;
    if (item.correct) entry.correct += 1;
    byTheme.set(key, entry);
  }

  return (
    <div>
      <div className="mb-4">
        <Link
          href="/simulados"
          className="text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
        >
          ← Voltar aos simulados
        </Link>
      </div>

      <PageHeader
        title={quiz.title}
        subtitle={`${QUIZ_MODE_LABEL[quiz.mode]} · ${quiz.items.length} questões`}
        action={
          firstUnanswered ? (
            <Link href={`/questoes/${firstUnanswered.questionId}?quiz=${quiz.id}`} className="btn-primary">
              {answered === 0 ? 'Começar' : 'Continuar'}
            </Link>
          ) : (
            <Link href="/simulados" className="btn-secondary">
              Simulado concluído
            </Link>
          )
        }
      />

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Respondidas" value={`${answered}/${quiz.items.length}`} />
        <StatCard label="Acertos" value={correct} tone="positive" />
        <StatCard label="Erros" value={answered - correct} tone="negative" />
        <StatCard
          label="Aproveitamento"
          value={`${accuracy}%`}
          tone={accuracy >= 70 ? 'positive' : accuracy >= 50 ? 'neutral' : 'negative'}
        />
      </section>

      <div className="card mt-4">
        <ProgressBar value={answered} max={quiz.items.length} />
      </div>

      {byTheme.size > 0 && (
        <section className="card mt-4">
          <h2 className="mb-3 font-semibold">Desempenho por tema</h2>
          <ul className="space-y-2">
            {Array.from(byTheme.entries())
              .sort((a, b) => a[1].correct / a[1].answered - b[1].correct / b[1].answered)
              .map(([slug, entry]) => (
                <li key={slug} className="flex items-center justify-between gap-3 text-sm">
                  <span className="truncate">{entry.name}</span>
                  <span className="shrink-0 tabular-nums text-slate-500 dark:text-slate-400">
                    {entry.correct}/{entry.answered}
                  </span>
                </li>
              ))}
          </ul>
        </section>
      )}

      <section className="mt-4">
        <h2 className="mb-3 font-semibold">Questões</h2>
        <ol className="grid grid-cols-5 gap-2 sm:grid-cols-8 lg:grid-cols-10">
          {quiz.items.map((item) => (
            <li key={item.id}>
              <Link
                href={`/questoes/${item.questionId}?quiz=${quiz.id}`}
                title={`${item.question.theme.name} · ${item.question.year}`}
                className={clsx(
                  'flex h-11 items-center justify-center rounded-lg border text-sm font-medium tabular-nums transition-colors',
                  item.answeredAt === null
                    ? 'border-slate-200 text-slate-500 hover:border-brand-400 dark:border-slate-800 dark:text-slate-400'
                    : item.correct
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300'
                      : 'border-rose-300 bg-rose-50 text-rose-700 dark:border-rose-800 dark:bg-rose-950/50 dark:text-rose-300',
                )}
              >
                {item.position}
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
