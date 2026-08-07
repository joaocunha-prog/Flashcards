import { NextResponse } from 'next/server';
import { recomputeAnalysis } from '@/lib/analysis';

export const dynamic = 'force-dynamic';
export const maxDuration = 120;

/**
 * POST /api/admin/recompute — força a recomputação das estatísticas.
 *
 * A importação já recalcula sozinha; esta rota existe para casos de correção
 * manual de dados. Mesmo controle de acesso da rota de importação.
 */
export async function POST(request: Request) {
  const expected = process.env.ADMIN_IMPORT_TOKEN;

  if (!expected) {
    return NextResponse.json(
      { error: 'Rota desabilitada: defina ADMIN_IMPORT_TOKEN no ambiente.' },
      { status: 503 },
    );
  }

  if (request.headers.get('x-admin-token') !== expected) {
    return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 });
  }

  const analysis = await recomputeAnalysis();

  return NextResponse.json({
    totalQuestions: analysis.totalQuestions,
    totalExams: analysis.totalExams,
    years: analysis.years,
    paretoThemes: analysis.paretoThemes.map((t) => t.name),
    computedAt: analysis.computedAt,
  });
}
