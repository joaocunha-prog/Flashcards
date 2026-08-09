/**
 * Resumo — Endocrinologia · Emergências diabéticas.
 *
 * Cobre as entidades do assunto no corpus: cetoacidose diabética clássica e
 * cetoacidose euglicêmica (associada a iSGLT2).
 */
const content = `
## 🎯 Essencial

- **Cetoacidose diabética (CAD) clássica:** hiperglicemia (>250mg/dL) + acidose metabólica com ânion gap aumentado + **cetonemia/cetonúria positiva** — tríade bioquímica, não apenas glicemia alta.
- **Cetoacidose euglicêmica:** mesma fisiopatologia (cetoacidose com ânion gap aumentado), mas **glicemia normal ou pouco elevada** — associada a **iSGLT2**, jejum prolongado, gravidez, ou baixa ingesta calórica com uso de insulina em dose reduzida. **Dosar cetonas e bicarbonato mesmo com glicemia normal** diante de sintomas compatíveis (náusea, vômitos, dor abdominal, taquipneia) em usuário de iSGLT2.
- **O tratamento da cetoacidose euglicêmica é o mesmo protocolo intensivo da CAD clássica** — hidratação + **insulinoterapia venosa contínua** (associada a infusão de glicose para permitir manter a insulina suficiente para suprimir a cetogênese sem causar hipoglicemia) — não é "CAD mais leve" que dispense tratamento intensivo.
- **Reposição de fluido inicial: solução salina isotônica (0,9%)** — mas após estabilização hemodinâmica e bom débito urinário, **trocar para solução menos rica em cloro** (salina 0,45% ou Ringer lactato) para evitar **acidose hiperclorêmica iatrogênica**, uma complicação reconhecida do uso prolongado de grandes volumes de salina 0,9%.
- **Insulinoterapia venosa é obrigatória na CAD, mesmo com glicemia normal (euglicêmica)** — é o que interrompe a cetogênese hepática; sem insulina, a acidose não se resolve independentemente da glicemia.
- **Bicarbonato de sódio NÃO é rotina na CAD** — reservado para acidose muito grave (pH <6,9), pelo risco de complicações (hipocalemia de rebote, edema cerebral em crianças, acidose paradoxal do SNC).
- **Monitorizar potássio de perto durante o tratamento da CAD** — a correção da acidose e a insulinoterapia deslocam potássio para dentro da célula, podendo precipitar hipocalemia grave mesmo que o potássio inicial estivesse normal ou elevado; reposição de potássio deve começar assim que o potássio sérico estiver na faixa normal-baixa (e a insulina só é iniciada se o potássio inicial não estiver muito baixo).

## 💎 Pearls

- **A amilase pode estar elevada na CAD sem pancreatite verdadeira** — é um distrator clássico; elevação de amilase isolada, sem quadro clínico/exame de imagem compatível com pancreatite, não deve atrasar o reconhecimento e tratamento da CAD.
- **Todo paciente em uso de iSGLT2 que vai passar por jejum prolongado (cirurgia eletiva, doença aguda com baixa ingesta) deve suspender o medicamento preventivamente** — a orientação padrão é suspender alguns dias antes de procedimentos eletivos.
- **A troca de solução salina 0,9% por Ringer lactato ou salina 0,45% após estabilização não é sobre "melhorar a hidratação"** — é especificamente para prevenir acidose hiperclorêmica iatrogênica, uma complicação bem reconhecida do próprio tratamento.
- **Cetoacidose euglicêmica também pode ocorrer em DM1 com baixa ingesta calórica associada a dose reduzida de insulina** (não é exclusiva de iSGLT2) — o denominador comum é sempre deficiência insulínica relativa com glicemia mascarada por baixa oferta de substrato.
- **A gasometria arterial e as cetonas séricas (não apenas urinárias) são os exames que devem ser priorizados** diante de suspeita clínica de cetoacidose euglicêmica — cetonúria pode ser menos sensível/específica nesse contexto do que a dosagem sérica direta de beta-hidroxibutirato.

## ⚠️ Pitfalls

- **Descartar cetoacidose só porque a glicemia está normal** — é exatamente o erro que a cetoacidose euglicêmica expõe; sempre correlacionar sintomas clínicos com gasometria/cetonas, independentemente do valor glicêmico.
- **Usar bicarbonato de sódio de rotina na CAD leve a moderada** — não reduz tempo de resolução e tem riscos próprios; reservar para acidose muito grave.
- **Manter salina 0,9% indefinidamente durante toda a reposição volêmica da CAD** — favorece acidose hiperclorêmica; a troca para solução com menos cloro após estabilização é parte do protocolo correto.
- **Iniciar insulinoterapia sem checar o potássio sérico primeiro** — se o potássio inicial já estiver baixo, a insulina (que desloca ainda mais potássio para dentro da célula) pode precipitar hipocalemia grave/arritmia; a reposição de potássio deve preceder ou acompanhar de perto o início da insulina nesse cenário.
- **Suspender insulina venosa assim que a glicemia normaliza** — a insulina deve continuar até a resolução da acidose (ânion gap normalizado, cetonas negativas), ajustando a infusão de glicose concomitante para evitar hipoglicemia, não suspendendo a insulina prematuramente.
- **Atribuir dor abdominal e vômitos em usuário de iSGLT2 a gastroenterite sem investigar cetoacidose euglicêmica** — é um erro de ancoragem diagnóstica comum e potencialmente perigoso.

## 📝 Como a UERJ cobra

**Emergências diabéticas é #31 do ranking (3 questões, 1,2% do corpus)**, com foco muito concentrado em **cetoacidose euglicêmica associada a iSGLT2** — tema que conecta diretamente com o assunto de diabetes mellitus (farmacologia) já revisado.

- Duas das três questões (2023 Q18, 2024 Q44) tratam especificamente de **cetoacidose euglicêmica**, uma testando o **exame que define o quadro** (bicarbonato e cetonas, mesmo com glicemia pouco alterada) e a outra testando a **conduta obrigatória** (insulinoterapia venosa, apesar da glicemia praticamente normal) — ambas reforçam que reconhecer essa forma "disfarçada" de CAD é o ponto central deste assunto para a banca.
- **Cetoacidose diabética clássica** (2025 Q36) testou um detalhe técnico do protocolo de hidratação (troca de solução salina para evitar hipercloremia) — mostrando que mesmo na forma clássica a banca vai além do reconhecimento básico, cobrando refinamento do manejo.

## 🆕 Atualização

- O **alerta de segurança para cetoacidose euglicêmica associada a iSGLT2** foi formalizado por agências regulatórias após relatos pós-comercialização, levando a recomendações padronizadas de suspensão perioperatória do fármaco e de orientação ativa ao paciente sobre sintomas de alerta — reflexo direto do que já é cobrado pela UERJ.
- Diretrizes mais recentes de manejo da CAD (incluindo protocolos de sociedades de endocrinologia) reforçam a recomendação de trocar para soluções com menor teor de cloro após a fase inicial de reressuscitação volêmica, e destacam a importância de protocolos de infusão de insulina em taxa fixa com ajuste guiado por metas de queda glicêmica/resolução do ânion gap, em vez de esquemas mais antigos baseados em escala móvel isolada.
- O uso de **cetonas capilares (beta-hidroxibutirato point-of-care)** para monitorização à beira do leito vem ganhando espaço em relação à fita urinária tradicional, por refletir mais diretamente a gravidade e a resposta ao tratamento em tempo real.

## 🧠 Conceito e fisiopatologia

**Cetoacidose diabética** resulta de deficiência insulínica absoluta ou relativa grave, que libera a lipólise do tecido adiposo do freio normalmente imposto pela insulina — os ácidos graxos livres liberados são metabolizados no fígado em corpos cetônicos (beta-hidroxibutirato e acetoacetato), que se acumulam no sangue e causam acidose metabólica com ânion gap aumentado. A hiperglicemia da forma clássica decorre da produção hepática de glicose não freada (gliconeogênese e glicogenólise sem oposição insulínica) associada à incapacidade de captação periférica de glicose pelos tecidos insulino-dependentes.

**Cetoacidose euglicêmica** compartilha exatamente o mesmo mecanismo de deficiência insulínica relativa e cetogênese descontrolada, mas a hiperglicemia é mascarada por um mecanismo que remove glicose do sangue independentemente da ação insulínica — no caso dos iSGLT2, a glicosúria terapêutica mantém a glicemia relativamente controlada mesmo com cetogênese ativa; em jejum prolongado ou baixa ingesta calórica, simplesmente há menos substrato circulante para gerar hiperglicemia franca, apesar da mesma deficiência insulínica relativa continuar dirigindo a lipólise e cetogênese.

**Acidose hiperclorêmica iatrogênica** ocorre porque a solução salina a 0,9% tem concentração de cloro (154 mEq/L) muito superior à concentração fisiológica plasmática (~100-106 mEq/L) — grandes volumes administrados ao longo do tratamento da CAD elevam o cloro sérico, que por sua vez reduz o bicarbonato (para manter a eletroneutralidade), gerando uma acidose metabólica de causa iatrogênica que se soma (ou substitui) a acidose cetótica original à medida que esta se resolve com o tratamento.

## 🩺 Quadro clínico

- **CAD (clássica ou euglicêmica):** náuseas, vômitos, dor abdominal (pode mimetizar abdome agudo), taquipneia (respiração de Kussmaul, compensação respiratória da acidose metabólica), desidratação, alteração do nível de consciência em casos graves, hálito cetônico.
- **Fatores desencadeantes a investigar:** infecção, má aderência/interrupção de insulina, uso de iSGLT2 com baixa ingesta ou jejum, infarto agudo do miocárdio, uso de corticoide.

## 🔎 Diagnóstico

- **Tríade bioquímica:** glicemia (elevada na forma clássica, normal/pouco elevada na euglicêmica) + **gasometria com acidose metabólica de ânion gap aumentado** + **cetonemia/cetonúria positiva**.
- Sempre investigar e tratar o **fator desencadeante** concomitantemente (infecção é a causa mais comum).

## 🚨 Gravidade / classificação

- **Gravidade da CAD** é classificada por pH, bicarbonato sérico e nível de consciência (leve, moderada, grave), orientando intensidade de monitorização (enfermaria versus UTI).
- **pH <6,9** é o limiar mais aceito para considerar bicarbonato de sódio, reservado a esse cenário extremo pelos riscos associados ao seu uso rotineiro.

## 💊 Tratamento

- **Hidratação:** solução salina 0,9% inicialmente para reposição volêmica agressiva; **trocar para solução com menor teor de cloro (salina 0,45% ou Ringer lactato)** após estabilização hemodinâmica e bom débito urinário, para prevenir acidose hiperclorêmica.
- **Insulinoterapia:** **insulina regular venosa em infusão contínua**, mantida até resolução da acidose (não apenas normalização da glicemia) — associar infusão de glicose quando a glicemia se aproxima da normalidade, para permitir manter a insulina em dose suficiente para suprimir a cetogênese sem causar hipoglicemia (particularmente relevante e mais precoce na forma euglicêmica).
- **Potássio:** monitorização seriada e reposição assim que o potássio sérico estiver na faixa normal-baixa; adiar início de insulina se o potássio inicial estiver muito baixo, até repor adequadamente.
- **Bicarbonato de sódio:** reservado para acidose muito grave (pH <6,9), não uso rotineiro.
- **iSGLT2:** suspender imediatamente diante de cetoacidose euglicêmica e orientar suspensão preventiva antes de cirurgias eletivas/jejum prolongado.

## 🔀 Diagnóstico diferencial

| Forma | Glicemia | Ânion gap | Cetonas | Gatilho típico |
| --- | --- | --- | --- | --- |
| CAD clássica | Muito elevada | Aumentado | Positivas | Infecção, má aderência à insulina |
| CAD euglicêmica | Normal/pouco elevada | Aumentado | Positivas | iSGLT2, jejum prolongado, baixa ingesta |

## 📋 Tabela de revisão

| Aspecto | Achado-chave | Conduta |
| --- | --- | --- |
| Suspeita de CAD euglicêmica | Sintomas + uso de iSGLT2, glicemia normal | Dosar bicarbonato e cetonas |
| Tratamento da CAD (qualquer forma) | Ânion gap aumentado | Insulina IV contínua + hidratação |
| Prevenção de hipercloremia | Após estabilização | Trocar para Ringer lactato/salina 0,45% |
| Potássio inicial baixo | Risco de hipocalemia com insulina | Repor K+ antes/junto da insulina |

## 📚 Referências essenciais

- ADA/Endocrine Society — Hyperglycemic Crises in Adult Patients with Diabetes (Cetoacidose Diabética e Estado Hiperosmolar).
- FDA Drug Safety Communication — SGLT2 Inhibitors and Diabetic Ketoacidosis.
- Standards of Care in Diabetes — American Diabetes Association.
`;

export default content.trim();
