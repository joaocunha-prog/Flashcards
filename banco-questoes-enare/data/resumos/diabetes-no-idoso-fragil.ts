/**
 * Resumo — Geriatria · Diabetes no idoso frágil.
 *
 * Tema coeso (sem split por entidade) — é um recorte geriátrico específico
 * do manejo de diabetes mellitus tipo 2, focado em individualização de
 * metas conforme o grau de fragilidade/complexidade clínica do idoso.
 * Complementa (sem duplicar) o resumo de "diabetes-mellitus", que cobre o
 * tema de forma mais geral — aqui o eixo é a estratificação por categoria
 * de fragilidade e a definição numérica exata das metas em cada categoria.
 *
 * Cobre a questão real do corpus (ENARE 2026 Q57 — definição da meta de
 * HbA1c e glicemia de jejum para idoso frágil com sarcopenia, quedas
 * recorrentes e demência moderada). Assunto de baixa incidência no banco
 * (1 questão, cauda longa, fora do corte 80/20), mas o restante do resumo é
 * extrapolado com profundidade de alto rendimento: as três categorias de
 * complexidade/fragilidade (ADA/Endocrine Society), desprescrição de
 * hipoglicemiantes de alto risco e cuidados de "desintensificação".
 */
const content = `
## 🎯 Essencial

- **Metas glicêmicas no idoso NÃO são fixas — dependem do grau de fragilidade, expectativa de vida e presença de comorbidades/declínio funcional-cognitivo.** Quanto mais frágil o idoso, mais flexível (mais alta) deve ser a meta de HbA1c, priorizando **evitar hipoglicemia** sobre "normalizar" a glicemia.
- **Três categorias de complexidade clínica** (adaptadas de ADA/Endocrine Society) organizam a individualização: **saudável/funcionalmente independente** (meta HbA1c <7-7,5%), **complexidade/saúde intermediária** (comorbidades múltiplas, declínio funcional leve-moderado — meta HbA1c <8%), e **muito complexo/frágil** (doença crônica em estágio avançado, declínio cognitivo/funcional moderado-grave, expectativa de vida limitada — meta HbA1c <8,5%).
- **Idoso frágil (sarcopenia, quedas recorrentes, demência moderada, perda ponderal não intencional):** meta de HbA1c **<8%** e glicemia de jejum **90-150 mg/dL**, evitando tanto a hiperglicemia sintomática (poliúria, desidratação, infecções) quanto o risco de hipoglicemia — que nesse perfil é desproporcionalmente perigoso (queda, fratura, arritmia, confusão aguda).
- **Hipoglicemia é mais perigosa que hiperglicemia moderada no idoso frágil** — a contrarregulação hormonal é mais lenta, a neuropatia autonômica pode mascarar os sintomas de alerta, e uma única hipoglicemia grave pode precipitar queda com fratura ou evento cardiovascular agudo.
- **Desintensificação/desprescrição** é conduta ativa e recomendada no idoso frágil polimedicado com controle "rígido demais" para o perfil clínico — reduzir ou suspender fármacos de alto risco de hipoglicemia (sulfonilureia, insulina em excesso) quando a meta terapêutica não justifica mais o risco.

## 💎 Pearls

- **Sarcopenia, quedas de repetição e demência são marcadores clínicos práticos de fragilidade** que, combinados, já classificam o idoso na categoria "muito complexo/frágil" — não é preciso aplicar formalmente o fenótipo de Fried ou EWGSOP2 para tomar a decisão clínica de flexibilizar a meta.
- **Metformina permanece segura e é preferida mesmo no idoso frágil**, desde que a função renal permita (contraindicada com TFG <30 mL/min/1,73m²) — o baixo risco de hipoglicemia intrínseco à droga a torna atrativa mesmo com metas mais flexíveis.
- **Inibidores de SGLT2 e agonistas de GLP-1** têm baixo risco de hipoglicemia e benefício cardiovascular/renal, mas exigem cautela em idoso muito frágil, com baixo peso ou risco de depleção de volume (SGLT2) e perda ponderal indesejada já presente (GLP-1) — a decisão deve pesar o objetivo terapêutico predominante (controle glicêmico vs. proteção de órgão-alvo vs. risco de efeitos adversos).
- **Sulfonilureias são a classe de maior risco de hipoglicemia grave no idoso** e, quando possível, devem ser evitadas ou descontinuadas em idosos frágeis, especialmente as de meia-vida mais longa (glibenclamida).
- **Rastreio de hipoglicemia despercebida:** perguntar ativamente sobre sintomas atípicos (confusão, sonolência, quedas inexplicadas) em vez de esperar os sintomas adrenérgicos clássicos, que podem estar ausentes por neuropatia autonômica ou uso de betabloqueador.
- Diante de expectativa de vida muito limitada (cuidados paliativos, doença terminal), o foco terapêutico muda de "prevenção de complicação crônica a longo prazo" para **conforto e prevenção de sintomas agudos de hiperglicemia** — mesmo metas de HbA1c <8,5% podem ser flexibilizadas ainda mais nesse contexto específico.

## ⚠️ Pitfalls

- **Perseguir HbA1c <7% em idoso frágil "porque é a meta padrão do adulto"** — ignora o balanço risco-benefício específico dessa população e aumenta desnecessariamente o risco de hipoglicemia grave.
- **Confundir a meta do idoso "saudável/funcionalmente independente" com a do idoso "frágil"** — nem todo paciente idoso deve ter a meta mais flexível; a individualização exige classificar corretamente a categoria de complexidade antes de definir a meta.
- **Manter sulfonilureia ou esquema insulínico intensivo em idoso com múltiplas quedas e declínio cognitivo**, sem reconsiderar desintensificação — perpetua risco evitável de hipoglicemia grave.
- **Ignorar a glicemia de jejum e focar só na HbA1c** — as duas metas (HbA1c e glicemia capilar/jejum) devem ser avaliadas em conjunto, já que a HbA1c pode não refletir variabilidade glicêmica importante (hipoglicemias intercaladas com hiperglicemias) em idosos frágeis.
- **Achar que "controle mais apertado é sempre melhor" também vale para prevenção de complicação microvascular no idoso frágil** — o horizonte de tempo necessário para o benefício microvascular do controle rígido (anos) frequentemente excede a expectativa de vida relevante nesse perfil de paciente, invertendo o balanço risco-benefício.

## 📝 Como a banca cobra

**Diabetes no idoso frágil é um assunto de baixa incidência no corpus — apenas 1 questão registrada** (ENARE 2026 Q57, classificada como MÉDIA), com vinheta clássica de idoso muito complexo/frágil (82 anos, sarcopenia, quedas de repetição, doença de Alzheimer moderada, perda ponderal significativa) pedindo a meta numérica exata de HbA1c e glicemia de jejum — resposta correta HbA1c <8% e glicemia de jejum 90-150 mg/dL, testando a memorização precisa dos números de cada categoria de complexidade, não apenas o conceito qualitativo de "flexibilizar a meta".

Apesar de só ter aparecido uma vez no banco até agora, é um tema de **alto rendimento para provas de residência médica**, porque combina dois eixos muito valorizados em concursos — geriatria (avaliação funcional/cognitiva) e endocrinologia (metas terapêuticas) — em uma pergunta objetiva com resposta numérica exata, formato que bancas repetem com frequência. Vale a pena memorizar as três faixas de meta de HbA1c e as faixas de glicemia de jejum correspondentes.

## 🧠 Conceito

A individualização de metas glicêmicas no idoso nasce do reconhecimento de que o benefício do controle glicêmico rígido é predominantemente de longo prazo (prevenção de complicações microvasculares), enquanto o risco de hipoglicemia é imediato e desproporcionalmente grave nessa população — pela contrarregulação hormonal mais lenta, maior prevalência de neuropatia autonômica (mascarando sintomas de alerta), função renal reduzida (prolongando o efeito de drogas hipoglicemiantes) e polifarmácia (interações). Por isso a meta deixa de ser definida só pela idade cronológica e passa a depender da **expectativa de vida relevante**, da **capacidade funcional e cognitiva** e da **presença de comorbidades que aumentam o risco do tratamento** — o mesmo racional por trás da desintensificação terapêutica ativa quando o paciente evolui de uma categoria de complexidade para outra mais frágil.

## 📊 Classificação — categorias de complexidade e metas

| Categoria | Perfil clínico | Meta de HbA1c | Meta de glicemia de jejum |
|---|---|---|---|
| Saudável/funcionalmente independente | Poucas comorbidades crônicas, cognição e funcionalidade preservadas, expectativa de vida longa | <7-7,5% | 80-130 mg/dL |
| Complexidade/saúde intermediária | Múltiplas comorbidades crônicas, declínio funcional leve a moderado (2+ dependências em AIVD ou comprometimento cognitivo leve) | <8% | 90-150 mg/dL |
| Muito complexo/frágil | Doença crônica em estágio final, declínio cognitivo moderado a grave (demência), dependência funcional relevante, expectativa de vida limitada | <8-8,5% (individualizar, evitando sintomas de hiperglicemia) | 100-180 mg/dL |

A vinheta da questão real do corpus (sarcopenia, quedas recorrentes, Alzheimer moderado, perda ponderal significativa) se encaixa na categoria intermediária a muito frágil — a resposta considerada correta (HbA1c <8%, glicemia de jejum 90-150 mg/dL) reflete esse ponto de corte.

## 💊 Tratamento

- **Priorizar classes de baixo risco de hipoglicemia:** metformina (se função renal permitir), inibidores de SGLT2, agonistas de GLP-1 e inibidores de DPP-4 — todos com risco intrínseco de hipoglicemia baixo quando usados em monoterapia.
- **Evitar ou desprescrever sulfonilureias** em idosos frágeis, sobretudo as de meia-vida longa.
- **Simplificar esquemas insulínicos complexos** (múltiplas aplicações, correções frequentes) quando o ganho de controle rígido não compensa mais o risco de hipoglicemia e o ônus de adesão/aplicação em paciente com declínio cognitivo/funcional.
- **Reavaliar periodicamente a categoria de complexidade** — a fragilidade é dinâmica; um idoso "saudável" pode evoluir para "muito complexo" após evento agudo (fratura, AVC, hospitalização prolongada), exigindo nova definição de meta.
- **Envolver cuidador/família na decisão terapêutica** quando há declínio cognitivo relevante, já que a adesão e o reconhecimento de sintomas de hipoglicemia passam a depender também de terceiros.

## 📚 Referências essenciais

- ADA — Standards of Care in Diabetes, seção de manejo do diabetes no idoso (categorias de complexidade clínica e individualização de metas).
- Endocrine Society — Clinical Practice Guideline for Treatment of Diabetes in Older Adults.
`;

export default content.trim();
