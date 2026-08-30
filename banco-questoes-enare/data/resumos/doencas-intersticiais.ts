/**
 * Resumo — Pneumologia · Doenças intersticiais.
 *
 * Cobre as entidades do assunto no corpus: sarcoidose (achados
 * histopatológicos característicos) e o diagnóstico diferencial entre
 * sarcoidose e linfoma em linfadenopatia hilar/mediastinal, com biópsia
 * guiada por EBUS. Também traz, como extrapolação de alto rendimento ainda
 * não cobrada nas provas reais, a classificação geral das doenças
 * pulmonares intersticiais (fibrose pulmonar idiopática, pneumonite de
 * hipersensibilidade, ILD associada a doença do tecido conjuntivo, padrão
 * NSIP, síndrome antissintetase, pneumoconioses), o padrão UIP em TC de
 * alta resolução, o fenótipo de fibrose pulmonar progressiva e os
 * antifibróticos, além de outras apresentações extrapulmonares da
 * sarcoidose.
 */
const content = `
## 🎯 Essencial

- **Sarcoidose: granuloma não caseoso** é o achado histopatológico central — agregados de células epitelioides e células gigantes multinucleadas, sem necrose caseosa (o que a diferencia da tuberculose).
- **Linfadenopatia hilar bilateral simétrica** é o achado radiológico mais característico da sarcoidose, frequentemente associado a infiltrado intersticial pulmonar (estágios radiológicos de Scadding).
- **Diagnóstico diferencial obrigatório de linfadenopatia hilar/mediastinal:** sarcoidose vs. linfoma vs. tuberculose vs. metástase — a distinção definitiva exige **biópsia**, não apenas imagem.
- **EBUS-TBNA (biópsia guiada por ultrassom endobrônquico)** é o método de escolha para amostrar linfonodos mediastinais/hilares com baixo risco, permitindo diferenciar histologicamente granuloma (sarcoidose) de infiltração linfomatosa (linfoma) ou necrose caseosa (TB).
- **Sarcoidose é diagnóstico de exclusão** — histologia compatível (granuloma não caseoso) + quadro clínico-radiológico compatível + exclusão de outras causas de granuloma (infecção, corpo estranho, berílio).
- **Enzima conversora de angiotensina (ECA) sérica** pode estar elevada na sarcoidose ativa, mas tem baixa sensibilidade e especificidade — não confirma nem exclui o diagnóstico isoladamente.
- **As doenças pulmonares intersticiais (DPI) formam um grupo amplo**, não só sarcoidose: fibrose pulmonar idiopática (FPI), pneumonite de hipersensibilidade, DPI associada a doença do tecido conjuntivo (artrite reumatoide, esclerose sistêmica), pneumoconioses e DPI induzida por drogas (amiodarona, metotrexato, nitrofurantoína) são os principais diferenciais a considerar diante de infiltrado intersticial crônico.
- **Padrão UIP (usual interstitial pneumonia) na TC de alta resolução** — faveolamento (honeycombing) de predomínio basal e subpleural, bronquiectasias de tração, sem vidro fosco extenso — é característico (mas não exclusivo) de fibrose pulmonar idiopática; quando típico, dispensa biópsia pulmonar cirúrgica para o diagnóstico.
- **Padrão restritivo na espirometria/prova de função pulmonar** (CVF e capacidade pulmonar total reduzidas, relação VEF1/CVF normal ou aumentada) é a assinatura funcional das DPI em geral, diferente do padrão obstrutivo — a difusão de monóxido de carbono (DLCO) reduzida é achado precoce e sensível, muitas vezes anormal antes mesmo da queda de volumes.

## 💎 Pearls

- **Linfoma no mediastino tende a apresentar linfonodomegalia mais assimétrica/volumosa e sintomas B** (febre, sudorese noturna, perda ponderal) — dado clínico que ajuda a levantar a suspeita antes mesmo da biópsia.
- **Necrose caseosa no granuloma aponta para tuberculose**, não sarcoidose — granuloma sarcoídico é classicamente não caseoso ("granuloma nu", com pouca ou nenhuma necrose central).
- **Hipercalcemia/hipercalciúria** pode ocorrer na sarcoidose por produção extrarrenal de calcitriol pelos macrófagos do granuloma — achado laboratorial de apoio.
- **Estágio radiológico de Scadding** vai de 0 (sem alteração) a IV (fibrose), e o estágio I (linfadenopatia hilar isolada, sem infiltrado parenquimatoso) tem a maior taxa de remissão espontânea.
- **Envolvimento extrapulmonar da sarcoidose** (cutâneo, ocular, cardíaco, neurológico) reforça o diagnóstico quando presente, mas sua ausência não o exclui.
- **Síndrome de Löfgren** (eritema nodoso + adenopatia hilar bilateral + poliartralgia, geralmente com febre) é uma forma aguda de sarcoidose de excelente prognóstico, com remissão espontânea na maioria dos casos — dispensa biópsia quando o quadro é típico.
- **Síndrome de Heerfordt** (febre uveoparotídea: uveíte + parotidite + febre ± paralisia facial) é outra apresentação aguda característica de sarcoidose.
- **Antifibróticos (pirfenidona, nintedanibe)** reduzem a velocidade de declínio da função pulmonar na fibrose pulmonar idiopática, mas não revertem a fibrose já estabelecida — o objetivo é frear a progressão, não curar.
- **Síndrome antissintetase** (anti-Jo1 e outros anticorpos antissintetase) associa ILD a miosite, "mãos de mecânico", Raynaud e artrite — deve ser lembrada em ILD com sorologia positiva para doença do tecido conjuntivo, mesmo sem diagnóstico reumatológico prévio estabelecido.
- **Pneumoconioses têm padrão radiológico e ocupacional característico:** silicose (predomínio em lobos superiores, nódulos calcificados, calcificação "em casca de ovo" nos linfonodos hilares, exposição a sílica/mineração) e asbestose (predomínio em bases, placas pleurais calcificadas, exposição a amianto) — a história ocupacional detalhada é indispensável e frequentemente negligenciada.
- **Fenótipo de fibrose pulmonar progressiva (PPF)** — piora funcional/radiológica progressiva mesmo em DPI não-FPI (ex.: CTD-ILD, pneumonite de hipersensibilidade fibrótica) — também se beneficia de antifibrótico (nintedanibe), ampliando essa classe além da FPI clássica.
- **Padrão NSIP (pneumonia intersticial não específica)**, com vidro fosco predominante e pouco/nenhum faveolamento, é o padrão mais comum de ILD associada a doença do tecido conjuntivo (esclerose sistêmica, polimiosite/dermatomiosite) — geralmente tem melhor resposta a imunossupressão que o padrão UIP.

## ⚠️ Pitfalls

- **Tratar linfadenopatia hilar bilateral como sarcoidose sem biópsia**, especialmente diante de sintomas B ou apresentação atípica — risco de perder um linfoma que precisa de tratamento oncológico urgente.
- **Confundir granuloma caseoso (TB) com granuloma não caseoso (sarcoidose)** na leitura do laudo histopatológico — são achados discriminadores centrais entre os dois diagnósticos.
- **Basear diagnóstico de sarcoidose só na ECA sérica elevada** — marcador pouco sensível e pouco específico, não substitui a histologia.
- **Escolher biópsia cirúrgica (mediastinoscopia) como primeira linha** quando o EBUS-TBNA, menos invasivo, já é suficiente para o diagnóstico na maioria dos casos.
- **Iniciar corticoide empírico para "sarcoidose" antes de excluir infecção ativa (TB) e neoplasia** — tratar infecção com imunossupressor pode ser catastrófico.
- **Pedir biópsia pulmonar cirúrgica de rotina em todo paciente com suspeita de FPI** — se a TC de alta resolução mostra padrão UIP típico, o diagnóstico pode ser fechado sem biópsia, evitando um procedimento de risco elevado nessa população.
- **Prescrever corticoide isolado como tratamento de fibrose pulmonar idiopática** — ao contrário de outras DPI inflamatórias, a FPI não responde a imunossupressão; o tratamento correto é antifibrótico.
- **Rotular toda DPI com predomínio basal/subpleural como FPI sem investigar exposição ocupacional ou doença do tecido conjuntivo** — asbestose e CTD-ILD podem mimetizar o padrão UIP e mudam completamente a abordagem terapêutica (afastamento da exposição / imunossupressão versus antifibrótico isolado).

## 📝 Como a banca cobra

**Doenças intersticiais aparecem em 2 questões (0,94% do corpus)**, ambas do ENARE, girando em torno do mesmo eixo: reconhecer sarcoidose e diferenciá-la de outras causas de linfadenopatia.

- **ENARE 2025 Q74** cobrou os **achados histopatológicos da sarcoidose** — o ponto central é identificar o granuloma não caseoso como marca da doença.
- **ENARE 2026 Q25**, de dificuldade mais alta, testou o **diferencial entre sarcoidose e linfoma** em linfadenopatia hilar/mediastinal, com **biópsia guiada por EBUS** como ferramenta diagnóstica central — exige raciocínio de investigação, não só reconhecimento de padrão.

## 🧠 Conceito e fisiopatologia

A sarcoidose é uma doença granulomatosa multissistêmica de causa não totalmente esclarecida, provavelmente uma resposta imune exagerada (mediada por linfócitos T CD4+ e macrófagos) a um antígeno não identificado em indivíduos geneticamente predispostos. O granuloma não caseoso resulta do acúmulo organizado de macrófagos ativados (que se diferenciam em células epitelioides e se fundem em células gigantes multinucleadas) tentando conter esse estímulo antigênico, sem a necrose central característica de granulomas infecciosos como o da tuberculose.

A linfadenopatia hilar/mediastinal que caracteriza a sarcoidose pulmonar reflete o acúmulo desses granulomas nos linfonodos regionais, e é justamente essa apresentação radiológica que gera o principal desafio de diagnóstico diferencial: outras condições infiltrativas dos linfonodos torácicos — linfoma (proliferação clonal linfoide maligna), tuberculose (granuloma caseoso) e metástase — podem produzir imagem semelhante. Como a distinção depende inteiramente da arquitetura celular vista à histologia, a biópsia (idealmente minimamente invasiva, via EBUS-TBNA) é indispensável antes de qualquer conduta terapêutica.

Em contraste com a sarcoidose (doença inflamatória granulomatosa potencialmente reversível), a **fibrose pulmonar idiopática** representa um processo de cicatrização aberrante do epitélio alveolar, em que ciclos repetidos de lesão e reparo anômalo levam a depósito progressivo e irreversível de colágeno, sem o componente inflamatório central que caracteriza outras DPI — essa diferença fisiopatológica é exatamente por que a FPI não responde a corticoide/imunossupressor e exige uma classe terapêutica própria (antifibróticos).

## 🩺 Quadro clínico

- **Sarcoidose pulmonar:** tosse seca crônica, dispneia aos esforços, fadiga, às vezes achado incidental assintomático em radiografia de rotina (linfadenopatia hilar isolada).
- **Sarcoidose extrapulmonar:** lesões cutâneas (eritema nodoso, lúpus pérnio), uveíte, parotidite, BAV/arritmia (sarcoidose cardíaca), neurossarcoidose (paralisia facial, meningite asséptica) — ver resumo de doenças do pericárdio/miocárdio para o acometimento cardíaco.
- **DPI em geral (FPI, CTD-ILD, pneumonite de hipersensibilidade):** dispneia progressiva aos esforços, tosse seca persistente, estertores em velcro nas bases à ausculta, baqueteamento digital em fases avançadas (mais típico de FPI que de outras DPI).
- **Síndrome antissintetase:** miosite proximal, "mãos de mecânico" (hiperqueratose fissurada em face lateral dos dedos), Raynaud, artrite, associados à ILD — sinal de alerta para investigar doença do tecido conjuntivo subjacente.

## 🔎 Diagnóstico

- **Sarcoidose:** radiografia/TC de tórax com linfadenopatia hilar bilateral simétrica ± infiltrado intersticial; biópsia (preferencialmente por EBUS-TBNA) mostrando granuloma não caseoso; exclusão de infecção (TB, fungos) e neoplasia; ECA sérica e cálcio como exames de apoio, não confirmatórios.
- **Linfoma (diferencial):** linfadenopatia frequentemente assimétrica/volumosa, sintomas B, biópsia mostrando infiltração por células linfoides neoplásicas (com imuno-histoquímica definindo o subtipo).
- **Tuberculose (diferencial):** granuloma caseoso na histologia, pesquisa de BAAR/cultura/Gene-Xpert positivos.
- **Fibrose pulmonar idiopática:** TC de alta resolução com padrão UIP típico dispensa biópsia; padrão atípico/indeterminado exige biópsia pulmonar cirúrgica ou criobiópsia e discussão multidisciplinar (pneumologista, radiologista, patologista).
- **Pneumonite de hipersensibilidade (diferencial):** história de exposição a antígeno orgânico (aves, mofo), padrão de vidro fosco com áreas de aprisionamento aéreo em mosaico na TC, lavado broncoalveolar com linfocitose.
- **CTD-ILD (diferencial):** sorologia direcionada (FAN, anti-Scl70, anti-Jo1/antissintetase, fator reumatoide, anti-CCP) diante de padrão NSIP ou de sinais clínicos extrapulmonares de doença do tecido conjuntivo.
- **Pneumoconioses (diferencial):** história ocupacional dirigida (mineração, jateamento de areia para silicose; construção civil, isolamento térmico para asbestose) associada ao padrão radiológico característico.
- **Prova de função pulmonar completa:** espirometria com padrão restritivo, volumes pulmonares (CPT reduzida) e DLCO reduzida — a DLCO é o parâmetro mais sensível para acompanhar progressão e resposta ao tratamento.

## 💊 Tratamento

- **Sarcoidose assintomática ou estágio I:** observação, já que remissão espontânea é frequente.
- **Sarcoidose sintomática ou com disfunção de órgão significativa:** corticoide sistêmico como primeira linha; imunossupressores poupadores de corticoide (metotrexato, azatioprina) em casos refratários ou dependentes de dose alta.
- **Linfoma confirmado:** encaminhar para estadiamento e tratamento oncológico específico conforme o subtipo histológico.
- **Fibrose pulmonar idiopática:** antifibrótico (pirfenidona ou nintedanibe) para retardar progressão; oxigenoterapia se hipoxemia; avaliação para transplante pulmonar em doença avançada/progressiva.
- **Fenótipo de fibrose pulmonar progressiva não-FPI:** nintedanibe também indicado, mantendo/associando imunossupressão dirigida à doença de base quando inflamatória (ex.: CTD-ILD).
- **CTD-ILD com componente inflamatório predominante (padrão NSIP):** imunossupressão (micofenolato de mofetila, ciclofosfamida em casos graves, rituximabe em refratários) costuma ser a primeira linha, reservando antifibrótico para o fenótipo progressivo.
- **Pneumonite de hipersensibilidade:** afastamento do antígeno causador é a medida mais importante; corticoide em fases inflamatórias agudas/subagudas.
- **Pneumoconioses:** afastamento da exposição ocupacional, suporte clínico e rastreio de complicações (TB associada à silicose, mesotelioma/câncer de pulmão associados à asbestose) — não há tratamento específico que reverta a fibrose já estabelecida.

## 📚 Referências essenciais

- ATS/ERS/WASOG Statement on Sarcoidosis.
- ATS/ERS/JRS/ALAT Clinical Practice Guideline — Idiopathic Pulmonary Fibrosis.
- ATS/ERS/JRS/ALAT Clinical Practice Guideline — Progressive Pulmonary Fibrosis.
- Diretrizes da Sociedade Brasileira de Pneumologia e Tisiologia sobre Doenças Pulmonares Intersticiais.
`;

export default content.trim();
