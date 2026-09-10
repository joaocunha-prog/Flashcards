/**
 * Resumo — Hematologia · Neutropenia febril.
 *
 * Cobre definição, estratificação de risco e antibioticoterapia empírica da
 * neutropenia febril em paciente oncológico, com foco na necessidade de
 * cobertura antipseudomonas de primeira linha — eixo cobrado na única
 * questão real do corpus para este assunto (EBSERH 2025 Q53). Assunto de
 * baixa incidência no corpus (1 questão), fora do corte 80/20, mas
 * extrapolado com profundidade de alto rendimento por ser emergência
 * oncológica clássica de prova de residência.
 */
const content = `
## 🎯 Essencial

- **Neutropenia febril é emergência médica** — febre (temperatura única ≥38,3°C, ou ≥38°C sustentada por ≥1h) em paciente com **neutrófilos <500/mm³** (ou <1.000/mm³ com previsão de queda para <500 em 48h) exige **antibioticoterapia empírica de amplo espectro na primeira hora**, sem esperar confirmação microbiológica.
- **A cobertura empírica inicial deve sempre incluir atividade antipseudomonas** — mesmo sem foco infeccioso definido, *Pseudomonas aeruginosa* é um patógeno com potencial de deterioração rapidíssima em neutropênico, e a antibioticoterapia inicial precisa cobri-la por padrão, não apenas quando há sinais específicos de infecção por gram-negativo.
- **Monoterapia com beta-lactâmico antipseudomonas de amplo espectro é a estratégia padrão**: cefepime, piperacilina-tazobactam ou um carbapenêmico (meropenem/imipenem) — a escolha não depende de esperar hemocultura, e sim de iniciar imediatamente e ajustar depois conforme evolução e cultura.
- **Instabilidade hemodinâmica (choque séptico) não muda a lógica antipseudomonas — reforça-a**: nesse cenário, considera-se associar um segundo agente antipseudomonas (aminoglicosídeo ou fluoroquinolona) e/ou cobertura para gram-positivo resistente (vancomicina) conforme fatores de risco, mas a base segue sendo o beta-lactâmico antipseudomonas — não amoxicilina-clavulanato nem esquemas orais.
- **Esquemas orais (ex.: amoxicilina-clavulanato + ciprofloxacino) só se aplicam a pacientes de BAIXO risco**, clinicamente estáveis, com neutropenia esperada de curta duração e sem comorbidade significativa — nunca em paciente instável, com sinais de sepse ou alto risco (ex.: neutropenia profunda e prolongada esperada, mucosite, comorbidade descompensada).
- **Não se espera resultado de hemocultura para iniciar o antibiótico** — colhem-se as culturas e inicia-se o esquema empírico imediatamente; atrasar o início por causa do foco infeccioso ou da cultura aumenta mortalidade.

## 💎 Pearls

- Ferramentas de estratificação de risco (como o escore MASCC) ajudam a decidir entre manejo ambulatorial com antibiótico oral (baixo risco) e internação com antibiótico IV (alto risco) — mas a decisão de cobrir Pseudomonas de início é praticamente universal em quem já está internado ou instável.
- Neutropenia febril em paciente sem foco clínico aparente ainda assim recebe antibiótico de amplo espectro — "sem foco" não significa "sem risco", e não é motivo para adiar tratamento.
- A febre pode ser a **única manifestação de infecção grave** no neutropênico — sinais clássicos de inflamação (calor, rubor, pus) ficam atenuados pela ausência de neutrófilos, então o exame físico costuma "mentir para menos".
- Fatores associados a maior risco de infecção por *Pseudomonas* especificamente incluem neutropenia profunda e prolongada, mucosite grave, uso de cateter venoso central e colonização prévia conhecida — mas, na prática de prova, a cobertura antipseudomonas de início é a resposta esperada mesmo sem esses fatores destacados no enunciado.
- Fatores de crescimento (G-CSF) podem ser considerados em pacientes de alto risco ou com neutropenia profunda prolongada, mas não substituem a antibioticoterapia empírica imediata.
- Vancomicina (ou outro agente anti-MRSA) só deve ser adicionada de rotina diante de indicações específicas (instabilidade hemodinâmica, infecção de cateter suspeita, colonização conhecida por MRSA, mucosite grave com risco de translocação por *Streptococcus* resistente) — adicionar de rotina em todo paciente é sobretratamento.

## ⚠️ Pitfalls

- **Esperar o resultado do foco infeccioso ou da hemocultura para escolher o antibiótico** — atraso terapêutico é o maior erro possível nesse cenário, associado a aumento de mortalidade.
- **Prescrever esquema oral (amoxicilina-clavulanato + ciprofloxacino) em paciente instável** — esse esquema é reservado a baixo risco, estável, sem os sinais de gravidade típicos da vinheta clássica de prova (hipotensão, taquicardia, taquipneia, hipóxia).
- **Achar que "sem neutropenia ainda" dispensa cobertura de amplo espectro** — no enunciado clássico de prova, o paciente já preenche critério de neutropenia (<500/mm³); confundir a contagem de leucócitos totais com a contagem absoluta de neutrófilos é armadilha comum (sempre calcular: leucócitos totais × % de neutrófilos + % de bastonetes, se disponível).
- **Retardar o antibiótico para "definir o foco primeiro"** — cobertura antipseudomonas empírica de amplo espectro não depende de foco identificado.
- **Considerar antibiótico "mais potente possível" (ex.: carbapenêmico + vancomicina + antifúngico) em toda neutropenia febril, independentemente do risco** — sobretratamento tem custo real (toxicidade, seleção de resistência, Clostridioides difficile); a escalada segue estratificação de risco e evolução clínica, não "quanto mais forte, melhor" de forma indiscriminada.

## 🩺 Quadro clínico

Febre isolada é frequentemente o único sinal, já que a resposta inflamatória depende de neutrófilos funcionantes. Podem coexistir sinais de foco (mucosite oral, dor perianal, sinais de infecção de cateter, sintomas respiratórios ou urinários), mas sua ausência não afasta infecção grave em curso. Sinais de alarme incluem hipotensão, taquicardia desproporcional, taquipneia, alteração do estado mental, oligúria e hiperlactatemia — configuram sepse/choque séptico e mandam intensificar a cobertura e considerar UTI.

## 🔎 Diagnóstico

- **Definição:** neutrófilos <500/mm³ (ou <1.000/mm³ com queda esperada) + febre conforme critério de temperatura acima.
- **Investigação inicial obrigatória, sem atrasar o antibiótico:** hemoculturas (pelo menos 2 pares, incluindo de cateter se presente), hemograma completo, função renal e hepática, lactato, radiografia de tórax e, conforme sintomas, outras culturas dirigidas (urina, sítios suspeitos).
- **Estratificação de risco:** considera tipo de neoplasia, intensidade/duração esperada da neutropenia, comorbidades, estabilidade hemodinâmica e mucosite — define via de administração (oral vs. IV) e local de manejo (ambulatorial vs. internação).

## 💊 Tratamento

- **Primeira linha (padrão):** monoterapia com beta-lactâmico antipseudomonas de amplo espectro — cefepime, piperacilina-tazobactam ou carbapenêmico (meropenem/imipenem-cilastatina).
- **Instabilidade hemodinâmica/choque séptico:** associar segundo agente antipseudomonas (aminoglicosídeo ou fluoroquinolona) e considerar vancomicina empírica, além de ressuscitação hemodinâmica padrão de sepse.
- **Indicações específicas para adicionar vancomicina (não de rotina):** instabilidade hemodinâmica, suspeita de infecção de cateter/pele-partes moles, mucosite grave, colonização conhecida por MRSA ou pneumonia.
- **Baixo risco, estável, ambulatorial:** esquema oral combinado (ex.: amoxicilina-clavulanato + ciprofloxacino), com reavaliação clínica próxima garantida.
- **Reavaliação:** manter o esquema empírico, ajustar conforme cultura positiva e foco identificado; se afebril e neutrófilos em recuperação, considerar redução de espectro/suspensão conforme protocolo institucional.

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus — apenas 1 questão real registrada** (EBSERH 2025 Q53, dificuldade MÉDIA), sobre neutropenia febril em paciente oncológico com sinais de instabilidade hemodinâmica (hipotensão, taquicardia, taquipneia, hipóxia). A resposta correta foi justamente a cobertura empírica com **cefepime, pela frequência de *Pseudomonas aeruginosa*** nesse cenário — e os distratores exploraram exatamente os erros mais comuns: esperar hemocultura/foco antes de tratar, usar esquema oral em paciente instável, e a ideia equivocada de que "sem neutropenia" (confundindo contagem total com absoluta de neutrófilos) mudaria a conduta.

Mesmo com só 1 aparição neste banco específico, neutropenia febril é **emergência oncológica clássica e recorrente em provas de residência médica em geral** — o racional de "cobertura antipseudomonas empírica imediata, sem esperar cultura ou foco" é testado com frequência em provas de clínica médica, hematologia e emergência, valendo o investimento de estudo mesmo fora do 80/20 deste banco.

## 📚 Referências essenciais

- Diretriz de manejo de neutropenia febril em pacientes com câncer — Infectious Diseases Society of America (IDSA).
- Guideline de neutropenia febril e uso de fatores de crescimento — National Comprehensive Cancer Network (NCCN).
`;

export default content.trim();
