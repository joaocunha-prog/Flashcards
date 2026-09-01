/**
 * Resumo — Infectologia · Tuberculose.
 *
 * Cobre as entidades do assunto no corpus: reação paradoxal (IRIS) durante
 * o tratamento da tuberculose em paciente em uso de anti-TNF e
 * hepatotoxicidade induzida por tuberculostáticos. Inclui também
 * extrapolações de alto rendimento e aspectos do PNCT (Programa Nacional de
 * Controle da Tuberculose) ainda não cobrados no corpus — notificação
 * compulsória, tratamento diretamente observado, diagnóstico por teste
 * rápido molecular, tratamento da infecção latente e coinfecção TB-HIV —
 * mas plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- **Esquema básico (RIPE): rifampicina + isoniazida + pirazinamida + etambutol** por 2 meses, seguido de **rifampicina + isoniazida** por mais 4 meses (esquema de 6 meses no total) na maioria dos casos de TB sensível.
- **Reação paradoxal (fenômeno tipo IRIS) pode ocorrer mesmo sem HIV** — piora clínica/radiológica transitória apesar de tratamento antituberculoso adequado e culturas em negativação, refletindo reconstituição/exacerbação da resposta imune contra antígenos micobacterianos residuais.
- **Uso de anti-TNF (imunobiológicos) é fator de risco tanto para reativação de TB latente quanto para reação paradoxal** durante o tratamento — a imunossupressão de base altera a dinâmica da resposta inflamatória ao tratamento.
- **Reação paradoxal não significa falha terapêutica nem resistência** — a conduta não é trocar o esquema RIPE, e sim manter o tratamento e considerar anti-inflamatório (corticoide) se a reação for significativa.
- **Hepatotoxicidade por tuberculostáticos** é efeito adverso relevante, principalmente por **isoniazida, rifampicina e pirazinamida** — monitorar transaminases é obrigatório, especialmente nos primeiros meses.
- **Elevação leve/assintomática de transaminases (até 3-5x o limite superior) não exige suspensão do esquema** — reavaliar clinicamente e com exames seriados; suspensão é indicada com sintomas (náusea, icterícia) ou elevação mais expressiva.
- **Reintrodução escalonada dos fármacos após hepatotoxicidade significativa** deve seguir sequência que reintroduz primeiro o(s) fármaco(s) menos hepatotóxico(s), monitorando a função hepática a cada reintrodução.
- **Tuberculose é agravo de notificação compulsória no Brasil (PNCT)** — todo caso confirmado ou com forte suspeita clínica deve ser notificado ao SINAN, independentemente de confirmação laboratorial já disponível no momento.
- **Tratamento diretamente observado (TDO)** é estratégia central do PNCT: acompanhamento da ingestão da medicação por profissional de saúde (idealmente diário, mínimo de 3 observações semanais nos dois primeiros meses e depois ao menos semanal), com objetivo de aumentar adesão e reduzir abandono/resistência — recomendado para todos os casos, não apenas para os de maior risco de abandono.
- **Teste rápido molecular (TRM-TB/GeneXpert) é o exame de escolha para diagnóstico inicial** no PNCT, por já detectar resistência à rifampicina simultaneamente à confirmação diagnóstica, permitindo início mais rápido do tratamento adequado.

## 💎 Pearls

- A **reação paradoxal é mais comum e mais grave quando a TARV/imunossupressão é modificada durante o tratamento da TB** (retirada abrupta ou reintrodução de imunossupressor, início de TARV em coinfectados) — o timing da intervenção imunológica importa.
- **Anti-TNF aumenta particularmente o risco de TB extrapulmonar/disseminada** por comprometer a formação e manutenção do granuloma — por isso o rastreio de TB latente é obrigatório antes de iniciar esses fármacos.
- Entre os quatro fármacos do RIPE, a **pirazinamida é geralmente a mais hepatotóxica**, seguida por isoniazida e rifampicina — útil para decidir qual suspender primeiro diante de toxicidade.
- **Rifampicina também pode causar hiperbilirrubinemia isolada** (por competição na captação hepática de bilirrubina) sem necessariamente refletir lesão hepatocelular verdadeira — distinguir de hepatotoxicidade real evita suspensão desnecessária.
- Antes de rotular hepatotoxicidade, **excluir outras causas de disfunção hepática** (hepatites virais, uso concomitante de álcool/outros hepatotóxicos) que podem coexistir e confundir o quadro.
- **Ainda não cobrado no corpus, mas de altíssimo rendimento:** cada fármaco do RIPE tem um efeito adverso "assinatura" além da hepatotoxicidade — **etambutol** causa neurite óptica (perda de acuidade visual e discromatopsia para vermelho-verde, exige avaliação oftalmológica se uso prolongado), **isoniazida** causa neuropatia periférica (por antagonismo à piridoxina — daí a suplementação de **vitamina B6** em gestantes, desnutridos, etilistas, diabéticos e PVHIV), **rifampicina** causa síndrome gripal, coloração alaranjada de fluidos corporais e é potente indutora enzimática (CYP450, reduzindo eficácia de anticoncepcionais orais, varfarina e outros fármacos), e **pirazinamida** causa hiperuricemia/artralgia (pode precipitar crise de gota).
- **Tratamento da infecção latente por tuberculose (ILTB)** — indicado após excluir doença ativa — pode ser feito com **isoniazida por 6-9 meses (270 doses)**, **rifampicina isolada por 4 meses** (alternativa com melhor adesão e menor hepatotoxicidade) ou o esquema combinado **isoniazida + rifapentina semanal por 12 semanas (3HP)**, ainda pouco disponível amplamente.
- **TB miliar/disseminada** deve ser considerada em imunossuprimidos (PVHIV com CD4 baixo, uso de anti-TNF, corticoterapia prolongada) com febre de origem indeterminada, padrão radiológico micronodular difuso ("em grão de milho") e comprometimento multissistêmico — a apresentação atípica nesse grupo é regra, não exceção.
- **Excluir infecção oportunista associada durante reação paradoxal** (ex.: outra micobacteriose, citomegalovirose, criptococose) antes de atribuir toda a piora clínica ao fenômeno imunológico, especialmente em PVHIV com imunossupressão avançada.
- **Critérios de notificação compulsória (PNCT):** notificar todo caso confirmado ou com **forte suspeita clínica/radiológica**, mesmo antes do resultado de exame confirmatório; a notificação também é obrigatória em caso de **mudança de esquema, transferência, reingresso após abandono ou óbito por TB** — o SINAN é o sistema de registro.
- **Busca ativa de sintomáticos respiratórios** (tosse por 3 semanas ou mais) é estratégia de rastreio ativo do PNCT em populações prioritárias (privados de liberdade, população em situação de rua, PVHIV, contatos de casos index, profissionais de saúde) — a baciloscopia/TRM-TB deve ser oferecida a todo sintomático respiratório identificado.
- **Ainda não cobrado no corpus, mas de alto rendimento:** o esquema RIPE em criança (<10 anos) **não inclui etambutol** — usa-se apenas rifampicina + isoniazida + pirazinamida nos 2 meses iniciais, pela dificuldade de monitorar toxicidade visual (neurite óptica) nessa faixa etária, seguido de rifampicina + isoniazida por 4 meses.
- **Cuidado com a regra vigente do PCDT brasileiro para o momento de início da TARV na coinfecção TB-HIV:** a atualização atual do PCDT-HIV do Ministério da Saúde recomenda **TARV em até 7 dias do início do RIPE, independentemente do CD4** — não mais o corte escalonado por CD4 (2 semanas se <200/8 semanas se ≥200) de versões anteriores, nem o corte de CD4 <50/≥50 usado por diretrizes internacionais mais antigas. A única exceção que continua CD4-independente por prazo é a **meningite tuberculosa** (TARV entre a 4ª-6ª semana) — ver o resumo de HIV/AIDS para o detalhamento completo dessa decisão.

## ⚠️ Pitfalls

- **Trocar o esquema RIPE ou suspender o tratamento diante de reação paradoxal**, interpretando erroneamente como falha terapêutica ou resistência — a conduta correta é manter o tratamento antituberculoso.
- **Não considerar TB como diagnóstico diferencial de piora clínica em uso de anti-TNF**, mesmo com tratamento antituberculoso em curso, por assumir que "já está tratado".
- **Suspender todo o esquema RIPE ao primeiro sinal de elevação leve e assintomática de transaminases** — conduta excessivamente cautelosa que pode comprometer a eficácia terapêutica sem necessidade real.
- **Reintroduzir todos os tuberculostáticos simultaneamente após hepatotoxicidade significativa**, em vez de reintrodução escalonada e monitorada.
- **Atribuir hiperbilirrubinemia isolada por rifampicina a hepatotoxicidade grave**, suspendendo o fármaco sem necessidade.
- **Deixar de notificar o caso ao SINAN** por já ter iniciado o tratamento ou por aguardar confirmação laboratorial adicional — a notificação é obrigatória diante de forte suspeita clínica, não apenas após confirmação.
- **Não implementar/oferecer TDO por considerar o paciente "de baixo risco de abandono"** — o PNCT recomenda TDO para todos os casos, não como medida seletiva.
- **Não suplementar piridoxina em populações de risco para neuropatia por isoniazida** (gestantes, etilistas, desnutridos, diabéticos, PVHIV).
- **Não solicitar avaliação oftalmológica basal antes de iniciar etambutol** em paciente que fará uso prolongado, perdendo a chance de detectar precocemente neurite óptica.
- **Não considerar TB miliar/disseminada em imunossuprimido com febre de origem indeterminada**, atrasando o diagnóstico por esperar apresentação pulmonar clássica.
- **Prescrever etambutol para criança pequena no esquema padrão de adulto** — o esquema pediátrico (<10 anos) dispensa etambutol pela dificuldade de monitorar toxicidade visual nessa faixa etária; usar RIP sem o E.
- **Aplicar corte de CD4 (internacional <50 ou do PCDT brasileiro mais antigo <200) para decidir o momento de início da TARV na coinfecção TB-HIV** — a regra vigente do PCDT dispensa o corte por CD4 na TB não-meníngea (TARV em até 7 dias, sempre); só a meningite tuberculosa mantém prazo fixo (4ª-6ª semana) independentemente do CD4.

## 🩺 Quadro clínico

- **TB pulmonar clássica:** tosse persistente por 3 semanas ou mais (define o "sintomático respiratório" a investigar), febre vespertina, sudorese noturna e emagrecimento — tríade constitucional clássica.
- **TB extrapulmonar (extrapolação):** pleural (derrame exsudativo unilateral, ADA elevado no líquido pleural), ganglionar (linfonodomegalia cervical de evolução arrastada, por vezes com fistulização — escrofulose), meníngea (cefaleia progressiva, rebaixamento do nível de consciência, paralisia de nervos cranianos, evolução subaguda ao longo de dias/semanas) e óssea (espondilite/mal de Pott, com dor lombar e possível abscesso paravertebral).
- **Reação paradoxal:** reaparecimento ou piora de linfonodomegalia, febre e novos infiltrados pulmonares/derrame pleural em paciente que já vinha melhorando clinicamente com o esquema RIPE.
- **Hepatotoxicidade sintomática:** náusea persistente, vômitos, dor em hipocôndrio direito, icterícia e colúria — sinais de alarme que indicam suspensão do esquema, diferente da elevação assintomática de transaminases.
- **TB miliar (extrapolação):** febre prolongada, emagrecimento importante, hepatoesplenomegalia e comprometimento multissistêmico em imunossuprimido, com padrão radiológico micronodular difuso.

## 📝 Como a banca cobra

**Tuberculose aparece em 2 questões (0,94% do corpus)**, ambas do ENARE 2025, cobrindo dois cenários de **complicação durante o tratamento** — não o diagnóstico inicial da doença.

- **ENARE 2025 Q3** (classificada como difícil) trouxe a **reação paradoxal (IRIS) no tratamento da tuberculose em paciente em uso de anti-TNF**, exigindo reconhecer que a piora clínica não indica falha terapêutica nem justifica trocar o esquema, e sim reconhecer o fenômeno imunológico associado ao uso do imunobiológico.
- **ENARE 2025 Q6** (classificada como fácil) cobrou **hepatotoxicidade por tuberculostáticos**, testando a conduta correta diante de alteração de transaminases durante o esquema RIPE.

## 🧠 Conceito e fisiopatologia

A tuberculose é controlada pela formação de **granulomas**, estruturas organizadas por macrófagos ativados, células epitelioides e linfócitos T que contêm o Mycobacterium tuberculosis. O **TNF-alfa** é citocina essencial para a formação e manutenção da integridade do granuloma — por isso o bloqueio farmacológico dessa via (anti-TNF) predispõe tanto à reativação de infecção latente quanto a alterações na resposta inflamatória durante o tratamento ativo, favorecendo a **reação paradoxal**: uma resposta imune exacerbada contra antígenos micobacterianos residuais (vivos ou não) que se manifesta como piora clínica/radiológica transitória, apesar de tratamento microbiologicamente eficaz.

A **hepatotoxicidade** dos tuberculostáticos decorre de mecanismos distintos por fármaco: a isoniazida gera metabólitos hepatotóxicos via acetilação; a rifampicina interfere na captação e excreção biliar (podendo causar apenas hiperbilirrubinemia sem lesão hepatocelular real) além de potencializar a toxicidade da isoniazida por indução enzimática; a pirazinamida tem hepatotoxicidade dose-dependente direta. A combinação dos três no esquema RIPE aumenta o risco cumulativo, justificando a monitorização laboratorial sistemática.

O **PNCT** organiza a resposta nacional à doença em três eixos que se conectam à fisiopatologia: diagnóstico rápido (TRM-TB, que reduz o tempo de transmissibilidade comunitária ao antecipar o início do tratamento), adesão garantida (TDO, que reduz o risco de seleção de cepas resistentes por tratamento irregular) e vigilância epidemiológica (notificação compulsória, que permite busca de contatos e controle de surtos).

## 🔎 Diagnóstico

- **Reação paradoxal:** piora clínica/radiológica (linfonodomegalia, novos infiltrados, febre) após início/durante tratamento antituberculoso adequado, com exclusão de falha terapêutica (culturas em negativação, ausência de resistência) e de outras infecções oportunistas concomitantes.
- **Hepatotoxicidade:** monitorização seriada de transaminases (AST/ALT) e bilirrubina, especialmente nos primeiros meses de tratamento e em pacientes de maior risco (hepatopatia prévia, etilismo, coinfecção viral); sintomas de alarme incluem náusea persistente, icterícia, dor em hipocôndrio direito.
- **Diagnóstico inicial de TB ativa** (extrapolação/PNCT): teste rápido molecular (TRM-TB) como exame de primeira linha (detecta M. tuberculosis e resistência à rifampicina em poucas horas); baciloscopia de escarro (2 amostras) como método complementar/acompanhamento; cultura com teste de sensibilidade reservada a casos de suspeita de resistência, retratamento, falha terapêutica ou populações de maior risco.
- **Rastreio de TB latente antes de anti-TNF/imunobiológicos:** PPD (teste tuberculínico) ou IGRA associado a radiografia de tórax — positividade indica tratamento da ILTB antes ou concomitante ao início do imunobiológico, conforme urgência clínica.

## 💊 Tratamento

- **Reação paradoxal:** manter o esquema RIPE inalterado; considerar anti-inflamatório (corticoide) em reações significativas (ex.: compressão por linfonodomegalia volumosa); reavaliar a necessidade/momento de manter ou reintroduzir o anti-TNF conforme gravidade da doença de base.
- **Hepatotoxicidade leve/assintomática:** manter esquema com monitorização laboratorial mais frequente.
- **Hepatotoxicidade significativa/sintomática:** suspender todos os fármacos hepatotóxicos, aguardar normalização, reintroduzir de forma escalonada (fármaco a fármaco) com monitorização, geralmente reintroduzindo primeiro o(s) menos hepatotóxico(s).
- **Infecção latente (ILTB)** (extrapolação/PNCT): isoniazida 6-9 meses, rifampicina 4 meses ou esquema combinado isoniazida+rifapentina semanal por 12 semanas, conforme disponibilidade e perfil de adesão/toxicidade do paciente.
- **Coinfecção TB-HIV** (extrapolação): sempre tratar a TB primeiro (RIPE), com TARV em até 7 dias independentemente do CD4; meningite tuberculosa é a exceção, com TARV postergada para a 4ª-6ª semana independentemente do CD4, pelo maior risco de IRIS no SNC.
- **TB multidrogarresistente (MDR-TB)** (extrapolação): esquemas alternativos mais longos com fármacos de segunda linha, conduzidos por serviço de referência, diante de resistência confirmada à rifampicina (± isoniazida) no TRM-TB/teste de sensibilidade.

## 📚 Referências essenciais

- Manual de Recomendações para o Controle da Tuberculose no Brasil — Ministério da Saúde (Programa Nacional de Controle da Tuberculose, PNCT): diagnóstico por TRM-TB, tratamento diretamente observado (TDO) e notificação compulsória.
- WHO Consolidated Guidelines on Tuberculosis — Treatment.
- ATS/CDC/IDSA Clinical Practice Guidelines: Treatment of Drug-Susceptible Tuberculosis (hepatotoxicidade e reações adversas).
`;

export default content.trim();
