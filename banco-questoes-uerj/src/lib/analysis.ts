import type { Difficulty, PrismaClient } from '@prisma/client';
import { prisma as defaultPrisma } from './prisma';

/**
 * Motor de análise da banca (Etapa 1).
 *
 * Tudo aqui é *derivado*: as tabelas ThemeStat/SubthemeStat podem ser
 * apagadas e reconstruídas a qualquer momento a partir das questões. Importar
 * uma prova nova e chamar `recomputeAnalysis()` é o bastante para o ranking e
 * a lista 80/20 se atualizarem — nenhum número é digitado à mão.
 *
 * Simulados inéditos (`exam.excludeFromStats`) ficam fora do cálculo: eles são
 * gerados *a partir* da distribuição histórica, então contá-los reforçaria
 * artificialmente os temas que já lideram o ranking.
 */

export const PARETO_CUTOFF = 80;

const DIFFICULTY_WEIGHT: Record<Difficulty, number> = {
  FACIL: 1,
  MEDIA: 2,
  DIFICIL: 3,
};

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

export interface SubthemeRankingEntry {
  subthemeId: string;
  slug: string;
  name: string;
  themeSlug: string;
  themeName: string;
  total: number;
  percent: number;
  rank: number;
  avgDifficulty: number;
}

export interface AnalysisResult {
  totalQuestions: number;
  totalExams: number;
  years: number[];
  paretoCutoff: number;
  themes: ThemeRankingEntry[];
  subthemes: SubthemeRankingEntry[];
  /** Temas que somam até o corte de 80% do acumulado — a lista de estudo. */
  paretoThemes: ThemeRankingEntry[];
  difficultyDistribution: Record<Difficulty, number>;
  computedAt: string;
}

function round(value: number, decimals = 2): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

/**
 * Lê o corpus histórico e devolve o ranking completo, sem gravar nada.
 * Útil para pré-visualizar o efeito de uma importação.
 */
export async function computeAnalysis(
  client: PrismaClient = defaultPrisma,
): Promise<AnalysisResult> {
  const questions = await client.question.findMany({
    where: { exam: { excludeFromStats: false } },
    select: {
      year: true,
      difficulty: true,
      themeId: true,
      subthemeId: true,
      theme: { select: { slug: true, name: true } },
      subtheme: { select: { slug: true, name: true } },
      examId: true,
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

  interface Bucket {
    slug: string;
    name: string;
    total: number;
    perYear: Record<string, number>;
    difficultySum: number;
    themeSlug?: string;
    themeName?: string;
  }

  const themeBuckets = new Map<string, Bucket>();
  const subthemeBuckets = new Map<string, Bucket>();

  for (const question of questions) {
    difficultyDistribution[question.difficulty] += 1;

    const themeBucket = themeBuckets.get(question.themeId) ?? {
      slug: question.theme.slug,
      name: question.theme.name,
      total: 0,
      perYear: {},
      difficultySum: 0,
    };
    themeBucket.total += 1;
    themeBucket.perYear[String(question.year)] =
      (themeBucket.perYear[String(question.year)] ?? 0) + 1;
    themeBucket.difficultySum += DIFFICULTY_WEIGHT[question.difficulty];
    themeBuckets.set(question.themeId, themeBucket);

    if (question.subthemeId && question.subtheme) {
      const subBucket = subthemeBuckets.get(question.subthemeId) ?? {
        slug: question.subtheme.slug,
        name: question.subtheme.name,
        total: 0,
        perYear: {},
        difficultySum: 0,
        themeSlug: question.theme.slug,
        themeName: question.theme.name,
      };
      subBucket.total += 1;
      subBucket.perYear[String(question.year)] =
        (subBucket.perYear[String(question.year)] ?? 0) + 1;
      subBucket.difficultySum += DIFFICULTY_WEIGHT[question.difficulty];
      subthemeBuckets.set(question.subthemeId, subBucket);
    }
  }

  // Ranking de temas: incidência decrescente, desempate alfabético para que a
  // ordem seja estável entre execuções.
  const sortedThemes = Array.from(themeBuckets.entries()).sort((a, b) => {
    if (b[1].total !== a[1].total) return b[1].total - a[1].total;
    return a[1].name.localeCompare(b[1].name, 'pt-BR');
  });

  let cumulative = 0;
  const themes: ThemeRankingEntry[] = sortedThemes.map(([themeId, bucket], index) => {
    const percent = totalQuestions === 0 ? 0 : (bucket.total / totalQuestions) * 100;
    // O corte de Pareto é avaliado ANTES de somar o tema atual: um tema entra
    // na lista se o acumulado até o anterior ainda não atingiu 80%. Assim o
    // tema que cruza a linha dos 80% é incluído, e não excluído por 0,1%.
    const isPareto = cumulative < PARETO_CUTOFF;
    cumulative += percent;

    return {
      themeId,
      slug: bucket.slug,
      name: bucket.name,
      total: bucket.total,
      percent: round(percent),
      cumulativePercent: round(cumulative),
      rank: index + 1,
      isPareto,
      perYear: bucket.perYear,
      avgDifficulty: bucket.total === 0 ? 0 : round(bucket.difficultySum / bucket.total),
    };
  });

  const sortedSubthemes = Array.from(subthemeBuckets.entries()).sort((a, b) => {
    if (b[1].total !== a[1].total) return b[1].total - a[1].total;
    return a[1].name.localeCompare(b[1].name, 'pt-BR');
  });

  const subthemes: SubthemeRankingEntry[] = sortedSubthemes.map(([subthemeId, bucket], index) => ({
    subthemeId,
    slug: bucket.slug,
    name: bucket.name,
    themeSlug: bucket.themeSlug ?? '',
    themeName: bucket.themeName ?? '',
    total: bucket.total,
    percent: totalQuestions === 0 ? 0 : round((bucket.total / totalQuestions) * 100),
    rank: index + 1,
    avgDifficulty: bucket.total === 0 ? 0 : round(bucket.difficultySum / bucket.total),
  }));

  return {
    totalQuestions,
    totalExams: examIds.size,
    years,
    paretoCutoff: PARETO_CUTOFF,
    themes,
    subthemes,
    paretoThemes: themes.filter((t) => t.isPareto),
    difficultyDistribution,
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

  await client.$transaction(async (tx) => {
    await tx.themeStat.deleteMany();
    await tx.subthemeStat.deleteMany();

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

    if (analysis.subthemes.length > 0) {
      await tx.subthemeStat.createMany({
        data: analysis.subthemes.map((sub) => ({
          subthemeId: sub.subthemeId,
          total: sub.total,
          percent: sub.percent,
          rank: sub.rank,
          perYear: {},
          avgDifficulty: sub.avgDifficulty,
        })),
      });
    }

    // Desnormaliza a frequência do tema em cada questão para permitir ordenar
    // o banco por incidência sem join — inclusive nas questões de simulado,
    // que não entram no cálculo mas precisam do valor para filtros.
    for (const theme of analysis.themes) {
      await tx.question.updateMany({
        where: { themeId: theme.themeId },
        data: { themeFrequency: theme.percent },
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
  });

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

  if (!latest) {
    return computeAnalysis(client);
  }

  return latest.payload as unknown as AnalysisResult;
}

/**
 * Distribui `size` questões entre os temas conforme a incidência histórica —
 * o blueprint usado pelos simulados "por incidência" e pelo simulado inédito.
 *
 * Usa maiores restos (método de Hare) para que a soma feche exatamente em
 * `size`, sem sobrar nem faltar questão por arredondamento.
 */
export function buildBlueprint(
  themes: ThemeRankingEntry[],
  size: number,
): Array<{ themeId: string; slug: string; name: string; count: number }> {
  if (themes.length === 0 || size <= 0) return [];

  const exact = themes.map((theme) => ({
    theme,
    exact: (theme.percent / 100) * size,
  }));

  const allocated = exact.map((item) => ({
    ...item,
    count: Math.floor(item.exact),
    remainder: item.exact - Math.floor(item.exact),
  }));

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
      themeId: item.theme.themeId,
      slug: item.theme.slug,
      name: item.theme.name,
      count: item.count,
    }));
}
