import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';
import { buildQuiz } from '@/lib/quiz';

export const dynamic = 'force-dynamic';

const bodySchema = z.object({
  mode: z.enum([
    'ALEATORIO',
    'POR_TEMA',
    'POR_INCIDENCIA',
    'APENAS_ERRADAS',
    'APENAS_REVISAO',
    'SIMULADO_INEDITO',
  ]),
  size: z.number().int().min(1).max(200).default(20),
  themeSlugs: z.array(z.string()).optional(),
  years: z.array(z.number().int()).optional(),
  difficulties: z.array(z.enum(['FACIL', 'MEDIA', 'DIFICIL'])).optional(),
});

/** POST /api/quizzes — cria um simulado conforme o modo escolhido. */
export async function POST(request: Request) {
  const userId = await getCurrentUserId();

  let body: z.infer<typeof bodySchema>;
  try {
    body = bodySchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: 'Parâmetros inválidos.' }, { status: 400 });
  }

  try {
    const result = await buildQuiz({
      userId,
      mode: body.mode,
      size: body.size,
      themeSlugs: body.themeSlugs,
      years: body.years,
      difficulties: body.difficulties,
      // O simulado inédito puxa justamente as questões marcadas como mock.
      includeMockExams: body.mode === 'SIMULADO_INEDITO',
    });

    return NextResponse.json({
      quizId: result.quizId,
      title: result.title,
      mode: result.mode,
      total: result.questionIds.length,
      blueprint: result.blueprint ?? null,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Não foi possível montar o simulado.';
    return NextResponse.json({ error: message }, { status: 422 });
  }
}

/** GET /api/quizzes — histórico de simulados do usuário. */
export async function GET() {
  const userId = await getCurrentUserId();

  const quizzes = await prisma.quiz.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: 50,
    include: {
      items: { select: { correct: true, answeredAt: true } },
    },
  });

  return NextResponse.json({
    quizzes: quizzes.map((quiz) => {
      const answered = quiz.items.filter((item) => item.answeredAt !== null).length;
      const correct = quiz.items.filter((item) => item.correct === true).length;
      return {
        id: quiz.id,
        title: quiz.title,
        mode: quiz.mode,
        status: quiz.status,
        total: quiz.items.length,
        answered,
        correct,
        accuracy: answered === 0 ? 0 : Math.round((correct / answered) * 1000) / 10,
        createdAt: quiz.createdAt.toISOString(),
        finishedAt: quiz.finishedAt?.toISOString() ?? null,
      };
    }),
  });
}
