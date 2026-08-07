import fs from 'node:fs';

const YEARS = [2021, 2022, 2023, 2024, 2025];
const out = {};

for (const year of YEARS) {
  const raw = fs.readFileSync(`prova-${year}.txt`, 'utf8');

  // 1) Gabarito + estatística de acerto por alternativa.
  const key = {};
  const re = /Q:\s*(\d+)\s*-\s*R:\s*(\w+)\s*\n(?:A:\s*(\d+)%\s*B:\s*(\d+)%\s*C:\s*(\d+)%\s*D:\s*(\d+)%)?/g;
  let m;
  while ((m = re.exec(raw))) {
    key[Number(m[1])] = {
      answer: m[2],
      pct: m[3] === undefined ? null : { A: +m[3], B: +m[4], C: +m[5], D: +m[6] },
    };
  }

  // 2) Corpo da prova: tudo antes de "Respostas e Gabarito".
  const body = raw.split('Respostas e Gabarito')[0].split('Estatísticas do concurso')[0];

  const lines = body
    .split('\n')
    .filter((l) => !/^===== PAGINA/.test(l))
    .filter((l) => !/^\d*MEDGRUPO \| Concurso na Integra/.test(l))
    .filter((l) => !/^HOSPITAL UNIVERSIT/.test(l));

  const questions = [];
  let current = null;
  let mode = 'statement';

  for (const line of lines) {
    const head = /^QUEST[ÃA]O\s+(\d+)\s*-\s*UERJ/.exec(line.trim());
    if (head) {
      if (current) questions.push(current);
      current = { number: Number(head[1]), statement: [], alternatives: [] };
      mode = 'statement';
      continue;
    }
    if (!current) continue;

    const alt = /^([A-E])\)\s*(.*)$/.exec(line.trim());
    if (alt) {
      current.alternatives.push({ letter: alt[1], text: [alt[2]] });
      mode = 'alt';
      continue;
    }

    if (line.trim() === '') continue;
    if (mode === 'statement') current.statement.push(line.trim());
    else current.alternatives[current.alternatives.length - 1].text.push(line.trim());
  }
  if (current) questions.push(current);

  const normalized = questions.map((q) => ({
    number: q.number,
    statement: q.statement.join(' ').replace(/\s+/g, ' ').trim(),
    alternatives: q.alternatives.map((a) => ({
      letter: a.letter,
      text: a.text.join(' ').replace(/\s+/g, ' ').trim(),
    })),
    answerKey: key[q.number]?.answer ?? null,
    pct: key[q.number]?.pct ?? null,
  }));

  out[year] = normalized;

  const bad = normalized.filter((q) => q.alternatives.length !== 4);
  const noKey = normalized.filter((q) => !q.answerKey);
  const anuladas = normalized.filter((q) => q.answerKey === 'ANULADA');
  console.log(
    `${year}: ${normalized.length} questões | alt!=4: ${bad.map((b) => b.number).join(',') || '-'} | sem gabarito: ${noKey.map((b) => b.number).join(',') || '-'} | anuladas: ${anuladas.map((b) => b.number).join(',') || '-'}`,
  );
}

fs.writeFileSync('parsed.json', JSON.stringify(out, null, 2));
