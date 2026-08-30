/**
 * Resumo — Cardiologia · Arritmias.
 *
 * Cobre as entidades do assunto no corpus: achados eletrocardiográficos da
 * síndrome de Wolff-Parkinson-White, extrassístoles ventriculares benignas
 * em paciente assintomático e indicação de marcapasso no bloqueio
 * atrioventricular Mobitz II. Também traz a classificação completa dos
 * bloqueios AV, causas locais (doença de Chagas) e outras arritmias de alto
 * rendimento (fibrilação atrial, QT longo/Torsades, Brugada) que ainda não
 * caíram nas provas reais.
 */
const content = `
## 🎯 Essencial

- **Wolff-Parkinson-White (WPW):** via acessória (feixe de Kent) liga átrio a ventrículo contornando o nó AV — ECG clássico: **PR curto (<120 ms) + onda delta (empastamento inicial do QRS) + QRS alargado**.
- WPW predispõe a taquicardia por reentrada AV e, principalmente, a **fibrilação atrial pré-excitada** — conduzida diretamente pela via acessória, com resposta ventricular muito rápida e risco de degenerar em fibrilação ventricular.
- Em **FA pré-excitada, drogas bloqueadoras do nó AV (adenosina, verapamil, digoxina, betabloqueador) são CONTRAINDICADAS** — favorecem a condução pela via acessória e podem precipitar FV.
- Tratamento definitivo do WPW sintomático: **ablação por cateter da via acessória**; **padrão de WPW assintomático** (achado eletrocardiográfico isolado) pode ser conduzido de forma expectante ou com estratificação de risco por estudo eletrofisiológico, sem ablação obrigatória.
- **Extrassístoles ventriculares em paciente assintomático, sem cardiopatia estrutural:** achado benigno na maioria dos casos — não exige antiarrítmico, apenas tranquilização e, se dúvida, ecocardiograma para excluir cardiopatia.
- **BAV Mobitz II** é bloqueio infra-hissiano com **risco de progressão súbita e imprevisível para BAV total** — indicação de **marcapasso definitivo mesmo em paciente assintomático**.
- Diferenciar dos tipos de bloqueio: **Mobitz I (Wenckebach)** — PR aumenta progressivamente até bloquear, geralmente supra-hissiano e benigno; **Mobitz II** — PR constante, bloqueio súbito, indicação de marcapasso.
- As três entidades deste tema ilustram os três grandes "erros a não cometer" em arritmia: usar a droga errada (WPW+FA), tratar demais um achado benigno (extrassístole) e tratar de menos um achado grave e assintomático (Mobitz II).

## 💎 Pearls

- O padrão de pré-excitação (onda delta) pode ser intermitente ou desaparecer ao exercício — não exclui WPW se a história clínica for sugestiva; desaparecimento abrupto da onda delta ao esforço é achado tranquilizador (via acessória de período refratário longo, menor risco de morte súbita).
- Extrassístoles ventriculares muito frequentes (alta carga no Holter, geralmente **>10-20% dos batimentos**) podem, a longo prazo, causar **cardiomiopatia induzida por extrassístole** — acompanhamento é diferente de simplesmente ignorar o achado, e ablação pode ser indicada nesse cenário.
- **BAV 2:1** pode corresponder tanto a Mobitz I quanto a Mobitz II — o nível do bloqueio (supra vs. infra-hissiano) é o que define prognóstico e conduta; QRS estreito sugere bloqueio nodal (mais benigno), QRS largo sugere bloqueio infra-hissiano (mais grave).
- Amiodarona é a droga menos deletéria entre os antiarrítmicos convencionais para controlar FA pré-excitada quando ablação imediata não está disponível — mas a ablação segue sendo o tratamento definitivo.
- QRS largo no ritmo de escape de um BAV avançado sugere bloqueio mais distal e maior instabilidade elétrica, reforçando a indicação de marcapasso.
- No Brasil, a **doença de Chagas** é causa importante e frequentemente cobrada de bloqueio de ramo direito associado a bloqueio divisional anterossuperior esquerdo, além de BAV avançado e morte súbita — sempre pensar em Chagas diante de bloqueio de condução em paciente de área endêmica.
- Infarto de parede **inferior** costuma causar BAV por lesão do nó AV (geralmente transitório, tipo Mobitz I); infarto de parede **anterior** costuma causar bloqueio infra-hissiano (Mobitz II/BAVT), de pior prognóstico, por acometer o sistema His-Purkinje.
- **Síndrome do QT longo** pode ser congênita (canalopatias — síndromes de Romano-Ward e Jervell-Lange-Nielsen) ou adquirida (drogas, distúrbio eletrolítico) — QT corrigido (Bazett) >450-470 ms é o corte de alerta, e o risco maior é de Torsades de pointes.
- **Síndrome de Brugada** cursa com ECG característico (supra de ST em V1-V3 com padrão "em telhado"/coved) e risco de morte súbita por fibrilação ventricular, tipicamente em homens jovens, durante o sono ou febre — indicação de CDI nos sintomáticos.

## ⚠️ Pitfalls

- **Usar adenosina, verapamil ou digoxina em FA pré-excitada (WPW)** — pode acelerar a condução pela via acessória e precipitar fibrilação ventricular.
- **Prescrever antiarrítmico para extrassístole ventricular assintomática sem cardiopatia estrutural** — sobretratamento de um achado benigno.
- **Confundir Mobitz I com Mobitz II** e deixar de indicar marcapasso — Mobitz II tem indicação mesmo assintomático, pelo risco de progressão súbita.
- **Assumir prognóstico igual para todo BAV 2:1** — depende do nível anatômico do bloqueio.
- **Deixar de investigar cardiopatia estrutural** diante de extrassístole ventricular frequente ou de morfologia atípica.
- **Não pensar em Chagas como causa de bloqueio de condução** em paciente brasileiro com sorologia não checada.
- **Ignorar QT longo em ECG de rotina** — predispõe a Torsades de pointes, sobretudo diante de drogas que prolongam QT (antiarrítmicos, antipsicóticos, macrolídeos, antifúngicos azólicos) associadas a distúrbio eletrolítico (hipopotassemia, hipomagnesemia).
- **Não estratificar risco de acidente vascular cerebral e sangramento em fibrilação atrial** antes de decidir por anticoagulação — a decisão não deve ser baseada apenas em "idade avançada = não anticoagular".

## 📝 Como a banca cobra

**Arritmias aparece em 3 questões (1,42% do corpus)** — 1 do EBSERH e 2 do ENARE, todas de 2025 — testando reconhecimento eletrocardiográfico direto e decisão terapêutica objetiva.

- **Síndrome de Wolff-Parkinson-White — achados eletrocardiográficos** (EBSERH 2025 Q45, MÉDIA) cobra o reconhecimento do trio PR curto + onda delta + QRS alargado.
- **Extrassístoles ventriculares benignas em assintomático** (ENARE 2025 Q33, FÁCIL) testa o não-tratamento como conduta correta.
- **Bloqueio atrioventricular Mobitz II — indicação de marcapasso** (ENARE 2025 Q59, FÁCIL) cobra a indicação mesmo sem sintomas, pelo risco de progressão para BAVT.

## 🧠 Conceito e fisiopatologia

No WPW, a via acessória permite que o estímulo elétrico chegue ao ventrículo sem passar pelo retardo fisiológico do nó AV, encurtando o intervalo PR e gerando a onda delta pela pré-excitação de parte do miocárdio ventricular. Essa mesma via, quando participa da condução de uma fibrilação atrial, não possui o efeito protetor de retardo do nó AV — permitindo frequências ventriculares extremamente altas e risco de degeneração para fibrilação ventricular.

O sistema de condução AV normal tem dois níveis de bloqueio possíveis: o **nó AV** (geralmente benigno, responsivo a atropina, característico do Mobitz I) e o sistema **His-Purkinje infra-hissiano** (Mobitz II), cujo bloqueio é elétrico e estrutural, sem resposta a estímulo vagal ou atropina, e propenso a progressão súbita e completa. Doenças infiltrativas e fibrosantes do sistema de condução (doença de Chagas, sarcoidose, amiloidose, fibrose senil de Lev-Lenègre) atuam justamente nesse nível distal, explicando por que costumam evoluir com bloqueios de pior prognóstico.

## 📊 Classificação dos bloqueios atrioventriculares

- **1º grau:** PR prolongado (>200 ms), todo estímulo é conduzido — geralmente benigno, não indica marcapasso isoladamente.
- **2º grau Mobitz I (Wenckebach):** PR aumenta progressivamente até bloquear um estímulo — habitualmente nodal, benigno, associado a tônus vagal aumentado ou IAM inferior.
- **2º grau Mobitz II:** PR constante com bloqueio súbito e imprevisível — infra-hissiano, indicação de marcapasso mesmo assintomático.
- **BAV avançado/de alto grau:** bloqueio de duas ou mais ondas P consecutivas, com condução ocasional — geralmente indica doença significativa do sistema de condução.
- **3º grau (BAV total):** dissociação completa entre atividade atrial e ventricular, ritmo de escape (juncional ou ventricular) — indicação de marcapasso definitivo na quase totalidade dos casos.

## 🩺 Achados de exame físico e ECG a memorizar

- **WPW:** PR curto + onda delta + QRS alargado; durante FA pré-excitada, QRS irregular, largo e de morfologia variável, com frequência ventricular muito elevada (>200 bpm) — padrão que assusta e exige reconhecimento imediato.
- **Extrassístole ventricular:** QRS alargado e bizarro, sem onda P precedente, seguido de pausa compensatória completa.
- **BAV Mobitz II:** PR fixo com bloqueio súbito de uma onda P sem alargamento progressivo prévio; ausculta pode revelar irregularidade do ritmo cardíaco.
- **QT longo:** intervalo QT corrigido prolongado no ECG de repouso; **Torsades de pointes** no traçado de taquicardia tem aspecto característico de rotação do eixo do QRS em torno da linha de base.

## 🔎 Diagnóstico

- **WPW:** ECG de 12 derivações com PR curto, onda delta e QRS alargado; estudo eletrofisiológico define localização da via acessória e seu período refratário antes da ablação, também usado para estratificar risco no achado assintomático.
- **Extrassístole ventricular:** ECG/Holter caracteriza morfologia (unifocal × multifocal), padrão (bigeminismo/trigeminismo) e carga; ecocardiograma se suspeita de cardiopatia estrutural associada; teste ergométrico se relacionada a esforço.
- **BAV Mobitz II:** ECG seriado mostrando PR constante com bloqueio súbito e imprevisível de um estímulo atrial; sorologia para Chagas em pacientes de área endêmica/procedência compatível.

## 💊 Tratamento

- **WPW sintomático:** ablação por cateter da via acessória; evitar bloqueadores do nó AV em FA pré-excitada (usar procainamida/amiodarona ou cardioversão elétrica se instabilidade).
- **Extrassístole ventricular benigna assintomática:** nenhum tratamento farmacológico específico; orientar e reavaliar; se sintomática ou com carga muito alta, betabloqueador é a primeira opção antes de considerar ablação.
- **BAV Mobitz II:** marcapasso definitivo, independentemente de sintomas.
- **Outras arritmias correlatas de alto rendimento:** fibrilação atrial — controle de frequência/ritmo e anticoagulação guiada pelo escore **CHA₂DS₂-VASc**; Torsades de pointes — sulfato de magnésio IV e correção do distúrbio eletrolítico/suspensão da droga precipitante; síndrome de Brugada — cardiodesfibrilador implantável em sintomáticos ou com síncope/parada cardíaca prévia.

## 📈 Complicações relevantes

- **WPW com FA pré-excitada não reconhecida:** degeneração para fibrilação ventricular e morte súbita — é a complicação mais temida da síndrome.
- **BAV Mobitz II não tratado:** progressão súbita para BAV total, síncope (crise de Stokes-Adams) e parada cardíaca.
- **Extrassístole ventricular de alta carga não vigiada:** cardiomiopatia induzida por extrassístole, potencialmente reversível com controle da arritmia (antiarrítmico ou ablação).
- **QT longo/Torsades não reconhecido:** morte súbita cardíaca, sobretudo em uso concomitante de múltiplas drogas que prolongam QT.

## 📚 Referências essenciais

- Diretriz da Sociedade Brasileira de Cardiologia sobre Arritmias Cardíacas.
- ACC/AHA/HRS Guideline for the Evaluation and Management of Patients with Bradycardia and Cardiac Conduction Delay.
- ESC Guidelines for the management of patients with supraventricular tachycardia.
- Diretriz da Sociedade Brasileira de Cardiologia sobre Doença de Chagas.
`;

export default content.trim();
