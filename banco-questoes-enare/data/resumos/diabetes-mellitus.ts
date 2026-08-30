/**
 * Resumo — Endocrinologia · Diabetes mellitus.
 *
 * Cobre as entidades do assunto no corpus: componente genético do diabetes
 * tipo 2, controle glicêmico intensivo no idoso e mortalidade, e conduta em
 * hipoglicemia grave fora do ambiente hospitalar com glucagon. Também traz
 * classificação ampliada (LADA, MODY), complicações agudas e crônicas, e
 * classes terapêuticas modernas (iSGLT2, análogos de GLP-1) que ainda não
 * caíram nas provas reais.
 */
const content = `
## 🎯 Essencial

- **DM2 tem forte componente poligênico/multifatorial** — herdabilidade alta e risco muito aumentado com história familiar de primeiro grau, com a expressão dependendo de fatores ambientais (obesidade, sedentarismo, dieta). Diferente do DM1, cuja associação genética principal é com o **HLA** e componente autoimune.
- **Controle glicêmico intensivo (metas de HbA1c muito baixas) em idosos**, especialmente frágeis ou com comorbidades, **NÃO reduz mortalidade** e **aumenta o risco de hipoglicemia grave**.
- **Metas de HbA1c devem ser individualizadas:** <7% é a meta padrão para a maioria dos adultos; considerar meta mais rígida (~6,5%) em diagnóstico recente, jovem, sem comorbidade significativa e sem risco relevante de hipoglicemia; meta mais flexível (7,5-8%) com comorbidade moderada/expectativa de vida intermediária; meta ainda mais flexível (8-8,5% ou individualizada, evitando sintomas de hiperglicemia) em idoso frágil/expectativa de vida limitada/alto risco de hipoglicemia.
- **Hipoglicemia grave fora do hospital, com paciente inconsciente ou incapaz de deglutir:** **glucagon IM/SC (1 mg) ou intranasal (3 mg, spray — não exige preparo/reconstituição)** é a conduta indicada — nunca oferecer alimento/líquido por via oral nesse cenário, pelo risco de aspiração.
- **Glucagon mobiliza glicogênio hepático** — pode ser ineficaz em depleção de glicogênio (etilismo crônico, desnutrição, hipoglicemia prolongada), situações em que a glicose IV é necessária assim que houver acesso venoso.
- Hipoglicemia por **sulfonilureia** tem risco de recidiva prolongada pela meia-vida longa da droga — exige observação estendida, não apenas correção pontual.
- **Inibidores de SGLT2 podem causar cetoacidose diabética euglicêmica** (glicemia <250 mg/dL, mas cetonemia e acidose presentes) — suspender antes de cirurgia eletiva, jejum prolongado ou dieta com baixíssimo carboidrato, e **manter alto índice de suspeita mesmo com glicemia normal** em paciente sintomático usando a droga.

## 💎 Pearls

- **DM2 tem concordância maior entre gêmeos monozigóticos do que DM1**, apesar de o DM1 ser classicamente percebido como "mais genético" — pegadinha clássica de prova.
- **Efeito legado ("legacy effect"):** controle rígido logo após o diagnóstico em pacientes jovens traz benefício cardiovascular a longo prazo — diferente do controle rígido tardio, iniciado em idoso já com doença estabelecida, que não traz o mesmo ganho.
- Hipoglicemia grave recorrente é, por si só, indicação para **relaxar metas glicêmicas** e reconsiderar o esquema terapêutico (ex.: trocar sulfonilureia por outra classe).
- O glucagon pode causar náusea/vômito — orientar posicionamento de segurança em paciente ainda inconsciente após a administração.
- A combinação de insulina basal com hipoglicemiante oral em idoso polimedicado aumenta o risco de hipoglicemia — revisar sempre toda a lista de medicamentos.
- **LADA (diabetes autoimune latente do adulto)** deve ser suspeitado em adulto magro, sem síndrome metabólica, diagnosticado como "DM2" que evolui rapidamente para necessidade de insulina — pesquisar anti-GAD confirma o diagnóstico.
- **MODY** (diabetes monogênico) é outra causa de diagnóstico "atípico": história familiar em múltiplas gerações (autossômica dominante), início antes dos 25 anos, sem obesidade nem autoanticorpos — parte dos subtipos responde bem a sulfonilureia em vez de insulina.
- **Fenômeno do alvorecer (dawn)** — hiperglicemia matinal por pico fisiológico de hormônios contrarreguladores — deve ser diferenciado do **efeito Somogyi** (hiperglicemia de rebote após hipoglicemia noturna não percebida); a conduta é oposta em cada caso (ajustar dose noturna de insulina de formas diferentes).
- **Agonistas de GLP-1** têm alerta de segurança para **carcinoma medular de tireoide/MEN2** (contraindicados em história pessoal/familiar dessas condições, por hiperplasia de células C observada em modelo animal) — checar essa história antes de prescrever, mesmo diante do forte apelo cardiovascular/renal da classe.
- **Metformina deve ser suspensa antes de contraste iodado** em paciente com função renal reduzida (ou pelo menos reavaliada a função renal após o exame antes de reintroduzir) — risco de acidose láctica se acumular em vigência de lesão renal aguda induzida por contraste; contraindicada de forma geral com **TFG <30 mL/min/1,73m²**.
- **DM1 pode ter "período de lua de mel"** logo após o diagnóstico — queda transitória e parcial da necessidade de insulina exógena por recuperação temporária de função residual de células beta — não deve ser confundido com remissão definitiva da doença.

## ⚠️ Pitfalls

- **Perseguir HbA1c muito baixa (<7%) em idoso frágil**, achando que "quanto menor, melhor" — aumenta risco de hipoglicemia sem ganho de mortalidade.
- **Oferecer alimento/líquido via oral a paciente inconsciente com hipoglicemia** — risco de aspiração; a conduta correta é glucagon.
- **Tratar DM2 como "só estilo de vida"**, desconsiderando o forte componente genético/familiar na avaliação de risco do paciente e de seus familiares.
- **Não individualizar metas glicêmicas** conforme idade, comorbidade e expectativa de vida.
- **Achar que uma única dose de glucagon resolve definitivamente** a hipoglicemia por sulfonilureia — a meia-vida longa da droga pode causar recidiva.
- **Classificar todo diabetes de início na vida adulta como DM2** sem considerar LADA ou MODY diante de história atípica (magreza, ausência de síndrome metabólica, herança autossômica dominante).
- **Confundir cetoacidose diabética com estado hiperosmolar hiperglicêmico** — CAD é mais comum no DM1 (cetose, acidose, glicemia geralmente <600-800), EHH é mais comum no DM2 (glicemia muito mais alta, sem cetose relevante, osmolaridade sérica muito elevada, maior mortalidade).
- **Descartar CAD só porque a glicemia está normal/pouco elevada** em paciente usando iSGLT2 — a cetoacidose euglicêmica é justamente a exceção que engana quem procura glicemia muito alta como critério obrigatório.
- **Manter metformina indefinidamente sem reavaliar função renal** antes de exame com contraste iodado ou diante de TFG em queda.

## 📝 Como a banca cobra

**Diabetes mellitus aparece em 3 questões (1,42% do corpus)** — 2 do EBSERH 2025 e 1 do ENARE 2025, cobrando três ângulos distintos e complementares do tema.

- **Diabetes tipo 2 — componente genético** (EBSERH 2025 Q41, MÉDIA) testa o conhecimento sobre herdabilidade poligênica, contrastando com o DM1.
- **Controle glicêmico intensivo no idoso — mortalidade** (EBSERH 2025 Q42, MÉDIA) cobra a evidência de que metas rígidas em idosos não reduzem mortalidade e aumentam hipoglicemia.
- **Hipoglicemia grave fora do hospital — glucagon** (ENARE 2025 Q49, MÉDIA) testa a conduta de emergência correta em ambiente extra-hospitalar.

## 🧠 Conceito e fisiopatologia

O DM2 resulta da combinação entre resistência insulínica progressiva e disfunção secretora das células beta pancreáticas, sobre uma base genética poligênica robusta que interage com fatores ambientais — diferente do DM1, cuja base é autoimune (destruição de células beta) associada a haplótipos HLA específicos e presença de autoanticorpos (anti-GAD, anti-IA2, anti-insulina, anti-ZnT8). O controle glicêmico intensivo reduz complicações microvasculares a longo prazo, mas em idosos a contrapartida da hipoglicemia é desproporcionalmente perigosa: a contrarregulação hormonal (glucagon e catecolaminas) é mais lenta e menos eficiente, a função renal reduzida prolonga a ação de drogas hipoglicemiantes, e a polifarmácia aumenta interações — por isso estudos como o ACCORD mostraram até aumento de mortalidade com metas muito rígidas nessa população.

O glucagon age estimulando a glicogenólise hepática, elevando rapidamente a glicemia sem necessidade de acesso venoso — mecanismo que falha quando as reservas hepáticas de glicogênio já estão depletadas.

## 📊 Classificação

- **Tipos:** DM1 (autoimune, deficiência absoluta de insulina), DM2 (resistência insulínica + deficiência relativa), LADA (autoimune de progressão lenta no adulto), MODY (monogênico), diabetes gestacional, diabetes secundário (pancreatite crônica, endocrinopatias — Cushing, acromegalia —, uso crônico de corticoide/antipsicótico atípico).
- **Pré-diabetes:** glicemia de jejum 100-125 mg/dL (glicemia de jejum alterada) ou glicemia 2h pós-TOTG 140-199 mg/dL (tolerância diminuída à glicose) ou HbA1c 5,7-6,4% — indicação de mudança de estilo de vida estruturada e, em casos selecionados (obesidade, alto risco), metformina.
- **Rastreamento:** todo adulto a partir dos 35 anos, ou mais precocemente se sobrepeso/obesidade associado a outro fator de risco (história familiar, hipertensão, dislipidemia, SOP, sedentarismo) — repetir a cada 3 anos se normal, anualmente se pré-diabetes.

## 🩺 Quadro clínico

- **DM2:** frequentemente assintomático por anos, diagnosticado em rastreio de rotina ou já por uma complicação crônica instalada; quando sintomático — poliúria, polidipsia, polifagia, perda de peso, visão turva, infecções de repetição (candidíase genital, infecção urinária) e cicatrização lenta de feridas.
- **DM1:** início mais abrupto, geralmente em criança/adulto jovem, com poliúria/polidipsia/perda de peso importante, podendo debutar diretamente em cetoacidose diabética.
- **Sinais de resistência insulínica:** acantose nigricans (hiperpigmentação aveludada em dobras cutâneas — pescoço, axilas), obesidade central, acrocórdons.
- **Neuropatia diabética:** dor em queimação/formigamento em padrão bota-luva (periférica), gastroparesia e pseudo-obstrução intestinal (autonômica digestiva), disfunção erétil e hipotensão ortostática (autonômica cardiovascular), pé diabético com perda de sensibilidade protetora predispondo a úlceras indolores.
- **Hipoglicemia despercebida:** em diabético de longa data com neuropatia autonômica, os sintomas adrenérgicos de alerta (tremor, sudorese, taquicardia) podem estar ausentes, e o quadro evolui direto para sintomas neuroglicopênicos (confusão, convulsão, coma) — maior risco de hipoglicemia grave não reconhecida a tempo.

## 🔎 Diagnóstico

- **DM2:** glicemia de jejum ≥126 mg/dL, HbA1c ≥6,5%, glicemia 2h pós-TOTG ≥200 mg/dL, ou glicemia casual ≥200 mg/dL com sintomas — critérios confirmados em duas ocasiões (exceto sintomas francos).
- **Hipoglicemia:** glicemia <70 mg/dL, com sintomas adrenérgicos (tremor, sudorese, taquicardia) e neuroglicopênicos (confusão, convulsão, coma) conforme gravidade; a **tríade de Whipple** (sintomas + glicemia baixa documentada + melhora com correção) confirma o diagnóstico clínico.
- **LADA:** anti-GAD positivo em adulto com fenótipo inicial de DM2; **MODY:** sequenciamento genético dirigido por suspeita clínica (herança autossômica dominante, início antes dos 25 anos, ausência de autoanticorpos e de obesidade).

## 📈 Complicações relevantes

- **Agudas:** cetoacidose diabética (predomínio DM1: hiperglicemia + cetonemia/cetonúria + acidose metabólica com ânion gap aumentado) e estado hiperosmolar hiperglicêmico (predomínio DM2: hiperglicemia extrema, hiperosmolaridade, sem cetose relevante, maior mortalidade que a CAD).
- **Microvasculares:** retinopatia não proliferativa e proliferativa (rastreio anual com fundoscopia; fotocoagulação a laser/anti-VEGF na forma proliferativa), nefropatia diabética (principal causa de doença renal crônica terminal no mundo — albuminúria/relação albumina-creatinina urinária anual, iSGLT2 e IECA/BRA como nefroproteção), neuropatia periférica (monofilamento/diapasão) e autonômica.
- **Macrovasculares:** doença arterial coronariana, doença cerebrovascular e doença arterial periférica — diabetes é equivalente de risco cardiovascular; iSGLT2 e agonistas de GLP-1 reduzem eventos cardiovasculares maiores por mecanismo parcialmente independente do controle glicêmico.
- **Pé diabético:** combinação de neuropatia (perda de sensibilidade protetora) e doença vascular periférica com maior suscetibilidade a infecção — principal causa evitável de amputação não traumática; exame anual com monofilamento de 10 g é rastreio obrigatório.

## 💊 Tratamento

- **DM2 — manejo geral:** metformina como primeira linha; **inibidores de SGLT2** (empagliflozina, dapagliflozina) e **agonistas de GLP-1** (liraglutida, semaglutida) têm benefício cardiovascular e renal comprovado e são preferidos em pacientes com doença cardiovascular estabelecida, insuficiência cardíaca ou doença renal crônica — individualizando sempre as metas de HbA1c por idade, comorbidade e expectativa de vida.
- **Idoso frágil:** priorizar metas mais flexíveis, evitar drogas de alto risco de hipoglicemia (sulfonilureia) quando possível; preferir classes com baixo risco hipoglicêmico intrínseco.
- **Hipoglicemia grave extra-hospitalar (paciente inconsciente):** glucagon IM/SC ou intranasal imediato; transporte para atendimento e glicose IV assim que disponível acesso.
- **Hipoglicemia consciente e capaz de deglutir:** carboidrato de absorção rápida por via oral (regra dos 15 — 15 g de carboidrato simples, reavaliar em 15 min).
- **Hipoglicemia por sulfonilureia:** observação prolongada pelo risco de recidiva.
- **Cetoacidose/estado hiperosmolar:** hidratação venosa vigorosa, insulinoterapia contínua IV, reposição de potássio antes ou junto da insulina, identificação e tratamento do fator precipitante.

## 📚 Referências essenciais

- Diretriz da Sociedade Brasileira de Diabetes (SBD) — Diretrizes 2023-2024, incluindo classificação, metas glicêmicas individualizadas e tratamento farmacológico do DM2.
- ADA — Standards of Care in Diabetes (atualização anual).
- Evidências dos estudos ACCORD e ADVANCE sobre controle glicêmico intensivo e desfechos cardiovasculares/mortalidade.
`;

export default content.trim();
