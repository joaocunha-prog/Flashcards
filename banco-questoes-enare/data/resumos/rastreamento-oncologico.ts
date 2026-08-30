/**
 * Resumo — Oncologia · Rastreamento oncológico.
 *
 * Cobre as entidades do corpus: rastreamento de câncer colorretal
 * conforme USPSTF, seguimento após pólipo colorretal de baixo risco e
 * escore de Gleason no câncer de próstata (este último reorganizado como
 * bloco à parte — é grau histológico pós-biópsia, não rastreamento em
 * si). Expandido com rastreamento de mama, colo do útero, próstata (PSA)
 * e pulmão, contrastando USPSTF com as diretrizes brasileiras do INCA,
 * e com os vieses estatísticos do rastreamento — conteúdo ainda não
 * cobrado no corpus, mas plausível em provas futuras do assunto.
 */
const content = `
## 🎯 Essencial

- **Rastreamento de câncer colorretal (USPSTF): inicia-se aos 45 anos** (idade reduzida da recomendação anterior de 50) até os **75 anos** em risco médio, com decisão individualizada entre 76-85 anos.
- **Métodos de rastreamento colorretal aceitos:** colonoscopia a cada 10 anos, pesquisa de sangue oculto/teste imunoquímico fecal (FIT) anual, sigmoidoscopia flexível a cada 5 anos (± FIT), colonografia por TC a cada 5 anos — todos válidos, escolha compartilhada com o paciente.
- **Pólipo colorretal de baixo risco (1-2 adenomas tubulares <10mm, sem displasia de alto grau) após polipectomia completa: repetir colonoscopia em 7-10 anos** — não é necessário encurtar o intervalo como se fosse alto risco.
- **Pólipos de alto risco** (≥3 adenomas, adenoma ≥10mm, componente viloso, displasia de alto grau, adenoma serrilhado séssil grande) exigem vigilância mais precoce, em geral em 3 anos.
- **O Brasil (INCA/Ministério da Saúde) ainda recomenda rastreamento colorretal dos 50 aos 75 anos**, divergindo da USPSTF — o INCA está em processo de revisão para eventualmente reduzir a idade de início para 45 anos, mas essa mudança ainda não está formalmente adotada como diretriz nacional. Numa prova brasileira, vale checar se o enunciado pede a diretriz americana (USPSTF, 45 anos) ou a nacional (INCA, 50 anos).
- **Rastreamento (paciente assintomático de risco médio) é diferente de investigação diagnóstica (paciente com sinal de alarme)** — sangramento retal, mudança do hábito intestinal, perda de peso não intencional ou anemia ferropriva inexplicada indicam colonoscopia diagnóstica imediata, independentemente da idade ou do intervalo de rastreamento vigente.
- **Rastreamento oncológico não é vitalício**: suspende-se quando a expectativa de vida do paciente é curta (geralmente <10 anos) ou quando comorbidades tornam improvável que o achado mude a conduta ou o desfecho — decisão individualizada, não um limite etário isolado e rígido.

**Fora do eixo do rastreamento propriamente dito (classificado aqui pelo corpus): grau histológico do câncer de próstata**

- **Escore de Gleason** avalia o grau histológico do adenocarcinoma de próstata **após biópsia ou peça cirúrgica** — não é ferramenta de rastreamento, mas de estadiamento/prognóstico uma vez que a doença já foi detectada. Soma os dois padrões arquiteturais mais representados na amostra (o mais comum + o segundo mais comum, ou o mais alto se for o segundo padrão) — varia de 6 a 10, e quanto maior, pior a diferenciação e o prognóstico.
- **Gleason é convertido em Grupos de Grau (Grade Groups) de 1 a 5** para simplificar a comunicação prognóstica: Grupo 1 = Gleason ≤6 (bom prognóstico), Grupo 5 = Gleason 9-10 (pior prognóstico).

## 💎 Pearls

- **Gleason 3+4=7 (Grupo 2) tem prognóstico melhor que Gleason 4+3=7 (Grupo 3)**, mesmo somando o mesmo total 7 — a ordem dos padrões importa, porque o primeiro número reflete o padrão predominante.
- **História familiar de câncer colorretal ou síndromes hereditárias (Lynch, polipose adenomatosa familiar) muda a idade de início e o intervalo de rastreamento** — os intervalos padrão da USPSTF valem só para risco médio.
- Um exame de rastreamento **positivo (FIT, sangue oculto) sempre exige colonoscopia diagnóstica completa** — não se repete o mesmo teste não invasivo nem se troca por outro método de rastreio.
- **Adenoma serrilhado séssil** é uma via de carcinogênese colorretal distinta do adenoma convencional, historicamente subdiagnosticada — merece a mesma atenção de vigilância que adenomas vilosos/grandes.
- O escore de Gleason é atribuído **na biópsia (fragmentos de agulha) e pode diferir do escore final na peça de prostatectomia** — a peça cirúrgica é considerada mais representativa quando os dois divergem.
- **Rastreamento de câncer de mama:** USPSTF (atualização de 2024) recomenda mamografia bienal dos **40 aos 74 anos**; já o **INCA recomenda dos 50 aos 69 anos, também bienal**, argumentando que abaixo de 50 a sensibilidade da mamografia é bem menor (53-77% vs. 88% na faixa 50-69) e o benefício populacional é menos consistente — divergência real e citável entre as duas diretrizes.
- **Rastreamento de câncer do colo do útero no Brasil:** citologia (Papanicolaou) dos **25 aos 64 anos**, a cada 3 anos após dois exames anuais normais consecutivos — o Brasil está migrando para o **teste de HPV-DNA como exame primário**, repetido a cada 5 anos se negativo, seguindo tendência internacional. A USPSTF permite citologia isolada a cada 3 anos (21-29 anos) ou co-teste/HPV a cada 5 anos (30-65 anos) — nunca iniciar rastreamento de colo antes de atividade sexual nem antes dos 21-25 anos, pois não reduz mortalidade nessa faixa.
- **Rastreamento de câncer de próstata (PSA):** a USPSTF recomenda decisão compartilhada entre 55-69 anos (grau C, benefício pequeno e incerto) e desaconselha rastreamento sistemático ≥70 anos — reflexo do risco de sobrediagnóstico e sobretratamento de tumores indolentes detectados só pelo PSA.
- **Rastreamento de câncer de pulmão:** USPSTF recomenda TC de tórax de baixa dose anual para fumantes ou ex-fumantes (que pararam há <15 anos) de 50-80 anos com carga tabágica ≥20 anos-maço — não existe programa nacional equivalente amplamente implementado no Brasil.
- **Vieses clássicos do rastreamento** são conceito recorrente em provas: **lead-time bias** (detecção precoce aumenta o tempo "vivendo com o diagnóstico" sem necessariamente mudar a data da morte), **length-time bias** (rastreamento detecta desproporcionalmente tumores de crescimento lento, menos letais) e **sobrediagnóstico** (detectar doença que nunca causaria sintomas/morte) — todos podem inflar artificialmente a sobrevida aparente de um programa de rastreamento sem reduzir mortalidade real.
- **CEA (antígeno carcinoembrionário) não é exame de rastreamento populacional de câncer colorretal** — sua utilidade é no seguimento pós-tratamento de câncer colorretal já diagnosticado, para detectar recidiva precocemente; um distrator clássico é oferecê-lo como opção de rastreio inicial.
- **Doença inflamatória intestinal de longa duração (retocolite ulcerativa, Crohn colônico extenso)** exige protocolo de vigilância colonoscópica próprio, iniciado mais cedo (8-10 anos após o diagnóstico da DII) e com intervalo mais curto que o rastreamento de risco médio — o risco de câncer colorretal nessa população não segue as mesmas regras da população geral.
- **Vacinação contra HPV reduz, mas não elimina, a necessidade de rastreamento cervical** — mulheres vacinadas continuam seguindo o mesmo cronograma de citologia/HPV-DNA da população não vacinada, pois a vacina não cobre 100% dos subtipos oncogênicos.

## ⚠️ Pitfalls

- **Aplicar o intervalo de vigilância de pólipo de alto risco (3 anos) a um pólipo de baixo risco** — superestima risco e gera colonoscopias desnecessárias.
- **Achar que rastreamento colorretal só significa colonoscopia** — FIT anual e outros métodos são igualmente válidos e devem ser oferecidos como opção.
- **Ignorar a mudança de idade de início do rastreamento (45 anos) na diretriz americana** e aplicá-la automaticamente como se fosse a diretriz brasileira vigente (INCA ainda usa 50 anos) — a banca pode explorar exatamente essa divergência.
- **Somar os números do Gleason sem considerar a ordem dos padrões** — 3+4 e 4+3 não são equivalentes em prognóstico, apesar do total idêntico.
- **Confundir Grupo de Grau com o escore numérico bruto do Gleason** — a banca pode pedir a conversão exata entre os dois sistemas.
- **Tratar o Gleason como exame de rastreamento** — ele só existe depois de uma biópsia já indicada por outro achado (PSA elevado, toque suspeito), não é ferramenta populacional de detecção.
- **Recomendar mamografia de rotina antes dos 40-50 anos em mulher de risco habitual** sem levar em conta qual diretriz o enunciado está cobrando (USPSTF vs. INCA) — as faixas etárias não são intercambiáveis.
- **Confundir sobrevida aumentada num programa de rastreamento com redução real de mortalidade** — lead-time e length-time bias podem simular benefício que não existe.
- **Adiar investigação diagnóstica por o paciente ainda não ter atingido a idade de rastreamento** — sinal de alarme (sangramento, anemia, perda de peso) sempre justifica colonoscopia independentemente da idade.
- **Oferecer CEA como exame de rastreamento inicial de câncer colorretal** — seu papel é no seguimento pós-tratamento, não na detecção populacional.
- **Continuar rastreamento indefinidamente em paciente muito idoso com expectativa de vida limitada** — gera mais dano (procedimento invasivo, ansiedade, achado incidental) do que benefício real.

## 📝 Como a banca cobra

**Rastreamento oncológico aparece em 3 questões (1,42% do corpus)**, uma do EBSERH e duas do ENARE 2026, todas em torno de **câncer colorretal e câncer de próstata**.

- **EBSERH 2025 Q40** cobrou a **recomendação USPSTF para rastreamento de câncer colorretal**, provavelmente testando a faixa etária correta (45-75 anos) e/ou os métodos aceitos.
- **ENARE 2026 Q6** trouxe um cenário de **pólipo colorretal de baixo risco**, testando se o candidato aplica o intervalo de vigilância correto (7-10 anos) em vez de encurtar desnecessariamente.
- **ENARE 2026 Q43** cobrou o **escore de Gleason no câncer de próstata**, provavelmente exigindo cálculo ou interpretação do escore/grupo de grau a partir de um resultado de biópsia.

## 🧠 Conceito e fisiopatologia

O rastreamento de câncer colorretal se baseia na sequência adenoma-carcinoma: a maioria dos adenocarcinomas colorretais se origina de pólipos adenomatosos que evoluem por acúmulo de mutações (via APC/beta-catenina na maioria dos casos, via instabilidade de microssatélites em tumores associados a Lynch) ao longo de anos — a remoção do pólipo antes da transformação maligna é o mecanismo pelo qual a colonoscopia reduz incidência e mortalidade, não apenas detecta a doença precocemente.

O escore de Gleason quantifica o grau de perda da arquitetura glandular normal da próstata — padrões mais altos (4 e 5) representam glândulas mal formadas, cribriformes ou lâminas de células sem formação glandular, refletindo maior agressividade biológica e maior probabilidade de invasão extraprostática e metástase.

De forma geral, todo programa de rastreamento populacional equilibra dois riscos opostos: começar cedo/testar com muita frequência aumenta a detecção de doença real, mas também aumenta falso-positivos, procedimentos invasivos desnecessários e sobrediagnóstico de tumores indolentes; começar tarde/testar com pouca frequência reduz esses danos, mas pode perder a janela de detecção precoce que de fato muda desfecho. As diferenças de faixa etária entre USPSTF e INCA refletem exatamente esse balanço, calculado sobre populações com prevalência e expectativa de vida distintas.

## 🔎 Diagnóstico

- **Rastreamento colorretal:** colonoscopia (padrão-ouro, permite biópsia/polipectomia no mesmo procedimento), FIT/sangue oculto anual, sigmoidoscopia flexível, colonografia por TC — escolha compartilhada conforme risco e preferência do paciente.
- **Vigilância pós-polipectomia:** intervalo definido pelo número, tamanho e histologia dos pólipos removidos (baixo risco: 7-10 anos; alto risco: ~3 anos).
- **Câncer de próstata:** biópsia guiada por imagem (geralmente após PSA elevado/toque suspeito), com escore de Gleason e Grupo de Grau definidos na análise histopatológica.
- **Câncer de mama:** mamografia digital (± ultrassom complementar em mamas densas); ressonância magnética reservada para grupos de alto risco (mutação BRCA, história familiar importante).
- **Câncer de colo do útero:** citologia oncótica e/ou teste de HPV-DNA, com colposcopia e biópsia dirigida em caso de alteração.
- **Sinais de alarme que anulam a lógica de rastreamento** (justificam investigação imediata, não aguardar idade/intervalo): sangramento retal ou vaginal anormal, mudança persistente do hábito intestinal, perda de peso não intencional, anemia ferropriva sem causa aparente, nódulo mamário palpável.
- **Câncer colorretal em DII de longa data:** colonoscopia de vigilância com biópsias seriadas (mapeamento) a partir de 8-10 anos do diagnóstico da doença inflamatória, repetida em intervalos mais curtos (1-3 anos) que o rastreamento de risco médio.

## 💊 Tratamento

- Fora do escopo direto do rastreamento — a conduta após diagnóstico positivo depende do estadiamento (colonoscopia com biópsia de lesão suspeita → estadiamento oncológico; câncer de próstata → conduta conforme Grupo de Grau, PSA, estadiamento clínico, variando de vigilância ativa a tratamento definitivo).
- **Achado de rastreamento positivo sempre direciona para investigação diagnóstica completa** antes de qualquer decisão terapêutica.
- **Vigilância ativa** é opção legítima (não subtratamento) para câncer de próstata de baixo risco (Grupo de Grau 1, PSA baixo, volume tumoral pequeno) — evita os efeitos adversos de tratamento definitivo em tumores de comportamento indolente.
- **CEA e outros marcadores tumorais** entram no seguimento pós-tratamento (detecção de recidiva), não na decisão terapêutica inicial nem no rastreamento — resultado alterado isoladamente não define conduta sem confirmação por imagem/biópsia.

## 📚 Referências essenciais

- USPSTF Recommendation Statement — Screening for Colorectal Cancer (2021), Breast Cancer (2024), Cervical Cancer, Prostate Cancer e Lung Cancer.
- ACG/US Multi-Society Task Force — Surveillance intervals after colonoscopy and polypectomy.
- Sistema de graduação de Gleason modificado pela ISUP (International Society of Urological Pathology).
- INCA (Instituto Nacional de Câncer) — Diretrizes para Detecção Precoce do Câncer de Mama e Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero.
`;

export default content.trim();
