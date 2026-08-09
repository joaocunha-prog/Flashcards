/**
 * Resumo — Endocrinologia · Doenças da adrenal.
 *
 * Cobre as entidades do assunto no corpus: insuficiência adrenal primária e
 * secundária (incluindo crise adrenal e síndrome poliglandular autoimune),
 * síndrome de Cushing, incidentaloma adrenal, carcinoma adrenal e
 * feocromocitoma.
 */
const content = `
## 🎯 Essencial

- **Insuficiência adrenal primária (doença de Addison) tem hiperpigmentação cutânea; a secundária (hipofisária) não tem** — o ACTH elevado da forma primária compartilha o precursor POMC com o MSH (hormônio estimulante de melanócitos), pigmentando a pele; na secundária, o ACTH está baixo, então não há hiperpigmentação.
- **Crise adrenal = hipotensão refratária a volume + hiponatremia + hipercalemia + hipoglicemia**, tipicamente desencadeada por estresse agudo (infecção, cirurgia) em paciente com insuficiência adrenal de base — tratamento é **hidrocortisona IV imediata**, sem esperar confirmação laboratorial.
- **Síndrome de Cushing: o rastreio inicial é o teste de supressão com 1mg de dexametasona à noite (cortisol matinal não suprimido) ou cortisol salivar noturno/cortisol livre urinário de 24h** — dosagem isolada de cortisol matinal aleatório não serve para rastreio (varia muito, tem ritmo circadiano).
- **Depois de confirmar Cushing, dosar ACTH para localizar a causa:** ACTH suprimido → causa adrenal (adenoma/carcinoma); ACTH normal/alto → causa hipofisária (doença de Cushing) ou ectópica — e o **teste de Liddle 2 (supressão com dose alta de dexametasona) e o teste do CRH** ajudam a diferenciar doença de Cushing (suprime/responde) de secreção ectópica de ACTH (não suprime, não responde).
- **Incidentaloma adrenal: rastrear função hormonal em TODOS os casos**, mesmo sem sintomas — dosar metanefrinas urinárias/plasmáticas (feocromocitoma), cortisol pós-1mg de dexametasona (Cushing subclínico), e se houver hipertensão/hipocalemia, relação aldosterona/renina (hiperaldosteronismo). Em mulher com sinais de virilização, acrescentar 17-OH-progesterona e SDHEA.
- **Densidade >10 UH (unidades Hounsfield) na TC sem contraste ou tamanho >4cm aumentam a suspeita de malignidade** — lesões lipídicas benignas (adenoma) tipicamente têm densidade baixa (<10 UH).
- **Feocromocitoma: hipertensão paroxística + palpitação + cefaleia + sudorese, com hipotensão postural** (paradoxal — a depleção de volume crônica pelo excesso catecolaminérgico explica a queda ortostática apesar da hipertensão de base). Diagnóstico: **metanefrinas plasmáticas fracionadas** (mais sensível) seguidas de TC/RM de abdome para localização.
- **Nunca biopsiar massa adrenal antes de excluir feocromocitoma** — a manipulação pode desencadear crise hipertensiva catastrófica.
- **Carcinoma adrenal:** massa grande, funcionante (frequentemente produção mista de esteroides — cortisol + andrógenos), com sinais de virilização rápida e testosterona/DHEAS muito elevados — distinção-chave em relação a causas ovarianas de hiperandrogenismo (evolução mais lenta, valores menos extremos).
- **Síndrome poliglandular autoimune tipo 2:** insuficiência adrenal autoimune + tireoidite autoimune (Hashimoto ou Graves) + diabetes tipo 1 — a combinação de DM1 de longa data com sinais de Addison é a vinheta clássica.

## 💎 Pearls

- **Hipercalemia + hiponatremia em paciente hipotenso não respondendo a volume** é praticamente sinônimo de insuficiência adrenal aguda até prova em contrário — pense sempre em cortisol antes de rotular como sepse refratária isolada.
- **Iniciar reposição de hormônio tireoidiano em paciente com insuficiência adrenal não diagnosticada pode precipitar crise adrenal** — o hormônio tireoidiano acelera o clearance metabólico do cortisol residual, "descompensando" uma reserva adrenal já limítrofe. Por isso, em coma mixedematoso ou hipotireoidismo grave, corticoide deve ser considerado/associado quando há dúvida sobre reserva adrenal.
- **Teste de supressão com 1mg de dexametasona é sensível, mas pouco específico** — falsos positivos ocorrem em obesidade, depressão, alcoolismo e uso de indutores enzimáticos (fenitoína, rifampicina, que aceleram o metabolismo da dexametasona).
- **Metanefrinas plasmáticas fracionadas têm sensibilidade próxima de 99% para feocromocitoma** — um resultado normal praticamente exclui o diagnóstico; a especificidade é menor, por isso um resultado positivo geralmente é confirmado com metanefrinas urinárias de 24h antes de prosseguir para imagem.
- **Incidentaloma bilateral, história familiar ou idade jovem** levantam suspeita de síndrome genética (NEM 2, von Hippel-Lindau, neurofibromatose tipo 1 para feocromocitoma; síndrome de Li-Fraumeni para carcinoma adrenal) — vale investigar mais a fundo nesses cenários.
- **A "regra dos 10%" do feocromocitoma** (10% bilateral, 10% extra-adrenal/paraganglioma, 10% maligno, 10% familiar) é uma simplificação histórica — hoje se sabe que a proporção familiar é bem maior (até 30-40% com as síndromes genéticas conhecidas), mas a regra ainda ajuda a lembrar que "nem sempre é esporádico e unilateral".
- **Síndrome de Cushing por ACTH ectópico é classicamente associada a carcinoma de pequenas células de pulmão e a tumores carcinoides** — cursa com hipocalemia mais intensa e alcalose metabólica mais pronunciada do que a doença de Cushing hipofisária, porque os níveis de ACTH costumam ser muito mais altos.
- **Diabetes insipidus nefrogênico pode ocorrer por hipercalcemia** (ver resumo de emergências oncológicas) — vale lembrar essa ponte entre os dois assuntos.

## ⚠️ Pitfalls

- **Dosar cortisol matinal isolado como teste de rastreio para Cushing** — não tem valor diagnóstico isolado por causa da variação circadiana e de fatores de estresse; o correto é supressão com dexametasona, cortisol salivar noturno ou cortisol livre urinário 24h.
- **Investigar incidentaloma adrenal só com TC/RM sem dosagem hormonal** — todo incidentaloma precisa de avaliação funcional completa, mesmo sendo "achado incidental" sem sintomas.
- **Biopsiar massa adrenal antes de excluir feocromocitoma** — risco de crise hipertensiva grave durante o procedimento.
- **Repor apenas hormônio tireoidiano em paciente com suspeita de insuficiência adrenal associada (síndrome poliglandular)** sem cobrir com corticoide — pode precipitar crise adrenal, como explicado acima.
- **Confundir insuficiência adrenal primária com secundária pela ausência/presença de hiperpigmentação** — é um detalhe fácil de pular na leitura da vinheta, mas costuma ser o dado que resolve a questão.
- **Achar que hipertensão paroxística é sempre "labilidade emocional" ou crise de ansiedade** sem investigar feocromocitoma quando há tríade sugestiva (cefaleia, palpitação, sudorese) — atraso nesse diagnóstico é perigoso pelo risco de crise hipertensiva/arritmia grave.
- **Tratar toda massa adrenal grande e funcionante como adenoma benigno** sem considerar carcinoma adrenal, especialmente quando há produção hormonal mista (cortisol + andrógenos) e crescimento rápido.
- **Esquecer que o teste de Liddle 2 e o teste do CRH servem para localizar a causa do ACTH elevado**, não para confirmar que existe Cushing — a confirmação bioquímica do excesso de cortisol vem antes, na etapa de rastreio.

## 📝 Como a UERJ cobra

**Doenças da adrenal é #5 do ranking (8 questões, 3,2% do corpus)**, com questões que exigem sequência lógica de raciocínio em cascata — quase nunca é "reconheça o diagnóstico e pare"; a banca sempre avança para **"e agora, qual o próximo exame/próxima etapa"**.

- **Insuficiência adrenal** apareceu 2 vezes com apresentações distintas: crise adrenal precipitada por reposição tireoidiana isolada (2021 Q35) e síndrome poliglandular autoimune tipo 2 em contexto de DM1 (2023 Q11, 2025 Q19 — praticamente repetiu o mesmo racional em duas provas diferentes) — vale memorizar essa associação DM1 + tireoidopatia + Addison como padrão recorrente e muito provável de reaparecer.
- **Síndrome de Cushing** (2022 Q29, 2023 Q3) testa o **algoritmo diagnóstico em etapas**: primeiro rastreio (dexametasona 1mg), depois localização da causa (ACTH, teste de Liddle 2, CRH) — a segunda questão (2023) foi particularmente sofisticada, testando reconhecimento de ACTH ectópico por tumor de pulmão.
- **Incidentaloma adrenal** (2022 Q31) cobrou o **painel de exames iniciais completo** — decorar a lista (metanefrinas, cortisol pós-dexametasona, 17-OH-progesterona, SDHEA, e renina/aldosterona se hipertenso/hipocalêmico) é diretamente rentável.
- **Feocromocitoma** (2024 Q31) e **carcinoma adrenal** (2023 Q17) seguem o padrão de vinheta clássica com tríade/sinais patognomônicos bem descritos — são questões "presenteadas" para quem reconhece o padrão.

## 🆕 Atualização

- **Rastreio de incidentaloma adrenal:** a diretriz conjunta ESE/ENSAT (European Society of Endocrinology/European Network for the Study of Adrenal Tumors), citada explicitamente pela UERJ em 2022, permanece a referência atual — sem mudanças estruturais recentes relevantes para prova.
- **Cushing subclínico** (autonomia cortisolêmica leve em incidentaloma sem fenótipo clássico) ganhou reconhecimento crescente como fator de risco cardiovascular e metabólico independente, ampliando a indicação de tratamento (adrenalectomia) mesmo em pacientes oligossintomáticos com autonomia confirmada — tema em expansão, ainda não cobrado diretamente pela banca.
- **Mitotano** continua sendo a base da terapia adjuvante/paliativa do carcinoma adrenal, mas combinações com imunoterapia e outras terapias sistêmicas estão em investigação ativa para doença avançada refratária — sem mudança de primeira linha estabelecida até o momento.
- **Feocromocitoma/paraganglioma:** o mapeamento genético (SDHx, VHL, RET, NF1) tornou-se recomendação de rotina em todo paciente diagnosticado, não só nos casos com história familiar evidente ou apresentação sindrômica clássica — reflexo do reconhecimento de que a proporção hereditária é maior do que a "regra dos 10%" clássica sugeria.

## 🧠 Conceito e fisiopatologia

O eixo hipotálamo-hipófise-adrenal (HHA) regula a produção de cortisol: o hipotálamo libera CRH, que estimula a hipófise a secretar ACTH, que por sua vez estimula o córtex adrenal a produzir cortisol — com retroalimentação negativa do cortisol sobre hipotálamo e hipófise. Na **insuficiência adrenal primária**, a destruição do próprio córtex adrenal (autoimune é a causa mais comum em países desenvolvidos) reduz o cortisol, removendo a retroalimentação negativa e elevando compensatoriamente o ACTH — como o ACTH deriva do mesmo precursor (POMC) que o MSH, o excesso de ACTH gera hiperpigmentação cutaneomucosa característica. Na **insuficiência adrenal secundária** (lesão hipofisária/hipotalâmica, incluindo supressão por corticoide exógeno crônico), o ACTH está baixo, então não há hiperpigmentação, mas a produção de aldosterona (regulada principalmente pelo sistema renina-angiotensina, não pelo ACTH) costuma estar preservada — por isso a secundária tende a não causar hiperpotassemia tão acentuada quanto a primária.

**Síndrome de Cushing** resulta de excesso crônico de cortisol, seja por produção endógena excessiva (adenoma hipofisário produtor de ACTH = doença de Cushing; tumor adrenal autônomo; secreção ectópica de ACTH por tumor extra-hipofisário) seja por uso exógeno de corticoide. O cortisol em excesso promove catabolismo proteico (fraqueza muscular proximal, estrias violáceas, pele fina), redistribuição de gordura (obesidade central, fácies em lua cheia, giba dorsal), resistência insulínica (hiperglicemia/diabetes) e supressão imune.

**Feocromocitoma** origina-se das células cromafins da medula adrenal (ou de paragânglios extra-adrenais, quando é chamado paraganglioma), secretando catecolaminas de forma paroxística ou sustentada. A liberação episódica explica a hipertensão paroxística característica; a depleção crônica de volume intravascular (por vasoconstrição mantida) explica a hipotensão ortostática que coexiste, paradoxalmente, com a hipertensão de base.

**Carcinoma adrenal** é uma neoplasia rara mas agressiva do córtex adrenal, frequentemente funcionante com produção hormonal mista (cortisol + andrógenos, às vezes mineralocorticoides), o que explica a apresentação combinada de Cushing e virilização em uma mesma paciente — um padrão hormonal misto tão marcante é incomum em adenomas benignos, que costumam ser monoclonais na secreção.

**Síndrome poliglandular autoimune tipo 2** combina insuficiência adrenal autoimune com pelo menos uma outra endocrinopatia autoimune (tireoidopatia autoimune sendo a mais comum, seguida de diabetes tipo 1) — reflete uma predisposição imunogenética compartilhada (associação com HLA-DR3/DR4) que favorece autoimunidade poliglandular, diferente da síndrome tipo 1 (mais rara, monogênica, ligada ao gene AIRE, com candidíase mucocutânea crônica e hipoparatireoidismo como marcadores).

## 🩺 Quadro clínico

- **Insuficiência adrenal crônica:** astenia, fadiga, perda de peso, hipotensão, náuseas/vômitos, dor abdominal, hiperpigmentação (só na primária), avidez por sal (deficiência mineralocorticoide, só na primária).
- **Crise adrenal:** hipotensão refratária a volume, choque, dor abdominal intensa, febre, alteração do nível de consciência, hipoglicemia — sempre em contexto de estresse agudo desencadeante.
- **Síndrome de Cushing:** obesidade central, fácies em lua cheia, giba dorsal, estrias violáceas largas, fraqueza muscular proximal, pele fina/equimoses fáceis, hirsutismo, irregularidade menstrual, hipertensão, hiperglicemia, osteoporose.
- **Feocromocitoma:** tríade clássica cefaleia + palpitação + sudorese profusa, em crises paroxísticas; hipertensão (paroxística ou sustentada), hipotensão postural, tremor, ansiedade, palidez.
- **Carcinoma adrenal:** sinais de virilização de instalação rápida (hirsutismo, clitoromegalia, engrossamento de voz, alopecia androgênica), amenorreia, hipertensão, associado a sinais cushingoides quando há produção mista.
- **Incidentaloma:** por definição, a maioria é assintomática — achado em exame de imagem solicitado por outro motivo.

## 🔎 Diagnóstico

- **Insuficiência adrenal:** cortisol matinal basal baixo + ACTH (alto na primária, baixo/inapropriadamente normal na secundária); teste de estímulo com ACTH sintético (cortrosina) confirma quando o basal é duvidoso. Investigar etiologia: anticorpos anti-21-hidroxilase (autoimune), imagem de adrenais (infecciosa/infiltrativa/hemorrágica) ou de hipófise conforme o padrão de ACTH.
- **Síndrome de Cushing (algoritmo em 2 etapas):**
  1. **Rastreio/confirmação:** teste de supressão com 1mg de dexametasona à noite (cortisol matinal >1,8 μg/dL = não suprimiu), ou cortisol livre urinário 24h, ou cortisol salivar noturno.
  2. **Localização:** dosar ACTH. Suprimido → TC/RM de adrenal (causa adrenal). Normal/alto → RM de hipófise + teste de Liddle 2 (supressão com dose alta) + teste do CRH (doença de Cushing hipofisária costuma suprimir/responder; ACTH ectópico tipicamente não suprime nem responde) ± cateterismo de seio petroso inferior em casos duvidosos.
- **Incidentaloma adrenal:** TC sem contraste (densidade em UH) para caracterizar a lesão + painel hormonal completo (metanefrinas, cortisol pós-1mg dexametasona, relação aldosterona/renina se hipertenso/hipocalêmico, 17-OH-progesterona e SDHEA se sinais de virilização).
- **Feocromocitoma:** **metanefrinas plasmáticas fracionadas** (primeira escolha, alta sensibilidade) ou metanefrinas urinárias de 24h; confirmado o excesso bioquímico, localizar com TC/RM de abdome (ou cintilografia com MIBG/PET em casos extra-adrenais ou metastáticos).
- **Carcinoma adrenal:** massa grande (>4-6cm) com produção hormonal mista, densidade heterogênea na TC; confirmação histológica após ressecção cirúrgica (biópsia percutânea pré-operatória é evitada pelo risco de disseminação e por baixo rendimento diagnóstico).

## 🚨 Gravidade / classificação

- **Crise adrenal** é sempre emergência — tratamento não espera confirmação laboratorial.
- **Tamanho e densidade do incidentaloma** (>4cm, >10 UH, crescimento no seguimento) aumentam a probabilidade de malignidade e mudam a conduta de vigilância para ressecção.
- **Estadiamento do carcinoma adrenal** (sistema ENSAT) orienta prognóstico e decisão entre cirurgia isolada, adjuvância com mitotano e terapia sistêmica em doença avançada.
- **Cushing subclínico** em incidentaloma exige decisão individualizada entre vigilância e adrenalectomia, conforme comorbidades associadas (osteoporose, diabetes, hipertensão).

## 💊 Tratamento

- **Insuficiência adrenal crônica:** reposição de glicocorticoide (hidrocortisona, dose fisiológica fracionada) ± mineralocorticoide (fludrocortisona) na forma primária; educação do paciente para dobrar a dose em situações de estresse (infecção, cirurgia) e portar identificação médica.
- **Crise adrenal:** **hidrocortisona IV em bolus imediato** (não esperar exames), reposição volêmica agressiva com solução salina, correção de hipoglicemia, tratamento do fator desencadeante.
- **Síndrome de Cushing:** tratamento dirigido à causa — cirurgia transesfenoidal para adenoma hipofisário (doença de Cushing); adrenalectomia para adenoma/carcinoma adrenal; ressecção do tumor produtor de ACTH ectópico quando localizável. Terapia medicamentosa (cetoconazol, metirapona, osilodrostate) como ponte pré-operatória ou em doença não ressecável.
- **Feocromocitoma:** **bloqueio alfa-adrenérgico (fenoxibenzamina ou doxazosina) antes de qualquer bloqueio beta** — iniciar beta-bloqueador primeiro pode desencadear crise hipertensiva por vasoconstrição alfa sem oposição. Após bloqueio adequado (7-14 dias) e expansão volêmica, **adrenalectomia** é o tratamento definitivo.
- **Carcinoma adrenal:** adrenalectomia radical em doença localizada; **mitotano** como terapia adjuvante (reduz recorrência em casos de alto risco) e como base do tratamento sistêmico em doença avançada, associado a quimioterapia em casos refratários.
- **Incidentaloma não funcionante e sem critérios de malignidade:** vigilância com imagem e reavaliação hormonal periódica; ressecção reservada para lesões funcionantes ou com critérios radiológicos de risco.

## 🔀 Diagnóstico diferencial

| Achado | Insuficiência adrenal primária | Insuficiência adrenal secundária |
| --- | --- | --- |
| ACTH | Alto | Baixo/inapropriadamente normal |
| Hiperpigmentação | Presente | Ausente |
| Hipercalemia | Presente (falta de aldosterona) | Geralmente ausente |
| Causa típica | Autoimune (isolada ou poliglandular) | Supressão por corticoide exógeno, doença hipofisária |

| Causa de Cushing | ACTH | Teste de Liddle 2 | Contexto típico |
| --- | --- | --- | --- |
| Doença de Cushing (hipófise) | Normal/alto | Suprime | Adenoma hipofisário |
| ACTH ectópico | Muito alto | Não suprime | Ca. pequenas células de pulmão, carcinoide |
| Adenoma/carcinoma adrenal | Suprimido | Não se aplica | Massa adrenal na imagem |

## 🔤 Mnemônicos

- **Regra dos 10% do feocromocitoma** (10% bilateral, 10% extra-adrenal, 10% maligno, 10% familiar) — simplificação clássica útil para lembrar a heterogeneidade da apresentação, mesmo sabendo que a proporção familiar real é maior.

## 📋 Tabela de revisão

| Doença | Rastreio inicial | Confirmação | Tratamento definitivo |
| --- | --- | --- | --- |
| Insuficiência adrenal | Cortisol basal + ACTH | Teste do ACTH sintético | Hidrocortisona ± fludrocortisona |
| Síndrome de Cushing | Dexametasona 1mg | ACTH + Liddle 2/CRH | Cirurgia dirigida à causa |
| Incidentaloma | TC (densidade) + painel hormonal | Conforme achado | Vigilância ou ressecção |
| Feocromocitoma | Metanefrinas plasmáticas | TC/RM de localização | Bloqueio alfa → adrenalectomia |
| Carcinoma adrenal | Massa grande funcionante | Histologia pós-ressecção | Adrenalectomia + mitotano |

## 📚 Referências essenciais

- Endocrine Society Clinical Practice Guideline — Diagnosis and Treatment of Primary Adrenal Insufficiency.
- Endocrine Society Clinical Practice Guideline — Cushing's Syndrome: Diagnosis and Treatment.
- Endocrine Society Clinical Practice Guideline — Pheochromocytoma and Paraganglioma.
- ESE/ENSAT Clinical Practice Guideline — Management of Adrenal Incidentalomas (citada explicitamente pela UERJ em 2022).
- ENSAT Guideline — Adrenocortical Carcinoma.
`;

export default content.trim();
