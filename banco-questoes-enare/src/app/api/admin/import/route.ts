import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { importExam } from '@/lib/import';

export const dynamic = 'force-dynamic';
export const maxDuration = 120;

/**
 * POST /api/admin/import — importa uma prova nova e recalcula as estatísticas.
 *
 * Rota administrativa: escreve no corpus e altera o ranking visto por todos os
 * usuários, então exige o segredo `ADMIN_IMPORT_TOKEN` no header
 * `x-admin-token`. Sem a variável definida, a rota fica desligada — assim uma
 * instalação que esqueceu de configurar não expõe escrita aberta na internet.
 */
export async function POST(request: Request) {
  const expected = process.env.ADMIN_IMPORT_TOKEN;

  if (!expected) {
    return NextResponse.json(
      { error: 'Importação via API desabilitada: defina ADMIN_IMPORT_TOKEN no ambiente.' },
      { status: 503 },
    );
  }

  if (request.headers.get('x-admin-token') !== expected) {
    return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'JSON inválido.' }, { status: 400 });
  }

  try {
    const result = await importExam(payload, { recompute: true });
    return NextResponse.json({ ...result, recomputed: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: 'Prova inválida.', issues: error.issues },
        { status: 422 },
      );
    }
    console.error('Falha na importação:', error);
    return NextResponse.json({ error: 'Falha ao importar a prova.' }, { status: 500 });
  }
}
