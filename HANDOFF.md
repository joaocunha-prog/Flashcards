# HANDOFF

## Objetivo

Banco de questões e simulados para a prova de **R+ Clínica Médica da UERJ**. Análise de incidência
por assunto, ranking 80/20, resolução sem gabarito, comentários em medicina baseada em evidências e
geração de provas inéditas.

Projeto em `banco-questoes-uerj/`. Branch principal (default do repositório, não existe `main`):
**`claude/banco-questoes-r-uerj-3d1xr7`**. Todo o trabalho está mesclado nela e pushado; as branches
de feature usadas no caminho (`claude/retomar-sessao-toq38p`, `claude/prova-na-integra`) já foram
integradas e podem ser apagadas. Último commit: veja `git log -1`. Árvore limpa.

**Comece pelo [GUIA.md](banco-questoes-uerj/GUIA.md)** para subir a aplicação e para incluir provas,
gabaritos e comentários — é o passo a passo operacional. O README do projeto explica as decisões.

## Estado Atual

**Banco populado e funcional.** 247 questões oficiais de 2021–2025 importadas (250 aplicadas menos
as 3 anuladas de 2021: Q22, Q31, Q42). Ranking e curva 80/20 recalculados: 11 temas, 70 assuntos,
38 dentro do corte de 80%. Dificuldade derivada do % real de acerto do caderno (≥70 FACIL, 45–69
MEDIA, <45 DIFICIL): 104/101/42.

**Comentários: 247 de 247 — CORPUS COMPLETO.**

| Prova | Comentadas |
| --- | --- |
| 2021 | 47/47 |
| 2022 | 50/50 |
| 2023 | 50/50 |
| 2024 | 50/50 |
| 2025 | 50/50 |

Todas as questões carregam o comentário automaticamente ao serem respondidas. O botão "Explicar
com Claude" segue disponível para questões futuras (provas novas ou geradas), e "Gerar novamente"
permanece em todas.

**Não existe `ANTHROPIC_API_KEY` neste ambiente.** `npm run explain:all` recusa rodar e sai com
código 1. Os 247 comentários foram escritos diretamente pelo modelo que conduzia a sessão —
177 por `claude-opus-5` e 70 por `claude-sonnet-5` (2022 Q31–50 e a prova de 2023 inteira) — e
importados por `npm run explain:import`. A procedência de cada lote está registrada no mapa
`MODELO_POR_ARQUIVO`, em `scripts/import-explanations.ts`: **ao acrescentar um arquivo novo,
registre ali o modelo que o escreveu** se não for o padrão (`claude-opus-5`).

**Sobre o Postgres.** No início desta sessão não havia `/tmp/pgdata` nem `.env`, e foi preciso
rodar `initdb`, criar o banco, escrever o `.env` (com `DATABASE_URL` **e** `DIRECT_URL` — o schema
exige as duas) e reimportar tudo. Depois disso o datadir **persistiu** entre reinícios do container,
mas o **serviço cai** e precisa ser reiniciado com `pg_ctl start` a cada retomada. O bloco
"Comandos Úteis" cobre os dois cenários — rode `pg_isready` primeiro para saber qual se aplica.

## O que Foi Feito na Última Sessão

- **Simulado por conteúdo, nos três níveis, com número de questões digitado.** O modo `POR_TEMA`
  (rótulo agora "Por conteúdo") passou a aceitar **tema, assunto e tópico** numa árvore de seleção
  com busca; o tamanho virou campo numérico livre de 1 a 200, no lugar do slider de 5–50 passo 5; e
  um contador ao vivo informa quantas questões existem para o recorte antes de montar. Sem migração:
  nenhum valor novo no enum `QuizMode`. Detalhes na seção "Decisões Confirmadas".

## O que Foi Feito em Sessões Anteriores

- **Comentários: 147 → 247/247.** Provas de 2024 e 2025 escritas do zero; 2022 e 2023 concluídas.
- **Modo de simulado "Prova na íntegra"** — escolhe uma prova oficial (2021–2025) e resolve o
  caderno completo, na ordem original, sem sorteio nem corte por tamanho ou dificuldade.
- **Assunto oculto até responder.** Tema, subtema, tópico, palavras-chave e o cartão de incidência
  saíram do payload da tela de resolução enquanto não há tentativa registrada — o endpoint de
  resposta os devolve junto do resultado. O card de palavras-chave era o pior vazamento: na 2022 Q1
  ele exibia "erlotinibe", que é a resposta.
- **Tabelas nos comentários passaram a renderizar.** O renderizador caseiro não as conhecia e 59
  comentários (um quarto) exibiam os pipes literais colados num parágrafo.
- **Procedência dos comentários corrigida** — `import-explanations.ts` gravava a constante
  `claude-opus-5` em tudo, inclusive nos 70 lotes escritos por Sonnet 5.
- **GUIA.md criado**; `data/types.ts` passou a declarar `excludeFromStats`, que faltava.

## Decisões Confirmadas

- **A seleção de conteúdo do simulado é UNIÃO, não interseção.** `buildQuestionWhere` ganhou
  `taxonomyMatch?: 'ANINHADO' | 'UNIAO'`, com **default `ANINHADO`** — então `/questoes`,
  `/favoritas` e os links do drill-down do ranking continuam cruzando os níveis, sem regressão. Só o
  montador de simulado passa `UNIAO` (via `taxonomy=uniao` na query do contador, e via
  `taxonomyUnionWhere` dentro de `buildQuiz`). O motivo está no README do projeto: com interseção,
  marcar um nó a mais *diminuiria* o resultado, e tema + tópico de outro tema daria zero.
  **Armadilha ao mexer nisso:** `where.OR` já pertence à busca textual em `buildQuestionWhere` — a
  cláusula de união entra no array `where.AND`, nunca em `where.OR`, senão uma apaga a outra.
- **`POR_TEMA` cobre os três níveis e não virou modo novo.** Acrescentar valor ao enum `QuizMode`
  exigiria migração; o modo já degenerava em sorteio livre sem seleção. O rótulo em
  `QUIZ_MODE_LABEL` mudou para **"Por conteúdo"**, o que renomeia também os simulados antigos no
  histórico — desejável, "Por tema" passou a mentir.
- **Na árvore, marcar um pai não mexe no estado dos filhos.** Os filhos só aparecem cobertos
  (marcados e desabilitados). Assim desmarcar o pai devolve exatamente a seleção que existia antes,
  sem código de restauração. O que um ancestral cobre é descartado no submit, só para o
  `Quiz.config` ficar legível — não muda o resultado.
- **O campo de tamanho guarda string, não número.** Clampar a cada tecla impede digitar "100" quando
  o pool tem 8 questões; o clamp acontece no `onBlur` e no submit.
- **Contagens dos chips da árvore excluem provas geradas** (`_count` filtrado por
  `excludeFromStats: false`), para bater com o contador ao vivo — que também as exclui, espelhando o
  `includeMockExams` do `POST /api/quizzes`. Somar os chips e achar outro número seria confuso.
- **Modelos padrão:** explicações em `claude-sonnet-5`; geração de provas inéditas em
  `claude-opus-5`. `ANTHROPIC_MODEL` sobrescreve os dois.
- **O usuário pediu Sonnet 5 para os comentários.** Na prática, cada lote saiu no modelo que o
  ambiente rodava naquela sessão — 177 em Opus 5 e 70 em Sonnet 5. Isso foi comunicado e aceito.
  O campo `model` de cada `Explanation` registra a procedência real desde a correção do mapa
  `MODELO_POR_ARQUIVO` (antes gravava `claude-opus-5` em tudo, inclusive nos lotes de Sonnet).
- **Comentário só chega ao cliente depois da resposta.** A questão carrega apenas o booleano
  `hasExplanation`; o texto sai pelo endpoint de explicação, que exige tentativa registrada (409).
- **Questão com comentário pronto não mostra o botão** "Explicar com Claude" — o texto carrega
  sozinho ao responder. "Gerar novamente" permanece nos dois casos.
- **Geração antecipada em lote contraria a especificação original** ("nunca previamente"). Foi
  decisão explícita do usuário, documentada no README e no cabeçalho de `scripts/explain-all.ts`.
- **`EXPLANATION_PROMPT_VERSION` está em 2 e NÃO deve ser incrementada sem necessidade real.** Ela
  entra na chave do cache: subir para 3 aposentaria os 247 comentários gravados e devolveria o botão
  "Explicar com Claude" a todas as questões. O critério é a ESTRUTURA de seções — afinar o texto do
  prompt dentro de uma seção existente não exige incremento.
- **10 questões têm `reviewNote`** — ressalva editorial sobre o gabarito oficial, exibida em painel
  âmbar após a resposta (nunca antes, porque cita a letra correta): 2021 Q29/41/43/45, 2022 Q45,
  2023 Q16, 2024 Q16/28, 2025 Q32/34.
- **README raiz reescrito** para descrever só este projeto.
- **Resíduos do app antigo de controle de gastos removidos** — pastas `server/`, `public/` e
  `shared/` (sem `package.json` na raiz e nada as referenciava) apagadas do repositório; entrada
  morta `server/data/expenses.json` também tirada do `.gitignore`.

## Arquivos Modificados

### Simulado por conteúdo (última sessão)

- `banco-questoes-uerj/src/lib/questions.ts` — `TaxonomyMatch`, `taxonomyUnionWhere()`,
  `countQuestions()`; `buildQuestionWhere` passou a acumular condições num array `andConditions`
  (antes `stateConditions`) para não colidir com o `where.OR` da busca; `parseFilters` lê `taxonomy`.
- `banco-questoes-uerj/src/app/api/questions/count/route.ts` — **nova.** Devolve só `{ total }`.
- `banco-questoes-uerj/src/lib/quiz.ts` — `topicSlugs` em `BuildQuizOptions`, `POR_TEMA` usando
  `taxonomyUnionWhere`, `topicSlugs` no `config`, rótulo "Por conteúdo".
- `banco-questoes-uerj/src/app/api/quizzes/route.ts` — `topicSlugs` no zod e no repasse.
- `banco-questoes-uerj/src/app/simulados/page.tsx` — árvore tema › assunto › tópico numa query
  aninhada, com `_count` filtrado e poda de baixo para cima.
- `banco-questoes-uerj/src/components/QuizBuilder.tsx` — árvore com busca e pastilhas removíveis,
  campo numérico, contador ao vivo com debounce e `AbortController`.
- `banco-questoes-uerj/src/components/ui.tsx` + `QuestionFilters.tsx` — `Chip` e `FilterGroup`
  extraídos para o módulo compartilhado (estavam duplicados) e `Chip` ganhou `disabled`.

### Sessões anteriores

- `README.md` (raiz) — reescrito, só o banco de questões.
- `banco-questoes-uerj/README.md` — corpus, ressalvas de gabarito, custo, `explain:all`,
  `explain:import`, cobertura, deploy.
- `banco-questoes-uerj/prisma/schema.prisma` — `Question.reviewNote String? @db.Text`.
- `banco-questoes-uerj/data/types.ts` + `src/lib/import.ts` — campo `reviewNote` no formato de
  importação.
- `banco-questoes-uerj/src/lib/claude.ts` — `EXPLANATION_MODEL = 'claude-sonnet-5'`.
- `banco-questoes-uerj/src/lib/generate.ts` — `GENERATION_MODEL = 'claude-opus-5'`.
- `banco-questoes-uerj/src/lib/serializers.ts` — `hasExplanation` no `SafeQuestion`; `_count` de
  explicações compartilhadas no `questionInclude`.
- `banco-questoes-uerj/src/app/api/questions/[id]/answer/route.ts` — devolve `reviewNote`.
- `banco-questoes-uerj/src/app/api/questions/[id]/explain/route.ts` — cache em duas camadas
  (usuário → compartilhada).
- `banco-questoes-uerj/src/components/QuestionSolver.tsx` — painel de ressalva, botão condicional,
  carregamento automático. **Bug corrigido:** o efeito de reset dependia de `userState` e apagava o
  resultado após `router.refresh()`; agora depende só de `question.id`.
- `banco-questoes-uerj/scripts/explain-all.ts` — geração em lote via API (novo).
- `banco-questoes-uerj/scripts/import-explanations.ts` — importa `data/comentarios/` (novo); passou
  a registrar a **procedência real** de cada lote pelo mapa `MODELO_POR_ARQUIVO` (antes gravava a
  constante `claude-opus-5` em tudo, contrariando a própria documentação do script).
- `banco-questoes-uerj/GUIA.md` — **novo.** Passo a passo operacional: subir a aplicação, incluir
  provas com gabarito e incluir comentários.
- `banco-questoes-uerj/src/lib/markdown.ts` — passou a renderizar **tabelas** (59 comentários as
  usam); reconhece o bloco pela linha separadora e suporta alinhamento.
- `banco-questoes-uerj/src/app/globals.css` — estilo das tabelas, com rolagem própria.
- `banco-questoes-uerj/src/lib/quiz.ts` + `src/components/QuizBuilder.tsx` +
  `src/app/simulados/page.tsx` — modo **PROVA_INTEGRA**.
- `banco-questoes-uerj/scripts/extracao/` — pipeline PDF → JSON (`extract.mjs`, `parse.mjs`,
  `build.mjs`, `classificacao.json`, `ressalvas.json`, `README.md`).
- `banco-questoes-uerj/data/provas/uerj-{2021..2025}.json` — 247 questões.
- `banco-questoes-uerj/data/comentarios/` — `uerj-2021.json`, `uerj-2021-b.json`, `uerj-2021-c.json`,
  `uerj-2022.json`, `uerj-2022-b.json`, `uerj-2022-c.json`, `uerj-2023.json`, `uerj-2023-b.json`,
  `uerj-2023-c.json`, `uerj-2024.json`, `uerj-2024-b.json`, `uerj-2024-c.json`, `uerj-2025.json`,
  `uerj-2025-b.json`, `uerj-2025-c.json` — **corpus completo, 247 comentários**.

## Pendências

- Nenhum PR aberto. O usuário não pediu.

## Próxima Ação

**Não há trabalho pendente aplicado ao código.** Tudo que foi pedido está entregue, mesclado e
pushado. Há uma proposta discutida em chat e **aprovada pendente de execução**, ver abaixo.
Sugestões de continuação, todas a confirmar com o usuário antes de executar:

- **Deixar os 247 comentários mais didáticos com emojis nos títulos de seção** (pedido do usuário
  nesta sessão). Não exige `ANTHROPIC_API_KEY`: é edição leve do texto já existente, feita
  diretamente pelo modelo (como os comentários originais), não geração via API. Convenção já
  amostrada em 3 questões (2021 Q1, 2023 Q3, 2024 Q2) e validada com o usuário — emoji **só no
  título da seção**, nunca no corpo:
  `## 🎯 Resposta correta`, `## ❌ Por que as outras estão erradas`, `## 📚 Base de evidência`,
  `## 🧠 Revisão rápida`, `## 💎 Pearls`, `## ⚠️ Pitfalls`, `## 🔤 Mnemônico`,
  `## ✅ Checagem de consistência` (trocar por `⚠️` se a checagem sinalizar problema no gabarito),
  `## 🔗 Referências`. Custo estimado ≈ US$ 2–4 em tokens se for feito por API; **US$ 0 se escrito
  diretamente**, caminho que o usuário escolheu. Antes de rodar nas 247: confirmar que
  `classifySection()` em `src/lib/markdown.ts` reconhece o título com o emoji na frente (a função
  casa por `text.includes('pearl')` etc., então em tese não quebra, mas não foi testado de fato —
  rodar `npx tsx` num teste rápido ou abrir uma questão editada no navegador antes de aplicar a
  todas). Depois de editar os JSONs em `data/comentarios/`, reimportar com `npm run explain:import`
  (idempotente, não exige API). Não precisa incrementar `EXPLANATION_PROMPT_VERSION` — é estilo, não
  estrutura de seção.
- **Gerar uma prova inédita** com `src/lib/generate.ts` (exige `ANTHROPIC_API_KEY`), usando o
  ranking 80/20 já calculado. Provas geradas entram com `excludeFromStats: true` e são resolvidas
  pelo modo "Prova gerada".
- **Colocar no ar** (Vercel + Supabase). O passo a passo está no README, seção "Colocando no ar".
- **Apagar as branches de feature já mescladas**: `claude/retomar-sessao-toq38p` e
  `claude/prova-na-integra`.

## Convenções e Restrições

- **Nunca expor `answerKey` nem o texto do comentário antes da resposta.** `toSafeQuestion()` monta
  o payload campo a campo, sem spread do registro do Prisma. Verificar com
  `curl -s 'http://localhost:3000/api/questions?pageSize=5' | grep -c answerKey` → 0.
- **Formato do comentário — 9 seções em markdown, nesta ordem e com estes títulos** (o renderizador
  e o CSS dependem deles): `## Resposta correta`, `## Por que as outras estão erradas`,
  `## Base de evidência`, `## Revisão rápida`, `## Pearls`, `## Pitfalls`, `## Mnemônico` (omitir se
  não houver bom), `## Checagem de consistência`, `## Referências`. Alternativas incorretas no
  formato `**B)** motivo`, separadas por linha em branco.
- `EXPLANATION_PROMPT_VERSION = 2` entra na chave do cache. Mudou o formato, incremente — senão o
  texto antigo continua sendo servido.
- **Nunca fabricar referência.** Fonte incerta se descreve genericamente. Quando a conduta se apoia
  só em consenso ou série de casos, dizer isso explicitamente.
- Provas geradas entram com `excludeFromStats: true`, para não realimentar o ranking que as originou.
- Português do Brasil em todo o código, comentários, commits e interface.
- Commits terminam com `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`.
- Não abrir PR sem pedido explícito.

## Comandos Úteis

```bash
cd banco-questoes-uerj

# Postgres local. Teste primeiro se o datadir sobreviveu:
pg_isready -h 127.0.0.1 -p 5432
# Se responder "no response", o datadir NÃO persistiu (aconteceu nesta sessão, container novo) —
# inicialize do zero antes de tentar start:
PGBIN=$(ls -d /usr/lib/postgresql/*/bin | head -1)
mkdir -p /tmp/pgdata /tmp/pgsock && chown -R postgres:postgres /tmp/pgdata /tmp/pgsock
su postgres -c "$PGBIN/initdb -D /tmp/pgdata"   # só se /tmp/pgdata estiver vazio

# Start (idempotente, funciona nos dois casos acima)
su postgres -c "$PGBIN/pg_ctl -D /tmp/pgdata -o '-k /tmp/pgsock -h 127.0.0.1 -p 5432' -l /tmp/pg.log start"
pg_isready -h 127.0.0.1 -p 5432

# Se o datadir era novo, falta criar o banco, o .env e aplicar o schema:
su postgres -c "psql -h 127.0.0.1 -p 5432 -c \"ALTER USER postgres WITH PASSWORD 'postgres';\""
su postgres -c "psql -h 127.0.0.1 -p 5432 -c 'CREATE DATABASE banco_uerj;'"
# .env precisa de DATABASE_URL E DIRECT_URL (o schema.prisma exige as duas):
#   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/banco_uerj"
#   DIRECT_URL="postgresql://postgres:postgres@localhost:5432/banco_uerj"
npm install && npx prisma db push
for f in data/provas/uerj-*.json; do npx tsx --env-file-if-exists=.env scripts/import-exam.ts "$f"; done

# Se o .env e o banco já existiam (datadir persistiu), pule direto para:

npm run explain:import        # importa data/comentarios/ e imprime a cobertura
npm run analysis:recompute    # recalcula e imprime o ranking de assuntos
npm run exam:import -- data/provas/uerj-2025.json
npx tsc --noEmit && npm run build

# Rodar e inspecionar
(PORT=3111 npm run start &) ; sleep 6
fuser -k 3111/tcp             # derrubar (não usar pkill -f, mata o próprio shell)

# Playwright: Chromium em /opt/pw-browsers/chromium
# chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
# O script .mjs precisa ficar DENTRO do projeto, senão não resolve os módulos.

# Cobertura por prova
psql -h 127.0.0.1 -U postgres -d banco_uerj -tAc "
SELECT q.year, count(*) FILTER (WHERE e.id IS NOT NULL) || '/' || count(*)
FROM questions q LEFT JOIN explanations e
  ON e.\"questionId\"=q.id AND e.\"userId\" IS NULL AND e.\"promptVersion\"=2
GROUP BY q.year ORDER BY q.year;"

# Limpar tentativas de teste antes de entregar
psql -h 127.0.0.1 -U postgres -d banco_uerj -c "DELETE FROM attempts; DELETE FROM user_question_states;"
```
