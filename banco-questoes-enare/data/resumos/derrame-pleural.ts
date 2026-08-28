/**
 * Resumo — Pneumologia · Derrame pleural.
 *
 * Cobre as entidades do assunto no corpus: semiologia do derrame pleural
 * (macicez à percussão, abolição de murmúrio vesicular e frêmito
 * toracovocal, egofonia na transição derrame-pulmão) e o raciocínio de
 * diferenciação clínica antes da toracocentese.
 */
const content = `
## 🎯 Essencial

- **Tríade semiológica clássica do derrame pleural:** **macicez à percussão** + **abolição/diminuição do murmúrio vesicular** + **frêmito toracovocal reduzido ou abolido** na área acometida.
- **Egofonia (voz "de cabra"/anasalada)** aparece no limite superior do derrame, onde o pulmão comprimido conduz melhor sons de alta frequência — sinal fino que localiza a transição derrame-parênquima.
- **Expansibilidade torácica reduzida** do lado acometido, com frequência associada a **desvio do mediastino/traqueia para o lado contralateral** em derrames volumosos.
- **Toracocentese diagnóstica é o próximo passo** diante de derrame pleural de causa não esclarecida — critérios de Light (proteína e LDH) separam transudato de exsudato e direcionam a investigação etiológica.
- **Percussão maciça/submaciça** distingue derrame de pneumotórax (este é hipertimpânico) e de consolidação pneumônica (que tem macicez mas com **broncofonia e estertores**, ao contrário do derrame).
- **Derrame subpulmonar** pode simular elevação da cúpula diafragmática na radiografia e mimetizar ascite/hepatomegalia no exame físico — atenção redobrada no exame abdominal associado.

## 💎 Pearls

- **Frêmito toracovocal abolido** é um dos achados mais específicos para líquido pleural (versus consolidação, em que o frêmito costuma estar **aumentado**) — ponto clássico de distrator em prova.
- **A curva de Damoiseau** (limite superior do derrame, mais alto lateralmente e mais baixo medialmente) explica por que a macicez não é uniforme na parede torácica.
- **Ausculta com sopro pleurítico (e-para-a)** ocorre na zona de transição, semelhante à egofonia, mas percebido na ausculta em vez de na fala.
- **Derrames pequenos (<300 mL) podem não alterar a semiologia clássica** e só aparecem na radiografia como velamento do seio costofrênico — não descartar derrame por exame físico normal.
- **Atrito pleural** (som de "couro rangendo") tende a desaparecer conforme o derrame aumenta de volume, pois o líquido separa os folhetos pleurais inflamados.

## ⚠️ Pitfalls

- **Confundir os achados semiológicos de derrame com os de consolidação pneumônica** — ambos têm macicez, mas consolidação tem frêmito **aumentado** e broncofonia/pectorilóquia, enquanto derrame tem frêmito **abolido**.
- **Esquecer que pneumotórax é hipertimpânico**, não maciço — erro de trocar os dois quadros na hora de decidir a próxima conduta.
- **Não pesquisar egofonia/transição** e concluir apenas pela macicez basal, perdendo a chance de localizar clinicamente o nível do derrame.
- **Assumir que todo derrame precisa de punção imediata independentemente do volume** — derrame pequeno, assintomático, com causa evidente e conhecida (ex.: ICC compensando) pode ser observado antes de puncionar.
- **Deixar de suspeitar de derrame diante de exame físico "normal"** em paciente sintomático — derrames pequenos podem não alterar a semiologia clássica.

## 📝 Como a banca cobra

**Derrame pleural aparece em 2 questões (0,94% do corpus)**, ambas do ENARE, com foco quase exclusivo em **semiologia** — reconhecer os achados do exame físico, não a etiologia ou o tratamento.

- **ENARE 2025 Q19** cobrou a **semiologia do derrame pleural** em nível médio, exigindo associar corretamente macicez, frêmito reduzido e murmúrio vesicular diminuído no mesmo cenário.
- **ENARE 2026 Q27** repetiu o tema em nível mais fácil, novamente sobre **semiologia do derrame pleural**, reforçando que a tríade clássica (percussão, frêmito, ausculta) é o núcleo cobrado pela banca nesse assunto.

## 🧠 Conceito e fisiopatologia

O acúmulo de líquido no espaço pleural interpõe um meio de baixa condutividade sonora e mecânica entre a parede torácica e o parênquima pulmonar. Isso explica toda a semiologia: a percussão soa maciça porque o líquido não vibra como o ar alveolar; o frêmito toracovocal (vibração transmitida da laringe até a parede torácica) se atenua porque o líquido absorve a vibração em vez de transmiti-la; e o murmúrio vesicular diminui porque o parênquima comprimido ventila menos e o som fica mais distante do estetoscópio.

Na zona de transição entre o líquido e o pulmão comprimido (atelectasia compressiva), o tecido pulmonar parcialmente arejado transmite preferencialmente frequências mais altas — fenômeno que gera a **egofonia**, um achado fisiopatologicamente distinto da broncofonia observada em consolidações (onde todo o parênquima, e não só uma fina camada comprimida, está preenchido por exsudato/transudato alveolar denso).

## 🔎 Diagnóstico

- **Exame físico:** macicez à percussão, frêmito toracovocal reduzido/abolido, murmúrio vesicular diminuído/abolido, egofonia na borda superior do derrame, expansibilidade reduzida.
- **Radiografia de tórax:** velamento do seio costofrênico (derrames pequenos), opacidade homogênea com curva de Damoiseau (derrames maiores), incidência em decúbito lateral para confirmar livre movimentação do líquido.
- **Toracocentese diagnóstica:** indicada em derrame de causa não esclarecida; critérios de Light diferenciam transudato de exsudato.

## 💊 Tratamento

- **Tratar a causa de base** (ICC, pneumonia parapneumônica, neoplasia, TB pleural) conforme etiologia identificada pela toracocentese.
- **Toracocentese de alívio** em derrames volumosos sintomáticos (dispneia).
- **Drenagem torácica** indicada em derrame parapneumônico complicado/empiema (pH baixo, glicose baixa, cultura positiva).

## 📚 Referências essenciais

- Diretriz Brasileira de Doenças Pleurais — Sociedade Brasileira de Pneumologia e Tisiologia.
- Harrison's Principles of Internal Medicine — capítulo sobre doenças pleurais.
`;

export default content.trim();
