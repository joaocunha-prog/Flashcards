/**
 * Resumo — Pneumologia · Derrame pleural.
 *
 * Cobre as entidades do assunto no corpus: semiologia do derrame pleural
 * (macicez à percussão, abolição de murmúrio vesicular e frêmito
 * toracovocal, egofonia na transição derrame-pulmão) e o raciocínio de
 * diferenciação clínica antes da toracocentese. Também traz, como
 * extrapolação de alto rendimento ainda não cobrada nas provas reais, a
 * análise completa do líquido pleural (critérios de Light, ADA, citologia),
 * as etiologias mais comuns de transudato/exsudato (incluindo derrame por
 * embolia pulmonar) e as complicações do derrame parapneumônico/empiema.
 */
const content = `
## 🎯 Essencial

- **Tríade semiológica clássica do derrame pleural:** **macicez à percussão** + **abolição/diminuição do murmúrio vesicular** + **frêmito toracovocal reduzido ou abolido** na área acometida.
- **Egofonia (voz "de cabra"/anasalada)** aparece no limite superior do derrame, onde o pulmão comprimido conduz melhor sons de alta frequência — sinal fino que localiza a transição derrame-parênquima.
- **Expansibilidade torácica reduzida** do lado acometido, com frequência associada a **desvio do mediastino/traqueia para o lado contralateral** em derrames volumosos.
- **Toracocentese diagnóstica é o próximo passo** diante de derrame pleural de causa não esclarecida — critérios de Light (proteína e LDH) separam transudato de exsudato e direcionam a investigação etiológica.
- **Percussão maciça/submaciça** distingue derrame de pneumotórax (este é hipertimpânico) e de consolidação pneumônica (que tem macicez mas com **broncofonia e estertores**, ao contrário do derrame).
- **Derrame subpulmonar** pode simular elevação da cúpula diafragmática na radiografia e mimetizar ascite/hepatomegalia no exame físico — atenção redobrada no exame abdominal associado.
- **Critérios de Light (exsudato se qualquer um presente):** proteína pleural/sérica >0,5; LDH pleural/sérico >0,6; LDH pleural >2/3 do limite superior normal sérico — sensibilidade alta, mas classifica erroneamente alguns transudatos (ex.: ICC em uso de diurético) como exsudato.
- **Causas mais comuns de transudato:** insuficiência cardíaca (a mais frequente de todas as causas de derrame), cirrose com ascite (hidrotórax hepático), síndrome nefrótica. **Causas mais comuns de exsudato:** parapneumônico, neoplasia (mais comum em idosos, frequentemente hemorrágico), tuberculose pleural (predomínio linfocitário, ADA elevado), embolia pulmonar.
- **Estadiamento do derrame parapneumônico (classificação de Light):** classe 1-2 (não complicado, resolve com antibiótico), classe 3-5 (complicado, geralmente por pH baixo/glicose baixa, requer drenagem), classe 6-7 (empiema franco, pus, sempre drenagem, às vezes decorticação cirúrgica).
- **Hemotórax** (hematócrito do líquido pleural ≥50% do hematócrito sérico) geralmente decorre de trauma torácico ou dissecção de aorta; **quilotórax** (líquido leitoso, triglicerídeos >110 mg/dL) sugere lesão/obstrução do ducto torácico, frequentemente por linfoma ou trauma cirúrgico.

## 💎 Pearls

- **Frêmito toracovocal abolido** é um dos achados mais específicos para líquido pleural (versus consolidação, em que o frêmito costuma estar **aumentado**) — ponto clássico de distrator em prova.
- **A curva de Damoiseau** (limite superior do derrame, mais alto lateralmente e mais baixo medialmente) explica por que a macicez não é uniforme na parede torácica.
- **Ausculta com sopro pleurítico (e-para-a)** ocorre na zona de transição, semelhante à egofonia, mas percebido na ausculta em vez de na fala.
- **Derrames pequenos (<300 mL) podem não alterar a semiologia clássica** e só aparecem na radiografia como velamento do seio costofrênico — não descartar derrame por exame físico normal.
- **Atrito pleural** (som de "couro rangendo") tende a desaparecer conforme o derrame aumenta de volume, pois o líquido separa os folhetos pleurais inflamados.
- **Sinal de Litten (retração respiratória visível na parede torácica) e frêmito pericárdico** são achados semiológicos mais raros, geralmente citados em questões de nível mais avançado sobre exame físico torácico.
- **Derrame pleural bilateral favorece causa sistêmica** (ICC, síndrome nefrótica, hipoalbuminemia), enquanto derrame unilateral favorece causa local (pneumonia, neoplasia, TB) — heurística útil para direcionar a investigação inicial antes da toracocentese.
- **ADA (adenosina deaminase) elevada no líquido pleural (>40 U/L)** é fortemente sugestiva de pleurite tuberculosa em país de alta prevalência, especialmente com predomínio linfocitário e ausência de células mesoteliais.
- **pH pleural <7,2 no derrame parapneumônico** define empiema/derrame complicado e é indicação formal de drenagem torácica, independentemente do aspecto macroscópico do líquido.
- **Glicose pleural baixa (<60 mg/dL)** aponta para empiema, artrite reumatoide ou neoplasia — mecanismo de consumo de glicose por células inflamatórias/neoplásicas ou bloqueio de transporte pela pleura espessada.
- **Citologia oncótica do líquido pleural** tem sensibilidade moderada (60-70%) para malignidade em uma única amostra — repetir a punção (segunda amostra) aumenta o rendimento diagnóstico antes de partir para biópsia pleural.
- **Contagem diferencial de células no líquido pleural** orienta etiologia: predomínio de neutrófilos sugere processo agudo (parapneumônico), predomínio de linfócitos sugere processo crônico (TB, neoplasia, quilotórax).
- **Derrame associado a embolia pulmonar** costuma ser pequeno, unilateral, exsudativo e frequentemente hemorrágico — deve ser lembrado no diagnóstico diferencial de exsudato sem etiologia infecciosa/neoplásica evidente, especialmente com dor pleurítica associada.
- **Gradiente de albumina soro-líquido pleural (>1,2 g/dL sugere transudato)** é útil não só para corrigir "falso-exsudato" por diurético em ICC, mas em qualquer discordância entre os critérios de Light e o quadro clínico.
- **Sinal da coluna vertebral (spine sign)** na radiografia de tórax em perfil — visualização nítida da coluna torácica caudalmente sugere ausência de derrame; sua perda (a coluna "desaparece" nas porções inferiores) sugere derrame retrocardíaco.

## ⚠️ Pitfalls

- **Confundir os achados semiológicos de derrame com os de consolidação pneumônica** — ambos têm macicez, mas consolidação tem frêmito **aumentado** e broncofonia/pectorilóquia, enquanto derrame tem frêmito **abolido**.
- **Esquecer que pneumotórax é hipertimpânico**, não maciço — erro de trocar os dois quadros na hora de decidir a próxima conduta.
- **Não pesquisar egofonia/transição** e concluir apenas pela macicez basal, perdendo a chance de localizar clinicamente o nível do derrame.
- **Assumir que todo derrame precisa de punção imediata independentemente do volume** — derrame pequeno, assintomático, com causa evidente e conhecida (ex.: ICC compensando) pode ser observado antes de puncionar.
- **Deixar de suspeitar de derrame diante de exame físico "normal"** em paciente sintomático — derrames pequenos podem não alterar a semiologia clássica.
- **Atribuir derrame bilateral simétrico a causa infecciosa/neoplásica local sem primeiro pensar em causa sistêmica** (ICC, hipoalbuminemia) — a lateralidade do derrame é uma pista clínica valiosa antes mesmo da punção.
- **Aplicar critérios de Light isoladamente sem contexto clínico** — paciente com ICC em diurético pode ter derrame classificado como exsudato "falso-positivo" pelos critérios; nesse cenário, o gradiente de albumina soro-líquido pleural (>1,2 g/dL sugere transudato) ajuda a corrigir a classificação.
- **Postergar drenagem torácica esperando "o antibiótico fazer efeito"** em derrame parapneumônico com pH baixo/glicose baixa/cultura positiva — esse é justamente o critério que já indica drenagem, não observação.
- **Puncionar sem guia de imagem em derrame pequeno/septado** — aumenta o risco de punção seca ou de pneumotórax iatrogênico; a ultrassonografia à beira do leito reduz complicações e deve ser preferida sempre que disponível.
- **Concluir causa maligna só por citologia negativa em uma única punção** — sensibilidade moderada; repetir a coleta ou avançar para biópsia pleural (guiada por imagem ou por toracoscopia) antes de descartar neoplasia com suspeita clínica alta.
- **Descartar embolia pulmonar como causa só porque o derrame é pequeno e "não parece grave"** — o volume do derrame não se correlaciona com a gravidade do TEP subjacente; a suspeita clínica (dor pleurítica, fatores de risco para TEV) deve guiar a investigação, não o tamanho do derrame.

## 📝 Como a banca cobra

**Derrame pleural aparece em 2 questões (0,94% do corpus)**, ambas do ENARE, com foco quase exclusivo em **semiologia** — reconhecer os achados do exame físico, não a etiologia ou o tratamento.

- **ENARE 2025 Q19** cobrou a **semiologia do derrame pleural** em nível médio, exigindo associar corretamente macicez, frêmito reduzido e murmúrio vesicular diminuído no mesmo cenário.
- **ENARE 2026 Q27** repetiu o tema em nível mais fácil, novamente sobre **semiologia do derrame pleural**, reforçando que a tríade clássica (percussão, frêmito, ausculta) é o núcleo cobrado pela banca nesse assunto.

## 🧠 Conceito e fisiopatologia

O acúmulo de líquido no espaço pleural interpõe um meio de baixa condutividade sonora e mecânica entre a parede torácica e o parênquima pulmonar. Isso explica toda a semiologia: a percussão soa maciça porque o líquido não vibra como o ar alveolar; o frêmito toracovocal (vibração transmitida da laringe até a parede torácica) se atenua porque o líquido absorve a vibração em vez de transmiti-la; e o murmúrio vesicular diminui porque o parênquima comprimido ventila menos e o som fica mais distante do estetoscópio.

Na zona de transição entre o líquido e o pulmão comprimido (atelectasia compressiva), o tecido pulmonar parcialmente arejado transmite preferencialmente frequências mais altas — fenômeno que gera a **egofonia**, um achado fisiopatologicamente distinto da broncofonia observada em consolidações (onde todo o parênquima, e não só uma fina camada comprimida, está preenchido por exsudato/transudato alveolar denso).

Do ponto de vista etiológico, o líquido pleural é transudato quando resulta de desequilíbrio hidrostático/oncótico sistêmico (a pleura em si é normal, como na ICC ou na cirrose) e exsudato quando resulta de aumento da permeabilidade capilar pleural ou de drenagem linfática comprometida por doença própria da pleura ou do parênquima adjacente (infecção, neoplasia, inflamação) — essa distinção fisiopatológica é o que os critérios de Light tentam capturar bioquimicamente.

No derrame parapneumônico, a progressão de estágios reflete a evolução temporal do processo infeccioso: a fase exsudativa inicial (líquido estéril, pH normal) evolui para fase fibrinopurulenta (invasão bacteriana, consumo de glicose, queda de pH, formação de septações de fibrina) e, se não tratada, para fase de organização (espessamento pleural fibroso, encarceramento pulmonar) — por isso a janela para resolução só com antibiótico se fecha rapidamente, e a decisão de drenar depende de reconhecer em que fase o derrame já está.

## 🔎 Diagnóstico

- **Exame físico:** macicez à percussão, frêmito toracovocal reduzido/abolido, murmúrio vesicular diminuído/abolido, egofonia na borda superior do derrame, expansibilidade reduzida.
- **Radiografia de tórax:** velamento do seio costofrênico (derrames pequenos), opacidade homogênea com curva de Damoiseau (derrames maiores), incidência em decúbito lateral para confirmar livre movimentação do líquido.
- **Ultrassonografia de tórax:** mais sensível que a radiografia para derrames pequenos/septados, guia a toracocentese com segurança e reduz risco de pneumotórax iatrogênico; também identifica septações que sugerem derrame complicado antes mesmo da bioquímica do líquido.
- **Tomografia de tórax com contraste:** útil quando a suspeita é neoplasia (espessamento pleural nodular, lesão associada) ou quando a radiografia/ultrassom não esclarecem a etiologia.
- **Toracocentese diagnóstica:** indicada em derrame de causa não esclarecida; critérios de Light diferenciam transudato de exsudato; análise complementar (celularidade, glicose, pH, ADA, citologia oncótica, cultura) direciona a etiologia.
- **Biópsia pleural (guiada por imagem ou por toracoscopia):** indicada quando a toracocentese isolada é inconclusiva e a suspeita de TB pleural ou neoplasia permanece alta — maior rendimento diagnóstico que a citologia isolada.

## 💊 Tratamento

- **Tratar a causa de base** (ICC, pneumonia parapneumônica, neoplasia, TB pleural) conforme etiologia identificada pela toracocentese.
- **TB pleural:** esquema antituberculoso padrão (RIPE) por 6 meses; corticoide adjuvante não tem benefício comprovado consistente e não é rotina.
- **Toracocentese de alívio** em derrames volumosos sintomáticos (dispneia); evitar retirar grandes volumes de uma só vez (geralmente limitar a ~1,5 L por sessão) pelo risco de edema pulmonar de reexpansão.
- **Drenagem torácica** indicada em derrame parapneumônico complicado/empiema (pH baixo, glicose baixa, cultura positiva) ou em derrame loculado com necessidade de fibrinolítico intrapleural.
- **Derrame maligno recidivante:** pleurodese química (talco) ou cateter pleural de longa permanência para controle sintomático paliativo.
- **Hemotórax significativo:** drenagem torácica; toracotomia se débito inicial ou persistente elevado (critérios de sangramento cirúrgico).
- **Quilotórax:** dieta com triglicerídeos de cadeia média ou jejum com nutrição parenteral, drenagem torácica; tratamento da causa de base (ligadura do ducto torácico ou tratamento oncológico se linfoma).

## 📚 Referências essenciais

- Diretriz Brasileira de Doenças Pleurais — Sociedade Brasileira de Pneumologia e Tisiologia.
- Harrison's Principles of Internal Medicine — capítulo sobre doenças pleurais.
- British Thoracic Society (BTS) Guideline for Pleural Disease.
`;

export default content.trim();
