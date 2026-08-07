# Banco de Questões R+ UERJ

Banco de questões e simulados para a prova de **R+ Clínica Médica da UERJ**, com análise de
incidência por assunto, ranking 80/20, geração de provas inéditas e explicações sob demanda pelo
Claude.

---

## O corpus: 5 provas, 247 questões

`data/provas/` traz as provas oficiais de **2021 a 2025**, prontas para importar:

```bash
for ano in 2021 2022 2023 2024 2025; do
  npm run exam:import -- data/provas/uerj-$ano.json
done
```

| Ano | Questões | Fácil | Média | Difícil |
| --- | --- | --- | --- | --- |
| 2021 | 47 | 16 | 22 | 9 |
| 2022 | 50 | 23 | 19 | 8 |
| 2023 | 50 | 23 | 21 | 6 |
| 2024 | 50 | 18 | 23 | 9 |
| 2025 | 50 | 24 | 16 | 10 |
| **Total** | **247** | **104** | **101** | **42** |

São 250 questões aplicadas; **três de 2021 (22, 31 e 42) foram anuladas pela banca** e ficaram de
fora, porque sem gabarito não há como corrigir a resposta.

### A dificuldade é medida, não estimada

O caderno traz o percentual de candidatos que marcou cada alternativa. O percentual que marcou a
correta é uma medida direta da dificuldade do item para quem presta exatamente esta prova, e é ela
que classifica a questão:

| % de acerto | Dificuldade |
| --- | --- |
| 70% ou mais | `FACIL` |
| 45% a 69% | `MEDIA` |
| abaixo de 45% | `DIFICIL` |

Nenhum item foi classificado por opinião.

### A taxonomia é ponto de partida, não gaiola

O `npm run db:seed` popula a **taxonomia** — 13 temas, 93 assuntos e 471 tópicos —, que é estrutura
de classificação, não conteúdo, e não influencia estatística nenhuma. As 5 provas trouxeram assuntos
que a taxonomia inicial não previa e que o importador criou sozinho, porque a banca cobra: *Micoses
sistêmicas*, *Infecções sexualmente transmissíveis*, *Infecções relacionadas à assistência*.

Com o banco vazio, o ranking aparece zerado e o botão **Gerar prova de 60 questões** fica
desabilitado, explicando o motivo.

---

## Ressalvas de gabarito

Dez questões carregam um campo `reviewNote`: uma nota editorial sobre o gabarito oficial — conduta
que mudou desde a aplicação, duas alternativas defensáveis, imprecisão de enunciado, item passível
de anulação.

A nota **só aparece depois que o usuário responde**, e por um motivo concreto: para argumentar por
que discorda, ela precisa citar a letra do gabarito. Por isso não trafega no payload da questão —
sai pelo endpoint de resposta, junto do `correct`. O mesmo cuidado que protege o `answerKey` vale
para ela.

| Prova | Questão | Assunto | Natureza da ressalva |
| --- | --- | --- | --- |
| 2021 | 29 | Sítio primário desconhecido | PET-CT hoje vem antes da pan-endoscopia |
| 2021 | 41 | Nódulo tireoidiano (Bethesda IV) | Lobectomia é alternativa igualmente válida |
| 2021 | 43 | Nódulo em vidro fosco | Intervalo de 3 meses é do Fleischner 2013 |
| 2021 | 45 | HSA com hidrocefalia | Hidrocefalia aguda é DVE, não DVP |
| 2022 | 45 | Coinfecção TB-HIV | Esquema com efavirenz foi substituído por dolutegravir |
| 2023 | 16 | Síndrome RS3PE | Gabarito exige síndrome soronegativa com FR positivo no enunciado |
| 2024 | 16 | Nefropatia da SAF | Concordância com ressalva — item limítrofe |
| 2024 | 28 | Nefropatia por contraste | Fator de risco dominante é a DRC prévia, não o DM2 |
| 2025 | 32 | Anti-hipertensivo a evitar | Edema com cacifo descrito é o da anlodipina |
| 2025 | 34 | TEP | Concordância com ressalva — alternativa D é discutivelmente verdadeira |

Isso é **revisão editorial escrita na importação**, distinta da seção "Checagem de consistência" que
o Claude produz sob demanda. A primeira é fixa e auditável; a segunda é gerada na hora.

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

Clicar num assunto abre os tópicos que ele cobra, com a incidência de cada um dentro do assunto.
Este é o topo real do ranking com as 5 provas importadas:

```
1. Gastroenterologia e Hepatologia — Hepatopatias não virais   11 q · 4.5%   acum. 4.5%
     1. Colangite biliar primária e colangite esclerosante          4 q · 36.4%
     2. Doença hepática gordurosa metabólica                        2 q · 18.2%
     3. Insuficiência hepática aguda                                2 q · 18.2%
     4. Hemocromatose                                               1 q ·  9.1%
     5. Hepatite alcoólica                                          1 q ·  9.1%
     6. Síndrome de Budd-Chiari                                     1 q ·  9.1%
```

Cada tópico é um link que filtra o banco por aquele recorte.

É exatamente o tipo de coisa que o agregado por tema esconde: "Gastroenterologia" é 9,7% da prova e
não diz o que estudar; "colangite esclerosante caiu 4 vezes em 5 anos" diz.

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

for ano in 2021 2022 2023 2024 2025; do
  npm run exam:import -- data/provas/uerj-$ano.json
done

npm run dev
```

Abra <http://localhost:3000>. As 247 questões, o ranking de assuntos e a curva 80/20 já estarão lá.

### 4. Colocando no ar

O app é um Next.js comum e não guarda estado em disco — sobe em qualquer lugar que rode Node. O
caminho mais curto:

1. Crie um projeto no [Supabase](https://supabase.com) e copie as duas connection strings.
2. Importe o repositório na [Vercel](https://vercel.com), apontando o **Root Directory** para
   `banco-questoes-uerj`.
3. Configure `DATABASE_URL`, `DIRECT_URL` e (se quiser as explicações) `ANTHROPIC_API_KEY` nas
   variáveis de ambiente do projeto.
4. Com o `.env` local apontando para o Supabase, rode uma vez da sua máquina:

   ```bash
   npm run db:push && npm run db:seed
   for ano in 2021 2022 2023 2024 2025; do
     npm run exam:import -- data/provas/uerj-$ano.json
   done
   ```

O deploy passa a servir o banco já populado. Sem `NEXT_PUBLIC_SUPABASE_URL` e
`NEXT_PUBLIC_SUPABASE_ANON_KEY` o app roda em modo single-user: não há login e todo o progresso fica
num usuário fixo — o que basta para uso pessoal, mas deixa a URL aberta a quem a tiver.

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
      "reference": "Diretrizes AHA/ASA",
      "reviewNote": "Opcional. Ressalva sobre o gabarito oficial; só é exibida depois que o usuário responde."
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

### O comentário nunca aparece antes da resposta

`src/lib/claude.ts` é o único lugar do sistema que produz comentário de questão, e
`POST /api/questions/[id]/explain` é o único caminho até ele. O endpoint exige que o usuário já
tenha respondido — `409` caso contrário, porque entregar o comentário antes revelaria o gabarito.

Isso vale inclusive para os comentários escritos em lote: a tela recebe apenas o booleano
`hasExplanation`, nunca o texto. O conteúdo só desce depois que a tentativa foi registrada.

O texto é cacheado por **(questão, letra marcada, versão do formato)**. A versão entra na chave
de propósito: quando o formato do comentário muda, o cache é invalidado em vez de servir para
sempre um texto na estrutura anterior. Incremente `EXPLANATION_PROMPT_VERSION` ao mexer no prompt.

---

## Comentando o banco inteiro

```bash
npm run explain:all
```

Escreve o comentário de todas as questões que ainda não têm um. As explicações geradas assim são
**compartilhadas** (`userId: null`): não conhecem a resposta de ninguém, valem para qualquer usuário
e cobrem o banco inteiro.

Na tela de resolução, questão com comentário pronto **não mostra o botão "Explicar com Claude"** —
ao responder, o comentário carrega sozinho. O botão continua existindo apenas onde ainda não há
comentário. "Gerar novamente" permanece disponível nos dois casos e produz uma versão
contextualizada na letra que você marcou.

| Flag | Efeito |
| --- | --- |
| `--ano 2025` | Restringe a uma prova |
| `--concorrencia 6` | Chamadas simultâneas (padrão 4) |
| `--limite 10` | Gera só as N primeiras — útil para conferir o resultado antes de pagar o lote |
| `--refazer` | Apaga os comentários compartilhados do escopo e reescreve |

O script é **retomável**: pula o que já está feito, então interromper no meio e rodar de novo
continua de onde parou. Falhas isoladas são reportadas no fim sem derrubar o lote, com três
tentativas e espera crescente para atravessar rate limit.

### Custo do lote

Com `claude-sonnet-5` (padrão), as 247 questões custam por volta de **US$ 4,60** no preço
introdutório e **US$ 6,90** no preço cheio — uma vez só, porque o resultado fica no banco. Em
`claude-opus-5` seriam cerca de US$ 11,40. Trocar é uma variável de ambiente:

```bash
ANTHROPIC_MODEL=claude-opus-5 npm run explain:all
```

Os números saem da conta da seção [Custo por questão](#custo-por-questão).

### Sobre gerar antecipadamente

A especificação original deste projeto pedia comentário exclusivamente sob demanda. Gerar em lote é
uma decisão de quem administra o banco: troca custo adiantado por espera zero na hora de estudar, e
paga uma vez o que, sob demanda, seria pago a cada questão nova aberta. A regra que continua
valendo, e que não é negociável, é a outra: o comentário só chega ao cliente depois da resposta.

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

## Custo por questão

Os dois lugares que gastam token são o botão **Explicar com Claude** e o botão **Gerar prova**.
Nada mais no app chama a API.

Tamanhos reais dos prompts, medidos no código (`src/lib/claude.ts`, `src/lib/generate.ts`):

| | system | user (típico) | saída |
| --- | --- | --- | --- |
| Explicação | 4.338 caracteres | ~1.700 caracteres | 9 seções |
| Geração (por assunto) | 1.811 caracteres | ~5.300 caracteres | ~450–600 tokens por questão |

Convertendo a ~3,4 caracteres/token (português técnico), **uma explicação custa ~1.800 tokens de
entrada e ~1.200–1.800 de saída**. O `max_tokens: 4000` é teto, não consumo: cobra-se o que sai.

Custo de **uma explicação** (entrada 1.800 + saída 1.500) e do lote das 247 questões:

| Modelo | US$/1M in–out | Por explicação | Banco inteiro (247) |
| --- | --- | --- | --- |
| `claude-sonnet-5` (padrão) | 3 / 15 | **~US$ 0,028** | **~US$ 6,90** |
| `claude-sonnet-5` (intro, até 31/08/2026) | 2 / 10 | ~US$ 0,019 | ~US$ 4,60 |
| `claude-opus-5` | 5 / 25 | ~US$ 0,046 | ~US$ 11,40 |
| `claude-haiku-4-5` | 1 / 5 | ~US$ 0,009 | ~US$ 2,30 |

Custo de **uma prova gerada de 60 questões** (≈20 chamadas, uma por assunto do blueprint):

| Modelo | Prova inteira | Por questão |
| --- | --- | --- |
| `claude-opus-5` (padrão da geração) | ~US$ 0,96 | ~US$ 0,016 |
| `claude-sonnet-5` | ~US$ 0,53 | ~US$ 0,009 |
| `claude-haiku-4-5` | ~US$ 0,19 | ~US$ 0,003 |

Os dois caminhos têm padrões diferentes de propósito: o comentário usa **Sonnet 5**, porque é um
lote grande de texto explicativo em que a diferença de qualidade não justifica o custo; a geração de
questões inéditas segue em **Opus 5**, porque inventar caso clínico plausível com distratores bons é
onde o modelo mais forte se paga. `ANTHROPIC_MODEL` sobrescreve os dois de uma vez:

```bash
ANTHROPIC_MODEL=claude-haiku-4-5
```

**Cada explicação é paga uma vez.** A tabela `Explanation` guarda o texto por
`(questão, letra marcada, versão do formato)`; reabrir a questão não gera chamada nova. Com
`npm run explain:all`, o banco inteiro é pago de uma vez e o custo por questão nova aberta passa a
ser zero.

Onde o custo **não** está: a saída responde por ~80% da conta. Cachear o system prompt da explicação
(`cache_control`) economizaria só ~7% do total e exige acerto de mais de ~22% na janela de 5 minutos
para compensar o write de 1,25×; não vale a complexidade aqui. Encurtar o comentário economizaria
muito mais — ao custo exato daquilo que o comentário existe para entregar.

Os números acima são **estimativas por contagem de caracteres**, não medição. Para medir de verdade,
com a chave configurada:

```bash
curl https://api.anthropic.com/v1/messages/count_tokens \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{"model":"claude-opus-5","system":"<system prompt>","messages":[{"role":"user","content":"<user prompt>"}]}'
```

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
npm run explain:all         # comenta todas as questões sem comentário
```

---

## Limitações conhecidas

- **A classificação das 247 questões é editorial.** Tema, assunto, tópico e palavras-chave foram
  atribuídos questão a questão a partir do enunciado; o gabarito e o percentual de acerto vêm do
  caderno e não foram alterados. Onde a questão cruza duas áreas — anemia falciforme que se complica
  com coledocolitíase, por exemplo —, a classificação seguiu o raciocínio que resolve o item, e outra
  leitura seria defensível. Isso desloca alguns pontos percentuais do ranking.
- **As três questões anuladas de 2021 estão fora do banco** e, portanto, fora das estatísticas.
- **As questões geradas são escritas por IA.** Foram validadas estruturalmente (gabarito existe
  entre as alternativas, sem letras duplicadas), mas não clinicamente. Revise antes de usá-las como
  material de estudo definitivo.
- **As explicações são geradas por IA**, inclusive a checagem de consistência do gabarito. O prompt
  fixa a hierarquia de fontes e proíbe fabricar citação, o que reduz o problema sem eliminá-lo.
  Confira as referências antes de fixar conduta.
- O job de geração roda em memória do processo: um restart do servidor durante a geração deixa o
  job travado em `GERANDO`. Basta disparar outro.
- A interface está em português do Brasil e não tem internacionalização.
