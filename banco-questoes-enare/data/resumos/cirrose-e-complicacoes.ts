/**
 * Resumo — Gastroenterologia e Hepatologia · Cirrose e complicações.
 *
 * Reorganizado por entidade clínica (cada complicação da cirrose tem sua
 * própria seção com quando suspeitar/quadro, diagnóstico, tratamento,
 * pearl e pitfall juntos) — mesmo tratamento dado ao resumo de hiv-aids: a cirrose é
 * uma única doença de base, mas cada descompensação (ascite, PBE, SHR,
 * hemorragia varicosa, encefalopatia, hepatocarcinoma) tem lógica própria
 * de reconhecimento e conduta, e misturá-las em seções de tipo genérico
 * escondia essa lógica.
 *
 * Cobre as entidades do assunto no corpus: ascite por cirrose hepática
 * (GASA e proteína do líquido), ascite por hepatopatia congestiva,
 * peritonite bacteriana espontânea, ascite por carcinomatose peritoneal
 * (GASA baixo) e síndrome hepatorrenal (terlipressina e albumina).
 * Também traz, como extrapolação de alto rendimento além do que já caiu em
 * prova, as demais grandes complicações da cirrose descompensada
 * (hemorragia varicosa, encefalopatia hepática, hepatocarcinoma, hidrotórax
 * hepático, síndrome hepatopulmonar/portopulmonar) e os escores de
 * gravidade (Child-Pugh, MELD).
 */
const content = `
## 🎯 Essencial

- **GASA (gradiente albumina soro-ascite) ≥1,1** indica hipertensão portal (transudato) — cirrose, hepatopatia congestiva. **GASA <1,1** afasta hipertensão portal — carcinomatose peritoneal, tuberculose peritoneal, síndrome nefrótica, pancreatite.
- Dentro do grupo GASA ≥1,1, a **proteína total do líquido ascítico** diferencia a causa: **<2,5 g/dL sugere cirrose**; **≥2,5 g/dL sugere causa cardíaca/congestiva**.
- A transição de cirrose compensada para descompensada (definida pelo **primeiro** evento de ascite, sangramento varicoso, encefalopatia ou icterícia) marca queda abrupta na sobrevida esperada e deve disparar avaliação para transplante hepático em centro de referência.
- Cada descompensação abaixo tem gatilho de reconhecimento e conduta próprios — dominar as quatro grandes (ascite/PBE, hemorragia varicosa, encefalopatia, hepatocarcinoma) mais a síndrome hepatorrenal cobre a quase totalidade do assunto.

## 📝 Como a banca cobra

**Cirrose e complicações aparece em 6 questões (2,83% do corpus)** — 5 do ENARE (2025 e 2026) e 1 do EBSERH, com forte concentração em interpretação de líquido ascítico e reconhecimento de complicações graves da cirrose.

- **Ascite por cirrose (GASA e proteína)** (ENARE 2025 Q8) testa o uso combinado de GASA e proteína total para firmar a etiologia.
- **Ascite por hepatopatia congestiva** (ENARE 2025 Q40) cobra o mesmo raciocínio pelo lado cardíaco — proteína alta com GASA elevado.
- **Peritonite bacteriana espontânea** (ENARE 2026 Q16) exige o critério diagnóstico correto (PMN ≥250) e a conduta terapêutica completa.
- **Ascite por carcinomatose peritoneal (GASA baixo)** apareceu 2 vezes (ENARE 2026 Q40 e ENARE 2026 Q79) — vinheta recorrente que reforça a lógica de GASA baixo como sinal de ausência de hipertensão portal.
- **Síndrome hepatorrenal** (EBSERH 2026 Q39) cobra especificamente a combinação terlipressina + albumina como tratamento de escolha.
- **Hemorragia varicosa, encefalopatia hepática e hepatocarcinoma ainda não foram cobrados isoladamente no corpus** — são as três descompensações de maior probabilidade de aparecer em prova futura, dado que completam o quarteto clássico de descompensação da cirrose.

## 🧠 Conceito e fisiopatologia

A hipertensão portal aumenta a pressão hidrostática nos sinusoides hepáticos e no leito esplâncnico, favorecendo extravasamento de líquido pobre em proteína (sinusoides cirróticos já lesados filtram menos proteína) para a cavidade peritoneal — daí GASA alto e proteína tipicamente baixa; quando a congestão é pós-sinusoidal de origem cardíaca, a proteína do líquido é maior porque o sinusoide ainda não está cronicamente danificado. A vasodilatação esplâncnica extrema (mediada por óxido nítrico) que caracteriza a cirrose avançada ativa o sistema renina-angiotensina-aldosterona e o simpático, gerando vasoconstrição renal (síndrome hepatorrenal) e desviando amônia da circulação porta-hepática para a sistêmica via colaterais portossistêmicas (encefalopatia hepática) — a mesma vasodilatação esplâncnica é o fio condutor por trás de várias complicações aparentemente distintas.

## 🔹 Ascite por cirrose hepática

- **Quando suspeitar:** aumento do volume abdominal, macicez móvel e piparote positivo ao exame, ganho de peso, em paciente com estigmas de hepatopatia crônica (aranhas vasculares, eritema palmar, circulação colateral abdominal, esplenomegalia).
- **Diagnóstico:** paracentese diagnóstica em toda ascite nova ou em agravamento — **GASA ≥1,1 + proteína <2,5 g/dL**.
- **Tratamento:** dieta hipossódica + diuréticos (espironolactona ± furosemida); paracentese de alívio se tensa; TIPS se refratária (ascite que não responde a dose máxima de diuréticos ou recidiva rapidamente).
- ⚠️ **Pitfall:** restringir proteína na dieta do cirrótico "para prevenir encefalopatia" — conduta ultrapassada e prejudicial (favorece sarcopenia); a recomendação atual é manter ingesta proteica adequada (1,2-1,5 g/kg/dia) e tratar a encefalopatia diretamente.
- 📝 **Como caiu:** ENARE 2025 Q8.

## 🔹 Ascite por hepatopatia congestiva

- **Quando suspeitar:** ascite com sinais de congestão sistêmica (turgência jugular, hepatomegalia dolorosa) — ICC, Budd-Chiari, pericardite constritiva.
- **Diagnóstico:** **GASA ≥1,1 + proteína ≥2,5 g/dL** — o discriminador frente à ascite cirrótica pura.
- **Tratamento:** tratar a causa de base associada a diuréticos.
- 💎 **Pearl:** não existe corte de proteína isolado que diagnostique cirrose — sempre combinar GASA + proteína para diferenciar transudato por hipertensão portal hepática de transudato congestivo.
- 📝 **Como caiu:** ENARE 2025 Q40.

## 🔹 Ascite por carcinomatose peritoneal

- **Quando suspeitar:** ascite em paciente com neoplasia conhecida ou suspeita, muitas vezes de instalação mais rápida que a ascite cirrótica isolada.
- **Diagnóstico:** **GASA <1,1**, geralmente proteína alta, confirmada por citologia oncótica; imagem com implantes peritoneais.
- 🔀 **Diferencial de GASA baixo:** tuberculose peritoneal (ADA elevada no líquido, predomínio linfomonocitário, biópsia peritoneal por laparoscopia em casos duvidosos), síndrome nefrótica, pancreatite.
- 📝 **Como caiu:** ENARE 2026 Q40 · ENARE 2026 Q79.

## 🔹 Peritonite bacteriana espontânea (PBE)

- **Quando suspeitar:** pode ser oligossintomática — febre baixa, dor abdominal discreta ou apenas piora inexplicada da função renal/encefalopatia em cirrótico com ascite; até 1/3 dos casos não tem dor abdominal clássica, então reinternação/piora aguda em cirrótico sempre deve reacender a suspeita.
- **Diagnóstico:** **PMN ≥250/mm³** no líquido ascítico, **independentemente do resultado da cultura** — pode haver cultura negativa (peritonite bacteriana neutrocítica cultura-negativa), que não descarta o diagnóstico nem adia o tratamento.
- **Tratamento:** **cefalosporina de 3ª geração (cefotaxima)** por 5-7 dias + **albumina IV** (1,5 g/kg no dia 1, 1 g/kg no dia 3) se creatinina >1, ureia elevada ou bilirrubina >4 — reduz mortalidade e insuficiência renal; não é rotina universal, é reservada a critérios de gravidade.
- **Profilaxia:** secundária (todo paciente pós-episódio, contínua) e primária (proteína do líquido <1,5 g/dL associada a disfunção renal/hepática, ou em sangramento digestivo agudo) com norfloxacino.
- ⚠️ **Pitfall:** usar cultura negativa para descartar PBE — o critério diagnóstico é PMN ≥250; a cultura só orienta o antibiótico. Também não confundir com **peritonite bacteriana secundária** (múltiplos organismos, PMN muito elevado, glicose baixa e LDH alta) — indica perfuração/abscesso e exige avaliação cirúrgica, não só antibiótico.
- 📝 **Como caiu:** ENARE 2026 Q16.

## 🔹 Síndrome hepatorrenal

- **Quando suspeitar:** oligúria progressiva sem melhora com expansão volêmica, geralmente em paciente com ascite refratária ou PBE recente — diagnóstico de **exclusão** (ausência de choque, nefrotóxicos ou doença renal estrutural).
- **Nomenclatura atual (critérios ICA-AKI, 2015):** substituiu "tipo 1/tipo 2" por **HRS-AKI** (início agudo, correspondendo ao antigo tipo 1, pior prognóstico) e **HRS-NAKI** (curso mais indolente, correspondendo ao antigo tipo 2).
- **Tratamento:** **terlipressina + albumina IV** é o tratamento de escolha (vasoconstritor esplâncnico); noradrenalina + albumina em UTI é alternativa. Tratamento definitivo é **transplante hepático**.
- ⚠️ **Pitfall:** prolongar diuréticos e expansão volêmica sem escalonar para vasoconstritor — o atraso piora o desfecho renal. Betabloqueador não seletivo deve ser suspenso ou reduzido em SHR estabelecida ou choque séptico, pois reduzir ainda mais o débito cardíaco compromete a perfusão renal.
- 📝 **Como caiu:** EBSERH 2026 Q39 — terlipressina e albumina.

## 🔹 Hemorragia varicosa

- **Quando suspeitar:** hematêmese e/ou melena de início súbito, podendo cursar com instabilidade hemodinâmica, em paciente com estigmas de hepatopatia crônica.
- **Diagnóstico:** endoscopia digestiva alta confirma a origem e permite terapia; endoscopia de rastreio ao diagnóstico de cirrose orienta necessidade de profilaxia primária.
- **Tratamento agudo:** terlipressina ou octreotide + ligadura elástica endoscópica + **antibioticoprofilaxia (ceftriaxona)** — todo cirrótico com sangramento digestivo tem indicação de profilaxia antibiótica, independentemente de PBE já estabelecida (reduz ressangramento e mortalidade, não só infecção).
- **Profilaxia:** primária com betabloqueador não seletivo (propranolol/carvedilol) ou ligadura elástica em varizes de médio/grosso calibre; secundária combina as duas estratégias.
- ⚠️ **Pitfall:** esquecer a antibioticoprofilaxia em sangramento varicoso agudo achando que só se aplica quando há PBE concomitante confirmada.
- 📝 **Como caiu:** ainda não cobrado no corpus — candidato natural de alto rendimento, é uma das quatro grandes descompensações.

## 🔹 Encefalopatia hepática

- **Quando suspeitar:** do grau I (alteração leve de atenção/sono) ao grau IV (coma), passando por desorientação, asterixis (flapping) e lentificação psicomotora — classificação de **West Haven** guia gravidade.
- **Diagnóstico:** clínico; sempre buscar **fator precipitante** (infecção incluindo PBE, sangramento digestivo, constipação, distúrbio eletrolítico, uso de sedativo) — a encefalopatia raramente é espontânea, quase sempre tem gatilho identificável e tratável.
- **Tratamento:** **lactulose** (titulada para 2-3 evacuações pastosas/dia) como primeira linha; **rifaximina** associada em casos recorrentes/refratários; sempre corrigir o fator precipitante.
- 💎 **Pearl:** TIPS reduz a pressão portal eficazmente, mas o desvio de sangue porta para a circulação sistêmica pode precipitar ou agravar encefalopatia — contraindicação relativa em paciente com encefalopatia recorrente/grave não controlada.
- ⚠️ **Pitfall:** tratar a encefalopatia só com lactulose sem procurar ativamente o fator precipitante — sem corrigi-lo, a recorrência é praticamente garantida.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Carcinoma hepatocelular

- **Quando suspeitar:** frequentemente assintomático na fase inicial (por isso o rastreio); em fase avançada, dor em hipocôndrio direito, emagrecimento, massa palpável e descompensação hepática súbita em paciente antes estável.
- **Rastreio:** ultrassonografia abdominal ± alfafetoproteína **a cada 6 meses em todo cirrótico**, independentemente da etiologia (cirrose por si só já justifica, mesmo em causa não viral) — o hepatocarcinoma surge sobre um fígado com ciclos repetidos de lesão-regeneração que acumulam mutações.
- **Tratamento:** ressecção, transplante ou ablação em doença inicial (dentro dos critérios de Milão); terapias locorregionais (quimioembolização) ou sistêmicas em estágios mais avançados.
- ⚠️ **Pitfall:** não rastrear hepatocarcinoma semestralmente em cirrótico estável, adiando "para quando surgir sintoma" — o benefício do rastreio está em detectar ainda assintomático e ressecável/tratável.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Hidrotórax hepático e síndromes hepatopulmonares

- **Hidrotórax hepático:** derrame pleural (predominantemente à direita) por passagem de líquido ascítico através de defeitos diafragmáticos — pode ocorrer mesmo com ascite discreta ou clinicamente ausente; manejo segue a lógica da ascite refratária (evitar toracocentese seriada isolada sem otimizar o manejo da ascite/TIPS); **drenagem torácica de longa permanência é contraindicada** pelo alto risco de infecção e depleção proteico-eletrolítica.
- **Síndrome hepatopulmonar:** vasodilatação intrapulmonar causa hipoxemia com **platipneia-ortodeóxia** (piora da saturação ao sentar) — suporte de oxigênio e avaliação para transplante hepático.
- **Hipertensão portopulmonar:** remodelamento vascular pulmonar eleva a pressão da artéria pulmonar, podendo contraindicar transplante se grave e não tratada previamente — vasodilatadores pulmonares específicos e avaliação de risco cirúrgico cuidadosa.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**Estadiamento de gravidade da cirrose**

| Escore | Variáveis | Uso principal |
|---|---|---|
| Child-Pugh | Bilirrubina, albumina, INR, ascite, encefalopatia | Classifica A/B/C, estima sobrevida e risco cirúrgico |
| MELD / MELD-Na | Creatinina, bilirrubina, INR, sódio | Priorização em fila de transplante hepático |

MELD-Na incorpora o sódio sérico porque hiponatremia dilucional é marcador independente de mau prognóstico na cirrose descompensada, mesmo em pacientes com MELD "clássico" moderado.

## 📚 Referências essenciais

- Diretriz AASLD para manejo de ascite, PBE e síndrome hepatorrenal na cirrose.
- Diretriz EASL sobre complicações da cirrose descompensada.
- Consenso Baveno VII sobre hipertensão portal.
`;

export default content.trim();
