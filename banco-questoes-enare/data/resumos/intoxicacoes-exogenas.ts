/**
 * Resumo — Emergências e Terapia Intensiva · Intoxicações exógenas.
 *
 * Cobre as entidades do assunto no corpus: intoxicação por etilenoglicol
 * (indicação de hemodiálise), síndrome serotoninérgica e intoxicação
 * por metanol. Expandido com as demais toxíndromes de alto rendimento
 * (colinérgica, anticolinérgica, opioide, simpaticomimética),
 * intoxicação por paracetamol, salicilatos e antidepressivos
 * tricíclicos, e princípios gerais de descontaminação — conteúdo ainda
 * não cobrado no corpus, mas plausível em provas futuras do assunto.
 */
const content = `
## 🎯 Essencial

- **Álcoois tóxicos (etilenoglicol, metanol) causam acidose metabólica com ânion-gap elevado E gap osmolar elevado** — a combinação dos dois achados é a chave diagnóstica antes mesmo da dosagem específica do álcool.
- **Etilenoglicol:** metabolizado a ácido glicólico e oxalato — cristais de oxalato de cálcio na urina e lesão renal aguda são a pista mais específica.
- **Metanol:** metabolizado a ácido fórmico — toxicidade específica ao **nervo óptico**, causando alterações visuais (visão turva, "campo de neve") e podendo levar à cegueira.
- **Antídoto de primeira linha para os dois: fomepizol** (inibe a álcool desidrogenase, bloqueando a formação dos metabólitos tóxicos) — etanol IV é alternativa quando fomepizol não está disponível.
- **Indicações de hemodiálise na intoxicação por etilenoglicol/metanol:** acidose metabólica grave refratária, lesão de órgão-alvo (renal no etilenoglicol, visual no metanol), instabilidade hemodinâmica, ou nível sérico muito elevado do álcool — a diálise remove o álcool-mãe e os metabólitos tóxicos simultaneamente.
- **Síndrome serotoninérgica:** tríade de alteração do estado mental, hiperatividade autonômica (taquicardia, hipertermia, diaforese) e anormalidades neuromusculares — **clônus (especialmente ocular/espontâneo) é o achado mais específico** que diferencia de outras síndromes hipertérmicas.
- **Síndrome serotoninérgica é sempre por associação/excesso de agentes serotoninérgicos** (ISRS + IMAO, ISRS + tramadol, ISRS + triptano) — suspender o(s) agente causador(es) é a primeira medida terapêutica.
- **Reconhecer a toxíndrome pelo exame físico direciona o tratamento antes de qualquer exame laboratorial**: pupilas, pele, frequência cardíaca, peristalse e temperatura são os cinco eixos que diferenciam colinérgica, anticolinérgica, opioide e simpaticomimética.
- **Toxíndrome opioide**: miose puntiforme, depressão respiratória e rebaixamento do nível de consciência — **naloxona** é antídoto de ação rápida, mas com meia-vida curta (menor que a de muitos opioides), exigindo observação prolongada e doses repetidas para evitar ressedação.
- **Toxíndrome simpaticomimética** (cocaína, anfetaminas): midríase, taquicardia, hipertensão, agitação, hipertermia — semelhante à anticolinérgica, mas com pele **diaforética** (não seca) e peristalse preservada/aumentada, diferença que ajuda a distinguir as duas na prova.

## 💎 Pearls

- O **gap osmolar** (osmolaridade medida menos calculada) fica elevado enquanto o álcool-mãe ainda não foi metabolizado; conforme a metabolização avança, o gap osmolar cai e o **ânion-gap sobe** (pelos metabólitos ácidos) — os dois gaps evoluem em direções opostas ao longo do tempo.
- **Fomepizol não trata a acidose já formada** — ele só impede a formação de mais metabólito tóxico; acidose grave estabelecida ainda exige bicarbonato e, frequentemente, hemodiálise.
- **Etanol como antídoto compete pela mesma enzima** (álcool desidrogenase tem maior afinidade pelo etanol que pelo metanol/etilenoglicol) — mecanismo elegante, mas exige monitorização de nível sérico e tem mais efeitos colaterais que o fomepizol.
- Síndrome serotoninérgica **evolui em horas** (geralmente <24h após início/aumento de dose do agente), diferente da síndrome neuroléptica maligna, que evolui em **dias** — a rapidez de instalação é uma pista temporal importante.
- **Cristais de oxalato de cálcio na urina** (formato de envelope ou agulha) são sugestivos, mas nem sempre presentes — sua ausência não afasta intoxicação por etilenoglicol.
- **Toxíndrome colinérgica** (organofosforados/carbamatos): miose, salivação, lacrimejamento, diarreia, broncorreia, bradicardia — mnemônico "SLUDGE" ou "DUMBELS"; tratamento com **atropina em doses altas e repetidas** (titulada pela secreção brônquica, não pela frequência cardíaca) + **pralidoxima** para reativar a acetilcolinesterase antes que ela "envelheça" irreversivelmente.
- **Toxíndrome anticolinérgica** (antidepressivos tricíclicos, anti-histamínicos, atropina): midríase, pele seca e quente, retenção urinária, íleo, taquicardia, agitação/delirium — mnemônico "cego como morcego, seco como osso, vermelho como beterraba, quente como o inferno, louco como um chapeleiro". Fisostigmina é antídoto específico, mas **contraindicada se houver suspeita de intoxicação por tricíclicos** (risco de convulsão e assistolia).
- **Intoxicação por paracetamol**: hepatotoxicidade dose-dependente pelo metabólito NAPQI; **N-acetilcisteína** é o antídoto, com eficácia máxima se iniciado em até 8h da ingestão — usar o **nomograma de Rumack-Matthew** (nível sérico vs. tempo pós-ingestão) para decidir tratamento em ingestão aguda única.
- **Intoxicação por salicilatos** causa inicialmente alcalose respiratória (estímulo direto do centro respiratório) seguida de acidose metabólica com ânion-gap elevado — o distúrbio ácido-básico misto é característico; alcalinização urinária (bicarbonato) aumenta a excreção renal do salicilato ionizado.
- **Antidepressivos tricíclicos em overdose**: alargamento de QRS >100ms no ECG prediz convulsão e arritmia — tratamento é **bicarbonato de sódio IV**, que reduz a cardiotoxicidade pelo efeito de sódio e alcalinização, não pelo pH em si.
- **Carvão ativado** só é útil se administrado idealmente até 1-2h da ingestão de agente adsorvível — não adsorve álcoois, metais pesados, ferro nem lítio, e é contraindicado se via aérea não protegida (risco de aspiração) ou obstrução/perfuração gastrointestinal.
- **Intoxicação por lítio** pode ser aguda ou crônica (mais grave, por acúmulo em uso terapêutico com desidratação/insuficiência renal associada) — manifesta-se com tremor grosseiro, ataxia, confusão e convulsão; hemodiálise indicada em nível muito elevado ou disfunção neurológica grave, já que o lítio não é adsorvido por carvão ativado.
- **Intoxicação por monóxido de carbono**: carboxihemoglobina desloca a curva de dissociação da hemoglobina, causando hipóxia tecidual apesar de saturimetria de pulso normal (o oxímetro não diferencia carboxihemoglobina de oxihemoglobina) — oxigênio a 100% (ou hiperbárico em casos graves) é o tratamento.

## ⚠️ Pitfalls

- **Esperar a dosagem sérica de metanol/etilenoglicol para iniciar tratamento** — a suspeita clínica com ânion-gap e gap osmolar elevados já justifica iniciar fomepizol.
- **Confundir síndrome serotoninérgica com síndrome neuroléptica maligna** — a primeira tem clônus/hiperreflexia e instalação rápida; a segunda tem rigidez "em cano de chumbo", hiporreflexia e instalação lenta (dias), associada a antipsicóticos.
- **Tratar síndrome serotoninérgica só com suporte, sem suspender o agente causador** — a suspensão é a medida mais importante, antes mesmo de qualquer fármaco específico.
- **Adiar hemodiálise em intoxicação por metanol/etilenoglicol com lesão de órgão-alvo já instalada** (visual ou renal) — quanto mais cedo remover o álcool e os metabólitos, menor o dano definitivo.
- **Usar bicarbonato como tratamento único** na acidose por álcool tóxico, sem antídoto (fomepizol/etanol) e sem considerar diálise — trata apenas o pH, não a causa.
- **Usar flumazenil de rotina em overdose por benzodiazepínico de causa desconhecida** — pode precipitar convulsão grave em usuário crônico ou em coingestão com tricíclico; reservado para casos muito selecionados.
- **Usar fisostigmina em paciente com QRS alargado (suspeita de tricíclico)** — pode precipitar assistolia; nesse cenário, bicarbonato é a prioridade, não reverter a toxíndrome anticolinérgica.
- **Atrasar N-acetilcisteína aguardando confirmação de lesão hepática** na intoxicação por paracetamol — o nomograma orienta o início precoce antes de qualquer alteração de transaminases.
- **Confiar na saturimetria de pulso normal para descartar intoxicação por monóxido de carbono** — o oxímetro não distingue carboxihemoglobina; a suspeita clínica (exposição, cefaleia, confusão) exige dosagem direta de carboxihemoglobina.
- **Administrar carvão ativado indiscriminadamente**, inclusive em intoxicação por álcoois, metais ou em paciente com rebaixamento sem via aérea protegida.

## 📝 Como a banca cobra

**Intoxicações exógenas aparecem em 3 questões (1,42% do corpus)**, uma do EBSERH e duas do ENARE, todas testando **reconhecimento do agente pela toxíndrome/achado específico e conduta imediata**.

- **EBSERH 2026 Q55** cobrou diretamente as **indicações de hemodiálise na intoxicação por etilenoglicol** — o candidato precisa saber quando a remoção extracorpórea é obrigatória além do antídoto.
- **ENARE 2025 Q51** trouxe um quadro de **síndrome serotoninérgica**, provavelmente associando fármacos serotoninérgicos e cobrando o reconhecimento clínico (clônus, hipertermia, agitação) mais do que a farmacologia isolada.
- **ENARE 2026 Q24** cobrou **intoxicação por metanol**, com foco no achado toxicológico clássico (alteração visual) que aponta para esse álcool específico em vez de etilenoglicol.

## 🧠 Conceito e fisiopatologia

Etilenoglicol e metanol são, por si só, relativamente pouco tóxicos — a toxicidade real vem de seus **metabólitos**, gerados pela enzima álcool desidrogenase seguida de aldeído desidrogenase. O etilenoglicol vira ácido glicólico e depois oxalato (nefrotóxico, forma cristais que obstruem túbulos); o metanol vira ácido fórmico (toxina mitocondrial seletiva para as células ganglionares da retina e nervo óptico). Por isso o antídoto atua bloqueando a via metabólica, não neutralizando o álcool em si.

A **síndrome serotoninérgica** resulta do excesso de estimulação serotoninérgica nos receptores 5-HT1A e 5-HT2A do sistema nervoso central e periférico, geralmente por combinação de fármacos com mecanismos serotoninérgicos distintos (ex.: inibição de recaptação + inibição de MAO). O excesso serotoninérgico gera hiperatividade neuromuscular (clônus, hiperreflexia, mais proeminente em membros inferiores) e disautonomia.

As demais toxíndromes seguem a mesma lógica de reconhecimento por eixo farmacológico: agentes colinérgicos inundam a fenda sináptica de acetilcolina (inibindo sua degradação), agentes anticolinérgicos bloqueiam os receptores muscarínicos, opioides deprimem o centro respiratório e o sistema nervoso central via receptores mu, e simpaticomiméticos (cocaína, anfetaminas) aumentam catecolaminas — cada eixo produz um padrão previsível de sinais vitais e exame físico que permite tratar antes da confirmação laboratorial.

## 🔎 Diagnóstico

- **Etilenoglicol/metanol:** ânion-gap elevado + gap osmolar elevado + história de ingestão; cristais de oxalato de cálcio na urina (etilenoglicol); dosagem sérica específica quando disponível, sem atrasar tratamento empírico.
- **Síndrome serotoninérgica:** diagnóstico clínico (critérios de Hunter) — clônus espontâneo ou induzido, agitação, diaforese, tremor, hiperreflexia, hipertermia, em vigência de uso/associação de agente serotoninérgico.
- **Paracetamol:** nível sérico plotado no nomograma de Rumack-Matthew a partir de 4h da ingestão aguda; transaminases e coagulograma para estadiar lesão hepática já instalada.
- **Salicilatos:** nível sérico seriado (picos tardios por absorção errática em comprimidos entéricos), gasometria arterial mostrando o padrão misto característico.
- **Tricíclicos:** ECG com QRS alargado e eixo desviado para a direita (onda R terminal em aVR) são preditores de gravidade mais úteis que o nível sérico.
- **Monóxido de carbono:** dosagem de carboxihemoglobina por cooximetria (não pela saturimetria de pulso comum); considerar em qualquer paciente com cefaleia/confusão em ambiente fechado com fonte de combustão.
- **Lítio:** nível sérico seriado, função renal e eletrólitos — sintomas neurológicos correlacionam melhor com gravidade do que o nível isolado na intoxicação crônica.

## 💊 Tratamento

- **Etilenoglicol/metanol:** fomepizol IV (ou etanol se indisponível) + suporte + bicarbonato para acidose + ácido fólico (metanol) ou tiamina/piridoxina (etilenoglicol) como cofatores; hemodiálise se acidose refratária, lesão de órgão-alvo ou nível sérico muito alto.
- **Síndrome serotoninérgica:** suspensão imediata do(s) agente(s) serotoninérgico(s), suporte com benzodiazepínicos para agitação/hipertermia, resfriamento externo; ciproeptadina (antagonista serotoninérgico) em casos moderados a graves refratários ao suporte.
- **Colinérgica:** atropina em doses altas e repetidas até secagem das secreções + pralidoxima precoce em organofosforados.
- **Anticolinérgica:** suporte, benzodiazepínico para agitação; fisostigmina apenas em casos selecionados sem suspeita de tricíclico.
- **Paracetamol:** N-acetilcisteína (via oral ou IV) conforme nomograma; transplante hepático em insuficiência hepática fulminante refratária.
- **Salicilatos:** alcalinização urinária com bicarbonato, hidratação, hemodiálise se nível muito elevado, acidose refratária ou disfunção neurológica/renal.
- **Tricíclicos:** bicarbonato de sódio IV para QRS alargado ou arritmia, benzodiazepínico para convulsão; evitar antiarrítmicos classe Ia/Ic (potencializam a cardiotoxicidade).
- **Opioides:** naloxona titulada (evitar reversão abrupta que precipite abstinência aguda em usuário crônico), com observação prolongada pela meia-vida curta do antídoto.
- **Monóxido de carbono:** oxigênio a 100% por máscara não reinalante; oxigênio hiperbárico em intoxicação grave (perda de consciência, gestante, isquemia miocárdica, nível muito elevado).
- **Lítio:** hidratação, suspensão do fármaco, hemodiálise em intoxicação grave/crônica com disfunção neurológica ou nível muito elevado — carvão ativado não tem papel aqui.

## 📚 Referências essenciais

- American Academy of Clinical Toxicology — Guideline for the Management of Toxic Alcohol Poisoning.
- UpToDate — Serotonin Syndrome: Diagnosis and Management.
- Goldfrank's Toxicologic Emergencies.
`;

export default content.trim();
