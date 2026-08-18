# Bancos de Questões

Dois bancos de questões e simulados, mesma base de código (Next.js + Prisma), cada um com seu
próprio banco de dados e seu próprio corpus.

| Projeto | Prova | Estado |
| --- | --- | --- |
| [`banco-questoes-uerj/`](banco-questoes-uerj/) | R+ Clínica Médica da UERJ | Populado — 247 questões oficiais (2021–2025), comentadas |
| [`banco-questoes-enare/`](banco-questoes-enare/) | ENARE | Estrutura pronta, banco vazio — a popular |

Cada projeto tem seu próprio `GUIA.md` (passo a passo operacional) e `README.md` (decisões de
produto e arquitetura: como a incidência é calculada, por que o gabarito nunca chega ao cliente
antes da resposta, custo por questão). Comece pelo `GUIA.md` do projeto que for usar.

## O que a base de código faz

- **Análise da banca**: incidência por tema, ranking de assuntos e curva 80/20, recalculados
  automaticamente a cada prova importada.
- **Três níveis de classificação** — tema › assunto › tópico —, com o assunto clicável para abrir a
  lista de tópicos que a banca realmente cobrou.
- **Dificuldade medida, não estimada**: cada questão herda o percentual real de acerto dos
  candidatos, quando o caderno traz esse dado.
- **Resolução sem gabarito**: ao abrir a questão você vê apenas enunciado e alternativas; ao
  responder, o app informa somente se acertou ou errou.
- **Explicação sob demanda** pelo botão "Explicar com Claude", em medicina baseada em evidências,
  com pearls, pitfalls e mnemônicos.
- **Ressalvas de gabarito**: campo opcional por questão para apontar conduta desatualizada,
  alternativa dupla ou item passível de anulação — exibido depois que você responde.
- **Simulados** aleatórios, por tema, por incidência, só das erradas, só das marcadas para revisar,
  e geração de prova inédita a partir do banco.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · TailwindCSS · Prisma · PostgreSQL/Supabase ·
Anthropic SDK.

## Rodando

```bash
cd banco-questoes-enare       # ou banco-questoes-uerj
npm install
cp .env.example .env          # aponte DATABASE_URL para o seu Postgres
npx prisma db push
npm run db:seed
npm run exam:import -- data/provas/<sua-prova>.json
npm run dev
```

Abra `http://localhost:3000`. Detalhes completos (Docker, Supabase, formato de importação) em cada
`GUIA.md`.
