import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';
import { QUIZ_MODE_LABEL } from '@/lib/quiz';
import { QuizBuilder } from '@/components/QuizBuilder';
import { GenerateExamButton } from '@/components/GenerateExamButton';
import { EmptyState, PageHeader, ProgressBar } from '@/components/ui';

export const dynamic = 'force-dynamic';

/** Provas geradas pelo Claude ficam fora das contagens, como do sorteio. */
const NAO_GERADAS = { exam: { excludeFromStats: false } };

export default async function SimuladosPage() {
  const userId = await getCurrentUserId();

  const [themes, exams, quizzes] = await Promise.all([
    // A árvore inteira de uma vez: ~11 temas, 70 assuntos e ~200 tópicos depois
    // da poda, na casa dos 30 KB no payload. Sai mais barato que ir ao servidor
    // a cada nó expandido.
    //
    // A contagem exclui provas geradas para bater com o contador ao vivo do
    // montador, que também as exclui — senão somar os chips daria um número
    // diferente do que a tela informa.
    prisma.theme.findMany({
      // Temas seguem a ordem deliberada da taxonomia; assuntos e tópicos vão em
      // ordem alfabética, que é como se procura numa lista de 70. O campo
      // `order` deles tem duas convenções (o seed grava o índice, o importador
      // deixa no default 0), então ordenar por ele jogaria os assuntos criados
      // na importação para o topo.
      orderBy: { order: 'asc' },
      select: {
        slug: true,
        name: true,
        _count: { select: { questions: { where: NAO_GERADAS } } },
        subthemes: {
          orderBy: { name: 'asc' },
          select: {
            slug: true,
            name: true,
            _count: { select: { questions: { where: NAO_GERADAS } } },
            topics: {
              orderBy: { name: 'asc' },
              select: {
                slug: true,
                name: true,
                _count: { select: { questions: { where: NAO_GERADAS } } },
              },
            },
          },
        },
      },
    }),
    prisma.exam.findMany({
      where: { source: 'PROVA_OFICIAL', excludeFromStats: false },
      orderBy: { year: 'desc' },
      select: { id: true, year: true, title: true, _count: { select: { questions: true } } },
    }),
    prisma.quiz.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 20,
      include: { items: { select: { correct: true, answeredAt: true } } },
    }),
  ]);

  return (
    <div>
      <PageHeader title="Simulados" subtitle="Treine no formato da prova" />

      <div className="mb-4">
        <GenerateExamButton />
      </div>

      <QuizBuilder
        themes={themes
          // Poda de baixo para cima: um assunto expandido nunca mostra tópico
          // vazio, e um tema nunca expande para lista nenhuma.
          .map((theme) => ({
            slug: theme.slug,
            name: theme.name,
            count: theme._count.questions,
            subthemes: theme.subthemes
              .map((subtheme) => ({
                slug: subtheme.slug,
                name: subtheme.name,
                count: subtheme._count.questions,
                topics: subtheme.topics
                  .filter((topic) => topic._count.questions > 0)
                  .map((topic) => ({
                    slug: topic.slug,
                    name: topic.name,
                    count: topic._count.questions,
                  })),
              }))
              .filter((subtheme) => subtheme.count > 0),
          }))
          .filter((theme) => theme.count > 0)}
        exams={exams
          .filter((exam) => exam._count.questions > 0)
          .map((exam) => ({
            id: exam.id,
            year: exam.year,
            title: exam.title,
            count: exam._count.questions,
          }))}
      />

      <section className="mt-6">
        <h2 className="mb-3 font-semibold">Meus simulados</h2>

        {quizzes.length === 0 ? (
          <EmptyState
            title="Nenhum simulado ainda"
            description="Monte o primeiro acima. O modo por incidência reproduz a distribuição de assuntos da prova."
          />
        ) : (
          <ul className="space-y-3">
            {quizzes.map((quiz) => {
              const answered = quiz.items.filter((item) => item.answeredAt !== null).length;
              const correct = quiz.items.filter((item) => item.correct === true).length;
              const accuracy = answered === 0 ? 0 : Math.round((correct / answered) * 100);

              return (
                <li key={quiz.id}>
                  <Link href={`/simulados/${quiz.id}`} className="card block transition-colors hover:border-brand-400 dark:hover:border-brand-600">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate font-medium">{quiz.title}</p>
                        <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                          {QUIZ_MODE_LABEL[quiz.mode]} ·{' '}
                          {new Date(quiz.createdAt).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm tabular-nums">
                          {answered}/{quiz.items.length} respondidas
                        </p>
                        {answered > 0 && (
                          <p
                            className={
                              accuracy >= 70
                                ? 'text-sm font-medium tabular-nums text-emerald-600 dark:text-emerald-400'
                                : accuracy >= 50
                                  ? 'text-sm font-medium tabular-nums text-amber-600 dark:text-amber-400'
                                  : 'text-sm font-medium tabular-nums text-rose-600 dark:text-rose-400'
                            }
                          >
                            {accuracy}% de acerto
                          </p>
                        )}
                      </div>
                    </div>
                    <ProgressBar className="mt-3" value={answered} max={quiz.items.length} />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
