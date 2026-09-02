import { PrismaClient } from '@prisma/client';
import { recomputeAnalysis } from '../src/lib/analysis';

/**
 * Recalcula estatísticas de incidência e ranking 80/20 a partir do corpus atual.
 *
 *   npm run analysis:recompute
 */

const prisma = new PrismaClient();

async function main() {
  const analysis = await recomputeAnalysis(prisma);

  console.log('Análise da banca — R+ Clínica Médica ENARE\n');
  console.log(`Corpus: ${analysis.totalQuestions} questões em ${analysis.totalExams} provas`);
  console.log(`Anos:   ${analysis.years.join(', ')}\n`);

  if (analysis.totalQuestions === 0) {
    console.log('Banco vazio — nada a ranquear.');
    console.log('Importe uma prova: npm run exam:import -- prova.json');
    return;
  }

  console.log('Ranking de incidência por assunto:');
  for (const subject of analysis.subjects) {
    const bar = '█'.repeat(Math.max(1, Math.round(subject.percent)));
    console.log(
      `  ${subject.isPareto ? '★' : ' '} ${String(subject.rank).padStart(2)}. ` +
        `${subject.label.slice(0, 52).padEnd(52)} ${String(subject.total).padStart(3)}q ` +
        `${subject.percent.toFixed(1).padStart(5)}%  ${bar}`,
    );
  }

  console.log('\nLista de estudo 80/20 (maior retorno esperado):');
  analysis.paretoSubjects.forEach((subject, index) => {
    console.log(
      `  ${index + 1}. ${subject.label} — ${subject.total} questões ` +
        `(${subject.percent.toFixed(1)}%, acumulado ${subject.cumulativePercent.toFixed(1)}%)`,
    );
    subject.topics.slice(0, 5).forEach((topic) => {
      console.log(
        `       · ${topic.name} — ${topic.total}q (${topic.percentWithinSubject.toFixed(0)}% do assunto)`,
      );
    });
  });

  console.log('\nAgregado por tema:');
  analysis.themes.forEach((theme) => {
    console.log(
      `  ${String(theme.rank).padStart(2)}. ${theme.name.padEnd(38)} ${String(theme.total).padStart(3)}q  ${theme.percent.toFixed(1)}%`,
    );
  });
}

main()
  .catch((error) => {
    console.error('Falha ao recomputar:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
