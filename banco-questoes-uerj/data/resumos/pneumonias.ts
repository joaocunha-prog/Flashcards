/**
 * Resumo — Pneumologia · Pneumonias.
 *
 * Cobre as entidades do assunto no corpus: diagnóstico etiológico da PAC
 * (antígeno urinário), pneumonia aspirativa e abscesso pulmonar, pneumonia
 * no imunossuprimido e influenza/vírus respiratórios.
 */
const content = `
## 🎯 Essencial

- **Antígeno urinário identifica *Legionella* e *Streptococcus pneumoniae*** — os dois únicos agentes de PAC com teste de antígeno urinário validado e amplamente usado; não existe antígeno urinário validado para *Chlamydia* ou *Haemophilus*.
- **Aspiração de conteúdo gástrico não particulado (síndrome de Mendelson):** pneumonite química, não infecciosa — evolução rápida para hipoxemia e "pulmão branco" na radiografia. Conduta inicial é **suporte ventilatório e OBSERVAÇÃO**, sem antibiótico nem corticoide de rotina (a menos que surjam sinais claros de infecção bacteriana secundária).
- **Abscesso pulmonar por aspiração** (diferente da pneumonite química aguda) ocorre em paciente com **fator de risco para broncoaspiração crônica** (rebaixamento de consciência, disfagia por AVC/doença neurológica) — cavidade com **nível hidroaéreo**, flora polimicrobiana incluindo anaeróbios. Tratamento: **clindamicina** (cobertura de anaeróbios orais).
- **Pneumonia em paciente HIV com consolidação lobar típica e aerobroncograma:** o agente mais provável continua sendo **pneumococo** — não presuma *Pneumocystis* automaticamente só porque o paciente é HIV positivo; o padrão radiológico (consolidação lobar focal × infiltrado intersticial bilateral difuso do *Pneumocystis*) é o que orienta.
- **Influenza:** quadro agudo com febre alta, mialgia intensa, contexto de surto/contato — diagnóstico por **teste molecular rápido (NAAT) de swab de nasofaringe**, tratamento com **oseltamivir**, idealmente iniciado nas primeiras 48h (mas com benefício mesmo além disso em casos graves/hospitalizados).
- **Rabdomiólise é complicação reconhecida da influenza** — CPK elevada em paciente com quadro gripal típico não deve ser ignorada.
- **A escolha do antibiótico empírico para PAC depende da gravidade e do local de tratamento** (ambulatorial × enfermaria × UTI), seguindo escores de gravidade (CURB-65/PSI) — não existe "um antibiótico único" para toda pneumonia comunitária.

## 💎 Pearls

- **Legionella é a causa mais associada a PAC grave com manifestações extrapulmonares** (diarreia, confusão mental, hiponatremia, elevação de transaminases/CPK) — quando a vinheta descreve pneumonia + sintomas sistêmicos "fora do pulmão", pense em Legionella e peça o antígeno urinário.
- **A pneumonite de Mendelson evolui rápido (horas) para infiltrado difuso bilateral** — diferente de pneumonia bacteriana aspirativa clássica, que se desenvolve em dias e tem localização mais focal (geralmente em segmentos posteriores de lobos inferiores/segmento superior do lobo inferior, dependendo da posição do paciente no momento da aspiração).
- **A posição do paciente no momento da aspiração determina a localização do abscesso**: decúbito dorsal favorece segmento posterior do lobo superior e segmento superior do lobo inferior (à direita, mais comum, pelo trajeto mais retilíneo do brônquio fonte direito).
- **PAC em paciente sob corticoide crônico ou outra imunossupressão exige ampliar o diferencial etiológico** — além dos agentes típicos, considerar fungos, *Pneumocystis*, micobactérias atípicas, conforme o grau e tipo de imunossupressão.
- **Não existe indicação de antibiótico profilático de rotina na aspiração aguda de conteúdo gástrico estéril** — o uso precoce e desnecessário de antibiótico seleciona flora resistente sem benefício demonstrado; reserva-se para quando surgem sinais clínicos de infecção secundária (piora após 48-72h, febre persistente, secreção purulenta).
- **Testes moleculares rápidos (NAAT) revolucionaram o diagnóstico etiológico viral** — sensibilidade e especificidade muito superiores aos testes rápidos de antígeno mais antigos, permitindo decisão terapêutica (oseltamivir) e de isolamento em tempo hábil.

## ⚠️ Pitfalls

- **Prescrever antibiótico imediatamente após aspiração gástrica aguda sem sinais de infecção** — a conduta correta inicial é observação e suporte; antibiótico "profilático" não reduz complicações e favorece resistência.
- **Tratar abscesso pulmonar por aspiração como pneumonia bacteriana típica**, usando betalactâmico isolado sem cobertura para anaeróbios — clindamicina (ou combinações com cobertura anaeróbia) é necessária pela flora polimicrobiana envolvida.
- **Presumir *Pneumocystis jirovecii* em toda pneumonia de paciente HIV positivo** — o padrão radiológico e o contexto clínico (consolidação lobar focal com aerobroncograma favorece pneumococo, mesmo em HIV; *Pneumocystis* tem padrão mais difuso/intersticial bilateral e ocorre tipicamente com CD4 muito baixo).
- **Aguardar cultura de escarro para iniciar tratamento de influenza suspeita** — o teste molecular rápido permite decisão terapêutica em horas, e o benefício do oseltamivir é maior quanto mais precoce o início.
- **Ignorar CPK elevada em paciente com quadro gripal** atribuindo a outra causa sem considerar rabdomiólise associada à própria infecção viral.
- **Escolher antibiótico para PAC sem considerar gravidade/local de tratamento** — o espectro e a via de administração mudam completamente entre paciente ambulatorial de baixo risco e paciente internado em UTI.

## 📝 Como a UERJ cobra

**Pneumonias é #20 do ranking (5 questões, 2,0% do corpus)**, com cada uma das 5 questões cobrindo um aspecto operacional distinto do manejo — a banca não pergunta "reconheça que é pneumonia", e sim decisões específicas de diagnóstico etiológico e conduta.

- **Diagnóstico etiológico da PAC** (2021 Q17) testou diretamente o conhecimento de que o antígeno urinário serve para Legionella e pneumococo, não para outros agentes — item de conhecimento factual muito específico.
- **Pneumonia aspirativa e abscesso pulmonar** apareceu 2 vezes (2021 Q18, 2024 Q21), a primeira testando a **conduta correta na aspiração aguda** (observar, não tratar de imediato) e a segunda o **antibiótico correto para abscesso já estabelecido** (clindamicina) — as duas pontas do mesmo espectro de doença.
- **Pneumonia no imunossuprimido** (2022 Q38) testou explicitamente que HIV não significa automaticamente *Pneumocystis*, valorizando a leitura do padrão radiológico.
- **Influenza e vírus respiratórios** (2023 Q25) citou o protocolo do Ministério da Saúde e testou tanto o exame diagnóstico correto quanto a complicação (rabdomiólise) — questão que integra diagnóstico e reconhecimento de complicação rara.

## 🆕 Atualização

- **Baloxavir marboxila**, antiviral de dose única com mecanismo diferente do oseltamivir (inibidor da endonuclease do complexo polimerase viral), ampliou as opções terapêuticas para influenza, especialmente pela conveniência posológica — ainda não é padrão nas provas brasileiras, mas já consta em diretrizes internacionais mais recentes.
- Os **escores de gravidade PSI e CURB-65** seguem sendo o padrão para decisão de local de tratamento na PAC, e as diretrizes mais recentes (IDSA/ATS) reforçam a importância de reavaliar a cobertura para MRSA e Pseudomonas apenas em pacientes com fatores de risco específicos (cultura prévia positiva, hospitalização recente com uso de antibiótico IV), evitando o uso indiscriminado de antibióticos de amplo espectro na maioria dos pacientes.
- Painéis moleculares multiplex (detectando simultaneamente vírus respiratórios e, em plataformas mais recentes, bactérias atípicas) vêm ampliando a capacidade de diagnóstico etiológico rápido além do teste isolado para influenza, mudando a prática de investigação sindrômica respiratória.

## 🧠 Conceito e fisiopatologia

**PAC por pneumococo/Legionella** invade o parênquima pulmonar por via inalatória, causando resposta inflamatória alveolar intensa que preenche os espaços aéreos com exsudato — daí a consolidação lobar densa e o aerobroncograma (vias aéreas permeáveis contrastando com o parênquima adjacente preenchido). *Legionella* tem tropismo particular por causar doença sistêmica além do pulmão, refletindo sua capacidade de replicação intracelular em macrófagos e disseminação hematogênica.

**Pneumonite de aspiração (síndrome de Mendelson)** é uma lesão química direta do epitélio alveolar pelo ácido gástrico aspirado (pH muito baixo), causando lesão inflamatória difusa e aguda — não é primariamente infecciosa, por isso antibiótico não tem papel imediato; a infecção bacteriana secundária, quando ocorre, se desenvolve depois, à medida que a barreira epitelial lesada permite colonização.

**Abscesso pulmonar por aspiração crônica** ocorre quando material orofaríngeo colonizado por flora mista (aeróbios e principalmente anaeróbios da cavidade oral) é aspirado repetidamente em paciente com comprometimento do reflexo de proteção de via aérea (disfagia neurológica, rebaixamento de consciência) — a flora polimicrobiana estabelece infecção necrosante localizada, formando a cavidade com nível hidroaéreo característica.

**Pneumonia no imunossuprimido** reflete o espectro de patógenos que a resposta imune comprometida deixa de conter — quanto mais profunda e específica a imunossupressão (CD4 muito baixo, neutropenia, uso de corticoide prolongado), mais o diferencial se amplia para patógenos oportunistas, mas agentes comuns (pneumococo) continuam sendo frequentes mesmo nessa população e não devem ser descartados.

## 🩺 Quadro clínico

- **PAC típica (pneumococo):** febre, tosse produtiva, dor pleurítica, consolidação lobar ao exame físico (macicez, broncofonia, estertores).
- **Legionella:** pneumonia + sintomas sistêmicos desproporcionais (diarreia, confusão mental, mialgia intensa), hiponatremia frequente.
- **Pneumonite de aspiração aguda:** dispneia súbita após evento de aspiração presenciado, hipoxemia rapidamente progressiva.
- **Abscesso pulmonar:** febre, tosse produtiva com expectoração fétida (sugerindo anaeróbios), evolução subaguda (dias a semanas), halitose.
- **Influenza:** início abrupto de febre alta, mialgia intensa, tosse seca, coriza, podendo evoluir com dispneia e infiltrados na doença mais grave; contexto de surto familiar/comunitário.

## 🔎 Diagnóstico

- **PAC — etiologia:** antígeno urinário para pneumococo e Legionella; hemocultura e cultura de escarro nos casos que exigem internação; painel molecular multiplex quando disponível.
- **Pneumonite de aspiração aguda:** clínico + radiografia evoluindo rapidamente para infiltrado difuso — diagnóstico não exige cultura imediata, já que não é primariamente infecciosa.
- **Abscesso pulmonar:** TC de tórax mostrando cavidade com nível hidroaéreo; cultura de escarro/broncoscopia com cobertura para anaeróbios quando há falha terapêutica.
- **Pneumonia no imunossuprimido:** avaliar padrão radiológico (consolidação focal × infiltrado difuso bilateral) associado ao grau de imunossupressão (CD4, uso de corticoide) para direcionar a investigação etiológica (cultura, PCR, LDH e beta-D-glucano se suspeita de *Pneumocystis*).
- **Influenza:** **teste molecular rápido (NAAT) de swab de nasofaringe** — sensibilidade e especificidade superiores aos testes rápidos de antígeno.

## 🚨 Gravidade / classificação

- **CURB-65 e PSI (Pneumonia Severity Index)** classificam a gravidade da PAC e orientam decisão entre tratamento ambulatorial, internação em enfermaria ou UTI.
- **Pneumonite de aspiração com hipoxemia grave/SDRA** exige suporte ventilatório avançado, independentemente de antibiótico.
- **Abscesso pulmonar refratário ao tratamento clínico** (persistência de febre, cavidade que não reduz) pode exigir drenagem percutânea ou abordagem cirúrgica.

## 💊 Tratamento

- **PAC ambulatorial de baixo risco:** amoxicilina ou macrolídeo conforme perfil de comorbidades e risco de resistência local.
- **PAC internada (não grave):** betalactâmico + macrolídeo, ou fluoroquinolona respiratória isolada.
- **PAC grave/UTI:** betalactâmico + macrolídeo ou fluoroquinolona respiratória, com ampliação de cobertura (Pseudomonas, MRSA) apenas diante de fatores de risco específicos.
- **Pneumonite de aspiração aguda:** suporte ventilatório, **observação** — antibiótico reservado para sinais de infecção secundária estabelecida.
- **Abscesso pulmonar por aspiração:** **clindamicina** (cobertura de anaeróbios), tratamento prolongado (semanas) até resolução radiológica ou drenagem quando indicado.
- **Influenza:** **oseltamivir**, idealmente nas primeiras 48h, mas com benefício mesmo além desse prazo em pacientes graves/hospitalizados/de alto risco.

## 🔀 Diagnóstico diferencial

| Situação | Achado radiológico | Etiologia mais provável | Antibiótico/conduta |
| --- | --- | --- | --- |
| Aspiração aguda (horas) | Infiltrado difuso bilateral súbito | Química, não infecciosa | Observação |
| Aspiração crônica (dias-semanas) | Cavidade com nível hidroaéreo | Polimicrobiana/anaeróbios | Clindamicina |
| PAC em HIV, consolidação lobar | Consolidação focal + aerobroncograma | Pneumococo | Betalactâmico + macrolídeo |
| PAC em HIV, CD4 muito baixo | Infiltrado intersticial difuso bilateral | *Pneumocystis jirovecii* | Sulfametoxazol-trimetoprima |

## 📋 Tabela de revisão

| Situação | Exame-chave | Achado | Conduta |
| --- | --- | --- | --- |
| PAC — Legionella/pneumococo | Antígeno urinário | Positivo | Betalactâmico ± macrolídeo/quinolona |
| Aspiração aguda | Radiografia seriada | Infiltrado difuso rápido | Suporte, observar |
| Abscesso pulmonar | TC de tórax | Nível hidroaéreo | Clindamicina |
| Influenza | NAAT nasofaringe | Positivo | Oseltamivir |

## 📚 Referências essenciais

- Diretriz Brasileira de Pneumonia Adquirida na Comunidade — Sociedade Brasileira de Pneumologia e Tisiologia (citada explicitamente pela UERJ em 2021).
- Protocolo de Tratamento de Influenza — Ministério da Saúde (citado explicitamente pela UERJ em 2023).
- IDSA/ATS Clinical Practice Guidelines — Community-Acquired Pneumonia in Adults.
`;

export default content.trim();
