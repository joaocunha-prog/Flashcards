/**
 * Resumo — Reumatologia · Síndromes autoinflamatórias.
 *
 * Reorganizado por entidade clínica, já que o assunto reúne doenças
 * autoinflamatórias distintas. A doença de Still do adulto complicada por
 * síndrome de ativação macrofágica (MAS) é a entidade com grounding real no
 * corpus (EBSERH 2026 Q50). Febre familiar do Mediterrâneo é incluída como
 * extrapolação de alto rendimento (outra síndrome autoinflamatória clássica
 * de prova), assim como um conceito geral de HLH/MAS secundária a outras
 * doenças reumatológicas. Assunto de baixa incidência no corpus
 * (1 questão), fora do corte 80/20.
 */
const content = `
## 🎯 Essencial

- **Síndromes autoinflamatórias são distintas de doenças autoimunes**: não envolvem autoanticorpos específicos nem resposta adaptativa dirigida a autoantígeno — o mecanismo central é ativação desregulada da **imunidade inata**, com hiperprodução de citocinas pró-inflamatórias (sobretudo IL-1 e IL-6), tipicamente com **FAN e fator reumatoide negativos**.
- **Doença de Still do adulto** é a síndrome autoinflamatória adquirida mais clássica de prova: **febre alta diária (cotidiana/quotidiana)**, **rash evanescente cor-de-salmão** que aparece durante os picos febris e some quando a febre cede, artralgia/artrite, faringite/odinofagia no início do quadro, linfadenopatia e hepatoesplenomegalia — em paciente jovem, com **ferritina extremamente elevada** (com frequência >5x o limite superior, ordem de milhares) e **FAN/fator reumatoide negativos**.
- **Síndrome de ativação macrofágica (MAS)** é a complicação mais temida e mais cobrada da doença de Still do adulto (e de outras doenças reumatológicas, como artrite idiopática juvenil sistêmica e lúpus) — é a forma secundária/reativa de **linfo-histiocitose hemofagocítica (HLH)**, com hiperativação de macrófagos e linfócitos T citotóxicos levando a tempestade de citocinas e falência multiorgânica.
- **Reconhecer MAS exige atenção a um padrão paradoxal**: leucocitose e PCR/VHS elevadas da doença de Still de base **caem abruptamente** (citopenias súbitas — leucopenia, plaquetopenia — e **queda de VHS**, geralmente atribuída a consumo de fibrinogênio e coagulopatia associada), enquanto ferritina sobe ainda mais (frequentemente >10.000 ng/mL), transaminases disparam, fibrinogênio despenca e triglicerídeos sobem — a **queda simultânea de VHS com PCR ainda elevada ou em alta** é uma pista laboratorial clássica e contraintuitiva de MAS/HLH.
- **MAS é emergência com necessidade de tratamento imediato**: pulsoterapia com corticoide em dose alta associada a bloqueio de IL-1 (anakinra) é a estratégia de primeira linha mais consagrada em MAS associada a doença de Still/artrite sistêmica — atraso terapêutico aumenta muito a mortalidade.
- **Febre familiar do Mediterrâneo (FMF)** é a síndrome autoinflamatória monogênica mais prevalente: mutação no gene *MEFV* (proteína pirina), episódios recorrentes e autolimitados (24-72h) de febre associados a serosite (dor abdominal por peritonite estéril, dor torácica por pleurite, artrite), em pacientes de ascendência mediterrânea (judeus sefarditas, armênios, turcos, árabes) — colchicina é o tratamento de escolha, tanto para controlar os episódios quanto para **prevenir amiloidose secundária (AA)**, a complicação mais temida a longo prazo.

## 💎 Pearls

- Os critérios diagnósticos de HLH/MAS (adaptados dos critérios HLH-2004) incluem: febre, esplenomegalia, citopenias em ≥2 linhagens, hipertrigliceridemia e/ou hipofibrinogenemia, hemofagocitose em medula/baço/linfonodo, ferritina muito elevada, atividade de células NK reduzida, CD25 solúvel elevado — na prática de prova, a combinação de **febre + citopenias novas + ferritina extrema + hipofibrinogenemia + hipertrigliceridemia**, em paciente com doença reumatológica de base, já é suficiente para fechar a suspeita.
- Ferritina extremamente elevada (>10.000 ng/mL) tem alta especificidade para HLH/MAS em adultos, embora sensibilidade moderada — valor isolado muito alto deve sempre acender o alarme, mesmo sem todos os critérios formais presentes ainda.
- A dissociação entre PCR (que pode permanecer elevada, refletindo inflamação sistêmica ativa) e VHS (que cai, por queda de fibrinogênio) é um achado mais específico de MAS/HLH do que costuma-se valorizar — é diferente de uma simples resolução de quadro inflamatório, onde ambos cairiam juntos.
- Doença de Still do adulto pode ocorrer também no periparto/puerpério — o cenário de mulher jovem poucas semanas pós-parto com febre alta e rash evanescente, sem resposta a antibiótico, deve levantar a suspeita mesmo fora do padrão demográfico "mais comum" (adultos jovens em geral, sem relação obrigatória com puerpério).
- Odinofagia proeminente no início do quadro de doença de Still é um achado clássico, frequentemente confundido com faringite estreptocócica ou viral — a persistência da febre e o aparecimento do rash evanescente é que reorientam o diagnóstico.
- A crise de FMF costuma ser autolimitada mesmo sem tratamento (24-72h), diferentemente de doença de Still (dias a semanas) — a duração do episódio é uma das pistas diferenciais entre as duas entidades.

## ⚠️ Pitfalls

- **Interpretar a queda de leucócitos e plaquetas como "melhora" do quadro inflamatório de base** — na verdade, em paciente com doença de Still e piora clínica associada, citopenia nova é sinal de alarme para MAS, não de resolução.
- **Tratar MAS como sepse bacteriana oculta e escalar antibiótico enquanto evita imunossupressão** — hemoculturas repetidamente negativas, ausência de foco claro e o padrão laboratorial característico (ferritina extrema, hipofibrinogenemia) devem redirecionar para MAS, cujo tratamento correto é imunossupressão imediata, não mais antibiótico.
- **Confundir MAS secundária à doença de Still com síndrome antifosfolípide catastrófica** — SAF catastrófica tem trombose microvascular multiorgânica como mecanismo central, geralmente com anticorpos antifosfolípides positivos, perfil laboratorial distinto (sem a tríade ferritina extrema + hipofibrinogenemia + hipertrigliceridemia tão proeminente).
- **Prescrever anti-TNF como primeira linha em MAS** — o bloqueio de IL-1 (anakinra) tem a evidência mais consolidada nesse contexto específico, não anti-TNF (mais associado ao tratamento de artrite/espondiloartrites crônicas, e não à emergência de MAS).
- **Deixar de pensar em doença de Still do adulto só porque o FAN é negativo** — negatividade de autoanticorpos é esperada e, na verdade, reforça (não afasta) o diagnóstico de síndrome autoinflamatória.
- **Diagnosticar FMF em paciente sem ascendência étnica compatível e sem padrão recorrente/autolimitado de crises** — FMF exige tanto o perfil étnico quanto o padrão temporal característico (crises curtas e recorrentes), não febre prolongada contínua como na doença de Still.

## 🔹 Doença de Still do adulto e síndrome de ativação macrofágica

- **Quadro:** febre cotidiana alta, rash evanescente salmão durante os picos febris, poliartralgia/artrite, odinofagia inicial, linfadenopatia, hepatoesplenomegalia.
- **Laboratório de base:** leucocitose neutrofílica, PCR e VHS muito elevados, ferritina muito elevada (marcador central), FAN e fator reumatoide negativos, transaminases podendo estar discretamente elevadas.
- **Critérios diagnósticos** (ex.: critérios de Yamaguchi) combinam critérios maiores (febre ≥39°C por ≥1 semana, artralgia ≥2 semanas, rash típico, leucocitose ≥10.000 com ≥80% neutrófilos) e menores (odinofagia, linfadenopatia/esplenomegalia, disfunção hepática, FAN/FR negativos), excluindo infecção, neoplasia e outras doenças reumatológicas.
- **Alerta para MAS:** citopenias novas, queda de VHS com PCR mantida/em alta, elevação abrupta de transaminases, queda de fibrinogênio, elevação de triglicerídeos e de ferritina para além do já elevado basal, instabilidade hemodinâmica, alteração do sensório.
- **Tratamento da doença de base:** corticoide sistêmico como primeira linha; bloqueio de IL-1 (anakinra) ou IL-6 (tocilizumabe) para casos refratários ou de maior gravidade.
- **Tratamento da MAS:** pulsoterapia com corticoide em dose alta (metilprednisolona) associada a bloqueio de IL-1 (anakinra) como estratégia de primeira linha mais consagrada; ciclosporina ou etoposídeo são considerados em casos refratários (extrapolando protocolos de HLH primária).
- 📝 **Como caiu:** EBSERH 2026 Q50 — vinheta clássica com queda paradoxal de leucócitos/plaquetas/VHS associada a ferritina >32.000 ng/mL, hipofibrinogenemia e hipertrigliceridemia, testando o reconhecimento de MAS e a conduta correta (pulsoterapia + anakinra).

## 🔹 Febre familiar do Mediterrâneo

- **Mecanismo:** mutação no gene *MEFV*, que codifica a pirina — proteína reguladora do inflamassoma; a disfunção leva à ativação descontrolada de IL-1β.
- **Quadro:** episódios recorrentes, autolimitados (24-72h), de febre associada a serosite — dor abdominal (peritonite estéril, podendo mimetizar abdome agudo cirúrgico), dor torácica pleurítica, artrite monoarticular de grandes articulações; erisipela-like em membros inferiores é achado cutâneo característico.
- **Diagnóstico:** clínico, apoiado por critérios (episódios recorrentes típicos + resposta à colchicina + etnia compatível), com confirmação genética (mutações no *MEFV*) quando disponível.
- **Tratamento:** colchicina contínua — reduz frequência/gravidade das crises e, fundamentalmente, **previne o desenvolvimento de amiloidose secundária (AA)** renal, a complicação mais temida a longo prazo. Bloqueio de IL-1 (anakinra/canaquinumabe) é reservado a casos refratários à colchicina.
- 💎 **Pearl:** a principal razão para manter colchicina mesmo em paciente assintomático entre crises não é só controlar sintomas — é prevenir amiloidose renal, que pode se desenvolver silenciosamente mesmo com crises pouco frequentes.
- 📝 **Como caiu:** ainda não cobrado no corpus — extrapolação de alto rendimento, outra síndrome autoinflamatória clássica de prova.

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus — apenas 1 questão real registrada** (EBSERH 2026 Q50, dificuldade MÉDIA), com uma vinheta longa e detalhada desenhada para testar o reconhecimento do padrão paradoxal de MAS complicando doença de Still do adulto: mulher jovem, poucas semanas pós-parto, com febre alta diária, rash evanescente salmão, sem resposta a antibiótico, evoluindo em 48h com queda de leucócitos e plaquetas, queda de VHS (apesar de PCR ainda elevado), ferritina disparando de 4.800 para >32.000 ng/mL, hipofibrinogenemia e hipertrigliceridemia — o gabarito exigiu reconhecer MAS e a conduta correta (pulsoterapia com corticoide + bloqueio de IL-1 com anakinra), descartando distratores de sepse oculta, SAF catastrófica, lúpus com HLH tratado com anti-TNF, e linfoma.

Mesmo com só 1 aparição neste banco específico, síndromes autoinflamatórias — sobretudo o reconhecimento de MAS/HLH secundária — são **tema de alto risco em provas de residência médica em geral**, justamente pela apresentação enganosa (queda de marcadores inflamatórios clássicos simulando melhora) que pode levar a atraso fatal de tratamento se não reconhecida.

## 📚 Referências essenciais

- Recomendações de manejo de doença de Still do adulto e síndrome de ativação macrofágica — European Alliance of Associations for Rheumatology (EULAR).
- Critérios de classificação de HLH (HLH-2004) aplicados a MAS secundária em doenças reumatológicas.
- Recomendações de manejo de febre familiar do Mediterrâneo — EULAR.
`;

export default content.trim();
