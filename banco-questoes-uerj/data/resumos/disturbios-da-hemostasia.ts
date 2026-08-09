/**
 * Resumo — Hematologia · Distúrbios da hemostasia.
 *
 * Cobre as entidades do assunto no corpus: coagulação intravascular
 * disseminada (CIVD), púrpura trombocitopênica trombótica (PTT), síndrome
 * hemolítico-urêmica (SHU) — incluindo a forma atípica —, hemofilia
 * adquirida e trombocitopenia imune (PTI) secundária.
 */
const content = `
## 🎯 Essencial

- **Primeira pergunta diante de sangramento + trombocitopenia: existe coagulopatia associada (TAP/PTTa alargados) ou é só plaquetária?** CIVD altera **TAP e PTTa** (consumo de fatores de coagulação); PTT, SHU e PTI classicamente **não alteram TAP/PTTa** (o defeito é plaquetário/microvascular, não de fatores solúveis).
- **Microangiopatias trombóticas (PTT e SHU) compartilham a tríade esquizócitos + trombocitopenia + LDH elevado/haptoglobina baixa**, mas se distinguem pelo mecanismo: **PTT = deficiência de ADAMTS-13** (idiopática/autoimune, geralmente adulto); **SHU típica = toxina Shiga de *E. coli* êntero-hemorrágica** (criança, diarreia sanguinolenta prévia); **SHU atípica = desregulação da via alternativa do complemento** (deficiência de fator H e outras mutações, sem diarreia prévia obrigatória).
- **PTT é tratada com plasmaférese urgente** — transfusão de plaquetas é classicamente **contraindicada** (pode alimentar a formação de novos microtrombos e piorar a isquemia de órgãos).
- **CIVD: a chave é tratar a causa de base** (controle de foco infeccioso/obstétrico/oncológico) — reposição de plasma/crioprecipitado/plaquetas é suporte, não solução definitiva, e deve ser reservada para sangramento ativo ou procedimento invasivo iminente.
- **CIVD tem fibrinólise secundária proeminente** (consumo de fibrinogênio, D-dímero muito elevado) — é o achado que a diferencia laboratorialmente da PTT (fibrinogênio normal na PTT, porque ali não há ativação disseminada da cascata de coagulação).
- **SHU atípica: C3 consumido com C4 normal** (ativação isolada da via alternativa do complemento) — padrão sorológico muito específico, tratado com **eculizumabe** (inibidor de C5), não com plasmaférese como primeira linha.
- **Hemofilia A adquirida:** PTTa muito alargado **sem correção no teste da mistura** (indica presença de inibidor, não deficiência simples de fator) + TAP e plaquetas normais — pensar sempre em contexto de puerpério, doença autoimune ou neoplasia oculta como causa do autoanticorpo anti-fator VIII.
- **PTI secundária a colagenose (lúpus)** deve ser suspeitada quando há trombocitopenia isolada associada a sedimento urinário ativo/outros sinais sistêmicos — a PTI "primária" é diagnóstico de exclusão.
- **Teste da mistura (mixing study)** é o exame que distingue deficiência de fator (corrige com plasma normal) de inibidor adquirido (não corrige, ou corrige e depois "foge" com incubação).

## 💎 Pearls

- **Doença diverticular perfurada + sepse + coagulopatia de consumo** é o cenário clássico de CIVD por foco infeccioso abdominal — a prioridade terapêutica é o **controle cirúrgico do foco**, não a correção isolada dos fatores de coagulação.
- **PTT pode se apresentar de forma dramática, com convulsão e déficit neurológico focal**, simulando AVC — a tríade laboratorial (esquizócitos + plaquetopenia + LDH alto) é o que resgata o diagnóstico correto em meio a um quadro neurológico agudo.
- **Fator H é uma proteína reguladora que normalmente "desliga" a via alternativa do complemento** — sua deficiência (SHU atípica) deixa o complemento ativado de forma descontrolada sobre o endotélio, explicando por que essa forma responde a inibidores terminais do complemento (eculizumabe) e não a plasmaférese isolada.
- **O puerpério é um gatilho reconhecido de hemofilia A adquirida** — provavelmente por disregulação imune transitória pós-parto favorecendo a formação do autoanticorpo anti-fator VIII.
- **PTI verdadeira NÃO altera TAP/PTTa** — se a coagulação estiver alargada junto com a plaquetopenia, pense em outra causa (CIVD, hepatopatia, deficiência de vitamina K) antes de fechar PTI isolada.
- **Hemácias mordidas/esquizócitos numa prótese valvar (hemólise mecânica)** têm mecanismo semelhante ao das microangiopatias (destruição física da hemácia), mas **sem trombocitopenia proeminente nem consumo de fatores** — outro ponto de corte útil.
- **A gravidade da CIVD costuma acompanhar a gravidade da doença de base** — controlar o gatilho (sepse, descolamento de placenta, neoplasia) é sempre mais eficaz do que "correr atrás" da coagulopatia isoladamente.

## ⚠️ Pitfalls

- **Confundir PTT com CIVD só porque ambas têm trombocitopenia e anemia hemolítica** — checar TAP/PTTa e fibrinogênio resolve: alterados em CIVD, normais em PTT.
- **Transfundir plaquetas em PTT sem sangramento ameaçador à vida** — pode precipitar mais trombose microvascular e piorar isquemia tecidual; a prioridade é iniciar plasmaférese o quanto antes.
- **Tratar CIVD só repondo hemocomponentes sem buscar/tratar a causa** — reposição sem controle do gatilho é insuficiente e pode até perpetuar o consumo.
- **Diagnosticar SHU típica sem história de diarreia prévia (geralmente sanguinolenta) em criança** — se a apresentação for em adulto sem pródromo diarreico, pensar em SHU atípica (mediada por complemento) é mais consistente.
- **Não pedir teste da mistura diante de PTTa alargado isolado** — sem esse exame, não é possível diferenciar deficiência de fator (corrige) de inibidor adquirido (não corrige), e a conduta é completamente diferente (reposição de fator × imunossupressão + agentes bypassing).
- **Achar que toda trombocitopenia purpúrica em jovem saudável é PTI primária** sem investigar causa secundária (lúpus, infecção por HIV, linfoma) quando há outros achados sistêmicos na vinheta (sedimento urinário ativo, linfadenopatia, esplenomegalia).
- **Corrigir hipocalcemia/repor fatores de forma agressiva e desnecessária em CIVD compensada sem sangramento** — reposição é para sangramento ativo ou procedimento invasivo, não para "normalizar o exame".

## 📝 Como a UERJ cobra

**Distúrbios da hemostasia é #8 do ranking (6 questões, 2,4% do corpus)**, com padrão de vinheta que sempre fornece **TAP, PTTa, plaquetas e um marcador de hemólise (LDH, esfregaço)** — a leitura conjunta desses quatro dados é o que resolve a questão.

- **CIVD** apareceu 2 vezes (2021 Q11, 2022 Q50) — uma testando a **conduta prioritária** (controle cirúrgico do foco em vez de correção laboratorial isolada) e outra testando o **achado laboratorial que a distingue da PTT** (fibrinólise aumentada/consumo de fibrinogênio).
- **PTT** (2021 Q6) foi cobrada em contexto pós-procedimento cardiovascular (implante de stents), reforçando que a doença pode se manifestar em cenários hospitalares inesperados, não só "do nada" em ambulatório.
- **SHU atípica** (2023 Q34) exigiu reconhecimento fino do **padrão de complemento (C3 baixo, C4 normal)** como diferencial da SHU típica e da PTT — questão de raciocínio laboratorial avançado.
- **Hemofilia adquirida** (2023 Q37) e **PTI secundária** (2025 Q4) testaram contexto clínico específico (puerpério; colagenose) como pista central para a etiologia — a banca claramente valoriza reconhecer a causa secundária, não só o distúrbio hemostático isolado.

## 🆕 Atualização

- **Caplacizumabe**, um nanocorpo que bloqueia a interação entre o fator de von Willebrand e as plaquetas, foi incorporado ao tratamento da PTT imune aguda em associação à plasmaférese e imunossupressão, reduzindo tempo de resposta e recidiva precoce — avanço terapêutico relevante da última década, ainda não cobrado pela UERJ.
- **Eculizumabe/ravulizumabe** consolidaram-se como tratamento de escolha para SHU atípica, tendo transformado uma doença antes associada a alta mortalidade/necessidade de diálise permanente em condição com prognóstico renal muito mais favorável quando tratada precocemente.
- No manejo da **CIVD**, guias mais recentes reforçam ainda mais o princípio de **não transfundir profilaticamente com base apenas em exames alterados sem sangramento ativo** — a reposição orientada por sangramento clínico (e não por número de exame) é o padrão atual de melhor prática.
- **Rituximabe** ganhou espaço crescente no tratamento de segunda linha tanto de PTI refratária quanto de hemofilia adquirida (reduzindo o título do autoanticorpo inibidor), complementando ou substituindo esquemas imunossupressores mais tradicionais em casos selecionados.

## 🧠 Conceito e fisiopatologia

A hemostasia normal depende de três componentes que atuam em sequência: **hemostasia primária** (adesão e agregação plaquetária, dependente de fator de von Willebrand e integridade endotelial), **hemostasia secundária** (cascata de coagulação, gerando trombina e fibrina) e **fibrinólise** (dissolução controlada do coágulo). Distúrbios em cada etapa geram padrões laboratoriais e clínicos característicos.

**CIVD** é a ativação sistêmica e descontrolada da cascata de coagulação, desencadeada por um estímulo procoagulante maciço (sepse, liberação de fator tecidual por trauma/neoplasia/complicação obstétrica). O consumo maciço e simultâneo de plaquetas e fatores de coagulação, associado à ativação secundária da fibrinólise para tentar dissolver os múltiplos microtrombos formados, gera o paradoxo clínico de sangramento e trombose coexistindo no mesmo paciente — daí TAP e PTTa alargados, fibrinogênio consumido e D-dímero muito elevado.

**PTT** decorre de deficiência grave (adquirida, por autoanticorpo, na maioria dos casos adultos; ou hereditária, mais rara) da enzima **ADAMTS-13**, responsável por clivar multímeros ultragrandes de fator de von Willebrand em fragmentos menores. Sem essa clivagem, os multímeros ultragrandes promovem agregação plaquetária espontânea e excessiva na microcirculação, formando microtrombos ricos em plaquetas (não em fibrina, por isso TAP/PTTa permanecem normais) que fragmentam as hemácias de passagem (esquizócitos) e causam isquemia multiorgânica, particularmente no sistema nervoso central e nos rins.

**SHU típica** é desencadeada pela toxina Shiga produzida por cepas de *E. coli* êntero-hemorrágica (mais comumente O157:H7), que lesa diretamente o endotélio glomerular, ativando a cascata de coagulação localmente e formando microtrombos renais predominantes. **SHU atípica** resulta de desregulação primária da via alternativa do complemento (deficiência ou mutação de proteínas reguladoras como fator H, fator I, MCP), permitindo ativação descontrolada do complemento sobre o endotélio mesmo sem o gatilho infeccioso — explicando por que essa forma responde a bloqueio terminal do complemento (eculizumabe).

**Hemofilia A adquirida** ocorre quando um autoanticorpo (inibidor) se liga ao fator VIII e neutraliza sua atividade coagulante, mesmo na presença de níveis normais do gene/proteína endógena — diferente da hemofilia A congênita, que é deficiência genética estrutural do próprio fator. O teste da mistura demonstra essa diferença: plasma do paciente misturado a plasma normal corrige o PTTa na deficiência simples (o plasma normal supre o fator faltante), mas não corrige (ou corrige e depois volta a alargar após incubação) quando há um inibidor ativo neutralizando o fator adicionado.

**PTI (trombocitopenia imune)** decorre de destruição periférica de plaquetas mediada por autoanticorpos antiplaquetários, podendo ser primária (idiopática) ou secundária a outra condição autoimune (lúpus sendo a mais clássica), infecciosa (HIV, hepatite C) ou linfoproliferativa.

## 🩺 Quadro clínico

- **CIVD:** sangramento em múltiplos sítios (venopunção, mucosas, feridas cirúrgicas) simultâneo a fenômenos trombóticos (isquemia digital, disfunção de órgãos), sempre em contexto de doença grave desencadeante (sepse, trauma, complicação obstétrica, neoplasia).
- **PTT:** púrpura/petéquias, febre, alteração neurológica flutuante (confusão, convulsão, déficit focal), lesão renal geralmente discreta (diferente da SHU, onde a lesão renal é mais proeminente).
- **SHU:** lesão renal aguda proeminente, geralmente precedida (na forma típica) por diarreia sanguinolenta; hipertensão, edema, oligúria.
- **Hemofilia adquirida:** sangramento mucocutâneo e de tecidos moles de início súbito em paciente sem história pessoal/familiar prévia de sangramento — hematomas extensos, sangramento pós-parto ou pós-procedimento desproporcional.
- **PTI:** petéquias, púrpura, sangramento mucoso (gengivorragia, epistaxe) em paciente com trombocitopenia isolada, sem outras citopenias, sem esplenomegalia significativa na forma primária.

## 🔎 Diagnóstico

- **Passo inicial universal:** hemograma completo com plaquetas, esfregaço de sangue periférico, TAP, PTTa, fibrinogênio, D-dímero, LDH, haptoglobina, bilirrubina indireta.
- **CIVD:** plaquetopenia + TAP e PTTa alargados + fibrinogênio baixo + D-dímero muito elevado, em contexto clínico compatível.
- **PTT:** plaquetopenia + esquizócitos + LDH alto/haptoglobina baixa + **TAP e PTTa normais**; confirmação por dosagem de atividade de **ADAMTS-13** (<10% confirma), embora o tratamento não deva esperar o resultado quando a suspeita clínica é forte.
- **SHU:** quadro semelhante à PTT laboratorialmente, mas com lesão renal mais proeminente; investigar pródromo diarreico (SHU típica, toxina Shiga em cultura de fezes) versus ausência de pródromo com **consumo isolado de C3 (C4 normal)** sugerindo SHU atípica — avaliação genética/funcional do complemento em centros especializados confirma.
- **Hemofilia adquirida:** PTTa alargado isolado, **teste da mistura sem correção**, dosagem de fator VIII reduzida e título do inibidor (unidades Bethesda).
- **PTI:** trombocitopenia isolada por exclusão de outras causas (hemograma sem outras citopenias, esfregaço sem esquizócitos/blastos); investigar causas secundárias conforme contexto clínico (FAN/anti-DNA se suspeita de lúpus, sorologia para HIV/hepatite C).

## 🚨 Gravidade / classificação

- **CIVD** pode ser classificada em compensada (exames alterados, sem sangramento clínico relevante) e descompensada (sangramento ativo, falência de múltiplos órgãos) — a gravidade clínica, não apenas o exame, orienta a intensidade da reposição de hemocomponentes.
- **PTT e SHU** são emergências hematológicas: atraso no início do tratamento (plasmaférese na PTT; eculizumabe na SHU atípica) aumenta significativamente mortalidade e sequelas renais/neurológicas.
- **Hemofilia adquirida** classifica-se por título do inibidor (unidades Bethesda), que orienta a estratégia terapêutica (baixo título pode responder a altas doses de fator; alto título exige agentes bypassing).
- **PTI** é classificada por gravidade do sangramento (não apenas contagem de plaquetas isolada) para definir necessidade e urgência de tratamento — sangramento mucoso significativo ou contagem muito baixa (<20-30.000/mm³) geralmente justifica tratamento mesmo sem sangramento grave estabelecido.

## 💊 Tratamento

- **CIVD:** tratar agressivamente a causa de base (antibiótico e controle cirúrgico do foco séptico; esvaziamento uterino em complicação obstétrica; tratamento oncológico específico). Reposição de plasma fresco congelado, crioprecipitado (se fibrinogênio muito baixo) e plaquetas **apenas se sangramento ativo ou procedimento invasivo iminente** — não para corrigir exame isoladamente.
- **PTT:** **plasmaférese urgente** (troca plasmática terapêutica) associada a corticoide; rituximabe em casos refratários/recidivantes; caplacizumabe como adjuvante em centros com acesso ao medicamento; **evitar transfusão de plaquetas** exceto em sangramento com risco de vida.
- **SHU típica:** suporte (hidratação, controle de eletrólitos, diálise se necessário) — a maioria resolve com cuidado de suporte, sem necessidade de plasmaférese ou eculizumabe.
- **SHU atípica:** **eculizumabe (ou ravulizumabe)** como tratamento direcionado ao mecanismo; plasmaférese tem papel mais limitado nessa forma em comparação à PTT.
- **Hemofilia adquirida:** controle do sangramento agudo com agentes bypassing (fator VII ativado recombinante ou concentrado de complexo protrombínico ativado) quando o título do inibidor é alto; erradicação do inibidor com imunossupressão (corticoide ± ciclofosfamida ou rituximabe).
- **PTI:** corticoide como primeira linha em doença sintomática; imunoglobulina intravenosa para elevação rápida de plaquetas (sangramento significativo, necessidade de procedimento urgente); agonistas do receptor de trombopoetina, rituximabe ou esplenectomia em doença refratária/crônica; tratar a causa secundária quando identificada (ex.: controlar atividade do lúpus).

## 🔀 Diagnóstico diferencial

| Distúrbio | TAP/PTTa | Fibrinogênio | Plaquetas | Esquizócitos | Achado-chave |
| --- | --- | --- | --- | --- | --- |
| CIVD | Alargados | Baixo | Baixas | Podem estar presentes | Contexto sistêmico grave |
| PTT | Normais | Normal | Muito baixas | Presentes | ADAMTS-13 muito baixo |
| SHU típica | Normais | Normal | Baixas | Presentes | Diarreia prévia, lesão renal proeminente |
| SHU atípica | Normais | Normal | Baixas | Presentes | C3 baixo/C4 normal, sem pródromo |
| Hemofilia adquirida | PTTa alargado isolado | Normal | Normais | Ausentes | Teste da mistura não corrige |
| PTI | Normais | Normal | Muito baixas | Ausentes | Trombocitopenia isolada |

## 📋 Tabela de revisão

| Entidade | Mecanismo central | Tratamento de escolha |
| --- | --- | --- |
| CIVD | Ativação sistêmica da coagulação | Tratar causa de base |
| PTT | Deficiência de ADAMTS-13 | Plasmaférese |
| SHU típica | Toxina Shiga | Suporte |
| SHU atípica | Desregulação do complemento | Eculizumabe |
| Hemofilia adquirida | Autoanticorpo anti-fator VIII | Agente bypassing + imunossupressão |
| PTI | Autoanticorpo antiplaquetário | Corticoide |

## 📚 Referências essenciais

- ISTH (International Society on Thrombosis and Haemostasis) — critérios diagnósticos e guia de manejo de CIVD (citada explicitamente pela UERJ em 2021).
- ASH Clinical Practice Guidelines — Immune Thrombocytopenia.
- ASH/ISTH Guidelines — Thrombotic Thrombocytopenic Purpura and other Thrombotic Microangiopathies.
- KDIGO — recomendações relacionadas à síndrome hemolítico-urêmica atípica e via alternativa do complemento.
`;

export default content.trim();
