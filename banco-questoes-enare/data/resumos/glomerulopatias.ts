/**
 * Resumo — Nefrologia · Glomerulopatias.
 *
 * Reorganizado por entidade clínica (cada glomerulopatia tem sua própria
 * seção com quadro clínico, diagnóstico, tratamento, pearl e pitfall
 * juntos), em vez de picado entre seções genéricas de tipo — o assunto
 * reúne várias doenças glomerulares distintas, e o eixo nefrótico/nefrítico
 * que as organiza é tratado numa seção de conceito unificadora, não
 * repetido em cada entidade.
 *
 * Cobre as entidades do assunto no corpus: nefropatia membranosa idiopática
 * (anti-PLA2R) e investigação etiológica de síndrome nefrótica em paciente
 * vivendo com HIV e diabético (HIVAN e nefropatia diabética). Inclui também
 * extrapolações de alto rendimento (doença de lesões mínimas, GESF, IgA
 * nephropathy, GN pós-estreptocócica, GNMP, amiloidose renal, GN
 * rapidamente progressiva/vasculite ANCA) ainda não cobradas no corpus, mas
 * plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- **O eixo organizador de toda a nefrologia clínica de prova é distinguir síndrome nefrótica de nefrítica**: nefrótica = proteinúria >3,5 g/24h + hipoalbuminemia + edema + hiperlipidemia, sem hematúria/HAS proeminentes; nefrítica = hematúria dismórfica + cilindros hemáticos + HAS + edema + graus variáveis de queda de TFG, proteinúria subnefrótica.
- **Síndrome nefrótica em adulto sem causa secundária óbvia** → pensar primeiro em **nefropatia membranosa** (causa mais comum de síndrome nefrótica primária no adulto branco/idoso); a **doença de lesões mínimas** predomina em crianças e a **GESF** é a mais comum em adultos afrodescendentes e a principal causa nefrótica associada ao HIV.
- **Síndrome nefrótica em paciente com fatores de risco (HIV, diabetes de longa data, hepatite B/C, lúpus, neoplasia)** exige **excluir causas secundárias antes de rotular como primária** — a etiologia muda completamente a conduta.
- **Biópsia renal é indicada quando o quadro não se encaixa no padrão esperado** (ausência de retinopatia em diabético com síndrome nefrótica, evolução muito rápida, achados atípicos) — não é exame de rotina para todo nefrótico.

## 📝 Como a banca cobra

**Glomerulopatias aparece em 2 questões (0,94% do corpus)**, ambas do ENARE, testando o raciocínio de **etiologia** mais do que tratamento detalhado. Nenhuma questão do corpus até agora cobrou as glomerulopatias primárias mais didáticas (lesões mínimas, GESF isolada, IgA, pós-estreptocócica, GNMP, GN rapidamente progressiva) nem amiloidose renal — são as extrapolações de maior potencial de cobrança deste resumo.

- **ENARE 2025 Q9** cobrou a **nefropatia membranosa idiopática** associada ao **anti-PLA2R**, testando se o candidato reconhece esse anticorpo como marcador diagnóstico específico da forma primária.
- **ENARE 2026 Q13** trouxe uma **síndrome nefrótica em paciente vivendo com HIV e diabético**, exigindo que o candidato não atribuísse automaticamente o quadro à nefropatia diabética e considerasse a **investigação etiológica ampliada** (incluindo causas relacionadas ao HIV).

## 🧠 Conceito e fisiopatologia

Toda glomerulopatia resulta de lesão da barreira de filtração glomerular (podócitos, membrana basal, endotélio fenestrado), mas o **local e o mecanismo do dano determinam o fenótipo clínico**: depósito imune subepitelial (nefropatia membranosa) causa proteinúria maciça sem proliferação celular — puro padrão nefrótico; proliferação endocapilar com influxo de neutrófilos e ruptura da parede capilar (pós-estreptocócica, ANCA) causa hematúria e queda de TFG — padrão nefrítico; e mecanismos mistos (GNMP) ou puramente podocitários sem depósito imune (lesões mínimas, GESF) explicam as demais combinações. Reconhecer esse eixo nefrótico/nefrítico antes de qualquer sorologia já reduz drasticamente o diferencial.

## 🔹 Nefropatia membranosa

- **Quando suspeitar:** síndrome nefrótica em adulto sem causa secundária óbvia — é a causa mais comum de síndrome nefrótica primária no adulto branco/idoso.
- **Diagnóstico:** **anti-PLA2R positivo** confirma a forma primária em cerca de 70-80% dos casos, evitando biópsia em muitos cenários e servindo como marcador de atividade/resposta — sua queda precede a remissão clínica e sua elevação pode antecipar recidiva. O antígeno **THSD7A** explica outra fatia menor dos casos PLA2R-negativos. Histologicamente, depósitos imunes subepiteliais evoluem em estágios (Ehrenreich-Churg I a IV), mas essa classificação tem menos peso prático que a estratificação de risco clínico-sorológica.
- **Nefropatia membranosa secundária** (lúpus, neoplasia sólida — sobretudo em idosos, hepatite B, fármacos como AINEs/sais de ouro/penicilamina) deve sempre ser considerada antes de fechar como idiopática.
- **Tratamento:** estratificado por risco (proteinúria, TFG, trajetória do anti-PLA2R ao longo de 6 meses) — baixo risco recebe terapia conservadora (bloqueio do SRAA, controle pressórico, seguimento com anti-PLA2R); alto risco/progressiva recebe imunossupressão (rituximabe ou esquema de Ponticelli — corticoide alternado com ciclofosfamida). Proteinúria persistente >8 g/dia com anti-PLA2R em ascensão é o cenário de maior risco de progressão para doença renal terminal.
- 💎 **Pearl:** é a glomerulopatia com **maior risco de trombose venosa renal e tromboembolismo pulmonar** entre todas as causas de síndrome nefrótica, especialmente com albumina sérica <2,0-2,5 g/dL — considerar anticoagulação profilática nesse cenário.
- ⚠️ **Pitfall:** fechar diagnóstico de nefropatia membranosa idiopática sem pesquisar causas secundárias em paciente com fatores de risco evidentes, ou não rastrear neoplasia oculta em idoso com nefropatia membranosa nova.
- 📝 **Como caiu:** ENARE 2025 Q9.

## 🔹 Glomerulopatia associada ao HIV (HIVAN) e nefropatia diabética

- **Quando suspeitar (HIVAN):** síndrome nefrótica maciça com carga viral de HIV não controlada, mais comum em pacientes de ascendência africana; costuma apresentar-se com **rins de tamanho normal/aumentado à ultrassonografia**, mesmo com função renal já bastante reduzida — discrepância que chama atenção na vinheta.
- **Quando suspeitar (nefropatia diabética):** diabetes de longa duração, microalbuminúria progredindo para proteinúria franca ao longo de anos, **retinopatia diabética associada** (reforça a etiologia diabética sem precisar de biópsia na maioria dos casos) e por vezes neuropatia.
- **Diagnóstico:** HIVAN — proteinúria maciça + carga viral não controlada + achados histológicos de glomeruloesclerose colapsante à biópsia; nefropatia diabética — proteinúria progressiva associada a retinopatia, biópsia reservada para quadros atípicos.
- **Tratamento:** HIVAN — início/otimização da TARV para supressão viral, associado a bloqueio do SRAA; nefropatia diabética — controle glicêmico e pressórico rigoroso, bloqueio do SRAA, inibidores de SGLT2 quando indicados.
- 💎 **Pearl:** casos de síndrome nefrótica com **múltiplos fatores de risco simultâneos** (HIV + diabetes, por exemplo) exigem investigação dirigida (sorologias, biópsia) em vez de atribuir a uma única causa por conveniência — proteinúria nefrótica **sem retinopatia** em diabético de longa data é sinal de alerta para etiologia não diabética sobreposta.
- ⚠️ **Pitfall:** indicar biópsia renal de rotina em todo paciente diabético com proteinúria e retinopatia concomitante (quando o quadro é típico, é dispensável), ou ignorar a etiologia infecciosa (HIV) diante de síndrome nefrótica, tratando apenas como "idiopática" sem rastrear a causa de base.
- 📝 **Como caiu:** ENARE 2026 Q13.

## 🔹 Doença de lesões mínimas e GESF

- **Quando suspeitar:** doença de lesões mínimas é a causa mais comum de síndrome nefrótica em **crianças**; GESF é a mais comum em **adultos afrodescendentes** e a principal causa nefrótica associada ao HIV (colapsante) ou a obesidade/perda néfrons (variante secundária adaptativa).
- **Diagnóstico:** microscopia óptica normal (lesões mínimas) ou esclerose segmentar e focal (GESF) — a distinção final é histológica, mas na prática **a resposta ao corticoide é o teste diagnóstico funcional**: lesões mínimas respondem de forma dramática; ausência de resposta ao corticoide em criança com síndrome nefrótica costuma revelar GESF subjacente à biópsia.
- **Tratamento:** corticoide em dose plena induz remissão completa na maioria dos casos de lesões mínimas; recidivas frequentes/corticodependência levam à consideração de poupadores de corticoide (ciclofosfamida, inibidor de calcineurina, rituximabe). GESF costuma ser mais refratária ao corticoide isolado.
- 💎 **Pearl:** criança com síndrome nefrótica que não responde ao corticoide em 4-8 semanas deixa de ser tratada como "presumivelmente lesões mínimas" e passa a exigir biópsia — a resposta terapêutica é, na prática pediátrica, mais discriminativa do que a suspeita inicial.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Nefropatia por IgA (doença de Berger) e GN pós-estreptocócica

- **Quando suspeitar (IgA):** é a **glomerulopatia primária mais comum do mundo** — hematúria macroscópica recorrente **24-72h após infecção de vias aéreas superiores** ("synpharyngitic hematuria"), diferente da GN pós-estreptocócica clássica.
- **Quando suspeitar (pós-estreptocócica):** protótipo de síndrome nefrítica em **crianças**, com **latência de 1-3 semanas** após infecção estreptocócica (faringite ou piodermite) — edema periorbitário, hematúria "cor de coca-cola", C3 baixo **transitório** (normaliza em 6-8 semanas), geralmente autolimitada.
- **Diagnóstico:** IgA — biópsia com depósitos mesangiais de IgA (padrão-ouro), complemento tipicamente normal; pós-estreptocócica — quadro clínico + C3 baixo transitório + ASLO/anti-DNAse B positivos, biópsia reservada a casos atípicos ou sem melhora esperada.
- **Tratamento:** IgA — bloqueio do SRAA como base para todos; imunossupressão reservada a proteinúria persistente apesar de terapia conservadora otimizada ou perda progressiva de função; pós-estreptocócica — suporte (controle de volume e PA), geralmente autolimitada, sem imunossupressão específica.
- 💎 **Pearl:** o **tempo de latência entre a infecção e a hematúria** é o principal discriminador clínico entre as duas: hematúria concomitante ou logo após o quadro infeccioso favorece IgA; latência de 1-3 semanas favorece pós-estreptocócica.
- ⚠️ **Pitfall:** confundir hipocomplementenemia persistente (GNMP, lúpus) com transitória (pós-estreptocócica) — o tempo de normalização do complemento é dado relevante para o diagnóstico diferencial.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Glomerulonefrite membranoproliferativa e amiloidose renal

- **Quando suspeitar (GNMP):** padrão **misto nefrótico-nefrítico** com **hipocomplementenemia persistente** — associada a crioglobulinemia (hepatite C), lúpus ou gamopatias monoclonais.
- **Quando suspeitar (amiloidose):** síndrome nefrótica em **idoso com doença inflamatória crônica** (amiloidose AA — artrite reumatoide, doenças autoinflamatórias) ou **discrasia de plasmócitos de base** (amiloidose AL — associada a mieloma múltiplo/gamopatia monoclonal).
- **Diagnóstico:** GNMP — biópsia com padrão membranoproliferativo + investigação da causa de base (sorologia de hepatite C, eletroforese de proteínas, FAN); amiloidose — biópsia com coloração **Vermelho Congo** confirmatória (birrefringência verde-maçã sob luz polarizada), tipagem por imuno-histoquímica ou espectrometria de massa para diferenciar AA de AL.
- **Tratamento:** GNMP — tratar a causa de base (antiviral na hepatite C, imunossupressão no lúpus); amiloidose AA — controle da doença inflamatória de base; amiloidose AL — quimioterapia dirigida ao clone de plasmócitos.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Glomerulonefrite rapidamente progressiva (vasculite ANCA-associada)

- **Quando suspeitar:** síndrome nefrítica com **queda rápida e importante da função renal** (dias a semanas), sobretudo com sintomas sistêmicos associados (pulmão — hemoptise, seios da face, pele) sugerindo poliangiite microscópica ou granulomatose com poliangiite.
- **Diagnóstico:** ANCA (c-ANCA/p-ANCA) positivo na maioria dos casos; biópsia renal com padrão **crescêntico** (proliferação extracapilar em crescente) confirma e orienta prognóstico pela proporção de glomérulos acometidos.
- **Tratamento:** pulsoterapia com corticoide em altas doses associada a ciclofosfamida ou rituximabe; **plasmaférese** em casos com hemorragia alveolar ou dependência dialítica já na apresentação.
- ⚠️ **Pitfall:** não considerar GN rapidamente progressiva diante de queda abrupta e importante de função renal com hematúria — atraso no diagnóstico/biópsia nesse cenário pode custar a função renal de forma irreversível, já que o tratamento precisa começar em dias, não semanas.
- 📝 **Como caiu:** ainda não cobrado no corpus — mas é a glomerulopatia de maior urgência terapêutica do assunto.

## 📋 Tabela

**Eixo nefrótico/nefrítico e principais glomerulopatias**

| Padrão | Achado central | Entidades típicas |
|---|---|---|
| Nefrótico puro | Proteinúria maciça, sem hematúria/HAS proeminentes | Nefropatia membranosa, lesões mínimas, GESF |
| Nefrítico | Hematúria dismórfica, cilindros hemáticos, HAS | Pós-estreptocócica, IgA, GN rapidamente progressiva |
| Misto nefrótico-nefrítico | Combinação dos dois, hipocomplementenemia frequente | GNMP, lúpus |
| Complemento baixo transitório | Normaliza em 6-8 semanas | GN pós-estreptocócica |
| Complemento baixo persistente | Não normaliza | GNMP, lúpus |

## 📚 Referências essenciais

- KDIGO Clinical Practice Guideline on Glomerular Diseases.
- Diretriz da Sociedade Brasileira de Nefrologia (SBN) sobre Glomerulopatias.
- PCDT de Manejo da Infecção pelo HIV em Adultos — Ministério da Saúde (nefropatia associada ao HIV).
- KDIGO Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease.
`;

export default content.trim();
