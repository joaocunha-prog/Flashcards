/**
 * Resumo — Endocrinologia · Doenças da tireoide.
 *
 * Cobre as entidades do assunto no corpus: tempestade tireotóxica e ordem
 * do tratamento inicial, tireoidite subaguda de De Quervain, nódulo
 * tireoidiano com citologia Bethesda III (AUS/FLUS) e estratificação por
 * TI-RADS com indicação de PAAF. Também traz, como extrapolação de alto
 * rendimento além do que já foi cobrado, o diagnóstico diferencial de
 * hipertireoidismo, o hipotireoidismo/mixedema, o câncer de tireoide e o
 * sistema Bethesda completo.
 */
const content = `
## 🎯 Essencial

- **Tempestade tireotóxica** é emergência endócrina: hipertireoidismo grave + disfunção sistêmica (febre alta, taquiarritmia, alteração de consciência, sintomas gastrointestinais). O escore de **Burch-Wartofsky** apoia o diagnóstico clínico, sem atrasar o tratamento.
- **Ordem do tratamento da tempestade tireotóxica importa:** betabloqueador (propranolol, também reduz conversão periférica de T4 em T3) → tionamida (**propiltiouracila** preferida na fase aguda) → **iodo (Lugol) dado pelo menos 1 hora após a tionamida** → corticoide (hidrocortisona).
- **Tireoidite subaguda de De Quervain:** dor cervical anterior, geralmente pós-viral, com tireotoxicose transitória seguida de hipotireoidismo transitório e depois eutireoidismo; VHS/PCR muito elevados; **captação de iodo radioativo baixa** (diferencia de doença de Graves).
- Nódulo tireoidiano: avaliação inicial é **TSH + ultrassonografia com estratificação TI-RADS**; a indicação de PAAF depende da combinação entre categoria TI-RADS e tamanho do nódulo — quanto maior a suspeita ecográfica, menor o corte de tamanho que já indica punção.
- **Bethesda III (atipia de significado indeterminado/AUS-FLUS):** risco de malignidade intermediário — a conduta é **repetir a PAAF** (com opção de teste molecular quando disponível), não indicar cirurgia direta nem apenas seguir em observação.
- A causa mais comum de hipertireoidismo é a **doença de Graves** (bócio difuso, TRAb positivo, oftalmopatia/mixedema pré-tibial em parte dos casos) — a **causa mais comum de hipotireoidismo primário** é a **tireoidite de Hashimoto** (anti-TPO positivo, bócio ou glândula atrófica ao longo do tempo).
- O **carcinoma papilífero** é o tipo histológico mais comum de câncer de tireoide e tem excelente prognóstico geral, mesmo com metástase linfonodal cervical no diagnóstico.
- **Oftalmopatia de Graves** (exoftalmia, retração palpebral, diplopia) decorre de infiltração inflamatória autoimune da musculatura extraocular e do tecido retro-orbitário — pode preceder, acompanhar ou surgir após o diagnóstico de hipertireoidismo, e piora classicamente com o tabagismo.
- **Hipotireoidismo subclínico** (TSH elevado com T4 livre normal) é achado laboratorial comum e nem sempre exige tratamento — a decisão depende do grau de elevação do TSH, de sintomas, de gestação e da presença de anticorpos antitireoidianos positivos.

## 💎 Pearls

- O **TI-RADS** pontua composição, ecogenicidade, forma, margens e focos ecogênicos do nódulo — a soma define a categoria (TR1-TR5) e, com ela, o tamanho de corte para indicar PAAF.
- Dar iodo **antes** da tionamida na tempestade tireotóxica pode piorar o quadro (efeito Wolff-Chaikoff transitório seguido de escape, fornecendo substrato para nova síntese hormonal).
- **PTU é preferido sobre metimazol** na fase aguda da tempestade porque também inibe a conversão periférica de T4 em T3 — efeito que o metimazol não tem.
- Na tireoidite de De Quervain, a tireotoxicose decorre de **destruição folicular** (liberação de hormônio pré-formado), não de hiperfunção — daí a captação de iodo baixa e a ineficácia de tionamidas.
- Um único resultado Bethesda III não indica cirurgia — a decisão cirúrgica pende para atipia recorrente em nova PAAF ou teste molecular positivo.
- **Mixedema (coma mixedematoso)** é o extremo oposto da tempestade tireotóxica: hipotireoidismo grave descompensado, com hipotermia, rebaixamento de consciência e bradicardia — tratado com levotiroxina IV e corticoide empírico (para cobrir insuficiência adrenal concomitante não excluída).
- **Amiodarona** pode causar disfunção tireoidiana por dois mecanismos distintos: tireotoxicose tipo 1 (excesso de síntese, geralmente em glândula previamente alterada, responde a tionamida) e tipo 2 (tireoidite destrutiva, responde a corticoide) — a distinção nem sempre é simples na prática.
- **Carcinoma medular de tireoide** produz calcitonina (marcador tumoral útil) e se associa a síndromes de neoplasia endócrina múltipla tipo 2 (MEN2) — rastrear feocromocitoma antes de qualquer cirurgia tireoidiana nesses casos.
- O tabagismo é fator de risco reconhecido para **piora da oftalmopatia de Graves** — cessação do tabagismo deve ser sempre orientada, especialmente se houver plano de tratamento com iodo radioativo (que também pode piorar a oftalmopatia).
- **Tireotoxicose factícia** (uso exógeno não declarado de hormônio tireoidiano) se diferencia das demais causas de hipertireoidismo pela **tireoglobulina sérica baixa/suprimida** e pela captação de iodo radioativo baixa, mesmo com T4 livre elevado.

## ⚠️ Pitfalls

- **Administrar iodo antes da tionamida** na tempestade tireotóxica — erro clássico que piora a tireotoxicose em vez de controlá-la.
- **Usar metimazol em vez de PTU** na fase aguda da tempestade tireotóxica — perde-se o efeito adicional de bloqueio da conversão periférica.
- **Tratar tireoidite de De Quervain com tionamida** — não há hiperprodução hormonal a bloquear, apenas liberação por destruição folicular.
- **Indicar PAAF em todo nódulo sem estratificar por TI-RADS/tamanho** — gera excesso de procedimentos invasivos desnecessários.
- **Indicar cirurgia a partir de um único Bethesda III** — a conduta correta é repetir a PAAF (± teste molecular).
- **Não pensar em insuficiência adrenal associada** ao tratar coma mixedematoso — corticoide empírico deve ser dado até excluir essa possibilidade.
- **Operar carcinoma medular associado a MEN2 sem rastrear feocromocitoma antes** — crise hipertensiva intraoperatória é risco grave e evitável.
- **Tratar todo hipotireoidismo subclínico** com levotiroxina de forma automática, sem considerar o grau de elevação do TSH, sintomas e contexto (gestação, anticorpos) — sobretratamento expõe a riscos de tireotoxicose iatrogênica.
- **Solicitar captação de iodo radioativo em gestante** para investigar tireotoxicose — é contraindicada na gestação pelo risco de exposição fetal à radiação.

## 📝 Como a banca cobra

**Doenças da tireoide aparece em 4 questões (1,89% do corpus)**, misturando EBSERH e ENARE, sempre cobrando conduta específica e sequenciada, não só reconhecimento da doença.

- **EBSERH 2026 Q46** cobrou o tratamento inicial da tempestade tireotóxica — a sequência correta entre betabloqueador, tionamida e iodo é o ponto decisivo.
- **ENARE 2025 Q61** trouxe a tireoidite subaguda de De Quervain, testando o reconhecimento do padrão trifásico e da captação de iodo baixa.
- **ENARE 2026 Q7** cobrou a conduta diante de citologia Bethesda III (AUS/FLUS) em nódulo tireoidiano.
- **ENARE 2026 Q8** testou a estratificação por TI-RADS e a indicação correspondente de PAAF.

## 🧠 Conceito e fisiopatologia

A tempestade tireotóxica é a exacerbação extrema do excesso de hormônio tireoidiano livre, geralmente desencadeada por um fator precipitante (infecção, cirurgia, suspensão abrupta de tionamida, exposição a iodo) em paciente com hipertireoidismo mal controlado, tipicamente doença de Graves — a resposta adrenérgica exacerbada e o hipermetabolismo sistêmico explicam a gravidade clínica e a necessidade de bloqueio simultâneo em múltiplos alvos (síntese, liberação e conversão periférica do hormônio).

A tireoidite de De Quervain é um processo inflamatório, provavelmente pós-viral, que rompe folículos tireoidianos e libera hormônio pré-formado na circulação sem aumento real da síntese — por isso a fase tireotóxica é autolimitada e sucedida por hipotireoidismo transitório enquanto a glândula se recupera.

A avaliação de nódulos tireoidianos busca estimar probabilidade de malignidade em duas etapas complementares: a imagem (TI-RADS) tenta prever o risco antes de qualquer procedimento invasivo, enquanto a citologia (Bethesda) estratifica o risco após a punção — categorias indeterminadas (como Bethesda III) refletem a limitação da citologia isolada em distinguir adenoma folicular de carcinoma folicular, diferenciação que depende de invasão capsular/vascular, visível apenas em análise histológica.

O hipotireoidismo primário autoimune (Hashimoto) resulta de destruição linfocítica progressiva do parênquima tireoidiano mediada por autoanticorpos (anti-TPO, anti-tireoglobulina), enquanto a doença de Graves é mediada por anticorpo estimulador do receptor de TSH (TRAb) que ativa cronicamente a glândula — mecanismos opostos (destruição vs. estimulação) que explicam por que ambas são autoimunes mas geram quadros clínicos opostos.

Os carcinomas diferenciados de tireoide (papilífero e folicular) originam-se das células foliculares e mantêm, em graus variados, capacidade de captar iodo e responder a TSH — propriedade explorada terapeuticamente com iodo radioativo adjuvante. Já o carcinoma medular origina-se das células parafoliculares (células C, produtoras de calcitonina) e não tem essa capacidade, sendo tratado exclusivamente por cirurgia; o carcinoma anaplásico representa desdiferenciação extrema, muitas vezes a partir de um carcinoma diferenciado preexistente, o que explica sua agressividade e resposta terapêutica muito limitada.

## 🩺 Quadro clínico

- **Doença de Graves:** bócio difuso, taquicardia, perda de peso com apetite mantido/aumentado, tremor fino, intolerância ao calor, oftalmopatia (exoftalmia, retração palpebral) e, mais raramente, mixedema pré-tibial.
- **Hipotireoidismo (Hashimoto):** fadiga, ganho de peso, intolerância ao frio, pele seca, constipação, bradicardia, edema periorbitário, bócio (fase inicial) ou glândula atrófica (fase tardia).
- **Nódulo tireoidiano:** a maioria é assintomática e detectada incidentalmente; sinais de alarme para malignidade incluem crescimento rápido, rouquidão, linfadenopatia cervical associada e fixação a estruturas adjacentes.
- **Câncer medular de tireoide:** nódulo tireoidiano associado a diarreia (por efeito secretor da calcitonina/peptídeos associados) e, no contexto de MEN2, histórico familiar de feocromocitoma ou hiperparatireoidismo.

## 🔎 Diagnóstico

- **Tempestade tireotóxica:** diagnóstico clínico (escore de Burch-Wartofsky); TSH suprimido e T4 livre elevado confirmam, mas não devem atrasar o tratamento.
- **Tireoidite de De Quervain:** dor cervical anterior à palpação, VHS/PCR muito elevados, captação de iodo radioativo baixa.
- **Nódulo tireoidiano:** TSH inicial, ultrassonografia com estratificação TI-RADS, PAAF conforme categoria/tamanho, citologia pelo sistema Bethesda.
- **Sistema Bethesda completo:** I (não diagnóstico/insatisfatório, repetir PAAF), II (benigno, seguimento clínico), III (AUS/FLUS, risco intermediário, repetir PAAF ± teste molecular), IV (neoplasia folicular, considerar cirurgia diagnóstica ou teste molecular), V (suspeito para malignidade, cirurgia), VI (maligno, cirurgia).
- **Coma mixedematoso:** TSH muito elevado com T4 livre muito baixo, em paciente com hipotermia e rebaixamento de consciência — diagnóstico clínico-laboratorial combinado, tratamento não deve aguardar confirmação completa.

## 💊 Tratamento

- **Tempestade tireotóxica:** propranolol → propiltiouracila → iodo (Lugol) pelo menos 1h após a tionamida → hidrocortisona; tratar o fator precipitante.
- **Tireoidite de De Quervain:** AINE ou corticoide para dor, betabloqueador para sintomas tireotóxicos; sem tionamida; quadro autolimitado.
- **Nódulo tireoidiano:** PAAF conforme TI-RADS/tamanho; Bethesda III → repetir PAAF ± teste molecular; Bethesda V/VI → cirurgia.
- **Coma mixedematoso:** levotiroxina intravenosa (associada a liotironina em casos graves), hidrocortisona empírica, suporte para hipotermia e insuficiência respiratória.
- **Doença de Graves:** tionamida (metimazol de escolha fora da tempestade/gestação inicial), iodo radioativo ou tireoidectomia conforme perfil do paciente e preferência.

## 🧭 Além do grounding: o que mais pode cair

- **Diagnóstico diferencial de hipertireoidismo** além da tempestade e da tireoidite subaguda: doença de Graves (causa mais comum, TRAb, oftalmopatia), bócio multinodular tóxico e adenoma tóxico (captação de iodo focal/heterogênea), tireotoxicose factícia (uso exógeno de hormônio, tireoglobulina baixa) e amiodarona tipos 1 e 2.
- **Hipotireoidismo e tireoidite de Hashimoto:** anti-TPO positivo é o marcador mais sensível; reposição de levotiroxina em jejum, ajustada por TSH a cada 6-8 semanas até estabilização; hipotireoidismo subclínico só costuma ser tratado com TSH acima de determinado limiar ou na presença de sintomas/gestação/anticorpos positivos.
- **Coma mixedematoso** é a contraparte emergencial do hipotireoidismo grave — tema simétrico à tempestade tireotóxica e igualmente cobrável, com corticoide empírico sempre associado pela possibilidade de insuficiência adrenal concomitante.
- **Câncer de tireoide:** papilífero (mais comum, excelente prognóstico), folicular (dissemina por via hematogênica), medular (produz calcitonina, associado a MEN2, exige rastreio de feocromocitoma pré-operatório) e anaplásico (raro, muito agressivo, prognóstico reservado).
- **Sistema Bethesda completo (categorias I a VI)** amplia o que já foi cobrado sobre a categoria III — vale memorizar a conduta associada a cada categoria, não só à intermediária.
- **Tireoidite pós-parto** é diagnóstico diferencial relevante em puérperas com sintomas tireotóxicos ou de hipotireoidismo nos primeiros meses após o parto, com padrão trifásico semelhante ao de De Quervain, mas sem dor cervical e sem elevação importante de provas inflamatórias.

## 📚 Referências essenciais

- American Thyroid Association (ATA) — Guidelines for Diagnosis and Management of Hyperthyroidism and Thyrotoxicosis.
- American Thyroid Association (ATA) — Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer.
- Sistema Bethesda para citopatologia da tireoide.
- ACR TI-RADS (American College of Radiology).
`;

export default content.trim();
