/**
 * Resumo — Psiquiatria · Catatonia.
 *
 * Tema coeso (sem split por entidade) — catatonia é uma síndrome
 * neuropsiquiátrica única definida por um conjunto de sinais motores,
 * comportamentais e volitivos, independentemente da etiologia de base
 * (psiquiátrica ou por condição médica geral); o algoritmo diagnóstico e o
 * tratamento de primeira linha são os mesmos em qualquer contexto.
 *
 * Cobre a questão real do corpus (ENARE 2026 Q59 — reconhecimento de
 * catatonia em idoso internado, com investigação ampliada e tratamento
 * empírico com benzodiazepínico). Assunto de baixa incidência no banco (1
 * questão, cauda longa, fora do corte 80/20), mas o restante do resumo é
 * extrapolado com profundidade de alto rendimento: sinais cardinais,
 * escala de Bush-Francis, diferenciais clássicos (síndrome neuroléptica
 * maligna, delirium, doença de Parkinson, stiff-person syndrome), teste do
 * lorazepam e catatonia maligna.
 */
const content = `
## 🎯 Essencial

- **Catatonia é uma síndrome, não um diagnóstico etiológico** — pode ocorrer secundária a transtorno psiquiátrico primário (esquizofrenia, transtorno bipolar, depressão maior) ou a condição médica geral (encefalite, distúrbio metabólico, uso/abstinência de substância, doença neurológica) — a investigação de causa médica é sempre obrigatória antes de assumir etiologia puramente psiquiátrica, especialmente em primeiro episódio ou em idoso.
- **Sinais cardinais:** estupor (ausência/lentidão marcante de atividade motora e resposta ao ambiente), catalepsia (manutenção passiva de postura imposta), flexibilidade cérea, mutismo, negativismo (resistência sem motivo aparente a comandos ou tentativas de mobilização), maneirismos, estereotipias, agitação (sem propósito, não influenciada por estímulos externos), ecolalia e ecopraxia (repetição automática de fala/movimentos do examinador).
- **O diagnóstico é clínico**, geralmente apoiado pela **escala de Bush-Francis** — presença de pelo menos 2-3 dos sinais cardinais já é suficiente para suspeitar e iniciar investigação/tratamento, sem exigir todos os sinais simultaneamente.
- **Tratamento de primeira linha: benzodiazepínico em dose de teste** — classicamente **lorazepam** IV ou IM — com resposta rápida (minutos a horas) sendo tanto terapêutica quanto diagnóstica ("teste do lorazepam" positivo reforça o diagnóstico de catatonia).
- **Antipsicóticos NÃO são primeira linha na catatonia** e podem ser perigosos — especialmente antipsicóticos de alta potência, que podem precipitar ou agravar catatonia maligna e mimetizar/induzir síndrome neuroléptica maligna.
- **Eletroconvulsoterapia (ECT)** é indicada quando não há resposta adequada ao benzodiazepínico, em catatonia maligna, ou quando há risco de vida iminente (recusa alimentar/hídrica grave, instabilidade autonômica) exigindo resposta mais rápida e definitiva.

## 💎 Pearls

- **Investigação sempre ampliada antes de fechar o diagnóstico:** exames laboratoriais gerais (hemograma, eletrólitos, função renal/hepática, CPK, glicemia), rastreio toxicológico, e — a depender do contexto clínico (febre, rigidez, alteração do nível de consciência, sinais focais) — neuroimagem e punção lombar para excluir encefalite (incluindo encefalite autoimune anti-NMDA, causa importante de catatonia em jovens) e outras causas médicas graves.
- **Catatonia maligna** é a forma mais grave: instabilidade autonômica (febre, taquicardia, labilidade pressórica), rigidez intensa e risco de vida — exige tratamento agressivo (benzodiazepínico em doses altas, ECT precoce) e vigilância de complicações (rabdomiólise, trombose venosa profunda por imobilidade prolongada, desidratação/desnutrição por recusa alimentar).
- **Retenção urinária, desidratação e desnutrição** são complicações comuns da catatonia prolongada (por recusa alimentar/hídrica e imobilidade) e devem ser ativamente monitoradas e tratadas em paralelo ao tratamento específico.
- **Negativismo catatônico** pode ser confundido com "falta de cooperação" ou "recusa voluntária" do paciente — é um sinal neuropsiquiátrico involuntário, não oposição deliberada, e não deve ser interpretado como manipulação.
- **Catatonia em idoso** deve levantar suspeita ativa de causa médica subjacente (distúrbio metabólico, infecção, efeito medicamentoso, doença neurológica degenerativa) com prioridade ainda maior do que em jovens, dada a menor prevalência relativa de doença psiquiátrica primária de início tardio.
- **A resposta ao lorazepam não só trata como orienta** — se não houver resposta significativa após doses adequadas de benzodiazepínico, reforça-se a indicação de ECT e reconsidera-se ativamente diagnósticos diferenciais (a "não resposta" ao teste do lorazepam torna outros diagnósticos mais prováveis).

## ⚠️ Pitfalls

- **Tratar catatonia como delirium e prescrever antipsicótico de imediato** — é a armadilha mais cobrada: o quadro descrito (vigil, sem alucinações/delírios floridos, sinais motores cardinais) não é delirium, e o antipsicótico pode precipitar catatonia maligna/SNM.
- **Confundir catatonia com depressão grave com apatia intensa** e iniciar antidepressivo tricíclico como conduta isolada — os sinais motores cardinais (catalepsia, negativismo, ecolalia/ecopraxia) não são explicados por depressão isolada e mudam completamente a conduta esperada.
- **Confundir com doença de Parkinson/parkinsonismo** só pela rigidez — a presença de catalepsia, flexibilidade cérea, negativismo, ecolalia/ecopraxia e mutismo não é compatível com parkinsonismo simples, e a resposta rápida ao benzodiazepínico (não à levodopa) confirma a diferenciação.
- **Confundir com síndrome da pessoa rígida (stiff-person syndrome)** — esta cursa com rigidez axial progressiva e espasmos dolorosos desencadeados por estímulo, geralmente com anticorpos anti-GAD positivos, sem o conjunto característico de sinais catatônicos (negativismo, ecolalia/ecopraxia, flexibilidade cérea) nem resposta ao teste do lorazepam da mesma forma.
- **Pular a investigação etiológica ampliada e tratar empiricamente sem excluir causa médica grave e reversível** (especialmente encefalite autoimune, distúrbio metabólico agudo ou intoxicação) — o tratamento com benzodiazepínico não substitui a investigação, ocorre em paralelo a ela.
- **Restringir fisicamente ou sedar excessivamente o paciente catatônico agitado sem reconhecer a síndrome de base** — agrava o risco de complicações (rabdomiólise, trombose) sem tratar a causa.

## 📝 Como a banca cobra

**Catatonia é um assunto de baixa incidência no corpus — apenas 1 questão registrada** (ENARE 2026 Q59, classificada como MÉDIA), com vinheta clássica em idoso internado por desidratação e perda ponderal, apresentando sinais motores cardinais (redução da atividade motora, passividade, recusa a mobilizar-se, posturas rígidas mantidas, aumento difuso do tônus, ecolalia e ecopraxia), exames laboratoriais iniciais normais — a resposta correta combina investigação ampliada (imagem cerebral, punção lombar, laboratório ampliado) **e** tratamento empírico com lorazepam, testando tanto o reconhecimento sindrômico quanto a conduta terapêutica correta em um único item.

Apesar de só ter aparecido uma vez no banco até agora, catatonia é tema **clássico de prova de psiquiatria em residência médica**, justamente por reunir vários diferenciais importantes (delirium, depressão grave, parkinsonismo, síndromes neurológicas raras) em uma única vinheta — formato que testa raciocínio clínico fino, muito valorizado por bancas. Vale a pena dominar os sinais cardinais, a lógica do teste do lorazepam e os diferenciais mais cobráveis.

## 🧠 Conceito e fisiopatologia

A fisiopatologia da catatonia envolve disfunção de circuitos gabaérgicos e glutamatérgicos corticossubcorticais (córtex orbitofrontal, gânglios da base, tálamo), com hipoatividade gabaérgica relativa — o que explica tanto a eficácia terapêutica dos benzodiazepínicos (agonistas GABA-A) quanto o risco de piora com antipsicóticos (que podem desequilibrar ainda mais a neurotransmissão dopaminérgica já alterada nesses circuitos). Historicamente associada quase exclusivamente à esquizofrenia, a catatonia hoje é reconhecida como síndrome transdiagnóstica, presente em transtornos do humor, transtornos do espectro autista, condições médicas gerais e uso/abstinência de substâncias — daí a exigência de investigação etiológica ampla e sistemática em todo caso novo.

## 🩺 Quadro clínico

- **Forma retardada (mais comum):** estupor, mutismo, negativismo, catalepsia, flexibilidade cérea, posturas mantidas, recusa alimentar/hídrica.
- **Forma excitada:** agitação psicomotora intensa sem propósito aparente, não responsiva a estímulos externos, podendo alternar com períodos de estupor no mesmo episódio.
- **Sinais ecopráxicos:** ecolalia (repetição automática da fala do examinador) e ecopraxia (repetição automática dos movimentos do examinador) são altamente sugestivos quando presentes.
- **Catatonia maligna:** febre, instabilidade autonômica (labilidade de pressão arterial e frequência cardíaca), rigidez muscular intensa — quadro potencialmente fatal que exige tratamento urgente.

## 🔎 Diagnóstico

- **Escala de Bush-Francis** para rastreio e quantificação de gravidade — presença de ≥2-3 sinais cardinais já justifica investigação e tratamento de prova.
- **Investigação etiológica obrigatória:** laboratório geral (incluindo CPK, pela rabdomiólise associada à rigidez/imobilidade prolongada), rastreio toxicológico, neuroimagem e, conforme suspeita clínica, punção lombar (excluir encefalite, incluindo a autoimune anti-NMDA, particularmente relevante em pacientes jovens com catatonia de início agudo).
- **Teste do lorazepam:** administração de dose de benzodiazepínico com observação de resposta em minutos a poucas horas — resposta positiva (melhora clara dos sinais catatônicos) reforça o diagnóstico e já inicia o tratamento simultaneamente.

## 💊 Tratamento

- **Primeira linha:** benzodiazepínico (lorazepam classicamente, por ter apresentação parenteral disponível e ação previsível) em dose de teste, com escalonamento conforme resposta.
- **Refratariedade ou catatonia maligna:** eletroconvulsoterapia — tratamento mais eficaz e definitivo disponível, indicado precocemente em quadros graves com risco de vida.
- **Suporte clínico:** hidratação, correção de distúrbios hidroeletrolíticos, profilaxia de trombose venosa profunda (imobilidade prolongada), suporte nutricional (via alternativa se recusa alimentar persistente).
- **Tratar a etiologia de base** identificada na investigação (infecção, distúrbio metabólico, encefalite autoimune, substância), em paralelo ao tratamento sintomático da catatonia.
- **Evitar antipsicóticos**, especialmente de alta potência, até que a catatonia esteja controlada — se o quadro psiquiátrico de base realmente exigir antipsicótico (ex.: esquizofrenia com sintomas psicóticos proeminentes associados), a introdução deve ser cautelosa e só após resolução ou controle adequado da catatonia.

## 📚 Referências essenciais

- American Psychiatric Association (APA) — Practice Guideline for the Treatment of Patients with Catatonia.
- Escala de Bush-Francis Catatonia Rating Scale — critérios de rastreio e gravidade.
`;

export default content.trim();
