/**
 * Resumo — Emergências e Terapia Intensiva · Distúrbios metabólicos.
 *
 * Reorganizado por entidade clínica, já que o assunto reúne emergências
 * metabólicas distintas em paciente crítico. A acidose lática associada à
 * metformina é a entidade com grounding real no corpus (EBSERH 2026 Q56),
 * incluindo o mecanismo fisiopatológico mitocondrial fino cobrado na
 * questão. Hipercalemia grave, crise tireotóxica e insuficiência adrenal
 * aguda são incluídas como extrapolações de alto rendimento (outras
 * emergências metabólicas clássicas de terapia intensiva). Hipoglicemia
 * grave já é coberta em profundidade no resumo de diabetes mellitus e não é
 * repetida aqui. Assunto de baixa incidência no corpus (1 questão), fora do
 * corte 80/20.
 */
const content = `
## 🎯 Essencial

- **Classificação de Cohen-Woods da acidose lática:** **tipo A** (hipóxia tecidual real — choque, hipoperfusão, hipoxemia grave) e **tipo B** (sem hipoperfusão tecidual evidente — drogas/toxinas, doença hepática, neoplasias, erros inatos do metabolismo). A distinção não é só acadêmica: muda a conduta (tratar a causa específica, não só ressuscitar volume/perfusão).
- **Acidose lática associada à metformina (MALA — metformin-associated lactic acidosis)** é classicamente **tipo B**, mas na prática clínica frequentemente **mista** — a droga se acumula em **insuficiência renal aguda** (a metformina é excretada quase exclusivamente por via renal) e, uma vez acumulada, **inibe o Complexo I da cadeia transportadora de elétrons mitocondrial**, o que bloqueia a fosforilação oxidativa, aumenta a razão NADH/NAD⁺ no citosol e força o desvio do piruvato para lactato (via lactato desidrogenase) mesmo **sem hipóxia tecidual real** — daí o SvO₂ frequentemente normal/alto e ausência de sinais claros de hipoperfusão periférica nesses casos "puros".
- **A pista mais discriminativa de MALA em prova:** lactato extremamente alto (com frequência de dois dígitos, >10 mmol/L), acidose metabólica grave de ânion gap muito elevado, **cetonas negativas** (afasta cetoacidose diabética), glicemia normal ou pouco alterada (não é hiperosmolar), em paciente com **lesão renal aguda** e uso de metformina — o mecanismo correto é **inibição do Complexo I mitocondrial**, não hipoperfusão pura, mesmo que o paciente esteja em choque por outra causa concomitante (nesse caso, coexistem os dois mecanismos).
- **Tratamento de MALA:** suporte hemodinâmico, suspensão imediata da metformina, e **hemodiálise precoce** diante de acidose grave/refratária ou lesão renal significativa — a diálise remove tanto a metformina quanto o excesso de lactato/corrige a acidose de forma mais eficaz e rápida do que medidas conservadoras isoladas.
- **Diferença conceitual chave entre os mecanismos de acidose lática tipo B por toxinas mitocondriais:** inibidores do Complexo I (metformina, em doses tóxicas) reduzem a produção de ATP e desviam piruvato para lactato por acúmulo de NADH; inibidores do Complexo IV (cianeto, mecanismo diferente) bloqueiam diretamente a utilização celular de oxigênio, mesmo com oferta de O₂ normal ou alta (SvO₂ paradoxalmente elevada por incapacidade de extração) — os dois mecanismos causam lactato alto por vias bioquímicas distintas, armadilha clássica de prova que testa o mecanismo exato, não só "sabe que causa acidose lática".

## 💎 Pearls

- Metformina é contraindicada (ou exige reavaliação/suspensão temporária) em TFG <30 mL/min/1,73m², em vigência de contraste iodado recente, em insuficiência hepática significativa e em qualquer situação de hipoperfusão/hipóxia aguda (sepse grave, IC descompensada, cirurgia de grande porte) — todos cenários que favorecem acúmulo da droga ou reduzem a capacidade de tamponamento do lactato.
- SvO₂ central normal/elevada em paciente com lactato muito alto é um achado que aponta para incapacidade de **utilização** de oxigênio (bloqueio mitocondrial), não falta de **oferta** — sinal fino que diferencia hiperlactatemia por disóxia mitocondrial de hiperlactatemia por hipoperfusão clássica (tipo A), mesmo quando ambas coexistem no mesmo paciente crítico.
- Hipercalemia grave (K⁺ >6,5 mEq/L ou qualquer valor com alterações eletrocardiográficas) é emergência que ameaça a vida por risco de arritmia fatal — a sequência terapêutica correta importa: **estabilizar a membrana cardíaca primeiro** (gluconato de cálcio), depois **redistribuir potássio para dentro da célula** (insulina + glicose, beta-agonista inalatório), e só depois **remover o excesso do corpo** (diuréticos de alça, resinas trocadoras, diálise) — cálcio não reduz o potássio sérico, só protege o miocárdio temporariamente.
- Crise tireotóxica (tempestade tireoidiana) é diagnóstico clínico (escore de Burch-Wartofsky), não apenas laboratorial — hipertermia desproporcional, taquiarritmia, alteração do sensório e disfunção multissistêmica em paciente com hipertireoidismo de base ou fator precipitante (infecção, cirurgia, suspensão de antitireoidiano) fecham o diagnóstico mesmo antes do TSH/T4 livre confirmarem.
- Insuficiência adrenal aguda (crise addisoniana) deve ser lembrada em todo paciente crítico com hipotensão refratária a fluidos e vasopressor, sobretudo com hiponatremia e hipercalemia associadas (insuficiência adrenal primária) — hidrocortisona empírica não deve esperar confirmação laboratorial diante de choque refratário sem outra explicação.

## ⚠️ Pitfalls

- **Atribuir hiperlactatemia extrema exclusivamente a hipoperfusão (acidose tipo A clássica)** num paciente com metformina e lesão renal aguda, ignorando o mecanismo mitocondrial direto — a resposta correta de prova nesse cenário é o bloqueio do Complexo I, não só "glicólise anaeróbica por choque".
- **Confundir o mecanismo de MALA com o de intoxicação por cianeto** — ambos bloqueiam a cadeia respiratória, mas em complexos diferentes (I vs. IV) e com apresentação um pouco distinta (cianeto costuma ter história de exposição específica: incêndio em ambiente fechado, nitroprussiato em infusão prolongada).
- **Não suspender metformina diante de lesão renal aguda estabelecida** — é a causa mais evitável de MALA e deve ser sempre a primeira ação diante do quadro.
- **Usar gluconato de cálcio isoladamente como tratamento definitivo de hipercalemia** — ele só estabiliza a membrana por tempo limitado; sem as etapas seguintes (redistribuição e remoção), o potássio volta a subir.
- **Aguardar confirmação laboratorial de hormônios tireoidianos ou cortisol antes de tratar tempestade tireoidiana ou crise addisoniana**, respectivamente — ambas são emergências clínicas com tratamento empírico imediato baseado em suspeita clínica forte.

## 🔹 Acidose lática associada à metformina

- **Fisiopatologia:** acúmulo renal da droga (excreção quase exclusivamente renal) → inibição do Complexo I da cadeia transportadora de elétrons → bloqueio da fosforilação oxidativa → aumento da razão NADH/NAD⁺ citosólica → desvio do piruvato para lactato pela lactato desidrogenase, independentemente de hipóxia tecidual real.
- **Quadro/laboratório:** lactato muito elevado (frequentemente >10 mmol/L), acidose metabólica grave de ânion gap muito aumentado, cetonas negativas, glicemia normal/próxima do normal, lesão renal aguda associada; pode coexistir com choque de outra causa (nesse caso, mecanismo misto tipo A + tipo B).
- **Tratamento:** suspensão imediata da metformina, suporte hemodinâmico, hemodiálise precoce em acidose grave/refratária ou disfunção renal relevante (remove tanto a droga quanto corrige a acidose).
- 📝 **Como caiu:** EBSERH 2026 Q56 — vinheta com choque séptico + acidose grave + lactato de 14 mmol/L + cetonas negativas + lesão renal aguda em usuário de metformina, testando especificamente o mecanismo fisiopatológico (inibição do Complexo I, não glicólise anaeróbica pura nem bloqueio de Complexo IV tipo cianeto).

## 🔹 Hipercalemia grave

- **Quadro:** fraqueza muscular, parestesias, podendo evoluir para paralisia flácida; alterações eletrocardiográficas progressivas (onda T apiculada → alargamento de QRS → perda de onda P → padrão sinusoidal → fibrilação ventricular/assistolia).
- **Tratamento sequencial:** gluconato de cálcio IV (estabilização de membrana, ação em minutos, sem reduzir o potássio sérico) → insulina regular + glicose e/ou beta-agonista inalatório (redistribuição intracelular, ação em 15-30 min) → furosemida, resinas trocadoras (poliestirenossulfonato de cálcio/sódio) ou diálise (remoção efetiva do potássio corporal total, sobretudo se lesão renal associada).
- 📝 **Como caiu:** ainda não cobrado no corpus — extrapolação de alto rendimento, emergência metabólica clássica de terapia intensiva.

## 🔹 Crise tireotóxica (tempestade tireoidiana)

- **Quadro:** hipertermia desproporcional, taquicardia/taquiarritmia, agitação/delirium podendo evoluir para coma, sintomas gastrointestinais (náusea, vômito, diarreia), insuficiência cardíaca de alto débito; fator precipitante frequente (infecção, cirurgia, trauma, suspensão de antitireoidiano, uso de contraste iodado).
- **Diagnóstico:** clínico, apoiado por escore de Burch-Wartofsky; TSH suprimido e T4 livre/T3 elevados confirmam, mas não devem atrasar o tratamento empírico.
- **Tratamento:** beta-bloqueador (controle de frequência e, em doses altas de propranolol, redução da conversão periférica de T4 em T3), tionamida (propiltiouracila ou metimazol) para bloquear nova síntese hormonal, iodo (administrado **após** a tionamida, para não alimentar nova síntese hormonal) para bloquear liberação hormonal, corticoide (reduz conversão periférica e cobre possível insuficiência adrenal relativa), tratamento do fator precipitante.
- 📝 **Como caiu:** ainda não cobrado no corpus — extrapolação de alto rendimento.

## 🔹 Insuficiência adrenal aguda (crise addisoniana)

- **Quadro:** hipotensão refratária a volume/vasopressor, náusea/vômito/dor abdominal, hipoglicemia, febre, rebaixamento do sensório; na forma primária, hiponatremia e hipercalemia associadas (deficiência mineralocorticoide concomitante), ausentes na forma secundária (só deficiência de ACTH/cortisol, eixo mineralocorticoide preservado).
- **Tratamento:** hidrocortisona IV em dose de estresse **imediata**, sem esperar confirmação laboratorial diante de choque refratário sem outra explicação clara; reposição volêmica agressiva com solução glicosada/salina; correção de hipoglicemia e distúrbios eletrolíticos associados.
- 📝 **Como caiu:** ainda não cobrado no corpus — extrapolação de alto rendimento.

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus — apenas 1 questão real registrada** (EBSERH 2026 Q56, dificuldade MÉDIA), com uma vinheta desenhada para testar o **mecanismo fisiopatológico exato** da acidose lática associada à metformina, não apenas o reconhecimento do diagnóstico: paciente com DM2 em metformina, pneumonia grave, choque e lesão renal aguda, lactato de 14 mmol/L, ânion gap 32, cetonas negativas — o gabarito exigiu identificar a **inibição do Complexo I da cadeia respiratória com aumento da razão NADH/NAD⁺** como mecanismo principal, descartando tanto a explicação mais "óbvia" de hipóxia tecidual pura (choque séptico presente, mas não é o mecanismo principal testado) quanto o mecanismo de bloqueio de Complexo IV (tipo cianeto), que é fisiopatologicamente diferente.

Mesmo com só 1 aparição neste banco específico, emergências metabólicas em terapia intensiva (acidose lática por droga, hipercalemia, crise tireotóxica, insuficiência adrenal aguda) são **tema recorrente e de alto risco em provas de residência médica em geral**, exigindo reconhecimento rápido e tratamento empírico imediato — vale o investimento de estudo amplo além do ângulo específico já cobrado neste banco.

## 📚 Referências essenciais

- Diretriz/revisão de acidose lática associada à metformina e indicações de terapia renal substitutiva — Extracorporeal Treatments in Poisoning Workgroup (EXTRIP).
- Diretriz de manejo de hipercalemia em paciente crítico — Society of Critical Care Medicine (SCCM).
- Diretriz de manejo de tempestade tireoidiana e crise adrenal aguda — Endocrine Society.
`;

export default content.trim();
