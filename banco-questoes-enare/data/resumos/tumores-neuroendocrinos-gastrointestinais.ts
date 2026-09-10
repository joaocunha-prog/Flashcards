/**
 * Resumo — Gastroenterologia e Hepatologia · Tumores neuroendócrinos
 * gastrointestinais.
 *
 * Reorganizado por entidade clínica (cada tumor funcionante tem síndrome,
 * hormônio e conduta próprios) — a questão real do corpus cobra a síndrome
 * de Zollinger-Ellison/gastrinoma, com foco no hormônio liberado (gastrina).
 * Assunto de baixa incidência no banco (1 questão), mas tumores
 * neuroendócrinos gastroenteropancreáticos (GEP-NET) são tema clássico e
 * recorrente de prova de residência em gastroenterologia e endocrinologia.
 */
const content = `
## 🎯 Essencial

- **Tumores neuroendócrinos gastrointestinais (GEP-NET)** derivam de células do sistema neuroendócrino difuso do trato gastroenteropancreático — podem ser **funcionantes** (secretam hormônio/amina ativa, causando síndrome clínica específica) ou **não funcionantes** (crescem silenciosamente, diagnosticados por efeito de massa ou achado incidental).
- **Cada síndrome funcionante tem um hormônio/amina assinatura:** gastrina (gastrinoma/Zollinger-Ellison), insulina (insulinoma), serotonina/outras aminas vasoativas (tumor carcinoide/síndrome carcinoide), peptídeo intestinal vasoativo — VIP (VIPoma), glucagon (glucagonoma), somatostatina (somatostatinoma) — a chave de prova é sempre associar sintoma cardinal → hormônio → tumor.
- **Marcador tumoral geral de tumor neuroendócrino:** cromogranina A sérica elevada, independentemente do subtipo funcionante ou não.
- **Grau histológico (Ki-67 e contagem mitótica) é o principal determinante prognóstico**, mais até do que o tamanho tumoral isolado — a classificação da OMS separa tumores neuroendócrinos bem diferenciados (G1, G2, G3) de carcinomas neuroendócrinos pouco diferenciados (comportamento muito mais agressivo).
- **Localização em intestino delgado e apêndice** favorece tumor carcinoide (serotonina); **localização pancreática** favorece gastrinoma, insulinoma, VIPoma, glucagonoma e somatostatinoma.

## 🔹 Gastrinoma — Síndrome de Zollinger-Ellison

- **Fisiopatologia:** tumor neuroendócrino não-beta, geralmente bem diferenciado, que secreta **gastrina** de forma autônoma — a hipergastrinemia estimula hiperplasia de células parietais e hipersecreção maciça e contínua de ácido gástrico, muito além do controle fisiológico normal.
- **Localização típica:** "triângulo do gastrinoma" (junção do colo/corpo do pâncreas com a 2ª/3ª porção duodenal e o hilo hepático) — cerca de metade dos casos é duodenal, o restante pancreático; até 25% dos casos estão associados à **síndrome NEM-1** (neoplasia endócrina múltipla tipo 1 — hiperparatireoidismo primário + tumor de hipófise + tumor neuroendócrino pancreático), o que deve ser sempre rastreado ao diagnóstico.
- **Quadro clínico:** doença ulcerosa péptica **grave, múltipla, recorrente e refratária** ao tratamento habitual, frequentemente em localização atípica (além do bulbo duodenal — segunda/terceira porção duodenal, jejuno); diarreia crônica (por inativação de enzimas pancreáticas pelo excesso de ácido e por lesão da mucosa intestinal) é achado associado importante, podendo melhorar com o uso de inibidor de bomba de prótons.
- **Diagnóstico:** **gastrina sérica em jejum muito elevada** (classicamente >1.000 pg/mL já é praticamente diagnóstico; valores intermediários exigem teste provocativo de secretina, que paradoxalmente **aumenta** a gastrina no gastrinoma, ao contrário da resposta fisiológica normal de supressão) — deve ser medida com o paciente **fora de uso de inibidor de bomba de prótons** por tempo adequado, já que essas drogas elevam a gastrina secundariamente e podem gerar falso-positivo. pH gástrico baixo (<2) na vigência de gastrina elevada reforça o diagnóstico (exclui hipergastrinemia secundária à acloridria, como na gastrite atrófica autoimune).
- **Localização tumoral:** cintilografia de receptores de somatostatina (octreoscan) ou PET com análogos de somatostatina (ex.: Ga-68 DOTATATE) — os tumores neuroendócrinos costumam expressar receptores de somatostatina em alta densidade, o que também guia o tratamento com análogos.
- **Tratamento:** inibidor de bomba de prótons em altas doses controla a hipersecreção ácida; ressecção cirúrgica do tumor primário quando localizável e sem doença metastática extensa é a única chance de cura; análogos de somatostatina (octreotide, lanreotide) para controle sintomático/antiproliferativo em doença avançada/metastática.
- 💎 **Pearl:** a tríade clássica de prova é **úlcera péptica refratária/múltipla/atípica + diarreia + gastrina muito elevada** — qualquer um desses três elementos isolado tem diferencial amplo, mas a combinação aponta fortemente para Zollinger-Ellison.
- ⚠️ **Pitfall:** dosar gastrina sérica **em uso de inibidor de bomba de prótons** sem suspender antes — pode gerar hipergastrinemia falsamente elevada e levar a diagnóstico incorreto.
- 📝 **Como caiu:** ENARE 2025 Q80 — reconhecimento do hormônio liberado (gastrina) no contexto de tumor neuroendócrino não-beta causando úlcera péptica grave.

## 🔹 Tumor carcinoide e síndrome carcinoide

- **Localização típica:** apêndice e íleo terminal são os sítios mais comuns de tumor carcinoide primário no trato gastrointestinal.
- **Síndrome carcinoide:** ocorre classicamente **apenas quando há metástase hepática** (ou tumor primário com drenagem venosa sistêmica direta, ex.: carcinoide brônquico) — porque só assim a serotonina e outras aminas vasoativas secretadas pelo tumor escapam do metabolismo de primeira passagem hepático e atingem a circulação sistêmica em concentração suficiente para causar sintomas.
- **Quadro clínico:** flushing (rubor facial/cervical episódico), diarreia secretora, broncoespasmo, e a longo prazo **doença cardíaca carcinoide** (fibrose de valvas cardíacas direitas — tricúspide e pulmonar — pela exposição crônica à serotonina, já que o pulmão metaboliza a serotonina antes de alcançar o coração esquerdo, poupando-o classicamente).
- **Diagnóstico:** ácido 5-hidroxiindolacético (5-HIAA) urinário de 24 horas elevado (metabólito da serotonina); cromogranina A sérica elevada.
- **Tratamento:** análogos de somatostatina (octreotide) controlam sintomas e têm efeito antiproliferativo; ressecção cirúrgica quando possível; evitar fatores precipitantes de crise carcinoide (álcool, estresse, manipulação tumoral sem cobertura de octreotide perioperatório).
- 💎 **Pearl:** deficiência de **niacina (vitamina B3)** pode ocorrer na síndrome carcinoide avançada, porque o tumor consome triptofano (precursor tanto de serotonina quanto de niacina) em excesso para produzir serotonina, desviando o substrato — pode cursar com quadro semelhante à pelagra.

## 🔹 Insulinoma

- **Quadro clínico:** tríade de Whipple — sintomas de hipoglicemia (neuroglicopênicos e adrenérgicos), glicemia documentada baixa durante os sintomas, e melhora dos sintomas com a correção da glicemia — classicamente em **jejum prolongado** (ao contrário da hipoglicemia pós-prandial de outras causas).
- **Diagnóstico:** teste de jejum prolongado (até 72h) com dosagens seriadas de glicemia, insulina, peptídeo-C e proinsulina — insulina e peptídeo-C **inapropriadamente elevados** durante a hipoglicemia espontânea confirmam produção endógena excessiva de insulina.
- ⚠️ **Pitfall:** não diferenciar insulinoma de hipoglicemia factícia por uso exógeno de insulina — nesse caso o peptídeo-C fica **suprimido** (porque a insulina exógena não vem acompanhada de peptídeo-C), ao contrário do insulinoma, em que ambos sobem juntos.
- **Tratamento:** ressecção cirúrgica é curativa na maioria dos casos (tumor geralmente pequeno, único, benigno).

## 🔹 Outros tumores funcionantes raros

- **VIPoma (síndrome de Verner-Morrison):** diarreia aquosa profusa e secretora, hipocalemia, acloridria — mnemônico "WDHA" (watery diarrhea, hypokalemia, achlorhydria).
- **Glucagonoma:** eritema necrolítico migratório (rash característico), diabetes mellitus de início tardio, perda de peso, glossite; risco elevado de trombose venosa associada.
- **Somatostatinoma:** tríade de diabetes mellitus, colelitíase e esteatorreia — raro, frequentemente diagnóstico tardio por sintomas inespecíficos.

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus (apenas 1 questão real, ENARE 2025 Q80, classificada como FÁCIL)** — ficou fora do corte 80/20. Ainda assim, tumores neuroendócrinos gastrointestinais — sobretudo gastrinoma/Zollinger-Ellison — são tema clássico de prova de residência em gastroenterologia e endocrinologia, com alto potencial de reaparecer, inclusive testando outras entidades da mesma família (carcinoide, insulinoma) não cobertas ainda neste banco específico.

- **ENARE 2025 Q80** apresentou uma paciente jovem com dor epigástrica crônica e úlcera péptica grave à endoscopia, testando diretamente a associação **síndrome de Zollinger-Ellison → gastrinoma → hormônio gastrina** entre distratores de outros hormônios gastrointestinais plausíveis (colecistocinina, somatostatina, secretina, peptídeo YY) — o padrão de cobrança é reconhecimento direto da fisiopatologia hormonal, sem exigir ainda o raciocínio mais fino de diagnóstico laboratorial (gastrina sérica, teste de secretina) ou de localização tumoral.

## 📚 Referências essenciais

- NANETS (North American Neuroendocrine Tumor Society) — Consensus Guidelines for the Diagnosis and Management of Neuroendocrine Tumors.
- ENETS (European Neuroendocrine Tumor Society) — Guidelines para tumores neuroendócrinos gastroenteropancreáticos.
- Classificação da OMS (WHO) para tumores neuroendócrinos do sistema digestivo — gradação por Ki-67/índice mitótico.
`;

export default content.trim();
