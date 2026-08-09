/**
 * Resumo — Nefrologia · Injúria renal aguda.
 *
 * Cobre as entidades do assunto no corpus: indicações de diálise de
 * urgência (pericardite urêmica), nefrite intersticial aguda (alérgica) e
 * IRA pré-renal.
 */
const content = `
## 🎯 Essencial

- **Mnemônico das indicações de diálise de urgência: AEIOU** — **A**cidose refratária, **E**letrólitos (hipercalemia refratária), **I**ntoxicação exógena dialisável, sobrecarga de v**O**lume refratária, **U**remia sintomática (pericardite urêmica, encefalopatia urêmica, sangramento urêmico).
- **Pericardite urêmica (atrito pericárdico + IRC/IRA avançada) é indicação de diálise de urgência por si só**, independentemente dos valores absolutos de ureia/creatinina — é uma manifestação de uremia sintomática grave que a diálise trata diretamente removendo as toxinas urêmicas.
- **Nefrite intersticial aguda (alérgica):** perda de função renal + **eosinofilia periférica** em paciente exposto a fármaco classicamente implicado — **inibidores de bomba de prótons, antibióticos (betalactâmicos, sulfa), AINE e alopurinol** são os agentes mais associados. Conduta principal: **suspender o fármaco causador**.
- **IRA pré-renal:** **fração de excreção de sódio <1%** + **cilindros hialinos** (não granulosos) + densidade urinária alta (>1.020) — reflete rim estruturalmente íntegro reabsorvendo sódio ativamente por hipoperfusão, revertendo rapidamente com reposição volêmica adequada.
- **Necrose tubular aguda (o principal diferencial da pré-renal):** fração de excreção de sódio **>2%** + **cilindros granulosos "em lama marrom" (muddy brown)** — reflete lesão tubular estabelecida que não reverte apenas com volume.
- **A combinação de dois medicamentos nefrotóxicos frequentemente aparece em vinhetas de nefrite intersticial alérgica** — omeprazol (ou outro IBP) associado a alopurinol é uma dupla clássica de alto rendimento.

## 💎 Pearls

- **Gluconato de cálcio é o primeiro fármaco em hipercalemia com alteração de ECG/gravidade** — estabiliza a membrana cardíaca imediatamente (não reduz o potássio sérico, apenas protege o coração), enquanto medidas que efetivamente reduzem o potássio (insulina+glicose, beta-agonista) e a diálise definitiva são providenciadas em sequência.
- **A eosinofilia periférica na nefrite intersticial alérgica pode ser discreta ou até ausente em parte dos casos** — sua ausência não exclui o diagnóstico quando o contexto medicamentoso é fortemente sugestivo.
- **A fração de excreção de sódio perde valor diagnóstico em paciente já em uso de diurético** — nesse cenário, a fração de excreção de ureia é mais confiável para diferenciar pré-renal de NTA, já que diuréticos aumentam a excreção de sódio independentemente da causa.
- **Cilindros hialinos são inespecíficos e podem aparecer até em urina concentrada normal** — o que os torna relevantes no contexto pré-renal é a combinação com FeNa baixa e quadro clínico de hipoperfusão, não o achado isolado.
- **Nem toda IRA em paciente com múltiplas comorbidades (DRC prévia, IC, DM) precisa ter causa multifatorial "óbvia" assumida sem investigação** — sempre vale caracterizar o mecanismo (pré-renal, renal intrínseca, pós-renal) antes de atribuir à comorbidade de base genericamente.

## ⚠️ Pitfalls

- **Esperar ureia/creatinina atingirem valores numéricos "de corte" para indicar diálise de urgência** — a indicação por uremia sintomática (pericardite, encefalopatia) é clínica, não depende de um valor laboratorial específico.
- **Tratar pericardite urêmica só com anti-inflamatório**, como se fosse pericardite viral comum — a conduta correta é diálise de urgência; AINE não trata a causa de base e pode até ser contraindicado pela função renal comprometida.
- **Manter o fármaco suspeito "só mais um pouco para confirmar" em nefrite intersticial alérgica** — a suspensão precoce do agente causador é a intervenção mais importante e não deve ser adiada.
- **Confundir cilindros hialinos (pré-renal) com cilindros granulosos (NTA)** na leitura do enunciado — o tipo específico de cilindro é frequentemente a palavra-chave que resolve a questão.
- **Aplicar FeNa <1% como prova definitiva de causa pré-renal em paciente já em uso de diurético** — o índice perde acurácia nesse contexto, e a interpretação deve ser mais cautelosa.
- **Repor volume agressivamente em IRA já estabelecida como NTA**, esperando reversão como se fosse pré-renal — a NTA não responde a volume da mesma forma; excesso de volume nesse cenário pode até ser deletério (sobrecarga).

## 📝 Como a UERJ cobra

**Injúria renal aguda é #33 do ranking (3 questões, 1,2% do corpus)**, com cada questão testando uma faceta prática e objetiva do manejo — indicação de diálise, causa medicamentosa específica, e diferenciação pré-renal/NTA por exame de urina.

- **Indicações de diálise de urgência** (2022 Q9) testou o reconhecimento de pericardite urêmica como indicação por si só, priorizando o gluconato de cálcio para estabilização imediata frente à gravidade eletrocardiográfica associada.
- **Nefrite intersticial aguda** (2025 Q45) testou o reconhecimento da dupla medicamentosa clássica (IBP + alopurinol) associada a eosinofilia — item de conhecimento factual de alto rendimento.
- **IRA pré-renal** (2025 Q48) testou a interpretação conjunta de fração de excreção de sódio, tipo de cilindro urinário e densidade urinária — os três parâmetros juntos, não isolados.

## 🆕 Atualização

- Os **critérios KDIGO para injúria renal aguda** (definição por elevação de creatinina, queda de débito urinário, ou ambos) permanecem o padrão internacional de classificação e estadiamento, servindo de base para decisões de investigação e tratamento, incluindo indicação de terapia renal substitutiva.
- Biomarcadores mais recentes de lesão tubular (como NGAL, KIM-1, TIMP-2•IGFBP7) vêm sendo estudados para detectar lesão renal antes da elevação de creatinina se tornar evidente, mas ainda não substituem os parâmetros clássicos (FeNa, tipo de cilindro, resposta a volume) na prática clínica de rotina nem nas provas.
- O conceito de **"diálise precoce versus tardia"** em IRA grave sem indicação absoluta de urgência segue em debate ativo na literatura — ensaios recentes não mostram benefício consistente de iniciar diálise mais precocemente na ausência de indicação clara (uremia sintomática, distúrbio metabólico refratário, sobrecarga volêmica refratária), reforçando que as indicações clássicas (AEIOU) continuam sendo o guia mais robusto.

## 🧠 Conceito e fisiopatologia

**IRA pré-renal** ocorre quando a perfusão renal está reduzida (hipovolemia, baixo débito cardíaco, vasodilatação sistêmica), mas o parênquima renal permanece estruturalmente íntegro — os néfrons, tentando preservar volume circulante, reabsorvem sódio e água avidamente no túbulo proximal e na alça de Henle, resultando em urina concentrada (densidade alta), pobre em sódio (FeNa baixa) e com cilindros hialinos (moldes proteicos simples, sem debris celulares, formados em túbulos ainda saudáveis). Se a hipoperfusão persistir sem correção, o epitélio tubular eventualmente sofre necrose isquêmica, evoluindo para **necrose tubular aguda** — nesse estágio, as células tubulares lesadas perdem a capacidade de reabsorver sódio adequadamente (FeNa sobe) e se destacam formando os cilindros granulosos característicos.

**Nefrite intersticial aguda** é uma reação de hipersensibilidade mediada por células T, desencadeada por um fármaco (ou, menos comumente, por infecção), que causa infiltração inflamatória do interstício renal com eosinófilos proeminentes em muitos casos — a inflamação compromete a função tubular e pode reduzir a taxa de filtração glomerular por edema intersticial e obstrução tubular funcional, tipicamente revertendo (ao menos parcialmente) após a suspensão do agente causador.

**Uremia sintomática** (incluindo pericardite urêmica) reflete o acúmulo de toxinas urêmicas não filtradas que, em concentração suficiente, causam inflamação/irritação direta de membranas serosas (pericárdio) e disfunção neurológica (encefalopatia) — a diálise remove essas toxinas de forma mais rápida e eficaz do que qualquer medida conservadora, justificando sua indicação de urgência nesse contexto independentemente dos valores numéricos de função renal.

## 🩺 Quadro clínico

- **Uremia sintomática:** atrito pericárdico (pericardite urêmica), sonolência/confusão mental (encefalopatia urêmica), sangramento por disfunção plaquetária urêmica, náuseas/vômitos, hálito urêmico.
- **Nefrite intersticial alérgica:** febre, rash cutâneo, artralgia (tríade clássica, presente apenas em minoria dos casos), eosinofilia, associados temporalmente ao início de um fármaco novo.
- **IRA pré-renal:** sinais de hipovolemia/hipoperfusão (hipotensão, taquicardia, mucosas secas, redução de débito urinário), geralmente reversível rapidamente com reposição volêmica.

## 🔎 Diagnóstico

- **Indicação de diálise de urgência:** avaliação clínica (sinais de uremia sintomática) + laboratorial (potássio, bicarbonato, balanço hídrico) — a decisão é predominantemente clínica, orientada pelo mnemônico AEIOU.
- **Nefrite intersticial alérgica:** hemograma com eosinofilia, história medicamentosa detalhada; biópsia renal confirma quando há dúvida diagnóstica ou necessidade de definir extensão do dano.
- **IRA pré-renal × NTA:** fração de excreção de sódio, exame do sedimento urinário (tipo de cilindro), densidade urinária, resposta à prova de volume.

## 🚨 Gravidade / classificação

- **Critérios KDIGO** estadiam a IRA (1-3) por elevação relativa/absoluta de creatinina e por débito urinário, orientando intensidade de monitorização e limiar para intervenção.
- **Indicações de diálise de urgência (AEIOU):** acidose refratária, distúrbio eletrolítico refratário (hipercalemia), intoxicação exógena dialisável, sobrecarga de volume refratária, uremia sintomática.

## 💊 Tratamento

- **Hipercalemia grave/com alteração de ECG:** **gluconato de cálcio** primeiro (estabilização de membrana), seguido de medidas que deslocam potássio para dentro da célula (insulina + glicose, beta-agonista inalatório) e, se refratária, diálise.
- **Uremia sintomática (pericardite, encefalopatia):** **diálise de urgência**.
- **Nefrite intersticial alérgica:** **suspender o fármaco causador**; corticoide em casos selecionados com disfunção renal significativa ou sem melhora após a suspensão.
- **IRA pré-renal:** reposição volêmica dirigida à causa de base (hipovolemia, baixo débito, vasodilatação), com reavaliação da função renal após a correção.

## 🔀 Diagnóstico diferencial

| Achado | IRA pré-renal | Necrose tubular aguda |
| --- | --- | --- |
| Fração de excreção de sódio | <1% | >2% |
| Cilindros urinários | Hialinos | Granulosos ("muddy brown") |
| Densidade urinária | Alta (>1.020) | Baixa/isostenúrica |
| Resposta a volume | Reverte rapidamente | Não reverte só com volume |

## 📋 Tabela de revisão

| Situação | Achado-chave | Conduta |
| --- | --- | --- |
| Pericardite urêmica | Atrito pericárdico + IRA/IRC | Diálise de urgência |
| Hipercalemia com alteração de ECG | Risco arrítmico | Gluconato de cálcio primeiro |
| Eosinofilia + IBP/alopurinol | Nefrite intersticial alérgica | Suspender o fármaco |
| FeNa <1% + cilindros hialinos | Pré-renal | Reposição volêmica |

## 📚 Referências essenciais

- KDIGO Clinical Practice Guideline for Acute Kidney Injury (citada explicitamente pela UERJ em 2024, no contexto de nefropatia por contraste — ver resumo de rim em situações especiais).
- UpToDate/NEJM Review — Acute Interstitial Nephritis.
- KDIGO — Critérios e Estadiamento de Injúria Renal Aguda.
`;

export default content.trim();
