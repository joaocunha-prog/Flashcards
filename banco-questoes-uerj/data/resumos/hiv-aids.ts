/**
 * Resumo — Infectologia · HIV/AIDS.
 *
 * Cobre as entidades do assunto no corpus: início e escolha da TARV
 * (incluindo coinfecção com tuberculose), colite por citomegalovírus,
 * linfoma primário do SNC, neurotoxoplasmose e sarcoma de Kaposi.
 */
const content = `
## 🎯 Essencial

- **Trate todo mundo, sempre — independentemente de CD4 ou carga viral.** É a mudança de paradigma mais importante da última década: TARV é iniciada em qualquer paciente HIV positivo assim que diagnosticado, sem esperar queda de CD4.
- **Esquema preferencial atual: tenofovir + lamivudina + dolutegravir** (dois inibidores de transcriptase reversa análogos de nucleosídeo + um inibidor de integrase) — dolutegravir tem alta barreira genética à resistência e poucos efeitos colaterais.
- **Coinfecção TB-HIV: sempre iniciar RIPE primeiro.** O momento de iniciar a TARV depende do CD4: **CD4 <50 células/mm³ → iniciar TARV em até 2 semanas** após RIPE; **CD4 ≥50 → iniciar TARV entre 2-8 semanas** (adiar reduz risco de síndrome inflamatória de reconstituição imune, a famosa **IRIS**, que pode ser grave especialmente em meningite/neurite tuberculosa).
- **Rifampicina interage com dolutegravir** (reduz seus níveis por indução enzimática) — nesse cenário específico, dobra-se a dose de dolutegravir (2x/dia) ou substitui-se por efavirenz durante o uso concomitante de rifampicina.
- **Neurotoxoplasmose:** lesões **múltiplas com realce anelar** em paciente com CD4 baixo — tratamento empírico é a regra (**sulfadiazina + pirimetamina + ácido folínico**), com reavaliação de imagem em 10-14 dias; só biopsia se não houver resposta.
- **Linfoma primário do SNC (associado a EBV):** diferencial direto de neurotoxoplasmose — pensar quando a sorologia de toxoplasmose é **negativa**, há **poucas lesões** (frequentemente única a poucas), e o líquor tem **PCR positivo para EBV**.
- **Colite por CMV:** ocorre com CD4 muito baixo (<50-100), diagnóstico exige **biópsia colônica com inclusões virais** (não sorologia nem PCR sérico isolados) — tratamento com **ganciclovir**.
- **Sarcoma de Kaposi:** lesões cutâneas violáceas + associação com **herpes-vírus humano 8 (HHV-8)** — mais comum com CD4 baixo, mas pode ocorrer mesmo com controle parcial da doença.
- **Toda lesão expansiva cerebral em paciente HIV com CD4 baixo começa com TC/RM com contraste** — o padrão de realce (anelar múltiplo × poucas lesões) e a sorologia de toxoplasmose orientam entre neurotoxoplasmose (tratamento empírico) e linfoma (biópsia).

## 💎 Pearls

- **CD4 <200 define AIDS por critério imunológico** (independentemente de sintomas) e é o limiar abaixo do qual entram as profilaxias para infecções oportunistas (ex.: sulfametoxazol-trimetoprima para *Pneumocystis* com CD4 <200; ainda mais baixo para outras profilaxias).
- **A gravidade da IRIS é maior quanto menor o CD4 e quanto mais precoce a TARV é iniciada em relação ao tratamento da infecção oportunista** — daí a janela de 2-8 semanas específica para tuberculose, ajustada pelo CD4.
- **Sarcoma de Kaposi pode acometer mucosa oral e trato gastrointestinal**, não só pele — placas esbranquiçadas associadas na vinheta costumam ser candidíase oral concomitante (outro marcador de imunossupressão avançada), não parte do próprio sarcoma.
- **Neurotoxoplasmose é a causa mais comum de lesão expansiva cerebral em HIV**, mesmo assim, sempre vale considerar linfoma primário do SNC quando a resposta ao tratamento empírico falha ou o padrão de imagem é atípico (lesão única, sem realce anelar típico).
- **O gene-Xpert positivo para tuberculose em paciente HIV positivo já define o início do RIPE** — não é preciso aguardar cultura para começar o tratamento antituberculose.
- **A ordem de introdução de terapias em paciente com múltiplas infecções oportunistas simultâneas importa** — geralmente trata-se a infecção mais grave/aguda primeiro (ex.: tuberculose disseminada, meningite) e a TARV entra depois, no momento certo para minimizar IRIS.

## ⚠️ Pitfalls

- **Esperar CD4 cair antes de iniciar TARV** — é conduta ultrapassada; hoje trata-se todo paciente diagnosticado, independentemente de CD4/carga viral.
- **Iniciar TARV e RIPE simultaneamente no primeiro dia** em coinfecção HIV-TB — risco alto de IRIS grave; a introdução da TARV deve ser escalonada conforme o CD4.
- **Diagnosticar colite por CMV só com antigenemia ou PCR sérico positivo** — esses exames podem refletir apenas viremia sem doença de órgão-alvo; o diagnóstico definitivo de colite por CMV exige biópsia colônica mostrando as células com inclusão característica.
- **Tratar toda lesão cerebral com realce anelar em HIV como neurotoxoplasmose sem reavaliar a resposta terapêutica** — ausência de melhora clínica/radiológica em 10-14 dias exige biópsia para excluir linfoma primário do SNC ou outras causas.
- **Usar dolutegravir em dose padrão durante uso concomitante de rifampicina** — a interação reduz níveis do dolutegravir; é preciso ajustar a dose ou trocar o terceiro agente.
- **Esquecer que a TARV deve ser mantida/reforçada mesmo diante de infecção oportunista ativa** (respeitando o momento certo de início) — abandonar o controle virológico durante o tratamento da infecção oportunista prolonga a imunossupressão.

## 📝 Como a UERJ cobra

**HIV/AIDS é #14 do ranking (6 questões, 2,4% do corpus)**, com foco marcado em **decisões terapêuticas em cenários de coinfecção e complicações oportunistas** — a banca raramente testa só "reconheça que é HIV", e sim "o que fazer a seguir" em situações clínicas específicas.

- **Início e escolha da TARV** apareceu 2 vezes (2021 Q21, 2022 Q45), a segunda em cenário de coinfecção tuberculose-HIV testando o **momento exato de início** conforme CD4 e a **interação rifampicina-dolutegravir** — um dos itens mais tecnicamente exigentes do banco nesse assunto.
- **Colite por CMV** (2022 Q44) testou explicitamente que o diagnóstico exige **biópsia, não sorologia/PCR sérico**.
- **Linfoma primário do SNC** (2024 Q18) e **neurotoxoplasmose** (2025 Q21) foram cobrados em provas diferentes, mas seguem o mesmo raciocínio de diferencial de lesão expansiva cerebral — vale estudar as duas questões juntas.
- **Sarcoma de Kaposi** (2024 Q37) testou o agente etiológico (HHV-8) diretamente, não apenas o reconhecimento clínico.

Todas as questões deste assunto citam explicitamente o **PCDT de Manejo da Infecção pelo HIV em Adultos (Ministério da Saúde)** como referência, reforçando que a banca segue de perto o protocolo nacional vigente.

## 🆕 Atualização

- O **PCDT de HIV do Ministério da Saúde** já recomenda dolutegravir como base do esquema preferencial de primeira linha desde as versões mais recentes, alinhado à prática internacional (guias da OMS e DHHS/EUA) — o conteúdo já cobrado pela UERJ reflete essa atualização.
- **Lenacapavir**, inibidor do capsídeo do HIV de aplicação subcutânea semestral, representa a fronteira mais recente da terapia antirretroviral (incluindo uso como profilaxia pré-exposição de longuíssima duração) — ainda não cobrado pela banca, mas é a inovação mais relevante em farmacoterapia do HIV nos últimos anos.
- A **profilaxia pré-exposição (PrEP)** oral e injetável (cabotegravir de longa ação) e a **profilaxia pós-exposição (PEP)** são cada vez mais incorporadas à prática clínica de rotina, ampliando o espectro de prevenção além do tratamento de quem já é soropositivo — tema relevante para expansão futura do assunto.

## 🧠 Conceito e fisiopatologia

O HIV infecta preferencialmente linfócitos T CD4+, usando a molécula CD4 e um correceptor (CCR5 ou CXCR4) para entrada celular, e integra seu material genético ao genoma do hospedeiro via transcriptase reversa e integrase — por isso os principais alvos terapêuticos da TARV são justamente essas enzimas virais (inibidores de transcriptase reversa, de integrase, de protease). A depleção progressiva de linfócitos CD4+ compromete a imunidade celular, abrindo espaço para infecções oportunistas cuja gravidade e tipo dependem diretamente do grau de imunossupressão (CD4).

A **coinfecção tuberculose-HIV** exige equilíbrio terapêutico delicado: tratar a tuberculose sem controlar o HIV mantém o paciente imunossuprimido e sob risco de outras oportunistas; iniciar a TARV cedo demais, antes do controle inicial da carga bacilar, pode desencadear a **síndrome inflamatória de reconstituição imune (IRIS)** — uma resposta inflamatória exacerbada contra antígenos micobacterianos residuais, à medida que o sistema imune se recupera rapidamente, que pode ser grave (e até fatal) especialmente em formas de tuberculose do SNC.

**Neurotoxoplasmose** resulta da reativação de cistos latentes de *Toxoplasma gondii* no SNC quando a imunidade celular cai abaixo de um limiar crítico (tipicamente CD4 <100), causando encefalite necrosante multifocal — o padrão de realce anelar reflete a organização em abscessos com centro necrótico e periferia inflamatória captante de contraste. **Linfoma primário do SNC**, fortemente associado à infecção por EBV em imunossuprimidos, decorre de proliferação linfoide B monoclonal induzida pelo próprio vírus dentro do parênquima cerebral — sem o gatilho infeccioso multifocal do toxoplasma, tende a formar lesões mais localizadas.

**Colite por CMV** ocorre por reativação do citomegalovírus latente sob imunossupressão profunda, causando vasculite e ulceração da mucosa colônica — a demonstração histológica de células aumentadas com inclusões nucleares e citoplasmáticas características ("olho de coruja") é o que confirma doença de órgão-alvo, distinguindo de simples viremia assintomática.

**Sarcoma de Kaposi** é uma neoplasia vascular multicêntrica causada pela infecção de células endoteliais pelo HHV-8, cuja replicação e transformação celular são favorecidas pela imunossupressão — por isso a lesão regride, ao menos parcialmente, com a reconstituição imune obtida pela TARV eficaz.

## 🩺 Quadro clínico

- **Neurotoxoplasmose:** cefaleia, febre, déficit neurológico focal (hemiparesia, afasia), convulsão, confusão mental, instalação em dias a semanas.
- **Linfoma primário do SNC:** quadro semelhante à neurotoxoplasmose, mas frequentemente com curso mais insidioso e sinais focais relacionados à localização da lesão única/oligofocal.
- **Colite por CMV:** febre, dor abdominal, diarreia sanguinolenta, emagrecimento, em paciente com CD4 muito baixo.
- **Sarcoma de Kaposi:** lesões cutâneas maculopapulares violáceas, indolores, podendo acometer mucosa oral e trato gastrointestinal; linfadenopatia associada é comum.
- **Coinfecção TB-HIV:** febre, sudorese noturna, tosse produtiva prolongada, emagrecimento — apresentação pulmonar clássica ou disseminada/extrapulmonar conforme o grau de imunossupressão.

## 🔎 Diagnóstico

- **TARV/coinfecção TB:** gene-Xpert do escarro (positivo já define início de RIPE), CD4 e carga viral para orientar o momento de início da TARV.
- **Neurotoxoplasmose:** TC/RM de crânio com contraste (lesões múltiplas, realce anelar, edema perilesional); sorologia IgG geralmente positiva (reativação, não infecção primária); tratamento empírico é a própria "prova diagnóstica" — resposta em 10-14 dias confirma.
- **Linfoma primário do SNC:** RM de crânio (lesão única/oligofocal, realce mais homogêneo); PCR para EBV no líquor tem alta especificidade quando positivo; biópsia estereotáxica confirma quando não há resposta ao tratamento empírico de toxoplasmose.
- **Colite por CMV:** colonoscopia com biópsia das úlceras, mostrando células com inclusão citomegálica característica.
- **Sarcoma de Kaposi:** biópsia da lesão cutânea/mucosa, mostrando proliferação vascular atípica; a positividade para HHV-8 na imuno-histoquímica confirma.

## 🚨 Gravidade / classificação

- **CD4 <200 células/mm³** define AIDS por critério imunológico e determina o início de profilaxias para infecções oportunistas específicas (ex.: sulfametoxazol-trimetoprima para *Pneumocystis jirovecii*).
- **CD4 <100 e <50** são limiares progressivamente associados a risco crescente de neurotoxoplasmose, colite por CMV, micobacteriose atípica disseminada, entre outras — quanto mais baixo o CD4, mais amplo o diferencial de infecções oportunistas a considerar.
- **IRIS grave** (especialmente em tuberculose do SNC) pode ser fatal e exige reconhecimento precoce e, por vezes, corticoide associado ao tratamento específico.

## 💊 Tratamento

- **TARV de início:** **tenofovir + lamivudina + dolutegravir**, iniciada em todo paciente diagnosticado independentemente de CD4/carga viral; ajuste de dose de dolutegravir (2x/dia) ou troca por efavirenz se uso concomitante de rifampicina.
- **Coinfecção TB-HIV:** RIPE (rifampicina, isoniazida, pirazinamida, etambutol) sempre iniciado primeiro; TARV introduzida em até 2 semanas se CD4 <50, ou entre 2-8 semanas se CD4 ≥50.
- **Neurotoxoplasmose:** **sulfadiazina + pirimetamina + ácido folínico** (esquema clássico); alternativas incluem sulfametoxazol-trimetoprima em situações de indisponibilidade do esquema padrão.
- **Linfoma primário do SNC:** quimioterapia de alta dose baseada em metotrexato (frequentemente com radioterapia associada), sempre em conjunto com otimização/início da TARV.
- **Colite por CMV:** **ganciclovir** intravenoso (foscarnet como alternativa em resistência/intolerância).
- **Sarcoma de Kaposi:** reconstituição imune com TARV eficaz costuma ser suficiente em doença limitada; quimioterapia sistêmica reservada para doença extensa/visceral.

## 🔀 Diagnóstico diferencial

| Lesão cerebral em HIV | Nº de lesões | Realce | Sorologia toxoplasmose | Conduta |
| --- | --- | --- | --- | --- |
| Neurotoxoplasmose | Múltiplas | Anelar | Positiva | Tratamento empírico |
| Linfoma primário do SNC | Única/poucas | Mais homogêneo | Negativa/irrelevante | PCR-EBV liquórico → biópsia |

## 📋 Tabela de revisão

| Situação | Achado-chave | Confirmação | Conduta |
| --- | --- | --- | --- |
| Início de TARV | Diagnóstico de HIV | — | TARV para todos, sem esperar CD4 |
| TB-HIV, CD4 <50 | Gene-Xpert positivo | — | RIPE, TARV em até 2 semanas |
| Neurotoxoplasmose | Lesões múltiplas anelares | Resposta ao tratamento empírico | Sulfadiazina+pirimetamina |
| Linfoma primário do SNC | Lesão única, EBV+ no liquor | Biópsia | QT com metotrexato |
| Colite por CMV | Diarreia sanguinolenta, CD4 baixo | Biópsia colônica | Ganciclovir |
| Sarcoma de Kaposi | Lesões violáceas | Biópsia + HHV-8 | TARV ± QT |

## 📚 Referências essenciais

- PCDT de Manejo da Infecção pelo HIV em Adultos — Ministério da Saúde (citado explicitamente pela UERJ em praticamente todas as questões deste assunto).
- DHHS Guidelines for the Use of Antiretroviral Agents in Adults and Adolescents with HIV.
- IDSA/CDC/NIH Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV.
`;

export default content.trim();
