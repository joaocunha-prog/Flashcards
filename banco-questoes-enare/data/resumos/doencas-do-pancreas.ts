/**
 * Resumo — Gastroenterologia e Hepatologia · Doenças do pâncreas.
 *
 * Reorganizado por entidade clínica (cada doença pancreática tem sua
 * própria seção com quadro clínico, diagnóstico, tratamento, pearl e
 * pitfall juntos) — o assunto reúne condições distintas (pancreatite
 * aguda, pancreatite crônica, complicações locais e neoplasia) que
 * compartilham órgão-alvo mas têm fisiopatologia, investigação e conduta
 * próprias.
 *
 * Cobre a questão real do corpus (EBSERH 2025 Q37 — ultrassonografia de
 * abdômen como exame de imagem inicial na investigação de pancreatite
 * aguda, para avaliar litíase biliar e dilatação de vias biliares).
 * Assunto de baixa incidência no banco (1 questão, cauda longa, fora do
 * corte 80/20), mas o restante do resumo é extrapolado com profundidade de
 * alto rendimento cobrindo os critérios diagnósticos e de gravidade da
 * pancreatite aguda, pancreatite crônica, pseudocisto/necrose infectada e
 * adenocarcinoma de pâncreas.
 */
const content = `
## 🎯 Essencial

- **O exame de imagem inicial na investigação de pancreatite aguda é a ultrassonografia de abdômen** — não a tomografia computadorizada — porque o objetivo inicial é identificar a etiologia mais comum e mais acionável (colelitíase/coledocolitíase), não avaliar necrose pancreática, que a ultrassonografia visualiza mal pela interposição gasosa.
- **Diagnóstico de pancreatite aguda exige 2 de 3 critérios:** dor abdominal característica (epigástrica, com irradiação para o dorso), amilase e/ou lipase elevadas acima de 3 vezes o limite superior da normalidade, e achados de imagem compatíveis — **não é necessário atingir os três** critérios simultaneamente.
- **A magnitude da elevação de amilase/lipase NÃO se correlaciona com a gravidade da pancreatite** — é um erro clássico de prova assumir que "quanto mais alta a enzima, mais grave o quadro"; a gravidade é definida por critérios clínicos e de imagem (Ranson, APACHE II, BISAP, classificação de Atlanta revisada), não pelo valor absoluto enzimático.
- **Tomografia computadorizada com contraste tem seu papel adiado, não antecipado** — não deve ser feita rotineiramente nas primeiras 24-48h (a necrose pancreática, quando presente, só se torna bem demarcada à imagem depois de 72-96h do início dos sintomas); indicação precoce fica reservada a dúvida diagnóstica ou suspeita de complicação grave já nas primeiras horas.
- **Marcadores de gravidade da pancreatite aguda incluem hemoconcentração (não anemia) e leucocitose**, entre outros parâmetros de resposta inflamatória sistêmica e disfunção orgânica — hematócrito elevado (por extravasamento de plasma para o terceiro espaço) é o achado hematológico clássico de gravidade, não anemia.
- **Colangiopancreatografia endoscópica retrógrada (CPRE) precoce** é indicada apenas em pancreatite biliar grave com colangite associada ou obstrução biliar persistente confirmada — não é conduta de rotina em toda pancreatite biliar.

## 🔹 Pancreatite aguda

- **Etiologias mais comuns:** litíase biliar (causa mais frequente em geral) e etilismo (causa mais frequente em homens jovens/meia-idade) respondem pela maioria dos casos; hipertrigliceridemia grave (>1000 mg/dL), pós-CPRE, medicamentosa, hipercalcemia e causas anatômicas/obstrutivas (pâncreas divisum, neoplasia ampular) completam o diferencial etiológico relevante.
- **Diagnóstico:** 2 de 3 critérios (dor característica + enzimas ≥3x LSN + imagem compatível); ultrassonografia de abdômen é o exame inicial para avaliar etiologia biliar (cálculos, dilatação de vias biliares); tomografia com contraste é reservada para dúvida diagnóstica, ausência de melhora clínica esperada, ou avaliação de complicação após 72-96h.
- **Gravidade:** classificação de Atlanta revisada — **leve** (sem falência orgânica, sem complicação local), **moderadamente grave** (falência orgânica transitória <48h e/ou complicação local) e **grave** (falência orgânica persistente >48h) — escores como Ranson, APACHE II e BISAP auxiliam a estratificação precoce.
- **Tratamento:** hidratação venosa vigorosa e precoce (pilar terapêutico mais importante nas primeiras 24h), analgesia adequada, reintrodução de dieta oral precoce assim que tolerada (não é necessário jejum prolongado rotineiro em pancreatite leve), colecistectomia durante a mesma internação em pancreatite biliar leve (reduz recorrência); antibiótico profilático **não** é indicado rotineiramente, mesmo diante de necrose estéril.
- 💎 **Pearl:** a hidratação vigorosa nas primeiras horas é a intervenção isolada com maior impacto comprovado na redução de complicações e mortalidade — mais determinante que qualquer exame de imagem precoce.
- ⚠️ **Pitfall:** solicitar tomografia de abdômen com contraste nas primeiras 24-48h "para avaliar necrose" — além de desnecessária nesse momento, a necrose ainda não está bem demarcada à imagem tão precocemente.
- 📝 **Como caiu:** EBSERH 2025 Q37 — ultrassonografia como exame de imagem inicial, avaliação de cálculos e dilatação de vias biliares; alternativas incorretas testavam tomografia precoce, correlação enzima-gravidade e anemia/leucocitose como marcadores de gravidade.

## 🔹 Necrose pancreática infectada e coleções peripancreáticas

- **Quando suspeitar:** piora clínica (febre, instabilidade, dor persistente) após 7-10 dias de evolução de pancreatite aguda grave com necrose já documentada — sugere infecção secundária da necrose.
- **Diagnóstico:** tomografia com contraste mostrando gás na área de necrose é altamente sugestivo de infecção; punção aspirativa guiada por imagem com cultura confirma quando a imagem é inconclusiva.
- **Tratamento:** necrose **estéril** é manejada de forma conservadora sempre que possível, mesmo sendo extensa; necrose **infectada** exige antibioticoterapia dirigida e, quando indicado, drenagem (idealmente por abordagem minimamente invasiva — endoscópica ou percutânea — antes de necrosectomia cirúrgica aberta), preferencialmente adiada (estratégia "step-up") para permitir organização/encapsulamento da coleção, salvo instabilidade que exija intervenção mais precoce.
- ⚠️ **Pitfall:** indicar cirurgia imediata diante de necrose pancreática só pela presença de necrose à imagem, sem evidência de infecção — necrose estéril não é, isoladamente, indicação de intervenção invasiva precoce.
- 📝 **Como caiu:** citada como afirmativa incorreta na questão real do corpus (EBSERH 2025 Q37) — a alternativa que associava necrose pancreática a antibioticoterapia e ressecção cirúrgica automáticas estava errada.

## 🔹 Pseudocisto pancreático

- **Quando suspeitar:** coleção líquida peripancreática persistente por mais de 4 semanas após episódio de pancreatite aguda (ou em contexto de pancreatite crônica), encapsulada, sem componente sólido/necrótico significativo — diferencia-se da coleção necrótica organizada (walled-off necrosis) justamente pela ausência de debris sólidos relevantes.
- **Conduta:** a maioria é assintomática e regride espontaneamente, exigindo apenas seguimento; drenagem (endoscópica, idealmente) é reservada a pseudocistos sintomáticos (dor, compressão de estruturas adjacentes, infecção) ou em crescimento progressivo.
- 💎 **Pearl:** o intervalo de 4 semanas é o que separa "coleção aguda" (ainda sem parede bem definida) de "pseudocisto" (já encapsulado) na classificação de Atlanta revisada — detalhe frequentemente cobrado em prova.

## 🔹 Pancreatite crônica

- **Quando suspeitar:** dor abdominal recorrente/persistente associada, mais tardiamente, a insuficiência pancreática exócrina (esteatorreia, perda de peso, deficiência de vitaminas lipossolúveis) e endócrina (diabetes secundário) — etilismo crônico é a causa mais comum em adultos; considerar também causas genéticas/autoimunes (pancreatite autoimune, associada a elevação de IgG4) em apresentações atípicas.
- **Diagnóstico:** calcificações pancreáticas à tomografia são achado clássico e específico; testes de função exócrina (elastase fecal reduzida) e colangiopancreatografia por ressonância magnética (dilatação/irregularidade ductal — "cadeia de lagos") complementam a investigação.
- **Tratamento:** cessação do álcool/tabaco, reposição de enzimas pancreáticas exógenas para a insuficiência exócrina, controle da dor (analgesia escalonada, podendo exigir bloqueio de plexo celíaco em casos refratários), manejo do diabetes secundário quando presente; drenagem endoscópica/cirúrgica reservada a complicações obstrutivas ductais específicas.
- ⚠️ **Pitfall:** esperar elevação persistente de amilase/lipase para confirmar pancreatite crônica — nas fases avançadas, com destruição parenquimatosa extensa, as enzimas podem estar normais mesmo com doença estrutural grave estabelecida.

## 🔹 Adenocarcinoma de pâncreas

- **Quando suspeitar:** icterícia indolor progressiva (tumor de cabeça de pâncreas, por obstrução biliar), perda de peso significativa, dor abdominal/dorsal insidiosa, diabetes de início recente sem fator de risco típico em paciente idoso (pode ser manifestação paraneoplásica precoce), tromboflebite migratória (sinal de Trousseau).
- **Diagnóstico:** tomografia de abdômen com protocolo pancreático é o exame inicial de escolha diante de suspeita; CA 19-9 é marcador tumoral de acompanhamento (não de rastreio populacional, pela baixa especificidade); biópsia (geralmente guiada por ultrassonografia endoscópica) confirma o diagnóstico histológico.
- **Tratamento:** ressecção cirúrgica (cirurgia de Whipple para tumores de cabeça pancreática ressecáveis) é a única chance de cura, mas a maioria dos casos já se apresenta em estágio irressecável ao diagnóstico; quimioterapia (paliativa ou neoadjuvante/adjuvante) conforme estadiamento.
- 💎 **Pearl:** prognóstico reservado mesmo com diagnóstico e tratamento adequados — é um dos cânceres digestivos com pior sobrevida global, o que reforça a importância de reconhecer precocemente os sinais de alarme (icterícia indolor, perda de peso, diabetes de início recente em idoso).
- ⚠️ **Pitfall:** atribuir diabetes de início recente em idoso magro apenas a "diabetes tipo 2 comum" sem considerar a possibilidade de manifestação paraneoplásica de neoplasia pancreática subjacente, sobretudo se associado a outros sinais de alarme.

## 📋 Tabela

**Marcadores de gravidade da pancreatite aguda (não confundir com diagnóstico)**

| Marcador | O que indica |
|---|---|
| Hematócrito elevado (hemoconcentração) | Extravasamento de plasma para o terceiro espaço — gravidade, não anemia |
| Leucocitose | Resposta inflamatória sistêmica |
| Ureia/creatinina em ascensão | Repercussão renal/hipoperfusão |
| PCR elevada (48h) | Marcador indireto de necrose/gravidade |
| Falência orgânica persistente (>48h) | Define pancreatite grave (Atlanta revisada) |
| Valor absoluto de amilase/lipase | NÃO se correlaciona com gravidade |

## 📝 Como a banca cobra

**Doenças do pâncreas é um assunto de baixa incidência no corpus — apenas 1 questão registrada** (EBSERH 2025 Q37, classificada como MÉDIA), cobrando especificamente a ultrassonografia de abdômen como exame de imagem inicial na pancreatite aguda, entre distratores que testavam outros conceitos importantes do tema (correlação enzima-gravidade, momento correto da tomografia com contraste, marcadores hematológicos de gravidade, conduta em necrose pancreática).

Apesar de só ter aparecido uma vez no banco até agora, pancreatite aguda é tema **extremamente clássico em provas de residência médica de clínica médica e cirurgia**, por reunir critérios diagnósticos objetivos, escores de gravidade e uma sequência lógica de conduta (imagem inicial → hidratação → reavaliação → tratamento de complicação) que se presta muito bem a questões de múltipla escolha. Vale a pena dominar os critérios diagnósticos, a lógica temporal dos exames de imagem e o diferencial entre necrose estéril e infectada.

## 📚 Referências essenciais

- Classificação de Atlanta revisada (2012) para pancreatite aguda — critérios diagnósticos e de gravidade.
- American College of Gastroenterology (ACG) — Guideline for Management of Acute Pancreatitis.
- International Association of Pancreatology (IAP)/American Pancreatic Association — Guidelines for the Management of Acute Pancreatitis.
`;

export default content.trim();
