/**
 * Resumo — Gastroenterologia e Hepatologia · Cirrose e complicações.
 *
 * Cobre as entidades do assunto no corpus: ascite por cirrose hepática
 * (GASA e proteína do líquido), ascite por hepatopatia congestiva,
 * peritonite bacteriana espontânea, ascite por carcinomatose peritoneal
 * (GASA baixo) e síndrome hepatorrenal (terlipressina e albumina).
 */
const content = `
## 🎯 Essencial

- **GASA (gradiente albumina soro-ascite) ≥1,1** indica hipertensão portal (transudato) — cirrose, hepatopatia congestiva (ICC, Budd-Chiari, pericardite constritiva). **GASA <1,1** afasta hipertensão portal — pensar em carcinomatose peritoneal, tuberculose peritoneal, síndrome nefrótica, pancreatite.
- Dentro do grupo GASA ≥1,1, a **proteína total do líquido ascítico** diferencia a causa: **<2,5 g/dL sugere cirrose**; **≥2,5 g/dL sugere causa cardíaca/congestiva** (ICC, Budd-Chiari, pericardite constritiva).
- **Peritonite bacteriana espontânea (PBE):** diagnóstico é **PMN ≥250/mm³** no líquido ascítico, independentemente do resultado da cultura. Tratamento: **cefalosporina de 3ª geração (cefotaxima)** + **albumina IV** (1,5 g/kg no dia 1, 1 g/kg no dia 3) se creatinina >1, ureia elevada ou bilirrubina >4 — reduz mortalidade e insuficiência renal.
- **Síndrome hepatorrenal:** vasoconstritor esplâncnico — **terlipressina + albumina IV** — é o tratamento de escolha; noradrenalina + albumina em UTI é alternativa. Tratamento definitivo é **transplante hepático**.
- **Carcinomatose peritoneal:** ascite com **GASA baixo (<1,1)**, geralmente proteína alta, confirmada por citologia oncótica.
- **Profilaxia de PBE:** secundária (todo paciente pós-episódio) e primária (proteína do líquido <1,5 g/dL associada a disfunção renal/hepática, ou em sangramento digestivo agudo) com norfloxacino.

## 💎 Pearls

- Não existe corte de proteína isolado que diagnostique cirrose — sempre combinar **GASA + proteína total** para diferenciar transudato por hipertensão portal hepática de transudato congestivo.
- PBE pode cursar com **cultura negativa** (peritonite bacteriana neutrocítica cultura-negativa) — não descarta o diagnóstico nem adia o tratamento se PMN ≥250.
- Albumina na PBE não é rotina universal — reservada a critérios de gravidade (creatinina >1, ureia alta, bilirrubina >4) pelo risco de evoluir para síndrome hepatorrenal.
- Síndrome hepatorrenal tipo 1 evolui em dias e tem pior prognóstico que a tipo 2; diferencia-se de necrose tubular aguda pela ausência de resposta a expansão volêmica e ausência de outras causas estruturais.
- Hepatopatia congestiva (sobretudo pericardite constritiva) pode simular ascite cirrótica isolada — atentar a sinais de congestão sistêmica (turgência jugular, hepatomegalia dolorosa).

## ⚠️ Pitfalls

- Usar cultura negativa do líquido ascítico para descartar PBE — o critério diagnóstico é PMN ≥250; a cultura só orienta o antibiótico.
- Deixar de administrar albumina na PBE em paciente com creatinina elevada — perde-se a chance de reduzir mortalidade e insuficiência renal.
- Assumir toda ascite em cirrótico como hipertensão portal isolada sem checar GASA/proteína quando há suspeita de segunda causa (ex.: carcinomatose sobreposta).
- Prolongar diuréticos e expansão volêmica na síndrome hepatorrenal sem escalonar para vasoconstritor — o atraso piora o desfecho renal.
- Esquecer profilaxia com norfloxacino em paciente com proteína baixa no líquido e alto risco de PBE.

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

## 🔎 Diagnóstico

- **Ascite:** paracentese diagnóstica em toda ascite nova ou em agravamento, com GASA, proteína total e celularidade.
- **PBE:** PMN ≥250 células/mm³ no líquido ascítico; cultura (idealmente em frasco de hemocultura à beira do leito) para guiar a terapia.
- **Síndrome hepatorrenal:** diagnóstico de exclusão — creatinina elevada sem resposta à suspensão de diuréticos e expansão com albumina, ausência de choque, nefrotóxicos ou doença renal estrutural.
- **Carcinomatose peritoneal:** citologia oncótica do líquido, imagem com implantes peritoneais.

## 💊 Tratamento

- **PBE:** cefotaxima IV por 5-7 dias + albumina se critério de gravidade; profilaxia secundária contínua com norfloxacino.
- **Síndrome hepatorrenal:** terlipressina + albumina (ou noradrenalina + albumina em UTI); transplante hepático como tratamento definitivo.
- **Ascite cirrótica:** dieta hipossódica + diuréticos (espironolactona ± furosemida); paracentese de alívio se tensa; TIPS se refratária.
- **Ascite congestiva:** tratar a causa de base (ICC, pericardite constritiva) associada a diuréticos.
- **Carcinomatose:** tratamento oncológico dirigido; paracentese de alívio paliativa.

## 📚 Referências essenciais

- Diretriz AASLD para manejo de ascite, PBE e síndrome hepatorrenal na cirrose.
- Diretriz EASL sobre complicações da cirrose descompensada.
- Consenso Baveno VII sobre hipertensão portal.
`;

export default content.trim();
