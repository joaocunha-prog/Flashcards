/**
 * Resumo — Cardiologia · Arritmias.
 *
 * Reorganizado por entidade clínica (cada arritmia tem sua própria seção
 * com quando suspeitar, diagnóstico, tratamento, pearl e pitfall juntos),
 * em vez de picado entre seções genéricas de tipo.
 *
 * Cobre as entidades do assunto no corpus: achados eletrocardiográficos da
 * síndrome de Wolff-Parkinson-White, extrassístoles ventriculares benignas
 * em paciente assintomático e indicação de marcapasso no bloqueio
 * atrioventricular Mobitz II. Inclui também extrapolações de alto
 * rendimento (classificação completa dos bloqueios AV, doença de Chagas,
 * fibrilação atrial, síndrome do QT longo/Torsades, síndrome de Brugada)
 * ainda não cobradas no corpus, mas plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- As três entidades do corpus ilustram os três grandes "erros a não cometer" em arritmia: usar a **droga errada** (bloqueador de nó AV em WPW+FA), **tratar demais** um achado benigno (extrassístole) e **tratar de menos** um achado grave e assintomático (Mobitz II).
- O eixo organizador do tema é o **nível anatômico do problema elétrico**: via acessória (WPW), automatismo ectópico benigno (extrassístole), e sistema de condução AV (bloqueios) — cada nível tem sua própria lógica de risco e tratamento.
- Diante de qualquer bloqueio de condução ou taquiarritmia, **QRS largo vs. estreito** e **regular vs. irregular** são as duas perguntas de ECG que mais rápido direcionam o raciocínio de prova.

## 📝 Como a banca cobra

**Arritmias aparece em 3 questões (1,42% do corpus)** — 1 do EBSERH e 2 do ENARE, todas de 2025 — testando reconhecimento eletrocardiográfico direto e decisão terapêutica objetiva.

- **Síndrome de Wolff-Parkinson-White — achados eletrocardiográficos** (EBSERH 2025 Q45, MÉDIA) cobra o reconhecimento do trio PR curto + onda delta + QRS alargado.
- **Extrassístoles ventriculares benignas em assintomático** (ENARE 2025 Q33, FÁCIL) testa o não-tratamento como conduta correta.
- **Bloqueio atrioventricular Mobitz II — indicação de marcapasso** (ENARE 2025 Q59, FÁCIL) cobra a indicação mesmo sem sintomas, pelo risco de progressão para BAVT.

## 🧠 Conceito e fisiopatologia

No WPW, a via acessória permite que o estímulo elétrico chegue ao ventrículo sem passar pelo retardo fisiológico do nó AV, encurtando o intervalo PR e gerando a onda delta pela pré-excitação de parte do miocárdio ventricular — a mesma via, quando participa da condução de uma fibrilação atrial, não possui o efeito protetor de retardo do nó AV, permitindo frequências ventriculares extremamente altas. O sistema de condução AV tem dois níveis de bloqueio possíveis: o **nó AV** (geralmente benigno, responsivo a atropina, Mobitz I) e o sistema **His-Purkinje infra-hissiano** (Mobitz II), cujo bloqueio é elétrico e estrutural, sem resposta a estímulo vagal, propenso a progressão súbita. Doenças infiltrativas e fibrosantes do sistema de condução (Chagas, sarcoidose, amiloidose, fibrose senil de Lev-Lenègre) atuam justamente nesse nível distal, explicando bloqueios de pior prognóstico.

## 🔹 Síndrome de Wolff-Parkinson-White (WPW)

- **Quando suspeitar:** achado eletrocardiográfico de pré-excitação — via acessória (feixe de Kent) liga átrio a ventrículo contornando o nó AV.
- **Diagnóstico:** ECG com **PR curto (<120 ms) + onda delta (empastamento inicial do QRS) + QRS alargado**; estudo eletrofisiológico define a localização da via acessória e seu período refratário antes da ablação, também usado para estratificar risco no achado assintomático.
- **Risco principal:** predispõe a taquicardia por reentrada AV e, sobretudo, a **fibrilação atrial pré-excitada** — conduzida diretamente pela via acessória, com resposta ventricular muito rápida e risco de degenerar em fibrilação ventricular. ECG na FA pré-excitada: QRS irregular, largo e de morfologia variável, frequência ventricular muito elevada (>200 bpm).
- **Tratamento:** ablação por cateter da via acessória no sintomático; **padrão de WPW assintomático** (achado isolado) pode ser conduzido de forma expectante ou com estratificação de risco por estudo eletrofisiológico, sem ablação obrigatória. Em **FA pré-excitada, drogas bloqueadoras do nó AV (adenosina, verapamil, digoxina, betabloqueador) são CONTRAINDICADAS** — favorecem condução pela via acessória e podem precipitar FV; usar procainamida/amiodarona ou cardioversão elétrica se instabilidade.
- 💎 **Pearl:** a onda delta pode ser intermitente ou desaparecer ao exercício — não exclui WPW se a história for sugestiva; desaparecimento abrupto ao esforço é achado tranquilizador (via acessória de período refratário longo, menor risco de morte súbita).
- ⚠️ **Pitfall:** usar adenosina, verapamil ou digoxina em FA pré-excitada — pode acelerar a condução pela via acessória e precipitar fibrilação ventricular.
- 📝 **Como caiu:** EBSERH 2025 Q45 — trio PR curto + onda delta + QRS alargado.

## 🔹 Extrassístoles ventriculares em paciente assintomático

- **Quando suspeitar:** achado eletrocardiográfico/Holter — QRS alargado e bizarro, sem onda P precedente, seguido de pausa compensatória completa.
- **Conduta em paciente assintomático, sem cardiopatia estrutural:** **achado benigno na maioria dos casos** — não exige antiarrítmico, apenas tranquilização e, se dúvida, ecocardiograma para excluir cardiopatia.
- **Diagnóstico:** ECG/Holter caracteriza morfologia (unifocal × multifocal), padrão (bigeminismo/trigeminismo) e carga; ecocardiograma se suspeita de cardiopatia estrutural associada; teste ergométrico se relacionada a esforço.
- 💎 **Pearl:** extrassístoles muito frequentes (alta carga no Holter, geralmente **>10-20% dos batimentos**) podem, a longo prazo, causar **cardiomiopatia induzida por extrassístole** — acompanhamento é diferente de simplesmente ignorar o achado, e ablação pode ser indicada nesse cenário; se sintomática ou com carga muito alta, betabloqueador é a primeira opção antes de considerar ablação.
- ⚠️ **Pitfall:** prescrever antiarrítmico para extrassístole ventricular assintomática sem cardiopatia estrutural — sobretratamento de achado benigno; ou deixar de investigar cardiopatia estrutural diante de extrassístole frequente/morfologia atípica.
- 📝 **Como caiu:** ENARE 2025 Q33 — o não-tratamento é a conduta correta.

## 🔹 Bloqueio atrioventricular Mobitz II

- **Quando suspeitar:** ECG seriado mostrando **PR constante com bloqueio súbito e imprevisível** de um estímulo atrial, sem alargamento progressivo prévio — bloqueio infra-hissiano.
- **Diferenciar de Mobitz I (Wenckebach):** PR aumenta progressivamente até bloquear, geralmente supra-hissiano e benigno, associado a tônus vagal aumentado ou IAM inferior.
- **Conduta:** **indicação de marcapasso definitivo mesmo em paciente assintomático** — risco de progressão súbita e imprevisível para BAV total.
- 💎 **Pearl:** **BAV 2:1** pode corresponder tanto a Mobitz I quanto a Mobitz II — o nível do bloqueio (supra vs. infra-hissiano) é o que define prognóstico; QRS estreito sugere bloqueio nodal (mais benigno), QRS largo sugere infra-hissiano (mais grave). Infarto de parede **inferior** costuma causar BAV por lesão do nó AV (geralmente transitório, Mobitz I); infarto de parede **anterior** costuma causar bloqueio infra-hissiano (Mobitz II/BAVT), de pior prognóstico.
- ⚠️ **Pitfall:** confundir Mobitz I com Mobitz II e deixar de indicar marcapasso — Mobitz II tem indicação mesmo assintomático; ou assumir prognóstico igual para todo BAV 2:1 sem considerar o nível anatômico.
- 📝 **Como caiu:** ENARE 2025 Q59 — indicação mesmo sem sintomas.

## 🔹 Doença de Chagas como causa de bloqueio de condução

- **Quando suspeitar:** bloqueio de condução (classicamente bloqueio de ramo direito associado a bloqueio divisional anterossuperior esquerdo, além de BAV avançado e morte súbita) em paciente de área endêmica ou procedência compatível.
- **Diagnóstico:** sorologia para Chagas em pacientes de área endêmica com achados de bloqueio de condução.
- 💎 **Pearl:** no Brasil, é causa importante e frequentemente cobrada de bloqueio de condução, por acometer preferencialmente o sistema His-Purkinje distal.
- ⚠️ **Pitfall:** não pensar em Chagas como causa de bloqueio de condução em paciente brasileiro com sorologia não checada.
- 📝 **Como caiu:** ainda não cobrado no corpus — causa nacional relevante do diferencial de BAV.

## 🔹 Síndrome do QT longo e Torsades de pointes

- **Quando suspeitar:** QT corrigido (Bazett) **>450-470 ms** — congênita (canalopatias — síndromes de Romano-Ward e Jervell-Lange-Nielsen) ou adquirida (drogas — antiarrítmicos, antipsicóticos, macrolídeos, antifúngicos azólicos — associadas a distúrbio eletrolítico: hipopotassemia, hipomagnesemia).
- **Risco:** Torsades de pointes — traçado com rotação do eixo do QRS em torno da linha de base.
- **Tratamento:** sulfato de magnésio IV e correção do distúrbio eletrolítico/suspensão da droga precipitante.
- ⚠️ **Pitfall:** ignorar QT longo em ECG de rotina, sobretudo diante de múltiplas drogas que prolongam QT associadas a distúrbio eletrolítico.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Síndrome de Brugada e fibrilação atrial (extensões de alto rendimento)

- **Síndrome de Brugada:** ECG característico (supra de ST em V1-V3 com padrão "em telhado"/coved) e risco de morte súbita por fibrilação ventricular, tipicamente em homens jovens, durante o sono ou febre — cardiodesfibrilador implantável nos sintomáticos ou com síncope/parada cardíaca prévia.
- **Fibrilação atrial:** controle de frequência/ritmo e anticoagulação guiada pelo escore **CHA₂DS₂-VASc** — a decisão de anticoagular não deve se basear apenas em "idade avançada = não anticoagular", exige estratificar risco de AVC e de sangramento.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**Classificação dos bloqueios atrioventriculares**

| Grau | Achado no ECG | Nível | Conduta |
|---|---|---|---|
| 1º grau | PR prolongado (>200 ms), todo estímulo conduzido | Geralmente nodal | Não indica marcapasso isoladamente |
| 2º grau Mobitz I | PR aumenta progressivamente até bloquear | Nodal (benigno) | Observação, salvo sintomas |
| 2º grau Mobitz II | PR constante, bloqueio súbito | Infra-hissiano | Marcapasso mesmo assintomático |
| Avançado/alto grau | ≥2 ondas P bloqueadas consecutivas | Geralmente distal | Avaliar marcapasso |
| 3º grau (BAVT) | Dissociação AV completa, ritmo de escape | Variável | Marcapasso na quase totalidade dos casos |

## 📚 Referências essenciais

- Diretriz da Sociedade Brasileira de Cardiologia sobre Arritmias Cardíacas.
- ACC/AHA/HRS Guideline for the Evaluation and Management of Patients with Bradycardia and Cardiac Conduction Delay.
- ESC Guidelines for the management of patients with supraventricular tachycardia.
- Diretriz da Sociedade Brasileira de Cardiologia sobre Doença de Chagas.
`;

export default content.trim();
