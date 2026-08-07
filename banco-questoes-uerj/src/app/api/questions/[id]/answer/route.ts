import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';

export const dynamic = 'force-dynamic';

const bodySchema = z.object({
  selectedLetter: z.string().trim().min(1).max(2).toUpperCase(),
  elapsedSeconds: z.number().int().nonnegative().optional(),
  quizId: z.string().optional(),
});

/**
 * POST /api/questions/[id]/answer
 *
 * Corrige a resposta no servidor e devolve APENAS `correct: boolean`
 * (Etapa 4: "informar apenas se acertou ou errou"). A letra do gabarito não
 * entra na resposta — quem quiser saber por que errou usa "Explicar com Claude".
 */
export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const userId = await getCurrentUserId();

  let body: z.infer<typeof bodySchema>;
  try {
    body = bodySchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: 'Corpo da requisição inválido.' }, { status: 400 });
  }

  const question = await prisma.question.findUnique({
    where: { id },
    select: {
      id: true,
      answerKey: true,
      reviewNote: true,
      alternatives: { select: { letter: true } },
    },
  });

  if (!question) {
    return NextResponse.json({ error: 'Questão não encontrada.' }, { status: 404 });
  }

  const validLetters = question.alternatives.map((alt) => alt.letter);
  if (!validLetters.includes(body.selectedLetter)) {
    return NextResponse.json({ error: 'Alternativa inválida.' }, { status: 400 });
  }

  const correct = body.selectedLetter === question.answerKey;

  const [, state] = await prisma.$transaction([
    prisma.attempt.create({
      data: {
        userId,
        questionId: question.id,
        selectedLetter: body.selectedLetter,
        correct,
        elapsedSeconds: body.elapsedSeconds ?? null,
        quizId: body.quizId ?? null,
      },
    }),
    prisma.userQuestionState.upsert({
      where: { userId_questionId: { userId, questionId: question.id } },
      create: {
        userId,
        questionId: question.id,
        status: correct ? 'ACERTOU' : 'ERROU',
        attemptCount: 1,
        correctCount: correct ? 1 : 0,
        lastAnsweredAt: new Date(),
      },
      update: {
        status: correct ? 'ACERTOU' : 'ERROU',
        attemptCount: { increment: 1 },
        correctCount: { increment: correct ? 1 : 0 },
        lastAnsweredAt: new Date(),
      },
    }),
  ]);

  if (body.quizId) {
    await prisma.quizItem.updateMany({
      where: { quizId: body.quizId, questionId: question.id },
      data: { selectedLetter: body.selectedLetter, correct, answeredAt: new Date() },
    });
  }

  return NextResponse.json({
    correct,
    status: state.status,
    attemptCount: state.attemptCount,
    correctCount: state.correctCount,
    // A ressalva de gabarito viaja aqui, e não no payload da questão, porque
    // costuma citar a letra correta. Antes de responder, o cliente não a tem.
    reviewNote: question.reviewNote,
  });
}
