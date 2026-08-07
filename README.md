# Banco de Questões R+ UERJ

Banco de questões e simulados para a prova de **R+ Clínica Médica da UERJ** (Hospital Universitário
Pedro Ernesto).

O projeto vive em [`banco-questoes-uerj/`](banco-questoes-uerj/). Leia o
[README de lá](banco-questoes-uerj/README.md) para instalação, importação de provas e detalhes de
arquitetura.

## O que tem dentro

- **247 questões oficiais** das provas de 2021 a 2025, com enunciado, alternativas e gabarito.
- **Análise da banca**: incidência por tema, ranking de assuntos e curva 80/20, todos recalculados
  automaticamente a cada prova importada.
- **Três níveis de classificação** — tema › assunto › tópico —, com o assunto clicável para abrir a
  lista de tópicos que a banca realmente cobrou.
- **Dificuldade medida, não estimada**: cada questão herda o percentual real de acerto dos
  candidatos, que vem no caderno.
- **Resolução sem gabarito**: ao abrir a questão você vê apenas enunciado e alternativas; ao
  responder, o app informa somente se acertou ou errou.
- **Explicação sob demanda** pelo botão "Explicar com Claude", em medicina baseada em evidências,
  com pearls, pitfalls e mnemônicos.
- **Ressalvas de gabarito**: dez questões trazem uma nota editorial apontando conduta desatualizada,
  alternativa dupla ou item passível de anulação — exibida depois que você responde.
- **Simulados** aleatórios, por tema, por incidência, só das erradas, só das marcadas para revisar,
  e geração de prova inédita a partir do banco.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · TailwindCSS · Prisma · PostgreSQL/Supabase ·
Anthropic SDK.

## Rodando

```bash
cd banco-questoes-uerj
npm install
cp .env.example .env          # aponte DATABASE_URL para o seu Postgres
npx prisma db push
npm run db:seed
npm run exam:import -- data/provas/uerj-2021.json   # e assim para 2022..2025
npm run dev
```

Abra `http://localhost:3000`.
