/**
 * Resumo — Reumatologia · Manifestações cutâneas.
 *
 * Reorganizado por entidade clínica (cada dermatose tem sua própria seção
 * com quando suspeitar, diagnóstico, tratamento, pearl e pitfall juntos),
 * em vez de picado entre seções genéricas de tipo.
 *
 * Cobre as entidades do assunto no corpus: eritema nodoso associado a
 * contraceptivo oral, pitting ungueal e psoríase, pioderma gangrenoso e
 * hidradenite supurativa moderada a grave. Inclui também extrapolações de
 * alto rendimento (síndromes autoinflamatórias PAPA/PASH/PAPASH, artrite
 * psoriásica pelos critérios CASPAR, complicações sistêmicas de cada
 * dermatose) ainda não cobradas no corpus, mas plausíveis em provas
 * futuras.
 */
const content = `
## 🎯 Essencial

- Nenhuma das dermatoses deste tema é diagnosticada por biópsia isoladamente — o raciocínio clínico (morfologia + contexto sistêmico) sempre precede e orienta a confirmação histológica, quando ela é necessária.
- O padrão organizador do tema é sempre o mesmo: **associar a lesão de pele à doença sistêmica ou ao gatilho por trás dela**, não só reconhecer a morfologia isolada.
- **Ulceração/necrose é o divisor mais discriminativo entre as dermatoses aqui reunidas:** eritema nodoso nunca ulcera; pioderma gangrenoso é definido pela úlcera necrótica — confundir os dois muda completamente a conduta (anti-inflamatório vs. imunossupressão sistêmica, nunca cirurgia agressiva).
- Hidradenite supurativa, doença inflamatória intestinal e pioderma gangrenoso compartilham via inflamatória e podem coexistir no mesmo paciente — sempre rastrear sintomas gastrointestinais diante de qualquer uma dessas três.

## 📝 Como a banca cobra

**Manifestações cutâneas aparece em 4 questões (1,89% do corpus)**, todas do ENARE (2025 e 2026) — o padrão é sempre associar a lesão de pele à doença sistêmica ou ao gatilho por trás dela, não só reconhecer a morfologia isolada.

- **Eritema nodoso associado a contraceptivo oral** (ENARE 2025 Q35) testa o reconhecimento da droga como causa e a conduta de suspensão do agente.
- **Pitting ungueal e psoríase** (ENARE 2026 Q22) cobra a associação entre achado ungueal e risco de artrite psoriásica.
- **Pioderma gangrenoso** (ENARE 2026 Q26) exige diferenciar de infecção e evitar a armadilha do desbridamento cirúrgico.
- **Hidradenite supurativa moderada a grave** (ENARE 2026 Q67) testa a indicação de biológico anti-TNF após falha do tratamento inicial.

## 🧠 Conceito e fisiopatologia

O eritema nodoso resulta de reação de hipersensibilidade tipo IV, com deposição de imunocomplexos e ativação inflamatória no septo do tecido adiposo subcutâneo (paniculite septal), sem vasculite associada — por isso não ulcera. O pioderma gangrenoso é uma dermatose neutrofílica: neutrófilos se acumulam de forma estéril na derme, causando necrose progressiva; a mesma disfunção imune que favorece essa infiltração explica por que o trauma cirúrgico (patergia) desencadeia mais inflamação em vez de cicatrização. A hidradenite supurativa começa por oclusão folicular seguida de ruptura e resposta inflamatória exacerbada, com participação de **TNF-alfa e IL-17** — o que justifica a eficácia dos biológicos que bloqueiam essas vias. A psoríase é mediada pelo eixo **IL-23/Th17**, com hiperproliferação epidérmica acelerada — a mesma via-alvo dos biológicos anti-IL-17 e anti-IL-23 usados tanto na pele quanto na articulação.

## 🔹 Eritema nodoso

- **Quando suspeitar:** nódulos eritematosos, dolorosos, quentes, simétricos, em face anterior das pernas (pré-tibial) — **nunca ulcera ou necrosa**, resolve em 3-6 semanas evoluindo como equimose ("contusiforme"); pode vir com febre e artralgia.
- **Causas clássicas:** infecção estreptocócica, sarcoidose, doença inflamatória intestinal, gestação e **drogas** — anticoncepcional oral e sulfonamidas são os fármacos mais cobrados. Cerca de metade dos casos é idiopática.
- **Diagnóstico:** clínico; se sem causa evidente, investigar com radiografia de tórax (sarcoidose/TB), ASLO/cultura de orofaringe, PPD/IGRA, exame parasitológico e rastreio de DII conforme sintomas associados.
- **Tratamento:** repouso, anti-inflamatório, **suspensão do agente causal** quando identificado (ACO, sulfa); tratar a doença de base se houver.
- 💎 **Pearl:** **síndrome de Löfgren** é a apresentação aguda e mais benigna da sarcoidose — tríade de eritema nodoso + adenopatia hilar bilateral + artralgia (geralmente de tornozelos), costuma resolver espontaneamente e não exige biópsia para confirmar sarcoidose.
- ⚠️ **Pitfall:** tratar eritema nodoso como celulite bacteriana e prescrever antibiótico empírico sem investigar causa sistêmica/medicamentosa; ou confundir com **eritema indurado de Bazin** (vasculite nodular associada a tuberculose, face posterior da perna, **pode** ulcerar — diferente do eritema nodoso).
- 📝 **Como caiu:** ENARE 2025 Q35 — reconhecimento da droga como causa e suspensão do agente.

## 🔹 Psoríase ungueal e artrite psoriásica

- **Quando suspeitar:** **pitting ungueal (unhas em dedal), onicólise e hiperceratose subungueal** — mesmo sem placa cutânea evidente, são pista para investigar artrite psoriásica em paciente com queixa articular.
- **Quadro cutâneo:** placas eritemato-descamativas em superfícies extensoras (cotovelo, joelho) e couro cabeludo na forma vulgar/em placas; formas gutata (gotas), invertida (dobras, sem escama), pustulosa e eritrodérmica são variantes mais graves e potencialmente sistêmicas.
- **Diagnóstico:** aplicar critérios **CASPAR** para artrite psoriásica; radiografia de mãos/pés e provas inflamatórias quando há dúvida.
- **Tratamento:** tópicos (corticoide, análogo de vitamina D) para doença leve; fototerapia e sistêmicos convencionais (metotrexato, acitretina, ciclosporina) para moderada; biológicos (anti-TNF, anti-IL-17, anti-IL-23) para grave ou com artrite associada.
- 💎 **Pearl:** psoríase ungueal isolada é fator de risco **independente** para desenvolvimento de artrite psoriásica, mesmo sem placas cutâneas visíveis — e psoríase moderada a grave é fator de risco independente para eventos cardiovasculares e síndrome metabólica, não apenas um problema de pele.
- ⚠️ **Pitfall:** ignorar pitting ungueal como achado "só estético"; ou não rastrear síndrome metabólica e risco cardiovascular em psoríase moderada a grave.
- 📝 **Como caiu:** ENARE 2026 Q22.

## 🔹 Pioderma gangrenoso

- **Quando suspeitar:** úlcera de crescimento rápido, bordas violáceas e solapadas, dor desproporcional ao aspecto inicial — associada a **doença inflamatória intestinal (principalmente retocolite ulcerativa), artrite reumatoide e neoplasias mieloproliferativas**. Variantes: ulcerativa clássica (membros inferiores), bolhosa/atípica (associada a neoplasia mieloide), pustulosa (surto de DII) e vegetante (superficial, mais indolente).
- **Diagnóstico:** de **exclusão** — biópsia de borda da lesão serve para **excluir** infecção, vasculite e neoplasia, apoiada pelos critérios de Delphi (2018); não confirma o diagnóstico por si só. Investigação adicional conforme suspeita: hemograma, colonoscopia se sintomas gastrointestinais, eletroforese de proteínas se suspeita de gamopatia associada.
- **Tratamento:** corticoide sistêmico ou imunossupressor (ciclosporina) nos casos moderados/graves; corticoide tópico potente ou intralesional em lesões pequenas; **infliximabe** é a opção biológica com melhor evidência, sobretudo com DII associada; curativo **não agressivo**.
- 💎 **Pearl:** **patergia** — trauma/desbridamento cirúrgico agressivo **piora** a lesão; a biópsia deve ser limitada e conservadora, e o tratamento é imunossupressão sistêmica, nunca cirurgia extensa. A cicatriz residual característica é atrófica, em "papel crepom"/cribriforme.
- ⚠️ **Pitfall:** indicar desbridamento cirúrgico amplo (a patergia piora a lesão); ou tratar com antibioticoterapia isolada — a lesão é inflamatória (dermatose neutrofílica), não infecciosa primária.
- 📝 **Como caiu:** ENARE 2026 Q26.

## 🔹 Hidradenite supurativa

- **Quando suspeitar:** doença inflamatória crônica do folículo piloso em áreas intertriginosas (axilas, virilha, região inframamária, perianal) — nódulos dolorosos, abscessos recorrentes, fístulas e cicatrizes em "corda", odor.
- **Estadiamento:** sistema de **Hurley (I a III)** orienta a escolha entre tratamento tópico, oral, biológico ou cirúrgico; o **IHS4** é escore dinâmico mais usado em ensaios clínicos para medir atividade.
- **Diagnóstico:** clínico; ultrassonografia de partes moles mapeia trajetos fistulosos antes de decisão cirúrgica.
- **Tratamento escalonado:** Hurley I — tópico (clindamicina) e antisséptico; Hurley II — antibiótico oral (doxiciclina, ou clindamicina+rifampicina) associado a corticoide intralesional; **Hurley III/refratária — adalimumabe** (primeira linha entre os biológicos) **ou secuquinumabe** (anti-IL-17, alternativa mais recente); doença cicatricial avançada — exérese cirúrgica ampla ou deroofing das lesões localizadas.
- 💎 **Pearl:** tabagismo é o fator de risco modificável mais fortemente associado à hidradenite — cessação melhora a resposta a qualquer tratamento instituído. Em fístulas de longa duração, risco raro de **carcinoma espinocelular** originado no trajeto fistuloso (síndrome de Marjolin).
- ⚠️ **Pitfall:** retardar indefinidamente o biológico em doença moderada a grave, insistindo apenas em tratamento tópico quando já há falha terapêutica documentada.
- 📝 **Como caiu:** ENARE 2026 Q67.

## 🔹 Síndromes autoinflamatórias que unem pioderma gangrenoso e hidradenite

- **PAPA, PASH e PAPASH:** lembrar quando há múltiplas dermatoses neutrofílicas (pioderma gangrenoso, acne, hidradenite) no mesmo paciente jovem com história familiar — reforça a ideia de espectro inflamatório compartilhado entre as duas doenças.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**Diagnóstico diferencial das úlceras/nódulos de perna**

| Entidade | Localização | Dor | Ulcera? |
|---|---|---|---|
| Eritema nodoso | Face anterior da perna | Sim | Nunca |
| Eritema indurado de Bazin (associado a TB) | Face posterior da perna | Sim | Pode ulcerar |
| Pioderma gangrenoso | Qualquer local, mais MMII | Desproporcional | Sim, sempre |
| Ectima gangrenoso (infeccioso, *Pseudomonas*) | Qualquer local | Variável | Sim, em imunossuprimido |

## 📚 Referências essenciais

- Consenso Brasileiro de Psoríase — Sociedade Brasileira de Dermatologia.
- Diretrizes europeias (EADV/S3) para manejo da hidradenite supurativa.
- Critérios de Delphi (2018) para diagnóstico de pioderma gangrenoso.
- UpToDate — Erythema nodosum e Pyoderma gangrenosum: pathogenesis, clinical features and diagnosis.
`;

export default content.trim();
