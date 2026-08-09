/**
 * Resumo — Gastroenterologia e Hepatologia · Doenças do esôfago.
 *
 * Cobre as entidades do assunto no corpus: doença do refluxo
 * gastroesofágico (DRGE) e suas complicações (estenose péptica, esôfago de
 * Barrett), acalasia, síndrome de Boerhaave e esofagite infecciosa.
 */
const content = `
## 🎯 Essencial

- **Disfagia para sólidos E líquidos desde o início = distúrbio motor** (acalasia é o protótipo); **disfagia progressiva, primeiro só para sólidos, depois evoluindo para líquidos = lesão estrutural/obstrutiva** (estenose péptica, neoplasia). Essa distinção temporal é a primeira pergunta a se fazer diante de qualquer disfagia.
- **Acalasia:** perda dos neurônios inibitórios do plexo mioentérico → **ausência de relaxamento do esfíncter esofágico inferior + peristalse ausente no corpo esofágico**. Diagnóstico de certeza é a **esofagomanometria** (não EDA, não esofagografia — esses ajudam mas não fecham o diagnóstico).
- **Esofagografia baritada na acalasia mostra "bico de pássaro"** (afilamento distal característico), mas o exame confirmatório continua sendo a manometria.
- **DRGE não tratada/mal controlada pode evoluir para estenose péptica** (disfagia progressiva por fibrose cicatricial) — a EDA é o exame que define essa complicação e permite dilatação terapêutica.
- **Esôfago de Barrett = metaplasia intestinal do epitélio escamoso esofágico distal**, complicação da DRGE crônica e principal fator de risco para adenocarcinoma de esôfago. **Displasia de alto grau: terapia endoscópica (ablação de mucosa/ressecção)**, não esofagectomia de rotina como primeira conduta.
- **Síndrome de Boerhaave: ruptura esofágica espontânea por vômitos vigorosos**, com **amilase elevada no líquido pleural** (de origem salivar, não pancreática) — dado laboratorial muito discriminatório em derrame pleural pós-vômito.
- **Boerhaave é emergência cirúrgica** — mediastinite por extravasamento de conteúdo gástrico/salivar tem mortalidade alta se o diagnóstico e tratamento atrasarem.
- **Esofagite infecciosa em imunossuprimido:** *Candida* é a causa mais comum (odinofagia, EDA com placas esbranquiçadas, tratada com fluconazol); **CMV e herpes simples** causam úlceras (não placas) e exigem biópsia de borda (CMV) ou de centro da úlcera (herpes) para diferenciação — tratamento antiviral específico (ganciclovir para CMV, aciclovir para herpes) difere do antifúngico.
- **IBP (inibidor de bomba de prótons) é a base do tratamento da DRGE**, incluindo esofagite erosiva graduada pela classificação de Los Angeles; casos refratários ou com complicação estrutural (estenose, Barrett) exigem conduta adicional específica.
- **Classificação de Los Angeles graduia a gravidade endoscópica da esofagite erosiva** (A a D, conforme extensão e confluência das erosões) e ajuda a orientar duração/intensidade do tratamento.

## 💎 Pearls

- **"Elevar os braços ajuda a engolir" ou regurgitação de alimento não digerido de longa data são pistas clássicas de acalasia** — refletem a estase esofágica prolongada por ausência de peristalse eficaz.
- **Acalasia de início recente em idoso deve levantar suspeita de pseudoacalasia por neoplasia** (infiltração tumoral do plexo mioentérico, geralmente por adenocarcinoma de cárdia) — perda de peso rápida e idade avançada são sinais de alarme que merecem EDA cuidadosa antes de assumir acalasia primária.
- **A tríade de Mackler (vômito + dor torácica súbita + enfisema subcutâneo cervical) é clássica de síndrome de Boerhaave**, embora nem sempre completa na apresentação inicial.
- **Diferencie Boerhaave (ruptura transmural espontânea, emergência cirúrgica) de síndrome de Mallory-Weiss (laceração superficial da mucosa da junção esofagogástrica, geralmente autolimitada, tratada de forma conservadora/endoscópica)** — ambas seguem vômitos vigorosos, mas a gravidade e a conduta são completamente diferentes.
- **Esôfago de Barrett exige vigilância endoscópica periódica** com biópsias seriadas (protocolo de Seattle) mesmo sem displasia, com intervalo de repetição definido pela presença e grau de displasia encontrada.
- **Odinofagia com biópsia mostrando inclusões virais grandes e multinucleadas sugere herpes; inclusões intranucleares e intracitoplasmáticas "em olho de coruja" sugerem CMV** — detalhe histopatológico que pode aparecer em vinhetas mais avançadas.
- **Obesidade é fator de risco independente para DRGE e suas complicações** (aumenta pressão intra-abdominal, favorece hérnia hiatal) — presente na maioria das vinhetas de DRGE complicada do banco.

## ⚠️ Pitfalls

- **Pedir EDA como exame confirmatório de acalasia** — EDA é importante para excluir causa obstrutiva/pseudoacalasia, mas o diagnóstico definitivo é pela manometria esofágica, que demonstra a ausência de relaxamento do EEI e a aperistalse do corpo esofágico.
- **Confundir a amilase elevada no líquido pleural de Boerhaave com origem pancreática** — na ruptura esofágica, a amilase é de origem **salivar**, um detalhe que a banca já cobrou explicitamente comparando os valores séricos (normais) com os pleurais (muito elevados).
- **Indicar esofagectomia como primeira conduta em displasia de alto grau no esôfago de Barrett** — a terapia endoscópica (ablação por radiofrequência, ressecção mucosa) é hoje a primeira linha, reservando a cirurgia para casos com invasão mais profunda ou falha da terapia endoscópica.
- **Tratar toda odinofagia em imunossuprimido como candidíase sem considerar CMV/herpes quando a EDA mostra úlceras (em vez de placas)** — o aspecto endoscópico (placas × úlceras) já direciona fortemente a etiologia antes mesmo da biópsia.
- **Achar que toda disfagia progressiva é neoplasia** sem considerar estenose péptica benigna secundária a DRGE de longa data — a história de refluxo crônico prévio é o dado que direciona para a causa benigna.
- **Confundir espasmo esofagiano difuso (contrações simultâneas não coordenadas, dor torácica intermitente) com acalasia** — ambos são distúrbios motores diagnosticados por manometria, mas os padrões manométricos e o tratamento diferem.
- **Retirar o inibidor de bomba de prótons rapidamente sem desmame em paciente com esofagite erosiva grave (Los Angeles C/D)** — risco de recidiva rápida e progressão para complicação estrutural.

## 📝 Como a UERJ cobra

**Doenças do esôfago é #10 do ranking (6 questões, 2,4% do corpus)**, com a **DRGE e suas complicações** representando a espinha dorsal do assunto (3 das 6 questões, incluindo a forma não complicada e duas complicações distintas).

- **DRGE** (2022 Q39, 2024 Q20) testou tanto o reconhecimento e tratamento da esofagite não complicada (IBP + medidas comportamentais) quanto a **complicação estrutural** (estenose péptica) — a banca gosta de mostrar a doença em dois estágios evolutivos diferentes.
- **Esôfago de Barrett** (2023 Q9) cobrou diretamente a **conduta atual em displasia de alto grau** (terapia endoscópica, não cirurgia de imediato) — questão alinhada com a prática contemporânea, não com condutas antigas mais agressivas.
- **Acalasia** (2021 Q1) e **síndrome de Boerhaave** (2022 Q36) são questões de reconhecimento clássico de vinheta, mas exigem conhecimento preciso do **exame confirmatório correto** em cada caso (manometria; correlação clínico-laboratorial do líquido pleural).
- **Esofagite infecciosa** (2025 Q12) trouxe o contexto de imunossupressão (lúpus em uso de imunossupressores) como pista central — a banca associa a etiologia da esofagite ao grau/tipo de imunossupressão do paciente, não apresenta isoladamente.

## 🆕 Atualização

- **Terapia endoscópica (ablação por radiofrequência, ressecção endoscópica de mucosa)** consolidou-se definitivamente como primeira linha para esôfago de Barrett com displasia de alto grau e para carcinoma intramucoso inicial, reduzindo drasticamente a necessidade de esofagectomia nesses cenários — mudança de paradigma já refletida na questão da UERJ de 2023.
- **POEM (miotomia endoscópica peroral)** tornou-se alternativa consolidada à miotomia de Heller cirúrgica para acalasia, com eficácia comparável e abordagem menos invasiva — ainda não cobrado pela UERJ, mas já é padrão de cuidado em centros de referência.
- **Vonoprazan**, um novo bloqueador competitivo de potássio (P-CAB), foi aprovado mais recentemente como alternativa aos IBPs tradicionais na DRGE, com início de ação mais rápido e supressão ácida mais potente/sustentada — tema emergente ainda não cobrado pela banca.
- **Rastreio de esôfago de Barrett** permanece direcionado a pacientes com múltiplos fatores de risco (DRGE crônica, obesidade, tabagismo, idade >50, história familiar), e não como rastreio populacional universal — ponto que se mantém estável nas diretrizes mais recentes.

## 🧠 Conceito e fisiopatologia

O esôfago normal depende de peristalse coordenada e de um esfíncter esofágico inferior (EEI) que relaxa de forma sincronizada com a deglutição, permitindo a passagem do bolo alimentar e impedindo o refluxo do conteúdo gástrico em repouso. Doenças esofágicas se organizam em três grandes mecanismos: **motor** (acalasia, espasmo difuso), **inflamatório/erosivo** (DRGE, esofagite infecciosa) e **estrutural/mecânico** (estenose, ruptura).

**Acalasia** resulta da destruição progressiva (autoimune na forma idiopática mais comum; ou secundária a infiltração neoplásica/doença de Chagas em formas específicas) dos neurônios inibitórios do plexo mioentérico de Auerbach, responsáveis por mediar o relaxamento do EEI via óxido nítrico e peptídeo intestinal vasoativo. Sem essa inibição, o EEI permanece hipertônico e não relaxa adequadamente à deglutição, e a perda paralela da inervação do corpo esofágico compromete a peristalse — o resultado é estase do bolo alimentar acima do esfíncter, dilatação progressiva do esôfago (megaesôfago em fases avançadas) e disfagia para sólidos e líquidos desde o início.

**DRGE** decorre de relaxamentos transitórios inapropriados do EEI (mecanismo predominante) e/ou hipotonia basal do esfíncter, permitindo refluxo repetido de conteúdo ácido/biliar para o esôfago distal. A exposição ácida crônica lesa o epitélio escamoso, gerando inflamação (esofagite erosiva) que, se mantida, pode cicatrizar com fibrose (estenose péptica) ou, em resposta adaptativa, substituir o epitélio escamoso por epitélio colunar intestinal metaplásico mais resistente ao ácido (esôfago de Barrett) — metaplasia que, por sua vez, carrega risco aumentado de progressão para displasia e adenocarcinoma.

**Síndrome de Boerhaave** ocorre quando um aumento súbito e importante da pressão intraesofágica (tipicamente durante vômito vigoroso contra uma glote fechada) excede a capacidade de resistência da parede esofágica, causando ruptura transmural completa — mais comumente na parede póstero-lateral esquerda do esôfago distal, o ponto de menor reforço muscular relativo. O extravasamento de conteúdo gástrico/salivar rico em amilase para o mediastino e espaço pleural desencadeia mediastinite química e depois bacteriana, com potencial evolução séptica rápida.

**Esofagite infecciosa** ocorre predominantemente em pacientes imunossuprimidos, nos quais a vigilância imune local reduzida permite proliferação de fungos (*Candida*, mais comum) ou reativação/infecção primária por vírus (CMV, herpes simples) na mucosa esofágica, causando lesões com padrões morfológicos distintos conforme o agente.

## 🩺 Quadro clínico

- **Acalasia:** disfagia progressiva para sólidos e líquidos desde o início, regurgitação de alimento não digerido, perda de peso, dor torácica ocasional, manobras compensatórias (elevar os braços, manobra de Valsalva) para facilitar a passagem do bolo.
- **DRGE:** pirose retroesternal relacionada a decúbito/alimentação, regurgitação ácida, tosse crônica/rouquidão em manifestações extraesofágicas; sinais de alarme (disfagia, odinofagia, emagrecimento, sangramento) indicam necessidade de investigação endoscópica.
- **Estenose péptica:** disfagia progressiva, inicialmente para sólidos, evoluindo em paciente com história de DRGE de longa data, muitas vezes com melhora aparente da pirose (a estenose reduz o contato do ácido refluído com a mucosa proximal).
- **Esôfago de Barrett:** geralmente assintomático além dos sintomas da DRGE de base; é achado endoscópico com confirmação histológica.
- **Síndrome de Boerhaave:** dor torácica súbita e intensa após episódio de vômito vigoroso, seguida de piora progressiva, enfisema subcutâneo cervical, derrame pleural (mais comum à esquerda), sinais de sepse/mediastinite se o diagnóstico atrasar.
- **Esofagite infecciosa:** odinofagia (dor à deglutição, diferente da disfagia mecânica), pode haver febre; contexto de imunossupressão é quase sempre presente na história.

## 🔎 Diagnóstico

- **Acalasia:** esofagografia baritada (sinal do "bico de pássaro", dilatação proximal) sugere; **esofagomanometria de alta resolução confirma** (ausência de relaxamento do EEI + aperistalse); EDA é sempre realizada para excluir pseudoacalasia por neoplasia de cárdia.
- **DRGE não complicada:** diagnóstico predominantemente clínico em paciente com sintomas típicos sem sinais de alarme; EDA reservada para sinais de alarme, sintomas refratários ou rastreio de complicação em paciente de risco.
- **Estenose péptica:** EDA com biópsia (excluir malignidade) e, frequentemente, dilatação terapêutica no mesmo procedimento.
- **Esôfago de Barrett:** EDA com biópsias seriadas protocoladas (múltiplos quadrantes, a cada poucos centímetros) confirmando metaplasia intestinal e graduando displasia.
- **Síndrome de Boerhaave:** suspeita clínica + **análise do líquido pleural com amilase muito elevada** (origem salivar); confirmação por esofagografia com contraste hidrossolúvel (evitar bário na suspeita de perfuração) ou TC de tórax com contraste oral.
- **Esofagite infecciosa:** EDA com biópsia — placas esbranquiçadas removíveis sugerem *Candida* (biópsia/citologia confirma pseudo-hifas); úlceras sugerem etiologia viral, com **biópsia de borda da úlcera para CMV e de centro/base para herpes simples**, já que os vírus infectam preferencialmente locais diferentes da lesão.

## 🚨 Gravidade / classificação

- **Classificação de Los Angeles** graduia a esofagite erosiva por DRGE (A a D, conforme extensão e confluência das erosões vistas na EDA), orientando intensidade e duração do tratamento com IBP.
- **Classificação de Chicago** (manometria de alta resolução) subclassifica os distúrbios motores esofágicos, incluindo os subtipos de acalasia (I, II, III), com implicações prognósticas e de resposta terapêutica (acalasia tipo II geralmente responde melhor a qualquer tratamento; tipo III é a mais refratária).
- **Displasia no esôfago de Barrett** (ausente, indeterminada, baixo grau, alto grau) define o intervalo de vigilância endoscópica e a indicação de terapia ablativa/ressectiva.
- **Síndrome de Boerhaave** tem gravidade diretamente relacionada ao tempo até o diagnóstico e tratamento — atraso além de 24h aumenta substancialmente a mortalidade pela evolução da mediastinite.

## 💊 Tratamento

- **Acalasia:** miotomia de Heller cirúrgica (associada a fundoplicatura parcial para reduzir refluxo pós-operatório) ou **POEM** (miotomia endoscópica peroral) são as opções definitivas de maior durabilidade; dilatação pneumática endoscópica é alternativa menos invasiva com eficácia um pouco menor; toxina botulínica intraesfincteriana é opção paliativa/temporária em pacientes não candidatos a procedimentos definitivos.
- **DRGE não complicada:** **inibidor de bomba de prótons** associado a medidas comportamentais (perda de peso, elevação da cabeceira, evitar refeições próximas ao decúbito, redução de gordura/álcool/tabaco); fundoplicatura cirúrgica reservada para casos refratários ou preferência do paciente por tratamento definitivo.
- **Estenose péptica:** dilatação endoscópica (balão ou velas) associada a IBP em dose plena para reduzir recidiva da estenose.
- **Esôfago de Barrett sem displasia:** IBP contínuo + vigilância endoscópica periódica. **Displasia de baixo grau:** vigilância mais próxima ou terapia ablativa conforme o caso. **Displasia de alto grau/carcinoma intramucoso inicial:** terapia endoscópica (ablação por radiofrequência e/ou ressecção endoscópica de mucosa) como primeira linha.
- **Síndrome de Boerhaave:** reparo cirúrgico de urgência na maioria dos casos (drenagem do mediastino/espaço pleural, sutura primária ou ressecção conforme extensão), suporte com antibiótico de amplo espectro e jejum; casos muito selecionados, diagnosticados precocemente e com contenção adequada, podem ser manejados com stent endoscópico e drenagem em centros especializados.
- **Esofagite infecciosa:** **fluconazol** para candidíase esofágica; **ganciclovir** para CMV; **aciclovir** para herpes simples; otimizar o grau de imunossupressão de base sempre que possível.

## 🔀 Diagnóstico diferencial

| Causa de dor torácica pós-vômito | Achado discriminatório | Gravidade |
| --- | --- | --- |
| Síndrome de Boerhaave | Amilase pleural muito alta, ruptura transmural | Emergência cirúrgica |
| Síndrome de Mallory-Weiss | Laceração superficial da mucosa, hematêmese | Geralmente autolimitada |

| Esofagite infecciosa | Aspecto endoscópico | Biópsia |
| --- | --- | --- |
| Candidíase | Placas esbranquiçadas removíveis | Pseudo-hifas |
| CMV | Úlcera(s), geralmente única/grande | Inclusões na borda da úlcera |
| Herpes simples | Múltiplas úlceras pequenas ("vulcão") | Inclusões no centro/base da úlcera |

## 📋 Tabela de revisão

| Doença | Achado-chave | Confirmação | Tratamento |
| --- | --- | --- | --- |
| Acalasia | Disfagia sólidos+líquidos desde o início | Manometria | Miotomia (Heller/POEM) |
| DRGE | Pirose relacionada a decúbito | Clínico ± EDA | IBP + medidas comportamentais |
| Estenose péptica | Disfagia progressiva + DRGE prévia | EDA | Dilatação + IBP |
| Esôfago de Barrett (displasia alto grau) | Metaplasia + displasia na biópsia | EDA seriada | Ablação/ressecção endoscópica |
| Boerhaave | Dor torácica súbita pós-vômito + amilase pleural alta | Esofagografia com contraste hidrossolúvel/TC | Cirurgia de urgência |
| Esofagite infecciosa | Odinofagia em imunossuprimido | EDA + biópsia | Antifúngico/antiviral específico |

## 📚 Referências essenciais

- American College of Gastroenterology Clinical Guideline — Diagnosis and Management of Achalasia (citada explicitamente pela UERJ em 2021).
- American College of Gastroenterology Clinical Guideline — Diagnosis and Management of Barrett's Esophagus (citada explicitamente pela UERJ em 2023).
- American College of Gastroenterology Clinical Guideline — Diagnosis and Management of GERD.
- Classificação de Los Angeles para esofagite erosiva.
- Classificação de Chicago para distúrbios motores esofágicos (manometria de alta resolução).
`;

export default content.trim();
