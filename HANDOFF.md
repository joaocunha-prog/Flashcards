# HANDOFF

## Objetivo

Banco de questões ENARE + EBSERH (Grupo Clínica Médica). Mesma base de código do
`banco-questoes-uerj/`, projeto em `banco-questoes-enare/`. Branch: **`claude/enare-project-setup-b3ilb6`**
(não é a default do repo — a default é `claude/banco-questoes-r-uerj-3d1xr7`, do projeto UERJ).
**PR aberto: #2** (`joaocunha-prog/Flashcards`), branch de origem para a default. Todo o trabalho até
aqui está commitado e pushado nessa branch.

**Comece pelo [GUIA.md](banco-questoes-enare/GUIA.md)** para subir a aplicação. O README do projeto
explica as decisões e já documenta as estatísticas reais do corpus.

## Estado Atual

**Banco de questões pronto: 212 questões em 4 provas**, commitadas em `data/provas/`:
`enare-2025.json` (77), `enare-2026.json` (77), `ebserh-2025.json` (30), `ebserh-2026.json` (28).

Estatísticas reais já calculadas (rodando localmente, documentadas no README, **não populadas em
nenhum banco persistente** — o usuário disse que vai passar a `DATABASE_URL`/`DIRECT_URL` reais
depois; até lá, populei um Postgres local só para calcular e documentar, e não deixei nada rodando).
15 temas, 85 assuntos com pelo menos 1 questão, **46 assuntos dentro do corte 80/20** (lista completa
abaixo). Dificuldade: ENARE medida pelo % real de acerto do caderno (88 FACIL / 47 MEDIA / 19
DIFICIL nas 154 questões ENARE); EBSERH sem essa estatística na fonte, entra com `MEDIA` padrão nas
58 questões (documentado no `reference` de cada prova EBSERH).

**Feature "Resumos: 80/20 e Selecionados" já implementada e no ar** (commit `dde78c4`): duas abas na
página `/resumos`, model `ResumoSelection` no schema, endpoint `PATCH /api/resumos/[slug]/select`,
componentes `ResumosTabs`/`SelectResumoButton`. Replicada também em `banco-questoes-uerj/` (mesmo
código). Isso já está pronto — não precisa mexer.

### Tarefa concluída: escrever os 46 resumos do corte 80/20

O usuário pediu **"Crie os resumos dos tópicos do 80/20"**. **Concluído nesta sessão** — os 46
arquivos `data/resumos/<slug>.ts` foram escritos (commits `45127be`, `4486d15`, `3cba51a`),
registrados em `data/resumos/content.ts` (import + entrada no objeto `RESUMO_CONTENT`) e em
`data/resumos/slugs.ts` (array `RESUMO_SLUGS`, na ordem do ranking 80/20). Formato usado, para
referência futura: seções `## <emoji> <Título>` (ver `src/lib/resumoSections.ts` para a lista
completa de emojis reconhecidos: 🎯 essencial, 💎 pearls, ⚠️ pitfalls, 📝 enare ("Como a banca
cobra"), 🆕 atualização, 🧠 conceito, 🩺 quadro clínico, 🔎 diagnóstico, 🚨 gravidade, 💊 tratamento,
🔀 diferencial, 🔤 mnemônicos, 📋 tabela, 📚 referências), sempre citando board (ENARE/EBSERH), ano e
número da questão real na seção "Como a banca cobra" (dados na tabela "Grounding" abaixo).

Validado nesta sessão: `npm install` (node_modules não existia), `npx tsc --noEmit` limpo, `npm run
build` limpo, teste local completo (Postgres local, import das 4 provas, servidor em `PORT=3111`) —
`/resumos` lista os 46 assuntos na aba 80/20 e resumos individuais (`hiv-aids`, `cirrose-e-
complicacoes`, `tuberculose`, e outros verificados por amostragem) abrem sem erro de parsing.
Postgres local derrubado e `.env` removido ao final, conforme convenção da sessão anterior.

### Depois dos resumos: nova tarefa pedida pelo usuário (flashcards Anki + tabelas/escalas)

Pedido literal do usuário, para ler com atenção antes de começar (ainda não iniciado):

> "Na sequencia preciso que você crie arquivos flashcards no modelo do Anki, pode usar metodos como
> cloze e outros para ser didaticos. Cada arquivo é um dos tópicos dos 80/20 e deve ser didatico
> para treinar por flashcards e aprender/fixar os assuntos. Crie também um arquivo com
> tabelas/escalas que são cobradas ex: Forrest, Child-Puigh, etc."

**Concluído nesta sessão** (commit `1610ee5`). O usuário confirmou por `AskUserQuestion`: formato
`.txt` tabulado (importação nativa do Anki) e pasta `banco-questoes-enare/data/flashcards/`; pediu
também explicitamente ser "muito didático", usar mnemônicos e imagens quando necessário.

Resultado: **47 arquivos** em `data/flashcards/` — um por assunto do 80/20 (46, mesmos slugs do
ranking) + `escalas-e-tabelas.txt`. Formato: notetype **Cloze** do Anki (não Basic — decisão tomada
nesta sessão para evitar a complexidade/risco de misturar dois notetypes num único arquivo de
importação), cabeçalho `#separator:tab / #html:true / #notetype:Cloze / #deck:ENARE-EBSERH::80-20::
<Tema>::<Assunto>`, 3 campos por linha (`Text`, `Extra`, `Tags`). Conteúdo gerado a partir dos
resumos já escritos em `data/resumos/<slug>.ts` (mesma fonte de verdade médica, sem inventar fatos
novos), citando banca/ano/número real nas tags quando ligado a uma questão do corpus. Todo arquivo
tem pelo menos 1 card de mnemônico (rotulado como consagrado ou como "recurso próprio", nunca
apresentado como oficial se foi inventado). 11 diagramas SVG em `data/flashcards/media/` (algoritmos/
fluxogramas esquemáticos, nunca imagens médicas "realistas" tipo ECG/radiografia/histologia — só 2
chegam perto de ECG e são esquemáticos/rotulados, não traçados realistas).

**Reescrita completa nesta sessão (commit `682f42c`), depois de feedback do usuário**: a primeira
versão (779 cards, commit `1610ee5`) foi rejeitada — "frases gigantes tiradas do resumo" em vez de
"conteúdo nuclear", e itens de tabela/escala (ex. Child-Pugh) agrupados num card só em vez de
item-por-item. Reescrita do zero seguindo o **princípio da informação mínima**: cada card testa um
único fato atômico (média de ~9-13 palavras no campo Text, contra ~20-26 antes); todo
contexto/mecanismo/pitfall foi movido para o Extra; toda escala/tabela/lista de critérios agora tem
**um card por item** (nenhum card usa mais de um número de cloze distinto — confirmado
programaticamente). Resultado: **1240 cards**. 2 imagens ficaram órfãs na reescrita e foram removidas
(`doencas-da-tireoide-tempestade-sequencia.svg`, `doencas-neuromusculares-broca-wernicke.svg`).

**Ajuste fino adicional (commit `14770b8`)**: o usuário corrigiu a interpretação de "item por item" —
para ESCALAS/TABELAS/MNEMÔNICOS DE SIGLA (RIPE, AEIOU, RCRI, HAS-BLED, CHA₂DS₂-VASc, tríade do WPW,
Child-Pugh, NYHA etc.), o pedido é que a **lista apareça completa** no card, escondendo só **um
elemento por vez** — não fragmentar em cards isolados sem mostrar o resto da lista (o que a rodada
anterior tinha feito). Técnica usada: uma única nota com vários números de cloze DISTINTOS na mesma
linha (`{{c1::}}`, `{{c2::}}`, ...) — o Anki gera automaticamente 1 carta por número, cada uma
mostrando a lista inteira com só aquele item escondido e os outros já revelados como texto normal.
Passados os 46 arquivos de assunto de novo (mesmos 7 batches) mesclando toda lista/mnemônico/critério
que estava fragmentado; cards que já eram fatos atômicos isolados (não listas) foram mantidos como
estavam. Resultado: **1038 notas gerando 1280 cards no Anki**. `escalas-e-tabelas.txt` foi a primeira
reescrita e serviu de referência de estilo para os outros 46 arquivos.

`escalas-e-tabelas.txt` cobre as 14 escalas/tabelas confirmadas relendo `statement`/`keywords` dos
212 enunciados em `data/provas/*.json` (script Python ad-hoc, não commitado): **Forrest**,
**Child-Pugh**, **MELD**, **King's College**, **HAS-BLED**, **CHA₂DS₂-VASc**, **TI-RADS**,
**Bethesda**, **Gleason**, **CURB-65**, **FIB-4**, **NAFLD Fibrosis Score**, **NYHA**, **Glasgow**.

Validação feita: script de validação (ad-hoc, removido do repo antes do commit) conferiu header de 4
linhas, 3 campos por linha de dado, todo card com marcador `{{c#::}}`, e que toda imagem referenciada
existe em `media/`. Todos os 13 SVGs verificados como XML válido. Não foi possível testar a importação
real num Anki (sem app disponível no ambiente) — só a validação estrutural do formato de texto.

## Ranking 80/20 (46 assuntos, rank|tema|assunto|slug|total|percent|cumulativePercent)

\`\`\`
1|Infectologia|HIV/AIDS|hiv-aids|11|5.19|5.19
2|Hematologia|Distúrbios da hemostasia|disturbios-da-hemostasia|9|4.25|9.43
3|Oncologia|Emergências oncológicas|emergencias-oncologicas|7|3.3|12.74
4|Neurologia|Neuroinfecção e emergências neurológicas|neuroinfeccao-e-emergencias-neurologicas|7|3.3|16.04
5|Gastroenterologia e Hepatologia|Cirrose e complicações|cirrose-e-complicacoes|6|2.83|18.87
6|Gastroenterologia e Hepatologia|Diarreias e má absorção|diarreias-e-ma-absorcao|6|2.83|21.7
7|Infectologia|Doenças tropicais e negligenciadas|doencas-tropicais-e-negligenciadas|6|2.83|24.53
8|Nefrologia|Rim em situações especiais|rim-em-situacoes-especiais|6|2.83|27.36
9|Gastroenterologia e Hepatologia|Hepatopatias não virais|hepatopatias-nao-virais|5|2.36|29.72
10|Infectologia|Infecções relacionadas à assistência|infeccoes-relacionadas-a-assistencia|5|2.36|32.08
11|Cardiologia|Insuficiência cardíaca|insuficiencia-cardiaca|5|2.36|34.43
12|Neurologia|Distúrbios motores|disturbios-motores|4|1.89|36.32
13|Nefrologia|Doença renal crônica|doenca-renal-cronica|4|1.89|38.21
14|Endocrinologia|Doenças da tireoide|doencas-da-tireoide|4|1.89|40.09
15|Neurologia|Doenças neuromusculares|doencas-neuromusculares|4|1.89|41.98
16|Infectologia|Infecções de pele e partes moles|infeccoes-de-pele-e-partes-moles|4|1.89|43.87
17|Infectologia|Infecções do trato urinário|infeccoes-do-trato-urinario|4|1.89|45.75
18|Infectologia|Infecções sexualmente transmissíveis|infeccoes-sexualmente-transmissiveis|4|1.89|47.64
19|Reumatologia|Manifestações cutâneas|manifestacoes-cutaneas|4|1.89|49.53
20|Gastroenterologia e Hepatologia|Motilidade intestinal|motilidade-intestinal|4|1.89|51.42
21|Hematologia|Anemias|anemias|3|1.42|52.83
22|Cardiologia|Arritmias|arritmias|3|1.42|54.25
23|Pneumologia|Asma|asma|3|1.42|55.66
24|Endocrinologia|Diabetes mellitus|diabetes-mellitus|3|1.42|57.08
25|Cardiologia|Dislipidemia|dislipidemia|3|1.42|58.49
26|Nefrologia|Distúrbios hidroeletrolíticos|disturbios-hidroeletroliticos|3|1.42|59.91
27|Emergências e Terapia Intensiva|Intoxicações exógenas|intoxicacoes-exogenas|3|1.42|61.32
28|Gastroenterologia e Hepatologia|Nutrição|nutricao|3|1.42|62.74
29|Pneumologia|Pneumonias|pneumonias|3|1.42|64.15
30|Oncologia|Rastreamento oncológico|rastreamento-oncologico|3|1.42|65.57
31|Reumatologia|Artrites microcristalinas|artrites-microcristalinas|2|0.94|66.51
32|Geriatria|Avaliação geriátrica ampla|avaliacao-geriatrica-ampla|2|0.94|67.45
33|Emergências e Terapia Intensiva|Avaliação perioperatória|avaliacao-perioperatoria|2|0.94|68.4
34|Pneumologia|Derrame pleural|derrame-pleural|2|0.94|69.34
35|Endocrinologia|Doenças da adrenal|doencas-da-adrenal|2|0.94|70.28
36|Cardiologia|Doenças do pericárdio e miocárdio|doencas-do-pericardio-e-miocardio|2|0.94|71.23
37|Gastroenterologia e Hepatologia|Doenças inflamatórias intestinais|doencas-inflamatorias-intestinais|2|0.94|72.17
38|Pneumologia|Doenças intersticiais|doencas-intersticiais|2|0.94|73.11
39|Pneumologia|DPOC|dpoc|2|0.94|74.06
40|Nefrologia|Glomerulopatias|glomerulopatias|2|0.94|75
41|Cardiologia|Hipertensão arterial|hipertensao-arterial|2|0.94|75.94
42|Nefrologia|Injúria renal aguda|injuria-renal-aguda|2|0.94|76.89
43|Reumatologia|Síndromes autoimunes induzidas|sindromes-autoimunes-induzidas|2|0.94|77.83
44|Neurologia|Síndromes vasculares|sindromes-vasculares|2|0.94|78.77
45|Neurologia|Síndromes vestibulares|sindromes-vestibulares|2|0.94|79.72
46|Infectologia|Tuberculose|tuberculose|2|0.94|80.66
\`\`\`

## Grounding — questões reais por assunto (slug|board|ano|número|tópico|dificuldade)

Usado para escrever a seção "Como a banca cobra" de cada resumo com precisão (não inventar
ano/número). Extraído de `data/provas/*.json` via SQL depois de importar num Postgres local.

\`\`\`
anemias|ENARE|2026|15|Anemia ferropriva — perfil laboratorial|FACIL
anemias|ENARE|2026|18|Deficiência de vitamina B12 — degeneração combinada subaguda|FACIL
anemias|ENARE|2026|71|Pancitopenia — investigação inicial|FACIL
arritmias|EBSERH|2025|45|Síndrome de Wolff-Parkinson-White — achados eletrocardiográficos|MEDIA
arritmias|ENARE|2025|33|Extrassístoles ventriculares benignas em assintomático|FACIL
arritmias|ENARE|2025|59|Bloqueio atrioventricular Mobitz II — indicação de marcapasso|FACIL
artrites-microcristalinas|EBSERH|2025|44|Gota — fármacos com efeito uricosúrico incidental|MEDIA
artrites-microcristalinas|ENARE|2026|75|Líquido sinovial na gota|DIFICIL
asma|EBSERH|2025|35|Inflamação tipo 2 — IL-4, IL-5 e IL-13|MEDIA
asma|EBSERH|2026|38|Asma quase fatal — retenção de CO2 e falência ventilatória iminente|MEDIA
asma|ENARE|2026|20|Asma não controlada — fenótipo alérgico e terapia biológica|FACIL
avaliacao-geriatrica-ampla|EBSERH|2025|55|Delirium no idoso — evitar benzodiazepínicos|MEDIA
avaliacao-geriatrica-ampla|ENARE|2025|18|Síndrome consumptiva no idoso — principais causas|FACIL
avaliacao-perioperatoria|ENARE|2025|55|Manejo perioperatório de estatina|FACIL
avaliacao-perioperatoria|ENARE|2026|56|Avaliação de risco cardiovascular pré-operatório|MEDIA
cirrose-e-complicacoes|EBSERH|2026|39|Síndrome hepatorrenal — terlipressina e albumina|MEDIA
cirrose-e-complicacoes|ENARE|2025|8|Ascite por cirrose hepática — GASA e proteína do líquido|FACIL
cirrose-e-complicacoes|ENARE|2025|40|Ascite por hepatopatia congestiva|FACIL
cirrose-e-complicacoes|ENARE|2026|16|Peritonite bacteriana espontânea|FACIL
cirrose-e-complicacoes|ENARE|2026|40|Ascite por carcinomatose peritoneal — GASA baixo|MEDIA
cirrose-e-complicacoes|ENARE|2026|79|Ascite por carcinomatose peritoneal — GASA baixo|FACIL
derrame-pleural|ENARE|2025|19|Semiologia do derrame pleural|MEDIA
derrame-pleural|ENARE|2026|27|Semiologia do derrame pleural|FACIL
diabetes-mellitus|EBSERH|2025|41|Diabetes tipo 2 — componente genético|MEDIA
diabetes-mellitus|EBSERH|2025|42|Controle glicêmico intensivo no idoso — mortalidade|MEDIA
diabetes-mellitus|ENARE|2025|49|Hipoglicemia grave fora do hospital — glucagon|MEDIA
diarreias-e-ma-absorcao|EBSERH|2025|56|Esteatorreia — abetalipoproteinemia|MEDIA
diarreias-e-ma-absorcao|ENARE|2026|5|Parasitoses intestinais como diferencial de SII|MEDIA
diarreias-e-ma-absorcao|ENARE|2026|21|Doença celíaca — sorologia inicial|FACIL
diarreias-e-ma-absorcao|ENARE|2026|45|Doença celíaca — sorologia positiva|FACIL
diarreias-e-ma-absorcao|ENARE|2026|51|Doença de Whipple|FACIL
diarreias-e-ma-absorcao|ENARE|2026|55|Investigação de doença celíaca em diabético tipo 1|MEDIA
dislipidemia|ENARE|2025|34|Doença arterial periférica — terapia hipolipemiante de alta intensidade|FACIL
dislipidemia|ENARE|2025|45|Hipertrigliceridemia grave refratária a fibrato|DIFICIL
dislipidemia|ENARE|2026|47|Ácido bempedoico — nova classe hipolipemiante|FACIL
disturbios-da-hemostasia|EBSERH|2025|49|Púrpura trombocitopênica trombótica — perfil laboratorial|MEDIA
disturbios-da-hemostasia|EBSERH|2026|35|Anticoagulação após hemorragia digestiva — reinício entre o 3º e o 7º dia|MEDIA
disturbios-da-hemostasia|ENARE|2025|13|Tromboembolismo venoso associado a câncer|MEDIA
disturbios-da-hemostasia|ENARE|2025|23|Doença de von Willebrand|FACIL
disturbios-da-hemostasia|ENARE|2025|24|Trombofilia hereditária — investigação após TVP recorrente|MEDIA
disturbios-da-hemostasia|ENARE|2025|42|Manejo perioperatório de anticoagulação (bridging)|FACIL
disturbios-da-hemostasia|ENARE|2026|60|Doença de von Willebrand|FACIL
disturbios-da-hemostasia|ENARE|2026|65|Trombose venosa profunda — anticoagulação com apixabana|MEDIA
disturbios-da-hemostasia|ENARE|2026|80|Reversão de dabigatrana — idarucizumabe|FACIL
disturbios-hidroeletroliticos|ENARE|2025|1|Hiponatremia hipovolêmica sintomática grave|MEDIA
disturbios-hidroeletroliticos|ENARE|2026|12|SIADH — hiponatremia grave sintomática|FACIL
disturbios-hidroeletroliticos|ENARE|2026|72|Hipercalemia — alterações eletrocardiográficas|MEDIA
disturbios-motores|ENARE|2025|44|Hipotensão ortostática neurogênica na doença de Parkinson|FACIL
disturbios-motores|ENARE|2025|47|Síndrome das pernas inquietas — cinética do ferro|FACIL
disturbios-motores|ENARE|2025|52|Doença de Parkinson — interação da levodopa com piridoxina|MEDIA
disturbios-motores|ENARE|2025|53|Tremor essencial — betabloqueador|FACIL
doenca-renal-cronica|EBSERH|2025|39|Uremia — correlação com taxa de filtração glomerular|MEDIA
doenca-renal-cronica|EBSERH|2025|57|Limitações da dosagem de ureia na avaliação renal|MEDIA
doenca-renal-cronica|ENARE|2026|2|Finerenona na DRC diabética|FACIL
doenca-renal-cronica|ENARE|2026|70|Vacinação do paciente com DRC — vacina contra VSR|FACIL
doencas-da-adrenal|EBSERH|2025|34|Hiperaldosteronismo primário — apresentação e causas|MEDIA
doencas-da-adrenal|EBSERH|2026|47|Insuficiência adrenal terciária — retirada abrupta de glicocorticoide|MEDIA
doencas-da-tireoide|EBSERH|2026|46|Tempestade tireotóxica — tratamento inicial|MEDIA
doencas-da-tireoide|ENARE|2025|61|Tireoidite subaguda de De Quervain|FACIL
doencas-da-tireoide|ENARE|2026|7|Nódulo tireoidiano — Bethesda III (AUS/FLUS)|MEDIA
doencas-da-tireoide|ENARE|2026|8|Nódulo tireoidiano — TI-RADS e indicação de PAAF|FACIL
doencas-do-pericardio-e-miocardio|EBSERH|2026|32|Sarcoidose cardíaca de alto risco — indicação de CDI|MEDIA
doencas-do-pericardio-e-miocardio|ENARE|2025|70|Cardiomiopatia de Takotsubo|FACIL
doencas-inflamatorias-intestinais|EBSERH|2025|38|Doença de Crohn — complicações mais prevalentes|MEDIA
doencas-inflamatorias-intestinais|EBSERH|2026|42|Colite ulcerativa grave com reativação de CMV|MEDIA
doencas-intersticiais|ENARE|2025|74|Sarcoidose — achados histopatológicos|MEDIA
doencas-intersticiais|ENARE|2026|25|Diferencial sarcoidose vs. linfoma — biópsia guiada por EBUS|DIFICIL
doencas-neuromusculares|EBSERH|2025|58|Síndrome de Guillain-Barré — padrão eletroneuromiográfico|MEDIA
doencas-neuromusculares|ENARE|2025|43|Paralisia periódica hipocalêmica|DIFICIL
doencas-neuromusculares|ENARE|2026|9|Miastenia gravis com timoma — timectomia|MEDIA
doencas-neuromusculares|ENARE|2026|48|Afasia de Broca vs. Wernicke|MEDIA
doencas-tropicais-e-negligenciadas|EBSERH|2025|60|Parasitoses intestinais com passagem pulmonar (síndrome de Löffler)|MEDIA
doencas-tropicais-e-negligenciadas|EBSERH|2026|52|Doença da arranhadura do gato com neurorretinite|MEDIA
doencas-tropicais-e-negligenciadas|ENARE|2025|21|Estrongiloidíase disseminada (síndrome de hiperinfecção)|FACIL
doencas-tropicais-e-negligenciadas|ENARE|2025|76|Oncocercose — tratamento dos vermes adultos|DIFICIL
doencas-tropicais-e-negligenciadas|ENARE|2025|78|Febre maculosa brasileira — hospedeiro amplificador|FACIL
doencas-tropicais-e-negligenciadas|ENARE|2026|50|Infecção pelo HTLV-1|MEDIA
dpoc|EBSERH|2025|36|Exacerbação da DPOC — oxigenoterapia controlada|MEDIA
dpoc|EBSERH|2026|36|Exacerbação hipercápnica da DPOC — ventilação não invasiva|MEDIA
emergencias-oncologicas|EBSERH|2025|32|Síndrome da veia cava superior — causas benignas emergentes|MEDIA
emergencias-oncologicas|ENARE|2025|4|Compressão medular — sinais de alarme em lombalgia|FACIL
emergencias-oncologicas|ENARE|2025|5|Hipercalcemia maligna — investigação não mediada por PTH|FACIL
emergencias-oncologicas|ENARE|2025|48|Enterocolite neutropênica (tiflite)|FACIL
emergencias-oncologicas|ENARE|2026|1|Hipercalcemia maligna|MEDIA
emergencias-oncologicas|ENARE|2026|11|Compressão medular metastática|FACIL
emergencias-oncologicas|ENARE|2026|32|Dor oncológica refratária com hipercalcemia leve e insuficiência renal|MEDIA
glomerulopatias|ENARE|2025|9|Nefropatia membranosa idiopática — anti-PLA2R|FACIL
glomerulopatias|ENARE|2026|13|Síndrome nefrótica em PVHIV/diabético — investigação etiológica|MEDIA
hepatopatias-nao-virais|EBSERH|2025|47|Encefalopatia na hepatite aguda — edema cerebral|MEDIA
hepatopatias-nao-virais|EBSERH|2026|41|Insuficiência hepática aguda — critérios de King's College|MEDIA
hepatopatias-nao-virais|ENARE|2025|26|Doença hepática esteatótica metabólica — diagnóstico de exclusão|FACIL
hepatopatias-nao-virais|ENARE|2026|14|Doença hepática esteatótica metabólica — rastreio de fibrose|FACIL
hepatopatias-nao-virais|ENARE|2026|39|Gastrite atrófica metaplásica autoimune|MEDIA
hipertensao-arterial|ENARE|2025|50|Hipertensão resistente — quarta droga (espironolactona)|FACIL
hipertensao-arterial|ENARE|2026|58|Hipertensão resistente — efeito do jaleco branco à MAPA|MEDIA
hiv-aids|EBSERH|2026|51|Início de TARV em pneumocistose com coinfecção por hepatite B|MEDIA
hiv-aids|ENARE|2025|2|Coinfecção tuberculose-HIV — início da TARV|FACIL
hiv-aids|ENARE|2025|20|Colite por citomegalovírus em HIV avançado|MEDIA
hiv-aids|ENARE|2025|63|Abacavir — rastreio de hipersensibilidade (HLA-B*5701)|FACIL
hiv-aids|ENARE|2025|73|Síndrome inflamatória da reconstituição imune (IRIS)|FACIL
hiv-aids|ENARE|2025|77|Leucoplasia pilosa oral|DIFICIL
hiv-aids|ENARE|2025|79|Sarcoma de Kaposi — herpesvírus 8|MEDIA
hiv-aids|ENARE|2026|3|Profilaxia pré-exposição (PrEP) oral|FACIL
hiv-aids|ENARE|2026|38|Coinfecção tuberculose-HIV — momento de início da TARV|MEDIA
hiv-aids|ENARE|2026|46|Esquema antirretroviral de duas drogas em paciente estável|MEDIA
hiv-aids|ENARE|2026|77|Controlador de elite do HIV|FACIL
infeccoes-de-pele-e-partes-moles|EBSERH|2026|54|Fasceíte necrotizante estreptocócica — papel da clindamicina|MEDIA
infeccoes-de-pele-e-partes-moles|ENARE|2025|7|Osteomielite por contiguidade em lesão por pressão|FACIL
infeccoes-de-pele-e-partes-moles|ENARE|2025|30|Osteomielite por contiguidade em lesão por pressão|FACIL
infeccoes-de-pele-e-partes-moles|ENARE|2026|62|Abscesso odontogênico cervical com risco de mediastinite|FACIL
infeccoes-do-trato-urinario|ENARE|2025|28|Pielonefrite não complicada — tratamento ambulatorial|MEDIA
infeccoes-do-trato-urinario|ENARE|2025|57|Profilaxia de ITU recorrente|FACIL
infeccoes-do-trato-urinario|ENARE|2026|36|Cistite não complicada recorrente — tratamento empírico|FACIL
infeccoes-do-trato-urinario|ENARE|2026|61|Pielonefrite complicada por retenção urinária em paciente oncológico|FACIL
infeccoes-relacionadas-a-assistencia|EBSERH|2025|51|Prevenção de infecção hospitalar — higiene das mãos|MEDIA
infeccoes-relacionadas-a-assistencia|EBSERH|2026|40|Colite por Clostridioides difficile — teste molecular|MEDIA
infeccoes-relacionadas-a-assistencia|ENARE|2025|16|Colite por Clostridioides difficile recorrente/refratária|MEDIA
infeccoes-relacionadas-a-assistencia|ENARE|2025|29|Bacteremia por Staphylococcus aureus relacionada a cateter|FACIL
infeccoes-relacionadas-a-assistencia|ENARE|2026|68|Colite por Clostridioides difficile|FACIL
infeccoes-sexualmente-transmissiveis|ENARE|2025|25|Síndrome artrite-dermatite gonocócica (gonococcemia disseminada)|MEDIA
infeccoes-sexualmente-transmissiveis|ENARE|2025|64|Sífilis latente tardia em pessoa vivendo com HIV|DIFICIL
infeccoes-sexualmente-transmissiveis|ENARE|2026|28|Sífilis secundária — diagnóstico e tratamento|MEDIA
infeccoes-sexualmente-transmissiveis|ENARE|2026|29|Corrimento uretral — manejo sindrômico|FACIL
injuria-renal-aguda|EBSERH|2026|44|Indicações de terapia renal substitutiva de urgência|MEDIA
injuria-renal-aguda|ENARE|2025|39|Nefrite intersticial aguda por anti-inflamatório|FACIL
insuficiencia-cardiaca|EBSERH|2025|33|Classificação funcional NYHA|MEDIA
insuficiencia-cardiaca|EBSERH|2025|59|Espironolactona na insuficiência cardíaca — benefício de sobrevida|MEDIA
insuficiencia-cardiaca|EBSERH|2026|31|Choque cardiogênico frio-úmido — inotrópico e vasopressor|MEDIA
insuficiencia-cardiaca|EBSERH|2026|34|Sacubitril/valsartana — farmacologia de BNP e NT-proBNP|MEDIA
insuficiencia-cardiaca|ENARE|2025|41|ICFEp — inibidor de SGLT2|FACIL
intoxicacoes-exogenas|EBSERH|2026|55|Intoxicação por etilenoglicol — indicação de hemodiálise|MEDIA
intoxicacoes-exogenas|ENARE|2025|51|Síndrome serotoninérgica|FACIL
intoxicacoes-exogenas|ENARE|2026|24|Intoxicação por metanol|FACIL
manifestacoes-cutaneas|ENARE|2025|35|Eritema nodoso associado a contraceptivo oral|FACIL
manifestacoes-cutaneas|ENARE|2026|22|Pitting ungueal e psoríase|FACIL
manifestacoes-cutaneas|ENARE|2026|26|Pioderma gangrenoso|FACIL
manifestacoes-cutaneas|ENARE|2026|67|Hidradenite supurativa moderada a grave|FACIL
motilidade-intestinal|ENARE|2025|11|Pseudo-obstrução colônica aguda (síndrome de Ogilvie) em paciente oncológico|MEDIA
motilidade-intestinal|ENARE|2025|22|Constipação crônica refratária — impactação fecal|DIFICIL
motilidade-intestinal|ENARE|2025|36|Neostigmina na pseudo-obstrução colônica — monitorização|FACIL
motilidade-intestinal|ENARE|2026|64|Pseudo-obstrução intestinal em neuropatia autonômica diabética|FACIL
neuroinfeccao-e-emergencias-neurologicas|EBSERH|2025|52|AVC isquêmico — critério de imagem para trombólise|MEDIA
neuroinfeccao-e-emergencias-neurologicas|EBSERH|2026|57|Encefalite límbica autoimune anti-LGI1|MEDIA
neuroinfeccao-e-emergencias-neurologicas|ENARE|2025|38|Neurocisticercose — investigação complementar|FACIL
neuroinfeccao-e-emergencias-neurologicas|ENARE|2025|46|Trombose séptica do seio cavernoso|FACIL
neuroinfeccao-e-emergencias-neurologicas|ENARE|2025|60|Encefalite herpética — tratamento empírico|FACIL
neuroinfeccao-e-emergencias-neurologicas|ENARE|2026|10|Encefalopatia de Wernicke|MEDIA
neuroinfeccao-e-emergencias-neurologicas|ENARE|2026|30|Lesão expansiva com crise convulsiva — investigação e anticonvulsivante|FACIL
nutricao|ENARE|2026|17|Terapia nutricional em íleo pós-operatório com desnutrição grave|MEDIA
nutricao|ENARE|2026|19|Seguimento nutricional pós-bypass gástrico em Y de Roux|FACIL
nutricao|ENARE|2026|54|Terapia nutricional em diverticulite complicada|DIFICIL
pneumonias|EBSERH|2025|46|Pneumonia pneumocócica — sensibilidade da cultura de escarro|MEDIA
pneumonias|ENARE|2025|27|Pneumonia grave — investigação inicial|FACIL
pneumonias|ENARE|2026|35|Pneumonia adquirida na comunidade — critério de internação|MEDIA
rastreamento-oncologico|EBSERH|2025|40|Câncer colorretal — recomendação USPSTF|MEDIA
rastreamento-oncologico|ENARE|2026|6|Rastreamento de câncer colorretal — pólipo de baixo risco|MEDIA
rastreamento-oncologico|ENARE|2026|43|Câncer de próstata — escore de Gleason|MEDIA
rim-em-situacoes-especiais|EBSERH|2025|48|Fatores de risco para nefrolitíase — hipoparatireoidismo como exceção|MEDIA
rim-em-situacoes-especiais|EBSERH|2026|45|Nefrotoxicidade de polimixina e aminoglicosídeo — túbulo proximal|MEDIA
rim-em-situacoes-especiais|ENARE|2025|10|Doença ateroembólica de colesterol|DIFICIL
rim-em-situacoes-especiais|ENARE|2025|75|Nefrolitíase — terapia expulsiva|FACIL
rim-em-situacoes-especiais|ENARE|2026|63|Doença ateroembólica de colesterol pós-cateterismo|MEDIA
rim-em-situacoes-especiais|ENARE|2026|73|Nefrolitíase por oxalato de cálcio — profilaxia|MEDIA
sindromes-autoimunes-induzidas|ENARE|2025|15|Síndrome ASIA por substância oleosa injetável|MEDIA
sindromes-autoimunes-induzidas|ENARE|2026|78|Síndrome ASIA por implante de silicone|FACIL
sindromes-vasculares|EBSERH|2026|58|Trombose venosa cerebral com infarto hemorrágico — anticoagulação|MEDIA
sindromes-vasculares|EBSERH|2026|60|Síndrome da vasoconstrição cerebral reversível|MEDIA
sindromes-vestibulares|ENARE|2025|31|Doença de Ménière — orientação dietética|DIFICIL
sindromes-vestibulares|ENARE|2026|49|Doença de Ménière|FACIL
tuberculose|ENARE|2025|3|Reação paradoxal (IRIS) no tratamento da tuberculose em uso de anti-TNF|DIFICIL
tuberculose|ENARE|2025|6|Hepatotoxicidade por tuberculostáticos|FACIL
\`\`\`

## Decisões Confirmadas Nesta Sessão

- **PDFs de caderno e gabarito do EBSERH vieram com o ano trocado entre si** — descoberto cruzando
  respostas do gabarito com conhecimento médico (ex.: gabarito "óbvio" marcava presença de
  hemorragia como achado necessário pra trombolisar AVC, o oposto da contraindicação real). O
  usuário confirmou a troca ("TTROQUE 2026 COM 2025"); depois de invertida, toda a amostra bateu com
  a literatura. Ver commit `939612a` para o relato completo.
- **Estatísticas não vão para nenhum banco persistente por enquanto** — usuário disse "vou te passar
  [a URL] depois". Interpretação confirmada pelo usuário: calcular localmente e documentar no
  README (feito, commit `e8f2d58`), sem deixar Postgres nem app rodando.
- **Resumos seguem o padrão UERJ**, adaptado por questão real do corpus ENARE/EBSERH — não é
  conteúdo genérico de livro-texto, tem que citar a vinheta/ano/número reais.

## Pendências

- **Os 46 resumos do 80/20 estão prontos e registrados** — nada pendente nessa frente.
- **Os 46 flashcards Anki + `escalas-e-tabelas.txt` estão prontos, validados e commitados**
  (commit `1610ee5`) — nada pendente nessa frente também. Ver "Estado Atual" acima para detalhes de
  formato/decisões.
- **Não testado**: importação real num app Anki (ambiente desta sessão não tem Anki instalado) — só
  validação estrutural do texto (header, 3 campos por linha, cloze presente, imagens existem). Se o
  usuário reportar problema de importação, provavelmente é algo sutil do parser real do Anki que a
  validação estrutural não pegou.
- Nenhuma tarefa nova pendente no momento — aguardar próximo pedido do usuário. Nenhum PR novo a
  abrir sem pedido explícito — já existe o #2, é só continuar empurrando pra mesma branch.

## Próxima Ação

Nenhuma ação pendente definida — as duas tarefas do usuário (resumos 80/20 e flashcards Anki +
escalas) estão concluídas e pushadas. Aguardar próximo pedido.

## Convenções e Restrições

- **Nunca expor `answerKey` antes da resposta.** Verificar com
  `curl -s 'http://localhost:3000/api/questions?pageSize=5' | grep -c answerKey` → 0.
- **Nunca fabricar referência.** Fonte incerta se descreve genericamente.
- **Usar referência brasileira (PCDT/Ministério da Saúde, sociedades médicas BR) quando o tema tiver
  protocolo nacional próprio — não citar diretriz americana/internacional (DHHS, IDSA, ACC/AHA etc.)
  como se fosse a fonte de um dado numérico específico de conduta.** Cuidado especial: cortes de
  CD4/tempo/dose podem DIFERIR entre a diretriz americana e o PCDT brasileiro (ex.: momento de
  iniciar TARV na coinfecção TB-HIV é por CD4 <200/≥200 no PCDT-HIV Módulo 2 2023-2024, não <50/≥50
  como em versões antigas ou em fontes americanas — corrigido no resumo/flashcards de `hiv-aids` após
  o usuário flagar o erro). Ao escrever/revisar conteúdo com número específico de guideline, confirmar
  a fonte certa (buscar o PCDT/protocolo BR atual) antes de escrever, em vez de generalizar de memória
  a partir de diretrizes internacionais. Diretriz internacional só cabe quando não existe PCDT/protocolo
  BR equivalente para aquele tema específico.
- Português do Brasil em todo o código, comentários, commits e interface.
- Commits terminam com `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>` +
  `Claude-Session: https://claude.ai/code/session_01XzWDfzp18KGc6AHD4UoSJM`.
- Não abrir PR novo sem pedido explícito — já existe o #2 para esta branch.
- **Antes de qualquer teste local, checar se o container é o mesmo desta sessão** (ver Comandos
  Úteis) — se for um container novo, `/tmp/pgdata-enare` não existe e precisa `initdb` do zero.

## Comandos Úteis

\`\`\`bash
cd banco-questoes-enare

# Postgres local. Teste primeiro se o datadir sobreviveu:
pg_isready -h 127.0.0.1 -p 5433
# Se "no response", container novo — inicializar do zero:
PGBIN=$(ls -d /usr/lib/postgresql/*/bin | head -1)
mkdir -p /tmp/pgdata-enare /tmp/pgsock-enare && chown -R postgres:postgres /tmp/pgdata-enare /tmp/pgsock-enare
su postgres -c "$PGBIN/initdb -D /tmp/pgdata-enare"   # só se o diretório estiver vazio

# Start (idempotente)
su postgres -c "$PGBIN/pg_ctl -D /tmp/pgdata-enare -o '-k /tmp/pgsock-enare -h 127.0.0.1 -p 5433' -l /tmp/pg-enare.log start"
pg_isready -h 127.0.0.1 -p 5433

# Se o diretório era novo, criar o banco e o .env:
su postgres -c "psql -h 127.0.0.1 -p 5433 -c \"ALTER USER postgres WITH PASSWORD 'postgres';\""
su postgres -c "psql -h 127.0.0.1 -p 5433 -c 'CREATE DATABASE banco_questoes_enare;'"
cat > .env << 'ENVEOF'
DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:5433/banco_questoes_enare"
DIRECT_URL="postgresql://postgres:postgres@127.0.0.1:5433/banco_questoes_enare"
ENVEOF
npm install && npx prisma db push && npm run db:seed
for f in data/provas/*.json; do npm run exam:import -- "$f"; done

# Se o .env e o banco já existiam, pule direto para:
npx tsc --noEmit && npm run build
(PORT=3111 npm run start &) ; sleep 6
curl -s -o /dev/null -w "%{http_code}\\n" http://localhost:3111/resumos
fuser -k 3111/tcp   # derrubar (não usar pkill -f, mata o próprio shell)

# IMPORTANTE ao terminar a sessão: apagar o .env (tem senha local, não deve ir pro commit)
# e derrubar o Postgres se não for mais precisar:
rm -f .env
su postgres -c "$PGBIN/pg_ctl -D /tmp/pgdata-enare stop"
\`\`\`
