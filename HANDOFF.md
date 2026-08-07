# HANDOFF

## Objetivo

Banco de questões e simulados para a prova de **R+ Clínica Médica da UERJ**. Análise de incidência
por assunto, ranking 80/20, resolução sem gabarito, comentários em medicina baseada em evidências e
geração de provas inéditas.

Projeto em `banco-questoes-uerj/`. Branch de trabalho: **`claude/retomar-sessao-toq38p`** (a branch
antiga `claude/banco-questoes-r-uerj-3d1xr7` existe no remoto no mesmo commit, mas não é mais a
branch de trabalho — a designada pelo sistema nesta sessão foi a `retomar-sessao-toq38p`).
Último commit: `2eaf469`. Árvore limpa, tudo pushado.

## Estado Atual

**Banco populado e funcional.** 247 questões oficiais de 2021–2025 importadas (250 aplicadas menos
as 3 anuladas de 2021: Q22, Q31, Q42). Ranking e curva 80/20 recalculados: 11 temas, 70 assuntos,
38 dentro do corte de 80%. Dificuldade derivada do % real de acerto do caderno (≥70 FACIL, 45–69
MEDIA, <45 DIFICIL): 104/101/42.

**Comentários: 147 de 247.**

| Prova | Comentadas |
| --- | --- |
| 2021 | 47/47 |
| 2022 | 50/50 |
| 2023 | 50/50 |
| 2024 | 0/50 |
| 2025 | 0/50 |

As 100 restantes **não estão quebradas**: mantêm o botão "Explicar com Claude", que as gera sob
demanda quando houver chave da API. O app funciona por inteiro.

**Não existe `ANTHROPIC_API_KEY` neste ambiente.** `npm run explain:all` recusa rodar e sai com
código 1. Os 147 comentários existentes foram escritos diretamente pelo modelo da sessão (77 por
`claude-opus-5`, mais 70 desta sessão por `claude-sonnet-5` — 2022 Q31–50 e a prova de 2023
inteira) e importados por `npm run explain:import`.

**Ambiente reiniciado do zero nesta sessão.** Não havia `/tmp/pgdata` nem `.env`: rodou-se `initdb`,
criou-se o banco `banco_uerj`, o `.env` com `DATABASE_URL`+`DIRECT_URL`, `npx prisma db push`, e
reimportaram-se as 5 provas + todos os `data/comentarios/*.json` do zero. O bloco "Comandos Úteis"
no fim deste arquivo já cobre os dois cenários (datadir persistente ou container novo) — teste
`pg_isready` primeiro para saber qual caminho seguir.

## Decisões Confirmadas

- **Modelos padrão:** explicações em `claude-sonnet-5`; geração de provas inéditas em
  `claude-opus-5`. `ANTHROPIC_MODEL` sobrescreve os dois.
- **O usuário pediu Sonnet 5 para os comentários.** Os 77 já escritos são Opus 5, porque é o modelo
  que este ambiente roda — isso foi comunicado e aceito. O campo `model` de cada `Explanation`
  registra a procedência.
- **Comentário só chega ao cliente depois da resposta.** A questão carrega apenas o booleano
  `hasExplanation`; o texto sai pelo endpoint de explicação, que exige tentativa registrada (409).
- **Questão com comentário pronto não mostra o botão** "Explicar com Claude" — o texto carrega
  sozinho ao responder. "Gerar novamente" permanece nos dois casos.
- **Geração antecipada em lote contraria a especificação original** ("nunca previamente"). Foi
  decisão explícita do usuário, documentada no README e no cabeçalho de `scripts/explain-all.ts`.
- **10 questões têm `reviewNote`** — ressalva editorial sobre o gabarito oficial, exibida em painel
  âmbar após a resposta (nunca antes, porque cita a letra correta): 2021 Q29/41/43/45, 2022 Q45,
  2023 Q16, 2024 Q16/28, 2025 Q32/34.
- **README raiz reescrito** para descrever só este projeto. As pastas `server/`, `public/` e
  `shared/` (app antigo de controle de gastos) **continuam no repositório** — o usuário foi avisado
  e não pediu remoção.

## Arquivos Modificados

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
- `banco-questoes-uerj/scripts/import-explanations.ts` — importa `data/comentarios/` (novo).
- `banco-questoes-uerj/scripts/extracao/` — pipeline PDF → JSON (`extract.mjs`, `parse.mjs`,
  `build.mjs`, `classificacao.json`, `ressalvas.json`, `README.md`).
- `banco-questoes-uerj/data/provas/uerj-{2021..2025}.json` — 247 questões.
- `banco-questoes-uerj/data/comentarios/` — `uerj-2021.json`, `uerj-2021-b.json`, `uerj-2021-c.json`,
  `uerj-2022.json`, `uerj-2022-b.json`, `uerj-2022-c.json`, `uerj-2023.json`, `uerj-2023-b.json`,
  `uerj-2023-c.json` (2023 completo — Q1–50).

## Pendências

- **100 comentários faltando:** 2024 Q1–50, 2025 Q1–50.
- Pastas `server/`, `public/`, `shared/` (projeto antigo de gastos) ainda no repositório.
- Nenhum PR aberto. O usuário não pediu.

## Próxima Ação

Continuar os comentários a partir de **2024 Q1**. Escrever em
`banco-questoes-uerj/data/comentarios/uerj-2024.json` (partes `-b`, `-c`, … se o lote for
dividido), depois `uerj-2025.json`. Rodar `npm run explain:import` a cada lote para não perder
trabalho, e commitar.

Alternativa, se houver chave: `ANTHROPIC_MODEL=claude-sonnet-5 npm run explain:all` cobre as 100
restantes; pula o que já está feito e não sobrescreve os 147 existentes.

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
