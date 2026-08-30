/**
 * Resumo — Endocrinologia · Doenças da adrenal.
 *
 * Reorganizado por entidade clínica (cada doença adrenal tem sua própria
 * seção com quadro clínico, diagnóstico, tratamento, pearl e pitfall
 * juntos), em vez de picado entre seções genéricas de tipo — o assunto
 * reúne doenças do córtex e da medula adrenal clinicamente distintas, dos
 * dois polos do eixo (excesso e insuficiência hormonal).
 *
 * Cobre as entidades do assunto no corpus: hiperaldosteronismo primário
 * (apresentação clínica, causas — adenoma produtor de aldosterona vs.
 * hiperplasia adrenal bilateral) e insuficiência adrenal terciária por
 * retirada abrupta de glicocorticoide após uso crônico. Expandido com
 * insuficiência adrenal primária (Addison) e crise adrenal, síndrome de
 * Cushing, feocromocitoma, incidentaloma adrenal e hiperplasia adrenal
 * congênita — conteúdo ainda não cobrado no corpus, mas plausível em
 * provas futuras do assunto.
 */
const content = `
## 🎯 Essencial

- **Toda doença adrenal deste assunto se organiza em dois polos: excesso hormonal (hiperaldosteronismo, Cushing, feocromocitoma) e insuficiência hormonal (Addison, insuficiência terciária)** — reconhecer de qual polo vem o quadro já direciona metade do raciocínio diagnóstico.
- **Corticoide crônico nunca deve ser suspenso de forma abrupta** — o desmame deve ser gradual, permitindo a recuperação progressiva do eixo hipotálamo-hipófise-adrenal (HHA); a suspensão brusca é a causa mais comum de insuficiência adrenal na prática clínica.
- **A causa mais comum de síndrome de Cushing em geral é o uso exógeno de glicocorticoide (iatrogênica)**, não tumor endógeno — sempre perguntar sobre uso de corticoide (inclusive tópico/inalatório/injetável) antes de investigar causa endógena.
- **Todo incidentaloma adrenal exige avaliação funcional obrigatória** (rastreio para Cushing subclínico, feocromocitoma e, se hipertenso, hiperaldosteronismo) antes de qualquer biópsia ou intervenção — biopsiar sem excluir feocromocitoma primeiro pode precipitar crise hipertensiva catastrófica.
- **Situações de estresse fisiológico (cirurgia, infecção grave, trauma) exigem dose de estresse de glicocorticoide** em qualquer paciente com eixo HHA suprimido (uso crônico de corticoide, insuficiência adrenal conhecida) — a adrenal não consegue aumentar sua produção endógena sob demanda nesse cenário.

## 📝 Como a banca cobra

**Doenças da adrenal aparecem em 2 questões (0,94% do corpus)**, ambas do EBSERH, cobrindo os dois polos do eixo (excesso e insuficiência de hormônio adrenal).

- **EBSERH 2025 Q34** testou a **apresentação clínica e as causas do hiperaldosteronismo primário** — hipertensão associada a hipopotassemia, com necessidade de diferenciar adenoma produtor de aldosterona de hiperplasia adrenal bilateral.
- **EBSERH 2026 Q47** cobrou a **insuficiência adrenal terciária por retirada abrupta de glicocorticoide**, exigindo reconhecer o quadro de supressão do eixo HHA por corticoterapia crônica interrompida sem desmame adequado.
- **Nenhuma questão do corpus cobrou ainda Addison, Cushing, feocromocitoma ou incidentaloma isoladamente** — são candidatos de alto rendimento para completar o assunto, sobretudo explorando o contraste entre insuficiência adrenal primária e terciária (mesmo eixo, apresentação quase oposta).

## 🧠 Conceito e fisiopatologia

O córtex adrenal se organiza em três zonas com regulação distinta: a zona glomerulosa (aldosterona, regulada principalmente pelo sistema renina-angiotensina, pouco pelo ACTH), a zona fasciculada (cortisol, regulada pelo ACTH) e a zona reticular (andrógenos, regulada pelo ACTH). Essa separação de eixos regulatórios explica por que a insuficiência adrenal terciária (que suprime só o eixo ACTH-dependente) poupa a função mineralocorticoide, enquanto a insuficiência adrenal primária (que destrói a glândula inteira) compromete as três zonas simultaneamente — o mesmo raciocínio anatômico organiza todo o diferencial de insuficiência adrenal deste assunto.

No polo do excesso hormonal, cada tumor/hiperfunção reflete a zona de origem: hiperaldosteronismo primário é excesso autônomo da zona glomerulosa (renina suprimida por feedback negativo), Cushing endógeno é excesso da zona fasciculada (hipofisário, adrenal ou ectópico), e o feocromocitoma foge dessa lógica cortical — origina-se na **medula** adrenal (tecido cromafim, embriologicamente neuroectodérmico, não do córtex), produzindo catecolaminas em vez de esteroides.

## 🔹 Hiperaldosteronismo primário

- **Quando suspeitar:** hipertensão + hipopotassemia, especialmente se resistente a múltiplas drogas ou de início precoce/grave — mas a **hipopotassemia pode estar ausente** em boa parte dos casos, não excluir o diagnóstico só porque o potássio está normal.
- **Diagnóstico:** rastreio com relação aldosterona plasmática/atividade de renina plasmática (RA/ARP) elevada, com aldosterona não suprimida — **suspender espironolactona e outros diuréticos poupadores de potássio antes da dosagem**, para não falsear o resultado. Confirmado o rastreio → TC de adrenais → **cateterismo de veias adrenais** para lateralizar quando a TC é inconclusiva ou discordante da idade/apresentação (padrão-ouro, sobretudo em >35-40 anos).
- **Causas:** **adenoma produtor de aldosterona** (unilateral, mais frequente em jovens, hipopotassemia mais acentuada e hipertensão mais grave) vs. **hiperplasia adrenal bilateral** (mais comum globalmente, geralmente mais branda). A distinção define o tratamento.
- **Tratamento:** adenoma unilateral → adrenalectomia laparoscópica; hiperplasia bilateral → tratamento clínico com antagonista de receptor mineralocorticoide (espironolactona ou eplerenona — esta com menos efeito antiandrogênico, útil quando ginecomastia/mastalgia limita a dose de espironolactona).
- ⚠️ **Pitfall:** indicar adrenalectomia baseado apenas em nódulo unilateral na TC, sem cateterismo de veias adrenais, especialmente em pacientes mais velhos — risco de incidentaloma não funcionante coexistindo com hiperplasia bilateral funcionante.
- 📝 **Como caiu:** EBSERH 2025 Q34.

## 🔹 Insuficiência adrenal terciária

- **Quando suspeitar:** fadiga, hipotensão, náuseas, hipoglicemia, mal-estar após redução/suspensão de corticoide crônico — **sem hiperpigmentação e sem hiperpotassemia importante**, diferente da forma primária.
- **Diagnóstico:** cortisol basal baixo, **ACTH baixo/normal** (reflete a origem central da supressão); teste de estimulação com cosintropina (ACTH sintético) pode estar atenuado, mas pode ser falso-normal se a supressão for muito recente (a adrenal ainda não atrofiou completamente). A história de corticoterapia crônica recente é a chave diagnóstica.
- **Tratamento:** reposição de glicocorticoide, com desmame ainda mais gradual; dose de estresse em situações agudas até confirmação da recuperação do eixo.
- 💎 **Pearl:** o eixo pode levar **meses** para se recuperar após a suspensão do corticoide exógeno — por isso o desmame lento é a prevenção, e a reposição transitória (inclusive em situações de estresse, como cirurgia/infecção) pode ser necessária mesmo após a suspensão formal já ter ocorrido há semanas.
- ⚠️ **Pitfall:** esperar hiperpigmentação cutânea ou hiperpotassemia para suspeitar de insuficiência adrenal terciária — esses achados são típicos da forma **primária**, não da terciária; ou não reforçar a dose de corticoide em situação de estresse num paciente com eixo ainda suprimido.
- 📝 **Como caiu:** EBSERH 2026 Q47.

## 🔹 Insuficiência adrenal primária (Addison) e crise adrenal

- **Quando suspeitar:** fadiga, hipotensão, **hiperpigmentação cutaneomucosa**, avidez por sal, náuseas/vômitos — causa autoimune é a mais comum em países desenvolvidos; tuberculose e outras infecções em regiões endêmicas.
- **Diagnóstico:** cortisol baixo com **ACTH elevado** (a hipófise não consegue suprimir por feedback, ao contrário da forma terciária), teste de estimulação com cosintropina sem resposta adequada; anticorpos anti-21-hidroxilase confirmam causa autoimune. Compromete glico **e** mineralocorticoide simultaneamente, gerando hiperpotassemia e hiponatremia junto da hipotensão.
- **Tratamento:** reposição de glicocorticoide **e** mineralocorticoide (fludrocortisona) de forma vitalícia; cartão/pulseira de alerta médico e orientação sobre dose de estresse. **Crise adrenal** (choque refratário a volume, geralmente precipitado por infecção/cirurgia/trauma em paciente não reconhecido ou sem dose de estresse) é emergência — hidrocortisona IV em dose de estresse **antes mesmo da confirmação laboratorial completa**, associada a reposição volêmica agressiva com salina.
- 💎 **Pearl:** cortisol total baixo em paciente crítico/hipoalbuminêmico não confirma insuficiência adrenal verdadeira — a fração livre (biologicamente ativa) pode estar normal; interpretar cortisol total com cautela nesse contexto específico, diferente da interpretação em paciente ambulatorial estável.
- ⚠️ **Pitfall:** atrasar hidrocortisona numa suspeita de crise adrenal para aguardar confirmação laboratorial completa — o tratamento empírico não espera, pelo risco de choque refratário e óbito.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Síndrome de Cushing

- **Quando suspeitar:** face em lua cheia, giba dorsal, estrias violáceas largas, obesidade central com atrofia de extremidades, fraqueza muscular proximal, hipertensão, hiperglicemia.
- **Diagnóstico:** **sempre excluir uso exógeno de glicocorticoide primeiro** (causa mais comum, mais fácil de descartar por anamnese). Rastreio endógeno com dois testes concordantes entre: cortisol salivar noturno, cortisol livre urinário de 24h, teste de supressão com 1mg de dexametasona overnight (alta sensibilidade, mas falso-positivos em obesidade, depressão, uso de estrogênio e álcool — por isso nunca fechar diagnóstico com um único teste). Confirmado o excesso, dosar ACTH para localizar a causa (hipofisária = doença de Cushing, adrenal ou ectópica).
- **Tratamento:** conforme a causa — cirurgia transesfenoidal na doença de Cushing hipofisária, adrenalectomia no tumor adrenal, tratamento do tumor primário na produção ectópica de ACTH; suspensão/redução gradual se iatrogênica.
- ⚠️ **Pitfall:** investigar causa endógena de Cushing sem primeiro excluir uso exógeno de corticoide, ou fechar o diagnóstico com apenas um teste de rastreio positivo isolado.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Feocromocitoma

- **Quando suspeitar:** tríade clássica de cefaleia + sudorese profusa + palpitações associada a hipertensão (pode ser sustentada ou paroxística), tremor, ansiedade, palidez.
- **Diagnóstico:** metanefrinas plasmáticas ou urinárias fracionadas elevadas → TC/RM de adrenais para localização; PET/cintilografia com MIBG se extra-adrenal ou metastático suspeito.
- **Tratamento:** **bloqueio alfa-adrenérgico (fenoxibenzamina ou doxazosina) antes de betabloqueador**, seguido de adrenalectomia — nunca iniciar betabloqueador isolado, risco de crise hipertensiva por vasoconstrição alfa sem oposição.
- 💎 **Pearl:** "regra dos 10" (aproximadamente 10% bilaterais, 10% extra-adrenais/paragangliomas, 10% malignos, 10% familiares) — associação com síndromes genéticas (NEM2, von Hippel-Lindau, neurofibromatose tipo 1) deve ser lembrada em pacientes jovens ou com tumores bilaterais.
- ⚠️ **Pitfall:** biopsiar ou manipular uma massa adrenal sem antes excluir feocromocitoma (rastreio com metanefrinas) — risco de crise hipertensiva catastrófica durante o procedimento.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Incidentaloma adrenal

- **Quando suspeitar:** massa adrenal achada incidentalmente em exame de imagem solicitado por outro motivo.
- **Diagnóstico:** avaliação funcional obrigatória (rastreio para Cushing subclínico, feocromocitoma com metanefrinas e, se hipertenso, hiperaldosteronismo) **antes** de qualquer decisão sobre a massa em si; avaliação de características radiológicas de malignidade (tamanho >4cm, densidade em unidades Hounsfield na TC sem contraste, padrão de washout de contraste).
- **Tratamento:** seguimento com imagem seriada se não funcionante e sem características de malignidade; cirurgia se funcionante, de crescimento rápido ou com características suspeitas de malignidade.
- ⚠️ **Pitfall:** decidir entre seguimento e cirurgia só pelo tamanho da lesão, sem completar a avaliação funcional — um incidentaloma pequeno mas hiperfuncionante (Cushing subclínico, por exemplo) muda a conduta mesmo sem critério radiológico de malignidade.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Hiperplasia adrenal congênita (forma clássica)

- **Quando suspeitar:** deficiência de 21-hidroxilase — genitália ambígua em recém-nascida do sexo feminino (virilização por excesso de andrógenos) ou crise perdedora de sal nas primeiras semanas de vida (hipotensão, hiponatremia, hiperpotassemia) em recém-nascido de qualquer sexo.
- **Diagnóstico:** 17-hidroxiprogesterona elevada (substrato acumulado antes do bloqueio enzimático).
- **Tratamento:** reposição de glicocorticoide (e mineralocorticoide na forma perdedora de sal) vitalícia, com ajuste de dose conforme crescimento e puberdade.
- 📝 **Como caiu:** ainda não cobrado no corpus — mencionado para completude do espectro adrenal, menor probabilidade de cobrança numa prova de residência voltada a adultos.

## 📋 Tabela

**Insuficiência adrenal — primária vs. terciária**

| Achado | Primária (Addison) | Terciária (retirada de corticoide) |
|---|---|---|
| ACTH | Elevado | Baixo/normal |
| Hiperpigmentação | Presente | Ausente |
| Hiperpotassemia | Presente | Ausente/discreta |
| Mineralocorticoide | Comprometido | Preservado |
| Reposição | Gliço + mineralocorticoide vitalícia | Glicocorticoide até recuperação do eixo |

## 📚 Referências essenciais

- Endocrine Society Clinical Practice Guideline — Primary Aldosteronism: Case Detection, Diagnosis, and Treatment.
- Endocrine Society Clinical Practice Guideline — Pheochromocytoma and Paraganglioma.
- Williams Textbook of Endocrinology — capítulos sobre córtex e medula adrenal.
`;

export default content.trim();
