/**
 * Resumo — Oncologia · Rastreamento oncológico.
 *
 * Reorganizado por entidade clínica (cada câncer/programa de rastreamento
 * tem sua própria seção com faixa etária, método, intervalo e conduta),
 * em vez de picado entre seções genéricas de tipo — o assunto reúne
 * programas de rastreamento de cânceres distintos, cada um com diretriz e
 * limiar etário próprios (frequentemente divergentes entre USPSTF e INCA).
 *
 * Cobre as entidades do corpus: rastreamento de câncer colorretal conforme
 * USPSTF, seguimento após pólipo colorretal de baixo risco e escore de
 * Gleason no câncer de próstata (grau histológico pós-biópsia, não
 * rastreamento em si — mantido junto por pertencer ao mesmo Subtheme).
 * Expandido com rastreamento de mama, colo do útero, próstata (PSA) e
 * pulmão, contrastando USPSTF com as diretrizes brasileiras do INCA, e com
 * os vieses estatísticos do rastreamento — conteúdo ainda não cobrado no
 * corpus, mas plausível em provas futuras do assunto.
 */
const content = `
## 🎯 Essencial

- **Rastreamento (paciente assintomático de risco médio) é diferente de investigação diagnóstica (paciente com sinal de alarme)** — sangramento, mudança de hábito intestinal, perda de peso não intencional, anemia inexplicada ou nódulo palpável indicam investigação imediata, independentemente da idade ou do intervalo de rastreamento vigente.
- **USPSTF e INCA divergem em faixa etária para quase todo câncer deste assunto** — numa prova brasileira, sempre checar se o enunciado pede a diretriz americana ou a nacional antes de responder; a banca explora exatamente essa divergência.
- **Rastreamento oncológico não é vitalício**: suspende-se quando a expectativa de vida do paciente é curta (geralmente <10 anos) ou quando comorbidades tornam improvável que o achado mude a conduta ou o desfecho — decisão individualizada, não um limite etário isolado e rígido.
- **Vieses clássicos do rastreamento** são conceito recorrente em provas: **lead-time bias** (detecção precoce aumenta o tempo "vivendo com o diagnóstico" sem mudar a data da morte), **length-time bias** (rastreamento detecta desproporcionalmente tumores de crescimento lento) e **sobrediagnóstico** (detectar doença que nunca causaria sintomas/morte) — todos podem inflar artificialmente a sobrevida aparente sem reduzir mortalidade real.
- **Um exame de rastreamento positivo sempre exige confirmação diagnóstica completa** — não se repete o mesmo teste não invasivo nem se troca por outro método de rastreio só porque deu positivo.

## 📝 Como a banca cobra

**Rastreamento oncológico aparece em 3 questões (1,42% do corpus)**, uma do EBSERH e duas do ENARE 2026, todas em torno de **câncer colorretal e câncer de próstata**.

- **EBSERH 2025 Q40** cobrou a **recomendação USPSTF para rastreamento de câncer colorretal**, provavelmente testando a faixa etária correta (45-75 anos) e/ou os métodos aceitos.
- **ENARE 2026 Q6** trouxe um cenário de **pólipo colorretal de baixo risco**, testando se o candidato aplica o intervalo de vigilância correto (7-10 anos) em vez de encurtar desnecessariamente.
- **ENARE 2026 Q43** cobrou o **escore de Gleason no câncer de próstata**, exigindo cálculo/interpretação do escore ou grupo de grau a partir de um resultado de biópsia.
- **Nenhuma questão do corpus cobrou ainda rastreamento de mama, colo do útero ou pulmão** — são os candidatos mais prováveis de completar o assunto, sobretudo explorando a divergência USPSTF vs. INCA.

## 🧠 Conceito e fisiopatologia

- O rastreamento de câncer colorretal se baseia na sequência adenoma-carcinoma
- A maioria dos adenocarcinomas colorretais se origina de pólipos adenomatosos que evoluem por acúmulo de mutações (via APC/beta-catenina na maioria dos casos, via instabilidade de microssatélites em tumores associados a Lynch) ao longo de anos
- A remoção do pólipo antes da transformação maligna é o mecanismo pelo qual a colonoscopia reduz incidência e mortalidade, não apenas detecta a doença precocemente

- Todo programa de rastreamento populacional equilibra dois riscos opostos
- Começar cedo/testar com muita frequência aumenta a detecção de doença real, mas também aumenta falso-positivos, procedimentos invasivos desnecessários e sobrediagnóstico de tumores indolentes
- Começar tarde/testar com pouca frequência reduz esses danos, mas pode perder a janela de detecção precoce que de fato muda desfecho
- As diferenças de faixa etária entre USPSTF e INCA refletem exatamente esse balanço, calculado sobre populações com prevalência, acesso ao sistema de saúde e expectativa de vida distintas
- Por isso a mesma lógica epidemiológica gera recomendações numericamente diferentes em cada país

💡 Pensa assim: rastrear é um gangorra entre "achar cedo demais coisa que nunca ia doer" e "achar tarde demais coisa que já não tem mais volta" — cada diretriz escolhe um ponto diferente dessa gangorra conforme a população que atende.

## 🔹 Câncer colorretal

- **Rastreamento (USPSTF):** inicia-se aos **45 anos** (idade reduzida da recomendação anterior de 50) até os **75 anos** em risco médio, com decisão individualizada entre 76-85 anos. Métodos aceitos: colonoscopia a cada 10 anos, FIT/sangue oculto anual, sigmoidoscopia flexível a cada 5 anos (± FIT), colonografia por TC a cada 5 anos — todos válidos, escolha compartilhada com o paciente.
- **Rastreamento (INCA/Ministério da Saúde):** ainda recomenda **50 a 75 anos**, divergindo da USPSTF — está em processo de revisão para eventualmente reduzir a idade de início, mas essa mudança ainda não está formalmente adotada como diretriz nacional.
- **Vigilância pós-polipectomia:** pólipo de **baixo risco** (1-2 adenomas tubulares <10mm, sem displasia de alto grau) após polipectomia completa → repetir colonoscopia em **7-10 anos**. Pólipo de **alto risco** (≥3 adenomas, adenoma ≥10mm, componente viloso, displasia de alto grau, adenoma serrilhado séssil grande) → vigilância mais precoce, em geral **3 anos**.
- **Grupos de risco aumentado:** história familiar de câncer colorretal ou síndromes hereditárias (Lynch, polipose adenomatosa familiar) mudam idade de início e intervalo — os intervalos padrão valem só para risco médio. Doença inflamatória intestinal de longa duração (retocolite ulcerativa, Crohn colônico extenso) exige protocolo próprio, iniciado 8-10 anos após o diagnóstico da DII, com intervalos mais curtos (1-3 anos).
- 💎 **Pearl:** o **adenoma serrilhado séssil** é uma via de carcinogênese colorretal distinta do adenoma convencional, historicamente subdiagnosticada — merece a mesma atenção de vigilância que adenomas vilosos/grandes, e é um distrator comum quando a banca descreve histologia "atípica".
- ⚠️ **Pitfall:** aplicar o intervalo de vigilância de pólipo de alto risco (3 anos) a um pólipo de baixo risco, ou vice-versa — superestima ou subestima o risco, e a banca costuma inverter exatamente esse par.
- 📝 **Como caiu:** rastreamento USPSTF — EBSERH 2025 Q40; pólipo de baixo risco — ENARE 2026 Q6.

## 🔹 Câncer de próstata — rastreamento (PSA) e grau histológico (Gleason)

- **Rastreamento com PSA (USPSTF):** decisão compartilhada entre **55-69 anos** (grau C — benefício pequeno e incerto) e **desaconselha rastreamento sistemático ≥70 anos** — reflexo do risco de sobrediagnóstico e sobretratamento de tumores indolentes detectados só pelo PSA.
- **Escore de Gleason:** avalia o grau histológico do adenocarcinoma **após biópsia ou peça cirúrgica** — não é ferramenta de rastreamento, mas de estadiamento/prognóstico uma vez que a doença já foi detectada (por PSA elevado ou toque suspeito). Soma os dois padrões arquiteturais mais representados na amostra (o mais comum + o segundo mais comum, ou o mais alto se for o segundo padrão) — varia de 6 a 10.
- **Grupos de Grau (Grade Groups):** conversão de 1 a 5 para simplificar a comunicação prognóstica — Grupo 1 = Gleason ≤6 (bom prognóstico), Grupo 5 = Gleason 9-10 (pior prognóstico).
- **Conduta pós-diagnóstico:** vigilância ativa é opção legítima (não subtratamento) para câncer de próstata de baixo risco (Grupo 1, PSA baixo, volume tumoral pequeno) — evita os efeitos adversos de tratamento definitivo em tumores de comportamento indolente.
- 💎 **Pearl:** **Gleason 3+4=7 (Grupo 2) tem prognóstico melhor que Gleason 4+3=7 (Grupo 3)**, mesmo somando o mesmo total 7 — a ordem dos padrões importa, porque o primeiro número reflete o padrão predominante. O escore é atribuído na biópsia (fragmentos de agulha) e pode diferir do escore final na peça de prostatectomia — a peça cirúrgica é considerada mais representativa quando os dois divergem.
- ⚠️ **Pitfall:** somar os números do Gleason sem considerar a ordem dos padrões, ou tratar o Gleason como exame de rastreamento — ele só existe depois de uma biópsia já indicada por outro achado.
- 📝 **Como caiu:** ENARE 2026 Q43 — escore de Gleason.

## 🔹 Câncer de mama

- **Rastreamento (USPSTF, atualização 2024):** mamografia **bienal dos 40 aos 74 anos**.
- **Rastreamento (INCA):** mamografia bienal dos **50 aos 69 anos**, argumentando que abaixo de 50 a sensibilidade da mamografia é bem menor (53-77% vs. 88% na faixa 50-69) e o benefício populacional é menos consistente — divergência real e citável entre as duas diretrizes.
- **Alto risco (mutação BRCA, história familiar importante):** ressonância magnética complementar à mamografia, com início mais precoce que o risco habitual.
- 📝 **Como caiu:** ainda não cobrado no corpus — a divergência de faixa etária USPSTF (40 anos) vs. INCA (50 anos) é candidato de alto rendimento.

## 🔹 Câncer de colo do útero

- **Rastreamento (Brasil):** citologia (Papanicolaou) dos **25 aos 64 anos**, a cada 3 anos após dois exames anuais normais consecutivos — o Brasil está migrando para o **teste de HPV-DNA como exame primário**, repetido a cada 5 anos se negativo.
- **Rastreamento (USPSTF):** citologia isolada a cada 3 anos (21-29 anos) ou co-teste/HPV a cada 5 anos (30-65 anos).
- 💎 **Pearl:** nunca iniciar rastreamento de colo antes de atividade sexual nem antes dos 21-25 anos — não reduz mortalidade nessa faixa. Vacinação contra HPV reduz, mas não elimina, a necessidade de rastreamento — mulheres vacinadas seguem o mesmo cronograma, pois a vacina não cobre 100% dos subtipos oncogênicos.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Câncer de pulmão

- **Rastreamento (USPSTF):** TC de tórax de baixa dose **anual** para fumantes ou ex-fumantes (que pararam há <15 anos) de **50-80 anos** com carga tabágica **≥20 anos-maço**.
- ⚠️ **Pitfall:** não existe programa nacional brasileiro amplamente implementado equivalente — se o enunciado citar rastreamento de pulmão no Brasil sem especificar, a resposta correta costuma se apoiar na recomendação internacional (USPSTF), não numa diretriz nacional formal.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**USPSTF vs. INCA — faixas etárias de rastreamento**

| Câncer | USPSTF | INCA/Brasil |
|---|---|---|
| Colorretal | 45-75 anos | 50-75 anos |
| Mama | 40-74 anos (bienal) | 50-69 anos (bienal) |
| Colo do útero | 21-65 anos (citologia/HPV) | 25-64 anos (citologia/HPV) |
| Próstata (PSA) | 55-69 anos, decisão compartilhada | Sem programa populacional formal |
| Pulmão | 50-80 anos, tabagismo ≥20 anos-maço | Sem programa nacional amplo |

## 📚 Referências essenciais

- USPSTF Recommendation Statement — Screening for Colorectal Cancer (2021), Breast Cancer (2024), Cervical Cancer, Prostate Cancer e Lung Cancer.
- ACG/US Multi-Society Task Force — Surveillance intervals after colonoscopy and polypectomy.
- Sistema de graduação de Gleason modificado pela ISUP (International Society of Urological Pathology).
- INCA (Instituto Nacional de Câncer) — Diretrizes para Detecção Precoce do Câncer de Mama e Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero.
`;

export default content.trim();
