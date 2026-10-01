#!/usr/bin/env node
// Sobe resumos em Markdown para o Notion, incluindo as imagens locais.
//
// As imagens referenciadas no .md (![legenda](figuras/fig1.png), <img src="...">
// ou ![[fig1.png]] do Obsidian) são enviadas pela File Upload API do Notion e
// viram blocos de imagem nativos, com a legenda do markdown como caption.
//
// Uso:
//   node upload.mjs <arquivo.md | pasta> [...] --parent <url-ou-id-da-página>
//   node upload.mjs resumo.md --database <url-ou-id-do-banco> --pdf resumo.pdf
//   node upload.mjs resumo.md --dry-run      (não chama a API; mostra os blocos)

import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { markdownToBlocks } from '@tryfabric/martian';

const NOTION_VERSION = '2022-06-28';
const API = 'https://api.notion.com/v1';
const MAX_SINGLE_PART = 20 * 1024 * 1024;

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.bmp': 'image/bmp',
  '.tif': 'image/tiff',
  '.tiff': 'image/tiff',
  '.heic': 'image/heic',
  '.ico': 'image/vnd.microsoft.icon',
  '.pdf': 'application/pdf',
};

const CALLOUTS = {
  NOTE: '📝',
  TIP: '💡',
  IMPORTANT: '❗',
  WARNING: '⚠️',
  CAUTION: '🛑',
  INFO: 'ℹ️',
  PEARL: '💎',
  PITFALL: '🚩',
};

// ---------- argumentos ----------

function parseArgs(argv) {
  const opts = { files: [], parent: null, database: null, pdf: null, title: null, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--parent') opts.parent = argv[++i];
    else if (a === '--database') opts.database = argv[++i];
    else if (a === '--pdf') opts.pdf = argv[++i];
    else if (a === '--title') opts.title = argv[++i];
    else if (a === '--dry-run') opts.dryRun = true;
    else if (a === '-h' || a === '--help') opts.help = true;
    else opts.files.push(a);
  }
  return opts;
}

const HELP = `Uso:
  node upload.mjs <arquivo.md | pasta> [...] --parent <url-ou-id-da-página>
  node upload.mjs <arquivo.md> --database <url-ou-id-do-banco>

Opções:
  --parent <id|url>    página do Notion onde o resumo será criado como subpágina
  --database <id|url>  banco de dados do Notion onde o resumo vira uma linha
  --pdf <arquivo.pdf>  anexa também o PDF no topo da página (só com um .md)
  --title <texto>      título da página (padrão: primeiro "# título" ou nome do arquivo)
  --dry-run            não chama a API; imprime os blocos que seriam enviados

O token vem de NOTION_TOKEN (variável de ambiente ou arquivo .env nesta pasta).
Sem --parent/--database, usa NOTION_PARENT do .env.`;

function notionId(value) {
  const m = String(value).replace(/-/g, '').match(/[0-9a-f]{32}(?!.*[0-9a-f]{32})/i);
  if (!m) throw new Error(`Não reconheci um ID do Notion em: ${value}`);
  return m[0];
}

async function loadDotEnv() {
  const here = path.dirname(fileURLToPath(import.meta.url));
  for (const file of [path.join(process.cwd(), '.env'), path.join(here, '.env')]) {
    if (!existsSync(file)) continue;
    for (const line of (await readFile(file, 'utf8')).split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, '$2');
    }
  }
}

async function expandInputs(inputs) {
  const out = [];
  for (const input of inputs) {
    const s = await stat(input);
    if (s.isDirectory()) {
      const names = (await readdir(input)).filter((n) => n.toLowerCase().endsWith('.md')).sort();
      out.push(...names.map((n) => path.join(input, n)));
    } else {
      out.push(input);
    }
  }
  return out;
}

// ---------- API do Notion ----------

async function notion(method, endpoint, body, { token, form } = {}) {
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(`${API}${endpoint}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Notion-Version': NOTION_VERSION,
        ...(form ? {} : { 'Content-Type': 'application/json' }),
      },
      body: form ?? (body ? JSON.stringify(body) : undefined),
    });
    if (res.ok) return res.json();
    if ((res.status === 429 || res.status >= 500) && attempt < 5) {
      const wait = Number(res.headers.get('retry-after')) || 2 ** attempt;
      await new Promise((r) => setTimeout(r, wait * 1000));
      continue;
    }
    const text = await res.text();
    let msg = text;
    try {
      msg = JSON.parse(text).message;
    } catch {}
    if (res.status === 404) {
      msg += '\n  → Confira se a página/banco foi compartilhada com a integração (••• → Conexões).';
    }
    throw new Error(`Notion ${method} ${endpoint} → ${res.status}: ${msg}`);
  }
}

async function uploadFile(filePath, token) {
  const data = await readFile(filePath);
  if (data.length > MAX_SINGLE_PART) {
    throw new Error(`${filePath} tem mais de 20 MB; reduza o arquivo antes de subir.`);
  }
  const filename = path.basename(filePath);
  const contentType = MIME[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream';
  const created = await notion('POST', '/file_uploads', { filename, content_type: contentType }, { token });
  const form = new FormData();
  form.append('file', new Blob([data], { type: contentType }), filename);
  const sent = await notion('POST', `/file_uploads/${created.id}/send`, null, { token, form });
  if (sent.status !== 'uploaded') throw new Error(`Upload de ${filename} ficou em "${sent.status}".`);
  return sent.id;
}

// ---------- imagens no markdown ----------

const IMAGE_PATTERNS = [
  // ![legenda](caminho "título")
  /!\[([^\]]*)\]\(\s*(<[^>]+>|[^)\s]+)(?:\s+["'][^"']*["'])?\s*\)/g,
  // <img src="caminho" alt="legenda">
  /<img\b[^>]*?\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi,
  // ![[caminho|300]] (Obsidian)
  /!\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g,
];

async function searchByBasename(root, base, depth = 0) {
  if (depth > 4) return null;
  let entries;
  try {
    entries = await readdir(root, { withFileTypes: true });
  } catch {
    return null;
  }
  for (const e of entries) if (e.isFile() && e.name === base) return path.join(root, e.name);
  for (const e of entries) {
    if (e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules') {
      const hit = await searchByBasename(path.join(root, e.name), base, depth + 1);
      if (hit) return hit;
    }
  }
  return null;
}

async function resolveLocal(ref, baseDir) {
  let p = ref.trim().replace(/^<|>$/g, '');
  try {
    p = decodeURIComponent(p);
  } catch {}
  if (p.startsWith('file://')) p = fileURLToPath(p);
  const candidate = path.isAbsolute(p) ? p : path.join(baseDir, p);
  if (existsSync(candidate)) return candidate;
  return searchByBasename(baseDir, path.basename(p));
}

/**
 * Troca cada imagem por um marcador de texto ⟦IMGn⟧, sobe os arquivos locais e
 * devolve o markdown reescrito junto do mapa n → { uploadId | url, caption }.
 * Marcador de texto (e não ![](...)) porque o conversor descarta imagens que
 * aparecem na primeira linha de um item de lista.
 * Blocos de código cercados (```) ficam intocados.
 */
async function processImages(markdown, baseDir, { token, dryRun }) {
  const images = new Map();
  let counter = 0;

  const parts = markdown.split(/(^(?:```|~~~)[\s\S]*?^(?:```|~~~)[ \t]*$)/m);
  for (let i = 0; i < parts.length; i += 2) {
    // O conversor descarta linhas horizontais; viram marcador e depois divisor.
    let text = parts[i].replace(/(^|\n[ \t]*\n)[ \t]*(?:-{3,}|\*{3,}|_{3,})[ \t]*(?=\n|$)/g, '$1⟦HR⟧');
    for (const [idx, re] of IMAGE_PATTERNS.entries()) {
      const matches = [...text.matchAll(re)];
      for (const m of matches.reverse()) {
        let alt = '';
        let ref;
        if (idx === 0) [, alt, ref] = m;
        else if (idx === 1) {
          ref = m[1];
          alt = m[0].match(/\balt\s*=\s*["']([^"']*)["']/i)?.[1] ?? '';
        } else ref = m[1];

        let replacement;
        if (/^https?:\/\//i.test(ref)) {
          const key = counter++;
          images.set(key, { url: ref, caption: alt });
          replacement = `⟦IMG${key}⟧`;
        } else if (/^data:/i.test(ref)) {
          console.warn(`  ! imagem embutida em base64 ignorada (salve como arquivo): ${ref.slice(0, 40)}…`);
          replacement = '';
        } else {
          const local = await resolveLocal(ref, baseDir);
          if (!local) {
            console.warn(`  ! imagem não encontrada: ${ref}`);
            replacement = `*[imagem não encontrada: ${ref}]*`;
          } else {
            // Um upload por ocorrência: cada File Upload é anexado a um único bloco.
            console.log(`  ↑ ${path.relative(baseDir, local)}`);
            const uploadId = dryRun ? `dry-run-${counter}` : await uploadFile(local, token);
            const key = counter++;
            images.set(key, { uploadId, caption: alt });
            replacement = `⟦IMG${key}⟧`;
          }
        }
        text = text.slice(0, m.index) + replacement + text.slice(m.index + m[0].length);
      }
    }
    parts[i] = text;
  }
  return { markdown: parts.join(''), images };
}

// ---------- pós-processamento dos blocos ----------

function captionRichText(caption) {
  return caption ? [{ type: 'text', text: { content: caption.slice(0, 2000) } }] : [];
}

function imageBlock(img) {
  const caption = captionRichText(img.caption);
  if (img.uploadId) {
    return { object: 'block', type: 'image', image: { type: 'file_upload', file_upload: { id: img.uploadId }, caption } };
  }
  return { object: 'block', type: 'image', image: { type: 'external', external: { url: img.url }, caption } };
}

const MARKER = /⟦IMG(\d+)⟧/;

// Quebra um rich_text nos marcadores: [{ rich: [...] } | { image: n }, ...].
function splitOnMarkers(richText) {
  const segments = [{ rich: [] }];
  for (const item of richText) {
    if (item.type !== 'text' || !MARKER.test(item.text.content)) {
      segments.at(-1).rich.push(item);
      continue;
    }
    item.text.content.split(new RegExp(MARKER.source, 'g')).forEach((piece, i) => {
      if (i % 2 === 1) segments.push({ image: Number(piece) }, { rich: [] });
      else if (piece) segments.at(-1).rich.push({ ...item, text: { ...item.text, content: piece } });
    });
  }
  return segments;
}

const isBlank = (rich) => rich.every((t) => t.type === 'text' && !t.text.content.trim());
const CAN_HAVE_CHILDREN = new Set(['bulleted_list_item', 'numbered_list_item', 'to_do', 'toggle', 'quote', 'callout']);

// Tira os marcadores de um bloco e devolve os blocos que o substituem.
function placeImages(block, images) {
  const body = block[block.type];
  if (block.type === 'table') {
    const found = [];
    for (const row of body.children) {
      row.table_row.cells = row.table_row.cells.map((cell) =>
        splitOnMarkers(cell).flatMap((seg) => (seg.image === undefined ? seg.rich : (found.push(seg.image), []))),
      );
    }
    if (found.length) console.warn('  ! imagem dentro de tabela: colocada logo abaixo da tabela');
    return [block, ...found.map((n) => imageBlock(images.get(n)))];
  }
  if (!body?.rich_text) return [block];

  if (block.type === 'paragraph' && body.rich_text.map((t) => t.text?.content ?? '').join('').trim() === '⟦HR⟧') {
    return [{ object: 'block', type: 'divider', divider: {} }];
  }
  const segments = splitOnMarkers(body.rich_text);
  if (segments.length === 1) return [block];

  if (block.type === 'paragraph') {
    return segments
      .filter((seg) => seg.image !== undefined || !isBlank(seg.rich))
      .map((seg) => (seg.image !== undefined ? imageBlock(images.get(seg.image)) : { ...block, paragraph: { ...body, rich_text: seg.rich } }));
  }
  const imgs = segments.filter((seg) => seg.image !== undefined).map((seg) => imageBlock(images.get(seg.image)));
  body.rich_text = segments.flatMap((seg) => seg.rich ?? []);
  if (CAN_HAVE_CHILDREN.has(block.type)) {
    body.children = [...imgs, ...(body.children ?? [])];
    return [block];
  }
  return [block, ...imgs];
}

// "> texto" vira quote com o texto no próprio bloco; "> [!NOTE]" vira callout.
function fixQuote(block) {
  const q = block.quote;
  const first = q.children?.[0];
  if (q.rich_text.some((t) => t.text?.content) || first?.type !== 'paragraph') return block;
  const rich = first.paragraph.rich_text.map((t) => structuredClone(t));
  const rest = q.children.slice(1);

  const head = rich[0]?.type === 'text' ? rich[0].text.content.match(/^\[!(\w+)\][+-]?[ \t]*\n?/) : null;
  if (head) {
    rich[0].text.content = rich[0].text.content.slice(head[0].length);
    if (!rich[0].text.content) rich.shift();
    const kind = head[1].toUpperCase();
    return {
      object: 'block',
      type: 'callout',
      callout: {
        rich_text: rich,
        icon: { type: 'emoji', emoji: CALLOUTS[kind] ?? '💡' },
        color: kind === 'WARNING' || kind === 'CAUTION' || kind === 'PITFALL' ? 'red_background' : 'gray_background',
        ...(rest.length ? { children: rest } : {}),
      },
    };
  }
  return { object: 'block', type: 'quote', quote: { rich_text: rich, ...(rest.length ? { children: rest } : {}) } };
}

function transformBlocks(blocks, images) {
  return blocks.flatMap((b) => {
    const block = b.type === 'quote' ? fixQuote(b) : b;
    const body = block[block.type];
    if (block.type !== 'table' && body?.children) body.children = transformBlocks(body.children, images);
    return placeImages(block, images);
  });
}

// ---------- envio dos blocos ----------

// A API aceita no máximo 100 blocos por chamada e 2 níveis de aninhamento;
// por isso os filhos são enviados depois, recursivamente, bloco a bloco.
async function appendBlocks(parentId, blocks, token) {
  for (let i = 0; i < blocks.length; i += 100) {
    const batch = blocks.slice(i, i + 100);
    const pending = [];
    const payload = batch.map((block) => {
      const copy = { ...block, [block.type]: { ...block[block.type] } };
      const kids = copy[copy.type].children;
      if (copy.type === 'table') {
        copy.table.children = kids.slice(0, 100);
        pending.push(kids.slice(100));
      } else {
        delete copy[copy.type].children;
        pending.push(kids ?? []);
      }
      return copy;
    });
    const res = await notion('PATCH', `/blocks/${parentId}/children`, { children: payload }, { token });
    for (const [j, created] of res.results.entries()) {
      if (pending[j].length) await appendBlocks(created.id, pending[j], token);
    }
  }
}

async function titlePropertyName(databaseId, token) {
  const db = await notion('GET', `/databases/${databaseId}`, null, { token });
  return Object.entries(db.properties).find(([, p]) => p.type === 'title')[0];
}

// ---------- principal ----------

async function uploadMarkdown(file, opts, token) {
  console.log(`\n${file}`);
  const raw = await readFile(file, 'utf8');
  let body = raw.replace(/^﻿/, '').replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');

  let title = opts.title;
  const h1 = body.match(/^#[ \t]+(.+?)[ \t]*#*[ \t]*$/m);
  if (!title && h1 && body.slice(0, h1.index).trim() === '') {
    title = h1[1].replace(/[*_`]/g, '');
    body = body.slice(h1.index + h1[0].length);
  }
  title ??= path.basename(file, path.extname(file));

  const { markdown, images } = await processImages(body, path.dirname(path.resolve(file)), opts.dryRun ? { dryRun: true } : { token });
  let blocks = transformBlocks(markdownToBlocks(markdown, { strictImageUrls: false }), images);

  if (opts.pdf) {
    console.log(`  ↑ ${opts.pdf}`);
    const id = opts.dryRun ? 'dry-run-pdf' : await uploadFile(opts.pdf, token);
    blocks = [{ object: 'block', type: 'pdf', pdf: { type: 'file_upload', file_upload: { id } } }, ...blocks];
  }

  if (opts.dryRun) {
    console.log(`  título: ${title}`);
    console.log(JSON.stringify(blocks, (k, v) => (k === 'annotations' ? undefined : v), 2));
    return;
  }

  const titleText = [{ type: 'text', text: { content: title.slice(0, 2000) } }];
  const page = opts.database
    ? await notion(
        'POST',
        '/pages',
        {
          parent: { database_id: notionId(opts.database) },
          properties: { [await titlePropertyName(notionId(opts.database), token)]: { title: titleText } },
        },
        { token },
      )
    : await notion('POST', '/pages', { parent: { page_id: notionId(opts.parent) }, properties: { title: { title: titleText } } }, { token });

  await appendBlocks(page.id, blocks, token);
  console.log(`  ✓ ${page.url}`);
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help || opts.files.length === 0) {
    console.log(HELP);
    process.exit(opts.help ? 0 : 1);
  }
  await loadDotEnv();
  const token = process.env.NOTION_TOKEN;
  if (!opts.parent && !opts.database) opts.parent = process.env.NOTION_PARENT || null;
  if (!opts.dryRun) {
    if (!token) throw new Error('Defina NOTION_TOKEN (veja o README).');
    if (!opts.parent && !opts.database) throw new Error('Informe --parent <página> ou --database <banco>.');
  }
  const files = await expandInputs(opts.files);
  if (opts.pdf && files.length > 1) throw new Error('--pdf só pode ser usado com um único .md.');
  if (opts.title && files.length > 1) throw new Error('--title só pode ser usado com um único .md.');
  for (const file of files) await uploadMarkdown(file, opts, token);
}

main().catch((err) => {
  console.error(`\nErro: ${err.message}`);
  process.exit(1);
});
