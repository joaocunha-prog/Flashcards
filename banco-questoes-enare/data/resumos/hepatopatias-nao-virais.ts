/**
 * Resumo — Gastroenterologia e Hepatologia · Hepatopatias não virais.
 *
 * Reorganizado por entidade clínica (cada hepatopatia tem sua própria seção
 * com quando suspeitar, diagnóstico, tratamento, pearl e pitfall juntos) —
 * antes esse conteúdo estava picado entre seções genéricas de tipo,
 * misturando insuficiência hepática aguda, DHEM, Wilson e hemocromatose no
 * mesmo bloco de "Diagnóstico" ou "Tratamento".
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
 * Subtheme real do banco de questões), ela é tratada aqui como sua própria
 * entidade, claramente rotulada como fora do eixo hepático, e não deve ser
 * lida como uma "hepatopatia".
 */
const content = `
## 🎯 Essencial

- Insuficiência hepática aguda (hepatite fulminante): a encefalopatia hepática com risco de **edema cerebral e hipertensão intracraniana** é a complicação mais temida — diferente da encefalopatia do cirrótico crônico, aqui o edema citotóxico é rápido e pode levar a herniação.
- **Critérios de King's College** definem indicação de transplante hepático de urgência, com critérios distintos por etiologia (paracetamol vs. não-paracetamol) — não intercambiáveis.
- **Doença hepática esteatótica associada à disfunção metabólica (DHEM, antiga NAFLD/NASH)** é **diagnóstico de exclusão** — exige afastar consumo significativo de álcool, hepatites virais, hepatopatias autoimunes e outras causas de esteatose antes de firmar o diagnóstico.
- Diante de hepatopatia crônica de causa indefinida, o eixo diagnóstico é sempre o mesmo: excluir viral e álcool, depois testar o marcador específico de cada causa autoimune/metabólica/genética (autoanticorpos, ceruloplasmina, ferritina, AMA) — nenhuma delas é presumida só pelo quadro clínico.

## 📝 Como a banca cobra

**Hepatopatias não virais aparece em 5 questões (2,36% do corpus)** — 2 do EBSERH e 3 do ENARE, misturando insuficiência hepática aguda grave com doenças crônicas metabólicas/autoimunes mais indolentes.

- **Encefalopatia na hepatite aguda com edema cerebral** (EBSERH 2025 Q47) e **critérios de King's College** (EBSERH 2026 Q41) formam o par clássico de insuficiência hepática aguda — reconhecer a gravidade e saber quando indicar transplante de urgência.
- **DHEM** apareceu 2 vezes no ENARE: diagnóstico de exclusão (ENARE 2025 Q26) e rastreio de fibrose (ENARE 2026 Q14) — cobrindo tanto "como diagnosticar" quanto "como estadiar sem biópsia".
- A quinta questão do assunto, **gastrite atrófica metaplásica autoimune** (ENARE 2026 Q39), é tratada em sua própria seção abaixo — veja a nota no início do resumo sobre por que ela está classificada aqui pelo corpus sem ser uma hepatopatia.
- **Hepatite autoimune, Wilson, hemocromatose, CBP/CEP e DILI ainda não foram cobradas isoladamente** — completam o mesmo eixo diagnóstico de hepatopatia crônica não viral e são candidatas naturais de alto rendimento.

## 🧠 Conceito e fisiopatologia

Na insuficiência hepática aguda, a necrose maciça de hepatócitos libera amônia não metabolizada na circulação sistêmica, e a hiperamonemia aguda causa edema citotóxico de astrócitos — diferente da encefalopatia hepática crônica (mais funcional/neurotransmissor), aqui há risco real e rápido de herniação. A DHEM decorre do acúmulo de triglicérides nos hepatócitos por desequilíbrio entre síntese/captação de ácidos graxos e sua oxidação/exportação, tipicamente ligado a resistência insulínica. A hepatite autoimune resulta de perda de tolerância imunológica contra antígenos hepatocitários; a doença de Wilson decorre de mutação no gene ATP7B (excreção biliar de cobre comprometida); a hemocromatose hereditária (mutação HFE, tipicamente C282Y) aumenta a absorção intestinal de ferro.

## 🔹 Insuficiência hepática aguda e edema cerebral

- **Quando suspeitar:** icterícia de instalação rápida, coagulopatia, encefalopatia progressiva (confusão, sonolência, evoluindo a coma), podendo haver hipoglicemia e sinais de edema cerebral (hipertensão, bradicardia, papiledema) nos casos mais graves.
- **Mecanismo do edema:** hiperamonemia grave (>150-200) é preditor de risco de edema cerebral — justifica monitorização e medidas de redução da pressão intracraniana independentemente do grau de encefalopatia; o mecanismo é citotóxico e rápido, diferente do distúrbio funcional/neurotransmissor da encefalopatia do cirrótico crônico.
- **Etiologia ampla:** **paracetamol** é a causa mais comum em países desenvolvidos; outras causas importantes incluem hepatite autoimune de apresentação fulminante, **doença de Wilson** (forma fulminante quase sempre fatal sem transplante, com hemólise Coombs-negativa associada), esteatose hepática aguda da gravidez/HELLP, hepatite isquêmica ("fígado de choque", transaminases muito elevadas que caem rapidamente após restaurar a perfusão) e intoxicação por *Amanita phalloides*.
- **Diagnóstico:** INR, bilirrubina, amônia, avaliação neurológica seriada para grau de encefalopatia; investigar etiologia ampla (paracetamol, sorologias virais, autoanticorpos, ceruloplasmina/cobre urinário se jovem, teste de gravidez).
- **Tratamento:** suporte intensivo (manejo de hipertensão intracraniana, correção de coagulopatia se sangramento); N-acetilcisteína em toda insuficiência hepática aguda por paracetamol (e considerada mesmo em outras etiologias por potencial benefício em fases iniciais).
- ⚠️ **Pitfall:** tratar a encefalopatia da insuficiência hepática aguda com a mesma abordagem "gradual" usada no cirrótico crônico, sem vigilância ativa para edema cerebral.
- 📝 **Como caiu:** EBSERH 2025 Q47.

## 🔹 Critérios de King's College e indicação de transplante de urgência

- **Conduta:** definem indicação de transplante hepático de urgência, com critérios **distintos por etiologia** — para **paracetamol**: pH <7,3 ou lactato elevado, ou a tríade INR >6,5 + creatinina >3,4 + encefalopatia grau III/IV; para **não-paracetamol**: INR >6,5 isolado, ou 3 de 5 critérios (idade, etiologia, intervalo icterícia-encefalopatia >7 dias, INR >3,5, bilirrubina >17,5).
- **Tratamento se critérios positivos:** encaminhamento urgente para transplante hepático.
- ⚠️ **Pitfall:** aplicar os critérios de paracetamol em etiologia não-paracetamol (ou vice-versa) — os dois conjuntos não são intercambiáveis, e o de paracetamol geralmente exige menos critérios simultâneos.
- 📝 **Como caiu:** EBSERH 2026 Q41.

## 🔹 Doença hepática esteatótica associada à disfunção metabólica (DHEM)

- **Quando suspeitar:** geralmente assintomática, achado incidental de esteatose em exame de imagem ou transaminases levemente elevadas em paciente com obesidade/síndrome metabólica; hepatomegalia discreta ao exame.
- **Diagnóstico de exclusão:** exige afastar consumo relevante de álcool, hepatites virais, hepatopatia autoimune e outras causas antes de firmar o diagnóstico, mesmo diante de síndrome metabólica evidente. **Relação AST/ALT >2** sugere doença hepática alcoólica; **AST/ALT <1** (ALT predominante) é mais típica de DHEM — padrão útil, mas não substitui a exclusão sistemática.
- **Rastreio de fibrose:** ferramentas **não invasivas de primeira linha** — **FIB-4** (combina idade, AST, ALT e plaquetas, já disponíveis na maioria das consultas) e elastografia hepática/FibroScan — antes de considerar biópsia, reservada a casos de dúvida diagnóstica ou estadiamento incerto.
- **Tratamento:** perda de peso e controle dos componentes da síndrome metabólica como base; terapias farmacológicas específicas conforme diretrizes atuais em esteato-hepatite com fibrose significativa.
- 💎 **Pearl:** a nomenclatura mudou recentemente — **NAFLD → MASLD** e **NASH → MASH**, reforçando o vínculo com fatores de risco cardiometabólicos (obesidade, diabetes tipo 2, dislipidemia, hipertensão) no próprio critério diagnóstico.
- ⚠️ **Pitfall:** pular direto para biópsia hepática sem antes usar FIB-4/elastografia — sobrecarrega um exame invasivo que deveria ser reservado a casos duvidosos.
- 📝 **Como caiu:** ENARE 2025 Q26 (diagnóstico de exclusão) · ENARE 2026 Q14 (rastreio de fibrose).

## 🔹 Hepatite autoimune

- **Quando suspeitar:** pode variar de quadro insidioso (fadiga, artralgia, icterícia leve) a hepatite aguda grave; frequentemente em mulheres jovens, associada a outras doenças autoimunes (tireoidite, doença celíaca).
- **Diagnóstico:** autoanticorpos (ANA, anti-músculo liso no tipo 1, anti-LKM1 no tipo 2), hipergamaglobulinemia (IgG elevada), biópsia com hepatite de interface (infiltrado linfoplasmocitário).
- **Tratamento:** corticoide (prednisona), com ou sem azatioprina poupadora de corticoide, para indução e manutenção da remissão.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Doença de Wilson

- **Quando suspeitar:** hepatopatia inexplicada em paciente **jovem** (<40 anos), principalmente com manifestações neuropsiquiátricas associadas (tremor, disartria, distonia, mudança de comportamento/desempenho escolar) — do espectro hepático (hepatite assintomática a insuficiência hepática fulminante com hemólise Coombs-negativa) ao neurológico.
- **Diagnóstico:** ceruloplasmina sérica baixa, cobre urinário de 24h elevado, **anéis de Kayser-Fleischer** à lâmpada de fenda (quase patognomônicos quando há acometimento neurológico), teste genético (ATP7B) confirmatório em casos duvidosos.
- **Tratamento:** quelantes de cobre (D-penicilamina, trientina) ou zinco (bloqueia absorção intestinal de cobre); transplante hepático na forma fulminante.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Hemocromatose hereditária

- **Quando suspeitar:** fadiga inespecífica por anos, evoluindo para a tríade clássica tardia de cirrose, diabetes mellitus e hiperpigmentação cutânea ("diabetes bronzeado"), além de artropatia (2ª e 3ª metacarpofalangeanas) e disfunção erétil/hipogonadismo — costuma ser assintomática por décadas até a sobrecarga de ferro se manifestar.
- **Diagnóstico:** ferritina e saturação de transferrina elevadas como rastreio; teste genético HFE confirma; biópsia hepática (índice de ferro hepático) em casos selecionados. Rastrear familiares de primeiro grau de caso confirmado.
- **Tratamento:** flebotomias terapêuticas periódicas até normalização da ferritina, depois flebotomias de manutenção.
- ⚠️ **Pitfall:** deixar de rastrear familiares de primeiro grau após diagnóstico — é doença genética com penetrância variável, mas rastreável e tratável antes do dano de órgão.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Colangite biliar primária (CBP)

- **Quando suspeitar:** **prurido isolado** (frequentemente o sintoma inicial, pior à noite) e fadiga, precedendo em anos a icterícia, predominantemente em mulheres de meia-idade; xantelasmas e xantomas por hipercolesterolemia acompanham a colestase crônica.
- **Diagnóstico:** fosfatase alcalina e GGT elevadas com **anticorpo antimitocôndria (AMA) positivo** (título ≥1:40, presente em >90% dos casos) já são suficientes para o diagnóstico na maioria dos casos, dispensando biópsia.
- **Tratamento:** **ácido ursodesoxicólico** como primeira linha (reduz progressão e melhora sobrevida livre de transplante); ácido obeticólico ou fibratos em resposta subótima.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Colangite esclerosante primária (CEP)

- **Quando suspeitar:** icterícia flutuante, colangites de repetição (febre, dor em hipocôndrio direito), prurido; predomina em **homens jovens** com **retocolite ulcerativa** de base — fortemente associada.
- **Diagnóstico:** colangiorressonância magnética com estenoses e dilatações multifocais das vias biliares ("colar de contas"); ANCA-p pode estar positivo, mas não é específico.
- **Tratamento:** sem terapia farmacológica com benefício comprovado sobre a progressão; manejo endoscópico de estenoses dominantes, vigilância oncológica e transplante hepático na doença avançada.
- 💎 **Pearl:** todo diagnóstico novo de CEP deve motivar colonoscopia de rastreio para doença inflamatória intestinal (mesmo assintomática), e todo paciente com CEP estabelecida precisa de vigilância anual para **colangiocarcinoma** e para câncer colorretal (risco maior que na RCU isolada).
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Lesão hepática induzida por drogas (DILI)

- **Quando suspeitar:** diferencial obrigatório de toda hepatopatia aguda sem causa evidente — espectro de elevação assintomática de transaminases a hepatite aguda franca ou padrão colestático.
- **Dois padrões:** **dose-dependente e previsível** (paracetamol, o protótipo — acima de determinado limiar, sobretudo com álcool concomitante ou jejum prolongado) ou **idiossincrática e imprevisível** (antibióticos como amoxicilina-clavulanato, anticonvulsivantes, fitoterápicos — pode ocorrer com dose terapêutica usual, dias a semanas após o início, independente de dose cumulativa).
- **Diagnóstico:** de exclusão e temporal — relação cronológica com início/suspensão da droga, exclusão de outras causas; escores como RUCAM auxiliam na probabilidade causal.
- **Tratamento:** **suspensão imediata do agente suspeito** é a medida mais importante — reexposição inadvertida pode causar recidiva mais grave e rápida que o episódio inicial; N-acetilcisteína específica para DILI por paracetamol.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Gastrite atrófica metaplásica autoimune (fora do eixo hepático)

*Doença do estômago, não do fígado — classificada neste assunto apenas porque o corpus a agrupa aqui; sem relação fisiopatológica com as entidades hepáticas acima.*

- **Mecanismo:** destruição autoimune de células parietais do corpo gástrico (antiga gastrite tipo A), com anticorpos anti-célula parietal e anti-fator intrínseco, levando a **acloridria**, **anemia perniciosa** (deficiência de B12) e risco aumentado de **adenocarcinoma gástrico** e **tumor carcinoide tipo 1**.
- **Achado que confunde:** classicamente poupa o antro (mantém células G produtoras de gastrina), por isso a gastrina sérica fica elevada (hipergastrinemia reativa à acloridria) — achado que pode ser confundido com síndrome de Zollinger-Ellison sem o contexto correto.
- **Manifestação neurológica precoce:** a deficiência de B12 pode se manifestar antes por sintomas neurológicos (parestesias, degeneração combinada subaguda de medula) do que pela anemia macrocítica clássica.
- 🔀 **Diferencial:** difere da gastrite associada a *H. pylori* (antiga tipo B), predominantemente antral e não autoimune. O tumor carcinoide tipo 1 (associado à hipergastrinemia crônica) costuma ser múltiplo, pequeno e de baixo potencial de malignidade, ao contrário do carcinoide tipo 3 (esporádico, não associado a hipergastrinemia, mais agressivo).
- **Diagnóstico:** anticorpo anti-célula parietal, anticorpo anti-fator intrínseco, gastrina sérica elevada, B12 baixa, endoscopia com biópsia mostrando atrofia do corpo/fundo poupando o antro.
- **Tratamento:** reposição de vitamina B12 (parenteral, geralmente vitalícia), vigilância endoscópica periódica pelo risco oncológico combinado (adenocarcinoma + carcinoide).
- 📝 **Como caiu:** ENARE 2026 Q39.

## 📚 Referências essenciais

- AASLD Guidelines — Acute Liver Failure Management.
- AASLD Practice Guidance — Diagnosis and Management of NAFLD/MASLD.
- EASL Clinical Practice Guidelines — the diagnosis and management of patients with primary biliary cholangitis e primary sclerosing cholangitis.
- Diretrizes de sociedades de gastroenterologia sobre gastrite atrófica autoimune e vigilância de neoplasia gástrica.
`;

export default content.trim();
