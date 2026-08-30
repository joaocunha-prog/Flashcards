/**
 * Resumo — Geriatria · Avaliação geriátrica ampla.
 *
 * Cobre as entidades do corpus: delirium no idoso (evitar
 * benzodiazepínicos) e síndrome consumptiva/perda de peso no idoso
 * (principais causas). Expandido com os demais domínios da avaliação
 * geriátrica ampla (cognição/demência, funcionalidade, quedas,
 * fragilidade, polifarmácia com critérios de Beers/STOPP-START, sarcopenia
 * e incontinência) — os "gigantes da geriatria" que ainda não caíram no
 * corpus, mas são altamente prováveis em provas futuras do assunto.
 */
const content = `
## 🎯 Essencial

- **Delirium no idoso: primeira medida é sempre buscar e tratar a causa de base** (infecção, distúrbio metabólico, retenção urinária/fecal, dor não controlada, polifarmácia, privação de sono) — sedar sem investigar é erro de conduta.
- **Benzodiazepínicos PIORAM/precipitam delirium no idoso** e devem ser evitados, exceto em duas exceções específicas: **abstinência alcoólica/de benzodiazepínico** e **delirium tremens** — fora desses cenários, contraindicados como primeira linha.
- **Medidas não farmacológicas são a base do manejo do delirium:** reorientação frequente, presença de familiares, correção de déficits sensoriais (óculos, aparelho auditivo), promoção de sono, mobilização precoce, evitar contenção física e restrição de sonda/cateter desnecessários.
- **Antipsicóticos (haloperidol em baixa dose, ou atípicos como quetiapina/risperidona) são reservados para agitação grave com risco à segurança**, sempre na menor dose e pelo menor tempo possível — não são tratamento de rotina do delirium.
- **Síndrome consumptiva (perda de peso não intencional) no idoso: as causas mais comuns são depressão, demência, câncer, doenças crônicas descompensadas e disfagia/problemas dentários** — investigação sistemática, não atribuir a perda de peso ao "envelhecimento normal".
- **Perda de peso involuntária significativa** é geralmente definida como ≥5% do peso corporal em 6-12 meses — qualquer perda nessa magnitude exige investigação ativa da causa.
- **Avaliação geriátrica ampla (AGA) é multidimensional por definição**, cobrindo sistematicamente cognição, humor, funcionalidade (AVDs/AIVDs), mobilidade/risco de quedas, polifarmácia, nutrição, continência e suporte social — nenhum domínio deve ser avaliado isoladamente, pois os "gigantes da geriatria" costumam coexistir e se retroalimentar no mesmo paciente.
- **Diferenciar delirium de demência e depressão é habilidade central da AGA**: delirium tem início agudo e curso flutuante com alteração da atenção; demência tem início insidioso e curso progressivo, geralmente com atenção preservada até fases avançadas; depressão pode mimetizar declínio cognitivo ("pseudodemência"), mas costuma ter início mais definido e resposta a tratamento antidepressivo.
- **Ferramentas validadas de rastreio de delirium** (CAM — Confusion Assessment Method) devem ser aplicadas sistematicamente em idosos hospitalizados, especialmente pós-operatório e em UTI — o diagnóstico é clínico, mas a ferramenta padroniza o reconhecimento e reduz subdiagnóstico do delirium hipoativo.
- **Incontinência urinária** é outro "gigante da geriatria" com causas frequentemente reversíveis (infecção urinária, impactação fecal, poliúria por diurético/hiperglicemia, mobilidade reduzida, delirium) — investigar antes de assumir causa estrutural definitiva ou encaminhar para tratamento sintomático isolado.

## 💎 Pearls

- O **delirium hipoativo** (letargia, lentificação, menos chamativo) é mais comum e mais subdiagnosticado que o hiperativo (agitação, alucinações) — a banca gosta de descrever quadros hipoativos sutis para testar reconhecimento.
- A **avaliação geriátrica ampla** identifica sistematicamente múltiplos domínios (cognição, funcionalidade, humor, nutrição, mobilidade, polifarmácia, suporte social) — a perda de peso e o delirium raramente têm causa única isolada no idoso frágil.
- **Depressão é uma das causas mais frequentes e mais tratáveis de perda de peso em idosos** — muitas vezes subdiagnosticada por se manifestar com queixas somáticas em vez de humor deprimido clássico.
- **Polifarmácia** é fator de risco tanto para delirium quanto para perda de peso (efeitos adversos como náusea, alteração de paladar, sedação, anorexia) — revisar a lista de medicamentos é parte obrigatória da investigação de ambos os quadros.
- **Disfagia e problemas de saúde bucal** (dentição inadequada, próteses mal ajustadas) são causas subestimadas de perda de peso, facilmente identificáveis com exame físico direcionado.
- **Critérios de Beers e ferramenta STOPP/START** listam classes medicamentosas potencialmente inapropriadas no idoso (benzodiazepínicos, anticolinérgicos, anti-histamínicos de primeira geração, AINEs crônicos, sulfonilureias de longa ação) — usadas na revisão sistemática de polifarmácia dentro da AGA, e são candidatas naturais a cair em prova de forma independente do delirium.
- **Fragilidade** (fenótipo de Fried: perda de peso não intencional, exaustão autorreferida, fraqueza de preensão, lentidão da marcha, baixo nível de atividade — ≥3 critérios define fragilidade) é conceito distinto de comorbidade ou incapacidade, e prediz pior desfecho cirúrgico/hospitalar independentemente da idade cronológica — a perda de peso é um dos cinco critérios, ligando diretamente essa síndrome ao tema.
- **Rastreio cognitivo (Mini-Mental, MoCA) e rastreio de depressão (Escala de Depressão Geriátrica) fazem parte padrão da AGA** — aplicados de forma sistemática, não apenas quando há queixa espontânea do paciente ou familiar.
- **Avaliação de risco de queda** (velocidade de marcha, teste "Timed Up and Go", histórico de quedas prévias) é outro pilar da AGA frequentemente associado a polifarmácia e sarcopenia — três domínios que se sobrepõem no mesmo paciente frágil.
- **Sarcopenia** (perda de massa e força muscular relacionada à idade) contribui tanto para perda de peso quanto para risco de queda e fragilidade — pode ser rastreada clinicamente pela força de preensão palmar e velocidade de marcha, sem necessidade de exame de imagem para suspeita inicial.
- **Delirium pós-operatório** é a complicação cognitiva mais comum em idosos submetidos a cirurgia de grande porte — fatores de risco incluem idade avançada, demência prévia, múltiplas comorbidades, uso de opioides/anticolinérgicos e cirurgia prolongada; prevenção multicomponente (mobilização precoce, controle de dor não opioide quando possível, evitar privação de sono) reduz incidência mais que qualquer intervenção farmacológica isolada.
- **Prescrição em cascata** (efeito adverso de um fármaco tratado com outro fármaco, gerando nova cascata de efeitos adversos) é padrão comum de iatrogenia em idosos polimedicados — reconhecer esse padrão evita adicionar mais um medicamento quando a solução é retirar o agente causador original.

## ⚠️ Pitfalls

- **Prescrever benzodiazepínico como primeira linha para agitação no delirium** — piora o quadro na maioria dos idosos, exceto em abstinência alcoólica/benzodiazepínica.
- **Sedar o paciente agitado sem antes investigar e tratar a causa de base do delirium** — trata o sintoma, não a doença, e atrasa a resolução real.
- **Atribuir perda de peso no idoso ao "processo natural do envelhecimento"** sem investigação — pode mascarar depressão, neoplasia ou doença crônica tratável.
- **Investigar perda de peso só com exames de imagem extensos de screening oncológico**, sem antes avaliar causas mais simples e prevalentes (humor, cognição, dentição, deglutição, revisão medicamentosa).
- **Usar contenção física como primeira resposta à agitação do delirium** — aumenta agitação, risco de lesão e prolonga o quadro; medidas ambientais e reorientação vêm primeiro.
- **Confundir delirium hipoativo com depressão ou "cansaço da idade"** — a flutuação e a alteração de atenção/nível de consciência são as pistas que diferenciam.
- **Avaliar só um domínio da AGA isoladamente** (por exemplo, só cognição) num idoso com múltiplas queixas — perde a visão integrada que é a razão de ser da avaliação ampla.
- **Ignorar os critérios de Beers/STOPP-START ao prescrever para idosos**, mantendo medicações de alto risco (benzodiazepínicos crônicos, anticolinérgicos) sem reavaliação periódica.
- **Assumir incontinência urinária como parte "normal" do envelhecimento** sem investigar causas reversíveis (infecção, impactação fecal, poliúria, delirium) antes de encaminhar para manejo definitivo.
- **Adicionar novo fármaco para tratar efeito adverso de outro** sem reconhecer o padrão de prescrição em cascata — perpetua e amplia a polifarmácia em vez de corrigi-la.

## 📝 Como a banca cobra

**Avaliação geriátrica ampla aparece em 2 questões (0,94% do corpus)**, uma do EBSERH e uma do ENARE, ambas testando **condutas fundamentais e amplamente aplicáveis na prática geriátrica**.

- **EBSERH 2025 Q55** cobrou **delirium no idoso com foco em evitar benzodiazepínicos** — testa diretamente se o candidato sabe que essa classe piora o quadro (exceto na abstinência), reforçando a busca pela causa de base e medidas não farmacológicas antes de sedação.
- **ENARE 2025 Q18** cobrou a **síndrome consumptiva/perda de peso no idoso e suas principais causas** — provavelmente pedindo o reconhecimento das etiologias mais prevalentes (depressão, demência, câncer, disfagia) em vez de uma causa rara isolada.

## 🧠 Conceito e fisiopatologia

O **delirium** é uma disfunção cerebral aguda, flutuante, caracterizada por alteração da atenção e da consciência, decorrente de um estresse fisiológico agudo (infecção, distúrbio metabólico, dor, privação sensorial ou de sono, fármacos) atuando sobre um cérebro já vulnerável pela idade, reserva cognitiva reduzida ou demência de base. Benzodiazepínicos pioram o quadro porque sua ação sedativa/anticolinérgica relativa e o efeito paradoxal de desinibição em idosos aumentam confusão e risco de queda, além de não tratarem a causa subjacente.

A **perda de peso involuntária no idoso** costuma ser multifatorial, refletindo a interseção entre menor reserva fisiológica, maior prevalência de doenças crônicas e maior vulnerabilidade a fatores psicossociais (isolamento, luto, dificuldade de acesso à alimentação) — por isso a investigação deve ser sistemática e ampla, cobrindo os domínios físico, cognitivo, psicológico e social, em vez de assumir uma única causa dominante.

A lógica por trás da AGA como um todo é que, no idoso frágil, síndromes geriátricas (delirium, quedas, incontinência, perda de peso, polifarmácia, imobilidade) compartilham uma via final comum de reserva fisiológica reduzida — um único fator precipitante (infecção urinária, por exemplo) pode se manifestar como delirium num paciente e como queda ou perda de apetite noutro, dependendo de qual sistema já estava mais próximo do limiar de descompensação. Por isso a avaliação precisa ser ampla mesmo quando a queixa de entrada é única.

## 🩺 Quadro clínico

- **Delirium:** início agudo/flutuante de alteração da atenção e do nível de consciência, podendo ser hipoativo (letargia, lentidão) ou hiperativo (agitação, alucinações) — frequentemente pior à noite (sundowning).
- **Síndrome consumptiva:** perda de peso não intencional documentada, associada ou não a queixas de apetite reduzido, disfagia, humor deprimido, declínio cognitivo ou sintomas de doença crônica de base.
- **Fragilidade:** exaustão autorreferida, lentidão de marcha, fraqueza de preensão, baixa atividade física, associadas à perda de peso — reconhecer o fenótipo ajuda a prever risco cirúrgico e funcional.
- **Demência (diferencial de delirium):** declínio cognitivo insidioso e progressivo, sem flutuação aguda do nível de consciência, embora o paciente demenciado tenha maior risco de desenvolver delirium sobreposto diante de qualquer estresse agudo.

## 🔎 Diagnóstico e avaliação

- **Delirium:** diagnóstico clínico auxiliado pelo CAM (Confusion Assessment Method) — início agudo + curso flutuante + desatenção, associado a alteração do nível de consciência OU pensamento desorganizado; investigação laboratorial/imagem direcionada à causa suspeita (infecção, metabólica, neurológica), não um "painel geriátrico" padronizado igual para todos.
- **Síndrome consumptiva:** história alimentar e social detalhada, revisão medicamentosa completa, rastreio de depressão (Escala de Depressão Geriátrica) e cognição (Mini-Mental/MoCA), exame da cavidade oral/dentição, exames laboratoriais básicos direcionados; investigação oncológica extensa reservada a sinais de alarme, não de rotina.
- **Avaliação funcional:** escalas de AVD (Katz) e AIVD (Lawton) documentam objetivamente o grau de dependência e orientam necessidade de suporte domiciliar/institucional.
- **Fragilidade:** fenótipo de Fried (≥3 de 5 critérios) ou índice de fragilidade acumulativa — usados para prever risco cirúrgico/hospitalar e individualizar metas terapêuticas (menos agressivas em muito frágil).
- **Risco de queda:** Timed Up and Go, histórico de quedas no último ano, avaliação de marcha e equilíbrio, revisão de medicamentos associados a queda (sedativos, anti-hipertensivos, hipoglicemiantes).

## 💊 Tratamento

- **Delirium:** identificar e tratar a causa de base + medidas não farmacológicas (reorientação, mobilização, correção sensorial, sono) como primeira linha; antipsicótico em baixa dose reservado para agitação grave com risco de segurança; benzodiazepínico restrito à abstinência alcoólica/de benzodiazepínico.
- **Síndrome consumptiva:** tratar a causa identificada (antidepressivo se depressão, ajuste de prótese dentária/fonoterapia se disfagia, manejo da doença crônica descompensada, investigação oncológica se sinais de alarme); suporte nutricional direcionado, não suplementação genérica sem diagnóstico.
- **Polifarmácia:** revisão periódica da lista de medicamentos usando critérios de Beers/STOPP-START, desprescrição gradual de fármacos de alto risco sem benefício claro.
- **Fragilidade/sarcopenia:** exercício físico resistido e otimização nutricional (proteína adequada) são as intervenções com melhor evidência, mais do que qualquer fármaco isolado.
- **Incontinência urinária:** tratar causa reversível identificada primeiro (infecção, impactação fecal, ajuste de diurético); treinamento vesical e fisioterapia do assoalho pélvico antes de escalar para fármaco anticolinérgico (que pode piorar cognição no idoso) ou intervenção cirúrgica.
- **Prevenção multicomponente de delirium** (protocolos tipo HELP — Hospital Elder Life Program): reorientação, mobilização precoce, correção sensorial, higiene do sono e hidratação adequada, aplicados sistematicamente em idosos internados de risco — reduz incidência mais que qualquer intervenção isolada pós-instalação do quadro.

## 📚 Referências essenciais

- AGS/CoBRA Guidelines — Postoperative Delirium in Older Adults (American Geriatrics Society).
- Guideline NICE — Delirium: prevention, diagnosis and management.
- American Geriatrics Society — Beers Criteria for Potentially Inappropriate Medication Use in Older Adults.
`;

export default content.trim();
