/**
 * Resumo — Oncologia · Tumores sólidos.
 *
 * Cobre as entidades do assunto no corpus: tumores neuroendócrinos/síndrome
 * carcinoide, câncer colorretal, câncer de mama, câncer de pulmão, câncer
 * gástrico e esofágico, carcinoma de células renais, sítio primário
 * desconhecido e tumor de testículo.
 */
const content = `
## 🎯 Essencial

- **Síndrome carcinoide só aparece clinicamente quando há metástase hepática** (o fígado normalmente inativa a serotonina liberada pelo tumor primário via primeira passagem — quando há metástase hepática, a secreção cai direto na circulação sistêmica, ignorando esse metabolismo de primeira passagem).
- Tríade da síndrome carcinoide: **diarreia secretora + flushing + valvopatia cardíaca direita** (espessamento valvar tricúspide/pulmonar por serotonina). Dosar **ácido 5-hidroxi-indolacético (5-HIAA) na urina de 24h**.
- **Câncer de pulmão com mutação de EGFR: tratamento-alvo com inibidor de tirosina-quinase (erlotinibe, gefitinibe, osimertinibe)**, não quimioterapia citotóxica tradicional como primeira linha — típico de adenocarcinoma em não fumante ou fumante leve.
- **Classificação de Lauren do adenocarcinoma gástrico:** tipo **intestinal** (associado a *H. pylori*, lesão bem diferenciada, mais comum em idosos) × tipo **difuso** (células em anel de sinete, mais agressivo, associado a mutação de CDH1/E-caderina, mais comum em jovens e mulheres).
- **Câncer de mama RE+/HER2-negativo em pós-menopausa: hormonioterapia com inibidor de aromatase (anastrozol)**, não tamoxifeno — tamoxifeno é preferido em pré-menopausa (mulher ainda produz estrogênio ovariano, que a aromatase não bloqueia).
- **Massa testicular sólida = orquiectomia inguinal, nunca biópsia transescrotal** — biópsia por via escrotal pode disseminar células tumorais para a drenagem linfática inguinal, alterando o estadiamento e o prognóstico.
- **Marcadores tumorais testiculares (alfafetoproteína, beta-hCG, LDH)** são dosados **antes** da orquiectomia para estadiamento/prognóstico, não substituem a cirurgia diagnóstica.
- **Metástase hepática com anemia ferropriva em idoso = investigar cólon** — colonoscopia é o próximo passo diante de lesões hepáticas hipovasculares associadas a ferropenia inexplicada.
- **Carcinoma escamoso em linfonodo cervical sem sítio primário aparente na cavidade oral: pan-endoscopia com biópsias seriadas** (nasofaringe, orofaringe, hipofaringe, laringe, esôfago) é o próximo passo — não é PET-CT de imediato.
- **Massa renal sólida pequena (<4cm), localizada, sem invasão nem metástase: nefrectomia parcial seguida de vigilância ativa** — preserva função renal e evita quimioterapia/terapia-alvo desnecessária em doença localizada.
- **Tumor neuroendócrino de íleo é a causa mais comum de síndrome carcinoide clássica**; tumores gástricos/duodenais e pancreáticos têm apresentações distintas (gastrinoma, glucagonoma, vipoma — não confundir os quadros).

## 💎 Pearls

- **Sopro holossistólico em borda paraesternal esquerda + ventrículo direito palpável em paciente com diarreia e flushing** = pense em insuficiência tricúspide por síndrome carcinoide antes de pensar em causa cardíaca primária.
- **Câncer colorretal metastático pode se apresentar sem sintomas intestinais** — febre, perda de peso e achado hepático incidental (nódulos hipovascularizados) podem ser a primeira manifestação, especialmente em idosos.
- **BIRADS-5 em mamografia = probabilidade de malignidade >95%** — a biópsia é indicada independentemente de outros achados, e o BIRADS por si só já orienta a conduta.
- **Trombose venosa profunda em mulher com câncer de mama RE+ é uma contraindicação relativa ao tamoxifeno** (aumenta risco tromboembólico) — nesse cenário, o inibidor de aromatase (se pós-menopausa) é preferível também por esse motivo, além da eficácia.
- **TIRADS 4-5 com TSH normal: punção aspirativa por agulha fina (PAAF) direto** — não repita USG "para ver se cresce" quando a classificação ultrassonográfica já indica risco significativo.
- **Sítio primário desconhecido com adenopatia cervical + carcinoma escamoso** aponta quase sempre para trato aerodigestivo superior (mesmo com exame de cavidade oral normal) — dai a pan-endoscopia, não imagem isolada.
- **Nefrectomia parcial preserva néfrons e reduz risco de doença renal crônica futura** — é preferida à radical sempre que tecnicamente possível em massa localizada.
- **Carcinoma de células renais é o "tumor do internista"**: pode se apresentar com síndromes paraneoplásicas variadas (policitemia por eritropoetina ectópica, hipercalcemia por PTHrP, hipertensão, disfunção hepática não metastática — síndrome de Stauffer) mesmo sem sintoma urinário.
- **Tumor de testículo em jovem com massa indolor: não atrasar a investigação** — é um dos cânceres sólidos mais curáveis quando tratado precocemente, e o atraso diagnóstico é o principal fator evitável de pior desfecho.

## ⚠️ Pitfalls

- **Biopsiar massa testicular por via transescrotal ou "biópsia a céu aberto na sala"** — via errada, risco de disseminação linfática alternativa e comprometimento oncológico; a via correta é sempre inguinal, com clampeamento do cordão antes de manipular o tumor.
- **Pedir PSA e alfafetoproteína juntos como se fossem intercambiáveis** — PSA é próstata, não testículo; o marcador de linhagem germinativa não seminomatosa é alfafetoproteína (e beta-hCG), enquanto seminoma puro tipicamente não eleva alfafetoproteína.
- **Prescrever tamoxifeno de rotina em pós-menopausa** sem considerar que o inibidor de aromatase costuma ser preferido nesse grupo, especialmente com fatores de risco tromboembólico associados.
- **Iniciar quimioterapia citotóxica tradicional como primeira linha em adenocarcinoma de pulmão com mutação driver conhecida (EGFR, ALK, ROS1)** — a terapia-alvo tem melhor resposta e menor toxicidade nesse contexto e deve vir primeiro.
- **Confundir os subtipos de Lauren** — tipo intestinal não é o mais agressivo (é o difuso, com células em anel de sinete); associar automaticamente "mais grave" a "mais associado a H. pylori" é armadilha comum.
- **Esquecer que TC de tórax pode ser normal em síndrome de veia cava superior por linfonodomegalia mediastinal isolada sem massa parenquimatosa visível** — não descartar o diagnóstico só pela ausência de massa pulmonar evidente (mais relevante no assunto de emergências oncológicas, mas a lógica de imagem se aplica aqui também para estadiamento mediastinal).
- **Investigar sítio primário desconhecido só com exames de imagem sem biópsia direcionada por achados clínicos** — a pan-endoscopia com biópsias seriadas é superior à imagem isolada quando a histologia aponta trato aerodigestivo.
- **Operar (nefrectomia radical) toda massa renal pequena sem considerar nefrectomia parcial/vigilância ativa** — superestadia o tratamento e aumenta morbidade desnecessária em doença localizada de baixo risco.

## 📝 Como a UERJ cobra

**Tumores sólidos é #4 do ranking (9 questões, 3,6% do corpus)**, com um padrão marcante: quase toda vinheta termina pedindo **"diagnóstico E próximo passo/tratamento"**, e a banca valoriza reconhecer **marcador tumoral, exame confirmatório e primeira linha terapêutica específica** — não apenas o nome do câncer.

- **Tumores neuroendócrinos/síndrome carcinoide** apareceu 2 vezes (2024 Q4, Q46), ambas com vinhetas ricas em achados clássicos (flush, diarreia, sopro cardíaco, 5-HIAA elevado) — é a entidade mais "decorável" dentro do assunto e a mais garantida de reaparecer.
- **Câncer de mama** (2023 Q29) testou explicitamente a diferença entre **anastrozol e tamoxifeno** conforme status menopausal, citando a diretriz NCCN — espere esse tipo de refinamento terapêutico, não só reconhecimento do subtipo molecular.
- **Câncer colorretal** (2023 Q39) foi cobrado por trás de uma apresentação atípica (febre + massa hepática + anemia ferropriva em idosa) — a banca gosta de esconder o diagnóstico primário atrás da metástase.
- **Câncer de pulmão** (2022 Q1) já cobrou terapia-alvo guiada por biomarcador (EGFR/erlotinibe) — sinal de que a prova acompanha a medicina de precisão, não só o estadiamento clássico.
- **Tumor de testículo e sítio primário desconhecido** (2021 Q28, Q29) testam sobretudo a **via de investigação correta** (orquiectomia inguinal; pan-endoscopia) mais do que o reconhecimento do câncer em si.
- **Câncer gástrico** (2024 Q40) cobrou a classificação de Lauren associada ao fator de risco causal correto — questão de raciocínio etiológico, não de memorização isolada.

## 🆕 Atualização

- **Terapia-alvo em câncer de pulmão** expandiu muito além do EGFR desde as últimas provas: inibidores de ALK, ROS1, KRAS G12C (sotorasibe/adagrasibe), MET exon 14, e imunoterapia (inibidores de checkpoint, pembrolizumabe) já são primeira linha em subgrupos específicos, inclusive combinados com quimioterapia em tumores sem driver identificável. A UERJ até aqui só cobrou EGFR/erlotinibe — mas o racional de "biomarcador antes de escolher tratamento" é o que deve ser internalizado.
- **Câncer de mama:** inibidores de CDK4/6 (palbociclibe, ribociclibe) associados a hormonioterapia tornaram-se padrão em doença metastática RE+/HER2-negativo, e mais recentemente também em adjuvância de alto risco — ainda não cobrado pela banca, mas é a fronteira atual do tratamento hormonal.
- **Carcinoma de células renais:** a era da terapia-alvo antiangiogênica isolada (sunitinibe, pazopanibe) vem sendo substituída por combinações de imunoterapia + antiangiogênico (nivolumabe + cabozantinibe, por exemplo) como primeira linha em doença avançada — a vigilância ativa em doença localizada pequena, testada pela UERJ, continua sendo a conduta correta e não muda.
- **Tumores neuroendócrinos:** análogos de somatostatina de ação prolongada (octreotide LAR) seguem sendo a base do controle sintomático da síndrome carcinoide, e **telotristate etiparg** (inibidor da triptofano-hidroxilase) foi incorporado como adjuvante para diarreia refratária — tema ainda não cobrado, mas relevante para o controle sintomático moderno.

## 🧠 Conceito e fisiopatologia

**Tumores neuroendócrinos** derivam de células do sistema neuroendócrino difuso, capazes de secretar aminas e peptídeos bioativos. O íleo terminal é a localização mais associada à síndrome carcinoide clássica porque tumores ali costumam metastatizar precocemente para o fígado; enquanto o tumor primário e as micrometástases hepáticas ainda drenam pela veia porta, a serotonina secretada é metabolizada no primeiro passo hepático e não chega à circulação sistêmica em quantidade relevante — por isso a síndrome só se manifesta clinicamente quando há **carga metastática hepática significativa**, que permite à serotonina "escapar" do metabolismo de primeira passagem.

**Câncer de pulmão** biologicamente se divide em pequenas células (neuroendócrino, muito agressivo, mas inicialmente quimio/radiossensível) e não pequenas células (adenocarcinoma, escamoso, grandes células), sendo o adenocarcinoma o subtipo mais associado a mutações "driver" acionáveis (EGFR, ALK, ROS1) — mutações que ativam constitutivamente vias de proliferação celular e que podem ser bloqueadas seletivamente por inibidores de tirosina-quinase, com maior eficácia e menor toxicidade do que quimioterapia citotóxica não seletiva.

**Câncer gástrico tipo intestinal** segue a cascata de Correa (gastrite crônica → atrofia → metaplasia intestinal → displasia → carcinoma), fortemente ligada à infecção crônica por *H. pylori* e a fatores ambientais (dieta, tabagismo); é bem diferenciado e forma estruturas glandulares reconhecíveis. O **tipo difuso** carece de coesão celular (mutação de E-caderina/CDH1, inclusive em formas hereditárias) e infiltra a parede gástrica de forma difusa e discoesa (linite plástica em casos avançados), sendo mais agressivo e menos dependente de *H. pylori*.

**Câncer de mama RE-positivo** depende de sinalização estrogênica para proliferar; em pós-menopausa, a principal fonte de estrogênio deixa de ser ovariana e passa a ser a aromatização periférica de andrógenos em tecido adiposo — por isso o **inibidor de aromatase** é particularmente eficaz nessa população, bloqueando essa via extragonadal. Em pré-menopausa, os ovários ainda produzem estrogênio de forma independente da aromatase, e o **tamoxifeno** (modulador seletivo do receptor de estrogênio, que bloqueia o receptor diretamente no tecido mamário) é a escolha padrão.

**Câncer de testículo** origina-se predominantemente de células germinativas (seminoma e não seminomatosos — carcinoma embrionário, tumor de saco vitelínico, coriocarcinoma, teratoma), com drenagem linfática que segue o trajeto embrionário original do testículo (retroperitônio, não a região inguinal) — daí a orquiectomia inguinal (que respeita esse trajeto) em vez de abordagem escrotal (que criaria uma via de disseminação linfática inguinal anômala).

**Carcinoma de células renais** origina-se do epitélio tubular renal (subtipo de células claras é o mais comum), com tendência a invadir a veia renal e a veia cava inferior, e capacidade de produzir substâncias ectópicas (eritropoetina, PTHrP, renina) que explicam suas síndromes paraneoplásicas variadas.

## 🩺 Quadro clínico

- **Síndrome carcinoide:** diarreia secretora de grande volume, flushing episódico de face/pescoço/tronco, sibilância/broncoespasmo, valvopatia cardíaca direita (insuficiência tricúspide/estenose pulmonar) em doença avançada.
- **Câncer de pulmão:** tosse, dispneia, emagrecimento, achado incidental em rastreio por imagem (cada vez mais comum); síndromes paraneoplásicas e síndrome de veia cava superior em doença localmente avançada.
- **Câncer gástrico/esofágico:** dor epigástrica, saciedade precoce, emagrecimento, disfagia (esôfago), sangramento oculto/anemia ferropriva.
- **Câncer de mama:** nódulo palpável ou achado em rastreio mamográfico; sinais de alarme incluem retração de pele/mamilo, secreção sanguinolenta, linfadenopatia axilar.
- **Câncer colorretal:** alteração do hábito intestinal, sangramento (visível ou oculto), anemia ferropriva inexplicada em idoso, massa abdominal palpável; metástase hepática pode ser a primeira manifestação clínica.
- **Tumor de testículo:** massa testicular indolor (o achado clássico — dor é atípica e pode atrasar a suspeita), às vezes ginecomastia (produção de hCG).
- **Carcinoma de células renais:** hematúria, dor em flanco, massa palpável (tríade clássica, mas incompleta na maioria dos casos hoje, já que grande parte é achado incidental); síndromes paraneoplásicas.
- **Sítio primário desconhecido:** adenopatia (frequentemente cervical) como manifestação inicial, sem sintomas relacionados a um órgão específico.

## 🔎 Diagnóstico

- **Síndrome carcinoide:** dosagem de **5-HIAA urinário de 24h**; TC/RM para localizar tumor primário e metástases; ecocardiograma para avaliar acometimento valvar; cromogranina A sérica como marcador auxiliar.
- **Câncer de pulmão:** biópsia (broncoscópica, transtorácica ou de linfonodo/metástase acessível) com **painel molecular obrigatório** (EGFR, ALK, ROS1, PD-L1, entre outros) antes de definir tratamento sistêmico.
- **Câncer gástrico:** endoscopia digestiva alta com biópsia, classificação histológica (Lauren) e estadiamento por TC/USG endoscópico.
- **Câncer de mama:** mamografia com classificação BIRADS, biópsia com definição de subtipo molecular (RE, RP, HER2, Ki-67) — essencial para escolher a terapia sistêmica.
- **Câncer colorretal:** colonoscopia com biópsia é o exame definitivo; deve ser indicada sempre que houver achado sugestivo de metástase hepática de origem digestiva não esclarecida.
- **Tumor de testículo:** USG testicular seguida de **orquiectomia inguinal** (diagnóstica e terapêutica ao mesmo tempo), com marcadores tumorais (alfafetoproteína, beta-hCG, LDH) dosados antes da cirurgia.
- **Carcinoma de células renais:** TC de abdome com contraste caracteriza a massa (sólida, realce); biópsia percutânea reservada para casos de dúvida diagnóstica ou antes de terapia sistêmica sem cirurgia prévia.
- **Sítio primário desconhecido:** biópsia/PAAF da lesão acessível para definir histologia (escamoso, adenocarcinoma, indiferenciado) — a histologia direciona a investigação subsequente (pan-endoscopia para escamoso cervical; investigação ginecológica/mamária ou digestiva para adenocarcinoma, conforme padrão imuno-histoquímico).

## 🚨 Gravidade / classificação

- **Estadiamento TNM** é a base de decisão terapêutica em todos os tumores sólidos — determina se a doença é ressecável, se há indicação de terapia neoadjuvante/adjuvante, e o prognóstico.
- **Massa renal localizada (T1, <4-7cm, sem invasão)** permite nefrectomia parcial e vigilância ativa em casos muito selecionados (idoso, comorbidade significativa, lesão muito pequena de baixo risco) — doença avançada exige terapia sistêmica direcionada.
- **Tumor de testículo** é estadiado por marcadores tumorais pós-orquiectomia (categorias S0-S3) além do TNM anatômico — a cinética de queda dos marcadores após a cirurgia já orienta necessidade de terapia adicional.
- **BIRADS** (mama) e **TIRADS** (tireoide, ver resumo de doenças da tireoide) são sistemas de estratificação de risco por imagem que definem diretamente a indicação de biópsia.

## 💊 Tratamento

- **Síndrome carcinoide:** análogos de somatostatina (octreotide) para controle sintomático e antiproliferativo; ressecção cirúrgica do tumor primário quando possível; terapia locorregional (embolização) ou sistêmica para doença metastática hepática volumosa.
- **Câncer de pulmão com mutação driver (EGFR/ALK/ROS1):** inibidor de tirosina-quinase específico como primeira linha (erlotinibe, gefitinibe, osimertinibe para EGFR); sem driver identificável, quimioterapia associada a imunoterapia.
- **Câncer gástrico:** ressecção cirúrgica (gastrectomia com linfadenectomia) em doença localizada, associada a quimioterapia perioperatória; doença metastática HER2-positiva pode se beneficiar de trastuzumabe associado à quimioterapia.
- **Câncer de mama RE+/HER2-negativo:** hormonioterapia adjuvante — **tamoxifeno em pré-menopausa, inibidor de aromatase (anastrozol, letrozol) em pós-menopausa** — associada a quimioterapia conforme risco de recorrência; HER2-positivo recebe terapia anti-HER2 (trastuzumabe) sempre.
- **Câncer colorretal:** ressecção cirúrgica em doença localizada/oligometastática ressecável, quimioterapia perioperatória conforme estadiamento; doença metastática irressecável trata com quimioterapia sistêmica ± terapia-alvo (anti-EGFR se RAS/BRAF selvagem; antiangiogênico).
- **Tumor de testículo:** orquiectomia inguinal sempre; conduta subsequente (vigilância, radioterapia retroperitoneal, quimioterapia) depende do estadiamento pós-orquiectomia e do subtipo histológico (seminoma × não seminomatoso).
- **Carcinoma de células renais:** nefrectomia (parcial preferencialmente) em doença localizada; terapia sistêmica (imunoterapia ± antiangiogênico) em doença avançada/metastática — pouco responsiva a quimioterapia citotóxica clássica.
- **Sítio primário desconhecido:** tratamento guiado pelo perfil histológico/imuno-histoquímico mais provável (ex.: tratar como câncer de cabeça e pescoço se escamoso cervical após pan-endoscopia negativa).

## 🔀 Diagnóstico diferencial

| Tumor neuroendócrino | Localização | Síndrome/apresentação |
| --- | --- | --- |
| Carcinoide de íleo | Intestino delgado | Síndrome carcinoide (com metástase hepática) |
| Gastrinoma | Duodeno/pâncreas | Síndrome de Zollinger-Ellison (úlceras múltiplas refratárias) |
| Vipoma | Pâncreas | Diarreia aquosa profusa, hipocalemia, acloridria (síndrome WDHA) |
| Glucagonoma | Pâncreas | Eritema necrolítico migratório, diabetes, emagrecimento |

Adenocarcinoma gástrico intestinal × difuso, e câncer de mama RE+ tratado com tamoxifeno × inibidor de aromatase, são as comparações mais cobradas — revisar a tabela de revisão abaixo.

## 📋 Tabela de revisão

| Câncer | Marcador/exame-chave | 1ª linha se contexto clássico |
| --- | --- | --- |
| Pulmão (adenocarcinoma, EGFR+) | Painel molecular | Inibidor de tirosina-quinase |
| Gástrico | Classificação de Lauren | Cirurgia + quimioterapia perioperatória |
| Mama RE+/HER2- pós-menopausa | RE/RP/HER2 | Inibidor de aromatase |
| Colorretal | Colonoscopia | Cirurgia ± quimioterapia |
| Testículo | AFP, beta-hCG, LDH | Orquiectomia inguinal |
| Renal (massa pequena localizada) | TC de abdome | Nefrectomia parcial + vigilância |
| Neuroendócrino (carcinoide) | 5-HIAA urinário | Análogo de somatostatina |

## 📚 Referências essenciais

- NCCN Clinical Practice Guidelines — Breast Cancer, Non-Small Cell Lung Cancer, Gastric Cancer, Testicular Cancer, Kidney Cancer, Neuroendocrine and Adrenal Tumors.
- ESMO Clinical Practice Guidelines — correspondentes por sítio tumoral.
- Classificação de Lauren para adenocarcinoma gástrico (Lauren P., 1965, referência histórica consolidada nas diretrizes atuais).
- NCCN Guideline — Occult Primary (câncer de sítio primário desconhecido).
`;

export default content.trim();
