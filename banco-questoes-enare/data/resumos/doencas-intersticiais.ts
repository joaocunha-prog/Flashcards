/**
 * Resumo — Pneumologia · Doenças intersticiais.
 *
 * Reorganizado por entidade clínica (cada doença tem sua própria seção com
 * quadro clínico, diagnóstico, tratamento, pearl e pitfall juntos), em vez
 * de picado entre seções genéricas de tipo — o assunto reúne um grupo
 * heterogêneo de doenças pulmonares intersticiais, cada uma com
 * fisiopatologia e conduta próprias, não uma progressão de um único
 * espectro de doença.
 *
 * Cobre as entidades do assunto no corpus: sarcoidose (achados
 * histopatológicos característicos) e o diagnóstico diferencial entre
 * sarcoidose e linfoma em linfadenopatia hilar/mediastinal, com biópsia
 * guiada por EBUS. Inclui também extrapolações de alto rendimento (fibrose
 * pulmonar idiopática/padrão UIP, pneumonite de hipersensibilidade, ILD
 * associada a doença do tecido conjuntivo/síndrome antissintetase,
 * pneumoconioses) ainda não cobradas no corpus, mas plausíveis em provas
 * futuras.
 */
const content = `
## 🎯 Essencial

- **Diante de infiltrado intersticial crônico, o primeiro passo é classificar o padrão**: linfadenopatia hilar bilateral simétrica aponta para sarcoidose; padrão UIP (faveolamento basal/subpleural) aponta para fibrose pulmonar idiopática; vidro fosco com aprisionamento aéreo em mosaico aponta para pneumonite de hipersensibilidade; sorologia positiva para doença do tecido conjuntivo redireciona para CTD-ILD.
- **A distinção entre doenças granulomatosas (sarcoidose, TB) e fibrosantes (FPI, pneumoconioses) muda completamente a conduta:** as granulomatosas podem responder a imunossupressão; a fibrose já estabelecida na FPI não responde a corticoide e exige antifibrótico.
- **Padrão restritivo na espirometria** (CVF e CPT reduzidas, VEF1/CVF normal ou aumentada) é a assinatura funcional comum a todas as DPI — a **DLCO reduzida** é o achado funcional mais precoce e sensível, muitas vezes anormal antes da queda de volumes.
- **A biópsia (idealmente minimamente invasiva) é indispensável sempre que o padrão radiológico não for inequivocamente típico** de uma etiologia — decidir entre imunossupressão, afastamento de exposição ou antifibrótico sem esse dado é o erro mais grave do assunto.

## 📝 Como a banca cobra

**Doenças intersticiais aparecem em 2 questões (0,94% do corpus)**, ambas do ENARE, girando em torno do mesmo eixo: reconhecer sarcoidose e diferenciá-la de outras causas de linfadenopatia. Nenhuma questão do corpus até agora cobrou os outros diferenciais intersticiais (FPI, pneumonite de hipersensibilidade, CTD-ILD, pneumoconioses) — são as extrapolações de maior potencial de cobrança deste resumo.

- **ENARE 2025 Q74** cobrou os **achados histopatológicos da sarcoidose** — o ponto central é identificar o granuloma não caseoso como marca da doença.
- **ENARE 2026 Q25**, de dificuldade mais alta, testou o **diferencial entre sarcoidose e linfoma** em linfadenopatia hilar/mediastinal, com **biópsia guiada por EBUS** como ferramenta diagnóstica central — exige raciocínio de investigação, não só reconhecimento de padrão.

## 🧠 Conceito e fisiopatologia

As doenças pulmonares intersticiais compartilham a via final comum de acometer o interstício alveolar, mas por mecanismos radicalmente diferentes: a **sarcoidose** é inflamação granulomatosa (potencialmente reversível), a **fibrose pulmonar idiopática** é cicatrização aberrante irreversível sem componente inflamatório dominante, a **pneumonite de hipersensibilidade** é reação de hipersensibilidade a antígeno orgânico inalado (reversível se a exposição cessar precocemente), e as **pneumoconioses** são resposta fibrótica a partícula mineral inalada e retida permanentemente no parênquima. Reconhecer qual mecanismo está em jogo é o que orienta a escolha entre imunossupressão, afastamento de exposição ou antifibrótico — usar a ferramenta errada (ex.: corticoide isolado na FPI) não só não ajuda como expõe a efeitos adversos desnecessários.

## 🔹 Sarcoidose (pulmonar e diferencial com linfoma)

- **Achado histopatológico central:** **granuloma não caseoso** — agregados de células epitelioides e células gigantes multinucleadas, sem necrose caseosa (o que diferencia de tuberculose, que tem necrose caseosa central).
- **Quando suspeitar:** linfadenopatia hilar bilateral simétrica (achado radiológico mais característico), frequentemente associada a infiltrado intersticial pulmonar (estadiada pelos estágios radiológicos de Scadding, 0 a IV); tosse seca crônica, dispneia aos esforços, ou achado incidental assintomático em radiografia de rotina.
- **Diagnóstico diferencial obrigatório da linfadenopatia hilar/mediastinal:** sarcoidose vs. linfoma vs. tuberculose vs. metástase — a distinção definitiva exige **biópsia**, não apenas imagem. Linfoma tende a apresentar linfonodomegalia mais assimétrica/volumosa e sintomas B (febre, sudorese noturna, perda ponderal); necrose caseosa aponta para TB.
- **Método de escolha para biópsia: EBUS-TBNA** (biópsia guiada por ultrassom endobrônquico) — amostra linfonodos mediastinais/hilares com baixo risco, permitindo diferenciar histologicamente granuloma (sarcoidose) de infiltração linfomatosa (linfoma) ou necrose caseosa (TB), sem recorrer à mediastinoscopia cirúrgica na maioria dos casos.
- **Tratamento:** estágio I (linfadenopatia hilar isolada, sem infiltrado parenquimatoso) tem alta taxa de remissão espontânea — observação; doença sintomática ou com disfunção de órgão significativa recebe corticoide sistêmico como primeira linha, com imunossupressores poupadores de corticoide (metotrexato, azatioprina) em casos refratários.
- 💎 **Pearl:** **síndrome de Löfgren** (eritema nodoso + adenopatia hilar bilateral + poliartralgia, geralmente com febre) é forma aguda de sarcoidose de excelente prognóstico com remissão espontânea na maioria dos casos — dispensa biópsia quando o quadro é típico. **Síndrome de Heerfordt** (febre uveoparotídea: uveíte + parotidite + febre ± paralisia facial) é outra apresentação aguda característica.
- 💎 **Pearl:** hipercalcemia/hipercalciúria pode ocorrer por produção extrarrenal de calcitriol pelos macrófagos do granuloma; ECA sérica pode estar elevada na doença ativa, mas tem baixa sensibilidade/especificidade — apoio, não confirmação.
- ⚠️ **Pitfall:** tratar linfadenopatia hilar bilateral como sarcoidose sem biópsia, especialmente diante de sintomas B ou apresentação atípica — risco de perder um linfoma que precisa de tratamento oncológico urgente. Iniciar corticoide empírico para "sarcoidose" antes de excluir infecção ativa (TB) e neoplasia pode ser catastrófico.
- 📝 **Como caiu:** ENARE 2025 Q74 — achados histopatológicos; ENARE 2026 Q25 — diferencial com linfoma via EBUS.

## 🔹 Fibrose pulmonar idiopática

- **Quando suspeitar:** dispneia progressiva aos esforços, tosse seca persistente, estertores em velcro nas bases à ausculta, baqueteamento digital em fases avançadas — tipicamente em idosos, mais comum em homens com história de tabagismo.
- **Diagnóstico:** TC de alta resolução com **padrão UIP típico** (faveolamento/honeycombing de predomínio basal e subpleural, bronquiectasias de tração, sem vidro fosco extenso) — quando típico, **dispensa biópsia pulmonar cirúrgica**; padrão atípico/indeterminado exige biópsia (cirúrgica ou criobiópsia) e discussão multidisciplinar (pneumologista, radiologista, patologista).
- **Tratamento:** **antifibrótico** (pirfenidona ou nintedanibe) — reduz a velocidade de declínio funcional, mas não reverte a fibrose já estabelecida; oxigenoterapia se hipoxemia; avaliação para transplante pulmonar em doença avançada/progressiva.
- 💎 **Pearl:** o **fenótipo de fibrose pulmonar progressiva (PPF)** — piora funcional/radiológica progressiva mesmo em DPI não-FPI (ex.: CTD-ILD, pneumonite de hipersensibilidade fibrótica) — também se beneficia de nintedanibe, ampliando essa classe além da FPI clássica.
- ⚠️ **Pitfall:** pedir biópsia pulmonar cirúrgica de rotina em todo paciente com suspeita de FPI quando a TC já mostra padrão UIP típico — expõe a um procedimento de risco elevado desnecessariamente. Prescrever corticoide isolado como tratamento — ao contrário de outras DPI inflamatórias, a FPI não responde a imunossupressão.
- 📝 **Como caiu:** ainda não cobrado no corpus — diferencial fibrosante de alto rendimento.

## 🔹 Pneumonite de hipersensibilidade

- **Quando suspeitar:** história de exposição a antígeno orgânico (aves — "pulmão do criador de pombos", mofo/feno — "pulmão do fazendeiro", umidificadores) associada a dispneia e tosse, forma aguda (horas após exposição, com febre) ou crônica/fibrótica (meses a anos de exposição contínua, indistinguível clinicamente de outras DPI fibrosantes).
- **Diagnóstico:** TC com padrão de vidro fosco predominante e **áreas de aprisionamento aéreo em mosaico** (achado discriminativo); lavado broncoalveolar com **linfocitose** (diferente do padrão neutrofílico de outras pneumonites); identificação do antígeno causador na história ambiental/ocupacional dirigida.
- **Tratamento:** **afastamento do antígeno causador é a medida mais importante** — muitas vezes suficiente isoladamente na forma aguda; corticoide em fases inflamatórias agudas/subagudas; forma fibrótica estabelecida trata-se como PPF (nintedanibe) se progressiva.
- ⚠️ **Pitfall:** rotular toda DPI com predomínio basal/subpleural como FPI sem investigar exposição ocupacional/ambiental — a forma fibrótica da pneumonite de hipersensibilidade pode mimetizar o padrão UIP, mas a conduta central (afastar a exposição) muda tudo.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 DPI associada a doença do tecido conjuntivo (CTD-ILD) e síndrome antissintetase

- **Quando suspeitar:** ILD com sorologia positiva para doença do tecido conjuntivo (esclerose sistêmica, artrite reumatoide, polimiosite/dermatomiosite), mesmo sem diagnóstico reumatológico prévio estabelecido — a **síndrome antissintetase** (anti-Jo1 e outros anticorpos antissintetase) associa ILD a miosite proximal, **"mãos de mecânico"** (hiperqueratose fissurada em face lateral dos dedos), Raynaud e artrite.
- **Diagnóstico:** padrão **NSIP** (pneumonia intersticial não específica) — vidro fosco predominante e pouco/nenhum faveolamento — é o padrão mais comum dessa categoria; sorologia dirigida (FAN, anti-Scl70, anti-Jo1/antissintetase, fator reumatoide, anti-CCP).
- **Tratamento:** com componente inflamatório predominante (padrão NSIP), **imunossupressão** (micofenolato de mofetila, ciclofosfamida em casos graves, rituximabe em refratários) costuma ser a primeira linha — diferente da FPI —, reservando antifibrótico para o fenótipo progressivo.
- 💎 **Pearl:** padrão NSIP geralmente tem melhor resposta a imunossupressão que o padrão UIP — a distinção radiológica entre os dois padrões tem implicação terapêutica direta, não é só descritiva.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Pneumoconioses

- **Quando suspeitar:** padrão radiológico e história ocupacional característicos — **silicose** (predomínio em lobos superiores, nódulos calcificados, calcificação "em casca de ovo" nos linfonodos hilares, exposição a sílica/mineração/jateamento de areia) e **asbestose** (predomínio em bases, placas pleurais calcificadas, exposição a amianto/construção civil/isolamento térmico).
- **Diagnóstico:** história ocupacional detalhada é indispensável e frequentemente negligenciada; padrão radiológico associado à exposição confirmada.
- **Tratamento:** afastamento da exposição ocupacional, suporte clínico e **rastreio de complicações** — TB associada à silicose (a sílica compromete a função macrofágica, elevando o risco de reativação) e mesotelioma/câncer de pulmão associados à asbestose; não há tratamento específico que reverta a fibrose já estabelecida.
- 💎 **Pearl:** silicose é fator de risco independente e importante para tuberculose ativa — todo paciente com silicose deve ser rastreado para TB latente/ativa, mesmo sem sintomas respiratórios adicionais além dos já esperados pela pneumoconiose.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**Diferencial radiológico e funcional das principais DPI**

| Entidade | Padrão TC característico | Achado de apoio | Resposta a imunossupressão |
|---|---|---|---|
| Sarcoidose | Linfadenopatia hilar bilateral ± infiltrado | Granuloma não caseoso na biópsia | Sim |
| Fibrose pulmonar idiopática | UIP — faveolamento basal/subpleural | Nenhum específico; diagnóstico de exclusão | Não (antifibrótico) |
| Pneumonite de hipersensibilidade | Vidro fosco + mosaico de aprisionamento aéreo | LBA com linfocitose | Sim (fase aguda/inflamatória) |
| CTD-ILD (padrão NSIP) | Vidro fosco predominante, pouco faveolamento | Sorologia de doença do tecido conjuntivo | Sim |
| Silicose / asbestose | Nódulos em ápices (silicose) / placas pleurais em bases (asbestose) | História ocupacional | Não |

## 📚 Referências essenciais

- ATS/ERS/WASOG Statement on Sarcoidosis.
- ATS/ERS/JRS/ALAT Clinical Practice Guideline — Idiopathic Pulmonary Fibrosis.
- ATS/ERS/JRS/ALAT Clinical Practice Guideline — Progressive Pulmonary Fibrosis.
- ATS Clinical Practice Guideline — Diagnosis of Hypersensitivity Pneumonitis in Adults.
- Diretrizes da Sociedade Brasileira de Pneumologia e Tisiologia sobre Doenças Pulmonares Intersticiais.
`;

export default content.trim();
