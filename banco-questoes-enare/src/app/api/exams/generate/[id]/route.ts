import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';

export const dynamic = 'force-dynamic';

/** GET /api/exams/generate/[id] — progresso do job, consultado por polling. */
export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const userId = await getCurrentUserId();

  const job = await prisma.generationJob.findFirst({ where: { id, userId } });
  if (!job) {
    return NextResponse.json({ error: 'Geração não encontrada.' }, { status: 404 });
  }

  const blueprint = Array.isArray(job.blueprint)
    ? (job.blueprint as Array<{ label?: string; count?: number }>)
    : [];

  return NextResponse.json({
    id: job.id,
    status: job.status,
    requested: job.requested,
    generated: job.generated,
    progress: job.requested === 0 ? 0 : Math.round((job.generated / job.requested) * 100),
    examSlug: job.examSlug,
    examId: job.examId,
    error: job.error,
    blueprint: blueprint.map((slot) => ({ label: slot.label ?? '', count: slot.count ?? 0 })),
    createdAt: job.createdAt.toISOString(),
    finishedAt: job.finishedAt?.toISOString() ?? null,
  });
}
