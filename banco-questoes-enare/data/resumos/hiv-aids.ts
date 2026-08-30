/**
 * Resumo — Infectologia · HIV/AIDS.
 *
 * Cobre as entidades do assunto no corpus: PrEP oral, coinfecção TB-HIV
 * (momento de início da TARV), esquema de duas drogas em paciente estável,
 * controlador de elite, colite por CMV, abacavir/HLA-B*57:01, IRIS,
 * leucoplasia pilosa oral, sarcoma de Kaposi e início de TARV em
 * pneumocistose com coinfecção por hepatite B. Inclui também extrapolações
 * de alto rendimento (profilaxias primárias/secundárias, retinite por CMV,
 * PEP, classificação CDC, outras infecções oportunistas) ainda não cobradas
 * no corpus, mas plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- **Trate todo mundo, sempre, assim que diagnosticado** — independentemente de CD4 ou carga viral. Não se espera queda de CD4 para iniciar TARV.
- **Esquema preferencial: tenofovir + lamivudina + dolutegravir** (ou tenofovir alafenamida no lugar do disoproximila, se função renal reduzida). Dolutegravir tem alta barreira genética à resistência.
- **Coinfecção TB-HIV: RIPE sempre primeiro.** Momento de iniciar TARV depende do CD4 — **CD4 <200 → em até 2 semanas**; **CD4 ≥200 → em 8 semanas** (fim da fase intensiva do RIPE). **Exceção: meningite tuberculosa** — TARV só após a 4ª semana, **independente do CD4**, pelo risco maior de IRIS no SNC (introdução mais precoce só em serviço especializado com monitorização, sobretudo se CD4 <50).
- **Rifampicina interage com dolutegravir** (indução enzimática) — dobra-se a dose (2x/dia) durante o uso concomitante, em vez de trocar de classe.
- **PrEP oral: tenofovir/entricitabina, 1 comprimido diário.** Não confundir com PEP (pós-exposição) nem com esquemas de tratamento.
- **Paciente estável, carga viral indetectável há anos, CD4 normal:** pode-se simplificar para **biterapia (dolutegravir + lamivudina)** — reduz toxicidade sem perder eficácia.
- **Abacavir exige rastreio de HLA-B\\*57:01 antes de prescrever** — positivo contraindica o uso, pelo risco de reação de hipersensibilidade potencialmente fatal.
- **"Controlador de elite"** é quem mantém carga viral indetectável e CD4 normal **sem nunca ter usado TARV** — não confundir com boa resposta terapêutica.
- **Ainda não cobrado no corpus, mas candidato natural:** profilaxias para infecções oportunistas guiadas por CD4 — **CD4 <200: sulfametoxazol-trimetoprima** (pneumocistose e toxoplasmose); **CD4 <50: azitromicina semanal** (complexo Mycobacterium avium). Suspende-se a profilaxia quando CD4 sobe e se mantém acima do limiar por tempo definido em TARV.
- **PEP (profilaxia pós-exposição):** iniciar em até 72h (idealmente nas primeiras 2h) após exposição de risco, esquema de 3 drogas (tenofovir + lamivudina + dolutegravir) por 28 dias, independentemente do status sorológico da fonte quando desconhecido e de risco não desprezível.

## 💎 Pearls

- **A gravidade da IRIS é maior quanto menor o CD4 e quanto mais precoce a TARV é iniciada** em relação ao tratamento da infecção oportunista — daí a janela escalonada em tuberculose.
- **Colite por CMV exige biópsia colônica com inclusões virais** para confirmar doença de órgão-alvo — antigenemia ou PCR sérico isolados só mostram viremia, não doença.
- **Leucoplasia pilosa oral** é causada por reativação do **vírus Epstein-Barr** em mucosa oral, placas esbranquiçadas que não removem com espátula (diferencia de candidíase) — marcador de imunossupressão, não é pré-maligna.
- **Sarcoma de Kaposi** é neoplasia vascular pelo **HHV-8**, regride parcialmente só com reconstituição imune via TARV eficaz em doença limitada.
- **Coinfecção com hepatite B (HBsAg+)** muda a escolha de backbone: manter **tenofovir** no esquema (atividade dupla anti-HIV e anti-HBV) — suspendê-lo pode causar flare de hepatite B.
- **Gene-Xpert positivo para tuberculose já define início do RIPE**, sem esperar cultura.
- **Retinite por CMV** (não citada no corpus, mas prova clássica de CD4 <50) causa perda visual indolor progressiva com hemorragias e exsudatos perivasculares ("queijo com ketchup") ao fundo de olho — tratamento com ganciclovir (sistêmico e/ou implante intravítreo), diferente da colite por CMV.
- **Neurotoxoplasmose** (CD4 <100, geralmente <50) é a causa mais comum de lesão expansiva cerebral no HIV — múltiplas lesões com realce em anel na RM; tratamento empírico com sulfadiazina + pirimetamina + ácido folínico, reservando biópsia para falha terapêutica em 2 semanas.
- **Meningite criptocócica** (CD4 <100) tem antígeno criptocócico sérico/liquórico como teste de alta sensibilidade; tratamento de indução com anfotericina B + flucitosina, atenção à hipertensão intracraniana (punções de alívio seriadas).
- **Classificação CDC** (categorias A/B/C cruzadas com CD4) define estágio de AIDS — categoria C corresponde a doença definidora de AIDS independentemente do CD4.

## ⚠️ Pitfalls

- **Esperar CD4 cair antes de iniciar TARV** — conduta ultrapassada; hoje trata-se todo paciente diagnosticado.
- **Iniciar TARV e RIPE no mesmo dia** em coinfecção TB-HIV — risco alto de IRIS grave.
- **Diagnosticar colite por CMV só com PCR sérico ou antigenemia positivos** — sem biópsia, é viremia, não necessariamente doença de órgão-alvo.
- **Prescrever abacavir sem checar HLA-B\\*57:01** — risco de síndrome de hipersensibilidade grave.
- **Suspender tenofovir num paciente HBsAg+ sem substituir cobertura anti-HBV** — pode desencadear flare hepático agudo.
- **Confundir controlador de elite com boa adesão à TARV** — o controlador nunca tratou.
- **Suspender profilaxia para oportunistas assim que a carga viral fica indetectável**, sem checar se o CD4 já subiu e se manteve acima do limiar pelo tempo mínimo recomendado.
- **Atrasar PEP esperando resultado sorológico da fonte** — a janela de 72h (idealmente 2h) não espera; inicia-se e reavalia-se depois.

## 📝 Como a banca cobra

**HIV/AIDS é o assunto mais frequente do corpus (11 questões, 5,2%)** — 10 questões do ENARE (2025 e 2026) e 1 do EBSERH, com foco quase todo em **decisões terapêuticas** (qual esquema, quando iniciar, o que trocar), raramente em "reconheça que é HIV".

- **Coinfecção TB-HIV** apareceu 2 vezes (ENARE 2025 Q2, ENARE 2026 Q38), sempre testando o **momento exato de início da TARV conforme CD4**.
- **PrEP** (ENARE 2026 Q3) cobrou o esquema exato (tenofovir/entricitabina, 1x/dia) — cuidado para não confundir com PEP nem com os outros esquemas listados como distratores.
- **Biterapia em paciente estável** (ENARE 2026 Q46) e **controlador de elite** (ENARE 2026 Q77) testam conceitos finos de manejo crônico, não emergência.
- **Colite por CMV** (ENARE 2025 Q20) e **IRIS** (ENARE 2025 Q73) seguem o padrão histórico do assunto: exigem biópsia/reconhecimento fisiopatológico, não só "lembrar o nome".
- **PCP com coinfecção HBV** (EBSERH 2026 Q51) combina duas decisões simultâneas — escolha antirretroviral que cubra HBV, com pneumocistose já em tratamento.
- **Leucoplasia pilosa oral** (ENARE 2025 Q77) e **sarcoma de Kaposi** (ENARE 2025 Q79) testam reconhecimento de manifestações mucocutâneas associadas a vírus oportunistas (EBV e HHV-8, respectivamente).

Praticamente todas as questões brasileiras citam ou seguem de perto o **PCDT de Manejo da Infecção pelo HIV em Adultos (Ministério da Saúde)**.

## 🧠 Conceito e fisiopatologia

O HIV infecta linfócitos T CD4+ via correceptor (CCR5 ou CXCR4) e integra seu material genético ao genoma do hospedeiro — por isso os alvos terapêuticos são as enzimas virais (transcriptase reversa, integrase, protease). A depleção progressiva de CD4+ define o grau de imunossupressão e o espectro de infecções oportunistas esperado — o raciocínio de "qual CD4 permite qual infecção" (CMV/criptococo <100, MAC <50, candidíase esofágica/PCP <200) é um eixo organizador clássico de prova.

A **coinfecção tuberculose-HIV** exige equilíbrio: tratar a TB sem controlar o HIV mantém imunossupressão; iniciar TARV cedo demais desencadeia **IRIS** — resposta inflamatória exacerbada contra antígenos micobacterianos residuais à medida que a imunidade se recupera, potencialmente grave em TB do SNC.

**PrEP** funciona pela presença de níveis teciduais protetores de tenofovir/entricitabina antes da exposição, bloqueando o estabelecimento da infecção. A estratégia de **biterapia** em pacientes estáveis se apoia em ensaios que mostraram não-inferioridade de dolutegravir + lamivudina frente a esquemas de três drogas, reduzindo exposição cumulativa a antirretrovirais sem perder supressão virológica.

## 🩺 Quadro clínico

- **Coinfecção TB-HIV:** febre, sudorese noturna, tosse produtiva prolongada, emagrecimento.
- **Colite por CMV:** febre, dor abdominal, diarreia sanguinolenta, CD4 muito baixo (<50-100).
- **Leucoplasia pilosa oral:** placas esbranquiçadas nas bordas da língua, não removíveis, geralmente assintomáticas.
- **Sarcoma de Kaposi:** lesões cutâneo-mucosas violáceas indolores, podendo acometer trato gastrointestinal.
- **Reação de hipersensibilidade ao abacavir:** febre, rash, sintomas gastrointestinais e respiratórios nas primeiras semanas de uso — some com a suspensão, mas a reexposição pode ser fatal.
- **Retinite por CMV:** moscas volantes, perda visual indolor e progressiva, achado de fundo de olho hemorrágico-exsudativo.
- **Neurotoxoplasmose:** cefaleia, febre, déficit focal, convulsão, em paciente com CD4 baixo e sem profilaxia adequada.
- **Meningite criptocócica:** cefaleia subaguda, sinais meníngeos discretos (podem ser mínimos pela imunossupressão), papiledema por hipertensão intracraniana.

## 🔎 Diagnóstico

- **Rastreio inicial:** teste rápido ou imunoensaio de 4ª geração (detecta antígeno p24 + anticorpos), que encurta a janela diagnóstica em relação aos testes de gerações anteriores.
- **Confirmação:** segundo teste do fluxograma vigente (outro imunoensaio ou teste molecular) — o diagnóstico não se fecha com um único teste positivo isolado.
- **Carga viral (RNA-HIV) e genotipagem de resistência** devem ser solicitadas antes ou logo após o início da TARV, sem atrasar o início do tratamento por conta do resultado.
- **CD4** define risco de infecções oportunistas e necessidade de profilaxias primárias, mas **não** define se o paciente deve ser tratado — a indicação de TARV é universal e imediata.
- **Diagnóstico diferencial de lesão expansiva cerebral em HIV avançado (ainda não cobrado, mas clássico):** neurotoxoplasmose (múltiplas lesões, realce em anel, responde a tratamento empírico em ~2 semanas) vs. **linfoma primário de SNC** (lesão única, relacionado a EBV, não responde a antiparasitário) vs. **leucoencefalopatia multifocal progressiva** (vírus JC, lesões de substância branca sem efeito de massa nem realce).

## 💊 Tratamento

- **Início de TARV:** tenofovir + lamivudina + dolutegravir para todos, ajustando backbone conforme função renal e coinfecções (manter tenofovir se HBsAg+).
- **PrEP:** tenofovir/entricitabina, 1 comprimido diário, contínuo enquanto durar a exposição de risco.
- **PEP:** tenofovir + lamivudina + dolutegravir por 28 dias, iniciada o quanto antes (até 72h) após exposição de risco.
- **Coinfecção TB:** RIPE primeiro; TARV escalonada por CD4 (até 2 semanas se CD4 <200; 8 semanas se CD4 ≥200), dose dobrada de dolutegravir durante rifampicina. Meningite tuberculosa: TARV só após a 4ª semana, independente do CD4.
- **Colite por CMV:** ganciclovir intravenoso; retinite por CMV também pode receber implante intravítreo associado.
- **Paciente estável:** considerar biterapia (dolutegravir + lamivudina) para simplificação.
- **Reação a abacavir:** suspensão definitiva, nunca reexpor.
- **Profilaxias por CD4:** sulfametoxazol-trimetoprima (CD4 <200, cobre PCP e toxoplasmose); azitromicina semanal (CD4 <50, cobre MAC) — suspender após reconstituição imune sustentada.

## 🔀 Diferencial

- **Neurotoxoplasmose vs. linfoma primário de SNC vs. LEMP** em HIV avançado com lesão(ões) cerebral(is) — número de lesões, realce e resposta ao tratamento empírico são as chaves (ver Diagnóstico).
- **Reação de hipersensibilidade ao abacavir vs. síndrome de Stevens-Johnson por nevirapina** — ambas cursam com rash e febre em antirretrovirais, mas a de abacavir some com a suspensão (e a reexposição é que é fatal), enquanto a reação à nevirapina é dose/tempo-dependente e pode evoluir com acometimento mucocutâneo grave já na primeira exposição.
- **IRIS vs. falha terapêutica vs. progressão da infecção oportunista de base** — IRIS ocorre em quem está respondendo imunologicamente (CD4 subindo, carga viral caindo) e piora clinicamente por resposta inflamatória exacerbada; falha/progressão ocorre em quem não está respondendo virologicamente.

## 📋 Tabela

| CD4 (céls/mm³) | Risco associado | Profilaxia/conduta |
|---|---|---|
| <200 | Pneumocistose, candidíase esofágica | Sulfametoxazol-trimetoprima |
| <100 | Neurotoxoplasmose, meningite criptocócica | Rastreio ativo de sintomas neurológicos |
| <50 | Retinite por CMV, complexo Mycobacterium avium | Azitromicina semanal (MAC); fundoscopia periódica |
| Qualquer valor | Tuberculose, coinfecções virais (HBV/HCV) | TARV imediata independentemente do CD4 |

## 📚 Referências essenciais

- PCDT de Manejo da Infecção pelo HIV em Adultos — Módulo 1 (Tratamento) e Módulo 2 (Coinfecções e Infecções Oportunistas), Ministério da Saúde (atualização 2023-2024).
- PCDT de Profilaxia Pré-Exposição (PrEP) de Risco à Infecção pelo HIV — Ministério da Saúde.
- PCDT de Profilaxia Pós-Exposição (PEP) de Risco à Infecção pelo HIV, ISTs e Hepatites Virais — Ministério da Saúde.
`;

export default content.trim();
