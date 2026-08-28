/**
 * Resumo — Hematologia · Distúrbios da hemostasia.
 *
 * Cobre as entidades do assunto no corpus: púrpura trombocitopênica
 * trombótica (PTT), reinício de anticoagulação após hemorragia digestiva,
 * tromboembolismo venoso associado a câncer, doença de von Willebrand,
 * trombofilia hereditária, manejo perioperatório de anticoagulação e
 * reversão de dabigatrana.
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

## 💎 Pearls

- Na PTT, a **tríade clássica** (anemia hemolítica microangiopática + plaquetopenia + disfunção neurológica) pode estar incompleta — não esperar todos os achados para suspeitar e iniciar plasmaférese.
- **ADAMTS-13 baixo** confirma PTT, mas o tratamento não espera o resultado — inicia-se plasmaférese empiricamente diante da suspeita clínica.
- O **escore de risco de sangramento (ex.: HAS-BLED)** orienta cautela, mas não contraindica anticoagulação sozinho — o benefício de prevenir AVC/TEP geralmente supera o risco de ressangramento após controle endoscópico.
- **Apixabana e rivaroxabana têm posologia de indução** (dose mais alta nos primeiros dias/semanas) seguida de dose de manutenção — esquecer essa fase é erro comum de prescrição.
- Sangramento após **extração dentária ou pequenos procedimentos** que se repete em diferentes idades sugere fortemente distúrbio da hemostasia primária (von Willebrand, disfunção plaquetária) mais do que coagulopatia isolada.

## ⚠️ Pitfalls

- **Transfundir plaquetas na PTT** — contraindicado fora de sangramento com risco de vida; alimenta a formação de microtrombos e pode piorar isquemia.
- **Tratar TEV em câncer como TEV não provocado**, sem considerar o risco de sangramento específico do sítio tumoral (GI/GU) na escolha do anticoagulante.
- **Fazer ponte com heparina rotineiramente** ao reiniciar anticoagulação pós-hemorragia digestiva — na maioria dos cenários de FA, a ponte não reduz eventos e aumenta sangramento.
- **Solicitar trombofilia hereditária na fase aguda da trombose ou em vigência de anticoagulação plena** — resultados falseados (proteína C/S artificialmente baixas).
- **Confundir idarucizumabe com reversores de anti-Xa** — são antídotos específicos e não intercambiáveis.

## 📝 Como a banca cobra

**Segundo assunto mais frequente do corpus (9 questões, 4,3%)**, quase todo em cenários de decisão terapêutica prática — anticoagular ou não, qual droga, por quanto tempo.

- **Doença de von Willebrand** apareceu 2 vezes (ENARE 2025 Q23 e ENARE 2026 Q60), ambas com história de sangramento mucocutâneo recorrente desde jovem e plaquetas normais — o padrão-vinheta se repete.
- **TVP/TEP** foi cobrado em três ângulos diferentes: câncer ativo (ENARE 2025 Q13), TVP recorrente com investigação de trombofilia (ENARE 2025 Q24) e anticoagulação padrão com apixabana (ENARE 2026 Q65) — vale estudar os três juntos para fixar quando cada estratégia se aplica.
- **Reversão de dabigatrana** (ENARE 2026 Q80) e **manejo perioperatório de anticoagulação** (ENARE 2025 Q42) testam o lado "de emergência" e o lado "eletivo" do mesmo tema.
- **PTT** (EBSERH 2025 Q49) e **reinício pós-HDA** (EBSERH 2026 Q35) completam o assunto pelo lado do EBSERH.

## 🧠 Conceito e fisiopatologia

A hemostasia primária (plaquetas + fator de von Willebrand, que funciona como ponte entre plaqueta e subendotélio lesado) e a secundária (cascata de coagulação) falham por mecanismos distintos: **deficiência quantitativa/qualitativa de FvW** causa sangramento mucocutâneo por hemostasia primária ineficiente, enquanto **PTT** é causada por deficiência (geralmente autoimune) de **ADAMTS-13**, a protease que cliva multímeros ultralargos de FvW — sem clivagem, esses multímeros formam microtrombos plaquetários espontâneos em múltiplos órgãos, consumindo plaquetas e fragmentando hemácias (esquizócitos).

Em câncer, o estado de hipercoagulabilidade é multifatorial (fator tecidual liberado pelo tumor, estase, compressão vascular, cateteres) — por isso o tratamento costuma ser mais prolongado (enquanto a neoplasia estiver ativa) e a escolha do anticoagulante pesa o risco de sangramento do sítio tumoral.

## 🔎 Diagnóstico

- **PTT:** esfregaço com esquizócitos, plaquetopenia, LDH elevado, bilirrubina indireta elevada, coagulograma normal; ADAMTS-13 confirma mas não atrasa o tratamento.
- **Doença de von Willebrand:** antígeno do FvW, atividade do cofator de ristocetina (FvW:RCo), atividade do fator VIII — os três juntos, não isolados.
- **Trombofilia hereditária:** fator V de Leiden, mutação do gene da protrombina, proteína C, proteína S, antitrombina III, anticorpos antifosfolípides — solicitar fora da fase aguda e da anticoagulação plena.

## 💊 Tratamento

- **PTT:** plasmaférese diária urgente + corticoide; rituximabe em casos refratários ou recidivantes.
- **TEV em câncer:** anticoagulante oral direto (apixabana/rivaroxabana) na maioria dos casos; HBPM preferida em tumor GI/GU de alto risco de sangramento.
- **Reinício pós-HDA em FA:** anticoagulante oral direto entre o 3º e o 7º dia, sem ponte com heparina.
- **Reversão de emergência:** idarucizumabe para dabigatrana; concentrado de complexo protrombínico como alternativa geral quando o antídoto específico não está disponível.
- **Perioperatório com varfarina:** suspender ~5 dias antes, ponte com HBPM só se risco trombótico alto, reavaliar INR no dia anterior.

## 📚 Referências essenciais

- Diretrizes ISTH para microangiopatias trombóticas (PTT).
- ASH Guidelines for Management of Venous Thromboembolism — trombose associada a câncer.
- Diretriz ACC/AHA/HRS de manejo perioperatório de anticoagulação em fibrilação atrial.
`;

export default content.trim();
