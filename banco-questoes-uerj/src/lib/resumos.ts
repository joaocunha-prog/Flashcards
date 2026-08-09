import { readAnalysis, type SubjectEntry } from './analysis';
import { RESUMO_CONTENT } from '@data/resumos/content';
import { RESUMO_SLUGS } from '@data/resumos/slugs';

/**
 * Resumos médicos dos assuntos de maior incidência (Etapa 6).
 *
 * O TEXTO do resumo mora em `data/resumos/` (arquivo estático versionado no
 * git, mesmo padrão de `data/provas/` e `data/comentarios/`) — não há tabela
 * no Prisma para isso, porque não é dado gerado pelo usuário nem precisa de
 * consulta relacional. Os NÚMEROS (posição, incidência, % acumulado) nunca
 * vêm do arquivo estático: são lidos do ranking 80/20 já calculado por
 * `readAnalysis()`, então se o corpus crescer e a ordem mudar, a página
 * reflete o ranking atual automaticamente, sem editar nada aqui.
 *
 * Em desenvolvimento, se `RESUMO_SLUGS` e `RESUMO_CONTENT` saírem de
 * sincronia (esqueceu de registrar um resumo novo nos dois lugares), um
 * aviso é emitido no console do servidor.
 */

if (process.env.NODE_ENV !== 'production') {
  for (const slug of RESUMO_SLUGS) {
    if (!RESUMO_CONTENT[slug]) {
      // eslint-disable-next-line no-console
      console.warn(
        `[resumos] slug "${slug}" está em data/resumos/slugs.ts mas não tem conteúdo em data/resumos/content.ts`,
      );
    }
  }
}

export interface ResumoSummary {
  slug: string;
  rank: number;
  name: string;
  themeName: string;
  themeSlug: string;
  /** "Tema — Assunto" */
  label: string;
  total: number;
  percent: number;
  cumulativePercent: number;
  isPareto: boolean;
}

export interface Resumo extends ResumoSummary {
  content: string;
}

function toSummary(subject: SubjectEntry): ResumoSummary {
  return {
    slug: subject.slug,
    rank: subject.rank,
    name: subject.name,
    themeName: subject.themeName,
    themeSlug: subject.themeSlug,
    label: subject.label,
    total: subject.total,
    percent: subject.percent,
    cumulativePercent: subject.cumulativePercent,
    isPareto: subject.isPareto,
  };
}

/**
 * Lista os resumos disponíveis, na ordem real do ranking de incidência —
 * não na ordem em que foram escritos.
 */
export async function listResumos(): Promise<ResumoSummary[]> {
  const analysis = await readAnalysis();
  const bySlug = new Set(Object.keys(RESUMO_CONTENT));

  return analysis.subjects
    .filter((subject) => bySlug.has(subject.slug))
    .sort((a, b) => a.rank - b.rank)
    .map(toSummary);
}

/** Um resumo completo, ou null se o assunto não tiver conteúdo escrito. */
export async function getResumo(slug: string): Promise<Resumo | null> {
  const content = RESUMO_CONTENT[slug];
  if (!content) return null;

  const analysis = await readAnalysis();
  const subject = analysis.subjects.find((s) => s.slug === slug);
  if (!subject) return null;

  return { ...toSummary(subject), content };
}
