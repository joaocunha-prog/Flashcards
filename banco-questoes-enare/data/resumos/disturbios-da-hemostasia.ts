/**
 * Resumo — Hematologia · Distúrbios da hemostasia.
 *
 * Cobre as entidades do assunto no corpus: púrpura trombocitopênica
 * trombótica (PTT), reinício de anticoagulação após hemorragia digestiva,
 * tromboembolismo venoso associado a câncer, doença de von Willebrand,
 * trombofilia hereditária, manejo perioperatório de anticoagulação e
 * reversão de dabigatrana. Inclui também extrapolações de alto rendimento
 * (hemofilias, CIVD, síndrome antifosfolípide, reversão de varfarina e de
 * anti-Xa, HIT) ainda não cobradas no corpus, mas plausíveis em provas
 * futuras.
 */
const content = `
## 🎯 Essencial

- **Anemia + plaquetopenia + coagulograma NORMAL** é a assinatura da **PTT** (púrpura trombocitopênica trombótica) — diferente de CIVD, que sempre altera TP/PTTa. Emergência hematológica: **plasmaférese** é o tratamento, não transfusão de plaquetas (piora a microtrombose).
- **TVP/TEP em câncer ativo:** anticoagulantes orais diretos (ex.: apixabana, rivaroxabana) já são preferidos sobre HBPM na maioria dos cenários atuais, exceto tumores gastrointestinais/geniturinários com alto risco de sangramento de mucosa, onde HBPM ainda é preferida.
- **Reinício de anticoagulação após hemorragia digestiva alta em paciente com FA:** entre o **3º e o 7º dia** após controle do sangramento, preferencialmente com **anticoagulante oral direto, sem ponte com heparina** — a ponte aumenta sangramento sem reduzir eventos trombóticos nesse contexto.
- **Doença de von Willebrand:** sangramento mucocutâneo (epistaxe, menorragia, sangramento pós-procedimento) com **plaquetas normais**. Investigação: antígeno do FvW, atividade do cofator de ristocetina e atividade do fator VIII.
- **Investigar trombofilia hereditária só depois da fase aguda**, idealmente fora de anticoagulação plena (ela distorce proteína C/S) — não muda a conduta imediata da TVP.
- **Manejo perioperatório de varfarina:** suspender ~5 dias antes; se risco trombótico alto, ponte com HBPM iniciada 2 dias após suspensão e interrompida 24h antes da cirurgia; reavaliar INR na véspera.
- **Reversão de dabigatrana:** **idarucizumabe** (anticorpo monoclonal específico) — não confundir com os reversores de inibidores do fator Xa (andexanet alfa).
- **Ainda não cobrado no corpus, mas candidato natural:** **hemofilia A/B** — sangramento em articulações/músculos (hemartrose), **PTTa prolongado com TP e plaquetas normais**; hemofilia A trata-se com fator VIII (ou desmopressina em casos leves), hemofilia B com fator IX. Diferencia-se de von Willebrand porque o padrão de sangramento é articular/profundo, não mucocutâneo.
- **CIVD (coagulação intravascular disseminada):** plaquetopenia + TP/PTTa prolongados + fibrinogênio baixo + D-dímero muito elevado + esquizócitos — ao contrário da PTT, aqui a cascata secundária está consumida. Tratamento é da causa de base + suporte transfusional guiado por sangramento ativo.

## 💎 Pearls

- Na PTT, a **tríade clássica** (anemia hemolítica microangiopática + plaquetopenia + disfunção neurológica) pode estar incompleta — não esperar todos os achados para suspeitar e iniciar plasmaférese.
- **ADAMTS-13 baixo** confirma PTT, mas o tratamento não espera o resultado — inicia-se plasmaférese empiricamente diante da suspeita clínica.
- O **escore de risco de sangramento (ex.: HAS-BLED)** orienta cautela, mas não contraindica anticoagulação sozinho — o benefício de prevenir AVC/TEP geralmente supera o risco de ressangramento após controle endoscópico.
- **Apixabana e rivaroxabana têm posologia de indução** (dose mais alta nos primeiros dias/semanas) seguida de dose de manutenção — esquecer essa fase é erro comum de prescrição.
- Sangramento após **extração dentária ou pequenos procedimentos** que se repete em diferentes idades sugere fortemente distúrbio da hemostasia primária (von Willebrand, disfunção plaquetária) mais do que coagulopatia isolada.
- **Trombocitopenia induzida por heparina (HIT)** é um diagnóstico paradoxal: plaquetopenia + trombose (não sangramento) 5-10 dias após exposição a heparina — suspender toda heparina (inclusive HBPM e flushes) e trocar por anticoagulante não-heparínico (ex.: fondaparinux, argatrobana).
- **Síndrome antifosfolípide** deve ser lembrada em trombose recorrente + perdas gestacionais + plaquetopenia leve, com PTTa paradoxalmente prolongado que não corrige com plasma normal (anticoagulante lúpico) — é causa de trombofilia adquirida, não hereditária, e pode coexistir com investigação de trombofilia hereditária negativa.
- Em cirurgias de baixo risco hemorrágico (ex.: extrações dentárias simples, procedimentos dermatológicos), muitas diretrizes atuais recomendam **manter o anticoagulante** em vez de suspender rotineiramente.

## ⚠️ Pitfalls

- **Transfundir plaquetas na PTT** — contraindicado fora de sangramento com risco de vida; alimenta a formação de microtrombos e pode piorar isquemia.
- **Tratar TEV em câncer como TEV não provocado**, sem considerar o risco de sangramento específico do sítio tumoral (GI/GU) na escolha do anticoagulante.
- **Fazer ponte com heparina rotineiramente** ao reiniciar anticoagulação pós-hemorragia digestiva — na maioria dos cenários de FA, a ponte não reduz eventos e aumenta sangramento.
- **Solicitar trombofilia hereditária na fase aguda da trombose ou em vigência de anticoagulação plena** — resultados falseados (proteína C/S artificialmente baixas).
- **Confundir idarucizumabe com reversores de anti-Xa** — são antídotos específicos e não intercambiáveis.
- **Manter heparina após suspeitar de HIT "só para confirmar com o exame"** — a suspensão deve ser imediata pela gravidade trombótica, sem esperar confirmação laboratorial.
- **Diagnosticar hemofilia pelo padrão de sangramento mucocutâneo** — esse é o padrão de von Willebrand/plaquetopenia; hemofilia é sangramento articular/profundo com PTTa isoladamente prolongado.

## 📝 Como a banca cobra

**Segundo assunto mais frequente do corpus (9 questões, 4,3%)**, quase todo em cenários de decisão terapêutica prática — anticoagular ou não, qual droga, por quanto tempo.

- **Doença de von Willebrand** apareceu 2 vezes (ENARE 2025 Q23 e ENARE 2026 Q60), ambas com história de sangramento mucocutâneo recorrente desde jovem e plaquetas normais — o padrão-vinheta se repete.
- **TVP/TEP** foi cobrado em três ângulos diferentes: câncer ativo (ENARE 2025 Q13), TVP recorrente com investigação de trombofilia (ENARE 2025 Q24) e anticoagulação padrão com apixabana (ENARE 2026 Q65) — vale estudar os três juntos para fixar quando cada estratégia se aplica.
- **Reversão de dabigatrana** (ENARE 2026 Q80) e **manejo perioperatório de anticoagulação** (ENARE 2025 Q42) testam o lado "de emergência" e o lado "eletivo" do mesmo tema.
- **PTT** (EBSERH 2025 Q49) e **reinício pós-HDA** (EBSERH 2026 Q35) completam o assunto pelo lado do EBSERH.

## 🧠 Conceito e fisiopatologia

A hemostasia primária (plaquetas + fator de von Willebrand, que funciona como ponte entre plaqueta e subendotélio lesado) e a secundária (cascata de coagulação) falham por mecanismos distintos: **deficiência quantitativa/qualitativa de FvW** causa sangramento mucocutâneo por hemostasia primária ineficiente, enquanto **PTT** é causada por deficiência (geralmente autoimune) de **ADAMTS-13**, a protease que cliva multímeros ultralargos de FvW — sem clivagem, esses multímeros formam microtrombos plaquetários espontâneos em múltiplos órgãos, consumindo plaquetas e fragmentando hemácias (esquizócitos).

Em câncer, o estado de hipercoagulabilidade é multifatorial (fator tecidual liberado pelo tumor, estase, compressão vascular, cateteres) — por isso o tratamento costuma ser mais prolongado (enquanto a neoplasia estiver ativa) e a escolha do anticoagulante pesa o risco de sangramento do sítio tumoral.

As **hemofilias** são deficiências ligadas ao X de fatores da via intrínseca (VIII na hemofilia A, IX na hemofilia B) — a via extrínseca (TP) permanece intacta, por isso o PTTa prolonga isoladamente. A **CIVD** é o extremo oposto conceitual da PTT: ativação sistêmica e descontrolada da cascata de coagulação (por sepse, trauma, neoplasia, complicação obstétrica) que consome fatores e plaquetas simultaneamente, gerando sangramento e trombose ao mesmo tempo.

## 🩺 Quadro clínico

- **PTT:** anemia hemolítica microangiopática (palidez, icterícia), sangramento cutâneo-mucoso, achados neurológicos flutuantes (confusão, cefaleia, déficit focal transitório), febre e lesão renal em graus variáveis — a apresentação completa é rara, e sintomas neurológicos flutuantes são especialmente sugestivos.
- **Doença de von Willebrand e outras coagulopatias de hemostasia primária:** sangramento mucocutâneo — epistaxe recorrente, gengivorragia, menorragia, equimoses fáceis, sangramento prolongado pós-procedimento (dentário, cirúrgico).
- **Hemofilia:** sangramento em articulações (hemartrose — dor, edema, limitação de movimento) e músculos profundos, tipicamente desde a infância, sem história familiar necessariamente óbvia (mutação de novo é possível).
- **CIVD:** sangramento em múltiplos sítios simultaneamente (punções, mucosas, sítios cirúrgicos) associado a sinais de trombose de pequenos vasos (isquemia digital, livedo) no mesmo paciente — sangramento e trombose coexistindo é a marca clínica.
- **HIT:** trombose venosa ou arterial nova (TVP, TEP, isquemia de membro) 5-10 dias após início de heparina, por vezes com necrose cutânea no local de aplicação — não é um quadro de sangramento.

## 🔎 Diagnóstico

- **PTT:** esfregaço com esquizócitos, plaquetopenia, LDH elevado, bilirrubina indireta elevada, coagulograma normal; ADAMTS-13 confirma mas não atrasa o tratamento.
- **Doença de von Willebrand:** antígeno do FvW, atividade do cofator de ristocetina (FvW:RCo), atividade do fator VIII — os três juntos, não isolados.
- **Trombofilia hereditária:** fator V de Leiden, mutação do gene da protrombina, proteína C, proteína S, antitrombina III — solicitar fora da fase aguda e da anticoagulação plena. Anticorpos antifosfolípides (anticoagulante lúpico, anticardiolipina, anti-beta2-glicoproteína I) investigam trombofilia adquirida, não hereditária.
- **Hemofilia:** PTTa prolongado com TP e plaquetas normais; dosagem específica de fator VIII ou IX confirma e classifica gravidade (leve/moderada/grave).
- **CIVD:** plaquetopenia, TP e PTTa prolongados, fibrinogênio baixo, D-dímero muito elevado, esquizócitos — painel completo, não isolado.
- **HIT:** queda de plaquetas >50% do basal 5-10 dias após exposição a heparina (ou mais precoce em reexposição), ensaio de anticorpo anti-PF4/heparina confirma.

## 💊 Tratamento

- **PTT:** plasmaférese diária urgente + corticoide; rituximabe em casos refratários ou recidivantes.
- **TEV em câncer:** anticoagulante oral direto (apixabana/rivaroxabana) na maioria dos casos; HBPM preferida em tumor GI/GU de alto risco de sangramento.
- **Reinício pós-HDA em FA:** anticoagulante oral direto entre o 3º e o 7º dia, sem ponte com heparina.
- **Reversão de emergência:** idarucizumabe para dabigatrana; andexanet alfa (ou concentrado de complexo protrombínico quando o antídoto específico não está disponível) para inibidores de Xa; vitamina K + concentrado de complexo protrombínico para varfarina com sangramento grave.
- **Perioperatório com varfarina:** suspender ~5 dias antes, ponte com HBPM só se risco trombótico alto, reavaliar INR no dia anterior; procedimentos de baixo risco hemorrágico podem manter o anticoagulante.
- **Hemofilia:** concentrado do fator deficiente (VIII ou IX) guiado por gravidade do sangramento e tipo de procedimento; desmopressina em hemofilia A leve.
- **HIT:** suspensão imediata de toda heparina, troca por anticoagulante não-heparínico (fondaparinux, argatrobana, ou anticoagulante oral direto conforme estabilização).

## 🔀 Diferencial

- **PTT vs. CIVD vs. síndrome hemolítico-urêmica** — as três cursam com plaquetopenia e algum grau de hemólise microangiopática, mas só a PTT tem coagulograma tipicamente normal; CIVD altera TP/PTTa e fibrinogênio; SHU tem predomínio de lesão renal aguda e, na forma típica, antecedente de diarreia por E. coli produtora de toxina Shiga.
- **Von Willebrand vs. hemofilia** — o padrão de sangramento diferencia: mucocutâneo com plaquetas normais (von Willebrand, hemostasia primária) vs. articular/muscular profundo com PTTa isoladamente prolongado (hemofilia, hemostasia secundária).
- **Trombofilia hereditária vs. síndrome antifosfolípide** — a primeira é genética (fator V de Leiden, mutação da protrombina, deficiências de proteína C/S/antitrombina), a segunda é adquirida e autoimune, com PTTa prolongado que não corrige com plasma normal e frequentemente associada a perdas gestacionais de repetição.

## 📋 Tabela

| Condição | Plaquetas | TP | PTTa | Fibrinogênio | Achado-chave |
|---|---|---|---|---|---|
| PTT | Baixa | Normal | Normal | Normal | Esquizócitos, ADAMTS-13 baixo |
| CIVD | Baixa | Alto | Alto | Baixo | D-dímero muito alto |
| Von Willebrand | Normal | Normal | Normal/alto | Normal | FvW e fator VIII baixos |
| Hemofilia A/B | Normal | Normal | Alto | Normal | Fator VIII ou IX baixo isolado |
| HIT | Baixa | Normal | Normal | Normal | Trombose, não sangramento |

## 📚 Referências essenciais

- Diretrizes ISTH para microangiopatias trombóticas (PTT) e para trombocitopenia induzida por heparina.
- ASH Guidelines for Management of Venous Thromboembolism — trombose associada a câncer.
- Diretriz ACC/AHA/HRS de manejo perioperatório de anticoagulação em fibrilação atrial.
- World Federation of Hemophilia — Guidelines for the Management of Hemophilia.
`;

export default content.trim();
