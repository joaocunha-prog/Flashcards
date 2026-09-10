/**
 * Resumo — Oftalmologia · Olho vermelho.
 *
 * Reorganizado por entidade clínica (cada causa de olho vermelho tem sua
 * própria seção com quadro clínico, diagnóstico, tratamento, pearl e
 * pitfall juntos) — "olho vermelho" é por definição um assunto guarda-chuva
 * de diferencial diagnóstico, reunindo causas benignas e emergências
 * oftalmológicas que se confundem clinicamente entre si.
 *
 * Cobre a questão real do corpus (ENARE 2026 Q66 — ceratite bacteriana em
 * usuária de lente de contato de uso prolongado, com dor intensa,
 * fotofobia, secreção purulenta e ponto branco opaco na córnea). Assunto
 * de baixa incidência no banco (1 questão, cauda longa, fora do corte
 * 80/20), mas o restante do resumo é extrapolado com profundidade de alto
 * rendimento cobrindo todo o diferencial clássico de olho vermelho:
 * conjuntivites, uveíte anterior, glaucoma agudo de ângulo fechado,
 * hemorragia subconjuntival e episclerite/esclerite.
 */
const content = `
## 🎯 Essencial

- **Olho vermelho é um sintoma, não um diagnóstico** — o diferencial vai de causas benignas e autolimitadas (hemorragia subconjuntival, conjuntivite viral leve) a emergências que ameaçam a visão (ceratite bacteriana, glaucoma agudo de ângulo fechado, uveíte anterior grave, endoftalmite).
- **Os sinais de alarme que exigem avaliação oftalmológica urgente** são: dor intensa (não apenas desconforto/ardência), fotofobia importante, redução da acuidade visual, secreção purulenta abundante, opacidade/mancha visível na córnea, hiperemia perilimbar mais intensa que periférica ("ciliary flush"), pupila anormal (miose fixa dolorosa ou midríase fixa) e história de trauma ou uso de lente de contato.
- **Usuária de lente de contato com dor ocular intensa + secreção purulenta + opacidade corneana é ceratite bacteriana até prova em contrário** — é uma emergência oftalmológica (risco de perfuração corneana e perda visual permanente em horas a poucos dias) que exige encaminhamento imediato, nunca manejo isolado na atenção primária com colírio antibiótico genérico.
- **Conjuntivite bacteriana/viral típica não causa dor intensa nem redução relevante da acuidade visual** — presença desses dois achados praticamente exclui conjuntivite simples como diagnóstico isolado e obriga a buscar outra causa mais grave.
- **A tríade "dor + fotofobia + hiperemia perilimbar (ciliary flush)"** é compartilhada por ceratite, uveíte anterior e glaucoma agudo de ângulo fechado — a diferenciação entre esses três depende de outros achados-chave: aspecto da córnea (opacidade focal na ceratite), tamanho/reatividade pupilar (miose na uveíte, midríase média fixa e não reativa no glaucoma agudo) e pressão intraocular.

## 🔹 Ceratite bacteriana

- **Fator de risco clássico:** uso de lente de contato (especialmente uso prolongado/overnight, higiene inadequada) — principal causa de ceratite bacteriana em adultos jovens saudáveis; outros fatores incluem trauma corneano, olho seco grave e uso crônico de corticoide tópico.
- **Quadro:** dor intensa de início agudo, não aliviada por analgésicos comuns, fotofobia marcante, secreção purulenta, hiperemia perilimbar (ciliary flush), redução da acuidade visual, opacidade/infiltrado corneano visível (mancha branca opaca) — pode haver miose reacional e diminuição do reflexo pupilar pela dor/inflamação.
- **Agentes mais comuns:** *Pseudomonas aeruginosa* (especialmente associada a lentes de contato — evolução particularmente rápida e agressiva), *Staphylococcus aureus*, *Streptococcus pneumoniae*.
- **Conduta:** encaminhamento oftalmológico de **emergência** — diagnóstico com lâmpada de fenda, coleta de material corneano para cultura antes de iniciar antibiótico (quando possível, sem atrasar o início do tratamento em casos graves), e início imediato de **antibiótico tópico intensivo** (colírio fortificado ou fluoroquinolona de amplo espectro em altíssima frequência nas primeiras 24-48h).
- 💎 **Pearl:** suspender o uso de lente de contato imediatamente diante de qualquer dor ocular — é a orientação de prevenção mais simples e mais frequentemente negligenciada por usuários.
- ⚠️ **Pitfall:** tratar como conjuntivite bacteriana comum e prescrever apenas colírio antibiótico ambulatorial sem encaminhamento urgente — atraso no tratamento intensivo correto pode levar a perfuração corneana e perda visual permanente.
- 📝 **Como caiu:** ENARE 2026 Q66 — vinheta completa e clássica (usuária de lente de contato, dor intensa, fotofobia, secreção purulenta, opacidade corneana, ciliary flush).

## 🔹 Conjuntivite bacteriana

- **Quadro:** hiperemia conjuntival difusa (mais periférica que perilimbar), secreção purulenta/mucopurulenta que reacumula rapidamente após limpeza (pálpebras "grudadas" ao acordar), geralmente bilateral ou iniciando unilateral com disseminação para o outro olho em poucos dias, **sem** dor intensa, fotofobia importante ou redução de acuidade visual.
- **Conduta:** colírio antibiótico tópico de amplo espectro (ex.: fluoroquinolona ou aminoglicosídeo), medidas de higiene para evitar disseminação (lavagem de mãos, não compartilhar toalhas/travesseiros).
- ⚠️ **Pitfall:** rotular todo olho vermelho com secreção como "conjuntivite bacteriana" sem avaliar dor, fotofobia e acuidade visual — é o erro mais cobrado no diferencial de olho vermelho, e foi justamente o distrator da questão real do corpus.
- 📝 **Como caiu:** citada como distrator na questão real de ceratite bacteriana (ENARE 2026 Q66).

## 🔹 Conjuntivite viral

- **Quadro:** hiperemia difusa, secreção serosa/aquosa (não purulenta franca), linfadenopatia pré-auricular palpável (achado bastante sugestivo), frequentemente com pródromo de infecção de vias aéreas superiores, altamente contagiosa (adenovírus é o agente mais comum).
- **Conduta:** medidas de suporte (compressa fria, lubrificante ocular), autolimitada em 1-2 semanas; orientação rigorosa de higiene pela alta contagiosidade.
- 💎 **Pearl:** ceratoconjuntivite epidêmica por adenovírus pode deixar infiltrados corneanos subepiteliais residuais (visão de halos), mas isso não configura ceratite bacteriana.

## 🔹 Conjuntivite alérgica

- **Quadro:** prurido ocular intenso (sintoma cardinal, mais do que dor), hiperemia bilateral, secreção aquosa/mucoide filamentosa, edema conjuntival (quemose), frequentemente associada a rinite alérgica/atopia.
- **Conduta:** anti-histamínico tópico e/ou estabilizador de mastócitos, compressa fria, afastar alérgeno quando identificável; evitar uso prolongado de corticoide tópico sem acompanhamento oftalmológico.
- 💎 **Pearl:** prurido como sintoma predominante é o achado mais discriminativo para diferenciar de causas infecciosas.

## 🔹 Uveíte anterior (irite)

- **Quadro:** dor ocular moderada a intensa, fotofobia (inclusive fotofobia consensual — dor no olho afetado ao iluminar o olho contralateral, achado bastante específico), hiperemia perilimbar (ciliary flush), visão turva, **miose** e pupila com reação lenta/irregular.
- **Diagnóstico:** exame com lâmpada de fenda mostrando células e flare na câmara anterior (proteína e leucócitos suspensos no humor aquoso); investigar causas sistêmicas associadas (espondiloartropatias, sarcoidose, doença inflamatória intestinal, infecções — sífilis, tuberculose, herpes) especialmente em quadros recorrentes ou bilaterais.
- **Conduta:** encaminhamento oftalmológico urgente — corticoide tópico e cicloplégico (para alívio da dor por espasmo ciliar e prevenção de sinéquias), sempre sob supervisão oftalmológica (corticoide tópico não deve ser iniciado empiricamente sem excluir ceratite infecciosa antes).
- ⚠️ **Pitfall:** prescrever corticoide tópico empírico para "olho vermelho doloroso" sem excluir ceratite infecciosa antes — corticoide piora dramaticamente uma ceratite herpética ou bacteriana não diagnosticada.

## 🔹 Glaucoma agudo de ângulo fechado

- **Quadro:** dor ocular intensa de início súbito, cefaleia ipsilateral, náusea/vômito (pode simular quadro abdominal agudo ou migrânea), halos coloridos ao redor de luzes, hiperemia perilimbar, **córnea com edema/aspecto turvo**, **pupila em midríase média, fixa e não reativa** — olho endurecido à palpação (pressão intraocular muito elevada).
- **Fatores de risco:** hipermetropia, câmara anterior rasa, idade avançada, ambiente com pouca luz (midríase fisiológica), uso de medicações com efeito anticolinérgico/midriático.
- **Conduta:** emergência oftalmológica — redução imediata da pressão intraocular (acetazolamida sistêmica, colírios hipotensores, agente hiperosmótico se necessário) seguida de **iridotomia a laser** definitiva (bilateral, já que o olho contralateral tem risco elevado pela mesma anatomia predisponente).
- ⚠️ **Pitfall:** confundir com enxaqueca ou quadro gastrointestinal agudo pela náusea/vômito proeminente, atrasando o reconhecimento da emergência oftalmológica.

## 🔹 Hemorragia subconjuntival

- **Quadro:** área de hiperemia bem demarcada, vermelho-vivo, homogênea, **sem dor, sem secreção e sem alteração de acuidade visual** — geralmente achado incidental ou após esforço (tosse, vômito, manobra de Valsalva), trauma leve ou uso de anticoagulante/antiagregante.
- **Conduta:** tranquilização e observação — resolve espontaneamente em 1-2 semanas sem tratamento específico; investigar coagulopatia ou hipertensão arterial não controlada se recorrente ou espontânea sem fator precipitante claro.
- 💎 **Pearl:** a ausência completa de dor e de alteração visual é o que mais tranquiliza e diferencia de todas as outras causas de olho vermelho listadas aqui.

## 🔹 Episclerite e esclerite

- **Episclerite:** hiperemia setorial, desconforto leve (não dor intensa), sem fotofobia relevante, autolimitada, por vezes recorrente — associação ocasional com doenças autoimunes sistêmicas, mas frequentemente idiopática.
- **Esclerite:** dor profunda e intensa (classicamente descrita como a pior dor ocular entre as causas de olho vermelho, podendo irradiar para face/cabeça e acordar o paciente à noite), hiperemia com tonalidade violácea, dolorosa à palpação do globo ocular — fortemente associada a doença autoimune sistêmica (artrite reumatoide, granulomatose com poliangiite, entre outras) e exige investigação reumatológica.
- 💎 **Pearl:** o teste da fenilefrina tópica ajuda a diferenciar — a hiperemia da episclerite costuma clarear (vasoconstrição dos vasos episclerais superficiais), enquanto a da esclerite (vasos mais profundos) não.

## 📋 Tabela

**Diferencial de olho vermelho por achados-chave**

| Entidade | Dor | Fotofobia | Pupila | Secreção | Urgência |
|---|---|---|---|---|---|
| Conjuntivite bacteriana/viral | Ausente/leve | Ausente | Normal | Purulenta (bacteriana) / serosa (viral) | Baixa |
| Conjuntivite alérgica | Ausente (prurido predomina) | Ausente | Normal | Aquosa/mucoide | Baixa |
| Ceratite bacteriana | Intensa | Intensa | Miose reacional | Purulenta | Emergência |
| Uveíte anterior | Moderada-intensa | Intensa (inclusive consensual) | Miose, irregular | Ausente | Urgente |
| Glaucoma agudo de ângulo fechado | Intensa + cefaleia/náusea | Presente | Midríase média fixa | Ausente | Emergência |
| Hemorragia subconjuntival | Ausente | Ausente | Normal | Ausente | Nenhuma |
| Esclerite | Intensa, profunda | Variável | Normal | Ausente | Urgente (investigar causa sistêmica) |

## 📚 Referências essenciais

- American Academy of Ophthalmology (AAO) — Preferred Practice Pattern para Ceratite Bacteriana e para Conjuntivite.
- American Academy of Ophthalmology (AAO) — Preferred Practice Pattern para Glaucoma Primário de Ângulo Fechado.
`;

export default content.trim();
