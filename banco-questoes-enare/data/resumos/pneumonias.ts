/**
 * Resumo — Pneumologia · Pneumonias.
 *
 * Cobre as entidades do assunto no corpus: pneumonia pneumocócica e
 * sensibilidade da cultura de escarro, investigação inicial de pneumonia
 * grave e critérios de internação em pneumonia adquirida na comunidade.
 */
const content = `
## 🎯 Essencial

- **Critérios de internação em PAC** (CURB-65 ou similar): **C**onfusão mental, **U**reia elevada, **R**espiração ≥30irpm, **B**aixa pressão arterial (PAS <90 ou PAD ≤60), idade **≥65 anos** — cada critério soma 1 ponto; ≥2 pontos já indica internação, ≥3 sugere considerar UTI.
- **Pneumonia grave exige investigação inicial ampla e rápida**: hemoculturas (2 pares antes do antibiótico, se possível), cultura de escarro, antígeno urinário para pneumococo e Legionella, gasometria arterial, além de radiografia/TC de tórax — tudo colhido sem atrasar o início do antibiótico empírico.
- **Antibiótico empírico não espera resultado de cultura** — inicia-se dentro da primeira hora (idealmente) diante de sepse/pneumonia grave; o resultado microbiológico serve para descalonar ou ajustar depois.
- **A cultura de escarro tem sensibilidade baixa para Streptococcus pneumoniae** (frequentemente citada em torno de 50% ou menos), limitada por contaminação de via aérea superior, uso prévio de antibiótico e dificuldade de coleta adequada — por isso um escarro negativo não afasta pneumonia pneumocócica.
- **Streptococcus pneumoniae continua sendo o agente etiológico mais comum de PAC** em adultos, mesmo com a limitação diagnóstica da cultura — a escolha do antibiótico empírico sempre cobre esse agente.
- **Gravidade não se define só pela saturação/frequência respiratória isolada** — usar escore validado (CURB-65, PSI) combinado ao julgamento clínico (comorbidades, resposta inicial ao tratamento) para decidir enfermaria vs. UTI.

## 💎 Pearls

- **Ureia elevada no CURB-65 reflete gravidade sistêmica**, não é sinal de doença renal primária — é o "U" mais frequentemente esquecido pelos candidatos, que tendem a fixar só em confusão e frequência respiratória.
- Uso de **antibiótico prévio à coleta do escarro** reduz ainda mais a sensibilidade da cultura — reforça por que a cultura negativa não deve mudar a cobertura antimicrobiana já iniciada empiricamente.
- O **antígeno urinário para pneumococo** tem sensibilidade melhor que a cultura de escarro e não é afetado por antibiótico prévio tão rapidamente — é ferramenta complementar útil em pneumonia grave.
- Pacientes **idosos podem ter PAC sem febre clássica** — confusão mental aguda pode ser a única manifestação, o que reforça a importância de manter alto índice de suspeita.
- **PSI (Pneumonia Severity Index) é mais complexo e mais sensível para identificar baixo risco** (permite alta segura), enquanto o CURB-65 é mais simples e mais usado à beira-leito para decisão rápida.

## ⚠️ Pitfalls

- **Aguardar cultura de escarro ou hemocultura para iniciar antibiótico** em pneumonia grave — atraso terapêutico aumenta mortalidade.
- **Descartar pneumonia pneumocócica por cultura de escarro negativa** — a sensibilidade baixa do exame não permite essa conclusão.
- **Usar só a saturação de oxigênio ou só a frequência respiratória isoladamente** para decidir internação, ignorando os demais critérios do escore validado.
- **Não repetir/ajustar a investigação em paciente grave que não melhora** — hemocultura, escarro e antígenos urinários ajudam a identificar falha terapêutica ou agente resistente/atípico.
- **Confundir critério de gravidade (indicação de internação) com critério de indicação de UTI** — são limiares diferentes no mesmo escore.

## 📝 Como a banca cobra

**Pneumonias aparecem em 3 questões (1,42% do corpus)**, uma do EBSERH e duas do ENARE, todas girando em torno de **gravidade, investigação e limitações diagnósticas** — não de reconhecimento clínico básico.

- **EBSERH 2025 Q46** testou diretamente a **baixa sensibilidade da cultura de escarro** para pneumonia pneumocócica — o ponto central é não deixar um exame com sensibilidade ruim mudar a conduta clínica já estabelecida.
- **ENARE 2025 Q27** cobrou a **investigação inicial de pneumonia grave**, avaliando se o candidato sabe montar o painel diagnóstico correto (culturas, antígenos, gasometria) sem atrasar o antibiótico.
- **ENARE 2026 Q35** cobrou os **critérios de internação em PAC**, provavelmente aplicando o CURB-65 (ou equivalente) a um caso clínico para decidir entre tratamento ambulatorial e hospitalar.

## 🧠 Conceito e fisiopatologia

A PAC resulta da colonização/infecção do parênquima pulmonar por patógenos que vencem as defesas do trato respiratório inferior (tosse, clearance mucociliar, imunidade local) — o *Streptococcus pneumoniae* continua líder por sua capacidade de evadir a fagocitose via cápsula polissacarídica, mesmo sendo colonizador comum da nasofaringe em pessoas saudáveis.

A limitação da cultura de escarro decorre de contaminação inevitável pela flora orofaríngea durante a coleta, degradação da amostra até o processamento, e supressão bacteriana por antibiótico já administrado — problemas que não afetam igualmente o antígeno urinário, que detecta um componente da parede celular bacteriana estável e não depende de bactéria viva na amostra.

Os escores de gravidade (CURB-65, PSI) traduzem, em variáveis objetivas, o grau de comprometimento sistêmico da infecção — confusão mental e hipotensão refletem hipoperfusão/sepse, ureia elevada reflete disfunção renal por hipoperfusão ou desidratação, e a combinação prediz mortalidade em 30 dias com boa acurácia.

## 🔎 Diagnóstico

- **Investigação inicial de pneumonia grave:** hemoculturas (antes do antibiótico, se não atrasar o início), cultura de escarro, antígeno urinário para pneumococo e Legionella, gasometria arterial, radiografia de tórax; TC se dúvida diagnóstica ou complicação suspeita.
- **Cultura de escarro:** exige amostra de boa qualidade (poucas células epiteliais, muitos leucócitos ao Gram) para ter validade — mesmo assim, sensibilidade limitada para pneumococo.
- **Critérios de gravidade:** CURB-65 (confusão, ureia, frequência respiratória, pressão arterial, idade ≥65) ou PSI — usados em conjunto com julgamento clínico.

## 💊 Tratamento

- **PAC ambulatorial (baixo risco):** amoxicilina ou macrolídeo/doxiciclina conforme comorbidades e risco de resistência.
- **PAC internada em enfermaria:** beta-lactâmico + macrolídeo, ou fluoroquinolona respiratória isolada.
- **PAC grave/UTI:** beta-lactâmico de amplo espectro + macrolídeo (ou fluoroquinolona), cobertura adicional para Pseudomonas/MRSA se fatores de risco presentes; início dentro da primeira hora de reconhecimento de sepse.
- **Reavaliação:** descalonar conforme resultado de cultura/antígeno, sem suspender cobertura de pneumococo só por cultura de escarro negativa isolada.

## 📚 Referências essenciais

- IDSA/ATS Guidelines for the Management of Community-Acquired Pneumonia in Adults.
- Diretriz Brasileira de Pneumonia Adquirida na Comunidade (SBPT).
- Surviving Sepsis Campaign — recomendações de tempo para antibioticoterapia.
`;

export default content.trim();
