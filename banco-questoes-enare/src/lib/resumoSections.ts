import { renderMarkdown } from './markdown';

/**
 * Divide o markdown de um resumo em seções, uma por título `## <emoji> <título>`.
 *
 * Diferente de `classifySection()` (que casa por trecho de texto, pensado para
 * os 9 títulos livres das explicações de questão), aqui o conjunto de títulos
 * é fixo e sempre começa por um emoji específico — então a classificação é
 * por igualdade exata do emoji, sem ambiguidade.
 *
 * O HTML de cada seção é gerado chamando `renderMarkdown()` só com o corpo
 * (sem a linha do título), reaproveitando o mesmo parser de negrito/lista/
 * tabela usado nas explicações — sem duplicar lógica de parsing.
 */

export type ResumoSectionKind =
  | 'essencial'
  | 'pearls'
  | 'pitfalls'
  | 'enare'
  | 'atualizacao'
  | 'conceito'
  | 'quadro'
  | 'diagnostico'
  | 'gravidade'
  | 'tratamento'
  | 'diferencial'
  | 'mnemonicos'
  | 'tabela'
  | 'referencias'
  | 'outra';

export interface ResumoSection {
  id: string;
  emoji: string;
  title: string;
  kind: ResumoSectionKind;
  html: string;
}

const KIND_BY_EMOJI: Record<string, ResumoSectionKind> = {
  '🎯': 'essencial',
  '💎': 'pearls',
  '⚠️': 'pitfalls',
  '📝': 'enare',
  '🆕': 'atualizacao',
  '🧠': 'conceito',
  '🩺': 'quadro',
  '🔎': 'diagnostico',
  '🚨': 'gravidade',
  '💊': 'tratamento',
  '🔀': 'diferencial',
  '🔤': 'mnemonicos',
  '📋': 'tabela',
  '📚': 'referencias',
};

/** Rótulo curto para o índice — mais compacto que o título completo da seção. */
export const RESUMO_SECTION_LABEL: Record<ResumoSectionKind, string> = {
  essencial: 'Essencial',
  pearls: 'Pearls',
  pitfalls: 'Pitfalls',
  enare: 'Como a ENARE cobra',
  atualizacao: 'Atualização',
  conceito: 'Conceito',
  quadro: 'Quadro clínico',
  diagnostico: 'Diagnóstico',
  gravidade: 'Gravidade',
  tratamento: 'Tratamento',
  diferencial: 'Diferencial',
  mnemonicos: 'Mnemônicos',
  tabela: 'Tabela',
  referencias: 'Referências',
  outra: 'Outros',
};

function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function parseResumoSections(markdown: string): ResumoSection[] {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const sections: ResumoSection[] = [];

  let current: { emoji: string; title: string; kind: ResumoSectionKind } | null = null;
  let buffer: string[] = [];

  function flush() {
    if (current) {
      sections.push({
        id: current.kind === 'outra' ? slugify(current.title) : current.kind,
        emoji: current.emoji,
        title: current.title,
        kind: current.kind,
        html: renderMarkdown(buffer.join('\n')),
      });
    }
    buffer = [];
  }

  for (const line of lines) {
    const heading = /^##\s+(\S+)\s+(.*)$/.exec(line.trim());
    if (heading) {
      flush();
      const emoji = heading[1];
      current = { emoji, title: heading[2].trim(), kind: KIND_BY_EMOJI[emoji] ?? 'outra' };
    } else {
      buffer.push(line);
    }
  }
  flush();

  return sections;
}
