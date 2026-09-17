/**
 * Taxonomia de assuntos em três níveis:
 *
 *   Tema          Cardiologia
 *   └ Subtema     Síndromes coronarianas          ← o "assunto" do ranking
 *     └ Tópico    IAM com supra — trombólise      ← o detalhe clicável
 *
 * O ranking de incidência é calculado no nível de **subtema**, exibido como
 * "Tema — Subtema". Clicar num assunto abre a lista de tópicos com a
 * incidência de cada um.
 *
 * Importar uma prova nova não exige tocar neste arquivo: o importador cria
 * tema, subtema e tópico ausentes automaticamente (ver src/lib/import.ts).
 * Esta lista é só um mapa de estudo opcional e estável — preencha-a conforme
 * for populando o banco ENARE, ou deixe vazia e deixe o importador criar tudo.
 */


export interface TopicSeed {
  slug: string;
  name: string;
}

export interface SubthemeSeed {
  slug: string;
  name: string;
  topics: TopicSeed[];
}

export interface ThemeSeed {
  slug: string;
  name: string;
  order: number;
  subthemes: SubthemeSeed[];
}

/** Normaliza um nome em slug: sem acentos, minúsculo, hifenizado. */
export function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Slug de tópico é prefixado pelo subtema para garantir unicidade global:
 * "Tratamento" aparece em dezenas de subtemas diferentes.
 */
export function topicSlug(subthemeSlug: string, topicName: string): string {
  return `${subthemeSlug}--${slugify(topicName)}`;
}

/** Definição compacta: tópicos entram como nomes, os slugs são derivados. */
type RawTheme = [themeSlug: string, themeName: string, subthemes: RawSubtheme[]];
type RawSubtheme = [subthemeSlug: string, subthemeName: string, topics: string[]];

const RAW: RawTheme[] = [
];

export const TAXONOMY: ThemeSeed[] = RAW.map(([themeSlug, themeName, subthemes], index) => ({
  slug: themeSlug,
  name: themeName,
  order: index + 1,
  subthemes: subthemes.map(([subthemeSlug, subthemeName, topics]) => ({
    slug: subthemeSlug,
    name: subthemeName,
    topics: topics.map((name) => ({ slug: topicSlug(subthemeSlug, name), name })),
  })),
}));

/** Mapa slug de subtema -> slug de tema, para validar importações. */
export const SUBTHEME_TO_THEME: Record<string, string> = Object.fromEntries(
  TAXONOMY.flatMap((theme) => theme.subthemes.map((sub) => [sub.slug, theme.slug])),
);

export const TAXONOMY_COUNTS = {
  themes: TAXONOMY.length,
  subthemes: TAXONOMY.reduce((sum, theme) => sum + theme.subthemes.length, 0),
  topics: TAXONOMY.reduce(
    (sum, theme) => sum + theme.subthemes.reduce((acc, sub) => acc + sub.topics.length, 0),
    0,
  ),
};
