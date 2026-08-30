/**
 * Resumo — Endocrinologia · Doenças da tireoide.
 *
 * Reorganizado por entidade clínica (cada doença tem sua própria seção com
 * quando suspeitar, diagnóstico, tratamento, pearl e pitfall juntos), em vez
 * de picado entre seções genéricas de tipo.
 *
 * Cobre as entidades do assunto no corpus: tempestade tireotóxica e ordem
 * do tratamento inicial, tireoidite subaguda de De Quervain, nódulo
 * tireoidiano com citologia Bethesda III (AUS/FLUS) e estratificação por
 * TI-RADS com indicação de PAAF. Inclui também extrapolações de alto
 * rendimento (doença de Graves e oftalmopatia, Hashimoto e hipotireoidismo
 * subclínico, coma mixedematoso, disfunção tireoidiana por amiodarona,
 * câncer de tireoide, manejo da tireotoxicose na gestação) ainda não
 * cobradas no corpus, mas plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- **Tempestade tireotóxica** é emergência endócrina: hipertireoidismo grave + disfunção sistêmica (febre alta, taquiarritmia, alteração de consciência, sintomas gastrointestinais) — diagnóstico clínico (escore de Burch-Wartofsky), sem atrasar o tratamento para confirmação laboratorial.
- **Nas duas emergências deste assunto (tempestade tireotóxica e coma mixedematoso), a ordem do tratamento importa mais do que a lista de drogas** — inverter a sequência (iodo antes de tionamida; glicose/sedativo antes de suspeitar de mixedema) é o erro clássico testado pela banca.
- Diante de qualquer disfunção tireoidiana, a pergunta organizadora é sempre a mesma: **é hiperfunção (Graves, bócio nodular tóxico), destruição folicular (De Quervain, tireoidite silenciosa/pós-parto) ou hipofunção (Hashimoto)?** — o mecanismo determina se tionamida faz sentido ou não.
- Nódulo tireoidiano: avaliação inicial é **TSH + ultrassonografia com estratificação TI-RADS**; a PAAF depende da combinação entre categoria TI-RADS e tamanho, e a citologia (Bethesda) estratifica o risco de malignidade **depois** da punção — são duas ferramentas complementares, não intercambiáveis.

## 📝 Como a banca cobra

**Doenças da tireoide aparece em 4 questões (1,89% do corpus)**, misturando EBSERH e ENARE, sempre cobrando conduta específica e sequenciada, não só reconhecimento da doença.

- **EBSERH 2026 Q46** cobrou o tratamento inicial da tempestade tireotóxica — a sequência correta entre betabloqueador, tionamida e iodo é o ponto decisivo.
- **ENARE 2025 Q61** trouxe a tireoidite subaguda de De Quervain, testando o reconhecimento do padrão trifásico e da captação de iodo baixa.
- **ENARE 2026 Q7** cobrou a conduta diante de citologia Bethesda III (AUS/FLUS) em nódulo tireoidiano.
- **ENARE 2026 Q8** testou a estratificação por TI-RADS e a indicação correspondente de PAAF.

## 🧠 Conceito e fisiopatologia

A tireoide produz hormônio sob o eixo hipotálamo-hipófise-tireoide (TRH → TSH → T4/T3), com retroalimentação negativa — por isso TSH suprimido com T4 livre alto define hipertireoidismo primário, e TSH elevado com T4 livre baixo define hipotireoidismo primário, quase sempre a leitura mais rápida e mais cobrada de qualquer prova de tireoide. As doenças autoimunes da tireoide ocupam os dois polos opostos por mecanismos opostos: anticorpo estimulador do receptor de TSH (TRAb) na doença de Graves ativa cronicamente a glândula; anticorpos citotóxicos (anti-TPO, anti-tireoglobulina) na tireoidite de Hashimoto destroem progressivamente o parênquima. Já os quadros de tireotoxicose **sem hiperfunção verdadeira** (De Quervain, tireoidite silenciosa/pós-parto, factícia) compartilham a mesma assinatura laboratorial — **captação de iodo radioativo baixa**, porque não há síntese hormonal aumentada a ser bloqueada por tionamida.

## 🔹 Tempestade tireotóxica

- **Quando suspeitar:** hipertireoidismo grave (geralmente doença de Graves de base mal controlada) associado a fator precipitante — infecção, cirurgia, trauma, suspensão abrupta de tionamida, exposição a contraste iodado — evoluindo com febre alta, taquiarritmia, alteração de consciência e sintomas gastrointestinais (náusea, vômito, diarreia, icterícia por disfunção hepática).
- **Diagnóstico:** clínico, apoiado pelo escore de **Burch-Wartofsky** (pontua temperatura, taquicardia/FA, disfunção do SNC, disfunção gastrointestinal-hepática, fator precipitante identificado); TSH suprimido e T4 livre elevado confirmam, mas **não devem atrasar** o início do tratamento.
- **Tratamento (ordem importa):** **1) betabloqueador** (propranolol — também reduz conversão periférica de T4 em T3) → **2) tionamida** (**propiltiouracila** preferida na fase aguda, por também bloquear a conversão periférica) → **3) iodo (solução de Lugol), dado pelo menos 1 hora após a tionamida** → **4) corticoide** (hidrocortisona, que também reduz conversão periférica e cobre possível insuficiência adrenal relativa) — mais tratamento agressivo do fator precipitante.
- 💎 **Pearl:** dar iodo **antes** da tionamida pode piorar a tireotoxicose (efeito Wolff-Chaikoff transitório seguido de escape, fornecendo substrato extra para síntese hormonal) — a tionamida precisa já estar bloqueando a síntese antes de o iodo ser administrado.
- ⚠️ **Pitfall:** usar metimazol em vez de PTU na fase aguda — perde-se o efeito adicional de bloqueio da conversão periférica de T4 em T3, que só o PTU tem.
- 📝 **Como caiu:** EBSERH 2026 Q46 — sequência correta do tratamento inicial.

## 🔹 Tireoidite subaguda de De Quervain

- **Quando suspeitar:** dor cervical anterior à palpação, geralmente após quadro viral de vias aéreas superiores, com febre baixa e mal-estar.
- **Quadro trifásico:** tireotoxicose transitória (semanas, por liberação de hormônio pré-formado) → hipotireoidismo transitório (semanas a poucos meses, enquanto a glândula se recupera) → eutireoidismo (a maioria recupera função normal).
- **Diagnóstico:** VHS/PCR muito elevados (desproporcionais à intensidade dos sintomas sistêmicos); **captação de iodo radioativo baixa** na fase tireotóxica — é o achado que diferencia de doença de Graves, onde a captação estaria alta.
- **Tratamento:** AINE ou corticoide para a dor (corticoide se refratário a AINE), betabloqueador para sintomas tireotóxicos — **nunca tionamida**, porque não há hiperprodução hormonal a bloquear, apenas liberação por destruição folicular.
- 💎 **Pearl:** a tireotoxicose aqui é por **destruição**, não por hiperfunção — esse é o fio condutor que explica tanto a captação baixa quanto a ineficácia de qualquer tionamida.
- ⚠️ **Pitfall:** tratar a fase tireotóxica de De Quervain como se fosse Graves (tionamida) — sem síntese aumentada para bloquear, o fármaco não tem efeito.
- 📝 **Como caiu:** ENARE 2025 Q61 — reconhecimento do padrão trifásico e da captação de iodo baixa.

## 🔹 Nódulo tireoidiano — TI-RADS, PAAF e sistema Bethesda

- **Avaliação inicial:** TSH (nódulo com TSH suprimido sugere nódulo hiperfuncionante, geralmente benigno — considerar cintilografia antes de PAAF) + ultrassonografia com estratificação **TI-RADS** (pontua composição, ecogenicidade, forma, margens e focos ecogênicos; a soma define TR1-TR5).
- **Indicação de PAAF:** depende da combinação TI-RADS × tamanho — quanto maior a categoria de suspeita, menor o corte de tamanho que já indica punção (TR5 pode puncionar a partir de ~1 cm; TR3-TR4 exigem nódulos maiores).
- **Sistema Bethesda (citologia pós-PAAF):** I — não diagnóstico/insatisfatório (repetir PAAF); II — benigno (seguimento clínico); **III — atipia de significado indeterminado/AUS-FLUS, risco intermediário** (repetir PAAF ± teste molecular, nunca cirurgia direta a partir de um único resultado); IV — neoplasia folicular (considerar cirurgia diagnóstica ou teste molecular); V — suspeito para malignidade (cirurgia); VI — maligno (cirurgia).
- 💎 **Pearl:** TI-RADS estima risco **antes** de qualquer procedimento invasivo (imagem); Bethesda estratifica risco **depois** da punção (citologia) — a categoria indeterminada (III) reflete justamente a limitação da citologia isolada em distinguir adenoma folicular de carcinoma folicular, diferenciação que depende de invasão capsular/vascular visível só à histologia.
- ⚠️ **Pitfall:** indicar cirurgia a partir de um único Bethesda III, ou puncionar todo nódulo sem estratificar por TI-RADS/tamanho primeiro — ambos geram sobretratamento.
- 📝 **Como caiu:** ENARE 2026 Q7 (Bethesda III) e ENARE 2026 Q8 (TI-RADS e indicação de PAAF).

## 🔹 Doença de Graves e oftalmopatia

- **Quando suspeitar:** bócio difuso, taquicardia, perda de peso com apetite mantido/aumentado, tremor fino, intolerância ao calor; é a **causa mais comum de hipertireoidismo**.
- **Diagnóstico:** TRAb positivo (alta especificidade); captação de iodo radioativo **difusamente aumentada** (distingue de De Quervain/tireotoxicose factícia, ambas com captação baixa).
- **Oftalmopatia de Graves:** exoftalmia, retração palpebral, diplopia por infiltração inflamatória autoimune da musculatura extraocular e do tecido retro-orbitário — pode preceder, acompanhar ou surgir após o hipertireoidismo; **piora com tabagismo** e classicamente também pode piorar após tratamento com iodo radioativo (corticoide profilático é considerado nesse cenário em doença ocular ativa).
- **Tratamento:** tionamida (metimazol de escolha fora da tempestade tireotóxica), iodo radioativo ou tireoidectomia, conforme perfil do paciente.
- **Graves na gestação:** captação de iodo radioativo é **contraindicada** (exposição fetal à radiação) e iodo terapêutico também não se usa na gestação — o manejo é só com tionamida, com uma nuance de peso: **propiltiouracila no 1º trimestre** (metimazol nesse período associa-se a embriopatia — aplasia cutis, atresia de coanas/esôfago) e **troca para metimazol a partir do 2º trimestre** (PTU tem maior risco de hepatotoxicidade grave em uso prolongado) — decisão por trimestre, não fixa em uma só droga.
- ⚠️ **Pitfall:** indicar iodo radioativo sem considerar o risco de piora da oftalmopatia em doença ocular ativa/moderada-grave — nesse cenário, cirurgia ou tionamida costumam ser preferidas, ou o iodo é associado a corticoide profilático. Também é erro manter metimazol durante todo o 1º trimestre da gestação, ou solicitar captação de iodo radioativo em gestante para investigar tireotoxicose.
- 📝 **Como caiu:** ainda não cobrado no corpus — mas é a causa mais comum de hipertireoidismo e substrato de fundo de todo o tema.

## 🔹 Tireoidite de Hashimoto e hipotireoidismo subclínico

- **Quando suspeitar:** fadiga, ganho de peso, intolerância ao frio, pele seca, constipação, bradicardia, bócio (fase inicial) ou glândula atrófica (fase tardia); é a **causa mais comum de hipotireoidismo primário**.
- **Diagnóstico:** anti-TPO positivo é o marcador mais sensível; TSH elevado com T4 livre baixo confirma hipofunção manifesta.
- **Hipotireoidismo subclínico** (TSH elevado, T4 livre normal): a decisão de tratar depende de um limiar — **TSH ≥10 mUI/L trata quase sempre**; **TSH entre 4,5-10 mUI/L trata se houver sintomas, gestação/tentativa de engravidar, anti-TPO positivo ou fatores de risco cardiovascular** — tratar automaticamente todo TSH levemente elevado expõe a tireotoxicose iatrogênica sem benefício comprovado.
- **Tratamento:** levotiroxina em jejum, ajustada por TSH a cada 6-8 semanas até estabilização.
- 💎 **Pearl:** na gestação, o alvo de TSH é mais baixo que fora dela (faixas de referência específicas por trimestre) — hipotireoidismo subclínico na gestante quase sempre é tratado, diferente da não gestante.
- ⚠️ **Pitfall:** tratar automaticamente todo hipotireoidismo subclínico sem considerar o grau de elevação do TSH, sintomas e contexto — sobretratamento é tão indesejável quanto subtratamento.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Coma mixedematoso

- **Quando suspeitar:** hipotireoidismo grave descompensado — hipotermia, rebaixamento de consciência, bradicardia, geralmente com fator precipitante (infecção, frio extremo, sedativos, suspensão de levotiroxina). É o extremo oposto da tempestade tireotóxica, e igualmente uma emergência subdiagnosticada.
- **Diagnóstico:** TSH muito elevado com T4 livre muito baixo em paciente com hipotermia e rebaixamento — diagnóstico clínico-laboratorial combinado; tratamento não deve aguardar confirmação completa.
- **Tratamento:** levotiroxina intravenosa (associada a liotironina em casos graves) + **hidrocortisona empírica** (cobre insuficiência adrenal concomitante não excluída, já que hipotireoidismo grave pode mascarar/coexistir com insuficiência adrenal) + suporte para hipotermia e insuficiência respiratória.
- 💎 **Pearl:** dar levotiroxina sem cobrir eixo adrenal pode precipitar crise adrenal, porque a reposição tireoidiana acelera o metabolismo do cortisol residual — por isso a hidrocortisona vem sempre junto, empírica, até excluir insuficiência adrenal.
- ⚠️ **Pitfall:** aquecer agressivamente o paciente ou tratar só a hipotermia sem reconhecer o mixedema de base como causa — e não pensar em insuficiência adrenal associada.
- 📝 **Como caiu:** ainda não cobrado no corpus — contraparte emergencial simétrica à tempestade tireotóxica, mesmo padrão de prova.

## 🔹 Disfunção tireoidiana por amiodarona

- **Quando suspeitar:** paciente em uso de amiodarona com alteração de função tireoidiana — a droga tem alto teor de iodo e efeito citotóxico direto sobre a tireoide.
- **Tipo 1** (excesso de síntese, geralmente em glândula previamente alterada — nódulo, Graves subclínico): responde a tionamida.
- **Tipo 2** (tireoidite destrutiva, glândula previamente normal): responde a corticoide, não a tionamida.
- ⚠️ **Pitfall:** tratar toda tireotoxicose por amiodarona com tionamida — no tipo 2, não há hiperfunção a bloquear; a distinção nem sempre é simples na prática e às vezes exige tratamento combinado empírico.
- 📝 **Como caiu:** ainda não cobrado no corpus — tema cardiológico-endócrino combinado, de alto rendimento em prova de residência.

## 🔹 Câncer de tireoide

- **Carcinoma papilífero:** tipo histológico mais comum, excelente prognóstico mesmo com metástase linfonodal cervical ao diagnóstico; origina-se de células foliculares, mantendo capacidade de captar iodo (permite iodo radioativo adjuvante).
- **Carcinoma folicular:** dissemina por via hematogênica (diferente do papilífero, mais linfático); também deriva de células foliculares.
- **Carcinoma medular:** origina-se das células parafoliculares (células C) — produz **calcitonina** (marcador tumoral útil para diagnóstico e seguimento) e se associa a **MEN2** — **rastrear feocromocitoma antes de qualquer cirurgia tireoidiana** nesse contexto, pelo risco de crise hipertensiva intraoperatória se não tratado antes.
- **Carcinoma anaplásico:** desdiferenciação extrema, muitas vezes a partir de carcinoma diferenciado preexistente, altamente agressivo, prognóstico reservado, resposta terapêutica muito limitada.
- 💎 **Pearl:** nódulo tireoidiano associado a diarreia (efeito secretor da calcitonina/peptídeos associados) é pista clássica para carcinoma medular.
- ⚠️ **Pitfall:** operar carcinoma medular associado a MEN2 sem rastrear feocromocitoma antes — risco grave e evitável.
- 📝 **Como caiu:** ainda não cobrado no corpus — mas é extensão natural do tema nódulo/Bethesda já cobrado duas vezes.

## 🔹 Tireotoxicose factícia e tireoidite pós-parto

- **Tireotoxicose factícia** (uso exógeno não declarado de hormônio tireoidiano): T4 livre elevado com **tireoglobulina sérica baixa/suprimida** (a tireoide própria está inibida, não produzindo tireoglobulina) e captação de iodo radioativo baixa — diferencia de Graves (tireoglobulina normal/alta, captação alta).
- **Tireoidite pós-parto:** padrão trifásico semelhante ao de De Quervain (tireotóxica → hipotireoidea → eutireoidea), mas nos primeiros meses após o parto, **sem dor cervical** e sem elevação importante de provas inflamatórias — diagnóstico diferencial relevante em puérpera com sintomas tireotóxicos ou de hipotireoidismo.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**Diferencial de tireotoxicose por captação de iodo radioativo**

| Captação | Entidades | Mecanismo |
|---|---|---|
| Alta e difusa | Doença de Graves | Hiperfunção autoimune (TRAb+) |
| Alta e focal/heterogênea | Bócio multinodular tóxico, adenoma tóxico | Hiperfunção autônoma focal |
| Baixa | De Quervain, tireoidite silenciosa/pós-parto, factícia, amiodarona tipo 2 | Destruição folicular ou hormônio exógeno — sem síntese aumentada |

## 📚 Referências essenciais

- American Thyroid Association (ATA) — Guidelines for Diagnosis and Management of Hyperthyroidism and Thyrotoxicosis.
- American Thyroid Association (ATA) — Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer.
- American Thyroid Association (ATA) — Guidelines for the Management of Thyroid Disease during Pregnancy and Postpartum.
- Sistema Bethesda para citopatologia da tireoide.
- ACR TI-RADS (American College of Radiology).
`;

export default content.trim();
