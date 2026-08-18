import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import fs from 'node:fs';

const file = process.argv[2];
const data = new Uint8Array(fs.readFileSync(file));
const doc = await getDocument({ data, useSystemFonts: true }).promise;
const out = [];
for (let p = 1; p <= doc.numPages; p++) {
  const page = await doc.getPage(p);
  const content = await page.getTextContent();
  let lastY = null;
  let line = [];
  const lines = [];
  for (const item of content.items) {
    if (!('str' in item)) continue;
    const y = Math.round(item.transform[5]);
    if (lastY !== null && Math.abs(y - lastY) > 2) {
      lines.push(line.join(''));
      line = [];
    }
    line.push(item.str);
    lastY = y;
  }
  lines.push(line.join(''));
  out.push(`\n===== PAGINA ${p} =====\n` + lines.join('\n'));
}
fs.writeFileSync(process.argv[3], out.join('\n'));
console.log(file, '->', doc.numPages, 'paginas');
