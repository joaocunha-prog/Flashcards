/**
 * Resumo — Hematologia · Anemias.
 *
 * Cobre a abordagem sistemática da anemia e as entidades que compõem o
 * assunto no corpus: anemia de doença crônica, aplasia/falência medular,
 * anemia megaloblástica, deficiência de G6PD, esferocitose hereditária,
 * hemoglobinúria paroxística noturna, hemólise mecânica (prótese valvar) e
 * talassemias.
 */
const content = `
## 🎯 Essencial

- **Todo caso de anemia se resolve com duas perguntas, nesta ordem: (1) o VCM está baixo, normal ou alto? (2) a contagem de reticulócitos está alta (hemólise/perda) ou baixa (hipoproliferação)?** Essas duas variáveis, cruzadas, praticamente fecham o diagnóstico antes de qualquer exame sofisticado.
- **Reticulócito baixo (<2-2,5% corrigido) = problema de produção** (medula não responde): aplasia, doença crônica, carência de ferro/B12/folato, infiltração medular.
- **Reticulócito alto = problema de destruição/perda** (medula responde bem, mas não acompanha): hemólise ou sangramento agudo.
- **Anemia de doença crônica:** ferro sérico baixo, **TIBC (capacidade de ligação do ferro) baixa** e ferritina normal/alta — o oposto da ferropriva, que tem TIBC alta. É a "anemia da inflamação".
- **Anemia aplásica:** pancitopenia + reticulócitos baixos + medula hipocelular na biópsia. Sempre excluir causa medicamentosa/tóxica/viral (parvovírus B19, hepatite soronegativa) antes de rotular idiopática.
- **Anemia megaloblástica por B12:** VCM muito alto (>110-120), neutrófilos hipersegmentados, e — a pegadinha clássica — **sinais neurológicos (parestesias, alteração de propriocepção/vibração)**, que a deficiência de folato NÃO causa.
- **Anemia perniciosa** (causa autoimune mais comum de deficiência de B12) cursa com **gastrite atrófica e acloridria**, o que paradoxalmente **aumenta o risco de pólipos e adenocarcinoma gástrico** — não de úlcera péptica (que precisa de ácido).
- **Deficiência de G6PD:** hemólise **desencadeada por estresse oxidativo** (infecção, sulfa, dapsona, primaquina, fava) — corpúsculos de Heinz e "bite cells" no esfregaço.
- **Esferocitose hereditária:** defeito da membrana eritrocitária (espectrina/anquirina) → esferócitos rígidos destruídos no baço. **Curva de fragilidade osmótica** é o exame confirmatório clássico.
- **Hemoglobinúria paroxística noturna (HPN):** hemólise intravascular + **citopenias** + **trombose venosa** (inclusive em sítios atípicos, como veias hepáticas/porta) — tríade que deve disparar o diagnóstico mesmo sem hemoglobinúria clássica ao acordar.
- **Hemólise mecânica por prótese valvar:** esquizócitos + LDH alto + haptoglobina consumida (hemólise intravascular crônica) que, mantida no tempo, **consome ferro pela perda urinária contínua (hemossiderinúria) e gera anemia ferropriva sobreposta** — pergunta clássica de "duplo mecanismo".
- **Talassemia beta menor:** microcitose desproporcional ao grau de anemia (VCM muito baixo para hemoglobina pouco reduzida), com **ferritina normal/alta** (ao contrário da ferropenia) e **HbA2 elevada** na eletroforese.

## 💎 Pearls

- **Índice de saturação da transferrina = ferro sérico / TIBC × 100.** Memorize a fórmula: ela aparece pronta na vinheta, mas a banca já pediu para o candidato calculá-la.
- **VCM muito baixo com anemia discreta** é a marca registrada de talassemia (a genética limita a síntese de hemoglobina, então o eritrócito nasce pequeno independentemente do estoque de ferro) — contraste com ferropenia, em que o VCM cai proporcionalmente à gravidade da anemia.
- **Reticulocitose sem sangramento óbvio = hemólise até prova em contrário.**
- Na hemólise, a tríade laboratorial de suporte é **LDH alto + haptoglobina baixa + bilirrubina indireta alta** — decore o trio, não decore só um dos três.
- **Esquizócitos** apontam para hemólise mecânica: valva protética, microangiopatia trombótica (PTT/SHU/CIVD) ou hemangioma cavernoso — o contexto clínico é que separa essas causas.
- **Colecistectomia prévia em paciente jovem investigando anemia hemolítica** é uma pista silenciosa de esferocitose hereditária ou outra hemólise crônica (cálculos de bilirrubinato de cálcio por hiperbilirrubinemia crônica).
- **HPN classicamente cursa com trombose venosa, não arterial** — e frequentemente em sítios atípicos (Budd-Chiari, veia porta, veias cerebrais), o que deveria disparar o diagnóstico em paciente jovem com trombose incomum + citopenia.
- **G6PD:** a hemólise é autolimitada porque só as hemácias mais velhas (com menor atividade enzimática residual) são destruídas — por isso repor primaquina/sulfa após o episódio agudo pode ser reintroduzida com cautela em casos selecionados, mas a prova cobra a fase aguda, não esse detalhe.
- **Anemia por doença crônica pode coexistir com ferropenia verdadeira** (ex.: artrite reumatoide + sangramento por AINE) — quando os índices de ferro são ambíguos, a **ferritina muito baixa (<30) ainda indica ferropenia mesmo em contexto inflamatório**, porque ferritina é reagente de fase aguda e tende a estar elevada na inflamação pura.

## ⚠️ Pitfalls

- Trocar **anemia ferropriva por anemia de doença crônica** (ou vice-versa) por não checar a TIBC: ferropenia = TIBC **alta** (o corpo tenta capturar mais ferro); doença crônica = TIBC **baixa** (sequestro de ferro pelo sistema reticuloendotelial via hepcidina). Ferritina sozinha não resolve a dúvida em contexto inflamatório.
- Diagnosticar deficiência de B12 sem considerar que o **ácido metilmalônico está normal na deficiência de folato e elevado na de B12** — é o exame que distingue as duas causas de megaloblastose quando a dosagem sérica é ambígua.
- Achar que toda anemia macrocítica é por B12/folato — hipotireoidismo, doença hepática, mielodisplasia e uso de hidroxiureia também elevam o VCM sem megaloblastose verdadeira.
- Pedir teste de Coombs em toda anemia hemolítica sem pensar no contexto — Coombs é positivo em hemólise **autoimune**, mas é **negativo** em hemólise mecânica, HPN, G6PD e talassemia. Errar essa expectativa é armadilha recorrente.
- Confundir esferocitose hereditária (Coombs negativo, história familiar, curva de fragilidade osmótica alterada) com anemia hemolítica autoimune por esferocitose adquirida (Coombs positivo) — o contexto clínico (idade de início, história familiar, esplenectomia prévia em parentes) é o que diferencia.
- Esquecer que **HPN pode ter hemoglobinúria ausente ou intermitente** — não descartar o diagnóstico só porque a urina "não escureceu ao acordar" na história.
- Tratar toda pancitopenia como anemia aplásica sem excluir infiltração medular (leucemia, síndrome mielodisplásica, mieloftise) e deficiência de B12 grave (que também pode cursar com pancitopenia por eritropoese ineficaz) — o mielograma/biópsia é o que discrimina.
- Na hemólise mecânica por prótese valvar, esquecer que o achado final pode ser uma **anemia ferropriva sobreposta** (por hemossiderinúria crônica) — a pergunta pode não estar testando "reconheça a hemólise" e sim "reconheça a consequência ferropriva dela".

## 📝 Como a UERJ cobra

**Anemias é o #2 do ranking (10 questões, 4,1% do corpus)** e o padrão é extremamente consistente: a vinheta fornece **hemoglobina, VCM, reticulócitos e pelo menos mais um marcador (ferro sérico, TIBC, ferritina, LDH, bilirrubina)**, e a pergunta pede o diagnóstico E o exame confirmatório — quase nunca só um dos dois.

- **Anemia de doença crônica** apareceu 2 vezes (2021 Q38, 2025 Q1), sempre pedindo o **cálculo ou raciocínio sobre saturação de transferrina/TIBC** em paciente com doença inflamatória de base (artrite reumatoide nas duas vinhetas).
- **Aplasia/falência medular** apareceu 2 vezes (2021 Q9, 2023 Q38) com **pancitopenia + reticulócitos baixos**, uma delas explicitamente ligada a **hepatite soronegativa** (associação clássica e cobrada de forma direta).
- As entidades hemolíticas "raras" (esferocitose, HPN, G6PD, hemólise por prótese, talassemia) aparecem cada uma **uma única vez**, mas sempre com o esfregaço de sangue periférico descrito em detalhe no enunciado (esferócitos, esquizócitos, corpúsculos de Heinz, bite cells) — a leitura atenta da morfologia descrita costuma valer mais do que decorar a doença.
- **Anemia megaloblástica** (2022 Q20) testou conhecimento fisiopatológico fino: por que a mucosa antral **não** é atrófica na anemia perniciosa em relação ao corpo/fundo (a resposta certa envolvia risco de pólipo, não de úlcera) — espere pergunta conceitual e não só reconhecimento de vinheta.

## 🆕 Atualização

- O tratamento da **HPN** evoluiu significativamente: além do **eculizumabe/ravulizumabe** (inibidores de C5, terapia padrão desde a última década), novos inibidores do complemento por via oral atuando em C3 (ex.: pegcetacoplan) e no fator B (iptacopan) foram aprovados mais recentemente, ampliando as opções para pacientes com resposta inadequada aos anti-C5. A UERJ ainda não cobrou farmacoterapia de HPN — o foco até aqui é reconhecimento diagnóstico.
- Para **anemia de doença crônica**, a compreensão do eixo **hepcidina-ferroportina** (o mesmo eixo da hemocromatose, em sentido oposto: aqui a hepcidina está **alta**, sequestrando ferro) é cada vez mais central nas provas de residência em geral — vale revisar esse mecanismo em conjunto com o do resumo de hepatopatias.
- **Deficiência de ferro funcional na doença crônica**: agentes anti-hepcidina e ferro intravenoso de nova geração vêm sendo estudados para pacientes com doença renal crônica/insuficiência cardíaca e anemia refratária a ferro oral — tema emergente, ainda não cobrado pela banca.

## 🧠 Conceito e fisiopatologia

O eritrócito normal vive cerca de 120 dias; qualquer anemia reflete um desequilíbrio entre **produção** medular e **perda/destruição** periférica. A **contagem de reticulócitos** mede diretamente a resposta medular: reticulócitos baixos apontam para problema de produção (medula "não trabalha" ou não tem matéria-prima); reticulócitos altos apontam para perda ou destruição periférica com medula respondendo adequadamente.

Dentro das anemias hipoproliferativas, o **VCM** aponta a causa provável: microcitose sugere deficiência de ferro (síntese de hemoglobina limitada) ou talassemia (defeito estrutural da cadeia de globina); macrocitose sugere deficiência de B12/folato (síntese de DNA prejudicada, replicação nuclear atrasada em relação ao citoplasma — daí o núcleo "imaturo" nos precursores medulares, a megaloblastose); normocitose sugere doença crônica, aplasia ou infiltração medular.

Na **anemia de doença crônica**, citocinas inflamatórias (IL-6) estimulam a produção hepática de **hepcidina**, que degrada a ferroportina nos macrófagos e enterócitos, sequestrando o ferro dentro dos estoques (ferritina normal/alta) e impedindo sua liberação para a eritropoese — por isso o ferro sérico cai mesmo com estoques corporais preservados, e a TIBC cai porque o fígado, sob efeito inflamatório, reduz a síntese de transferrina.

Nas anemias **hemolíticas**, o ponto fisiopatológico central é distinguir hemólise **intravascular** (destruição dentro do vaso, com liberação direta de hemoglobina livre — hemoglobinemia, hemoglobinúria, queda de haptoglobina acentuada, hemossiderinúria se crônica) de **extravascular** (destruição pelo sistema reticuloendotelial, principalmente esplênico — esferocitose, a maioria das hemólises autoimunes). Esferocitose hereditária decorre de mutações em proteínas do citoesqueleto de membrana (espectrina, anquirina, banda 3), que tornam o eritrócito esférico e menos deformável — o baço, obrigado a espremer a hemácia por fendas estreitas, a destrói precocemente. G6PD deficiente priva a hemácia da via das pentoses-fosfato, que gera NADPH para neutralizar estresse oxidativo — sob desafio oxidativo, a hemoglobina se desnatura (corpúsculos de Heinz) e a membrana é lesada, gerando hemólise aguda. HPN nasce de uma mutação somática adquirida no gene **PIGA**, que impede a ancoragem de proteínas de membrana (CD55, CD59) que normalmente protegem a hemácia da ação do complemento — sem essas proteínas, o complemento lisa a hemácia continuamente, explicando tanto a hemólise intravascular quanto o estado pró-trombótico (ativação plaquetária e liberação de fatores procoagulantes mediada por complemento).

## 🩺 Quadro clínico

- **Geral (qualquer anemia):** fadiga, dispneia aos esforços, palidez cutaneomucosa, taquicardia compensatória; sintomas proporcionais tanto à magnitude quanto à velocidade de instalação.
- **Anemia de doença crônica:** sintomas da doença de base predominam (artrite, febre, emagrecimento); anemia costuma ser leve a moderada e normo/microcítica.
- **Aplasia medular:** manifestações das três linhagens afetadas — anemia (fadiga), leucopenia (infecções de repetição), trombocitopenia (gengivorragia, petéquias, equimoses) — sem visceromegalias (diferencial importante com leucemia/linfoma).
- **Deficiência de B12/anemia megaloblástica:** glossite (língua lisa e vermelha), queilite angular, e o achado que a distingue do folato — **neuropatia periférica e degeneração combinada subaguda da medula espinhal** (alteração de sensibilidade vibratória e proprioceptiva, ataxia).
- **G6PD:** paciente assintomático até exposição a gatilho oxidante — então icterícia aguda, colúria, dor lombar, fadiga em horas a dias após exposição.
- **Esferocitose:** anemia hemolítica crônica desde a infância/adulto jovem, esplenomegalia, colelitíase de repetição por bilirrubinato de cálcio, crises de agravamento com infecções (parvovírus B19 pode causar crise aplásica transitória).
- **HPN:** hemoglobinúria (clássica ao acordar, mas pode ser ausente), dor abdominal/lombar, disfagia (por espasmo esofágico relacionado ao consumo de óxido nítrico livre pela hemoglobina livre), e trombose venosa muitas vezes em sítio atípico.
- **Talassemia beta menor:** geralmente assintomática ou anemia leve, achado incidental em hemograma de rotina; talassemia maior (não coberta aqui, forma grave) cursa com anemia grave transfusão-dependente desde a infância.

## 🔎 Diagnóstico

**Passo 1 — reticulócitos.** Baixos → investigar produção (ferro, B12/folato, função renal/tireoidiana, biópsia de medula se pancitopenia). Altos → investigar hemólise/perda.

**Passo 2 — se hipoproliferativa, VCM.** Baixo → ferritina + TIBC + saturação de transferrina (ferropenia × doença crônica × talassemia, ver tabela). Alto → dosar B12 e folato séricos; se ambíguo, ácido metilmalônico (elevado só na deficiência de B12) e homocisteína (elevada em ambas).

**Passo 3 — se hemolítica, LDH + haptoglobina + bilirrubina indireta + esfregaço de sangue periférico.** O esfregaço é o exame mais custo-efetivo e mais cobrado pela banca:
- Esferócitos → esferocitose hereditária (Coombs negativo) ou hemólise autoimune (Coombs positivo) — o Coombs direto separa as duas.
- Esquizócitos → hemólise mecânica (valva, microangiopatia trombótica) — contexto clínico define a causa.
- Corpúsculos de Heinz/bite cells → deficiência de G6PD, confirmada por dosagem enzimática (idealmente **após** a crise, porque na fase aguda as células deficientes já foram destruídas e o resultado pode falsear normal).
- Sem achado morfológico específico + citopenias + trombose atípica → pesquisar HPN por **citometria de fluxo para CD55/CD59** (substituiu o antigo teste de Ham).

**Aplasia medular:** pancitopenia + reticulócitos baixos + biópsia de medula óssea hipocelular fecha o diagnóstico e também serve para excluir infiltração neoplásica.

## 🚨 Gravidade / classificação

- **Anemia hemolítica aguda com instabilidade hemodinâmica ou hemoglobina em queda rápida** exige internação e suporte transfusional independentemente da causa específica.
- **Aplasia medular grave** é definida por critérios de celularidade medular e contagem de citopenias (neutrófilos <500, plaquetas <20.000, reticulócitos corrigidos <1%) — determina indicação de transplante de medula óssea (paciente jovem, doador compatível) versus terapia imunossupressora (globulina antitimocítica + ciclosporina).
- **HPN com trombose estabelecida** muda a conduta para anticoagulação prolongada além do tratamento direcionado ao complemento.
- **G6PD:** gravidade proporcional ao grau de exposição oxidante e à variante enzimática (mediterrânea > africana em intensidade); hemólise maciça pode exigir suporte transfusional e monitorização renal (risco de lesão renal aguda por hemoglobinúria).

## 💊 Tratamento

- **Anemia de doença crônica:** tratar a doença de base; ferro só se houver ferropenia concomitante comprovada (ferritina muito baixa); eritropoetina em casos selecionados (ex.: doença renal crônica).
- **Aplasia medular:** suporte transfusional, evitar/afastar agente causal, **transplante alogênico de medula óssea** em paciente jovem com doador HLA-compatível (tratamento potencialmente curativo de escolha), ou **imunossupressão** (globulina antitimocítica + ciclosporina) quando transplante não é viável.
- **Deficiência de B12:** reposição parenteral (intramuscular) inicialmente, depois manutenção oral em altas doses ou intramuscular periódica conforme a causa (anemia perniciosa exige reposição vitalícia, pois a má absorção é permanente). **Sempre repor B12 antes/junto do folato** quando a deficiência é ambígua — repor só folato em quem tem B12 baixa pode corrigir a anemia mascarando a progressão da doença neurológica.
- **G6PD:** suporte na crise aguda (hidratação, transfusão se necessário), remoção do agente desencadeante; evitar reexposição a fármacos oxidantes conhecidos (dapsona, primaquina, sulfas, nitrofurantoína) e fava.
- **Esferocitose hereditária:** ácido fólico profilático (demanda aumentada pela hemólise crônica); **esplenectomia** em casos moderados a graves (reduz hemólise, pois remove o principal sítio de destruição) — idealmente após os 5-6 anos de idade e com vacinação prévia para germes encapsulados (pneumococo, meningococo, Haemophilus) pelo risco de sepse fulminante pós-esplenectomia.
- **HPN:** inibidores do complemento (eculizumabe/ravulizumabe, e mais recentemente inibidores de C3/fator B) são o tratamento direcionado; anticoagulação se trombose estabelecida; transplante de medula em casos associados a falência medular grave.
- **Hemólise mecânica por prótese valvar:** reposição de ferro se houver ferropenia associada; avaliar a prótese (disfunção, deiscência de anel) — hemólise significativa e progressiva pode indicar necessidade de reintervenção cirúrgica.
- **Talassemia menor:** geralmente não requer tratamento específico; orientação genética é o ponto mais importante (risco de talassemia maior em descendência se ambos os pais forem portadores); **não suplementar ferro** de rotina (o paciente já tem tendência a ferritina normal/alta).

## 🔀 Diagnóstico diferencial

| Causa | VCM | Reticulócitos | Ferro sérico | TIBC | Ferritina | Achado extra |
| --- | --- | --- | --- | --- | --- | --- |
| Ferropriva | Baixo | Baixo | Baixo | **Alta** | Baixa | — |
| Doença crônica | Normal/baixo | Baixo | Baixo | **Baixa** | Normal/alta | Contexto inflamatório |
| Talassemia menor | **Muito baixo** p/ anemia leve | Normal/baixo | Normal | Normal | Normal/alta | HbA2 elevada |
| Megaloblástica (B12) | Alto | Baixo | — | — | — | Neuropatia, ácido metilmalônico alto |
| Aplasia medular | Normal/alto | Baixo | — | — | — | Pancitopenia, sem visceromegalia |
| Hemólise (geral) | Normal/alto | **Alto** | — | — | — | LDH↑, haptoglobina↓, bilirrubina indireta↑ |

## 🔤 Mnemônicos

- **TIBC ao contrário da ferritina:** na ferropenia "o corpo grita por ferro" — TIBC sobe; na doença crônica "o corpo esconde o ferro" — TIBC desce. Pensar em "TIBC alta pede ferro, TIBC baixa esconde ferro" ajuda a não trocar as duas na hora da prova.
- **B12 = neurológico; folato = só sangue.** Se a vinheta tiver parestesia/alteração de propriocepção junto com macrocitose, é B12, nunca só folato.

## 📋 Tabela de revisão

| Entidade | Coombs | Achado morfológico | Confirmação |
| --- | --- | --- | --- |
| Esferocitose hereditária | Negativo | Esferócitos | Curva de fragilidade osmótica |
| Hemólise autoimune | Positivo | Esferócitos | Coombs direto |
| G6PD | Negativo | Corpúsculos de Heinz, bite cells | Dosagem enzimática (pós-crise) |
| HPN | Negativo | Inespecífico | Citometria de fluxo CD55/CD59 |
| Hemólise mecânica | Negativo | Esquizócitos | Contexto (prótese, MAT) |

## 📚 Referências essenciais

- ASH Clinical Practice Guidelines — investigação de anemia e de hemólise.
- WHO Classification of Tumours of Haematopoietic and Lymphoid Tissues — critérios de síndromes mielodisplásicas/aplasia (contextualização diagnóstica).
- International PNH Interest Group — diagnóstico e manejo da hemoglobinúria paroxística noturna.
- British Society for Haematology — Guidelines for the Diagnosis and Management of Hereditary Spherocytosis.
`;

export default content.trim();
