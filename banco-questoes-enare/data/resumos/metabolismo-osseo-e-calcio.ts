/**
 * Resumo — Reumatologia · Metabolismo ósseo e cálcio.
 *
 * Reorganizado por entidade clínica (osteoporose/FRAX, hiperparatireoidismo
 * primário e distúrbios agudos de cálcio são fisiopatologicamente distintos,
 * ainda que compartilhem os mesmos eixos hormonais) — a questão real do
 * corpus cobra o FRAX como ferramenta de rastreamento de osteoporose.
 * Assunto de baixa incidência no banco (1 questão), mas osteoporose e
 * distúrbios do metabolismo do cálcio são temas clássicos e recorrentes em
 * provas de residência (reumatologia, geriatria, clínica médica,
 * endocrinologia).
 */
const content = `
## 🎯 Essencial

- **FRAX (Fracture Risk Assessment Tool)** é uma ferramenta desenvolvida pela **Organização Mundial da Saúde (OMS)** para estimar o **risco absoluto de fratura osteoporótica em 10 anos** (fratura maior e fratura de quadril especificamente), combinando fatores de risco clínicos (idade, sexo, IMC, história pessoal/familiar de fratura, tabagismo, uso de corticoide, artrite reumatoide, causas secundárias de osteoporose, consumo de álcool) com ou sem densidade mineral óssea do colo femoral — **não substitui a densitometria, complementa a decisão de quando tratar**, principalmente em casos limítrofes (osteopenia).
- **Regulação do cálcio sérico:** três eixos hormonais principais — **PTH** (paratormônio, eleva o cálcio: reabsorção óssea, reabsorção renal de cálcio, ativação de vitamina D), **vitamina D ativa/calcitriol** (eleva o cálcio: absorção intestinal), e **calcitonina** (reduz o cálcio, papel fisiológico secundário no ser humano adulto).
- **Osteoporose** é definida por **densidade mineral óssea** (T-score ≤ -2,5 no colo femoral, quadril total ou coluna lombar pela densitometria/DXA) **ou** pela ocorrência de **fratura de fragilidade** (baixo trauma), independentemente do T-score.
- **Osteopenia:** T-score entre -1,0 e -2,5 — nessa faixa o FRAX ajuda a decidir se o paciente já tem risco absoluto suficiente para justificar tratamento farmacológico, mesmo sem preencher critério densitométrico de osteoporose.

## 🔹 Osteoporose e rastreamento com FRAX

- **Quando rastrear:** todas as mulheres a partir dos 65 anos e homens a partir dos 70 anos, independentemente de fator de risco adicional; rastreio mais precoce (a partir da menopausa em mulheres, ou antes dos 70 em homens) diante de fatores de risco — corticoterapia crônica, história familiar de fratura de quadril, baixo peso, tabagismo, etilismo, artrite reumatoide, hipogonadismo, menopausa precoce.
- **Diagnóstico:** densitometria óssea (DXA) — T-score compara com adulto jovem saudável (usado em pós-menopausa e homens ≥50 anos); Z-score compara com pares de mesma idade/sexo (usado em pré-menopausa e homens <50 anos, onde T-score baixo isoladamente não define osteoporose primária, exigindo investigação de causa secundária).
- **Tratamento farmacológico é indicado quando:** T-score ≤ -2,5 (osteoporose densitométrica), OU fratura de fragilidade prévia de quadril/coluna, OU osteopenia com risco FRAX elevado (acima do limiar de intervenção específico do país/população).
- **Primeira linha:** bisfosfonatos (alendronato, risedronato oral; ácido zoledrônico IV anual) — inibem a reabsorção osteoclástica. **Denosumabe** (anticorpo monoclonal anti-RANKL) é alternativa, sobretudo com função renal reduzida (bisfosfonato tem contraindicação relativa/ajuste em TFG muito baixa); **teriparatida** (fragmento do PTH, ação anabólica/formadora óssea) reservada para osteoporose grave/múltiplas fraturas.
- 💎 **Pearl:** **descontinuação abrupta de denosumabe** causa efeito rebote com perda óssea acelerada e risco aumentado de fraturas vertebrais múltiplas — ao suspender, deve-se fazer transição planejada para outro antirreabsortivo (ex.: bisfosfonato), nunca simplesmente parar.
- ⚠️ **Pitfall:** uso prolongado de bisfosfonato (geralmente >5 anos) sem "drug holiday" (pausa terapêutica) aumenta risco de eventos raros mas graves — fratura atípica de fêmur e osteonecrose de mandíbula; a decisão de pausa depende do risco de fratura reavaliado, não é automática.
- 📝 **Como caiu:** ENARE 2026 Q23 — reconhecimento direto de que o FRAX foi criado pela OMS para osteoporose, entre distratores de outras condições clínicas sem relação com o instrumento (demência, depressão, esteatose hepática, linfoma não Hodgkin).

## 🔹 Hiperparatireoidismo primário

- **Causa mais comum:** adenoma único de paratireoide (a maioria dos casos), secretando PTH de forma autônoma.
- **Quadro clínico:** frequentemente assintomático, diagnosticado por hipercalcemia em exame de rotina; quando sintomático — mnemônico clássico "ossos, pedras, gemidos abdominais e sobrecarga psíquica" (dor óssea/fratura, nefrolitíase, dor abdominal/constipação/pancreatite, sintomas neuropsiquiátricos como fadiga, depressão, confusão).
- **Diagnóstico:** **cálcio sérico elevado com PTH elevado ou inapropriadamente normal** (deveria estar suprimido diante da hipercalcemia) fecha o diagnóstico — o achado laboratorial que mais separa de outras causas de hipercalcemia.
- **Tratamento:** paratireoidectomia é curativa e indicada em sintomáticos ou em assintomáticos com critérios de gravidade (cálcio muito elevado, redução importante de densidade óssea, nefrolitíase, redução de função renal, idade <50 anos).
- 💎 **Pearl:** diferencie de **hipercalcemia humoral da malignidade** (PTH suprimido, PTHrp elevado — tumores sólidos, principalmente carcinoma escamoso de pulmão) e de **hipercalcemia por metástase óssea lítica** (PTH suprimido, sem elevação de PTHrp) — em ambos os casos de malignidade o PTH está baixo, ao contrário do hiperparatireoidismo primário.

## 🔹 Distúrbios agudos de cálcio

- **Hipercalcemia grave/sintomática:** hidratação venosa vigorosa com solução salina isotônica é a primeira medida; bisfosfonato IV (ácido zoledrônico) para controle mais sustentado; calcitonina para efeito rápido mas transitório (taquifilaxia em poucos dias); diálise reservada para casos refratários/graves com disfunção renal.
- **Hipocalcemia sintomática aguda (tetania, sinais de Chvostek e Trousseau, prolongamento de QT):** reposição de cálcio endovenoso (gluconato de cálcio); investigar e corrigir hipomagnesemia associada, que pode perpetuar a hipocalcemia por bloquear a secreção de PTH — corrigir cálcio sem corrigir magnésio associado pode falhar em resolver o quadro.
- **Causa clássica de hipocalcemia pós-operatória:** hipoparatireoidismo iatrogênico após tireoidectomia total (lesão/retirada inadvertida das paratireoides) — vigiar sinais precoces (parestesia perioral, cãibras) nas primeiras 24-48h de pós-operatório.

## 💎 Pearls gerais

- **Vitamina D** deve ser dosada como **25-hidroxivitamina D** (forma de estoque, meia-vida longa) — não como 1,25-di-hidroxivitamina D (forma ativa, meia-vida curta, regulada por feedback e não reflete estoque corporal).
- **Osteomalácia** (defeito de mineralização óssea por deficiência importante de vitamina D no adulto) causa dor óssea difusa e fraqueza muscular proximal, com fosfatase alcalina tipicamente elevada — diferente da osteoporose, que é assintomática até a fratura.

## ⚠️ Pitfalls

- **Confundir osteopenia com indicação automática de tratamento farmacológico** — a decisão depende do risco absoluto de fratura (FRAX), não só do T-score isolado.
- **Diagnosticar osteoporose só pela densitometria em pré-menopausa/homem jovem** sem investigar causa secundária — nessa faixa etária a osteoporose primária é incomum, e o Z-score (não o T-score) é a referência correta.
- **Suspender denosumabe sem transição planejada** para outro antirreabsortivo.
- **Não suspeitar de hiperparatireoidismo primário diante de PTH "normal"** em paciente hipercalcêmico — o PTH deveria estar suprimido nesse cenário; "normal" já é inapropriado e sugere doença paratireoidiana autônoma.

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus (apenas 1 questão real, ENARE 2026 Q23, classificada como FÁCIL)** — ficou fora do corte 80/20. Ainda assim, metabolismo ósseo e cálcio — sobretudo rastreamento e tratamento de osteoporose — é tema clássico e recorrente em provas de residência (reumatologia, geriatria, clínica médica), com alta chance de aparecer com mais profundidade em provas futuras.

- **ENARE 2026 Q23** cobrou o reconhecimento direto e objetivo de que o FRAX foi criado pela OMS para **osteoporose**, entre distratores de condições completamente diferentes (demência, depressão, esteatose hepática, linfoma não Hodgkin) — questão de reconhecimento de ferramenta, sem exigir ainda cálculo ou interpretação fina do escore.
- O padrão provável de evolução em provas futuras é cobrar a aplicação prática do FRAX (quando tratar diante de osteopenia com risco elevado) e os critérios densitométricos/clínicos de osteoporose, além dos distúrbios de cálcio associados (hiperparatireoidismo primário, hipercalcemia da malignidade).

## 📚 Referências essenciais

- IOF (International Osteoporosis Foundation) e NOF (National Osteoporosis Foundation) — diretrizes de rastreamento, diagnóstico e tratamento de osteoporose, incluindo o uso do FRAX.
- Ferramenta FRAX — desenvolvida sob os auspícios da Organização Mundial da Saúde (OMS), Universidade de Sheffield.
`;

export default content.trim();
