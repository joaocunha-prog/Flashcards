# Banco de Questões R+ UERJ

Banco de questões e simulados para a prova de **R+ Clínica Médica da UERJ**, com análise de
incidência por tema, ranking 80/20 e explicações geradas sob demanda pelo Claude.

---

## ⚠️ Sobre a procedência das questões

**As questões que acompanham esta instalação são autorais.** Foram escritas no estilo e no formato
da prova (caso clínico curto, 4 alternativas, foco em conduta) e classificadas por tema, subtema e
dificuldade — mas **não são transcrições dos cadernos oficiais da UERJ**.

Consequência prática: o ranking de incidência e a lista 80/20 que aparecem na interface descrevem
*este* corpus, não a banca real. Eles são um exemplo funcional do motor de análise, não um retrato
das provas de 2021–2025.

Para obter a análise real da banca, importe os cadernos oficiais:

```bash
npm run exam:import -- provas/uerj-2024.json   # source: "PROVA_OFICIAL"
```

O ranking, a curva de Pareto e a lista de estudo são **recalculados automaticamente** a cada
importação. Nenhum número de incidência está fixo no código.

---

## Stack

| Camada | Tecnologia |
| --- | --- |
| Frontend | Next.js 15 (App Router), React 19, TailwindCSS |
| Backend | Route Handlers do Next.js |
| Banco | PostgreSQL via Prisma (compatível com Supabase) |
| Auth | Supabase Auth (opcional — sem ela, modo local single-user) |
| IA | Anthropic SDK (`@anthropic-ai/sdk`) |
| Linguagem | TypeScript estrito |

---

## Como rodar

### 1. Banco de dados

**Opção A — Postgres local via Docker:**

```bash
docker compose up -d
```

**Opção B — Supabase:** crie um projeto e copie a connection string de
*Project Settings → Database*. Use a porta `6543` (pooler) em `DATABASE_URL` e a `5432` (direta)
em `DIRECT_URL` — migrations não passam pelo pooler.

### 2. Configuração

```bash
cp .env.example .env
```

Preencha `DATABASE_URL` e `DIRECT_URL`. As demais variáveis são opcionais:

| Variável | Efeito se ausente |
| --- | --- |
| `ANTHROPIC_API_KEY` | App funciona normal; "Explicar com Claude" retorna erro orientando a configurar |
| `NEXT_PUBLIC_SUPABASE_URL` / `_ANON_KEY` | Modo local single-user, sem tela de login |
| `ADMIN_IMPORT_TOKEN` | Rotas `/api/admin/*` ficam desligadas (503) |

### 3. Schema, seed e execução

```bash
npm install
npm run db:push      # cria as tabelas
npm run db:seed      # taxonomia + corpus + simulado 2026 + análise
npm run dev
```

Abra <http://localhost:3000>.

---

## Estrutura

```
data/
  taxonomy.ts            13 temas e 53 subtemas de Clínica Médica
  types.ts               shape canônico de importação (ExamInput)
  exams/                 corpus: 2021–2025 (60 questões) + simulado 2026 (25)
prisma/
  schema.prisma          modelo de dados
  seed.ts                popula taxonomia + corpus e dispara a análise
scripts/
  import-exam.ts         importa uma prova nova a partir de JSON
  recompute.ts           recalcula incidência e ranking 80/20
src/
  lib/
    analysis.ts          motor de incidência, Pareto e blueprint de simulado
    import.ts            pipeline de importação (validação + upsert idempotente)
    serializers.ts       fronteira que impede o gabarito de sair do servidor
    quiz.ts              geração dos 6 modos de simulado
    questions.ts         filtros e paginação, compartilhados por API e páginas
    stats.ts             desempenho do usuário
    claude.ts            geração de explicações sob demanda
    auth.ts              identidade (Supabase ou modo local)
    markdown.ts          renderizador mínimo, com escape antes de formatar
  app/
    page.tsx             dashboard
    questoes/            banco + tela de resolução
    simulados/           montagem e execução de simulados
    analise/             ranking de incidência e lista 80/20
    favoritas/ estatisticas/ historico/ entrar/
    api/                 route handlers
  components/            Nav, filtros, resolução, builder de simulado, UI
```

---

## Regras de produto implementadas

### O gabarito nunca chega ao cliente antes da resposta

Esconder o gabarito só na interface não bastaria: o bundle JavaScript é inspecionável e o payload
de rede também. A garantia é dada no servidor, em duas camadas:

1. **`src/lib/serializers.ts`** — todo payload de questão passa por `toSafeQuestion()`, que monta o
   objeto campo a campo. Nunca há spread do registro do Prisma, para que um campo novo no schema
   não vaze por descuido.
2. **`POST /api/questions/[id]/answer`** — corrige no servidor e devolve apenas
   `{ correct: boolean }`. A letra correta não entra na resposta.

Verificável:

```bash
curl -s 'http://localhost:3000/api/questions?pageSize=5' | grep -c answerKey   # 0
```

### As explicações são geradas apenas sob demanda

Nenhum comentário de questão é escrito no seed ou na importação. `src/lib/claude.ts` é o único
lugar do sistema que produz esse texto, e só é acionado por `POST /api/questions/[id]/explain`,
que por sua vez exige que o usuário já tenha respondido (retorna `409` caso contrário — pedir a
explicação sem responder revelaria o gabarito).

A explicação retorna as seções pedidas: justificativa da correta, motivo de cada incorreta,
revisão teórica curta, pegadinhas e referências (priorizando diretrizes brasileiras). O texto é
cacheado por (questão, letra marcada) para não repetir a chamada a cada reabertura; há botão de
regenerar.

### A análise se atualiza sozinha

`ThemeStat`, `SubthemeStat` e `AnalysisSnapshot` são tabelas **derivadas** — podem ser apagadas e
reconstruídas a partir das questões. Toda importação chama `recomputeAnalysis()` ao final.

O corte de Pareto avalia o acumulado *antes* de somar o tema atual, de modo que o tema que cruza a
linha dos 80% é incluído na lista, e não excluído por uma fração de ponto.

Simulados inéditos (`exam.excludeFromStats = true`) ficam fora do cálculo: como são gerados *a
partir* da distribuição histórica, contá-los reforçaria artificialmente os temas que já lideram.

---

## Importando uma prova nova

Monte um JSON no formato de `data/types.ts`:

```json
{
  "slug": "uerj-2027-r-plus-cm",
  "year": 2027,
  "title": "UERJ 2027 — R+ Clínica Médica",
  "source": "PROVA_OFICIAL",
  "reference": "https://...",
  "questions": [
    {
      "number": 1,
      "statement": "Homem de 62 anos...",
      "alternatives": [
        { "letter": "A", "text": "..." },
        { "letter": "B", "text": "..." }
      ],
      "answerKey": "B",
      "theme": "cardiologia",
      "subtheme": "sindromes-coronarianas-agudas",
      "difficulty": "MEDIA",
      "keywords": ["IAMCSST", "reperfusão"],
      "reference": "Diretriz SBC"
    }
  ]
}
```

```bash
npm run exam:import -- caminho/uerj-2027.json
```

Ou, com `ADMIN_IMPORT_TOKEN` definido:

```bash
curl -X POST http://localhost:3000/api/admin/import \
  -H "x-admin-token: $ADMIN_IMPORT_TOKEN" \
  -H 'Content-Type: application/json' \
  --data @uerj-2027.json
```

Comportamento:

- **Idempotente.** A chave é `slug` (prova) e `slug#numero` (questão). Reimportar o mesmo arquivo
  atualiza os registros em vez de duplicá-los.
- **Taxonomia elástica.** Um tema ou subtema que ainda não existe é criado automaticamente — uma
  prova futura pode trazer assunto novo sem quebrar a importação.
- **Validação.** Zod recusa gabarito que não corresponde a nenhuma alternativa, letras duplicadas
  e números de questão repetidos.
- **Recomputação.** Estatísticas e ranking 80/20 são recalculados ao final.

Para importar um simulado que não deve entrar na análise, acrescente `"excludeFromStats": true`.

---

## Modos de simulado

| Modo | Seleção |
| --- | --- |
| `ALEATORIO` | Sorteio livre no banco |
| `POR_TEMA` | Restrito aos temas escolhidos |
| `POR_INCIDENCIA` | Distribui as questões na proporção histórica de cada tema (maiores restos, para fechar o total exato) |
| `APENAS_ERRADAS` | Só questões com status `ERROU` |
| `APENAS_REVISAO` | Só questões marcadas como `REVISAR` |
| `SIMULADO_INEDITO` | Caderno completo inédito de 2026, na ordem original |

---

## Comandos

```bash
npm run dev                 # desenvolvimento
npm run build               # build de produção
npm run typecheck           # tsc --noEmit
npm run db:push             # aplica o schema
npm run db:migrate          # cria uma migration
npm run db:seed             # popula o banco
npm run db:studio           # Prisma Studio
npm run analysis:recompute  # recalcula incidência e 80/20 (imprime o ranking)
npm run exam:import -- x.json
```

---

## Limitações conhecidas

- **O corpus é autoral**, como detalhado no topo. Substitua pelas provas reais para obter a análise
  da banca de verdade.
- **As explicações são geradas por IA.** O prompt instrui a não fabricar citações, mas o texto deve
  ser conferido contra a diretriz antes de virar conduta.
- A interface está em português do Brasil e não tem internacionalização.
