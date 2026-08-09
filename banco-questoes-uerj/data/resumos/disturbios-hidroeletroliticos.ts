/**
 * Resumo — Nefrologia · Distúrbios hidroeletrolíticos.
 *
 * Cobre as entidades do assunto no corpus: distúrbios do magnésio e do
 * fósforo (síndrome de realimentação, hipomagnesemia por IBP),
 * hipernatremia (diabetes insipidus nefrogênico), e hipopotassemia
 * (síndrome de Liddle, alcalose metabólica por vômitos ocultos).
 */
const content = `
## 🎯 Essencial

- **Hipofosfatemia grave é a marca da síndrome de abstinência alcoólica/realimentação** — em paciente etilista internado que evolui com confusão, fraqueza muscular, disfunção cardíaca e convulsão nos primeiros dias de internação (frequentemente sob nutrição/glicose), pense em **hipofosfatemia por síndrome de realimentação**, não apenas em abstinência isolada.
- **Hipernatremia com osmolalidade urinária baixa que NÃO responde à desmopressina** = **diabetes insipidus nefrogênico** (o rim não responde ao ADH, mesmo exógeno); se respondesse, seria central. **Lítio** é a causa medicamentosa clássica.
- **Hipopotassemia + hipertensão + aldosterona E renina baixas (ambas suprimidas)** = **síndrome de Liddle** — mutação que ativa constitutivamente o canal de sódio epitelial (ENaC), simulando hiperaldosteronismo sem que a aldosterona esteja de fato elevada. Tratamento específico: **amilorida** (bloqueia diretamente o ENaC), não espironolactona (que age no receptor de mineralocorticoide, inútil aqui pois o problema é distal a ele).
- **Diferencie síndrome de Liddle (aldosterona E renina baixas) de hiperaldosteronismo primário (aldosterona alta, renina baixa)** — o padrão hormonal completo, não só a hipocalemia com hipertensão, é o que fecha o diagnóstico.
- **Hipopotassemia + alcalose metabólica + cloro urinário BAIXO + sódio urinário baixo** aponta para causa **extrarrenal de perda de volume** (vômitos ocultos/bulimia, uso sub-reptício de diuréticos já eliminado) — o rim está reabsorvendo ativamente sódio e cloro na tentativa de repor volume perdido.
- **Bulimia nervosa é diagnóstico a considerar em jovem com hipopotassemia + alcalose metabólica + hipocloremia sem causa aparente**, especialmente com CPK elevada (vômitos repetidos, uso de diuréticos/laxantes) — o cloro urinário baixo é o achado que aponta para perda extrarrenal (gástrica) em vez de renal.
- **Hipomagnesemia causa hipocalcemia refratária à reposição de cálcio** — o magnésio é cofator necessário para a secreção (e ação periférica) do PTH; sem corrigir o magnésio, a hipocalcemia não responde a cálcio nem melhora o PTH, mesmo com PTH indetectável simulando hipoparatireoidismo.
- **Inibidor de bomba de prótons em uso prolongado é causa reconhecida de hipomagnesemia** — mecanismo ainda não totalmente elucidado, mas bem documentado clinicamente, e deve ser lembrado diante de hipocalcemia refratária em usuário crônico de IBP.

## 💎 Pearls

- **A síndrome de realimentação clássica cursa com hipofosfatemia, hipocalemia e hipomagnesemia simultâneas** — a reintrodução de carboidratos após jejum prolongado dispara secreção de insulina, que desloca esses três eletrólitos para dentro da célula em massa.
- **CK elevada acompanhando hipofosfatemia grave reflete rabdomiólise** — o fósforo é essencial para a produção de ATP muscular; sua depleção grave compromete a integridade da fibra muscular.
- **A osmolalidade urinária reduzida que não sobe com desmopressina** é o teste funcional que distingue diabetes insipidus nefrogênico (não responde) de central (responde bem, concentrando a urina).
- **Síndrome de Liddle é hereditária (autossômica dominante)** — história familiar de hipertensão de início precoce e hipocalemia em jovem sem outra causa aparente reforça a suspeita.
- **O cloro urinário é a ferramenta mais subestimada na investigação de alcalose metabólica hipocalêmica** — cloro urinário baixo (<20 mEq/L) sugere causa "cloro-sensível" (vômitos, uso prévio de diurético, perda gástrica); cloro urinário alto sugere causa "cloro-resistente" (hiperaldosteronismo, Liddle, uso atual de diurético, síndrome de Bartter/Gitelman).
- **Hipomagnesemia sintomática (tetania, parestesias, espasmo do carpo) pode ocorrer mesmo com cálcio "só moderadamente baixo"** — o mecanismo de hipoparatireoidismo funcional pelo magnésio baixo agrava desproporcionalmente os sintomas.

## ⚠️ Pitfalls

- **Repor cálcio agressivamente em hipocalcemia refratária sem dosar magnésio** — a hipocalcemia por hipomagnesemia não corrige com cálcio isolado; é preciso corrigir o magnésio primeiro (ou concomitantemente) para que o PTH volte a funcionar.
- **Usar espironolactona na síndrome de Liddle** — ineficaz, porque o defeito está no canal ENaC, distal ao receptor de mineralocorticoide onde a espironolactona age; a droga correta é amilorida (ou triantereno), que bloqueia diretamente o canal hiperativo.
- **Confundir síndrome de Liddle com hiperaldosteronismo primário** só pela combinação hipertensão + hipocalemia — checar a aldosterona (baixa em Liddle, alta em hiperaldosteronismo) é obrigatório antes de tratar.
- **Diagnosticar diabetes insipidus central em paciente que não responde à desmopressina** — ausência de resposta define a forma nefrogênica, não central; tratar como central (repondo apenas desmopressina) não vai funcionar.
- **Não pensar em causa oculta (bulimia, uso escondido de diurético/laxante) diante de hipocalemia inexplicada em paciente jovem magra ou com transtorno alimentar suspeito** — o eletrólito urinário (cloro/sódio baixos) é a pista objetiva que direciona a investigação nesse cenário sensível.
- **Ignorar IBP como causa de hipomagnesemia** só porque "é um medicamento comum e seguro" — a associação é bem documentada e deve entrar na lista de causas reversíveis antes de investigação extensa.

## 📝 Como a UERJ cobra

**Distúrbios hidroeletrolíticos é #18 do ranking (5 questões, 2,0% do corpus)**, com vinhetas que exigem **interpretação simultânea de múltiplos eletrólitos e do eletrólito urinário**, não apenas reconhecer "o eletrólito está baixo/alto".

- **Distúrbios do magnésio e do fósforo** apareceu 2 vezes (2021 Q34, 2025 Q37) — a primeira em contexto de abstinência alcoólica/realimentação (hipofosfatemia), a segunda em hipocalcemia refratária por IBP (hipomagnesemia) — ambas exigem reconhecer o eletrólito "escondido" por trás de uma manifestação de outro eletrólito.
- **Hipopotassemia** apareceu 2 vezes (2024 Q3, 2024 Q34), uma testando **síndrome de Liddle** (raciocínio sobre o eixo renina-aldosterona) e outra testando **causa extrarrenal oculta** (bulimia, pelo cloro urinário) — ambas de alto grau de dificuldade, cobrando interpretação fina, não reconhecimento direto.
- **Hipernatremia** (2023 Q32) testou o **diabetes insipidus nefrogênico por lítio**, com o teste de resposta à desmopressina como ferramenta central de raciocínio.

## 🆕 Atualização

- O uso de **fósforo, magnésio e potássio séricos de rotina antes de iniciar realimentação** em pacientes de risco (desnutrição grave, etilismo crônico, jejum prolongado) é hoje recomendação padronizada em protocolos de síndrome de realimentação, com reposição profilática antes mesmo de haver hipofosfatemia estabelecida — mudança de ênfase de "tratar quando aparecer" para "prevenir antes que apareça".
- A associação entre **uso crônico de IBP e hipomagnesemia** levou a alertas de segurança de agências regulatórias, recomendando monitorização de magnésio em uso prolongado (especialmente combinado a diuréticos ou digoxina, que amplificam o risco de arritmia associado à hipomagnesemia).
- O entendimento molecular da **síndrome de Liddle** (mutação no gene que codifica subunidades do ENaC) e de outras tubulopatias hereditárias (Bartter, Gitelman) vem se refinando, mas o racional diagnóstico clínico-laboratorial (eixo renina-aldosterona + eletrólitos urinários) permanece a ferramenta prática central, exatamente o que a banca já cobra.

## 🧠 Conceito e fisiopatologia

**Síndrome de realimentação** ocorre quando a reintrodução de carboidratos após jejum prolongado dispara secreção maciça de insulina, que estimula o transporte celular de fósforo, magnésio e potássio para dentro das células (junto com a glicose) — em um paciente com estoques corporais totais já depletados pelo jejum prévio, essa translocação aguda causa quedas séricas graves e súbitas desses três eletrólitos, com consequências neuromusculares e cardíacas potencialmente fatais.

**Diabetes insipidus nefrogênico** ocorre quando os túbulos coletores renais perdem a capacidade de responder ao ADH (hormônio antidiurético) — por dano tubular direto (lítio é a causa medicamentosa mais clássica, interferindo na sinalização intracelular do receptor de ADH) ou por defeitos genéticos do próprio receptor/aquaporina. Sem resposta tubular, a urina permanece diluída independentemente da quantidade de ADH circulante (endógeno ou exógeno via desmopressina), explicando por que o teste de resposta à desmopressina não eleva a osmolalidade urinária nessa condição.

**Síndrome de Liddle** decorre de mutação de ganho de função em subunidades do canal epitelial de sódio (ENaC) no túbulo coletor, que passa a permanecer constitutivamente aberto independentemente da regulação normal pela aldosterona — o resultado é reabsorção excessiva de sódio (com expansão de volume e hipertensão) e secreção excessiva de potássio e hidrogênio (hipocalemia e alcalose metabólica), mimetizando clinicamente o hiperaldosteronismo, mas com aldosterona e renina ambas suprimidas pela retroalimentação negativa da expansão de volume — sem que a aldosterona tenha, de fato, qualquer papel causal.

**Perda extrarrenal de ácido gástrico** (vômitos repetidos, sondagem nasogástrica) causa alcalose metabólica hipoclorêmica e hipocalêmica: a perda de ácido clorídrico gera alcalose diretamente, e a hipovolemia resultante ativa o sistema renina-angiotensina-aldosterona, que promove troca de sódio por potássio e hidrogênio no néfron distal, agravando tanto a hipocalemia quanto a alcalose (alcalose "mantida" pela contração de volume). O rim, tentando reter sódio e cloro para repor o volume perdido, reduz sua excreção urinária — daí o cloro urinário baixo característico dessa etiologia.

**Hipomagnesemia** compromete a secreção de PTH pelas paratireoides (o magnésio é cofator essencial na via de sinalização que libera o hormônio) e também reduz a sensibilidade periférica à ação do PTH — o resultado funcional é um estado de hipoparatireoidismo relativo, com PTH baixo/inapropriadamente normal e hipocalcemia que não corrige até que o magnésio seja reposto.

## 🩺 Quadro clínico

- **Hipofosfatemia grave:** fraqueza muscular, confusão, disfunção cardíaca, rabdomiólise, convulsão em casos extremos.
- **Diabetes insipidus nefrogênico:** poliúria importante, polidipsia, hipernatremia se o acesso à água for restrito.
- **Síndrome de Liddle:** hipertensão de início precoce e refratária, fraqueza muscular (hipocalemia), história familiar positiva.
- **Hipocalemia por perda gástrica oculta:** fraqueza muscular (podendo chegar a tetraparesia em casos graves), sinais de desidratação/hipovolemia leve, sem os sinais clássicos de hiperaldosteronismo.
- **Hipomagnesemia:** parestesias, espasmo do carpo, irritabilidade neuromuscular, arritmias em casos graves.

## 🔎 Diagnóstico

- **Síndrome de realimentação:** dosagem seriada de fósforo, magnésio e potássio nos primeiros dias de reintrodução alimentar em paciente de risco, idealmente antes do início dos sintomas.
- **Hipernatremia por DI nefrogênico:** osmolalidade urinária baixa + ausência de resposta (elevação <50%) após administração de desmopressina.
- **Síndrome de Liddle:** aldosterona e renina séricas, ambas baixas/suprimidas, em paciente hipertenso hipocalêmico; teste terapêutico com amilorida como confirmação funcional.
- **Hipocalemia com alcalose metabólica:** cloro e sódio urinários (baixos na perda extrarrenal/gástrica oculta; altos nas causas renais como Liddle, hiperaldosteronismo, uso atual de diurético).
- **Hipocalcemia refratária:** dosagem de magnésio sérico sempre que a reposição de cálcio não corrige o quadro e o PTH permanece inapropriadamente baixo/indetectável.

## 🚨 Gravidade / classificação

- **Hipofosfatemia <1 mg/dL** é considerada grave e associa-se a risco real de rabdomiólise, disfunção cardíaca e insuficiência respiratória — exige reposição intravenosa monitorizada.
- **Hipomagnesemia sintomática** (tetania, arritmia) exige reposição intravenosa imediata, independentemente do valor absoluto.
- **Hipernatremia grave (>160 mEq/L) ou de instalação rápida** exige correção cuidadosa e gradual para evitar edema cerebral por correção excessivamente rápida.

## 💊 Tratamento

- **Síndrome de realimentação:** reposição profilática de fósforo, magnésio e potássio antes/durante a reintrodução calórica, com progressão calórica gradual (não abrupta) em pacientes de alto risco.
- **Diabetes insipidus nefrogênico:** correção/suspensão da causa (lítio, se possível); hidratação adequada; **tiazídico + restrição de sódio** paradoxalmente reduz o volume urinário nessa condição (por depleção de volume leve, que aumenta a reabsorção proximal de água); AINE pode ser adjuvante em casos selecionados.
- **Síndrome de Liddle:** **amilorida** (ou triantereno) — bloqueio direto do ENaC hiperativo; dieta hipossódica como adjuvante.
- **Hipocalemia por perda gástrica oculta:** reposição de potássio e volume, correção da causa de base (incluindo abordagem especializada do transtorno alimentar, quando aplicável).
- **Hipomagnesemia:** reposição de magnésio (intravenosa se sintomática ou grave, oral em casos leves), com reavaliação da necessidade de manter o IBP causador.

## 🔀 Diagnóstico diferencial

| Causa de hipocalemia + alcalose | Aldosterona | Renina | Cloro urinário |
| --- | --- | --- | --- |
| Síndrome de Liddle | Baixa | Baixa | Alto |
| Hiperaldosteronismo primário | Alta | Baixa | Alto |
| Vômitos/perda gástrica oculta | Alta (secundária) | Alta | **Baixo** |
| Diurético em uso atual | Alta (secundária) | Alta | Alto |

## 📋 Tabela de revisão

| Distúrbio | Achado-chave | Confirmação | Tratamento |
| --- | --- | --- | --- |
| Síndrome de realimentação | Hipofosfatemia + confusão + rabdomiólise | Dosagem seriada | Reposição de P/Mg/K |
| DI nefrogênico | Poliúria, osmolalidade urinária baixa | Sem resposta à desmopressina | Tiazídico + restrição de Na |
| Síndrome de Liddle | HAS + hipocalemia + aldosterona/renina baixas | Perfil hormonal | Amilorida |
| Perda gástrica oculta | Hipocalemia + alcalose + Cl urinário baixo | Eletrólito urinário | Reposição + tratar causa |
| Hipocalcemia por hipomagnesemia | Ca baixo refratário + PTH baixo | Magnésio sérico | Reposição de magnésio |

## 📚 Referências essenciais

- NICE Clinical Guideline — Nutrition Support and Refeeding Syndrome.
- KDIGO/UpToDate — Diagnostic Approach to Hypernatremia and Nephrogenic Diabetes Insipidus.
- OMIM — Liddle Syndrome (ENaC gain-of-function).
- Endocrine Society — Diagnosis and Treatment of Hypomagnesemia.
`;

export default content.trim();
