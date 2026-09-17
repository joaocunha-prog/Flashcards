import type { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { prisma as defaultPrisma } from './prisma';
import { recomputeAnalysis } from './analysis';

/**
 * Pipeline de importação de provas.
 *
 * Ponto único de entrada de conteúdo no sistema. Usado pelo seed, pelo script
 * de linha de comando e pela rota administrativa. Depois de gravar, dispara a
 * recomputação das estatísticas — é isso que faz o ranking 80/20 se atualizar
 * sozinho quando uma prova nova entra.
 *
 * A operação é idempotente por `slug` (prova) e `extId` (questão): reimportar
 * o mesmo arquivo atualiza os registros em vez de duplicá-los.
 */

const alternativeSchema = z.object({
  letter: z.string().trim().min(1).max(2).toUpperCase(),
  text: z.string().trim().min(1),
});

const questionSchema = z
  .object({
    number: z.number().int().positive(),
    statement: z.string().trim().min(10),
    alternatives: z.array(alternativeSchema).min(2).max(5),
    answerKey: z.string().trim().min(1).max(2).toUpperCase(),
    theme: z.string().trim().min(1),
    subtheme: z.string().trim().min(1).optional(),
    /// Nível mais específico (ex.: "AVC isquêmico — trombólise"). Só faz
    /// sentido acompanhado de subtema, que é o pai na hierarquia.
    topic: z.string().trim().min(1).optional(),
    difficulty: z.enum(['FACIL', 'MEDIA', 'DIFICIL']),
    keywords: z.array(z.string().trim().min(1)).default([]),
    reference: z.string().trim().optional(),
    /// Ressalva sobre o gabarito oficial. Pode citar a letra correta, então só
    /// é exposta depois que o usuário responde.
    reviewNote: z.string().trim().min(1).optional(),
  })
  .refine(
    (question) => question.alternatives.some((alt) => alt.letter === question.answerKey),
    { message: 'answerKey não corresponde a nenhuma alternativa', path: ['answerKey'] },
  )
  .refine(
    (question) =>
      new Set(question.alternatives.map((alt) => alt.letter)).size ===
      question.alternatives.length,
    { message: 'letras de alternativa duplicadas', path: ['alternatives'] },
  )
  .refine((question) => !question.topic || Boolean(question.subtheme), {
    message: 'topic exige subtheme (o tópico é filho do subtema na hierarquia)',
    path: ['topic'],
  });

export const examSchema = z
  .object({
    slug: z
      .string()
      .trim()
      .min(3)
      .regex(/^[a-z0-9-]+$/, 'slug deve conter apenas letras minúsculas, números e hífens'),
    year: z.number().int().min(1990).max(2100),
    board: z.string().trim().default('ENARE'),
    program: z.string().trim().default(''),
    title: z.string().trim().min(3),
    source: z.enum(['PROVA_OFICIAL', 'AUTORAL_ESTILO_BANCA']),
    reference: z.string().trim().optional(),
    excludeFromStats: z.boolean().default(false),
    appliedAt: z.string().datetime().optional(),
    questions: z.array(questionSchema).min(1),
  })
  .refine(
    (exam) => new Set(exam.questions.map((q) => q.number)).size === exam.questions.length,
    { message: 'números de questão duplicados dentro da prova', path: ['questions'] },
  );

export type ValidatedExam = z.infer<typeof examSchema>;

export interface ImportResult {
  examSlug: string;
  examId: string;
  created: number;
  updated: number;
  themesCreated: string[];
  subthemesCreated: string[];
  topicsCreated: string[];
}

function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Mesma regra de `data/taxonomy.ts`: o slug do t\u00f3pico \u00e9 prefixado pelo subtema. */
function topicSlugFor(subthemeSlug: string, topicName: string): string {
  return `${subthemeSlug}--${slugify(topicName)}`;
}

/**
 * Importa uma prova. Tema, subtema e tópico ausentes são criados na hora, de
 * modo que uma prova futura pode trazer um assunto que ainda não existe na
 * taxonomia sem quebrar a importação.
 */
export async function importExam(
  input: unknown,
  options: { client?: PrismaClient; recompute?: boolean } = {},
): Promise<ImportResult> {
  const client = options.client ?? defaultPrisma;
  const exam = examSchema.parse(input);

  const themesCreated: string[] = [];
  const subthemesCreated: string[] = [];
  const topicsCreated: string[] = [];

  const result = await client.$transaction(async (tx) => {
    const examRecord = await tx.exam.upsert({
      where: { slug: exam.slug },
      create: {
        slug: exam.slug,
        year: exam.year,
        board: exam.board,
        program: exam.program,
        title: exam.title,
        source: exam.source,
        reference: exam.reference,
        excludeFromStats: exam.excludeFromStats,
        appliedAt: exam.appliedAt ? new Date(exam.appliedAt) : null,
      },
      update: {
        year: exam.year,
        board: exam.board,
        program: exam.program,
        title: exam.title,
        source: exam.source,
        reference: exam.reference,
        excludeFromStats: exam.excludeFromStats,
        appliedAt: exam.appliedAt ? new Date(exam.appliedAt) : null,
      },
    });

    let created = 0;
    let updated = 0;

    for (const question of exam.questions) {
      const themeSlug = slugify(question.theme);
      let theme = await tx.theme.findUnique({ where: { slug: themeSlug } });
      if (!theme) {
        theme = await tx.theme.create({
          data: { slug: themeSlug, name: question.theme, order: 999 },
        });
        themesCreated.push(themeSlug);
      }

      let subthemeId: string | null = null;
      let topicId: string | null = null;

      if (question.subtheme) {
        const subthemeSlug = slugify(question.subtheme);
        let subtheme = await tx.subtheme.findUnique({ where: { slug: subthemeSlug } });
        if (!subtheme) {
          subtheme = await tx.subtheme.create({
            data: { slug: subthemeSlug, name: question.subtheme, themeId: theme.id },
          });
          subthemesCreated.push(subthemeSlug);
        }
        subthemeId = subtheme.id;

        // O tópico só existe sob um subtema — o schema Zod já garante isso.
        if (question.topic) {
          const slug = topicSlugFor(subthemeSlug, question.topic);
          let topic = await tx.topic.findUnique({ where: { slug } });
          if (!topic) {
            topic = await tx.topic.create({
              data: { slug, name: question.topic, subthemeId: subtheme.id },
            });
            topicsCreated.push(slug);
          }
          topicId = topic.id;
        }
      }

      // extId amarra a questão à prova e ao número no caderno: é o que torna a
      // reimportação segura.
      const extId = `${exam.slug}#${question.number}`;
      const existing = await tx.question.findUnique({ where: { extId } });

      const data = {
        examId: examRecord.id,
        year: exam.year,
        number: question.number,
        statement: question.statement,
        answerKey: question.answerKey,
        themeId: theme.id,
        subthemeId,
        topicId,
        difficulty: question.difficulty,
        keywords: question.keywords,
        source: exam.source,
        reference: question.reference ?? null,
        reviewNote: question.reviewNote ?? null,
      };

      if (existing) {
        await tx.question.update({ where: { extId }, data });
        // Alternativas são substituídas em bloco: mais simples e mais seguro
        // que casar letra a letra quando o enunciado foi corrigido.
        await tx.alternative.deleteMany({ where: { questionId: existing.id } });
        await tx.alternative.createMany({
          data: question.alternatives.map((alt) => ({
            questionId: existing.id,
            letter: alt.letter,
            text: alt.text,
          })),
        });
        updated += 1;
      } else {
        const record = await tx.question.create({ data: { ...data, extId } });
        await tx.alternative.createMany({
          data: question.alternatives.map((alt) => ({
            questionId: record.id,
            letter: alt.letter,
            text: alt.text,
          })),
        });
        created += 1;
      }
    }

    return { examId: examRecord.id, created, updated };
  }, { timeout: 60_000 });

  if (options.recompute !== false) {
    await recomputeAnalysis(client);
  }

  return {
    examSlug: exam.slug,
    examId: result.examId,
    created: result.created,
    updated: result.updated,
    themesCreated,
    subthemesCreated,
    topicsCreated,
  };
}
