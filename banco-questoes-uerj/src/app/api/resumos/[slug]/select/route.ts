import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getResumo, setResumoSelected } from '@/lib/resumos';

export const dynamic = 'force-dynamic';

const bodySchema = z.object({ selected: z.boolean() });

/**
 * PATCH /api/resumos/[slug]/select — alterna a vitrine "Selecionados".
 *
 * Global (não por usuário): é curadoria do conteúdo do banco, não progresso
 * pessoal — a mesma natureza do texto do resumo. Sem token de admin porque
 * segue o mesmo nível de confiança do resto do app (ex.: favoritar questão),
 * não o de `/api/admin/*`, que existe para importação em massa.
 */
export async function PATCH(request: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;

  let body: z.infer<typeof bodySchema>;
  try {
    body = bodySchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: 'Corpo da requisição inválido.' }, { status: 400 });
  }

  const resumo = await getResumo(slug);
  if (!resumo) {
    return NextResponse.json({ error: 'Resumo não encontrado.' }, { status: 404 });
  }

  const selected = await setResumoSelected(slug, body.selected);
  return NextResponse.json({ selected });
}
