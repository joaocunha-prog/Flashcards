import type { Difficulty, PrismaClient } from '@prisma/client';
import { prisma as defaultPrisma } from './prisma';

/**
 * Motor de análise da banca (Etapa 1).
 *
 * O ranking principal é o de **assuntos** — o par tema/subtema, exibido como
 * "Neurologia — Síndromes vasculares". É nesse nível que a curva 80/20 é
 * calculada, porque "estudar Neurologia" não é uma instrução acionável e
 * "estudar síndromes vasculares" é. Cada assunto carrega a lista de tópicos
 * que o compõem, com a incidência de cada um, que a interface revela ao clique.
 *
 * O ranking de temas continua sendo calculado, mas serve de agregado para
 * filtros e para o blueprint dos simulados — não é o que a tela de análise
 * apresenta como lista de estudo.
 *
 * Tudo aqui é *derivado*: as tabelas de estatística podem ser apagadas e
 * reconstruídas a partir das questões. Importar uma prova e chamar
 * `recomputeAnalysis()` basta para o ranking e o 80/20 se atualizarem.
 *
 * Provas marcadas com `excludeFromStats` (simulados e provas geradas) ficam
 * fora do cálculo: são derivadas da distribuição histórica, então contá-las
 * reforçaria artificialmente os assuntos que já lideram.
 */

export const PARETO_CUTOFF = 80;

const DIFFICULTY_WEIGHT: Record<Difficulty, number> = {
  FACIL: 1,
  MEDIA: 2,
  DIFICIL: 3,
};

export interface TopicEntry {
  topicId: string;
  slug: string;
  name: string;
  total: number;
  /** Sobre o corpus inteiro. */
  percent: number;
  /** Dentro do próprio assunto. */
  percentWithinSubject: number;
  rank: number;
  perYear: Record<string, number>;
  avgDifficulty: number;
}

/** Uma linha do ranking: o par tema/subtema. */
export interface SubjectEntry {
  subthemeId: string;
  slug: string;
  name: string;
  themeSlug: string;
  themeName: string;
  /** "Neurologia — Síndromes vasculares" */
  label: string;
  total: number;
  percent: number;
  cumulativePercent: number;
  rank: number;
  isPareto: boolean;
  perYear: Record<string, number>;
  avgDifficulty: number;
  topics: TopicEntry[];
}

export interface ThemeRankingEntry {
  themeId: string;
  slug: string;
  name: string;
  total: number;
  percent: number;
  cumulativePercent: number;
  rank: number;
  isPareto: boolean;
  perYear: Record<string, number>;
  avgDifficulty: number;
}

export interface AnalysisResult {
  totalQuestions: number;
  totalExams: number;
  years: number[];
  paretoCutoff: number;
  /** Ranking principal, por assunto (tema — subtema). */
  subjects: SubjectEntry[];
  /** Assuntos que somam até o corte de 80% — a lista de estudo. */
  paretoSubjects: SubjectEntry[];
  /** Agregado por tema, usado em filtros e no blueprint dos simulados. */
  themes: ThemeRankingEntry[];
  difficultyDistribution: Record<Difficulty, number>;
  /** Questões sem subtema classificado (não entram no ranking de assuntos). */
  unclassified: number;
  computedAt: string;
}

function round(value: number, decimals = 2): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

interface Bucket {
  slug: string;
  name: string;
  total: number;
  perYear: Record<string, number>;
  difficultySum: number;
}

function newBucket(slug: string, name: string): Bucket {
  return { slug, name, total: 0, perYear: {}, difficultySum: 0 };
}

function addToBucket(bucket: Bucket, year: number, difficulty: Difficulty) {
  bucket.total += 1;
  bucket.perYear[String(year)] = (bucket.perYear[String(year)] ?? 0) + 1;
  bucket.difficultySum += DIFFICULTY_WEIGHT[difficulty];
}

/**
 * Lê o corpus histórico e devolve o ranking completo, sem gravar nada.
 * Com o banco vazio, devolve uma análise zerada — e não um erro.
 */
export async function computeAnalysis(
  client: PrismaClient = defaultPrisma,
): Promise<AnalysisResult> {
  const questions = await client.question.findMany({
    where: { exam: { excludeFromStats: false } },
    select: {
      year: true,
      difficulty: true,
      examId: true,
      themeId: true,
      subthemeId: true,
      topicId: true,
      theme: { select: { slug: true, name: true } },
      subtheme: { select: { slug: true, name: true } },
      topic: { select: { slug: true, name: true } },
    },
  });

  const totalQuestions = questions.length;
  const examIds = new Set(questions.map((q) => q.examId));
  const years = Array.from(new Set(questions.map((q) => q.year))).sort((a, b) => a - b);

  const difficultyDistribution: Record<Difficulty, number> = {
    FACIL: 0,
    MEDIA: 0,
    DIFICIL: 0,
  };

  const themeBuckets = new Map<string, Bucket>();
  const subjectBuckets = new Map<string, Bucket & { themeSlug: string; themeName: string }>();
  const topicBuckets = new Map<string, Bucket & { subthemeId: string }>();
  let unclassified = 0;

  for (const question of questions) {
    difficultyDistribution[question.difficulty] += 1;

    const themeBucket =
      themeBuckets.get(question.themeId) ??
      newBucket(question.theme.slug, question.theme.name);
    addToBucket(themeBucket, question.year, question.difficulty);
    themeBuckets.set(question.themeId, themeBucket);

    if (!question.subthemeId || !question.subtheme) {
      unclassified += 1;
      continue;
    }

    const subjectBucket =
      subjectBuckets.get(question.subthemeId) ??
      Object.assign(newBucket(question.subtheme.slug, question.subtheme.name), {
        themeSlug: question.theme.slug,
        themeName: question.theme.name,
      });
    addToBucket(subjectBucket, question.year, question.difficulty);
    subjectBuckets.set(question.subthemeId, subjectBucket);

    if (question.topicId && question.topic) {
      const topicBucket =
        topicBuckets.get(question.topicId) ??
        Object.assign(newBucket(question.topic.slug, question.topic.name), {
          subthemeId: question.subthemeId,
        });
      addToBucket(topicBucket, question.year, question.difficulty);
      topicBuckets.set(question.topicId, topicBucket);
    }
  }

  // Tópicos agrupados por assunto, já ordenados por incidência.
  const topicsBySubject = new Map<string, TopicEntry[]>();
  for (const [topicId, bucket] of topicBuckets) {
    const subjectTotal = subjectBuckets.get(bucket.subthemeId)?.total ?? 0;
    const list = topicsBySubject.get(bucket.subthemeId) ?? [];
    list.push({
      topicId,
      slug: bucket.slug,
      name: bucket.name,
      total: bucket.total,
      percent: totalQuestions === 0 ? 0 : round((bucket.total / totalQuestions) * 100),
      percentWithinSubject:
        subjectTotal === 0 ? 0 : round((bucket.total / subjectTotal) * 100),
      rank: 0,
      perYear: bucket.perYear,
      avgDifficulty: round(bucket.difficultySum / bucket.total),
    });
    topicsBySubject.set(bucket.subthemeId, list);
  }

  for (const list of topicsBySubject.values()) {
    list.sort((a, b) => {
      if (b.total !== a.total) return b.total - a.total;
      return a.name.localeCompare(b.name, 'pt-BR');
    });
    list.forEach((topic, index) => {
      topic.rank = index + 1;
    });
  }

  // Ranking de assuntos. Desempate alfabético mantém a ordem estável entre
  // execuções quando dois assuntos têm a mesma incidência.
  const sortedSubjects = Array.from(subjectBuckets.entries()).sort((a, b) => {
    if (b[1].total !== a[1].total) return b[1].total - a[1].total;
    return a[1].name.localeCompare(b[1].name, 'pt-BR');
  });

  let subjectCumulative = 0;
  const subjects: SubjectEntry[] = sortedSubjects.map(([subthemeId, bucket], index) => {
    const percent = totalQuestions === 0 ? 0 : (bucket.total / totalQuestions) * 100;
    // O corte é avaliado ANTES de somar o assunto atual: assim o assunto que
    // cruza a linha dos 80% é incluído, e não excluído por uma fração de ponto.
    const isPareto = subjectCumulative < PARETO_CUTOFF;
    subjectCumulative += percent;

    return {
      subthemeId,
      slug: bucket.slug,
      name: bucket.name,
      themeSlug: bucket.themeSlug,
      themeName: bucket.themeName,
      label: `${bucket.themeName} — ${bucket.name}`,
      total: bucket.total,
      percent: round(percent),
      cumulativePercent: round(subjectCumulative),
      rank: index + 1,
      isPareto,
      perYear: bucket.perYear,
      avgDifficulty: round(bucket.difficultySum / bucket.total),
      topics: topicsBySubject.get(subthemeId) ?? [],
    };
  });

  const sortedThemes = Array.from(themeBuckets.entries()).sort((a, b) => {
    if (b[1].total !== a[1].total) return b[1].total - a[1].total;
    return a[1].name.localeCompare(b[1].name, 'pt-BR');
  });

  let themeCumulative = 0;
  const themes: ThemeRankingEntry[] = sortedThemes.map(([themeId, bucket], index) => {
    const percent = totalQuestions === 0 ? 0 : (bucket.total / totalQuestions) * 100;
    const isPareto = themeCumulative < PARETO_CUTOFF;
    themeCumulative += percent;

    return {
      themeId,
      slug: bucket.slug,
      name: bucket.name,
      total: bucket.total,
      percent: round(percent),
      cumulativePercent: round(themeCumulative),
      rank: index + 1,
      isPareto,
      perYear: bucket.perYear,
      avgDifficulty: round(bucket.difficultySum / bucket.total),
    };
  });

  return {
    totalQuestions,
    totalExams: examIds.size,
    years,
    paretoCutoff: PARETO_CUTOFF,
    subjects,
    paretoSubjects: subjects.filter((s) => s.isPareto),
    themes,
    difficultyDistribution,
    unclassified,
    computedAt: new Date().toISOString(),
  };
}

/**
 * Recalcula e persiste as estatísticas. Idempotente: rodar duas vezes seguidas
 * produz exatamente o mesmo estado.
 */
export async function recomputeAnalysis(
  client: PrismaClient = defaultPrisma,
): Promise<AnalysisResult> {
  const analysis = await computeAnalysis(client);

  await client.$transaction(
    async (tx) => {
      await tx.topicStat.deleteMany();
      await tx.subthemeStat.deleteMany();
      await tx.themeStat.deleteMany();

      if (analysis.themes.length > 0) {
        await tx.themeStat.createMany({
          data: analysis.themes.map((theme) => ({
            themeId: theme.themeId,
            total: theme.total,
            percent: theme.percent,
            cumulativePercent: theme.cumulativePercent,
            rank: theme.rank,
            isPareto: theme.isPareto,
            perYear: theme.perYear,
            avgDifficulty: theme.avgDifficulty,
          })),
        });
      }

      if (analysis.subjects.length > 0) {
        await tx.subthemeStat.createMany({
          data: analysis.subjects.map((subject) => ({
            subthemeId: subject.subthemeId,
            total: subject.total,
            percent: subject.percent,
            cumulativePercent: subject.cumulativePercent,
            rank: subject.rank,
            isPareto: subject.isPareto,
            perYear: subject.perYear,
            avgDifficulty: subject.avgDifficulty,
          })),
        });

        const topicRows = analysis.subjects.flatMap((subject) =>
          subject.topics.map((topic) => ({
            topicId: topic.topicId,
            total: topic.total,
            percent: topic.percent,
            percentWithinSubject: topic.percentWithinSubject,
            rank: topic.rank,
            perYear: topic.perYear,
            avgDifficulty: topic.avgDifficulty,
          })),
        );
        if (topicRows.length > 0) {
          await tx.topicStat.createMany({ data: topicRows });
        }
      }

      // Desnormaliza a incidência em cada questão para permitir ordenar o banco
      // por relevância sem join — inclusive nas questões de provas geradas, que
      // não entram no cálculo mas precisam do valor para filtros.
      await tx.question.updateMany({ data: { themeFrequency: 0, subjectFrequency: 0 } });

      for (const theme of analysis.themes) {
        await tx.question.updateMany({
          where: { themeId: theme.themeId },
          data: { themeFrequency: theme.percent },
        });
      }
      for (const subject of analysis.subjects) {
        await tx.question.updateMany({
          where: { subthemeId: subject.subthemeId },
          data: { subjectFrequency: subject.percent },
        });
      }

      await tx.analysisSnapshot.create({
        data: {
          totalQuestions: analysis.totalQuestions,
          totalExams: analysis.totalExams,
          years: analysis.years,
          paretoCutoff: analysis.paretoCutoff,
          payload: analysis as unknown as object,
        },
      });
    },
    { timeout: 120_000 },
  );

  return analysis;
}

/**
 * Lê a análise já persistida (rápido, sem varrer as questões). Cai para o
 * cálculo ao vivo caso as estatísticas ainda não tenham sido geradas.
 */
export async function readAnalysis(
  client: PrismaClient = defaultPrisma,
): Promise<AnalysisResult> {
  const latest = await client.analysisSnapshot.findFirst({
    orderBy: { createdAt: 'desc' },
  });

  if (!latest) return computeAnalysis(client);

  const payload = latest.payload as unknown as AnalysisResult;
  // Snapshots gravados por uma versão anterior podem não ter os campos novos.
  if (!Array.isArray(payload?.subjects)) return computeAnalysis(client);

  return payload;
}

/**
 * Distribui `size` questões entre os assuntos conforme a incidência histórica —
 * o blueprint usado pelos simulados "por incidência" e pela geração de provas.
 *
 * Usa maiores restos (método de Hare) para que a soma feche exatamente em
 * `size`, sem sobrar nem faltar questão por arredondamento.
 */
export interface BlueprintSlot {
  subthemeId: string;
  slug: string;
  name: string;
  themeSlug: string;
  themeName: string;
  label: string;
  count: number;
  /** Tópicos do assunto, para orientar a geração de questões. */
  topics: string[];
}

export function buildBlueprint(subjects: SubjectEntry[], size: number): BlueprintSlot[] {
  if (subjects.length === 0 || size <= 0) return [];

  const allocated = subjects.map((subject) => {
    const exact = (subject.percent / 100) * size;
    return { subject, exact, count: Math.floor(exact), remainder: exact - Math.floor(exact) };
  });

  let assigned = allocated.reduce((sum, item) => sum + item.count, 0);
  const byRemainder = allocated.slice().sort((a, b) => b.remainder - a.remainder);

  let index = 0;
  while (assigned < size && byRemainder.length > 0) {
    byRemainder[index % byRemainder.length].count += 1;
    assigned += 1;
    index += 1;
  }

  return allocated
    .filter((item) => item.count > 0)
    .map((item) => ({
      subthemeId: item.subject.subthemeId,
      slug: item.subject.slug,
      name: item.subject.name,
      themeSlug: item.subject.themeSlug,
      themeName: item.subject.themeName,
      label: item.subject.label,
      count: item.count,
      topics: item.subject.topics.map((topic) => topic.name),
    }));
}
