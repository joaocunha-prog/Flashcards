/**
 * Resumo — Nefrologia · Distúrbios hidroeletrolíticos.
 *
 * Reorganizado por entidade clínica (cada distúrbio tem sua própria seção
 * com quando suspeitar, diagnóstico, tratamento, pearl e pitfall juntos),
 * em vez de picado entre seções genéricas de tipo — o assunto reúne vários
 * distúrbios de sódio, potássio, cálcio e magnésio clinicamente distintos,
 * cada um com mecanismo e conduta próprios.
 *
 * Cobre as entidades do assunto no corpus: hiponatremia hipovolêmica
 * sintomática grave, SIADH (hiponatremia euvolêmica grave sintomática) e
 * hipercalemia com alterações eletrocardiográficas. Expandido com os
 * demais distúrbios de alto rendimento do mesmo eixo (hiponatremia
 * hipervolêmica, cerebral salt wasting, hipocalemia, hipernatremia/diabetes
 * insípido, hipocalcemia, hipercalcemia, hipomagnesemia) ainda não
 * cobrados no corpus, mas altamente prováveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- **Toda hiponatremia sintomática grave (convulsão, rebaixamento, coma) é emergência, independentemente da causa** — trata-se com **salina hipertônica a 3%**, nunca com solução isotônica ou restrição hídrica isolada.
- **O primeiro passo diagnóstico em qualquer hiponatremia é avaliar a volemia clínica** (hipovolêmica, euvolêmica, hipervolêmica) — isso direciona toda a investigação mais do que a osmolaridade urinária isolada.
- **Hipercalemia é definida pelo ECG, não só pelo valor laboratorial**: onda T apiculada → alargamento de QRS → perda de onda P → padrão sinusoidal é a sequência de gravidade crescente, e o ECG já basta para tratar sem esperar confirmação laboratorial.
- **A velocidade de correção é tão importante quanto o diagnóstico correto** — tanto na hiponatremia quanto na hipernatremia, corrigir rápido demais troca um problema agudo por uma lesão neurológica permanente (mielinólise pontina ou edema cerebral).
- **Hipomagnesemia bloqueia a correção de hipocalemia e hipocalcemia** — sempre dosar e repor magnésio quando um desses dois distúrbios parece "refratário" ao tratamento padrão.

## 📝 Como a banca cobra

**Distúrbios hidroeletrolíticos aparecem em 3 questões (1,42% do corpus)**, todas do ENARE (2025 e 2026), com foco em **reconhecer gravidade pelo quadro clínico/ECG e definir a conduta imediata**, não em memorizar fórmulas isoladas.

- **ENARE 2025 Q1** trouxe hiponatremia hipovolêmica sintomática grave — testa se o candidato reconhece a necessidade de salina hipertônica mesmo num cenário de depleção de volume, sem confundir com reposição isotônica de rotina.
- **ENARE 2026 Q12** cobrou SIADH com hiponatremia grave sintomática — o diferencial com a hiponatremia hipovolêmica pela volemia normal é o ponto central, além de a conduta de emergência ser a mesma (salina hipertônica) apesar do mecanismo diferente.
- **ENARE 2026 Q72** cobrou o reconhecimento das alterações eletrocardiográficas da hipercalemia (onda T apiculada, alargamento de QRS) como gatilho para tratamento imediato, antes mesmo de aguardar o laboratório.
- **Nenhuma questão do corpus cobrou ainda hipernatremia, hipocalemia ou distúrbios de cálcio/magnésio isoladamente** — são candidatos naturais de alta probabilidade em provas futuras, seguindo o mesmo padrão de "reconhecer gravidade e agir".

## 🧠 Conceito e fisiopatologia

- O sódio sérico reflete a relação entre sódio corporal total e água corporal total, regulada principalmente por ADH
- Em hipovolemia, a queda de volume circulante efetivo estimula ADH por via não-osmótica (barorreceptores) → retém água livre e dilui o sódio, mesmo com sódio corporal total reduzido
- No SIADH, o ADH é secretado de forma inapropriada — independente da osmolaridade e da volemia
- No cerebral salt wasting, a lesão do SNC libera peptídeos natriuréticos que causam perda renal primária de sódio
- SIADH e CSW são dois mecanismos opostos que geram um quadro laboratorial parecido → daí a importância de examinar a volemia antes de tratar

- Na correção rápida da hiponatremia crônica, o cérebro adaptado (que perdeu osmólitos idiogênicos para equilibrar com o meio hiposmolar) não consegue reacumulá-los na mesma velocidade
- A subida abrupta da osmolaridade extracelular desidrata e desmieliniza oligodendrócitos, sobretudo na ponte
- Na hipernatremia o raciocínio se inverte: o déficit de água livre desidrata as células cerebrais, que se adaptam gerando osmólitos idiogênicos
- Por isso a correção também deve ser lenta, sob pena de edema cerebral por entrada rápida de água nas células já adaptadas

💡 Pensa assim: o cérebro "se ajusta" ao sal (ou à falta dele) igual quem se aclimata a uma pressão diferente — tirar ou devolver rápido demais é o que machuca, não o nível em si.

- A hipercalemia altera o potencial de repouso de membrana dos cardiomiócitos, retardando a despolarização → daí a sequência previsível de alterações no ECG conforme o potássio sobe
- A hipocalemia faz o caminho oposto: hiperpolariza a membrana, retardando a repolarização e predispondo a arritmias, sobretudo em quem já usa digitálico
- Os distúrbios de cálcio afetam diretamente o limiar de excitabilidade neuromuscular: hipocalcemia excita, hipercalcemia deprime
- Isso explica por que a tetania é do cálcio baixo e a fraqueza/constipação/confusão é do cálcio alto — padrão oposto ao intuitivo para quem confunde os dois eletrólitos

## 🔹 Hiponatremia hipovolêmica

- **Quando suspeitar:** perdas renais (diuréticos, nefropatia perdedora de sal) ou extrarrenais (vômitos, diarreia, terceiro espaço) de sódio e água, repostas só com água livre; mucosas secas, turgor reduzido, PA postural, taquicardia.
- **Diagnóstico:** sódio urinário <20 mEq/L nas perdas extrarrenais (rim reabsorvendo sódio ao máximo); >20 mEq/L nas perdas renais (diurético, nefropatia perdedora de sal, insuficiência adrenal) — a diferenciação pelo sódio urinário só faz sentido depois de confirmar hipovolemia pelo exame físico, nunca antes.
- **Tratamento:** salina hipertônica a 3% se sintomática grave; salina isotônica se hipovolemia sem sintomas graves — corrige o estímulo não-osmótico de ADH e a natremia sobe.
- 💎 **Pearl:** a resposta à salina isotônica é o próprio teste diagnóstico retroativo — se o sódio sobe rápido (>2 mEq/L/h) com a hidratação, confirma-se hipovolemia; se não sobe, reconsiderar SIADH.
- ⚠️ **Pitfall:** tratar hiponatremia sintomática grave só com salina isotônica de manutenção — atraso terapêutico inaceitável quando a indicação é hipertônica.
- 📝 **Como caiu:** ENARE 2025 Q1.

## 🔹 SIADH (síndrome de secreção inapropriada de ADH)

- **Quando suspeitar:** hiponatremia euvolêmica — sem edema, sem sinais de hipovolemia — associada a doença pulmonar (pneumonia, tuberculose, ventilação com pressão positiva, neoplasia de pequenas células de pulmão), doença do SNC (meningite, hemorragia, AVC, trauma, tumor) ou medicação (ISRS, carbamazepina, ciclofosfamida, antipsicóticos, MDMA, AINEs).
- **Diagnóstico (critérios de Bartter-Schwartz):** hiponatremia hipotônica euvolêmica + osmolaridade urinária inapropriadamente elevada (>100 mOsm/kg) + sódio urinário >20-40 mEq/L + função tireoidiana, adrenal e renal normais (hipotireoidismo e insuficiência adrenal também causam hiponatremia euvolêmica por mecanismos próprios e devem ser excluídos).
- **Tratamento:** sintomática grave → salina hipertônica a 3%, igual à hipovolêmica. Crônica/assintomática → restrição hídrica e tratamento da causa de base; vaptanos ou ureia em casos refratários.
- 💎 **Pearl:** dar salina isotônica de rotina para um SIADH pode *piorar* a hiponatremia — fenômeno de "dessalinização": a urina, mais concentrada que o soro infundido, excreta o sódio dado e retém a água livre, num paciente cujo ADH continua alto — é a solução hipertônica, não a isotônica, que funciona no SIADH sintomático grave.
- ⚠️ **Pitfall:** confundir hiponatremia hipovolêmica com SIADH só pelo sódio urinário elevado (presente nos dois cenários) — a diferenciação real é pelo exame de volemia (mucosas, turgor, PA postural, edema), não pelo sódio urinário isolado.
- 📝 **Como caiu:** ENARE 2026 Q12.

## 🔹 Hiponatremia hipervolêmica

- **Quando suspeitar:** ICC, cirrose, síndrome nefrótica — edema e volume circulante efetivo reduzido apesar do sódio corporal total aumentado (o rim retém sódio e água tentando compensar a hipoperfusão percebida).
- **Diagnóstico:** sódio urinário <20 mEq/L (exceto se já em uso de diurético, quando pode estar falsamente elevado); edema, ascite ou outros sinais de sobrecarga de volume ao exame.
- **Tratamento:** restrição hídrica e de sódio, diuréticos, tratamento da doença de base — nunca salina isotônica, que pioraria a congestão sem corrigir a hiponatremia (o problema não é falta de sódio corporal, é excesso de água em relação a ele).
- ⚠️ **Pitfall:** aplicar os critérios de Light-like de "sódio urinário >20 = perda renal" sem notar que o paciente está em uso de diurético — o sódio urinário fica artificialmente elevado e não reflete o mecanismo hipervolêmico de base.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Cerebral salt wasting (CSW)

- **Quando suspeitar:** paciente neurocrítico (hemorragia subaracnóidea, TCE, pós-neurocirurgia) com hiponatremia e natriurese elevada — o diferencial mais importante de SIADH nesse cenário específico.
- **Diagnóstico:** ao contrário do SIADH, o paciente está **hipovolêmico** — mucosas secas, PA postural positiva, balanço hídrico negativo — apesar do quadro laboratorial (hiponatremia + natriurese) parecer idêntico ao SIADH.
- **Tratamento:** reposição de volume e sódio (salina isotônica ou hipertônica conforme gravidade), eventualmente fludrocortisona — nunca restringir água.
- 💎 **Pearl:** a distinção SIADH vs. CSW muda o tratamento em 180 graus (restringir água vs. repor volume) usando exatamente o mesmo laboratório — só o exame físico de volemia decide.
- ⚠️ **Pitfall:** restringir água num paciente neurocrítico hipovolêmico achando que é SIADH — piora a hipoperfusão cerebral, exatamente o oposto do desejado num cenário onde a perfusão cerebral já é a prioridade máxima.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Hipercalemia

- **Quando suspeitar:** lesão renal aguda/DRC, uso de IECA/BRA/espironolactona, rabdomiólise, síndrome de lise tumoral, acidose metabólica (desloca potássio para fora da célula), insuficiência adrenal (Addison).
- **Diagnóstico:** potássio sérico confirmado (excluir hemólise de coleta/garroteamento prolongado — **pseudo-hipercalemia** — repetindo a amostra quando o valor não combina com o ECG/clínica) + ECG imediato para estratificar gravidade.
- **Tratamento:** gluconato de cálcio IV imediato se alteração de ECG (estabiliza a membrana, não baixa o potássio) + insulina regular com glicose + beta-agonista inalatório (redistribuição, ambos temporários) + resina de troca/patiromer/ciclossilicato de zircônio sódico ou diálise (remoção efetiva).
- 💎 **Pearl:** paciente com DRC crônica costuma tolerar potássio mais alto sem alteração de ECG (adaptação celular lenta) do que um paciente com elevação aguda do mesmo valor — a gravidade clínica não é só o número, é a velocidade de instalação somada ao ECG.
- ⚠️ **Pitfall:** usar gluconato de cálcio esperando "baixar o potássio" — ele só estabiliza a membrana; sempre associar medida que efetivamente reduza o potássio sérico.
- 📝 **Como caiu:** ENARE 2026 Q72.

## 🔹 Hipocalemia

- **Quando suspeitar:** uso de diuréticos, vômitos/diarreia, hiperaldosteronismo, alcalose metabólica (desloca potássio para dentro da célula); fraqueza muscular, íleo paralítico.
- **Diagnóstico:** potássio sérico + magnésio sérico concomitante (hipomagnesemia impede a correção efetiva — potássio "refratário") + ECG (onda U, achatamento de onda T, depressão de ST).
- **Tratamento:** reposição IV cautelosa com monitorização cardíaca se sintomática/grave (<2,5-3,0 mEq/L) — **limite de infusão por via periférica: 10 mEq/hora** (até 20 mEq/hora com monitorização estrita); acima disso, exige acesso central e telemetria contínua pelo risco de arritmia pela própria infusão.
- 💎 **Pearl:** corrigir hipocalemia com insulina/glicose (pensando em outro contexto) ou beta-agonista em dose alta pode agravar ainda mais a hipocalemia de base — o raciocínio de redistribuição da hipercalemia se torna perigoso quando aplicado ao paciente errado.
- ⚠️ **Pitfall:** ignorar hipomagnesemia associada em hipocalemia refratária — sem repor magnésio, a reposição isolada de potássio não normaliza o nível sérico.
- 📝 **Como caiu:** ainda não cobrado no corpus — candidato natural de alto rendimento.

## 🔹 Hipernatremia e diabetes insípido

- **Quando suspeitar:** déficit de água livre (quase sempre a causa, raramente excesso de sódio) — perda hídrica não reposta (febre, diarreia, diurese osmótica) em paciente sem acesso livre à água (idoso acamado, rebaixado, criança), ou poliúria hipotônica sugerindo diabetes insípido.
- **Diagnóstico:** osmolaridade urinária e resposta a desmopressina diferenciam diabetes insípido central (baixa osmolaridade urinária que **concentra** após desmopressina) de nefrogênico (**não responde** à desmopressina, rim insensível ao ADH); teste de restrição hídrica formal quando a diferenciação não é clara pela resposta simples.
- **Tratamento:** calcular o déficit de água livre e repor por via oral ou IV (soro glicosado 5% ou salina hipotônica) de forma lenta — limite de correção **10-12 mEq/L/24h**, igual princípio da hiponatremia, mas no sentido oposto; desmopressina no diabetes insípido central.
- ⚠️ **Pitfall:** corrigir hipernatremia rápido demais — assim como na hiponatremia, correção acelerada pode causar edema cerebral, sobretudo em crianças e hipernatremia crônica.
- 📝 **Como caiu:** ainda não cobrado no corpus — candidato natural de alto rendimento.

## 🔹 Hipocalcemia

- **Quando suspeitar:** pós-tireoidectomia/paratireoidectomia (lesão ou remoção inadvertida de paratireoides), deficiência de vitamina D, pancreatite aguda (saponificação de cálcio no retroperitônio), hipomagnesemia (bloqueia a secreção de PTH).
- **Diagnóstico:** sempre corrigir o cálcio sérico pela albumina antes de interpretar o valor total (cálcio corrigido = cálcio medido + 0,8 × [4 − albumina]); cálcio iônico é mais confiável em paciente crítico. Sinais de Chvostek (contração da hemiface ao percutir o nervo facial) e Trousseau (espasmo carpal ao insuflar o manguito) são os achados clássicos ao exame; ECG com QT prolongado.
- **Tratamento:** gluconato de cálcio IV se sintomática/grave (tetania, convulsão, QT muito prolongado) + reposição de magnésio se baixo (sem isso, a resposta ao cálcio é insatisfatória) + vitamina D/calcitriol conforme causa.
- 💎 **Pearl:** **síndrome do osso faminto** ("hungry bone syndrome") após paratireoidectomia por hiperparatireoidismo grave causa hipocalcemia profunda e prolongada nos dias seguintes à cirurgia — o osso, privado do excesso crônico de PTH, capta cálcio avidamente da circulação; exige reposição intensiva e monitorização, diferente de uma hipocalcemia pós-operatória transitória comum.
- ⚠️ **Pitfall:** repor cálcio isoladamente numa hipocalcemia com magnésio baixo, sem corrigir o magnésio — a resposta é insatisfatória enquanto a hipomagnesemia persistir.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Hipercalcemia

- **Quando suspeitar:** hiperparatireoidismo primário (causa mais comum ambulatorial) ou malignidade (causa mais comum em paciente hospitalizado, por metástase óssea lítica ou por PTHrP em tumores sólidos); "gemidos, pedras, ossos, gemidos abdominais e overtones psiquiátricos" como mnemônico clássico do quadro.
- **Diagnóstico:** cálcio corrigido/iônico elevado + PTH (elevado no hiperparatireoidismo primário, suprimido na malignidade) direciona a etiologia.
- **Tratamento:** hidratação vigorosa com salina isotônica primeiro (a maioria está hipovolêmica pela poliúria induzida pelo cálcio alto), seguida de bisfosfonato IV; calcitonina para efeito rápido temporário; diálise em casos refratários ou com insuficiência renal grave associada.
- ⚠️ **Pitfall:** usar furosemida como primeira medida na hipercalcemia grave antes de corrigir a hipovolemia associada — pode piorar a perfusão renal e retardar a excreção de cálcio que se pretende acelerar; furosemida só entra depois da volemia corrigida.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**Diferencial de hiponatremia euvolêmica/hipovolêmica em cenário neurocrítico**

| Achado | SIADH | Cerebral salt wasting |
|---|---|---|
| Volemia | Euvolêmico | Hipovolêmico |
| Natriurese | Presente | Presente (mais intensa) |
| Balanço hídrico | Neutro/positivo | Negativo |
| Tratamento correto | Restrição hídrica (crônico) / salina hipertônica se grave | Reposição de volume e sódio |
| Erro fatal | — | Restringir água (piora hipoperfusão) |

**Sequência de gravidade no ECG da hipercalemia**

| Fase | Achado |
|---|---|
| Inicial | Onda T apiculada e estreita |
| Intermediária | Alargamento de QRS, prolongamento de PR |
| Avançada | Perda de onda P |
| Pré-terminal | Padrão sinusoidal (fusão de QRS com T) → risco de assistolia/FV |

## 📚 Referências essenciais

- Diretriz Europeia de Hiponatremia (Hyponatraemia Guideline Development Group).
- KDIGO — distúrbios do potássio em doença renal.
- Harrison's Principles of Internal Medicine — capítulos de distúrbios do sódio, do potássio, do cálcio e do equilíbrio hidroeletrolítico.
`;

export default content.trim();
