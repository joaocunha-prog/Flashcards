import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';

export const dynamic = 'force-dynamic';

const bodySchema = z
  .object({
    favorite: z.boolean().optional(),
    notes: z.string().max(5000).nullable().optional(),
    status: z.enum(['NAO_FEITA', 'ACERTOU', 'ERROU', 'REVISAR']).optional(),
  })
  .refine((body) => Object.keys(body).length > 0, { message: 'Nada para atualizar.' });

/**
 * PATCH /api/questions/[id]/state — favorita, observações e marcação de revisão.
 */
export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const userId = await getCurrentUserId();

  let body: z.infer<typeof bodySchema>;
  try {
    body = bodySchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: 'Corpo da requisição inválido.' }, { status: 400 });
  }

  const exists = await prisma.question.findUnique({ where: { id }, select: { id: true } });
  if (!exists) {
    return NextResponse.json({ error: 'Questão não encontrada.' }, { status: 404 });
  }

  const state = await prisma.userQuestionState.upsert({
    where: { userId_questionId: { userId, questionId: id } },
    create: {
      userId,
      questionId: id,
      favorite: body.favorite ?? false,
      notes: body.notes ?? null,
      status: body.status ?? 'NAO_FEITA',
    },
    update: {
      ...(body.favorite === undefined ? {} : { favorite: body.favorite }),
      ...(body.notes === undefined ? {} : { notes: body.notes }),
      ...(body.status === undefined ? {} : { status: body.status }),
    },
  });

  return NextResponse.json({
    status: state.status,
    favorite: state.favorite,
    notes: state.notes,
    attemptCount: state.attemptCount,
    correctCount: state.correctCount,
    lastAnsweredAt: state.lastAnsweredAt?.toISOString() ?? null,
  });
}
