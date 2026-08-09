/**
 * Resumo — Endocrinologia · Diabetes mellitus.
 *
 * Cobre as entidades do assunto no corpus: iSGLT2 e agonistas de GLP-1
 * (farmacologia e indicação por desfecho cardiovascular/renal) e
 * complicações microvasculares (neuropatia autonômica/gastroparesia,
 * neuropatia periférica).
 */
const content = `
## 🎯 Essencial

- **A escolha do segundo/terceiro fármaco no DM2 não é mais só "baixar glicemia"** — depende do perfil de risco do paciente: **doença cardiovascular aterosclerótica ou obesidade → agonista de GLP-1**; **insuficiência cardíaca ou doença renal crônica com albuminúria → iSGLT2**. Metformina segue como base na maioria dos casos, salvo contraindicação.
- **iSGLT2 (empagliflozina, dapagliflozina):** bloqueiam a reabsorção de glicose no túbulo proximal, causando glicosúria — efeitos colaterais previsíveis são **infecção genital/urinária, poliúria e desidratação**, não hipoglicemia isolada (mecanismo independe de insulina).
- **iSGLT2 reduz mortalidade cardiovascular e progressão de doença renal crônica**, mesmo em pacientes sem diabetes (efeito de classe demonstrado também em insuficiência cardíaca e DRC não diabéticas) — é droga de escolha quando esses desfechos são prioridade.
- **Agonistas de GLP-1 (liraglutida, semaglutida):** reduzem mortalidade cardiovascular e promovem perda de peso significativa — são a melhor escolha quando o objetivo é **redução de mortalidade + perda ponderal**, especialmente em obesidade associada.
- **Cetoacidose euglicêmica é um risco reconhecido dos iSGLT2** — pode ocorrer com glicemia normal ou pouco elevada, mascarando o diagnóstico se o médico não pensar em dosar cetonas/gasometria diante do contexto (jejum prolongado, cirurgia, infecção, uso do fármaco).
- **Gastroparesia diabética:** neuropatia autonômica do sistema nervoso entérico causando esvaziamento gástrico retardado — sintomas de saciedade precoce, náusea, vômitos em diabético de longa data. Diagnóstico confirmatório é a **cintilografia de esvaziamento gástrico com refeição radiomarcada**, não EDA (que serve para excluir causa obstrutiva mecânica, mas não confirma gastroparesia).
- **Neuropatia periférica diabética é predominantemente sensitivo-simétrica e distal ("em bota e luva")**, frequentemente associada a disfunção autonômica concomitante (disfunção erétil, gastroparesia) — reconhecer o padrão evita confundir com outras polineuropatias.
- **Acantose nigricans (máculas hipercrômicas em axilas/pescoço) é marcador clínico de resistência insulínica** — achado de exame físico que reforça o diagnóstico de DM2 mesmo antes do resultado laboratorial.

## 💎 Pearls

- **A escolha terapêutica no DM2 hoje é guiada por desfecho-alvo, não só por potência de redução de HbA1c** — memorizar "GLP-1 para peso e coração aterosclerótico; iSGLT2 para rim e insuficiência cardíaca" resolve a maioria das questões de escolha terapêutica.
- **Pioglitazona causa retenção hidrossalina e pode descompensar insuficiência cardíaca** — evitar nessa população, mesmo sendo eficaz na redução glicêmica.
- **A gastroparesia diabética é uma manifestação de neuropatia autonômica generalizada** — vale procurar ativamente outros sinais de disautonomia (hipotensão ortostática, disfunção erétil, bexiga neurogênica) no mesmo paciente.
- **A cintilografia de esvaziamento gástrico é o exame de referência para gastroparesia**, mas antes dela é sempre necessário excluir obstrução mecânica (por EDA/imagem), já que os sintomas se sobrepõem.
- **A neuropatia por deficiência de B12 pode mimetizar neuropatia diabética** em paciente com DM2 de longa data em uso de metformina (que reduz absorção de B12) — vale dosar B12 quando a apresentação é atípica ou desproporcionalmente grave.
- **Hemoglobina glicada não substitui a avaliação de complicações microvasculares já estabelecidas** — mesmo com bom controle atual, um paciente com neuropatia/gastroparesia instaladas já tem dano estrutural que não regride necessariamente com controle glicêmico isolado.

## ⚠️ Pitfalls

- **Escolher metformina + linagliptina (inibidor de DPP-4) quando o objetivo é redução de mortalidade cardiovascular** — inibidores de DPP-4 são neutros em desfecho cardiovascular, não reduzem mortalidade como GLP-1 ou iSGLT2 fazem.
- **Prescrever iSGLT2 sem alertar sobre risco de cetoacidose euglicêmica** em situações de risco (cirurgia programada, jejum prolongado, infecção aguda) — a orientação padrão é suspender o iSGLT2 alguns dias antes de cirurgias eletivas.
- **Diagnosticar gastroparesia só pela clínica sem excluir obstrução mecânica** — sintomas de saciedade precoce e vômitos também ocorrem em estenose pilórica, tumores, entre outras causas estruturais que mudam completamente a conduta.
- **Tratar toda neuropatia dolorosa em diabético como neuropatia diabética sem investigar causas alternativas** quando há atipia (assimetria marcada, progressão muito rápida, predomínio motor) — nesse cenário, eletroneuromiografia e investigação adicional (incluindo causas paraneoplásicas ou desmielinizantes) são necessárias.
- **Usar pioglitazona em paciente com insuficiência cardíaca** — contraindicação relativa/absoluta pelo risco de retenção hídrica e descompensação.
- **Esperar hipoglicemia como efeito adverso esperado de iSGLT2 em monoterapia** — o mecanismo é insulino-independente, então o risco de hipoglicemia isolada é baixo (aumenta quando combinado com sulfonilureia ou insulina).

## 📝 Como a UERJ cobra

**Diabetes mellitus é #17 do ranking (5 questões, 2,0% do corpus)**, com foco muito concentrado em **farmacologia moderna guiada por desfecho** — a banca não testa "diagnóstico de diabetes" (muito básico para R+), e sim a escolha terapêutica correta conforme o perfil de risco do paciente.

- **iSGLT2 e agonistas de GLP-1** apareceram 3 vezes (2021 Q26, 2022 Q30, 2025 Q16), sempre pedindo a **melhor opção terapêutica para um perfil de risco específico** (efeitos colaterais da classe; combinação para redução de mortalidade cardiovascular e perda de peso; escolha em paciente com DRC leve) — citando explicitamente os Standards of Care da American Diabetes Association como referência.
- **Complicações microvasculares** apareceu 2 vezes (2021 Q27, 2024 Q43), testando o **exame confirmatório correto da gastroparesia** e o **reconhecimento de neuropatia autonômica generalizada** (gastroparesia + disfunção erétil + acantose nigricans na mesma vinheta).

## 🆕 Atualização

- **Semaglutida em altas doses e tirzepatida** (agonista duplo GIP/GLP-1) representam a fronteira mais recente do tratamento farmacológico da obesidade associada ao DM2, com perda de peso muito superior aos agonistas de GLP-1 de gerações anteriores — ainda não cobrado pela UERJ, mas já é padrão de discussão em diretrizes internacionais atuais.
- Os **Standards of Care da ADA** (atualizados anualmente) já recomendam de forma explícita **iSGLT2 ou GLP-1 independentemente da necessidade de reduzir HbA1c**, quando há doença cardiovascular, insuficiência cardíaca ou DRC estabelecidas — reforçando que o racional "escolha por desfecho, não só por glicemia" já é o padrão vigente cobrado pela banca.
- O uso combinado de **iSGLT2 + agonista de GLP-1** (em vez de escolher apenas um) vem ganhando espaço em pacientes de risco muito alto com múltiplas comorbidades cardiorrenais, quando ambos os desfechos (cardiovascular e renal) são prioritários simultaneamente.

## 🧠 Conceito e fisiopatologia

**Inibidores de SGLT2** bloqueiam o cotransportador sódio-glicose tipo 2 no túbulo contorcido proximal, responsável por cerca de 90% da reabsorção de glicose filtrada — ao inibi-lo, o excesso de glicose é excretado na urina (glicosúria terapêutica), reduzindo a glicemia de forma independente da insulina. Esse mesmo mecanismo também reduz a pressão intraglomerular (por retroalimentação tubuloglomerular, restaurando a vasoconstrição da arteríola aferente), explicando o efeito nefroprotetor que vai além do controle glicêmico. O risco de infecção genital/urinária decorre diretamente do ambiente rico em glicose criado na urina, que favorece o crescimento de fungos e bactérias.

**Agonistas do receptor de GLP-1** mimetizam a ação do hormônio incretínico GLP-1, estimulando a secreção de insulina de forma glicose-dependente (menor risco de hipoglicemia), suprimindo o glucagon, retardando o esvaziamento gástrico e agindo em centros hipotalâmicos de saciedade — esse último mecanismo explica a perda de peso significativa associada à classe, e os efeitos vasculares diretos (ainda em elucidação completa) explicam a redução de eventos cardiovasculares observada em ensaios clínicos.

**Cetoacidose euglicêmica associada a iSGLT2** ocorre porque a glicosúria mantém a glicemia relativamente controlada mesmo em vigência de deficiência insulínica relativa (por jejum, infecção, redução abrupta de dose de insulina), enquanto a lipólise e cetogênese seguem ativadas pela mesma deficiência insulínica — o resultado é acidose metabólica com ânion gap aumentado e cetonemia, mas sem a hiperglicemia acentuada que normalmente alertaria para cetoacidose clássica.

**Gastroparesia diabética** resulta de neuropatia autonômica que lesa as fibras vagais e o sistema nervoso entérico responsáveis pela coordenação motora gástrica — a hiperglicemia crônica lesa diretamente os axônios autonômicos (mecanismo semelhante ao da neuropatia periférica sensitivo-motora, por dano microvascular e estresse oxidativo nos vasa nervorum), comprometendo a motilidade e o esvaziamento gástrico coordenado.

## 🩺 Quadro clínico

- **Efeitos colaterais de iSGLT2:** poliúria, sede, sinais de desidratação, infecção genital (candidíase) e urinária recorrente.
- **Gastroparesia:** saciedade precoce, náuseas, vômitos pós-prandiais (frequentemente de alimento não digerido), distensão abdominal, flutuação glicêmica imprevisível (por absorção alimentar errática).
- **Neuropatia periférica diabética:** parestesias e perda de sensibilidade em padrão "bota e luva", dor em queimação noturna em fases dolorosas, perda de sensibilidade protetora (risco de úlceras/pé diabético).
- **Neuropatia autonômica associada:** disfunção erétil, hipotensão ortostática, bexiga neurogênica, além da gastroparesia.

## 🔎 Diagnóstico

- **Escolha terapêutica:** avaliação do perfil de risco cardiovascular/renal do paciente (doença aterosclerótica estabelecida, insuficiência cardíaca, DRC/albuminúria, obesidade) para direcionar entre iSGLT2 e GLP-1, além do controle de HbA1c.
- **Cetoacidose euglicêmica:** gasometria arterial + cetonas séricas/urinárias diante de sintomas compatíveis (náusea, vômitos, dor abdominal, taquipneia) em usuário de iSGLT2, mesmo com glicemia normal ou discretamente elevada.
- **Gastroparesia:** EDA para excluir obstrução mecânica; **cintilografia de esvaziamento gástrico com refeição radiomarcada** como exame confirmatório de referência.
- **Neuropatia periférica:** exame clínico (monofilamento, diapasão para sensibilidade vibratória, reflexos); eletroneuromiografia em casos atípicos ou para excluir outras causas.

## 🚨 Gravidade / classificação

- **Cetoacidose euglicêmica associada a iSGLT2** exige o mesmo protocolo intensivo de tratamento da cetoacidose clássica (insulinoterapia venosa, reposição volêmica), apesar da glicemia enganosamente normal.
- **Neuropatia diabética com perda de sensibilidade protetora** define risco elevado de úlcera/pé diabético e orienta intensificação de cuidados preventivos com os pés.

## 💊 Tratamento

- **DM2, perfil cardiovascular/obesidade:** metformina + **agonista de GLP-1** (liraglutida, semaglutida) — redução de mortalidade cardiovascular e perda de peso significativa.
- **DM2, perfil renal/insuficiência cardíaca:** metformina + **iSGLT2** (empagliflozina, dapagliflozina) — nefroproteção e redução de hospitalização por insuficiência cardíaca.
- **Cetoacidose euglicêmica:** suspender o iSGLT2, insulinoterapia venosa contínua associada a reposição de glicose (para permitir doses de insulina suficientes para suprimir cetogênese sem causar hipoglicemia), hidratação e correção eletrolítica — igual ao protocolo de cetoacidose clássica.
- **Gastroparesia:** fracionamento alimentar (refeições menores e mais frequentes, redução de gordura/fibra), procinéticos (metoclopramida, com atenção a efeitos extrapiramidais em uso prolongado; domperidona onde disponível), controle glicêmico otimizado.
- **Neuropatia periférica dolorosa:** duloxetina, pregabalina/gabapentina como primeira linha para dor neuropática; controle glicêmico rigoroso para retardar progressão (não reverte dano já estabelecido).

## 🔀 Diagnóstico diferencial

| Objetivo terapêutico prioritário | Classe preferida | Mecanismo do benefício |
| --- | --- | --- |
| Doença cardiovascular aterosclerótica / obesidade | Agonista de GLP-1 | Efeito vascular direto + perda de peso |
| Insuficiência cardíaca / DRC com albuminúria | iSGLT2 | Redução da pressão intraglomerular, natriurese |
| Sem desfecho cardiorrenal prioritário | Metformina ± outros | Redução de produção hepática de glicose |

## 📋 Tabela de revisão

| Situação | Achado-chave | Conduta |
| --- | --- | --- |
| DM2 + IAM/AVC prévio | Perfil aterosclerótico | Agonista de GLP-1 |
| DM2 + DRC/albuminúria | Perfil renal | iSGLT2 |
| Vômitos + saciedade precoce em DM1 longa data | Gastroparesia | Cintilografia de esvaziamento gástrico |
| Cetose + glicemia normal em uso de iSGLT2 | Cetoacidose euglicêmica | Insulina IV + glicose + suspender fármaco |

## 📚 Referências essenciais

- Standards of Care in Diabetes — American Diabetes Association (citada explicitamente pela UERJ em 2022 e 2025).
- Estudo EMPA-REG OUTCOME — Empagliflozina e Desfechos Cardiovasculares (citado explicitamente pela UERJ em 2022).
- Estudo LEADER — Liraglutida e Desfechos Cardiovasculares (citado explicitamente pela UERJ em 2025).
- ACG/ANMS Clinical Guideline — Management of Gastroparesis.
`;

export default content.trim();
