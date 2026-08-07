import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { getCurrentUserId } from '@/lib/auth';
import {
  EXPLANATION_MODEL,
  EXPLANATION_PROMPT_VERSION,
  MissingApiKeyError,
  generateExplanation,
} from '@/lib/claude';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const bodySchema = z.object({
  /** Letra marcada pelo usuário; contextualiza a explicação. */
  selectedLetter: z.string().trim().min(1).max(2).toUpperCase().optional(),
  /** Força uma nova geração mesmo havendo explicação em cache. */
  regenerate: z.boolean().optional(),
});

/**
 * POST /api/questions/[id]/explain
 *
 * Único caminho do sistema que produz comentário de questão. É acionado
 * exclusivamente pelo botão "Explicar com Claude" — nunca durante o seed,
 * a importação ou a listagem (Etapa 4: explicação sob demanda).
 *
 * O usuário precisa ter respondido a questão antes: pedir a explicação sem
 * responder revelaria o gabarito e contornaria a regra do produto.
 *
 * A explicação gerada fica em cache por (questão, letra marcada) para não
 * pagar uma chamada nova a cada reabertura da mesma questão.
 */
export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const userId = await getCurrentUserId();

  let body: z.infer<typeof bodySchema> = {};
  try {
    const raw = await request.text();
    if (raw) body = bodySchema.parse(JSON.parse(raw));
  } catch {
    return NextResponse.json({ error: 'Corpo da requisição inválido.' }, { status: 400 });
  }

  const question = await prisma.question.findUnique({
    where: { id },
    include: {
      alternatives: { orderBy: { letter: 'asc' } },
      theme: true,
      subtheme: true,
      topic: true,
      userStates: { where: { userId }, take: 1 },
    },
  });

  if (!question) {
    return NextResponse.json({ error: 'Questão não encontrada.' }, { status: 404 });
  }

  const state = question.userStates[0];
  if (!state || state.attemptCount === 0) {
    return NextResponse.json(
      { error: 'Responda a questão antes de pedir a explicação.' },
      { status: 409 },
    );
  }

  const selectedLetter = body.selectedLetter ?? null;

  if (!body.regenerate) {
    // A versão do formato entra na chave: um comentário gerado antes da
    // reformulação não é servido no lugar do formato atual.
    const cached = await prisma.explanation.findFirst({
      where: {
        questionId: question.id,
        userId,
        selectedLetter,
        promptVersion: EXPLANATION_PROMPT_VERSION,
      },
      orderBy: { createdAt: 'desc' },
    });
    if (cached) {
      return NextResponse.json({
        content: cached.content,
        model: cached.model,
        cached: true,
        createdAt: cached.createdAt.toISOString(),
      });
    }
  }

  let content: string;
  try {
    content = await generateExplanation({
      year: question.year,
      statement: question.statement,
      alternatives: question.alternatives.map((alt) => ({ letter: alt.letter, text: alt.text })),
      answerKey: question.answerKey,
      selectedLetter,
      theme: question.theme.name,
      subtheme: question.subtheme?.name ?? null,
      topic: question.topic?.name ?? null,
      reference: question.reference,
    });
  } catch (error) {
    if (error instanceof MissingApiKeyError) {
      return NextResponse.json(
        {
          error:
            'ANTHROPIC_API_KEY não configurada. Defina a chave no .env para habilitar as explicações.',
        },
        { status: 503 },
      );
    }
    console.error('Falha ao gerar explicação:', error);
    return NextResponse.json(
      { error: 'Não foi possível gerar a explicação agora. Tente novamente.' },
      { status: 502 },
    );
  }

  const saved = await prisma.explanation.create({
    data: {
      questionId: question.id,
      userId,
      model: EXPLANATION_MODEL,
      content,
      selectedLetter,
      promptVersion: EXPLANATION_PROMPT_VERSION,
    },
  });

  return NextResponse.json({
    content: saved.content,
    model: saved.model,
    cached: false,
    createdAt: saved.createdAt.toISOString(),
  });
}
