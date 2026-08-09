/**
 * Resumo — Endocrinologia · Doenças da tireoide.
 *
 * Cobre as entidades do assunto no corpus: hipertireoidismo (doença de
 * Graves, bócio multinodular tóxico, tireotoxicose factícia), tireoidites,
 * hipotireoidismo (incluindo causa medicamentosa) e nódulo tireoidiano/
 * câncer de tireoide.
 */
const content = `
## 🎯 Essencial

- **Tireotoxicose ≠ hipertireoidismo.** Tireotoxicose é excesso de hormônio circulante por qualquer causa; hipertireoidismo é excesso por **hiperprodução glandular verdadeira**. A distinção prática se faz pela **captação de iodo radioativo em 24h**: alta na doença de Graves e no bócio multinodular tóxico (a glândula está de fato hiperfuncionante); **baixa** na tireoidite (liberação de hormônio pré-formado por destruição glandular) e na tireotoxicose factícia (hormônio exógeno, glândula suprimida).
- **Tireotoxicose factícia:** TSH suprimido + T4 livre **baixo** (não alto!) + captação de iodo baixa — o padrão hormonal é peculiar porque o paciente costuma usar **T3 exógeno** (liotironina), que suprime TSH e T4 endógeno sem elevar o T4 medido.
- **Tireoidite subaguda (De Quervain):** dor cervical + quadro viral prévio + VHS muito elevado + tireotoxicose transitória com **captação de iodo baixa** — autolimitada, tratada com anti-inflamatório, não com antitireoidiano (não há hiperfunção para bloquear).
- **Bócio multinodular tóxico:** idoso, bócio com múltiplos nódulos, cintilografia com áreas de hiper e hipocaptação alternadas ("mosaico") — trate com **antitireoidiano + betabloqueador seguidos de iodo radioativo** (ablação definitiva), já que remissão espontânea é rara ao contrário de Graves.
- **Nódulo tireoidiano: o primeiro exame é sempre TSH.** Se suprimido, investigar nódulo hiperfuncionante (cintilografia) antes de puncionar (nódulo "quente" raramente é maligno e pode ser tratado sem PAAF). Se TSH normal/alto, USG com classificação **TIRADS** guia a indicação de PAAF.
- **TIRADS 4-5 (ou TIRADS 3 com nódulo >1,5-2,5cm) indica punção aspirativa por agulha fina (PAAF)** — não repetir USG "para ver se cresce" quando a classificação já indica risco significativo.
- **Sistema de Bethesda categoriza a citologia da PAAF.** **Bethesda III/IV (indeterminado/neoplasia folicular)** não define malignidade — o próximo passo moderno é **teste molecular** (painel de expressão gênica) antes de indicar cirurgia diagnóstica, evitando lobectomia desnecessária em lesões que o teste identifica como baixo risco.
- **Amiodarona é causa relevante de disfunção tireoidiana em ambos os sentidos** (hipotireoidismo por excesso de iodo/efeito Wolff-Chaikoff mantido; ou tireotoxicose tipo 1/2) — sempre suspeitar em paciente cardiopata em uso da droga com sintomas tireoidianos novos.
- **Hipotireoidismo grave/mixedema em idoso pode se apresentar como rebaixamento do nível de consciência com bradicardia e hipotermia** — quadro grave, muitas vezes desencadeado por fator precipitante (infecção, medicação, frio).
- **Doença de Graves:** oftalmopatia (exoftalmia, retração palpebral), bócio difuso, TRAb positivo — tratada com antitireoidiano (metimazol preferencialmente), iodo radioativo ou tireoidectomia, conforme perfil do paciente.

## 💎 Pearls

- **Retração palpebral sem exoftalmia franca pode ocorrer em qualquer tireotoxicose** (efeito adrenérgico sobre o músculo de Müller), enquanto a **exoftalmia verdadeira com proptose é específica de Graves** (infiltração inflamatória/edema da musculatura extraocular e gordura retro-orbitária).
- **Captação de iodo radioativo é o exame que mais rende em vinhetas de tireotoxicose** — memorizar o padrão (alta em Graves/bócio tóxico; baixa em tireoidite/factícia) resolve a maioria das questões de hipertireoidismo sem precisar de mais nenhum dado.
- **T3 costuma subir proporcionalmente mais que T4 no bócio multinodular tóxico e em áreas de deficiência de iodo** ("T3-toxicose") — um padrão que pode aparecer explicitamente na vinheta como pista discriminatória.
- **Amiodarona contém grande quantidade de iodo por comprimido** — tanto pode desencadear hipotireoidismo (efeito Wolff-Chaikoff sustentado, mais comum em tireoide previamente doente) quanto tireotoxicose (tipo 1, por excesso de substrato de síntese; tipo 2, por tireoidite destrutiva induzida pela droga).
- **Nódulo hiperfuncionante ("quente") raramente é maligno** — a fisiologia tumoral maligna tende a perder a capacidade de captar iodo de forma organizada, então autonomia funcional é, em geral, sinal tranquilizador.
- **Bethesda IV não é "quase câncer"** — é uma categoria citológica indeterminada em que testes moleculares modernos permitem reclassificar boa parte dos nódulos como baixo risco, evitando cirurgia diagnóstica desnecessária.
- **Hipotireoidismo subclínico (TSH alto, T4 livre normal) tem indicação de tratamento controversa** e depende de fatores como idade, TSH muito elevado (>10), gestação e sintomas — não é tratamento automático só pelo TSH alterado.

## ⚠️ Pitfalls

- **Pedir biópsia por agulha fina como primeiro exame em suspeita de tireoidite subaguda** — o diagnóstico é clínico + captação de iodo baixa + VHS elevado; PAAF não é o exame indicado nesse contexto.
- **Confundir tireotoxicose factícia com doença de Graves pelo T4 livre** — na factícia o T4 costuma estar baixo (paciente usa T3), não alto; esperar "T4 alto" universal em toda tireotoxicose é erro comum.
- **Indicar iodo radioativo ou antitireoidiano em tireoidite subaguda** — não há hiperfunção glandular para bloquear; o tratamento é anti-inflamatório (AINE ou corticoide em casos graves) e suporte, já que a fase de tireotoxicose é autolimitada.
- **Tratar todo nódulo Bethesda III/IV com cirurgia direta** sem considerar teste molecular disponível — pode gerar lobectomia/tireoidectomia desnecessária em lesão de baixo risco.
- **Não investigar amiodarona como causa em paciente cardiopata com disfunção tireoidiana nova** — é armadilha comum esquecer a medicação em uso crônico como etiologia.
- **Repetir USG de rotina em nódulo já classificado como TIRADS de alto risco**, adiando a PAAF — atraso desnecessário no diagnóstico.
- **Esquecer que hipotireoidismo grave pode se manifestar predominantemente como quadro neuropsiquiátrico** (confusão, letargia, até coma mixedematoso) em vez do quadro metabólico clássico "clássico" de fadiga e intolerância ao frio — especialmente em idosos.

## 📝 Como a UERJ cobra

**Doenças da tireoide é #9 do ranking (6 questões, 2,4% do corpus)**, e o padrão mais forte é a diferenciação de causas de tireotoxicose pela **captação de iodo radioativo** — praticamente toda vinheta de hipertireoidismo testa esse eixo.

- **Hipertireoidismo/doença de Graves** apareceu 2 vezes (2022 Q32, 2025 Q20), uma testando **tireotoxicose factícia** (com captação baixa, um distrator elegante em relação a Graves) e outra testando **bócio multinodular tóxico com T3-toxicose** — ambas exigem raciocínio sobre captação e cinética hormonal, não apenas reconhecimento clínico.
- **Nódulo tireoidiano** apareceu 2 vezes (2021 Q41, 2024 Q38), uma cobrando o **manejo moderno de Bethesda IV** (teste molecular em vez de cirurgia direta) e outra cobrando a indicação de **PAAF por TIRADS** — a banca está alinhada com as diretrizes atuais de manejo escalonado, não com conduta cirúrgica automática.
- **Tireoidite** (2021 Q25) e **hipotireoidismo por amiodarona** (2024 Q42) testam reconhecimento de causa/contexto específico por trás do quadro tireoidiano, reforçando que a banca valoriza a etiologia por trás do diagnóstico sindrômico.

## 🆕 Atualização

- **Testes de expressão gênica/moleculares para nódulos Bethesda III/IV** (ThyroSeq, Afirma) tornaram-se padrão de cuidado nos centros com acesso à tecnologia, reduzindo significativamente cirurgias diagnósticas desnecessárias — a UERJ já cobra esse racional (2021 Q41), reforçando que é conhecimento consolidado e não apenas tendência.
- **TIRADS (ACR-TIRADS e variantes)** consolidou-se como sistema padronizado de estratificação ultrassonográfica de risco, substituindo critérios descritivos isolados (nódulo hipoecoico, margens irregulares, microcalcificações) por um escore combinado que define diretamente o limiar de tamanho para PAAF.
- No **hipertireoidismo de Graves**, guias mais recentes (American Thyroid Association) reforçam a discussão compartilhada entre as três opções terapêuticas (antitireoidiano prolongado, iodo radioativo, cirurgia) considerando preferência do paciente, oftalmopatia associada (iodo radioativo pode piorar oftalmopatia ativa) e desejo gestacional.
- Para **carcinoma diferenciado de tireoide de baixo risco**, há tendência atual de **redução da agressividade terapêutica** (lobectomia em vez de tireoidectomia total para tumores pequenos e de baixo risco; menor uso de iodo radioativo adjuvante) em relação à prática mais extensa de décadas anteriores — reflexo de entendimento de que muitos carcinomas papilíferos pequenos têm curso indolente.

## 🧠 Conceito e fisiopatologia

A síntese de hormônio tireoidiano depende da captação ativa de iodeto pela tireoide (via simportador sódio-iodeto), sua organificação e acoplamento às tirosinas da tireoglobulina, regulados pelo TSH hipofisário, que por sua vez responde à retroalimentação negativa dos hormônios tireoidianos circulantes. Qualquer condição que aumente a produção hormonal verdadeira (Graves, bócio tóxico) eleva a captação de iodo radioativo, porque a glândula está ativamente sintetizando mais hormônio a partir de mais iodeto capturado. Já condições em que o hormônio circulante alto vem de **liberação de estoque pré-formado** (tireoidite, por destruição folicular inflamatória) ou de **fonte exógena** (tireotoxicose factícia) não envolvem síntese ativa aumentada — a glândula, na verdade, está com sua função endógena suprimida pelo TSH baixo — e por isso a captação de iodo está baixa nesses cenários.

**Doença de Graves** é uma doença autoimune em que autoanticorpos (TRAb) se ligam ao receptor de TSH e o ativam de forma sustentada e independente da regulação normal, estimulando continuamente a síntese e liberação hormonal — daí bócio difuso (hiperplasia glandular generalizada) e a oftalmopatia associada (os mesmos autoanticorpos, ou uma resposta imune cruzada, ativam fibroblastos orbitários, causando edema e infiltração da musculatura extraocular e do tecido retro-orbitário).

**Bócio multinodular tóxico** desenvolve-se a partir de nódulos com autonomia funcional adquirida ao longo de anos, que gradualmente escapam da regulação normal do TSH — diferente de Graves, não há componente autoimune, e a autonomia costuma se desenvolver em glândulas com hiperplasia nodular de longa data, mais comum em idosos e em regiões historicamente deficientes em iodo.

**Nódulos tireoidianos** em geral resultam de crescimento clonal (adenomas) ou policlonal (hiperplasia nodular) do epitélio folicular; a minoria (carcinomas) resulta de mutações que conferem vantagem proliferativa mantendo, na maioria dos casos, diferenciação suficiente para ainda depender de TSH e captar iodo de forma menos eficiente que o tecido normal — por isso nódulos malignos tendem a ser "frios" (hipofuncionantes) na cintilografia, e nódulos "quentes" (hiperfuncionantes) raramente são malignos.

## 🩺 Quadro clínico

- **Tireotoxicose (geral):** palpitação, tremor, perda de peso apesar de apetite preservado/aumentado, intolerância ao calor, insônia, irritabilidade, taquicardia, hipertensão sistólica, pele quente e úmida.
- **Doença de Graves especificamente:** bócio difuso, oftalmopatia (exoftalmia, retração palpebral, diplopia em casos avançados), mixedema pré-tibial (raro, mas característico quando presente).
- **Tireoidite subaguda:** dor cervical anterior irradiada para mandíbula/ouvido, febre baixa, quadro viral prévio recente, tireoide dolorosa à palpação.
- **Tireotoxicose factícia:** sintomas de tireotoxicose sem bócio nem oftalmopatia, muitas vezes em paciente com acesso a hormônio tireoidiano (profissional de saúde, uso para emagrecimento).
- **Hipotireoidismo:** fadiga, ganho de peso, intolerância ao frio, constipação, pele seca, bradicardia, edema periorbitário/de membros inferiores sem cacifo (mixedema), bradipsiquismo; em casos graves, rebaixamento do nível de consciência, hipotermia, hipotensão (coma mixedematoso).
- **Nódulo tireoidiano:** geralmente assintomático, achado palpatório ou de imagem; sintomas compressivos (disfagia, dispneia, rouquidão por acometimento do nervo laríngeo recorrente) sugerem doença mais extensa/maligna.

## 🔎 Diagnóstico

- **Passo inicial universal diante de suspeita de disfunção tireoidiana: TSH.** Suprimido → tireotoxicose (seguir com T4 livre e captação de iodo). Elevado → hipotireoidismo (seguir com T4 livre para graduar).
- **Tireotoxicose:** T4 livre e T3 confirmam o excesso hormonal; **captação de iodo radioativo em 24h** distingue hiperfunção verdadeira (alta — Graves, bócio tóxico) de liberação/exógeno (baixa — tireoidite, factícia); TRAb positivo confirma Graves especificamente.
- **Nódulo tireoidiano:** TSH primeiro (excluir nódulo hiperfuncionante autônomo, que dispensa PAAF); USG com classificação **TIRADS** define limiar de tamanho para punção; **PAAF** classificada pelo sistema de **Bethesda**; categorias indeterminadas (III/IV) podem ser complementadas por **teste molecular** antes de indicar cirurgia.
- **Hipotireoidismo:** TSH elevado + T4 livre baixo (hipotireoidismo primário, o mais comum); anti-TPO positivo sugere causa autoimune (tireoidite de Hashimoto); investigar causa medicamentosa (amiodarona, lítio) e história de radioterapia cervical/cirurgia prévia.

## 🚨 Gravidade / classificação

- **TIRADS** estratifica risco de malignidade do nódulo por características ultrassonográficas (composição, ecogenicidade, forma, margem, focos ecogênicos) e define o limiar de tamanho para indicação de PAAF.
- **Sistema de Bethesda** classifica a citologia da PAAF em 6 categorias (de não diagnóstica a maligna), cada uma com risco de malignidade e conduta associada padronizados.
- **Crise tireotóxica (tempestade tireoidiana)** é a forma mais grave de tireotoxicose — febre alta, taquicardia extrema, alteração do nível de consciência, disfunção de múltiplos órgãos — exige tratamento intensivo imediato (antitireoidiano em altas doses, betabloqueador, corticoide, iodo, suporte em UTI).
- **Coma mixedematoso** é a forma mais grave de hipotireoidismo — emergência com alta mortalidade se não tratada precocemente com hormônio tireoidiano IV e corticoide (cobrindo possível insuficiência adrenal associada) em ambiente de terapia intensiva.

## 💊 Tratamento

- **Doença de Graves:** três opções equivalentes em eficácia global, escolha compartilhada com o paciente — **antitireoidiano (metimazol preferencial; propiltiouracila em 1º trimestre de gestação ou crise tireotóxica pelo início de ação mais rápido em bloquear conversão periférica)**, **iodo radioativo** (evitar em oftalmopatia ativa moderada/grave, pode piorá-la) ou **tireoidectomia** (bócio muito volumoso, nódulo suspeito associado, preferência do paciente).
- **Bócio multinodular tóxico:** antitireoidiano + betabloqueador para controle inicial, seguidos de **iodo radioativo** (tratamento definitivo preferencial, já que remissão espontânea é rara nessa condição, ao contrário de Graves).
- **Tireoidite subaguda:** anti-inflamatório não esteroide para dor/inflamação; corticoide em casos mais graves; betabloqueador para sintomas adrenérgicos da fase tireotóxica transitória; **sem indicação de antitireoidiano** (não há hiperfunção a bloquear); a maioria evolui com resolução espontânea, passando por uma fase hipotireóidea transitória antes de normalizar.
- **Tireotoxicose factícia:** suspensão do hormônio exógeno e abordagem da causa subjacente (psicológica, uso inadvertido).
- **Hipotireoidismo:** reposição de **levotiroxina**, com dose ajustada por TSH; iniciar com cautela (doses menores, aumento gradual) em idosos e cardiopatas pelo risco de precipitar isquemia miocárdica.
- **Coma mixedematoso:** levotiroxina IV (± liotironina), corticoide IV (cobrindo insuficiência adrenal concomitante possível), suporte hemodinâmico e térmico em UTI.
- **Nódulo/carcinoma de tireoide:** conduta conforme Bethesda/teste molecular — observação para nódulos benignos; lobectomia ou tireoidectomia total (± esvaziamento cervical) para malignidade confirmada, com extensão da cirurgia e uso de iodo radioativo adjuvante graduados pelo risco do tumor.

## 🔀 Diagnóstico diferencial

| Causa de tireotoxicose | Captação de iodo | Bócio | TRAb |
| --- | --- | --- | --- |
| Doença de Graves | Alta (difusa) | Difuso | Positivo |
| Bócio multinodular tóxico | Alta (mosaico) | Multinodular | Negativo |
| Tireoidite subaguda | **Baixa** | Doloroso | Negativo |
| Tireotoxicose factícia | **Baixa** | Ausente | Negativo |

## 📋 Tabela de revisão

| Condição | Achado-chave | Exame decisivo | Tratamento |
| --- | --- | --- | --- |
| Graves | Bócio difuso + oftalmopatia | TRAb + captação alta | Antitireoidiano/iodo/cirurgia |
| Bócio tóxico | Multinodular, idoso | Captação em mosaico | Iodo radioativo |
| Tireoidite subaguda | Dor cervical + VHS alto | Captação baixa | AINE/corticoide |
| Nódulo TIRADS alto | Achado ultrassonográfico | PAAF (Bethesda) | Conforme citologia |
| Hipotireoidismo | Fadiga + TSH alto | T4 livre baixo | Levotiroxina |

## 📚 Referências essenciais

- American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis (citada explicitamente pela UERJ em 2021 e 2025).
- American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer (citada explicitamente pela UERJ em 2021 e 2024).
- ATA/AACE Guidelines for Hypothyroidism.
- ACR TI-RADS Committee — Thyroid Imaging Reporting and Data System.
`;

export default content.trim();
