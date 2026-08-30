/**
 * Resumo — Gastroenterologia e Hepatologia · Hepatopatias não virais.
 *
 * Cobre as entidades do assunto no corpus: encefalopatia na hepatite
 * aguda com edema cerebral, insuficiência hepática aguda (critérios de
 * King's College) e doença hepática esteatótica associada à disfunção
 * metabólica (diagnóstico de exclusão e rastreio de fibrose) — o eixo
 * hepático propriamente dito do assunto, aqui ampliado com outras
 * hepatopatias não virais clinicamente relevantes que ainda não caíram em
 * prova (hepatite autoimune, doença de Wilson, hemocromatose, doença
 * hepática alcoólica, colangiopatias autoimunes — CBP e CEP — e lesão
 * hepática induzida por drogas).
 *
 * O corpus também classifica dentro deste mesmo assunto a questão sobre
 * gastrite atrófica metaplásica autoimune (ENARE 2026 Q39) — uma doença do
 * ESTÔMAGO, sem relação fisiopatológica com as hepatopatias acima. Como o
 * slug do assunto não pode ser desmembrado (precisa corresponder a um
 * Subtheme real do banco de questões), ela é tratada aqui como um bloco à
 * parte, claramente rotulado, e não deve ser lida como uma "hepatopatia".
 */
const content = `
## 🎯 Essencial

- Insuficiência hepática aguda (hepatite fulminante): a encefalopatia hepática com risco de **edema cerebral e hipertensão intracraniana** é a complicação mais temida — diferente da encefalopatia do cirrótico crônico, aqui o edema citotóxico é rápido e pode levar a herniação.
- **Critérios de King's College** definem indicação de transplante hepático de urgência na insuficiência hepática aguda, com critérios distintos por etiologia: para **paracetamol** (pH <7,3 ou lactato elevado, ou a tríade INR >6,5 + creatinina >3,4 + encefalopatia grau III/IV) e para **não-paracetamol** (INR >6,5 isolado, ou 3 de 5 critérios incluindo idade, etiologia, intervalo icterícia-encefalopatia >7 dias, INR >3,5 e bilirrubina >17,5).
- A etiologia da insuficiência hepática aguda vai muito além da hepatite viral: **paracetamol** é a causa mais comum em países desenvolvidos; outras causas importantes incluem **hepatite autoimune** de apresentação fulminante, **doença de Wilson** (forma fulminante quase sempre fatal sem transplante, com hemólise Coombs-negativa associada), **esteatose hepática aguda da gravidez/HELLP**, **hepatite isquêmica** ("fígado de choque", com transaminases muito elevadas que caem rapidamente após restaurar a perfusão) e **intoxicação por Amanita phalloides**.
- **Doença hepática esteatótica associada à disfunção metabólica (DHEM, antiga NAFLD/NASH)** é **diagnóstico de exclusão** — exige afastar consumo significativo de álcool, hepatites virais, hepatopatias autoimunes e outras causas de esteatose antes de firmar o diagnóstico, mesmo diante de síndrome metabólica evidente.
- Rastreio de fibrose na DHEM usa ferramentas **não invasivas de primeira linha** (**FIB-4**, elastografia hepática/FibroScan) antes de considerar biópsia — reservada a casos de dúvida diagnóstica ou estadiamento incerto.
- Outras hepatopatias não virais de alto rendimento que compõem o mesmo eixo diagnóstico da DHEM/autoimune: **hepatite autoimune** (hipergamaglobulinemia, ANA/anti-músculo liso no tipo 1, anti-LKM1 no tipo 2, resposta a corticoide), **doença de Wilson** (acúmulo de cobre, anéis de Kayser-Fleischer, ceruloplasmina baixa, manifestações neuropsiquiátricas em jovens), **hemocromatose hereditária** (mutação HFE, sobrecarga de ferro com ferritina e saturação de transferrina elevadas, "diabetes bronzeado") e **doença hepática associada ao álcool**, incluindo a hepatite alcoólica grave avaliada pelo escore de Maddrey.
- As **colangiopatias autoimunes** completam o espectro de hepatopatia crônica de causa não viral: **colangite biliar primária (CBP)**, predominantemente em mulheres de meia-idade, com prurido e fadiga precedendo a icterícia, colestase (fosfatase alcalina/GGT elevadas) e **anticorpo antimitocôndria (AMA)** positivo em >90% dos casos; e **colangite esclerosante primária (CEP)**, fortemente associada à **retocolite ulcerativa**, com estenoses biliares multifocais ("colar de contas" na colangiografia) e risco aumentado de colangiocarcinoma.
- **Lesão hepática induzida por drogas (DILI)** é diferencial obrigatório de toda hepatopatia aguda sem causa evidente — pode ser **dose-dependente e previsível** (paracetamol, o protótipo) ou **idiossincrática e imprevisível** (antibióticos como amoxicilina-clavulanato, anticonvulsivantes, fitoterápicos), exigindo sempre revisão minuciosa de medicações e suplementos recentes.

## 💎 Pearls

- Hiperamonemia grave (>150-200) na insuficiência hepática aguda é preditor de risco de edema cerebral — justifica monitorização e medidas de redução da pressão intracraniana independentemente do grau de encefalopatia.
- Os critérios de King's College para paracetamol são diferentes (e geralmente exigem menos critérios simultâneos) dos critérios para outras etiologias — não trocar os dois conjuntos.
- FIB-4 combina idade, AST, ALT e plaquetas — dados já disponíveis na maioria das consultas, o que o torna a ferramenta de rastreio inicial mais custo-efetiva para fibrose avançada na DHEM.
- A nomenclatura mudou recentemente: **NAFLD → MASLD** (doença hepática esteatótica associada à disfunção metabólica) e **NASH → MASH**, reforçando o vínculo com fatores de risco cardiometabólicos (obesidade, diabetes tipo 2, dislipidemia, hipertensão) no próprio critério diagnóstico.
- Relação AST/ALT >2 sugere doença hepática alcoólica; relação AST/ALT <1 (ALT predominante) é mais típica de DHEM — padrão útil, mas não substitui a exclusão sistemática de causas antes de firmar DHEM.
- Doença de Wilson deve entrar no diferencial de qualquer hepatopatia inexplicada em paciente **jovem** (<40 anos), principalmente se houver manifestações neuropsiquiátricas associadas (tremor, distonia, alteração de comportamento) — ceruloplasmina baixa e cobre urinário de 24h elevado apoiam o diagnóstico, e os anéis de Kayser-Fleischer (avaliação com lâmpada de fenda) são quase patognomônicos quando há acometimento neurológico.
- Hemocromatose hereditária costuma ser assintomática por décadas até a sobrecarga de ferro se manifestar como cirrose, diabetes, cardiomiopatia, artropatia e hiperpigmentação cutânea — rastrear com ferritina e saturação de transferrina em familiares de primeiro grau de caso confirmado.
- Prurido isolado, sem outra causa dermatológica, em mulher de meia-idade com fosfatase alcalina elevada é o gatilho clássico para pensar em CBP — o AMA positivo praticamente fecha o diagnóstico sem necessidade de biópsia na maioria dos casos.
- Todo diagnóstico novo de CEP deve motivar colonoscopia de rastreio para doença inflamatória intestinal (mesmo assintomática), e todo paciente com CEP estabelecida precisa de vigilância anual para colangiocarcinoma e para câncer colorretal (risco maior que na RCU isolada).
- Na DILI por paracetamol, a lesão é previsível e dose-dependente (acima de determinado limiar, sobretudo com uso concomitante de álcool ou jejum prolongado); já a DILI idiossincrática pode ocorrer com dose terapêutica usual, dias a semanas após o início da droga, e independe de dose cumulativa.
- Suspender imediatamente o agente suspeito é a medida mais importante em qualquer DILI — reexposição inadvertida pode causar recidiva mais grave e rápida que o episódio inicial.

## ⚠️ Pitfalls

- Tratar a encefalopatia da insuficiência hepática aguda com a mesma abordagem "gradual" usada no cirrótico crônico, sem vigilância ativa para edema cerebral e hipertensão intracraniana.
- Aplicar os critérios de King's College de paracetamol em caso de etiologia não-paracetamol (ou vice-versa) — os dois conjuntos não são intercambiáveis.
- Diagnosticar DHEM sem excluir consumo relevante de álcool e outras causas — é diagnóstico de exclusão, não "esteatose + obesidade = fechado".
- Pular direto para biópsia hepática em todo paciente com DHEM sem antes usar FIB-4/elastografia — sobrecarrega um exame invasivo que deveria ser reservado a casos duvidosos.
- Não pensar em doença de Wilson em jovem com hepatopatia de causa indefinida associada a sintomas neurológicos/psiquiátricos, atribuindo tudo a causa idiopática.
- Deixar de rastrear familiares de primeiro grau após diagnóstico de hemocromatose hereditária — é doença genética com penetrância variável, mas rastreável e tratável antes do dano de órgão.

## 📝 Como a banca cobra

**Hepatopatias não virais aparece em 5 questões (2,36% do corpus)** — 2 do EBSERH e 3 do ENARE, misturando insuficiência hepática aguda grave com doenças crônicas metabólicas/autoimunes mais indolentes.

- **Encefalopatia na hepatite aguda com edema cerebral** (EBSERH 2025 Q47) e **critérios de King's College** (EBSERH 2026 Q41) formam o par clássico de insuficiência hepática aguda — reconhecer a gravidade e saber quando indicar transplante de urgência.
- **DHEM** apareceu 2 vezes no ENARE: diagnóstico de exclusão (ENARE 2025 Q26) e rastreio de fibrose (ENARE 2026 Q14) — cobrindo tanto "como diagnosticar" quanto "como estadiar sem biópsia".
- A quinta questão do assunto, **gastrite atrófica metaplásica autoimune** (ENARE 2026 Q39), é tratada em bloco separado abaixo — veja a nota no início do resumo sobre por que ela está classificada aqui pelo corpus sem ser uma hepatopatia.

## 🧠 Conceito e fisiopatologia

Na insuficiência hepática aguda, a necrose maciça de hepatócitos libera amônia não metabolizada na circulação sistêmica (o fígado normalmente converte amônia em ureia), e a hiperamonemia aguda causa edema citotóxico de astrócitos no sistema nervoso central — diferente da encefalopatia hepática crônica, que é mais um distúrbio funcional/neurotransmissor, aqui há risco real e rápido de hipertensão intracraniana e herniação.

A DHEM decorre do acúmulo de triglicérides nos hepatócitos por desequilíbrio entre síntese/captação de ácidos graxos e sua oxidação/exportação, tipicamente ligado a resistência insulínica e síndrome metabólica — a evolução para esteato-hepatite (inflamação e fibrose) é o que determina o risco de cirrose, daí a importância de estadiar fibrose e não apenas constatar a esteatose.

A hepatite autoimune resulta de perda de tolerância imunológica contra antígenos hepatocitários, com infiltrado linfoplasmocitário na biópsia (hepatite de interface); a doença de Wilson decorre de mutação no gene ATP7B, que compromete a excreção biliar de cobre, levando ao seu acúmulo tóxico no fígado (e depois em núcleos da base e córnea); a hemocromatose hereditária (mutação HFE, tipicamente C282Y) aumenta a absorção intestinal de ferro, sobrecarregando progressivamente fígado, pâncreas, coração e hipófise. Todas compartilham o mesmo desafio diagnóstico da DHEM: são causas de hepatopatia crônica que precisam ser ativamente excluídas ou confirmadas por marcador específico, não apenas presumidas pelo quadro clínico.

## 🩺 Quadro clínico

- **Insuficiência hepática aguda:** icterícia de instalação rápida, coagulopatia, encefalopatia progressiva (confusão, sonolência, evoluindo a coma), podendo haver hipoglicemia e sinais de edema cerebral (hipertensão, bradicardia, papiledema) nos casos mais graves.
- **DHEM:** geralmente assintomática, achado incidental de esteatose em exame de imagem ou transaminases levemente elevadas em paciente com obesidade/síndrome metabólica; hepatomegalia discreta ao exame.
- **Hepatite autoimune:** pode variar de quadro insidioso (fadiga, artralgia, icterícia leve) a hepatite aguda grave; frequentemente em mulheres jovens, associada a outras doenças autoimunes (tireoidite, doença celíaca).
- **Doença de Wilson:** manifestações hepáticas (de hepatite assintomática a insuficiência hepática fulminante com hemólise) e/ou neuropsiquiátricas (tremor, disartria, distonia, mudança de comportamento/desempenho escolar) em paciente jovem.
- **Hemocromatose:** fadiga inespecífica por anos, evoluindo para a tríade clássica tardia de cirrose, diabetes mellitus e hiperpigmentação cutânea ("diabetes bronzeado"), além de artropatia (2ª e 3ª metacarpofalangeanas) e disfunção erétil/hipogonadismo.
- **CBP:** prurido (frequentemente o sintoma inicial, pior à noite) e fadiga, precedendo em anos a icterícia; xantelasmas e xantomas por hipercolesterolemia acompanham a colestase crônica.
- **CEP:** icterícia flutuante, colangites de repetição (febre, dor em hipocôndrio direito), prurido; predomina em homens jovens com retocolite ulcerativa de base.
- **DILI:** espectro amplo, de elevação assintomática de transaminases a hepatite aguda franca (icterícia, mal-estar, náusea) ou padrão colestático (prurido, fosfatase alcalina elevada), conforme o mecanismo e a droga envolvida.

## 🏷️ Bloco à parte

**Fora do eixo hepático (classificado neste assunto pelo corpus): gastrite atrófica autoimune.** A entidade abaixo é uma doença do **estômago**, não do fígado — está aqui apenas porque o banco de questões a classifica dentro do assunto "Hepatopatias não virais". Não há relação fisiopatológica com o eixo hepático acima; trate-a como um tópico independente.

**Gastrite atrófica metaplásica autoimune** (antiga gastrite tipo A): destruição autoimune de células parietais do corpo gástrico, com anticorpos anti-célula parietal e anti-fator intrínseco, levando a **acloridria, anemia perniciosa (deficiência de B12)** e risco aumentado de **adenocarcinoma gástrico e tumor carcinoide tipo 1**. Classicamente poupa o antro (mantém células G produtoras de gastrina), por isso a gastrina sérica fica elevada (hipergastrinemia reativa à acloridria) — achado que pode ser confundido com síndrome de Zollinger-Ellison sem o contexto correto. A deficiência de B12 pode se manifestar antes por sintomas neurológicos (parestesias, degeneração combinada subaguda de medula) do que pela anemia macrocítica clássica. Difere da gastrite associada a H. pylori (antiga tipo B), que é predominantemente antral e não autoimune. O tumor carcinoide tipo 1 (associado à hipergastrinemia crônica) costuma ser múltiplo, pequeno e de baixo potencial de malignidade, ao contrário do carcinoide tipo 3 (esporádico, não associado a hipergastrinemia, mais agressivo) — vigilância endoscópica periódica é indicada pelo risco oncológico combinado (adenocarcinoma + carcinoide).

## 🔎 Diagnóstico

- **Insuficiência hepática aguda:** INR, bilirrubina, amônia, avaliação neurológica seriada para grau de encefalopatia; aplicar critérios de King's College conforme etiologia para definir indicação de transplante; investigar etiologia ampla (paracetamol, sorologias virais, autoanticorpos, ceruloplasmina/cobre urinário se jovem, teste de gravidez).
- **DHEM:** exclusão de álcool relevante, hepatites virais, hepatopatia autoimune e outras causas; imagem (ultrassom) mostra esteatose; FIB-4/elastografia para estadiar fibrose; biópsia reservada a casos duvidosos.
- **Hepatite autoimune:** autoanticorpos (ANA, anti-músculo liso, anti-LKM1), hipergamaglobulinemia (IgG elevada), biópsia com hepatite de interface.
- **Doença de Wilson:** ceruloplasmina sérica baixa, cobre urinário de 24h elevado, anéis de Kayser-Fleischer à lâmpada de fenda, teste genético (ATP7B) confirmatório em casos duvidosos.
- **Hemocromatose:** ferritina e saturação de transferrina elevadas como rastreio; teste genético HFE confirma; biópsia hepática (índice de ferro hepático) em casos selecionados.
- **CBP:** fosfatase alcalina e GGT elevadas com AMA positivo (título ≥1:40) já são suficientes para o diagnóstico na maioria dos casos, dispensando biópsia; biópsia reservada a AMA negativo ou dúvida diagnóstica.
- **CEP:** colangiorressonância magnética mostrando estenoses e dilatações multifocais das vias biliares ("colar de contas"); ANCA-p pode estar positivo, mas não é específico; biópsia hepática raramente necessária.
- **DILI:** diagnóstico de exclusão e temporal — relação cronológica com início/suspensão da droga, exclusão de outras causas, escores como RUCAM auxiliam na probabilidade causal.
- **Gastrite atrófica autoimune (fora do eixo hepático):** anticorpo anti-célula parietal, anticorpo anti-fator intrínseco, gastrina sérica elevada, B12 baixa, endoscopia com biópsia mostrando atrofia do corpo/fundo poupando o antro.

## 💊 Tratamento

- **Insuficiência hepática aguda com critérios de King's College positivos:** encaminhamento urgente para transplante hepático; suporte intensivo (manejo de hipertensão intracraniana, correção de coagulopatia se sangramento); N-acetilcisteína em toda insuficiência hepática aguda por paracetamol (e considerada mesmo em outras etiologias por potencial benefício em fases iniciais).
- **DHEM:** perda de peso e controle dos componentes da síndrome metabólica como base; terapias farmacológicas específicas conforme diretrizes atuais em esteato-hepatite com fibrose significativa.
- **Hepatite autoimune:** corticoide (prednisona), com ou sem azatioprina poupadora de corticoide, para indução e manutenção da remissão.
- **Doença de Wilson:** quelantes de cobre (D-penicilamina, trientina) ou zinco (bloqueia absorção intestinal de cobre); transplante hepático na forma fulminante.
- **Hemocromatose:** flebotomias terapêuticas periódicas até normalização da ferritina, depois flebotomias de manutenção.
- **CBP:** ácido ursodesoxicólico como primeira linha (reduz progressão e melhora sobrevida livre de transplante); ácido obeticólico ou fibratos em resposta subótima.
- **CEP:** sem terapia farmacológica com benefício comprovado sobre a progressão; manejo endoscópico de estenoses dominantes, vigilância oncológica e transplante hepático na doença avançada.
- **DILI:** suspensão imediata do agente causador é a medida mais importante; N-acetilcisteína específica para DILI por paracetamol; suporte e monitorização até resolução na maioria dos casos idiossincráticos.
- **Gastrite autoimune (fora do eixo hepático):** reposição de vitamina B12 (parenteral, geralmente vitalícia), vigilância endoscópica periódica pelo risco oncológico.

## 📚 Referências essenciais

- AASLD Guidelines — Acute Liver Failure Management.
- AASLD Practice Guidance — Diagnosis and Management of NAFLD/MASLD.
- EASL Clinical Practice Guidelines — the diagnosis and management of patients with primary biliary cholangitis e primary sclerosing cholangitis.
- Diretrizes de sociedades de gastroenterologia sobre gastrite atrófica autoimune e vigilância de neoplasia gástrica.
`;

export default content.trim();
