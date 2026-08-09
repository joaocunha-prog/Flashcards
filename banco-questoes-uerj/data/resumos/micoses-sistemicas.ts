/**
 * Resumo — Infectologia · Micoses sistêmicas.
 *
 * Cobre as entidades do assunto no corpus: esporotricose, histoplasmose,
 * candidemia e paracoccidioidomicose.
 */
const content = `
## 🎯 Essencial

- **Esporotricose linfocutânea:** lesão ulcerada no ponto de inoculação + **nódulos eritematosos seguindo o trajeto linfático** (padrão esporotricoide), em contexto de trauma com material vegetal/solo ou **contato com gatos** (relevante no Brasil, onde a transmissão zoonótica felina é epidemia). Diagnóstico: **cultura do raspado da lesão** (o exame direto tem baixa sensibilidade).
- **Histoplasmose:** achado radiológico de **cavitação + infiltrados focais bilaterais**, em contexto de exposição a **grutas/cavernas ou fezes de morcego/aves** — pode mimetizar tuberculose (inclusive com PPD não reator), mas **cultura e gene-Xpert para BK negativos** direcionam para outra etiologia. Diagnóstico de escolha: **antígeno urinário e sérico para histoplasma**.
- **Candidemia:** hemocultura positiva para *Candida* em paciente com cateter venoso central = **retirar o CVC sempre** (é fonte da infecção e biofilme reduz eficácia do tratamento) + iniciar **equinocandina (caspofungina)** como primeira linha em paciente grave/neutropênico — não fluconazol de imediato nesse cenário (reservado para casos mais estáveis e espécies sabidamente sensíveis).
- **Paracoccidioidomicose:** trabalhador rural + **estomatite moriforme** (lesão característica de bordas elevadas na mucosa oral) + lesões cutâneas ulceradas + linfadenopatia + hepatoesplenomegalia — a **via de infecção é inalatória** (não cutânea direta), com reativação de foco pulmonar latente na forma crônica do adulto (diferente da apresentação aguda/juvenil, mais disseminada).
- **Tratamento da paracoccidioidomicose é itraconazol** (não fluconazol) nas formas leves a moderadas; **anfotericina B** reservada para formas graves.
- **Todo diagnóstico de micose sistêmica em paciente sem fator de risco óbvio deve levar à investigação de imunossupressão de base** (HIV, uso de corticoide, neoplasia) — a apresentação pode ser mais grave/disseminada nesse contexto.

## 💎 Pearls

- **O "padrão esporotricoide" (lesões nodulares seguindo trajeto linfático a partir de um ponto de inoculação) não é exclusivo de esporotricose** — também pode ocorrer em infecções por micobactérias atípicas (*M. marinum*) e nocardiose; o contexto epidemiológico (jardinagem, contato com gato, aquário) ajuda a diferenciar.
- **PPD não reator não exclui tuberculose, mas em conjunto com cultura/gene-Xpert negativos para BK repetidos, aumenta a probabilidade de diagnóstico alternativo** como histoplasmose — a leitura combinada dos exames, não um exame isolado, é o que orienta o raciocínio.
- **Antígeno urinário para histoplasma tem sensibilidade maior em doença disseminada do que em formas pulmonares localizadas** — mesmo assim, é o exame de escolha por rapidez e possibilidade de realização mesmo em paciente instável (ao contrário da broncoscopia, que pode ser inviável em hipoxemia grave).
- **Manter o CVC "porque ainda não há outro acesso disponível" em candidemia é um dos erros mais comuns e mais custosos** — a retirada é parte central e não-negociável do tratamento sempre que clinicamente viável.
- **A forma aguda/juvenil da paracoccidioidomicose é mais disseminada e agressiva** (acometimento de sistema fagocítico-mononuclear: linfonodos, fígado, baço, medula óssea) comparada à forma crônica do adulto, predominantemente pulmonar com reativação tardia.
- **Anfotericina B lipossomal reduz nefrotoxicidade** em relação à formulação convencional — relevante em pacientes com função renal já comprometida que precisam do fármaco.

## ⚠️ Pitfalls

- **Diagnosticar esporotricose só pelo exame direto do raspado** — sensibilidade baixa; a cultura é o exame que realmente confirma o diagnóstico.
- **Tratar suspeita de tuberculose pulmonar cavitária persistindo apesar de cultura/gene-Xpert repetidamente negativos** sem ampliar a investigação para causas fúngicas — histoplasmose é um diferencial importante nesse cenário, especialmente com exposição epidemiológica compatível.
- **Manter o cateter venoso central e apenas trocar o antifúngico em candidemia** — sem a retirada do CVC, a taxa de falha terapêutica e recorrência é muito maior, independentemente do antifúngico escolhido.
- **Iniciar fluconazol empírico em candidemia de paciente grave/neutropênico** — equinocandina é preferida nesse contexto pelo espectro mais amplo (cobre espécies com resistência emergente a azólicos) e menor toxicidade.
- **Achar que a lesão oral da paracoccidioidomicose é a porta de entrada da infecção** — a via de infecção é sempre inalatória; a lesão mucosa oral é manifestação de disseminação, não o ponto de entrada.
- **Tratar paracoccidioidomicose leve a moderada com fluconazol** — itraconazol é a primeira escolha nessas formas; fluconazol tem eficácia inferior para esse patógeno específico.

## 📝 Como a UERJ cobra

**Micoses sistêmicas é #28 do ranking (4 questões, 1,6% do corpus)**, completando o corte de 80/20 — cada uma das quatro entidades aparece uma vez, com vinhetas ricas em contexto epidemiológico/ocupacional, seguindo o mesmo padrão de "doenças tropicais e negligenciadas".

- **Esporotricose** (2021 Q47) testou o exame confirmatório correto (cultura, não exame direto).
- **Histoplasmose** (2022 Q37) apresentou vinheta elaborada simulando tuberculose refratária, testando raciocínio de exclusão e o exame diagnóstico de escolha (antígeno urinário/sérico).
- **Candidemia** (2022 Q47) testou a dupla conduta essencial (retirar CVC + escolher a classe antifúngica correta), citando a diretriz IDSA para candidíase.
- **Paracoccidioidomicose** (2022 Q48) testou conhecimento conceitual sobre via de infecção e evolução da doença, citando o consenso brasileiro específico.

## 🆕 Atualização

- A **diretriz IDSA de candidíase** (já citada pela UERJ) mantém equinocandinas como primeira linha para candidemia na maioria dos cenários, reservando fluconazol para pacientes clinicamente estáveis, sem exposição prévia a azólicos, e com espécie confirmada como sensível — reflexo do aumento de resistência a azólicos em algumas espécies de Candida (incluindo *Candida auris*, patógeno emergente de crescente relevância epidemiológica mundial, com resistência frequente a múltiplas classes de antifúngicos).
- **Isavuconazol** vem ganhando espaço em infecções fúngicas invasivas graves (incluindo formas disseminadas de histoplasmose refratária) como alternativa com perfil de segurança favorável em relação a outros triazólicos.
- O **Consenso Brasileiro de Paracoccidioidomicose**, já referenciado pela UERJ, segue sendo periodicamente atualizado, mantendo itraconazol como primeira linha e reforçando a importância do seguimento sorológico prolongado para confirmar cura, dada a tendência de recidiva tardia dessa micose.

## 🧠 Conceito e fisiopatologia

**Esporotricose** é causada pelo fungo dimórfico *Sporothrix schenckii* (e espécies relacionadas, incluindo *S. brasiliensis*, associada à epidemia zoonótica felina brasileira), introduzido na pele por trauma direto (espinhos, terra contaminada) ou arranhadura/mordida de gato infectado — o fungo dissemina-se pelos vasos linfáticos superficiais a partir do ponto de inoculação, explicando o padrão característico de lesões nodulares sequenciais ao longo do trajeto linfático de drenagem.

**Histoplasmose** é causada por *Histoplasma capsulatum*, fungo dimórfico encontrado no solo enriquecido por excretas de morcegos e aves (grutas, galinheiros) — os esporos inalados se transformam em leveduras dentro dos macrófagos alveolares, onde o fungo consegue sobreviver e se multiplicar intracelularmente, disseminando-se pelo sistema fagocítico-mononuclear em hospedeiros imunocomprometidos ou diante de inóculo maciço.

**Candidemia associada a cateter** ocorre porque *Candida* forma biofilme na superfície do dispositivo intravascular, um ambiente que a protege parcialmente da ação de antifúngicos e do sistema imune do hospedeiro — por isso a erradicação da fonte (remoção do CVC) é tão determinante para o sucesso terapêutico quanto o próprio antifúngico sistêmico.

**Paracoccidioidomicose** é causada por *Paracoccidioides brasiliensis* (e espécies relacionadas), fungo dimórfico do solo em áreas rurais da América Latina — os esporos inalados atingem os pulmões, onde podem ser contidos por um foco granulomatoso latente (semelhante ao complexo primário da tuberculose) durante anos, reativando-se posteriormente por imunossenescência ou outra causa de queda da imunidade celular, disseminando-se então para mucosas, pele, linfonodos e outros órgãos na forma crônica do adulto.

## 🩺 Quadro clínico

- **Esporotricose linfocutânea:** lesão ulcerada/nodular no local de inoculação, seguida de nódulos eritematosos ascendentes ao longo do trajeto linfático, geralmente sem febre nem linfadenopatia regional proeminente.
- **Histoplasmose:** tosse, febre baixa prolongada, perda de peso, dispneia progressiva em casos com acometimento pulmonar extenso; forma disseminada em imunossuprimidos com febre alta, hepatoesplenomegalia, pancitopenia.
- **Candidemia:** febre persistente apesar de antibiótico de amplo espectro, sem foco infeccioso aparente, em paciente com fatores de risco (CVC, neutropenia, nutrição parenteral, cirurgia abdominal recente).
- **Paracoccidioidomicose:** tosse crônica, febre baixa, emagrecimento, lesões orais características (estomatite moriforme), lesões cutâneas ulceradas, linfadenopatia generalizada, hepatoesplenomegalia.

## 🔎 Diagnóstico

- **Esporotricose:** **cultura** do material da lesão (padrão-ouro); exame direto tem sensibilidade limitada.
- **Histoplasmose:** **antígeno urinário e sérico** (rápido, sensível especialmente em doença disseminada); cultura e histopatologia como métodos complementares mais demorados.
- **Candidemia:** hemocultura (padrão-ouro, ainda que com sensibilidade imperfeita); identificação da espécie orienta escolha/ajuste do antifúngico.
- **Paracoccidioidomicose:** exame micológico direto de escarro/lesão (leveduras multibrotantes em "roda de leme" são características e frequentemente suficientes para diagnóstico); sorologia e cultura como métodos complementares.

## 🚨 Gravidade / classificação

- **Formas disseminadas de histoplasmose e paracoccidioidomicose** em imunossuprimidos representam doença grave, exigindo tratamento sistêmico intensivo (anfotericina B nas formas graves) e investigação/controle da imunossupressão de base.
- **Candidemia com choque séptico ou neutropenia** exige antifúngico de amplo espectro (equinocandina) imediato, sem aguardar identificação de espécie.

## 💊 Tratamento

- **Esporotricose linfocutânea:** **itraconazol** via oral, por semanas a meses até resolução completa das lesões.
- **Histoplasmose leve a moderada:** itraconazol; **formas graves/disseminadas:** anfotericina B lipossomal, seguida de itraconazol de manutenção.
- **Candidemia:** **remoção do cateter venoso central** + **equinocandina (caspofungina, micafungina ou anidulafungina)** como primeira linha em paciente grave/neutropênico; fluconazol como opção em paciente estável com espécie sensível confirmada, após estabilização inicial.
- **Paracoccidioidomicose leve a moderada:** **itraconazol** prolongado (meses), com seguimento sorológico para confirmar cura; **formas graves:** anfotericina B, seguida de itraconazol/sulfametoxazol-trimetoprima de manutenção.

## 🔀 Diagnóstico diferencial

| Micose | Contexto epidemiológico | Exame confirmatório | Tratamento |
| --- | --- | --- | --- |
| Esporotricose | Trauma vegetal, contato com gato | Cultura da lesão | Itraconazol |
| Histoplasmose | Grutas, fezes de morcego/aves | Antígeno urinário/sérico | Itraconazol/anfotericina B |
| Paracoccidioidomicose | Trabalho rural, América Latina | Micológico direto (roda de leme) | Itraconazol |
| Candidemia | CVC, neutropenia, nutrição parenteral | Hemocultura | Retirar CVC + equinocandina |

## 📋 Tabela de revisão

| Micose | Achado-chave | Confirmação | 1ª linha |
| --- | --- | --- | --- |
| Esporotricose | Nódulos em trajeto linfático | Cultura | Itraconazol |
| Histoplasmose | Cavitação + PPD não reator | Antígeno urinário | Itraconazol/anfotericina B |
| Candidemia | Febre + CVC | Hemocultura | Retirar CVC + equinocandina |
| Paracoccidioidomicose | Estomatite moriforme + rural | Micológico direto | Itraconazol |

## 📚 Referências essenciais

- Consenso Brasileiro de Esporotricose (citado explicitamente pela UERJ em 2021).
- Diretriz IDSA para Candidíase (citada explicitamente pela UERJ em 2022).
- Consenso Brasileiro de Paracoccidioidomicose (citado explicitamente pela UERJ em 2022).
- IDSA Clinical Practice Guidelines for the Management of Histoplasmosis.
`;

export default content.trim();
