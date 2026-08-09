/**
 * Resumo — Cardiologia · Síndromes coronarianas agudas.
 *
 * Cobre as entidades do assunto no corpus: IAM com supra de ST
 * (classificação de Killip, reperfusão), antiagregação/anticoagulação na
 * SCA (farmacogenética, terapia tripla em FA), e angina estável/testes de
 * isquemia (síndromes coronarianas crônicas).
 */
const content = `
## 🎯 Essencial

- **Classificação de Killip estratifica IAM por sinais de congestão/choque** — Killip I (sem congestão), II (estertores/B3), III (edema agudo de pulmão), IV (choque cardiogênico). Killip II com congestão pulmonar: **diurético + reperfusão urgente**, sem inotrópico de rotina (reservado para Killip III/IV com hipoperfusão).
- **IAM com supra de ST: reperfusão é a prioridade absoluta** — angioplastia primária é preferida (se disponível em tempo hábil, idealmente <90-120 min); trombolítico é alternativa quando a angioplastia não está disponível a tempo.
- **Prasugrel/ticagrelor são preferíveis ao clopidogrel em portadores da variante de perda de função do CYP2C19** (metabolizadores lentos) — esses pacientes não ativam adequadamente o clopidogrel (pró-fármaco que depende dessa via), aumentando risco de trombose de stent.
- **SCA sem supra de ST + fibrilação atrial + necessidade de stent = terapia antitrombótica tripla por período curto, depois dupla** — AAS + clopidogrel + anticoagulante oral (preferencialmente um DOAC como rivaroxabana em dose reduzida) nas primeiras semanas, seguido de anticoagulante + um antiplaquetário (geralmente suspendendo o AAS mais precocemente que o clopidogrel) para reduzir risco de sangramento.
- **Angina estável com disfunção de VE e zona inativa ao ECG: encaminhar direto para cateterismo**, não para teste de isquemia não invasivo — a presença de disfunção ventricular já estabelecida muda a estratégia diagnóstica para investigação anatômica direta, pensando em revascularização.
- **Teste ergométrico normal em paciente assintomático de baixo risco torna improvável lesão trivascular ou de tronco de coronária esquerda** — mas um resultado normal **não exclui** doença coronariana obstrutiva de forma absoluta, especialmente lesões menos extensas ou território da artéria coronária direita (que pode gerar falso-negativo relativo).
- **Cardiomiopatia de Takotsubo é diferencial obrigatório de IAM com supra** quando a coronariografia não mostra obstrução — ver resumo de doenças do pericárdio e miocárdio para detalhes.

## 💎 Pearls

- **B3 no IAM reflete disfunção sistólica/sobrecarga de volume; B4 reflete rigidez diastólica** (comum mesmo em isquemia sem disfunção sistólica manifesta) — a presença isolada de B4 não necessariamente indica Killip mais alto.
- **A variante do CYP2C19 é um exemplo direto de farmacogenética aplicada à prova** — memorizar que "perda de função = trocar clopidogrel por prasugrel/ticagrelor" cobre a lógica sem precisar decorar a nomenclatura genética completa.
- **A terapia antitrombótica tripla aumenta significativamente o risco de sangramento** — por isso a tendência atual é encurtar ao máximo sua duração, migrando para terapia dupla o quanto antes com segurança.
- **O valor preditivo negativo do teste ergométrico depende da probabilidade pré-teste** — em paciente de baixo risco pré-teste, um resultado normal tem alto valor preditivo negativo; em paciente de alto risco pré-teste, um resultado "normal" deve ser interpretado com mais cautela.
- **Paciente pós-operatório com IAM pode ter apresentação atípica** (dispneia, mal-estar, sem dor torácica clássica) — o contexto cirúrgico recente por si só já é fator de risco relevante para eventos coronarianos perioperatórios.
- **Angioplastia primária urgente permanece indicada mesmo em IAM sem choque manifesto**, quando há supra de ST — a urgência de reperfusão não depende de o paciente estar em Killip avançado.

## ⚠️ Pitfalls

- **Priorizar dobutamina/inotrópico antes de reperfusão em Killip II** — nesse estágio o problema é congestão, tratada com diurético, e a prioridade continua sendo desobstruir a artéria; inotrópico é reservado para Killip III/IV com hipoperfusão.
- **Manter clopidogrel padrão em paciente com genótipo de perda de função do CYP2C19** — risco aumentado de trombose de stent; a droga deve ser trocada.
- **Manter terapia tripla antitrombótica indefinidamente** em paciente com FA e SCA/stent — aumenta desproporcionalmente o risco hemorrágico sem benefício isquêmico adicional após as primeiras semanas; a transição para terapia dupla é a conduta padrão atual.
- **Solicitar teste ergométrico ou cintilografia em paciente com disfunção de VE e zona inativa já documentadas** — quando já há evidência de dano miocárdico estabelecido com disfunção ventricular, a via direta para definição anatômica (cateterismo) é mais apropriada do que um teste funcional adicional.
- **Interpretar teste ergométrico normal como exclusão absoluta de doença coronariana**, especialmente ignorando o território da coronária direita, mais sujeito a resultado falso-negativo relativo.
- **Usar apenas dipiridamol/cumarínico como terapia antitrombótica padrão pós-SCA** — não são a base do tratamento atual da SCA (dipiridamol não tem papel estabelecido aqui; cumarínico é reservado para indicações específicas como FA associada, não como antiplaquetário substituto).

## 📝 Como a UERJ cobra

**Síndromes coronarianas agudas é #21 do ranking (5 questões, 2,0% do corpus)**, com foco predominante em **decisões terapêuticas refinadas**, não apenas reconhecimento de IAM.

- **IAM com supra de ST — reperfusão** (2021 Q8) testou a classificação de Killip aplicada a um cenário pós-operatório, com a conduta correta combinando diurético e angioplastia — reforçando que o Killip determina a intervenção adjuvante, não substitui a reperfusão.
- **Antiagregação e anticoagulação na SCA** apareceu 2 vezes (2021 Q36, 2023 Q5), testando farmacogenética (CYP2C19) e a terapia antitrombótica tripla em contexto de FA associada — ambos citando diretrizes internacionais (ESC) e exigindo conhecimento de manejo combinado avançado.
- **Angina estável e testes de isquemia** apareceu 2 vezes (2024 Q39, 2025 Q31), testando quando pular direto para cateterismo (disfunção de VE já estabelecida) e como interpretar corretamente um teste ergométrico normal (probabilidade pré-teste).

## 🆕 Atualização

- As diretrizes mais recentes de **síndromes coronarianas crônicas (ESC)**, já referenciadas pela UERJ, reforçam a importância da estratificação de risco pré-teste antes de escolher entre teste funcional não invasivo e angio-TC de coronárias ou cateterismo direto, individualizando a via diagnóstica conforme probabilidade pré-teste e presença de disfunção ventricular.
- A tendência de **encurtamento da terapia antitrombótica tripla** (para 1 semana a 1 mês, dependendo do risco hemorrágico versus isquêmico) tornou-se ainda mais consolidada nas diretrizes mais recentes de fibrilação atrial associada a SCA/intervenção coronariana percutânea, com uso preferencial de DOAC em vez de varfarina na maioria dos pacientes elegíveis.
- **Colchicina em baixa dose** emergiu como terapia anti-inflamatória adjuvante para redução de eventos cardiovasculares recorrentes pós-SCA em ensaios recentes, ainda não incorporada como padrão universal, mas representando linha de pesquisa/prática em expansão.

## 🧠 Conceito e fisiopatologia

**IAM com supra de ST** resulta de oclusão trombótica completa e abrupta de uma artéria coronária, geralmente por ruptura ou erosão de placa aterosclerótica instável, gerando isquemia transmural — o supradesnivelamento de ST no ECG reflete essa lesão transmural na topografia correspondente ao vaso ocluído, e a velocidade de reperfusão é o determinante mais importante da quantidade de miocárdio salvo ("tempo é músculo").

A **classificação de Killip** estratifica o IAM pela quantidade de miocárdio comprometido, refletida clinicamente pelo grau de congestão/hipoperfusão: quanto maior a massa miocárdica perdida, maior a disfunção de bomba e, consequentemente, maior o Killip e a mortalidade associada.

**Farmacogenética do clopidogrel:** o clopidogrel é um pró-fármaco que precisa ser metabolizado pela enzima hepática CYP2C19 para se tornar ativo — variantes genéticas de perda de função dessa enzima (comuns em parte significativa da população) reduzem a conversão para a forma ativa, deixando o paciente com inibição plaquetária insuficiente mesmo em uso regular da medicação, e por isso sob maior risco de trombose de stent. Prasugrel e ticagrelor não dependem dessa mesma via metabólica limitante, sendo preferidos nesse cenário.

**Terapia antitrombótica combinada em FA + SCA/stent** busca equilibrar dois riscos concorrentes: trombose de stent/evento coronariano recorrente (que demanda antiplaquetários) e AVC cardioembólico pela FA (que demanda anticoagulação) — a combinação tripla cobre ambos os riscos no período de maior vulnerabilidade (logo após o implante do stent), mas é reduzida assim que possível porque o risco hemorrágico cresce de forma mais que proporcional com o número de fármacos antitrombóticos associados.

## 🩺 Quadro clínico

- **IAM:** dor torácica em aperto, irradiação para membro superior esquerdo/mandíbula, sudorese fria, dispneia; apresentações atípicas (só dispneia, mal-estar) são comuns em idosos, diabéticos e no pós-operatório.
- **Killip II-IV:** dispneia, ortopneia, estertores pulmonares, B3 (congestão); Killip IV acrescenta hipotensão e sinais de hipoperfusão periférica (extremidades frias, oligúria, confusão).
- **Angina estável:** dor torácica desencadeada por esforço físico previsível, aliviada por repouso/nitrato, sem as características de instabilidade da SCA (dor em repouso, piora progressiva, duração prolongada).

## 🔎 Diagnóstico

- **IAM com supra de ST:** ECG (supra de ST em duas ou mais derivações contíguas) + troponina seriada — a decisão de reperfusão não espera o resultado da troponina quando o ECG já é diagnóstico.
- **SCA sem supra:** troponina seriada + ECG (pode ser normal ou mostrar infra de ST/inversão de T) + estratificação de risco (escore GRACE) para definir estratégia invasiva precoce versus conservadora.
- **Angina estável:** teste funcional não invasivo (ergométrico, cintilografia, ecoestresse) ou angio-TC de coronárias conforme probabilidade pré-teste; cateterismo direto quando já há disfunção ventricular ou alto risco clínico estabelecido.

## 🚨 Gravidade / classificação

- **Classificação de Killip (I-IV):** estratifica gravidade hemodinâmica do IAM e orienta intensidade do suporte necessário além da reperfusão.
- **Escore GRACE:** estratifica risco na SCA sem supra de ST, orientando tempo até estratégia invasiva (urgente, precoce ou conservadora).
- **Escore de risco hemorrágico (ex.: HAS-BLED)** é usado em conjunto com a decisão de duração da terapia antitrombótica combinada em pacientes com FA associada.

## 💊 Tratamento

- **IAM com supra de ST:** **angioplastia primária** (preferencial, se disponível em tempo hábil) ou **trombólise** como alternativa; dupla antiagregação (AAS + inibidor de P2Y12) + anticoagulação parenteral na fase aguda; betabloqueador, IECA/BRA e estatina de alta potência na sequência.
- **Escolha do inibidor de P2Y12:** clopidogrel como padrão, trocado por **prasugrel ou ticagrelor** em portadores de variante de perda de função do CYP2C19 ou em cenários de maior risco isquêmico.
- **FA + SCA/stent:** terapia tripla (AAS + clopidogrel + anticoagulante, preferencialmente DOAC) por período curto (dias a poucas semanas conforme risco), seguida de terapia dupla (anticoagulante + um antiplaquetário, geralmente suspendendo o AAS primeiro).
- **Angina estável com disfunção de VE e lesão significativa:** revascularização (angioplastia ou cirurgia de revascularização miocárdica) associada a otimização de terapia clínica (AAS, estatina, betabloqueador, IECA/BRA).
- **Killip II:** diurético + reperfusão urgente; **Killip III/IV:** suporte hemodinâmico avançado (vasopressor/inotrópico, considerar suporte circulatório mecânico) além da reperfusão urgente.

## 🔀 Diagnóstico diferencial

| Killip | Achado | Conduta adjuvante |
| --- | --- | --- |
| I | Sem congestão | Reperfusão + terapia padrão |
| II | Estertores/B3 | Diurético + reperfusão |
| III | Edema agudo de pulmão | Suporte ventilatório + reperfusão |
| IV | Choque cardiogênico | Vasopressor/suporte mecânico + reperfusão |

## 📋 Tabela de revisão

| Situação | Achado-chave | Conduta |
| --- | --- | --- |
| IAM supra + Killip II | Congestão pulmonar | Diurético + angioplastia primária |
| Perda de função CYP2C19 | Genótipo | Trocar clopidogrel por prasugrel/ticagrelor |
| FA + stent recente | Necessidade de antiplaquetário e anticoagulante | Terapia tripla curta → dupla |
| Angina + disfunção de VE | Zona inativa + FE reduzida | Cateterismo direto |

## 📚 Referências essenciais

- Diretriz da Sociedade Brasileira de Cardiologia para IAM com Supradesnivelamento de ST (citada explicitamente pela UERJ em 2021).
- Diretriz ESC de Síndromes Coronarianas Agudas (citada explicitamente pela UERJ em 2023).
- Diretriz ESC de Síndromes Coronarianas Crônicas (citada explicitamente pela UERJ em 2024).
`;

export default content.trim();
