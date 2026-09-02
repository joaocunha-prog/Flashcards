import { NextResponse } from 'next/server';
import { getCurrentUserId } from '@/lib/auth';
import { listQuestions, parseFilters } from '@/lib/questions';

export const dynamic = 'force-dynamic';

/**
 * GET /api/questions — listagem filtrada do banco.
 *
 * Os payloads passam por `toSafeQuestions` dentro de `listQuestions`, então o
 * gabarito nunca sai daqui.
 */
export async function GET(request: Request) {
  const userId = await getCurrentUserId();
  const { searchParams } = new URL(request.url);
  const result = await listQuestions(parseFilters(searchParams), userId);
  return NextResponse.json(result);
}
