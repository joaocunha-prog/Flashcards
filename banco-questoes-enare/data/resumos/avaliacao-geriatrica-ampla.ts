/**
 * Resumo — Geriatria · Avaliação geriátrica ampla.
 *
 * Reorganizado por entidade clínica (cada "gigante da geriatria" tem sua
 * própria seção com quadro clínico, diagnóstico, conduta, pearl e pitfall
 * juntos), em vez de picado entre seções genéricas de tipo — o assunto
 * reúne síndromes geriátricas distintas que a Avaliação Geriátrica Ampla
 * (AGA) rastreia sistematicamente, ainda que compartilhem uma via final
 * comum de reserva fisiológica reduzida.
 *
 * Cobre as entidades do corpus: delirium no idoso (evitar
 * benzodiazepínicos) e síndrome consumptiva/perda de peso no idoso
 * (principais causas). Expandido com os demais domínios da AGA (declínio
 * cognitivo/demência, fragilidade e sarcopenia, polifarmácia com critérios
 * de Beers/STOPP-START, quedas e incontinência urinária) — os demais
 * "gigantes da geriatria" ainda não cobrados no corpus, mas altamente
 * prováveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- **Avaliação geriátrica ampla (AGA) é multidimensional por definição**, cobrindo sistematicamente cognição, humor, funcionalidade (AVDs/AIVDs), mobilidade/risco de quedas, polifarmácia, nutrição, continência e suporte social — nenhum domínio deve ser avaliado isoladamente, pois os "gigantes da geriatria" costumam coexistir e se retroalimentar no mesmo paciente.
- **Diferenciar delirium de demência e depressão é habilidade central da AGA**: delirium tem início agudo e curso flutuante com alteração da atenção; demência tem início insidioso e progressivo, geralmente com atenção preservada até fases avançadas; depressão pode mimetizar declínio cognitivo ("pseudodemência"), mas costuma ter início mais definido e resposta a tratamento antidepressivo.
- **Nas síndromes geriátricas em geral, a primeira pergunta é sempre "existe uma causa reversível?"** antes de atribuir o achado ao "envelhecimento normal" — vale para delirium, perda de peso, incontinência e quedas igualmente.
- **Polifarmácia é fator de risco transversal** para delirium, quedas, perda de peso e incontinência — revisar a lista de medicamentos (critérios de Beers/STOPP-START) é parte obrigatória da investigação de qualquer síndrome geriátrica nova.
- **Prescrição em cascata** (efeito adverso de um fármaco tratado com outro fármaco, gerando nova cascata de efeitos adversos) é padrão comum de iatrogenia em idosos polimedicados — reconhecer esse padrão evita adicionar mais um medicamento quando a solução é retirar o agente causador original.

## 📝 Como a banca cobra

**Avaliação geriátrica ampla aparece em 2 questões (0,94% do corpus)**, uma do EBSERH e uma do ENARE, ambas testando **condutas fundamentais e amplamente aplicáveis na prática geriátrica**.

- **EBSERH 2025 Q55** cobrou **delirium no idoso com foco em evitar benzodiazepínicos** — testa diretamente se o candidato sabe que essa classe piora o quadro (exceto na abstinência), reforçando a busca pela causa de base e medidas não farmacológicas antes de sedação.
- **ENARE 2025 Q18** cobrou a **síndrome consumptiva/perda de peso no idoso e suas principais causas** — pedindo o reconhecimento das etiologias mais prevalentes (depressão, demência, câncer, disfagia) em vez de uma causa rara isolada.
- **Nenhuma questão do corpus cobrou ainda fragilidade, polifarmácia/Beers, quedas ou incontinência isoladamente** — são os "gigantes" restantes, com alta probabilidade de completar o assunto em provas futuras.

## 🧠 Conceito e fisiopatologia

- O **delirium** é uma disfunção cerebral aguda, flutuante, caracterizada por alteração da atenção e da consciência
- Decorre de um estresse fisiológico agudo (infecção, distúrbio metabólico, dor, privação sensorial ou de sono, fármacos)
- Esse estresse atua sobre um cérebro já vulnerável pela idade, reserva cognitiva reduzida ou demência de base

- A lógica por trás da AGA como um todo é que, no idoso frágil, as síndromes geriátricas (delirium, quedas, incontinência, perda de peso, polifarmácia, imobilidade) compartilham uma **via final comum de reserva fisiológica reduzida**
- Um único fator precipitante (infecção urinária, por exemplo) pode se manifestar como delirium num paciente e como queda ou perda de apetite noutro, dependendo de qual sistema já estava mais próximo do limiar de descompensação
- Por isso a avaliação precisa ser ampla mesmo quando a queixa de entrada é única
- E por isso o mesmo fator de risco (polifarmácia, por exemplo) aparece repetidamente como causa de síndromes aparentemente não relacionadas

💡 Pensa assim: no idoso frágil, todos os "gigantes da geriatria" compartilham o mesmo cabo de força — puxa de um lado (uma infecção, um remédio novo) e o elo mais fraco da corrente é que arrebenta, seja ele a cognição, o equilíbrio ou o apetite.

## 🔹 Delirium

- **Quando suspeitar:** início agudo/flutuante de alteração da atenção e do nível de consciência, podendo ser **hipoativo** (letargia, lentidão — mais comum e mais subdiagnosticado) ou **hiperativo** (agitação, alucinações), frequentemente pior à noite (sundowning).
- **Diagnóstico:** clínico, auxiliado pelo **CAM** (Confusion Assessment Method) — início agudo + curso flutuante + desatenção, associado a alteração do nível de consciência OU pensamento desorganizado; investigação laboratorial/imagem direcionada à causa suspeita (infecção, metabólica, neurológica), não um "painel geriátrico" padronizado igual para todos.
- **Tratamento:** identificar e tratar a causa de base (infecção, distúrbio metabólico, retenção urinária/fecal, dor não controlada, polifarmácia, privação de sono) + medidas não farmacológicas (reorientação, presença de familiares, correção de déficits sensoriais, mobilização precoce, evitar contenção física) como primeira linha; antipsicótico em baixa dose (haloperidol ou atípicos) reservado para agitação grave com risco de segurança; **benzodiazepínico restrito à abstinência alcoólica/de benzodiazepínico** ou delirium tremens — fora desses cenários, contraindicado como primeira linha.
- 💎 **Pearl:** delirium pós-operatório é a complicação cognitiva mais comum em idosos submetidos a cirurgia de grande porte — protocolos de prevenção multicomponente (tipo HELP — Hospital Elder Life Program: reorientação, mobilização precoce, correção sensorial, higiene do sono) reduzem incidência mais que qualquer intervenção farmacológica isolada aplicada depois que o quadro já se instalou.
- ⚠️ **Pitfall:** sedar o paciente agitado sem antes investigar e tratar a causa de base, ou usar contenção física como primeira resposta à agitação — ambas atrasam a resolução real e podem piorar o quadro.
- 📝 **Como caiu:** EBSERH 2025 Q55.

## 🔹 Síndrome consumptiva (perda de peso não intencional)

- **Quando suspeitar:** perda de peso involuntária ≥5% do peso corporal em 6-12 meses — qualquer perda nessa magnitude exige investigação ativa, nunca atribuição automática ao "envelhecimento normal".
- **Diagnóstico:** história alimentar e social detalhada, revisão medicamentosa completa, rastreio de depressão (Escala de Depressão Geriátrica) e cognição (Mini-Mental/MoCA), exame da cavidade oral/dentição — as causas mais comuns são **depressão, demência, câncer, doenças crônicas descompensadas e disfagia/problemas dentários**; investigação oncológica extensa reservada a sinais de alarme, não de rotina.
- **Tratamento:** tratar a causa identificada (antidepressivo se depressão, ajuste de prótese dentária/fonoterapia se disfagia, manejo da doença crônica descompensada); suporte nutricional direcionado, não suplementação genérica sem diagnóstico.
- 💎 **Pearl:** depressão é uma das causas mais frequentes e mais tratáveis de perda de peso em idosos — muitas vezes subdiagnosticada por se manifestar com queixas somáticas em vez de humor deprimido clássico ("depressão mascarada").
- ⚠️ **Pitfall:** investigar perda de peso só com exames de imagem extensos de rastreio oncológico, sem antes avaliar causas mais simples e prevalentes (humor, cognição, dentição, deglutição, revisão medicamentosa).
- 📝 **Como caiu:** ENARE 2025 Q18.

## 🔹 Fragilidade e sarcopenia

- **Quando suspeitar:** exaustão autorreferida, lentidão de marcha, fraqueza de preensão, baixa atividade física, associadas à perda de peso — o **fenótipo de Fried** (5 critérios: perda de peso não intencional, exaustão, fraqueza de preensão, lentidão de marcha, baixo nível de atividade; **≥3 = fragilidade**) é conceito distinto de comorbidade ou incapacidade.
- **Diagnóstico:** fenótipo de Fried ou índice de fragilidade acumulativa — usados para prever risco cirúrgico/hospitalar e individualizar metas terapêuticas (menos agressivas em muito frágil), de forma independente da idade cronológica isolada. Sarcopenia pode ser rastreada clinicamente pela força de preensão palmar e velocidade de marcha, sem necessidade de exame de imagem para suspeita inicial.
- **Tratamento:** exercício físico resistido e otimização nutricional (proteína adequada) são as intervenções com melhor evidência, mais do que qualquer fármaco isolado.
- 💎 **Pearl:** a perda de peso é um dos cinco critérios do fenótipo de Fried, ligando diretamente essa síndrome à síndrome consumptiva — um idoso investigado por perda de peso deve ser simultaneamente rastreado para fragilidade, não tratado como dois problemas isolados.
- ⚠️ **Pitfall:** avaliar risco cirúrgico/hospitalar só pela idade cronológica — a fragilidade funcional prediz complicações melhor do que a idade isolada em muitos cenários.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Polifarmácia e prescrição inadequada

- **Quando suspeitar:** uso de ≥5 medicamentos crônicos (definição usual de polifarmácia), especialmente com sintomas inespecíficos novos (queda, confusão, anorexia) que podem ser efeito adverso não reconhecido.
- **Diagnóstico:** revisão sistemática da lista de medicamentos usando **critérios de Beers** e a ferramenta **STOPP/START**, que listam classes potencialmente inapropriadas no idoso — benzodiazepínicos, anticolinérgicos, anti-histamínicos de primeira geração, AINEs crônicos, sulfonilureias de longa ação.
- **Tratamento:** desprescrição gradual de fármacos de alto risco sem benefício claro, revisão periódica (não apenas na admissão hospitalar).
- 💎 **Pearl:** reconhecer o padrão de **prescrição em cascata** — por exemplo, anlodipino causando edema, tratado com furosemida, que causa hipocalemia, tratada com reposição de potássio — evita adicionar mais um medicamento quando a solução correta é retirar o agente causador original.
- ⚠️ **Pitfall:** ignorar os critérios de Beers/STOPP-START ao prescrever para idosos, mantendo medicações de alto risco sem reavaliação periódica.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Quedas

- **Quando suspeitar:** qualquer idoso com queda no último ano, marcha instável observada, ou uso de medicamentos associados a queda (sedativos, anti-hipertensivos, hipoglicemiantes) — rastreio deve ser sistemático, não só reativo a uma queda já ocorrida.
- **Diagnóstico:** teste **"Timed Up and Go"** (tempo para levantar da cadeira, caminhar 3 metros, voltar e sentar — >12 segundos sugere risco aumentado), avaliação de marcha e equilíbrio, revisão de medicamentos, avaliação visual e de calçados/ambiente domiciliar.
- **Tratamento:** intervenção multifatorial — ajuste/suspensão de medicamentos de risco, exercício de fortalecimento e equilíbrio, correção visual, adaptação ambiental (remoção de tapetes soltos, iluminação adequada, barras de apoio).
- 💎 **Pearl:** queda recorrente em idoso deve sempre motivar investigação de causa cardiovascular (arritmia, hipotensão ortostática) além da causa musculoesquelética óbvia — nem toda queda é "só um tropeço".
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Incontinência urinária

- **Quando suspeitar:** perda involuntária de urina relatada pelo paciente ou identificada em avaliação — frequentemente não relatada espontaneamente por vergonha, exigindo pergunta ativa.
- **Diagnóstico:** investigar causas reversíveis antes de assumir causa estrutural definitiva: infecção urinária, impactação fecal, poliúria por diurético/hiperglicemia, mobilidade reduzida (incontinência "funcional", por dificuldade de chegar ao banheiro a tempo), delirium.
- **Tratamento:** tratar causa reversível identificada primeiro; treinamento vesical e fisioterapia do assoalho pélvico antes de escalar para fármaco anticolinérgico (que pode piorar cognição no idoso) ou intervenção cirúrgica.
- ⚠️ **Pitfall:** assumir incontinência urinária como parte "normal" do envelhecimento sem investigar causas reversíveis antes de encaminhar para manejo definitivo.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**Delirium vs. demência vs. depressão**

| Característica | Delirium | Demência | Depressão |
|---|---|---|---|
| Início | Agudo (horas-dias) | Insidioso (meses-anos) | Subagudo, mais definido |
| Curso | Flutuante | Progressivo lento | Persistente, responde a tratamento |
| Atenção | Sempre alterada | Preservada até fase avançada | Geralmente preservada |
| Nível de consciência | Alterado | Preservado | Preservado |
| Reversibilidade | Sim, se causa tratada | Não (na maioria) | Sim, com tratamento |

## 💊 Tratamento

- **Prevenção multicomponente de delirium** (tipo HELP): reorientação, mobilização precoce, correção sensorial, higiene do sono e hidratação adequada, aplicados sistematicamente em idosos internados de risco.
- **Revisão de polifarmácia** deve ser rotina em toda internação e em consultas periódicas de idosos com múltiplas comorbidades, não apenas diante de um evento adverso já ocorrido.
- **Rastreio cognitivo (Mini-Mental, MoCA) e de depressão (Escala de Depressão Geriátrica)** fazem parte padrão da AGA, aplicados sistematicamente, não apenas quando há queixa espontânea do paciente ou familiar.
- **Escalas de AVD (Katz) e AIVD (Lawton)** documentam objetivamente o grau de dependência funcional e orientam necessidade de suporte domiciliar/institucional.

## 📚 Referências essenciais

- AGS/CoBRA Guidelines — Postoperative Delirium in Older Adults (American Geriatrics Society).
- Guideline NICE — Delirium: prevention, diagnosis and management.
- American Geriatrics Society — Beers Criteria for Potentially Inappropriate Medication Use in Older Adults.
`;

export default content.trim();
