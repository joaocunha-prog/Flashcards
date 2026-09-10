/**
 * Resumo — Hematologia · Distúrbios da hemostasia.
 *
 * Reorganizado por entidade clínica (cada distúrbio tem sua própria seção
 * com quando suspeitar/quadro, diagnóstico, tratamento, pearl e pitfall
 * juntos) — antes esse conteúdo estava picado entre seções genéricas de
 * tipo (Pearls, Quadro clínico, Diagnóstico, Tratamento...), misturando
 * PTT, von Willebrand, trombofilia e reversão de anticoagulante no mesmo
 * bloco.
 *
 * Cobre as entidades do assunto no corpus: púrpura trombocitopênica
 * trombótica (PTT), reinício de anticoagulação após hemorragia digestiva,
 * tromboembolismo venoso associado a câncer, doença de von Willebrand,
 * trombofilia hereditária, manejo perioperatório de anticoagulação e
 * reversão de dabigatrana. Inclui também extrapolações de alto rendimento
 * (hemofilias, CIVD, HIT, síndrome antifosfolípide, reversão de varfarina e
 * de anti-Xa) ainda não cobradas no corpus, mas plausíveis em provas
 * futuras.
 */
const content = `
## 🎯 Essencial

- **Hemostasia primária** (plaquetas + fator de von Willebrand) falha com sangramento **mucocutâneo**; **hemostasia secundária** (cascata de coagulação) falha com sangramento **articular/profundo** — esse eixo organiza todo o assunto e é a primeira pergunta a fazer diante de qualquer sangramento anormal.
- **Anemia + plaquetopenia + coagulograma NORMAL** é a assinatura da **PTT** — diferente de CIVD, que sempre altera TP/PTTa e fibrinogênio.
- **TVP/TEP em câncer ativo:** anticoagulante oral direto já é preferido sobre HBPM na maioria dos cenários, exceto tumores gastrointestinais/geniturinários de alto risco de sangramento de mucosa.
- **Reinício de anticoagulação após hemorragia digestiva alta em FA:** entre o **3º e o 7º dia**, preferencialmente com anticoagulante oral direto, **sem ponte com heparina**.
- **Doença de von Willebrand:** sangramento mucocutâneo com **plaquetas normais** — mas o subtipo muda o tratamento (ver entidade abaixo, atenção especial ao tipo 2B).
- **Investigar trombofilia hereditária só fora da fase aguda** e fora de anticoagulação plena — não muda a conduta imediata da TVP.
- **Reversão de dabigatrana:** **idarucizumabe**, específico e diferente dos reversores de inibidor de fator Xa.

## 📝 Como a banca cobra

**Segundo assunto mais frequente do corpus (9 questões, 4,3%)**, quase todo em cenários de decisão terapêutica prática — anticoagular ou não, qual droga, por quanto tempo.

- **Doença de von Willebrand** apareceu 2 vezes (ENARE 2025 Q23 e ENARE 2026 Q60), ambas com história de sangramento mucocutâneo recorrente desde jovem e plaquetas normais — o padrão-vinheta se repete.
- **TVP/TEP** foi cobrado em três ângulos diferentes: câncer ativo (ENARE 2025 Q13), TVP recorrente com investigação de trombofilia (ENARE 2025 Q24) e anticoagulação padrão com apixabana (ENARE 2026 Q65).
- **Reversão de dabigatrana** (ENARE 2026 Q80) e **manejo perioperatório de anticoagulação** (ENARE 2025 Q42) testam o lado "de emergência" e o lado "eletivo" do mesmo tema.
- **PTT** (EBSERH 2025 Q49) e **reinício pós-HDA** (EBSERH 2026 Q35) completam o assunto pelo lado do EBSERH.
- **Nenhuma questão do corpus cobrou ainda HIT, CIVD ou síndrome antifosfolípide isoladamente** — são candidatos naturais de alto rendimento, dado o padrão da banca de explorar diagnóstico diferencial fino entre distúrbios de coagulação.

## 🧠 Conceito e fisiopatologia

- **Hemostasia primária:** forma o tampão plaquetário inicial (plaquetas + FvW, que funciona como ponte entre plaqueta e subendotélio lesado)
- **Hemostasia secundária:** estabiliza esse tampão com a rede de fibrina gerada pela cascata de coagulação
- Doenças de hemostasia primária (von Willebrand, plaquetopenias) → sangram **mucosa**; doenças de hemostasia secundária (hemofilias) → sangram **articulação/músculo**
- **PTT foge dessa lógica dupla:** é microtrombose por deficiência de **ADAMTS-13** (a protease que cliva multímeros ultralargos de FvW), consumindo plaquetas sem consumir fatores de coagulação → por isso o coagulograma permanece normal
- Isso contrasta com a **CIVD**: ativação sistêmica descontrolada que consome plaquetas e fatores ao mesmo tempo
- Em câncer, o estado de hipercoagulabilidade é multifatorial (fator tecidual tumoral, estase, compressão vascular, cateteres) → prolonga a duração recomendada de anticoagulação enquanto a neoplasia estiver ativa

💡 Pensa assim: primária = "pedreiro que levanta a parede rápido" (plaqueta+FvW, mucosa); secundária = "reboco que a deixa firme" (fibrina, articulação/músculo profundo). A PTT quebra essa regra porque o problema não é falta de tampão nem de reboco — é excesso de trombo por falta da tesoura (ADAMTS-13) que corta o FvW gigante.

## 🔹 Púrpura trombocitopênica trombótica (PTT)

- **Quando suspeitar:** anemia hemolítica microangiopática (palidez, icterícia) + plaquetopenia + coagulograma normal, com ou sem a tríade clássica completa (disfunção neurológica flutuante, febre, lesão renal) — a apresentação completa é rara e não deve ser exigida para tratar.
- **Diagnóstico:** esfregaço com **esquizócitos**, LDH elevado, bilirrubina indireta elevada, haptoglobina baixa; **ADAMTS-13 <10%** confirma, mas nunca atrasa o tratamento. O **escore PLASMIC** (plaquetas, hemólise, ausência de câncer/transplante, VCM, INR, creatinina) estima probabilidade pré-teste e ajuda a decidir plasmaférese empírica antes do resultado de ADAMTS-13.
- **Tratamento:** **plasmaférese diária urgente** + corticoide; **caplacizumabe** (nanocorpo anti-FvW) é adjuvante mais recente que reduz tempo até resposta plaquetária e recorrência precoce em centros com acesso; rituximabe em refratariedade/recidiva.
- 💎 **Pearl:** a normalização das plaquetas costuma preceder a normalização do LDH — suspender a plasmaférese cedo demais (só porque as plaquetas já subiram) é erro comum; o padrão é manter até a resolução hematológica sustentada, não só a contagem de plaquetas.
- ⚠️ **Pitfall:** **transfundir plaquetas** — contraindicado fora de sangramento com risco de vida, pois alimenta a formação de microtrombos e pode piorar isquemia.
- 📝 **Como caiu:** EBSERH 2025 Q49 — perfil laboratorial.

## 🔹 Coagulação intravascular disseminada (CIVD)

- **Quando suspeitar:** sangramento em múltiplos sítios simultaneamente (punções, mucosas, sítios cirúrgicos) associado a sinais de trombose de pequenos vasos (isquemia digital, livedo) no mesmo paciente — sangramento e trombose coexistindo é a marca clínica, em contexto de sepse, trauma grave, neoplasia ou complicação obstétrica.
- **Diagnóstico:** plaquetopenia + **TP e PTTa prolongados** + fibrinogênio baixo + D-dímero muito elevado + esquizócitos — painel completo, é justamente esse padrão (coagulograma alterado) que diferencia de PTT.
- **Tratamento:** tratar a causa de base é o pilar; suporte transfusional (plasma fresco, crioprecipitado se fibrinogênio muito baixo, plaquetas) guiado por sangramento ativo, não por número isolado.
- 💎 **Pearl:** existe forma crônica/compensada de CIVD (típica de neoplasia sólida avançada), com predomínio trombótico e alterações laboratoriais mais discretas — diferente da forma aguda descompensada de sepse/trauma, que sangra profusamente.
- ⚠️ **Pitfall:** confundir CIVD com PTT pela plaquetopenia + esquizócitos compartilhados — o coagulograma alterado (CIVD) vs. normal (PTT) é o discriminador central.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Trombocitopenia induzida por heparina (HIT)

- **Quando suspeitar:** queda de plaquetas >50% do basal, tipicamente **5-10 dias** após início de heparina (mais precoce, em horas, se houver exposição prévia nos últimos 100 dias) — cursa com **trombose** (não sangramento), podendo haver necrose cutânea no local de aplicação.
- **Diagnóstico:** escore **4Ts** (magnitude da queda, Timing, Trombose, ausência de outro causa) estratifica probabilidade pré-teste; ensaio de anticorpo anti-PF4/heparina confirma, mas a suspensão da heparina não espera o resultado diante de probabilidade intermediária/alta.
- **Tratamento:** suspender **toda** fonte de heparina (inclusive HBPM e flushes de cateter) e trocar imediatamente por anticoagulante não-heparínico (fondaparinux, argatrobana, ou um anticoagulante oral direto conforme estabilização clínica).
- ⚠️ **Pitfall:** manter heparina "só para confirmar com o exame" — a suspensão deve ser imediata pela gravidade trombótica, sem esperar confirmação laboratorial; e transfundir plaquetas profilaticamente na HIT é evitado (não trata-se de sangramento) pelo risco teórico de alimentar a trombose.
- 📝 **Como caiu:** ainda não cobrado no corpus — candidato natural de alto rendimento.

## 🔹 Doença de von Willebrand

- **Quando suspeitar:** sangramento mucocutâneo (epistaxe, menorragia, gengivorragia, sangramento pós-procedimento) recorrente desde jovem, com **plaquetas normais**.
- **Diagnóstico:** antígeno do FvW, atividade do cofator de ristocetina (FvW:RCo) e atividade do fator VIII — os três juntos, não isolados.
- **Tratamento por subtipo, não é uma receita única:** **tipo 1** (deficiência quantitativa parcial, mais comum) responde bem a **desmopressina (DDAVP)**, que libera FvW endógeno estocado no endotélio; **tipo 2** (defeito qualitativo) tem resposta variável — e no **subtipo 2B**, DDAVP é **contraindicada**, pois libera FvW anormal com afinidade aumentada por plaquetas, agravando a trombocitopenia; **tipo 3** (deficiência grave, quase ausente) não responde a DDAVP e exige concentrado de FvW/fator VIII.
- 💎 **Pearl:** sangramento recorrente após extração dentária ou pequenos procedimentos em diferentes idades sugere hemostasia primária (von Willebrand, disfunção plaquetária) mais do que coagulopatia isolada.
- ⚠️ **Pitfall:** prescrever DDAVP de forma reflexa em von Willebrand sem checar o subtipo — no tipo 2B, piora a trombocitopenia em vez de ajudar.
- 📝 **Como caiu:** ENARE 2025 Q23 · ENARE 2026 Q60.

## 🔹 Hemofilia A e B

- **Quando suspeitar:** sangramento em articulações (hemartrose — dor, edema, limitação de movimento) e músculos profundos, tipicamente desde a infância; mutação de novo é possível mesmo sem história familiar óbvia.
- **Diagnóstico:** **PTTa prolongado com TP e plaquetas normais**; dosagem específica de fator VIII (hemofilia A) ou IX (hemofilia B) confirma e classifica gravidade (leve/moderada/grave conforme o nível do fator).
- **Tratamento:** concentrado do fator deficiente guiado por gravidade do sangramento e tipo de procedimento; desmopressina é opção em hemofilia A **leve** (libera fator VIII endógeno, não funciona na hemofilia B).
- ⚠️ **Pitfall:** diagnosticar hemofilia pelo padrão de sangramento mucocutâneo — esse é o padrão de von Willebrand/plaquetopenia; hemofilia é sangramento articular/profundo com PTTa isoladamente prolongado.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Tromboembolismo venoso associado a câncer

- **Quando suspeitar:** TVP/TEP em paciente com neoplasia ativa — risco de trombose várias vezes maior que na população geral, pelo estado de hipercoagulabilidade tumoral.
- **Tratamento:** anticoagulante oral direto (apixabana/rivaroxabana) é preferido na maioria dos cenários atuais; **HBPM ainda é preferida em tumor gastrointestinal ou geniturinário luminal** de alto risco de sangramento de mucosa (a droga oral direta tem maior risco de sangramento digestivo nesse subgrupo específico).
- **Duração:** enquanto a neoplasia estiver ativa (tratamento em curso ou doença não curada) — diferente de TVP não provocada, que segue algoritmo próprio de reavaliação periódica.
- 💎 **Pearl:** apixabana e rivaroxabana têm posologia de indução (dose mais alta nos primeiros dias/semanas) seguida de dose de manutenção — esquecer essa fase é erro comum de prescrição, inclusive fora do contexto oncológico.
- ⚠️ **Pitfall:** tratar TEV em câncer como TEV não provocado, sem considerar o risco de sangramento específico do sítio tumoral na escolha do anticoagulante.
- 📝 **Como caiu:** ENARE 2025 Q13.

## 🔹 Trombofilia hereditária e trombose venosa recorrente

- **Quando investigar:** TVP recorrente, trombose em sítio incomum (veias esplâncnicas, seio venoso cerebral), idade jovem (<50 anos) ou forte história familiar — não é investigação de rotina em todo primeiro episódio de TVP provocada.
- **Quando testar:** **fora da fase aguda e fora de anticoagulação plena** (varfarina falseia proteína C/S; heparina falseia antitrombina; anticoagulantes orais diretos também podem interferir em alguns ensaios funcionais).
- **Painel:** fator V de Leiden, mutação do gene da protrombina (G20210A), proteína C, proteína S, antitrombina III. **Heterozigose para fator V de Leiden** é a trombofilia hereditária mais comum, mas de risco relativamente baixo isolado; **homozigose** ou combinação de trombofilias eleva substancialmente o risco e pode mudar a duração da anticoagulação para indefinida.
- 💎 **Pearl:** um resultado de trombofilia hereditária negativo não afasta risco trombótico aumentado — a decisão sobre duração de anticoagulação pesa mais o contexto clínico (recorrência, sítio, provocação) do que o painel isolado.
- ⚠️ **Pitfall:** solicitar trombofilia hereditária na fase aguda da trombose ou em vigência de anticoagulação plena — resultados falseados.
- 📝 **Como caiu:** ENARE 2025 Q24 — investigação após TVP recorrente.

## 🔹 Síndrome antifosfolípide

- **Quando suspeitar:** trombose (venosa ou arterial) recorrente + perdas gestacionais de repetição, por vezes com plaquetopenia leve associada — é a principal causa de **trombofilia adquirida**.
- **Diagnóstico:** anticorpo anticoagulante lúpico, anticardiolipina e anti-beta2-glicoproteína I, em **dois testes com pelo menos 12 semanas de intervalo** (evita rotular positividade transitória, comum em infecções agudas). O anticoagulante lúpico causa um paradoxo laboratorial clássico: **PTTa prolongado que não corrige com plasma normal** (teste de mistura), apesar do paciente estar em estado pró-trombótico, não hemorrágico.
- **Tratamento:** anticoagulação (varfarina é preferida a anticoagulante oral direto em SAF trombótica confirmada, sobretudo na forma tripla-positiva/arterial, pela maior taxa de recorrência com os diretos nesse subgrupo específico).
- ⚠️ **Pitfall:** interpretar PTTa prolongado como risco de sangramento na SAF — é justamente o oposto: reflete um estado protrombótico.
- 📝 **Como caiu:** ainda não cobrado no corpus — mas compõe naturalmente o diferencial de trombofilia hereditária já cobrado.

## 🔹 Reinício de anticoagulação após hemorragia digestiva

- **Conduta:** em fibrilação atrial com indicação de anticoagulação e hemorragia digestiva alta controlada, reiniciar **entre o 3º e o 7º dia**, preferencialmente com anticoagulante oral direto, **sem ponte com heparina** — a ponte aumenta sangramento sem reduzir eventos trombóticos nesse contexto.
- **Racional:** o escore de risco de sangramento (ex.: HAS-BLED) orienta cautela, mas não contraindica anticoagulação isoladamente — o benefício de prevenir AVC/TEP geralmente supera o risco de ressangramento após controle endoscópico adequado.
- ⚠️ **Pitfall:** fazer ponte com heparina rotineiramente ao reiniciar anticoagulação pós-hemorragia digestiva — na maioria dos cenários de FA, a ponte não reduz eventos e aumenta sangramento.
- 📝 **Como caiu:** EBSERH 2026 Q35 — reinício entre o 3º e o 7º dia.

## 🔹 Manejo perioperatório de anticoagulação (bridging)

- **Conduta com varfarina:** suspender ~5 dias antes da cirurgia; ponte com HBPM **só se risco trombótico alto** (ex.: prótese valvar mecânica mitral, FA com CHA2DS2-VASc muito elevado, TEV recente <3 meses) — em risco trombótico baixo/moderado, a ponte aumenta sangramento sem benefício trombótico claro (achado central do trial BRIDGE). Ponte iniciada 2 dias após a suspensão, interrompida 24h antes da cirurgia; reavaliar INR na véspera.
- **Conduta com anticoagulante oral direto:** meia-vida curta permite suspensão mais simples (tipicamente 1-2 dias antes conforme função renal e risco hemorrágico do procedimento), **sem necessidade de ponte** na maioria dos casos — diferencial importante frente à varfarina.
- **Cirurgias de baixo risco hemorrágico** (ex.: extrações dentárias simples, procedimentos dermatológicos, alguns procedimentos oftalmológicos): muitas diretrizes atuais recomendam **manter** o anticoagulante em vez de suspender rotineiramente.
- 📝 **Como caiu:** ENARE 2025 Q42.

## 🔹 Reversão de emergência de anticoagulantes

- **Dabigatrana:** **idarucizumabe** (anticorpo monoclonal específico, ligação direta e imediata) — não confundir com os reversores de inibidores do fator Xa.
- **Inibidores de fator Xa (apixabana, rivaroxabana):** andexanet alfa é o reversor específico, mas seu uso é limitado pelo custo/disponibilidade e por sinal de aumento de eventos trombóticos pós-reversão em alguns estudos; **concentrado de complexo protrombínico (CCP) de 4 fatores** é a alternativa amplamente usada na prática quando o antídoto específico não está disponível.
- **Varfarina com sangramento grave:** vitamina K IV + CCP de 4 fatores — hoje preferido a plasma fresco congelado por ser mais rápido e não exigir grande volume de infusão.
- ⚠️ **Pitfall:** confundir idarucizumabe com reversores de anti-Xa — são antídotos específicos e não intercambiáveis.
- 📝 **Como caiu:** ENARE 2026 Q80 — reversão de dabigatrana.

## 📋 Tabela

| Condição | Plaquetas | TP | PTTa | Fibrinogênio | Achado-chave |
|---|---|---|---|---|---|
| PTT | Baixa | Normal | Normal | Normal | Esquizócitos, ADAMTS-13 baixo |
| CIVD | Baixa | Alto | Alto | Baixo | D-dímero muito alto |
| Von Willebrand | Normal | Normal | Normal/alto | Normal | FvW e fator VIII baixos |
| Hemofilia A/B | Normal | Normal | Alto | Normal | Fator VIII ou IX baixo isolado |
| HIT | Baixa | Normal | Normal | Normal | Trombose, não sangramento |
| SAF | Normal/baixa leve | Normal | Alto (não corrige com mistura) | Normal | Anticoagulante lúpico positivo |

## 📚 Referências essenciais

- ISTH Guidelines — Diagnosis and Management of Thrombotic Thrombocytopenic Purpura e de trombocitopenia induzida por heparina.
- ASH Guidelines for Management of Venous Thromboembolism — trombose associada a câncer e duração de anticoagulação.
- Diretriz ACC/AHA/HRS de manejo perioperatório de anticoagulação em fibrilação atrial; resultados do trial BRIDGE.
- World Federation of Hemophilia — Guidelines for the Management of Hemophilia.
- ISTH — Guidance for diagnosis of antiphospholipid syndrome.
`;

export default content.trim();
