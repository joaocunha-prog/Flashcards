/**
 * Resumo — Hematologia · Anemias.
 *
 * Cobre as entidades do assunto no corpus: perfil laboratorial da anemia
 * ferropriva, degeneração combinada subaguda da medula por deficiência de
 * vitamina B12 e investigação inicial da pancitopenia. Também traz a
 * classificação geral das anemias por VCM, diagnósticos diferenciais mais
 * amplos e causas de pancitopenia que ainda não caíram nas provas reais.
 */
const content = `
## 🎯 Essencial

- **Anemia ferropriva:** microcítica e hipocrômica, com **RDW elevado**, **ferritina baixa** (marcador mais específico), ferro sérico baixo, **TIBC (capacidade total de ligação do ferro) elevada** e saturação de transferrina baixa.
- Causa mais comum em adultos é **perda sanguínea crônica** — investigar trato gastrointestinal em homens e mulheres na pós-menopausa; causa menstrual em mulheres em idade fértil. Doença celíaca, gastrite atrófica/*H. pylori* e ancilostomíase são causas menos lembradas, mas cobráveis. Repor ferro sem investigar a fonte é conduta incompleta.
- **Deficiência de B12** causa anemia macrocítica megaloblástica com **neutrófilos hipersegmentados**, mas a **degeneração combinada subaguda da medula espinhal** (cordões posteriores e laterais) pode ocorrer **sem anemia concomitante**.
- Degeneração combinada subaguda: perda de propriocepção e sensibilidade vibratória (cordão posterior) + espasticidade e sinal de Babinski (trato corticoespinhal/cordão lateral); também pode haver neuropatia periférica e distúrbios cognitivos/psiquiátricos ("demência megaloblástica").
- **Ácido metilmalônico e homocisteína** ajudam a confirmar deficiência de B12 quando a dosagem sérica é limítrofe — ambos elevados na falta de B12; só a homocisteína sobe isoladamente na falta de folato.
- Reposição de B12 com manifestação neurológica estabelecida deve ser **parenteral (IM)** — não tratar quadro neurológico já instalado apenas com reposição oral/dietética.
- **Investigação inicial de pancitopenia:** contagem de reticulócitos (avalia resposta medular), esfregaço de sangue periférico e, quando a causa não é evidente, **mielograma/biópsia de medula óssea**.
- **Anemia hemolítica** (não citada nas questões, mas diagnóstico diferencial obrigatório de anemia normocítica): reticulocitose, LDH elevado, haptoglobina baixa e bilirrubina indireta elevada; teste de Coombs direto distingue causa autoimune de outras causas de hemólise.

## 💎 Pearls

- Ferritina é **reagente de fase aguda** — em contexto inflamatório/infeccioso, uma ferritina "normal" não exclui ferropenia; correlacionar com saturação de transferrina e contexto clínico.
- RDW ajuda a diferenciar as microcíticas: **elevado na ferropriva**, tipicamente normal na talassemia — o **índice de Mentzer** (VCM/nº de hemácias) <13 sugere talassemia, >13 sugere ferropenia.
- A degeneração combinada subaguda pode ser a **única manifestação** da deficiência de B12 — não esperar anemia para suspeitar clinicamente.
- Cirurgia bariátrica, gastrectomia, doença de Crohn ileal, metformina crônica, uso prolongado de IBP/anti-H2, supercrescimento bacteriano do intestino delgado e dieta vegana estrita são causas clássicas e recorrentes de deficiência de B12; a causa autoimune mais lembrada é a **anemia perniciosa** (anticorpos anti-fator intrínseco e anti-célula parietal, associada a gastrite atrófica autoimune).
- Na pancitopenia, **índice reticulocitário baixo** aponta para falência de produção medular; **reticulocitose relativa** aponta para destruição/sequestro periférico das células — esse é o primeiro divisor diagnóstico.
- Medula óssea **hipocelular** na pancitopenia sugere anemia aplásica (idiopática, por droga — cloranfenicol, quimioterápicos —, radiação ou infecção viral como parvovírus B19); medula **hipercelular com displasia** sugere síndrome mielodisplásica; infiltração por blastos sugere leucemia aguda.
- Hemoglobinúria paroxística noturna (HPN) é diagnóstico diferencial de pancitopenia com hemólise e trombose em sítios atípicos — pesquisar por citometria de fluxo (deficiência de CD55/CD59).
- Deficiência de folato isolada (sem B12 baixa) também causa macrocitose e hipersegmentação de neutrófilos, mas **nunca causa degeneração combinada subaguda** — o dano neurológico é exclusivo da carência de B12.
- Anemia falciforme e talassemias são hemoglobinopatias hereditárias importantes fora do recorte deste corpus — eletroforese de hemoglobina é o exame confirmatório de ambas quando há suspeita clínica (etnia, história familiar, crises dolorosas).

## ⚠️ Pitfalls

- **Repor ácido fólico isoladamente** sem excluir deficiência de B12 concomitante — pode corrigir a anemia e mascarar a progressão do dano neurológico irreversível.
- **Diagnosticar ferropenia só pela ferritina "normal"** em paciente inflamatório, sem considerar outros marcadores do perfil de ferro.
- **Assumir que ausência de anemia exclui deficiência de B12** diante de quadro neurológico compatível com degeneração combinada subaguda.
- **Tratar pancitopenia empiricamente com transfusão** sem investigar a causa de base.
- **Iniciar reposição oral isolada de B12** em paciente com déficit neurológico já estabelecido, sem via parenteral inicial.
- **Não considerar hemólise no diagnóstico diferencial de anemia normocítica** — reticulocitose, LDH elevado, haptoglobina baixa e bilirrubina indireta elevada sinalizam destruição periférica de hemácias, não falência medular.
- **Esquecer de investigar HIV, lúpus e neoplasias hematológicas** como causas de pancitopenia em paciente jovem com quadro sistêmico associado.
- **Solicitar eletroforese de hemoglobina apenas diante de anemia microcítica sem outra explicação** — pedir o exame indiscriminadamente antes de excluir ferropenia gera resultado de difícil interpretação (ferropenia mascara traço talassêmico na eletroforese).

## 📝 Como a banca cobra

**Anemias aparece em 3 questões (1,42% do corpus)**, todas do ENARE 2026, cada uma cobrando um recorte diferente do assunto.

- **Anemia ferropriva — perfil laboratorial** (ENARE 2026 Q15) exige reconhecer o conjunto ferritina baixa + TIBC alta + saturação de transferrina baixa, não um marcador isolado.
- **Deficiência de vitamina B12 — degeneração combinada subaguda** (ENARE 2026 Q18) testa a associação neurológica clássica, cobrando raciocínio fisiopatológico além do hemograma.
- **Pancitopenia — investigação inicial** (ENARE 2026 Q71) cobra a sequência lógica de investigação (reticulócitos → esfregaço → medula óssea), não o diagnóstico final da causa.

## 🧠 Conceito e fisiopatologia

O ferro é indispensável à síntese do grupo heme; sua carência reduz a produção de hemoglobina e gera hemácias pequenas e pálidas — mas a causa da ferropenia em adultos quase sempre é perda sanguínea crônica, não apenas baixa ingestão. A vitamina B12 atua como cofator em duas vias essenciais: na conversão de homocisteína em metionina (síntese de DNA, cuja falha gera a megaloblastose) e na conversão de metilmalonil-CoA em succinil-CoA (metabolismo de ácidos graxos de cadeia ímpar, cuja falha compromete a síntese de mielina) — por isso a deficiência de B12, ao contrário da de folato, causa dano neurológico.

A pancitopenia reflete a falência simultânea de hemácias, leucócitos e plaquetas, por mecanismos centrais (aplasia medular, infiltração neoplásica, mielodisplasia, deficiência de B12/folato) ou periféricos (hiperesplenismo, destruição imune, sequestro) — diferenciar os dois grupos é o primeiro passo racional da investigação.

## 📊 Classificação geral das anemias (VCM)

- **Microcíticas (VCM <80 fL):** ferropriva, talassemias, anemia de doença crônica avançada, anemia sideroblástica.
- **Normocíticas (VCM 80-100 fL):** anemia de doença crônica (fase inicial), hemólise, doença renal crônica (deficiência de eritropoetina), sangramento agudo, infiltração medular inicial.
- **Macrocíticas (VCM >100 fL):** megaloblásticas (B12/folato), hipotireoidismo, hepatopatia, síndrome mielodisplásica, uso de hidroxiureia/quimioterápicos, alcoolismo.
- **Anemia de doença crônica:** ferritina normal/alta (diferente da ferropriva), ferro sérico baixo, TIBC baixa ou normal — padrão que confunde com ferropenia se não avaliado em conjunto.

## 🩺 Achados de exame físico clássicos

- **Ferropriva:** coiloníquia (unha em colher), glossite atrófica, queilite angular, pica (desejo de ingerir substâncias não alimentares, como gelo/terra) e palidez cutâneo-mucosa.
- **Deficiência de B12:** glossite de Hunter (língua lisa, vermelha e dolorosa), icterícia leve por hemólise intramedular, além dos achados neurológicos já descritos.
- **Pancitopenia:** palidez, petéquias/equimoses, sangramento mucoso e febre/infecções de repetição conforme a linhagem predominantemente afetada.

## 🔎 Diagnóstico

- **Ferropriva:** hemograma (VCM/HCM baixos, RDW alto), ferritina, ferro sérico, TIBC, saturação de transferrina; investigar fonte de perda sanguínea (endoscopia/colonoscopia conforme idade e sintomas, sorologia para doença celíaca).
- **Deficiência de B12:** dosagem sérica de B12, ácido metilmalônico e homocisteína quando limítrofe; hemograma com macrocitose e neutrófilos hipersegmentados; avaliação neurológica dirigida (propriocepção, vibração, reflexos, Babinski); anticorpos anti-fator intrínseco/anti-célula parietal quando suspeita de anemia perniciosa.
- **Pancitopenia:** hemograma completo com reticulócitos, esfregaço de sangue periférico, LDH e bilirrubinas se suspeita de hemólise, sorologias (HIV, hepatites, parvovírus B19), pesquisa de autoanticorpos se suspeita autoimune, mielograma/biópsia de medula óssea conforme necessidade.

## 💊 Tratamento

- **Ferropriva:** reposição oral de ferro (ou IV se intolerância/má absorção/perda contínua importante) + tratamento da causa da perda sanguínea; resposta esperada — reticulocitose em 7-10 dias e ganho de ~1 g/dL de hemoglobina a cada 2-3 semanas.
- **Deficiência de B12 com manifestação neurológica:** reposição parenteral (IM) inicial, seguida de manutenção.
- **Deficiência de B12 sem manifestação neurológica leve:** reposição oral em altas doses pode ser suficiente em casos selecionados.
- **Pancitopenia:** tratamento dirigido à causa de base identificada na investigação — suporte transfusional apenas quando indicado, nunca como substituto do diagnóstico etiológico; anemia aplásica grave pode exigir imunossupressão (globulina antitimocítica + ciclosporina) ou transplante de medula óssea em jovens com doador compatível.

## 📈 Complicações relevantes

- **Anemia ferropriva grave/crônica:** síndrome de Plummer-Vinson (anemia ferropriva + disfagia por anel esofágico + glossite), insuficiência cardíaca de alto débito em casos extremos, prejuízo cognitivo/desenvolvimento em crianças.
- **Deficiência de B12 não tratada:** progressão da degeneração combinada subaguda para déficit motor e sensitivo permanente; risco cardiovascular aumentado pela hiper-homocisteinemia associada.
- **Pancitopenia por aplasia medular grave:** infecções oportunistas graves (neutropenia), sangramento espontâneo (plaquetopenia) — são as duas principais causas de morte nesse cenário, reforçando a urgência da investigação etiológica.
- **Hemólise crônica não diagnosticada:** colelitíase por cálculos de bilirrubinato (pigmentares), sobrecarga de ferro secundária a hemólise/transfusões repetidas.

## 📚 Referências essenciais

- WHO Guideline on Iron Deficiency Anemia.
- Consenso da Sociedade Brasileira de Hematologia e Hemoterapia sobre deficiência de vitamina B12.
- Hoffman — Hematology: Basic Principles and Practice (capítulo de anemias e falência medular).
- British Society for Haematology — Guidelines for the diagnosis and management of aplastic anaemia.
`;

export default content.trim();
