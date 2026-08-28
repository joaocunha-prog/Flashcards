/**
 * Resumo — Cardiologia · Hipertensão arterial.
 *
 * Cobre as entidades do assunto no corpus: hipertensão resistente
 * (indicação da quarta droga — espironolactona) e o efeito do jaleco
 * branco identificado pela MAPA na avaliação de hipertensão resistente.
 */
const content = `
## 🎯 Essencial

- **Hipertensão resistente** = PA não controlada apesar de **3 anti-hipertensivos em doses otimizadas** (incluindo um diurético), ou controlada com **4 ou mais** classes — sempre confirmar adesão e técnica de medida antes de rotular como resistente.
- **Antes de qualquer ajuste, descartar hipertensão do jaleco branco e pseudorresistência** — **MAPA (monitorização ambulatorial da PA) ou MRPA** são obrigatórias para confirmar o diagnóstico real de resistência.
- **Quarta droga de escolha na hipertensão resistente confirmada: espironolactona** (antagonista da aldosterona) — evidência robusta (estudo PATHWAY-2) de superioridade sobre outras opções nessa posição.
- **Esquema de base típico antes de acrescentar a quarta droga:** IECA/BRA + bloqueador de canal de cálcio + diurético tiazídico/similar, todos em dose máxima tolerada.
- **Hipertensão do jaleco branco** = PA elevada no consultório, mas normal fora dele (MAPA/MRPA) — não é hipertensão resistente verdadeira e não deve levar à intensificação medicamentosa.
- **Investigar causas secundárias** (apneia obstrutiva do sono, hiperaldosteronismo primário, doença renovascular, doença renal crônica) é obrigatório diante de resistência confirmada, especialmente quando a resposta à espironolactona é ruim.
- **Monitorar potássio e função renal** ao iniciar espironolactona — risco de hipercalemia, principalmente se associada a IECA/BRA ou em disfunção renal.

## 💎 Pearls

- O estudo **PATHWAY-2** consagrou a espironolactona como quarta droga preferencial ao mostrar redução pressórica superior a betabloqueador e alfabloqueador nesse degrau.
- **Hipertensão mascarada** é o oposto do jaleco branco: PA normal no consultório, elevada fora dele — também exige MAPA/MRPA para ser identificada e tem risco cardiovascular aumentado, ao contrário do jaleco branco (risco mais próximo do normotenso, mas não nulo).
- **Má adesão medicamentosa** é a causa mais comum de "pseudorresistência" — investigar antes de escalonar tratamento ou pedir exames extensos para causa secundária.
- **Apneia obstrutiva do sono** é a causa secundária mais prevalente em hipertensão resistente e frequentemente subdiagnosticada — rastrear ativamente.
- Doses inadequadas de diurético (ou diurético inadequado para a função renal, como tiazídico em clearance muito baixo) são causa frequente de resistência aparente.

## ⚠️ Pitfalls

- **Escalonar/trocar medicação em paciente com PA elevada só no consultório sem confirmar com MAPA/MRPA** — pode estar tratando efeito do jaleco branco, não hipertensão real.
- **Adicionar betabloqueador ou alfabloqueador como quarta droga antes de tentar espironolactona** na hipertensão resistente confirmada, sem contraindicação específica.
- **Rotular hipertensão como resistente sem confirmar adesão** ao esquema de três drogas e a técnica correta de aferição da PA.
- **Iniciar espironolactona sem monitorar potássio e função renal**, especialmente em uso concomitante de IECA/BRA.
- **Não investigar causas secundárias** diante de resistência verdadeira confirmada, tratando apenas com mais fármacos.

## 📝 Como a banca cobra

**Hipertensão resistente aparece em 2 questões (0,94% do corpus)**, ambas do ENARE, com foco no **manejo escalonado e na diferenciação com jaleco branco**.

- **ENARE 2025 Q50** testou a escolha da **quarta droga na hipertensão resistente** — resposta esperada: **espironolactona**, sobre esquema já otimizado de três classes.
- **ENARE 2026 Q58** cobrou o reconhecimento do **efeito do jaleco branco pela MAPA** em paciente sob investigação de hipertensão resistente — a banca testa se o candidato evita escalonar tratamento diante de PA de consultório discordante da PA ambulatorial.

## 🧠 Conceito e fisiopatologia

Na hipertensão resistente verdadeira, a persistência de PA elevada apesar de múltiplas classes farmacológicas geralmente reflete **expansão de volume não controlada** (excesso relativo de sódio/aldosterona) somada a fatores não farmacológicos (adesão, dose subótima, apneia do sono, ingestão excessiva de sódio). Isso explica por que um **antagonista da aldosterona** é particularmente eficaz nesse degrau: mesmo sem hiperaldosteronismo primário franco, muitos hipertensos resistentes têm um componente de aldosterona relativamente elevada para o estado de volume, mantendo retenção de sódio e água.

O **efeito do jaleco branco** decorre de resposta simpática transitória ao ambiente/situação de consulta médica, elevando a PA de forma reprodutível apenas nesse contexto — por isso métodos de medida fora do consultório (MAPA, que registra a PA ao longo de 24h incluindo sono, ou MRPA, medidas domiciliares seriadas) são indispensáveis para não superestimar a real carga pressórica do paciente e evitar tratamento excessivo.

## 🔎 Diagnóstico

- **Hipertensão resistente:** confirmar adesão, técnica de medida e esquema em dose otimizada; MAPA/MRPA para excluir pseudorresistência antes de investigar causas secundárias.
- **Efeito do jaleco branco:** PA de consultório persistentemente elevada com PA média na MAPA/MRPA dentro da normalidade.
- **Rastreio de causas secundárias (após confirmação):** polissonografia (apneia do sono), relação aldosterona/renina (hiperaldosteronismo primário), avaliação de doença renovascular e função renal.

## 💊 Tratamento

- **Esquema de base:** IECA ou BRA + bloqueador de canal de cálcio + diurético tiazídico/similar, todos em dose otimizada.
- **Quarta droga preferencial confirmada a resistência verdadeira:** espironolactona, com monitorização de potássio e creatinina.
- **Jaleco branco confirmado:** não intensificar tratamento medicamentoso; reforçar mudança de estilo de vida e reavaliação periódica com MAPA/MRPA.
- **Resistência persistente apesar de 4 drogas:** investigar e tratar causas secundárias especificamente (CPAP na apneia do sono, antagonista mineralocorticoide/cirurgia no hiperaldosteronismo, revascularização na estenose de artéria renal quando indicada).

## 📚 Referências essenciais

- Diretriz Brasileira de Hipertensão Arterial — Sociedade Brasileira de Cardiologia.
- ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults.
- Estudo PATHWAY-2 (Williams et al., Lancet) — espironolactona na hipertensão resistente.
`;

export default content.trim();
