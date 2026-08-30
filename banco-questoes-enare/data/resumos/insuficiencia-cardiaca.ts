/**
 * Resumo — Cardiologia · Insuficiência cardíaca.
 *
 * Mantida a estrutura de seções por tipo (não por entidade): o assunto é
 * fundamentalmente sobre UMA doença (insuficiência cardíaca) explorada em
 * profundidade — classificação, farmacologia dirigida por mecanismo,
 * perfis de choque — não uma lista de doenças distintas, então um split
 * por entidade seria artificial aqui (ver critério no resumo de hiv-aids).
 *
 * Cobre as entidades do assunto no corpus: classificação funcional NYHA,
 * espironolactona (benefício de sobrevida), choque cardiogênico
 * frio-úmido (inotrópico e vasopressor), sacubitril/valsartana
 * (farmacologia de BNP e NT-proBNP) e insuficiência cardíaca com fração
 * de ejeção preservada tratada com inibidor de SGLT2. Também traz, como
 * extrapolação de alto rendimento além do que já caiu em prova, a
 * classificação por fração de ejeção, os demais perfis hemodinâmicos do
 * choque cardiogênico (incluindo a escolha entre dobutamina e milrinona
 * conforme uso crônico de betabloqueador), os demais pilares
 * farmacológicos, o manejo da congestão refratária e da deficiência de
 * ferro, a síndrome cardiorrenal, as miocardiopatias específicas
 * (amiloidose AL vs. ATTR, periparto, induzida por taquicardia) e as
 * indicações de dispositivo (CDI/TRC) que completam o manejo da IC crônica.
 */
const content = `
## 🎯 Essencial

- Classificação funcional **NYHA** avalia a limitação de sintomas às atividades: **I** sem limitação; **II** limitação leve (sintomas aos esforços habituais); **III** limitação importante (sintomas aos mínimos esforços); **IV** sintomas em repouso — guia terapia e prognóstico, mas não corresponde diretamente à fração de ejeção.
- **Espironolactona** (antagonista de receptor mineralocorticoide) tem benefício comprovado de **redução de mortalidade** na insuficiência cardíaca com fração de ejeção reduzida, classicamente demonstrado em pacientes NYHA III-IV — é um dos quatro pilares farmacológicos da IC com fração reduzida, junto com IECA/BRA (ou ARNI), betabloqueador e inibidor de SGLT2.
- **Choque cardiogênico "frio-úmido"** (baixo débito + congestão) trata-se com **inotrópico (dobutamina)** para melhorar o débito; se houver hipotensão significativa associada, adicionar **vasopressor (noradrenalina)** para manter a pressão de perfusão — o perfil hemodinâmico (quente/frio, seco/úmido) orienta diretamente a terapia.
- **Sacubitril/valsartana (ARNI)** inibe a neprilisina, enzima que degrada o **BNP** (mas não o NT-proBNP) — por isso, em pacientes em uso de ARNI, os níveis de **BNP sobem artificialmente** e perdem valor para monitorização, enquanto o **NT-proBNP permanece confiável** como marcador de congestão/prognóstico.
- **Inibidores de SGLT2** (dapagliflozina, empagliflozina) reduzem mortalidade cardiovascular e hospitalização por IC em **toda a faixa de fração de ejeção**, incluindo a **IC com fração de ejeção preservada (ICFEp)** — mudança recente de paradigma, já que historicamente poucas classes mostravam benefício claro nesse subgrupo.
- A IC é classificada pela fração de ejeção em três categorias com implicações terapêuticas distintas: **HFrEF** (FE ≤40%, os quatro pilares têm benefício de mortalidade comprovado), **HFmrEF** (FE 41-49%, benefício provável dos mesmos pilares, com evidência mais recente) e **HFpEF/ICFEp** (FE ≥50%, foco em inibidor de SGLT2, controle de comorbidades e diuréticos sintomáticos — sem benefício de mortalidade demonstrado para IECA/BRA/betabloqueador isoladamente nesse grupo).
- O choque cardiogênico tem 4 perfis hemodinâmicos possíveis, não só o frio-úmido: **quente-seco** (compensado), **quente-úmido** (congestão sem baixo débito — vasodilatador + diurético), **frio-seco** (baixo débito sem congestão franca — cautela com volume, inotrópico se hipoperfusão sintomática) e **frio-úmido** (o mais grave, inotrópico ± vasopressor).

## 💎 Pearls

- A classificação NYHA é dinâmica (pode mudar com tratamento ou descompensação) — diferente do estadiamento ACC/AHA (A-D), que é progressivo e não regride. O estágio A representa risco sem doença estrutural, B doença estrutural sem sintomas, C doença estrutural com sintomas atuais/prévios, e D doença refratária avançada.
- O benefício de mortalidade da espironolactona exige monitorização de potássio e função renal — hipercalemia é o principal risco, especialmente associada a IECA/BRA/ARNI.
- No choque cardiogênico, dobutamina isolada pode causar ou agravar hipotensão (efeito vasodilatador beta-2) — daí a necessidade de associar vasopressor quando a pressão arterial já está criticamente baixa.
- Paciente em uso de ARNI que precisa de dosagem de peptídeo natriurético para investigar dispneia aguda deve ter o **NT-proBNP** solicitado, não o BNP.
- O efeito dos inibidores de SGLT2 na IC é independente da presença de diabetes — o benefício cardiovascular ocorre mesmo em pacientes não diabéticos.
- Ao trocar IECA por ARNI, é obrigatório um **intervalo de washout de 36 horas** entre a última dose de IECA e a primeira de sacubitril/valsartana — pular essa janela aumenta o risco de angioedema, pela ação combinada de dois mecanismos que elevam bradicinina.
- **Ivabradina** (inibidor do canal If do nó sinusal) é opção adicional em HFrEF sintomática com frequência cardíaca ≥70 bpm em ritmo sinusal apesar de betabloqueador em dose máxima tolerada — reduz hospitalização, sem benefício de mortalidade isolado comprovado.
- A associação **hidralazina + nitrato** tem benefício de mortalidade demonstrado em HFrEF, com evidência historicamente mais forte em pacientes autodeclarados negros, e é alternativa útil quando IECA/BRA/ARNI são contraindicados (ex.: doença renal avançada, hipercalemia refratária).
- **Cardiodesfibrilador implantável (CDI)** para prevenção primária de morte súbita é indicado em HFrEF com FE ≤35% apesar de terapia otimizada por pelo menos 3 meses; **terapia de ressincronização cardíaca (TRC)** beneficia pacientes com FE reduzida, QRS alargado (especialmente bloqueio de ramo esquerdo ≥150ms) e sintomas persistentes.
- A causa mais comum de IC no mundo é a **doença arterial coronariana** (cardiopatia isquêmica) — sempre investigar isquemia como etiologia de base em IC nova, já que revascularização pode reverter ou estabilizar parte da disfunção (miocárdio hibernante).
- Miocardiopatias específicas (Chagásica, periparto, induzida por taquicardia, infiltrativas como amiloidose) devem entrar no diferencial etiológico de IC em paciente jovem ou sem fatores de risco cardiovascular clássicos — a amiloidose cardíaca, em particular, deve ser suspeitada diante de espessamento ventricular desproporcional à pressão arterial e baixa voltagem ao ECG.
- **Anti-inflamatórios não esteroidais**, **tiazolidinedionas** (glitazonas) e **bloqueadores de canal de cálcio não di-hidropiridínicos** (verapamil, diltiazem) devem ser evitados na HFrEF por risco de retenção hidrossalina ou efeito inotrópico negativo, respectivamente.
- **Resistência a diurético de alça** (congestão persistente apesar de dose otimizada) é manejada por bloqueio sequencial do néfron — associar tiazídico (ex.: metolazona/hidroclorotiazida) potencializa a natriurese ao bloquear o túbulo distal, compensando a reabsorção compensatória induzida pelo diurético de alça isolado.
- **Digoxina** melhora sintomas e reduz hospitalização na HFrEF sintomática apesar de terapia otimizada, mas **não reduz mortalidade** — janela terapêutica estreita exige monitorização de níveis séricos, especialmente em disfunção renal.
- **Deficiência de ferro** (mesmo sem anemia) é comum na IC e piora capacidade funcional — reposição de **ferro IV** (não oral, por má absorção/tolerância no contexto inflamatório da IC) melhora sintomas e reduz hospitalização em paciente com HFrEF e ferritina baixa ou saturação de transferrina reduzida.
- No choque cardiogênico de paciente **em uso crônico de betabloqueador**, a dobutamina (agonista beta-adrenérgico) perde parte do efeito por bloqueio do receptor-alvo — **milrinona** (inibidor da fosfodiesterase-3, mecanismo independente do receptor beta) é a alternativa nesse cenário específico, embora exija mais cautela em disfunção renal (acúmulo) e tenha maior risco de hipotensão/arritmia.
- **Amiloidose cardíaca** tem dois subtipos com conduta bem diferente: **AL** (cadeias leves de imunoglobulina — exige investigação hematológica urgente e quimioterapia, pois é rapidamente progressiva) e **ATTR** (transtirretina, forma selvagem/senil ou hereditária — tratada com **tafamidis**, estabilizador da transtirretina); a cintilografia com pirofosfato de tecnécio positiva **sem** gamopatia monoclonal associada já sugere fortemente ATTR, evitando biópsia na maioria dos casos.
- **Síndrome cardiorrenal** é classificada em 5 tipos conforme o órgão que falha primeiro e a cronicidade (tipo 1: IC aguda causando lesão renal aguda; tipo 2: IC crônica causando DRC; tipo 3: lesão renal aguda causando IC aguda; tipo 4: DRC causando IC crônica; tipo 5: doença sistêmica lesando os dois simultaneamente) — a tipagem orienta qual órgão tratar primeiro.
- **Cardiomiopatia periparto** deve ser lembrada em IC nova no último mês de gestação até 5 meses pós-parto sem outra causa identificada — bromocriptina (inibe prolactina, reduzindo um fragmento de prolactina implicado na fisiopatologia) é terapia adjuvante específica além do tratamento padrão de IC (com anticoagulação profilática, pelo estado de hipercoagulabilidade somado ao risco trombótico da FE muito reduzida).
- **Cardiomiopatia de Takotsubo** ("coração partido") mimetiza IAM com supra de ST e disfunção ventricular aguda, tipicamente após estresse emocional/físico intenso, mas com **coronárias angiograficamente normais** e recuperação da função em semanas — diferencial importante de IC aguda nova em paciente sem fator de risco coronariano clássico.
- Nível terapêutico-alvo de **digoxina** hoje é mais baixo do que se pensava (0,5-0,9 ng/mL) — níveis mais altos aumentam mortalidade sem benefício sintomático adicional; hipocalemia potencializa a toxicidade digitálica mesmo com nível sérico "normal".

## ⚠️ Pitfalls

- Usar a classificação NYHA como sinônimo de fração de ejeção ou de estágio estrutural da doença — são conceitos relacionados, mas não equivalentes.
- Deixar de considerar espironolactona pelo receio de hipercalemia sem antes tentar o manejo adequado (monitorização, ajuste de dose) — perde-se um pilar com benefício de sobrevida comprovado.
- Escolher apenas vasopressor (sem inotrópico) no choque cardiogênico frio-úmido — sem melhorar o componente de baixo débito, não se resolve a causa principal do choque.
- Solicitar ou interpretar BNP (em vez de NT-proBNP) para monitorizar congestão em paciente já em uso de sacubitril/valsartana — leva a interpretação equivocada de piora clínica.
- Achar que inibidor de SGLT2 só tem indicação em IC com fração reduzida — hoje é recomendado também na ICFEp.
- Trocar IECA por ARNI sem respeitar o intervalo de 36h de washout — risco de angioedema.
- Prescrever verapamil/diltiazem ou AINE de rotina em paciente com HFrEF sintomática — pode precipitar descompensação.
- Deixar de reavaliar indicação de CDI/TRC em paciente que permanece com FE ≤35% após otimização plena da terapia por 3 meses.
- Escalonar apenas a dose do diurético de alça em paciente com congestão refratária, sem considerar bloqueio sequencial do néfron com tiazídico.
- Repor ferro por via oral em paciente com IC e deficiência de ferro, esperando o mesmo benefício da via IV — a absorção oral é pouco confiável nesse contexto inflamatório.
- Interpretar BNP/NT-proBNP isoladamente sem considerar fatores confundidores (obesidade reduz, disfunção renal e idade avançada elevam os níveis independentemente da congestão).
- Manter dobutamina como inotrópico "padrão" em paciente sob betabloqueio crônico sem considerar milrinona — o bloqueio do receptor beta reduz a resposta esperada à dobutamina.
- Investigar amiloidose cardíaca só por biópsia endomiocárdica de rotina, sem antes solicitar cintilografia com pirofosfato e rastrear gamopatia monoclonal — a combinação dos dois evita biópsia na maioria dos casos de ATTR.

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

A fisiopatologia da ICFEp difere da HFrEF: em vez de perda de força contrátil, há relaxamento ventricular anormal (disfunção diastólica) e rigidez miocárdica aumentada, frequentemente associadas a um estado pró-inflamatório sistêmico ligado a comorbidades cardiometabólicas (hipertensão, diabetes, obesidade) — o que explica por que classes que atuam na neuro-hormonal clássica (IECA/BRA/betabloqueador) tiveram resultado neutro em mortalidade nesse grupo, enquanto os inibidores de SGLT2, com mecanismo mais amplo (natriurese osmótica, efeitos metabólicos e anti-inflamatórios), mostraram benefício consistente.

## 🩺 Quadro clínico

- **NYHA I-II:** assintomático ou sintomas leves aos esforços habituais.
- **NYHA III-IV:** dispneia a mínimos esforços ou em repouso, ortopneia, edema, fadiga importante.
- **Choque cardiogênico frio-úmido:** extremidades frias, tempo de enchimento capilar prolongado, hipotensão ou pressão de pulso estreita, estertores pulmonares, turgência jugular.
- **ICFEp:** dispneia aos esforços, sinais de congestão, fração de ejeção preservada ao ecocardiograma, geralmente em idosos, hipertensos, diabéticos ou obesos.
- **Insuficiência cardíaca direita/cor pulmonale:** turgência jugular, hepatomegalia congestiva, edema de membros inferiores, ascite em casos avançados — pode ocorrer isolada (hipertensão pulmonar, doença pulmonar crônica) ou como evolução da IC esquerda crônica.
- **Edema agudo de pulmão:** dispneia súbita e intensa, ortopneia, estertores crepitantes difusos bilaterais, uso de musculatura acessória, podendo haver expectoração rósea espumosa nos casos mais graves — emergência que exige diurético IV, vasodilatador e suporte ventilatório imediatos.
- **Síndrome cardiorrenal:** piora concomitante da função cardíaca e renal, com resistência a diuréticos e retenção volêmica progressiva — reflete a interdependência hemodinâmica e neuro-hormonal entre os dois órgãos.
- **Deficiência de ferro na IC:** fadiga desproporcional ao grau de congestão, redução da capacidade de exercício, podendo ou não haver anemia associada — rastrear ferritina e saturação de transferrina rotineiramente em HFrEF sintomática.

## 🔎 Diagnóstico

- **Peptídeos natriuréticos:** BNP >100 pg/mL ou NT-proBNP >300 pg/mL têm boa sensibilidade para descartar IC aguda em paciente com dispneia; valores muito elevados aumentam a probabilidade diagnóstica, mas obesidade reduz e insuficiência renal/idade avançada elevam os níveis independentemente da IC — sempre interpretar no contexto clínico.
- **Ecocardiograma transtorácico** é o exame central para classificar a IC pela fração de ejeção, avaliar tamanho/função das câmaras, valvas e estimar pressões de enchimento — deve ser feito em todo paciente com IC nova ou suspeita.
- **Eletrocardiograma:** pode sugerir a etiologia (área inativa por infarto prévio, sobrecarga de câmaras, arritmias) e é obrigatório antes de indicar dispositivos (avaliação de QRS para TRC).
- **Radiografia de tórax:** cardiomegalia, congestão vascular pulmonar, derrame pleural — útil na avaliação inicial de dispneia aguda, mas normal não exclui IC.
- **Cateterismo cardíaco direito:** reservado a casos de dúvida diagnóstica em choque cardiogênico ou para diferenciar perfis hemodinâmicos quando o exame clínico é inconclusivo.
- **Investigação de miocardiopatia infiltrativa (amiloidose):** cintilografia com pirofosfato de tecnécio é altamente sugestiva quando positiva na ausência de gamopatia monoclonal; ressonância cardíaca com realce tardio de gadolínio também auxilia.

## 💊 Tratamento

- **IC com fração reduzida:** os quatro pilares — IECA/BRA (ou ARNI de preferência), betabloqueador, antagonista de receptor mineralocorticoide (espironolactona/eplerenona) e inibidor de SGLT2 — introduzidos e titulados o quanto antes.
- **Choque cardiogênico frio-úmido:** dobutamina como inotrópico inicial; associar noradrenalina se hipotensão significativa; considerar suporte circulatório mecânico em casos refratários.
- **Choque cardiogênico quente-úmido:** vasodilatador (nitroprussiato/nitroglicerina) + diurético, sem necessidade de inotrópico.
- **ICFEp:** inibidor de SGLT2 com benefício comprovado; controle rigoroso de comorbidades (hipertensão, fibrilação atrial, diabetes, obesidade); diuréticos para controle de congestão.
- **HFrEF refratária a terapia otimizada:** avaliar indicação de CDI (prevenção primária, FE ≤35%) e TRC (QRS alargado, especialmente com bloqueio de ramo esquerdo).
- **HFrEF sintomática com FC elevada apesar de betabloqueador máximo:** considerar ivabradina; hidralazina + nitrato como alternativa/complemento quando IECA/BRA/ARNI não puderem ser usados.
- **Monitorização em uso de ARNI:** usar NT-proBNP, não BNP, para acompanhar resposta terapêutica/congestão.
- **Congestão refratária a diurético de alça:** bloqueio sequencial do néfron associando tiazídico, com monitorização rigorosa de eletrólitos.
- **Deficiência de ferro em HFrEF:** reposição de ferro IV (carboximaltose férrica) mesmo sem anemia associada, se ferritina baixa ou saturação de transferrina reduzida.
- **Sintomas persistentes em HFrEF apesar de terapia otimizada:** digoxina como adjuvante para controle sintomático, sem expectativa de benefício de mortalidade.
- **Edema agudo de pulmão:** diurético de alça IV em dose alta, vasodilatador (nitroglicerina) se pressão arterial permitir, suporte ventilatório não invasivo precoce (CPAP/BiPAP) para reduzir necessidade de intubação.
- **Choque cardiogênico em uso crônico de betabloqueador:** milrinona em vez de (ou associada a) dobutamina, com monitorização mais rigorosa de função renal e pressão arterial.
- **Amiloidose cardíaca:** tafamidis para ATTR (selvagem ou hereditária); quimioterapia dirigida (esquemas com daratumumabe) para AL, encaminhamento hematológico urgente.
- **Cardiomiopatia periparto:** tratamento padrão de IC compatível com gestação/amamentação + bromocriptina + anticoagulação profilática enquanto a FE estiver muito reduzida.
- **Síndrome cardiorrenal:** tratar o órgão que falhou primeiro conforme o tipo (1-5); otimizar volemia é o ponto comum, evitando tanto hipervolemia (piora cardíaca) quanto diurese excessiva (piora renal).

## 📚 Referências essenciais

- Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda — Sociedade Brasileira de Cardiologia (SBC).
- ACC/AHA/HFSA Guideline for the Management of Heart Failure.
- ESC Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure.
- ESC Guidelines on cardiac pacing and cardiac resynchronization therapy.
`;

export default content.trim();
