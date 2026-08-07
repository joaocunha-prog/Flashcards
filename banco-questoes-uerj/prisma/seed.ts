import { PrismaClient } from '@prisma/client';
import { TAXONOMY } from '../data/taxonomy';
import { HISTORICAL_EXAMS, MOCK_EXAMS } from '../data/exams';
import { importExam } from '../src/lib/import';
import { recomputeAnalysis } from '../src/lib/analysis';

/**
 * Popula a taxonomia e o corpus inicial.
 *
 * O seed NÃO grava explicações: comentário de questão só é criado quando o
 * usuário aciona "Explicar com Claude" (Etapa 4).
 */

const prisma = new PrismaClient();

async function seedTaxonomy() {
  for (const theme of TAXONOMY) {
    const record = await prisma.theme.upsert({
      where: { slug: theme.slug },
      create: { slug: theme.slug, name: theme.name, order: theme.order },
      update: { name: theme.name, order: theme.order },
    });

    for (const subtheme of theme.subthemes) {
      await prisma.subtheme.upsert({
        where: { slug: subtheme.slug },
        create: { slug: subtheme.slug, name: subtheme.name, themeId: record.id },
        update: { name: subtheme.name, themeId: record.id },
      });
    }
  }
  console.log(`  taxonomia: ${TAXONOMY.length} temas`);
}

async function main() {
  console.log('Seed — Banco de Questões R+ UERJ\n');

  console.log('1. Taxonomia');
  await seedTaxonomy();

  console.log('\n2. Corpus histórico (base da análise de incidência)');
  for (const exam of HISTORICAL_EXAMS) {
    // recompute: false — recalcula uma única vez ao final, não a cada prova.
    const result = await importExam({ ...exam, excludeFromStats: false }, {
      client: prisma,
      recompute: false,
    });
    console.log(
      `  ${exam.year}: ${result.created} criadas, ${result.updated} atualizadas (${exam.slug})`,
    );
  }

  console.log('\n3. Simulados inéditos (fora do cálculo de incidência)');
  for (const exam of MOCK_EXAMS) {
    const result = await importExam({ ...exam, excludeFromStats: true }, {
      client: prisma,
      recompute: false,
    });
    console.log(
      `  ${exam.year}: ${result.created} criadas, ${result.updated} atualizadas (${exam.slug})`,
    );
  }

  console.log('\n4. Análise de incidência e ranking 80/20');
  const analysis = await recomputeAnalysis(prisma);
  console.log(
    `  ${analysis.totalQuestions} questões | ${analysis.totalExams} provas | anos ${analysis.years.join(', ')}`,
  );
  console.log(`  ${analysis.paretoThemes.length} temas cobrem ~80% da prova:\n`);

  for (const theme of analysis.themes) {
    const mark = theme.isPareto ? '★' : ' ';
    console.log(
      `  ${mark} ${String(theme.rank).padStart(2)}. ${theme.name.padEnd(38)} ` +
        `${String(theme.total).padStart(3)} q  ${theme.percent.toFixed(1).padStart(5)}%  ` +
        `acum ${theme.cumulativePercent.toFixed(1).padStart(5)}%`,
    );
  }

  console.log('\nPronto.');
}

main()
  .catch((error) => {
    console.error('\nFalha no seed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
