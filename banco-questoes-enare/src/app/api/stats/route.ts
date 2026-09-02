import { NextResponse } from 'next/server';
import { getCurrentUserId } from '@/lib/auth';
import { getUserStats } from '@/lib/stats';

export const dynamic = 'force-dynamic';

/** GET /api/stats — desempenho do usuário. */
export async function GET() {
  const userId = await getCurrentUserId();
  const stats = await getUserStats(userId);
  return NextResponse.json(stats);
}
