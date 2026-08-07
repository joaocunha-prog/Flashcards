import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';
import {
  DEFAULT_EXAM_SIZE,
  EmptyBankError,
  checkReadiness,
  generateExam,
} from '@/lib/generate';
import { MissingApiKeyError } from '@/lib/claude';

export const dynamic = 'force-dynamic';
export const maxDuration = 300;

const bodySchema = z.object({
  size: z.number().int().min(10).max(120).default(DEFAULT_EXAM_SIZE),
});

/** GET — o botão consulta aqui se pode ser habilitado. */
export async function GET() {
  const readiness = await checkReadiness();
  const userId = await getCurrentUserId();

  const running = await prisma.generationJob.findFirst({
    where: { userId, status: { in: ['PENDENTE', 'GERANDO'] } },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({
    ...readiness,
    runningJobId: running?.id ?? null,
  });
}

/**
 * POST — dispara a geração e devolve o id do job imediatamente.
 *
 * Gerar 60 questões leva minutos, muito além do que uma requisição HTTP deve
 * segurar. O trabalho continua em background e o cliente acompanha por
 * polling em /api/exams/generate/[id].
 */
export async function POST(request: Request) {
  const userId = await getCurrentUserId();

  let body: z.infer<typeof bodySchema>;
  try {
    const raw = await request.text();
    body = bodySchema.parse(raw ? JSON.parse(raw) : {});
  } catch {
    return NextResponse.json({ error: 'Parâmetros inválidos.' }, { status: 400 });
  }

  const readiness = await checkReadiness();
  if (!readiness.ready) {
    return NextResponse.json({ error: readiness.reason, readiness }, { status: 409 });
  }

  // Uma geração por vez por usuário: duas em paralelo dobram o custo e
  // produzem duas provas quase idênticas, já que partem do mesmo blueprint.
  const running = await prisma.generationJob.findFirst({
    where: { userId, status: { in: ['PENDENTE', 'GERANDO'] } },
  });
  if (running) {
    return NextResponse.json(
      { error: 'Já existe uma geração em andamento.', jobId: running.id },
      { status: 409 },
    );
  }

  const job = await prisma.generationJob.create({
    data: { userId, status: 'PENDENTE', requested: body.size },
  });

  // Deliberadamente sem await: a resposta volta agora e o trabalho segue.
  void generateExam({ jobId: job.id, size: body.size })
    .then(async (result) => {
      await prisma.generationJob.update({
        where: { id: job.id },
        data: {
          status: 'CONCLUIDO',
          generated: result.generated,
          examSlug: result.examSlug,
          examId: result.examId,
          finishedAt: new Date(),
        },
      });
    })
    .catch(async (error: unknown) => {
      const message =
        error instanceof MissingApiKeyError
          ? 'ANTHROPIC_API_KEY não configurada no servidor.'
          : error instanceof EmptyBankError
            ? error.message
            : error instanceof Error
              ? error.message
              : 'Falha desconhecida na geração.';

      console.error('Falha ao gerar prova:', error);
      await prisma.generationJob.update({
        where: { id: job.id },
        data: { status: 'FALHOU', error: message, finishedAt: new Date() },
      });
    });

  return NextResponse.json({ jobId: job.id, status: 'PENDENTE', requested: body.size });
}
