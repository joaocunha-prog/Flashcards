/**
 * Resumo — Nefrologia · Doença renal crônica.
 *
 * Cobre as entidades do assunto no corpus: correlação entre uremia e taxa
 * de filtração glomerular, limitações da dosagem de ureia na avaliação
 * renal, uso de finerenona na DRC diabética e vacinação contra VSR no
 * paciente com DRC. Também traz, como extrapolação de alto rendimento além
 * do que já foi cobrado, as complicações sistêmicas da DRC (CKD-MBD,
 * anemia, acidose), ajuste de fármacos e panorama de terapia renal
 * substitutiva.
 */
const content = `
## 🎯 Essencial

- **DRC** é definida por TFG <60 mL/min/1,73m² e/ou marcador de dano renal (albuminúria) presentes por **≥3 meses**. O estadiamento KDIGO combina categoria de TFG (G1-G5) com categoria de albuminúria (A1-A3).
- **Sintomas urêmicos** (náusea, prurido, encefalopatia, pericardite) concentram-se em TFG muito baixa (estágio G5, geralmente <15) — **não há correlação linear estreita** entre nível de ureia sérica e gravidade clínica ao longo de todo o espectro da DRC.
- **A ureia isolada é marcador pouco confiável de função renal**: varia com dieta hiperproteica, catabolismo, sangramento digestivo alto, uso de corticoide e estado de hidratação — pode subir desproporcionalmente à queda real da TFG (relação ureia/creatinina elevada sugere causa pré-renal, não necessariamente piora intrínseca).
- **Finerenona** (antagonista não esteroidal do receptor mineralocorticoide) reduz progressão renal e eventos cardiovasculares em diabéticos tipo 2 com DRC e albuminúria — adicionada a IECA/BRA já otimizados, não em substituição a eles.
- Pacientes com **DRC avançada/diálise** integram grupo de risco para doença respiratória grave e devem receber **vacina contra VSR** (vírus sincicial respiratório), junto de influenza, pneumocócica e hepatite B.
- Pilares atuais de nefroproteção no diabético com DRC: **IECA/BRA + iSGLT2 (dapagliflozina/empagliflozina) + finerenona**, combinados conforme critérios de TFG e potássio.
- A **etiologia mais comum de DRC** no mundo e no Brasil é a nefropatia diabética, seguida por nefrosclerose hipertensiva e glomerulonefrites — a causa de base influencia o ritmo de progressão e a escolha terapêutica.
- A DRC é, isoladamente, um dos principais fatores de risco cardiovascular — a **principal causa de morte do paciente com DRC é cardiovascular**, não a uremia terminal em si.
- **Encaminhamento ao nefrologista** é recomendado a partir de TFG <30 mL/min/1,73m² (estágio G4), albuminúria muito elevada (categoria A3), perda rápida de função renal ou dificuldade de controle de complicações — encaminhar tardiamente reduz o tempo disponível para planejamento de terapia renal substitutiva.
- Doenças glomerulares (glomerulonefrites primárias e secundárias, como nefropatia por IgA e nefropatia lúpica) são causas menos comuns, porém importantes, de DRC — devem ser suspeitadas diante de hematúria dismórfica, cilindros hemáticos ou proteinúria desproporcional ao grau de hipertensão/diabetes.

## 💎 Pearls

- A creatinina também tem limitações (depende de massa muscular), mas a **TFG estimada por CKD-EPI** continua sendo o parâmetro mais robusto para estadiamento — mais confiável que ureia ou creatinina isoladas.
- Relação ureia/creatinina desproporcionalmente alta aponta para causa pré-renal (desidratação, sangramento digestivo alto) e não necessariamente para piora da TFG basal.
- Finerenona é indicada **independentemente do controle glicêmico**, desde que a TFG e o potássio estejam dentro dos critérios de segurança estabelecidos pelos estudos que a validaram (FIDELIO-DKD/FIGARO-DKD).
- **Hipercalemia** é o principal evento adverso a monitorar com finerenona, especialmente associada a IECA/BRA — checar potássio antes de iniciar e durante o uso.
- A recomendação de vacina contra VSR para grupos de risco (incluindo DRC avançada e idosos) é tema recente — vale atenção redobrada em provas de 2025-2026.
- **iSGLT2** não deve ser iniciado com TFG muito baixa (geralmente <20 mL/min/1,73m² para início, embora possa ser mantido se já em uso) e predispõe a infecções fúngicas genitais e, raramente, a cetoacidose diabética euglicêmica.
- **Metformina** deve ter a dose reduzida a partir de TFG <45 e é contraindicada com TFG <30 pelo risco de acidose lática.
- AINEs devem ser evitados na DRC pelo risco de queda aguda adicional da TFG por vasoconstrição da arteríola aferente.
- **Hipercalemia grave** (com alterações eletrocardiográficas) é emergência independentemente da causa: gluconato de cálcio para estabilizar a membrana cardíaca, seguido de medidas que desviam potássio para o intracelular (insulina + glicose, beta-agonista inalatório) e, por fim, medidas de remoção real (diurético de alça, resina de troca, diálise se refratária).
- Pacientes em lista de transplante renal precisam de avaliação cardiovascular e oncológica pré-transplante, além de rastreio infeccioso (sorologias) — contraindicações absolutas incluem neoplasia ativa não controlada e infecção ativa não tratada.

## ⚠️ Pitfalls

- **Usar ureia isolada** para estimar a gravidade da DRC ou decidir início de diálise — a decisão deve se basear na TFG estimada e no quadro clínico global, não em um único marcador.
- Achar que sintomas urêmicos surgem de forma proporcional à queda de TFG desde estágios leves — eles se concentram nos estágios mais avançados.
- Suspender finerenona por receio de hipercalemia sem antes checar o potássio real do paciente — a droga é segura dentro dos critérios de monitorização definidos.
- Não vacinar o paciente com DRC contra VSR por considerá-la "vacina só de idoso saudável" — a DRC é grupo de risco independente da idade.
- Confundir finerenona com espironolactona/eplerenona (antagonistas esteroidais do receptor mineralocorticoide) — a finerenona tem perfil de seletividade e efeitos adversos hormonais distintos.
- Manter dose plena de metformina ou prescrever AINE sem checar a TFG do paciente com DRC — ambos os erros são frequentes e evitáveis.
- Não investigar/tratar anemia e hiperparatireoidismo secundário só porque o paciente "ainda não está em diálise" — essas complicações começam a se instalar já em estágios intermediários (G3).
- Encaminhar tardiamente ao nefrologista (só quando o paciente já está sintomático ou muito próximo da diálise) — o encaminhamento precoce a partir do estágio G4 permite planejamento de acesso e melhor preparo do paciente.
- Atribuir toda hematúria/proteinúria em paciente diabético apenas à nefropatia diabética sem considerar glomerulopatia associada — sinais atípicos (hematúria dismórfica, evolução muito rápida) merecem investigação adicional.

## 📝 Como a banca cobra

**Doença renal crônica aparece em 4 questões (1,89% do corpus)**, dividida entre EBSERH 2025 e ENARE 2026, cobrando tanto interpretação laboratorial clássica quanto terapêutica de ponta.

- **EBSERH 2025 Q39** testou a correlação entre uremia clínica e taxa de filtração glomerular — o ponto central é que sintomas urêmicos não acompanham linearmente qualquer queda de TFG.
- **EBSERH 2025 Q57** cobrou as limitações da dosagem isolada de ureia na avaliação da função renal.
- **ENARE 2026 Q2** trouxe o uso de finerenona na DRC diabética, tema de incorporação terapêutica recente.
- **ENARE 2026 Q70** cobrou vacinação do paciente com DRC, especificamente a indicação da vacina contra VSR.

## 🧠 Conceito e fisiopatologia

A DRC representa perda progressiva e irreversível de néfrons funcionantes; os néfrons remanescentes sofrem hiperfiltração compensatória que, paradoxalmente, perpetua a lesão glomerular ao longo do tempo (hipótese de Brenner). As toxinas urêmicas acumulam-se predominantemente quando a reserva funcional renal já está muito reduzida, explicando por que a clínica urêmica surge tardiamente no curso da doença.

A ureia é produto do catabolismo proteico hepático, filtrada livremente mas parcialmente reabsorvida no túbulo proximal de forma dependente do fluxo urinário — por isso reflete de forma imprecisa a TFG isoladamente, ao contrário da creatinina (e, melhor ainda, da TFG estimada), que sofre menos interferência de fatores extrarrenais como dieta e estado volêmico.

A finerenona bloqueia o receptor mineralocorticoide com estrutura não esteroidal, reduzindo a inflamação e a fibrose renal e cardiovascular mediadas pela aldosterona, com menor afinidade por receptores de andrógeno e progesterona — isso explica seu perfil de efeitos adversos hormonais mais favorável que os antagonistas esteroidais clássicos.

A perda de néfrons também compromete funções endócrinas e metabólicas do rim para além da filtração: cai a produção de eritropoetina (anemia normocítica normocrômica), cai a hidroxilação da vitamina D (hipocalcemia, hiperparatireoidismo secundário e doença óssea — CKD-MBD) e se acumula ânion não excretado (acidose metabólica com ânion gap variável) — esse conjunto de disfunções explica por que o manejo da DRC vai muito além de controlar a progressão da TFG.

As duas principais causas de DRC (nefropatia diabética e nefrosclerose hipertensiva) compartilham um mecanismo comum de lesão microvascular glomerular progressiva, o que justifica por que o controle rigoroso de pressão arterial e glicemia continua sendo pilar terapêutico mesmo na era dos novos nefroprotetores — iSGLT2 e finerenona se somam, não substituem, o controle metabólico e pressórico de base.

## 🩺 Quadro clínico

- **DRC inicial (G1-G3):** geralmente assintomática, detectada por exame de rotina (creatinina/TFG alterada, albuminúria) — a maioria dos pacientes não tem queixas até estágios avançados.
- **DRC avançada (G4-G5):** fadiga (anemia), prurido e náusea (toxinas urêmicas), dispneia (sobrecarga volêmica/anemia/acidose), cãibras e dor óssea (CKD-MBD), edema.
- **Hipertensão arterial** é ao mesmo tempo causa e consequência da DRC, formando ciclo vicioso que acelera a perda de função renal quando mal controlada.
- **Pericardite urêmica** e encefalopatia urêmica são manifestações de estágio muito avançado (G5) e, por si só, já indicam necessidade de terapia renal substitutiva independentemente do valor exato da TFG.

## 🔎 Diagnóstico

- **DRC:** TFG estimada (CKD-EPI) associada a albuminúria/relação albumina-creatinina urinária, ambas repetidas em ≥3 meses para confirmar cronicidade.
- **Estadiamento KDIGO:** combinação de categoria de TFG (G1-G5) e categoria de albuminúria (A1-A3), que determina risco de progressão e frequência de seguimento.
- **Ureia:** sempre interpretada junto com creatinina e contexto clínico (hidratação, dieta proteica, sangramento digestivo).
- **Rastreio de complicações a partir do estágio G3:** hemograma (anemia), cálcio/fósforo/PTH (CKD-MBD), gasometria venosa/bicarbonato (acidose metabólica), potássio.

## 💊 Tratamento

- **Nefroproteção no diabético:** IECA/BRA em dose máxima tolerada + iSGLT2 + finerenona quando há albuminúria persistente, respeitando critérios de TFG e potássio.
- **Vacinação:** influenza anual, pneumocócica, hepatite B e vacina contra VSR conforme faixa etária/estágio de risco; evitar vacinas de vírus vivo atenuado em imunossupressão avançada/diálise.
- **Indicação de diálise:** guiada por critérios clínicos (uremia sintomática refratária, hipercalemia, acidose ou sobrecarga volêmica refratárias ao tratamento clínico), não por um valor isolado de TFG.
- **Complicações associadas:** anemia (ferro e, se persistente, agente estimulador da eritropoetina); CKD-MBD (quelante de fósforo, vitamina D ativa, cinacalcete se hiperparatireoidismo refratário); acidose metabólica (bicarbonato de sódio oral se bicarbonato sérico baixo).

## 🧭 Além do grounding: o que mais pode cair

- **CKD-MBD (distúrbio mineral e ósseo da DRC):** hiperfosfatemia, hipocalcemia e hiperparatireoidismo secundário formam o tripé clássico, cobrado com frequência em questões de nefrologia — quelantes de fósforo e vitamina D ativa fazem parte do manejo padrão a partir de estágios intermediários.
- **Anemia da DRC** é normocítica normocrômica por deficiência relativa de eritropoetina — investigar e repor ferro antes de indicar agente estimulador da eritropoetina, e nunca tratar anemia de DRC como se fosse ferropriva pura sem dosar ferritina/saturação de transferrina.
- **Acidose metabólica crônica** contribui para catabolismo muscular e progressão da doença óssea — reposição de bicarbonato de sódio quando o bicarbonato sérico cai é conduta reconhecida, não apenas cosmética laboratorial.
- **Ajuste/contraindicação de fármacos na DRC:** metformina (reduzir dose <45, contraindicar <30 de TFG), AINEs (evitar, risco de queda aguda de TFG), contrastes iodados (hidratação prévia para prevenir nefropatia por contraste em risco elevado).
- **Modalidades de terapia renal substitutiva:** hemodiálise, diálise peritoneal e transplante renal — o transplante é a modalidade com melhor sobrevida e qualidade de vida quando viável, e o planejamento de acesso (fístula arteriovenosa) deve começar antes da necessidade emergencial de diálise.
- **Doença renal policística autossômica dominante** é causa hereditária relevante de DRC, com rastreio de aneurismas cerebrais em casos selecionados e tolvaptana como opção para retardar progressão em fenótipos de risco.
- **Nefrotoxicidade medicamentosa** é tema recorrente além do já cobrado: aminoglicosídeos e vancomicina exigem monitorização de níveis séricos e função renal; contrastes iodados exigem hidratação prévia em pacientes de risco; inibidores de calcineurina (ciclosporina, tacrolimo) em transplantados também são nefrotóxicos e exigem monitorização de nível sérico.
- **Critérios de encaminhamento à diálise de urgência** (independentemente do valor de TFG) seguem o mnemônico "AEIOU": Acidose refratária, distúrbios Eletrolíticos graves (hipercalemia refratária), Intoxicação exógena dialisável, sobrecarga de volume (Overload) refratária e Uremia sintomática (pericardite, encefalopatia, sangramento urêmico).

## 📚 Referências essenciais

- KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease.
- PCDT de Doença Renal Crônica — Ministério da Saúde.
- Sociedade Brasileira de Imunizações (SBIm) — Calendário de vacinação para pacientes com doença renal crônica.
`;

export default content.trim();
