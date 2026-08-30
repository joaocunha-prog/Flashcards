/**
 * Resumo — Cardiologia · Doenças do pericárdio e miocárdio.
 *
 * Cobre as entidades do assunto no corpus: sarcoidose cardíaca de alto
 * risco (indicação de cardiodesfibrilador implantável) e cardiomiopatia
 * de Takotsubo (gatilho emocional/físico, disfunção transitória do
 * ventrículo esquerdo). O nome do assunto também abrange doenças do
 * pericárdio propriamente dito, que não apareceram em nenhuma questão do
 * corpus até agora — por isso a extrapolação de alto rendimento deste
 * resumo é organizada num bloco próprio, com sub-rótulo, cobrindo
 * pericardite aguda, tamponamento cardíaco e pericardite constritiva, sem
 * forçar uma ligação fisiopatológica com as duas cardiomiopatias já
 * cobradas.
 */
const content = `
## 🎯 Essencial

**Sarcoidose cardíaca**

- **Deve ser suspeitada** em paciente com sarcoidose sistêmica conhecida (ou achados extracardíacos sugestivos) que desenvolve **bloqueio atrioventricular inexplicado em jovem**, arritmia ventricular ou disfunção ventricular sem causa isquêmica.
- **Indicação de CDI (cardiodesfibrilador implantável):** FEVE reduzida significativa, história de taquicardia ventricular sustentada/parada cardíaca, ou indicação de marca-passo definitivo em paciente jovem com sarcoidose (substrato arritmogênico persistente mesmo com tratamento) — critérios de "alto risco" que pesam mais do que a gravidade da inflamação isolada.

**Cardiomiopatia de Takotsubo**

- **("coração partido"):** disfunção sistólica transitória do ventrículo esquerdo, tipicamente com **abaulamento apical (ballooning)**, desencadeada por **estresse emocional ou físico intenso**, predominando em **mulheres na pós-menopausa**.
- **Mimetiza síndrome coronariana aguda** (dor torácica, supra de ST, troponina elevada) mas as **coronárias são angiograficamente normais** — diagnóstico de exclusão após cateterismo.
- **Recuperação da função ventricular é a regra** (dias a semanas), mas a fase aguda tem risco real de complicações (choque cardiogênico, obstrução da via de saída do VE, arritmias).

**RM cardíaca (ferramenta comum às duas)**

- É a ferramenta central para sarcoidose cardíaca, mostrando realce tardio pelo gadolínio em padrão não isquêmico (mesocárdico/epicárdico), útil também no Takotsubo para diferenciar de miocardite (ausência de realce tardio transmural).

**Doenças do pericárdio (extrapolação — alto rendimento, ainda não cobrada)**

- **Pericardite aguda:** diagnóstico com ≥2 de 4 critérios — dor torácica pleurítica que melhora ao inclinar o tronco para frente, atrito pericárdico, supradesnível difuso de ST/infradesnível de PR no ECG, e derrame pericárdico novo/piorado.
- **Tamponamento cardíaco:** tríade de Beck (hipotensão, turgência jugular, bulhas abafadas) + pulso paradoxal (queda >10 mmHg da PA sistólica na inspiração) — emergência que exige pericardiocentese.
- **Pericardite constritiva:** sequela crônica de pericardite (viral, TB, pós-cirurgia cardíaca, radioterapia) com pericárdio espessado e não complacente, causando fisiologia restritiva com sinal de Kussmaul (aumento paradoxal da PVJ na inspiração).

## 💎 Pearls

- Na sarcoidose cardíaca, o **PET-CT com FDG** ajuda a identificar inflamação ativa (versus fibrose já estabelecida na RM), orientando decisão de imunossupressão versus dispositivo.
- **BAV total em paciente jovem sem causa aparente** é uma "bandeira vermelha" clássica para sarcoidose cardíaca — sempre pensar nela antes de rotular como idiopático.
- **Takotsubo pode ocorrer após gatilhos físicos** (cirurgia, sepse, AVC, crise asmática grave), não só emocionais — não restringir a suspeita a "luto" ou "susto".
- **ECG do Takotsubo evolui de forma parecida com IAM** (supra de ST inicial, depois inversão difusa de onda T e QT prolongado), o que reforça a necessidade de cateterismo para excluir doença coronariana obstrutiva.
- **Elevação de BNP desproporcional ao grau de troponina** é sugestiva (mas não definitiva) de Takotsubo frente a um IAM verdadeiro.
- **Colchicina associada ao AINE** na pericardite aguda reduz recorrência de forma comprovada — é conduta padrão, não opcional, salvo contraindicação.
- **Amiloidose cardíaca** é outro diferencial infiltrativo importante de disfunção ventricular/espessamento miocárdico — ao contrário da sarcoidose, cursa tipicamente com baixa voltagem no ECG apesar de parede espessada ao ecocardiograma ("dissociação eletromecânica" de voltagem), e o realce tardio na RM tem padrão difuso subendocárdico característico.

## ⚠️ Pitfalls

- **Tratar sarcoidose cardíaca só com imunossupressão e ignorar o risco arrítmico** — mesmo com controle inflamatório, a fibrose residual mantém substrato para arritmia ventricular maligna, daí a indicação de CDI em critérios de alto risco.
- **Diagnosticar Takotsubo sem excluir doença coronariana obstrutiva** — cateterismo (ou angio-TC coronária conforme o caso) é obrigatório antes de fechar o diagnóstico.
- **Assumir que Takotsubo é sempre benigno e autolimitado sem monitorização** — a fase aguda pode cursar com choque cardiogênico e exige internação com suporte.
- **Confundir o realce tardio da sarcoidose (padrão mesocárdico/multifocal) com o de infarto (padrão subendocárdico/transmural em território coronariano)** na interpretação da RM cardíaca.
- **Retardar a avaliação de BAV inexplicado em jovem** achando que é sempre degenerativo — perde-se a janela de investigar sarcoidose (e outras infiltrativas) antes de complicações.
- **Puncionar derrame pericárdico assintomático e pequeno só porque existe** — pericardiocentese é reservada para tamponamento ou suspeita etiológica que mude conduta (ex.: purulento, neoplásico), não para todo derrame identificado.
- **Confundir pericardite constritiva com cardiomiopatia restritiva** só pela apresentação clínica — a distinção exige imagem (espessamento pericárdico na TC/RM) e, em casos duvidosos, cateterismo hemodinâmico, pois o tratamento (pericardiectomia vs. manejo clínico da miocardiopatia) é completamente diferente.

## 📝 Como a banca cobra

**Doenças do pericárdio e miocárdio aparecem em 2 questões (0,94% do corpus)** — uma do EBSERH, uma do ENARE — cada uma isolando uma cardiomiopatia distinta. Nenhuma questão do corpus até agora cobrou doença pericárdica propriamente dita (pericardite, tamponamento, constrição) — o conteúdo sobre pericárdio acima é extrapolação de alto rendimento, não fato cobrado.

- **EBSERH 2026 Q32** cobrou **sarcoidose cardíaca de alto risco**, com foco na **indicação de CDI** diante de critérios de risco arrítmico — testando se o candidato sabe que o dispositivo é indicado pelo substrato de risco, não apenas pela atividade inflamatória.
- **ENARE 2025 Q70**, de nível mais fácil, cobrou a **cardiomiopatia de Takotsubo**, no cenário clássico de disfunção ventricular transitória após estresse emocional/físico intenso, com coronárias normais.

## 🧠 Conceito e fisiopatologia

A **sarcoidose cardíaca** resulta da infiltração miocárdica por granulomas não caseosos, que substituem progressivamente o tecido normal por fibrose. Essa fibrose cria zonas de condução lenta e reentrada, explicando tanto os distúrbios de condução (BAV) quanto a arritmia ventricular maligna — daí o risco de morte súbita persistir mesmo após controle da inflamação ativa, justificando dispositivos de proteção (CDI) em critérios de alto risco.

A **cardiomiopatia de Takotsubo** é atribuída a uma descarga catecolaminérgica intensa e súbita, que causa toxicidade miocárdica direta e/ou vasoespasmo microvascular, predominando na região apical (mais rica em receptores beta-adrenérgicos), gerando o característico abaulamento apical com hipercinesia basal compensatória — padrão que dá o nome à doença (o formato lembra o "tako-tsubo", armadilha japonesa para polvos).

As **doenças do pericárdio** têm fisiopatologia distinta das cardiomiopatias acima: a inflamação (viral na maioria dos casos idiopáticos) ou o acúmulo de líquido no saco pericárdico comprometem primariamente o envelope que envolve o coração, não o músculo cardíaco em si. No tamponamento, o acúmulo rápido de líquido eleva a pressão intrapericárdica acima da pressão de enchimento das câmaras direitas, comprometendo o enchimento diastólico e o débito cardíaco: por isso a velocidade de acúmulo importa mais que o volume absoluto (200 mL agudos tamponam; 1-2 L de acúmulo lento/crônico podem ser bem tolerados).

## 🩺 Quadro clínico

- **Sarcoidose cardíaca:** BAV de grau variável (frequentemente total) em paciente jovem, palpitações/síncope por arritmia ventricular, sinais de insuficiência cardíaca, história ou achados de sarcoidose extracardíaca (pulmonar, linfonodal, cutânea, ocular).
- **Takotsubo:** dor torácica aguda e/ou dispneia após gatilho emocional ou físico intenso, ECG com supra de ST, troponina elevada — quadro clinicamente indistinguível de síndrome coronariana aguda até o cateterismo.
- **Pericardite aguda:** dor torácica pleurítica, ventilatório-dependente, que piora deitado e melhora ao inclinar-se para frente; atrito pericárdico à ausculta.
- **Tamponamento:** dispneia progressiva, hipotensão, turgência jugular, bulhas abafadas, pulso paradoxal — quadro de choque obstrutivo.

## 🔎 Diagnóstico

- **Sarcoidose cardíaca:** RM cardíaca com realce tardio em padrão não isquêmico, PET-CT com FDG para inflamação ativa, biópsia endomiocárdica (baixa sensibilidade, acometimento em placas), avaliação sistêmica para sarcoidose extracardíaca.
- **Takotsubo:** cateterismo coronário sem lesão obstrutiva significativa, ventriculografia/ecocardiograma com abaulamento apical característico, ausência de realce tardio transmural na RM (diferencia de infarto e ajuda a diferenciar de miocardite); critérios diagnósticos InterTAK.
- **Pericardite/tamponamento:** ECG (supra difuso de ST/infra de PR na pericardite), ecocardiograma (derrame, colapso diastólico de câmaras direitas no tamponamento), critérios clínicos combinados com imagem.
- **Pericardite constritiva:** TC/RM evidenciando espessamento e/ou calcificação pericárdica, cateterismo hemodinâmico com sinal de "dip-plateau" e discordância ventricular à respiração quando o diagnóstico permanece incerto.

## 💊 Tratamento

- **Sarcoidose cardíaca:** corticoide/imunossupressor para controle da inflamação ativa; marca-passo definitivo se BAV significativo; CDI se critério de alto risco arrítmico presente.
- **Takotsubo:** suporte hemodinâmico na fase aguda (evitar inotrópicos beta-agonistas se houver obstrução dinâmica da via de saída do VE), tratamento de suporte da insuficiência cardíaca até recuperação; identificar e tratar o gatilho desencadeante.
- **Pericardite aguda:** AINE em dose alta + colchicina como primeira linha; corticoide reservado para contraindicação/refratariedade, pelo maior risco de recorrência associado ao seu uso precoce.
- **Tamponamento:** pericardiocentese (ou janela pericárdica cirúrgica) emergencial; expansão volêmica como medida-ponte, evitando ventilação com pressão positiva antes da drenagem (piora o retorno venoso já comprometido).
- **Pericardite constritiva sintomática refratária:** pericardiectomia cirúrgica.

## 📚 Referências essenciais

- Heart Rhythm Society Expert Consensus Statement on Arrhythmias in Cardiac Sarcoidosis.
- International Takotsubo Diagnostic Criteria (InterTAK).
- ESC Guidelines for the Diagnosis and Management of Pericardial Diseases.
- Diretriz da Sociedade Brasileira de Cardiologia sobre Miocardites e Cardiomiopatias.
`;

export default content.trim();
