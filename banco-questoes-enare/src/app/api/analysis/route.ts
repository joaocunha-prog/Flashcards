import { NextResponse } from 'next/server';
import { readAnalysis } from '@/lib/analysis';

export const dynamic = 'force-dynamic';

/** GET /api/analysis — ranking de incidência e lista 80/20. */
export async function GET() {
  const analysis = await readAnalysis();
  return NextResponse.json(analysis);
}
