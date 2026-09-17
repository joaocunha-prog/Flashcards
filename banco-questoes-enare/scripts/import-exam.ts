import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { PrismaClient } from '@prisma/client';
import { importExam } from '../src/lib/import';

/**
 * Importa uma prova a partir de um arquivo JSON e recalcula as estatísticas.
 *
 *   npm run exam:import -- caminho/para/enare-2027.json
 *
 * O JSON segue o shape de `data/types.ts` (ExamInput). Para provas oficiais
 * transcritas use `"source": "PROVA_OFICIAL"`; para simulados autorais que não
 * devem entrar na análise, acrescente `"excludeFromStats": true`.
 */

const prisma = new PrismaClient();

async function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Uso: npm run exam:import -- <arquivo.json>');
    process.exit(1);
  }

  const absolute = resolve(process.cwd(), filePath);
  const payload = JSON.parse(readFileSync(absolute, 'utf8'));

  const result = await importExam(payload, { client: prisma, recompute: true });

  console.log(`Prova importada: ${result.examSlug}`);
  console.log(`  criadas:     ${result.created}`);
  console.log(`  atualizadas: ${result.updated}`);
  if (result.themesCreated.length) {
    console.log(`  temas novos:    ${result.themesCreated.join(', ')}`);
  }
  if (result.subthemesCreated.length) {
    console.log(`  subtemas novos: ${result.subthemesCreated.join(', ')}`);
  }
  console.log('\nEstatísticas de incidência e ranking 80/20 recalculados.');
}

main()
  .catch((error) => {
    console.error('Falha na importação:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
