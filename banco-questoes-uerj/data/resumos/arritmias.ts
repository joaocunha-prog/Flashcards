/**
 * Resumo — Cardiologia · Arritmias.
 *
 * Cobre as entidades do assunto no corpus: fibrilação atrial (anticoagulação
 * e controle de frequência/ritmo), síncope (avaliação), e síndrome de
 * Brugada.
 */
const content = `
## 🎯 Essencial

- **Fibrilação atrial valvar (estenose mitral reumática, prótese mecânica): anticoagulação é sempre com varfarina** — DOACs (dabigatrana, rivaroxabana, apixabana) são **contraindicados** na FA valvar por eficácia inferior e maior risco de eventos nesses estudos específicos.
- **FA não valvar: escore CHA2DS2-VASc define necessidade de anticoagulação** — DOACs são preferidos à varfarina na maioria dos pacientes não valvares por menor risco de sangramento intracraniano e sem necessidade de monitorização de INR.
- **Controle de ritmo em FA: a escolha do antiarrítmico depende de doença estrutural cardíaca** — **propafenona/flecainida** só em coração estruturalmente normal (sem cardiopatia isquêmica/disfunção de VE); **amiodarona** é opção mais segura em cardiopatia estrutural, mas tem mais efeitos colaterais extracardíacos a longo prazo (tireoide, pulmão, fígado, olhos).
- **Se o ecocardiograma e a angio-TC de coronárias forem normais (coração estruturalmente normal), trocar amiodarona por propafenona é a conduta que reduz efeitos colaterais mantendo eficácia** — não é preciso manter amiodarona "pelo hábito" quando há alternativa mais segura disponível.
- **Síndrome de Brugada:** síncope/palpitação + ECG com **supradesnivelamento de ST em V1-V2 com padrão específico ("coved type")** — canalopatia genética com risco de morte súbita por arritmia ventricular, mais comum em homens jovens, muitas vezes desencadeada por febre.
- **Síncope vasovagal:** pródromos característicos (turvação visual, sudorese fria, náusea) antes do desmaio, gatilho postural/emocional, recuperação rápida — **queda de PA sem taquicardia compensatória significativa** é achado de apoio (resposta vasodepressora predominante).
- **Diferenciar síncope vasovagal de hipotensão ortostática:** vasovagal tem pródromos autonômicos proeminentes e gatilho situacional; hipotensão ortostática é definida por critério objetivo de queda pressórica ao ortostatismo (≥20 mmHg sistólica ou ≥10 mmHg diastólica em 3 minutos), geralmente sem os mesmos pródromos exuberantes.

## 💎 Pearls

- **A regra "sem cardiopatia estrutural = pode usar antiarrítmico de classe IC" é o eixo central de toda escolha de controle de ritmo em FA** — memorizar essa regra resolve a maioria das questões sobre esse tema.
- **CHA2DS2-VASc = 0 em homem (ou 1 em mulher, só pelo sexo) geralmente não indica anticoagulação** — o escore feminino isolado (só por ser mulher) não conta como fator de risco suficiente sozinho nas diretrizes mais recentes.
- **A síndrome de Brugada pode ser desmascarada por febre** — episódios de síncope/arritmia associados a quadros febris em jovem devem levantar a suspeita, mesmo sem ECG basal alterado fora da crise.
- **História familiar de morte súbita é dado de altíssimo valor na investigação de síncope em jovem** — direciona para causas arritmogênicas genéticas (Brugada, QT longo, cardiomiopatia hipertrófica) e não deve ser negligenciada na anamnese.
- **A ausência de elevação compensatória da FC durante a queda pressórica é uma pista sutil de síncope vasovagal** (resposta vasodepressora pura) — em taquiarritmias como causa de síncope, o padrão hemodinâmico costuma ser diferente.
- **Estenose mitral reumática é a cardiopatia valvar mais associada a FA de alto risco tromboembólico** — mesmo com CHA2DS2-VASc baixo, a presença de valvopatia reumática moderada/grave já indica anticoagulação com varfarina por si só.

## ⚠️ Pitfalls

- **Prescrever DOAC em FA valvar** (estenose mitral reumática ou prótese mecânica) — contraindicação formal; usar varfarina.
- **Escolher propafenona/flecainida para controle de ritmo em paciente com cardiopatia isquêmica ou disfunção de VE** — risco de efeito pró-arrítmico grave (efeito inotrópico negativo e proarritmia ventricular) nessa população; amiodarona é a opção mais segura nesse contexto.
- **Confundir síndrome de Brugada com síndrome coronariana aguda** pelo supradesnivelamento em V1-V2 — o padrão eletrocardiográfico específico ("coved type"), a ausência de dor torácica típica e o contexto (jovem, síncope após febre) direcionam para o diagnóstico correto.
- **Investigar síncope vasovagal típica (com pródromos claros e gatilho situacional) com bateria extensa de exames cardiológicos invasivos** — quando a história é característica, a investigação pode ser mais direcionada e conservadora.
- **Aplicar o mesmo escore de risco tromboembólico (CHA2DS2-VASc) para decidir anticoagulação em FA valvar** — na FA valvar, a anticoagulação com varfarina é indicada pela própria valvopatia, independentemente do escore.
- **Manter amiodarona indefinidamente "porque já funciona"** sem reconsiderar alternativas mais seguras quando a estrutura cardíaca é normal — a exposição cumulativa a amiodarona aumenta risco de toxicidade tireoidiana, pulmonar e hepática a longo prazo.

## 📝 Como a UERJ cobra

**Arritmias é #23 do ranking (4 questões, 1,6% do corpus)**, com cada questão testando uma decisão terapêutica específica dentro de um cenário clínico bem definido — não há vinheta "genérica" de reconhecimento de arritmia.

- **Fibrilação atrial — anticoagulação** (2022 Q7) testou diretamente a contraindicação de DOAC em FA valvar (estenose mitral reumática), citando a diretriz ESC de FA.
- **Síndrome de Brugada** (2022 Q18) cobrou o reconhecimento do padrão eletrocardiográfico específico em contexto de síncope em jovem sem pródromos.
- **Síncope — avaliação** (2023 Q48) testou o reconhecimento dos pródromos típicos de síncope vasovagal, citando a diretriz ESC de síncope.
- **Fibrilação atrial — controle de frequência e ritmo** (2025 Q26) testou a troca segura de amiodarona por propafenona quando a estrutura cardíaca está confirmadamente normal — questão de raciocínio terapêutico refinado, não apenas reconhecimento.

## 🆕 Atualização

- As diretrizes mais recentes de FA (ESC/AHA) reforçam a **estratégia "pillar" de manejo integrado** (anticoagulação adequada, controle de sintomas por frequência ou ritmo, e manejo de fatores de risco/comorbidades cardiovasculares), com ênfase crescente em controle de ritmo precoce (incluindo ablação por cateter) em vez de apenas controle de frequência, especialmente em pacientes mais jovens e sintomáticos.
- A **ablação por cateter de fibrilação atrial** vem sendo posicionada cada vez mais precocemente no algoritmo terapêutico (inclusive como primeira linha em pacientes selecionados), superando em eficácia o controle farmacológico de ritmo isolado em ensaios recentes — mudança de paradigma em relação a décadas anteriores, quando a ablação era reservada para falha de antiarrítmicos.
- Para síndrome de Brugada, o manejo de portadores assintomáticos (achado incidental de ECG característico sem síncope/arritmia documentada) segue sendo individualizado, com estratificação de risco por estudo eletrofisiológico em casos selecionados — tema técnico que ainda não apareceu na prova, mas relevante para o espectro completo da doença.

## 🧠 Conceito e fisiopatologia

**Fibrilação atrial** decorre de múltiplos focos de atividade elétrica caótica nos átrios (frequentemente originados nas veias pulmonares), gerando contração atrial ineficaz — a estase sanguínea resultante no átrio esquerdo (especialmente no apêndice atrial esquerdo) predispõe à formação de trombos, que podem embolizar para a circulação sistêmica (principalmente cerebral). A estenose mitral reumática amplifica dramaticamente esse risco por acrescentar obstrução mecânica ao fluxo atrial, aumentando ainda mais a estase — por isso a anticoagulação nesse contexto específico exige o controle mais previsível e testado historicamente (varfarina), já que os DOACs foram estudados e validados predominantemente em populações não valvares.

**Escolha de antiarrítmico para controle de ritmo** segue o princípio de que fármacos bloqueadores de canal de sódio (classe IC — propafenona, flecainida) têm efeito pró-arrítmico significativo em corações com cicatriz/fibrose (pós-infarto, disfunção sistólica), onde o substrato arritmogênico já é mais suscetível a reentrada ventricular maligna — por isso são reservados para corações estruturalmente normais, enquanto a amiodarona, apesar de mais tóxica sistemicamente, tem perfil de segurança cardíaca mais favorável mesmo em corações doentes.

**Síndrome de Brugada** é uma canalopatia genética (mutações mais comumente no gene SCN5A, que codifica o canal de sódio cardíaco) que altera a repolarização do epicárdio da via de saída do ventrículo direito, gerando o padrão eletrocardiográfico característico e predispondo a arritmias ventriculares polimórficas malignas — a febre desmascara/agrava o padrão eletrocardiográfico porque a temperatura elevada altera a cinética desses canais de sódio já disfuncionais.

**Síncope vasovagal** resulta de um reflexo autonômico exagerado (reflexo de Bezold-Jarisch) desencadeado por estímulos emocionais, posturais ou situacionais, causando vasodilatação periférica súbita (componente vasodepressor) e, em graus variados, bradicardia (componente cardioinibitório) — a queda de pressão sem taquicardia compensatória adequada reflete justamente essa disautonomia reflexa transitória.

## 🩺 Quadro clínico

- **FA:** palpitações, dispneia, fadiga, ou assintomática (achado incidental); pulso irregularmente irregular ao exame.
- **Síndrome de Brugada:** síncope ou palpitações associadas a arritmia ventricular, frequentemente em repouso ou durante sono, às vezes desencadeadas por febre; história familiar de morte súbita.
- **Síncope vasovagal:** pródromos (turvação visual, sudorese fria, náusea, palidez) antes da perda de consciência, gatilho identificável (dor, calor, posição ortostática prolongada, estresse emocional), recuperação rápida e completa.

## 🔎 Diagnóstico

- **FA:** ECG (ausência de onda P, intervalos R-R irregulares); ecocardiograma para avaliar estrutura cardíaca e valvopatia associada; CHA2DS2-VASc para risco tromboembólico (FA não valvar).
- **Síndrome de Brugada:** ECG de repouso (padrão tipo 1 espontâneo ou induzido por teste com bloqueador de canal de sódio); estudo eletrofisiológico em casos selecionados para estratificação de risco.
- **Síncope:** anamnese detalhada (pródromos, gatilho, recuperação) é o pilar diagnóstico; ECG basal em todos os casos; teste de inclinação (tilt test) em casos duvidosos de síncope reflexa; holter/monitor de eventos quando se suspeita de causa arrítmica.

## 🚨 Gravidade / classificação

- **CHA2DS2-VASc** estratifica risco tromboembólico na FA não valvar e orienta indicação de anticoagulação.
- **Síndrome de Brugada tipo 1 espontânea com síncope/parada cardíaca documentada** define alto risco e indicação de cardiodesfibrilador implantável.
- **Síncope com achados de alarme** (durante esforço, associada a palpitações prévias, história familiar de morte súbita, ECG alterado) exige investigação cardiológica mais agressiva, diferente da síncope vasovagal típica de baixo risco.

## 💊 Tratamento

- **FA valvar:** **varfarina**, mantendo INR terapêutico (geralmente 2-3, podendo ser mais alto em prótese mecânica conforme o tipo).
- **FA não valvar com indicação por CHA2DS2-VASc:** **DOAC preferencial** (apixabana, rivaroxabana, dabigatrana) sobre varfarina na maioria dos pacientes elegíveis.
- **Controle de ritmo em coração estruturalmente normal:** propafenona ou flecainida.
- **Controle de ritmo em cardiopatia estrutural:** amiodarona (ou ablação por cateter, cada vez mais precocemente indicada).
- **Síndrome de Brugada de alto risco:** **cardiodesfibrilador implantável**; evitar fármacos que possam desmascarar/agravar o padrão eletrocardiográfico; tratamento agressivo de febre.
- **Síncope vasovagal:** orientação e medidas comportamentais (hidratação, evitar gatilhos, manobras de contrapressão física ao perceber pródromos) como primeira linha; marca-passo reservado para formas cardioinibitórias graves e refratárias.

## 🔀 Diagnóstico diferencial

| Situação | Achado-chave | Anticoagulante/conduta |
| --- | --- | --- |
| FA + estenose mitral reumática/prótese mecânica | Valvopatia significativa | Varfarina (DOAC contraindicado) |
| FA não valvar | CHA2DS2-VASc elevado | DOAC preferencial |
| Controle de ritmo, coração normal | Ecocardiograma/angio-TC normais | Propafenona/flecainida |
| Controle de ritmo, cardiopatia estrutural | Disfunção de VE/isquemia | Amiodarona |

## 📋 Tabela de revisão

| Entidade | Achado-chave | Conduta |
| --- | --- | --- |
| FA valvar | Estenose mitral reumática | Varfarina |
| Síndrome de Brugada | Supra em V1-V2 tipo coved + síncope | CDI se alto risco |
| Síncope vasovagal | Pródromos + gatilho + recuperação rápida | Medidas comportamentais |
| Controle de ritmo pós-normalização estrutural | Sem cardiopatia | Trocar amiodarona por propafenona |

## 📚 Referências essenciais

- Diretriz ESC de Fibrilação Atrial (citada explicitamente pela UERJ em 2022 e 2025).
- Diretriz ESC de Síncope (citada explicitamente pela UERJ em 2023).
- HRS/EHRA/APHRS/LAHRS Expert Consensus Statement on Brugada Syndrome.
`;

export default content.trim();
