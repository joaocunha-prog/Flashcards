/**
 * Resumo — Gastroenterologia e Hepatologia · Doenças inflamatórias
 * intestinais.
 *
 * Cobre as entidades do assunto no corpus: doença de Crohn (complicações
 * mais prevalentes — estenose, fístula, abscesso) e colite ulcerativa
 * grave com reativação de citomegalovírus (CMV) refratária ao tratamento.
 * Também traz, como extrapolação de alto rendimento ainda não cobrada nas
 * provas reais, manifestações extraintestinais (incluindo pioderma
 * gangrenoso), classificações de gravidade/extensão (Truelove-Witts,
 * Montreal), megacólon tóxico, vigilância de câncer colorretal, associação
 * com colangite esclerosante primária, anemia/profilaxia de TEV em surto e
 * o arsenal terapêutico biológico mais amplo.
 */
const content = `
## 🎯 Essencial

- **Doença de Crohn acomete qualquer segmento do tubo digestivo (boca ao ânus), de forma transmural e salteada** — por isso suas complicações mais prevalentes são **estenose/suboclusão** e **fístulas/abscessos**, decorrentes da inflamação atravessando toda a parede intestinal.
- **Retocolite ulcerativa (colite ulcerativa) é limitada ao cólon, contínua, e restrita à mucosa** — complicações típicas incluem megacólon tóxico e, na doença grave/refratária, **reativação de citomegalovírus (CMV)**.
- **Colite ulcerativa grave que não responde a corticoide** deve ser investigada para **CMV** antes de escalar imunossupressão — tratar CMV sem reconhecer pode significar intensificar imunossupressão numa infecção ativa, piorando o quadro.
- **Diagnóstico de colite por CMV: biópsia colônica com pesquisa de inclusões virais/imuno-histoquímica**, não apenas sorologia ou PCR sérico (que só mostram viremia sistêmica).
- **Fístulas perianais são praticamente uma marca registrada da doença de Crohn** — raras na colite ulcerativa, justamente pelo caráter transmural exclusivo do Crohn.
- **Escalada terapêutica segue estratificação de gravidade**: 5-ASA para doença leve (mais eficaz na colite ulcerativa que no Crohn), corticoide para indução em surto moderado-grave, biológicos (anti-TNF, outros) para doença refratária ou fistulizante.
- **Manifestações extraintestinais** ocorrem em ambas as doenças: artrite periférica/espondilite anquilosante, eritema nodoso, pioderma gangrenoso, uveíte/episclerite — algumas acompanham a atividade intestinal (artrite periférica, eritema nodoso), outras são independentes (espondilite, uveíte, colangite esclerosante primária).
- **Colangite esclerosante primária (CEP)** associa-se fortemente à colite ulcerativa (mais que ao Crohn) — todo paciente com CU e alteração de enzimas canaliculares (fosfatase alcalina/GGT) deve ser investigado para CEP, que eleva o risco de colangiocarcinoma e também de câncer colorretal.
- **Megacólon tóxico** é diagnosticado por dilatação colônica >6 cm ao raio-x associada a sinais sistêmicos de toxemia (febre, taquicardia, leucocitose, hipotensão) — colonoscopia é contraindicada nessa fase pelo risco de perfuração; o manejo é clínico intensivo com decisão cirúrgica precoce se não houver melhora em 24-72h.

## 💎 Pearls

- **Estenose e fístula podem coexistir na mesma doença de Crohn** — a fibrose cicatricial da inflamação transmural crônica gera estenose, enquanto a penetração transmural ativa gera fístula/abscesso; não são mutuamente excludentes.
- **Megacólon tóxico é mais associado à colite ulcerativa** que ao Crohn, mas pode ocorrer em colite de Crohn extensa também — sinal de alarme: distensão colônica + toxemia sistêmica.
- **Ganciclovir só deve ser iniciado após confirmação histológica de doença por CMV** — tratamento empírico sem biópsia positiva não é a conduta padrão.
- **Imunossupressão excessiva (corticoide em dose alta, biológico) é fator de risco para reativação de CMV** em colite ulcerativa — quanto mais refratário o surto, maior a suspeita.
- **Padrão radiológico "em corda" (string sign)** na doença de Crohn reflete estenose luminal por edema/fibrose, tipicamente em íleo terminal.
- **Vigilância de câncer colorretal** deve começar 8-10 anos após o início dos sintomas em colite extensa (ou desde o diagnóstico se houver CEP associada), com colonoscopia com biópsias seriadas ou cromoscopia a cada 1-2 anos — risco cumulativo aumenta com duração e extensão da doença.
- **Pouchite** é a complicação mais comum após proctocolectomia total com bolsa ileoanal (IPAA) para colite ulcerativa refratária/displasia — inflamação da bolsa, geralmente responsiva a metronidazol/ciprofloxacino.
- **Triagem para tuberculose latente e hepatite B é obrigatória antes de iniciar anti-TNF** — reativação de ambas é risco conhecido e evitável com profilaxia prévia.
- **Pioderma gangrenoso** costuma acompanhar surtos graves e responde a imunossupressão sistêmica (corticoide, biológico) — desbridamento cirúrgico da lesão é contraindicado, pode piorar a lesão pelo fenômeno de patergia.
- **Deficiência de ferro e anemia de doença crônica são frequentes em DII**, mesmo sem sangramento evidente — ferro intravenoso é preferido ao oral em doença ativa (má absorção, intolerância, e o ferro oral pode piorar a inflamação da mucosa).
- **Risco de trombose venosa é maior em DII em atividade** do que na população geral — profilaxia farmacológica de TEV está indicada em internação por surto, mesmo com sangramento retal presente.

## ⚠️ Pitfalls

- **Escalar imunossupressão (aumentar corticoide, iniciar biológico) em colite ulcerativa grave refratária sem excluir CMV antes** — pode agravar a infecção viral e piorar o desfecho.
- **Diagnosticar colite por CMV apenas com sorologia IgG positiva** — a maioria da população adulta é IgG+ (infecção latente); isso não indica doença ativa de órgão-alvo.
- **Tratar toda estenose de Crohn como indicação cirúrgica imediata** — estenoses inflamatórias (sem fibrose predominante) podem responder a tratamento clínico; a decisão cirúrgica depende do caráter fibrótico/refratário.
- **Confundir fístula perianal como achado possível em colite ulcerativa** — deve levantar suspeita de Crohn não diagnosticado ou de componente misto (colite indeterminada).
- **Não investigar abscesso antes de escalar imunossupressor em Crohn com dor abdominal e febre** — imunossupressão sobre abscesso não drenado piora sepse.
- **Iniciar anti-TNF sem rastrear TB latente e hepatite B** — risco de reativação grave, muitas vezes evitável com profilaxia antes de começar a droga.
- **Esquecer vigilância colonoscópica de longo prazo** em colite ulcerativa extensa de longa duração — o risco de câncer colorretal é maior que na população geral e cresce com o tempo de doença.
- **Não profilaxiar TEV em paciente internado por surto de DII só porque há sangramento retal** — o estado pró-trombótico da inflamação ativa supera o risco de sangramento na maioria dos casos.
- **Indicar colonoscopia diante de suspeita de megacólon tóxico** — risco de perfuração; a avaliação inicial deve ser clínica e radiológica (raio-x simples de abdome).

## 📝 Como a banca cobra

**Doenças inflamatórias intestinais aparecem em 2 questões (0,94% do corpus)**, ambas do EBSERH, com uma questão para cada doença (Crohn e colite ulcerativa) e foco em complicações/refratariedade, não em diagnóstico inicial.

- **EBSERH 2025 Q38** cobrou as **complicações mais prevalentes da doença de Crohn** — o eixo esperado é reconhecer estenose e fístula/abscesso como desfechos típicos da inflamação transmural, distintos do padrão da colite ulcerativa.
- **EBSERH 2026 Q42** testou **colite ulcerativa grave com reativação de CMV**, cenário de surto refratário ao corticoide em que a banca espera que o candidato pense em investigar CMV por biópsia antes de intensificar a imunossupressão.

## 🧠 Conceito e fisiopatologia

A doença de Crohn é uma inflamação **transmural** (acomete todas as camadas da parede intestinal) e **salteada** (segmentos doentes intercalados com mucosa normal), podendo afetar qualquer ponto do tubo digestivo — essa transmuralidade é a razão fisiopatológica direta das suas complicações características: a inflamação que atravessa a parede pode evoluir para fibrose cicatricial (estenose) ou perfurar/penetrar estruturas vizinhas (fístulas entero-entéricas, entero-vesicais, entero-cutâneas, perianais, ou formar abscessos).

A colite ulcerativa, em contraste, é restrita à **mucosa e submucosa do cólon**, de forma **contínua** a partir do reto — sem essa penetração transmural, suas complicações típicas são diferentes (sangramento, megacólon tóxico por paralisia da musculatura lisa inflamada, e risco neoplásico de longo prazo). Em surtos graves sob imunossupressão intensa, a mucosa colônica lesada e o estado imunossuprimido criam terreno para **reativação do CMV latente**, que por si só perpetua a inflamação e explica a refratariedade ao corticoide — um ciclo que só se rompe tratando a infecção viral, não aumentando ainda mais a imunossupressão.

As manifestações extraintestinais ocorrem porque ambas as doenças são processos imunomediados sistêmicos, não puramente locais: antígenos compartilhados entre a mucosa intestinal inflamada e outros tecidos (articulações, pele, olhos, vias biliares) explicam por que o sistema imune "erra o alvo" fora do intestino, com algumas manifestações acompanhando a atividade da doença de base e outras (como espondilite e CEP) seguindo curso próprio e independente.

## 🩺 Quadro clínico

- **Doença de Crohn:** dor abdominal em cólica (frequentemente em fossa ilíaca direita, por acometimento ileal), diarreia crônica, emagrecimento, massa abdominal palpável, doença perianal (fístulas, fissuras, abscessos), manifestações extraintestinais (artrite, uveíte, eritema nodoso).
- **Colite ulcerativa grave refratária com CMV:** piora da diarreia sanguinolenta e da toxemia sistêmica apesar de corticoide em dose adequada, sem resposta esperada em 3-5 dias — sinal de alarme para investigar infecção sobreposta.
- **Critérios de Truelove-Witts** classificam gravidade do surto de colite ulcerativa (leve, moderado, grave) por número de evacuações sanguinolentas/dia, frequência cardíaca, temperatura, hemoglobina e VHS/PCR — orientam a intensidade inicial do tratamento.

## 🔎 Diagnóstico

- **Doença de Crohn — complicações:** enterotomografia/entero-RM para estenose e trajetos fistulosos; colonoscopia com biópsias mostrando inflamação transmural, granulomas (quando presentes) e úlceras salteadas.
- **CMV em colite ulcerativa:** colonoscopia com biópsia de úlceras profundas, pesquisa de corpos de inclusão e imuno-histoquímica para CMV — sorologia e PCR sérico isolados não confirmam doença de órgão-alvo.
- **Classificação de Montreal** descreve fenótipo de Crohn (idade ao diagnóstico, localização, comportamento — inflamatório, estenosante, fistulizante) e extensão da colite ulcerativa (proctite, colite esquerda, pancolite) — usada para estratificar prognóstico e conduta.
- **Escore endoscópico de Mayo** quantifica atividade endoscópica da colite ulcerativa, complementando os critérios clínicos de Truelove-Witts.

## 💊 Tratamento

- **Doença de Crohn com estenose:** tratamento clínico se predomínio inflamatório; dilatação endoscópica ou ressecção cirúrgica se fibrose estabelecida/refratária.
- **Doença de Crohn com fístula/abscesso:** drenagem do abscesso (percutânea ou cirúrgica) antes de escalar imunobiológico; anti-TNF (infliximabe/adalimumabe) para doença fistulizante após controle séptico.
- **Colite ulcerativa grave com CMV confirmado:** ganciclovir (ou valganciclovir), com reavaliação cautelosa da imunossupressão de base.
- **Colite ulcerativa grave sem CMV:** corticoide IV em dose plena; ciclosporina ou infliximabe como resgate se refratária.
- **Opções biológicas mais amplas:** vedolizumabe (anti-integrina, ação intestino-seletiva) e ustequinumabe (anti-IL-12/23) para falha ou contraindicação a anti-TNF; inibidores de JAK (tofacitinibe) como opção oral em colite ulcerativa refratária, com atenção a risco trombótico/cardiovascular.
- **Colite ulcerativa refratária/displasia/megacólon tóxico sem resposta:** proctocolectomia total com bolsa ileoanal (IPAA) — potencialmente curativa, ao contrário da cirurgia no Crohn, que não cura a doença e tem risco de recidiva no segmento remanescente.
- **Pioderma gangrenoso:** corticoide sistêmico e/ou biológico (anti-TNF/ciclosporina) direcionados à atividade intestinal de base; nunca desbridar cirurgicamente a lesão cutânea.
- **Deficiência de ferro em DII ativa:** reposição intravenosa preferencial; profilaxia farmacológica de TEV em toda internação por surto agudo, independente de sangramento retal presente.

## 📚 Referências essenciais

- ECCO Guidelines — Diagnosis and Management of Crohn's Disease.
- ECCO Guidelines — Management of Ulcerative Colitis (incluindo infecções oportunistas/CMV).
- Consenso Brasileiro de Doença Inflamatória Intestinal — GEDIIB.
`;

export default content.trim();
