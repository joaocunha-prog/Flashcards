/**
 * Resumo — Nefrologia · Distúrbios hidroeletrolíticos.
 *
 * Cobre as entidades do assunto no corpus: hiponatremia hipovolêmica
 * sintomática grave, SIADH com hiponatremia grave sintomática e
 * hipercalemia com alterações eletrocardiográficas. Expandido com
 * conteúdo correlato de alto rendimento (hipernatremia, diabetes
 * insípido, cerebral salt wasting, hipocalemia, distúrbios de cálcio e
 * magnésio) que ainda não caiu no corpus, mas é altamente provável em
 * provas futuras do mesmo assunto.
 */
const content = `
## 🎯 Essencial

- **Hiponatremia sintomática grave (convulsão, rebaixamento, coma) é emergência**, independentemente da causa — trata-se com **salina hipertônica a 3%** em bolus/infusão, não com solução isotônica.
- **Primeiro passo diagnóstico na hiponatremia: avaliar volemia** (hipovolêmica, euvolêmica, hipervolêmica) — isso direciona toda a investigação e conduta, mais do que a osmolaridade urinária isolada.
- **Hiponatremia hipovolêmica** (perdas renais ou extrarrenais de sódio e água, com reposição só de água livre) responde à **reposição volêmica com salina isotônica** quando não há sintomas graves — corrige o estímulo não-osmótico de ADH e a natremia sobe.
- **SIADH é a causa clássica de hiponatremia euvolêmica**: sódio urinário >20-40 mEq/L, osmolaridade urinária inapropriadamente elevada (>100 mOsm/kg) em vigência de hiponatremia, ácido úrico baixo — sem edema, sem sinais de hipovolemia.
- **Hiponatremia hipervolêmica** (ICC, cirrose, síndrome nefrótica) cursa com edema e volume circulante efetivo reduzido apesar do sódio corporal total aumentado — trata-se com restrição hídrica e de sódio, diuréticos e tratamento da doença de base, nunca com salina isotônica (pioraria a congestão).
- **Limite de correção da hiponatremia: no máximo 8-10 mEq/L nas primeiras 24h** (mais conservador — 6-8 mEq/L — se risco alto de síndrome de desmielinização osmótica) para evitar mielinólise pontina, mesmo em quadro sintomático grave.
- **Hipercalemia é definida pelo ECG, não só pelo valor laboratorial**: ondas T apiculadas → alargamento de QRS → perda de onda P → padrão sinusoidal (pré-fibrilação/assistolia) é a sequência de gravidade crescente.
- **Gluconato de cálcio IV é a primeira medida na hipercalemia com alteração de ECG** — não baixa o potássio, apenas estabiliza a membrana cardíaca enquanto as demais medidas (que de fato removem/redistribuem potássio) fazem efeito.
- **Hipernatremia quase sempre reflete déficit de água livre** (raramente excesso de sódio) — a causa mais comum em enfermaria é perda hídrica não reposta (febre, diarreia, diurese osmótica) em paciente sem acesso livre à água (idoso acamado, rebaixado, criança).
- **Hipocalcemia sintomática** (parestesias periorais, tetania, sinais de Chvostek e Trousseau, prolongamento de QT) exige reposição de cálcio IV se grave — sempre checar magnésio junto, pois hipomagnesemia bloqueia a secreção de PTH e impede a correção do cálcio.
- **Hipercalcemia grave/sintomática** (mais comumente por hiperparatireoidismo primário ou malignidade) trata-se inicialmente com hidratação vigorosa com salina isotônica, seguida de bisfosfonato IV; furosemida só é usada depois de volemia corrigida, nunca como medida isolada inicial.
- **Hipomagnesemia frequentemente acompanha e perpetua hipocalemia e hipocalcemia refratárias** — sempre dosar e corrigir magnésio antes de assumir "resistência" à reposição dos outros dois eletrólitos.

## 💎 Pearls

- Na hiponatremia sintomática grave, a meta imediata não é "normalizar" o sódio — é **elevar 4-6 mEq/L o suficiente para reverter os sintomas neurológicos agudos**, depois desacelerar.
- **SIADH pode ser causado por medicações** (ISRS, carbamazepina, ciclofosfamida, antipsicóticos, MDMA, AINEs), doença pulmonar (pneumonia, tuberculose, ventilação com pressão positiva, neoplasia de pequenas células de pulmão) ou do SNC (meningite, hemorragia, AVC, trauma, tumor) — sempre investigar causa de base, não tratar só o sódio.
- Restrição hídrica é a base do tratamento crônico do SIADH, mas **não deve ser usada como conduta inicial em hiponatremia sintomática grave** — o correto ali é salina hipertônica.
- **Insulina + glicose desloca potássio para dentro da célula**, mas não remove potássio do corpo — é medida temporizadora, exige monitorar glicemia (risco de hipoglicemia tardia, sobretudo em 4-6h).
- **Resinas de troca (poliestirenossulfonato) e diálise** são as únicas medidas que efetivamente removem potássio do organismo; beta-agonista inalatório e bicarbonato também redistribuem, sem remover.
- **Cerebral salt wasting (CSW)** é o principal diferencial de SIADH em paciente neurocrítico (hemorragia subaracnóidea, TCE): também cursa com hiponatremia e natriurese elevada, mas o paciente está **hipovolêmico**, não euvolêmico — a diferenciação muda tudo, porque no CSW o tratamento é reposição de sódio e volume, e restringir água (como no SIADH) pioraria o quadro.
- Se a hiponatremia grave for corrigida além do limite por engano, existe **manobra de resgate**: relentecer a subida induzindo hiponatremia leve de volta com desmopressina + água livre (soro glicosado 5%) — "clamp" com DDAVP — para evitar desmielinização.
- **Hipocalemia** causa fraqueza muscular, íleo paralítico e alterações eletrocardiográficas (onda U, achatamento de onda T, depressão de ST) — causas mais comuns são uso de diuréticos, vômitos/diarreia e hiperaldosteronismo; sempre corrigir magnésio associado, pois hipomagnesemia impede a correção efetiva do potássio (potássio "refratário").
- **Pseudo-hipercalemia** (hemólise na coleta, garroteamento prolongado, trombocitose ou leucocitose extremas) deve ser suspeitada quando o valor laboratorial não combina com o ECG e o quadro clínico — repetir a coleta antes de tratar, exceto se já houver alteração eletrocardiográfica compatível.
- **Causas comuns de hipercalemia além da renal**: inibidores do sistema renina-angiotensina-aldosterona (IECA/BRA/espironolactona), rabdomiólise, síndrome de lise tumoral, acidose metabólica (desloca potássio para fora da célula) e insuficiência adrenal (Addison).
- **Sinais de Chvostek** (contração da hemiface ao percutir o nervo facial) **e Trousseau** (espasmo carpal ao insuflar o manguito acima da PA sistólica) são os achados clássicos de hipocalcemia cobrados em exame físico.

## ⚠️ Pitfalls

- **Corrigir hiponatremia rápido demais** (>8-10 mEq/L/24h) — risco de síndrome de desmielinização osmótica, com sequela neurológica permanente.
- **Tratar hiponatremia sintomática grave só com restrição hídrica** — atraso terapêutico inaceitável num quadro com risco de herniação/óbito.
- **Aguardar resultado laboratorial do potássio para tratar hipercalemia com alteração eletrocardiográfica visível** — o ECG já basta para iniciar gluconato de cálcio imediatamente.
- **Usar gluconato de cálcio esperando "baixar o potássio"** — ele só estabiliza a membrana; sempre associar medida que efetivamente reduza o potássio sérico.
- **Confundir hiponatremia hipovolêmica com SIADH** só pelo sódio urinário elevado — a diferenciação clínica é pelo exame de volemia (mucosas, turgor, PA postural, edema).
- **Confundir SIADH com cerebral salt wasting** no paciente neurocrítico e restringir água num paciente hipovolêmico — piora a hipoperfusão cerebral, exatamente o oposto do desejado.
- **Corrigir hipernatremia rápido demais** — assim como na hiponatremia, correção acelerada (>10-12 mEq/L/24h) pode causar edema cerebral, sobretudo em crianças e em hipernatremia crônica.
- **Ignorar hipomagnesemia associada em hipocalemia refratária** — sem repor magnésio, a reposição isolada de potássio não normaliza o nível sérico.
- **Repor cálcio isoladamente numa hipocalcemia com magnésio baixo** sem corrigir o magnésio — a resposta é insatisfatória enquanto a hipomagnesemia persistir.
- **Usar furosemida como primeira medida na hipercalcemia grave** antes de corrigir a hipovolemia associada — pode piorar a perfusão renal e retardar a excreção de cálcio que se pretende acelerar.

## 📝 Como a banca cobra

**Distúrbios hidroeletrolíticos aparecem em 3 questões (1,42% do corpus)**, todas do ENARE, com foco em **reconhecer gravidade pelo quadro clínico/ECG e definir a conduta imediata**.

- **ENARE 2025 Q1** trouxe hiponatremia hipovolêmica sintomática grave — testa se o candidato reconhece a necessidade de salina hipertônica mesmo num cenário de depleção de volume, e não confunde com reposição isotônica de rotina.
- **ENARE 2026 Q12** cobrou SIADH com hiponatremia grave sintomática — o diferencial com a hiponatremia hipovolêmica pela volemia normal é o ponto central, além da conduta de emergência ser a mesma (salina hipertônica) apesar do mecanismo diferente.
- **ENARE 2026 Q72** cobrou o reconhecimento das alterações eletrocardiográficas da hipercalemia (onda T apiculada, alargamento de QRS) como gatilho para tratamento imediato, antes mesmo de aguardar o laboratório.

## 🧠 Conceito e fisiopatologia

O sódio sérico reflete a relação entre sódio corporal total e água corporal total, regulada principalmente por ADH. Em hipovolemia, a queda de volume circulante efetivo estimula ADH por via não-osmótica (barorreceptores), retendo água livre e diluindo o sódio mesmo com sódio corporal total reduzido — por isso repor volume corrige o estímulo e a natremia sobe. No **SIADH**, o ADH é secretado de forma inapropriada (independente da osmolaridade e da volemia), causando retenção de água livre sem edema, já que o excesso é distribuído entre os compartimentos e há natriurese compensatória discreta. No **cerebral salt wasting**, acredita-se que a lesão do SNC libere peptídeos natriuréticos que causam perda renal primária de sódio, levando à hipovolemia verdadeira — mecanismo oposto ao do SIADH, apesar do quadro laboratorial parecido.

Na correção rápida da hiponatremia crônica, o cérebro (que se adaptou perdendo osmólitos idiogênicos para equilibrar com o meio hiposmolar) não consegue reacumular esses osmólitos na mesma velocidade, e a subida abrupta da osmolaridade extracelular causa desidratação e desmielinização dos oligodendrócitos, sobretudo na ponte. O raciocínio inverso ocorre na hipernatremia: o déficit de água livre (por perda insensível não reposta, diabetes insípido central ou nefrogênico, ou raramente ganho de sódio) desidrata as células cerebrais, que se adaptam gerando osmólitos idiogênicos — por isso a correção também deve ser lenta, sob pena de edema cerebral por entrada rápida de água nas células já adaptadas.

A hipercalemia altera o potencial de repouso de membrana dos cardiomiócitos, retardando a despolarização e condução — daí a sequência previsível de alterações no ECG conforme o potássio sobe, culminando em arritmias fatais se não tratada. A hipocalemia faz o caminho oposto: hiperpolariza a membrana, retardando a repolarização (achatamento de T, surgimento de onda U) e predispondo a arritmias, sobretudo em quem já usa digitálico.

## 🔎 Diagnóstico

- **Hiponatremia:** sódio sérico, osmolaridade sérica e urinária, sódio urinário, avaliação clínica de volemia — sequência que define o mecanismo antes de qualquer tratamento não emergencial.
- **SIADH:** critérios de Bartter-Schwartz — hiponatremia hipotônica euvolêmica + osmolaridade urinária >100 mOsm/kg + sódio urinário >20-40 mEq/L + função tireoidiana, adrenal e renal normais (excluir hipotireoidismo e insuficiência adrenal, que também causam hiponatremia euvolêmica por mecanismos próprios).
- **Hipercalemia:** potássio sérico confirmado (excluir hemólise/coleta inadequada) + ECG imediato para estratificar gravidade e guiar urgência do tratamento.
- **Hipernatremia:** osmolaridade urinária e resposta a desmopressina diferenciam diabetes insípido central (responde, concentra a urina) de nefrogênico (não responde); poliúria com urina inapropriadamente diluída sugere diabetes insípido em vez de perda insensível simples.
- **Hipocalemia:** avaliar magnésio sérico concomitante, uso de diuréticos, estado ácido-básico (alcalose favorece hipocalemia) e função renal antes de repor.
- **Hipocalcemia/hipercalcemia:** sempre corrigir o cálcio sérico pela albumina (cálcio corrigido) antes de interpretar o valor total; cálcio iônico é mais confiável em paciente crítico ou com albumina muito alterada. PTH e vitamina D ajudam a diferenciar etiologia (hiperparatireoidismo, deficiência de vitamina D, malignidade).

## 💊 Tratamento

- **Hiponatremia sintomática grave:** salina hipertônica a 3% em bolus, alvo de elevação de 4-6 mEq/L para reverter sintomas, limite de 8-10 mEq/L nas primeiras 24h.
- **SIADH crônico/assintomático:** restrição hídrica, tratar causa de base; antagonistas de receptor de vasopressina (vaptanos) ou associação de ureia/solutos em casos refratários.
- **Cerebral salt wasting:** reposição de volume e sódio (salina isotônica ou hipertônica conforme gravidade), eventualmente fludrocortisona — nunca restringir água.
- **Hipercalemia com alteração de ECG:** gluconato de cálcio IV imediato (estabilização de membrana) + insulina regular com glicose + beta-agonista inalatório (redistribuição) + resina de troca, patiromer ou ciclossilicato de zircônio sódico (remoção mais lenta) ou diálise (remoção efetiva e rápida) se refratária ou lesão renal grave associada.
- **Hipercalemia sem alteração de ECG:** medidas de redistribuição/remoção, sem necessidade de gluconato de cálcio.
- **Hipernatremia:** calcular o déficit de água livre e repor por via oral ou IV (soro glicosado 5% ou salina hipotônica) de forma lenta; desmopressina no diabetes insípido central.
- **Hipocalemia sintomática ou grave (<2,5-3,0 mEq/L):** reposição IV cautelosa com monitorização cardíaca, sempre corrigindo magnésio concomitante se baixo.
- **Hipocalcemia sintomática:** gluconato de cálcio IV + reposição de magnésio se baixo + vitamina D/calcitriol conforme causa de base.
- **Hipercalcemia sintomática/grave:** salina isotônica em volume generoso, seguida de bisfosfonato IV (ácido zoledrônico ou pamidronato); calcitonina para efeito rápido temporário; diálise em casos refratários ou com insuficiência renal grave associada.

## 📚 Referências essenciais

- Diretriz Europeia de Hiponatremia (Hyponatraemia Guideline Development Group).
- KDIGO — distúrbios do potássio em doença renal.
- Harrison's Principles of Internal Medicine — capítulos de distúrbios do sódio, do potássio e do equilíbrio hidroeletrolítico.
`;

export default content.trim();
