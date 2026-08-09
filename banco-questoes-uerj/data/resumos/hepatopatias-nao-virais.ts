/**
 * Resumo — Gastroenterologia e Hepatologia · Hepatopatias não virais.
 *
 * Cobre as seis doenças que compõem o assunto no corpus: colangite biliar
 * primária, colangite esclerosante primária, doença hepática esteatótica
 * metabólica (MASLD), insuficiência hepática aguda, hemocromatose, hepatite
 * alcoólica e síndrome de Budd-Chiari. Ver `content.ts` para o índice de
 * carregamento e `slugs.ts` para a lista de assuntos com resumo.
 */
const content = `
## 🎯 Essencial

- **Padrão de lesão hepática primeiro, doença depois.** FA e GGT desproporcionalmente altas em relação a AST/ALT = padrão **colestático** (pensar em CBP, CEP, obstrução mecânica). AST/ALT muito elevadas com FA/GGT relativamente poupadas = padrão **hepatocelular** (hepatites, isquemia, drogas).
- **Colangite biliar primária (CBP):** mulher de meia-idade, prurido, FA/GGT altas, **anticorpo antimitocôndria (AMA) positivo**, IgM elevada. Tratamento: **ácido ursodesoxicólico (UDCA)**.
- **Colangite esclerosante primária (CEP):** homem jovem, colestase + **retocolite ulcerativa** (associação clássica, ~70-80% dos casos). Diagnóstico por **colangiorressonância** (estenoses e dilatações intra e extra-hepáticas em "colar de contas"), não por sorologia.
- **Antes de fechar CEP, pense em colangite associada a IgG4** — mimetiza CEP na imagem, mas tem tratamento específico (corticoide) e potencialmente reversível. Dosar **IgG4 sérico**.
- **MASLD (ex-NAFLD/esteato-hepatite não alcoólica):** ligada à síndrome metabólica. Estratificar fibrose com **FIB-4** (idade, AST, ALT, plaquetas) antes de pedir biópsia ou elastografia.
- Tratamento da MASLD é **perda de peso de 7-10%** — a intervenção com maior impacto histológico comprovado — associada a controle metabólico (metformina/pioglitazona/GLP-1 se diabético).
- **Insuficiência hepática aguda (IHA):** icterícia + **coagulopatia (INR ≥1,5)** + **encefalopatia**, sem doença hepática crônica prévia. É emergência de transplante — todo caso precisa de contato precoce com centro transplantador.
- Na IHA, **queda das transaminases com piora da bilirrubina e do INR não é melhora — é necrose hepatocitária maciça** (não sobra fígado para elevar enzima). Sinal de mau prognóstico, não de resolução.
- **Hemocromatose hereditária:** mutação do gene *HFE* → **hepcidina baixa** → ferroportina desinibida → absorção intestinal de ferro sem freio. Tríade clássica: hepatopatia + diabetes ("diabetes bronzeado") + hiperpigmentação cutânea.
- **Hepatite alcoólica:** relação **AST/ALT > 2** (raramente ultrapassa 300-400 UI/L), leucocitose neutrofílica, VCM elevado. Gravidade calculada pelo **índice de Maddrey**; se ≥32, indicar **corticoide**.
- **Síndrome de Budd-Chiari:** obstrução do fluxo venoso hepático (veias hepáticas ou VCI) → tríade **dor abdominal + hepatomegalia dolorosa + ascite**, com ascite de **proteína alta** (diferencia de cirrose, que cursa com ascite pobre em proteína).
- Toda hepatopatia inexplicada em paciente jovem, sem fator de risco clássico, merece rastreio de causas genéticas/autoimunes (ferritina, ceruloplasmina, AMA, FAN/anti-músculo liso) antes de rotular como "criptogênica".

## 💎 Pearls

- **5-nucleotidase** confirma que uma FA elevada é de origem **hepática** (e não óssea/placentária) quando ambas sobem juntas — recurso clássico de vinheta que já apareceu na prova.
- **Índice de saturação de transferrina >45%** é o gatilho para investigar hemocromatose; a **ferritina** confirma sobrecarga, mas é reagente de fase aguda e pode subir por inflamação — combine sempre os dois.
- Na hemocromatose, evite **suplementação de vitamina C** (aumenta absorção de ferro) e **frutos do mar crus** (risco de sepse por *Vibrio vulnificus*, que prolifera em meio rico em ferro livre).
- **Cushing pode contribuir para esteatose hepática** — hiperglicemia e resistência insulínica secundárias ao excesso de cortisol simulam MASLD; sempre situar a esteatose no contexto metabólico do paciente.
- A **colangite biliar primária** frequentemente coexiste com outras doenças autoimunes (Sjögren, tireoidite, esclerodermia limitada/CREST) — pesquisar ativamente.
- **Prurido antes da icterícia** é típico de doença colestática crônica (CBP/CEP): os ácidos biliares retidos precedem a elevação relevante de bilirrubina.
- Na **hepatite alcoólica**, a bilirrubina pode estar desproporcionalmente alta em relação às transaminases (padrão "misto"), refletindo colestase intra-hepática associada — não descarte o diagnóstico só porque AST/ALT estão modestas.
- **CEP eleva risco de colangiocarcinoma e de câncer colorretal** nos pacientes com retocolite associada — colonoscopia de vigilância deve começar mais cedo e ser mais frequente do que na DII isolada.
- Paracentese com **GASA (gradiente soro-ascite de albumina) ≥1,1** indica hipertensão portal; no Budd-Chiari, soma-se **proteína total do líquido ascítico >2,5 g/dL**, uma combinação que normalmente não ocorre na cirrose "pura" (proteína baixa) nem na insuficiência cardíaca isolada sem congestão hepática superposta.
- **MELD** não é usado só para fila de transplante — orienta prognóstico e gravidade em qualquer hepatopatia aguda ou crônica descompensada.

## ⚠️ Pitfalls

- Confundir **colangite esclerosante (CEP)** com **colangite biliar primária (CBP)** pelo nome parecido. CEP = homem + DII + colangiorressonância. CBP = mulher + AMA + UDCA. Errar essa troca custa a questão inteira.
- Fechar diagnóstico de CEP sem excluir **colangite associada a IgG4**, que tem imagem semelhante mas responde a corticoide — é a pegadinha mais recorrente do banco neste assunto.
- Pedir **CPRE (colangiografia retrógrada endoscópica)** como primeiro exame para colestase crônica sem obstrução mecânica evidente — é invasiva e reservada para intervenção terapêutica (dilatação de estenose dominante), não para triagem diagnóstica; a colangiorressonância é não invasiva e vem primeiro.
- Interpretar a **queda de transaminases na IHA como sinal de melhora** — combinado a piora do INR e da bilirrubina, é o oposto: significa que a massa hepatocitária residual já não é suficiente para gerar a enzima.
- Esquecer que **hemocromatose secundária** (transfusional, talassemia) tem fisiopatologia diferente da hereditária (ferro entra pela transfusão, não por hiperabsorção intestinal) — não tratar com flebotomia quando a causa é anemia crônica transfusão-dependente; usar quelante.
- Tratar toda esteatose hepática como benigna e não estadiar fibrose — MASLD com fibrose avançada (F3-F4) tem risco cardiovascular e hepático elevado e muda o seguimento.
- Diagnosticar hepatite alcoólica só pelo history de etilismo sem excluir diagnósticos que mimetizam (hepatites virais, leptospirose, colangite) — a vinheta clássica sempre oferece um distrator infeccioso.
- Esquecer que a **flebotomia é contraindicada** em hemocromatose secundária por eritropoese ineficaz (o paciente já é anêmico) — o tratamento nesse cenário é quelação de ferro, não sangria.
- Achar que **Budd-Chiari só ocorre em quem já tem doença hepática** — na verdade, é mais comum em estados de hipercoagulabilidade (síndromes mieloproliferativas com JAK2, SAAF, uso de anticoncepcional, gestação), muitas vezes em fígado previamente normal.

## 📝 Como a UERJ cobra

Este é o assunto **isolado mais cobrado do banco (11 questões, 4,5% do corpus, #1 do ranking 80/20)** — e a banca tem um padrão muito claro: vinheta longa com **perfil bioquímico hepático completo** (transaminases, FA, GGT, bilirrubina total/direta, às vezes 5-nucleotidase) e pede simultaneamente **diagnóstico + próximo exame**, nunca só um dos dois.

- **Colangite biliar primária × colangite esclerosante × colangite por IgG4** foi testada 4 vezes em 5 provas (2021 Q32, 2023 Q7, 2023 Q8, 2024 Q25) — é praticamente garantido reaparecer. O padrão de distinção sempre gira em torno de **sexo do paciente, associação com DII e sorologia** (AMA para CBP; ausência de marcador específico + colangiorressonância + contexto de retocolite para CEP; IgG4 sérico como próximo passo quando a imagem sugere CEP mas o quadro é atípico).
- **Insuficiência hepática aguda** (2022 Q41, 2025 Q14) sempre testa o reconhecimento do **critério de gravidade** (INR crescente + bilirrubina crescente + transaminases em queda = fulminante, não melhora) e cita explicitamente a diretriz AASLD como referência.
- **MASLD/esteato-hepatite metabólica** (2023 Q14, 2025 Q17) foca em **estratificação de fibrose** (FIB-4, fibroscan) e no tratamento de primeira linha (perda de peso 7-10% + metformina no paciente diabético), citando a diretriz AASLD.
- **Hemocromatose** (2022 Q43) testa a fisiopatologia molecular (hepcidina/ferroportina) mais do que o quadro clínico — espere pergunta conceitual, não só reconhecimento de vinheta.
- **Hepatite alcoólica** (2022 Q40) e **Budd-Chiari** (2024 Q11) aparecem como diagnóstico diferencial de quadro colestático/congestivo agudo, quase sempre com um distrator infeccioso (leptospirose, febre amarela) ou cardíaco (ICC) na lista de alternativas.

## 🆕 Atualização

- A nomenclatura mudou: **NAFLD/NASH foram substituídos por MASLD/MASH** (metabolic dysfunction-associated steatotic liver disease/steatohepatitis) pelo consenso multissociedades de 2023, justamente para amarrar o diagnóstico à disfunção metabólica (obesidade, DM2, dislipidemia, hipertensão) em vez de definir a doença pela exclusão de álcool. A UERJ já usa essa nomenclatura nas provas mais recentes (2023, 2025).
- **Resmetirom**, agonista seletivo do receptor beta do hormônio tireoidiano hepático, foi aprovado pelo FDA em 2024 para MASH com fibrose F2-F3 — primeiro fármaco especificamente aprovado para a doença. A UERJ ainda não cobrou esse fármaco; o tratamento historicamente exigido (perda de peso + metformina/pioglitazona) continua sendo a resposta correta em prova, mas vale saber que a farmacoterapia específica já existe.
- **Ácido obeticólico**, opção de segunda linha para CBP com resposta incompleta ao UDCA, teve uso restrito pelo FDA em 2024 em pacientes com cirrose ou hipertensão portal por risco de descompensação hepática grave — relevante se a vinheta descrever CBP avançada.
- Os **agonistas de GLP-1** (semaglutida) vêm mostrando benefício histológico em MASH em ensaios recentes e devem ganhar espaço nas próximas diretrizes, especialmente no paciente com obesidade e DM2 associados — hoje ainda não é resposta padrão em prova, mas é tendência a acompanhar.

## 🧠 Conceito e fisiopatologia

**Padrão de lesão.** O primeiro passo diante de qualquer disfunção hepática é classificar o padrão bioquímico: **colestático** (FA e GGT desproporcionalmente elevadas) reflete lesão dos ductos biliares ou obstrução ao fluxo de bile; **hepatocelular** (AST/ALT desproporcionalmente elevadas) reflete necroinflamação do hepatócito. Esse padrão direciona toda a investigação subsequente — por isso a banca sempre fornece o painel completo antes de perguntar o diagnóstico.

**CBP** é uma doença autoimune em que linfócitos T citotóxicos destroem progressivamente os ductos biliares interlobulares de pequeno calibre, gerando colestase crônica intra-hepática. O alvo antigênico (complexo piruvato desidrogenase mitocondrial) explica a positividade do AMA em >90% dos casos. A colestase mantida leva a acúmulo de colesterol (xantelasmas) e de ácidos biliares (prurido) muito antes de haver icterícia clinicamente relevante.

**CEP** é um processo fibro-obliterativo idiopático que acomete ductos biliares intra e extra-hepáticos de médio/grande calibre, causando estenoses multifocais alternadas com dilatações — o padrão "colar de contas" na colangiorressonância. A associação com retocolite ulcerativa (70-80% dos pacientes com CEP têm DII, geralmente RCU) sugere um mecanismo imunomediado compartilhado, embora a colite não precise estar clinicamente ativa. Por não haver alvo antigênico único, não existe sorologia confirmatória — o diagnóstico é por imagem.

**MASLD** nasce de resistência insulínica periférica, que aumenta o influxo de ácidos graxos livres ao fígado (lipólise do tecido adiposo) e estimula a lipogênese hepática de novo. O acúmulo de triglicerídeos nos hepatócitos (esteatose) é inicialmente benigno, mas em parte dos pacientes evolui para lipotoxicidade, estresse oxidativo, inflamação lobular (esteato-hepatite/MASH) e fibrose progressiva — é essa progressão para fibrose, e não a esteatose isolada, que determina o prognóstico e por isso precisa ser ativamente estadiada.

**Insuficiência hepática aguda** define-se por necrose hepatocitária maciça e rápida (<26 semanas) em fígado previamente sadio, gerando a tríade coagulopatia (INR ≥1,5, por falência de síntese de fatores de coagulação) + encefalopatia + icterícia. A queda das transaminases associada à piora do INR e da bilirrubina não indica recuperação: indica que já não há massa hepatocitária suficiente para liberar enzima — é sinal de mau prognóstico e gatilho para acionar avaliação de transplante hepático de urgência.

**Hemocromatose hereditária** decorre, na maioria dos casos, de mutação homozigótica C282Y do gene *HFE*, que reduz a produção de **hepcidina** pelo fígado. A hepcidina normalmente se liga à ferroportina (o exportador de ferro nos enterócitos e macrófagos) e a degrada, limitando a absorção intestinal de ferro. Sem hepcidina suficiente, a ferroportina fica desinibida e o ferro é absorvido sem controle, acumulando-se progressivamente em fígado, pâncreas, coração, hipófise e pele — daí a tríade hepatopatia + diabetes + hiperpigmentação ("diabetes bronzeado").

**Hepatite alcoólica** resulta da oxidação do etanol via álcool desidrogenase e CYP2E1, gerando acetaldeído e espécies reativas de oxigênio que lesam diretamente o hepatócito e ativam células de Kupffer, amplificando a resposta inflamatória. A depleção de piridoxal-5-fosfato (cofator da ALT) pelo álcool reduz desproporcionalmente a ALT em relação à AST, explicando a relação **AST/ALT > 2**, um dos achados mais discriminatórios em hepatologia.

**Síndrome de Budd-Chiari** decorre de obstrução do efluxo venoso hepático (veias hepáticas e/ou porção hepática da veia cava inferior), quase sempre por trombose associada a estados de hipercoagulabilidade (neoplasias mieloproliferativas com mutação JAK2 são a causa mais comum). A obstrução gera congestão sinusoidal retrógrada — hepatomegalia dolorosa — e extravasamento de proteína para a cavidade peritoneal, gerando ascite rica em proteína, diferente da ascite pobre em proteína típica da cirrose.

## 🩺 Quadro clínico

- **CBP:** mulher de 40-60 anos, **prurido** (frequentemente o sintoma inicial, precede icterícia), fadiga, xantelasmas, hiperpigmentação cutânea, hepatoesplenomegalia tardia. Icterícia franca é sinal de doença avançada.
- **CEP:** homem jovem (30-40 anos) com **retocolite ulcerativa** conhecida ou concomitante, dor em hipocôndrio direito, prurido, icterícia flutuante (característico — melhora e piora ao longo do tempo, ao contrário da colestase obstrutiva mecânica progressiva).
- **MASLD:** frequentemente **assintomática**, achado incidental em USG de rotina ou elevação leve de transaminases em paciente com obesidade/síndrome metabólica; dor em hipocôndrio direito é possível mas inespecífica.
- **IHA:** confusão mental de instalação rápida (encefalopatia), icterícia progressiva, sangramentos (gengivorragia, equimoses) por coagulopatia, em paciente sem hepatopatia prévia conhecida.
- **Hemocromatose:** astenia, artralgias (2ª e 3ª metacarpofalangeanas — "punho em garra"), hiperpigmentação cutânea, disfunção erétil/hipogonadismo, diabetes, cardiomiopatia dilatada/arritmias, hepatoesplenomegalia.
- **Hepatite alcoólica:** febre, icterícia, hepatomegalia dolorosa, história de ingestão etílica pesada recente, sinais de desnutrição; pode cursar com encefalopatia e ascite se grave.
- **Budd-Chiari:** tríade **dor abdominal + hepatomegalia dolorosa + ascite** de instalação subaguda; pode haver circulação colateral abdominal e edema de membros inferiores se houver acometimento da VCI.

## 🔎 Diagnóstico

**Quando suspeitar:** qualquer paciente com alteração inexplicada do hepatograma — o primeiro passo é sempre classificar o padrão (colestático × hepatocelular) e depois seguir o raciocínio abaixo.

- **CBP:** perfil colestático + **AMA positivo** (confirmatório na grande maioria dos casos, dispensando biópsia) + IgM policlonal elevada. Biópsia reservada para AMA negativo com alta suspeita clínica.
- **CEP:** perfil colestático + **colangiorressonância** mostrando estenoses e dilatações multifocais em árvore biliar intra e extra-hepática. Não existe sorologia confirmatória — p-ANCA pode estar presente mas é inespecífico. Sempre investigar/rastrear DII associada com colonoscopia.
- **Diferencial obrigatório da CEP: colangite associada a IgG4** — dosar **IgG4 sérico** e procurar acometimento pancreático (pancreatite autoimune) associado; é tratável com corticoide e pode ser confundida com CEP na imagem.
- **MASLD:** USG confirma esteatose; **FIB-4** (idade, AST, ALT, plaquetas) estratifica risco de fibrose de forma não invasiva e barata — é o primeiro filtro. Se FIB-4 indeterminado/alto, segue para elastografia hepática (fibroscan) ou biópsia.
- **IHA:** INR ≥1,5 + qualquer grau de encefalopatia + ausência de hepatopatia crônica prévia definem o diagnóstico. Investigar etiologia (paracetamol, hepatites virais, autoimune, vascular, Wilson) porque muda a conduta específica (N-acetilcisteína cobre até causas não-paracetamol).
- **Hemocromatose:** **índice de saturação de transferrina >45%** é o rastreio inicial; **ferritina** elevada sugere sobrecarga mas é inespecífica (reagente de fase aguda). Confirmação por **teste genético para HFE** (C282Y/H63D); biópsia com quantificação de ferro reservada para casos duvidosos ou avaliação de fibrose.
- **Hepatite alcoólica:** clínica + AST/ALT >2 + história etílica compatível; calcular **Maddrey** para definir gravidade e indicação de corticoide.
- **Budd-Chiari:** USG com doppler de veias hepáticas (primeira linha, mostra ausência de fluxo ou fluxo invertido); paracentese confirma **GASA ≥1,1 com proteína total elevada** (>2,5 g/dL), padrão que a distingue da cirrose. Investigar trombofilia/doença mieloproliferativa (JAK2) como causa de base.

## 🚨 Gravidade / classificação

- **MELD (Model for End-Stage Liver Disease):** bilirrubina, creatinina, INR (± sódio) — orienta priorização em fila de transplante e prognóstico em qualquer hepatopatia descompensada, aguda ou crônica.
- **Critérios de King's College** (IHA): distinguem etiologia por paracetamol (pH <7,3 ou lactato elevado, ou a combinação de INR>6,5 + creatinina>3,4 + encefalopatia grau III/IV) de não-paracetamol (INR>6,5 isolado, ou 3 de 5 critérios: idade <10 ou >40 anos, etiologia desfavorável, icterícia>7 dias antes da encefalopatia, INR>3,5, bilirrubina>17,5) — define indicação de transplante de urgência.
- **Índice de Maddrey (discriminant function):** 4,6 × (TAP paciente − TAP controle) + bilirrubina total. **≥32 = hepatite alcoólica grave**, com indicação de corticoide na ausência de contraindicação (infecção ativa não controlada, sangramento gastrointestinal ativo, insuficiência renal significativa). Resposta reavaliada pelo **escore de Lille** no 7º dia — se desfavorável, suspender corticoide (sem benefício adicional e com risco de infecção).
- **FIB-4 e elastografia (fibroscan):** estadiam fibrose na MASLD e orientam necessidade de biópsia, intensidade do seguimento e rastreio de complicações da hipertensão portal.

## 💊 Tratamento

- **CBP:** **ácido ursodesoxicólico (UDCA)** 13-15 mg/kg/dia é primeira linha para todos os pacientes — reduz progressão e melhora sobrevida livre de transplante. Resposta incompleta (FA persistentemente elevada após 12 meses): associar **ácido obeticólico** (uso restrito em cirrose/hipertensão portal desde 2024) ou fibratos (bezafibrato). Sintomático: colestiramina para prurido.
- **CEP:** não há terapia farmacológica que altere a história natural. UDCA não reduz mortalidade e em doses altas pode ser deletério — não usar como tratamento modificador de doença. Tratar estenose dominante sintomática com dilatação endoscópica (CPRE terapêutica, não diagnóstica). Rastreio anual de colangiocarcinoma e vigilância colonoscópica mais precoce/frequente pela DII associada. Transplante hepático em doença avançada.
- **MASLD:** **perda de peso de 7-10%** é a intervenção com maior efeito histológico comprovado (resolve esteato-hepatite e pode reverter fibrose leve). No paciente diabético, **metformina** e/ou **pioglitazona**; **vitamina E** é opção no não diabético com MASH comprovada por biópsia. GLP-1 e resmetirom são adjuntos emergentes (ver Atualização).
- **IHA:** suporte em UTI, **N-acetilcisteína** (indicada mesmo em etiologia não-paracetamol, com benefício de sobrevida), manejo de edema cerebral/hipertensão intracraniana, correção de coagulopatia apenas se sangramento ativo ou procedimento invasivo (não corrigir profilaticamente — mascara o INR, que é o principal marcador prognóstico). Avaliação precoce e obrigatória para transplante hepático de urgência.
- **Hemocromatose:** **flebotomia semanal** (via de escolha) até ferritina <50 ng/mL, depois manutenção trimestral/semestral. Quelação de ferro (deferasirox) reservada para quem não tolera flebotomia ou tem sobrecarga secundária com anemia associada. Evitar vitamina C e frutos do mar crus.
- **Hepatite alcoólica:** abstinência alcoólica absoluta, suporte nutricional agressivo (a desnutrição calórico-proteica é regra e piora prognóstico), **corticoide (prednisolona) se Maddrey ≥32** sem contraindicação, com reavaliação pelo escore de Lille no dia 7.
- **Budd-Chiari:** anticoagulação sistêmica em todos os casos (tratar a trombose e investigar/tratar a causa de base, incluindo doença mieloproliferativa). Casos refratários: **TIPS** (shunt portossistêmico transjugular intra-hepático); trombólise dirigida por cateter em trombose muito recente; transplante hepático em falência hepática fulminante ou doença avançada irreversível.

## 🔀 Diagnóstico diferencial

O maior risco de confusão está dentro do próprio grupo das colangiopatias colestáticas crônicas — é justamente onde a UERJ mais testa.

| Achado | CBP | CEP | Colangite por IgG4 |
| --- | --- | --- | --- |
| Perfil típico | Mulher, 40-60a | Homem, 30-40a | Homem, >50a |
| Doença associada | Outras autoimunes (Sjögren) | Retocolite ulcerativa | Pancreatite autoimune |
| Sorologia-chave | AMA + (>90%) | Nenhuma específica | IgG4 sérico elevado |
| Imagem | Normal ou inespecífica | "Colar de contas" na colangioRM | Estenoses semelhantes à CEP |
| Tratamento | UDCA | Sem terapia modificadora; tratar estenose dominante | Corticoide (potencialmente reversível) |

Também vale diferenciar de causas mecânicas de colestase que costumam entrar como distrator: **coledocolitíase** (dor tipo cólica, USG com dilatação de vias biliares e cálculo visível, CPRE terapêutica) e **síndrome de Mirizzi** (compressão extrínseca do hepático comum por cálculo impactado no infundíbulo/cístico).

## 📋 Tabela de revisão

| Doença | Achado-chave | Exame confirmatório | 1ª linha de tratamento |
| --- | --- | --- | --- |
| Colangite biliar primária | Prurido + AMA+ | AMA + IgM | UDCA |
| Colangite esclerosante primária | Colestase + RCU | Colangiorressonância | Sem droga modificadora; CPRE se estenose dominante |
| MASLD | Esteatose + síndrome metabólica | FIB-4 → elastografia | Perda de peso 7-10% |
| Insuficiência hepática aguda | INR↑ + encefalopatia + sem doença prévia | Critérios clínico-laboratoriais + King's College | NAC + avaliação de transplante |
| Hemocromatose | Sat. transferrina >45% | Teste genético HFE | Flebotomia semanal |
| Hepatite alcoólica | AST/ALT >2 | Clínica + Maddrey | Corticoide se Maddrey ≥32 |
| Budd-Chiari | Dor + hepatomegalia + ascite proteica | Doppler de veias hepáticas | Anticoagulação ± TIPS |

## 📚 Referências essenciais

- AASLD Practice Guidance — Primary Biliary Cholangitis e Primary Sclerosing Cholangitis.
- AASLD Practice Guidance — Diagnosis and Management of Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD), 2023.
- AASLD Guideline — Acute Liver Failure (citada explicitamente no enunciado da UERJ 2025).
- ACG Clinical Guideline — Hereditary Hemochromatosis.
- AASLD/ACG Practice Guidance — Alcohol-Associated Liver Disease.
- EASL Clinical Practice Guidelines — Vascular Diseases of the Liver (síndrome de Budd-Chiari).
`;

export default content.trim();
