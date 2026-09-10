/**
 * Resumo — Psiquiatria · Transtornos por uso de substâncias.
 *
 * Reorganizado por substância (cada uma com farmacoterapia própria de
 * desintoxicação e/ou prevenção de recaída) — a questão real do corpus cobra
 * a farmacoterapia de prevenção de recaída na dependência alcoólica, com
 * foco na diferenciação entre dissulfiram, naltrexona, acamprosato e outras
 * drogas usadas erroneamente como distratores. Assunto de baixa incidência
 * no banco (1 questão), mas transtornos por uso de substâncias são tema
 * clássico e recorrente de prova de residência, especialmente clínica
 * médica e psiquiatria.
 */
const content = `
## 🎯 Essencial

- **Distinga sempre duas fases de manejo farmacológico**, para qualquer substância: (1) **desintoxicação/manejo da síndrome de abstinência aguda** (curto prazo, objetivo é segurança na retirada) e (2) **prevenção de recaída/manutenção da abstinência** (longo prazo, objetivo é reduzir fissura e/ou consumo após a desintoxicação já concluída). Um erro clássico de prova é confundir um fármaco de uma fase com o da outra.
- **Álcool:** benzodiazepínico (ex.: diazepam, lorazepam) é o pilar da **abstinência aguda**; **dissulfiram, naltrexona e acamprosato** são os três fármacos com evidência para **prevenção de recaída** a longo prazo — cada um com mecanismo e perfil de uso distintos (ver seção específica).
- **Opioides:** metadona e buprenorfina (agonista parcial) tratam tanto a abstinência aguda quanto servem como terapia de manutenção a longo prazo; naltrexona (antagonista) só entra depois de o paciente já estar completamente desintoxicado.
- **Benzodiazepínicos:** a retirada deve ser sempre **gradual** (nunca abrupta) pelo risco de convulsão e delirium na abstinência.
- **Tabagismo:** terapia de reposição de nicotina, bupropiona e vareniclina são as três classes farmacológicas com evidência estabelecida para cessação.

## 🔹 Transtorno por uso de álcool

- **Farmacoterapia de prevenção de recaída (fase de manutenção, já desintoxicado):**
  - **Dissulfiram:** inibe a *aldeído desidrogenase*, bloqueando o metabolismo do acetaldeído — se o paciente ingerir álcool em vigência do fármaco, acumula acetaldeído e desenvolve reação aversiva (rubor facial, taquicardia, náusea, cefaleia, hipotensão, podendo ser grave). Funciona por **efeito dissuasório comportamental** (o medo da reação), não por reduzir a fissura — por isso depende muito de adesão e motivação do paciente, sendo contraindicado em cardiopatia grave, gestação e uso concomitante de álcool não intencional (perfumes, enxaguantes bucais, alguns medicamentos com veículo alcoólico).
  - **Naltrexona:** antagonista opioide (bloqueia receptores mu) — reduz o *reforço prazeroso/euforia* do consumo de álcool e a fissura. **Exige que o paciente já esteja abstinente de opioides** (contraindicada em uso concomitante de opioides, pelo risco de precipitar abstinência opioide aguda) — ao contrário do que uma leitura rápida pode sugerir, **não é indicada para tratar a abstinência aguda do álcool**, só para prevenção de recaída após desintoxicação.
  - **Acamprosato:** modula a neurotransmissão glutamatérgica/GABAérgica, reduzindo a hiperexcitabilidade do sistema nervoso central que persiste após a desintoxicação — ajuda a manter a abstinência reduzindo os sintomas de "abstinência protraída" (irritabilidade, insônia, ansiedade residual). Ajuste de dose necessário em insuficiência renal; não tem interação relevante com uso concomitante de álcool (diferente do dissulfiram).
- ⚠️ **Pitfall clássico:** achar que **naltrexona trata a abstinência aguda** — ela é droga de manutenção/prevenção de recaída, e o paciente precisa estar sem uso de opioides para recebê-la com segurança.
- ⚠️ **Pitfall clássico:** achar que **carbamazepina e lamotrigina têm papel estabelecido na dependência alcoólica** — a carbamazepina até tem algum uso off-label limitado no controle de abstinência leve a moderada em contextos específicos, mas **não é fármaco de primeira linha para prevenção de recaída**; lamotrigina não tem indicação estabelecida nem para abstinência nem para prevenção de recaída alcoólica (é estabilizador de humor usado em transtorno bipolar).
- ⚠️ **Pitfall clássico:** metildopa é anti-hipertensivo de ação central, **sem papel algum** no manejo da dependência alcoólica — distrator clássico por soar "farmacológico e relacionado ao sistema nervoso central".
- **Síndrome de abstinência alcoólica aguda:** manejo com benzodiazepínico em escala sintoma-guiada (ex.: escala CIWA-Ar), tiamina **antes** de qualquer reposição de glicose (para prevenir encefalopatia de Wernicke), correção de distúrbios hidroeletrolíticos. Delirium tremens é a forma mais grave (confusão, agitação intensa, hiperatividade autonômica, alucinações), com mortalidade relevante se não tratado.
- 💎 **Pearl:** a associação de **tiamina antes da glicose** é um dos pontos mais cobrados em prova de emergência com paciente etilista — inverter a ordem pode precipitar ou agravar encefalopatia de Wernicke-Korsakoff.

## 🔹 Transtorno por uso de opioides

- **Abstinência aguda:** quadro não fatal (diferente da abstinência de álcool e benzodiazepínicos), mas extremamente desconfortável — midríase, lacrimejamento, rinorreia, piloereção, cólicas abdominais, diarreia, dores musculares, ansiedade intensa.
- **Manejo:** agonistas opioides de ação prolongada (metadona) ou agonista parcial (buprenorfina, com ou sem naloxona associada) tanto para desintoxicação quanto para terapia de manutenção a longo prazo — reduzem fissura e risco de overdose por reexposição a opioides ilícitos.
- **Naltrexona (antagonista puro):** opção de manutenção **somente após desintoxicação completa** (mínimo 7-10 dias sem opioides), pelo risco de precipitar abstinência aguda grave se administrada com opioide ainda circulante.
- 💎 **Pearl:** naloxona é o antagonista de **reversão de overdose aguda** (ação curta, IM/IV/intranasal) — não confundir com naltrexona, usada por via oral para manutenção da abstinência a longo prazo.

## 🔹 Benzodiazepínicos

- **Abstinência:** risco de convulsão e delirium se a retirada for abrupta, principalmente após uso crônico em doses altas — manejo com **redução gradual da dose** (desmame), eventualmente substituindo por benzodiazepínico de meia-vida mais longa para facilitar o desmame controlado.
- ⚠️ **Pitfall:** interromper benzodiazepínico abruptamente em paciente de uso crônico "porque não é uma droga tão perigosa quanto álcool" — na verdade a abstinência de benzodiazepínico, assim como a de álcool, pode ser fatal por convulsão/delirium.

## 🔹 Tabagismo

- **Farmacoterapia de primeira linha:** terapia de reposição de nicotina (adesivo, goma, pastilha), bupropiona e vareniclina — todas reduzem fissura e sintomas de abstinência, podendo ser usadas isoladas ou combinadas (ex.: adesivo + goma) conforme intensidade do tabagismo.
- 💎 **Pearl:** vareniclina age como agonista parcial dos receptores nicotínicos — reduz tanto a fissura (efeito agonista parcial) quanto o prazer de fumar caso haja recaída (efeito antagonista parcial, bloqueando a nicotina de se ligar completamente ao receptor).

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus (apenas 1 questão real, ENARE 2025 Q71, classificada como MÉDIA)** — ficou fora do corte 80/20. Ainda assim, transtornos por uso de substâncias — sobretudo dependência alcoólica — são tema clássico e recorrente em provas de residência médica (clínica médica, psiquiatria e medicina de família), com alta chance de reaparecer em provas futuras.

- **ENARE 2025 Q71** apresentou um homem de 63 anos com dependência alcoólica de longa data buscando tratamento farmacológico, testando diretamente o conhecimento de que **dissulfiram é usado na prevenção de recaída** (gabarito) contra quatro distratores plausíveis mas incorretos: metildopa (sem papel no manejo), carbamazepina "funcionando na prevenção de recaída" (sem indicação estabelecida para esse fim, ainda que tenha algum uso pontual na abstinência leve), lamotrigina como "antiepilético de escolha na abstinência alcoólica" (não é — benzodiazepínico é a escolha) e naltrexona "útil na abstinência aguda" (na verdade é droga de manutenção pós-desintoxicação, não de manejo agudo).
- O padrão de cobrança nesse assunto costuma exigir diferenciar com precisão **qual fármaco serve para qual fase** (abstinência aguda vs. prevenção de recaída) e **qual mecanismo** (aversivo/dissuasório vs. antagonismo do reforço vs. modulação glutamatérgica) — decorar só os nomes sem entender a lógica farmacológica é armadilha certa para cair em distratores como os da Q71.

## 📚 Referências essenciais

- ASAM (American Society of Addiction Medicine) — Clinical Practice Guideline on Alcohol Withdrawal Management e diretrizes de farmacoterapia para transtorno por uso de álcool.
- APA (American Psychiatric Association) — Practice Guideline for the Pharmacological Treatment of Patients With Alcohol Use Disorder.
- ASAM National Practice Guideline for the Treatment of Opioid Use Disorder.
`;

export default content.trim();
