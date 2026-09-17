import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';

export const dynamic = 'force-dynamic';

/** GET /api/quizzes/[id] — progresso do simulado. */
export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const userId = await getCurrentUserId();

  const quiz = await prisma.quiz.findFirst({
    where: { id, userId },
    include: {
      items: {
        orderBy: { position: 'asc' },
        include: { question: { select: { id: true, theme: { select: { name: true } } } } },
      },
    },
  });

  if (!quiz) {
    return NextResponse.json({ error: 'Simulado não encontrado.' }, { status: 404 });
  }

  const answered = quiz.items.filter((item) => item.answeredAt !== null).length;
  const correct = quiz.items.filter((item) => item.correct === true).length;

  return NextResponse.json({
    id: quiz.id,
    title: quiz.title,
    mode: quiz.mode,
    status: quiz.status,
    createdAt: quiz.createdAt.toISOString(),
    finishedAt: quiz.finishedAt?.toISOString() ?? null,
    total: quiz.items.length,
    answered,
    correct,
    accuracy: answered === 0 ? 0 : Math.round((correct / answered) * 1000) / 10,
    items: quiz.items.map((item) => ({
      position: item.position,
      questionId: item.questionId,
      theme: item.question.theme.name,
      answered: item.answeredAt !== null,
      correct: item.correct,
    })),
  });
}

const patchSchema = z.object({
  status: z.enum(['EM_ANDAMENTO', 'FINALIZADO', 'ABANDONADO']),
});

/** PATCH /api/quizzes/[id] — finaliza ou abandona o simulado. */
export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const userId = await getCurrentUserId();

  let body: z.infer<typeof patchSchema>;
  try {
    body = patchSchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: 'Parâmetros inválidos.' }, { status: 400 });
  }

  const result = await prisma.quiz.updateMany({
    where: { id, userId },
    data: {
      status: body.status,
      finishedAt: body.status === 'EM_ANDAMENTO' ? null : new Date(),
    },
  });

  if (result.count === 0) {
    return NextResponse.json({ error: 'Simulado não encontrado.' }, { status: 404 });
  }

  return NextResponse.json({ ok: true, status: body.status });
}
