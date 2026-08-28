/**
 * Resumo — Oncologia · Rastreamento oncológico.
 *
 * Cobre as entidades do assunto no corpus: rastreamento de câncer
 * colorretal conforme USPSTF, seguimento após pólipo colorretal de baixo
 * risco e escore de Gleason no câncer de próstata.
 */
const content = `
## 🎯 Essencial

- **Rastreamento de câncer colorretal (USPSTF): inicia-se aos 45 anos** (idade reduzida da recomendação anterior de 50) até os **75 anos** em risco médio, com decisão individualizada entre 76-85 anos.
- **Métodos de rastreamento colorretal aceitos:** colonoscopia a cada 10 anos, pesquisa de sangue oculto/teste imunoquímico fecal (FIT) anual, sigmoidoscopia flexível a cada 5 anos (± FIT), colonografia por TC a cada 5 anos — todos válidos, escolha compartilhada com o paciente.
- **Pólipo colorretal de baixo risco (1-2 adenomas tubulares <10mm, sem displasia de alto grau) após polipectomia completa: repetir colonoscopia em 7-10 anos** — não é necessário encurtar o intervalo como se fosse alto risco.
- **Pólipos de alto risco** (≥3 adenomas, adenoma ≥10mm, componente viloso, displasia de alto grau, adenoma serrilhado séssil grande) exigem vigilância mais precoce, em geral em 3 anos.
- **Escore de Gleason** avalia o grau histológico do adenocarcinoma de próstata somando os dois padrões arquiteturais mais representados na amostra (o mais comum + o segundo mais comum, ou o mais alto se for o segundo padrão) — varia de 6 a 10, e quanto maior, pior a diferenciação e o prognóstico.
- **Gleason é convertido em Grupos de Grau (Grade Groups) de 1 a 5** para simplificar a comunicação prognóstica: Grupo 1 = Gleason ≤6 (bom prognóstico), Grupo 5 = Gleason 9-10 (pior prognóstico).

## 💎 Pearls

- **Gleason 3+4=7 (Grupo 2) tem prognóstico melhor que Gleason 4+3=7 (Grupo 3)**, mesmo somando o mesmo total 7 — a ordem dos padrões importa, porque o primeiro número reflete o padrão predominante.
- **História familiar de câncer colorretal ou síndromes hereditárias (Lynch, polipose adenomatosa familiar) muda a idade de início e o intervalo de rastreamento** — os intervalos padrão da USPSTF valem só para risco médio.
- Um exame de rastreamento **positivo (FIT, sangue oculto) sempre exige colonoscopia diagnóstica completa** — não se repete o mesmo teste não invasivo nem se troca por outro método de rastreio.
- **Adenoma serrilhado séssil** é uma via de carcinogênese colorretal distinta do adenoma convencional, historicamente subdiagnosticada — merece a mesma atenção de vigilância que adenomas vilosos/grandes.
- O escore de Gleason é atribuído **na biópsia (fragmentos de agulha) e pode diferir do escore final na peça de prostatectomia** — a peça cirúrgica é considerada mais representativa quando os dois divergem.

## ⚠️ Pitfalls

- **Aplicar o intervalo de vigilância de pólipo de alto risco (3 anos) a um pólipo de baixo risco** — superestima risco e gera colonoscopias desnecessárias.
- **Achar que rastreamento colorretal só significa colonoscopia** — FIT anual e outros métodos são igualmente válidos e devem ser oferecidos como opção.
- **Ignorar a mudança de idade de início do rastreamento (45 anos)** e continuar recomendando início aos 50 como se fosse a diretriz vigente.
- **Somar os números do Gleason sem considerar a ordem dos padrões** — 3+4 e 4+3 não são equivalentes em prognóstico, apesar do total idêntico.
- **Confundir Grupo de Grau com o escore numérico bruto do Gleason** — a banca pode pedir a conversão exata entre os dois sistemas.

## 📝 Como a banca cobra

**Rastreamento oncológico aparece em 3 questões (1,42% do corpus)**, uma do EBSERH e duas do ENARE 2026, todas em torno de **câncer colorretal e câncer de próstata**.

- **EBSERH 2025 Q40** cobrou a **recomendação USPSTF para rastreamento de câncer colorretal**, provavelmente testando a faixa etária correta (45-75 anos) e/ou os métodos aceitos.
- **ENARE 2026 Q6** trouxe um cenário de **pólipo colorretal de baixo risco**, testando se o candidato aplica o intervalo de vigilância correto (7-10 anos) em vez de encurtar desnecessariamente.
- **ENARE 2026 Q43** cobrou o **escore de Gleason no câncer de próstata**, provavelmente exigindo cálculo ou interpretação do escore/grupo de grau a partir de um resultado de biópsia.

## 🧠 Conceito e fisiopatologia

O rastreamento de câncer colorretal se baseia na sequência adenoma-carcinoma: a maioria dos adenocarcinomas colorretais se origina de pólipos adenomatosos que evoluem por acúmulo de mutações (via APC/beta-catenina na maioria dos casos, via instabilidade de microssatélites em tumores associados a Lynch) ao longo de anos — a remoção do pólipo antes da transformação maligna é o mecanismo pelo qual a colonoscopia reduz incidência e mortalidade, não apenas detecta a doença precocemente.

O escore de Gleason quantifica o grau de perda da arquitetura glandular normal da próstata — padrões mais altos (4 e 5) representam glândulas mal formadas, cribriformes ou lâminas de células sem formação glandular, refletindo maior agressividade biológica e maior probabilidade de invasão extraprostática e metástase.

## 🔎 Diagnóstico

- **Rastreamento colorretal:** colonoscopia (padrão-ouro, permite biópsia/polipectomia no mesmo procedimento), FIT/sangue oculto anual, sigmoidoscopia flexível, colonografia por TC — escolha compartilhada conforme risco e preferência do paciente.
- **Vigilância pós-polipectomia:** intervalo definido pelo número, tamanho e histologia dos pólipos removidos (baixo risco: 7-10 anos; alto risco: ~3 anos).
- **Câncer de próstata:** biópsia guiada por imagem (geralmente após PSA elevado/toque suspeito), com escore de Gleason e Grupo de Grau definidos na análise histopatológica.

## 💊 Tratamento

- Fora do escopo direto do rastreamento — a conduta após diagnóstico positivo depende do estadiamento (colonoscopia com biópsia de lesão suspeita → estadiamento oncológico; câncer de próstata → conduta conforme Grupo de Grau, PSA, estadiamento clínico, variando de vigilância ativa a tratamento definitivo).
- **Achado de rastreamento positivo sempre direciona para investigação diagnóstica completa** antes de qualquer decisão terapêutica.

## 📚 Referências essenciais

- USPSTF Recommendation Statement — Screening for Colorectal Cancer (2021).
- ACG/US Multi-Society Task Force — Surveillance intervals after colonoscopy and polypectomy.
- Sistema de graduação de Gleason modificado pela ISUP (International Society of Urological Pathology).
`;

export default content.trim();
