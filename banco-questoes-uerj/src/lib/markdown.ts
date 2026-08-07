/**
 * Renderizador mínimo de markdown para as explicações do Claude.
 *
 * Cobre só o que o prompt pede: `#`/`##` para seções, `**negrito**`,
 * `` `código` `` e listas. Não vale a pena uma dependência de markdown
 * completa para isso.
 *
 * Além de converter, o renderizador **classifica as seções**: cada bloco
 * iniciado por um título vira um `<section data-section="...">` cujo tipo é
 * inferido do texto do título. É o que permite ao CSS dar tratamento visual
 * distinto a Pearls, Pitfalls, Base de evidência e Checagem de consistência —
 * o olho encontra a armadilha sem ter que ler o comentário inteiro.
 *
 * A entrada é escapada ANTES de qualquer transformação, então nenhuma tag da
 * resposta do modelo chega ao DOM: as únicas tags no resultado são as que
 * este arquivo constrói.
 */

/** Tipos de seção reconhecidos, para estilização. */
export type SectionKind =
  | 'resposta'
  | 'incorretas'
  | 'evidencia'
  | 'revisao'
  | 'pearls'
  | 'pitfalls'
  | 'mnemonico'
  | 'consistencia'
  | 'referencias'
  | 'outra';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function inline(text: string): string {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
}

function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

/**
 * Infere o tipo pelo texto do título. Casar por trecho (e não por igualdade)
 * tolera variações do modelo — "Pearls (alto rendimento)" continua sendo
 * reconhecido como pearls.
 */
export function classifySection(heading: string): SectionKind {
  const text = normalize(heading);

  if (text.includes('pearl')) return 'pearls';
  if (text.includes('pitfall') || text.includes('pegadinha') || text.includes('armadilha')) {
    return 'pitfalls';
  }
  if (text.includes('mnemon')) return 'mnemonico';
  if (text.includes('evidencia') && !text.includes('consist')) return 'evidencia';
  if (text.includes('consistencia') || text.includes('checagem')) return 'consistencia';
  if (text.includes('referencia')) return 'referencias';
  if (text.includes('erradas') || text.includes('incorret')) return 'incorretas';
  if (text.includes('resposta') || text.includes('gabarito')) return 'resposta';
  if (text.includes('revisao') || text.includes('teoric')) return 'revisao';

  return 'outra';
}

export function renderMarkdown(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const html: string[] = [];

  let listType: 'ul' | 'ol' | null = null;
  let paragraph: string[] = [];
  let sectionOpen = false;

  function flushParagraph() {
    if (paragraph.length === 0) return;
    html.push(`<p>${inline(paragraph.join(' '))}</p>`);
    paragraph = [];
  }

  function closeList() {
    if (!listType) return;
    html.push(`</${listType}>`);
    listType = null;
  }

  function closeSection() {
    if (!sectionOpen) return;
    html.push('</section>');
    sectionOpen = false;
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line === '') {
      flushParagraph();
      closeList();
      continue;
    }

    const heading = /^(#{1,4})\s+(.*)$/.exec(line);
    if (heading) {
      flushParagraph();
      closeList();
      closeSection();

      const title = heading[2];
      const kind = classifySection(title);
      html.push(`<section class="explanation-section" data-section="${kind}">`);
      sectionOpen = true;
      html.push(`<h3>${inline(title)}</h3>`);
      continue;
    }

    // "**B)** motivo" abre um item novo mesmo sem linha em branco antes.
    // Sem isso, as alternativas incorretas — que o modelo costuma escrever em
    // linhas consecutivas — colariam todas num único parágrafo.
    if (/^\*\*[A-E]\)\*\*/.test(line)) {
      flushParagraph();
      closeList();
      html.push(`<p class="alt-item">${inline(line)}</p>`);
      continue;
    }

    const bullet = /^[-*+]\s+(.*)$/.exec(line);
    if (bullet) {
      flushParagraph();
      if (listType !== 'ul') {
        closeList();
        html.push('<ul>');
        listType = 'ul';
      }
      html.push(`<li>${inline(bullet[1])}</li>`);
      continue;
    }

    const numbered = /^\d+[.)]\s+(.*)$/.exec(line);
    if (numbered) {
      flushParagraph();
      if (listType !== 'ol') {
        closeList();
        html.push('<ol>');
        listType = 'ol';
      }
      html.push(`<li>${inline(numbered[1])}</li>`);
      continue;
    }

    closeList();
    paragraph.push(line);
  }

  flushParagraph();
  closeList();
  closeSection();

  return html.join('\n');
}

/** Extrai os títulos das seções presentes, para montar um índice navegável. */
export function extractSections(markdown: string): Array<{ kind: SectionKind; title: string }> {
  const sections: Array<{ kind: SectionKind; title: string }> = [];

  for (const rawLine of markdown.split('\n')) {
    const heading = /^#{1,4}\s+(.*)$/.exec(rawLine.trim());
    if (heading) {
      sections.push({ kind: classifySection(heading[1]), title: heading[1].trim() });
    }
  }

  return sections;
}
