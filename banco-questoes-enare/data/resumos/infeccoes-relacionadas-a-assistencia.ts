/**
 * Resumo — Infectologia · Infecções relacionadas à assistência.
 *
 * Cobre as entidades do assunto no corpus: prevenção de infecção
 * hospitalar (higiene das mãos), colite por Clostridioides difficile
 * (teste molecular, apresentação inicial e forma recorrente/refratária)
 * e bacteremia por Staphylococcus aureus relacionada a cateter.
 */
const content = `
## 🎯 Essencial

- A **higiene das mãos** é a medida isolada mais eficaz de prevenção de infecção relacionada à assistência — os **"5 momentos" da OMS** (antes de tocar o paciente, antes de procedimento asséptico, após risco de exposição a fluido corporal, após tocar o paciente, após tocar superfícies próximas ao paciente) estruturam quando higienizar, com preferência por **álcool gel** exceto quando há sujidade visível ou suspeita de C. difficile (esporos resistem ao álcool — lavar com água e sabão).
- **Colite por Clostridioides difficile:** diagnóstico ideal combina **teste de amplificação de ácido nucleico (PCR/NAAT)** com detecção de toxina (EIA) ou antígeno GDH — NAAT isolado pode detectar apenas colonização, não necessariamente doença ativa; testar somente fezes diarreicas, nunca em paciente assintomático.
- Tratamento de primeira linha do C. difficile: **vancomicina oral ou fidaxomicina** — metronidazol não é mais primeira escolha (reservado a indisponibilidade dos agentes preferenciais ou doença leve em contexto de recurso limitado).
- C. difficile **recorrente/refratário:** considerar fidaxomicina, vancomicina em esquema de pulso/redução gradual, ou **transplante de microbiota fecal** em recorrências múltiplas.
- **Bacteremia por Staphylococcus aureus associada a cateter:** exige **remoção do cateter**, hemoculturas de controle para confirmar clareamento, investigação de foco secundário (ecocardiograma para excluir endocardite, pela alta virulência do S. aureus) e duração do tratamento definida conforme complicação (bacteremia não complicada vs. complicada/endocardite).

## 💎 Pearls

- Álcool gel não elimina esporos de C. difficile — em suspeita ou confirmação dessa infecção, a orientação correta é **lavagem com água e sabão**, além de precaução de contato.
- Um NAAT/PCR positivo isolado para C. difficile pode representar apenas colonização assintomática — por isso algoritmos atuais recomendam confirmar com detecção de toxina antes de tratar, especialmente em diarreia leve com outra causa possível.
- Fidaxomicina tem menor taxa de recorrência que vancomicina, por ação mais poupadora da microbiota intestinal normal — vantagem relevante em paciente de alto risco de recidiva.
- Toda bacteremia por S. aureus deve ser tratada como potencialmente complicada até prova em contrário, mesmo com foco aparentemente claro (cateter) — a busca ativa por endocardite/foco metastático é obrigatória.
- Vigilância de infecção relacionada à assistência não deve ser confundida com tratamento — colonização assintomática por C. difficile ou MRSA não indica antibioticoterapia.

## ⚠️ Pitfalls

- Usar apenas álcool gel nas mãos ao cuidar de paciente com suspeita de C. difficile — não elimina esporos.
- Tratar como colite por C. difficile todo paciente com NAAT positivo, independentemente de toxina/quadro clínico — supertratamento de colonização.
- Prescrever metronidazol como primeira linha para C. difficile fora de cenário de indisponibilidade dos agentes preferenciais — conduta ultrapassada.
- Retirar o cateter em bacteremia por S. aureus e considerar o caso resolvido, sem investigar endocardite/foco secundário nem repetir hemoculturas de controle.
- Testar fezes formadas ("vigilância") para C. difficile em paciente assintomático — gera resultados falso-positivos por colonização e tratamento desnecessário.

## 📝 Como a banca cobra

**Infecções relacionadas à assistência aparece em 5 questões (2,36% do corpus)** — 2 do EBSERH e 3 do ENARE, com forte concentração em colite por Clostridioides difficile (3 das 5 questões), além de prevenção geral e bacteremia relacionada a cateter.

- **Higiene das mãos** (EBSERH 2025 Q51) cobra os fundamentos de prevenção — momentos corretos e escolha entre álcool gel e água e sabão.
- **Colite por C. difficile** apareceu 3 vezes: teste molecular/algoritmo diagnóstico (EBSERH 2026 Q40), forma recorrente/refratária (ENARE 2025 Q16) e apresentação inicial típica (ENARE 2026 Q68) — vale dominar o algoritmo diagnóstico completo e a escada terapêutica (inicial → recorrente).
- **Bacteremia por S. aureus relacionada a cateter** (ENARE 2025 Q29) testa a conduta completa: remoção do dispositivo + investigação de foco secundário.

## 🧠 Conceito e fisiopatologia

A transmissão cruzada de patógenos hospitalares ocorre predominantemente pelas mãos da equipe assistencial — por isso a higienização nos momentos certos interrompe a cadeia de transmissão antes mesmo de qualquer outra barreira (luvas, isolamento). Álcool gel é eficaz contra a maioria das formas vegetativas bacterianas e vírus envelopados, mas **não** contra esporos, forma de resistência ambiental do C. difficile — daí a exigência de água e sabão nesse cenário específico.

C. difficile causa colite por produção de **toxinas A e B**, que danificam o citoesqueleto de actina das células epiteliais do cólon, gerando inflamação, perda da barreira epitelial e, em casos graves, pseudomembranas. O uso prévio de antibióticos de amplo espectro rompe a microbiota protetora do cólon, permitindo a proliferação da bactéria (endógena ou adquirida) e a expressão de sua toxina.

Bacteremia relacionada a cateter ocorre por colonização do biofilme na superfície do dispositivo — S. aureus é particularmente virulento e tem tropismo por endocárdio e material protético, justificando a investigação sistemática de disseminação hematogênica.

## 🔎 Diagnóstico

- **C. difficile:** algoritmo de dois passos — GDH antigen ou NAAT como triagem de alta sensibilidade, seguido de EIA de toxina para confirmar doença ativa em amostra positiva na triagem; testar só fezes não formadas.
- **Bacteremia por S. aureus:** hemoculturas seriadas até negativação, ecocardiograma (transtorácico e, se dúvida, transesofágico) para excluir endocardite, avaliação de foco metastático (óssea, articular, abscessos).

## 💊 Tratamento

- **C. difficile inicial:** vancomicina oral ou fidaxomicina.
- **C. difficile recorrente:** fidaxomicina, vancomicina em esquema prolongado/pulsado, ou transplante de microbiota fecal em recorrências múltiplas.
- **Bacteremia por S. aureus relacionada a cateter:** remoção do cateter, antibioticoterapia dirigida (oxacilina/cefazolina se sensível à meticilina, vancomicina se MRSA), duração conforme complicação (mínimo 2 semanas se não complicada e sem fatores de risco; 4-6 semanas se complicada/endocardite).
- **Prevenção geral:** higienização das mãos nos 5 momentos, precauções de contato para C. difficile, pacotes de prevenção (bundles) para inserção e manutenção de cateter.

## 📚 Referências essenciais

- Segurança do Paciente em Serviços de Saúde: Higiene das Mãos — Ministério da Saúde/ANVISA (2ª edição), adota os "5 momentos" da OMS na prática brasileira.
- Medidas de Prevenção de Infecção Relacionada à Assistência à Saúde — ANVISA (Segurança do Paciente).
- IDSA/SHEA Clinical Practice Guidelines for Clostridioides difficile Infection (sem PCDT brasileiro equivalente para este tratamento específico).
- IDSA Clinical Practice Guidelines for the Management of Intravascular Catheter-Related Infection (sem PCDT brasileiro equivalente).
`;

export default content.trim();
