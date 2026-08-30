/**
 * Resumo — Pneumologia · Pneumonias.
 *
 * Cobre as entidades do assunto no corpus: pneumonia pneumocócica e
 * sensibilidade da cultura de escarro, investigação inicial de pneumonia
 * grave e critérios de internação em pneumonia adquirida na comunidade.
 * Expandido com agentes atípicos, pneumonia aspirativa, definições de
 * HAP/VAP, complicações (derrame parapneumônico, empiema, abscesso
 * pulmonar) e prevenção vacinal — conteúdo ainda não cobrado no corpus,
 * mas plausível em provas futuras do assunto.
 */
const content = `
## 🎯 Essencial

- **Critérios de internação em PAC** (CURB-65 ou similar): **C**onfusão mental, **U**reia elevada, **R**espiração ≥30irpm, **B**aixa pressão arterial (PAS <90 ou PAD ≤60), idade **≥65 anos** — cada critério soma 1 ponto; ≥2 pontos já indica internação, ≥3 sugere considerar UTI.
- **Pneumonia grave exige investigação inicial ampla e rápida**: hemoculturas (2 pares antes do antibiótico, se possível), cultura de escarro, antígeno urinário para pneumococo e Legionella, gasometria arterial, além de radiografia/TC de tórax — tudo colhido sem atrasar o início do antibiótico empírico.
- **Antibiótico empírico não espera resultado de cultura** — inicia-se dentro da primeira hora (idealmente) diante de sepse/pneumonia grave; o resultado microbiológico serve para descalonar ou ajustar depois.
- **A cultura de escarro tem sensibilidade baixa para Streptococcus pneumoniae** (frequentemente citada em torno de 50% ou menos), limitada por contaminação de via aérea superior, uso prévio de antibiótico e dificuldade de coleta adequada — por isso um escarro negativo não afasta pneumonia pneumocócica.
- **Streptococcus pneumoniae continua sendo o agente etiológico mais comum de PAC** em adultos, mesmo com a limitação diagnóstica da cultura — a escolha do antibiótico empírico sempre cobre esse agente.
- **Gravidade não se define só pela saturação/frequência respiratória isolada** — usar escore validado (CURB-65, PSI) combinado ao julgamento clínico (comorbidades, resposta inicial ao tratamento) para decidir enfermaria vs. UTI.
- **Agentes atípicos (Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila) causam quadro mais insidioso**, com tosse seca, sintomas extrapulmonares (cefaleia, mialgia, diarreia na Legionella) e radiografia desproporcional ao exame físico — não crescem em cultura de rotina, por isso a cobertura empírica inclui macrolídeo/fluoroquinolona mesmo sem confirmação.
- **Pneumonia por aspiração** deve ser suspeitada em paciente com disfagia, rebaixamento do nível de consciência ou distúrbio de deglutição, tipicamente acometendo segmentos posteriores/dependentes do pulmão (lobo inferior direito é o mais comum, pela anatomia do brônquio principal direito).
- **PAC em imunocomprometido** (HIV, quimioterapia, uso crônico de corticoide/imunobiológico) exige ampliar o diagnóstico diferencial para agentes oportunistas (Pneumocystis jirovecii, fungos, micobactérias) além dos agentes típicos/atípicos — a cobertura empírica inicial e a investigação diagnóstica são mais amplas do que no imunocompetente.

## 💎 Pearls

- **Ureia elevada no CURB-65 reflete gravidade sistêmica**, não é sinal de doença renal primária — é o "U" mais frequentemente esquecido pelos candidatos, que tendem a fixar só em confusão e frequência respiratória.
- Uso de **antibiótico prévio à coleta do escarro** reduz ainda mais a sensibilidade da cultura — reforça por que a cultura negativa não deve mudar a cobertura antimicrobiana já iniciada empiricamente.
- O **antígeno urinário para pneumococo** tem sensibilidade melhor que a cultura de escarro e não é afetado por antibiótico prévio tão rapidamente — é ferramenta complementar útil em pneumonia grave.
- Pacientes **idosos podem ter PAC sem febre clássica** — confusão mental aguda pode ser a única manifestação, o que reforça a importância de manter alto índice de suspeita.
- **PSI (Pneumonia Severity Index) é mais complexo e mais sensível para identificar baixo risco** (permite alta segura), enquanto o CURB-65 é mais simples e mais usado à beira-leito para decisão rápida.
- **HAP (pneumonia hospitalar) e VAP (associada à ventilação mecânica)** são definidas por surgimento ≥48h após admissão hospitalar ou intubação, respectivamente — exigem cobertura empírica mais ampla (incluindo Pseudomonas e, conforme fatores de risco, MRSA), diferente da PAC.
- **Derrame parapneumônico complicado/empiema** deve ser suspeito quando há febre persistente apesar de antibiótico adequado — os critérios de Light e a análise do líquido pleural (pH <7,2, glicose baixa, LDH elevado, ou pus franco) indicam necessidade de drenagem, não só antibiótico.
- **Abscesso pulmonar** é complicação clássica da pneumonia aspirativa por anaeróbios, com nível hidroaéreo à imagem e escarro fétido — tratamento prolongado (semanas) com cobertura anaeróbia (ex.: clindamicina ou beta-lactâmico/inibidor de beta-lactamase).
- **Vacinação antipneumocócica (conjugada e polissacarídica) e antiinfluenza** reduzem incidência e gravidade de PAC em idosos e imunocomprometidos — prevenção é parte do manejo populacional do tema, não só o tratamento do episódio agudo.
- **Pneumocystis jirovecii** deve entrar no diferencial de pneumonia em paciente imunocomprometido (HIV com CD4 baixo, uso crônico de corticoide) com infiltrado intersticial bilateral e hipoxemia desproporcional ao achado radiográfico.
- **Procalcitonina** auxilia a diferenciar infecção bacteriana de viral/inflamatória e pode orientar duração/suspensão de antibiótico em alguns protocolos, mas não deve atrasar o início empírico em paciente grave — é ferramenta complementar, não substituta do julgamento clínico inicial.
- **Falha terapêutica em 48-72h** (persistência de febre, piora clínica ou radiográfica) deve motivar reavaliação ampla: agente resistente, foco não coberto pelo esquema (atípico, fúngico), complicação local (derrame/empiema/abscesso) ou diagnóstico alternativo (embolia pulmonar, insuficiência cardíaca, neoplasia).
- **O antígeno urinário para Legionella só detecta o sorogrupo 1** (responsável por ~70-80% dos casos) — um resultado negativo não exclui infecção por outros sorogrupos, então a suspeita clínica forte (quadro atípico grave, hiponatremia, elevação de transaminases, diarreia) justifica manter cobertura empírica mesmo com antígeno negativo.
- **Duração do tratamento em PAC não complicada pode ser encurtada para 5 dias** (em vez dos clássicos 7-10) se o paciente estiver afebril e clinicamente estável por 48-72h — critério de estabilidade clínica, não um número fixo de dias contado do início do antibiótico.
- **Esquema vacinal pneumocócico em adulto (imunocompetente com indicação, ou imunocomprometido)** segue sequência específica: **vacina conjugada primeiro** (PCV15 ou PCV20), seguida de VPP23 quando aplicável — a ordem inversa reduz a resposta imunológica à conjugada.

## ⚠️ Pitfalls

- **Aguardar cultura de escarro ou hemocultura para iniciar antibiótico** em pneumonia grave — atraso terapêutico aumenta mortalidade.
- **Descartar pneumonia pneumocócica por cultura de escarro negativa** — a sensibilidade baixa do exame não permite essa conclusão.
- **Usar só a saturação de oxigênio ou só a frequência respiratória isoladamente** para decidir internação, ignorando os demais critérios do escore validado.
- **Não repetir/ajustar a investigação em paciente grave que não melhora** — hemocultura, escarro e antígenos urinários ajudam a identificar falha terapêutica ou agente resistente/atípico.
- **Confundir critério de gravidade (indicação de internação) com critério de indicação de UTI** — são limiares diferentes no mesmo escore.
- **Tratar HAP/VAP com o mesmo esquema empírico da PAC** — subestima o risco de Pseudomonas e outros multirresistentes típicos do ambiente hospitalar.
- **Manter só antibiótico em empiema/derrame complicado sem drenagem** — atraso na drenagem prolonga internação e aumenta risco de fibrotórax.
- **Não pensar em pneumonia aspirativa/abscesso pulmonar** em paciente com fator de risco para aspiração (disfagia, rebaixamento, etilismo) e evolução arrastada com febre persistente.
- **Manter o mesmo esquema empírico indefinidamente diante de falha terapêutica em 48-72h**, sem reinvestigar agente resistente, foco não coberto, complicação local ou diagnóstico alternativo.
- **Restringir a cobertura empírica em imunocomprometido ao mesmo espectro do imunocompetente**, sem considerar agentes oportunistas (Pneumocystis, fungos) quando o contexto clínico sugere.
- **Excluir Legionella só por antígeno urinário negativo** — o teste cobre apenas o sorogrupo 1; suspeita clínica forte não deve ser descartada por esse motivo isolado.
- **Prolongar antibiótico rotineiramente por 7-10 dias em PAC não complicada** já estável clinicamente em 48-72h — a duração pode e deve ser encurtada para 5 dias nesse cenário, reduzindo pressão seletiva de resistência sem prejudicar o desfecho.

## 📝 Como a banca cobra

**Pneumonias aparecem em 3 questões (1,42% do corpus)**, uma do EBSERH e duas do ENARE, todas girando em torno de **gravidade, investigação e limitações diagnósticas** — não de reconhecimento clínico básico.

- **EBSERH 2025 Q46** testou diretamente a **baixa sensibilidade da cultura de escarro** para pneumonia pneumocócica — o ponto central é não deixar um exame com sensibilidade ruim mudar a conduta clínica já estabelecida.
- **ENARE 2025 Q27** cobrou a **investigação inicial de pneumonia grave**, avaliando se o candidato sabe montar o painel diagnóstico correto (culturas, antígenos, gasometria) sem atrasar o antibiótico.
- **ENARE 2026 Q35** cobrou os **critérios de internação em PAC**, provavelmente aplicando o CURB-65 (ou equivalente) a um caso clínico para decidir entre tratamento ambulatorial e hospitalar.

## 🧠 Conceito e fisiopatologia

A PAC resulta da colonização/infecção do parênquima pulmonar por patógenos que vencem as defesas do trato respiratório inferior (tosse, clearance mucociliar, imunidade local) — o *Streptococcus pneumoniae* continua líder por sua capacidade de evadir a fagocitose via cápsula polissacarídica, mesmo sendo colonizador comum da nasofaringe em pessoas saudáveis.

A limitação da cultura de escarro decorre de contaminação inevitável pela flora orofaríngea durante a coleta, degradação da amostra até o processamento, e supressão bacteriana por antibiótico já administrado — problemas que não afetam igualmente o antígeno urinário, que detecta um componente da parede celular bacteriana estável e não depende de bactéria viva na amostra.

Os escores de gravidade (CURB-65, PSI) traduzem, em variáveis objetivas, o grau de comprometimento sistêmico da infecção — confusão mental e hipotensão refletem hipoperfusão/sepse, ureia elevada reflete disfunção renal por hipoperfusão ou desidratação, e a combinação prediz mortalidade em 30 dias com boa acurácia.

Os **agentes atípicos** carecem de parede celular clássica (Mycoplasma) ou têm ciclo de replicação intracelular obrigatório (Chlamydophila, Legionella), o que explica tanto a dificuldade de cultivo em meios convencionais quanto a ineficácia de beta-lactâmicos isolados (que atuam na parede celular) contra eles — daí a necessidade de macrolídeo, tetraciclina ou fluoroquinolona, que atuam em alvos intracelulares/ribossomais.

## 🔎 Diagnóstico

- **Investigação inicial de pneumonia grave:** hemoculturas (antes do antibiótico, se não atrasar o início), cultura de escarro, antígeno urinário para pneumococo e Legionella, gasometria arterial, radiografia de tórax; TC se dúvida diagnóstica ou complicação suspeita.
- **Cultura de escarro:** exige amostra de boa qualidade (poucas células epiteliais, muitos leucócitos ao Gram) para ter validade — mesmo assim, sensibilidade limitada para pneumococo.
- **Critérios de gravidade:** CURB-65 (confusão, ureia, frequência respiratória, pressão arterial, idade ≥65) ou PSI — usados em conjunto com julgamento clínico.
- **Derrame parapneumônico:** toracocentese diagnóstica sempre que houver derrame relevante associado a pneumonia — critérios de Light e análise bioquímica/citológica/cultura definem se é simples (só antibiótico) ou complicado/empiema (drenagem).
- **HAP/VAP:** cultura de secreção respiratória (aspirado traqueal, lavado broncoalveolar) orientando descalonamento; considerar sempre patógenos multirresistentes conforme fatores de risco e epidemiologia local.

## 💊 Tratamento

- **PAC ambulatorial (baixo risco):** amoxicilina ou macrolídeo/doxiciclina conforme comorbidades e risco de resistência.
- **PAC internada em enfermaria:** beta-lactâmico + macrolídeo, ou fluoroquinolona respiratória isolada.
- **PAC grave/UTI:** beta-lactâmico de amplo espectro + macrolídeo (ou fluoroquinolona), cobertura adicional para Pseudomonas/MRSA se fatores de risco presentes; início dentro da primeira hora de reconhecimento de sepse.
- **HAP/VAP:** cobertura empírica ampla guiada por fatores de risco para multirresistência (Pseudomonas, Acinetobacter, MRSA), com descalonamento conforme cultura.
- **Pneumonia aspirativa/abscesso:** cobertura com atividade anaeróbia, curso prolongado no abscesso; drenagem se coleção volumosa ou refratária.
- **Derrame parapneumônico complicado/empiema:** drenagem torácica (dreno de tórax) associada a antibiótico; fibrinolíticos intrapleurais ou abordagem cirúrgica (videotoracoscopia) se loculado/refratário.
- **Reavaliação:** descalonar conforme resultado de cultura/antígeno, sem suspender cobertura de pneumococo só por cultura de escarro negativa isolada.
- **Falha terapêutica:** reinvestigar (nova imagem, culturas, marcadores) antes de simplesmente trocar o esquema empiricamente; ampliar cobertura para atípicos/resistentes/oportunistas conforme contexto clínico e fatores de risco do paciente.
- **Imunocomprometido:** cobertura empírica ampliada conforme grau e tipo de imunossupressão (incluir sulfametoxazol-trimetoprima se suspeita de Pneumocystis), com investigação diagnóstica mais agressiva (lavado broncoalveolar) diante de resposta inadequada.

## 📚 Referências essenciais

- IDSA/ATS Guidelines for the Management of Community-Acquired Pneumonia in Adults.
- Diretriz Brasileira de Pneumonia Adquirida na Comunidade (SBPT).
- Surviving Sepsis Campaign — recomendações de tempo para antibioticoterapia.
`;

export default content.trim();
