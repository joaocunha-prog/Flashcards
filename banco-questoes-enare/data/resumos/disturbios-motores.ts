/**
 * Resumo — Neurologia · Distúrbios motores.
 *
 * Cobre as entidades do assunto no corpus: hipotensão ortostática
 * neurogênica na doença de Parkinson, síndrome das pernas inquietas e
 * cinética do ferro, interação da levodopa com piridoxina e tremor
 * essencial tratado com betabloqueador. Também traz, como extrapolação de
 * alto rendimento além do que já foi cobrado, o diagnóstico diferencial de
 * parkinsonismo, complicações motoras tardias e augmentação na SPI.
 */
const content = `
## 🎯 Essencial

- **Doença de Parkinson:** tétrade motora (tremor de repouso, rigidez, bradicinesia, instabilidade postural), tipicamente assimétrica no início, com boa resposta a levodopa — essa resposta é quase um critério diagnóstico de exclusão para outros parkinsonismos.
- **Hipotensão ortostática neurogênica** é disautonomia comum em Parkinson avançado: queda de pressão ao ortostatismo **sem taquicardia compensatória** — isso a diferencia de hipotensão por hipovolemia, em que a frequência cardíaca sobe como resposta reflexa.
- **Piridoxina (vitamina B6) em altas doses, isolada, reduz o efeito da levodopa** ao acelerar sua descarboxilação periférica em dopamina antes de atravessar a barreira hematoencefálica — por isso a levodopa sempre vem combinada a um inibidor periférico da dopa-descarboxilase (**carbidopa** ou benserazida), que neutraliza esse efeito.
- **Síndrome das pernas inquietas (SPI):** urgência de mover as pernas, geralmente com desconforto, que piora ao repouso/à noite e alivia com o movimento — fortemente ligada a **deficiência de ferro**, mesmo quando a ferritina está "normal" para a população geral.
- **Tratamento da SPI:** repor ferro se ferritina <75 ng/mL (limiar mais alto que o usual); se sem deficiência de ferro, agonista dopaminérgico (pramipexol/ropinirol) ou alfa-2-delta ligante (gabapentina/pregabalina).
- **Tremor essencial:** tremor de ação/postural, bilateral, mãos (às vezes cabeça/voz), sem outros sinais parkinsonianos, tipicamente melhora com álcool — tratamento de primeira linha é **propranolol**.
- Distinguir **tremor de repouso (Parkinson) de tremor de ação (essencial)** é o eixo central que a banca cobra nesse assunto — os tratamentos são completamente diferentes.
- **Parkinsonismo induzido por fármacos** (antipsicóticos típicos, metoclopramida, cinarizina/flunarizina) é o principal diagnóstico diferencial reversível — geralmente simétrico, surge após início/aumento do fármaco e melhora com sua suspensão.
- A doença de Parkinson tem **sintomas não motores** que costumam preceder o quadro motor em anos: hiposmia, constipação e transtorno comportamental do sono REM são considerados marcadores prodrômicos.
- Além do tremor, os **distúrbios do movimento** incluem outras categorias que também podem ser cobradas: **distonia** (contrações musculares sustentadas gerando postura anormal), **coreia** (movimentos rápidos, irregulares, "dançantes" — Huntington é a causa hereditária clássica) e **tiques** (movimentos ou vocalizações estereotipadas, suprimíveis por curto período — síndrome de Tourette é a forma mais conhecida).
- O **estadiamento de Hoehn e Yahr** e a escala **UPDRS/MDS-UPDRS** são ferramentas clássicas para acompanhar a progressão funcional do Parkinson ao longo do tempo, úteis para guiar decisões terapêuticas (por exemplo, indicação de DBS).

## 💎 Pearls

- Critério de hipotensão ortostática: queda ≥20 mmHg na PAS ou ≥10 mmHg na PAD em até 3 minutos de ortostatismo, **sem** elevação compensatória da frequência cardíaca em causa neurogênica.
- Manejo da hipotensão ortostática neurogênica: medidas não farmacológicas primeiro (hidratação, meias de compressão, elevar a cabeceira, fracionar refeições); fludrocortisona ou midodrina se refratária.
- SPI pode ser secundária — sempre excluir uremia, gestação e deficiência de ferro antes de rotular como forma idiopática/familiar.
- A ferritina sérica é o parâmetro mais sensível para triagem de deficiência de ferro na SPI, mesmo com hemograma completamente normal.
- Tremor essencial tem frequentemente **herança autossômica dominante** e história familiar positiva — pergunta pela banca costuma trazer esse dado.
- Propranolol é contraindicado em asma/DPOC grave e bradiarritmias — nesses casos, a alternativa de primeira linha é **primidona**.
- **Augmentação** é a principal complicação do uso crônico de agonista dopaminérgico na SPI: os sintomas ficam mais intensos, começam mais cedo no dia e podem se espalhar para braços/tronco — a conduta correta é reduzir/trocar a droga, nunca aumentar a dose.
- Agonistas dopaminérgicos **não ergolínicos** (pramipexol, ropinirol) são preferidos aos ergolínicos (bromocriptina) pelo menor risco de fibrose valvar cardíaca.
- Tremor de ação também pode ser **induzido por fármacos** (ácido valproico, lítio, amiodarona, broncodilatadores beta-agonistas, corticoide) — sempre revisar a lista de medicamentos antes de rotular como tremor essencial idiopático.
- Na **doença de Huntington**, a coreia se associa a herança autossômica dominante com antecipação (repetições CAG expandidas), declínio cognitivo e sintomas psiquiátricos — costuma haver história familiar positiva de quadro semelhante em gerações anteriores.

## ⚠️ Pitfalls

- Iniciar agonista dopaminérgico para SPI **sem antes checar e corrigir a ferritina** — tratar a causa de base evita ou reduz a necessidade de droga dopaminérgica.
- Associar piridoxina isolada (sem carbidopa) à levodopa, achando que é só "suplementação vitamínica inofensiva" — reduz a eficácia do tratamento antiparkinsoniano.
- Confundir tremor essencial com tremor parkinsoniano de repouso — inverter o diagnóstico leva à prescrição errada (betabloqueador não trata Parkinson; levodopa não é indicada no tremor essencial isolado).
- Tratar hipotensão ortostática neurogênica apenas suspendendo anti-hipertensivos, sem medidas posturais/farmacológicas específicas.
- Esperar ferritina abaixo do corte "populacional" (<15 ng/mL) para tratar a SPI — o limiar de tratamento nesse contexto é mais alto (<75 ng/mL).
- Rotular todo parkinsonismo simétrico e de início recente como doença de Parkinson idiopática sem revisar a lista de medicamentos em uso — parkinsonismo induzido por fármaco é causa reversível frequentemente esquecida.
- Aumentar a dose do agonista dopaminérgico diante de piora dos sintomas de SPI sem cogitar augmentação — essa conduta piora ainda mais o quadro.
- Investigar coreia de início na vida adulta como "só nervosismo" ou tique isolado sem perguntar sobre história familiar — atraso no diagnóstico de doença de Huntington tem implicação para aconselhamento genético da família.

## 📝 Como a banca cobra

**Distúrbios motores aparece em 4 questões (1,89% do corpus)**, todas do ENARE 2025, sempre testando reconhecimento fino de fisiopatologia e conduta terapêutica específica, não só o nome da doença.

- **ENARE 2025 Q44** cobrou hipotensão ortostática neurogênica na doença de Parkinson — o ponto-chave é a ausência de taquicardia compensatória.
- **ENARE 2025 Q47** testou a cinética do ferro na síndrome das pernas inquietas, exigindo saber o limiar de ferritina que motiva reposição.
- **ENARE 2025 Q52** cobrou a interação farmacológica entre levodopa e piridoxina isolada — clássica pegadinha de mecanismo.
- **ENARE 2025 Q53** trouxe tremor essencial pedindo a classe terapêutica correta (betabloqueador).

## 🧠 Conceito e fisiopatologia

A doença de Parkinson resulta da degeneração de neurônios dopaminérgicos da substância negra pars compacta, com acúmulo de corpos de Lewy — o acometimento não fica restrito ao sistema nervoso central, alcançando também o sistema nervoso autônomo periférico, o que explica a disautonomia (hipotensão ortostática neurogênica) por falência do reflexo barorreflexo eferente simpático, sem a taquicardia compensatória que caracteriza causas puramente hipovolêmicas. A doença de Parkinson integra o espectro das **sinucleinopatias**, junto da atrofia de múltiplos sistemas e da demência com corpos de Lewy — todas compartilham o acúmulo patológico de alfa-sinucleína, ainda que com distribuição topográfica e apresentação clínica distintas.

A síndrome das pernas inquietas tem hipótese fisiopatológica ligada a disfunção dopaminérgica central, com o ferro atuando como cofator essencial da tirosina-hidroxilase (enzima limitante da síntese de dopamina) — daí a associação estreita, e muitas vezes causal, com deficiência de ferro mesmo subclínica.

No tremor essencial, o mecanismo envolve um circuito olivo-cerebelo-tálamo-cortical hiperativo; a melhora paradoxal com álcool sugere modulação por vias GABAérgicas, o que também fundamenta a resposta a betabloqueadores e primidona.

Distonia, coreia e tiques compartilham a origem em disfunção dos núcleos da base, mas por circuitos e neurotransmissores distintos do parkinsonismo: a coreia decorre classicamente de hiperatividade da via indireta estriatopalidal (excesso relativo de atividade dopaminérgica/perda de neurônios GABAérgicos estriatais, como na doença de Huntington), enquanto a distonia envolve desorganização mais complexa do processamento sensitivomotor cortical e subcortical — por isso o espectro dos "distúrbios do movimento" é maior do que tremor e parkinsonismo isoladamente.

## 🩺 Quadro clínico

- **Parkinson:** bradicinesia associada a tremor de repouso e/ou rigidez, assimetria inicial, resposta consistente a levodopa.
- **Sinais de alarme para parkinsonismo atípico** (não Parkinson idiopático): quedas precoces e paralisia do olhar vertical sugerem paralisia supranuclear progressiva; disautonomia precoce e grave associada a sinais cerebelares ou piramidais sugere atrofia de múltiplos sistemas; apraxia assimétrica de membro com fenômeno de "mão alienígena" sugere degeneração corticobasal; flutuação cognitiva e alucinações visuais precoces (antes ou junto do parkinsonismo) sugerem demência com corpos de Lewy.
- **Hipotensão ortostática neurogênica:** tontura, turvação visual ou síncope ao levantar, sem taquicardia reflexa, piora pós-prandial e com calor.
- **Síndrome das pernas inquietas:** urgência desconfortável de mover as pernas, pior à noite/repouso, alívio com movimento.
- **Tremor essencial:** tremor postural/de ação bilateral, sem bradicinesia ou rigidez associadas, melhora transitória com álcool.

## 🔎 Diagnóstico

- **Parkinson:** diagnóstico clínico (critérios da MDS), baseado na tétrade motora e na resposta à levodopa; neuroimagem (RM) serve principalmente para excluir diferenciais estruturais, e o DAT-scan (quando disponível) ajuda a diferenciar de tremor essencial em casos duvidosos, mas não é exigido de rotina.
- **Parkinsonismo atípico:** RM de crânio pode mostrar sinais sugestivos (atrofia do mesencéfalo — "sinal do beija-flor" — na paralisia supranuclear progressiva; sinal da "cruz da ponte" na atrofia de múltiplos sistemas), reforçando a suspeita clínica.
- **Síndrome das pernas inquietas:** diagnóstico clínico por critérios (urgência de mover as pernas, piora em repouso/à noite, alívio com movimento); ferritina e estudo do sono (polissonografia) quando há dúvida diagnóstica ou suspeita de movimento periódico de membros associado.
- **Tremor essencial:** diagnóstico clínico, sem exame confirmatório específico; a ausência de outros sinais parkinsonianos e a resposta a álcool/betabloqueador reforçam o diagnóstico.
- **Doença de Huntington:** teste genético (contagem de repetições CAG expandidas no gene HTT) confirma o diagnóstico em paciente com coreia progressiva e história familiar compatível.

## 💊 Tratamento

- **Parkinson motor:** levodopa/carbidopa é o padrão-ouro sintomático, especialmente em idosos; agonista dopaminérgico ou inibidor de MAO-B como poupador de levodopa em fases iniciais de pacientes mais jovens.
- **Complicações motoras tardias (flutuações/discinesias):** fracionar a dose de levodopa, associar inibidor de COMT (entacapona) ou de MAO-B (selegilina/rasagilina); estimulação cerebral profunda (DBS) do núcleo subtalâmico para casos refratários com boa resposta prévia à levodopa.
- **Psicose relacionada a Parkinson/levodopa:** quetiapina ou pimavanserina; evitar antipsicóticos típicos e a maioria dos atípicos, que pioram o parkinsonismo.
- **Hipotensão ortostática neurogênica:** medidas posturais e hidratação primeiro; fludrocortisona ou midodrina se refratária.
- **Síndrome das pernas inquietas:** corrigir ferro (meta de ferritina >75 ng/mL); agonista dopaminérgico ou gabapentinoide se persistir sem deficiência de ferro; reduzir/trocar o agonista diante de augmentação.
- **Tremor essencial:** propranolol como primeira linha; primidona como alternativa em contraindicação a betabloqueador; DBS talâmico ou talamotomia por ultrassom focado em casos refratários e incapacitantes.

## 🧭 Além do grounding: o que mais pode cair

- **Diagnóstico diferencial de parkinsonismo** é tema clássico de prova além do Parkinson idiopático: paralisia supranuclear progressiva, atrofia de múltiplos sistemas, degeneração corticobasal e demência com corpos de Lewy compõem os "parkinsonismos-plus", com resposta pobre ou parcial à levodopa.
- **Parkinsonismo induzido por fármacos** é a causa reversível mais lembrada em prova — suspender o agente causador (antipsicótico típico, metoclopramida) costuma resolver o quadro em semanas a meses.
- Biomarcadores prodrômicos do Parkinson (hiposmia, transtorno comportamental do sono REM, constipação) podem aparecer anos antes do diagnóstico motor — útil para questões de raciocínio clínico com quadro atípico "incompleto".
- **Augmentação** na SPI é um fenômeno específico e nomeado — reconhecer o termo evita a armadilha de simplesmente aumentar a dose do agonista dopaminérgico.
- Tremor essencial refratário tem opções cirúrgicas modernas (estimulação talâmica profunda do núcleo VIM, talamotomia por ultrassom focado guiado por ressonância) — tema de crescente relevância em provas recentes de neurologia.
- "ET plus" descreve tremor essencial com sinais neurológicos leves associados (alteração discreta de marcha em tandem, rigidez leve) — ainda tratado como tremor essencial clássico, não como parkinsonismo.
- **Doença de Huntington**: coreia progressiva + declínio cognitivo + sintomas psiquiátricos (irritabilidade, depressão, psicose) em adulto jovem/meia-idade, com padrão de herança autossômica dominante e antecipação genética (repetições CAG) — diagnóstico confirmado por teste genético, sem tratamento modificador de doença disponível (apenas sintomático, incluindo tetrabenazina para a coreia).
- **Síndrome de Tourette**: tiques motores e vocais crônicos com início na infância, frequentemente associados a TDAH e transtorno obsessivo-compulsivo — primeira linha de tratamento é psicoeducação e terapia comportamental (treinamento de reversão de hábito), reservando antipsicóticos de baixa dose para casos incapacitantes.
- **Tremor induzido por fármacos** deve sempre entrar no diagnóstico diferencial de tremor de ação em paciente em uso de valproato, lítio, amiodarona ou broncodilatador beta-agonista — a suspensão/troca do agente costuma resolver o quadro.

## 📚 Referências essenciais

- Movement Disorder Society (MDS) — Diretrizes para diagnóstico e tratamento da doença de Parkinson.
- International Restless Legs Syndrome Study Group (IRLSSG) — Consenso de manejo da síndrome das pernas inquietas.
- American Academy of Neurology — Practice Guideline: Treatment of Essential Tremor.
`;

export default content.trim();
