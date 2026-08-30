/**
 * Resumo — Reumatologia · Artrites microcristalinas.
 *
 * Cobre as entidades do corpus: fármacos com efeito uricosúrico
 * incidental na gota e análise do líquido sinovial na gota. Expandido
 * com gota tofácea crônica, achados de imagem (US, DECT, radiografia),
 * critérios diagnósticos ACR/EULAR, doença por depósito de hidroxiapatita
 * e opções terapêuticas de segunda linha/refratárias — conteúdo ainda
 * não cobrado no corpus, mas plausível em provas futuras do assunto.
 */
const content = `
## 🎯 Essencial

- **Gota é causada por cristais de urato monossódico**; **doença por depósito de pirofosfato de cálcio (pseudogota/condrocalcinose)** é o outro grande diagnóstico diferencial microcristalino — a diferenciação definitiva é pela **análise do líquido sinovial**, não pelo quadro clínico isolado.
- **Cristais de urato monossódico: formato de agulha, birrefringência NEGATIVA fortemente forte** à luz polarizada compensada (amarelos quando paralelos ao eixo do compensador). **Cristais de pirofosfato de cálcio: formato romboide/retangular, birrefringência POSITIVA fraca**.
- **Fármacos com efeito uricosúrico incidental (não é seu uso principal, mas baixam ácido úrico como efeito colateral benéfico):** **losartana** (entre os BRA), **fenofibrato** (entre os fibratos) e, em menor grau, **atorvastatina** — úteis quando o paciente já precisa de anti-hipertensivo/hipolipemiante e tem hiperuricemia associada.
- **Fármacos que ELEVAM o ácido úrico (efeito oposto):** diuréticos tiazídicos e de alça, ácido acetilsalicílico em baixas doses, ciclosporina, pirazinamida, etambutol — atenção redobrada em paciente com gota que usa esses medicamentos por outra indicação.
- **Crise aguda de gota:** tratar a inflamação (colchicina, AINE ou corticoide), NUNCA iniciar ou ajustar terapia hipouricemiante (alopurinol/febuxostate) durante a crise aguda — pode prolongar/piorar o episódio.
- **Terapia hipouricemiante crônica** (alopurinol como primeira linha) é iniciada/mantida apenas fora da crise aguda, com cobertura anti-inflamatória profilática (colchicina em baixa dose) nas primeiras semanas para evitar crises de mobilização de cristais.
- **Gota tofácea crônica** (tofos subcutâneos, artropatia destrutiva, erosões radiográficas em "saca-bocado"/"rat bite" com borda escleròtica) representa doença de longa data com controle inadequado do ácido úrico — meta de ácido úrico mais baixa (<5 mg/dL) que na gota sem tofos (<6 mg/dL) para promover dissolução dos depósitos.
- **Gota é fortemente associada a síndrome metabólica, doença renal crônica e risco cardiovascular** — o rastreamento e manejo dessas comorbidades faz parte do cuidado integral do paciente gotoso, não apenas o controle do ácido úrico isolado.
- **Primeira crise de gota classicamente monoarticular, acometendo a 1ª articulação metatarsofalângica (podagra)** — mas pode acometer tornozelo, joelho e, em crises recorrentes/doença avançada, tornar-se poliarticular, dificultando o diagnóstico clínico sem análise do líquido sinovial.
- **Artrite séptica é o diagnóstico diferencial mais temido de monoartrite aguda** e deve sempre ser ativamente excluída (Gram, cultura, celularidade do líquido sinovial) antes de assumir gota/pseudogota isoladamente, mesmo com cristais visualizados.

## 💎 Pearls

- **Losartana é o único BRA com efeito uricosúrico relevante** — os demais representantes da classe não compartilham essa propriedade, então a banca pode usar "outro BRA" como distrator.
- **A punção do líquido sinovial durante crise aguda de gota é diagnóstica mesmo sem cultura** — visualização direta de cristais intracelulares (dentro de neutrófilos) confirma o diagnóstico e já permite excluir artrite séptica se a análise for completa (celularidade, Gram, cultura).
- **Hiperuricemia assintomática não é indicação de tratamento hipouricemiante** na maioria dos pacientes — trata-se a gota (crises recorrentes, tofos, nefrolitíase úrica, artropatia crônica), não o número do exame isolado.
- **Alopurinol pode desencadear reação de hipersensibilidade grave (síndrome DRESS/Stevens-Johnson)**, mais frequente em pacientes HLA-B\*58:01 positivos, população de risco aumentado em descendência han chinesa, tailandesa e coreana — considerar rastrear esse alelo antes de iniciar alopurinol nesses grupos.
- **A associação de artrite séptica com gota não é mutuamente exclusiva** — líquido sinovial com cristais não descarta infecção concomitante; sempre enviar Gram e cultura junto com a análise de cristais.
- **Sinal do "duplo contorno" à ultrassonografia** (deposição de urato na superfície da cartilagem articular) é achado precoce e específico de gota, útil mesmo em fase intercrítica ou quando a punção não é viável.
- **Tomografia computadorizada por dupla energia (DECT)** identifica e quantifica depósitos de urato de forma não invasiva, colorindo os depósitos tipicamente em verde — útil em gota tofácea de diagnóstico duvidoso ou articulações de difícil punção.
- **Critérios de classificação ACR/EULAR 2015 para gota** combinam a presença de cristais confirmados (critério suficiente isolado) com um sistema de pontuação clínico-laboratorial-imagem quando a análise do líquido não é possível ou é negativa — reforça que a confirmação cristalográfica continua sendo o padrão-ouro.
- **Doença por depósito de hidroxiapatita (cristais de fosfato de cálcio básico)** é uma terceira artropatia microcristalina, causando calcificação periarticular (tendinite calcária do manguito rotador) e, na forma mais grave, a **síndrome de Milwaukee** (artropatia destrutiva de ombro em idosas) — os cristais não são visíveis à microscopia de luz polarizada comum, exigindo coloração especial (vermelho de alizarina) para identificação.
- **Colchicina exige ajuste de dose em insuficiência renal e é contraindicada em uso concomitante com inibidores potentes de CYP3A4/P-glicoproteína** (claritromicina, alguns antifúngicos, ciclosporina) — risco de toxicidade grave (mielossupressão, rabdomiólise) nessa combinação.
- **AINEs devem ser evitados/usados com cautela em doença renal crônica, insuficiência cardíaca e doença péptica ativa** — nesses cenários, corticoide (oral, IM ou intra-articular) é alternativa mais segura para a crise aguda de gota.
- **Tofos gotosos podem ser confundidos com nódulos reumatoides** à inspeção — a localização (hélice da orelha é típica de tofo, incomum em nódulo reumatoide), a história de crises articulares agudas prévias e, se necessário, a aspiração com identificação de cristais ajudam a diferenciar.
- **Fatores desencadeantes clássicos de crise aguda de gota:** ingesta de álcool (especialmente cerveja), dieta rica em purinas (carne vermelha, frutos do mar), jejum prolongado, desidratação, trauma local, cirurgia recente e início/suspensão abrupta de hipouricemiante — orientação dietética faz parte do manejo crônico, embora nunca substitua o tratamento farmacológico quando indicado.
- **Doença renal crônica é causa e consequência da hiperuricemia** — a redução da excreção renal de urato eleva o ácido úrico, e o próprio depósito de cristais/nefropatia por urato pode contribuir para progressão da DRC, criando ciclo que reforça a importância do controle metabólico integral.

## ⚠️ Pitfalls

- **Iniciar ou aumentar a dose de alopurinol durante a crise aguda de gota** — pode prolongar a crise pela mobilização de cristais dos depósitos teciduais.
- **Suspender terapia hipouricemiante crônica já estabelecida assim que a crise aguda melhora** — o certo é manter, tratando apenas a inflamação aguda em paralelo.
- **Confundir a birrefringência dos dois cristais** — errar "negativa/agulha = urato" e "positiva/romboide = pirofosfato" é o erro mais comum e mais cobrado.
- **Prescrever tiazídico sem atenção em paciente com gota estabelecida**, sem considerar troca por anti-hipertensivo com efeito neutro ou uricosúrico (losartana).
- **Não puncionar a articulação por achar o quadro clinicamente óbvio** — sem análise do líquido sinovial, não se exclui infecção concomitante nem se confirma definitivamente o tipo de cristal.
- **Usar AINE em dose plena num paciente com DRC avançada ou insuficiência cardíaca descompensada** — corticoide é a opção mais segura nesse cenário.
- **Associar colchicina com claritromicina ou outro inibidor potente de CYP3A4** sem ajustar/suspender a dose — combinação com relatos de toxicidade grave e óbito.
- **Iniciar alopurinol em dose alta de início**, sem titulação progressiva guiada por função renal e nível de ácido úrico — aumenta risco de reação de hipersensibilidade.
- **Assumir monoartrite aguda em paciente com gota conhecida como recidiva de gota sem excluir artrite séptica concomitante** — o antecedente não descarta infecção nova.

## 📝 Como a banca cobra

**Artrites microcristalinas aparecem em 2 questões (0,94% do corpus)**, uma do EBSERH e uma do ENARE 2026, ambas testando detalhes finos além do reconhecimento clínico básico da gota.

- **EBSERH 2025 Q44** cobrou os **fármacos com efeito uricosúrico incidental** — provavelmente pedindo para identificar, entre opções de anti-hipertensivos/hipolipemiantes, qual tem esse efeito colateral benéfico (losartana e/ou fenofibrato como resposta correta).
- **ENARE 2026 Q75**, classificada como difícil, cobrou a **análise do líquido sinovial na gota** — provavelmente exigindo reconhecer o padrão de cristal (birrefringência negativa, formato de agulha) e/ou diferenciar de pseudogota.

## 🧠 Conceito e fisiopatologia

A gota resulta da supersaturação de urato no líquido extracelular, levando à precipitação de cristais de urato monossódico em articulações e tecidos periarticulares — o urato é o produto final do metabolismo de purinas em humanos (que perderam a enzima uricase ao longo da evolução). Os cristais depositados são fagocitados por neutrófilos, que ativam o inflamassoma NLRP3, liberando IL-1β e desencadeando a resposta inflamatória aguda intensa característica da crise.

Fármacos com efeito uricosúrico incidental atuam por mecanismos distintos do seu uso principal: a losartana inibe parcialmente o transportador URAT1 no túbulo proximal renal (responsável pela reabsorção de urato filtrado), aumentando sua excreção urinária — um efeito "bônus" não compartilhado pelos demais BRA, cuja estrutura molecular não interage da mesma forma com esse transportador.

Na doença por pirofosfato de cálcio, o mecanismo de formação de cristais é menos compreendido, mas envolve alteração do metabolismo de pirofosfato inorgânico na cartilagem, favorecida por envelhecimento, hemocromatose, hiperparatireoidismo e hipomagnesemia — por isso um episódio de pseudogota em paciente jovem deve motivar rastreio dessas causas secundárias.

## 🩺 Quadro clínico

- **Crise aguda de gota:** monoartrite de início abrupto (horas), dor intensa, calor, rubor e edema, classicamente na 1ª metatarsofalângica (podagra), mas também tornozelo, médio-pé e joelho; pode haver febre baixa associada.
- **Pseudogota (pirofosfato de cálcio):** acomete predominantemente joelho, punho e ombro em idosos, com quadro agudo semelhante à gota, porém sem a predileção pelo hálux.
- **Gota tofácea crônica:** poliartrite persistente com tofos visíveis/palpáveis (hélice da orelha, cotovelo, superfície extensora do antebraço, mãos), limitação funcional progressiva e deformidade articular em casos avançados sem tratamento adequado.
- **Doença por hidroxiapatita:** dor periarticular aguda (tendinite calcária) ou, na síndrome de Milwaukee, artropatia destrutiva de ombro em mulheres idosas.

## 🔎 Diagnóstico

- **Líquido sinovial na gota:** cristais de urato monossódico em formato de agulha, birrefringência negativa forte, geralmente intracelulares (dentro de neutrófilos) na crise aguda; celularidade elevada de predomínio neutrofílico; Gram e cultura para excluir infecção concomitante.
- **Líquido sinovial na pseudogota:** cristais de pirofosfato de cálcio romboides/retangulares, birrefringência positiva fraca.
- **Ácido úrico sérico** pode estar normal durante a crise aguda (redistribuição) — não usar valor sérico isolado para confirmar ou descartar gota na fase aguda.
- **Imagem complementar:** ultrassonografia (sinal do duplo contorno, tofos), radiografia (erosões em "saca-bocado" com esclerose marginal na gota crônica; condrocalcinose — calcificação linear da cartilagem — na pseudogota), DECT em casos de dúvida diagnóstica.
- **Pseudogota secundária:** investigar hemocromatose, hiperparatireoidismo, hipomagnesemia e hipofosfatasia quando ocorre em paciente jovem ou com acometimento atípico.

## 💊 Tratamento

- **Crise aguda:** colchicina (dose baixa, ajustada à função renal), AINE ou corticoide (sistêmico ou intra-articular), conforme comorbidades e número de articulações acometidas; corticoide preferido em DRC avançada, insuficiência cardíaca ou contraindicação a AINE/colchicina.
- **Terapia hipouricemiante crônica (fora da crise):** alopurinol como primeira linha, com titulação lenta de dose (start low, go slow) até meta de ácido úrico (<6 mg/dL geral, <5 mg/dL na gota tofácea); febuxostate como alternativa (atenção a alerta de risco cardiovascular em pacientes com doença cardiovascular estabelecida); profilaxia anti-inflamatória com colchicina em baixa dose nas primeiras semanas/meses.
- **Refratária/tofácea grave:** pegloticase (uricase recombinante IV) em casos selecionados sem resposta a hipouricemiantes orais; inibidores de IL-1 (anakinra, canakinumab) como opção para crises frequentes refratárias ou contraindicação às terapias de primeira linha.
- **Ajuste de comorbidades:** considerar losartana/fenofibrato quando o paciente já necessita dessas classes por outra indicação e tem hiperuricemia associada; evitar tiazídicos quando possível.
- **Pseudogota aguda:** AINE, colchicina ou corticoide intra-articular/sistêmico, de forma semelhante à crise de gota — não existe terapia hipouricemiante equivalente, pois o mecanismo não depende do ácido úrico; tratar causa secundária (hemocromatose, hiperparatireoidismo) quando identificada.
- **Medidas não farmacológicas coadjuvantes:** perda de peso, redução de álcool e de alimentos ricos em purinas, hidratação adequada — reduzem frequência de crises, mas não substituem hipouricemiante quando este está indicado.

## 📚 Referências essenciais

- ACR Guideline for the Management of Gout.
- EULAR Recommendations for Calcium Pyrophosphate Deposition Disease.
- Critérios de Classificação ACR/EULAR 2015 para Gota.
`;

export default content.trim();
