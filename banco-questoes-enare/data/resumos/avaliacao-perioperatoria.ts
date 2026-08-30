/**
 * Resumo — Emergências e Terapia Intensiva · Avaliação perioperatória.
 *
 * Cobre as entidades do assunto no corpus: manejo perioperatório de
 * estatina e avaliação de risco cardiovascular pré-operatório (índice de
 * risco cardíaco revisado, capacidade funcional e decisão de solicitar
 * exames complementares antes de cirurgia não cardíaca). Também traz,
 * como extrapolação de alto rendimento ainda não cobrada nas provas reais,
 * outros escores/critérios perioperatórios (ASA, Caprini/VTE, ARISCAT,
 * índice de fragilidade, STOP-BANG) e o manejo perioperatório de outras
 * classes de medicação crônica.
 */
const content = `
## 🎯 Essencial

- **Estatina: NÃO suspender no perioperatório.** Deve ser mantida (inclusive no dia da cirurgia) em quem já usa cronicamente — reduz eventos cardiovasculares e mortalidade perioperatória, efeito pleiotrópico independente do LDL.
- **Avaliação de risco cardiovascular pré-operatório segue um algoritmo escalonado:** urgência da cirurgia → doença cardíaca ativa/instável → risco cirúrgico → capacidade funcional → índice de risco (RCRI) → necessidade de exame complementar.
- **Capacidade funcional ≥4 METs (subir 2 lances de escada sem sintomas)** dispensa investigação cardíaca adicional na maioria dos casos, mesmo em quem tem fatores de risco.
- **Índice de Risco Cardíaco Revisado (RCRI/Lee):** cirurgia de alto risco, DAC, ICC, doença cerebrovascular, diabetes insulino-dependente e creatinina >2 mg/dL — cada um soma 1 ponto; ≥2 pontos eleva risco de evento cardíaco maior.
- **Cirurgia de emergência não espera avaliação cardiológica extensa** — otimiza-se o que for possível no tempo disponível e opera-se.
- **Betabloqueador: não iniciar de novo no perioperatório imediato** só por causa da cirurgia — risco de bradicardia/hipotensão superar benefício; manter se já em uso crônico.
- **Exame complementar (ex.: ecocardiograma, teste de estresse) só se o resultado for mudar a conduta** — pedir por rotina, sem essa premissa, é conduta ultrapassada.
- **Classificação ASA (American Society of Anesthesiologists)**, de I (paciente hígido) a VI (morte encefálica/doador), estima risco anestésico global e é usada em toda avaliação pré-anestésica, complementar (não substituta) ao RCRI, que é específico para risco cardíaco.
- **Profilaxia de tromboembolismo venoso (TEV) é parte obrigatória da avaliação perioperatória** — o escore de Caprini estratifica risco de TEV e orienta a escolha entre profilaxia mecânica (compressão pneumática) e farmacológica (heparina profilática), conforme o risco de sangramento cirúrgico concomitante.

## 💎 Pearls

- **Dispneia aos mínimos esforços ou incapacidade de subir um lance de escada** já classifica capacidade funcional baixa (<4 METs) e reforça a indicação de investigação adicional antes de cirurgia de alto risco.
- **Síndrome coronariana aguda recente (<60 dias), ICC descompensada, arritmia significativa e doença valvar grave sintomática** são as "condições cardíacas ativas" que adiam cirurgia eletiva independentemente do RCRI.
- **Biomarcadores (BNP/troponina) pré-operatórios** têm papel crescente em cirurgia de alto risco com RCRI elevado, mas não substituem a avaliação clínica funcional.
- **Estatina de início recente (poucos dias antes da cirurgia) também deve ser mantida**, não é motivo para suspensão isolada.
- **Anti-hipertensivos IECA/BRA** costumam ser suspensos no dia da cirurgia pelo risco de hipotensão intraoperatória refratária — distinto da conduta da estatina, que é o oposto (manter).
- **Anticoagulantes orais diretos (DOACs) e varfarina** têm janelas de suspensão pré-operatória específicas (variam com a função renal e o risco hemorrágico do procedimento); "bridging" com heparina só é indicado em situações de alto risco trombótico (ex.: prótese valvar mecânica, FA com CHA₂DS₂-VASc muito elevado), não de rotina.
- **Metformina deve ser suspensa no dia da cirurgia** (risco de acidose lática em caso de hipoperfusão/contraste iodado); inibidores de SGLT2 idealmente suspensos 3-4 dias antes, pelo risco de cetoacidose euglicêmica perioperatória.
- **Escore ARISCAT** estima risco de complicação pulmonar pós-operatória (idade, SpO2 basal, infecção respiratória recente, anemia, tipo e duração da cirurgia) — complementar ao RCRI, que é focado só em risco cardíaco.
- **Anemia pré-operatória deve ser investigada e corrigida (quando possível) antes de cirurgia eletiva de médio/grande porte** — associa-se a maior necessidade transfusional e pior desfecho pós-operatório; ferropenia isolada pode ser tratada com ferro (oral ou EV) sem necessariamente transfundir.
- **Controle glicêmico perioperatório: alvo de glicemia moderado (140-180 mg/dL)** em pacientes diabéticos e não diabéticos internados — hipoglicemia e hiperglicemia extrema pioram desfecho cirúrgico (infecção de sítio cirúrgico, cicatrização).
- **Cessação do tabagismo pelo menos 4 semanas antes de cirurgia eletiva** reduz complicações respiratórias e de cicatrização de ferida — benefício mensurável mesmo quando a parada é recente (não precisa ser de longa data para ajudar).
- **Jejum pré-operatório moderno segue protocolos ERAS (Enhanced Recovery After Surgery)**: líquidos claros permitidos até 2h antes da indução, sólidos até 6-8h — jejum prolongado desnecessário só aumenta desconforto e resistência à insulina perioperatória, sem benefício de segurança adicional.
- **Delirium pós-operatório** é mais comum em idosos, portadores de demência prévia, polifarmácia com drogas anticolinérgicas/benzodiazepínicos, e cirurgias de maior porte — triagem cognitiva pré-operatória (ex.: Mini-Cog) ajuda a identificar quem tem maior risco e orientar prevenção (evitar benzodiazepínico, mobilização precoce, controle de dor multimodal).
- **Índice de fragilidade pré-operatório** (velocidade de marcha, força de preensão, perda de peso não intencional, exaustão referida) prediz complicações e mortalidade pós-operatória de forma independente da idade cronológica isolada — cada vez mais incorporado à avaliação pré-operatória do idoso cirúrgico.
- **Apneia obstrutiva do sono não diagnosticada** é fator de risco para complicação respiratória e via aérea difícil no perioperatório — o questionário STOP-BANG é ferramenta de rastreio simples e amplamente usada na consulta pré-anestésica.
- **AAS em prevenção secundária (doença cardiovascular estabelecida) geralmente é mantido no perioperatório**, exceto em cirurgias com risco de sangramento em espaço fechado (neurocirurgia intracraniana, alguns procedimentos de canal medular/câmara posterior do olho) — o estudo POISE-2 mostrou que suspender AAS de rotina não reduz sangramento o suficiente para compensar o risco trombótico na maioria das cirurgias não cardíacas.
- **Não iniciar clonidina ou outro alfa-2-agonista no perioperatório "para proteção cardíaca"** — o mesmo estudo POISE-2 mostrou que essa estratégia aumenta hipotensão clinicamente significativa e parada cardíaca não fatal, sem reduzir infarto, o par exato do raciocínio já aplicado ao betabloqueador novo.
- **Stent coronariano recente muda o cronograma da cirurgia eletiva, não só a medicação**: cirurgia eletiva deve ser adiada por pelo menos 30 dias após stent metálico convencional e por pelo menos 6 meses após stent farmacológico (idealmente aguardando o curso completo de dupla antiagregação) — suspender o antiagregante antes desse prazo para operar eleva o risco de trombose de stent, um evento com mortalidade muito alta.

## ⚠️ Pitfalls

- **Suspender estatina "para operar com segurança"** — é justamente o contrário do recomendado; suspensão associa-se a pior desfecho cardiovascular.
- **Pedir ecocardiograma ou teste ergométrico de rotina para todo paciente antes de cirurgia não cardíaca** — só indicado quando o resultado muda a conduta e a capacidade funcional é baixa/indeterminada.
- **Adiar cirurgia de emergência para "otimização cardiológica completa"** — não se aplica; otimiza-se o possível e opera-se.
- **Iniciar betabloqueador novo no perioperatório imediato pensando em "proteção cardíaca"** — aumenta risco de eventos adversos (AVC, hipotensão, bradicardia).
- **Confundir capacidade funcional subjetiva do paciente com RCRI** — são ferramentas complementares, não substituem uma à outra.
- **Fazer bridging com heparina de rotina para todo paciente em anticoagulação oral crônica** — aumenta sangramento sem reduzir eventos trombóticos na maioria dos casos; reservar para risco trombótico realmente alto.
- **Manter metformina/SGLT2i no dia da cirurgia "porque o paciente está compensado"** — risco desnecessário de acidose lática ou cetoacidose euglicêmica perioperatória.
- **Transfundir concentrado de hemácias por um valor de hemoglobina isolado, sem avaliar sintomas/comorbidade cardiovascular** — estratégia restritiva (gatilho ~7 g/dL na maioria dos pacientes, ~8 g/dL em cardiopatas) é a preferida; transfusão liberal não melhora desfecho e aumenta risco de complicações.
- **Cancelar cirurgia eletiva só por hiperglicemia leve isolada, sem contexto de descompensação** — o foco deve ser controle glicêmico razoável antes e durante o procedimento, não glicemia "perfeita".
- **Manter jejum prolongado (>8h) "por segurança"** — protocolos ERAS modernos permitem líquidos claros até 2h antes da indução sem aumento de risco de aspiração, e o jejum excessivo só piora resistência à insulina e desconforto do paciente.
- **Prescrever benzodiazepínico de rotina para ansiedade pré-operatória em idoso** — aumenta risco de delirium pós-operatório; medidas não farmacológicas e analgesia multimodal são preferíveis nesse grupo.
- **Avaliar risco cirúrgico só pela idade cronológica** — fragilidade funcional (marcha, força, autonomia) prediz complicações melhor do que a idade isolada em muitos cenários.
- **Ignorar rastreio de apneia obstrutiva do sono na consulta pré-anestésica** — aumenta risco de via aérea difícil e de complicação respiratória no pós-operatório imediato, especialmente com opioides.
- **Suspender AAS de rotina em prevenção secundária antes de cirurgia não cardíaca de baixo risco hemorrágico** — na maioria dos cenários, mantê-lo é mais seguro do que suspender.
- **Iniciar clonidina/alfa-2-agonista perioperatório pensando em reduzir risco cardíaco** — evidência de aumento de hipotensão/parada cardíaca sem benefício isquêmico.
- **Operar cirurgia eletiva antes do prazo mínimo após colocação de stent coronariano**, ou suspender a dupla antiagregação antes desse prazo para viabilizar a cirurgia — risco de trombose de stent, evento com alta mortalidade.

## 📝 Como a banca cobra

**Avaliação perioperatória aparece em 2 questões (0,94% do corpus)**, ambas pelo ENARE, testando o raciocínio de decisão prática (manter ou suspender droga; pedir ou não exame) mais do que memorização de escore isolado.

- **ENARE 2025 Q55** cobrou o **manejo perioperatório de estatina** — a resposta esperada é manter o uso, sem suspensão pré-operatória.
- **ENARE 2026 Q56** testou a **avaliação de risco cardiovascular pré-operatório**, no fluxo de decidir se o paciente precisa de investigação cardíaca adicional antes de cirurgia não cardíaca, apoiado em capacidade funcional e fatores de risco do RCRI.

## 🧠 Conceito e fisiopatologia

A avaliação perioperatória cardiovascular busca estimar o risco de evento cardíaco maior (infarto, morte cardíaca) no perioperatório e decidir se alguma intervenção (exame, otimização farmacológica, adiamento) reduz esse risco sem atrasar desnecessariamente uma cirurgia indicada. O raciocínio central é sequencial: primeiro se pergunta se a cirurgia é urgente (se for, o processo de investigação encurta drasticamente); depois se há doença cardíaca ativa que precise ser tratada antes de qualquer coisa; só então se avalia risco cirúrgico e capacidade funcional do paciente.

A manutenção da estatina no perioperatório reflete o conceito de que seus benefícios (estabilização de placa aterosclerótica, efeito anti-inflamatório) atuam de forma relativamente rápida e sua retirada abrupta pode gerar efeito rebote pró-inflamatório, aumentando risco isquêmico justamente no período de maior estresse cardiovascular da cirurgia.

A avaliação perioperatória completa não se limita ao risco cardíaco: risco pulmonar (capacidade de tossir, complacência torácica reduzida pela dor e imobilização), risco de TEV (estase venosa por imobilização, estado pró-coagulante da resposta cirúrgica ao trauma) e risco metabólico (jejum, resposta ao estresse elevando glicemia mesmo em não diabéticos) somam-se ao risco cardíaco na decisão global de conduzir o paciente com segurança pelo período perioperatório.

A resposta neuroendócrina ao trauma cirúrgico (liberação de cortisol, catecolaminas e citocinas inflamatórias) explica por que praticamente todo paciente cirúrgico fica hiperglicêmico transitoriamente, por que o estado é pró-trombótico no pós-operatório imediato, e por que a otimização pré-operatória de comorbidades crônicas (função cardíaca, controle glicêmico, estado nutricional) tem impacto direto na capacidade do organismo de tolerar esse estresse fisiológico adicional.

## 🔎 Diagnóstico

- **Estratificação de risco cirúrgico:** classificar a cirurgia proposta como baixo ou alto risco de evento cardíaco.
- **Capacidade funcional:** estimar em METs por história (subir escadas, caminhar em aclive, atividades domésticas); o questionário DASI (Duke Activity Status Index) formaliza essa estimativa quando a história espontânea é pouco confiável.
- **RCRI (índice de Lee):** somar pontos por cirurgia de alto risco, DAC, ICC, doença cerebrovascular, diabetes insulino-dependente e creatinina >2 mg/dL.
- **Classificação ASA:** estratifica o estado físico geral do paciente (I a VI), usada por toda equipe anestésica além da avaliação cardíaca dirigida.
- **Escore de Caprini:** estratifica risco de TEV perioperatório e orienta a intensidade da tromboprofilaxia.
- **Exame complementar dirigido:** só solicitar se capacidade funcional baixa/indeterminada e RCRI elevado, e se o resultado alterar a conduta cirúrgica ou farmacológica.
- **Hemograma e avaliação nutricional pré-operatória:** rastrear anemia e desnutrição em cirurgias de médio/grande porte, ambas associadas a pior desfecho pós-operatório quando não corrigidas a tempo.

## 💊 Tratamento

- **Manter estatina** de uso crônico durante todo o perioperatório, sem interrupção.
- **Manter betabloqueador** já em uso; não iniciar de novo apenas pela cirurgia.
- **Suspender IECA/BRA no dia da cirurgia**, conforme protocolo institucional, pelo risco de hipotensão intraoperatória.
- **Suspender metformina no dia da cirurgia e SGLT2i com 3-4 dias de antecedência**; retomar após confirmação de função renal estável e ingesta oral adequada.
- **Anticoagulação crônica:** suspender DOAC/varfarina conforme janela de segurança específica da droga e do procedimento; reservar bridging heparínico para risco trombótico alto.
- **Tromboprofilaxia mecânica e/ou farmacológica** conforme escore de Caprini e risco hemorrágico do procedimento.
- **Otimizar condições cardíacas ativas** (ICC descompensada, síndrome coronariana recente, arritmia significativa) antes de cirurgia eletiva; em emergência, operar com o suporte possível.
- **Controle glicêmico perioperatório com alvo moderado** (140-180 mg/dL), evitando tanto hiperglicemia quanto hipoglicemia iatrogênica.
- **Corrigir anemia ferropriva com ferro** antes de cirurgia eletiva quando o tempo permitir, reservando transfusão para gatilho restritivo (Hb ~7 g/dL, ~8 g/dL em cardiopatas) ou sintomas.

## 📚 Referências essenciais

- ACC/AHA Guideline for Perioperative Cardiovascular Management for Patients Undergoing Noncardiac Surgery.
- ESC/ESA Guidelines on Non-cardiac Surgery: Cardiovascular Assessment and Management.
`;

export default content.trim();
