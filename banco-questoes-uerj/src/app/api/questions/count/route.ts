import { NextResponse } from 'next/server';
import { getCurrentUserId } from '@/lib/auth';
import { countQuestions, parseFilters } from '@/lib/questions';

export const dynamic = 'force-dynamic';

/**
 * GET /api/questions/count — quantas questões atendem ao recorte.
 *
 * Aceita os mesmos parâmetros da listagem (`theme`, `subtheme`, `topic`,
 * `difficulty`, `year`, `status`… repetidos), mais `taxonomy=uniao` para somar
 * os níveis em vez de cruzá-los.
 *
 * O montador de simulado consulta esta rota a cada ajuste de filtro, então ela
 * devolve só o inteiro — nenhum enunciado, nenhuma alternativa.
 */
export async function GET(request: Request) {
  const userId = await getCurrentUserId();
  const { searchParams } = new URL(request.url);
  const total = await countQuestions(parseFilters(searchParams), userId);
  return NextResponse.json({ total });
}
