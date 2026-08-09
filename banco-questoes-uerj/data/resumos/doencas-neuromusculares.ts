/**
 * Resumo — Neurologia · Doenças neuromusculares.
 *
 * Cobre as entidades do assunto no corpus: miastenia gravis, síndrome de
 * Guillain-Barré (incluindo variante de Miller-Fisher) e paralisia facial
 * periférica (idiopática/de Bell e síndrome de Ramsay Hunt).
 */
const content = `
## 🎯 Essencial

- **Miastenia gravis:** fraqueza **flutuante e fatigável** (piora ao longo do dia/com esforço repetido), ptose e diplopia (musculatura ocular quase sempre envolvida), fraqueza proximal de membros. Confirmação: **anticorpo antirreceptor de acetilcolina**.
- **Todo paciente com miastenia gravis deve fazer TC de tórax para procurar timoma** — mesmo com timo normal na imagem, **timectomia eletiva é recomendada** em pacientes com anticorpo antirreceptor de acetilcolina positivo e doença generalizada (não só quando há timoma), com base no ensaio MGTX.
- **Síndrome de Guillain-Barré:** fraqueza **ascendente, simétrica, arreflexa**, de instalação em dias, frequentemente após infecção prévia (respiratória ou gastrointestinal — *Campylobacter jejuni* é o gatilho clássico). Tratamento: **imunoglobulina IV ou plasmaférese** (não corticoide isolado — não tem benefício comprovado no GBS clássico).
- **Monitorizar a função respiratória é prioridade absoluta no GBS** — capacidade vital forçada em queda ou hipercapnia na gasometria (retenção de CO2, e não hipoxemia isolada) indica fraqueza da musculatura respiratória e necessidade de **intubação eletiva antes da falência franca**.
- **Variante de Miller-Fisher do GBS: tríade oftalmoplegia + ataxia + arreflexia**, sem o padrão ascendente clássico de fraqueza de membros — associada ao anticorpo **anti-GQ1b**.
- **Paralisia facial periférica idiopática (de Bell)** acomete toda a hemiface (testa incluída, ao contrário da paralisia facial central) — tratamento com **prednisona ± aciclovir/valaciclovir**, iniciado precocemente (idealmente até 72h).
- **Sinais de alarme na paralisia facial periférica que exigem investigação de imagem (RM) em vez de tratar como Bell:** instalação muito lenta/progressiva ao longo de semanas, outros déficits neurológicos associados (ex.: perda de acuidade visual), ausência de recuperação esperada — sugerem lesão estrutural (tumor, por exemplo), não paralisia idiopática.
- **Síndrome de Ramsay Hunt:** paralisia facial periférica + vesículas no conduto auditivo externo (reativação de herpes-zóster no gânglio geniculado) + otalgia + hipoacusia/vertigem possíveis. Em imunossuprimido, tratamento é **hospitalar com aciclovir venoso**, não ambulatorial.

## 💎 Pearls

- **Miastenia gravis piora com fatiga muscular repetida e ao longo do dia** — testar clinicamente pedindo movimentos repetidos (ex.: olhar para cima sustentado) reproduz/piora a ptose, um achado à beira do leito muito característico.
- **Crise miastênica** (fraqueza respiratória aguda) pode ser desencadeada por infecção, cirurgia, certos medicamentos (aminoglicosídeos, betabloqueadores, magnésio) — sempre perguntar sobre medicações novas em piora aguda de miastenia conhecida.
- **A gasometria no GBS costuma mostrar hipercapnia mais precocemente que hipoxemia** — a fraqueza da musculatura respiratória compromete primeiro a ventilação (retenção de CO2) antes de a troca gasosa falhar de forma franca; esperar hipoxemia para intubar é tardio.
- **O líquor no GBS mostra dissociação proteíno-citológica** (proteína alta, celularidade normal/discretamente elevada) — típica a partir da primeira/segunda semana, podendo ser normal nos primeiros dias.
- **Ramsay Hunt tem pior prognóstico de recuperação do que a paralisia de Bell idiopática** — a lesão do gânglio geniculado pelo vírus costuma ser mais extensa.
- **A paralisia facial periférica bilateral simultânea é rara e levanta suspeita de causa sistêmica** (Guillain-Barré, sarcoidose/síndrome de Heerfordt, doença de Lyme) — não tratar como Bell bilateral sem investigar.
- **Timectomia no MGTX mostrou benefício mesmo em pacientes sem timoma visível na imagem** — esse é o ponto conceitual que a UERJ mais gosta de testar (contraintuitivo: "timo normal" não significa "não operar").

## ⚠️ Pitfalls

- **Tratar paralisia facial periférica sem investigar sinais de alarme** (perda de acuidade visual, outros déficits associados, evolução muito lenta) — nesses casos a conduta correta é RM de crânio, não prednisona empírica.
- **Esperar recuperação espontânea completa antes de considerar timectomia em miastenia com timo "normal" na TC** — a decisão de operar não depende de achado estrutural, e sim do perfil de anticorpo e da forma generalizada da doença.
- **Usar corticoide isolado como tratamento de primeira linha do GBS** — sem eficácia comprovada nesse contexto (diferente de outras neuropatias inflamatórias crônicas, como a CIDP, onde corticoide tem papel).
- **Aguardar hipoxemia para decidir intubação no GBS** — a hipercapnia progressiva e a queda da capacidade vital forçada são os sinais que devem antecipar a intubação eletiva, evitando intubação de emergência em paciente já em falência respiratória.
- **Confundir a variante de Miller-Fisher com síndrome cerebelar isolada** — a presença de oftalmoplegia e arreflexia distingue de uma ataxia puramente cerebelar.
- **Tratar Ramsay Hunt ambulatorialmente em paciente imunossuprimido** — a gravidade potencial (disseminação) exige internação e aciclovir intravenoso, diferente do manejo ambulatorial habitual em imunocompetentes.

## 📝 Como a UERJ cobra

**Doenças neuromusculares é #12 do ranking (6 questões, 2,4% do corpus)**, distribuído igualmente entre miastenia gravis, GBS e paralisia facial periférica (2 cada) — os três tópicos têm chance real e semelhante de reaparecer.

- **Miastenia gravis** (2021 Q24, 2023 Q49) testou tanto a **conduta pós-diagnóstico** (timectomia mesmo com timo normal, citando o ensaio MGTX) quanto o **exame confirmatório** (anticorpo antirreceptor de acetilcolina) — ambas exigem conhecimento além do reconhecimento clínico.
- **Guillain-Barré** (2022 Q10, 2025 Q25) cobrou o **manejo respiratório** (intubação orientada por gasometria, não por saturação) e a **variante de Miller-Fisher** — a banca gosta de ir além da forma clássica.
- **Paralisia facial periférica** (2021 Q23, 2022 Q13) explorou os dois extremos: quando **investigar com imagem** (sinais de alarme) e quando reconhecer **Ramsay Hunt em imunossuprimido** exigindo internação — os dois cenários em que "tratar como Bell simples" seria erro.

## 🆕 Atualização

- **Eculizumabe e outros inibidores do complemento**, além de **efgartigimod** (bloqueador do receptor neonatal de Fc, reduzindo IgG patogênico), ampliaram as opções terapêuticas para miastenia gravis refratária, complementando piridostigmina, imunossupressores e imunoglobulina/plasmaférese — ainda não cobrado pela UERJ, mas representa mudança relevante no arsenal para doença generalizada refratária.
- No GBS, guias mais recentes reforçam a **monitorização seriada da capacidade vital forçada** (não pontual) como a ferramenta mais confiável para antecipar necessidade de suporte ventilatório, consolidando a prática já cobrada pela banca.
- O reconhecimento de **variantes regionais do GBS** (faríngeo-cérvico-braquial, paraparética, entre outras) além da forma clássica ascendente e da Miller-Fisher tem ganhado espaço na literatura — amplia o espectro de apresentações a considerar diante de fraqueza aguda de padrão atípico.

## 🧠 Conceito e fisiopatologia

**Miastenia gravis** é uma doença autoimune em que autoanticorpos (mais comumente contra o receptor de acetilcolina, menos frequentemente contra MuSK ou LRP4) atacam a junção neuromuscular pós-sináptica, reduzindo o número de receptores funcionais disponíveis. Como cada estímulo nervoso sucessivo libera menos acetilcolina disponível para receptores já reduzidos, a transmissão neuromuscular falha progressivamente com o uso repetido do músculo — daí a fatigabilidade característica, que piora ao longo do dia e melhora com repouso. A associação com timoma/hiperplasia tímica reflete o papel do timo na tolerância imunológica a autoantígenos, e sua remoção reduz a produção de autoanticorpos mesmo quando não há tumor estruturalmente visível.

**Síndrome de Guillain-Barré** é uma polirradiculoneuropatia autoimune desencadeada, na maioria dos casos, por mimetismo molecular após infecção (*Campylobacter jejuni* é o gatilho mais estudado): anticorpos produzidos contra antígenos do patógeno reagem cruzadamente com gangliosídeos da mielina dos nervos periféricos, causando desmielinização (forma clássica, AIDP) ou lesão axonal direta (variantes axonais). A progressão ascendente reflete o acometimento inicialmente mais proeminente das raízes nervosas mais longas/distais. A variante de Miller-Fisher está associada especificamente ao anticorpo **anti-GQ1b**, um gangliosídeo enriquecido nos nervos oculomotores e nas fibras Ia dos fusos musculares — o que explica por que essa variante afeta preferencialmente a movimentação ocular e os reflexos, poupando relativamente a força de membros.

**Paralisia facial periférica** decorre de lesão do nervo facial distal ao núcleo pontino, acometendo toda a hemiface ipsilateral (incluindo a testa, cuja inervação é bilateral a partir do córtex — por isso a paralisia central poupa a testa e a periférica não). A forma idiopática (de Bell) é atribuída, na maioria dos casos, a reativação de herpes simples no gânglio geniculado, com edema e compressão do nervo dentro do canal facial ósseo estreito. Na **síndrome de Ramsay Hunt**, o agente é o vírus varicela-zóster reativado no mesmo gânglio, causando lesão mais extensa (daí o pior prognóstico) e manifestando as vesículas características no conduto auditivo externo, território sensitivo compartilhado.

## 🩺 Quadro clínico

- **Miastenia gravis:** ptose, diplopia, disfagia, disartria, fraqueza proximal de membros, todos com **piora ao longo do dia e com esforço repetido** e melhora com repouso.
- **Guillain-Barré:** fraqueza ascendente simétrica, arreflexia, parestesias distais, podendo evoluir para insuficiência respiratória e disautonomia (arritmias, labilidade pressórica); Miller-Fisher: oftalmoplegia, ataxia de marcha, arreflexia, sem o padrão ascendente clássico.
- **Paralisia facial periférica:** desvio da comissura labial para o lado são, incapacidade de fechar o olho e franzir a testa do lado acometido, alteração do paladar (2/3 anteriores da língua), hiperacusia possível.
- **Ramsay Hunt:** paralisia facial periférica + otalgia intensa + vesículas no conduto auditivo externo/pavilhão + possível hipoacusia e vertigem.

## 🔎 Diagnóstico

- **Miastenia gravis:** anticorpo antirreceptor de acetilcolina (positivo na maioria dos casos generalizados); eletroneuromiografia com estimulação repetitiva (decremento) ou fibra única em casos duvidosos; TC de tórax para avaliar timo em todos os pacientes.
- **Guillain-Barré:** clínico + líquor (dissociação proteíno-citológica) + eletroneuromiografia (padrão desmielinizante ou axonal); monitorização seriada da capacidade vital forçada e força muscular para antecipar necessidade ventilatória.
- **Paralisia facial periférica:** diagnóstico clínico na maioria dos casos; RM de crânio/conduto auditivo interno reservada para sinais de alarme (progressão lenta, outros déficits, ausência de melhora esperada, recorrência).

## 🚨 Gravidade / classificação

- **Crise miastênica** (insuficiência respiratória aguda por fraqueza da musculatura respiratória) é emergência — suporte ventilatório e tratamento agudo (imunoglobulina/plasmaférese) imediatos.
- **GBS:** gravidade acompanhada por capacidade vital forçada seriada (<20 mL/kg ou queda rápida indica necessidade de suporte ventilatório iminente), força muscular (escala MRC) e disautonomia associada — o escore de Erasmus GBS ajuda a prever necessidade de ventilação mecânica.
- **House-Brackmann** classifica a gravidade/grau de recuperação da paralisia facial periférica, orientando prognóstico e necessidade de reavaliação especializada em casos que não recuperam como esperado.

## 💊 Tratamento

- **Miastenia gravis:** piridostigmina (sintomático, inibidor da acetilcolinesterase) como base; imunossupressores (corticoide, azatioprina) para controle de doença; **timectomia eletiva** em anticorpo antirreceptor de acetilcolina positivo com doença generalizada, independentemente de timoma visível; imunoglobulina IV/plasmaférese em crise miastênica.
- **Guillain-Barré:** **imunoglobulina IV ou plasmaférese** (eficácia equivalente, escolha por disponibilidade/perfil do paciente) — não associar as duas nem usar corticoide isolado; suporte ventilatório antecipado conforme monitorização respiratória; fisioterapia e reabilitação precoces.
- **Paralisia facial periférica (Bell):** **prednisona** iniciada precocemente (idealmente até 72h do início), associação de aciclovir/valaciclovir considerada em casos mais graves; proteção ocular (lágrima artificial, oclusão noturna) enquanto não há fechamento palpebral completo.
- **Ramsay Hunt:** **aciclovir venoso + corticoide**, com internação especialmente em imunossuprimidos, pelo risco de disseminação e pelo pior prognóstico de recuperação sem tratamento precoce e adequado.

## 🔀 Diagnóstico diferencial

| Achado | Miastenia gravis | Guillain-Barré | Botulismo |
| --- | --- | --- | --- |
| Padrão de fraqueza | Fatigável, flutuante | Ascendente, fixa | Descendente |
| Reflexos | Preservados | Abolidos | Abolidos/reduzidos |
| Sensibilidade | Preservada | Pode haver parestesia | Preservada |
| Confirmação | Anticorpo antirreceptor de ACh | Líquor + ENMG | Contexto epidemiológico + toxina |

## 📋 Tabela de revisão

| Doença | Achado-chave | Confirmação | Tratamento |
| --- | --- | --- | --- |
| Miastenia gravis | Fraqueza fatigável, ptose | Anticorpo antirreceptor de ACh | Piridostigmina + timectomia |
| Guillain-Barré | Fraqueza ascendente arreflexa | Líquor + ENMG | Ig IV ou plasmaférese |
| Miller-Fisher | Oftalmoplegia + ataxia + arreflexia | Anti-GQ1b | Ig IV ou plasmaférese |
| Paralisia de Bell | Hemiface completa, sem sinal de alarme | Clínico | Prednisona ± antiviral |
| Ramsay Hunt | Paralisia facial + vesículas no CAE | Clínico | Aciclovir venoso + corticoide |

## 📚 Referências essenciais

- Ensaio MGTX — Timectomia em Miastenia Gravis sem Timoma (NEJM 2016, citado explicitamente pela UERJ em 2021).
- AAN Practice Guideline — Guillain-Barré Syndrome: Diagnosis and Management.
- AAN Practice Guideline — Bell's Palsy: Steroids and Antivirals.
- Myasthenia Gravis Foundation of America — International Consensus Guidance for Management of Myasthenia Gravis.
`;

export default content.trim();
