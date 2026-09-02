/**
 * Resumo — Cardiologia · Dislipidemia.
 *
 * Cobre as entidades do assunto no corpus: terapia hipolipemiante de alta
 * intensidade na doença arterial periférica, hipertrigliceridemia grave
 * refratária a fibrato e o ácido bempedoico como nova classe hipolipemiante.
 * Também traz estratificação de risco cardiovascular, hipercolesterolemia
 * familiar, causas secundárias de dislipidemia e outras classes
 * hipolipemiantes (PCSK9, inclisirana) que ainda não caíram nas provas reais.
 */
const content = `
## 🎯 Essencial

- **Doença arterial periférica (DAP)** é equivalente de risco cardiovascular aterosclerótico — indicação de **estatina de ALTA intensidade** (atorvastatina 40-80 mg ou rosuvastatina 20-40 mg) **independentemente do LDL basal**, com meta de LDL **<70 mg/dL** (ou <50 mg/dL se risco adicional muito alto).
- **Hipertrigliceridemia grave (>500-1000 mg/dL):** a preocupação imediata é o risco de **pancreatite aguda**, não apenas o risco cardiovascular — tratamento inicial: restrição de gordura, controle glicêmico, suspensão de álcool e **fibrato como primeira linha**.
- **Hipertrigliceridemia refratária a fibrato:** associar **ômega-3 em altas doses** e/ou niacina, e investigar **causas secundárias** (hipotireoidismo, DM descompensado, álcool, síndrome nefrótica, estrogênio, tamoxifeno, retinoides, corticoide).
- **Ácido bempedoico:** nova classe hipolipemiante que **inibe a ATP-citrato liase**, etapa da síntese de colesterol anterior à HMG-CoA redutase — é um pró-fármaco **ativado seletivamente no fígado**, não no músculo, o que reduz o risco de mialgia/miopatia em relação à estatina.
- Ácido bempedoico é opção especialmente útil na **intolerância à estatina**, reduzindo LDL adicionalmente quando associado a estatina ou ezetimiba, com **evidência de redução de eventos cardiovasculares** (estudo CLEAR Outcomes).
- Sequência terapêutica padrão em prevenção secundária: **estatina de alta intensidade → ezetimiba → inibidor de PCSK9 ou ácido bempedoico**, quando a meta de LDL não é atingida.

## 💎 Pearls

- DAP pode ser assintomática ou cursar com sintomas atípicos, não só claudicação clássica — mesmo assim, o diagnóstico já basta para indicar estatina de alta intensidade.
- Triglicerídeos **>1000 mg/dL** exigem tratamento **urgente** pelo risco iminente de pancreatite, mesmo sem sintomas abdominais no momento da avaliação.
- **Fenofibrato** é preferido à genfibrozila quando associado a estatina, pelo menor risco de interação farmacológica e miopatia.
- Ácido bempedoico pode **elevar ácido úrico** e desencadear crise de gota — atenção em paciente com histórico de hiperuricemia.
- Com triglicerídeos muito elevados (>400-500 mg/dL), a **fórmula de Friedewald fica inválida** para estimar LDL — usar LDL direto ou colesterol não-HDL como referência.
- **Hipercolesterolemia familiar (HF)** deve ser suspeitada diante de LDL muito elevado (geralmente >190 mg/dL no adulto), xantoma tendíneo, arco corneano em paciente jovem e história familiar de evento coronariano precoce — os **critérios de Dutch Lipid Clinic Network** ajudam a firmar o diagnóstico clínico e justificam o rastreamento em cascata de familiares de primeiro grau.
- Elevar HDL farmacologicamente (niacina, inibidores de CETP) **não reduziu eventos cardiovasculares** em grandes ensaios (AIM-HIGH, HPS2-THRIVE) — por isso HDL deixou de ser meta terapêutica, mesmo continuando marcador de risco.
- **Estatina + fármacos que inibem CYP3A4** (claritromicina, itraconazol, alguns antirretrovirais, suco de toranja em grande quantidade) aumenta o risco de miopatia/rabdomiólise, sobretudo com sinvastatina e atorvastatina — atenção redobrada em polifarmácia.
- **Sintomas musculares associados à estatina sem elevação de CK ("estatina intolerância" subjetiva) são frequentemente efeito nocebo**, não miopatia verdadeira — estudos com reexposição cega (paciente não sabe se está tomando estatina ou placebo) mostram que boa parte dos sintomas persiste mesmo com placebo; isso não significa ignorar a queixa, mas justifica tentar reintrodução antes de abandonar toda a classe.
- **Icosapente etílico (EPA purificado, isolado — diferente do óleo de peixe genérico com EPA+DHA)** reduziu eventos cardiovasculares em paciente com triglicerídeos moderadamente elevados (135-499 mg/dL) já em estatina, no estudo REDUCE-IT — combinações genéricas de ômega-3 (EPA+DHA) não reproduziram esse benefício em outros ensaios, então a formulação importa na hora de escolher.
- **Lipoproteína(a) elevada** é fator de risco cardiovascular geneticamente determinado, independente do LDL, cada vez mais dosado na estratificação de risco — hoje não existe terapia específica amplamente aprovada para reduzi-la isoladamente, mas seu achado justifica tratamento mais agressivo dos demais fatores modificáveis (LDL, pressão, tabagismo).

## ⚠️ Pitfalls

- **Escolher estatina de baixa/moderada intensidade em paciente com DAP estabelecida**, tratando como se fosse risco baixo/moderado.
- **Aguardar meta de LDL antes de tratar triglicerídeo muito alto** — a prioridade imediata em hipertrigliceridemia grave é prevenir pancreatite, não atingir meta de LDL.
- **Insistir em aumentar a dose de fibrato indefinidamente** sem investigar causa secundária ou associar outra classe terapêutica.
- **Achar que ácido bempedoico tem a mesma taxa de miopatia que estatina** — o mecanismo de ativação hepato-seletiva reduz esse risco.
- **Usar a fórmula de Friedewald** para calcular LDL com triglicerídeos muito elevados — gera valor não confiável.
- **Não suspeitar de hipercolesterolemia familiar** diante de LDL muito alto em paciente jovem com evento coronariano precoce na família — perde-se a chance de rastreio em cascata.
- **Suspender estatina definitivamente ao primeiro relato de mialgia** sem investigar CK, causas alternativas de dor muscular e sem tentar reintrodução em dose menor ou troca de estatina antes de abandonar a classe.
- **Confundir ômega-3 genérico (cápsula de farmácia, EPA+DHA) com icosapente etílico** ao interpretar um enunciado que cita redução de eventos cardiovasculares — o benefício comprovado em desfecho duro é da formulação isolada de EPA, não da suplementação genérica.

## 📝 Como a banca cobra

**Dislipidemia aparece em 3 questões (1,42% do corpus)**, todas do ENARE (2025 e 2026), cobrando decisão terapêutica prática em três cenários distintos.

- **Doença arterial periférica — terapia hipolipemiante de alta intensidade** (ENARE 2025 Q34, FÁCIL) testa a indicação de estatina de alta intensidade como equivalente de risco cardiovascular.
- **Hipertrigliceridemia grave refratária a fibrato** (ENARE 2025 Q45, DIFÍCIL) exige raciocínio de escalonamento terapêutico e investigação de causa secundária.
- **Ácido bempedoico — nova classe hipolipemiante** (ENARE 2026 Q47, FÁCIL) cobra o mecanismo de ação e a vantagem de segurança muscular frente à estatina.

## 🧠 Conceito e fisiopatologia

- LDL em excesso se deposita na íntima arterial → desencadeia o processo aterosclerótico
- Estatinas reduzem a síntese de LDL ao inibir a **HMG-CoA redutase**, etapa limitante da via do mevalonato
- **Ácido bempedoico** atua numa etapa anterior da mesma via, inibindo a **ATP-citrato liase**
- É um pró-fármaco ativado por uma enzima (muito-longa-cadeia acil-CoA sintetase 1) presente no fígado mas praticamente ausente no músculo esquelético
- Por isso sua ação fica restrita ao hepatócito → explica a menor incidência de sintomas musculares em comparação com a estatina

💡 Pensa assim: estatina e bempedoico bloqueiam a mesma "linha de produção" de colesterol em pontos diferentes — mas só o bempedoico tem a "chave" (a enzima ativadora) trancada dentro do fígado, então ele nunca "liga" dentro do músculo.

- Na hipertrigliceridemia grave, o excesso de lipoproteínas ricas em triglicerídeos sobrecarrega a lipase lipoproteica capilar
- Isso gera ácidos graxos livres em excesso, tóxicos ao parênquima pancreático → mecanismo por trás do risco de pancreatite aguda
- Esse risco se torna clinicamente relevante acima de 500-1000 mg/dL
- Na **hipercolesterolemia familiar**, mutações no receptor de LDL (ou em genes relacionados — apoB, PCSK9) reduzem a depuração hepática de LDL circulante
- Isso eleva o LDL desde o nascimento e antecipa em décadas o início da aterosclerose

## 📊 Estratificação de risco e classes terapêuticas

- **Estratificação de risco cardiovascular:** combina fatores clássicos (idade, sexo, tabagismo, pressão arterial, diabetes, LDL) em escores (Framingham, ASCVD Risk Estimator, escore de risco da SBC) para definir a meta de LDL e a intensidade do tratamento; presença de doença aterosclerótica manifesta (coronariana, cerebrovascular, DAP) já classifica o paciente como alto/muito alto risco, dispensando o cálculo do escore.
- **Intensidade das estatinas:** alta (redução de LDL ≥50%) — atorvastatina 40-80 mg, rosuvastatina 20-40 mg; moderada (redução 30-49%) — atorvastatina 10-20 mg, rosuvastatina 5-10 mg, sinvastatina 20-40 mg; baixa (redução <30%) — sinvastatina 10 mg, pravastatina 10-20 mg.
- **Causas secundárias de dislipidemia a sempre rastrear:** hipotireoidismo, diabetes descompensado, síndrome nefrótica, colestase, obesidade, alcoolismo, e drogas (tiazídicos, corticoide, inibidores de protease, retinoides, betabloqueador não seletivo).
- **Classes não-estatina:** ezetimiba (inibe absorção intestinal de colesterol), inibidores de PCSK9 (evolocumabe, alirocumabe — injetáveis, redução robusta de LDL), **inclisirana** (siRNA que silencia a síntese hepática de PCSK9, aplicação subcutânea a cada 6 meses), resinas sequestradoras de ácidos biliares (colestiramina, opção em gestantes) e ácido bempedoico.

## 🩺 Quadro clínico

- **Doença arterial periférica:** claudicação intermitente (dor em panturrilha ao esforço, aliviada pelo repouso), mas pode ser assintomática ou atípica; ao exame — pulsos distais diminuídos/ausentes, pele fria e brilhante, rarefação de pelos, e em fase avançada dor em repouso e úlceras isquêmicas de extremidade.
- **Hipertrigliceridemia grave:** frequentemente assintomática até o triglicerídeo atingir níveis de risco de pancreatite; pode cursar com **xantomas eruptivos** (pápulas amareladas em extremidades e nádegas), **lipemia retinalis** ao fundo de olho e dor abdominal quando já há pancreatite associada.
- **Hipercolesterolemia familiar:** **xantoma tendíneo** (tendão de Aquiles, extensores dos dedos), **arco corneano** em paciente jovem, **xantelasma** palpebral — nenhum desses achados é obrigatório, e sua ausência não afasta o diagnóstico.
- **Miopatia associada a estatina:** mialgia difusa, fraqueza proximal, podendo progredir para elevação de CK e, raramente, rabdomiólise com mioglobinúria — sintomas costumam surgir semanas após início/aumento de dose ou introdução de interação medicamentosa.

## 🔎 Diagnóstico

- **DAP:** índice tornozelo-braquial (ITB) <0,9 confirma o diagnóstico; claudicação intermitente é a apresentação clássica, mas nem sempre presente.
- **Hipertrigliceridemia grave:** triglicerídeos séricos em jejum muito elevados, podendo cursar com xantomas eruptivos e lipemia retinalis em casos extremos.
- **Hipercolesterolemia familiar:** LDL muito elevado desde jovem, xantoma tendíneo, arco corneano precoce, história familiar de doença coronariana prematura — critérios de Dutch Lipid Clinic Network ou teste genético confirmatório quando disponível.
- **Perfil lipídico geral:** colesterol total, LDL (direto se triglicerídeos muito altos), HDL, triglicerídeos e colesterol não-HDL.

## 📈 Complicações relevantes

- **Hipertrigliceridemia grave não tratada:** pancreatite aguda recorrente, que pode evoluir para pancreatite crônica e insuficiência pancreática exócrina/endócrina após episódios repetidos.
- **DAP não tratada/mal controlada:** isquemia crítica de membro, úlceras que não cicatrizam e risco de amputação — além de risco cardiovascular sistêmico elevado (IAM, AVC), já que a DAP é marcador de aterosclerose difusa.
- **Hipercolesterolemia familiar não diagnosticada:** doença coronariana prematura (antes dos 55 anos em homens, 65 em mulheres), podendo se manifestar já na terceira/quarta década de vida quando homozigota (forma rara e muito mais grave).
- **Miopatia por estatina não reconhecida:** progressão para rabdomiólise com lesão renal aguda por mioglobinúria — motivo pelo qual dosar CK e reavaliar a droga é mais seguro do que apenas aumentar a dose ou trocar de estatina sem investigar.
- **Uso crônico de estatina em dose alta:** elevação de transaminases (geralmente leve e transitória) — não exige suspensão rotineira, mas justifica monitorização em pacientes com hepatopatia de base.

## 💊 Tratamento

- **DAP:** estatina de alta intensidade + antiagregante plaquetário + controle de fatores de risco (tabagismo, pressão arterial, glicemia).
- **Hipertrigliceridemia grave:** restrição de gordura na dieta, suspensão de álcool, controle glicêmico, fibrato como primeira linha.
- **Refratária a fibrato:** associar ômega-3 em alta dose e/ou niacina; corrigir causa secundária identificada.
- **Intolerância a estatina/meta de LDL não atingida:** ezetimiba, inibidor de PCSK9, inclisirana ou ácido bempedoico, isolados ou combinados.
- **Suspeita de intolerância muscular à estatina:** dosar CK, tentar dose menor ou estatina de menor lipofilicidade (rosuvastatina/pravastatina) antes de abandonar a classe, associando ezetimiba/bempedoico se necessário.

## 📚 Referências essenciais

- Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose — Sociedade Brasileira de Cardiologia.
- AHA/ACC Guideline on the Management of Blood Cholesterol.
- Estudo CLEAR Outcomes — Ácido bempedoico e desfechos cardiovasculares em intolerantes à estatina.
- Dutch Lipid Clinic Network Criteria para diagnóstico de hipercolesterolemia familiar.
`;

export default content.trim();
