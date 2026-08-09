/**
 * Resumo — Infectologia · Doenças tropicais e negligenciadas.
 *
 * Cobre as entidades do assunto no corpus: tétano, doença da arranhadura do
 * gato (Bartonella henselae), febre maculosa, leptospirose, estrongiloidíase
 * disseminada e amebíase intestinal.
 */
const content = `
## 🎯 Essencial

- **Tétano:** ferida contaminada (frequentemente com terra/objeto cortante) + **trismo e rigidez muscular progressiva**, paciente **lúcido e orientado** (toxina não afeta o SNC central de forma a alterar consciência). Antibiótico de escolha: **metronidazol** (não penicilina — que tem efeito GABA-antagonista teórico e é inferior em estudos).
- **Tétano exige tríade terapêutica: antibiótico + imunoglobulina antitetânica (neutraliza toxina livre) + desbridamento da ferida** — nenhuma das três substitui as outras duas.
- **Leptospirose (síndrome de Weil):** febre + mialgia intensa (especialmente panturrilhas) + **icterícia rubínica** + disfunção renal + hemorragia (hemoptise/hemoptoicos) em contexto de exposição a água/lama contaminada (enchente, trabalho insalubre). Achado laboratorial chave: **bilirrubina direta muito elevada com transaminases pouco alteradas** (dissociação característica).
- **Febre maculosa brasileira (*Rickettsia rickettsii*):** rash que começa em **punhos/tornozelos e progride centripetamente**, evoluindo de macular para petequial, com **acometimento palmoplantar** — tratamento é **doxiciclina, sempre, mesmo em criança e gestante**, e não deve esperar confirmação sorológica diante de suspeita clínica forte (mortalidade alta se atrasado).
- **Doença da arranhadura do gato (*Bartonella henselae*):** linfadenopatia regional (frequentemente epitroclear/axilar) que evolui com supuração/flutuação, em paciente com contato com gatos (sobretudo filhotes) — diagnóstico por **PCR do aspirado ganglionar**.
- **Estrongiloidíase disseminada (síndrome de hiperinfecção):** ocorre em **imunossuprimido** (corticoide crônico é o gatilho clássico) — larvas migram maciçamente, carreando bactérias entéricas para corrente sanguínea, causando **sepse por Gram-negativos e/ou meningite por bacilos entéricos**. Tratamento: **ivermectina** associada ao antibiótico dirigido à bactéria translocada.
- **Sempre rastrear e tratar estrongiloidíase antes de iniciar imunossupressão crônica** (corticoide prolongado, quimioterapia) em paciente com fator de risco epidemiológico — é a forma de prevenir a hiperinfecção.
- **Amebíase intestinal em imunossuprimido:** diarreia mucossanguinolenta com **poucos leucócitos fecais** (a invasão tecidual da ameba não gera a resposta neutrofílica intensa típica de bactérias invasivas) — retossigmoidoscopia mostra úlceras "em botão de colarinho". Tratamento: **metronidazol seguido de agente luminal** (para erradicar cistos residuais).

## 💎 Pearls

- **A dissociação bilirrubina alta/transaminases discretamente alteradas** é a pista laboratorial mais discriminatória de leptospirose — em hepatites virais e outras causas de icterícia hepatocelular, as transaminases costumam estar muito mais elevadas proporcionalmente.
- **Tanto leptospirose quanto febre maculosa podem cursar com plaquetopenia, disfunção renal e icterícia** — o padrão do rash (ausente/inespecífico na leptospirose; centrípeto com acometimento palmoplantar na febre maculosa) é o que discrimina as duas na prova.
- **O trismo do tétano é um espasmo dos masseteres, não uma limitação articular** — testar a abertura da boca ao exame é simples e direto para reforçar a suspeita.
- **Vibrio vulnificus** (não incluído neste corte, mas mencionado no contexto de hemocromatose) e **Bartonella** compartilham o padrão de exposição zoonótica/ambiental — sempre perguntar sobre contato com animais e atividades ao ar livre nas vinhetas de doenças tropicais.
- **Corticoide sistêmico é o principal fator de risco identificável para hiperinfecção por estrongiloides** — qualquer paciente que vá receber corticoide prolongado com história epidemiológica compatível (área endêmica, sintomas gastrointestinais vagos) deveria ser rastreado antes.
- **Em amebíase, a biópsia/retossigmoidoscopia mostrando úlceras rasas com poucos neutrófilos no exame de fezes é o padrão que separa de shigelose/outras colites bacterianas invasivas**, que costumam ter mais polimorfonucleares fecais.

## ⚠️ Pitfalls

- **Usar penicilina cristalina como primeira escolha no tétano** — metronidazol é preferido por eficácia e por evitar o efeito GABA-antagonista teórico da penicilina, que pode piorar os espasmos.
- **Tratar só a ferida ou só dar antibiótico no tétano sem imunoglobulina antitetânica** — a toxina já ligada ao tecido nervoso não é neutralizada pelo antibiótico; a imunoglobulina neutraliza a toxina circulante ainda não fixada.
- **Confundir leptospirose com febre maculosa** só pela presença de icterícia e disfunção renal — sempre olhar o padrão do rash e a história epidemiológica (água de enchente/roedores versus carrapatos/área rural com capim).
- **Atrasar doxiciclina em febre maculosa esperando sorologia** — a sorologia demora a positivar (é retrospectiva na maioria dos casos) e o atraso terapêutico aumenta muito a mortalidade; trate empiricamente diante de suspeita clínica compatível.
- **Diagnosticar meningite bacteriana "comum" em paciente imunossuprimido com bacilos Gram-negativos no líquor sem pensar em estrongiloidíase disseminada como fonte** — a hiperinfecção por estrongiloides carreia bactérias entéricas para múltiplos sítios, incluindo SNC.
- **Tratar amebíase só com metronidazol sem associar um amebicida luminal (teclozana, paromomicina, etofamida)** — o metronidazol trata a forma invasiva tecidual, mas não erradica cistos intraluminais residuais, permitindo recidiva/transmissão.

## 📝 Como a UERJ cobra

**Doenças tropicais e negligenciadas é #13 do ranking (6 questões, 2,4% do corpus)**, com cada uma das 6 entidades aparecendo **exatamente uma vez** — não há repetição de subtema, mas o padrão de vinheta é consistente: **história epidemiológica detalhada (exposição, atividade, animal, local) como pista central do diagnóstico**, quase sempre mais importante que o quadro clínico isolado.

- **Tétano** (2021 Q20) testou a escolha correta do antibiótico (metronidazol sobre penicilina), item que costuma ser mal respondido por associação automática "infecção = penicilina".
- **Febre maculosa** (2024 Q12) e **leptospirose** (2024 Q23) apareceram na mesma prova, num convite implícito a diferenciá-las pelo padrão de rash e pela dissociação bilirrubina/transaminases.
- **Doença da arranhadura do gato** (2023 Q12) e **amebíase** (2025 Q15) testaram o **próximo exame diagnóstico correto** diante de achados histopatológicos/laboratoriais já descritos — questões de raciocínio investigativo, não só reconhecimento de nome de doença.
- **Estrongiloidíase disseminada** (2024 Q49) teve uma das vinhetas mais complexas do banco (lúpus + imunossupressão + sepse + líquor alterado), testando a associação entre imunossupressão e translocação bacteriana pela hiperinfecção.

## 🆕 Atualização

- O **Guia de Vigilância em Saúde do Ministério da Saúde** (referenciado diretamente em várias questões deste assunto) é atualizado periodicamente com critérios de notificação compulsória e protocolos de manejo — tétano, leptospirose e febre maculosa são doenças de notificação compulsória imediata no Brasil, reforçando a importância de reconhecimento precoce também para vigilância epidemiológica, não só para o paciente individual.
- O uso de **ivermectina em dose única versus esquemas prolongados** para estrongiloidíase não complicada segue sendo debatido, mas a hiperinfecção/disseminação exige tratamento prolongado (geralmente até resolução dos sintomas e/ou negativação parasitológica repetida), reforçando a diferença de manejo entre a forma simples e a disseminada.
- **Doxiciclina em crianças** para riquetsioses teve sua segurança reforçada pelas evidências mais recentes (o risco de manchamento dentário é dose-dependente e cumulativo, insignificante em cursos curtos) — a resistência histórica a usar doxiciclina em pediatria vem sendo ativamente desconstruída nas diretrizes atuais, exatamente o racional já cobrado pela UERJ.

## 🧠 Conceito e fisiopatologia

**Tétano** é causado pela toxina tetanospasmina, produzida por *Clostridium tetani* (bactéria anaeróbia esporulada, presente no solo), que migra retrogradamente pelos axônios motores até o SNC e bloqueia a liberação de neurotransmissores inibitórios (GABA e glicina) nos interneurônios espinhais — sem inibição, os neurônios motores disparam de forma descontrolada, gerando os espasmos musculares generalizados e o trismo característico, sem alterar o nível de consciência (a toxina não afeta diretamente o córtex).

**Leptospirose** é causada por espiroquetas do gênero *Leptospira*, transmitidas por contato com água/solo contaminados pela urina de roedores (e outros reservatórios). A bactéria invade a corrente sanguínea e lesa diretamente o endotélio vascular em múltiplos órgãos, explicando o espectro de manifestações — a icterícia rubínica reflete disfunção hepatocelular associada a hemólise leve, e a dissociação bilirrubina alta/transaminases pouco elevadas reflete lesão predominantemente colestática/vascular, não necrose hepatocitária maciça como nas hepatites virais.

**Febre maculosa brasileira** é causada por *Rickettsia rickettsii*, transmitida pela picada do carrapato-estrela (*Amblyomma* spp.), que invade e lesa diretamente as células endoteliais de pequenos vasos em todo o corpo — a vasculite disseminada explica o rash progressivo, o edema, e as complicações graves (hemorragia, disfunção renal/hepática, choque) quando o tratamento é tardio.

**Doença da arranhadura do gato** é causada por *Bartonella henselae*, transmitida por arranhadura/mordida de gato (especialmente filhotes) ou pela pulga do gato — a bactéria causa linfadenite regional granulomatosa, com necrose central e formação de microabscessos, explicando a evolução para supuração observada em parte dos casos.

**Estrongiloidíase disseminada** ocorre porque *Strongyloides stercoralis* tem um ciclo de autoinfecção único entre os helmintos — larvas podem completar o ciclo dentro do próprio hospedeiro sem sair pelas fezes, mantendo infecção crônica de baixo grau por décadas. Sob imunossupressão (especialmente corticoide, que acelera a maturação larvária), esse ciclo se acelera descontroladamente, e as larvas migrando em massa pelo intestino e pulmão carreiam bactérias da flora entérica para a corrente sanguínea, causando sepse polimicrobiana e podendo semear o SNC.

**Amebíase invasiva** é causada por *Entamoeba histolytica*, que invade a mucosa colônica formando úlceras características em "botão de colarinho" (base larga sob mucosa relativamente preservada) — a resposta inflamatória local é predominantemente linfomonocitária/discreta em neutrófilos, diferente de patógenos bacterianos invasivos clássicos.

## 🩺 Quadro clínico

- **Tétano:** trismo, riso sardônico, rigidez muscular generalizada, espasmos dolorosos desencadeados por estímulos mínimos, opistótono em casos graves, sem alteração do nível de consciência.
- **Leptospirose:** febre alta, mialgia intensa (panturrilhas), cefaleia, hiperemia conjuntival; forma grave (síndrome de Weil): icterícia rubínica, disfunção renal, hemorragia pulmonar (hemoptoicos a hemoptise maciça).
- **Febre maculosa:** febre, cefaleia, mialgia, rash macular evoluindo para petequial iniciando em extremidades e progredindo centripetamente com acometimento palmoplantar, podendo evoluir para toxemia, icterícia, disfunção de múltiplos órgãos.
- **Doença da arranhadura do gato:** linfadenopatia regional dolorosa, eritematosa, podendo supurar; febre baixa, mal-estar; forma disseminada rara (neurorretinite, encefalopatia) em imunocomprometidos.
- **Estrongiloidíase disseminada:** sintomas gastrointestinais (diarreia, dor abdominal), respiratórios (tosse, dispneia), cutâneos (púrpura/petéquias por migração larvária), e sinais de sepse/meningite pela translocação bacteriana associada.
- **Amebíase intestinal:** diarreia mucossanguinolenta, cólicas abdominais, tenesmo, geralmente sem febre alta; forma extraintestinal (abscesso hepático amebiano) cursa com dor em hipocôndrio direito e febre.

## 🔎 Diagnóstico

- **Tétano:** clínico — não há exame laboratorial confirmatório de rotina; a história de ferida + quadro clínico característico basta para o diagnóstico e início do tratamento.
- **Leptospirose:** sorologia (ELISA IgM, microaglutinação como referência), PCR nos primeiros dias; alterações laboratoriais de apoio (leucocitose com desvio, plaquetopenia, elevação de CPK, padrão colestático de bilirrubina).
- **Febre maculosa:** clínico + epidemiológico (não esperar sorologia para tratar); sorologia (imunofluorescência indireta) confirma retrospectivamente, com soroconversão entre amostras pareadas.
- **Doença da arranhadura do gato:** PCR do material de punção do linfonodo é o exame de maior rendimento; sorologia como apoio, mas pode ser negativa na fase inicial.
- **Estrongiloidíase disseminada:** identificação de larvas em escarro, aspirado gástrico, líquor ou fezes (repetidas, pois a eliminação é intermitente); hemoculturas frequentemente positivas para bactérias entéricas (bacteremia polimicrobiana).
- **Amebíase:** exame parasitológico de fezes (pode não diferenciar *E. histolytica* de *E. dispar*, não patogênica), antígeno fecal ou PCR são mais específicos; retossigmoidoscopia com biópsia das úlceras característica quando há dúvida diagnóstica.

## 🚨 Gravidade / classificação

- **Tétano** é graduado pela intensidade dos espasmos e comprometimento respiratório (escala de Ablett) — casos graves exigem sedação profunda, bloqueio neuromuscular e ventilação mecânica em UTI.
- **Leptospirose grave (síndrome de Weil)** com disfunção renal, hemorragia pulmonar maciça ou choque exige suporte intensivo, incluindo diálise e ventilação mecânica quando indicado.
- **Febre maculosa** não tratada precocemente tem mortalidade elevada (pode ultrapassar 30-40% em séries históricas) — a janela terapêutica é curta e a decisão de tratar empiricamente diante de suspeita é o fator mais determinante de sobrevida.
- **Estrongiloidíase disseminada** tem mortalidade alta mesmo tratada, pela sepse polimicrobiana associada — quanto mais precoce o reconhecimento e a ivermectina, melhor o prognóstico.

## 💊 Tratamento

- **Tétano:** **metronidazol** (antibiótico de escolha) + **imunoglobulina antitetânica** (neutraliza toxina circulante) + desbridamento cirúrgico da ferida + controle dos espasmos (benzodiazepínicos, sulfato de magnésio, sedação profunda em casos graves) + suporte ventilatório se necessário; vacinação (dT/dTpa) sempre indicada após o episódio, pois a doença não confere imunidade duradoura.
- **Leptospirose:** **penicilina cristalina ou ceftriaxona** nas formas graves (doxiciclina em formas leves ambulatoriais); suporte para disfunção renal (incluindo diálise se necessário) e hemorragia.
- **Febre maculosa:** **doxiciclina** — sempre, independentemente de idade ou gestação, iniciada empiricamente diante de suspeita clínica compatível, sem aguardar confirmação sorológica.
- **Doença da arranhadura do gato:** azitromicina acelera a resolução da linfadenopatia em casos selecionados; a maioria dos casos imunocompetentes resolve espontaneamente; drenagem da adenite supurada pode ser necessária para alívio sintomático.
- **Estrongiloidíase disseminada:** **ivermectina** (frequentemente prolongada até resolução) + antibioticoterapia de amplo espectro dirigida às bactérias entéricas translocadas (cobertura para Gram-negativos, incluindo SNC se houver meningite associada); redução da imunossupressão de base sempre que possível.
- **Amebíase intestinal invasiva:** **metronidazol** (fase tecidual/invasiva) seguido de **agente luminal** (teclozana, paromomicina ou etofamida) para erradicar cistos residuais e prevenir recidiva/transmissão.

## 🔀 Diagnóstico diferencial

| Doença | Rash/lesão característica | Exposição típica | Tratamento |
| --- | --- | --- | --- |
| Leptospirose | Ausente ou inespecífico; icterícia rubínica | Água/lama de enchente, roedores | Penicilina/ceftriaxona (grave) |
| Febre maculosa | Centrípeto, palmoplantar, petequial | Carrapatos, área rural | Doxiciclina |
| Doença da arranhadura do gato | Linfadenopatia supurativa regional | Contato com gato/filhote | Suporte ± azitromicina |

## 📋 Tabela de revisão

| Doença | Achado-chave | Confirmação | 1ª linha |
| --- | --- | --- | --- |
| Tétano | Trismo + rigidez, consciência preservada | Clínico | Metronidazol + Ig antitetânica |
| Leptospirose | Mialgia + icterícia rubínica + BD alta | Sorologia/PCR | Penicilina/ceftriaxona |
| Febre maculosa | Rash centrípeto palmoplantar | Clínico-epidemiológico | Doxiciclina |
| Arranhadura do gato | Linfadenite supurativa | PCR do aspirado | Suporte/azitromicina |
| Estrongiloidíase disseminada | Imunossupressão + sepse Gram-neg | Parasitológico seriado | Ivermectina + ATB |
| Amebíase | Diarreia mucossanguinolenta, poucos PMN | Antígeno/PCR fecal | Metronidazol + luminal |

## 📚 Referências essenciais

- Guia de Vigilância em Saúde — Ministério da Saúde (citado explicitamente pela UERJ para tétano, febre maculosa e leptospirose).
- CDC Clinical Guidance — Rocky Mountain Spotted Fever and Other Rickettsioses.
- IDSA Clinical Practice Guideline — Strongyloidiasis.
- WHO Guidelines — Amoebiasis Diagnosis and Treatment.
`;

export default content.trim();
