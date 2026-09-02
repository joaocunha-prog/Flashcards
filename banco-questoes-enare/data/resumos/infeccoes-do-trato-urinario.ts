/**
 * Resumo — Infectologia · Infecções do trato urinário.
 *
 * Reorganizado por entidade clínica (cada cenário tem sua própria seção com
 * quando suspeitar, diagnóstico, tratamento, pearl e pitfall juntos), em vez
 * de picado entre seções genéricas de tipo.
 *
 * Cobre as entidades do assunto no corpus: tratamento ambulatorial da
 * pielonefrite não complicada, profilaxia da ITU recorrente, tratamento
 * empírico da cistite não complicada recorrente e pielonefrite complicada
 * por retenção urinária em paciente oncológico. Inclui também
 * extrapolações de alto rendimento (bacteriúria assintomática — quando
 * tratar e quando não —, ITU associada a cateter, pielonefrite
 * enfisematosa, urosepse, prostatite bacteriana aguda, litíase urinária
 * infectada) ainda não cobradas no corpus, mas plausíveis em provas
 * futuras.
 */
const content = `
## 🎯 Essencial

- A distinção mais importante em ITU não é gravidade dos sintomas, é **complicada vs. não complicada** — presença de fator anatômico/funcional (obstrução, cateter, litíase, bexiga neurogênica), imunossupressão ou trato urinário masculino define ITU complicada, que exige investigação de causa obstrutiva e frequentemente internação com antibiótico parenteral.
- **ITU em homem é sempre considerada complicada** por definição — investigação e duração de tratamento tendem a ser mais amplas do que em mulheres.
- Diante de ITU que não responde ao antibiótico esperado, a pergunta é sempre: **há algo obstruindo/impedindo a esterilização da urina** (cálculo, retenção, cateter, abscesso)? — nesse cenário, o antibiótico correto sozinho tende a falhar.
- **Duração do tratamento costuma ser mais curta do que se imagina:** cistite não complicada 3-5 dias (dose única para fosfomicina); pielonefrite não complicada 5-7 dias com fluoroquinolona; ITU complicada geralmente 7-14 dias conforme resposta clínica.

## 📝 Como a banca cobra

**Infecções do trato urinário aparece em 4 questões (1,89% do corpus)**, todas do ENARE, cobrando decisões terapêuticas práticas em cenários ambulatoriais e complicados.

- **ENARE 2025 Q28** cobrou o tratamento ambulatorial da pielonefrite não complicada.
- **ENARE 2025 Q57** testou a profilaxia da ITU recorrente.
- **ENARE 2026 Q36** trouxe o tratamento empírico da cistite não complicada recorrente.
- **ENARE 2026 Q61** cobrou pielonefrite complicada por retenção urinária em paciente oncológico — reforçando a necessidade de desobstrução associada ao antibiótico.

## 🧠 Conceito e fisiopatologia

- ITU ocorre por ascensão de flora fecal/perineal (predominantemente *Escherichia coli* uropatogênica) pela uretra até a bexiga (cistite) e, por via ascendente adicional, até o parênquima renal (pielonefrite)
- Obstrução mecânica (cálculo, tumor, hiperplasia prostática, retenção) impede que o antibiótico, mesmo adequado, esterilize a urina retida
  - O reservatório bacteriano se mantém e alimenta a infecção mesmo sob antibioticoterapia correta → por isso a desobstrução é tão importante quanto a escolha do fármaco
- Em cateteres vesicais de demora, um **biofilme** bacteriano se forma na superfície do dispositivo em poucos dias, tornando a erradicação da bacteriúria praticamente impossível sem remoção
  - Por isso o foco do manejo é evitar tratar colonização e remover/trocar o dispositivo quando há infecção sintomática real

💡 Pensa assim: antibiótico sem desobstrução é "torneira aberta com o ralo entupido" — a água (bactéria) volta a acumular não importa quanto você limpe rio abaixo; e um biofilme em cateter é uma "casa que a bactéria constrói" — o antibiótico não derruba a casa, só remover o cateter derruba.

## 🔹 Cistite não complicada

- **Quando suspeitar:** mulher sem anormalidade estrutural/funcional do trato urinário e sem comorbidade complicadora — disúria, polaciúria, urgência miccional, às vezes hematúria macroscópica, **sem febre ou dor lombar** (cuja presença sugere ascensão para pielonefrite).
- **Diagnóstico:** clínico; urina tipo I/urocultura se atípica ou recorrente.
- **Tratamento:** **nitrofurantoína, fosfomicina em dose única ou sulfametoxazol-trimetoprima** (se resistência local <20%) — quinolona **não** é primeira escolha, reservada para contraindicação aos agentes de primeira linha ou para pielonefrite.
- 💎 **Pearl:** nitrofurantoína e fosfomicina **não atingem concentração tecidual renal adequada** — nunca devem ser usadas em pielonefrite, apenas em cistite.
- ⚠️ **Pitfall:** tratar cistite não complicada com quinolona de primeira linha.
- 📝 **Como caiu:** ENARE 2026 Q36 — tratamento empírico da cistite não complicada recorrente.

## 🔹 Pielonefrite não complicada

- **Quando suspeitar:** febre, calafrios, dor em flanco/lombar, náusea/vômitos, além dos sintomas de cistite (nem sempre presentes) — dor à punho-percussão lombar (sinal de Giordano) reforça a suspeita.
- **Diagnóstico:** clínico + urocultura sempre; imagem (USG/TC) se suspeita de complicação/obstrução ou falha terapêutica em 48-72h.
- **Tratamento:** paciente estável, sem sinais de sepse/obstrução, tolerando via oral → **tratamento ambulatorial**, com **ciprofloxacino oral** como opção de primeira linha nesse cenário, pela boa penetração tecidual renal (ou cobertura conforme perfil local de resistência).
- ⚠️ **Pitfall:** usar nitrofurantoína para tratar pielonefrite — penetração renal insuficiente, risco de falha terapêutica.
- 📝 **Como caiu:** ENARE 2025 Q28 — tratamento ambulatorial da pielonefrite não complicada.

## 🔹 Pielonefrite complicada por obstrução (retenção urinária)

- **Quando suspeitar:** quadro de pielonefrite associado a sinais de retenção urinária (globo vesical, dor suprapúbica) ou piora progressiva apesar de antibiótico em curso — cenário clássico em paciente oncológico com massa pélvica/prostática comprimindo a via urinária.
- **Tratamento:** **desobstruir a via urinária (cateterismo vesical/nefrostomia) é tão essencial quanto o antibiótico** — sem isso, o antibiótico correto pode falhar e o paciente evoluir para sepse. Antibiótico parenteral de amplo espectro, geralmente com internação.
- 💎 **Pearl:** obstrução mecânica em paciente oncológico com pielonefrite não é só um fator de risco a mais — é o determinante principal do desfecho: o antibiótico ideal falha se a via não for desobstruída.
- ⚠️ **Pitfall:** tratar pielonefrite obstrutiva apenas com antibiótico, sem desobstruir a via urinária — risco de sepse refratária.
- 📝 **Como caiu:** ENARE 2026 Q61.

## 🔹 Profilaxia de ITU recorrente

- **Definição:** ≥2 episódios em 6 meses ou ≥3 em 1 ano.
- **Conduta escalonada:** medidas comportamentais primeiro (hidratação, micção pós-coito) → D-manose/estrogênio vaginal tópico (mulheres pós-menopausa, restaura microbiota vaginal protetora/lactobacilos) → antibioticoprofilaxia contínua em baixa dose ou pós-coital se refratária.
- 💎 **Pearl:** fatores de risco em mulheres jovens incluem atividade sexual frequente, uso de espermicida/diafragma e história de ITU na infância; em pós-menopausa, o hipoestrogenismo com atrofia da mucosa vaginal e perda da flora lactobacilar é o principal mecanismo.
- ⚠️ **Pitfall:** escalar direto para antibioticoprofilaxia contínua sem antes tentar medidas comportamentais/D-manose/estrogênio tópico quando aplicável.
- 📝 **Como caiu:** ENARE 2025 Q57.

## 🔹 Bacteriúria assintomática — quando tratar e quando não

- **Regra geral:** **não deve ser tratada** — promove resistência sem benefício clínico.
- **Exceções que exigem tratamento:** **gestante** (risco de evolução para pielonefrite e desfechos obstétricos adversos — parto pré-termo, baixo peso ao nascer) e paciente que vai se submeter a **procedimento urológico invasivo** (risco de bacteremia).
- 💎 **Pearl:** na gestante, tratamento com antibiótico seguro na gestação (nitrofurantoína fora do termo, cefalexina), guiado por urocultura e teste de cura — e a **internação com antibiótico parenteral é a regra** se evoluir para pielonefrite gestacional, mesmo em quadros aparentemente leves, pelo maior risco de complicações maternas (sepse, síndrome do desconforto respiratório agudo) e fetais.
- ⚠️ **Pitfall:** não tratar bacteriúria assintomática na gestante (ao contrário da população geral, aqui o tratamento é obrigatório) — ou, no sentido oposto, tratar toda bacteriúria fora dessas duas exceções.
- 📝 **Como caiu:** ainda não cobrado no corpus — mas é a exceção mais clássica de toda a literatura de ITU.

## 🔹 ITU associada a cateter (CAUTI)

- **Quando tratar:** só quando há **sintomas atribuíveis à infecção** em paciente sondado (ou removido recentemente) — urocultura positiva isolada em paciente sondado assintomático é **bacteriúria associada a cateter**, não indicação de antibiótico.
- **Tratamento:** primeira medida é **trocar ou remover o cateter**; antibiótico dirigido por urocultura coletada **após** a troca, quando indicado.
- 💎 **Pearl:** candidúria em paciente cateterizado costuma refletir apenas colonização — tratamento antifúngico reservado a sintomáticos, neutropênicos, transplantados renais ou antes de procedimento urológico invasivo; na maioria dos casos, basta remover/trocar o cateter.
- ⚠️ **Pitfall:** tratar toda urocultura positiva em paciente sondado assintomático.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Pielonefrite enfisematosa e abscesso renal

- **Quando suspeitar:** febre persistente além de 48-72h de antibioticoterapia adequada para pielonefrite — sinal de alarme para reavaliação por imagem.
- **Pielonefrite enfisematosa:** gás no parênquima renal/sistema coletor à imagem — complicação grave, quase exclusiva de diabéticos mal controlados, alta mortalidade; pode exigir drenagem percutânea ou nefrectomia além do antibiótico de amplo espectro.
- **Pielonefrite xantogranulomatosa:** forma rara e crônica, associada a obstrução de longa data (frequentemente litíase coraliforme) e a *Proteus*, com destruição progressiva do parênquima e necessidade frequente de nefrectomia.
- ⚠️ **Pitfall:** não reavaliar por imagem paciente com pielonefrite que mantém febre após 48-72h de antibiótico adequado — atraso no diagnóstico de abscesso/pielonefrite enfisematosa piora o desfecho.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Urosepse

- **Quando suspeitar:** taquicardia, taquipneia, hipotensão e alteração do estado mental sobrepostas ao quadro urinário — checar ativamente critérios de sepse (qSOFA/Sepse-3) em todo paciente com pielonefrite "mais grave que o esperado".
- **Tratamento:** ressuscitação volêmica e antibiótico de amplo espectro na primeira hora, além do foco urológico específico (desobstrução se aplicável).
- 📝 **Como caiu:** ainda não cobrado no corpus — evolução mais temida de qualquer ITU complicada não tratada a tempo.

## 🔹 Prostatite bacteriana aguda e litíase urinária infectada (diferenciais masculinos/obstrutivos)

- **Prostatite bacteriana aguda:** febre, dor perineal/pélvica, próstata dolorosa e amolecida ao toque retal — evitar massagem prostática vigorosa (risco de bacteremia); antibiótico com boa penetração prostática (fluoroquinolona) por curso prolongado (2-4 semanas).
- **Litíase urinária associada a ITU (cálculo obstrutivo infectado):** emergência urológica — desobstrução urgente (cateter duplo J ou nefrostomia) além do antibiótico; tratar só a infecção sem desobstruir tende à falha e à progressão para urosepse.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**Antibiótico de escolha por cenário — o erro mais comum de prova é trocar as linhas desta tabela**

| Cenário | Primeira linha | Por que não usar nitrofurantoína/fosfomicina |
|---|---|---|
| Cistite não complicada | Nitrofurantoína, fosfomicina (dose única) ou SMX-TMP | — |
| Pielonefrite não complicada, estável | Ciprofloxacino oral | Penetração renal insuficiente |
| ITU complicada/obstrutiva | Antibiótico parenteral de amplo espectro + desobstrução | Penetração insuficiente + causa mecânica não resolvida |
| Bacteriúria assintomática (gestante) | Antibiótico seguro na gestação, guiado por cultura | — |

## 📚 Referências essenciais

- IDSA/ESCMID Guideline for the Treatment of Uncomplicated Cystitis and Pyelonephritis.
- European Association of Urology (EAU) Guidelines on Urological Infections.
- Diretrizes de sociedades urológicas brasileiras para manejo de ITU.
`;

export default content.trim();
