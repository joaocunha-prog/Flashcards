import { PrismaClient } from '@prisma/client';
import { RESUMO_SLUGS } from '../data/resumos/slugs';

/**
 * Marca como "Selecionados" (aba de curadoria em /resumos) os assuntos de
 * cauda longa — fora do corte 80/20, mas que agora têm resumo escrito.
 *
 * Sem isso, esses 39 resumos existem e são acessíveis por URL direta
 * (/resumos/<slug>), mas não aparecem em nenhuma das duas abas de
 * `/resumos` (nem "80/20", porque `isPareto` é calculado ao vivo pela
 * incidência real; nem "Selecionados", que exige marcação manual em
 * `ResumoSelection`). Idempotente — pode rodar de novo sem duplicar.
 *
 *   npx tsx scripts/select-cauda-longa-resumos.ts
 */

const CAUDA_LONGA_SLUGS = RESUMO_SLUGS.slice(46);

const prisma = new PrismaClient();

async function main() {
  if (CAUDA_LONGA_SLUGS.length !== 39) {
    throw new Error(
      `Esperava 39 slugs de cauda longa (índices 46+ de RESUMO_SLUGS), encontrei ${CAUDA_LONGA_SLUGS.length}. ` +
        'RESUMO_SLUGS mudou de ordem/tamanho — confira antes de rodar.',
    );
  }

  let selected = 0;
  let skipped = 0;
  for (const slug of CAUDA_LONGA_SLUGS) {
    const subtheme = await prisma.subtheme.findUnique({ where: { slug } });
    if (!subtheme) {
      console.warn(`  [pular] ${slug} — Subtheme não existe no banco ainda (importe as provas primeiro)`);
      skipped++;
      continue;
    }
    await prisma.resumoSelection.upsert({
      where: { subjectSlug: slug },
      create: { subjectSlug: slug },
      update: {},
    });
    selected++;
  }

  console.log(`\nSelecionados: ${selected}/${CAUDA_LONGA_SLUGS.length}${skipped ? ` (${skipped} pulados)` : ''}`);
}

main()
  .catch((error) => {
    console.error('Falha ao selecionar resumos de cauda longa:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
