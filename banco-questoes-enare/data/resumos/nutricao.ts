/**
 * Resumo — Gastroenterologia e Hepatologia · Nutrição.
 *
 * Cobre as entidades do assunto no corpus: terapia nutricional em íleo
 * pós-operatório com desnutrição grave, seguimento nutricional pós-bypass
 * gástrico em Y de Roux e terapia nutricional em diverticulite complicada.
 * Expandido com avaliação nutricional, cálculo de necessidades calóricas,
 * timing da nutrição no paciente crítico, complicações cirúrgicas da
 * bariátrica além das carências vitamínicas, e classificação de Hinchey
 * para diverticulite — conteúdo ainda não cobrado no corpus, mas
 * plausível em provas futuras do assunto.
 */
const content = `
## 🎯 Essencial

- **Trato gastrointestinal funcionante = via enteral sempre que possível** — "se o intestino funciona, use-o". Nutrição parenteral é reservada para quando a via enteral é impossível, insuficiente ou contraindicada (obstrução completa, íleo prolongado, isquemia intestinal).
- **Íleo pós-operatório com desnutrição grave:** se o íleo se prolonga além de 5-7 dias e o paciente já está desnutrido, a terapia nutricional (preferencialmente enteral, avançando a sonda além do piloro/jejunal se necessário) não deve ser postergada indefinidamente — desnutrição grave muda o cálculo de risco-benefício a favor de iniciar terapia nutricional mais cedo.
- **Síndrome de realimentação** é o risco mais temido ao reiniciar nutrição em paciente gravemente desnutrido — hipofosfatemia, hipocalemia e hipomagnesemia graves nas primeiras 24-72h, por isso inicia-se com **volume/calorias reduzidos e reposição eletrolítica proativa antes e durante** a realimentação.
- **Pós-bypass gástrico em Y de Roux:** exige suplementação vitalícia de **B12, ferro, cálcio, vitamina D e folato** — a anatomia exclui duodeno e jejuno proximal (absorção de ferro e cálcio) e reduz fator intrínseco (absorção de B12).
- **Diverticulite não complicada:** dieta líquida/pobre em resíduos é suficiente, evoluindo conforme melhora clínica. **Diverticulite complicada** (abscesso, perfuração, obstrução) muda a abordagem: repouso intestinal mais rigoroso e, se o quadro se prolongar sem previsão de retomada da via oral, considerar terapia nutricional especializada (enteral se possível, parenteral se não).
- **Nunca prescrever nutrição parenteral plena de imediato num paciente gravemente desnutrido sem correção eletrolítica prévia** — o risco de síndrome de realimentação é proporcional ao grau de desnutrição e à velocidade de reintrodução calórica.
- **No paciente crítico com trato gastrointestinal funcionante, a nutrição enteral deve ser iniciada precocemente (24-48h da admissão/pós-operatório)** — retardo além disso associa-se a maior taxa de infecção e pior desfecho, mesmo sem atingir a meta calórica plena de início.
- **Classificação de Hinchey** estadia a diverticulite complicada por perfuração: I (abscesso pericólico pequeno), II (abscesso pélvico/distante), III (peritonite purulenta), IV (peritonite fecal) — orienta se o tratamento é clínico/drenagem percutânea ou cirurgia de urgência, e por consequência o tempo previsto de repouso intestinal.
- **Cirurgia bariátrica (bypass em Y de Roux, entre outras técnicas) é indicada com IMC ≥40 kg/m², ou ≥35 kg/m² com comorbidade relacionada à obesidade** (diabetes, hipertensão, apneia do sono), após falha de tratamento clínico e avaliação multidisciplinar pré-operatória — o seguimento nutricional cobrado no corpus só faz sentido dentro dessa indicação bem estabelecida.

## 💎 Pearls

- Na desnutrição grave, repor **fósforo, potássio e magnésio antes ou concomitante ao início da dieta**, não depois de detectar a queda — a hipofosfatemia da realimentação pode causar insuficiência respiratória e arritmia.
- **Tiamina deve ser suplementada antes ou junto da primeira carga de glicose** em paciente desnutrido/etilista — evita precipitar encefalopatia de Wernicke, complicação da realimentação tão importante quanto os distúrbios eletrolíticos e frequentemente esquecida.
- **Vitamina B12 pós-bypass** costuma levar meses a anos para se manifestar clinicamente (grandes reservas hepáticas) — a suplementação começa antes dos sintomas aparecerem, não depois.
- **Cálcio e vitamina D são absorvidos principalmente no duodeno/jejuno proximal**, exatamente o segmento excluído no bypass em Y de Roux — por isso a deficiência é praticamente esperada sem suplementação.
- Na diverticulite complicada com necessidade de repouso intestinal prolongado, a **nutrição enteral por sonda (quando o trânsito permite) ainda é preferível à parenteral**, mesmo com menor ingestão calórica por via oral — preserva a integridade da mucosa intestinal e reduz translocação bacteriana.
- **Íleo pós-operatório prolongado** deve levantar suspeita de complicação cirúrgica subjacente (coleção, deiscência) antes de simplesmente atribuir à fisiologia pós-operatória esperada.
- **Dumping syndrome** (precoce: distensão, taquicardia, diaforese 15-30min pós-refeição por deslocamento osmótico de líquido para a alça; tardio: hipoglicemia 1-3h depois por pico exagerado de insulina) é complicação funcional comum pós-bypass, distinta das carências nutricionais — tratada com fracionamento de refeições e redução de açúcares simples, não com suplementação vitamínica.
- **Úlcera marginal e hérnia interna** são complicações cirúrgicas tardias do bypass em Y de Roux que se apresentam com dor abdominal — sempre parte do diagnóstico diferencial no seguimento, junto às deficiências nutricionais.
- **Calorimetria indireta é o padrão-ouro para estimar necessidade calórica** no paciente crítico; na ausência dela, fórmulas preditivas (Harris-Benedict, 25-30 kcal/kg/dia) são aceitáveis, mas tendem a superestimar nas primeiras 48h — hipoalimentação permissiva inicial é preferível à hiperalimentação precoce.
- **Albumina e pré-albumina refletem inflamação sistêmica, não apenas estado nutricional** — caem em qualquer resposta de fase aguda, então não devem ser usadas isoladamente para diagnosticar desnutrição ou guiar terapia nutricional em paciente crítico.
- **Critérios GLIM (Global Leadership Initiative on Malnutrition)** formalizam o diagnóstico de desnutrição combinando ao menos um critério fenotípico (perda de peso não intencional, baixo IMC, redução de massa muscular) com ao menos um critério etiológico (ingesta reduzida/má absorção, doença/inflamação de base) — substituem a impressão clínica isolada por critério padronizado, cada vez mais cobrado em prova.
- **Otimização nutricional pré-operatória** (inclusive antes de cirurgia bariátrica ou colorretal eletiva) reduz complicações pós-operatórias — corrigir desnutrição/anemia antes da cirurgia sempre que o tempo cirúrgico permitir, em vez de operar e só depois se preocupar com o estado nutricional.
- **Critérios NICE de risco para síndrome de realimentação** formalizam quem precisa de cautela extra: **alto risco** se IMC <16, perda de peso >15% em 3-6 meses, ingesta mínima/ausente por >10 dias, ou eletrólitos (K/Mg/P) já baixos antes de iniciar a dieta; **basta 1 critério maior ou 2 menores** para justificar início com calorias bem reduzidas (10-20 kcal/kg/dia inicialmente) e reposição eletrolítica proativa — memorizar o limiar evita subestimar o risco em paciente que "não parece" tão desnutrido.
- **Nutrição trófica (volume mínimo, 10-20 mL/h) nas primeiras 48-72h do paciente crítico** é não inferior à meta calórica plena nesse período inicial (evidência do estudo EDEN, em SDRA) — hiperalimentação precoce não melhora desfecho e pode piorar intolerância gastrointestinal; a progressão para meta plena vem depois, não no primeiro dia.

## ⚠️ Pitfalls

- **Iniciar nutrição parenteral plena e calórica de imediato em paciente gravemente desnutrido** sem reposição eletrolítica prévia — gatilho clássico para síndrome de realimentação.
- **Escolher nutrição parenteral por comodidade quando o trato gastrointestinal ainda funciona** — aumenta custo, risco infeccioso (cateter) e complicações hepatobiliares sem benefício sobre a via enteral.
- **Negligenciar a suplementação vitamínica/mineral pós-bypass** por ausência de sintomas iniciais — as deficiências (B12, ferro, cálcio) são progressivas e silenciosas.
- **Manter jejum prolongado e indefinido em diverticulite complicada** sem reavaliar a necessidade de suporte nutricional especializado — piora o estado nutricional de base sem justificativa clínica após alguns dias.
- **Avançar a dieta rápido demais** na realimentação de um paciente com desnutrição grave, sem monitorar eletrólitos seriadamente nas primeiras 72h.
- **Esquecer tiamina antes da glicose** em paciente desnutrido crônico ou etilista — pode precipitar encefalopatia de Wernicke iatrogênica.
- **Atribuir dor abdominal pós-bypass só a causa nutricional/dietética**, sem investigar hérnia interna ou úlcera marginal como diagnóstico diferencial cirúrgico.
- **Usar albumina isolada como critério de indicação ou de resposta à terapia nutricional** em paciente com inflamação sistêmica ativa — o marcador está confundido pela fase aguda, não pelo estado nutricional real.
- **Indicar cirurgia bariátrica sem avaliação multidisciplinar prévia** (nutricional, psicológica, endócrina) ou fora dos critérios de IMC estabelecidos — a seleção inadequada do candidato aumenta risco de complicação e insucesso a longo prazo.
- **Iniciar nutrição enteral em meta calórica plena já no primeiro dia do paciente crítico** — a estratégia trófica inicial (volume mínimo) nas primeiras 48-72h é preferível, com progressão gradual depois.
- **Aplicar os critérios de risco de síndrome de realimentação só pelo IMC**, ignorando o percentual de perda de peso recente e o tempo de baixa ingesta — qualquer um dos critérios isoladamente já pode classificar o paciente como alto risco.

## 📝 Como a banca cobra

**Nutrição aparece em 3 questões (1,42% do corpus)**, todas do ENARE 2026, cobrindo três cenários clínicos distintos que combinam decisão nutricional com contexto cirúrgico/gastrointestinal.

- **ENARE 2026 Q17** trouxe terapia nutricional em **íleo pós-operatório com desnutrição grave** — testa o equilíbrio entre aguardar resolução do íleo e não postergar terapia nutricional além do razoável num paciente já desnutrido, priorizando via enteral quando possível.
- **ENARE 2026 Q19** cobrou o **seguimento nutricional pós-bypass gástrico em Y de Roux**, provavelmente sobre quais suplementos são obrigatórios no acompanhamento a longo prazo.
- **ENARE 2026 Q54**, classificada como difícil, cobrou terapia nutricional em **diverticulite complicada** — cenário que exige integrar a gravidade da complicação abdominal com a escolha e o momento certo da via nutricional.

## 🧠 Conceito e fisiopatologia

- A preferência pela via enteral se apoia no conceito de que a mucosa intestinal precisa de estímulo luminal (nutrientes) para manter sua integridade estrutural e imunológica
- A ausência de trânsito por tempo prolongado favorece atrofia de vilosidades e translocação bacteriana
- Isso aumenta o risco infeccioso mesmo em pacientes sem infecção abdominal primária

💡 Pensa assim: "se não usa, atrofia" vale para o intestino igual vale para músculo — a mucosa parada sem nutriente na luz perde a barreira e "vaza" bactéria para a circulação.

- Na **síndrome de realimentação**, a reintrodução de carboidratos após jejum prolongado desloca o metabolismo de lipólise para uso de glicose, disparando secreção de insulina
- A insulina promove influxo celular maciço de fósforo, potássio e magnésio, depletando rapidamente esses eletrólitos no plasma → risco de disfunção cardíaca e respiratória
- Pelo mesmo mecanismo de troca de substrato metabólico, o consumo de tiamina (cofator da via glicolítica) se acelera, esgotando reservas já baixas no desnutrido crônico

- No **bypass gástrico em Y de Roux**, a reconstrução anatômica exclui o estômago distal, duodeno e jejuno proximal do trânsito alimentar
- Esses são segmentos-chave para absorção de ferro (forma reduzida pelo ácido gástrico), cálcio e vitamina D, e onde o fator intrínseco (produzido no estômago) se liga à B12 antes de ser absorvido no íleo terminal
- A reconfiguração compromete todas essas etapas simultaneamente
- O esvaziamento gástrico acelerado da bolsa remanescente para o jejuno também explica o dumping syndrome, pela chegada rápida de conteúdo hiperosmolar ao intestino delgado

💡 Pensa assim: o bypass "pula" justamente o trecho do tubo digestivo que funciona como posto de absorção de ferro, cálcio, vitamina D e B12 — por isso a suplementação vitalícia não é exagero, é compensar um desvio de rota permanente.

## 🔎 Diagnóstico

- **Triagem nutricional na admissão hospitalar** (NRS-2002, MUST — Malnutrition Universal Screening Tool) identifica rapidamente pacientes em risco e direciona quem precisa de avaliação nutricional completa — deve ser feita sistematicamente, não apenas quando o paciente "parece" desnutrido.
- **Diagnóstico formal de desnutrição pelos critérios GLIM:** combinação de critério fenotípico (perda de peso, baixo IMC, sarcopenia) e etiológico (ingesta reduzida ou doença/inflamação associada) — substitui escalas isoladas como único parâmetro.
- **Avaliação Subjetiva Global (ASG)** continua ferramenta validada e amplamente usada à beira-leito, baseada em história (perda de peso, mudança de ingesta, sintomas gastrointestinais) e exame físico (perda de gordura subcutânea, massa muscular, edema).
- **Necessidade calórica e proteica:** calorimetria indireta é padrão-ouro; fórmulas preditivas (Harris-Benedict, 25-30 kcal/kg/dia; proteína 1,2-2,0 g/kg/dia no crítico) usadas na ausência dela.
- **Exames laboratoriais** (albumina, pré-albumina, eletrólitos, vitaminas B12/D, ferro) complementam mas não substituem a avaliação clínica — sempre interpretados no contexto de inflamação sistêmica associada.

## 🩺 Quadro clínico

- **Síndrome de realimentação:** fraqueza muscular, arritmia, insuficiência respiratória, edema, alterações do sensório — nas primeiras 72h da reintrodução calórica.
- **Deficiências pós-bypass:** anemia (ferropriva ou megaloblástica por B12/folato), parestesias, fraqueza óssea/osteoporose (cálcio/vitamina D), neuropatia periférica em deficiências graves prolongadas.
- **Complicações cirúrgicas tardias pós-bypass:** dor abdominal em cólica intermitente (hérnia interna, risco de estrangulamento), dor epigástrica pós-prandial ou sangramento (úlcera marginal), sintomas vasomotores e hipoglicemia pós-prandial (dumping).
- **Diverticulite complicada:** dor abdominal localizada persistente, febre, massa palpável (abscesso), sinais de peritonite (perfuração) ou distensão/vômitos (obstrução) — a gravidade segue a classificação de Hinchey.

## 💊 Tratamento

- **Íleo pós-operatório com desnutrição grave:** priorizar via enteral (avançar sonda pós-pilórica se necessário); iniciar com volume/calorias reduzidos e progressão gradual, monitorando eletrólitos; repor tiamina antes/junto da primeira carga de glicose.
- **Pós-bypass em Y de Roux:** suplementação vitalícia de B12 (geralmente parenteral/sublingual), ferro, cálcio citrato + vitamina D, multivitamínico; monitorização laboratorial periódica; fracionamento de refeições e restrição de açúcar simples se dumping.
- **Diverticulite complicada:** tratamento da complicação de base conforme Hinchey (drenagem percutânea guiada por imagem em abscesso Hinchey I-II, cirurgia de urgência em peritonite purulenta/fecal Hinchey III-IV) associado a repouso intestinal proporcional à gravidade; terapia nutricional especializada (enteral preferencial) se jejum prolongado previsto.
- **Paciente crítico em geral:** iniciar nutrição enteral em 24-48h se hemodinamicamente estável, com meta calórica atingida progressivamente (evitar hiperalimentação nas primeiras 48-72h); calorimetria indireta quando disponível.
- **Suporte nutricional domiciliar** (nutrição enteral ou parenteral prolongada) é opção para pacientes que não conseguem atingir meta calórica por via oral no seguimento ambulatorial — decisão multidisciplinar, não conduta automática de alta hospitalar.
- **Reintrodução alimentar pós-diverticulite aguda não complicada:** dieta líquida evoluindo para pobre em resíduos e depois normal conforme melhora clínica, sem necessidade de restrição permanente de sementes/grãos (conceito antigo já abandonado pelas diretrizes atuais).

## 📚 Referências essenciais

- ASPEN/SCCM Guidelines for Nutrition Support Therapy in the Adult Critically Ill Patient.
- ASMBS Guidelines — Nutritional Guidelines for Bariatric Surgery Patients.
- Diretriz da ASCRS (American Society of Colon and Rectal Surgeons) para diverticulite.
`;

export default content.trim();
