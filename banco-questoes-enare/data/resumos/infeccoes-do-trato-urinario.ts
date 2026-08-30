/**
 * Resumo — Infectologia · Infecções do trato urinário.
 *
 * Cobre as entidades do assunto no corpus: tratamento ambulatorial da
 * pielonefrite não complicada, profilaxia da ITU recorrente, tratamento
 * empírico da cistite não complicada recorrente e pielonefrite
 * complicada por retenção urinária em paciente oncológico. Também traz,
 * como extrapolação de alto rendimento além do que já foi cobrado, a ITU
 * na gestação, a ITU associada a cateter, a pielonefrite enfisematosa, o
 * conceito de urosepse, a prostatite bacteriana aguda e a litíase urinária
 * infectada.
 */
const content = `
## 🎯 Essencial

- **Cistite não complicada:** mulher sem anormalidade estrutural/funcional do trato urinário e sem comorbidade complicadora. Primeira linha: **nitrofurantoína, fosfomicina em dose única ou sulfametoxazol-trimetoprima** (se resistência local <20%) — quinolona não é primeira escolha.
- **Pielonefrite não complicada**, em paciente estável, sem sinais de sepse/obstrução e tolerando via oral, pode ser tratada **ambulatorialmente** — quinolona oral (ciprofloxacino) é opção de primeira linha nesse cenário, pela boa penetração tecidual renal.
- **ITU complicada** implica presença de fator anatômico/funcional (obstrução, cateter, litíase, bexiga neurogênica), imunossupressão ou trato urinário masculino — exige investigar causa obstrutiva e frequentemente internação com antibiótico parenteral.
- **Retenção urinária em paciente oncológico com pielonefrite** é ITU complicada por obstrução: **desobstruir a via urinária (cateterismo/nefrostomia) é tão essencial quanto o antibiótico** — sem isso, o antibiótico correto pode falhar e o paciente evoluir para sepse.
- **Profilaxia de ITU recorrente** (≥2 episódios em 6 meses ou ≥3 em 1 ano): medidas comportamentais primeiro (hidratação, micção pós-coito); se persistir, antibioticoprofilaxia contínua em baixa dose ou pós-coital, ou alternativas como D-manose/estrogênio vaginal tópico em mulheres na pós-menopausa.
- **ITU em homens é sempre considerada complicada** por definição (menor prevalência de base, maior probabilidade de anormalidade estrutural ou prostática associada) — a investigação e a duração do tratamento tendem a ser mais amplas do que em mulheres.
- **Bacteriúria assintomática na gestação é a exceção que confirma a regra: deve sempre ser tratada**, pelo risco de evolução para pielonefrite e de desfechos obstétricos adversos (parto pré-termo, baixo peso ao nascer).
- **Duração do tratamento** costuma ser mais curta do que se imagina: cistite não complicada, 3-5 dias (dose única para fosfomicina); pielonefrite não complicada, 5-7 dias com fluoroquinolona (ou 7-14 dias com outros esquemas); ITU complicada, geralmente 7-14 dias conforme resposta clínica.

## 💎 Pearls

- **Bacteriúria assintomática não deve ser tratada**, exceto em gestantes e antes de procedimentos urológicos invasivos — erro comum é tratar todo exame de urina alterado sem sintomas.
- **Nitrofurantoína não atinge concentração tecidual renal adequada** — nunca deve ser usada em pielonefrite, apenas em cistite.
- Fosfomicina em dose única é prática para cistite não complicada, mas também **não tem indicação em pielonefrite**.
- **Estrogênio vaginal tópico** reduz recorrência de ITU em mulheres na pós-menopausa ao restaurar a microbiota vaginal protetora (lactobacilos).
- ITU em paciente oncológico/imunossuprimido com obstrução mecânica **não responde bem só a antibiótico** — a obstrução precisa ser corrigida para o antibiótico ter chance real de sucesso.
- **ITU associada a cateter vesical (CAUTI)** só deve ser tratada quando há sintomas atribuíveis à infecção — urocultura positiva isolada em paciente sondado assintomático é bacteriúria associada a cateter, não indicação de antibiótico; a primeira medida terapêutica, quando indicado tratar, é **trocar ou remover o cateter**.
- **Pielonefrite enfisematosa** (gás no parênquima renal/sistema coletor à imagem) é complicação grave, quase exclusiva de diabéticos mal controlados, com alta mortalidade — pode exigir drenagem percutânea ou nefrectomia além do antibiótico de amplo espectro.
- Suspeitar de **abscesso renal/perirrenal** quando a febre persiste além de 48-72h de antibioticoterapia adequada para pielonefrite — indicação de reavaliação por imagem.
- Em **gestantes com pielonefrite**, a internação com antibiótico parenteral é a regra, mesmo em quadros aparentemente leves, pelo maior risco de complicações maternas (sepse, síndrome do desconforto respiratório agudo) e fetais.
- **Candidúria** costuma refletir apenas colonização em paciente cateterizado e assintomático — tratamento antifúngico é reservado para sintomáticos, neutropênicos, transplantados renais ou antes de procedimento urológico invasivo.

## ⚠️ Pitfalls

- **Tratar cistite não complicada com quinolona de primeira linha** — reservar quinolonas para contraindicação aos agentes de primeira linha ou para pielonefrite.
- **Usar nitrofurantoína para tratar pielonefrite** — penetração renal insuficiente, risco de falha terapêutica.
- **Tratar bacteriúria assintomática** fora do contexto de gestação/procedimento urológico — promove resistência sem benefício clínico.
- **Tratar pielonefrite obstrutiva apenas com antibiótico**, sem desobstruir a via urinária — risco de sepse refratária.
- **Escalar direto para antibioticoprofilaxia contínua** em ITU recorrente sem antes tentar medidas comportamentais/D-manose/estrogênio tópico quando aplicável.
- **Não tratar bacteriúria assintomática na gestante** — ao contrário da população geral, aqui o tratamento é obrigatório.
- **Tratar toda urocultura positiva em paciente sondado assintomático** — bacteriúria associada a cateter sem sintomas não deve ser tratada com antibiótico.
- **Não reavaliar por imagem** paciente com pielonefrite que mantém febre após 48-72h de antibiótico adequado — atraso no diagnóstico de abscesso ou pielonefrite enfisematosa piora o desfecho.
- **Tratar candidúria assintomática em paciente sondado** com antifúngico — na maioria dos casos basta remover/trocar o cateter; o tratamento sistêmico é reservado a grupos específicos de risco.
- **Subestimar a gravidade da pielonefrite na gestante** e tentar manejo ambulatorial de rotina — a internação para antibiótico parenteral é a conduta padrão nesse grupo.

## 📝 Como a banca cobra

**Infecções do trato urinário aparece em 4 questões (1,89% do corpus)**, todas do ENARE, cobrando decisões terapêuticas práticas em cenários ambulatoriais e complicados.

- **ENARE 2025 Q28** cobrou o tratamento ambulatorial da pielonefrite não complicada.
- **ENARE 2025 Q57** testou a profilaxia da ITU recorrente.
- **ENARE 2026 Q36** trouxe o tratamento empírico da cistite não complicada recorrente.
- **ENARE 2026 Q61** cobrou pielonefrite complicada por retenção urinária em paciente oncológico — reforçando a necessidade de desobstrução associada ao antibiótico.

## 🧠 Conceito e fisiopatologia

A ITU ocorre por ascensão de flora fecal/perineal (predominantemente Escherichia coli uropatogênica) pela uretra até a bexiga (cistite) e, por via ascendente adicional, até o parênquima renal (pielonefrite). A distinção entre "complicada" e "não complicada" não depende da gravidade dos sintomas, mas da presença de um fator anatômico, funcional ou de hospedeiro que compromete a depuração normal do trato urinário e aumenta o risco de falha terapêutica.

A obstrução mecânica (cálculo, tumor, hiperplasia prostática) impede que o antibiótico, mesmo adequado, esterilize a urina retida — o reservatório bacteriano se mantém e alimenta a infecção mesmo sob antibioticoterapia correta, explicando por que a desobstrução é tão importante quanto a escolha do fármaco nesse cenário.

Na gestação, alterações hormonais (progesterona) e mecânicas (compressão ureteral pelo útero gravídico) predispõem a estase urinária e facilitam a progressão de bacteriúria assintomática para pielonefrite, o que justifica a exceção terapêutica de tratar toda bacteriúria assintomática nesse grupo. Já em cateteres vesicais de demora, um biofilme bacteriano se forma na superfície do dispositivo em poucos dias, tornando a erradicação da bacteriúria praticamente impossível sem a remoção do cateter — por isso o foco do manejo é evitar tratar colonização e remover/trocar o dispositivo quando há infecção sintomática real.

## 🩺 Quadro clínico

- **Cistite:** disúria, polaciúria, urgência miccional e, às vezes, hematúria macroscópica — sem febre ou dor lombar, cuja presença sugere ascensão para pielonefrite.
- **Pielonefrite:** febre, calafrios, dor em flanco/lombar, náusea/vômitos, além dos sintomas de cistite (nem sempre presentes) — dor à punho-percussão lombar (sinal de Giordano) reforça a suspeita clínica.
- **ITU complicada/obstrutiva:** o quadro de pielonefrite se associa a sinais de retenção urinária (globo vesical, dor suprapúbica) ou piora progressiva apesar de antibiótico em curso, sinalizando a necessidade de desobstrução.
- **Urosepse:** taquicardia, taquipneia, hipotensão e alteração do estado mental sobrepostas ao quadro urinário — critérios de sepse (qSOFA/Sepse-3) devem ser checados ativamente em todo paciente com pielonefrite que parece "mais grave que o esperado".

## 🔎 Diagnóstico

- **Cistite:** clínico (disúria, polaciúria, urgência); urina tipo I/urocultura se atípica ou recorrente.
- **Pielonefrite:** clínico (febre, dor lombar, náusea) + urocultura sempre; imagem (USG/TC) se suspeita de complicação/obstrução ou falha terapêutica em 48-72h.
- **ITU recorrente:** investigar padrão de recorrência e fatores de risco antes de indicar profilaxia farmacológica.
- **CAUTI:** diagnóstico exige sintomas atribuíveis à infecção urinária em paciente sondado (ou removido recentemente), não apenas urocultura positiva.
- **Pielonefrite enfisematosa/abscesso renal:** TC de abdome com contraste é o exame de escolha diante de febre refratária ou fatores de risco (diabetes mal controlado, obstrução).
- **Urosepse:** hemocultura + urocultura antes do antibiótico (quando não atrasa o início do tratamento), lactato sérico e critérios de disfunção orgânica (Sepse-3) para guiar ressuscitação inicial.

## 💊 Tratamento

- **Cistite não complicada:** nitrofurantoína, fosfomicina em dose única ou sulfametoxazol-trimetoprima (conforme resistência local).
- **Pielonefrite não complicada, paciente estável:** ciprofloxacino oral ambulatorial (ou cobertura conforme perfil local de resistência).
- **Pielonefrite complicada/obstrutiva:** desobstrução (cateter vesical/nefrostomia) + antibiótico parenteral de amplo espectro, geralmente com internação.
- **Profilaxia de recorrência:** medidas comportamentais → D-manose/estrogênio vaginal tópico (pós-menopausa) → antibioticoprofilaxia contínua ou pós-coital em baixa dose se refratária.
- **Bacteriúria assintomática na gestante:** tratar sempre, com antibiótico seguro na gestação (ex.: nitrofurantoína fora do termo, cefalexina), guiado por urocultura e teste de cura.
- **CAUTI sintomática:** trocar/remover o cateter + antibiótico dirigido por urocultura coletada após a troca.

## 🧭 Além do grounding: o que mais pode cair

- **Urosepse** é a evolução mais temida de qualquer ITU complicada não tratada a tempo — aplicar os critérios de sepse (Sepse-3/qSOFA) e iniciar ressuscitação volêmica e antibiótico de amplo espectro na primeira hora é conduta esperada, além do foco urológico específico.
- **Pielonefrite xantogranulomatosa** é forma rara e crônica de pielonefrite associada a obstrução de longa data (frequentemente litíase coraliforme) e a Proteus, com destruição progressiva do parênquima renal e necessidade frequente de nefrectomia.
- **Bactérias produtoras de ESBL** devem ser suspeitadas em paciente com uso recente de antibiótico, hospitalização prévia ou viagem para área de alta prevalência — nesses casos, carbapenêmicos costumam ser necessários no tratamento empírico até o resultado da cultura.
- **Fatores de risco para ITU recorrente em mulheres jovens** incluem atividade sexual frequente, uso de espermicida/diafragma e história de ITU na infância; em mulheres pós-menopausa, o hipoestrogenismo com atrofia da mucosa vaginal e perda da flora lactobacilar protetora é o principal mecanismo.
- **ITU pediátrica** com primeiro episódio febril costuma exigir investigação de refluxo vesicoureteral (ultrassonografia renal e, conforme achados, uretrocistografia miccional), diferente da abordagem em adultos.
- **Cistite intersticial/síndrome da bexiga dolorosa** é diagnóstico diferencial importante de "ITU recorrente" com urocultura repetidamente negativa — vale suspeitar quando sintomas urinários crônicos não respondem a antibióticos sucessivos.
- **Prostatite bacteriana aguda** é diagnóstico diferencial masculino relevante: febre, dor perineal/pélvica e próstata dolorosa e amolecida ao toque retal — o exame de toque deve ser feito com cuidado (evitar massagem prostática vigorosa, risco de bacteremia) e o antibiótico precisa ter boa penetração prostática (fluoroquinolona) por curso prolongado (2-4 semanas).
- **Litíase urinária associada a ITU** (cálculo obstrutivo infectado) é emergência urológica que exige desobstrução urgente (cateter duplo J ou nefrostomia) além do antibiótico — tratar apenas a infecção sem desobstruir tende à falha terapêutica e à progressão para urosepse.

## 📚 Referências essenciais

- IDSA/ESCMID Guideline for the Treatment of Uncomplicated Cystitis and Pyelonephritis.
- European Association of Urology (EAU) Guidelines on Urological Infections.
- Diretrizes de sociedades urológicas brasileiras para manejo de ITU.
`;

export default content.trim();
