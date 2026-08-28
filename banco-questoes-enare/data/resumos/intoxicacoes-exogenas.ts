/**
 * Resumo — Emergências e Terapia Intensiva · Intoxicações exógenas.
 *
 * Cobre as entidades do assunto no corpus: intoxicação por etilenoglicol
 * (indicação de hemodiálise), síndrome serotoninérgica e intoxicação
 * por metanol.
 */
const content = `
## 🎯 Essencial

- **Álcoois tóxicos (etilenoglicol, metanol) causam acidose metabólica com ânion-gap elevado E gap osmolar elevado** — a combinação dos dois achados é a chave diagnóstica antes mesmo da dosagem específica do álcool.
- **Etilenoglicol:** metabolizado a ácido glicólico e oxalato — cristais de oxalato de cálcio na urina e lesão renal aguda são a pista mais específica.
- **Metanol:** metabolizado a ácido fórmico — toxicidade específica ao **nervo óptico**, causando alterações visuais (visão turva, "campo de neve") e podendo levar à cegueira.
- **Antídoto de primeira linha para os dois: fomepizol** (inibe a álcool desidrogenase, bloqueando a formação dos metabólitos tóxicos) — etanol IV é alternativa quando fomepizol não está disponível.
- **Indicações de hemodiálise na intoxicação por etilenoglicol/metanol:** acidose metabólica grave refratária, lesão de órgão-alvo (renal no etilenoglicol, visual no metanol), instabilidade hemodinâmica, ou nível sérico muito elevado do álcool — a diálise remove o álcool-mãe e os metabólitos tóxicos simultaneamente.
- **Síndrome serotoninérgica:** tríade de alteração do estado mental, hiperatividade autonômica (taquicardia, hipertermia, diaforese) e anormalidades neuromusculares — **clônus (especialmente ocular/espontâneo) é o achado mais específico** que diferencia de outras síndromes hipertérmicas.
- **Síndrome serotoninérgica é sempre por associação/excesso de agentes serotoninérgicos** (ISRS + IMAO, ISRS + tramadol, ISRS + triptano) — suspender o(s) agente(s) causador(es) é a primeira medida terapêutica.

## 💎 Pearls

- O **gap osmolar** (osmolaridade medida menos calculada) fica elevado enquanto o álcool-mãe ainda não foi metabolizado; conforme a metabolização avança, o gap osmolar cai e o **ânion-gap sobe** (pelos metabólitos ácidos) — os dois gaps evoluem em direções opostas ao longo do tempo.
- **Fomepizol não trata a acidose já formada** — ele só impede a formação de mais metabólito tóxico; acidose grave estabelecida ainda exige bicarbonato e, frequentemente, hemodiálise.
- **Etanol como antídoto compete pela mesma enzima** (álcool desidrogenase tem maior afinidade pelo etanol que pelo metanol/etilenoglicol) — mecanismo elegante, mas exige monitorização de nível sérico e tem mais efeitos colaterais que o fomepizol.
- Síndrome serotoninérgica **evolui em horas** (geralmente <24h após início/aumento de dose do agente), diferente da síndrome neuroléptica maligna, que evolui em **dias** — a rapidez de instalação é uma pista temporal importante.
- **Cristais de oxalato de cálcio na urina** (formato de envelope ou agulha) são sugestivos, mas nem sempre presentes — sua ausência não afasta intoxicação por etilenoglicol.

## ⚠️ Pitfalls

- **Esperar a dosagem sérica de metanol/etilenoglicol para iniciar tratamento** — a suspeita clínica com ânion-gap e gap osmolar elevados já justifica iniciar fomepizol.
- **Confundir síndrome serotoninérgica com síndrome neuroléptica maligna** — a primeira tem clônus/hiperreflexia e instalação rápida; a segunda tem rigidez "em cano de chumbo", hiporreflexia e instalação lenta (dias), associada a antipsicóticos.
- **Tratar síndrome serotoninérgica só com suporte, sem suspender o agente causador** — a suspensão é a medida mais importante, antes mesmo de qualquer fármaco específico.
- **Adiar hemodiálise em intoxicação por metanol/etilenoglicol com lesão de órgão-alvo já instalada** (visual ou renal) — quanto mais cedo remover o álcool e os metabólitos, menor o dano definitivo.
- **Usar bicarbonato como tratamento único** na acidose por álcool tóxico, sem antídoto (fomepizol/etanol) e sem considerar diálise — trata apenas o pH, não a causa.

## 📝 Como a banca cobra

**Intoxicações exógenas aparecem em 3 questões (1,42% do corpus)**, uma do EBSERH e duas do ENARE, todas testando **reconhecimento do agente pela toxíndrome/achado específico e conduta imediata**.

- **EBSERH 2026 Q55** cobrou diretamente as **indicações de hemodiálise na intoxicação por etilenoglicol** — o candidato precisa saber quando a remoção extracorpórea é obrigatória além do antídoto.
- **ENARE 2025 Q51** trouxe um quadro de **síndrome serotoninérgica**, provavelmente associando fármacos serotoninérgicos e cobrando o reconhecimento clínico (clônus, hipertermia, agitação) mais do que a farmacologia isolada.
- **ENARE 2026 Q24** cobrou **intoxicação por metanol**, com foco no achado toxicológico clássico (alteração visual) que aponta para esse álcool específico em vez de etilenoglicol.

## 🧠 Conceito e fisiopatologia

Etilenoglicol e metanol são, por si só, relativamente pouco tóxicos — a toxicidade real vem de seus **metabólitos**, gerados pela enzima álcool desidrogenase seguida de aldeído desidrogenase. O etilenoglicol vira ácido glicólico e depois oxalato (nefrotóxico, forma cristais que obstruem túbulos); o metanol vira ácido fórmico (toxina mitocondrial seletiva para as células ganglionares da retina e nervo óptico). Por isso o antídoto atua bloqueando a via metabólica, não neutralizando o álcool em si.

A **síndrome serotoninérgica** resulta do excesso de estimulação serotoninérgica nos receptores 5-HT1A e 5-HT2A do sistema nervoso central e periférico, geralmente por combinação de fármacos com mecanismos serotoninérgicos distintos (ex.: inibição de recaptação + inibição de MAO). O excesso serotoninérgico gera hiperatividade neuromuscular (clônus, hiperreflexia, mais proeminente em membros inferiores) e disautonomia.

## 🔎 Diagnóstico

- **Etilenoglicol/metanol:** ânion-gap elevado + gap osmolar elevado + história de ingestão; cristais de oxalato de cálcio na urina (etilenoglicol); dosagem sérica específica quando disponível, sem atrasar tratamento empírico.
- **Síndrome serotoninérgica:** diagnóstico clínico (critérios de Hunter) — clônus espontâneo ou induzido, agitação, diaforese, tremor, hiperreflexia, hipertermia, em vigência de uso/associação de agente serotoninérgico.

## 💊 Tratamento

- **Etilenoglicol/metanol:** fomepizol IV (ou etanol se indisponível) + suporte + bicarbonato para acidose + ácido fólico (metanol) ou tiamina/piridoxina (etilenoglicol) como cofatores; hemodiálise se acidose refratária, lesão de órgão-alvo ou nível sérico muito alto.
- **Síndrome serotoninérgica:** suspensão imediata do(s) agente(s) serotoninérgico(s), suporte com benzodiazepínicos para agitação/hipertermia, resfriamento externo; ciproeptadina (antagonista serotoninérgico) em casos moderados a graves refratários ao suporte.

## 📚 Referências essenciais

- American Academy of Clinical Toxicology — Guideline for the Management of Toxic Alcohol Poisoning.
- UpToDate — Serotonin Syndrome: Diagnosis and Management.
- Goldfrank's Toxicologic Emergencies.
`;

export default content.trim();
