/**
 * Resumo — Nefrologia · Distúrbios hidroeletrolíticos.
 *
 * Cobre as entidades do assunto no corpus: hiponatremia hipovolêmica
 * sintomática grave, SIADH com hiponatremia grave sintomática e
 * hipercalemia com alterações eletrocardiográficas.
 */
const content = `
## 🎯 Essencial

- **Hiponatremia sintomática grave (convulsão, rebaixamento, coma) é emergência**, independentemente da causa — trata-se com **salina hipertônica a 3%** em bolus/infusão, não com solução isotônica.
- **Primeiro passo diagnóstico na hiponatremia: avaliar volemia** (hipovolêmica, euvolêmica, hipervolêmica) — isso direciona toda a investigação e conduta, mais do que a osmolaridade urinária isolada.
- **Hiponatremia hipovolêmica** (perdas renais ou extrarrenais de sódio e água, com reposição só de água livre) responde à **reposição volêmica com salina isotônica** quando não há sintomas graves — corrige o estímulo não-osmótico de ADH e a natremia sobe.
- **SIADH é a causa clássica de hiponatremia euvolêmica**: sódio urinário >20-40 mEq/L, osmolaridade urinária inapropriadamente elevada (>100 mOsm/kg) em vigência de hiponatremia, ácido úrico baixo — sem edema, sem sinais de hipovolemia.
- **Limite de correção da hiponatremia: no máximo 8-10 mEq/L nas primeiras 24h** (mais conservador — 6-8 mEq/L — se risco alto de síndrome de desmielinização osmótica) para evitar mielinólise pontina, mesmo em quadro sintomático grave.
- **Hipercalemia é definida pelo ECG, não só pelo valor laboratorial**: ondas T apiculadas → alargamento de QRS → perda de onda P → padrão sinusoidal (pré-fibrilação/assistolia) é a sequência de gravidade crescente.
- **Gluconato de cálcio IV é a primeira medida na hipercalemia com alteração de ECG** — não baixa o potássio, apenas estabiliza a membrana cardíaca enquanto as demais medidas (que de fato removem/redistribuem potássio) fazem efeito.

## 💎 Pearls

- Na hiponatremia sintomática grave, a meta imediata não é "normalizar" o sódio — é **elevar 4-6 mEq/L o suficiente para reverter os sintomas neurológicos agudos**, depois desacelerar.
- **SIADH pode ser causado por medicações** (ISRS, carbamazepina, ciclofosfamida), doença pulmonar (pneumonia, neoplasia de pequenas células) ou do SNC — sempre investigar causa de base, não tratar só o sódio.
- Restrição hídrica é a base do tratamento crônico do SIADH, mas **não deve ser usada como conduta inicial em hiponatremia sintomática grave** — o correto ali é salina hipertônica.
- **Insulina + glicose desloca potássio para dentro da célula**, mas não remove potássio do corpo — é medida temporizadora, exige monitorar glicemia (risco de hipoglicemia tardia).
- **Resinas de troca (poliestirenossulfonato) e diálise** são as únicas medidas que efetivamente removem potássio do organismo; beta-agonista inalatório e bicarbonato também redistribuem, sem remover.

## ⚠️ Pitfalls

- **Corrigir hiponatremia rápido demais** (>8-10 mEq/L/24h) — risco de síndrome de desmielinização osmótica, com sequela neurológica permanente.
- **Tratar hiponatremia sintomática grave só com restrição hídrica** — atraso terapêutico inaceitável num quadro com risco de herniação/óbito.
- **Aguardar resultado laboratorial do potássio para tratar hipercalemia com alteração eletrocardiográfica visível** — o ECG já basta para iniciar gluconato de cálcio imediatamente.
- **Usar gluconato de cálcio esperando "baixar o potássio"** — ele só estabiliza a membrana; sempre associar medida que efetivamente reduza o potássio sérico.
- **Confundir hiponatremia hipovolêmica com SIADH** só pelo sódio urinário elevado — a diferenciação clínica é pelo exame de volemia (mucosas, turgor, PA postural, edema).

## 📝 Como a banca cobra

**Distúrbios hidroeletrolíticos aparecem em 3 questões (1,42% do corpus)**, todas do ENARE, com foco em **reconhecer gravidade pelo quadro clínico/ECG e definir a conduta imediata**.

- **ENARE 2025 Q1** trouxe hiponatremia hipovolêmica sintomática grave — testa se o candidato reconhece a necessidade de salina hipertônica mesmo num cenário de depleção de volume, e não confunde com reposição isotônica de rotina.
- **ENARE 2026 Q12** cobrou SIADH com hiponatremia grave sintomática — o diferencial com a hiponatremia hipovolêmica pela volemia normal é o ponto central, além da conduta de emergência ser a mesma (salina hipertônica) apesar do mecanismo diferente.
- **ENARE 2026 Q72** cobrou o reconhecimento das alterações eletrocardiográficas da hipercalemia (onda T apiculada, alargamento de QRS) como gatilho para tratamento imediato, antes mesmo de aguardar o laboratório.

## 🧠 Conceito e fisiopatologia

O sódio sérico reflete a relação entre sódio corporal total e água corporal total, regulada principalmente por ADH. Em hipovolemia, a queda de volume circulante efetivo estimula ADH por via não-osmótica (barorreceptores), retendo água livre e diluindo o sódio mesmo com sódio corporal total reduzido — por isso repor volume corrige o estímulo e a natremia sobe. No **SIADH**, o ADH é secretado de forma inapropriada (independente da osmolaridade e da volemia), causando retenção de água livre sem edema, já que o excesso é distribuído entre os compartimentos e há natriurese compensatória discreta.

Na correção rápida da hiponatremia crônica, o cérebro (que se adaptou perdendo osmólitos idiogênicos para equilibrar com o meio hiposmolar) não consegue reacumular esses osmólitos na mesma velocidade, e a subida abrupta da osmolaridade extracelular causa desidratação e desmielinização dos oligodendrócitos, sobretudo na ponte.

A hipercalemia altera o potencial de repouso de membrana dos cardiomiócitos, retardando a despolarização e condução — daí a sequência previsível de alterações no ECG conforme o potássio sobe, culminando em arritmias fatais se não tratada.

## 🔎 Diagnóstico

- **Hiponatremia:** sódio sérico, osmolaridade sérica e urinária, sódio urinário, avaliação clínica de volemia — sequência que define o mecanismo antes de qualquer tratamento não emergencial.
- **SIADH:** hiponatremia euvolêmica + osmolaridade urinária inapropriadamente alta + sódio urinário elevado + função tireoidiana e adrenal normais (excluir hipotireoidismo e insuficiência adrenal como diferenciais).
- **Hipercalemia:** potássio sérico confirmado (excluir hemólise/coleta inadequada) + ECG imediato para estratificar gravidade e guiar urgência do tratamento.

## 💊 Tratamento

- **Hiponatremia sintomática grave:** salina hipertônica a 3% em bolus, alvo de elevação de 4-6 mEq/L para reverter sintomas, limite de 8-10 mEq/L nas primeiras 24h.
- **SIADH crônico/assintomático:** restrição hídrica, tratar causa de base; antagonistas de receptor de vasopressina em casos refratários.
- **Hipercalemia com alteração de ECG:** gluconato de cálcio IV imediato (estabilização de membrana) + insulina regular com glicose + beta-agonista inalatório (redistribuição) + resina de troca ou diálise (remoção efetiva).
- **Hipercalemia sem alteração de ECG:** medidas de redistribuição/remoção, sem necessidade de gluconato de cálcio.

## 📚 Referências essenciais

- Diretriz Europeia de Hiponatremia (Hyponatraemia Guideline Development Group).
- KDIGO — distúrbios do potássio em doença renal.
- Harrison's Principles of Internal Medicine — capítulos de distúrbios do sódio e do potássio.
`;

export default content.trim();
