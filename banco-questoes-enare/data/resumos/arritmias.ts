/**
 * Resumo — Cardiologia · Arritmias.
 *
 * Cobre as entidades do assunto no corpus: achados eletrocardiográficos da
 * síndrome de Wolff-Parkinson-White, extrassístoles ventriculares benignas
 * em paciente assintomático e indicação de marcapasso no bloqueio
 * atrioventricular Mobitz II.
 */
const content = `
## 🎯 Essencial

- **Wolff-Parkinson-White (WPW):** via acessória (feixe de Kent) liga átrio a ventrículo contornando o nó AV — ECG clássico: **PR curto (<120 ms) + onda delta (empastamento inicial do QRS) + QRS alargado**.
- WPW predispõe a taquicardia por reentrada AV e, principalmente, a **fibrilação atrial pré-excitada** — conduzida diretamente pela via acessória, com resposta ventricular muito rápida e risco de degenerar em fibrilação ventricular.
- Em **FA pré-excitada, drogas bloqueadoras do nó AV (adenosina, verapamil, digoxina, betabloqueador) são CONTRAINDICADAS** — favorecem a condução pela via acessória e podem precipitar FV.
- Tratamento definitivo do WPW sintomático: **ablação por cateter da via acessória**.
- **Extrassístoles ventriculares em paciente assintomático, sem cardiopatia estrutural:** achado benigno na maioria dos casos — não exige antiarrítmico, apenas tranquilização e, se dúvida, ecocardiograma para excluir cardiopatia.
- **BAV Mobitz II** é bloqueio infra-hissiano com **risco de progressão súbita e imprevisível para BAV total** — indicação de **marcapasso definitivo mesmo em paciente assintomático**.
- Diferenciar dos tipos de bloqueio: **Mobitz I (Wenckebach)** — PR aumenta progressivamente até bloquear, geralmente supra-hissiano e benigno; **Mobitz II** — PR constante, bloqueio súbito, indicação de marcapasso.

## 💎 Pearls

- O padrão de pré-excitação (onda delta) pode ser intermitente ou desaparecer ao exercício — não exclui WPW se a história clínica for sugestiva.
- Extrassístoles ventriculares muito frequentes (alta carga no Holter) podem, a longo prazo, causar **cardiomiopatia induzida por extrassístole** — acompanhamento é diferente de simplesmente ignorar o achado.
- **BAV 2:1** pode corresponder tanto a Mobitz I quanto a Mobitz II — o nível do bloqueio (supra vs. infra-hissiano) é o que define prognóstico e conduta, nem sempre óbvio pelo ECG de superfície isolado.
- Amiodarona é a droga menos deletéria entre os antiarrítmicos convencionais para controlar FA pré-excitada quando ablação imediata não está disponível — mas a ablação segue sendo o tratamento definitivo.
- QRS largo no ritmo de escape de um BAV avançado sugere bloqueio mais distal e maior instabilidade elétrica, reforçando a indicação de marcapasso.

## ⚠️ Pitfalls

- **Usar adenosina, verapamil ou digoxina em FA pré-excitada (WPW)** — pode acelerar a condução pela via acessória e precipitar fibrilação ventricular.
- **Prescrever antiarrítmico para extrassístole ventricular assintomática sem cardiopatia estrutural** — sobretratamento de um achado benigno.
- **Confundir Mobitz I com Mobitz II** e deixar de indicar marcapasso — Mobitz II tem indicação mesmo assintomático, pelo risco de progressão súbita.
- **Assumir prognóstico igual para todo BAV 2:1** — depende do nível anatômico do bloqueio.
- **Deixar de investigar cardiopatia estrutural** diante de extrassístole ventricular frequente ou de morfologia atípica.

## 📝 Como a banca cobra

**Arritmias aparece em 3 questões (1,42% do corpus)** — 1 do EBSERH e 2 do ENARE, todas de 2025 — testando reconhecimento eletrocardiográfico direto e decisão terapêutica objetiva.

- **Síndrome de Wolff-Parkinson-White — achados eletrocardiográficos** (EBSERH 2025 Q45, MÉDIA) cobra o reconhecimento do trio PR curto + onda delta + QRS alargado.
- **Extrassístoles ventriculares benignas em assintomático** (ENARE 2025 Q33, FÁCIL) testa o não-tratamento como conduta correta.
- **Bloqueio atrioventricular Mobitz II — indicação de marcapasso** (ENARE 2025 Q59, FÁCIL) cobra a indicação mesmo sem sintomas, pelo risco de progressão para BAVT.

## 🧠 Conceito e fisiopatologia

No WPW, a via acessória permite que o estímulo elétrico chegue ao ventrículo sem passar pelo retardo fisiológico do nó AV, encurtando o intervalo PR e gerando a onda delta pela pré-excitação de parte do miocárdio ventricular. Essa mesma via, quando participa da condução de uma fibrilação atrial, não possui o efeito protetor de retardo do nó AV — permitindo frequências ventriculares extremamente altas e risco de degeneração para fibrilação ventricular.

O sistema de condução AV normal tem dois níveis de bloqueio possíveis: o **nó AV** (geralmente benigno, responsivo a atropina, característico do Mobitz I) e o sistema **His-Purkinje infra-hissiano** (Mobitz II), cujo bloqueio é elétrico e estrutural, sem resposta a estímulo vagal ou atropina, e propenso a progressão súbita e completa.

## 🔎 Diagnóstico

- **WPW:** ECG de 12 derivações com PR curto, onda delta e QRS alargado; estudo eletrofisiológico define localização da via acessória antes da ablação.
- **Extrassístole ventricular:** ECG/Holter caracteriza morfologia e carga; ecocardiograma se suspeita de cardiopatia estrutural associada.
- **BAV Mobitz II:** ECG seriado mostrando PR constante com bloqueio súbito e imprevisível de um estímulo atrial.

## 💊 Tratamento

- **WPW sintomático:** ablação por cateter da via acessória; evitar bloqueadores do nó AV em FA pré-excitada (usar procainamida/amiodarona ou cardioversão elétrica se instabilidade).
- **Extrassístole ventricular benigna assintomática:** nenhum tratamento farmacológico específico; orientar e reavaliar.
- **BAV Mobitz II:** marcapasso definitivo, independentemente de sintomas.

## 📚 Referências essenciais

- Diretriz da Sociedade Brasileira de Cardiologia sobre Arritmias Cardíacas.
- ACC/AHA/HRS Guideline for the Evaluation and Management of Patients with Bradycardia and Cardiac Conduction Delay.
- ESC Guidelines for the management of patients with supraventricular tachycardia.
`;

export default content.trim();
