/**
 * Resumo — Cardiologia · Insuficiência cardíaca.
 *
 * Cobre as entidades do assunto no corpus: classificação funcional NYHA,
 * espironolactona (benefício de sobrevida), choque cardiogênico
 * frio-úmido (inotrópico e vasopressor), sacubitril/valsartana
 * (farmacologia de BNP e NT-proBNP) e insuficiência cardíaca com fração
 * de ejeção preservada tratada com inibidor de SGLT2.
 */
const content = `
## 🎯 Essencial

- Classificação funcional **NYHA** avalia a limitação de sintomas às atividades: **I** sem limitação; **II** limitação leve (sintomas aos esforços habituais); **III** limitação importante (sintomas aos mínimos esforços); **IV** sintomas em repouso — guia terapia e prognóstico, mas não corresponde diretamente à fração de ejeção.
- **Espironolactona** (antagonista de receptor mineralocorticoide) tem benefício comprovado de **redução de mortalidade** na insuficiência cardíaca com fração de ejeção reduzida, classicamente demonstrado em pacientes NYHA III-IV — é um dos quatro pilares farmacológicos da IC com fração reduzida, junto com IECA/BRA (ou ARNI), betabloqueador e inibidor de SGLT2.
- **Choque cardiogênico "frio-úmido"** (baixo débito + congestão) trata-se com **inotrópico (dobutamina)** para melhorar o débito; se houver hipotensão significativa associada, adicionar **vasopressor (noradrenalina)** para manter a pressão de perfusão — o perfil hemodinâmico (quente/frio, seco/úmido) orienta diretamente a terapia.
- **Sacubitril/valsartana (ARNI)** inibe a neprilisina, enzima que degrada o **BNP** (mas não o NT-proBNP) — por isso, em pacientes em uso de ARNI, os níveis de **BNP sobem artificialmente** e perdem valor para monitorização, enquanto o **NT-proBNP permanece confiável** como marcador de congestão/prognóstico.
- **Inibidores de SGLT2** (dapagliflozina, empagliflozina) reduzem mortalidade cardiovascular e hospitalização por IC em **toda a faixa de fração de ejeção**, incluindo a **IC com fração de ejeção preservada (ICFEp)** — mudança recente de paradigma, já que historicamente poucas classes mostravam benefício claro nesse subgrupo.

## 💎 Pearls

- A classificação NYHA é dinâmica (pode mudar com tratamento ou descompensação) — diferente do estadiamento ACC/AHA (A-D), que é progressivo e não regride.
- O benefício de mortalidade da espironolactona exige monitorização de potássio e função renal — hipercalemia é o principal risco, especialmente associada a IECA/BRA/ARNI.
- No choque cardiogênico, dobutamina isolada pode causar ou agravar hipotensão (efeito vasodilatador beta-2) — daí a necessidade de associar vasopressor quando a pressão arterial já está criticamente baixa.
- Paciente em uso de ARNI que precisa de dosagem de peptídeo natriurético para investigar dispneia aguda deve ter o **NT-proBNP** solicitado, não o BNP.
- O efeito dos inibidores de SGLT2 na IC é independente da presença de diabetes — o benefício cardiovascular ocorre mesmo em pacientes não diabéticos.

## ⚠️ Pitfalls

- Usar a classificação NYHA como sinônimo de fração de ejeção ou de estágio estrutural da doença — são conceitos relacionados, mas não equivalentes.
- Deixar de considerar espironolactona pelo receio de hipercalemia sem antes tentar o manejo adequado (monitorização, ajuste de dose) — perde-se um pilar com benefício de sobrevida comprovado.
- Escolher apenas vasopressor (sem inotrópico) no choque cardiogênico frio-úmido — sem melhorar o componente de baixo débito, não se resolve a causa principal do choque.
- Solicitar ou interpretar BNP (em vez de NT-proBNP) para monitorizar congestão em paciente já em uso de sacubitril/valsartana — leva a interpretação equivocada de piora clínica.
- Achar que inibidor de SGLT2 só tem indicação em IC com fração reduzida — hoje é recomendado também na ICFEp.

## 📝 Como a banca cobra

**Insuficiência cardíaca aparece em 5 questões (2,36% do corpus)** — 4 do EBSERH e 1 do ENARE, com foco em farmacologia dirigida por mecanismo e em classificação/estratificação clínica, mais do que em diagnóstico inicial.

- **Classificação funcional NYHA** (EBSERH 2025 Q33) testa o domínio dos critérios de cada classe.
- **Espironolactona** (EBSERH 2025 Q59) cobra o conhecimento específico do benefício de sobrevida, não só o efeito diurético poupador de potássio.
- **Choque cardiogênico frio-úmido** (EBSERH 2026 Q31) exige reconhecer o perfil hemodinâmico e escolher a combinação correta de inotrópico e vasopressor.
- **Sacubitril/valsartana** (EBSERH 2026 Q34) cobra um detalhe farmacológico fino — a diferença de comportamento entre BNP e NT-proBNP sob inibição da neprilisina.
- **ICFEp e inibidor de SGLT2** (ENARE 2025 Q41) reflete a atualização mais recente das diretrizes de IC, testando se o candidato sabe que o benefício não se limita à fração reduzida.

## 🧠 Conceito e fisiopatologia

Na insuficiência cardíaca com fração reduzida, a ativação neuro-hormonal compensatória (sistema renina-angiotensina-aldosterona e sistema nervoso simpático) inicialmente sustenta o débito cardíaco, mas cronicamente promove remodelamento cardíaco deletério, retenção de sódio/água e fibrose — daí o benefício de bloquear essas vias com IECA/BRA/ARNI, betabloqueador e antagonista de mineralocorticoide, cada um mostrando redução de mortalidade em ensaios clínicos distintos.

O sistema dos peptídeos natriuréticos (BNP e seu fragmento inativo NT-proBNP, liberados em resposta ao estiramento miocárdico) é normalmente degradado pela neprilisina. Ao inibir essa enzima, o sacubitril aumenta os níveis circulantes de BNP ativo (efeito terapêutico desejado — vasodilatação, natriurese), mas como consequência os níveis séricos de BNP deixam de refletir fielmente a real condição hemodinâmica do paciente; o NT-proBNP, por não ser substrato da neprilisina, mantém sua correlação com a gravidade da congestão.

No choque cardiogênico, a classificação hemodinâmica por perfil (perfusão adequada/inadequada = quente/frio; congestão presente/ausente = úmido/seco) orienta diretamente a escolha terapêutica: o perfil frio-úmido reflete baixo débito com congestão, exigindo suporte inotrópico para melhorar a contratilidade, associado a vasopressor quando há hipotensão que compromete a perfusão de órgãos-alvo.

## 🩺 Quadro clínico

- **NYHA I-II:** assintomático ou sintomas leves aos esforços habituais.
- **NYHA III-IV:** dispneia a mínimos esforços ou em repouso, ortopneia, edema, fadiga importante.
- **Choque cardiogênico frio-úmido:** extremidades frias, tempo de enchimento capilar prolongado, hipotensão ou pressão de pulso estreita, estertores pulmonares, turgência jugular.
- **ICFEp:** dispneia aos esforços, sinais de congestão, fração de ejeção preservada ao ecocardiograma, geralmente em idosos, hipertensos, diabéticos ou obesos.

## 💊 Tratamento

- **IC com fração reduzida:** os quatro pilares — IECA/BRA (ou ARNI de preferência), betabloqueador, antagonista de receptor mineralocorticoide (espironolactona/eplerenona) e inibidor de SGLT2 — introduzidos e titulados o quanto antes.
- **Choque cardiogênico frio-úmido:** dobutamina como inotrópico inicial; associar noradrenalina se hipotensão significativa; considerar suporte circulatório mecânico em casos refratários.
- **ICFEp:** inibidor de SGLT2 com benefício comprovado; controle rigoroso de comorbidades (hipertensão, fibrilação atrial, diabetes, obesidade); diuréticos para controle de congestão.
- **Monitorização em uso de ARNI:** usar NT-proBNP, não BNP, para acompanhar resposta terapêutica/congestão.

## 📚 Referências essenciais

- Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda — Sociedade Brasileira de Cardiologia (SBC).
- ACC/AHA/HFSA Guideline for the Management of Heart Failure.
- ESC Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure.
`;

export default content.trim();
