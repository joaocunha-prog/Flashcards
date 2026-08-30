/**
 * Resumo — Pneumologia · Asma.
 *
 * Cobre as entidades do assunto no corpus: inflamação tipo 2 mediada por
 * IL-4, IL-5 e IL-13, asma quase fatal com retenção de CO2 e falência
 * ventilatória iminente, e asma não controlada de fenótipo alérgico com
 * indicação de terapia biológica. Também traz diagnóstico diferencial,
 * critérios diagnósticos objetivos, escalonamento terapêutico completo
 * (GINA) e fenótipos não-T2 que ainda não caíram nas provas reais.
 */
const content = `
## 🎯 Essencial

- Asma é doença heterogênea; o endótipo **inflamação tipo 2 (T2-alto)** é mediado por **IL-4, IL-5 e IL-13**, produzidas por linfócitos Th2 e células linfoides inatas do grupo 2 (ILC2).
- **IL-4 e IL-13** promovem a troca de classe de imunoglobulina para **IgE** e aumentam a hiper-responsividade brônquica; **IL-5** recruta, ativa e mantém vivos os **eosinófilos** na via aérea.
- Biomarcadores de inflamação T2: **eosinofilia periférica/de escarro, IgE elevada e FeNO (óxido nítrico exalado) elevado** — orientam a elegibilidade para terapia biológica.
- **Terapia biológica** (anti-IgE omalizumabe, anti-IL5/IL5R mepolizumabe/benralizumabe, anti-IL4R dupilumabe, anti-TSLP tezepelumabe) é indicada em **asma grave não controlada apesar de corticoide inalatório em dose alta + broncodilatador de longa ação**, com adesão e técnica inalatória confirmadas.
- **Fenótipo alérgico** (IgE elevada, sensibilização a aeroalérgeno, início na infância) tem no **omalizumabe** a escolha preferencial entre os biológicos disponíveis; **tezepelumabe** é opção que funciona independentemente do fenótipo (T2 ou não-T2).
- **Asma quase fatal — sinais de falência ventilatória iminente:** **tórax silencioso** (ausência de sibilos por fluxo aéreo criticamente reduzido, NÃO sinal de melhora), rebaixamento de consciência, bradicardia/hipotensão.
- O achado gasométrico mais grave na crise asmática é a **normalização ou elevação da PCO2** — na crise, o esperado é PCO2 baixo por taquipneia; um PCO2 "normal" já indica exaustão muscular respiratória e ventilação mecânica iminente.
- Classificação de gravidade da crise no pronto-socorro usa **PFE (pico de fluxo expiratório)** e sinais clínicos: leve (PFE >70% do previsto), moderada (40-70%), grave (<40%) e com risco de vida (paciente incapaz de realizar a manobra).
- **GINA atual recomenda contra SABA isolado como resgate**, mesmo na asma leve/intermitente — corticoide inalatório + formoterol em dose baixa **conforme necessidade** é preferido como resgate em qualquer degrau de tratamento, porque uso frequente de SABA isolado (sem corticoide associado) aumenta risco de exacerbação grave, mesmo em paciente "pouco sintomático".

## 💎 Pearls

- A retenção de CO2 na crise de asma é **paradoxal**: início da crise cursa com hiperventilação e PCO2 baixo; a normalização/elevação da PCO2 sinaliza fadiga muscular, não melhora clínica.
- A eosinofilia periférica pode estar **mascarada pelo uso concomitante de corticoide sistêmico** — dosar biomarcadores antes de escalonar corticoide sempre que possível.
- Nem toda asma grave é T2-alta — fenótipos **não-T2** (neutrofílico, associado a obesidade ou tabagismo) respondem mal aos biológicos direcionados à via T2; **azitromicina crônica em baixa dose** tem evidência de reduzir exacerbações nesse subgrupo pelo efeito anti-inflamatório/imunomodulador.
- Betabloqueador, mesmo cardiosseletivo, deve ser usado com cautela na asma — pode desencadear broncoespasmo.
- Dose alta de corticoide inalatório isolada não define, por si só, "asma grave" — antes de escalonar para biológico é preciso confirmar adesão e técnica inalatória adequadas.
- **Doença respiratória exacerbada por aspirina (DREA/tríade de Samter):** asma + polipose nasal + broncoespasmo desencadeado por AINE/AAS — frequentemente associada a inflamação T2 grave e boa resposta a biológicos anti-IL5/anti-leucotrieno.
- **Aspergilose broncopulmonar alérgica (ABPA):** suspeitar em asmático de difícil controle com IgE muito elevada, eosinofilia marcada, infiltrados pulmonares migratórios e bronquiectasias centrais — tratada com corticoide sistêmico ± antifúngico (itraconazol), não apenas escalonamento do tratamento habitual da asma.
- **Disfunção de corda vocal (VCD)** mimetiza crise asmática refratária ao tratamento — estridor predominantemente inspiratório e resposta ausente a broncodilatador devem levantar essa suspeita.
- **Asma ocupacional** deve ser suspeitada quando os sintomas melhoram em finais de semana/férias e pioram no ambiente de trabalho — isocianatos, farinha e látex são gatilhos clássicos.
- **Broncoespasmo induzido por exercício** é comum mesmo em asma bem controlada — uso de SABA 10-15 minutos antes do esforço é a profilaxia clássica.
- **Anti-IL5 (mepolizumabe) e anti-IL5R (benralizumabe) não são intercambiáveis na prática:** mepolizumabe reduz eosinófilos por privação do sinal de sobrevida; benralizumabe se liga ao receptor de IL-5 e induz depleção **quase completa e mais rápida** dos eosinófilos por citotoxicidade mediada por células (ADCC) — diferença que pode ser cobrada em prova ao comparar velocidade/magnitude de resposta.
- **FeNO >50 ppb** é o corte mais citado como preditor de boa resposta a corticoide inalatório/sistêmico e de inflamação T2 ativa — útil tanto para elegibilidade a biológico quanto para prever resposta a escalonamento de corticoide.
- **Montelucaste** carrega alerta de segurança para efeitos neuropsiquiátricos (alteração de humor, ideação suicida, pesadelos) — vale reavaliar a indicação e orientar o paciente/família sobre esse risco ao prescrever.

## ⚠️ Pitfalls

- **Interpretar tórax silencioso como sinal de melhora** na crise asmática — é sinal de gravidade extrema, com fluxo aéreo insuficiente para gerar sibilo.
- **Tranquilizar-se com PCO2 "normal"** em paciente taquipneico grave — nesse contexto, normal já é anormal e indica exaustão respiratória iminente.
- **Indicar biológico anti-IL5** sem eosinofilia demonstrada previamente.
- **Escalonar direto para terapia biológica** sem antes confirmar adesão e técnica inalatória com corticoide/LABA em dose otimizada.
- **Atrasar intubação/ventilação mecânica** esperando deterioração clínica mais evidente diante de sinais de falência ventilatória iminente já presentes.
- **Tratar toda asma refratária como T2-alta** sem considerar diagnósticos diferenciais (DPOC, ABPA, disfunção de corda vocal, insuficiência cardíaca, bronquiectasias) ou fenótipo não-T2.
- **Prescrever AAS/AINE sem triagem** em paciente com polipose nasal e asma — risco de broncoespasmo grave na DREA.
- **Basear a gravidade da crise apenas na ausculta**, sem medir PFE/saturação — subestima casos graves com tórax silencioso e superestima casos leves com sibilância intensa mas fluxo aéreo preservado.
- **Suspender ou reduzir corticoide inalatório na gestante "por segurança"** — asma mal controlada na gestação traz mais risco materno-fetal (pré-eclâmpsia, restrição de crescimento, prematuridade) do que o tratamento inalatório em doses adequadas; a orientação correta é manter o esquema que controla a doença.

## 📝 Como a banca cobra

**Asma aparece em 3 questões (1,42% do corpus)** — 2 do EBSERH (2025 e 2026) e 1 do ENARE 2026 — combinando imunologia da inflamação tipo 2, gravidade da crise e indicação de biológico.

- **Inflamação tipo 2 — IL-4, IL-5 e IL-13** (EBSERH 2025 Q35, MÉDIA) exige conhecer o papel específico de cada citocina na cascata T2.
- **Asma quase fatal — retenção de CO2 e falência ventilatória iminente** (EBSERH 2026 Q38, MÉDIA) cobra a interpretação correta e não intuitiva da gasometria na crise grave.
- **Asma não controlada — fenótipo alérgico e terapia biológica** (ENARE 2026 Q20, FÁCIL) testa a indicação de omalizumabe no perfil clínico-laboratorial correto.

## 🧠 Conceito e fisiopatologia

Na asma T2-alta, alérgenos ou outros gatilhos ativam linfócitos Th2 e ILC2 na mucosa brônquica, liberando IL-4, IL-5 e IL-13. IL-4 e IL-13 atuam sobre linfócitos B (troca de classe para IgE) e sobre células epiteliais/musculares lisas (hiper-responsividade, hipersecreção de muco); IL-5 é o principal fator de sobrevida e recrutamento de eosinófilos, cujos produtos citotóxicos danificam o epitélio brônquico e perpetuam a inflamação — por isso os biológicos direcionados a essas vias reduzem exacerbações em pacientes com o fenótipo correspondente. A **TSLP** (linfopoietina estromal tímica), liberada pelo epitélio lesado logo no início da cascata, atua a montante de toda essa resposta — por isso bloqueá-la (tezepelumabe) funciona mesmo em fenótipos não puramente T2.

Na crise quase fatal, a obstrução das vias aéreas é tão intensa que o fluxo turbulento necessário para gerar sibilos deixa de existir (tórax silencioso), e a fadiga da musculatura respiratória leva à hipoventilação alveolar — revertendo o padrão esperado de hiperventilação e fazendo a PCO2 subir, sinal de insuficiência respiratória iminente que precede a parada respiratória.

## 🔎 Diagnóstico e diferencial

- **Espirometria:** obstrução (relação VEF1/CVF reduzida) com reversibilidade significativa após broncodilatador (**ΔVEF1 ≥12% e ≥200 mL**) confirma o diagnóstico; teste de broncoprovocação (metacolina) quando espirometria basal é normal e a suspeita persiste.
- **Diagnóstico diferencial de sibilância/dispneia:** DPOC (geralmente tabagista, obstrução pouco reversível), insuficiência cardíaca ("asma cardíaca"), bronquiectasias, disfunção de corda vocal, embolia pulmonar, ABPA.
- **Classificação de controle (GINA):** controlada, parcialmente controlada ou não controlada, conforme sintomas diurnos, despertares noturnos, uso de resgate e limitação de atividade nas últimas 4 semanas — determina a necessidade de ajuste terapêutico.

## 🩺 Quadro clínico

- **Inflamação T2:** sibilância, tosse, dispneia recorrente, frequentemente associada a rinite alérgica/atopia/polipose nasal.
- **Asma quase fatal:** dispneia extrema, incapacidade de falar frases completas, uso de musculatura acessória evoluindo para tórax silencioso, confusão/sonolência, bradicardia.
- **Fenótipo alérgico não controlado:** exacerbações frequentes apesar de tratamento otimizado, IgE elevada, sensibilização documentada a aeroalérgeno.
- **Complicações da crise grave:** pneumotórax e pneumomediastino por barotrauma, arritmias por hipoxemia/uso excessivo de beta-agonista, insuficiência respiratória com necessidade de ventilação mecânica.

## 💊 Tratamento

- **Manejo escalonado de base (GINA):** etapas 1-2 — corticoide inalatório em dose baixa conforme necessidade (preferencialmente associado a formoterol, também usado como resgate); etapas 3-4 — corticoide inalatório + LABA em dose baixa a alta; etapa 5 — adicionar biológico conforme fenótipo. Revisar sempre adesão e técnica antes de escalonar.
- **Biológicos:** omalizumabe (fenótipo alérgico/IgE alta), mepolizumabe/benralizumabe (eosinofílico), dupilumabe (T2 amplo, inclusive com dermatite atópica associada), tezepelumabe (amplo espectro, independe de fenótipo).
- **Crise moderada a grave:** oxigênio, beta-agonista de curta ação + anticolinérgico inalatório, corticoide sistêmico precoce, sulfato de magnésio IV em casos graves.
- **Falência ventilatória iminente:** ventilação não invasiva criteriosa ou intubação orotraqueal sem atraso diante de rebaixamento de consciência ou PCO2 em ascensão; estratégia de ventilação com hipercapnia permissiva para evitar barotrauma.
- **Sequência rápida de intubação na asma quase fatal:** **cetamina** é o indutor de escolha entre os agentes disponíveis, pelo seu efeito broncodilatador intrínseco (além de manter estabilidade hemodinâmica) — diferencial de alto rendimento frente a outros indutores sem esse efeito.

## 📈 Complicações e condições associadas

- **Uso crônico de corticoide sistêmico** (asma mal controlada com múltiplos ciclos): osteoporose, catarata, hiperglicemia, ganho de peso, supressão adrenal — reforça a importância de tratamento poupador de corticoide (biológicos) na asma grave.
- **Remodelamento das vias aéreas:** inflamação crônica não controlada leva a espessamento da membrana basal e fibrose subepitelial, com perda progressiva e por vezes irreversível de função pulmonar.
- **Asma grave não controlada:** maior risco de exacerbações fatais/quase fatais, hospitalizações recorrentes e prejuízo importante de qualidade de vida.
- **DREA:** polipose nasossinusal recorrente mesmo após cirurgia, se a inflamação T2 de base não for controlada.

## 📚 Referências essenciais

- GINA — Global Strategy for Asthma Management and Prevention (atualização anual).
- Diretriz Brasileira para o Manejo da Asma — Sociedade Brasileira de Pneumologia e Tisiologia.
- NAEPP Expert Panel Report — Guidelines for the Diagnosis and Management of Asthma.
`;

export default content.trim();
