/**
 * Renderizador mínimo de markdown para as explicações do Claude.
 *
 * Cobre o que os comentários usam: `#`/`##` para seções, `**negrito**`,
 * `` `código` ``, listas e **tabelas**. Não vale a pena uma dependência de
 * markdown completa para isso.
 *
 * As tabelas importam mais do que parece: um quarto dos comentários abre a
 * "Revisão rápida" com uma comparação lado a lado (esclerose múltipla versus
 * NMOSD, pré-renal versus NTA, AL versus ATTR), que é justamente onde a
 * distinção fica clara. Sem suporte, essas linhas caíam no caso genérico e
 * viravam um parágrafo com os pipes literais, ilegível.
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

type Align = 'left' | 'center' | 'right' | null;

/** Uma linha de tabela: começa com `|` e tem ao menos mais um separador. */
function isTableRow(line: string): boolean {
  const trimmed = line.trim();
  return trimmed.startsWith('|') && trimmed.indexOf('|', 1) !== -1;
}

/** Divide `| a | b |` em `['a', 'b']`, descartando as bordas. */
function splitRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

/**
 * A linha separadora (`| --- | :---: |`) é o que distingue uma tabela de um
 * parágrafo que por acaso começa com pipe. Toda célula precisa ser só hífens,
 * com dois-pontos opcionais nas pontas para o alinhamento.
 */
function isTableDelimiter(line: string): boolean {
  if (!isTableRow(line)) return false;
  const cells = splitRow(line);
  return cells.length > 0 && cells.every((cell) => /^:?-+:?$/.test(cell));
}

function parseAlign(cell: string): Align {
  const left = cell.startsWith(':');
  const right = cell.endsWith(':');
  if (left && right) return 'center';
  if (right) return 'right';
  if (left) return 'left';
  return null;
}

function cellAttrs(align: Align): string {
  return align ? ` data-align="${align}"` : '';
}

/**
 * O wrapper com rolagem própria é o que impede uma tabela de cinco colunas de
 * estourar a largura da página no celular.
 */
function renderTable(header: string[], aligns: Align[], rows: string[][]): string {
  const columns = header.length;
  const out: string[] = ['<div class="table-wrap"><table>', '<thead><tr>'];

  header.forEach((cell, i) => {
    out.push(`<th${cellAttrs(aligns[i] ?? null)}>${inline(cell)}</th>`);
  });
  out.push('</tr></thead>', '<tbody>');

  for (const row of rows) {
    out.push('<tr>');
    for (let i = 0; i < columns; i += 1) {
      // Linha com menos células que o cabeçalho vira célula vazia em vez de
      // desalinhar a tabela inteira.
      out.push(`<td${cellAttrs(aligns[i] ?? null)}>${inline(row[i] ?? '')}</td>`);
    }
    out.push('</tr>');
  }

  out.push('</tbody></table></div>');
  return out.join('');
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

  // Laço indexado, e não `for…of`: a tabela só é reconhecida olhando a LINHA
  // SEGUINTE (a separadora), e consome várias linhas de uma vez.
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();

    if (line === '') {
      flushParagraph();
      closeList();
      continue;
    }

    if (isTableRow(line) && index + 1 < lines.length && isTableDelimiter(lines[index + 1])) {
      flushParagraph();
      closeList();

      const header = splitRow(line);
      const aligns = splitRow(lines[index + 1]).map(parseAlign);

      const rows: string[][] = [];
      let cursor = index + 2;
      while (cursor < lines.length && isTableRow(lines[cursor])) {
        rows.push(splitRow(lines[cursor]));
        cursor += 1;
      }

      html.push(renderTable(header, aligns, rows));
      index = cursor - 1; // o `index += 1` do laço posiciona na linha seguinte
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
