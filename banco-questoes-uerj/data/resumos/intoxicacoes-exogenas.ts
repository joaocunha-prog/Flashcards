/**
 * Resumo — Emergências e Terapia Intensiva · Intoxicações exógenas.
 *
 * Cobre as entidades do assunto no corpus: metemoglobinemia (por dapsona),
 * intoxicação por opioides, e síndrome de abstinência alcoólica.
 */
const content = `
## 🎯 Essencial

- **Metemoglobinemia:** cianose **desproporcional à gasometria** (PaO2 normal — o problema não é a quantidade de oxigênio dissolvido no sangue, é a incapacidade da hemoglobina alterada de carregá-lo) — o achado gasométrico característico é **PaO2 normal com PaCO2 baixo** (taquipneia compensatória por hipoxemia "sentida" pelos tecidos, apesar da PaO2 normal). **Dapsona** é a causa medicamentosa clássica.
- **A saturação de oxigênio medida por oximetria de pulso é imprecisa na metemoglobinemia** — tende a estacionar em torno de 85%, independentemente da gravidade real; o diagnóstico de certeza é pela **co-oximetria** (mede diretamente a fração de metemoglobina).
- **Intoxicação por opioides:** tríade **miose + rebaixamento do nível de consciência + depressão respiratória (bradipneia)** — antídoto é **naloxona**, que deve ser a conduta inicial diante dessa tríade, antes mesmo de exames de imagem.
- **Em paciente de cuidados paliativos com neoplasia avançada e uso crônico de opioide, rebaixamento do sensório com miose e bradipneia é opioide até prova em contrário** — não é indicação automática de investigação extensa (TC de crânio, punção lombar) antes de tentar a reversão simples e rápida com naloxona.
- **Síndrome de abstinência alcoólica com crise convulsiva:** o medicamento de escolha para prevenir novas crises é **benzodiazepínico (diazepam)**, não fenitoína (que não tem eficácia comprovada para convulsões por abstinência alcoólica) nem fenobarbital (reservado para casos refratários a benzodiazepínico).
- **Tiamina deve ser administrada antes ou junto de qualquer glicose em etilista** com risco de encefalopatia de Wernicke — mas para o controle específico da crise convulsiva por abstinência, o fármaco de escolha continua sendo o benzodiazepínico.

## 💎 Pearls

- **O "gap de saturação"** (diferença entre a saturação calculada pela PaO2/gasometria e a saturação medida pela oximetria de pulso) é uma pista sutil de metemoglobinemia, quando disponível para cálculo — mas na prova, a pista mais direta costuma ser exatamente o padrão gasométrico (PaO2 normal, PaCO2 baixo) associado a cianose refratária a oxigênio suplementar.
- **Cianose que não melhora com oxigênio suplementar em paciente com ausculta pulmonar e radiografia de tórax normais** é o cenário clássico que deveria disparar suspeita de metemoglobinemia, não insistir em aumentar a FiO2.
- **Miose bilateral pontual ("pinponit pupils") é um dos achados mais específicos de intoxicação opioide** — presente na maioria dos casos, mesmo quando outros dados da história são incertos ou o paciente não consegue relatar o que usou.
- **A naloxona tem meia-vida mais curta que a maioria dos opioides** — pode ser necessário repetir doses ou manter infusão contínua, especialmente com opioides de longa ação (metadona, fentanil transdérmico), para evitar recorrência da depressão respiratória após a reversão inicial.
- **A crise convulsiva por abstinência alcoólica geralmente ocorre nas primeiras 48h após a última dose** — o timing (horas após internação/interrupção do consumo) é uma pista de contexto importante na vinheta.

## ⚠️ Pitfalls

- **Aumentar a oferta de oxigênio indefinidamente em cianose refratária sem considerar metemoglobinemia** — a hemoglobina alterada não consegue transportar o oxigênio adequadamente independentemente da FiO2 ofertada; o tratamento específico (azul de metileno em casos graves) é o que resolve, não mais oxigênio.
- **Solicitar TC de crânio como primeira conduta em rebaixamento de consciência com miose e bradipneia em paciente com fator de risco claro para opioide** — a prioridade é a reversão rápida com naloxona; investigação de imagem só se justifica se não houver resposta esperada.
- **Usar fenitoína para prevenir convulsões de abstinência alcoólica** — não tem eficácia comprovada nesse contexto específico (diferente de sua utilidade em outras etiologias de convulsão); benzodiazepínico é o fármaco correto.
- **Administrar glicose em etilista desnutrido antes da tiamina** — risco teórico de precipitar/agravar encefalopatia de Wernicke ao consumir as reservas residuais de tiamina no metabolismo agudo da glicose ofertada.
- **Confiar isoladamente na oximetria de pulso para avaliar gravidade/resposta ao tratamento da metemoglobinemia** — o valor mostrado tende a ficar "preso" perto de 85% e não reflete adequadamente a fração real de metemoglobina nem a resposta terapêutica.
- **Não repetir/manter monitorização após dose única de naloxona em intoxicação por opioide de longa ação** — o efeito da naloxona pode terminar antes do opioide, levando à recorrência da depressão respiratória.

## 📝 Como a UERJ cobra

**Intoxicações exógenas é #34 do ranking (3 questões, 1,2% do corpus)**, com cada questão cobrindo uma síndrome tóxica clássica e sua conduta específica — vinhetas relativamente diretas, mas que exigem reconhecimento preciso do padrão.

- **Metemoglobinemia** (2021 Q16) testou o **padrão gasométrico específico** (PaO2 normal, PaCO2 baixo) associado a uso de dapsona — questão que recompensa entendimento fisiopatológico, não apenas reconhecimento do nome da síndrome.
- **Opioides** (2022 Q14) testou o reconhecimento da tríade clássica em contexto de cuidados paliativos, valorizando a naloxona como conduta imediata em vez de investigação extensa.
- **Síndrome de abstinência alcoólica** (2023 Q46) testou a escolha correta do anticonvulsivante (diazepam, não fenitoína) em contexto de crise convulsiva pós-operatória em etilista.

## 🆕 Atualização

- Protocolos de manejo da **intoxicação por opioides** vêm incorporando cada vez mais a distribuição comunitária de naloxona (incluindo formulações intranasais de fácil aplicação por leigos) como estratégia de saúde pública diante do aumento de overdoses relacionadas a opioides sintéticos potentes (fentanil e análogos) em diversos países — reflexo de uma crise de saúde pública que amplia a relevância clínica desse tema.
- Para síndrome de abstinência alcoólica, protocolos guiados por escala (como o CIWA-Ar) para dosagem de benzodiazepínico "conforme sintomas" (em vez de esquema fixo) tornaram-se prática padrão em muitos serviços, reduzindo dose total de benzodiazepínico necessária e tempo de internação sem aumentar risco de crise convulsiva.
- **Azul de metileno** continua sendo o tratamento específico de escolha para metemoglobinemia sintomática/grave, mas seu uso deve ser cauteloso em pacientes com deficiência de G6PD (pode paradoxalmente piorar a metemoglobinemia e causar hemólise nesses pacientes, exigindo alternativas como ácido ascórbico ou exsanguineotransfusão em casos graves).

## 🧠 Conceito e fisiopatologia

**Metemoglobinemia** ocorre quando o ferro do grupo heme da hemoglobina é oxidado do estado ferroso (Fe²⁺, capaz de ligar oxigênio) para o estado férrico (Fe³⁺, incapaz de ligar oxigênio adequadamente) — agentes oxidantes como a dapsona (e seus metabólitos) promovem essa oxidação em ritmo que supera a capacidade das enzimas redutoras naturais (NADH-metemoglobina redutase) de reverter o processo. A PaO2 permanece normal porque a quantidade de oxigênio fisicamente dissolvido no plasma não é afetada — o problema é que a hemoglobina circulante não consegue transportá-lo adequadamente aos tecidos, que "sentem" hipóxia funcional e desencadeiam taquipneia compensatória (reduzindo a PaCO2), mesmo com a PaO2 medida normal.

**Intoxicação por opioides** decorre da ativação excessiva de receptores opioides no sistema nervoso central, causando depressão do centro respiratório bulbar (bradipneia, podendo evoluir para apneia), sedação/rebaixamento do nível de consciência, e miose (por estimulação do núcleo de Edinger-Westphal) — a naloxona é um antagonista competitivo desses mesmos receptores, deslocando o opioide e revertendo rapidamente os efeitos, mas por tempo limitado conforme sua própria meia-vida farmacológica.

**Síndrome de abstinência alcoólica** resulta da adaptação neuronal crônica ao efeito depressor do álcool sobre receptores GABA (potencializando sua ação inibitória) e sua inibição de receptores NMDA excitatórios — com a interrupção abrupta do consumo, esse equilíbrio adaptado se desfaz subitamente, gerando um estado de hiperexcitabilidade neuronal (rebote) que se manifesta como tremor, agitação, hiperatividade autonômica e, em casos graves, convulsões e delirium tremens. Os benzodiazepínicos, ao potencializarem a mesma via GABA que o álcool ocupava cronicamente, substituem funcionalmente esse efeito depressor de forma controlada e permitem um desmame mais seguro e gradual.

## 🩺 Quadro clínico

- **Metemoglobinemia:** cianose "achocolatada" (coloração acinzentada/azulada característica do sangue), dispneia, cefaleia, fadiga, sangue visualmente com coloração marrom-chocolate ao ser coletado, em graus mais graves — confusão mental, arritmias.
- **Intoxicação por opioides:** miose puntiforme, rebaixamento do nível de consciência, bradipneia/apneia, hipotensão, hipotermia em casos graves.
- **Síndrome de abstinência alcoólica:** tremor, agitação, ansiedade, taquicardia, hipertensão, sudorese, náuseas, alucinações (predominantemente visuais/táteis), podendo evoluir para crise convulsiva tônico-clônica generalizada e delirium tremens (confusão mental grave, hiperatividade autonômica intensa) em casos avançados.

## 🔎 Diagnóstico

- **Metemoglobinemia:** gasometria arterial (PaO2 normal, PaCO2 baixo) + **co-oximetria** (dosagem direta da fração de metemoglobina) — a oximetria de pulso convencional é pouco confiável nesse contexto.
- **Intoxicação por opioides:** clínico (tríade miose + rebaixamento do sensório + bradipneia) + resposta terapêutica à naloxona (que funciona simultaneamente como teste diagnóstico e tratamento).
- **Síndrome de abstinência alcoólica:** clínico + contexto de interrupção/redução recente do consumo em etilista crônico; escalas de gravidade (CIWA-Ar) auxiliam na quantificação objetiva dos sintomas e na dosagem guiada de benzodiazepínico.

## 🚨 Gravidade / classificação

- **Metemoglobinemia** é graduada pela fração percentual de metemoglobina — sintomas leves geralmente acima de 10-15%, risco de morte acima de 50-70% se não tratada.
- **Síndrome de abstinência alcoólica grave** inclui crise convulsiva e delirium tremens, exigindo monitorização intensiva e doses mais agressivas de benzodiazepínico, eventualmente com necessidade de suporte em UTI.

## 💊 Tratamento

- **Metemoglobinemia sintomática/grave:** **azul de metileno** intravenoso (com cautela e alternativas em deficiência de G6PD); suspensão do agente causador; oxigênio suplementar como medida adjuvante (não resolve isoladamente o problema).
- **Intoxicação por opioides:** **naloxona**, titulada conforme resposta, com atenção a doses repetidas/infusão contínua em opioides de longa ação; suporte ventilatório se necessário enquanto o antídoto faz efeito.
- **Síndrome de abstinência alcoólica:** **benzodiazepínico (diazepam ou outro, conforme protocolo institucional)** como primeira linha para prevenção e tratamento de convulsões e demais sintomas; **tiamina** sempre associada (antes/junto de qualquer glicose) para prevenir encefalopatia de Wernicke; suporte hidroeletrolítico e monitorização em ambiente adequado à gravidade.

## 🔀 Diagnóstico diferencial

| Síndrome tóxica | Achado gasométrico/exame-chave | Antídoto/tratamento específico |
| --- | --- | --- |
| Metemoglobinemia | PaO2 normal + PaCO2 baixo; co-oximetria | Azul de metileno |
| Intoxicação por opioides | Miose + bradipneia | Naloxona |
| Abstinência alcoólica | Contexto de interrupção do consumo | Benzodiazepínico + tiamina |

## 📋 Tabela de revisão

| Síndrome | Achado-chave | Tratamento |
| --- | --- | --- |
| Metemoglobinemia (dapsona) | Cianose refratária a O2, PaO2 normal | Azul de metileno |
| Intoxicação por opioides | Miose + rebaixamento + bradipneia | Naloxona |
| Abstinência alcoólica, convulsão | Etilismo + interrupção recente | Diazepam + tiamina |

## 📚 Referências essenciais

- UpToDate/NEJM Review — Methemoglobinemia: Diagnosis and Management.
- ASAM Clinical Practice Guideline on Alcohol Withdrawal Management.
- WHO Guidelines for the Psychosocially Assisted Pharmacological Treatment of Opioid Dependence (contexto de manejo de intoxicação aguda por opioides).
`;

export default content.trim();
