/**
 * Resumo — Cardiologia · Hipertensão arterial.
 *
 * Cobre as entidades do assunto no corpus: hipertensão resistente
 * (indicação da quarta droga — espironolactona) e o efeito do jaleco
 * branco identificado pela MAPA na avaliação de hipertensão resistente.
 * Inclui também extrapolações de alto rendimento (classificação/estadiamento
 * da PA, causas secundárias específicas, crise hipertensiva, contraindicações
 * das classes anti-hipertensivas) ainda não cobradas no corpus, mas
 * plausíveis em provas futuras.
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
- **Ainda não cobrado no corpus, mas alta probabilidade:** a **classificação de PA da SBC/ACC-AHA** — ótima (<120/80), normal, pré-hipertensão/elevada, estágio 1 (≥130-139/80-89 ou ≥140-159/90-99 conforme a diretriz), estágio 2 e **crise hipertensiva** (PAS ≥180 e/ou PAD ≥120) — e a diferença entre **urgência** (sem lesão de órgão-alvo aguda, reduzir PA em 24-48h com via oral) e **emergência hipertensiva** (com lesão aguda de órgão-alvo — AVC, EAP, dissecção de aorta, encefalopatia — reduzir PA em minutos/horas com droga endovenosa titulável).
- **Rastreio de lesão de órgão-alvo** deve constar da avaliação inicial de todo hipertenso: fundoscopia (retinopatia hipertensiva), ECG/ecocardiograma (hipertrofia de VE), função renal e relação albumina/creatinina urinária (nefropatia hipertensiva), índice tornozelo-braquial quando houver suspeita de doença arterial periférica.
- **Hipertensão na gestação (pré-eclâmpsia)** é diagnóstico diferencial obrigatório em gestante com PA elevada — hipertensão após 20 semanas + proteinúria ou disfunção orgânica; anti-hipertensivos de escolha na gestação são metildopa, nifedipino e labetalol; IECA/BRA são contraindicados por teratogenicidade.

## 💎 Pearls

- O estudo **PATHWAY-2** consagrou a espironolactona como quarta droga preferencial ao mostrar redução pressórica superior a betabloqueador e alfabloqueador nesse degrau.
- **Hipertensão mascarada** é o oposto do jaleco branco: PA normal no consultório, elevada fora dele — também exige MAPA/MRPA para ser identificada e tem risco cardiovascular aumentado, ao contrário do jaleco branco (risco mais próximo do normotenso, mas não nulo).
- **Má adesão medicamentosa** é a causa mais comum de "pseudorresistência" — investigar antes de escalonar tratamento ou pedir exames extensos para causa secundária.
- **Apneia obstrutiva do sono** é a causa secundária mais prevalente em hipertensão resistente e frequentemente subdiagnosticada — rastrear ativamente.
- Doses inadequadas de diurético (ou diurético inadequado para a função renal, como tiazídico em clearance muito baixo) são causa frequente de resistência aparente.
- **Ainda não cobrado, mas clássico de prova:** rastreio de **hiperaldosteronismo primário** com relação aldosterona/renina plasmática (RAR elevada), especialmente em hipertensão resistente com hipocalemia espontânea ou incidentaloma adrenal — é a causa secundária endócrina mais comum de HAS resistente.
- **Estenose de artéria renal:** suspeitar de causa **fibromuscular** em mulher jovem sem fatores de risco ateroscleróticos (sopro abdominal, início antes dos 30 anos) versus causa **aterosclerótica** em idoso com doença vascular difusa; piora aguda da função renal após IECA/BRA é achado clássico de estenose bilateral (ou unilateral em rim único).
- **Efeitos adversos de classes específicas** a memorizar: espironolactona pode causar ginecomastia dolorosa (trocar por eplerenona se ocorrer); IECA/BRA são contraindicados na gestação e na estenose bilateral de artéria renal; tiazídicos pioram hiperuricemia/gota e hiperglicemia; betabloqueadores exigem cautela em asma/DPOC grave e bloqueio AV avançado.
- **Denervação renal por cateter** é opção emergente para hipertensão resistente verdadeira refratária a tratamento farmacológico otimizado, ainda não incorporada como rotina nas diretrizes brasileiras.
- **Feocromocitoma** classicamente cursa com a tríade cefaleia + sudorese + palpitações em crises paroxísticas de hipertensão — rastreio com metanefrinas plasmáticas ou urinárias fracionadas.
- **Síndrome de Cushing** como causa secundária: hipertensão associada a ganho de peso central, estrias violáceas, fácies em lua cheia e hiperglicemia — cortisol salivar noturno ou teste de supressão com dexametasona para rastreio.
- **Coarctação de aorta** deve ser lembrada em hipertensão de início jovem com diferença de pulsos/PA entre membros superiores e inferiores.
- **Ainda não cobrado, mas de alto rendimento:** a **meta pressórica varia por perfil de risco**, não é única para todo hipertenso — idosos frágeis/muito idosos (≥80 anos) toleram metas menos rigorosas (evitar hipotensão ortostática e quedas), enquanto diabéticos e nefropatas costumam ter meta mais estrita quando toleram bem, refletindo o balanço risco-benefício individualizado das diretrizes mais recentes.
- **Betabloqueador não é mais primeira linha isolada para HAS não complicada** nas diretrizes atuais (SBC/ESC/ESH) — reservado para indicações específicas (doença coronariana, insuficiência cardíaca, arritmia, gestante), diferente de IECA/BRA, bloqueador de canal de cálcio e tiazídico, que seguem como as quatro classes de primeira linha.
- **Combinação de IECA/BRA com inibidor direto da renina (alisquireno) é contraindicada** — risco aumentado de hipercalemia e lesão renal aguda sem benefício adicional de controle pressórico, achado de estudo que mudou a prática.

## ⚠️ Pitfalls

- **Escalonar/trocar medicação em paciente com PA elevada só no consultório sem confirmar com MAPA/MRPA** — pode estar tratando efeito do jaleco branco, não hipertensão real.
- **Adicionar betabloqueador ou alfabloqueador como quarta droga antes de tentar espironolactona** na hipertensão resistente confirmada, sem contraindicação específica.
- **Rotular hipertensão como resistente sem confirmar adesão** ao esquema de três drogas e a técnica correta de aferição da PA.
- **Iniciar espironolactona sem monitorar potássio e função renal**, especialmente em uso concomitante de IECA/BRA.
- **Não investigar causas secundárias** diante de resistência verdadeira confirmada, tratando apenas com mais fármacos.
- **Tratar emergência hipertensiva com anti-hipertensivo oral de ação lenta** ou reduzir a PA de forma muito rápida/agressiva (risco de hipoperfusão de órgãos já lesados) — a meta é reduzir a PAM em cerca de 25% na primeira hora, não normalizar de imediato.
- **Prescrever IECA/BRA sem rastrear gestação ou sem considerar estenose bilateral de artéria renal**, expondo a paciente a teratogenicidade ou a piora aguda da função renal.
- **Não pesquisar lesão de órgão-alvo na primeira avaliação** do hipertenso recém-diagnosticado, perdendo a chance de estratificar risco cardiovascular adequadamente.
- **Confundir pré-eclâmpsia com hipertensão crônica agravada na gestação** sem avaliar proteinúria/disfunção orgânica, ou prescrever IECA/BRA para gestante hipertensa.
- **Associar IECA/BRA com inibidor direto da renina** achando que é só "mais um bloqueio do SRAA aditivo" — combinação contraindicada pelo risco de hipercalemia e IRA.
- **Aplicar a mesma meta pressórica rígida a todo paciente independentemente da idade/fragilidade** — hipotensão iatrogênica em idoso frágil aumenta risco de queda e fratura, sem benefício cardiovascular adicional proporcional.

## 📝 Como a banca cobra

**Hipertensão resistente aparece em 2 questões (0,94% do corpus)**, ambas do ENARE, com foco no **manejo escalonado e na diferenciação com jaleco branco**.

- **ENARE 2025 Q50** testou a escolha da **quarta droga na hipertensão resistente** — resposta esperada: **espironolactona**, sobre esquema já otimizado de três classes.
- **ENARE 2026 Q58** cobrou o reconhecimento do **efeito do jaleco branco pela MAPA** em paciente sob investigação de hipertensão resistente — a banca testa se o candidato evita escalonar tratamento diante de PA de consultório discordante da PA ambulatorial.

## 🧠 Conceito e fisiopatologia

- Na hipertensão resistente verdadeira, a persistência de PA elevada apesar de múltiplas classes farmacológicas geralmente reflete **expansão de volume não controlada** (excesso relativo de sódio/aldosterona)
- Soma-se a fatores não farmacológicos: má adesão, dose subótima, apneia do sono, ingestão excessiva de sódio
- Por isso um **antagonista da aldosterona** é particularmente eficaz nesse degrau
- Mesmo sem hiperaldosteronismo primário franco, muitos hipertensos resistentes têm aldosterona relativamente elevada para o estado de volume → mantém retenção de sódio e água
- **Efeito do jaleco branco:** resposta simpática transitória ao ambiente/situação de consulta médica, elevando a PA de forma reprodutível só nesse contexto
- Por isso métodos de medida fora do consultório são indispensáveis — MAPA (registra a PA ao longo de 24h, incluindo sono) ou MRPA (medidas domiciliares seriadas) — evitam superestimar a carga pressórica real e tratamento excessivo
- **Emergência hipertensiva:** a elevação abrupta da PA supera a capacidade de autorregulação vascular de órgãos-alvo → lesão endotelial aguda (necrose fibrinoide arteriolar)
- Por isso a redução deve ser controlada, não excessivamente rápida — reduzir rápido demais pode converter isquemia relativa por hipoperfusão em órgãos já cronicamente adaptados a uma PA mais alta

💡 Pensa assim: o corpo hipertenso crônico "recalibrou" sua autorregulação para um patamar mais alto de PA — baixar rápido demais é puxar o tapete: o órgão acostumado ao "chão mais alto" sofre isquemia relativa.

## 🩺 Quadro clínico

- **Hipertensão crônica/resistente:** geralmente assintomática ("assassina silenciosa"), achado em consulta de rotina ou já com lesão de órgão-alvo estabelecida (retinopatia, hipertrofia de VE, doença renal crônica).
- **Emergência hipertensiva** (extrapolação): sintomas dependem do órgão acometido — cefaleia/confusão/convulsão (encefalopatia hipertensiva), dispneia súbita (edema agudo de pulmão), dor torácica lancinante irradiada para o dorso (dissecção de aorta), déficit neurológico focal (AVC).
- **Feocromocitoma/causas endócrinas:** crises paroxísticas com cefaleia, sudorese profusa e palpitações são a apresentação clássica, distinta da hipertensão sustentada mais comum.

## 🔎 Diagnóstico

- **Hipertensão resistente:** confirmar adesão, técnica de medida e esquema em dose otimizada; MAPA/MRPA para excluir pseudorresistência antes de investigar causas secundárias.
- **Efeito do jaleco branco:** PA de consultório persistentemente elevada com PA média na MAPA/MRPA dentro da normalidade.
- **Rastreio de causas secundárias (após confirmação):** polissonografia (apneia do sono), relação aldosterona/renina (hiperaldosteronismo primário), avaliação de doença renovascular e função renal, cortisol/exames para Cushing e catecolaminas/metanefrinas para feocromocitoma quando houver suspeita clínica dirigida.
- **Crise hipertensiva** (extrapolação): sempre avaliar sinais de lesão aguda de órgão-alvo (fundoscopia, ECG, função renal, exame neurológico, dor torácica/dissecção) para diferenciar urgência de emergência antes de definir a via e a velocidade de redução da PA.

## 💊 Tratamento

- **Esquema de base:** IECA ou BRA + bloqueador de canal de cálcio + diurético tiazídico/similar, todos em dose otimizada.
- **Quarta droga preferencial confirmada a resistência verdadeira:** espironolactona, com monitorização de potássio e creatinina.
- **Jaleco branco confirmado:** não intensificar tratamento medicamentoso; reforçar mudança de estilo de vida e reavaliação periódica com MAPA/MRPA.
- **Resistência persistente apesar de 4 drogas:** investigar e tratar causas secundárias especificamente (CPAP na apneia do sono, antagonista mineralocorticoide/cirurgia no hiperaldosteronismo, revascularização na estenose de artéria renal quando indicada); quinta linha inclui betabloqueador, alfabloqueador ou vasodilatador direto (hidralazina/minoxidil).
- **Emergência hipertensiva** (extrapolação): anti-hipertensivo endovenoso titulável (nitroprussiato, labetalol, nicardipina) conforme o órgão-alvo acometido, com meta de redução de cerca de 25% da PAM na primeira hora (exceções: dissecção de aorta — reduzir mais rápido e agressivamente; AVC isquêmico — metas mais permissivas conforme elegibilidade a trombólise).
- **Urgência hipertensiva:** ajuste/reintrodução de anti-hipertensivo oral, redução gradual em 24-48h, sem necessidade de internação em terapia intensiva.
- **Pré-eclâmpsia** (extrapolação): metildopa, nifedipino ou labetalol como anti-hipertensivos de escolha; sulfato de magnésio para profilaxia/tratamento de eclâmpsia; interrupção da gestação é o tratamento definitivo, individualizada pela idade gestacional e gravidade.

## 📚 Referências essenciais

- Diretriz Brasileira de Hipertensão Arterial — Sociedade Brasileira de Cardiologia.
- ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults.
- Estudo PATHWAY-2 (Williams et al., Lancet) — espironolactona na hipertensão resistente.
- ESC/ESH Guidelines for the Management of Arterial Hypertension.
`;

export default content.trim();
