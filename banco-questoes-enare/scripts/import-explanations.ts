import fs from 'node:fs';
import path from 'node:path';
import { PrismaClient } from '@prisma/client';
import { EXPLANATION_PROMPT_VERSION } from '../src/lib/claude';

/**
 * Importa comentários escritos fora do fluxo da API.
 *
 *   npm run explain:import
 *   npm run explain:import -- data/comentarios
 *
 * Lê `data/comentarios/enare-AAAA.json`, no formato:
 *
 *   { "16": "## Resposta correta\n…", "17": "…" }
 *
 * e grava cada texto como explicação COMPARTILHADA (`userId: null`) — a mesma
 * prateleira que `npm run explain:all` usa. Para a interface não há diferença:
 * questão com comentário não mostra o botão "Explicar com Claude".
 *
 * Por que existe, se já existe o `explain:all`: os comentários deste banco
 * foram escritos diretamente por um modelo Claude durante a sessão de
 * desenvolvimento, sem chamada à API. O texto é o mesmo produto; muda apenas o
 * caminho por onde chegou. O campo `model` registra a procedência.
 *
 * Idempotente: reimportar substitui o comentário daquela questão em vez de
 * empilhar um segundo.
 */

const prisma = new PrismaClient();

const DIRETORIO_PADRAO = 'data/comentarios';

/**
 * Procedência real de cada lote. Os comentários foram escritos diretamente pelo
 * modelo que conduzia a sessão, e nem toda sessão rodou o mesmo modelo — quem
 * for auditar um texto depois precisa saber de qual deles ele saiu. Um lote sem
 * entrada aqui cai no padrão.
 *
 * Ao acrescentar um arquivo novo, registre o modelo que o escreveu.
 */
const MODELO_PADRAO = 'claude-opus-5';
const MODELO_POR_ARQUIVO: Record<string, string> = {
  'enare-2022-c.json': 'claude-sonnet-5',
  'enare-2023.json': 'claude-sonnet-5',
  'enare-2023-b.json': 'claude-sonnet-5',
  'enare-2023-c.json': 'claude-sonnet-5',
};

/** O renderizador espera estes títulos; texto sem nenhum deles não é comentário. */
const SECOES_ESPERADAS = ['## Resposta correta', '## Por que as outras estão erradas'];

async function main() {
  const dir = process.argv[2] ?? DIRETORIO_PADRAO;

  if (!fs.existsSync(dir)) {
    console.error(`Diretório não encontrado: ${dir}`);
    process.exitCode = 1;
    return;
  }

  const arquivos = fs
    .readdirSync(dir)
    .filter((nome) => /^enare-(\d{4})(?:-[a-z0-9]+)?\.json$/.test(nome))
    .sort();

  if (arquivos.length === 0) {
    console.error(`Nenhum enare-AAAA[-parte].json em ${dir}.`);
    process.exitCode = 1;
    return;
  }

  let criados = 0;
  let substituidos = 0;
  const semQuestao: string[] = [];
  const malFormados: string[] = [];

  for (const arquivo of arquivos) {
    const ano = Number(/^enare-(\d{4})/.exec(arquivo)![1]);
    const modelo = MODELO_POR_ARQUIVO[arquivo] ?? MODELO_PADRAO;
    const conteudo: Record<string, string> = JSON.parse(
      fs.readFileSync(path.join(dir, arquivo), 'utf8'),
    );

    for (const [numero, texto] of Object.entries(conteudo)) {
      if (!SECOES_ESPERADAS.every((secao) => texto.includes(secao))) {
        malFormados.push(`${ano} Q${numero}`);
        continue;
      }

      const questao = await prisma.question.findFirst({
        where: { year: ano, number: Number(numero) },
        select: { id: true },
      });

      if (!questao) {
        semQuestao.push(`${ano} Q${numero}`);
        continue;
      }

      const { count } = await prisma.explanation.deleteMany({
        where: {
          questionId: questao.id,
          userId: null,
          promptVersion: EXPLANATION_PROMPT_VERSION,
        },
      });

      await prisma.explanation.create({
        data: {
          questionId: questao.id,
          userId: null,
          model: modelo,
          content: texto,
          selectedLetter: null,
          promptVersion: EXPLANATION_PROMPT_VERSION,
        },
      });

      if (count > 0) substituidos++;
      else criados++;
    }

    console.log(`${arquivo}: ${Object.keys(conteudo).length} comentários (${modelo})`);
  }

  console.log(`\n${criados} criados, ${substituidos} substituídos.`);

  if (malFormados.length > 0) {
    console.error(`\nSem as seções obrigatórias (ignorados): ${malFormados.join(', ')}`);
    process.exitCode = 1;
  }
  if (semQuestao.length > 0) {
    console.error(`\nSem questão correspondente no banco: ${semQuestao.join(', ')}`);
    process.exitCode = 1;
  }

  const total = await prisma.question.count();
  const comentadas = await prisma.question.count({
    where: { explanations: { some: { userId: null, promptVersion: EXPLANATION_PROMPT_VERSION } } },
  });
  console.log(`\nCobertura: ${comentadas}/${total} questões comentadas.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
