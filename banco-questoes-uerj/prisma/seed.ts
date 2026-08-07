import { PrismaClient } from '@prisma/client';
import { TAXONOMY, TAXONOMY_COUNTS } from '../data/taxonomy';
import { recomputeAnalysis } from '../src/lib/analysis';

/**
 * Popula apenas a taxonomia (temas e subtemas).
 *
 * O banco de questões nasce VAZIO, de propósito: o conteúdo entra pelas provas
 * reais, via `npm run exam:import`. A taxonomia é estrutura, não conteúdo — ela
 * dá nomes canônicos para a classificação e não influencia nenhuma estatística,
 * que é calculada exclusivamente a partir das questões.
 *
 * O seed também não grava explicações: comentário de questão só é criado quando
 * o usuário aciona "Explicar com Claude".
 */

const prisma = new PrismaClient();

async function seedTaxonomy() {
  for (const theme of TAXONOMY) {
    const record = await prisma.theme.upsert({
      where: { slug: theme.slug },
      create: { slug: theme.slug, name: theme.name, order: theme.order },
      update: { name: theme.name, order: theme.order },
    });

    for (const [subIndex, subtheme] of theme.subthemes.entries()) {
      const subRecord = await prisma.subtheme.upsert({
        where: { slug: subtheme.slug },
        create: {
          slug: subtheme.slug,
          name: subtheme.name,
          themeId: record.id,
          order: subIndex + 1,
        },
        update: { name: subtheme.name, themeId: record.id, order: subIndex + 1 },
      });

      for (const [topicIndex, topic] of subtheme.topics.entries()) {
        await prisma.topic.upsert({
          where: { slug: topic.slug },
          create: {
            slug: topic.slug,
            name: topic.name,
            subthemeId: subRecord.id,
            order: topicIndex + 1,
          },
          update: { name: topic.name, subthemeId: subRecord.id, order: topicIndex + 1 },
        });
      }
    }
  }
}

async function main() {
  console.log('Seed — Banco de Questões R+ UERJ\n');

  console.log('1. Taxonomia');
  await seedTaxonomy();
  console.log(
    `   ${TAXONOMY_COUNTS.themes} temas, ${TAXONOMY_COUNTS.subthemes} assuntos, ${TAXONOMY_COUNTS.topics} tópicos`,
  );

  console.log('\n2. Análise de incidência');
  const analysis = await recomputeAnalysis(prisma);
  console.log(`   ${analysis.totalQuestions} questões no corpus`);

  if (analysis.totalQuestions === 0) {
    console.log('\nBanco vazio, como esperado.');
    console.log('Importe uma prova para começar:');
    console.log('   npm run exam:import -- caminho/uerj-2025.json');
    console.log('\nCom questões no banco, o botão "Gerar prova de 60 questões"');
    console.log('passa a ficar disponível na página de Simulados.');
  } else {
    console.log(`   ${analysis.paretoSubjects.length} assuntos cobrem ~80% da prova`);
  }
}

main()
  .catch((error) => {
    console.error('\nFalha no seed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
