/**
 * Resumo — Cardiologia · Doenças do pericárdio e miocárdio.
 *
 * Cobre as entidades do assunto no corpus: cardiotoxicidade por
 * quimioterápicos, cardiomiopatia de Takotsubo, cardiomiopatias
 * restritivas/infiltrativas (amiloidose cardíaca) e pericardite aguda.
 */
const content = `
## 🎯 Essencial

- **Cardiotoxicidade por antracíclico (doxorrubicina):** disfunção sistólica **dose-dependente e cumulativa**, que pode aparecer meses a anos após o tratamento oncológico. Tratamento é o mesmo da insuficiência cardíaca com fração de ejeção reduzida — **IECA/BRA + betabloqueador** — e o rastreio ecocardiográfico seriado durante a quimioterapia é o que permite detectar a queda de fração de ejeção antes da falência clínica.
- **Cardiomiopatia de Takotsubo ("coração partido"):** mulher na pós-menopausa, gatilho de **estresse emocional ou físico agudo**, dor torácica com **supradesnivelamento de ST simulando IAM anterior**, mas **coronárias normais** na cineangiocoronariografia. Ecocardiograma mostra **balonamento apical com hipercinesia basal**.
- **Não existe reperfusão a fazer no Takotsubo** — coronárias estão normais. O tratamento é suporte (é diferencial obrigatório do IAM, não uma variante dele).
- **Amiloidose cardíaca é a cardiomiopatia restritiva mais cobrada:** ecocardiograma com **espessamento ventricular sem hipertensão associada** + ECG com **baixa voltagem discordante da hipertrofia ecocardiográfica** (achado muito discriminatório — "hipertrofia que não aparece no ECG"). RM cardíaca mostra **realce tardio subendocárdico difuso**.
- **Duas causas principais de amiloidose cardíaca:** **AL** (cadeias leves de imunoglobulina, de discrasia plasmocitária — pedir relação de cadeias leves livres kappa/lambda) e **transtirretina (ATTR)**, hereditária ou senil (rastreio por cintilografia com pirofosfato, sem necessidade de biópsia se a cintilografia for muito positiva e não houver componente monoclonal).
- **Pericardite aguda:** dor pleurítica que **piora deitado e melhora sentado/inclinado para frente**, **supradesnivelamento difuso de ST côncavo** (não territorial) + **infradesnivelamento de PR**. Tratamento de primeira linha: **AINE (ibuprofeno/AAS) + colchicina**.
- **Colchicina reduz recorrência da pericardite** — é adicionada de rotina ao AINE desde o primeiro episódio, não reservada só para recidiva.
- **Amiloidose por cadeias leves (AL) frequentemente cursa com síndrome nefrótica, macroglossia, equimose periorbitária e hipotensão ortostática** associadas ao acometimento cardíaco — pensar em amiloidose sistêmica, não só cardíaca, diante dessa combinação.

## 💎 Pearls

- **Takotsubo pode elevar troponina e CK-MB discretamente**, mesmo sem necrose coronariana relevante — não descarte o diagnóstico só porque há algum marcador de necrose positivo.
- **A RM cardíaca no Takotsubo mostra edema miocárdico difuso sem necrose/fibrose relevante** — achado que ajuda a diferenciar de miocardite (que também cursa com coronárias normais, mas costuma ter realce tardio subepicárdico focal).
- **O prognóstico do Takotsubo com disfunção de VE significativa não é necessariamente ruim** — a maioria recupera a função ventricular em semanas; a mortalidade intra-hospitalar existe mas não é a regra.
- **"Baixa voltagem no ECG com hipertrofia ventricular no ecocardiograma"** é o par de achados mais discriminatório de doença infiltrativa (amiloidose) — em hipertrofia por hipertensão ou cardiomiopatia hipertrófica sarcomérica, o ECG costuma mostrar critérios de voltagem aumentada, não diminuída.
- **Trastuzumabe causa cardiotoxicidade tipicamente reversível e não dose-dependente**, diferente da antraciclina — distinção relevante quando a vinheta cita os dois agentes juntos (esquemas de câncer de mama HER2+ combinam ambos).
- **Infradesnivelamento de PR é mais específico de pericardite do que o supra de ST** — procure ativamente esse achado no ECG antes de assumir SCA.
- **Derrame pericárdico leve a moderado acompanhando pericardite aguda não muda a conduta inicial** — só derrame volumoso com sinais de tamponamento exige intervenção (pericardiocentese).

## ⚠️ Pitfalls

- **Tratar Takotsubo como IAM com supra de ST** e indicar trombolítico/angioplastia primária sem antes considerar o diagnóstico — o supra de ST é real, mas a origem não é obstrutiva; a cineangiocoronariografia (que mostra coronárias normais) é o que fecha o diagnóstico, e mesmo assim geralmente é necessária para excluir SCA verdadeira antes de rotular como Takotsubo.
- **Usar AAS, betabloqueador e heparina em dose plena "de rotina" no Takotsubo** como se fosse SCA — o tratamento é de suporte, guiado pela disfunção ventricular (não pela mesma bula de SCA).
- **Biopsiar endomiocárdio de rotina para diagnosticar amiloidose cardíaca** quando a cintilografia com pirofosfato já é fortemente positiva e não há componente monoclonal — nesse cenário a cintilografia sozinha confirma ATTR, sem necessidade de biópsia invasiva.
- **Confundir amiloidose cardíaca com cardiomiopatia hipertrófica sarcomérica** só pela hipertrofia ecocardiográfica — o ECG com baixa voltagem, a idade mais avançada e os sinais sistêmicos (síndrome do túnel do carpo bilateral, macroglossia) apontam para amiloidose.
- **Tratar pericardite aguda com corticoide como primeira linha** — corticoide precoce está associado a maior taxa de recorrência; é reservado para contraindicação a AINE/colchicina ou doença refratária.
- **Esquecer que AINE em altas doses prolongadas pode ser deletério em paciente com componente isquêmico associado** — a pericardite pós-IAM (Dressler ou a forma precoce) exige atenção especial na escolha do anti-inflamatório.

## 📝 Como a UERJ cobra

**Doenças do pericárdio e miocárdio é #11 do ranking (6 questões, 2,4% do corpus)**, com um padrão de vinheta muito nítido: apresentação que mimetiza síndrome coronariana aguda, mas com um detalhe que desvia o diagnóstico.

- **Cardiomiopatia de Takotsubo** apareceu 2 vezes (2022 Q15, 2023 Q6) — sempre com supra de ST + gatilho emocional + coronárias normais, testando tanto o reconhecimento quanto o **manejo diferenciado** (RM com edema sem necrose; não usar protocolo de SCA).
- **Cardiomiopatias restritivas/infiltrativas** apareceu 2 vezes (2024 Q32, 2025 Q27), ambas de amiloidose cardíaca, com o par ECG de baixa voltagem + ecocardiograma hipertrofiado como assinatura.
- **Cardiotoxicidade por quimioterápico** (2022 Q6) citou explicitamente a diretriz brasileira de cardio-oncologia (SBC) e testou o par droga-mecanismo + tratamento (IECA).
- **Pericardite aguda** (2025 Q30) cobrou o tratamento correto (ibuprofeno + colchicina) frente a distratores razoáveis (indometacina, trombolítico).

## 🆕 Atualização

- **Tafamidis**, estabilizador da transtirretina, tornou-se tratamento específico aprovado para amiloidose cardíaca por ATTR (hereditária e senil/wild-type), mudando o prognóstico de uma doença antes só tratada com suporte — a UERJ ainda não cobrou o fármaco, mas o diagnóstico não invasivo por cintilografia (que já é cobrado) é justamente o que viabiliza esse tratamento precocemente.
- **Cardio-oncologia** consolidou-se como subespecialidade, com protocolos de rastreio de cardiotoxicidade (ecocardiograma com strain longitudinal global, biomarcadores como troponina/BNP seriados) antes, durante e após quimioterapia cardiotóxica — reflexo direto da diretriz da SBC já citada pela banca.
- **Anticorpos monoclonais anti-amiloide (daratumumabe)** entraram no arsenal terapêutico da amiloidose AL associada a discrasia plasmocitária, além dos esquemas clássicos de quimioterapia dirigida ao clone plasmocitário.

## 🧠 Conceito e fisiopatologia

**Cardiotoxicidade por antracíclicos** decorre de geração de radicais livres e dano mitocondrial cumulativo nos cardiomiócitos, proporcional à dose total recebida — por isso o efeito pode se manifestar tardiamente, mesmo após o término do tratamento oncológico, e por isso o rastreio seriado (não só um ecocardiograma pré-tratamento) é essencial.

**Cardiomiopatia de Takotsubo** envolve disfunção microvascular e toxicidade miocárdica direta mediada por uma tempestade de catecolaminas desencadeada por estresse emocional ou físico intenso — a distribuição da disfunção (ápice mais afetado que a base) provavelmente reflete a maior densidade de receptores adrenérgicos nessa região, explicando o padrão característico de balonamento apical com hipercinesia basal compensatória.

**Amiloidose cardíaca** resulta do depósito extracelular de proteínas mal dobradas (cadeias leves de imunoglobulina na forma AL; transtirretina mal dobrada na forma ATTR) no interstício miocárdico, enrijecendo progressivamente a parede ventricular — o miocárdio fica espesso ao ecocardiograma, mas o tecido amiloide não gera voltagem elétrica proporcional (ao contrário do músculo hipertrofiado verdadeiro), explicando a discordância entre espessamento ecocardiográfico e baixa voltagem eletrocardiográfica. O padrão fisiológico resultante é de **cardiomiopatia restritiva**: enchimento ventricular prejudicado por rigidez de parede, com função sistólica relativamente preservada até fases avançadas.

**Pericardite aguda** é uma inflamação do pericárdio (idiopática/viral na maioria dos casos ocidentais) que gera dor por irritação das terminações nervosas pericárdicas — a piora ao deitar e melhora ao inclinar para frente reflete a posição em que o pericárdio inflamado tem menor contato/tração; o supradesnivelamento difuso de ST (sem correlação territorial, ao contrário do IAM) reflete inflamação epicárdica difusa, e o infradesnivelamento de PR reflete o mesmo processo inflamatório atingindo o átrio.

## 🩺 Quadro clínico

- **Cardiotoxicidade por quimioterápico:** dispneia, ortopneia, dispneia paroxística noturna, edema de membros inferiores, B3 — quadro de insuficiência cardíaca em paciente com exposição prévia (ou atual) a antraciclina/trastuzumabe.
- **Takotsubo:** dor torácica súbita após estresse emocional/físico intenso, dispneia, achados de congestão (B3, estertores), instabilidade hemodinâmica em casos graves.
- **Amiloidose cardíaca:** dispneia progressiva, edema de membros inferiores, intolerância ortostática (disautonomia associada), e sinais de acometimento sistêmico quando é AL — síndrome do túnel do carpo bilateral, macroglossia, equimose periorbitária, proteinúria.
- **Pericardite aguda:** dor torácica pleurítica, posicional, atrito pericárdico à ausculta (achado patognomônico quando presente, mas inconstante), febre baixa, pródromo viral frequente.

## 🔎 Diagnóstico

- **Cardiotoxicidade:** ecocardiograma seriado (queda relativa de fração de ejeção ou de strain longitudinal global) antes, durante e após quimioterapia cardiotóxica; biomarcadores (troponina, BNP) como apoio.
- **Takotsubo:** ECG com supra de ST + cineangiocoronariografia sem lesões obstrutivas relevantes + ecocardiograma com balonamento apical característico; RM cardíaca confirma edema sem realce tardio de necrose (distingue de miocardite/IAM).
- **Amiloidose cardíaca:** ecocardiograma com hipertrofia + strain longitudinal com padrão "cherry on top" (poupamento apical); ECG com baixa voltagem discordante; RM com realce tardio subendocárdico difuso; **cintilografia com pirofosfato** confirma ATTR quando fortemente positiva e sem componente monoclonal; se houver componente monoclonal (eletroforese/imunofixação/cadeias leves livres alteradas), investigar AL com biópsia (gordura abdominal, medula óssea, ou do próprio órgão acometido).
- **Pericardite aguda:** diagnóstico clínico (2 de 4 critérios: dor pleurítica típica, atrito pericárdico, ECG característico, derrame pericárdico novo/piora), ecocardiograma para avaliar derrame associado e descartar tamponamento.

## 🚨 Gravidade / classificação

- **Cardiotoxicidade** é graduada pela queda percentual da fração de ejeção e pelo grau de sintomas — orienta decisão entre continuar/suspender/trocar o esquema quimioterápico em conjunto com a oncologia.
- **Takotsubo com choque cardiogênico** (forma complicada) exige suporte hemodinâmico avançado, incluindo considerar contrapulsação com balão intra-aórtico — inotrópicos adrenérgicos são usados com cautela, já que o próprio excesso catecolaminérgico é o mecanismo da doença.
- **Amiloidose cardíaca** tem estadiamento prognóstico (biomarcadores: troponina e NT-proBNP) que orienta intensidade terapêutica e elegibilidade a tratamento específico.
- **Pericardite com derrame volumoso e sinais de tamponamento** (pulso paradoxal, hipotensão, turgência jugular) é emergência — pericardiocentese.

## 💊 Tratamento

- **Cardiotoxicidade por antracíclico:** tratamento padrão de insuficiência cardíaca com fração de ejeção reduzida — **IECA/BRA + betabloqueador**, com dexrazoxano como cardioprotetor em pacientes selecionados de alto risco antes da quimioterapia.
- **Takotsubo:** suporte hemodinâmico guiado pela função ventricular (diuréticos se congestão, evitar agonistas adrenérgicos quando possível pelo mecanismo da doença); a maioria recupera função em dias a semanas, com seguimento ecocardiográfico.
- **Amiloidose cardíaca AL:** quimioterapia dirigida ao clone plasmocitário (esquemas com bortezomibe, dexametasona, e daratumumabe mais recentemente) — o tratamento é hematológico, não cardiológico isolado.
- **Amiloidose cardíaca ATTR:** tafamidis (estabilizador da transtirretina) como tratamento específico; suporte para insuficiência cardíaca com cautela (diuréticos com titulação cuidadosa; betabloqueador e IECA são mal tolerados nessa fisiologia restritiva e devem ser usados com parcimônia).
- **Pericardite aguda:** **AINE (ibuprofeno ou AAS em altas doses) + colchicina** desde o primeiro episódio, reduz sintomas e recorrência; corticoide reservado para contraindicação a AINE ou doença refratária/recorrente.

## 🔀 Diagnóstico diferencial

| Condição | ECG | Coronárias | Achado distintivo |
| --- | --- | --- | --- |
| IAM com supra de ST | Supra territorial | Obstrução | Elevação de troponina proporcional |
| Takotsubo | Supra frequentemente difuso, mimetizando IAM anterior | Normais | Balonamento apical, gatilho de estresse |
| Miocardite | Variável | Normais | Realce tardio subepicárdico na RM |
| Pericardite | Supra difuso côncavo + infra de PR | Normais | Dor posicional, atrito pericárdico |

## 📋 Tabela de revisão

| Doença | Achado-chave | Confirmação | Tratamento |
| --- | --- | --- | --- |
| Cardiotoxicidade por antraciclina | IC dose-dependente | Queda de FE/strain seriado | IECA + betabloqueador |
| Takotsubo | Supra + gatilho emocional + coronárias normais | Coronariografia + ecocardiograma | Suporte |
| Amiloidose cardíaca | Baixa voltagem + hipertrofia | Cintilografia com pirofosfato (ATTR) / cadeias leves (AL) | Tafamidis (ATTR) / QT (AL) |
| Pericardite aguda | Dor posicional + infra de PR | Clínico + ECG | AINE + colchicina |

## 📚 Referências essenciais

- Diretriz Brasileira de Cardio-Oncologia — Sociedade Brasileira de Cardiologia (citada explicitamente pela UERJ em 2022).
- Diretriz ESC de Doenças do Pericárdio (citada explicitamente pela UERJ em 2025).
- ESC Position Paper — Cardiac Amyloidosis: Diagnosis and Management.
- ASE/EACVI Consensus — Multimodality Imaging in Takotsubo Syndrome.
`;

export default content.trim();
