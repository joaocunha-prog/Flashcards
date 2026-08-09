/**
 * Resumo — Cardiologia · Hipertensão arterial.
 *
 * Cobre as entidades do assunto no corpus: hipertensão resistente
 * (espironolactona), tratamento farmacológico (escolha e efeitos colaterais
 * de anti-hipertensivos), e emergência/urgência hipertensiva.
 */
const content = `
## 🎯 Essencial

- **Hipertensão resistente** (não controlada apesar de 3 fármacos em dose plena, incluindo diurético): o quarto fármaco de escolha é a **espironolactona** — estudo PATHWAY-2 demonstrou superioridade sobre outras opções (betabloqueador, alfabloqueador) nesse cenário específico.
- **Antes de rotular hipertensão como "resistente", sempre excluir causas secundárias e má aderência** — mas quando a investigação já afastou causa secundária (como na vinheta típica), a espironolactona é a resposta esperada.
- **Hidralazina causa taquicardia reflexa e retenção hidrossalina** — é a pior escolha em paciente com insuficiência cardíaca/cardiopatia isquêmica com angina e já em uso de diurético (agrava congestão e pode precipitar isquemia pela taquicardia reflexa).
- **Emergência hipertensiva com lesão de órgão-alvo aguda: reduzir a PA gradualmente, não abruptamente** (exceto em situações específicas como dissecção de aorta, onde a redução deve ser rápida) — reduzir rápido demais em AVC/isquemia cerebral rompe a autorregulação cerebral e pode **causar isquemia cerebral** por queda além do limite de perfusão que o território já lesado consegue tolerar.
- **Urgência hipertensiva (PA muito elevada sem lesão aguda de órgão-alvo): redução gradual ao longo de 24-48h**, com anti-hipertensivo oral — não é indicação de anti-hipertensivo parenteral de ação rápida.
- **A escolha do anti-hipertensivo deve sempre considerar comorbidades associadas** — IECA/BRA em diabético/nefropata; betabloqueador em cardiopatia isquêmica; evitar hidralazina isolada em cardiopata; espironolactona é útil tanto na hipertensão resistente quanto na insuficiência cardíaca com fração reduzida (benefício duplo quando ambas coexistem).

## 💎 Pearls

- **A autorregulação cerebral do fluxo sanguíneo está "deslocada para cima" no hipertenso crônico** — por isso uma PA que seria considerada normal em um normotenso pode já causar hipoperfusão relativa em um hipertenso crônico se reduzida rápido demais, reforçando por que a queda deve ser gradual na maioria dos cenários de urgência/emergência hipertensiva.
- **Espironolactona tem duplo benefício em paciente com hipertensão resistente E insuficiência cardíaca com fração de ejeção reduzida** — não é só "mais um anti-hipertensivo", tem efeito de classe comprovado em desfecho cardiovascular na IC.
- **B4 (quarta bulha) reflete rigidez diastólica ventricular, comum em hipertensos de longa data**, mesmo sem disfunção sistólica manifesta — achado de exame físico que reforça cronicidade e gravidade da doença hipertensiva.
- **Anlodipino (bloqueador de canal de cálcio) já cobre parte do mecanismo vasodilatador que a hidralazina tentaria adicionar** — combinar os dois tende a ser redundante e potencializa os efeitos colaterais vasodilatadores (edema, taquicardia reflexa) sem benefício adicional proporcional.
- **A decisão entre urgência e emergência hipertensiva depende exclusivamente da presença ou ausência de lesão aguda de órgão-alvo** — não do valor absoluto da pressão arterial isoladamente.

## ⚠️ Pitfalls

- **Adicionar betabloqueador ou outro anti-hipertensivo genérico como "quarto fármaco" em hipertensão resistente** sem considerar espironolactona primeiro — a evidência favorece especificamente a espironolactona nesse degrau terapêutico.
- **Reduzir a PA rapidamente em urgência hipertensiva (sem lesão aguda de órgão-alvo)** usando anti-hipertensivo parenteral — não há benefício e há risco de hipoperfusão desnecessária; o tratamento oral gradual é suficiente e mais seguro.
- **Reduzir a PA rapidamente em AVC isquêmico agudo sem indicação de trombólise** — na maioria dos cenários de AVC isquêmico agudo, a PA é tratada com mais cautela e limiares mais altos do que em outras emergências hipertensivas, justamente pelo risco de comprometer a perfusão da penumbra isquêmica.
- **Escolher hidralazina como anti-hipertensivo de rotina em paciente com doença coronariana/angina** — a taquicardia reflexa pode precipitar isquemia miocárdica.
- **Ignorar B4 e outros sinais de hipertensão de longa data mal controlada** ao avaliar o risco cardiovascular global e a urgência de otimização terapêutica.
- **Assumir que toda crise hipertensiva com cefaleia é "só" urgência sem investigar sinais de lesão aguda de órgão-alvo** (déficit neurológico focal, dor torácica sugestiva de dissecção, edema agudo de pulmão, alteração aguda de função renal) — a presença de qualquer um desses sinais reclassifica o quadro como emergência.

## 📝 Como a UERJ cobra

**Hipertensão arterial é #32 do ranking (3 questões, 1,2% do corpus)**, cobrindo três decisões terapêuticas centrais no manejo da hipertensão — resistência, escolha farmacológica por comorbidade, e conduta na crise hipertensiva.

- **Hipertensão resistente** (2023 Q20) testou diretamente a espironolactona como quarto fármaco de escolha, citando a diretriz brasileira de hipertensão e o estudo PATHWAY-2.
- **Tratamento farmacológico** (2025 Q32) exigiu reconhecer qual fármaco **NÃO** deveria estar no esquema, dado o perfil de comorbidades do paciente (hidralazina em cardiopata isquêmico) — questão de raciocínio negativo, testando entendimento de contraindicação relativa por perfil de efeitos colaterais.
- **Emergência e urgência hipertensiva** (2025 Q33) testou o racional fisiopatológico por trás da redução gradual da PA (risco de isquemia cerebral por ruptura da autorregulação), não apenas a memorização da conduta.

## 🆕 Atualização

- A **diretriz brasileira de hipertensão arterial (SBC)**, já citada explicitamente pela UERJ em múltiplas questões deste assunto, mantém a espironolactona como quarto fármaco preferencial na hipertensão resistente e reforça a importância de excluir causas secundárias e má aderência antes de escalar o tratamento.
- Novas classes terapêuticas para hipertensão resistente/refratária, incluindo **inibidores da aldosterona sintase** e terapias de denervação renal por cateter, vêm sendo estudadas e já aprovadas em alguns países para casos muito selecionados refratários mesmo à espironolactona — fronteira terapêutica ainda não incorporada às diretrizes brasileiras padrão nem cobrada pela UERJ.
- O conceito de **metas pressóricas mais intensivas** (baseado em estudos como o SPRINT) para redução de risco cardiovascular em populações selecionadas de alto risco vem sendo incorporado com cautela nas diretrizes mais recentes, equilibrando benefício cardiovascular com risco de eventos adversos (hipotensão, lesão renal aguda) em populações mais frágeis/idosas.

## 🧠 Conceito e fisiopatologia

**Hipertensão resistente** reflete, na maioria dos casos, expansão de volume não adequadamente controlada pelo diurético tiazídico isolado, frequentemente com componente de hiperaldosteronismo relativo/secundário mesmo sem hiperaldosteronismo primário franco — a espironolactona, ao bloquear diretamente o receptor de mineralocorticoide, contra-ataca esse mecanismo residual de retenção de sódio e água que os outros três fármacos (geralmente IECA/BRA + bloqueador de canal de cálcio + diurético tiazídico) não conseguem controlar isoladamente.

**Autorregulação cerebral do fluxo sanguíneo** mantém a perfusão cerebral relativamente constante numa ampla faixa de pressão arterial média, através de vasoconstrição/vasodilatação compensatória das arteríolas cerebrais — em hipertensos crônicos, essa curva de autorregulação se desloca para a direita (o cérebro "se acostuma" a operar com pressões mais altas), de modo que uma redução pressórica considerada segura em um normotenso pode cair abaixo do limite inferior de autorregulação de um hipertenso crônico, causando hipoperfusão e isquemia relativa — daí a recomendação geral de redução gradual na maioria das emergências hipertensivas (exceto quando o próprio mecanismo da emergência, como dissecção de aorta, exige redução mais rápida para limitar a progressão da lesão vascular).

**Hidralazina** age como vasodilatador arteriolar direto — a queda abrupta de resistência vascular periférica ativa reflexamente o sistema simpático (barorreflexo), causando taquicardia e aumento de contratilidade cardíaca (que aumenta o consumo miocárdico de oxigênio, relevante em coronariopatas) e retenção de sódio/água secundária à ativação do sistema renina-angiotensina-aldosterona (que pode ser parcialmente contornada associando betabloqueador e diurético, mas isso complica o esquema terapêutico).

## 🩺 Quadro clínico

- **Hipertensão resistente:** PA não controlada apesar de esquema adequado com 3 fármacos (incluindo diurético) em dose otimizada; frequentemente assintomática até haver lesão de órgão-alvo estabelecida.
- **Emergência hipertensiva:** PA muito elevada associada a sintomas/sinais de lesão aguda de órgão-alvo — cefaleia intensa com alteração neurológica, dor torácica (dissecção), dispneia (edema agudo de pulmão), alteração aguda de função renal.
- **Urgência hipertensiva:** PA muito elevada sem sinais de lesão aguda de órgão-alvo, podendo haver cefaleia isolada ou ser assintomática.

## 🔎 Diagnóstico

- **Hipertensão resistente:** confirmar aderência e técnica de medida da PA, excluir hipertensão do jaleco branco (MAPA/MRPA), rastrear causas secundárias antes de intensificar tratamento farmacológico.
- **Emergência hipertensiva:** avaliação dirigida a órgãos-alvo — fundo de olho, função renal, ECG/troponina, exame neurológico, imagem conforme suspeita (TC de crânio, angio-TC de aorta).

## 🚨 Gravidade / classificação

- **Emergência × urgência hipertensiva** é definida pela presença ou ausência de lesão aguda de órgão-alvo, não pelo valor absoluto da pressão arterial.
- **Dissecção de aorta** é a principal exceção à regra de redução gradual — nesse cenário, a PA (e a frequência cardíaca) devem ser reduzidas rapidamente para limitar a progressão da dissecção.

## 💊 Tratamento

- **Hipertensão resistente:** adicionar **espironolactona** como quarto fármaco, após confirmar aderência e excluir causa secundária.
- **Escolha geral de anti-hipertensivo:** individualizar por comorbidade — IECA/BRA em diabéticos/nefropatas; betabloqueador em cardiopatia isquêmica/arritmia; bloqueador de canal de cálcio como opção versátil; evitar hidralazina como escolha de rotina em cardiopatas, reservando-a para situações específicas (ex.: gestação).
- **Emergência hipertensiva:** anti-hipertensivo parenteral titulável (nitroprussiato, nicardipina, labetalol conforme o cenário específico), com redução geralmente de até 25% da PA média nas primeiras horas, exceto em dissecção de aorta (redução mais rápida e agressiva de PA e FC).
- **Urgência hipertensiva:** anti-hipertensivo oral, com redução gradual da PA ao longo de 24-48h, ajuste/reintrodução do esquema domiciliar.

## 🔀 Diagnóstico diferencial

| Situação | Lesão aguda de órgão-alvo | Via de tratamento | Velocidade de redução |
| --- | --- | --- | --- |
| Urgência hipertensiva | Ausente | Oral | Gradual (24-48h) |
| Emergência hipertensiva (geral) | Presente | Parenteral | Gradual (~25% nas primeiras horas) |
| Dissecção de aorta | Presente | Parenteral | Rápida |

## 📋 Tabela de revisão

| Situação | Achado-chave | Conduta |
| --- | --- | --- |
| HAS resistente (3 fármacos, sem controle) | Causa secundária excluída | Adicionar espironolactona |
| Cardiopata isquêmico + HAS | Esquema com hidralazina | Evitar hidralazina |
| PA muito alta + déficit neurológico | Emergência hipertensiva | Redução gradual, parenteral |
| PA muito alta, assintomático | Urgência hipertensiva | Redução gradual, oral |

## 📚 Referências essenciais

- Diretriz Brasileira de Hipertensão Arterial — Sociedade Brasileira de Cardiologia (citada explicitamente pela UERJ em 2023 e 2025).
- Estudo PATHWAY-2 — Espironolactona na Hipertensão Resistente (citado explicitamente pela UERJ em 2023).
- ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults.
`;

export default content.trim();
