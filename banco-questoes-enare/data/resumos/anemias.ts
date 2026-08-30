/**
 * Resumo — Hematologia · Anemias.
 *
 * Reorganizado por entidade clínica (cada quadro tem sua própria seção com
 * quando suspeitar, diagnóstico, tratamento, pearl e pitfall juntos), em vez
 * de picado entre seções genéricas de tipo.
 *
 * Cobre as entidades do assunto no corpus: perfil laboratorial da anemia
 * ferropriva, degeneração combinada subaguda da medula por deficiência de
 * vitamina B12 e investigação inicial da pancitopenia. Inclui também
 * extrapolações de alto rendimento (anemia de doença crônica, talassemia e
 * índice de Mentzer, anemia hemolítica, hemoglobinopatias) ainda não
 * cobradas no corpus, mas plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- O VCM (volume corpuscular médio) é o primeiro divisor de qualquer anemia: **microcítica** (<80 fL — ferropriva, talassemia, doença crônica avançada, sideroblástica), **normocítica** (80-100 fL — doença crônica inicial, hemólise, doença renal crônica, sangramento agudo) ou **macrocítica** (>100 fL — B12/folato, hipotireoidismo, hepatopatia, mielodisplasia).
- Diante de qualquer citopenia isolada ou combinada, a pergunta seguinte é **produção reduzida ou destruição/perda aumentada?** — reticulócitos baixos apontam falência medular; reticulocitose aponta hemólise/sangramento/resposta adequada a reposição.
- Nunca tratar uma deficiência nutricional "no escuro": **repor folato sem excluir B12** mascara o dano neurológico da carência de B12; **tratar ferropenia sem investigar a fonte de perda** deixa a causa (frequentemente neoplásica) sem diagnóstico.

## 📝 Como a banca cobra

**Anemias aparece em 3 questões (1,42% do corpus)**, todas do ENARE 2026, cada uma cobrando um recorte diferente do assunto.

- **Anemia ferropriva — perfil laboratorial** (ENARE 2026 Q15) exige reconhecer o conjunto ferritina baixa + TIBC alta + saturação de transferrina baixa, não um marcador isolado.
- **Deficiência de vitamina B12 — degeneração combinada subaguda** (ENARE 2026 Q18) testa a associação neurológica clássica, cobrando raciocínio fisiopatológico além do hemograma.
- **Pancitopenia — investigação inicial** (ENARE 2026 Q71) cobra a sequência lógica de investigação (reticulócitos → esfregaço → medula óssea), não o diagnóstico final da causa.

## 🧠 Conceito e fisiopatologia

O ferro é indispensável à síntese do grupo heme; sua carência reduz a produção de hemoglobina e gera hemácias pequenas e pálidas — mas a causa da ferropenia em adultos quase sempre é perda sanguínea crônica, não apenas baixa ingestão. A vitamina B12 atua como cofator em duas vias essenciais: conversão de homocisteína em metionina (síntese de DNA, cuja falha gera megaloblastose) e conversão de metilmalonil-CoA em succinil-CoA (metabolismo de ácidos graxos de cadeia ímpar, cuja falha compromete a síntese de mielina) — por isso a deficiência de B12, ao contrário da de folato, causa dano neurológico. A pancitopenia reflete falência simultânea de hemácias, leucócitos e plaquetas, por mecanismos centrais (aplasia medular, infiltração neoplásica, mielodisplasia, deficiência de B12/folato) ou periféricos (hiperesplenismo, destruição imune, sequestro) — diferenciar os dois grupos é o primeiro passo racional da investigação.

## 🔹 Anemia ferropriva

- **Quando suspeitar:** anemia microcítica e hipocrômica com **RDW elevado**; achados de exame físico: coiloníquia (unha em colher), glossite atrófica, queilite angular, pica (desejo de ingerir substâncias não alimentares, como gelo/terra).
- **Diagnóstico:** **ferritina baixa** (marcador mais específico), ferro sérico baixo, **TIBC elevada**, saturação de transferrina baixa — nenhum marcador isolado fecha o diagnóstico, é a combinação que importa.
- **Investigar a fonte:** perda sanguínea crônica é a causa mais comum em adultos — investigar trato gastrointestinal em homens e mulheres na pós-menopausa; causa menstrual em mulheres em idade fértil. Doença celíaca, gastrite atrófica/*H. pylori* e ancilostomíase são causas menos lembradas, mas cobráveis.
- **Tratamento:** reposição oral de ferro (ou IV se intolerância/má absorção/perda contínua importante) + tratamento da causa da perda; resposta esperada — reticulocitose em 7-10 dias, ganho de ~1 g/dL de hemoglobina a cada 2-3 semanas.
- 💎 **Pearl:** ferritina é **reagente de fase aguda** — em contexto inflamatório/infeccioso, ferritina "normal" não exclui ferropenia; correlacionar com saturação de transferrina e contexto clínico.
- ⚠️ **Pitfall:** diagnosticar ferropenia só pela ferritina "normal" em paciente inflamatório; repor ferro sem investigar a fonte da perda.
- 📝 **Como caiu:** ENARE 2026 Q15.

## 🔹 Deficiência de vitamina B12 e degeneração combinada subaguda

- **Quando suspeitar:** anemia macrocítica megaloblástica com **neutrófilos hipersegmentados**, glossite de Hunter (língua lisa, vermelha, dolorosa) — mas a **degeneração combinada subaguda da medula espinhal** (cordões posteriores e laterais) pode ocorrer **sem anemia concomitante**, sendo por vezes a única manifestação.
- **Quadro neurológico:** perda de propriocepção e sensibilidade vibratória (cordão posterior) + espasticidade e sinal de Babinski (trato corticoespinhal/cordão lateral); pode haver neuropatia periférica e distúrbios cognitivos/psiquiátricos ("demência megaloblástica").
- **Diagnóstico:** dosagem sérica de B12; **ácido metilmalônico e homocisteína** ajudam quando a dosagem é limítrofe — ambos elevados na falta de B12, só a homocisteína sobe isoladamente na falta de folato (a distinção laboratorial mais cobrável do tema). Avaliação neurológica dirigida (propriocepção, vibração, reflexos, Babinski). Causas: cirurgia bariátrica, gastrectomia, doença de Crohn ileal, metformina crônica, uso prolongado de IBP/anti-H2, supercrescimento bacteriano do intestino delgado, dieta vegana estrita; causa autoimune mais lembrada é a **anemia perniciosa** (anticorpos anti-fator intrínseco e anti-célula parietal, gastrite atrófica autoimune).
- **Tratamento:** manifestação neurológica estabelecida exige reposição **parenteral (IM)** — não tratar quadro neurológico já instalado apenas com via oral/dietética; sem manifestação neurológica, reposição oral em altas doses pode bastar em casos selecionados.
- 💎 **Pearl:** deficiência de folato isolada também causa macrocitose e hipersegmentação de neutrófilos, mas **nunca causa degeneração combinada subaguda** — o dano neurológico é exclusivo da carência de B12.
- ⚠️ **Pitfall:** repor ácido fólico isoladamente sem excluir B12 concomitante — pode corrigir a anemia e mascarar a progressão do dano neurológico irreversível; ou assumir que ausência de anemia exclui deficiência de B12 diante de quadro neurológico compatível.
- 📝 **Como caiu:** ENARE 2026 Q18.

## 🔹 Investigação inicial de pancitopenia

- **Sequência lógica:** **1) reticulócitos** (avalia resposta medular — baixo aponta falência de produção; reticulocitose relativa aponta destruição/sequestro periférico, primeiro divisor diagnóstico) → **2) esfregaço de sangue periférico** → **3) mielograma/biópsia de medula óssea** quando a causa não é evidente.
- **Achados de medula óssea orientam a causa:** hipocelular sugere anemia aplásica (idiopática, por droga — cloranfenicol, quimioterápicos —, radiação ou infecção viral como parvovírus B19); hipercelular com displasia sugere síndrome mielodisplásica; infiltração por blastos sugere leucemia aguda.
- **Rastrear ativamente em paciente jovem com quadro sistêmico:** HIV, lúpus e neoplasias hematológicas como causas de pancitopenia.
- **Tratamento:** dirigido à causa de base — suporte transfusional apenas quando indicado, nunca como substituto do diagnóstico etiológico; anemia aplásica grave pode exigir imunossupressão (globulina antitimocítica + ciclosporina) ou transplante de medula óssea em jovens com doador compatível.
- 💎 **Pearl:** hemoglobinúria paroxística noturna (HPN) é diagnóstico diferencial de pancitopenia com **hemólise e trombose em sítios atípicos** — pesquisar por citometria de fluxo (deficiência de CD55/CD59).
- ⚠️ **Pitfall:** tratar pancitopenia empiricamente com transfusão sem investigar a causa de base.
- 📝 **Como caiu:** ENARE 2026 Q71.

## 🔹 Anemia de doença crônica (diferencial de ferropenia)

- **Quando suspeitar:** anemia normocítica (fase inicial) ou microcítica leve (fase avançada) em paciente com doença inflamatória/infecciosa/neoplásica crônica de base.
- **Diagnóstico:** ferritina **normal/alta** (diferente da ferropriva), ferro sérico baixo, **TIBC baixa ou normal** — padrão que confunde com ferropenia se não avaliado em conjunto; a combinação ferro baixo + TIBC baixa é a assinatura que separa das duas condições.
- 📝 **Como caiu:** ainda não cobrado no corpus — diferencial mais cobrável de ferropenia em paciente inflamatório crônico.

## 🔹 Talassemia (diferencial de microcítica com RDW normal)

- **Quando suspeitar:** anemia microcítica com **RDW tipicamente normal** (diferente da ferropriva, que tem RDW elevado) — traço talassêmico costuma ser achado incidental, pouco sintomático.
- **Diagnóstico:** **índice de Mentzer** (VCM ÷ nº de hemácias) **<13 sugere talassemia; >13 sugere ferropenia** — mas eletroforese de hemoglobina só deve ser solicitada **depois** de excluir ferropenia, porque a ferropenia concomitante pode mascarar o traço talassêmico no resultado.
- ⚠️ **Pitfall:** solicitar eletroforese de hemoglobina antes de excluir ferropenia — gera resultado de difícil interpretação.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Anemia hemolítica e hemoglobinopatias (diferencial obrigatório de anemia normocítica)

- **Quando suspeitar:** anemia normocítica com reticulocitose, icterícia — nunca deixar de considerar diante de anemia normocítica sem causa evidente.
- **Diagnóstico:** reticulocitose, **LDH elevado, haptoglobina baixa e bilirrubina indireta elevada** sinalizam destruição periférica de hemácias; **teste de Coombs direto** distingue causa autoimune de outras causas de hemólise (mecânica, membranopatia, enzimopatia, hemoglobinopatia).
- **Anemia falciforme e talassemias maiores:** hemoglobinopatias hereditárias importantes — eletroforese de hemoglobina é o exame confirmatório quando há suspeita clínica (etnia, história familiar, crises dolorosas).
- ⚠️ **Pitfall:** não considerar hemólise no diagnóstico diferencial de anemia normocítica.
- 📝 **Como caiu:** ainda não cobrado no corpus — diferencial obrigatório citado no raciocínio de qualquer anemia normocítica.

## 📋 Tabela

**Classificação geral das anemias por VCM**

| VCM | Causas principais |
|---|---|
| Microcíticas (<80 fL) | Ferropriva (RDW alto), talassemia (RDW normal, Mentzer <13), doença crônica avançada, sideroblástica |
| Normocíticas (80-100 fL) | Doença crônica (fase inicial), hemólise, doença renal crônica, sangramento agudo, infiltração medular inicial |
| Macrocíticas (>100 fL) | B12/folato (megaloblástica), hipotireoidismo, hepatopatia, mielodisplasia, hidroxiureia/quimioterápicos, alcoolismo |

## 📚 Referências essenciais

- WHO Guideline on Iron Deficiency Anemia.
- Consenso da Sociedade Brasileira de Hematologia e Hemoterapia sobre deficiência de vitamina B12.
- Hoffman — Hematology: Basic Principles and Practice (capítulo de anemias e falência medular).
- British Society for Haematology — Guidelines for the diagnosis and management of aplastic anaemia.
`;

export default content.trim();
