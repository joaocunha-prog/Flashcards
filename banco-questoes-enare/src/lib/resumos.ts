import { prisma } from '@/lib/prisma';
import { RESUMO_CONTENT } from '@data/resumos/content';
import { RESUMO_SLUGS } from '@data/resumos/slugs';

/**
 * Resumos médicos dos assuntos do banco (Etapa 6).
 *
 * O TEXTO do resumo mora em `data/resumos/` (arquivo estático versionado no
 * git, mesmo padrão de `data/provas/` e `data/comentarios/`) — não há tabela
 * no Prisma para o conteúdo em si, porque não é dado gerado pelo usuário nem
 * precisa de consulta relacional. Os NÚMEROS (posição, incidência, %
 * acumulado) vêm de `SubthemeStat`, recalculada por `recomputeAnalysis()` a
 * cada importação — nunca do arquivo estático.
 *
 * Cada resumo pode aparecer em duas vitrines, não excludentes:
 *
 * - **80/20** — `isPareto`, calculado ao vivo a partir da incidência real do
 *   corpus. Segue o ranking sozinho; não precisa de nenhuma marcação manual.
 * - **Selecionados** — `selected`, uma marca editorial em `ResumoSelection`
 *   (tabela no banco, presença de linha = selecionado). Cobre assunto
 *   relevante fora do corte de 80% ou um destaque à parte. É *global*, não
 *   por usuário: é curadoria do conteúdo do banco, alternável pelo botão na
 *   página do resumo.
 *
 * Um assunto só entra em qualquer uma das duas vitrines se já tiver texto em
 * `RESUMO_CONTENT` **e** já existir como `Subtheme` no banco (criado pelo
 * seed da taxonomia ou pela importação de uma prova). Sem isso não há como
 * mostrar tema/incidência, então o resumo fica "escrito" mas ainda invisível
 * na aba — escreva a prova ou a taxonomia primeiro.
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
  /** Posição no ranking de incidência; 0 enquanto o assunto não tem questão nenhuma no corpus. */
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
  selected: boolean;
}

export interface Resumo extends ResumoSummary {
  content: string;
}

function toSummary(
  subtheme: {
    slug: string;
    name: string;
    theme: { slug: string; name: string };
    stat: {
      rank: number;
      total: number;
      percent: number;
      cumulativePercent: number;
      isPareto: boolean;
    } | null;
  },
  selected: boolean,
): ResumoSummary {
  return {
    slug: subtheme.slug,
    rank: subtheme.stat?.rank ?? 0,
    name: subtheme.name,
    themeName: subtheme.theme.name,
    themeSlug: subtheme.theme.slug,
    label: `${subtheme.theme.name} — ${subtheme.name}`,
    total: subtheme.stat?.total ?? 0,
    percent: subtheme.stat?.percent ?? 0,
    cumulativePercent: subtheme.stat?.cumulativePercent ?? 0,
    isPareto: subtheme.stat?.isPareto ?? false,
    selected,
  };
}

/** Assunto sem questão no corpus (rank 0) vai para o fim, em ordem alfabética. */
function byRank(a: ResumoSummary, b: ResumoSummary): number {
  if (a.rank === 0 && b.rank === 0) return a.name.localeCompare(b.name, 'pt-BR');
  if (a.rank === 0) return 1;
  if (b.rank === 0) return -1;
  return a.rank - b.rank;
}

/**
 * Lista os resumos disponíveis, na ordem real do ranking de incidência —
 * não na ordem em que foram escritos.
 */
export async function listResumos(): Promise<ResumoSummary[]> {
  const slugs = Object.keys(RESUMO_CONTENT);
  if (slugs.length === 0) return [];

  const [subthemes, selections] = await Promise.all([
    prisma.subtheme.findMany({
      where: { slug: { in: slugs } },
      include: { theme: true, stat: true },
    }),
    prisma.resumoSelection.findMany({ where: { subjectSlug: { in: slugs } } }),
  ]);

  const selectedSlugs = new Set(selections.map((s) => s.subjectSlug));

  return subthemes
    .map((subtheme) => toSummary(subtheme, selectedSlugs.has(subtheme.slug)))
    .sort(byRank);
}

/** Um resumo completo, ou null se o assunto não tiver conteúdo escrito ou ainda não existir no banco. */
export async function getResumo(slug: string): Promise<Resumo | null> {
  const content = RESUMO_CONTENT[slug];
  if (!content) return null;

  const [subtheme, selection] = await Promise.all([
    prisma.subtheme.findUnique({ where: { slug }, include: { theme: true, stat: true } }),
    prisma.resumoSelection.findUnique({ where: { subjectSlug: slug } }),
  ]);
  if (!subtheme) return null;

  return { ...toSummary(subtheme, selection !== null), content };
}

/** Alterna a marcação "Selecionado" de um assunto. Retorna o novo estado. */
export async function setResumoSelected(slug: string, selected: boolean): Promise<boolean> {
  if (selected) {
    await prisma.resumoSelection.upsert({
      where: { subjectSlug: slug },
      create: { subjectSlug: slug },
      update: {},
    });
  } else {
    await prisma.resumoSelection.deleteMany({ where: { subjectSlug: slug } });
  }
  return selected;
}
