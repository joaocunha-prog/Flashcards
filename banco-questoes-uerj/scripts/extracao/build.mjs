import fs from 'node:fs';
import path from 'node:path';

const parsed = JSON.parse(fs.readFileSync('parsed.json', 'utf8'));
const clas = JSON.parse(fs.readFileSync('classificacao.json', 'utf8'));
const ressalvas = JSON.parse(fs.readFileSync('ressalvas.json', 'utf8'));

const OUT = process.argv[2] ?? '.';

/**
 * A dificuldade não é opinião: o caderno traz o percentual de candidatos que
 * marcou cada alternativa. O percentual que acertou é a medida direta de
 * dificuldade do item para a população que presta esta prova.
 */
function difficultyFrom(pct, answer) {
  const correct = pct?.[answer];
  if (correct === undefined) return 'MEDIA';
  if (correct >= 70) return 'FACIL';
  if (correct >= 45) return 'MEDIA';
  return 'DIFICIL';
}

const resumo = [];

for (const year of Object.keys(parsed)) {
  const questions = [];
  const faltando = [];

  for (const q of parsed[year]) {
    if (q.answerKey === 'ANULADA') continue;

    const c = clas[year]?.[String(q.number)];
    if (!c) {
      faltando.push(q.number);
      continue;
    }

    const [theme, subtheme, topic, keywords, reference] = c;

    questions.push({
      number: q.number,
      statement: q.statement,
      alternatives: q.alternatives,
      answerKey: q.answerKey,
      theme,
      subtheme,
      topic,
      difficulty: difficultyFrom(q.pct, q.answerKey),
      keywords,
      ...(reference ? { reference } : {}),
      ...(ressalvas[year]?.[String(q.number)]
        ? { reviewNote: ressalvas[year][String(q.number)] }
        : {}),
    });
  }

  if (faltando.length > 0) {
    console.error(`${year}: sem classificação -> ${faltando.join(', ')}`);
    process.exitCode = 1;
  }

  const exam = {
    slug: `uerj-${year}-r-plus-cm`,
    year: Number(year),
    board: 'UERJ',
    program: 'R+ Clínica Médica',
    title: `UERJ ${year} — R+ Clínica Médica`,
    source: 'PROVA_OFICIAL',
    reference: `Caderno oficial UERJ ${year} — Hospital Universitário Pedro Ernesto (compilação MEDGRUPO, com gabarito e estatística de resposta por alternativa)`,
    questions,
  };

  const file = path.join(OUT, `uerj-${year}.json`);
  fs.writeFileSync(file, JSON.stringify(exam, null, 2));

  const dif = questions.reduce((acc, q) => ((acc[q.difficulty] = (acc[q.difficulty] ?? 0) + 1), acc), {});
  resumo.push(
    `${year}: ${questions.length} questões  |  fácil ${dif.FACIL ?? 0} / média ${dif.MEDIA ?? 0} / difícil ${dif.DIFICIL ?? 0}`,
  );
}

console.log(resumo.join('\n'));

// Assuntos e temas novos em relação à taxonomia base, para conferência.
const todos = new Set();
for (const year of Object.keys(clas)) {
  for (const [, c] of Object.entries(clas[year])) todos.add(`${c[0]} :: ${c[1]}`);
}
console.log(`\nassuntos distintos usados: ${todos.size}`);
