/**
 * Resumo — Nefrologia · Rim em situações especiais.
 *
 * Reorganizado por entidade clínica (cada situação renal especial tem sua
 * própria seção com quando suspeitar, diagnóstico, tratamento, pearl e
 * pitfall juntos) — o assunto reúne mecanismos de lesão renal totalmente
 * distintos (cristalização, embolização, nefrotoxicidade tubular direta,
 * rabdomiólise), então misturá-los em seções de tipo genérico escondia a
 * lógica de cada um.
 *
 * Cobre as entidades do assunto no corpus: fatores de risco para
 * nefrolitíase (hipoparatireoidismo como exceção), nefrotoxicidade de
 * polimixina e aminoglicosídeo (túbulo proximal), doença ateroembólica de
 * colesterol (incluindo pós-cateterismo), terapia expulsiva na
 * nefrolitíase e profilaxia do cálculo de oxalato de cálcio. Também traz,
 * como extrapolação de alto rendimento além do que já caiu em prova, a
 * classificação completa dos tipos de cálculo renal, outras nefrotoxinas
 * clássicas (contraste iodado, AINE), a cistinúria e a rabdomiólise como
 * situações renais especiais adicionais.
 */
const content = `
## 🎯 Essencial

- Diante de piora aguda/subaguda de creatinina, a primeira pergunta é **tempo desde a exposição/procedimento**: nefropatia por contraste piora em **24-48h**; doença ateroembólica piora em **dias a semanas** — o mesmo cateterismo pode causar as duas, e o intervalo temporal é o principal discriminador.
- Fatores de risco clássicos para nefrolitíase: hipercalciúria, hiperoxalúria, hipocitratúria, baixo volume urinário e **hiperparatireoidismo**. O **hipoparatireoidismo é a exceção** — cursa com hipocalcemia e reduz o risco.
- **Polimixinas e aminoglicosídeos** são nefrotóxicos por lesão direta do **túbulo proximal**, causando necrose tubular aguda tipicamente não oligúrica, dose-dependente e cumulativa.
- Nem todo cálculo renal é de cálcio: **ácido úrico** (radiotransparente, urina persistentemente ácida), **estruvita/infecção** (bactérias produtoras de urease) e **cistina** (doença genética rara) completam a classificação e mudam a estratégia de prevenção.

## 📝 Como a banca cobra

**Rim em situações especiais aparece em 6 questões (2,83% do corpus)** — 4 do ENARE e 2 do EBSERH, alternando entre nefrolitíase (mecanismo/conduta) e nefropatias tóxicas/vasculares específicas.

- **Fatores de risco para nefrolitíase** (EBSERH 2025 Q48) testa especificamente a exceção do hipoparatireoidismo em meio a uma lista de fatores de risco reais.
- **Nefrotoxicidade de polimixina e aminoglicosídeo** (EBSERH 2026 Q45) cobra o mecanismo de lesão no túbulo proximal.
- **Doença ateroembólica de colesterol** apareceu 2 vezes (ENARE 2025 Q10, questão difícil, e ENARE 2026 Q63), ambas em contexto pós-cateterismo — vinheta recorrente que vale fixar (piora renal subaguda + livedo + eosinofilia).
- **Nefrolitíase** completa o assunto pelo lado terapêutico: terapia expulsiva (ENARE 2025 Q75) e profilaxia do cálculo de oxalato de cálcio (ENARE 2026 Q73).
- **Rabdomiólise, nefropatia por contraste/AINE e cistinúria ainda não foram cobradas isoladamente** — completam o mesmo raciocínio de "situação renal especial" e são candidatas naturais de alto rendimento.

## 🧠 Conceito e fisiopatologia

- **Cálculos de cálcio** formam-se quando a urina fica supersaturada de sais de cálcio, favorecida por hipercalciúria, hiperoxalúria, hipocitratúria (o citrato normalmente quela cálcio e inibe a cristalização) e baixo volume urinário
- Hiperparatireoidismo primário aumenta a reabsorção óssea e a absorção intestinal de cálcio, elevando a calciúria; o hipoparatireoidismo faz o oposto
- **Doença ateroembólica:** manipulação mecânica de aorta/grande artéria com placa instável libera êmbolos de cristais de colesterol que ocluem pequenas artérias e arteríolas (pele, rins, retina, trato gastrointestinal) → resposta inflamatória local + oclusão progressiva explicam a evolução **subaguda**, diferente da agressão tóxica direta e imediata do contraste
- **Aminoglicosídeos e polimixinas** são captados ativamente pelo túbulo proximal (via megalina, no caso dos aminoglicosídeos), acumulando-se em concentração muito maior que a plasmática

💡 Pensa assim: contraste "agride e some" (24-48h); êmbolo de colesterol "entope aos poucos e inflama" (dias a semanas) — o relógio do dano é o discriminador entre as duas causas de piora renal pós-cateterismo.

## 🔹 Fatores de risco para nefrolitíase de cálcio

- **Fatores que aumentam risco:** hipercalciúria (incluindo hipercalciúria idiopática, a causa metabólica mais comum quando nenhuma doença sistêmica é identificada), hiperoxalúria, hipocitratúria, baixo volume urinário, hiperparatireoidismo primário.
- **A exceção clássica:** **hipoparatireoidismo** cursa com hipocalcemia/hipocalciúria e **reduz** o risco — é o oposto do hiperparatireoidismo, apesar de ambos serem "distúrbios do cálcio".
- 💎 **Pearl:** dieta hipossódica é medida eficaz mesmo sem hiperparatireoidismo associado, pois o sódio compete com o cálcio na reabsorção tubular proximal — reduzir sódio reduz calciúria independentemente da causa.
- ⚠️ **Pitfall:** considerar hipoparatireoidismo como fator de risco adicional — é o oposto, reduz o risco.
- 📝 **Como caiu:** EBSERH 2025 Q48 — exceção do hipoparatireoidismo.

## 🔹 Terapia expulsiva e tratamento intervencionista da nefrolitíase

- **Conduta:** para cálculo ureteral geralmente <10mm, **alfabloqueador (tansulosina)** relaxa a musculatura lisa ureteral, facilitando a passagem espontânea; associada a analgesia e hidratação, com acompanhamento por até 4-6 semanas antes de intervenção se não eliminado.
- **Quando intervir:** cálculos >10mm ou que falharam terapia expulsiva geralmente exigem litotripsia extracorpórea (cálculos pequenos/moderados de localização favorável), ureteroscopia com litotripsia a laser (cálculos ureterais maiores) ou nefrolitotomia percutânea (cálculos grandes/coraliformes) — a composição provável do cálculo importa: cistina e oxalato de cálcio monoidratado são mais duros e respondem mal à litotripsia extracorpórea.
- 💎 **Pearl:** a terapia expulsiva funciona melhor em cálculos ureterais distais e de tamanho intermediário.
- 📝 **Como caiu:** ENARE 2025 Q75.

## 🔹 Profilaxia do cálculo de oxalato de cálcio

- **Conduta:** **aumentar a ingesta hídrica** (principal medida), reduzir sódio e proteína animal na dieta, **manter ingesta de cálcio adequada (não restringir)** — o cálcio dietético se liga ao oxalato no intestino, reduzindo sua absorção — e considerar citrato de potássio se houver hipocitratúria.
- 💎 **Pearl:** restringir cálcio dietético é conduta contraintuitiva e **errada** — reduz o cálcio disponível para se ligar ao oxalato no intestino, aumentando sua absorção e excreção urinária.
- ⚠️ **Pitfall:** restringir cálcio da dieta "para prevenir" o cálculo de oxalato — piora a hiperoxalúria.
- 📝 **Como caiu:** ENARE 2026 Q73.

## 🔹 Nefrotoxicidade tubular por aminoglicosídeo e polimixina

- **Quando suspeitar:** geralmente assintomática do ponto de vista renal isolado — detectada pela elevação progressiva de creatinina durante o tratamento, sem sintomas urinários específicos; toxicidade **cumulativa mesmo com níveis séricos "terapêuticos"**.
- **Diagnóstico:** elevação progressiva de creatinina durante o tratamento, geralmente não oligúrica, sedimento com cilindros granulosos.
- **Tratamento:** suspensão ou ajuste do agente nefrotóxico assim que detectada, suporte hídrico e eletrolítico.
- ⚠️ **Pitfall:** não monitorar função renal seriadamente durante uso prolongado, assumindo que a dose "ajustada" elimina o risco — a toxicidade tubular é cumulativa mesmo em doses corretas.
- 📝 **Como caiu:** EBSERH 2026 Q45.

## 🔹 Doença ateroembólica de colesterol

- **Quando suspeitar:** piora renal **subaguda (dias a semanas)** após manipulação de grandes vasos (cateterismo, cirurgia vascular, uso de trombolítico/anticoagulante) — diferente da nefropatia por contraste, que piora em 24-48h.
- **Achados de suporte:** livedo reticular, "dedo azul" (blue toe syndrome) com **pulsos periféricos preservados**, eosinofilia e eosinofilúria transitórias (não específica — também ocorre em nefrite intersticial alérgica; o contexto de procedimento vascular recente é o que fecha o diagnóstico), hipocomplementemia transitória, podendo haver amaurose fugaz (embolização retiniana) e dor abdominal (embolização mesentérica).
- **Fator predisponente farmacológico:** o uso concomitante de anticoagulante ou trombolítico pode precipitar ou agravar o quadro ao desestabilizar o trombo protetor sobre a placa aterosclerótica ulcerada.
- **Diagnóstico:** clínico e laboratorial em contexto de procedimento vascular recente; biópsia (pele ou rim) com cristais de colesterol em formato de fenda confirma quando necessário.
- **Tratamento:** suporte, controle de fatores de risco cardiovascular, **suspensão de anticoagulante/trombolítico quando possível** — não há terapia específica revertedora.
- ⚠️ **Pitfall:** anticoagular ou usar trombolítico como "tratamento" da doença ateroembólica — pelo contrário, é fator desencadeante e deve ser evitado quando possível. Atribuir toda piora renal pós-cateterismo a nefropatia por contraste sem considerar o intervalo temporal.
- 📝 **Como caiu:** ENARE 2025 Q10 (difícil) · ENARE 2026 Q63 — ambas pós-cateterismo.

## 🔹 Nefropatia por contraste iodado

- **Quando suspeitar:** piora aguda de creatinina em **24-48h** após exposição a contraste, em paciente de risco (DRC prévia, diabetes, desidratação).
- **Diagnóstico:** definida por elevação de creatinina ≥0,3 mg/dL ou ≥50% do basal dentro de 48-72h após exposição, na ausência de outra causa.
- **Mecanismo:** vasoconstrição da arteríola aferente e toxicidade tubular direta.
- **Prevenção:** hidratação IV com solução salina isotônica antes e após o procedimento em paciente de risco; suspender temporariamente AINE/diurético quando possível; usar o menor volume de contraste necessário.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Nefropatia por AINE

- **Mecanismo:** mesmo mecanismo de vasoconstrição da arteríola aferente da nefropatia por contraste (por inibição de prostaglandinas vasodilatadoras), particularmente perigoso quando associado a outros agentes que reduzem a perfusão renal.
- 💎 **Pearl:** a combinação **AINE + IECA/BRA + diurético** ("tríplice whammy") é de alto risco para lesão renal aguda pré-renal/tubular — cada droga isolada é segura na maioria dos pacientes, mas a combinação das três eleva substancialmente o risco.
- **Tratamento:** suspensão do agente é a principal medida; monitorização de função renal e eletrólitos até recuperação.
- ⚠️ **Pitfall:** manter a combinação "tríplice whammy" sem reconhecer o risco cumulativo, especialmente em paciente idoso ou desidratado.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Rabdomiólise

- **Quando suspeitar:** dor e edema muscular, urina escura ("cor de coca-cola"), fraqueza muscular, história de trauma, exercício extenuante, imobilização prolongada ou uso de estatina/álcool/drogas ilícitas.
- **Mecanismo:** mioglobina livre lesa o túbulo por três vias simultâneas — obstrução por cilindros (favorecida por urina ácida), vasoconstrição renal (consumo de óxido nítrico local) e toxicidade direta pelo ferro do grupo heme (radicais livres).
- **Diagnóstico:** CPK muito elevada (tipicamente >5.000-10.000 U/L), mioglobinúria, urina positiva para sangue na fita sem hemácias ao sedimento (reação cruzada da mioglobina).
- **Tratamento:** **hidratação IV vigorosa e precoce** é a medida mais eficaz de prevenção (dilui a mioglobina tubular e mantém fluxo urinário alto, mais custo-efetiva que a alcalinização urinária, cujo benefício adicional é discutido); correção de distúrbios eletrolíticos associados (hipercalemia, hiperfosfatemia).
- ⚠️ **Pitfall:** retardar hidratação agressiva por priorizar apenas o controle da causa muscular de base — a lesão renal se instala rapidamente se a expansão volêmica não for precoce.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Cistinúria

- **Quando suspeitar:** nefrolitíase recorrente desde a infância/adolescência com história familiar positiva — doença autossômica recessiva por defeito no transporte tubular de aminoácidos dibásicos (cistina, ornitina, lisina, arginina).
- **Diagnóstico:** cristais hexagonais característicos no sedimento urinário (cálculos radiopacos, mas com densidade menor que os de cálcio); teste de nitroprussiato de cianeto como triagem; cromatografia de aminoácidos urinários confirma.
- **Tratamento:** hidratação vigorosa (>3L/dia), alcalinização urinária com citrato de potássio; tiopronina ou D-penicilamina (quelantes que solubilizam a cistina) em casos refratários.
- ⚠️ **Pitfall:** não considerar cistinúria em criança/adolescente com nefrolitíase recorrente e história familiar, atribuindo os episódios apenas a "má hidratação".
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

| Tipo de cálculo | Contexto/mecanismo | Particularidade |
|---|---|---|
| Oxalato/fosfato de cálcio | Hipercalciúria, hiperoxalúria, hipocitratúria | Maioria dos casos; não restringir cálcio dietético |
| Ácido úrico | Urina persistentemente ácida (síndrome metabólica, gota) | Radiotransparente; único dissolvível com alcalinização |
| Estruvita (fosfato de amônio-magnésio) | Bactérias produtoras de urease (*Proteus*) | Coraliforme; exige remoção completa + antibiótico |
| Cistina | Defeito genético de transporte tubular | Recorrente desde a infância; hidratação + alcalinização |

## 📚 Referências essenciais

- Diretriz da AUA (American Urological Association) para manejo de nefrolitíase.
- KDIGO Clinical Practice Guideline for Acute Kidney Injury.
- KDIGO Clinical Practice Guideline for the Prevention, Diagnosis and Management of Contrast-Associated Acute Kidney Injury.
- Revisões de referência sobre síndrome de embolização por colesterol na literatura nefrológica.
`;

export default content.trim();
