/**
 * Resumo — Infectologia · HIV/AIDS.
 *
 * Reorganizado por entidade clínica (cada complicação/decisão tem sua
 * própria seção com quadro clínico, diagnóstico, tratamento, pearl e
 * pitfall juntos) — antes esse conteúdo estava picado entre seções
 * genéricas de tipo (Pearls, Quadro clínico, Diagnóstico...). O diferencial
 * de lesão expansiva cerebral em HIV avançado (neurotoxoplasmose, linfoma
 * primário de SNC, LEMP, meningite criptocócica) mora aqui — são
 * complicações do HIV, mesmo sendo neurológicas — e não em
 * `neuroinfeccao-e-emergencias-neurologicas`, que cobre um assunto
 * (Subtheme) diferente do banco.
 *
 * Cobre as entidades do assunto no corpus: PrEP oral, coinfecção TB-HIV
 * (momento de início da TARV), esquema de duas drogas em paciente estável,
 * controlador de elite, colite por CMV, abacavir/HLA-B*57:01, IRIS,
 * leucoplasia pilosa oral, sarcoma de Kaposi e início de TARV em
 * pneumocistose com coinfecção por hepatite B. Inclui também extrapolações
 * de alto rendimento (profilaxias primárias/secundárias, retinite por CMV,
 * PEP, classificação CDC, diferencial de lesão de SNC, outras infecções
 * oportunistas) ainda não cobradas no corpus, mas plausíveis em provas
 * futuras.
 */
const content = `
## 🎯 Essencial

- **Trate todo mundo, sempre, assim que diagnosticado** — independentemente de CD4 ou carga viral. Não se espera queda de CD4 para iniciar TARV.
- **Esquema preferencial: tenofovir + lamivudina + dolutegravir** (ou tenofovir alafenamida no lugar do disoproximila, se função renal reduzida). Dolutegravir tem alta barreira genética à resistência.
- **Diagnóstico:** teste rápido ou imunoensaio de 4ª geração (antígeno p24 + anticorpos), que encurta a janela diagnóstica; confirmação exige um segundo teste do fluxograma vigente — um único teste positivo isolado não fecha o diagnóstico.
- **CD4 define risco de oportunistas e necessidade de profilaxias, mas não define se o paciente deve ser tratado** — a indicação de TARV é universal e imediata, sem esperar carga viral ou genotipagem.
- **Classificação CDC** (categorias A/B/C cruzadas com CD4) define o estágio de AIDS — categoria C corresponde a doença definidora de AIDS independentemente do valor de CD4.

## 📝 Como a banca cobra

**HIV/AIDS é o assunto mais frequente do corpus (11 questões, 5,2%)** — 10 questões do ENARE (2025 e 2026) e 1 do EBSERH, com foco quase todo em **decisões terapêuticas** (qual esquema, quando iniciar, o que trocar), raramente em "reconheça que é HIV".

- **Coinfecção TB-HIV** apareceu 2 vezes (ENARE 2025 Q2, ENARE 2026 Q38), ambas testando exatamente a mesma pegadinha: **a resposta certa inicia a TARV em até 1 semana, independentemente do CD4** — os distratores que condicionam o início ao CD4 (2 semanas, 6 semanas, 8 semanas/fim da fase intensiva) ou que mandam aguardar o resultado do CD4 estão errados nas duas provas.
- **PrEP** (ENARE 2026 Q3) cobrou o esquema exato (tenofovir/entricitabina, 1x/dia) — cuidado para não confundir com PEP nem com os outros esquemas listados como distratores.
- **Biterapia em paciente estável** (ENARE 2026 Q46) e **controlador de elite** (ENARE 2026 Q77) testam conceitos finos de manejo crônico, não emergência.
- **Colite por CMV** (ENARE 2025 Q20) e **IRIS** (ENARE 2025 Q73) seguem o padrão histórico do assunto: exigem biópsia/reconhecimento fisiopatológico, não só "lembrar o nome".
- **PCP com coinfecção HBV** (EBSERH 2026 Q51) combina duas decisões simultâneas — escolha antirretroviral que cubra HBV, com pneumocistose já em tratamento.
- **Leucoplasia pilosa oral** (ENARE 2025 Q77) e **sarcoma de Kaposi** (ENARE 2025 Q79) testam reconhecimento de manifestações mucocutâneas associadas a vírus oportunistas (EBV e HHV-8, respectivamente).
- **Nenhuma questão do corpus cobrou ainda o diferencial de lesão de SNC no HIV avançado** (neurotoxoplasmose, linfoma primário de SNC, LEMP, meningite criptocócica) — é um dos temas de maior probabilidade de aparecer em provas futuras, dado o padrão histórico da banca de explorar decisões finas de manejo em oportunistas.

Praticamente todas as questões brasileiras citam ou seguem de perto o **PCDT de Manejo da Infecção pelo HIV em Adultos (Ministério da Saúde)**.

## 🧠 Conceito e fisiopatologia

- HIV infecta linfócitos T CD4+ via correceptor (CCR5 ou CXCR4)
- Integra material genético ao genoma do hospedeiro → por isso os alvos terapêuticos são as enzimas virais (transcriptase reversa, integrase, protease)
- CD4 caindo = mais imunossupressão = espectro previsível de oportunistas
- Mnemônico dos limiares de CD4: "200-100-50" — PCP/candidíase (200) → toxo/criptococo/CMV/linfoma de SNC (100) → MAC (50)

💡 Pensa assim: quanto mais baixo o CD4, mais "fundo" no armário de doenças raras a infecção oportunista mora.

## 🔹 Coinfecção tuberculose-HIV

- **Conduta:** RIPE sempre primeiro. **TARV em até 7 dias do início do RIPE, independentemente do CD4** — a recomendação escalonada por CD4 de versões anteriores do PCDT (2 semanas se <200 / 8 semanas se ≥200, que por sua vez já havia substituído o corte ainda mais antigo da OMS de CD4 <50/≥50) foi superada: a atualização vigente do PCDT-HIV alinhou a coinfecção TB não-meníngea à regra geral de início imediato e universal de TARV. **Exceção: meningite/meningoencefalite tuberculosa** — TARV preferencialmente **entre a 4ª e a 6ª semana**, independentemente do CD4, pelo maior risco de IRIS no SNC; início mais precoce (a partir da 2ª semana) só é considerado em serviço especializado com monitorização frequente de eventos adversos, sobretudo em **CD4 ≤50**.
- **Interação medicamentosa:** rifampicina é **contraindicada com esquemas baseados em inibidor de protease potencializado por ritonavir (IP/r)** — nesse caso, troca-se o terceiro agente. Com dolutegravir, a rifampicina reduz seus níveis séricos por indução enzimática — dobra-se a dose (2x/dia) durante o uso concomitante, em vez de trocar de classe.
- 💎 **Pearl:** Gene-Xpert positivo já define o início do RIPE, sem esperar cultura.
- ⚠️ **Pitfall:** iniciar TARV e RIPE no mesmo dia eleva muito o risco de IRIS grave.
- ⚠️ **Pitfall:** escolher uma alternativa que condiciona o início da TARV ao valor do CD4 (ou que manda aguardar o resultado do CD4) fora do contexto de meningite tuberculosa — é a pegadinha mais repetida do assunto no corpus; na TB não-meníngea, o CD4 não muda o prazo de 7 dias.
- 📝 **Como caiu:** ENARE 2025 Q2 · ENARE 2026 Q38 — nas duas, a alternativa correta inicia a TARV em até 1 semana **independentemente do CD4**; os distratores testam justamente quem ainda decora o corte por CD4 de versões antigas do PCDT (2, 6 ou 8 semanas) ou quem espera o resultado do CD4 antes de decidir.

## 🔹 IRIS — síndrome inflamatória da reconstituição imune

- **Mecanismo:** resposta inflamatória exacerbada contra antígenos residuais (classicamente micobacterianos) à medida que a imunidade se recupera com a TARV — mais grave quanto menor o CD4 e mais precoce a TARV em relação ao tratamento da infecção oportunista de base.
- **Diferencial:** IRIS ocorre em quem está respondendo *imunologicamente* à TARV (CD4 subindo, carga viral caindo) e piora clinicamente por inflamação; falha terapêutica/progressão da infecção oportunista ocorre em quem não está respondendo *virologicamente*.
- 📝 **Como caiu:** ENARE 2025 Q73.

## 🔹 Profilaxia pré-exposição (PrEP)

- **Esquema:** tenofovir/entricitabina, 1 comprimido diário, contínuo enquanto durar a exposição de risco.
- ⚠️ **Pitfall:** não confundir com PEP (pós-exposição) nem com os esquemas de tratamento de quem já tem HIV.
- 📝 **Como caiu:** ENARE 2026 Q3 — esquema exato (tenofovir/entricitabina, 1x/dia).

## 🔹 Profilaxia pós-exposição (PEP)

- **Esquema:** iniciar em até 72h (idealmente nas primeiras 2h) após exposição de risco; 3 drogas (tenofovir + lamivudina + dolutegravir) por 28 dias, independentemente do status sorológico da fonte quando desconhecido, diante de risco não desprezível.
- ⚠️ **Pitfall:** atrasar a PEP esperando o resultado sorológico da fonte — a janela não espera; inicia-se e reavalia-se depois.
- 📝 **Como caiu:** ainda não cobrado no corpus — candidato natural de alto rendimento.

## 🔹 Biterapia em paciente estável e controlador de elite

- **Biterapia:** paciente estável, carga viral indetectável há anos, CD4 normal — pode-se simplificar para dolutegravir + lamivudina, reduzindo toxicidade cumulativa sem perder eficácia.
- **Controlador de elite:** mantém carga viral indetectável e CD4 normal **sem nunca ter usado TARV**.
- ⚠️ **Pitfall:** não confundir controlador de elite com boa adesão à TARV — o controlador nunca tratou.
- 📝 **Como caiu:** biterapia — ENARE 2026 Q46; controlador de elite — ENARE 2026 Q77.

## 🔹 Hipersensibilidade ao abacavir

- **Rastreio obrigatório:** HLA-B\\*57:01 antes de prescrever — positivo contraindica o uso.
- **Quadro:** febre, rash, sintomas gastrointestinais e respiratórios nas primeiras semanas de uso; some com a suspensão, mas a **reexposição pode ser fatal**.
- **Diferencial:** reação por nevirapina (Stevens-Johnson) é dose/tempo-dependente e pode evoluir com acometimento mucocutâneo grave já na primeira exposição — diferente da reação ao abacavir, ligada ao HLA e não à dose.
- ⚠️ **Pitfall:** prescrever abacavir sem checar HLA-B\\*57:01 — risco de síndrome de hipersensibilidade grave.
- 📝 **Como caiu:** ENARE 2025 Q63.

## 🔹 Coinfecção HIV-HBV (HBsAg positivo)

- **Conduta:** manter tenofovir no esquema (atividade dupla anti-HIV e anti-HBV) — suspendê-lo pode causar flare de hepatite B.
- 📝 **Como caiu:** EBSERH 2026 Q51 — início de TARV em pneumocistose com coinfecção por hepatite B.

## 🔹 Colite por citomegalovírus

- **Quando suspeitar:** CD4 muito baixo (<50-100); febre, dor abdominal, diarreia sanguinolenta.
- **Diagnóstico:** exige biópsia colônica com inclusões virais para confirmar doença de órgão-alvo — antigenemia ou PCR sérico isolados só mostram viremia, não doença.
- **Tratamento:** ganciclovir intravenoso.
- 📝 **Como caiu:** ENARE 2025 Q20.

## 🔹 Retinite por citomegalovírus

- **Quando suspeitar:** CD4 <50; moscas volantes, perda visual indolor e progressiva.
- **Diagnóstico:** fundo de olho com hemorragias e exsudatos perivasculares ("queijo com ketchup").
- **Tratamento:** ganciclovir sistêmico e/ou implante intravítreo — diferente da colite por CMV.
- 📝 **Como caiu:** ainda não cobrado no corpus — prova clássica de CD4 <50.

## 🔹 Leucoplasia pilosa oral

- **Mecanismo:** reativação do vírus Epstein-Barr em mucosa oral.
- **Quadro:** placas esbranquiçadas nas bordas laterais da língua, não removíveis com espátula (diferencia de candidíase), geralmente assintomáticas.
- 💎 **Pearl:** marcador de imunossupressão — não é lesão pré-maligna.
- 📝 **Como caiu:** ENARE 2025 Q77.

## 🔹 Sarcoma de Kaposi

- **Mecanismo:** neoplasia vascular pelo HHV-8.
- **Quadro:** lesões cutâneo-mucosas violáceas indolores, podendo acometer o trato gastrointestinal.
- **Tratamento:** regride parcialmente só com reconstituição imune via TARV eficaz, em doença limitada.
- 📝 **Como caiu:** ENARE 2025 Q79.

## 🔹 Neurotoxoplasmose

- **Quando suspeitar:** CD4 <100 (geralmente <50), sem profilaxia adequada; cefaleia, febre, déficit focal e/ou convulsão de instalação subaguda.
- **Diagnóstico:** RM de crânio com **múltiplas lesões**, tipicamente com **realce em anel** e edema perilesional; sorologia IgG anti-*Toxoplasma* costuma ser positiva (alta sensibilidade, mas baixo valor preditivo dada a alta soroprevalência da infecção latente).
- **Tratamento:** **empírico**, sem esperar biópsia — sulfadiazina + pirimetamina + ácido folínico. Resposta clínico-radiológica esperada em cerca de **2 semanas**; biópsia estereotáxica fica reservada para falha terapêutica nesse prazo.
- 💎 **Pearl:** é a causa mais comum de lesão expansiva cerebral no HIV avançado — por isso é sempre o primeiro diagnóstico a tratar empiricamente diante desse quadro.
- ⚠️ **Pitfall:** partir direto para biópsia sem tentar o tratamento empírico primeiro — o padrão é tratar e reavaliar em 2 semanas.
- 📝 **Como caiu:** ainda não cobrado no corpus — mas é a base do diferencial de lesão de SNC mais cobrável do assunto.

## 🔹 Linfoma primário do sistema nervoso central

- **Quando suspeitar:** HIV avançado com CD4 muito baixo (<50); associado ao vírus Epstein-Barr (EBV).
- **Diagnóstico:** RM tipicamente com lesão **única** (ao contrário das múltiplas da neurotoxoplasmose), realce em anel mais espesso e irregular, podendo restringir à difusão; PCR de EBV no líquor é altamente específico quando positivo. Quando disponível, SPECT com tálio-201 ou PET ajuda a diferenciar de processo infeccioso (linfoma hipercaptante; toxoplasmose hipocaptante).
- **Conduta:** **não responde a tratamento antiparasitário** — se não houver melhora clínico-radiológica em ~2 semanas de tratamento empírico para toxoplasmose, reforça-se a suspeita de linfoma e segue-se para biópsia estereotáxica (padrão-ouro diagnóstico). Manejo oncológico (quimioterapia, com ou sem radioterapia) associado à otimização da TARV.
- 💎 **Pearl:** o critério que mais separa dos outros diferenciais é lesão única + EBV positivo + ausência de resposta ao tratamento empírico antiparasitário.
- ⚠️ **Pitfall:** manter tratamento empírico para toxoplasmose indefinidamente sem reavaliar em 2 semanas — atraso no diagnóstico de linfoma piora o prognóstico.
- 📝 **Como caiu:** ainda não cobrado no corpus — completa o diferencial da neurotoxoplasmose, com alto potencial de cobrança.

## 🔹 Leucoencefalopatia multifocal progressiva (LEMP)

- **Mecanismo:** reativação do vírus JC (poliomavírus), que infecta oligodendrócitos e causa desmielinização.
- **Quando suspeitar:** CD4 tipicamente <100; déficits focais progressivos (fraqueza, alterações visuais, disfunção cognitiva) de instalação subaguda, **sem** cefaleia ou febre proeminentes — diferença clínica chave frente à neurotoxoplasmose e ao linfoma.
- **Diagnóstico:** RM com lesões de substância branca multifocais e assimétricas, **sem efeito de massa e sem realce** pelo contraste; PCR de vírus JC no líquor confirma.
- **Tratamento:** não existe antiviral específico eficaz — a única intervenção que muda o curso é a reconstituição imune, priorizando o início (ou otimização) da TARV o quanto antes.
- 💎 **Pearl:** é a única das três lesões de SNC sem efeito de massa e sem realce ao contraste — o achado de imagem mais discriminativo do diferencial.
- ⚠️ **Pitfall:** iniciar TARV rapidamente pode desencadear IRIS paradoxal na LEMP (piora clínica inicial), mas isso não é motivo para adiar a TARV — o manejo correto é tratar a IRIS quando ocorrer, não suspender o antirretroviral.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Meningite criptocócica

- **Quando suspeitar:** CD4 <100; cefaleia subaguda, sinais meníngeos que podem ser discretos (mascarados pela imunossupressão), papiledema por hipertensão intracraniana.
- **Diagnóstico:** antígeno criptocócico sérico e/ou liquórico (alta sensibilidade e especificidade); tinta da China e cultura fúngica do líquor confirmam.
- **Tratamento:** indução com anfotericina B + flucitosina. Atenção especial à hipertensão intracraniana — punções lombares de alívio seriadas reduzem mortalidade, independentemente do tratamento antifúngico já estar otimizado.
- 💎 **Pearl:** o controle da pressão liquórica (punções de alívio repetidas) é tão determinante para o prognóstico quanto o antifúngico em si.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**Diferencial de lesão expansiva/subaguda de SNC no HIV avançado**

| Entidade | Nº de lesões | Realce | Efeito de massa | Resposta ao tto empírico | Agente |
|---|---|---|---|---|---|
| Neurotoxoplasmose | Múltiplas | Em anel | Sim | Sim, em ~2 semanas | *Toxoplasma gondii* |
| Linfoma primário de SNC | Única (típico) | Anel espesso/irregular | Sim | Não | EBV |
| LEMP | Multifocais (substância branca) | Ausente | Ausente | Não (só melhora com TARV) | Vírus JC |
| Meningite criptocócica | Não é lesão focal — meníngea/HIC | — | Hipertensão intracraniana | Sim, com antifúngico + PL de alívio | *Cryptococcus* spp. |

**Profilaxias primárias por CD4**

| CD4 (céls/mm³) | Risco associado | Profilaxia/conduta |
|---|---|---|
| <200 | Pneumocistose, candidíase esofágica, toxoplasmose | Sulfametoxazol-trimetoprima |
| <100 | Neurotoxoplasmose, meningite criptocócica (ver acima) | Rastreio ativo de sintomas neurológicos |
| <50 | Retinite por CMV, complexo *Mycobacterium avium* (MAC) | Azitromicina semanal (MAC); fundoscopia periódica |
| Qualquer valor | Tuberculose, coinfecções virais (HBV/HCV) | TARV imediata, independentemente do CD4 |

- A posologia do sulfametoxazol-trimetoprima não é fixa dentro da faixa <200: para profilaxia só de pneumocistose, 3x/semana já basta — mas essa dose não protege de forma confiável contra toxoplasmose
- Quando o CD4 cai para <100 num paciente IgG anti-*Toxoplasma* positivo, a dose deve subir para **diária**, que é a única que cobre as duas profilaxias ao mesmo tempo
- Suspende-se a profilaxia quando o CD4 sobe e se mantém acima do limiar por tempo definido em TARV

## 📚 Referências essenciais

- PCDT de Manejo da Infecção pelo HIV em Adultos — Módulo 1 (Tratamento) e Módulo 2 (Coinfecções e Infecções Oportunistas), Ministério da Saúde (atualização 2023-2024).
- PCDT de Profilaxia Pré-Exposição (PrEP) de Risco à Infecção pelo HIV — Ministério da Saúde.
- PCDT de Profilaxia Pós-Exposição (PEP) de Risco à Infecção pelo HIV, ISTs e Hepatites Virais — Ministério da Saúde.
- Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV — NIH/CDC/HIVMA (para as infecções oportunistas sem PCDT nacional específico: neurotoxoplasmose, LEMP, meningite criptocócica, retinite por CMV).
`;

export default content.trim();
