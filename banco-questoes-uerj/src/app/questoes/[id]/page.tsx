import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';
import { questionInclude, toSafeQuestion } from '@/lib/serializers';
import { QuestionSolver } from '@/components/QuestionSolver';

export const dynamic = 'force-dynamic';

export default async function QuestaoPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const userId = await getCurrentUserId();

  const question = await prisma.question.findUnique({
    where: { id },
    include: questionInclude(userId),
  });

  if (!question) notFound();

  const quizId = typeof query.quiz === 'string' ? query.quiz : undefined;

  // Dentro de um simulado, "próxima" segue a ordem do caderno; fora dele,
  // segue a ordem natural do banco (mesmo ano, número seguinte).
  let nextHref: string | undefined;

  if (quizId) {
    const current = await prisma.quizItem.findFirst({
      where: { quizId, questionId: id, quiz: { userId } },
      select: { position: true },
    });
    if (current) {
      const next = await prisma.quizItem.findFirst({
        where: { quizId, position: { gt: current.position } },
        orderBy: { position: 'asc' },
        select: { questionId: true },
      });
      nextHref = next
        ? `/questoes/${next.questionId}?quiz=${quizId}`
        : `/simulados/${quizId}`;
    }
  } else {
    const next = await prisma.question.findFirst({
      where: {
        examId: question.examId,
        number: { gt: question.number },
      },
      orderBy: { number: 'asc' },
      select: { id: true },
    });
    if (next) nextHref = `/questoes/${next.id}`;
  }

  const safeQuestion = toSafeQuestion(question);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <Link
          href={quizId ? `/simulados/${quizId}` : '/questoes'}
          className="text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
        >
          ← {quizId ? 'Voltar ao simulado' : 'Voltar ao banco'}
        </Link>
      </div>

      <QuestionSolver question={safeQuestion} quizId={quizId} nextHref={nextHref} />
    </div>
  );
}
