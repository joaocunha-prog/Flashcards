/**
 * Resumo — Gastroenterologia e Hepatologia · Cirrose e complicações.
 *
 * Cobre as entidades do assunto no corpus: ascite por cirrose hepática
 * (GASA e proteína do líquido), ascite por hepatopatia congestiva,
 * peritonite bacteriana espontânea, ascite por carcinomatose peritoneal
 * (GASA baixo) e síndrome hepatorrenal (terlipressina e albumina).
 * Também traz, como extrapolação de alto rendimento além do que já caiu em
 * prova, as demais grandes complicações da cirrose descompensada
 * (hemorragia varicosa, encefalopatia hepática, hepatocarcinoma) e os
 * escores de gravidade (Child-Pugh, MELD).
 */
const content = `
## 🎯 Essencial

- **GASA (gradiente albumina soro-ascite) ≥1,1** indica hipertensão portal (transudato) — cirrose, hepatopatia congestiva (ICC, Budd-Chiari, pericardite constritiva). **GASA <1,1** afasta hipertensão portal — pensar em carcinomatose peritoneal, tuberculose peritoneal, síndrome nefrótica, pancreatite.
- Dentro do grupo GASA ≥1,1, a **proteína total do líquido ascítico** diferencia a causa: **<2,5 g/dL sugere cirrose**; **≥2,5 g/dL sugere causa cardíaca/congestiva** (ICC, Budd-Chiari, pericardite constritiva).
- **Peritonite bacteriana espontânea (PBE):** diagnóstico é **PMN ≥250/mm³** no líquido ascítico, independentemente do resultado da cultura. Tratamento: **cefalosporina de 3ª geração (cefotaxima)** + **albumina IV** (1,5 g/kg no dia 1, 1 g/kg no dia 3) se creatinina >1, ureia elevada ou bilirrubina >4 — reduz mortalidade e insuficiência renal.
- **Síndrome hepatorrenal:** vasoconstritor esplâncnico — **terlipressina + albumina IV** — é o tratamento de escolha; noradrenalina + albumina em UTI é alternativa. Tratamento definitivo é **transplante hepático**.
- **Carcinomatose peritoneal:** ascite com **GASA baixo (<1,1)**, geralmente proteína alta, confirmada por citologia oncótica.
- **Profilaxia de PBE:** secundária (todo paciente pós-episódio) e primária (proteína do líquido <1,5 g/dL associada a disfunção renal/hepática, ou em sangramento digestivo agudo) com norfloxacino.
- Além da ascite/PBE/SHR, a cirrose descompensada cursa com outras complicações que merecem domínio equivalente: **hemorragia digestiva por varizes esofagogástricas**, **encefalopatia hepática** e **carcinoma hepatocelular** — as quatro grandes descompensações que definem prognóstico e indicação de transplante.
- A transição de cirrose compensada para descompensada (definida pelo primeiro evento de ascite, sangramento varicoso, encefalopatia ou icterícia) marca uma queda abrupta na sobrevida esperada e deve disparar avaliação para transplante hepático em centro de referência.
- **Hidrotórax hepático:** derrame pleural (predominantemente à direita) por passagem de líquido ascítico através de defeitos diafragmáticos — pode ocorrer mesmo com ascite discreta ou clinicamente ausente, e o tratamento segue a mesma lógica da ascite refratária (evitar toracocentese seriada isolada sem otimizar o manejo da ascite/TIPS). Drenagem torácica com dreno de longa permanência é contraindicada pelo alto risco de infecção e depleção proteico-eletrolítica.

## 💎 Pearls

- Não existe corte de proteína isolado que diagnostique cirrose — sempre combinar **GASA + proteína total** para diferenciar transudato por hipertensão portal hepática de transudato congestivo.
- PBE pode cursar com **cultura negativa** (peritonite bacteriana neutrocítica cultura-negativa) — não descarta o diagnóstico nem adia o tratamento se PMN ≥250.
- Albumina na PBE não é rotina universal — reservada a critérios de gravidade (creatinina >1, ureia alta, bilirrubina >4) pelo risco de evoluir para síndrome hepatorrenal.
- A nomenclatura atual da síndrome hepatorrenal (critérios ICA-AKI, 2015) substituiu "tipo 1/tipo 2" por **HRS-AKI** (início agudo, correspondendo ao antigo tipo 1) e **HRS-NAKI** (curso mais indolente, correspondendo ao antigo tipo 2); o tipo agudo evolui em dias e tem pior prognóstico.
- Hepatopatia congestiva (sobretudo pericardite constritiva) pode simular ascite cirrótica isolada — atentar a sinais de congestão sistêmica (turgência jugular, hepatomegalia dolorosa).
- Ascite refratária é definida como aquela que não responde a dose máxima de diuréticos ou que recidiva rapidamente após paracentese, apesar de restrição sódica — indicação de TIPS ou paracenteses seriadas de repetição.
- Suspeitar de **peritonite bacteriana secundária** (não espontânea) quando houver múltiplos organismos na cultura, PMN muito elevado, glicose baixa e LDH alta no líquido — indica perfuração ou abscesso intra-abdominal e exige avaliação cirúrgica/imagem, não só antibiótico.
- Restrição proteica na dieta do cirrótico é conduta **ultrapassada e prejudicial** — favorece sarcopenia sem reduzir encefalopatia; a recomendação atual é manter ingesta proteica adequada (1,2-1,5 g/kg/dia).
- MELD-Na incorpora o sódio sérico porque hiponatremia dilucional é marcador independente de mau prognóstico na cirrose descompensada, mesmo em pacientes com MELD "clássico" moderado.
- Betabloqueador não seletivo deve ser suspenso ou ter a dose reduzida em PBE com choque séptico ou síndrome hepatorrenal estabelecida — nesse contexto, o efeito de reduzir o débito cardíaco pode comprometer ainda mais a perfusão renal ("janela terapêutica" do betabloqueador na cirrose avançada).
- Ascite quilosa (líquido leitoso, triglicérides >200 mg/dL) e ascite hemorrágica sugerem etiologia diferente da cirrótica isolada (obstrução linfática, neoplasia, trauma) e devem ser investigadas especificamente, não apenas atribuídas a "descompensação hepática habitual".
- TIPS (shunt portossistêmico transjugular intra-hepático) reduz a pressão portal de forma eficaz, mas o desvio do sangue porta para a circulação sistêmica pode precipitar ou agravar encefalopatia hepática — contraindicado relativo em paciente com encefalopatia recorrente/grave não controlada.

## ⚠️ Pitfalls

- Usar cultura negativa do líquido ascítico para descartar PBE — o critério diagnóstico é PMN ≥250; a cultura só orienta o antibiótico.
- Deixar de administrar albumina na PBE em paciente com creatinina elevada — perde-se a chance de reduzir mortalidade e insuficiência renal.
- Assumir toda ascite em cirrótico como hipertensão portal isolada sem checar GASA/proteína quando há suspeita de segunda causa (ex.: carcinomatose sobreposta).
- Prolongar diuréticos e expansão volêmica na síndrome hepatorrenal sem escalonar para vasoconstritor — o atraso piora o desfecho renal.
- Esquecer profilaxia com norfloxacino em paciente com proteína baixa no líquido e alto risco de PBE.
- Tratar PBE com o mesmo esquema de uma peritonite secundária (ou vice-versa) sem atentar aos sinais de alerta (múltiplos germes, resposta inadequada em 48h) que pedem investigação cirúrgica.
- Restringir proteína na dieta do cirrótico "para prevenir encefalopatia" — hoje contraindicado; a estratégia correta é tratar a encefalopatia com lactulose/rifaximina mantendo aporte proteico adequado.
- Não rastrear hepatocarcinoma semestralmente em cirrótico estável, adiando o exame "para quando surgir sintoma" — o benefício do rastreio está exatamente em detectar o tumor ainda assintomático e ressecável/tratável.
- Deixar de repetir a paracentese diagnóstica em cirrótico internado por outro motivo que evolui com piora clínica — reinternação ou piora aguda sempre deve reacender a suspeita de PBE, mesmo sem dor abdominal evidente.

## 📝 Como a banca cobra

**Cirrose e complicações aparece em 6 questões (2,83% do corpus)** — 5 do ENARE (2025 e 2026) e 1 do EBSERH, com forte concentração em interpretação de líquido ascítico e reconhecimento de complicações graves da cirrose.

- **Ascite por cirrose (GASA e proteína)** (ENARE 2025 Q8) testa o uso combinado de GASA e proteína total para firmar a etiologia.
- **Ascite por hepatopatia congestiva** (ENARE 2025 Q40) cobra o mesmo raciocínio pelo lado cardíaco — proteína alta com GASA elevado.
- **Peritonite bacteriana espontânea** (ENARE 2026 Q16) exige o critério diagnóstico correto (PMN ≥250) e a conduta terapêutica completa.
- **Ascite por carcinomatose peritoneal (GASA baixo)** apareceu 2 vezes (ENARE 2026 Q40 e ENARE 2026 Q79) — vinheta recorrente que reforça a lógica de GASA baixo como sinal de ausência de hipertensão portal.
- **Síndrome hepatorrenal** (EBSERH 2026 Q39) cobra especificamente a combinação terlipressina + albumina como tratamento de escolha.

## 🧠 Conceito e fisiopatologia

A hipertensão portal aumenta a pressão hidrostática nos sinusoides hepáticos e no leito esplâncnico, favorecendo extravasamento de líquido rico em água e pobre em proteína (na cirrose, sinusoides já lesados filtram menos proteína) para a cavidade peritoneal — daí o GASA alto e a proteína tipicamente baixa. Quando a congestão é pós-sinusoidal, de origem cardíaca (ICC, pericardite constritiva, Budd-Chiari), a pressão se transmite antes de o sinusoide estar cronicamente danificado, permitindo maior passagem de proteína — GASA continua alto, mas a proteína do líquido é maior.

A PBE resulta de translocação bacteriana da flora intestinal através dos linfáticos mesentéricos, colonizando um líquido ascítico já vulnerável pela baixa atividade opsonizante (proteína baixa reduz a capacidade bactericida do próprio líquido).

Na síndrome hepatorrenal, a vasodilatação esplâncnica extrema (mediada por óxido nítrico) ativa o sistema renina-angiotensina-aldosterona e o sistema nervoso simpático, causando vasoconstrição renal intensa sem lesão estrutural — por isso o quadro é potencialmente reversível com vasoconstritores sistêmicos associados a expansão com albumina.

A hipertensão portal também dilata colaterais portossistêmicas (varizes esofagogástricas, circulação colateral abdominal) e desvia amônia e outras toxinas nitrogenadas da circulação porta-hepática diretamente para a sistêmica, contribuindo para a encefalopatia hepática — mecanismo distinto (funcional/neurotransmissor, agravado por shunts) do edema citotóxico agudo visto na insuficiência hepática aguda.

A síndrome hepatopulmonar e a hipertensão portopulmonar são complicações vasculares pulmonares menos lembradas da cirrose: na primeira, vasodilatação intrapulmonar causa hipoxemia (platipneia-ortodeóxia — piora da saturação ao sentar); na segunda, remodelamento vascular pulmonar eleva a pressão da artéria pulmonar, podendo contraindicar transplante se grave e não tratada previamente.

O hepatocarcinoma na cirrose surge predominantemente sobre um fígado já com ciclos repetidos de lesão-regeneração celular, que acumulam mutações — por isso o risco existe independentemente da etiologia da cirrose (viral, alcoólica, metabólica), justificando o rastreio universal semestral com imagem em todo paciente cirrótico, e não apenas nos de etiologia viral.

## 🩺 Quadro clínico

- **Ascite:** aumento do volume abdominal, macicez móvel e piparote positivo ao exame, ganho de peso; classificada em graus 1 (só detectável por imagem), 2 (moderada, distensão simétrica) e 3 (tensa, volumosa).
- **PBE:** pode ser oligossintomática — febre baixa, dor abdominal discreta ou apenas piora inexplicada da função renal/encefalopatia em cirrótico com ascite; alto índice de suspeição é essencial, pois até 1/3 dos casos não tem dor abdominal clássica.
- **Síndrome hepatorrenal:** oligúria progressiva, ausência de melhora com expansão volêmica, geralmente em paciente com ascite refratária ou PBE recente.
- **Hemorragia varicosa:** hematêmese e/ou melena de início súbito, podendo cursar com instabilidade hemodinâmica; estigmas de hepatopatia crônica (aranhas vasculares, eritema palmar, circulação colateral abdominal, esplenomegalia) reforçam a suspeita de origem varicosa.
- **Hepatocarcinoma:** frequentemente assintomático na fase inicial (por isso o rastreio); em fase avançada, dor em hipocôndrio direito, emagrecimento, massa palpável e descompensação hepática súbita em paciente antes estável.
- **Encefalopatia hepática:** do grau I (alteração leve de atenção/sono) ao grau IV (coma), passando por desorientação, asterixis (flapping) e lentificação psicomotora nos graus intermediários.
- **Estigmas periféricos de hepatopatia crônica:** telangiectasias/aranhas vasculares, eritema palmar, ginecomastia, contratura de Dupuytren, baqueteamento digital e icterícia — sinais de exame físico que reforçam o diagnóstico etiológico e o grau de disfunção hepática mesmo antes de qualquer exame laboratorial.

## 🔎 Diagnóstico

- **Ascite:** paracentese diagnóstica em toda ascite nova ou em agravamento, com GASA, proteína total e celularidade.
- **PBE:** PMN ≥250 células/mm³ no líquido ascítico; cultura (idealmente em frasco de hemocultura à beira do leito) para guiar a terapia.
- **Síndrome hepatorrenal:** diagnóstico de exclusão — creatinina elevada sem resposta à suspensão de diuréticos e expansão com albumina, ausência de choque, nefrotóxicos ou doença renal estrutural.
- **Carcinomatose peritoneal:** citologia oncótica do líquido, imagem com implantes peritoneais.
- **Tuberculose peritoneal** (diferencial de GASA baixo): ADA (adenosina deaminase) elevada no líquido ascítico, predomínio linfomonocitário na celularidade, biópsia peritoneal por laparoscopia em casos duvidosos.
- **Hidrotórax hepático:** toracocentese diagnóstica se dúvida sobre a origem do derrame; análise bioquímica compatível com transudato, semelhante à ascite associada.
- **Estadiamento de gravidade:** **Child-Pugh** (bilirrubina, albumina, INR, ascite, encefalopatia) classifica em A/B/C e estima sobrevida e risco cirúrgico; **MELD/MELD-Na** (creatinina, bilirrubina, INR, sódio) é usado para priorização em fila de transplante hepático.
- **Rastreio de hepatocarcinoma:** ultrassonografia abdominal ± alfafetoproteína a cada 6 meses em todo cirrótico, independentemente da etiologia.
- **Encefalopatia hepática:** classificação de West Haven (graus I a IV, de alteração leve do sono/atenção até coma) guia gravidade e resposta terapêutica; buscar sempre fator precipitante (infecção, sangramento digestivo, constipação, distúrbio eletrolítico, uso de sedativo).
- **Varizes esofagogástricas:** endoscopia digestiva alta de rastreio ao diagnóstico de cirrose, repetida periodicamente conforme o achado inicial e o grau de compensação hepática, para definir necessidade de profilaxia primária.

## 💊 Tratamento

- **PBE:** cefotaxima IV por 5-7 dias + albumina se critério de gravidade; profilaxia secundária contínua com norfloxacino.
- **Síndrome hepatorrenal:** terlipressina + albumina (ou noradrenalina + albumina em UTI); transplante hepático como tratamento definitivo.
- **Ascite cirrótica:** dieta hipossódica + diuréticos (espironolactona ± furosemida); paracentese de alívio se tensa; TIPS se refratária.
- **Ascite congestiva:** tratar a causa de base (ICC, pericardite constritiva) associada a diuréticos.
- **Carcinomatose:** tratamento oncológico dirigido; paracentese de alívio paliativa.
- **Hemorragia varicosa aguda:** terlipressina ou octreotide + ligadura elástica endoscópica + antibioticoprofilaxia (ceftriaxona), independentemente de haver PBE estabelecida — todo cirrótico com sangramento digestivo tem indicação de profilaxia antibiótica.
- **Profilaxia de sangramento varicoso:** primária com betabloqueador não seletivo (propranolol/carvedilol) ou ligadura elástica em varizes de médio/grosso calibre; secundária combina as duas estratégias.
- **Encefalopatia hepática:** lactulose (titulada para 2-3 evacuações pastosas/dia) como primeira linha; rifaximina associada em casos recorrentes/refratários; sempre corrigir o fator precipitante.
- **Hepatocarcinoma detectado em rastreio:** ressecção, transplante ou ablação em doença inicial (dentro dos critérios de Milão); terapias locorregionais (quimioembolização) ou sistêmicas em estágios mais avançados.
- **Síndrome hepatopulmonar/portopulmonar:** suporte de oxigênio e avaliação para transplante hepático na primeira; vasodilatadores pulmonares específicos e avaliação de risco cirúrgico cuidadosa na segunda antes de indicar transplante.

## 📚 Referências essenciais

- Diretriz AASLD para manejo de ascite, PBE e síndrome hepatorrenal na cirrose.
- Diretriz EASL sobre complicações da cirrose descompensada.
- Consenso Baveno VII sobre hipertensão portal.
`;

export default content.trim();
