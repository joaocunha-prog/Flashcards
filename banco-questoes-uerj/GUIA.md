# Guia prático

Como subir a aplicação do zero e como colocar provas, gabaritos e comentários dentro dela.

Este documento é operacional: passo a passo e comandos. Se você quer entender **por que** o projeto
é do jeito que é — a curva 80/20, as regras de exposição do gabarito, o custo por questão —, isso
está no [README](README.md).

**Índice**

- [Parte 1 — Subir a aplicação](#parte-1--subir-a-aplicação)
- [Parte 2 — Incluir uma prova e seu gabarito](#parte-2--incluir-uma-prova-e-seu-gabarito)
- [Parte 3 — Incluir os comentários das questões](#parte-3--incluir-os-comentários-das-questões)
- [Referência rápida de comandos](#referência-rápida-de-comandos)

---

## Parte 1 — Subir a aplicação

### O que você precisa antes

- **Node.js 20 ou superior**
- **PostgreSQL** — local, via Docker, ou uma conta no [Supabase](https://supabase.com)

Nenhuma chave de API é necessária para rodar. O `ANTHROPIC_API_KEY` só entra se você quiser **gerar**
comentários novos ou provas inéditas; os 247 comentários que já existem no repositório entram sem ele.

Todos os comandos abaixo rodam **de dentro da pasta `banco-questoes-uerj/`**:

```bash
cd banco-questoes-uerj
```

---

### Passo 1 — Suba o banco de dados

**Opção A — Docker (o caminho mais curto):**

```bash
docker compose up -d
```

Isso levanta um Postgres 16 na porta 5432, com usuário `postgres`, senha `postgres` e banco
`banco_questoes_uerj` — exatamente o que o `.env.example` já espera.

**Opção B — Supabase:** crie um projeto e copie as duas connection strings em
*Project Settings → Database*. Atenção a um detalhe que costuma custar tempo: use a porta **6543**
(pooler) em `DATABASE_URL` e a **5432** (conexão direta) em `DIRECT_URL`. Migrations não passam pelo
pooler.

**Opção C — Postgres que você já tem:** crie um banco vazio e aponte as URLs para ele no passo
seguinte.

---

### Passo 2 — Crie o arquivo de configuração

```bash
cp .env.example .env
```

Abra o `.env`. **Só duas variáveis são obrigatórias**, e as duas precisam estar preenchidas — o
Prisma recusa iniciar se faltar qualquer uma:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/banco_questoes_uerj"
DIRECT_URL="postgresql://postgres:postgres@localhost:5432/banco_questoes_uerj"
```

Com Postgres local as duas apontam para o mesmo lugar. A separação existe por causa do Supabase,
onde elas diferem.

As demais são opcionais, e o app funciona sem todas elas:

| Variável | O que acontece se ficar vazia |
| --- | --- |
| `ANTHROPIC_API_KEY` | App funciona normal. Só "Explicar com Claude" e a geração de provas inéditas ficam indisponíveis, com aviso na tela |
| `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Modo local de usuário único: sem tela de login, todo o progresso vai para um usuário fixo |
| `ADMIN_IMPORT_TOKEN` | As rotas `/api/admin/*` ficam desligadas e respondem 503. A importação por linha de comando continua funcionando |

---

### Passo 3 — Instale as dependências e crie as tabelas

```bash
npm install
npm run db:push
```

O `db:push` lê o `prisma/schema.prisma` e cria as tabelas no banco vazio.

---

### Passo 4 — Popule a taxonomia

```bash
npm run db:seed
```

Isso grava **apenas a estrutura de classificação** — os 11 temas, os assuntos e os tópicos, com
nomes canônicos e ordem de exibição. Nenhuma questão entra aqui: o banco de questões nasce vazio de
propósito, e o conteúdo entra pelas provas no passo seguinte.

O seed não é estritamente obrigatório (a importação cria tema e assunto que não existirem), mas sem
ele os temas ficam sem ordenação definida na interface. Rode.

---

### Passo 5 — Carregue as provas

As cinco provas oficiais já estão no repositório, em `data/provas/`:

```bash
for ano in 2021 2022 2023 2024 2025; do
  npm run exam:import -- data/provas/uerj-$ano.json
done
```

Cada importação imprime quantas questões criou e recalcula o ranking. Ao final você tem **247
questões** — 250 aplicadas menos as 3 anuladas de 2021.

---

### Passo 6 — Carregue os comentários

```bash
npm run explain:import
```

Lê tudo que está em `data/comentarios/` e imprime a cobertura ao final. Deve terminar em
`Cobertura: 247/247 questões comentadas.`

---

### Passo 7 — Rode

**Desenvolvimento** (recarrega ao salvar):

```bash
npm run dev
```

**Produção** (mais rápido; exige rebuild a cada mudança de código):

```bash
npm run build
npm start
```

Abra <http://localhost:3000>.

Para usar outra porta: `PORT=3111 npm start`.

---

### Tudo de uma vez

Do zero até o app no ar, para copiar e colar:

```bash
cd banco-questoes-uerj
docker compose up -d
cp .env.example .env

npm install
npm run db:push
npm run db:seed

for ano in 2021 2022 2023 2024 2025; do
  npm run exam:import -- data/provas/uerj-$ano.json
done
npm run explain:import

npm run dev
```

---

### Quando algo dá errado

| Mensagem | Causa | Solução |
| --- | --- | --- |
| `Environment variable not found: DIRECT_URL` | O `.env` tem só `DATABASE_URL` | Preencha as **duas** variáveis; o schema exige ambas |
| `Can't reach database server at localhost:5432` | Postgres não está de pé | `docker compose up -d`, ou inicie seu Postgres |
| `Cannot find module '@prisma/client'` | Cliente do Prisma não foi gerado | `npm run db:generate` |
| `The table 'public.questions' does not exist` | Tabelas não foram criadas | `npm run db:push` |
| `Sem questão correspondente no banco` no `explain:import` | Comentários importados antes das provas | Rode `exam:import` primeiro; o comentário se liga à questão por ano e número |
| `EADDRINUSE: port 3000` | Já existe algo na porta | `PORT=3001 npm run dev`, ou derrube o processo antigo |
| A tela abre mas não há questão nenhuma | Faltou o passo 5 | Rode o `exam:import` |

---

## Parte 2 — Incluir uma prova e seu gabarito

Uma prova entra no sistema como **um arquivo JSON**, e o gabarito vai **dentro dele** — cada questão
carrega o próprio campo `answerKey`. Não existe arquivo de gabarito separado.

### O arquivo

Salve em `data/provas/`, com um nome que identifique a prova (ex.: `uerj-2026.json`). A estrutura
canônica está em [`data/types.ts`](data/types.ts) e é validada na importação.

### Campos da prova

| Campo | Obrigatório | Descrição |
| --- | --- | --- |
| `slug` | **sim** | Identificador estável, só minúsculas, números e hífens. É a chave de reimportação — mantenha o mesmo ao corrigir a prova |
| `year` | **sim** | Ano de aplicação |
| `title` | **sim** | Título exibido na interface |
| `source` | **sim** | `PROVA_OFICIAL` para prova aplicada pela banca; `AUTORAL_ESTILO_BANCA` para questões autorais |
| `questions` | **sim** | Lista de questões (ao menos uma) |
| `board` | não | Padrão: `UERJ` |
| `program` | não | Padrão: `R+ Clínica Médica` |
| `reference` | não | Procedência: URL do caderno, edital |
| `appliedAt` | não | Data de aplicação em ISO 8601 |
| `excludeFromStats` | não | `true` mantém a prova fora do cálculo de incidência. Use em simulados autorais — contá-los realimentaria o ranking que os originou. Padrão: `false` |

### Campos de cada questão

| Campo | Obrigatório | Descrição |
| --- | --- | --- |
| `number` | **sim** | Número da questão no caderno. Único dentro da prova |
| `statement` | **sim** | Enunciado completo |
| `alternatives` | **sim** | De 2 a 5 itens, cada um com `letter` e `text` |
| `answerKey` | **sim** | **A letra correta.** Precisa corresponder a uma das alternativas |
| `theme` | **sim** | Ex.: `Neurologia` |
| `difficulty` | **sim** | `FACIL`, `MEDIA` ou `DIFICIL` |
| `subtheme` | não | Ex.: `Síndromes vasculares`. **Sem ele a questão não entra no ranking de assuntos** |
| `topic` | não | Ex.: `AVC isquêmico — trombólise`. Exige `subtheme` |
| `keywords` | não | Termos para busca. Padrão: lista vazia |
| `reference` | não | Diretriz ou fonte do item |
| `reviewNote` | não | Ressalva editorial sobre o gabarito oficial (veja abaixo) |

### Sobre o gabarito

O `answerKey` **nunca chega ao navegador antes de o usuário responder**. Ele fica no banco, e o
servidor devolve apenas `acertou` ou `errou`. Não é preciso nenhum cuidado especial da sua parte ao
montar o arquivo — mas vale saber que essa é uma garantia do servidor, não da interface.

A importação recusa a prova inteira se algum `answerKey` não corresponder a nenhuma alternativa
daquela questão. É a proteção mais útil contra erro de digitação.

### Sobre o `reviewNote`

Use quando o gabarito oficial merece ressalva: conduta que mudou desde a aplicação, duas
alternativas defensáveis, enunciado impreciso, item passível de anulação.

O texto aparece num painel âmbar **depois** que o usuário responde — nunca antes, porque quase
sempre precisa citar a letra correta para fazer sentido.

### Exemplo completo

Uma prova válida, com uma questão:

```json
{
  "slug": "uerj-2026-r-plus-cm",
  "year": 2026,
  "title": "UERJ 2026 — R+ Clínica Médica",
  "source": "PROVA_OFICIAL",
  "reference": "https://www.uerj.br/caderno-2026.pdf",
  "questions": [
    {
      "number": 1,
      "statement": "Homem de 62 anos, hipertenso, é levado à emergência com hemiparesia direita de início há 2 horas...",
      "alternatives": [
        { "letter": "A", "text": "Aspirina e observação clínica." },
        { "letter": "B", "text": "Trombólise endovenosa com alteplase." },
        { "letter": "C", "text": "Anticoagulação plena com heparina." },
        { "letter": "D", "text": "Craniectomia descompressiva." }
      ],
      "answerKey": "B",
      "theme": "Neurologia",
      "subtheme": "Síndromes vasculares",
      "topic": "AVC isquêmico — trombólise",
      "difficulty": "MEDIA",
      "keywords": ["AVC", "alteplase", "janela terapêutica"],
      "reference": "Diretrizes AHA/ASA para AVC isquêmico agudo",
      "reviewNote": "Opcional. Só use se o gabarito oficial merecer ressalva."
    }
  ]
}
```

### Importando

**Por linha de comando** (o jeito normal):

```bash
npm run exam:import -- data/provas/uerj-2026.json
```

**Por HTTP**, se preferir — exige `ADMIN_IMPORT_TOKEN` preenchido no `.env`:

```bash
curl -X POST http://localhost:3000/api/admin/import \
  -H "x-admin-token: $ADMIN_IMPORT_TOKEN" \
  -H 'Content-Type: application/json' \
  --data @data/provas/uerj-2026.json
```

### O que acontece na importação

1. **O arquivo é validado por inteiro antes de gravar.** Se uma questão estiver errada, nada entra —
   não existe importação pela metade.
2. **Tema, assunto e tópico que não existirem são criados na hora.** Uma prova nova pode trazer um
   assunto inédito sem quebrar nada.
3. **As questões são gravadas** com a chave `slug#numero`.
4. **O ranking é recalculado**: incidência por assunto, curva 80/20, estatísticas por tema e tópico.
   A tela de análise já reflete a prova nova.

### Corrigindo uma prova já importada

Edite o JSON e importe de novo, **mantendo o mesmo `slug`**. A operação é idempotente: as questões
são atualizadas no lugar, não duplicadas. As alternativas são substituídas em bloco, então corrigir
o texto de uma delas funciona normalmente.

O que você **não** deve fazer é trocar o `slug` para "forçar atualização" — isso cria uma prova
paralela e duplica as questões no ranking.

### Erros de validação mais comuns

| Mensagem | O que está errado |
| --- | --- |
| `answerKey não corresponde a nenhuma alternativa` | A letra do gabarito não existe entre as alternativas daquela questão |
| `letras de alternativa duplicadas` | Duas alternativas com a mesma letra |
| `números de questão duplicados dentro da prova` | Duas questões com o mesmo `number` |
| `topic exige subtheme` | Você informou `topic` sem informar `subtheme` |
| `slug deve conter apenas letras minúsculas, números e hífens` | Maiúscula, espaço ou acento no `slug` |

---

## Parte 3 — Incluir os comentários das questões

O comentário é o texto explicativo que aparece **depois** que o usuário responde. Ele mora num
arquivo separado da prova, porque costuma ser escrito depois — e porque um comentário ruim não deve
obrigar a reimportar a prova inteira.

Há dois caminhos: escrever o texto você mesmo, ou gerar pela API do Claude.

### Caminho A — Comentários escritos por fora

Crie um arquivo em `data/comentarios/`, nomeado `uerj-AAAA.json`. Se quiser dividir a prova em
lotes, use sufixos: `uerj-2026-b.json`, `uerj-2026-c.json` — todos são lidos.

O formato é um objeto simples: **a chave é o número da questão**, o valor é o texto em markdown.

```json
{
  "1": "## Resposta correta\nLetra **B**. ...",
  "2": "## Resposta correta\nLetra **D**. ..."
}
```

O texto precisa seguir **nove seções, nesta ordem e com estes títulos exatos** — o renderizador e o
CSS dependem deles:

```markdown
## Resposta correta
## Por que as outras estão erradas
## Base de evidência
## Revisão rápida
## Pearls
## Pitfalls
## Mnemônico          (opcional — omita se não houver um bom)
## Checagem de consistência
## Referências
```

Nas alternativas incorretas, use o formato `**B)** motivo`, separadas por linha em branco.

Importe:

```bash
npm run explain:import
```

Sem argumento ele lê `data/comentarios/`. Para apontar outra pasta:
`npm run explain:import -- caminho/da/pasta`.

A importação **valida antes de gravar**: um texto sem as seções obrigatórias é recusado e listado no
final, em vez de virar comentário quebrado na tela. Reimportar substitui o comentário anterior
daquela questão, não empilha um segundo.

> **Ordem importa.** O comentário se liga à questão por ano e número, então a prova precisa ter sido
> importada antes. Se você ver `Sem questão correspondente no banco`, foi isso.

Ao acrescentar um lote novo escrito por um modelo diferente do padrão, registre a procedência no mapa
`MODELO_POR_ARQUIVO`, no topo de `scripts/import-explanations.ts`. É o que mantém o campo `model` de
cada comentário fiel a quem o escreveu.

### Caminho B — Gerar pela API do Claude

Exige `ANTHROPIC_API_KEY` no `.env`.

**Em lote, pelo terminal:**

```bash
npm run explain:all
```

Percorre o banco, pula o que já tem comentário e não sobrescreve nada existente.

**Sob demanda, na interface:** questões sem comentário mostram o botão **"Explicar com Claude"**, que
gera o texto na hora. Onde já existe comentário, ele carrega sozinho ao responder — e o botão
**"Gerar novamente"** permite pedir outra versão.

### Conferindo a cobertura

O `explain:import` já imprime o total ao final. Para ver a cobertura prova a prova:

```bash
psql "$DATABASE_URL" -tAc "
SELECT q.year, count(*) FILTER (WHERE e.id IS NOT NULL) || '/' || count(*)
FROM questions q LEFT JOIN explanations e
  ON e.\"questionId\" = q.id AND e.\"userId\" IS NULL AND e.\"promptVersion\" = 2
GROUP BY q.year ORDER BY q.year;"
```

---

## Referência rápida de comandos

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Sobe em modo desenvolvimento (porta 3000) |
| `npm run build` && `npm start` | Sobe em modo produção |
| `npm run db:push` | Cria/atualiza as tabelas a partir do schema |
| `npm run db:seed` | Popula a taxonomia (temas, assuntos, tópicos) |
| `npm run db:studio` | Abre o Prisma Studio para inspecionar o banco |
| `npm run exam:import -- <arquivo.json>` | Importa uma prova e recalcula o ranking |
| `npm run explain:import` | Importa os comentários de `data/comentarios/` |
| `npm run explain:all` | Gera os comentários que faltam pela API (exige chave) |
| `npm run analysis:recompute` | Recalcula o ranking sem importar nada |
| `npm run typecheck` | Verifica os tipos |

---

## Onde as coisas ficam

```
banco-questoes-uerj/
├── data/
│   ├── provas/           ← JSON das provas (enunciados, alternativas, gabarito)
│   ├── comentarios/      ← JSON dos comentários, por prova
│   ├── types.ts          ← formato canônico de importação
│   └── taxonomy.ts       ← temas, assuntos e tópicos do seed
├── prisma/
│   ├── schema.prisma     ← modelo de dados
│   └── seed.ts           ← popula a taxonomia
├── scripts/
│   ├── import-exam.ts        ← npm run exam:import
│   ├── import-explanations.ts ← npm run explain:import
│   ├── explain-all.ts        ← npm run explain:all
│   ├── recompute.ts          ← npm run analysis:recompute
│   └── extracao/             ← pipeline PDF → JSON (ver README de lá)
└── src/
    ├── app/              ← páginas e rotas de API
    ├── components/       ← interface
    └── lib/              ← importação, análise, serialização, integração com Claude
```
