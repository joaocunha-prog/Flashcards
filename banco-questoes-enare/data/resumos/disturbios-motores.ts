/**
 * Resumo — Neurologia · Distúrbios motores.
 *
 * Reorganizado por entidade clínica (cada distúrbio do movimento tem sua
 * própria seção com quando suspeitar, diagnóstico, tratamento, pearl e
 * pitfall juntos) — antes esse conteúdo estava picado entre seções
 * genéricas de tipo, misturando Parkinson, SPI e tremor essencial no mesmo
 * bloco de "Diagnóstico" ou "Tratamento", apesar de serem doenças distintas
 * com tratamentos opostos.
 *
 * Cobre as entidades do assunto no corpus: hipotensão ortostática
 * neurogênica na doença de Parkinson, síndrome das pernas inquietas e
 * cinética do ferro, interação da levodopa com piridoxina e tremor
 * essencial tratado com betabloqueador. Também traz, como extrapolação de
 * alto rendimento além do que já foi cobrado, o diagnóstico diferencial de
 * parkinsonismo atípico, complicações motoras tardias, augmentação na SPI,
 * doença de Huntington e síndrome de Tourette.
 */
const content = `
## 🎯 Essencial

- Distinguir **tremor de repouso (Parkinson) de tremor de ação (essencial)** é o eixo central que a banca cobra neste assunto — os tratamentos são completamente diferentes (levodopa não trata tremor essencial; betabloqueador não trata Parkinson).
- **Doença de Parkinson:** tétrade motora (tremor de repouso, rigidez, bradicinesia, instabilidade postural), tipicamente assimétrica no início, com boa resposta a levodopa — essa resposta é quase um critério diagnóstico de exclusão para outros parkinsonismos.
- Os **distúrbios do movimento** vão além de tremor e parkinsonismo: **distonia** (contrações musculares sustentadas gerando postura anormal), **coreia** (movimentos rápidos, irregulares, "dançantes") e **tiques** (movimentos/vocalizações estereotipadas, suprimíveis por curto período) completam o espectro e também podem ser cobrados.
- **Parkinsonismo induzido por fármacos** (antipsicóticos típicos, metoclopramida, cinarizina/flunarizina) é o principal diagnóstico diferencial reversível — sempre revisar a lista de medicamentos antes de rotular como Parkinson idiopático.

## 📝 Como a banca cobra

**Distúrbios motores aparece em 4 questões (1,89% do corpus)**, todas do ENARE 2025, sempre testando reconhecimento fino de fisiopatologia e conduta terapêutica específica, não só o nome da doença.

- **ENARE 2025 Q44** cobrou hipotensão ortostática neurogênica na doença de Parkinson — o ponto-chave é a ausência de taquicardia compensatória.
- **ENARE 2025 Q47** testou a cinética do ferro na síndrome das pernas inquietas, exigindo saber o limiar de ferritina que motiva reposição.
- **ENARE 2025 Q52** cobrou a interação farmacológica entre levodopa e piridoxina isolada — clássica pegadinha de mecanismo.
- **ENARE 2025 Q53** trouxe tremor essencial pedindo a classe terapêutica correta (betabloqueador).
- **Parkinsonismo atípico, doença de Huntington e síndrome de Tourette ainda não foram cobrados isoladamente** — completam o mesmo raciocínio de diagnóstico diferencial de distúrbio do movimento e são candidatos naturais de alto rendimento.

## 🧠 Conceito e fisiopatologia

- **Doença de Parkinson:** degeneração de neurônios dopaminérgicos da substância negra pars compacta, com acúmulo de corpos de Lewy
- O acometimento alcança também o sistema nervoso autônomo periférico → explica a disautonomia por falência do reflexo barorreflexo eferente simpático
- Integra o espectro das **sinucleinopatias**, junto da atrofia de múltiplos sistemas e da demência com corpos de Lewy
- **Síndrome das pernas inquietas:** hipótese ligada a disfunção dopaminérgica central, com o ferro atuando como cofator da tirosina-hidroxilase (enzima limitante da síntese de dopamina)
- **Tremor essencial:** circuito olivo-cerebelo-tálamo-cortical hiperativo, modulado por vias GABAérgicas
- **Coreia:** hiperatividade da via indireta estriatopalidal (excesso relativo de atividade dopaminérgica/perda de neurônios GABAérgicos estriatais, como na doença de Huntington) — mecanismo praticamente **oposto** ao do parkinsonismo

💡 Pensa assim: Parkinson é "faltou dopamina, sobrou rigidez"; coreia é praticamente o espelho — via indireta hipoativa, movimento sobra em vez de faltar. Dois distúrbios do mesmo circuito de gânglios da base, puxando para lados opostos.

## 🔹 Doença de Parkinson

- **Quando suspeitar:** bradicinesia associada a tremor de repouso e/ou rigidez, assimetria inicial, boa resposta a levodopa; **sintomas não motores** costumam preceder o quadro motor em anos — hiposmia, constipação e transtorno comportamental do sono REM são marcadores prodrômicos.
- **Diagnóstico:** clínico (critérios da MDS), baseado na tétrade motora e na resposta à levodopa; neuroimagem (RM) serve para excluir diferenciais estruturais; DAT-scan (quando disponível) ajuda a diferenciar de tremor essencial em casos duvidosos, mas não é exigido de rotina. Estadiamento por **Hoehn e Yahr** e escala **UPDRS/MDS-UPDRS** acompanham a progressão funcional e guiam decisões terapêuticas (ex.: indicação de DBS).
- **Farmacologia — interação levodopa-piridoxina:** **piridoxina (vitamina B6) em altas doses, isolada, reduz o efeito da levodopa** ao acelerar sua descarboxilação periférica em dopamina antes de atravessar a barreira hematoencefálica — por isso a levodopa sempre vem combinada a um inibidor periférico da dopa-descarboxilase (**carbidopa** ou benserazida), que neutraliza esse efeito.
- **Tratamento motor:** levodopa/carbidopa é o padrão-ouro sintomático, especialmente em idosos; agonista dopaminérgico ou inibidor de MAO-B como poupador de levodopa em fases iniciais de pacientes mais jovens.
- **Complicações motoras tardias (flutuações/discinesias):** fracionar a dose de levodopa, associar inibidor de COMT (entacapona) ou de MAO-B (selegilina/rasagilina); estimulação cerebral profunda (DBS) do núcleo subtalâmico para casos refratários com boa resposta prévia à levodopa.
- **Psicose relacionada a Parkinson/levodopa:** quetiapina ou pimavanserina; evitar antipsicóticos típicos e a maioria dos atípicos, que pioram o parkinsonismo.
- ⚠️ **Pitfall:** associar piridoxina isolada (sem carbidopa) à levodopa, achando que é só "suplementação vitamínica inofensiva" — reduz a eficácia do tratamento antiparkinsoniano.
- 📝 **Como caiu:** ENARE 2025 Q52 — interação levodopa-piridoxina.

## 🔹 Hipotensão ortostática neurogênica (complicação da doença de Parkinson)

- **Quando suspeitar:** tontura, turvação visual ou síncope ao levantar, piora pós-prandial e com calor, em paciente com Parkinson avançado.
- **Diagnóstico:** queda ≥20 mmHg na PAS ou ≥10 mmHg na PAD em até 3 minutos de ortostatismo, **sem elevação compensatória da frequência cardíaca** — isso a diferencia de hipotensão por hipovolemia, em que a frequência cardíaca sobe como resposta reflexa.
- **Tratamento:** medidas não farmacológicas primeiro (hidratação, meias de compressão, elevar a cabeceira, fracionar refeições); fludrocortisona ou midodrina se refratária.
- ⚠️ **Pitfall:** tratar apenas suspendendo anti-hipertensivos, sem medidas posturais/farmacológicas específicas.
- 📝 **Como caiu:** ENARE 2025 Q44 — ausência de taquicardia compensatória.

## 🔹 Parkinsonismo induzido por fármacos e diagnóstico diferencial de parkinsonismo atípico

- **Parkinsonismo induzido por fármacos:** geralmente **simétrico**, surge após início/aumento de antipsicótico típico, metoclopramida ou cinarizina/flunarizina, e melhora com sua suspensão em semanas a meses — é a causa reversível mais lembrada em prova.
- **Sinais de alarme para parkinsonismo atípico** (parkinsonismos-plus, resposta pobre/parcial à levodopa): quedas precoces e paralisia do olhar vertical sugerem paralisia supranuclear progressiva (RM: "sinal do beija-flor"); disautonomia precoce e grave associada a sinais cerebelares/piramidais sugere atrofia de múltiplos sistemas (RM: "sinal da cruz da ponte"); apraxia assimétrica de membro com "mão alienígena" sugere degeneração corticobasal; flutuação cognitiva e alucinações visuais precoces (antes ou junto do parkinsonismo) sugerem demência com corpos de Lewy.
- ⚠️ **Pitfall:** rotular todo parkinsonismo simétrico e de início recente como Parkinson idiopático sem revisar a lista de medicamentos em uso.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Síndrome das pernas inquietas (SPI)

- **Quando suspeitar:** urgência de mover as pernas, geralmente com desconforto, que piora ao repouso/à noite e alivia com o movimento — fortemente ligada a **deficiência de ferro**, mesmo quando a ferritina está "normal" para a população geral. Sempre excluir uremia, gestação e deficiência de ferro antes de rotular como forma idiopática/familiar.
- **Diagnóstico:** clínico, por critérios; a **ferritina sérica** é o parâmetro mais sensível para triagem de deficiência de ferro, mesmo com hemograma normal; polissonografia se dúvida diagnóstica ou suspeita de movimento periódico de membros associado.
- **Tratamento:** repor ferro se ferritina **<75 ng/mL** (limiar mais alto que o usual, meta de tratamento >75); se sem deficiência de ferro, agonista dopaminérgico (pramipexol/ropinirol, não ergolínicos, preferidos aos ergolínicos como a bromocriptina pelo menor risco de fibrose valvar cardíaca) ou alfa-2-delta ligante (gabapentina/pregabalina).
- 💎 **Pearl:** **augmentação** é a principal complicação do uso crônico de agonista dopaminérgico na SPI — os sintomas ficam mais intensos, começam mais cedo no dia e podem se espalhar para braços/tronco; a conduta correta é reduzir/trocar a droga, **nunca aumentar a dose**.
- ⚠️ **Pitfall:** esperar ferritina abaixo do corte "populacional" (<15 ng/mL) para tratar — o limiar de tratamento nesse contexto é mais alto (<75 ng/mL); e aumentar a dose do agonista diante de piora sem cogitar augmentação, piorando ainda mais o quadro.
- 📝 **Como caiu:** ENARE 2025 Q47 — cinética do ferro.

## 🔹 Tremor essencial

- **Quando suspeitar:** tremor de ação/postural, bilateral, mãos (às vezes cabeça/voz), sem outros sinais parkinsonianos, tipicamente melhora com álcool; herança frequentemente autossômica dominante com história familiar positiva. "**ET plus**" descreve tremor essencial com sinais neurológicos leves associados (alteração discreta de marcha em tandem, rigidez leve) — ainda tratado como tremor essencial clássico, não como parkinsonismo.
- **Diagnóstico:** clínico, sem exame confirmatório específico; a ausência de outros sinais parkinsonianos e a resposta a álcool/betabloqueador reforçam o diagnóstico. Sempre revisar medicações antes de rotular como idiopático — **tremor induzido por fármacos** (ácido valproico, lítio, amiodarona, broncodilatadores beta-agonistas, corticoide) é diferencial frequente.
- **Tratamento:** **propranolol** como primeira linha; **primidona** como alternativa quando betabloqueador é contraindicado (asma/DPOC grave, bradiarritmias); DBS talâmico ou talamotomia por ultrassom focado em casos refratários e incapacitantes.
- ⚠️ **Pitfall:** confundir tremor essencial com tremor parkinsoniano de repouso — inverter o diagnóstico leva à prescrição errada.
- 📝 **Como caiu:** ENARE 2025 Q53 — classe terapêutica correta.

## 🔹 Doença de Huntington

- **Quando suspeitar:** coreia progressiva + declínio cognitivo + sintomas psiquiátricos (irritabilidade, depressão, psicose) em adulto jovem/meia-idade, com padrão de herança autossômica dominante e **antecipação** (repetições CAG expandidas se ampliam a cada geração, antecipando o início) — história familiar de quadro semelhante em gerações anteriores costuma estar presente.
- **Diagnóstico:** teste genético (contagem de repetições CAG expandidas no gene *HTT*) confirma.
- **Tratamento:** sem terapia modificadora de doença disponível — apenas sintomático, incluindo tetrabenazina para a coreia.
- ⚠️ **Pitfall:** investigar coreia de início na vida adulta como "só nervosismo" ou tique isolado sem perguntar sobre história familiar — atraso no diagnóstico tem implicação para aconselhamento genético da família.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Síndrome de Tourette

- **Quando suspeitar:** tiques motores e vocais crônicos com início na infância, frequentemente associados a TDAH e transtorno obsessivo-compulsivo.
- **Tratamento:** primeira linha é psicoeducação e terapia comportamental (treinamento de reversão de hábito), reservando antipsicóticos de baixa dose para casos incapacitantes.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📚 Referências essenciais

- Movement Disorder Society (MDS) — Diretrizes para diagnóstico e tratamento da doença de Parkinson.
- International Restless Legs Syndrome Study Group (IRLSSG) — Consenso de manejo da síndrome das pernas inquietas.
- American Academy of Neurology — Practice Guideline: Treatment of Essential Tremor.
`;

export default content.trim();
