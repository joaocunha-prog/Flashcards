# Banco de Questões R+ UERJ

Banco de questões e simulados para a prova de **R+ Clínica Médica da UERJ**, com análise de
incidência por assunto, ranking 80/20, geração de provas inéditas e explicações sob demanda pelo
Claude.

---

## O banco nasce vazio

Nenhuma questão acompanha a instalação. O `npm run db:seed` popula apenas a **taxonomia** — 13
temas, 93 assuntos e 471 tópicos de Clínica Médica —, que é estrutura de classificação, não
conteúdo, e não influencia nenhuma estatística.

Enquanto não houver questões:

- o ranking de assuntos e a lista 80/20 aparecem zerados;
- o botão **Gerar prova de 60 questões** fica desabilitado, com a explicação do porquê.

Para popular:

```bash
npm run exam:import -- provas/uerj-2025.json
```

A partir daí o ranking, a curva de Pareto e a geração de provas passam a funcionar, tudo
recalculado automaticamente.

---

## Os três níveis de classificação

```
Tema          Neurologia
└ Subtema     Síndromes vasculares          ← "assunto": o nível do ranking
  └ Tópico    AVC isquêmico — trombólise    ← o detalhe clicável
```

O ranking de incidência e a lista 80/20 são calculados no nível de **assunto**, exibido como
`Neurologia — Síndromes vasculares`. "Estudar Neurologia" não é uma instrução acionável;
"estudar síndromes vasculares" é.

Clicar num assunto abre os tópicos que ele cobra, com a incidência de cada um dentro do assunto:

```
1. Neurologia — Síndromes vasculares          5 q · 26.3%   acum. 26.3%
     1. AVC isquêmico — trombólise                2 q · 40%
     2. AVC isquêmico — trombectomia mecânica     1 q · 20%
     3. Hemorragia subaracnoide e aneurisma       1 q · 20%
     4. Trombose venosa cerebral                  1 q · 20%
```

Cada tópico é um link que filtra o banco por aquele recorte.

O agregado por tema continua sendo calculado — serve para filtros e para o painel de alto nível —,
mas não é o que a lista de estudo apresenta.

---

## Gerar prova de 60 questões

Botão na página **Simulados**. A prova não é inventada do zero: o banco é a matéria-prima.

1. Lê a análise de incidência e monta um blueprint por assunto, com o número de questões
   proporcional ao que a banca historicamente cobra de cada um (maiores restos, para fechar em 60
   exatos).
2. Respeita a distribuição de dificuldade observada no corpus.
3. Envia ao Claude, por assunto, **questões reais do banco como exemplares de estilo**, mais a
   lista de tópicos daquele assunto, mais os enunciados já existentes para que não sejam repetidos.
4. Valida cada questão gerada e importa tudo como uma prova nova.

Por isso o botão exige um banco populado — no mínimo **20 questões classificadas**. Sem corpus não
há incidência para replicar nem estilo para imitar. A checagem roda no servidor
(`POST /api/exams/generate` responde `409`), então habilitar o botão por fora do app não contorna
nada.

A geração leva alguns minutos, muito além do que uma requisição HTTP deve segurar. O `POST` cria um
job e devolve o id na hora; o trabalho segue em background e a interface acompanha por polling —
inclusive depois de um F5 no meio do processo.

A prova gerada entra no banco mas fica **fora do cálculo de incidência**: ela é derivada da
distribuição histórica, então contá-la realimentaria o ranking que a originou.

> Em plataformas serverless o processo é encerrado quando a resposta retorna, e o job em background
> morre junto. Rode em servidor Node persistente (`next start`, Docker, VM).

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

**Postgres local via Docker:**

```bash
docker compose up -d
```

**Ou Supabase:** copie a connection string de *Project Settings → Database*. Use a porta `6543`
(pooler) em `DATABASE_URL` e a `5432` (direta) em `DIRECT_URL` — migrations não passam pelo pooler.

### 2. Configuração

```bash
cp .env.example .env
```

Preencha `DATABASE_URL` e `DIRECT_URL`. As demais são opcionais:

| Variável | Efeito se ausente |
| --- | --- |
| `ANTHROPIC_API_KEY` | App funciona normal; "Explicar com Claude" e a geração de provas ficam indisponíveis, com aviso |
| `NEXT_PUBLIC_SUPABASE_URL` / `_ANON_KEY` | Modo local single-user, sem tela de login |
| `ADMIN_IMPORT_TOKEN` | Rotas `/api/admin/*` ficam desligadas (503) |

### 3. Schema, seed e execução

```bash
npm install
npm run db:push      # cria as tabelas
npm run db:seed      # popula a taxonomia (o banco de questões fica vazio)
npm run dev
```

Abra <http://localhost:3000> e importe sua primeira prova.

---

## Importando uma prova

Formato de `data/types.ts`:

```json
{
  "slug": "uerj-2025-r-plus-cm",
  "year": 2025,
  "title": "UERJ 2025 — R+ Clínica Médica",
  "source": "PROVA_OFICIAL",
  "reference": "https://...",
  "questions": [
    {
      "number": 1,
      "statement": "Homem de 62 anos...",
      "alternatives": [
        { "letter": "A", "text": "..." },
        { "letter": "B", "text": "..." },
        { "letter": "C", "text": "..." },
        { "letter": "D", "text": "..." }
      ],
      "answerKey": "B",
      "theme": "Neurologia",
      "subtheme": "Síndromes vasculares",
      "topic": "AVC isquêmico — trombólise",
      "difficulty": "MEDIA",
      "keywords": ["AVC", "alteplase", "janela terapêutica"],
      "reference": "Diretrizes AHA/ASA"
    }
  ]
}
```

```bash
npm run exam:import -- caminho/uerj-2025.json
```

Ou, com `ADMIN_IMPORT_TOKEN` definido:

```bash
curl -X POST http://localhost:3000/api/admin/import \
  -H "x-admin-token: $ADMIN_IMPORT_TOKEN" \
  -H 'Content-Type: application/json' \
  --data @uerj-2025.json
```

Comportamento:

- **Idempotente.** A chave é `slug` (prova) e `slug#numero` (questão). Reimportar o mesmo arquivo
  atualiza os registros em vez de duplicá-los.
- **Taxonomia elástica.** Tema, assunto ou tópico que ainda não existem são criados na hora — uma
  prova futura pode trazer assunto novo sem quebrar a importação.
- **Validação.** Zod recusa gabarito que não corresponde a nenhuma alternativa, letras duplicadas,
  números repetidos e `topic` sem `subtheme`.
- **Recomputação.** Ranking de assuntos, tópicos e 80/20 são recalculados ao final.

`subtheme` é opcional, mas sem ele a questão não entra no ranking de assuntos (a tela de análise
informa quantas estão nessa situação). `topic` é opcional e exige `subtheme`.

---

## Regras de produto implementadas

### O gabarito nunca chega ao cliente antes da resposta

Esconder o gabarito só na interface não bastaria: o bundle JavaScript é inspecionável e o payload
de rede também. A garantia é dada no servidor, em duas camadas:

1. **`src/lib/serializers.ts`** — todo payload de questão passa por `toSafeQuestion()`, que monta o
   objeto campo a campo. Nunca há spread do registro do Prisma, para que um campo novo no schema
   não vaze por descuido.
2. **`POST /api/questions/[id]/answer`** — corrige no servidor e devolve apenas
   `{ correct: boolean }`.

Verificável:

```bash
curl -s 'http://localhost:3000/api/questions?pageSize=5' | grep -c answerKey   # 0
```

### As explicações são geradas apenas sob demanda

Nenhum comentário é escrito na importação ou no seed. `src/lib/claude.ts` é o único lugar que
produz esse texto, acionado por `POST /api/questions/[id]/explain`, que exige que o usuário já
tenha respondido (`409` caso contrário — pedir a explicação sem responder revelaria o gabarito).

O texto é cacheado por **(questão, letra marcada, versão do formato)**. A versão entra na chave
de propósito: quando o formato do comentário muda, o cache é invalidado em vez de servir para
sempre um texto na estrutura anterior. Incremente `EXPLANATION_PROMPT_VERSION` ao mexer no prompt.

---

## O comentário

Cada comentário é ancorado em medicina baseada em evidências **e** escrito para ensinar. As duas
coisas puxam em direções opostas — rigor tende ao árido, didática tende ao impreciso —, então a
estrutura separa uma da outra em nove seções fixas:

| Seção | O que traz |
| --- | --- |
| **Resposta correta** | A letra e o dado do enunciado que trava a conduta |
| **Por que as outras estão erradas** | Um item por distrator, dizendo em que cenário ele seria correto |
| **Base de evidência** | Diretriz e/ou ensaio de referência, com a força da recomendação |
| **Revisão rápida** | O conceito central, priorizando o que se repete em prova |
| **Pearls** | 3 a 5 fatos de alto rendimento que resolvem outras questões do assunto |
| **Pitfalls** | A armadilha que *esta* questão armou, depois os erros clássicos do tema |
| **Mnemônico** | Só quando existe um bom — a seção é omitida em vez de forçar |
| **Checagem de consistência** | Se o gabarito se sustenta hoje; sinaliza questão desatualizada ou anulável |
| **Referências** | 2 a 4 fontes |

Pearls, Pitfalls, Base de evidência, Mnemônico e Checagem recebem tratamento visual próprio
(borda lateral colorida e fundo tênue): lidas como texto corrido, justamente as seções de maior
valor prático se perdem no meio do comentário.

### Hierarquia de fontes

O prompt fixa a ordem de preferência, com as diretrizes brasileiras no topo — a banca é brasileira
e cobra a conduta praticada no Brasil:

1. Diretrizes brasileiras e PCDT do Ministério da Saúde (SBC, SBPT, SBD, SBN, SBI, SBR, ABHH, INCA)
2. Diretrizes internacionais (ESC, ACC/AHA, ADA, KDIGO, IDSA, GOLD, GINA, EULAR, ACR, AASLD, ASH, NCCN)
3. Revisões sistemáticas e metanálises
4. Ensaios clínicos randomizados de referência
5. Estudos observacionais
6. Consenso de especialista — e quando a conduta se apoia só nisso, o comentário diz isso com
   todas as letras, porque "é o que se faz" não é evidência

Quando a diretriz brasileira diverge da internacional, o comentário aponta as duas e diz qual a
banca tende a cobrar. A força da recomendação é informada quando a fonte a gradua, e não é
inventada quando a fonte não gradua.

### Sobre fabricação de referência

A instrução mais dura do prompt é a proibição de inventar citação. Modelos de linguagem produzem
nome de ensaio clínico e ano de diretriz com fluência e sem lastro, e num banco de questões médicas
uma referência fabricada não é um detalhe: ela induz o candidato ao erro e contamina a confiança no
material inteiro. A regra é descrever a fonte genericamente ("diretriz brasileira de insuficiência
cardíaca, atualização mais recente") em vez de arriscar título, ano ou número.

Isso reduz o problema, não o elimina. **Confira as referências.**

### O que "checagem de consistência" é e o que não é

A última seção pede ao modelo que verifique se o gabarito oficial se sustenta à luz da evidência
atual, e que sinalize questão antiga cuja conduta mudou, gabarito discutível ou questão passível de
anulação. Isso é útil de verdade em banco de provas antigas.

Mas é uma verificação **do modelo contra a evidência que ele conhece** — não é revisão por
especialista, e a interface diz isso explicitamente abaixo de cada comentário. Trate como um
sinalizador que vale investigar, não como validação.

### A análise se atualiza sozinha

`ThemeStat`, `SubthemeStat`, `TopicStat` e `AnalysisSnapshot` são tabelas **derivadas**: podem ser
apagadas e reconstruídas a partir das questões. Toda importação chama `recomputeAnalysis()`.

O corte de Pareto avalia o acumulado *antes* de somar o assunto atual, de modo que o assunto que
cruza a linha dos 80% é incluído, e não excluído por uma fração de ponto.

---

## Estrutura

```
data/
  taxonomy.ts            13 temas, 93 assuntos, 471 tópicos
  types.ts               shape canônico de importação (ExamInput)
prisma/
  schema.prisma          modelo de dados
  seed.ts                popula só a taxonomia
scripts/
  import-exam.ts         importa uma prova a partir de JSON
  recompute.ts           recalcula e imprime o ranking
src/
  lib/
    analysis.ts          incidência por assunto/tópico, Pareto e blueprint
    generate.ts          geração de prova a partir do banco
    import.ts            pipeline de importação (validação + upsert idempotente)
    serializers.ts       fronteira que impede o gabarito de sair do servidor
    quiz.ts              geração dos 6 modos de simulado
    questions.ts         filtros e paginação, compartilhados por API e páginas
    stats.ts             desempenho do usuário, por tema e por assunto
    claude.ts            explicações sob demanda
    auth.ts              identidade (Supabase ou modo local)
    markdown.ts          renderizador mínimo, com escape antes de formatar
  app/
    page.tsx             dashboard
    questoes/            banco + tela de resolução
    simulados/           geração de prova, montagem e execução de simulados
    analise/             ranking de assuntos e lista 80/20
    favoritas/ estatisticas/ historico/ entrar/
    api/                 route handlers
  components/            Nav, filtros, resolução, ranking expansível, botões
```

---

## Modos de simulado

| Modo | Seleção |
| --- | --- |
| `ALEATORIO` | Sorteio livre no banco |
| `POR_TEMA` | Restrito aos temas (ou assuntos) escolhidos |
| `POR_INCIDENCIA` | Distribui na proporção histórica de cada **assunto** |
| `APENAS_ERRADAS` | Só questões com status `ERROU` |
| `APENAS_REVISAO` | Só questões marcadas como `REVISAR` |
| `SIMULADO_INEDITO` | A prova gerada mais recente, na íntegra |

---

## Comandos

```bash
npm run dev                 # desenvolvimento
npm run build               # build de produção
npm run typecheck           # tsc --noEmit
npm run db:push             # aplica o schema
npm run db:seed             # popula a taxonomia
npm run db:studio           # Prisma Studio
npm run analysis:recompute  # recalcula e imprime o ranking de assuntos
npm run exam:import -- x.json
```

---

## Limitações conhecidas

- **As questões geradas são escritas por IA.** Foram validadas estruturalmente (gabarito existe
  entre as alternativas, sem letras duplicadas), mas não clinicamente. Revise antes de usá-las como
  material de estudo definitivo.
- **As explicações são geradas por IA**, inclusive a checagem de consistência do gabarito. O prompt
  fixa a hierarquia de fontes e proíbe fabricar citação, o que reduz o problema sem eliminá-lo.
  Confira as referências antes de fixar conduta.
- O job de geração roda em memória do processo: um restart do servidor durante a geração deixa o
  job travado em `GERANDO`. Basta disparar outro.
- A interface está em português do Brasil e não tem internacionalização.
