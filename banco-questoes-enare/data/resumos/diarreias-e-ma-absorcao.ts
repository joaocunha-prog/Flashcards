/**
 * Resumo — Gastroenterologia e Hepatologia · Diarreias e má absorção.
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
 * ácidos biliares) que compõem o mesmo raciocínio diagnóstico.
 */
const content = `
## 🎯 Essencial

- **Doença celíaca:** sorologia inicial é **anti-transglutaminase tecidual IgA (anti-tTG IgA)**, sempre dosando **IgA total** junto (deficiência seletiva de IgA é mais comum em celíacos e falseia o resultado para negativo).
- Sorologia positiva **não fecha o diagnóstico** — a **biópsia duodenal** (padrão-ouro), com atrofia vilositária, hiperplasia de criptas e linfocitose intraepitelial, confirma, exceto em critérios pediátricos específicos que dispensam biópsia com anticorpo muito elevado.
- **Diabetes tipo 1** tem associação forte com doença celíaca (ambas autoimunes) — rastreio sorológico deve ser considerado em diabético tipo 1 com sintomas gastrointestinais, déficit de crescimento ou anemia inexplicada.
- **Doença de Whipple:** tríade artralgia migratória + diarreia com má absorção + perda de peso (podendo haver febre e linfadenopatia) — causada por **Tropheryma whipplei**; biópsia duodenal com **macrófagos PAS-positivos** na lâmina própria.
- **Abetalipoproteinemia:** doença rara, autossômica recessiva, por mutação na **MTP** (proteína microssomal transportadora de triglicérides) — esteatorreia grave desde a infância, **acantocitose** no sangue periférico, colesterol muito baixo e deficiência de vitaminas lipossolúveis (sobretudo vitamina E, causando ataxia e retinopatia).
- **Parasitoses intestinais** (giardíase é o protótipo) sempre devem entrar no diferencial de síndrome do intestino irritável, especialmente com epidemiologia de risco — exame parasitológico de fezes seriado antes de fechar o diagnóstico funcional.
- Classificar a diarreia crônica pelo mecanismo fisiopatológico ajuda a direcionar a investigação: **osmótica** (para com jejum, gap osmolar fecal aumentado — ex.: intolerância à lactose, laxantes osmóticos), **secretora** (persiste em jejum, gap osmolar normal — ex.: toxinas, tumores neuroendócrinos), **inflamatória** (sangue/muco, marcadores inflamatórios elevados — DII, infecções invasivas) e **por má absorção/esteatorreia** (gordura fecal aumentada — doença celíaca, insuficiência pancreática, supercrescimento bacteriano).
- **Intolerância à lactose** é a causa mais comum de diarreia osmótica no adulto — dor, distensão e diarreia após ingesta de laticínios, confirmada por teste respiratório de hidrogênio ou prova terapêutica com dieta de exclusão.
- **Colite microscópica** (linfocítica ou colagenosa) é diferencial importante de diarreia crônica aquosa em **idosos**, sobretudo mulheres, com colonoscopia macroscopicamente normal — o diagnóstico exige biópsia de mucosa aparentemente sã, já que a alteração é apenas histológica (infiltrado linfocítico intraepitelial ou banda de colágeno subepitelial espessada).
- **Diarreia por má absorção de ácidos biliares** ocorre por disfunção ou ressecção do íleo terminal (Crohn ileal, colecistectomia, ressecção cirúrgica) — os sais biliares não reabsorvidos chegam ao cólon e estimulam secreção de água/eletrólitos, causando diarreia aquosa crônica; responde a resina sequestradora de ácidos biliares (colestiramina).

## 💎 Pearls

- Deficiência seletiva de IgA é 10-15 vezes mais comum em celíacos que na população geral — se IgA total baixo, usar anti-tTG IgG ou anti-peptídeo deaminado de gliadina IgG.
- A biópsia duodenal deve ser feita com o paciente ainda consumindo glúten — retirar a dieta antes do diagnóstico definitivo mascara os achados histológicos.
- Whipple pode ter manifestações neurológicas e cardíacas (endocardite com hemocultura negativa) além do quadro clássico — pensar nele em endocardite cultura-negativa com sintomas articulares associados.
- **Acantócitos** (hemácias espiculadas) no esfregaço de sangue periférico são pista importante para abetalipoproteinemia.
- Giardíase clássica causa diarreia crônica não sanguinolenta, distensão, flatulência e esteatorreia leve — sem febre alta nem sangue, diferindo de causas invasivas.
- **Doença celíaca refratária** (persistência de sintomas/atrofia vilositária apesar de dieta isenta de glúten estrita por >12 meses) é rara mas grave, e pode evoluir para **linfoma de células T associado a enteropatia (EATL)** — sinal de alarme que exige investigação adicional (imagem, nova biópsia).
- **Dermatite herpetiforme** é a manifestação cutânea clássica da doença celíaca (vesículas pruriginosas simétricas em superfícies extensoras) e pode ser a única manifestação, sem sintomas gastrointestinais evidentes.
- **Supercrescimento bacteriano do intestino delgado (SIBO)** é causa importante de má absorção em pacientes com fatores predisponentes (cirurgia bariátrica, diverticulose de delgado, dismotilidade, esclerodermia) — teste respiratório de hidrogênio/metano com glicose ou lactulose auxilia o diagnóstico.
- **Insuficiência pancreática exócrina** (pancreatite crônica, fibrose cística) também causa esteatorreia por má digestão (não má absorção primária) — elastase fecal baixa é o teste de rastreio não invasivo mais usado.
- **Esprú tropical** é diferencial importante de doença celíaca em pacientes com história de viagem/residência em área tropical (sudeste asiático, Caribe) — má absorção com resposta a antibioticoterapia prolongada associada a ácido fólico, ao contrário da celíaca.
- Anticorpo anti-endomísio (EMA) tem altíssima especificidade para doença celíaca e pode ser usado como teste confirmatório em caso de anti-tTG levemente positivo ou discordante da biópsia.
- Vitamina B12 é absorvida no íleo terminal ligada ao fator intrínseco; doenças que acometem essa região (doença de Crohn ileal, ressecção cirúrgica) ou competem por ela (SIBO) causam sua deficiência, enquanto folato é absorvido mais proximalmente no jejuno, afetado preferencialmente na doença celíaca clássica — a combinação de deficiências ajuda a localizar o segmento acometido.
- Colite microscópica tem associação bem descrita com uso crônico de **AINE, inibidor de bomba de prótons e ISRS** — suspender o medicamento suspeito faz parte do manejo inicial antes de escalonar terapia farmacológica específica.
- Diarreia por má absorção de ácidos biliares é frequentemente subdiagnosticada e rotulada como "SII com predomínio diarreico" — pensar nela especialmente em paciente colecistectomizado ou com doença/ressecção ileal.

## ⚠️ Pitfalls

- Fechar diagnóstico de doença celíaca só com sorologia positiva, sem biópsia confirmatória (fora dos critérios pediátricos específicos que dispensam).
- Retirar glúten da dieta antes de completar a investigação (sorologia + biópsia) — inviabiliza o diagnóstico correto.
- Não dosar IgA total ao solicitar anti-tTG IgA — risco de falso-negativo em paciente com deficiência seletiva de IgA.
- Confundir Whipple com doença inflamatória intestinal pela combinação de artralgia + diarreia — a biópsia com PAS positivo é o diferencial-chave.
- Não pesquisar parasitas nas fezes antes de rotular paciente jovem com sintomas gastrointestinais crônicos como SII, especialmente com fator de risco epidemiológico.
- Atribuir toda diarreia crônica persistente em jejum a causa osmótica — diarreia que não melhora com jejum sugere mecanismo secretor e muda a linha de investigação.
- Rotular como "SII refratária" um paciente com esteatorreia verdadeira (gordura fecal aumentada) sem investigar má digestão/má absorção — perde-se diagnósticos tratáveis como insuficiência pancreática e SIBO.
- Ignorar sinais de alarme (perda de peso, anemia, sangramento, início após os 50 anos) em paciente rotulado como SII sem investigação mínima — mesmo sendo o diagnóstico mais provável estatisticamente, sinais de alarme sempre justificam exames complementares.
- Descartar colite microscópica só porque a colonoscopia "não mostrou nada" — o diagnóstico depende de biópsia de mucosa macroscopicamente normal, que precisa ser solicitada ativamente.
- Não pensar em má absorção de ácidos biliares em paciente colecistectomizado com diarreia crônica aquosa inexplicada, perdendo uma causa tratável e específica.

## 📝 Como a banca cobra

**Diarreias e má absorção aparece em 6 questões (2,83% do corpus)** — 1 do EBSERH e 5 do ENARE, concentradas em 2026, com foco em reconhecer o padrão de má absorção específico de cada doença e a sequência correta de investigação.

- **Esteatorreia por abetalipoproteinemia** (EBSERH 2025 Q56) testa o reconhecimento de doença rara pela combinação acantocitose + esteatorreia + déficit de vitaminas lipossolúveis.
- **Parasitoses intestinais como diferencial de SII** (ENARE 2026 Q5) cobra a lembrança de excluir causa infecciosa/parasitária antes de rotular o quadro como funcional.
- **Doença celíaca** apareceu 3 vezes: sorologia inicial (ENARE 2026 Q21), interpretação de sorologia positiva (ENARE 2026 Q45) e investigação em diabético tipo 1 (ENARE 2026 Q55) — vale estudar o algoritmo diagnóstico completo (sorologia + IgA total + biópsia) para cobrir os três ângulos.
- **Doença de Whipple** (ENARE 2026 Q51) cobra o reconhecimento da tríade clássica associada ao achado histológico específico (macrófagos PAS-positivos).

## 🧠 Conceito e fisiopatologia

A doença celíaca é uma enteropatia autoimune desencadeada pela gliadina (fração do glúten) em indivíduos geneticamente predispostos (HLA-DQ2/DQ8) — a gliadina deaminada pela transglutaminase tecidual ativa linfócitos T CD4+ na lâmina própria, gerando resposta inflamatória que destrói vilosidades intestinais e reduz a superfície de absorção. A ausência de HLA-DQ2/DQ8 tem altíssimo valor preditivo negativo, sendo por vezes usada para afastar o diagnóstico em casos duvidosos.

A doença de Whipple é uma infecção sistêmica crônica por bactéria intracelular que se acumula em macrófagos da lâmina própria intestinal (e de outros tecidos) — os grânulos PAS-positivos observados na biópsia são restos bacterianos digeridos parcialmente. Sem antibioticoterapia prolongada, a recidiva é frequente.

Na abetalipoproteinemia, a ausência de MTP impede a montagem de quilomícrons e VLDL no enterócito/hepatócito, bloqueando a exportação de lipídeos absorvidos — daí a esteatorreia grave e a deficiência de vitaminas lipossolúveis apesar de ingestão alimentar normal.

Do ponto de vista mais amplo, toda má absorção pode ser dividida em falha de **digestão** (insuficiência pancreática exócrina, deficiência de sais biliares — a gordura não é quebrada em ácidos graxos absorvíveis) versus falha de **absorção** propriamente dita (doença celíaca, ressecção intestinal extensa, SIBO consumindo nutrientes e desconjugando sais biliares) — essa distinção orienta o teste inicial (elastase fecal para causa pancreática vs. sorologia/biópsia para causa da mucosa).

No SIBO, bactérias colônicas que colonizam anormalmente o intestino delgado desconjugam sais biliares (prejudicando a formação de micelas e a absorção de gordura) e competem por vitamina B12, ao mesmo tempo em que produzem folato — por isso o achado laboratorial clássico é a combinação de **B12 baixa com folato normal ou alto**, um padrão praticamente oposto ao da doença celíaca isolada, em que o folato costuma estar reduzido pela má absorção proximal.

## 🩺 Quadro clínico

- **Doença celíaca:** diarreia crônica, distensão abdominal, perda de peso, anemia ferropriva refratária, baixa estatura em crianças; formas extraintestinais incluem dermatite herpetiforme, osteoporose e infertilidade.
- **Doença de Whipple:** artralgia migratória de grandes articulações precedendo em anos o quadro digestivo, diarreia com esteatorreia, febre baixa intermitente, linfadenopatia, podendo haver sintomas neurológicos (demência, oftalmoplegia) e cardíacos.
- **Abetalipoproteinemia:** manifestação já na infância com esteatorreia grave, déficit de crescimento, ataxia progressiva e retinopatia pigmentar por deficiência crônica de vitamina E.
- **Giardíase:** diarreia aquosa crônica, distensão, flatulência fétida, náusea, sem sangue ou febre alta — quadro arrastado que se confunde facilmente com SII.
- **SIBO:** distensão e flatulência importantes, diarreia crônica, sinais de deficiência de vitaminas lipossolúveis e B12 em casos avançados.
- **Colite microscópica:** diarreia aquosa crônica, não sanguinolenta, sem dor abdominal significativa, em paciente idoso, muitas vezes em uso crônico de AINE/IBP/ISRS — exame físico e colonoscopia macroscópica tipicamente normais.
- **Má absorção de ácidos biliares:** diarreia aquosa crônica, urgência evacuatória, geralmente sem esteatorreia franca, em paciente com história de colecistectomia ou doença/ressecção ileal.

## 🔎 Diagnóstico

- **Doença celíaca:** anti-tTG IgA + IgA total → biópsia duodenal (atrofia vilositária, hiperplasia de criptas, linfocitose intraepitelial), mantendo o glúten na dieta até a confirmação.
- **Doença de Whipple:** biópsia duodenal com macrófagos PAS-positivos na lâmina própria; PCR para T. whipplei confirma.
- **Abetalipoproteinemia:** perfil lipídico com colesterol e triglicérides muito baixos, acantócitos no esfregaço, dosagem de vitaminas lipossolúveis, teste genético confirmatório (MTP).
- **Parasitoses intestinais:** exame parasitológico de fezes seriado (3 amostras), antígeno fecal ou PCR quando disponível para Giardia.
- **Investigação geral de diarreia crônica:** classificar por mecanismo (jejum terapêutico, gap osmolar fecal, gordura fecal quantitativa/qualitativa, calprotectina fecal) antes de escolher exames de segunda linha (endoscopia com biópsia, elastase fecal, teste respiratório para SIBO).
- **Intolerância à lactose:** teste respiratório de hidrogênio expirado após sobrecarga de lactose, ou resposta clínica à dieta de exclusão como alternativa pragmática.
- **Colite microscópica:** colonoscopia com biópsias seriadas de mucosa aparentemente normal (mesmo sem alteração endoscópica visível) — a suspeita clínica deve motivar ativamente a biópsia.
- **Má absorção de ácidos biliares:** teste do ácido taurocólico marcado com selênio-75 (SeHCAT) quando disponível, ou prova terapêutica com resina sequestradora de ácidos biliares como alternativa pragmática.

## 💊 Tratamento

- **Doença celíaca:** dieta isenta de glúten, estrita e vitalícia, com reposição das deficiências nutricionais associadas.
- **Doença de Whipple:** ceftriaxona (ou penicilina G) IV por 2 semanas, seguida de sulfametoxazol-trimetoprima oral por 1 a 2 anos.
- **Abetalipoproteinemia:** dieta pobre em gordura de cadeia longa, suplementação de vitaminas lipossolúveis em altas doses (especialmente vitamina E).
- **Parasitoses intestinais (giardíase):** metronidazol ou tinidazol.
- **SIBO:** antibioticoterapia dirigida (rifaximina é a mais usada, por baixa absorção sistêmica), tratando também a causa predisponente de base (dismotilidade, alça cega).
- **Insuficiência pancreática exócrina:** reposição de enzimas pancreáticas (lipase) junto às refeições, além de tratar a causa de base.
- **Esprú tropical:** tetraciclina (ou doxiciclina) por várias semanas a meses associada a ácido fólico, com resposta clínica geralmente evidente em poucas semanas.
- **Intolerância à lactose:** restrição dietética de lactose (não necessariamente de todos os laticínios) e/ou reposição de lactase exógena antes de refeições contendo o dissacarídeo.
- **Colite microscópica:** suspensão do medicamento associado quando identificável; budesonida oral de liberação ileal é o tratamento farmacológico de escolha nos casos persistentes.
- **Má absorção de ácidos biliares:** colestiramina (ou colesevelam) antes das refeições, com resposta clínica geralmente evidente em poucos dias.

## 📚 Referências essenciais

- Diretriz da ACG (American College of Gastroenterology) para diagnóstico e manejo da doença celíaca.
- Guidelines da ESPGHAN para diagnóstico de doença celíaca em pediatria.
- Revisões de referência sobre doença de Whipple (literatura clássica de gastroenterologia).
`;

export default content.trim();
