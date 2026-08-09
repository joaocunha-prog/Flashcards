/**
 * Resumo — Pneumologia · Doenças intersticiais.
 *
 * Cobre as entidades do assunto no corpus: sarcoidose (incluindo síndrome
 * de Heerfordt), fibrose pulmonar idiopática, pneumonite por drogas
 * (toxicidade por quimioterápico) e pneumoconioses (asbestose).
 */
const content = `
## 🎯 Essencial

- **Sarcoidose:** doença granulomatosa multissistêmica — **adenopatia hilar bilateral simétrica** + infiltrado reticulonodular no raio-x/TC é o padrão clássico; pode acometer pele, olhos (uveíte), coração, sistema nervoso e glândulas exócrinas.
- **Síndrome de Heerfordt** ("febre uveoparotídea"): variante específica de sarcoidose com **parotidite bilateral + uveíte + paralisia facial periférica + febre** — reconhecer essa tétrade evita confundir com infecção ou outra causa de paralisia facial.
- **Fibrose pulmonar idiopática (FPI):** idoso, tabagista ou ex-tabagista, dispneia progressiva, estertores em velcro em bases, TC com **padrão de pneumonia intersticial usual (UIP)** — **faveolamento + bronquiectasias de tração + infiltrado reticular basal e subpleural**, sem necessidade de biópsia se o padrão de imagem for típico.
- **Antifibróticos (nintedanibe, pirfenidona) reduzem a progressão da FPI**, mas não revertem a fibrose já estabelecida — são o tratamento de escolha assim que o diagnóstico é confirmado, substituindo corticoide/imunossupressor (que não têm papel na FPI, ao contrário de outras doenças intersticiais).
- **Pneumonite por drogas (toxicidade pulmonar por quimioterápico):** padrão de **vidro fosco/nodular predominando em bases e regiões subpleurais**, em paciente sob tratamento oncológico ativo — **bleomicina** é o agente mais classicamente associado, mas outros quimioterápicos também causam. Diagnóstico é de exclusão (afastar infecção e progressão tumoral).
- **Asbestose/pneumoconiose por asbesto:** exposição ocupacional em **construção civil** (não mineração de carvão, nem agricultura) é a mais associada — **placas pleurais calcificadas** são o achado de imagem característico, com padrão fibrótico basal semelhante à FPI.
- **A localização predominante na TC orienta a etiologia:** bases e subpleural (FPI, asbestose, drogas) × ápices/campos superiores (silicose, tuberculose, sarcoidose em estágios avançados com fibrose) — usar esse eixo para orientar o diagnóstico diferencial.

## 💎 Pearls

- **A adenopatia hilar bilateral simétrica sem sintomas respiratórios importantes é o achado radiológico mais associado a sarcoidose** — muitas vezes é achado incidental em radiografia de rotina.
- **A sarcoidose pode entrar em remissão espontânea em boa parte dos casos**, especialmente quando limitada a adenopatia hilar assintomática (estágio I) — nem todo paciente precisa de tratamento imediato.
- **"Bronquiectasia de tração" é um achado tomográfico de fibrose estabelecida** (a via aérea é literalmente puxada e dilatada pelo tecido cicatricial ao redor) — sua presença junto com faveolamento reforça fortemente o diagnóstico de FPI/padrão UIP.
- **A pneumonite por bleomicina é dose-dependente e potencializada por alta fração inspirada de oxigênio** — pacientes que já receberam bleomicina devem evitar FiO2 elevada em cirurgias futuras, pelo risco de precipitar/agravar toxicidade pulmonar.
- **Placas pleurais calcificadas por asbesto têm longa latência** (décadas após a exposição) — a história ocupacional pode ser antiga e não mais ativa no momento do diagnóstico.
- **Exposição a asbesto também aumenta risco de mesotelioma pleural e câncer de pulmão** — achado incidental de placas pleurais deve motivar vigilância adicional, não só documentar a pneumoconiose.

## ⚠️ Pitfalls

- **Biopsiar de rotina todo paciente com TC de padrão UIP típico e contexto clínico compatível com FPI** — quando o padrão radiológico é clássico, a biópsia pulmonar cirúrgica não é obrigatória e acrescenta risco desnecessário.
- **Tratar FPI com corticoide/imunossupressor** — não tem benefício comprovado e pode até ser deletério (o estudo PANTHER-IPF mostrou pior desfecho com a combinação corticoide+azatioprina+N-acetilcisteína); os antifibróticos são o tratamento correto.
- **Confundir sarcoidose com linfoma ou tuberculose ganglionar** só pela adenopatia hilar — o padrão bilateral e simétrico, associado a outros achados sistêmicos (uveíte, eritema nodoso, hipercalcemia), ajuda a diferenciar; biópsia com granuloma não caseoso confirma quando necessário.
- **Atribuir toda opacidade pulmonar nova em paciente oncológico à progressão da neoplasia** sem considerar toxicidade por quimioterápico — o padrão de vidro fosco subpleural em bases, temporalmente relacionado ao início/aumento de dose do agente, deve levantar a suspeita.
- **Associar pneumoconiose a qualquer exposição ocupacional genérica sem diferenciar o agente** — silicose (jateamento de areia, mineração), asbestose (construção civil, isolamento térmico) e pneumoconiose do carvão (mineração de carvão) têm padrões radiológicos e prognósticos diferentes.
- **Esquecer que a paralisia facial periférica pode ter causa sistêmica (sarcoidose)** e tratá-la isoladamente como Bell idiopática quando há outros achados sistêmicos associados (parotidite, uveíte, febre).

## 📝 Como a UERJ cobra

**Doenças intersticiais é #19 do ranking (5 questões, 2,0% do corpus)**, cobrindo um espectro amplo — cada entidade tende a aparecer isolada, com vinheta rica em contexto epidemiológico/ocupacional ou em achados sistêmicos associados.

- **Sarcoidose** apareceu 2 vezes (2021 Q49, 2025 Q50), a primeira testando o reconhecimento da síndrome de Heerfordt (combinação rara mas de alto rendimento) e a segunda o padrão radiológico clássico (adenopatia hilar + infiltrado reticulonodular).
- **Fibrose pulmonar idiopática** (2024 Q35) citou explicitamente a diretriz ATS/ERS/JRS/ALAT e testou tanto o padrão de imagem (faveolamento + bronquiectasia de tração) quanto o tratamento correto (nintedanibe, não imunossupressor).
- **Pneumonite por drogas** (2024 Q41) exigiu reconhecer toxicidade por quimioterápico como diagnóstico diferencial de infecção/progressão tumoral em paciente oncológico — questão de raciocínio de exclusão.
- **Pneumoconioses** (2024 Q45) testou especificamente a associação exposição ocupacional-agente (construção civil-asbesto), item de conhecimento factual de alto rendimento.

## 🆕 Atualização

- A **diretriz ATS/ERS/JRS/ALAT para FPI**, já citada explicitamente pela UERJ, consolidou o diagnóstico por padrão de imagem típico (UIP) sem necessidade obrigatória de biópsia, e reforçou os antifibróticos (nintedanibe e pirfenidona) como tratamento padrão desde o diagnóstico, independentemente da gravidade funcional inicial.
- O conceito de **doença pulmonar intersticial fibrosante progressiva (PPF)**, que estende o uso de antifibróticos (nintedanibe) para outras doenças intersticiais fibrosantes além da FPI quando mostram comportamento clínico progressivo (incluindo formas associadas a doenças do tecido conjuntivo e pneumonite de hipersensibilidade crônica), representa mudança conceitual relevante da última atualização das diretrizes internacionais.
- Para sarcoidose, a decisão de tratar (corticoide como primeira linha) permanece reservada a doença sintomática ou com risco de disfunção de órgão-alvo (cardíaca, neurológica, ocular, pulmonar progressiva) — reforçando que muitos casos assintomáticos seguem em observação.

## 🧠 Conceito e fisiopatologia

**Sarcoidose** é uma doença granulomatosa de etiologia não totalmente esclarecida, caracterizada pela formação de granulomas não caseosos em múltiplos órgãos, refletindo uma resposta imune celular exagerada (mediada por linfócitos T CD4+ e macrófagos) a um antígeno ainda não identificado com certeza. A disseminação hematogênica e linfática explica o acometimento multissistêmico característico.

**Fibrose pulmonar idiopática** resulta de lesão epitelial alveolar repetida (por fatores genéticos predisponentes, tabagismo, refluxo, entre outros gatilhos ainda em estudo) seguida de reparo aberrante, com ativação excessiva de fibroblastos e deposição desordenada de colágeno — diferente de outras doenças intersticiais, a FPI tem componente inflamatório relativamente discreto, o que explica por que anti-inflamatórios/imunossupressores não funcionam e por que a estratégia terapêutica se volta a frear diretamente a via fibrogênica (antifibróticos).

**Pneumonite por drogas (toxicidade por quimioterápico)** ocorre por lesão direta do epitélio alveolar e endotélio capilar pulmonar por espécies reativas de oxigênio geradas pelo metabolismo do fármaco (mecanismo bem descrito para bleomicina), desencadeando resposta inflamatória e, em casos avançados, fibrose — a susceptibilidade é maior com doses cumulativas altas e exposição concomitante a alta concentração de oxigênio.

**Pneumoconioses** resultam da inalação crônica de partículas minerais (sílica, asbesto, carvão) que, por serem pouco degradáveis, são fagocitadas por macrófagos alveolares que não conseguem eliminá-las — a ativação macrofágica persistente libera citocinas fibrogênicas de forma crônica, causando fibrose progressiva ao longo de décadas de exposição, mesmo após a exposição ter cessado.

## 🩺 Quadro clínico

- **Sarcoidose:** tosse seca, dispneia, fadiga, eritema nodoso, uveíte, linfadenopatia periférica, hipercalcemia (produção ectópica de calcitriol pelos macrófagos do granuloma — associação com o resumo de hepatopatias/hipercalcemia), acometimento cardíaco (arritmias, bloqueios) e neurológico (paralisia facial, meningite asséptica) em formas extrapulmonares.
- **FPI:** dispneia progressiva aos esforços, tosse seca crônica, estertores finos em velcro em bases pulmonares, baqueteamento digital em fases mais avançadas.
- **Pneumonite por drogas:** tosse seca, dispneia progressiva subaguda, associada temporalmente ao tratamento oncológico, sem febre proeminente (diferencial com infecção).
- **Pneumoconioses:** dispneia progressiva de instalação insidiosa, tosse, história ocupacional relevante de exposição prolongada (anos a décadas).

## 🔎 Diagnóstico

- **Sarcoidose:** radiografia/TC de tórax (adenopatia hilar bilateral ± infiltrado reticulonodular), biópsia (transbrônquica ou de lesão acessível) mostrando granuloma não caseoso, exclusão de outras causas de granuloma (tuberculose, fungos); dosagem de enzima conversora de angiotensina como apoio (pouco específica).
- **FPI:** TC de tórax de alta resolução mostrando padrão UIP típico (faveolamento, bronquiectasias de tração, distribuição basal e subpleural) — biópsia cirúrgica reservada para padrões atípicos/indeterminados; prova de função respiratória com padrão restritivo e DLCO reduzida.
- **Pneumonite por drogas:** TC de tórax (vidro fosco/nodular subpleural basal) + contexto temporal com o agente + exclusão de infecção (culturas, painel viral) e de progressão tumoral.
- **Pneumoconioses:** história ocupacional detalhada + TC de tórax (placas pleurais calcificadas na asbestose; nódulos em campos superiores na silicose) — biópsia raramente necessária quando a história e a imagem são característicos.

## 🚨 Gravidade / classificação

- **Estágios radiológicos da sarcoidose** (0 a IV, conforme padrão de adenopatia e fibrose) orientam prognóstico e probabilidade de remissão espontânea — estágio I tem alta taxa de remissão espontânea, estágios mais avançados com fibrose têm pior prognóstico.
- **Capacidade vital forçada e DLCO seriadas** orientam a progressão e a resposta terapêutica na FPI e nas demais doenças intersticiais fibrosantes.
- **Pneumonite por drogas grave** (hipoxemia significativa, necessidade de suporte ventilatório) exige suspensão imediata do agente e corticoterapia em doses altas.

## 💊 Tratamento

- **Sarcoidose assintomática/estágio I:** observação, já que a remissão espontânea é comum.
- **Sarcoidose sintomática ou com risco de disfunção de órgão-alvo:** **corticoide** como primeira linha; imunossupressores poupadores de corticoide (metotrexato, azatioprina) em doença crônica ou refratária.
- **FPI:** **antifibróticos (nintedanibe ou pirfenidona)** desde o diagnóstico; oxigenoterapia suplementar conforme hipoxemia; avaliação para transplante pulmonar em casos progressivos apesar do tratamento; reabilitação pulmonar.
- **Pneumonite por drogas:** suspensão do agente causador, corticoide em casos moderados a graves, suporte de oxigênio conforme necessário.
- **Pneumoconioses:** afastamento da exposição, suporte sintomático (broncodilatador, oxigênio conforme progressão), vigilância para complicações associadas (câncer de pulmão, mesotelioma na asbestose); não há tratamento específico que reverta a fibrose já estabelecida.

## 🔀 Diagnóstico diferencial

| Doença intersticial | Distribuição na TC | Contexto |
| --- | --- | --- |
| FPI | Basal, subpleural | Idoso, tabagista, sem exposição específica |
| Asbestose | Basal, subpleural + placas pleurais | Construção civil, isolamento térmico |
| Silicose | Campos superiores, nódulos | Jateamento de areia, mineração |
| Sarcoidose | Peribroncovascular + adenopatia hilar | Multissistêmica, granuloma não caseoso |
| Pneumonite por drogas | Subpleural, vidro fosco | Temporal ao agente quimioterápico |

## 📋 Tabela de revisão

| Doença | Achado-chave | Confirmação | Tratamento |
| --- | --- | --- | --- |
| Sarcoidose | Adenopatia hilar bilateral | Biópsia (granuloma não caseoso) | Observação ou corticoide |
| Síndrome de Heerfordt | Parotidite + uveíte + paralisia facial + febre | Contexto clínico + biópsia | Corticoide |
| FPI | Faveolamento + bronquiectasia de tração | TC de alta resolução (padrão UIP) | Nintedanibe/pirfenidona |
| Pneumonite por drogas | Vidro fosco subpleural, contexto oncológico | Exclusão de infecção/progressão | Suspender agente + corticoide |
| Asbestose | Placas pleurais calcificadas | História ocupacional + TC | Suporte |

## 📚 Referências essenciais

- Diretriz ATS/ERS/JRS/ALAT para Fibrose Pulmonar Idiopática (citada explicitamente pela UERJ em 2024).
- ATS/ERS Statement — Sarcoidosis: Diagnosis and Detection.
- ATS Statement — Occupational Interstitial Lung Diseases (asbestose, silicose).
`;

export default content.trim();
