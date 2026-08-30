/**
 * Resumo — Gastroenterologia e Hepatologia · Diarreias e má absorção.
 *
 * Reorganizado por entidade clínica (cada causa de diarreia crônica/má
 * absorção tem sua própria seção com quando suspeitar, diagnóstico,
 * tratamento, pearl e pitfall juntos) — antes esse conteúdo estava picado
 * entre seções genéricas de tipo, misturando celíaca, Whipple e SIBO no
 * mesmo bloco de "Diagnóstico" ou "Tratamento".
 *
 * Cobre as entidades do assunto no corpus: esteatorreia por
 * abetalipoproteinemia, parasitoses intestinais como diferencial de
 * síndrome do intestino irritável, doença celíaca (sorologia inicial e
 * interpretação de sorologia positiva, investigação em diabético tipo 1)
 * e doença de Whipple. Também traz, como extrapolação de alto rendimento
 * além do que já caiu em prova, a classificação geral dos mecanismos de
 * diarreia crônica e outras causas clássicas de má absorção/diarreia
 * crônica (insuficiência pancreática exócrina, supercrescimento
 * bacteriano, intolerância à lactose, colite microscópica, má absorção de
 * ácidos biliares, esprú tropical) que compõem o mesmo raciocínio
 * diagnóstico.
 */
const content = `
## 🎯 Essencial

- Classificar a diarreia crônica pelo **mecanismo fisiopatológico** direciona toda a investigação: **osmótica** (para com jejum, gap osmolar fecal aumentado), **secretora** (persiste em jejum, gap osmolar normal), **inflamatória** (sangue/muco, marcadores inflamatórios elevados) e **por má absorção/esteatorreia** (gordura fecal aumentada) — é o eixo organizador de todo o assunto.
- **Doença celíaca:** sorologia inicial é **anti-transglutaminase tecidual IgA (anti-tTG IgA)**, sempre dosando **IgA total** junto; sorologia positiva **não fecha o diagnóstico** — a **biópsia duodenal** confirma, exceto em critérios pediátricos específicos.
- **Doença de Whipple:** tríade artralgia migratória + diarreia com má absorção + perda de peso — biópsia duodenal com **macrófagos PAS-positivos**.
- **Abetalipoproteinemia:** esteatorreia grave desde a infância + **acantocitose** + colesterol muito baixo, por mutação na MTP.
- **Parasitoses intestinais** (giardíase é o protótipo) sempre devem entrar no diferencial de síndrome do intestino irritável antes de fechar o diagnóstico funcional.
- Ignorar sinais de alarme (perda de peso, anemia, sangramento, início após os 50 anos) em paciente rotulado como SII é erro grave, mesmo sendo o diagnóstico mais provável estatisticamente.

## 📝 Como a banca cobra

**Diarreias e má absorção aparece em 6 questões (2,83% do corpus)** — 1 do EBSERH e 5 do ENARE, concentradas em 2026, com foco em reconhecer o padrão de má absorção específico de cada doença e a sequência correta de investigação.

- **Esteatorreia por abetalipoproteinemia** (EBSERH 2025 Q56) testa o reconhecimento de doença rara pela combinação acantocitose + esteatorreia + déficit de vitaminas lipossolúveis.
- **Parasitoses intestinais como diferencial de SII** (ENARE 2026 Q5) cobra a lembrança de excluir causa infecciosa/parasitária antes de rotular o quadro como funcional.
- **Doença celíaca** apareceu 3 vezes: sorologia inicial (ENARE 2026 Q21), interpretação de sorologia positiva (ENARE 2026 Q45) e investigação em diabético tipo 1 (ENARE 2026 Q55) — vale estudar o algoritmo diagnóstico completo (sorologia + IgA total + biópsia) para cobrir os três ângulos.
- **Doença de Whipple** (ENARE 2026 Q51) cobra o reconhecimento da tríade clássica associada ao achado histológico específico.
- **SIBO, colite microscópica, insuficiência pancreática exócrina e má absorção de ácidos biliares ainda não foram cobradas isoladamente** — completam o mesmo raciocínio diagnóstico da má absorção e são candidatas naturais de alto rendimento.

## 🧠 Conceito e fisiopatologia

Toda má absorção pode ser dividida em falha de **digestão** (insuficiência pancreática exócrina, deficiência de sais biliares — a gordura não é quebrada em ácidos graxos absorvíveis) versus falha de **absorção** propriamente dita (doença celíaca, ressecção intestinal extensa, SIBO consumindo nutrientes) — essa distinção orienta o teste inicial (elastase fecal para causa pancreática vs. sorologia/biópsia para causa da mucosa). A doença celíaca é enteropatia autoimune desencadeada pela gliadina em indivíduos com HLA-DQ2/DQ8: a gliadina deaminada pela transglutaminase tecidual ativa linfócitos T CD4+ na lâmina própria, destruindo vilosidades e reduzindo a superfície de absorção. Na abetalipoproteinemia, a ausência de MTP impede a montagem de quilomícrons e VLDL no enterócito, bloqueando a exportação de lipídeos absorvidos.

## 🔹 Doença celíaca

- **Quando suspeitar:** diarreia crônica, distensão abdominal, perda de peso, anemia ferropriva refratária, baixa estatura em crianças; formas extraintestinais incluem **dermatite herpetiforme** (vesículas pruriginosas simétricas em superfícies extensoras, pode ser a única manifestação), osteoporose e infertilidade. Associação forte com **diabetes tipo 1** (ambas autoimunes) — rastreio sorológico deve ser considerado em diabético tipo 1 com sintomas gastrointestinais, déficit de crescimento ou anemia inexplicada.
- **Diagnóstico:** **anti-tTG IgA + IgA total** (deficiência seletiva de IgA é 10-15x mais comum em celíacos e falseia o resultado para negativo — se IgA total baixo, usar anti-tTG IgG ou anti-peptídeo deaminado de gliadina IgG) → **biópsia duodenal** (atrofia vilositária, hiperplasia de criptas, linfocitose intraepitelial), mantendo o glúten na dieta até a confirmação. Anticorpo anti-endomísio (EMA) tem altíssima especificidade e pode servir de teste confirmatório em anti-tTG levemente positivo ou discordante da biópsia; ausência de HLA-DQ2/DQ8 tem altíssimo valor preditivo negativo.
- **Tratamento:** dieta isenta de glúten, estrita e vitalícia, com reposição das deficiências associadas.
- 💎 **Pearl:** **doença celíaca refratária** (persistência de sintomas/atrofia vilositária apesar de dieta isenta de glúten estrita por >12 meses) é rara mas grave, e pode evoluir para **linfoma de células T associado a enteropatia (EATL)** — sinal de alarme que exige investigação adicional.
- ⚠️ **Pitfall:** fechar diagnóstico só com sorologia positiva sem biópsia confirmatória, ou retirar glúten da dieta antes de completar a investigação — inviabiliza o diagnóstico correto.
- 📝 **Como caiu:** ENARE 2026 Q21 (sorologia inicial) · ENARE 2026 Q45 (sorologia positiva) · ENARE 2026 Q55 (investigação em diabético tipo 1).

## 🔹 Doença de Whipple

- **Quando suspeitar:** artralgia migratória de grandes articulações precedendo em anos o quadro digestivo, diarreia com esteatorreia, febre baixa intermitente, linfadenopatia; pode haver sintomas neurológicos (demência, oftalmoplegia) e cardíacos (**endocardite com hemocultura negativa**) — pensar nela em endocardite cultura-negativa com sintomas articulares associados.
- **Diagnóstico:** biópsia duodenal com **macrófagos PAS-positivos** na lâmina própria; PCR para *Tropheryma whipplei* confirma.
- **Tratamento:** ceftriaxona (ou penicilina G) IV por 2 semanas, seguida de sulfametoxazol-trimetoprima oral por **1 a 2 anos** — sem antibioticoterapia prolongada, a recidiva é frequente.
- ⚠️ **Pitfall:** confundir com doença inflamatória intestinal pela combinação de artralgia + diarreia — a biópsia com PAS positivo é o diferencial-chave.
- 📝 **Como caiu:** ENARE 2026 Q51.

## 🔹 Abetalipoproteinemia

- **Quando suspeitar:** manifestação já na infância com esteatorreia grave, déficit de crescimento, ataxia progressiva e retinopatia pigmentar por deficiência crônica de vitamina E — doença rara, autossômica recessiva, por mutação na **MTP** (proteína microssomal transportadora de triglicérides).
- **Diagnóstico:** perfil lipídico com colesterol e triglicérides muito baixos, **acantócitos** (hemácias espiculadas) no esfregaço de sangue periférico, dosagem de vitaminas lipossolúveis, teste genético confirmatório (MTP).
- **Tratamento:** dieta pobre em gordura de cadeia longa, suplementação de vitaminas lipossolúveis em altas doses (especialmente vitamina E).
- 📝 **Como caiu:** EBSERH 2025 Q56.

## 🔹 Parasitoses intestinais (giardíase) como diferencial de SII

- **Quando suspeitar:** diarreia crônica não sanguinolenta, distensão, flatulência e esteatorreia leve — sem febre alta nem sangue — especialmente com epidemiologia de risco (água/alimento contaminado, viagem, creche).
- **Diagnóstico:** exame parasitológico de fezes seriado (3 amostras) antes de fechar o diagnóstico funcional; antígeno fecal ou PCR quando disponível para *Giardia*.
- **Tratamento:** metronidazol ou tinidazol.
- ⚠️ **Pitfall:** não pesquisar parasitas nas fezes antes de rotular paciente jovem com sintomas gastrointestinais crônicos como SII, especialmente com fator de risco epidemiológico.
- 📝 **Como caiu:** ENARE 2026 Q5.

## 🔹 Supercrescimento bacteriano do intestino delgado (SIBO)

- **Quando suspeitar:** distensão e flatulência importantes, diarreia crônica, em paciente com fator predisponente (cirurgia bariátrica, diverticulose de delgado, dismotilidade, esclerodermia).
- **Diagnóstico:** teste respiratório de hidrogênio/metano com glicose ou lactulose. Achado laboratorial característico: bactérias colônicas desconjugam sais biliares e competem por vitamina B12 enquanto produzem folato — combinação de **B12 baixa com folato normal ou alto**, padrão praticamente oposto ao da doença celíaca isolada (folato reduzido pela má absorção proximal, B12 preservada).
- **Tratamento:** antibioticoterapia dirigida (rifaximina, por baixa absorção sistêmica), tratando também a causa predisponente de base.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Insuficiência pancreática exócrina

- **Quando suspeitar:** esteatorreia por má **digestão** (não má absorção primária), em contexto de pancreatite crônica ou fibrose cística.
- **Diagnóstico:** elastase fecal baixa é o teste de rastreio não invasivo mais usado.
- **Tratamento:** reposição de enzimas pancreáticas (lipase) junto às refeições, além de tratar a causa de base.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Intolerância à lactose

- **Quando suspeitar:** dor, distensão e diarreia após ingesta de laticínios — causa mais comum de diarreia **osmótica** no adulto.
- **Diagnóstico:** teste respiratório de hidrogênio expirado após sobrecarga de lactose, ou resposta clínica à dieta de exclusão como alternativa pragmática.
- **Tratamento:** restrição dietética de lactose (não necessariamente de todos os laticínios) e/ou reposição de lactase exógena antes das refeições.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Colite microscópica

- **Quando suspeitar:** diarreia aquosa crônica, não sanguinolenta, sem dor abdominal significativa, em paciente **idoso** (sobretudo mulheres), com colonoscopia **macroscopicamente normal**; associação bem descrita com uso crônico de **AINE, inibidor de bomba de prótons e ISRS**.
- **Diagnóstico:** exige **biópsia de mucosa aparentemente sã** (infiltrado linfocítico intraepitelial na forma linfocítica, ou banda de colágeno subepitelial espessada na forma colagenosa) — a suspeita clínica deve motivar ativamente a biópsia, já que a alteração é apenas histológica.
- **Tratamento:** suspensão do medicamento associado quando identificável; **budesonida oral de liberação ileal** é o tratamento farmacológico de escolha nos casos persistentes.
- ⚠️ **Pitfall:** descartar colite microscópica só porque a colonoscopia "não mostrou nada" — o diagnóstico depende de biópsia solicitada ativamente.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Má absorção de ácidos biliares

- **Quando suspeitar:** diarreia aquosa crônica, urgência evacuatória, geralmente sem esteatorreia franca, em paciente colecistectomizado ou com doença/ressecção do íleo terminal (Crohn ileal) — frequentemente subdiagnosticada e rotulada como "SII com predomínio diarreico".
- **Mecanismo:** sais biliares não reabsorvidos no íleo terminal chegam ao cólon e estimulam secreção de água/eletrólitos.
- **Diagnóstico:** teste do ácido taurocólico marcado com selênio-75 (SeHCAT) quando disponível, ou prova terapêutica com resina sequestradora de ácidos biliares como alternativa pragmática.
- **Tratamento:** colestiramina (ou colesevelam) antes das refeições, com resposta clínica geralmente evidente em poucos dias.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Esprú tropical

- **Quando suspeitar:** má absorção com história de viagem/residência prolongada em área tropical (sudeste asiático, Caribe) — diferencial importante de doença celíaca nesse contexto epidemiológico.
- **Tratamento:** tetraciclina (ou doxiciclina) por várias semanas a meses associada a ácido fólico, com resposta clínica geralmente evidente em poucas semanas — ao contrário da celíaca, responde a antibioticoterapia prolongada, não a dieta.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📚 Referências essenciais

- Diretriz da ACG (American College of Gastroenterology) para diagnóstico e manejo da doença celíaca.
- Guidelines da ESPGHAN para diagnóstico de doença celíaca em pediatria.
- Revisões de referência sobre doença de Whipple e SIBO (literatura clássica de gastroenterologia).
`;

export default content.trim();
