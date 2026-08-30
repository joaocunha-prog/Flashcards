/**
 * Resumo — Endocrinologia · Doenças da adrenal.
 *
 * Cobre as entidades do assunto no corpus: hiperaldosteronismo primário
 * (apresentação clínica, causas — adenoma produtor de aldosterona vs.
 * hiperplasia adrenal bilateral) e insuficiência adrenal terciária por
 * retirada abrupta de glicocorticoide após uso crônico. Também traz, como
 * extrapolação de alto rendimento ainda não cobrada nas provas reais, a
 * insuficiência adrenal primária (Addison) e a crise adrenal, a síndrome
 * de Cushing (causas e diagnóstico) e o feocromocitoma, completando o
 * espectro das principais doenças do córtex e da medula adrenal.
 */
const content = `
## 🎯 Essencial

- **Hiperaldosteronismo primário: suspeitar em hipertensão + hipopotassemia**, especialmente se resistente a múltiplas drogas ou com hipertensão de início precoce/grave.
- **Rastreio: relação aldosterona plasmática/atividade de renina plasmática (RA/ARP) elevada**, com aldosterona não suprimida — teste de triagem antes de qualquer exame de imagem.
- **Duas causas principais**: **adenoma produtor de aldosterona** (unilateral, mais frequente em jovens, geralmente mais grave) e **hiperplasia adrenal bilateral** (mais comum globalmente) — a distinção define o tratamento (cirurgia vs. clínico).
- **Cateterismo de veias adrenais** é o padrão-ouro para lateralizar a produção de aldosterona quando a TC é inconclusiva ou discordante da idade/apresentação — não decidir cirurgia só pela imagem em paciente >35-40 anos.
- **Insuficiência adrenal terciária: causada pela retirada abrupta de glicocorticoide exógeno usado cronicamente**, que suprime o eixo hipotálamo-hipófise-adrenal (HHA) — a adrenal fica atrofiada e não responde a tempo.
- **Corticoide crônico nunca deve ser suspenso de forma abrupta** — o desmame deve ser gradual, permitindo a recuperação progressiva do eixo HHA.
- **Insuficiência adrenal terciária cursa sem hiperpigmentação e sem hiperpotassemia importante**, diferente da insuficiência adrenal primária (Addison) — porque a produção de mineralocorticoide (regulada principalmente pelo sistema renina-angiotensina, não pelo ACTH) fica relativamente preservada.
- **Insuficiência adrenal primária (Addison)** decorre de destruição da própria glândula (autoimune é a causa mais comum em países desenvolvidos; TB e outras infecções em regiões endêmicas) — compromete glico E mineralocorticoide, gerando hiperpotassemia, hiponatremia e hiperpigmentação cutaneomucosa (por ACTH/POMC elevados).
- **Síndrome de Cushing:** excesso de cortisol, endógeno (hipofisário = doença de Cushing, adrenal, ectópico) ou exógeno (iatrogênico, causa mais comum na prática); rastreio com cortisol salivar noturno, cortisol livre urinário de 24h ou teste de supressão com 1 mg de dexametasona.
- **Feocromocitoma:** tumor de medula adrenal produtor de catecolaminas — tríade clássica de cefaleia + sudorese + palpitações associada a hipertensão paroxística; rastreio com metanefrinas plasmáticas ou urinárias fracionadas.
- **Incidentaloma adrenal** (massa adrenal achada incidentalmente em exame de imagem por outro motivo) exige avaliação funcional obrigatória (rastreio para Cushing subclínico, feocromocitoma e, se hipertenso, hiperaldosteronismo) e avaliação de características radiológicas de malignidade (tamanho >4 cm, densidade em UH na TC sem contraste, washout de contraste) antes de decidir entre seguimento e cirurgia.
- **Hiperplasia adrenal congênita (forma clássica, deficiência de 21-hidroxilase)** causa insuficiência de cortisol/aldosterona com excesso de andrógenos — deve ser lembrada em recém-nascido com genitália ambígua (meninas) ou crise perdedora de sal nas primeiras semanas de vida.

## 💎 Pearls

- **Hipopotassemia pode estar ausente em boa parte dos casos de hiperaldosteronismo primário** — não excluir o diagnóstico só porque o potássio está normal.
- **Adenoma produtor de aldosterona tende a cursar com hipopotassemia mais acentuada e hipertensão mais grave** do que a hiperplasia bilateral, que costuma ser mais branda e bilateral desde o início.
- **Suprimir a suspeita diagnóstica por causa de anti-hipertensivos em uso** é erro — espironolactona e outros diuréticos poupadores de potássio devem ser suspensos antes da dosagem de RA/ARP para não falsear o resultado.
- **Na insuficiência adrenal terciária, o eixo pode levar meses para se recuperar** após a suspensão do corticoide exógeno — por isso o desmame lento é a prevenção, e a reposição transitória (inclusive em situações de estresse, como cirurgia/infecção) pode ser necessária mesmo após a suspensão formal.
- **ACTH baixo/normal na insuficiência adrenal terciária** (ao contrário do ACTH elevado da primária) reflete a origem central (hipofisária/hipotalâmica) da supressão.
- **Eplerenona tem menos efeito antiandrogênico que espironolactona** (menor incidência de ginecomastia/mastalgia/disfunção erétil), sendo alternativa quando esses efeitos adversos limitam a dose de espironolactona.
- **Teste de estimulação com cosintropina (ACTH sintético)** avalia a reserva de cortisol adrenal; resposta subnormal confirma insuficiência adrenal, mas pode ser falso-normal na insuficiência secundária/terciária muito recente (a adrenal ainda não atrofiou completamente).
- **Feocromocitoma segue a "regra dos 10"** (aproximadamente 10% bilaterais, 10% extra-adrenais/paragangliomas, 10% malignos, 10% familiares) — associação com síndromes genéticas (NEM2, von Hippel-Lindau, neurofibromatose tipo 1) deve ser lembrada em pacientes jovens ou com tumores bilaterais.
- **A causa mais comum de síndrome de Cushing em geral é o uso exógeno de glicocorticoide (iatrogênica)**, não tumor endógeno — sempre perguntar sobre uso de corticoide (inclusive tópico/inalatório/injetável) antes de investigar causa endógena.
- **Teste de supressão com dose baixa de dexametasona (1 mg overnight)** tem alta sensibilidade para rastreio de Cushing, mas falso-positivos ocorrem em obesidade, depressão, uso de estrogênio e álcool — por isso sempre confirmar com um segundo teste antes de avançar a investigação.

## ⚠️ Pitfalls

- **Diagnosticar hiperaldosteronismo primário só pela hipopotassemia** — muitos pacientes têm potássio normal; o rastreio correto é a relação aldosterona/renina.
- **Indicar adrenalectomia baseado apenas em nódulo unilateral na TC**, sem cateterismo de veias adrenais, especialmente em pacientes mais velhos (risco de incidentaloma não funcionante coexistindo com hiperplasia bilateral funcionante).
- **Suspender corticoide crônico abruptamente** "porque o paciente já está melhor" — pode precipitar crise adrenal.
- **Esperar hiperpigmentação cutânea ou hiperpotassemia para suspeitar de insuficiência adrenal terciária** — esses achados são típicos da forma primária, não da terciária.
- **Não reforçar dose de corticoide em situação de estresse** (cirurgia, infecção grave) em paciente com eixo HHA ainda suprimido após desmame recente — risco de insuficiência adrenal aguda.
- **Biopsiar ou manipular um incidentaloma adrenal sem antes excluir feocromocitoma** (rastreio com metanefrinas) — risco de crise hipertensiva catastrófica durante o procedimento.
- **Confundir cortisol total baixo em paciente crítico/hipoalbuminêmico com insuficiência adrenal verdadeira** — a fração livre (biologicamente ativa) pode estar normal; interpretar cortisol total com cautela nesse contexto.
- **Investigar causa endógena de Cushing sem primeiro excluir uso exógeno de corticoide** — a causa iatrogênica é a mais frequente de todas e a mais fácil de descartar por anamnese cuidadosa.
- **Fechar diagnóstico de Cushing com apenas um teste de rastreio positivo isolado** — a recomendação é confirmar com pelo menos dois testes concordantes antes de avançar para localização da causa.

## 📝 Como a banca cobra

**Doenças da adrenal aparecem em 2 questões (0,94% do corpus)**, ambas do EBSERH, cobrindo os dois polos do eixo (excesso e insuficiência de hormônio adrenal).

- **EBSERH 2025 Q34** testou a **apresentação clínica e as causas do hiperaldosteronismo primário** — hipertensão associada a hipopotassemia, com necessidade de diferenciar adenoma produtor de aldosterona de hiperplasia adrenal bilateral.
- **EBSERH 2026 Q47** cobrou a **insuficiência adrenal terciária por retirada abrupta de glicocorticoide**, exigindo reconhecer o quadro de supressão do eixo HHA por corticoterapia crônica interrompida sem desmame adequado.

## 🧠 Conceito e fisiopatologia

O **hiperaldosteronismo primário** decorre de produção autônoma de aldosterona pela adrenal (adenoma ou hiperplasia), independente do sistema renina-angiotensina — por isso a renina fica suprimida (feedback negativo) enquanto a aldosterona permanece alta, gerando a relação RA/ARP elevada característica. O excesso de aldosterona aumenta a reabsorção de sódio e a excreção de potássio e hidrogênio no túbulo distal, produzindo hipertensão, hipopotassemia e alcalose metabólica.

Já a **insuficiência adrenal terciária** nasce do eixo regulatório central: o uso crônico de glicocorticoide exógeno suprime a liberação de CRH hipotalâmico e ACTH hipofisário por feedback negativo prolongado, levando a atrofia funcional do córtex adrenal. Quando o corticoide é retirado bruscamente, a adrenal atrofiada não consegue retomar a produção endógena de cortisol a tempo, resultando em insuficiência adrenal aguda ou crônica — mas como a zona glomerulosa (produtora de aldosterona) depende pouco do ACTH, a função mineralocorticoide fica relativamente preservada, o que explica a ausência de hiperpotassemia relevante nessa forma.

Na **insuficiência adrenal primária**, a destruição direta da glândula compromete as três zonas do córtex (glomerulosa, fasciculada e reticular), afetando mineralocorticoide, glicocorticoide e andrógenos simultaneamente; a perda de feedback negativo eleva ACTH e seu precursor comum POMC, que também estimula melanócitos e explica a hiperpigmentação característica — um contraste fisiopatológico direto com a forma terciária.

Na **síndrome de Cushing endógena**, o excesso crônico de cortisol (seja por tumor hipofisário produtor de ACTH, tumor adrenal autônomo, ou produção ectópica de ACTH) causa catabolismo proteico generalizado (atrofia muscular, estrias, pele fina), redistribuição de gordura central e resistência à insulina — o mesmo espectro de efeitos vistos na forma iatrogênica por uso exógeno de glicocorticoide, o que reforça por que a história medicamentosa deve sempre ser o primeiro passo da investigação.

## 🩺 Quadro clínico

- **Hiperaldosteronismo primário:** hipertensão (frequentemente resistente ou de início precoce), hipopotassemia (nem sempre presente), fraqueza muscular, cãibras, poliúria/polidipsia por nefropatia hipopotassêmica.
- **Insuficiência adrenal terciária:** fadiga, hipotensão, náuseas, hipoglicemia, mal-estar após redução/suspensão de corticoide crônico — sem hiperpigmentação, sem hiperpotassemia relevante.
- **Insuficiência adrenal primária (Addison):** fadiga, hipotensão, hiperpigmentação cutaneomucosa, hiponatremia, hiperpotassemia, avidez por sal, náuseas/vômitos — crise adrenal com choque refratário a volume é emergência.
- **Síndrome de Cushing:** face em lua cheia, giba dorsal, estrias violáceas largas, obesidade central com atrofia de extremidades, fraqueza muscular proximal, hipertensão, hiperglicemia.
- **Feocromocitoma:** crises paroxísticas de cefaleia, sudorese profusa e palpitações associadas a hipertensão (pode ser sustentada ou paroxística), tremor, ansiedade, palidez.

## 🔎 Diagnóstico

- **Hiperaldosteronismo primário:** relação aldosterona/renina elevada (rastreio) → teste confirmatório (sobrecarga salina, por exemplo) → TC de adrenais → cateterismo de veias adrenais para lateralizar se dúvida ou idade avançada.
- **Insuficiência adrenal terciária:** cortisol basal baixo, ACTH baixo/normal, teste de estimulação com ACTH (cosintropina) pode estar atenuado; história de corticoterapia crônica recente é a chave diagnóstica.
- **Insuficiência adrenal primária:** cortisol baixo com ACTH elevado (não suprime a resposta da hipófise), teste de estimulação com cosintropina sem resposta adequada, anticorpos anti-21-hidroxilase (causa autoimune).
- **Síndrome de Cushing:** dois testes de rastreio positivos (cortisol livre urinário, cortisol salivar noturno, supressão com dexametasona) antes de dosar ACTH para localizar a causa (hipofisária, adrenal, ectópica).
- **Feocromocitoma:** metanefrinas plasmáticas ou urinárias fracionadas elevadas → TC/RM de adrenais para localização; PET/cintilografia com MIBG se extra-adrenal ou metastático suspeito.

## 💊 Tratamento

- **Adenoma produtor de aldosterona:** adrenalectomia laparoscópica unilateral.
- **Hiperplasia adrenal bilateral:** tratamento clínico com antagonista de receptor mineralocorticoide (espironolactona ou eplerenona).
- **Insuficiência adrenal terciária:** reposição de glicocorticoide, com desmame ainda mais gradual; dose de estresse em situações agudas até confirmação da recuperação do eixo.
- **Insuficiência adrenal primária:** reposição de glicocorticoide e mineralocorticoide (fludrocortisona) de forma vitalícia; cartão/pulseira de alerta médico e orientação sobre dose de estresse.
- **Feocromocitoma:** bloqueio alfa-adrenérgico (fenoxibenzamina ou doxazosina) antes de betabloqueador, seguido de adrenalectomia — nunca iniciar betabloqueador isolado (risco de crise hipertensiva por vasoconstrição alfa sem oposição).
- **Prevenção:** desmame lento e escalonado de corticoide após uso crônico prolongado, nunca suspensão abrupta.

## 📚 Referências essenciais

- Endocrine Society Clinical Practice Guideline — Primary Aldosteronism: Case Detection, Diagnosis, and Treatment.
- Endocrine Society Clinical Practice Guideline — Pheochromocytoma and Paraganglioma.
- Williams Textbook of Endocrinology — capítulos sobre córtex e medula adrenal.
`;

export default content.trim();
