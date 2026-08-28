/**
 * Resumo — Infectologia · HIV/AIDS.
 *
 * Cobre as entidades do assunto no corpus: PrEP oral, coinfecção TB-HIV
 * (momento de início da TARV), esquema de duas drogas em paciente estável,
 * controlador de elite, colite por CMV, abacavir/HLA-B*57:01, IRIS,
 * leucoplasia pilosa oral, sarcoma de Kaposi e início de TARV em
 * pneumocistose com coinfecção por hepatite B.
 */
const content = `
## 🎯 Essencial

- **Trate todo mundo, sempre, assim que diagnosticado** — independentemente de CD4 ou carga viral. Não se espera queda de CD4 para iniciar TARV.
- **Esquema preferencial: tenofovir + lamivudina + dolutegravir** (ou tenofovir alafenamida no lugar do disoproximila, se função renal reduzida). Dolutegravir tem alta barreira genética à resistência.
- **Coinfecção TB-HIV: RIPE sempre primeiro.** Momento de iniciar TARV depende do CD4 — **CD4 <50 → em até 1-2 semanas**; **CD4 ≥50 → entre 2-8 semanas** (adiar reduz risco de IRIS grave, especialmente em TB do SNC).
- **Rifampicina interage com dolutegravir** (indução enzimática) — dobra-se a dose (2x/dia) durante o uso concomitante, em vez de trocar de classe.
- **PrEP oral: tenofovir/entricitabina, 1 comprimido diário.** Não confundir com PEP (pós-exposição) nem com esquemas de tratamento.
- **Paciente estável, carga viral indetectável há anos, CD4 normal:** pode-se simplificar para **biterapia (dolutegravir + lamivudina)** — reduz toxicidade sem perder eficácia.
- **Abacavir exige rastreio de HLA-B\\*57:01 antes de prescrever** — positivo contraindica o uso, pelo risco de reação de hipersensibilidade potencialmente fatal.
- **"Controlador de elite"** é quem mantém carga viral indetectável e CD4 normal **sem nunca ter usado TARV** — não confundir com boa resposta terapêutica.

## 💎 Pearls

- **A gravidade da IRIS é maior quanto menor o CD4 e quanto mais precoce a TARV é iniciada** em relação ao tratamento da infecção oportunista — daí a janela escalonada em tuberculose.
- **Colite por CMV exige biópsia colônica com inclusões virais** para confirmar doença de órgão-alvo — antigenemia ou PCR sérico isolados só mostram viremia, não doença.
- **Leucoplasia pilosa oral** é causada por reativação do **vírus Epstein-Barr** em mucosa oral, placas esbranquiçadas que não removem com espátula (diferencia de candidíase) — marcador de imunossupressão, não é pré-maligna.
- **Sarcoma de Kaposi** é neoplasia vascular pelo **HHV-8**, regride parcialmente só com reconstituição imune via TARV eficaz em doença limitada.
- **Coinfecção com hepatite B (HBsAg+)** muda a escolha de backbone: manter **tenofovir** no esquema (atividade dupla anti-HIV e anti-HBV) — suspendê-lo pode causar flare de hepatite B.
- **Gene-Xpert positivo para tuberculose já define início do RIPE**, sem esperar cultura.

## ⚠️ Pitfalls

- **Esperar CD4 cair antes de iniciar TARV** — conduta ultrapassada; hoje trata-se todo paciente diagnosticado.
- **Iniciar TARV e RIPE no mesmo dia** em coinfecção TB-HIV — risco alto de IRIS grave.
- **Diagnosticar colite por CMV só com PCR sérico ou antigenemia positivos** — sem biópsia, é viremia, não necessariamente doença de órgão-alvo.
- **Prescrever abacavir sem checar HLA-B\\*57:01** — risco de síndrome de hipersensibilidade grave.
- **Suspender tenofovir num paciente HBsAg+ sem substituir cobertura anti-HBV** — pode desencadear flare hepático agudo.
- **Confundir controlador de elite com boa adesão à TARV** — o controlador nunca tratou.

## 📝 Como a banca cobra

**HIV/AIDS é o assunto mais frequente do corpus (11 questões, 5,2%)** — 10 questões do ENARE (2025 e 2026) e 1 do EBSERH, com foco quase todo em **decisões terapêuticas** (qual esquema, quando iniciar, o que trocar), raramente em "reconheça que é HIV".

- **Coinfecção TB-HIV** apareceu 2 vezes (ENARE 2025 Q2, ENARE 2026 Q38), sempre testando o **momento exato de início da TARV conforme CD4**.
- **PrEP** (ENARE 2026 Q3) cobrou o esquema exato (tenofovir/entricitabina, 1x/dia) — cuidado para não confundir com PEP nem com os outros esquemas listados como distratores.
- **Biterapia em paciente estável** (ENARE 2026 Q46) e **controlador de elite** (ENARE 2026 Q77) testam conceitos finos de manejo crônico, não emergência.
- **Colite por CMV** (ENARE 2025 Q20) e **IRIS** (ENARE 2025 Q73) seguem o padrão histórico do assunto: exigem biópsia/reconhecimento fisiopatológico, não só "lembrar o nome".
- **PCP com coinfecção HBV** (EBSERH 2026 Q51) combina duas decisões simultâneas — escolha antirretroviral que cubra HBV, com pneumocistose já em tratamento.

Praticamente todas as questões brasileiras citam ou seguem de perto o **PCDT de Manejo da Infecção pelo HIV em Adultos (Ministério da Saúde)**.

## 🧠 Conceito e fisiopatologia

O HIV infecta linfócitos T CD4+ via correceptor (CCR5 ou CXCR4) e integra seu material genético ao genoma do hospedeiro — por isso os alvos terapêuticos são as enzimas virais (transcriptase reversa, integrase, protease). A depleção progressiva de CD4+ define o grau de imunossupressão e o espectro de infecções oportunistas esperado.

A **coinfecção tuberculose-HIV** exige equilíbrio: tratar a TB sem controlar o HIV mantém imunossupressão; iniciar TARV cedo demais desencadeia **IRIS** — resposta inflamatória exacerbada contra antígenos micobacterianos residuais à medida que a imunidade se recupera, potencialmente grave em TB do SNC.

**PrEP** funciona pela presença de níveis teciduais protetores de tenofovir/entricitabina antes da exposição, bloqueando o estabelecimento da infecção. A estratégia de **biterapia** em pacientes estáveis se apoia em ensaios que mostraram não-inferioridade de dolutegravir + lamivudina frente a esquemas de três drogas, reduzindo exposição cumulativa a antirretrovirais sem perder supressão virológica.

## 🩺 Quadro clínico

- **Coinfecção TB-HIV:** febre, sudorese noturna, tosse produtiva prolongada, emagrecimento.
- **Colite por CMV:** febre, dor abdominal, diarreia sanguinolenta, CD4 muito baixo (<50-100).
- **Leucoplasia pilosa oral:** placas esbranquiçadas nas bordas da língua, não removíveis, geralmente assintomáticas.
- **Sarcoma de Kaposi:** lesões cutâneo-mucosas violáceas indolores, podendo acometer trato gastrointestinal.
- **Reação de hipersensibilidade ao abacavir:** febre, rash, sintomas gastrointestinais e respiratórios nas primeiras semanas de uso — some com a suspensão, mas a reexposição pode ser fatal.

## 💊 Tratamento

- **Início de TARV:** tenofovir + lamivudina + dolutegravir para todos, ajustando backbone conforme função renal e coinfecções (manter tenofovir se HBsAg+).
- **PrEP:** tenofovir/entricitabina, 1 comprimido diário, contínuo enquanto durar a exposição de risco.
- **Coinfecção TB:** RIPE primeiro; TARV escalonada por CD4 (≤2 semanas se CD4 <50; 2-8 semanas se CD4 ≥50), dose dobrada de dolutegravir durante rifampicina.
- **Colite por CMV:** ganciclovir intravenoso.
- **Paciente estável:** considerar biterapia (dolutegravir + lamivudina) para simplificação.
- **Reação a abacavir:** suspensão definitiva, nunca reexpor.

## 📚 Referências essenciais

- PCDT de Manejo da Infecção pelo HIV em Adultos — Ministério da Saúde.
- PCDT de Profilaxia Pré-Exposição (PrEP) de Risco à Infecção pelo HIV — Ministério da Saúde.
- DHHS Guidelines for the Use of Antiretroviral Agents in Adults and Adolescents with HIV.
`;

export default content.trim();
