/**
 * Resumo — Reumatologia · Lúpus e conectivopatias.
 *
 * Cobre as entidades do assunto no corpus: LES (critérios e diagnóstico),
 * síndrome antifosfolípide, síndrome de Sjögren, esclerose sistêmica
 * (incluindo crise renal esclerodérmica), doença relacionada ao IgG4 e
 * síndrome do pulmão encolhido.
 */
const content = `
## 🎯 Essencial

- **LES:** doença multissistêmica com **FAN positivo em título alto** (quase universal, mas pouco específico) — a especificidade vem de **anti-DNA nativo** (correlaciona com atividade, especialmente nefrite) e **anti-Sm** (mais específico, não correlaciona com atividade).
- **Nefrite lúpica:** proteinúria + hematúria dismórfica + **complemento consumido (C3 e C4 baixos)** — biópsia renal define a classe histológica e orienta o tratamento (classes proliferativas III/IV exigem imunossupressão agressiva).
- **Lúpus induzido por droga** (anti-TNF, hidralazina, procainamida, isoniazida) tende a ter **anti-histona positivo** e **poupar rim e SNC** — melhora com a suspensão do fármaco, sem necessariamente exigir imunossupressão.
- **Síndrome antifosfolípide (SAF):** tromboses (venosas ou arteriais) e/ou perdas gestacionais recorrentes + anticorpos antifosfolípides (anticoagulante lúpico, anticardiolipina, anti-beta2-glicoproteína I) persistentes. A **nefropatia da SAF causa microangiopatia trombótica renal, com complemento normal** — diferente da nefrite lúpica clássica (complemento baixo).
- **Esclerose sistêmica:** Raynaud + espessamento cutâneo + dismotilidade esofágica + capilaroscopia com megacapilares. **Crise renal esclerodérmica** (hipertensão maligna + IRA + hemólise microangiopática, anti-Scl70/anti-topoisomerase I positivo) é emergência — tratamento é **IECA**, mesmo com função renal em queda (é a única situação reumatológica em que IECA é indicado apesar da lesão renal aguda).
- **Síndrome de Sjögren:** xeroftalmia + xerostomia + pode causar **acidose tubular renal distal (tipo 1)** — hipopotassemia, acidose metabólica hiperclorêmica, urina alcalina, nefrocalcinose/hipercalciúria.
- **Doença relacionada ao IgG4:** massas/infiltrados fibroinflamatórios em múltiplos órgãos (pâncreas — pancreatite autoimune; glândulas salivares — sialoadenite; retroperitônio; vias biliares) + **IgG4 sérico elevado** + complemento frequentemente consumido — responde bem a **corticoide**. É diferencial importante de Sjögren (glândulas) e de colangite esclerosante (vias biliares).
- **Síndrome do pulmão encolhido (shrinking lung):** dispneia + dor pleurítica em paciente lúpico, com **redução de volumes pulmonares e DLCO reduzida sem doença parenquimatosa relevante na TC** — reflete disfunção diafragmática/muscular respiratória associada ao LES, não doença intersticial.

## 💎 Pearls

- **Anti-DNA nativo sobe e desce com a atividade da doença (útil para monitorização); anti-Sm não** — pedir para monitorizar atividade com anti-Sm é erro conceitual comum.
- **CH50 baixo com C3 e C4 baixos** é o padrão clássico de consumo de complemento por ativação da via clássica (imunocomplexos) — visto em nefrite lúpica ativa; contraste com SAF e vasculites ANCA-associadas, onde o complemento costuma estar normal.
- **Fenômeno de Raynaud pode preceder em anos** o diagnóstico de esclerose sistêmica, LES ou doença mista do tecido conjuntivo — sempre vale investigar capilaroscopia e autoanticorpos específicos quando o Raynaud é a queixa isolada de início.
- **Anti-Ro/SSA e anti-La/SSB** são os anticorpos mais associados a Sjögren, mas também aparecem em LES — quando positivos em gestante, ambos os anticorpos aumentam risco de **bloqueio cardíaco congênito fetal** e lúpus neonatal, independentemente da doença materna de base ser Sjögren ou LES.
- **A crise renal esclerodérmica costuma ser precedida por uso de corticoide em altas doses** — é um gatilho reconhecido, o que reforça cautela ao usar corticoide em dose alta em paciente com esclerose sistêmica difusa.
- **Doença por IgG4 pode mimetizar câncer de pâncreas** (massa pancreática, icterícia obstrutiva) — a resposta dramática ao corticoide é tanto terapêutica quanto diagnóstica retrospectivamente.
- **A síndrome do pulmão encolhido é diagnóstico de exclusão** — antes de fechar, é preciso descartar embolia pulmonar (a vinheta clássica já traz cintilografia de baixa probabilidade) e pneumonite lúpica ativa (que teria alteração parenquimatosa na TC).

## ⚠️ Pitfalls

- **Fechar diagnóstico de LES só com FAN positivo** — FAN é sensível mas pouco específico (positivo em até 5% da população geral saudável, mais ainda em outras doenças autoimunes e infecções); sempre buscar anticorpos mais específicos e critérios clínicos associados.
- **Confundir lúpus induzido por droga com LES idiopático** — o primeiro tipicamente poupa rim e SNC e tem anti-histona positivo; suspender o fármaco costuma ser suficiente, sem necessidade de imunossupressão pesada.
- **Confundir nefropatia da SAF com nefrite lúpica** só pela presença de hematúria/proteinúria em paciente lúpico — o complemento normal (SAF) versus consumido (nefrite lúpica clássica) e o padrão histológico (microangiopatia trombótica versus proliferação glomerular imunocomplexo-mediada) são o que diferenciam.
- **Evitar IECA em crise renal esclerodérmica por medo de piorar a função renal** — é justamente a situação em que o IECA deve ser usado agressivamente, mesmo com creatinina subindo, porque controla o mecanismo fisiopatológico central (ativação do sistema renina-angiotensina).
- **Diagnosticar Sjögren com hipocalemia e acidose sem pensar em acidose tubular renal distal** — a combinação de sintomas sicca com esse distúrbio hidroeletrolítico é uma associação clássica e recorrente.
- **Tratar toda massa pancreática com dor e perda de peso como neoplasia sem considerar doença por IgG4** quando há achados sistêmicos associados (sialoadenite, poliartralgia, atopia prévia) — a diferenciação evita cirurgia desnecessária.

## 📝 Como a UERJ cobra

**Lúpus e conectivopatias é #15 do ranking (6 questões, 2,4% do corpus)**, com um padrão de vinheta que testa **reconhecer a conectivopatia por trás de uma complicação de órgão específico**, não pelo quadro mucocutâneo clássico isolado.

- **LES — critérios e diagnóstico** (2022 Q28) foi cobrado em contexto de uso de anti-TNF, testando a diferenciação com lúpus induzido por droga.
- **Esclerose sistêmica** (2022 Q25) testou o reconhecimento da crise renal esclerodérmica e sua causa de anemia associada (hemólise microangiopática) — questão de raciocínio fisiopatológico, não só reconhecimento clínico.
- **Síndrome antifosfolípide** (2024 Q16) exigiu diferenciar nefropatia da SAF de outras nefrites lúpicas pelo padrão de complemento e pela biópsia pauci-imune.
- **Doença relacionada ao IgG4** (2024 Q13) e **síndrome de Sjögren** (2024 Q24) apareceram na mesma prova, ambas exigindo reconhecer manifestações glandulares/sistêmicas específicas além do sicca clássico.
- **Síndrome do pulmão encolhido** (2021 Q14) é item raro e de alto rendimento — pouco cobrado em provas de residência em geral, mas exatamente por isso um excelente diferencial de dispneia em paciente lúpico quando a TC não mostra doença parenquimatosa.

## 🆕 Atualização

- **Belimumabe e anifrolumabe** (biológicos que bloqueiam BLyS e o receptor de interferon tipo I, respectivamente) ampliaram as opções terapêuticas para LES ativo refratário ao tratamento convencional, incluindo nefrite lúpica em combinação com imunossupressores tradicionais — mudança relevante na última década, ainda não cobrada pela UERJ.
- Os **critérios de classificação ACR/EULAR 2019 para LES** substituíram os critérios ACR mais antigos, dando peso maior ao FAN positivo como critério de entrada obrigatório, seguido de critérios ponderados por domínio clínico/imunológico — reflexo da mudança de entendimento sobre a centralidade do FAN no rastreio inicial.
- **Nintedanibe**, já usado em fibrose pulmonar idiopática, foi aprovado também para doença pulmonar intersticial associada à esclerose sistêmica, ampliando as opções terapêuticas específicas para essa complicação pulmonar.
- **Voclosporina**, inibidor de calcineurina, foi aprovada mais recentemente como adjuvante no tratamento da nefrite lúpica proliferativa, em combinação com micofenolato — nova opção terapêutica ainda não refletida nas provas.

## 🧠 Conceito e fisiopatologia

**LES** é uma doença autoimune sistêmica caracterizada por perda de tolerância a autoantígenos nucleares, com produção de autoanticorpos que formam imunocomplexos circulantes — esses imunocomplexos se depositam em múltiplos tecidos (pele, rim, articulações, serosas), ativando o complemento pela via clássica e desencadeando inflamação local. É esse consumo de complemento pela ativação da via clássica que explica por que C3 e C4 caem durante atividade de doença, particularmente na nefrite.

**Síndrome antifosfolípide** decorre de anticorpos que interferem na regulação da coagulação (ligando-se a proteínas plasmáticas associadas a fosfolípides, como a beta2-glicoproteína I), promovendo um estado de hipercoagulabilidade que causa tromboses arteriais e venosas recorrentes e, na placenta, favorece infartos placentários que explicam as perdas gestacionais. Diferente do LES clássico, a lesão tecidual na SAF é predominantemente trombótica/isquêmica, não mediada por deposição de imunocomplexos — daí o complemento tipicamente normal.

**Esclerose sistêmica** envolve disfunção endotelial precoce, ativação de fibroblastos e deposição excessiva de colágeno, levando a fibrose progressiva da pele e de órgãos internos (esôfago, pulmão, rim, coração). A **crise renal esclerodérmica** decorre de lesão da vasculatura renal (hiperplasia da íntima das arteríolas) que ativa intensamente o sistema renina-angiotensina — a hipertensão maligna resultante causa mais lesão vascular renal, fechando um ciclo vicioso que só é interrompido pelo bloqueio farmacológico direto desse eixo com IECA.

**Síndrome de Sjögren** resulta de infiltração linfocítica das glândulas exócrinas (salivares e lacrimais principalmente), destruindo progressivamente o tecido glandular funcional — a xerostomia e xeroftalmia são consequência direta dessa destruição. O mesmo processo autoimune pode acometer o interstício renal, comprometendo a capacidade dos túbulos distais de secretar hidrogênio, gerando acidose tubular renal distal.

**Doença relacionada ao IgG4** é caracterizada por infiltração tecidual por plasmócitos produtores de IgG4 e fibrose "storiforme" característica, podendo acometer virtualmente qualquer órgão de forma sincrônica ou metacrônica — o mecanismo imunológico exato ainda é área de pesquisa ativa, mas a resposta terapêutica ao corticoide é geralmente rápida e robusta.

## 🩺 Quadro clínico

- **LES:** artrite não erosiva, rash malar/fotossensibilidade, úlceras orais, serosite (pleurite, pericardite), nefrite, citopenias, manifestações neuropsiquiátricas.
- **SAF:** trombose venosa profunda/embolia pulmonar, AVC em jovem, perdas gestacionais recorrentes (especialmente após 10 semanas), livedo reticular, trombocitopenia leve.
- **Esclerose sistêmica:** Raynaud, espessamento cutâneo progressivo (dedos → face/tronco na forma difusa), disfagia por dismotilidade esofágica, dispneia por doença intersticial pulmonar, hipertensão pulmonar, crise renal (hipertensão súbita + IRA).
- **Síndrome de Sjögren:** xeroftalmia (sensação de areia nos olhos), xerostomia, aumento de parótidas, artralgia, fadiga, manifestações extraglandulares (vasculite cutânea, neuropatia, acidose tubular renal).
- **Doença por IgG4:** massas/aumento glandular (pâncreas, glândulas salivares/lacrimais, retroperitônio), sintomas obstrutivos conforme o órgão acometido, história de atopia frequentemente associada.
- **Síndrome do pulmão encolhido:** dispneia progressiva, dor pleurítica, sem achados parenquimatosos relevantes na TC, em paciente com LES estabelecido.

## 🔎 Diagnóstico

- **LES:** FAN como triagem (critério de entrada obrigatório nos critérios ACR/EULAR 2019); anti-DNA nativo e anti-Sm para especificidade; complemento (C3/C4) para atividade, especialmente renal; biópsia renal quando há suspeita de nefrite para definir classe histológica.
- **SAF:** anticoagulante lúpico, anticardiolipina e anti-beta2-glicoproteína I, confirmados em duas dosagens com intervalo de 12 semanas (critérios de Sydney/ACR-EULAR); biópsia renal com padrão de microangiopatia trombótica e imunofluorescência pauci-imune quando há acometimento renal.
- **Esclerose sistêmica:** capilaroscopia periungueal (megacapilares, áreas avasculares), anti-Scl70/topoisomerase I (forma difusa, maior risco de crise renal e doença pulmonar) ou anticentrômero (forma limitada/CREST); prova de função respiratória e TC de tórax para rastreio de doença intersticial.
- **Síndrome de Sjögren:** teste de Schirmer, biópsia de glândula salivar menor (sialoadenite linfocítica focal), anti-Ro/SSA e anti-La/SSB.
- **Doença por IgG4:** dosagem de IgG4 sérico, biópsia do órgão acometido (infiltrado linfoplasmocitário rico em plasmócitos IgG4+, fibrose storiforme), imagem dirigida ao órgão (colangiorressonância, TC de abdome).
- **Síndrome do pulmão encolhido:** prova de função respiratória (padrão restritivo, DLCO reduzida), TC de tórax sem doença parenquimatosa relevante, exclusão de tromboembolismo pulmonar (cintilografia ou angio-TC).

## 🚨 Gravidade / classificação

- **Classes histológicas da nefrite lúpica (OMS/ISN-RPS, I a VI)** definem prognóstico e intensidade do tratamento — classes III e IV (proliferativas) exigem indução imunossupressora agressiva; classe V (membranosa) tem abordagem particular; classe VI (esclerosante avançada) tem pouco benefício de imunossupressão intensa.
- **Crise renal esclerodérmica** é emergência absoluta — atraso no início de IECA piora dramaticamente o prognóstico renal.
- **SAF catastrófica** (trombose de múltiplos órgãos em curto intervalo de tempo) é forma rara e gravíssima, exigindo anticoagulação plena associada a imunossupressão/plasmaférese/imunoglobulina.

## 💊 Tratamento

- **LES leve (cutâneo-articular):** hidroxicloroquina (base do tratamento em praticamente todos os pacientes, reduz recidivas e tem efeito protetor cardiovascular/renal a longo prazo) + AINE/corticoide em baixa dose.
- **Nefrite lúpica proliferativa:** indução com micofenolato de mofetila ou ciclofosfamida + corticoide em dose alta; manutenção com micofenolato ou azatioprina; belimumabe ou voclosporina como adjuvantes em casos selecionados.
- **SAF:** anticoagulação plena (varfarina, mantendo INR alvo 2-3) para trombose estabelecida — anticoagulantes orais diretos são geralmente evitados na SAF trombótica de alto risco por eficácia inferior à varfarina nesse contexto específico; AAS em baixa dose para profilaxia obstétrica associado a heparina em SAF obstétrica.
- **Crise renal esclerodérmica:** **IECA** em doses progressivas conforme tolerado, mesmo com função renal em queda — é a exceção formal à regra geral de evitar IECA em lesão renal aguda.
- **Síndrome de Sjögren:** lágrimas/saliva artificial para sintomas sicca; hidroxicloroquina para sintomas sistêmicos leves; correção de eletrólitos e citrato de potássio para a acidose tubular renal associada.
- **Doença por IgG4:** **corticoide** como primeira linha (resposta geralmente rápida e importante); rituximabe em casos recidivantes ou refratários.
- **Síndrome do pulmão encolhido:** corticoide/imunossupressor dirigido à atividade lúpica de base; suporte respiratório conforme gravidade; fisioterapia respiratória.

## 🔀 Diagnóstico diferencial

| Achado renal em conectivopatia | Complemento | Padrão histológico | Doença |
| --- | --- | --- | --- |
| Proteinúria + hematúria dismórfica | Baixo | Proliferativo/imunocomplexo | Nefrite lúpica |
| Proteinúria + IRA + HAS súbita | Normal | Microangiopatia trombótica | Nefropatia da SAF |
| HAS maligna + IRA + hemólise | Normal | Hiperplasia da íntima arteriolar | Crise renal esclerodérmica |
| Hipocalemia + acidose hiperclorêmica | Normal | Nefrite intersticial | Sjögren (ATR distal) |

## 📋 Tabela de revisão

| Conectivopatia | Autoanticorpo-chave | Complicação de alto rendimento | Tratamento da complicação |
| --- | --- | --- | --- |
| LES | Anti-DNA nativo, anti-Sm | Nefrite lúpica | Micofenolato/ciclofosfamida |
| SAF | Anticoagulante lúpico, anticardiolipina | Trombose/nefropatia da SAF | Anticoagulação plena |
| Esclerose sistêmica | Anti-Scl70 | Crise renal esclerodérmica | IECA |
| Sjögren | Anti-Ro/SSA, anti-La/SSB | Acidose tubular renal distal | Correção eletrolítica |
| Doença por IgG4 | IgG4 sérico | Pancreatite autoimune | Corticoide |

## 📚 Referências essenciais

- Critérios ACR/EULAR 2019 para Classificação do Lúpus Eritematoso Sistêmico.
- Critérios ACR/EULAR para Síndrome Antifosfolípide (citados explicitamente pela UERJ em 2024).
- EULAR Recommendations for the Management of Systemic Sclerosis.
- ACR/EULAR Classification Criteria for Sjögren's Syndrome.
- Comprehensive Diagnostic Criteria for IgG4-Related Disease.
`;

export default content.trim();
