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

  console.log('Análise da banca — R+ Clínica Médica UERJ\n');
  console.log(`Corpus: ${analysis.totalQuestions} questões em ${analysis.totalExams} provas`);
  console.log(`Anos:   ${analysis.years.join(', ')}\n`);

  console.log('Ranking de incidência por tema:');
  for (const theme of analysis.themes) {
    const bar = '█'.repeat(Math.max(1, Math.round(theme.percent / 2)));
    console.log(
      `  ${theme.isPareto ? '★' : ' '} ${String(theme.rank).padStart(2)}. ` +
        `${theme.name.padEnd(38)} ${String(theme.total).padStart(3)}q ` +
        `${theme.percent.toFixed(1).padStart(5)}%  ${bar}`,
    );
  }

  console.log('\nLista de estudo 80/20 (maior retorno esperado):');
  analysis.paretoThemes.forEach((theme, index) => {
    console.log(
      `  ${index + 1}. ${theme.name} — ${theme.total} questões (${theme.percent.toFixed(1)}%, acumulado ${theme.cumulativePercent.toFixed(1)}%)`,
    );
  });

  console.log('\nTop 15 subtemas:');
  analysis.subthemes.slice(0, 15).forEach((sub) => {
    console.log(
      `  ${String(sub.rank).padStart(2)}. ${sub.name} (${sub.themeName}) — ${sub.total}q, ${sub.percent.toFixed(1)}%`,
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
