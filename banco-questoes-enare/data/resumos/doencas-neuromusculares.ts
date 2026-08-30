/**
 * Resumo — Neurologia · Doenças neuromusculares.
 *
 * Cobre as entidades do assunto no corpus: padrão eletroneuromiográfico
 * da síndrome de Guillain-Barré, paralisia periódica hipocalêmica,
 * miastenia gravis associada a timoma com indicação de timectomia e a
 * distinção clínica entre afasia de Broca e afasia de Wernicke — este
 * último tema é semiologia de linguagem cortical, sem relação
 * fisiopatológica com as doenças neuromusculares propriamente ditas, e é
 * tratado aqui como bloco à parte porque é assim que o corpus de questões
 * o classifica. Também traz, como extrapolação de alto rendimento além do
 * que já foi cobrado, a variante de Miller Fisher, a síndrome miastênica
 * de Lambert-Eaton e outras canalopatias periódicas.
 */
const content = `
## 🎯 Essencial

- **Síndrome de Guillain-Barré (SGB):** polirradiculoneuropatia aguda, geralmente pós-infecciosa (Campylobacter jejuni é o gatilho clássico, mas também vírus respiratórios/gastrointestinais), com fraqueza ascendente simétrica e arreflexia — monitorar sempre capacidade vital forçada pelo risco de insuficiência respiratória.
- **Padrão eletroneuromiográfico da forma clássica (AIDP, desmielinizante):** velocidade de condução reduzida, latências distais prolongadas, bloqueio de condução e ondas F ausentes/prolongadas — diferente das formas axonais (AMAN/AMSAN), que mostram amplitude de potencial de ação reduzida com velocidade de condução preservada.
- **Paralisia periódica hipocalêmica:** episódios de fraqueza flácida associados a queda do potássio sérico por **desvio transcelular** (não perda corporal total), desencadeados por exercício intenso, dieta rica em carboidratos ou estresse — pode ser forma familiar (canalopatia) ou secundária a **tireotoxicose**.
- **Miastenia gravis (MG):** fraqueza flutuante que piora com esforço repetido, frequentemente com ptose/diplopia na apresentação; anticorpos anti-receptor de acetilcolina (ou anti-MuSK); associação com **timoma em até 10-15% dos casos** — TC de tórax é obrigatória em todo paciente recém-diagnosticado.
- **Timectomia** é indicada sempre que há timoma confirmado (decisão oncológica, independente do controle clínico da MG) e também considerada em MG generalizada sem timoma, sobretudo em pacientes jovens com doença moderada a grave.
- As doenças neuromusculares se organizam por **nível anatômico acometido**: neurônio motor (esclerose lateral amiotrófica), nervo periférico (SGB, neuropatias), junção neuromuscular (miastenia gravis, Lambert-Eaton) e músculo (miopatias, distrofias) — o nível determina o padrão de fraqueza, o comportamento dos reflexos e qual exame complementar (ENMG, CK, biópsia) é mais útil.

**Fora do eixo neuromuscular (classificado neste assunto pelo corpus): afasias corticais**

- **Afasia de Broca** (não fluente, lesão frontal posterior/inferior, compreensão relativamente preservada, repetição prejudicada) versus **afasia de Wernicke** (fluente mas incompreensível, lesão temporal posterior, compreensão prejudicada) — distinção clássica de semiologia neurológica **cortical**, sem relação fisiopatológica com as doenças de nervo periférico, junção neuromuscular ou músculo listadas acima. A afasia decorre de lesão de córtex cerebral (tipicamente vascular); as doenças neuromusculares verdadeiras (SGB, paralisia periódica, MG) decorrem de lesão de nervo periférico, junção neuromuscular ou fibra muscular. Entra neste resumo apenas porque é assim que o banco de questões classifica a Q48 do ENARE 2026 — não force uma ligação fisiopatológica que não existe entre os dois blocos.

## 💎 Pearls

- Na SGB, o líquor mostra classicamente **dissociação albumino-citológica** (proteína alta, celularidade normal) — pode estar ausente na primeira semana de doença.
- Tratamento da SGB: **imunoglobulina IV ou plasmaférese** (eficácia equivalente); corticoide isolado não tem benefício comprovado.
- Na paralisia periódica hipocalêmica, o potássio cai por desvio para dentro da célula — reposição deve ser **cautelosa e em baixa dose**, pois o retorno do potássio ao espaço extracelular pode causar hipercalemia de rebote.
- Na forma tireotóxica da paralisia periódica hipocalêmica, o tratamento de escolha é o **betabloqueador** associado ao controle da tireotoxicose, mais do que reposição agressiva isolada de potássio.
- Timoma exige ressecção cirúrgica independentemente do controle clínico da miastenia, pelo potencial invasivo local do tumor.
- A **variante de Miller Fisher** da SGB cursa com a tríade oftalmoplegia + ataxia + arreflexia, tipicamente **sem** fraqueza de membros importante, e se associa a anticorpo anti-GQ1b — reconhecer essa tríade evita confundir com AVC de tronco.
- Fármacos que **pioram a transmissão neuromuscular** e devem ser evitados/usados com cautela na miastenia gravis: aminoglicosídeos, fluoroquinolonas, betabloqueadores e sulfato de magnésio.
- Na afasia (bloco à parte), vale lembrar que **afasia global** (lesão perisylviana extensa, comprometendo fluência e compreensão) e **afasia de condução** (repetição desproporcionalmente prejudicada, fluência e compreensão relativamente preservadas, lesão do fascículo arqueado) completam o espectro clássico além de Broca e Wernicke.
- **CK (creatinoquinase)** elevada aponta para acometimento muscular primário (miopatia/distrofia); costuma ser normal em neuropatias (SGB) e na miastenia gravis — dosá-la ajuda a direcionar rapidamente a investigação inicial de um quadro de fraqueza.
- **Esclerose lateral amiotrófica (ELA)** é diagnóstico diferencial relevante de fraqueza progressiva: combina sinais de neurônio motor superior (espasticidade, hiperreflexia, Babinski) e inferior (atrofia, fasciculações) no mesmo paciente, sem alteração sensitiva associada — essa ausência de queixa sensitiva a distingue da SGB.

## ⚠️ Pitfalls

- **Tratar SGB com corticoide isolado** — sem eficácia comprovada; atrasa o início do tratamento correto (IVIG ou plasmaférese).
- **Repor potássio de forma agressiva e rápida** na paralisia periódica hipocalêmica — risco de hipercalemia de rebote quando o potássio retorna ao espaço extracelular.
- **Não rastrear timoma (TC de tórax)** em todo paciente recém-diagnosticado com miastenia gravis.
- **Adiar a timectomia** em paciente com timoma confirmado só porque a miastenia está bem controlada clinicamente — a indicação é oncológica, não apenas neurológica.
- **Trocar as características de Broca e Wernicke** (achar que Broca tem discurso fluente ou que Wernicke tem discurso não fluente) — erro clássico de decoreba invertida.
- **Confundir miastenia gravis com síndrome miastênica de Lambert-Eaton** — na MG a força piora com esforço repetido; na Lambert-Eaton, paradoxalmente, a força **melhora** com a contração sustentada (facilitação pós-tetânica), e o quadro costuma ser paraneoplásico (carcinoma pulmonar de pequenas células).
- **Encaixar a afasia (bloco à parte) dentro da fisiopatologia neuromuscular** só porque está classificada no mesmo assunto — trata-se de lesão de córtex cerebral, não de nervo, junção ou músculo.
- **Não diferenciar fraqueza de origem muscular (CK elevada, reflexos preservados até fases tardias) de fraqueza de origem neuropática (CK normal, arreflexia precoce)** — essa distinção inicial orienta toda a investigação subsequente e evita pedir o exame errado primeiro.

## 📝 Como a banca cobra

**Doenças neuromusculares aparece em 4 questões (1,89% do corpus)**, misturando EBSERH e ENARE, com foco em mecanismo e conduta, e um tópico de semiologia neurológica clássica classificado junto.

- **EBSERH 2025 Q58** cobrou o padrão eletroneuromiográfico da síndrome de Guillain-Barré — reconhecer o padrão desmielinizante clássico é o ponto central.
- **ENARE 2025 Q43** (classificada como difícil) trouxe paralisia periódica hipocalêmica, exigindo entender o mecanismo de desvio transcelular de potássio.
- **ENARE 2026 Q9** testou miastenia gravis associada a timoma, com a indicação de timectomia.
- **ENARE 2026 Q48** cobrou a distinção clínica entre afasia de Broca e afasia de Wernicke — tópico de semiologia clássica que o banco de questões classifica dentro deste assunto, sem que exista relação fisiopatológica direta com as demais entidades aqui reunidas (ver bloco "Fora do eixo neuromuscular" acima).

## 🧠 Conceito e fisiopatologia

A SGB é processo autoimune pós-infeccioso por mimetismo molecular: epítopos de patógenos (como gangliosídeos de Campylobacter jejuni) se assemelham a componentes do nervo periférico, levando o sistema imune a atacar mielina (forma desmielinizante clássica, AIDP) ou diretamente o axônio (formas axonais, AMAN/AMSAN). A variante de Miller Fisher segue o mesmo mecanismo de mimetismo molecular, mas com anticorpos dirigidos a gangliosídeos (anti-GQ1b) enriquecidos nos nervos oculomotores, o que explica seu padrão clínico distinto (oftalmoplegia e ataxia predominando sobre a fraqueza de membros).

A paralisia periódica hipocalêmica decorre de canalopatia dos canais de cálcio (mutação em CACNA1S na forma familiar) ou de sódio da membrana muscular esquelética — a queda aguda do potássio extracelular (mediada por insulina, catecolaminas ou hormônio tireoidiano) causa despolarização paradoxal da membrana e inexcitabilidade muscular transitória.

A miastenia gravis é doença autoimune da junção neuromuscular: anticorpos contra o receptor de acetilcolina pós-sináptico (ou proteínas associadas, como MuSK) reduzem a eficiência da transmissão colinérgica, gerando fadiga que piora ao longo do esforço repetido. A associação com timoma reflete o papel do timo na tolerância imunológica central, cuja disfunção favorece a produção desses autoanticorpos. Em contraste, a síndrome miastênica de Lambert-Eaton é doença pré-sináptica, por anticorpos contra canais de cálcio voltagem-dependentes que reduzem a liberação de acetilcolina — mecanismo oposto ao da MG, o que explica a facilitação (e não a fadiga) com esforço repetido.

As afasias corticais clássicas (bloco à parte, sem relação fisiopatológica com o eixo acima) seguem a organização perisylviana da linguagem: lesões frontais posteriores (área de Broca) comprometem a produção da fala mantendo a compreensão relativamente preservada, enquanto lesões temporais posteriores (área de Wernicke) comprometem a compreensão com fluência verbal mantida, ainda que sem conteúdo semântico coerente.

## 🩺 Quadro clínico

- **SGB:** fraqueza ascendente simétrica (pernas antes de braços), parestesias distais leves, hipo/arreflexia progressiva desde o início; pode envolver nervos cranianos (diplegia facial) e musculatura respiratória — disfagia, voz fraca/anasalada e dispneia são sinais de gravidade que indicam necessidade de monitorização em unidade de maior complexidade.
- **Paralisia periódica hipocalêmica:** episódios recorrentes de fraqueza flácida proximal (mais em membros inferiores), poupando geralmente musculatura respiratória, ocular e facial, com recuperação completa entre as crises e sensibilidade preservada durante o episódio.
- **Miastenia gravis:** ptose e diplopia flutuantes, piores ao final do dia ou após esforço sustentado e melhores com repouso; fraqueza proximal de membros e, em casos bulbares, disfagia e disartria — reflexos tendíneos profundos preservados, ao contrário da SGB.
- **Síndrome de Lambert-Eaton (diferencial da MG):** fraqueza proximal de início insidioso, com reflexos inicialmente diminuídos que se intensificam transitoriamente após contração muscular sustentada (facilitação pós-tetânica), além de disautonomia (boca seca, disfunção erétil, constipação) — pistas que a diferenciam clinicamente da miastenia gravis.
- **Afasias (bloco à parte):** Broca — discurso não fluente, esforçoso e agramatical, com compreensão relativamente preservada e consciência do próprio déficit (frustração); Wernicke — discurso fluente mas incompreensível (parafasias, neologismos), compreensão prejudicada e, frequentemente, sem consciência do déficit (anosognosia).

## 🔎 Diagnóstico

- **SGB:** eletroneuromiografia (padrão desmielinizante ou axonal), líquor com dissociação albumino-citológica, avaliação seriada de capacidade vital forçada; anticorpo anti-GQ1b se suspeita de variante Miller Fisher.
- **Paralisia periódica hipocalêmica:** potássio sérico durante a crise, ECG (achatamento de onda T, onda U), TSH/T4 livre para excluir causa tireotóxica, história familiar se recorrente.
- **Miastenia gravis:** anticorpos anti-receptor de acetilcolina ou anti-MuSK, teste de estimulação repetitiva (decremento) ou eletromiografia de fibra única, TC de tórax para rastreio de timoma.
- **Lambert-Eaton (diferencial da MG):** estimulação repetitiva de alta frequência mostra **incremento** da resposta (padrão oposto ao decremento da MG); investigar neoplasia oculta, sobretudo pulmonar.
- **Afasias (bloco à parte):** exame clínico da fala (fluência, compreensão, repetição, nomeação) associado a neuroimagem para localizar a lesão.

## 💊 Tratamento

- **SGB:** imunoglobulina IV ou plasmaférese; suporte ventilatório se insuficiência respiratória; fisioterapia motora precoce.
- **Paralisia periódica hipocalêmica:** reposição cautelosa e em baixa dose de potássio durante a crise; betabloqueador e controle da tireotoxicose na forma associada; acetazolamida na profilaxia da forma familiar.
- **Miastenia gravis:** piridostigmina sintomática; imunossupressão (corticoide, azatioprina) na doença generalizada; timectomia se timoma confirmado ou MG generalizada em paciente jovem; imunoglobulina IV ou plasmaférese na crise miastênica com insuficiência respiratória.
- **Afasias (bloco à parte):** reabilitação fonoaudiológica e tratamento da causa de base (geralmente vascular).

## 🧭 Além do grounding: o que mais pode cair

- **Variante de Miller Fisher da SGB** (oftalmoplegia + ataxia + arreflexia, anti-GQ1b) é diagnóstico diferencial clássico de síndromes de tronco encefálico agudas — tema de alto rendimento ainda não cobrado neste corpus.
- **Síndrome miastênica de Lambert-Eaton** é o principal diagnóstico diferencial paraneoplásico da miastenia gravis: melhora (em vez de piora) da força com esforço repetido, incremento (em vez de decremento) na estimulação repetitiva de alta frequência, associação com carcinoma pulmonar de pequenas células.
- **Diagnóstico diferencial de fraqueza flácida aguda** vale como quadro amplo de prova: SGB, crise miastênica, paralisia periódica, botulismo (descendente, com pupilas envolvidas) e mielite transversa (nível sensitivo bem definido) devem ser distinguidos pelo padrão de instalação, envolvimento sensitivo e reflexos.
- **Crise miastênica** (insuficiência respiratória por fraqueza da musculatura respiratória) exige suporte ventilatório e escalonamento para imunoglobulina IV/plasmaférese — diferenciar de crise colinérgica (excesso de anticolinesterásico, com sinais muscarínicos associados) é ponto histórico de prova, ainda que o teste de edrofônio tenha caído em desuso na prática atual.
- **Paralisia periódica hipercalêmica** e a **paramiotonia congênita** são canalopatias do canal de sódio, clinicamente distintas da forma hipocalêmica (fraqueza desencadeada por repouso após exercício, jejum ou ingestão de potássio, não por carboidratos) — diagnóstico diferencial relevante quando a prova descreve um gatilho “errado” para a forma hipocalêmica.
- **Afasia global** e **afasia de condução** completam o espectro clássico de afasias corticais além de Broca e Wernicke, e podem aparecer em versões futuras da mesma questão de semiologia.
- **Miopatias inflamatórias (polimiosite e dermatomiosite):** fraqueza muscular proximal simétrica com CK elevada; a dermatomiosite acrescenta achados cutâneos característicos (heliotropo, pápulas de Gottron) e maior associação com neoplasia oculta em adultos — biópsia muscular confirma o diagnóstico e distingue do quadro puramente neuropático deste resumo.
- **Distrofias musculares (ex.: Duchenne)** são doenças genéticas do músculo com fraqueza progressiva de início na infância, CK muito elevada e pseudo-hipertrofia de panturrilhas — diagnóstico diferencial clássico de fraqueza muscular primária em pacientes jovens, útil para fixar a diferença entre acometimento muscular e acometimento de nervo/junção.

## 📚 Referências essenciais

- European Federation of Neurological Societies/Peripheral Nerve Society (EFNS/PNS) — Guideline on management of Guillain-Barré syndrome.
- Myasthenia Gravis Foundation of America (MGFA) e estudo MGTX — indicação de timectomia na miastenia gravis.
- Consenso de canalopatias musculares periódicas.
`;

export default content.trim();
