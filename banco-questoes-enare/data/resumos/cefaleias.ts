/**
 * Resumo — Neurologia · Cefaleias.
 *
 * Reorganizado por entidade clínica (cada cefaleia primária/secundária tem
 * quadro, diagnóstico e tratamento próprios) — a questão real do corpus
 * cobra a cefaleia por uso excessivo de medicação (cefaleia de rebote) em
 * paciente com enxaqueca prévia. Assunto de baixa incidência no banco (1
 * questão), mas cefaleias são tema extenso e altamente recorrente em provas
 * de residência de neurologia e clínica médica.
 */
const content = `
## 🎯 Essencial

- **Separe sempre cefaleia primária de secundária antes de qualquer outro raciocínio:** primária é a doença em si (enxaqueca, cefaleia tensional, cefaleia em salvas); secundária é sintoma de outra causa (hemorragia, infecção, hipertensão intracraniana, uso excessivo de medicação) — os **sinais de alarme** (ver abaixo) são o que direciona a investigação de causa secundária.
- **Cefaleia por uso excessivo de medicação (cefaleia de rebote)** ocorre em paciente com cefaleia primária de base (mais comumente enxaqueca) que passa a usar analgésico/sintomático com frequência excessiva e cronifica a cefaleia — paradoxalmente, o próprio tratamento sintomático vira causa de perpetuação da dor.
- **Critério de frequência:** uso de analgésico simples (dipirona, paracetamol, AINE) em **≥15 dias/mês**, ou de triptano/opioide/combinação analgésica em **≥10 dias/mês**, por pelo menos 3 meses, em paciente com cefaleia de base preexistente.
- **Tratamento correto: suspensão (retirada) do(s) analgésico(s) em uso excessivo**, associada ao início de **tratamento preventivo** (profilático) da cefaleia primária de base — nunca simplesmente manter ou intensificar o uso do sintomático, que perpetua o ciclo.
- **Diferencie enxaqueca crônica de cefaleia por uso excessivo de medicação:** enxaqueca crônica é definida por cefaleia em ≥15 dias/mês por >3 meses, sendo ≥8 dias com características de enxaqueca, **na ausência** de uso excessivo de sintomático; quando há uso excessivo concomitante, o diagnóstico correto passa a ser cefaleia por uso excessivo de medicação (mesmo que a cefaleia de base seja enxaqueca), porque tratar apenas a enxaqueca sem retirar o excesso de analgésico tende a falhar.

## 🔹 Cefaleia por uso excessivo de medicação (cefaleia de rebote)

- **Quadro clínico:** cefaleia diária ou quase diária, tipicamente **opressiva, difusa, pior ao acordar ou piorando ao longo do dia**, em paciente com história de cefaleia primária prévia (classicamente enxaqueca) que intensificou o uso de analgésico sem melhora proporcional — o próprio uso frequente do sintomático "sustenta" a dor basal.
- **Diagnóstico:** clínico, baseado na história de frequência de uso do sintomático associada ao padrão de cefaleia crônica diária, **sem sinais de alarme** que indiquem causa secundária — exame neurológico normal reforça a hipótese, mas não é obrigatório para o diagnóstico.
- **Tratamento:** suspensão gradual ou abrupta dos analgésicos em uso excessivo (a abordagem varia conforme a classe do fármaco em uso excessivo — opioides e benzodiazepínicos geralmente exigem retirada mais gradual/supervisionada pelo risco de síndrome de abstinência, enquanto analgésicos simples podem ser suspensos de forma mais direta) **associada a tratamento preventivo** — os agentes clássicos de escolha são **antidepressivos tricíclicos** (amitriptilina) e **topiramato**, ambos com boa evidência tanto para enxaqueca crônica quanto para cefaleia por uso excessivo de medicação.
- 💎 **Pearl:** a piora inicial da cefaleia é esperada nos primeiros dias após a suspensão do analgésico em uso excessivo ("piora antes de melhorar") — orientar o paciente sobre isso evita abandono precoce do tratamento.
- ⚠️ **Pitfall:** manter o uso do analgésico "conforme necessidade" achando que é uma cefaleia tensional crônica comum — sem suspender o agente em uso excessivo, o tratamento preventivo isolado tende a falhar, porque o próprio analgésico continua perpetuando o ciclo.
- 📝 **Como caiu:** ENARE 2026 Q37 — mulher de 43 anos com enxaqueca prévia desde a adolescência, cefaleia diária há mais de 6 meses e uso de dipirona/ibuprofeno em ≥20 dias/mês, sem sinais de alarme ao exame — hipótese correta (gabarito) foi cefaleia por uso excessivo de medicação, com conduta de suspender gradualmente os analgésicos e iniciar preventivo (tricíclico ou topiramato), contra distratores que propunham manter o analgésico (cefaleia tensional), tratar como enxaqueca refratária com triptano associado (agravaria o quadro), ou hipóteses completamente incompatíveis com o quadro (neuralgia do trigêmeo, cefaleia em salvas).

## 🔹 Enxaqueca (migrânea)

- **Quadro clínico:** cefaleia recorrente, tipicamente **unilateral, pulsátil, moderada a intensa**, piora com atividade física, associada a náusea/vômito e fotofobia/fonofobia; pode ou não ser precedida de **aura** (sintomas neurológicos focais transitórios, mais comumente visuais — escotomas cintilantes, distúrbios visuais em zigue-zague).
- **Diagnóstico:** clínico, baseado em critérios de frequência/duração (crises de 4-72h) e características associadas, sem necessidade de exame de imagem rotineiro na ausência de sinais de alarme.
- **Tratamento agudo:** analgésicos simples/AINE para crises leves; **triptanos** para crises moderadas a intensas (contraindicados em doença cardiovascular/cerebrovascular estabelecida, pelo mecanismo vasoconstritor).
- **Tratamento preventivo (profilático):** indicado quando há frequência elevada de crises (geralmente ≥4 dias/mês com impacto funcional) ou crises muito incapacitantes — betabloqueadores, antidepressivos tricíclicos, topiramato, e mais recentemente anticorpos monoclonais anti-CGRP para casos refratários.
- ⚠️ **Pitfall:** associar triptano de forma indiscriminada em paciente já em uso excessivo de sintomático, sem reconhecer que o problema de base pode ser cefaleia por uso excessivo de medicação — intensificar o uso de fármaco abortivo (mesmo que de classe diferente) tende a piorar, não melhorar, esse quadro.

## 🔹 Cefaleia tensional

- **Quadro clínico:** cefaleia **bilateral, em aperto/pressão (não pulsátil)**, leve a moderada, **não** piora com atividade física rotineira, sem náusea significativa (pode haver fotofobia ou fonofobia isoladas, não as duas juntas como na enxaqueca).
- **Tratamento:** analgésicos simples/AINE para crises esporádicas; nas formas crônicas (≥15 dias/mês), considerar tricíclico como preventivo e medidas não farmacológicas (relaxamento muscular, manejo de estresse, fisioterapia).
- ⚠️ **Pitfall:** rotular como "cefaleia tensional crônica" um quadro que na verdade decorre de uso excessivo de sintomático — a presença de uso frequente de analgésico muda o diagnóstico principal e a conduta.

## 🔹 Cefaleia em salvas (trigêmino-autonômicas)

- **Quadro clínico:** dor **unilateral, periorbitária/temporal, excruciante**, de curta duração (15-180 min), em salvas de crises ao longo de semanas a meses, associada a sinais autonômicos ipsilaterais (lacrimejamento, hiperemia conjuntival, congestão nasal/rinorreia, ptose/miose) — paciente tipicamente **agitado** durante a crise (diferente do enxaquecoso, que busca repouso em ambiente escuro e silencioso).
- **Tratamento agudo:** oxigênio de alto fluxo e/ou triptano injetável/nasal (não oral, pela curta duração da crise).
- **Tratamento preventivo/transicional:** verapamil como preventivo de primeira linha; corticoide em curso curto pode ser usado como "ponte" no início do tratamento preventivo, enquanto o verapamil ainda não atingiu efeito pleno.
- ⚠️ **Pitfall:** usar oxigenoterapia associada a verapamil **oral** de início isolado sem reconhecer a necessidade de tratamento abortivo de ação rápida (oxigênio/triptano injetável) na crise aguda — o verapamil é preventivo, não abortivo de crise em curso.

## 🚩 Sinais de alarme (red flags) — investigar causa secundária

- Início súbito, "a pior dor de cabeça da vida" (thunderclap) — suspeitar de hemorragia subaracnóidea.
- Febre, rigidez de nuca, alteração do nível de consciência — suspeitar de meningite/encefalite.
- Início após os 50 anos sem história prévia de cefaleia — investigar causa secundária, incluindo arterite de células gigantes nessa faixa etária.
- Cefaleia progressiva, pior com manobras de Valsalva/decúbito, associada a papiledema, náusea/vômito em jato, ou déficit neurológico focal — suspeitar de hipertensão intracraniana/lesão expansiva.
- Cefaleia em paciente imunossuprimido, oncológico, gestante ou puérpera — sempre maior limiar para investigação de causa secundária.

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus (apenas 1 questão real, ENARE 2026 Q37, classificada como FÁCIL)** — ficou fora do corte 80/20. Ainda assim, cefaleias são tema extenso e altamente recorrente em provas de residência (neurologia e clínica médica), com alta chance de reaparecer cobrindo outras entidades da família (enxaqueca, cefaleia em salvas, sinais de alarme) ainda não exploradas neste banco específico.

- **ENARE 2026 Q37** testou o reconhecimento de cefaleia por uso excessivo de medicação em cenário clássico (enxaquecosa prévia, uso excessivo de analgésico simples, cronificação da dor, exame neurológico normal) e a conduta correta (suspensão gradual do analgésico + preventivo), contra distratores que descreviam outras cefaleias primárias/secundárias plausíveis mas incompatíveis com o quadro (cefaleia tensional mantendo o analgésico, enxaqueca refratária intensificando abortivo, neuralgia do trigêmeo, cefaleia em salvas).

## 📚 Referências essenciais

- ICHD-3 (International Classification of Headache Disorders, 3ª edição) — International Headache Society (IHS), critérios diagnósticos de todas as cefaleias primárias e secundárias, incluindo cefaleia por uso excessivo de medicação.
`;

export default content.trim();
