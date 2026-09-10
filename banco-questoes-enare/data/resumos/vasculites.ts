/**
 * Resumo — Reumatologia · Vasculites.
 *
 * Assunto de baixa incidência no corpus (2 questões reais, cauda longa,
 * fora do corte 80/20): EBSERH 2026 Q49 (síndrome pulmão-rim por doença
 * anti-membrana basal glomerular, conduta com plasmaférese) e ENARE 2026
 * Q42 (crioglobulinemia tipo I associada a gamopatia monoclonal). Como
 * "vasculites" reúne várias doenças distintas por tamanho de vaso e
 * mecanismo, o resumo é organizado por entidade clínica (como em
 * hiv-aids.ts), cobrindo as duas entidades realmente cobradas e
 * extrapolando, com a mesma profundidade, as vasculites mais clássicas de
 * prova de residência (ANCA-associadas, poliarterite nodosa, Takayasu,
 * células gigantes, IgA) que ainda não caíram neste banco.
 */
const content = `
## 🎯 Essencial

- **Classifique vasculite primeiro pelo tamanho do vaso predominante** (grande, médio, pequeno) — esse eixo organiza todo o diferencial e é a lógica por trás de cada síndrome clínica (vasos grandes dão isquemia de território amplo/claudicação; vasos pequenos dão púrpura palpável, hemorragia alveolar e glomerulonefrite).
- **Síndrome pulmão-rim (hemorragia alveolar + glomerulonefrite rapidamente progressiva) tem 3 causas principais**: doença anti-membrana basal glomerular (anti-MBG), vasculite ANCA-associada e, mais raramente, lúpus grave — a sorologia (anti-MBG, ANCA/anti-MPO/anti-PR3, FAN/anti-dsDNA) é o que separa as três, e mais de uma pode coexistir (síndrome de sobreposição anti-MBG + ANCA).
- **Crioglobulinemia tipo I é monoclonal e não é mediada por imunocomplexos** — associada a gamopatia monoclonal/neoplasia hematológica linfoplasmocitária, causa isquemia por oclusão vascular direta pelo crioprecipitado (Raynaud, necrose digital, livedo), diferente dos tipos II e III (mistas, policlonais + monoclonais, imunocomplexo, tipicamente por hepatite C), que cursam mais com púrpura palpável e glomerulonefrite.
- **ANCA não é sinônimo de vasculite ANCA-associada** — a especificidade antigênica importa: anti-PR3 (c-ANCA) associa-se mais a granulomatose com poliangiite; anti-MPO (p-ANCA) associa-se mais a poliangiite microscópica e granulomatose eosinofílica com poliangiite.
- **Diante de crescentes na biópsia renal, o padrão de imunofluorescência define a categoria**: linear (anti-MBG), granular "em céu estrelado"/imunocomplexo (crioglobulinemia, lúpus, IgA), pauci-imune sem depósitos relevantes (vasculite ANCA-associada).

## 🔹 Doença anti-membrana basal glomerular (síndrome de Goodpasture)

- **Mecanismo:** autoanticorpos contra o colágeno tipo IV (domínio NC1 da cadeia alfa-3) presente na membrana basal glomerular e alveolar — por isso o padrão de acometimento simultâneo de rim e pulmão (síndrome pulmão-rim).
- **Quadro clínico:** hemoptise e dispneia progressiva (hemorragia alveolar) associadas a hematúria, oligúria e insuficiência renal rapidamente progressiva; sintomas sistêmicos (artralgia, perda ponderal) podem preceder o quadro em semanas.
- **Diagnóstico:** anti-MBG sérico positivo em título alto; biópsia renal com glomerulonefrite necrosante com crescentes e **imunofluorescência com depósito linear de IgG ao longo da membrana basal** (achado patognomônico, diferente do padrão granular do imunocomplexo).
- **Tratamento:** é **emergência médica** — plasmaférese diária (remove o autoanticorpo circulante) associada a glicocorticoide em altas doses e ciclofosfamida (imunossupressão para impedir nova produção de autoanticorpo), iniciados o quanto antes, sem aguardar confirmação histológica completa diante de forte suspeita clínico-laboratorial.
- 💎 **Pearl:** cerca de 10-40% dos casos de doença anti-MBG têm **ANCA positivo associado** (mais comumente anti-MPO) — checar os dois sempre, pois muda o risco de recidiva (a forma de sobreposição recidiva mais).
- ⚠️ **Pitfall:** o estudo PEXIVAS (sobre plasmaférese em vasculite ANCA-associada) **não se aplica à doença anti-MBG** — nesta, a plasmaférese tem benefício bem estabelecido e não deve ser omitida.
- 📝 **Como caiu:** EBSERH 2026 Q49 — conduta nas primeiras 6 horas diante de síndrome pulmão-rim com anti-MBG positivo e biópsia com padrão linear de IgG: plasmaférese diária + glicocorticoide em alta dose + ciclofosfamida.

## 🔹 Vasculites ANCA-associadas (GPA, MPA, EGPA)

- **Granulomatose com poliangiite (GPA, antiga Wegener):** trato respiratório superior (sinusite crônica, perfuração de septo nasal, "nariz em sela"), pulmão (nódulos cavitários) e rim (glomerulonefrite pauci-imune); c-ANCA/anti-PR3 positivo na maioria.
- **Poliangiite microscópica (MPA):** acometimento predominantemente renal e pulmonar (hemorragia alveolar), sem granulomas nem destruição de via aérea superior; p-ANCA/anti-MPO positivo na maioria.
- **Granulomatose eosinofílica com poliangiite (EGPA, antiga Churg-Strauss):** tríade de asma de difícil controle, eosinofilia periférica marcante e vasculite sistêmica (mononeurite múltipla é clássica); ANCA positivo em cerca de metade dos casos, mais frequentemente anti-MPO.
- **Tratamento comum às três:** indução com glicocorticoide em altas doses associado a ciclofosfamida ou rituximabe (rituximabe é preferido em recidiva e em doença sem risco de vida iminente); manutenção com rituximabe, azatioprina ou metotrexato. **Avacopan** (inibidor do receptor de C5a) é opção poupadora de corticoide mais recente. Plasmaférese tem papel controverso e reservado a hemorragia alveolar grave ou glomerulonefrite muito avançada (o estudo PEXIVAS não mostrou benefício consistente em desfechos de mortalidade/doença renal terminal na maioria dos cenários).
- 💎 **Pearl:** mononeurite múltipla (déficit motor/sensitivo assimétrico em nervos isolados, tipicamente pé caído) é um achado de alto valor discriminativo para vasculite de pequeno/médio vaso, especialmente EGPA e PAN.
- ⚠️ **Pitfall:** tratar GPA/MPA com plasmaférese de rotina só porque "é vasculite com rim e pulmão" — sem individualizar pela gravidade, contraria a evidência mais recente (PEXIVAS).
- 📝 **Como caiu:** ainda não cobrado isoladamente no corpus, mas apareceu como distrator relevante na questão de anti-MBG (EBSERH 2026 Q49) — alto potencial de cobrança futura como diagnóstico principal.

## 🔹 Crioglobulinemia

- **Classificação:** tipo I (monoclonal isolada, associada a gamopatia monoclonal/neoplasia linfoplasmocitária — mieloma, macroglobulinemia de Waldenström, linfoma); tipo II (mista, com componente monoclonal com atividade de fator reumatoide + policlonal, mais associada a hepatite C); tipo III (mista, totalmente policlonal, associada a doenças autoimunes/infecções crônicas).
- **Mecanismo tipo I:** oclusão vascular direta por precipitação da imunoglobulina monoclonal em baixa temperatura — não é vasculite por imunocomplexo, por isso o complemento pode estar normal ou pouco alterado, diferente dos tipos mistos.
- **Quadro clínico tipo I:** Raynaud grave, livedo reticularis, necrose digital/isquemia de extremidades, úlceras — fenômeno oclusivo, e não a púrpura palpável mais típica das formas mistas por imunocomplexo (embora possa coexistir).
- **Diagnóstico:** criocrito positivo (proteína que precipita a frio e redissolve ao aquecer — coleta e transporte da amostra devem ser feitos a 37°C para não perder o crioprecipitado); imunofixação sérica caracteriza o componente monoclonal (isotipo e cadeia leve); investigar sempre gamopatia monoclonal/neoplasia hematológica de base na tipo I.
- **Tratamento tipo I:** tratar a doença hematológica de base (quimioterapia dirigida à gamopatia/neoplasia); plasmaférese em quadros graves com isquemia ameaçando extremidade; evitar exposição ao frio.
- 💎 **Pearl:** a presença de **componente monoclonal isolado na imunofixação + crioprecipitado sem atividade de fator reumatoide** é o que fecha tipo I e afasta os tipos mistos (que sempre têm um componente com atividade de fator reumatoide).
- ⚠️ **Pitfall:** assumir hepatite C automaticamente diante de crioglobulinemia — é a causa mais comum da forma mista (tipo II), mas a tipo I não tem relação com infecção viral, e sim com neoplasia/gamopatia monoclonal de base.
- 📝 **Como caiu:** ENARE 2026 Q42 — diferenciar crioglobulinemia tipo I (isquemia digital + gamopatia monoclonal IgG kappa, sem sorologia viral ou autoanticorpo específico) dos tipos mistos associados a hepatite C, HIV ou lúpus.

## 🔹 Poliarterite nodosa (PAN)

- **Vaso acometido:** artérias musculares de médio calibre, sem acometer capilares/vênulas (por isso **não causa glomerulonefrite nem hemorragia alveolar** — diferencial importante frente às vasculites ANCA-associadas e à doença anti-MBG).
- **Associação clássica:** hepatite B crônica (é a manifestação extra-hepática mais prevalente da hepatite B crônica) — pesquisar sempre HBsAg diante de PAN.
- **Quadro clínico:** sintomas constitucionais, mononeurite múltipla, dor abdominal (isquemia mesentérica), hipertensão renovascular por microaneurismas, nódulos subcutâneos dolorosos, livedo racemoso.
- **Diagnóstico:** angiografia com microaneurismas e estenoses segmentares em artérias de médio calibre (rim, mesentério) ou biópsia de tecido acometido — ANCA é tipicamente **negativo** na PAN clássica.
- 💎 **Pearl:** ausência de acometimento pulmonar é uma pista importante — PAN "poupa" o pulmão, ao contrário da maioria das vasculites de pequeno vaso.
- 📝 **Como caiu:** ainda não cobrado como diagnóstico principal no corpus; apareceu como distrator na questão de hepatite B (associação com hepatite crônica).

## 🔹 Arterite de Takayasu

- **Vaso acometido:** grandes vasos — aorta e seus ramos principais; predomínio em **mulheres jovens** (segunda/terceira década).
- **Quadro clínico:** fase inicial com sintomas constitucionais inespecíficos; fase tardia (oclusiva) com claudicação de membros, assimetria de pulsos/pressão arterial entre os braços, sopros vasculares, hipertensão renovascular.
- **Diagnóstico:** angiotomografia ou angiorressonância mostrando espessamento parietal e estenoses/oclusões de aorta e ramos; provas de atividade inflamatória (VHS/PCR) podem estar normais mesmo com doença ativa.
- **Tratamento:** glicocorticoide como indução; imunossupressor poupador de corticoide (metotrexato, tocilizumabe) na manutenção; revascularização cirúrgica/endovascular reservada a estenoses críticas com repercussão, preferencialmente fora da fase inflamatória ativa.
- 💎 **Pearl:** assimetria de pulsos/pressão arterial entre os membros superiores em mulher jovem é o achado de exame físico mais cobrado da doença.

## 🔹 Arterite de células gigantes e polimialgia reumática

- **Vaso acometido:** grandes e médios vasos, com predileção por ramos cranianos da carótida externa (artéria temporal); predomínio em **idosos (>50 anos)**.
- **Quadro clínico:** cefaleia temporal de início recente, claudicação de mandíbula, amaurose fugaz/perda visual súbita (emergência — risco de cegueira irreversível), artéria temporal endurecida e dolorosa à palpação; VHS e PCR tipicamente muito elevados.
- **Associação:** até 50% dos pacientes com arterite de células gigantes têm polimialgia reumática associada (dor e rigidez em cinturas escapular/pélvica, pior pela manhã).
- **Conduta:** **glicocorticoide em dose alta deve ser iniciado imediatamente diante de forte suspeita clínica, sem aguardar biópsia da artéria temporal** — a biópsia (padrão-ouro) pode ser feita em até 1-2 semanas após o início do corticoide sem perder sensibilidade relevante, mas o risco de cegueira não permite adiar o tratamento.
- 💎 **Pearl:** amaurose fugaz em idoso com cefaleia temporal nova é uma das poucas verdadeiras emergências reumatológicas — tratar antes de confirmar.

## 🔹 Vasculite por IgA (púrpura de Henoch-Schönlein)

- **Vaso acometido:** pequenos vasos, mediada por depósito de imunocomplexos de IgA; mais comum em **crianças**, frequentemente após infecção de via aérea superior.
- **Quadro clínico (tétrade clássica):** púrpura palpável em membros inferiores/nádegas, artrite/artralgia, dor abdominal (pode cursar com invaginação intestinal), acometimento renal (hematúria, pode evoluir para nefropatia por IgA indistinguível histologicamente da doença de Berger).
- **Diagnóstico:** predominantemente clínico; biópsia de pele ou rim com depósito de IgA à imunofluorescência quando necessário.
- **Tratamento:** suporte na maioria dos casos (autolimitada); corticoide para dor abdominal intensa ou acometimento renal significativo.
- 💎 **Pearl:** é a vasculite mais comum da infância — diferencia-se de púrpura trombocitopênica pela contagem de plaquetas **normal** (é vasculite, não plaquetopenia).

## 📋 Tabela

**Classificação de Chapel Hill (simplificada) por tamanho de vaso**

| Tamanho do vaso | Vasculites | Achado-chave |
|---|---|---|
| Grande | Arterite de Takayasu, arterite de células gigantes | Claudicação, assimetria de pulso, sopros |
| Médio | Poliarterite nodosa, doença de Kawasaki | Microaneurismas, mononeurite múltipla, sem acometimento pulmonar (PAN) |
| Pequeno (ANCA) | GPA, MPA, EGPA | Síndrome pulmão-rim, pauci-imune, ANCA positivo |
| Pequeno (imunocomplexo) | Vasculite por IgA, crioglobulinemia, anti-MBG | Depósito imune à imunofluorescência (granular ou linear) |

## 📝 Como a banca cobra

**"Vasculites" é um assunto de baixa incidência neste banco — apenas 2 questões reais no corpus completo**: EBSERH 2026 Q49 (MÉDIA — conduta de emergência na doença anti-MBG com plasmaférese) e ENARE 2026 Q42 (DIFÍCIL — diferenciar crioglobulinemia tipo I de formas mistas por gamopatia monoclonal). Ambas exigem raciocínio fino de sorologia/imunopatologia, não apenas reconhecimento de síndrome — padrão consistente com o nível de dificuldade que vasculites costuma ter em provas de residência: é assunto de baixa frequência mas alta complexidade quando cai, e a classificação por tamanho de vaso e o diferencial de síndrome pulmão-rim são âncoras clássicas de prova, com boa chance de reaparecer em formas ainda não exploradas neste banco (GPA/MPA como diagnóstico principal, Takayasu, arterite de células gigantes).

## 📚 Referências essenciais

- EULAR recommendations for the management of ANCA-associated vasculitis.
- 2022 ACR/EULAR Classification Criteria for ANCA-Associated Vasculitis, Giant Cell Arteritis, Takayasu Arteritis e Polyarteritis Nodosa.
- KDIGO Clinical Practice Guideline for Glomerular Diseases (capítulo de doença anti-MBG e glomerulonefrite pauci-imune).
`;

export default content.trim();
