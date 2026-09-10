/**
 * Resumo — Psiquiatria · Transtornos do humor.
 *
 * Assunto de baixa incidência no corpus (1 questão real, cauda longa, fora
 * do corte 80/20): ENARE 2025 Q37 (depressão maior, escolha de
 * antidepressivo por perfil de sintomas — insônia, ansiedade, perda de
 * apetite/peso e náuseas, resposta correta mirtazapina). O foco aqui é o
 * transtorno depressivo maior e a escolha racional de antidepressivo por
 * perfil de efeitos — o eixo realmente cobrado. O manejo do transtorno
 * bipolar e dos estabilizadores de humor tem assunto próprio no banco
 * (estabilizadores-de-humor), citado aqui apenas onde é indispensável
 * para não prescrever antidepressivo isolado em depressão bipolar.
 */
const content = `
## 🎯 Essencial

- **Transtorno depressivo maior exige humor deprimido e/ou anedonia (perda de interesse/prazer) presentes na maior parte do dia, quase todos os dias, por pelo menos 2 semanas**, associados a pelo menos mais 4 sintomas do critério (sono, apetite/peso, energia, concentração, culpa/autoestima, psicomotricidade, ideação de morte) — com impacto funcional significativo e sem explicação melhor por substância, condição médica ou luto não complicado.
- **A escolha do antidepressivo deve ser guiada pelo perfil de sintomas e pelo perfil de efeitos colaterais de cada classe, não só pela "força" do medicamento** — combinar o efeito colateral indesejado do paciente com o efeito terapêutico desejado é o racional central de prova neste tema.
- **Mirtazapina é a escolha clássica quando há insônia, ansiedade, perda de apetite/peso e náuseas associadas à depressão** — efeito sedativo (por bloqueio H1), orexígeno (estímulo de apetite) e antiemético (por antagonismo 5-HT3), com melhora relativamente rápida do sono, diferente da maioria dos ISRS.
- **Nunca prescrever antidepressivo isolado (sobretudo ISRS) sem rastrear história pessoal/familiar de mania/hipomania** — em transtorno bipolar não reconhecido, antidepressivo em monoterapia pode precipitar **viragem maníaca** ou ciclagem rápida; a conduta correta nesse cenário é associar estabilizador de humor antes ou junto do antidepressivo.
- **Sempre avaliar risco de suicídio de forma ativa e direta** em toda consulta por sintomas depressivos — perguntar sobre ideação, plano e intenção não aumenta o risco (mito comum) e é etapa obrigatória, independentemente da gravidade aparente do quadro.

## 💎 Pearls

- **ISRS (fluoxetina, sertralina, escitalopram) são primeira linha na maioria dos casos** por melhor perfil de segurança/tolerabilidade, mas podem causar ou piorar insônia inicial, disfunção sexual e, por vezes, náusea — perfil diferente do desejado no caso de insônia/perda de apetite proeminentes.
- **Bupropiona é ativadora** (efeito mais "estimulante"), útil quando predominam fadiga, hipersonia e falta de energia — mas **contraindicada em transtornos convulsivos e transtornos alimentares com purgação** (bulimia/anorexia purgativa), pelo risco aumentado de convulsão nesse contexto; também é opção de troca clássica quando há disfunção sexual limitante com ISRS.
- **Duloxetina (IRSN)** tem indicação adicional para dor crônica/neuropática associada (fibromialgia, neuropatia diabética) — útil quando depressão coexiste com dor crônica, mas não é a primeira escolha quando o alvo principal é insônia/apetite reduzido.
- **Topiramato não é antidepressivo** — é anticonvulsivante usado off-label para perda de peso/enxaqueca profilática; sua presença como alternativa numa questão sobre escolha de antidepressivo é sempre distrator.
- **Mnemônico útil do efeito da mirtazapina em baixa dose vs. alta dose:** doses baixas (7,5-15 mg) tendem a ser mais sedativas (predomínio do bloqueio H1 relativo ao efeito noradrenérgico/serotonérgico), enquanto doses mais altas podem ser proporcionalmente menos sedativas — informação fina, mas às vezes cobrada.
- **Resposta a antidepressivo deve ser reavaliada em 4-6 semanas em dose adequada antes de trocar de classe por "falha"** — trocar cedo demais é erro comum; se houver resposta parcial, otimizar dose antes de trocar.
- **Depressão com sintomas atípicos** (hipersonia, hiperfagia, sensibilidade à rejeição, "paralisia de chumbo" — peso nos membros) responde classicamente melhor a inibidores da monoaminoxidase (IMAO) ou a antidepressivos que não pioram sono/apetite, como a própria mirtazapina — reforça o racional de casar perfil de sintoma com perfil de droga.
- Efeitos adversos de classe a decorar: ISRS — disfunção sexual, náusea inicial, síndrome serotoninérgica se combinado com outro serotonérgico; IRSN (venlafaxina/duloxetina) — hipertensão dose-dependente (mais venlafaxina); tricíclicos — cardiotoxicidade/letalidade em superdose, efeitos anticolinérgicos; IMAO — crise hipertensiva com tiramina (interação alimentar).

## ⚠️ Pitfalls

- Escolher ISRS "por padrão" em paciente cujo perfil de sintomas (insônia importante, perda de apetite/peso, náusea) casa melhor com mirtazapina — a pergunta de prova costuma testar exatamente esse raciocínio de adequação de perfil, não "qual é o antidepressivo mais usado em geral".
- Iniciar antidepressivo sem perguntar sobre episódios prévios de humor elevado/irritável, redução da necessidade de sono, grandiosidade ou impulsividade — sinais de possível transtorno bipolar não diagnosticado, que muda toda a estratégia terapêutica.
- Prescrever bupropiona sem checar história de convulsão ou transtorno alimentar purgativo.
- Não reavaliar ideação suicida de forma objetiva por medo de "induzir a ideia" — abordagem direta é a conduta correta e recomendada.
- Trocar de antidepressivo antes de completar tempo adequado de resposta (4-6 semanas) em dose otimizada, interpretando falta de melhora precoce como falha terapêutica definitiva.
- Confundir luto não complicado com transtorno depressivo maior — tristeza intensa após perda é esperada e não exige automaticamente diagnóstico/tratamento farmacológico, a menos que haja critérios completos mantidos e prejuízo funcional importante e prolongado.

## 🩺 Quadro clínico

- Humor deprimido e/ou anedonia como núcleo, associados a alterações de sono (insônia ou hipersonia), apetite/peso (redução ou aumento), energia (fadiga), concentração, autoestima/culpa excessiva, agitação ou lentificação psicomotora e pensamentos de morte/ideação suicida — a combinação e intensidade variam de paciente para paciente, e é justamente essa variação que orienta a escolha terapêutica.
- Sintomas somáticos (náusea, dor difusa, queixas gastrointestinais) podem ser proeminentes e mascarar o diagnóstico, sobretudo em idosos e em contextos de atenção primária — investigação extensa negativa reforça a hipótese psiquiátrica quando o quadro é compatível.
- Impacto funcional social/profissional significativo é critério necessário para o diagnóstico, não só a presença isolada de sintomas.

## 🔎 Diagnóstico

- Clínico, baseado em critérios (DSM-5/CID-11) de duração, número e combinação de sintomas, com exclusão de causas orgânicas (hipotireoidismo, anemia, deficiências nutricionais) e de substâncias como explicação primária quando a história sugerir.
- Escalas (PHQ-9, Escala de Depressão de Hamilton) auxiliam rastreio e acompanhamento de resposta terapêutica, mas não substituem a entrevista clínica estruturada.
- Sempre investigar ativamente sintomas de humor elevado/irritável no passado antes de rotular como depressão unipolar — muda completamente a conduta farmacológica.

## 💊 Tratamento

- **Primeira linha:** ISRS na maioria dos casos, com escolha individualizada quando o perfil de sintomas favorece outra classe (mirtazapina para insônia/perda de apetite/náusea; bupropiona para fadiga/hipersonia, evitando em convulsão/transtorno alimentar purgativo; duloxetina quando há dor crônica associada).
- **Psicoterapia** (terapia cognitivo-comportamental, interpessoal) tem eficácia comparável a farmacoterapia em depressão leve a moderada e efeito sinérgico quando combinada em quadros moderados a graves.
- **Depressão grave com sintomas psicóticos, risco de suicídio iminente ou refratariedade a múltiplos esquemas farmacológicos** pode ter indicação de eletroconvulsoterapia — segura e eficaz, apesar do estigma, e não é "última linha" apenas por gravidade extrema, mas indicação formal em cenários específicos.
- **Depressão em contexto de transtorno bipolar:** associar estabilizador de humor/antipsicótico com propriedade antidepressiva; evitar antidepressivo em monoterapia pelo risco de viragem maníaca.

## 📝 Como a banca cobra

**"Transtornos do humor" é um assunto de baixa incidência neste banco — apenas 1 questão real no corpus completo**: ENARE 2025 Q37 (FÁCIL), caso clássico de depressão maior em mulher de 59 anos com insônia, ansiedade, redução de apetite/peso e náuseas, após investigação orgânica extensa negativa — resposta correta: **mirtazapina**, pelo perfil de efeito sedativo, orexígeno e antiemético que casa exatamente com os sintomas descritos, contra distratores farmacologicamente plausíveis mas menos adequados a esse perfil específico (fluoxetina, duloxetina, bupropiona) e um distrator claramente não antidepressivo (topiramato).

Mesmo com baixa representação no corpus, transtornos do humor são tema **extremamente clássico de prova de residência**, porque a lógica de casar perfil de sintomas com perfil de droga é facilmente reaplicável em múltiplos formatos de questão — alta probabilidade de reaparecer com outro antidepressivo como resposta correta, ou explorando o risco de viragem maníaca em depressão bipolar não reconhecida.

## 📚 Referências essenciais

- APA Practice Guideline for the Treatment of Patients With Major Depressive Disorder.
- CANMAT (Canadian Network for Mood and Anxiety Treatments) Clinical Guidelines for the Management of Major Depressive Disorder.
`;

export default content.trim();
