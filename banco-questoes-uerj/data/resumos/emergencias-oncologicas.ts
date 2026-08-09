/**
 * Resumo — Oncologia · Emergências oncológicas.
 *
 * Cobre as entidades do assunto no corpus: hipercalcemia maligna, síndrome
 * da veia cava superior, carcinomatose meníngea, leucostase, metástase
 * cerebral/hipertensão intracraniana, neutropenia febril (enterocolite
 * neutropênica) e síndrome de lise tumoral.
 */
const content = `
## 🎯 Essencial

- **Neutropenia febril = uma única temperatura ≥38,3°C (ou ≥38°C sustentada por 1h) com neutrófilos <500/mm³ (ou <1.000 com queda esperada abaixo de 500)** — é emergência: **antibiótico empírico de amplo espectro anti-pseudomonas em até 1 hora**, sem esperar cultura.
- **Enterocolite neutropênica (tiflite):** dor em fossa ilíaca direita + febre + neutropenia grave, com espessamento cecal na TC — tratar com **antibiótico (cefepime + metronidazol, por exemplo) e NÃO operar de imediato**; cirurgia é reservada para perfuração, sangramento incontrolável ou piora apesar do tratamento clínico.
- **Síndrome de lise tumoral:** hipercalemia + hiperfosfatemia + hiperuricemia + **hipocalcemia** (por quelação do cálcio pelo fósforo) — tríade clássica de câimbras/parestesia perioral aponta para hipocalcemia sintomática.
- **Rasburicase é a droga de escolha para ácido úrico muito elevado ou risco alto de lise tumoral**; alopurinol é usado em profilaxia de risco baixo/intermediário — não trocar os dois papéis.
- **Rasburicase é contraindicada em deficiência de G6PD** (risco de hemólise grave) — pergunta clássica de segurança do medicamento.
- **Hipercalcemia maligna:** hidratação venosa vigorosa é o primeiro passo sempre; **bifosfonato (ácido zoledrônico)** é o tratamento definitivo. **Não usar tiazídico** (piora a hipercalcemia); furosemida só como adjuvante após volemia corrigida, nunca como primeira medida.
- **Hipercalcemia por linfoma** tem mecanismo diferente (produção ectópica de **calcitriol/1,25-di-hidroxivitamina D** pelas células tumorais) e por isso **responde a corticoide**, ao contrário da hipercalcemia por PTHrP (carcinomas epidermoides, mama, rim, mieloma).
- **Síndrome da veia cava superior:** dispneia + edema de face/pescoço + turgência jugular não pulsátil + circulação colateral em tórax. Causa mais comum é neoplasia pulmonar (principalmente carcinoma de pequenas células e escamoso).
- **Se a biópsia inicial já define carcinoma de pequenas células, iniciar quimioterapia imediatamente** — é quimiossensível e a resposta rápida já alivia a obstrução; não é preciso esperar imuno-histoquímica completa nem começar por radioterapia isolada.
- **Metástase cerebral:** localização típica na **junção córtico-subcortical** (transição substância branca-cinzenta), múltiplas lesões, com **edema vasogênico** extenso (desproporcional ao tamanho da lesão) — mecanismo diferente do edema citotóxico do AVC isquêmico.
- **Leucostase:** hiperleucocitose (>100.000/mm³, geralmente blástica) + sintomas neurológicos/respiratórios de hipoperfusão por hiperviscosidade — **hidroxiureia (ou leucoaférese em casos graves) é a conduta inicial; transfusão de hemácias é relativamente contraindicada** (aumenta viscosidade e piora o quadro).
- **Carcinomatose meníngea:** múltiplos pares cranianos acometidos + sinais de hipertensão intracraniana em paciente oncológico — pensar sempre que houver acometimento neurológico multifocal não explicado por lesão única.

## 💎 Pearls

- **Hipocalemia + câimbras + parestesia perioral em paciente recém-iniciando terapia oncológica** = pense em síndrome de lise tumoral antes de qualquer outra causa — é a manifestação sintomática mais precoce e mais testada.
- **Venetoclax, quimioterapia de indução em leucemias agudas e linfomas muito volumosos (Burkitt, linfoblástico) são os maiores gatilhos de lise tumoral** — a "carga tumoral alta + droga muito citotóxica" é a combinação de risco.
- **Diferencie hipercalcemia por PTHrP (tumores sólidos, mais comum globalmente) de hipercalcemia por metástase óssea osteolítica direta (mieloma, mama) e de hipercalcemia por calcitriol (linfoma)** — os três mecanismos têm o mesmo achado (cálcio alto) mas tratamentos com ênfase diferente (corticoide funciona bem só no terceiro).
- **Diabetes insipidus nefrogênico é uma complicação direta da hipercalcemia grave** (o cálcio alto interfere na ação da ADH no túbulo coletor) — poliúria e hipostenúria numa vinheta de hipercalcemia não é coincidência, é fisiopatologia direta.
- **Na síndrome da veia cava superior, os sintomas pioram em decúbito e melhoram em ortostase** — é um detalhe posicional que a banca já usou para reforçar o diagnóstico.
- **Edema vasogênico (metástase, abscesso, tumor primário) responde a corticoide (dexametasona)**; edema citotóxico (isquemia) não responde — por isso corticoide é parte do tratamento inicial de metástase cerebral sintomática, mas não tem papel no AVC isquêmico agudo.
- **Leucostase é emergência clínica mesmo com paciente aparentemente estável** — hipoxemia desproporcional ao exame pulmonar normal e alterações visuais/neurológicas sutis (papiledema) são sinais de alerta precoce.
- **Hemotransfusão em leucostase pode precipitar síndrome de leucostase franca** por elevar ainda mais a viscosidade sanguínea — evite corrigir a anemia antes de reduzir a contagem de blastos, exceto se houver risco de vida por anemia grave.
- **Carcinoma de mama é a causa mais associada a carcinomatose meníngea** nas vinhetas clássicas de mulher com massa mamária + múltiplos pares cranianos.

## ⚠️ Pitfalls

- **Operar enterocolite neutropênica de rotina** — a cirurgia agrava o prognóstico em paciente neutropênico; tratamento clínico é a regra, cirurgia é exceção (perfuração, sangramento maciço, necrose transmural).
- **Usar alopurinol em vez de rasburicase quando o ácido úrico já está muito elevado ou há alto risco/lise estabelecida** — alopurinol previne a formação de novo ácido úrico, mas não degrada o que já existe; rasburicase degrada ativamente o ácido úrico já formado.
- **Prescrever rasburicase sem checar G6PD** — pode desencadear hemólise grave (o peróxido de hidrogênio gerado na degradação do ácido úrico exige NADPH para ser neutralizado, e a via está deficiente).
- **Usar diurético tiazídico na hipercalcemia** (reduz a excreção renal de cálcio e piora o quadro) — a escolha correta, se necessário diurético, é a furosemida, e mesmo assim só depois da hidratação adequada.
- **Atrasar antibiótico em neutropenia febril esperando resultado de cultura** — a meta é começar em até 1 hora da chegada; cada hora de atraso aumenta mortalidade.
- **Esperar laudo de imuno-histoquímica completo para iniciar quimioterapia em síndrome de veia cava superior por carcinoma de pequenas células já confirmado por citologia/histologia inicial** — o tratamento sistêmico não deve esperar refinamento histológico quando a linha terapêutica já está definida pelo achado inicial.
- **Tratar toda cefaleia + confusão em paciente oncológico como AVC** sem pensar em metástase cerebral, carcinomatose meníngea ou hipertensão intracraniana relacionada a lesão expansiva — o padrão de edema (vasogênico, múltiplas lesões na transição córtico-subcortical) direciona para etiologia neoplásica.
- **Corrigir hipocalcemia da lise tumoral de forma agressiva e assintomática** — reposição de cálcio só está indicada se houver sintomas (câimbras, arritmia, tetania), porque o cálcio pode precipitar com o fósforo elevado e piorar a nefrocalcinose/lesão renal.

## 📝 Como a UERJ cobra

**Emergências oncológicas é #3 do ranking (9 questões, 3,6% do corpus)**, concentrado principalmente nas provas de **2023** (5 das 9 questões) — um sinal de que a banca investiu pesado nesse tema naquele ano e que ele permanece de alto rendimento.

- **Hipercalcemia maligna** (2025 Q18, 2025 Q38) foi cobrada duas vezes só na última prova — uma pedindo o **manejo da complicação (diabetes insipidus nefrogênico)** e outra pedindo o **mecanismo por trás da etiologia** (calcitriol/linfoma × PTHrP), sempre valorizando raciocínio fisiopatológico, não decoreba.
- **Síndrome da veia cava superior** (2022 Q34, 2023 Q43) testa tanto o reconhecimento clínico clássico quanto — de forma mais exigente — a **conduta imediata quando a histologia já aponta pequenas células** (quimioterapia sem esperar).
- **Síndrome de lise tumoral e neutropenia febril/enterocolite neutropênica** (2023 Q36, Q41) aparecem como "conduta correta entre quatro combinações plausíveis" — a banca gosta de misturar a droga certa com o exame/manejo errado (ex.: bicarbonato + rasburicase + hemodiálise como opção incorreta) para testar se o candidato sabe a combinação exata, não só reconhece o diagnóstico.
- **Metástase cerebral e leucostase** (2023 Q19, Q47) exigem raciocínio de **mecanismo do edema** e de **por que a hemotransfusão é relativamente contraindicada**, respectivamente — questões conceituais, não apenas descritivas.

## 🆕 Atualização

- **Rasburicase de dose única (ajustada por peso) é hoje preferida à dosagem repetida por vários dias**, com eficácia equivalente e menor custo/exposição — mudança de prática consolidada nos protocolos mais recentes, ainda não explicitamente cobrada pela UERJ.
- **Denosumabe** vem ganhando espaço como alternativa ao ácido zoledrônico na hipercalcemia maligna refratária a bifosfonato, especialmente em pacientes com função renal comprometida (não depende de excreção renal) — tema emergente para provas futuras.
- **Stent endovascular de veia cava superior** é cada vez mais usado para alívio sintomático rápido em síndrome de VCS grave, complementando (não substituindo) o tratamento oncológico definitivo — especialmente quando há risco iminente de compromisso de via aérea ou instabilidade hemodinâmica.
- Nos protocolos de neutropenia febril mais recentes (MASCC/NCCN), a **estratificação de risco (escore MASCC)** ganhou peso para definir manejo ambulatorial com antibiótico oral em pacientes de baixo risco selecionados, ao invés de internação obrigatória universal — a UERJ até aqui cobrou apenas o cenário de internação/gravidade.

## 🧠 Conceito e fisiopatologia

**Síndrome de lise tumoral** ocorre quando uma massa tumoral de alta carga proliferativa é destruída rapidamente (espontaneamente ou por quimioterapia altamente eficaz), liberando o conteúdo intracelular em bloco: potássio, fósforo e ácidos nucleicos, que são metabolizados a ácido úrico pela xantina oxidase. O ácido úrico e o fosfato de cálcio precipitam nos túbulos renais, causando lesão renal aguda, que por sua vez reduz ainda mais a excreção desses metabólitos — um ciclo vicioso. O fósforo elevado sequestra cálcio sérico (formando fosfato de cálcio), explicando a hipocalcemia que fecha a tétrade metabólica.

**Hipercalcemia maligna** tem três mecanismos principais: (1) **PTHrP** (peptídeo relacionado ao PTH), secretado por tumores sólidos (mais comum, especialmente carcinoma epidermoide de pulmão, mama, rim), que mimetiza a ação do PTH nos ossos e rins sem ser regulado pelo cálcio; (2) **metástases osteolíticas diretas** (mieloma múltiplo, câncer de mama), com liberação local de citocinas osteoclásticas; (3) **produção ectópica de calcitriol (1,25-di-hidroxivitamina D)** por células tumorais (mais associado a linfoma), aumentando a absorção intestinal de cálcio — é este último mecanismo que explica por que a hipercalcemia por linfoma responde bem a corticoide, que suprime a produção de calcitriol.

**Síndrome da veia cava superior** decorre de compressão extrínseca (mais comum, por massa mediastinal) ou trombose intraluminal da veia cava superior, obstruindo o retorno venoso da cabeça, pescoço e membros superiores. A obstrução crônica permite formação de circulação colateral (visível como veias dilatadas na parede torácica); a obstrução aguda gera edema mais dramático por falta de tempo para desenvolvimento de colaterais.

**Metástase cerebral** dissemina-se por via hematogênica, alojando-se preferencialmente na junção córtico-subcortical, onde o calibre vascular se reduz abruptamente (as arteríolas terminais "encalham" êmbolos tumorais nesse ponto). O tumor rompe a barreira hematoencefálica localmente, gerando extravasamento de plasma para o espaço extracelular — **edema vasogênico**, que se propaga pela substância branca e é desproporcional ao tamanho da lesão, respondendo bem a corticoide (que restaura parcialmente a integridade da barreira).

**Leucostase** ocorre quando uma contagem extremamente elevada de blastos (leucêmicos, mais rígidos e aderentes ao endotélio do que leucócitos maduros) obstrui a microcirculação, especialmente pulmonar e cerebral, causando hipoperfusão tecidual local — por isso os sintomas são predominantemente respiratórios e neurológicos, e por isso transfundir hemácias (que aumenta a viscosidade sanguínea global) pode agravar agudamente o quadro.

**Enterocolite neutropênica (tiflite)** ocorre porque a neutropenia grave priva a mucosa intestinal — já fragilizada pela quimioterapia citotóxica — de sua principal defesa contra translocação bacteriana, permitindo invasão da parede do ceco (segmento mais predisposto por menor vascularização relativa) por flora entérica, com risco de necrose transmural e perfuração.

## 🩺 Quadro clínico

- **Neutropenia febril/enterocolite neutropênica:** febre isolada pode ser o único sinal (a resposta inflamatória depende de neutrófilos, que estão ausentes); dor abdominal em FID, diarreia sanguinolenta e distensão sugerem tiflite.
- **Síndrome de lise tumoral:** câimbras, parestesia perioral, tetania (hipocalcemia sintomática), arritmias (hipercalemia), oligúria/anúria (lesão renal aguda por precipitação de urato/fosfato).
- **Hipercalcemia maligna:** "ossos, pedras, gemidos abdominais e humores psiquiátricos" — dor óssea, litíase renal, constipação/dor abdominal, confusão mental, poliúria (por diabetes insipidus nefrogênico secundário), desidratação.
- **Síndrome da veia cava superior:** dispneia progressiva, edema de face e pescoço, pletora facial, cefaleia, tosse, rouquidão, disfagia, circulação colateral visível no tórax — piora deitado, melhora sentado.
- **Metástase cerebral/hipertensão intracraniana:** cefaleia matutina que melhora ao longo do dia, náuseas/vômitos em jato, papiledema, déficits focais conforme localização, alteração de nível de consciência em casos avançados.
- **Leucostase:** dispneia, hipoxemia, cefaleia, turvação visual, confusão mental, priapismo (raro) — em paciente com hiperleucocitose extrema (geralmente >100.000/mm³).
- **Carcinomatose meníngea:** cefaleia, náuseas, alteração do nível de consciência, e o achado mais discriminatório — **acometimento de múltiplos pares cranianos simultaneamente**, muitas vezes assimétrico, sem explicação por lesão focal única.

## 🔎 Diagnóstico

- **Neutropenia febril:** hemograma com contagem absoluta de neutrófilos, hemoculturas (periférica e de cateter, se presente), exame físico completo em busca de foco — mas o tratamento **não espera** o resultado desses exames.
- **Lise tumoral:** eletrólitos (potássio, fósforo, cálcio), ácido úrico e função renal seriados nas primeiras 24-72h após início de terapia citotóxica em paciente de alto risco (alta carga tumoral, neoplasias muito quimiossensíveis).
- **Hipercalcemia maligna:** cálcio total/iônico, PTH (tipicamente suprimido, o que já distingue de hiperparatireoidismo primário), PTHrP e, se a etiologia não for óbvia, calcitriol — a dosagem de PTH suprimido com PTHrP ou calcitriol elevados fecha o mecanismo.
- **Síndrome de veia cava superior:** TC de tórax com contraste define a causa (massa, trombose) e orienta biópsia (mais frequentemente por agulha fina, broncoscopia ou biópsia de linfonodo acessível) — o diagnóstico histológico é essencial porque muda completamente o tratamento (quimiossensível × cirúrgico × radiossensível).
- **Metástase cerebral:** TC ou RM de crânio com contraste mostrando lesões múltiplas na transição córtico-subcortical com edema vasogênico desproporcional; investigar sítio primário se ainda desconhecido (TC de tórax/abdome, mamografia conforme perfil).
- **Leucostase:** hemograma com contagem de blastos, gasometria (hipoxemia sem explicação pulmonar clara), fundoscopia (papiledema/hemorragias retinianas).
- **Carcinomatose meníngea:** RM de neuroeixo com contraste (realce leptomeníngeo) e **citologia oncótica do líquor** (pode exigir mais de uma punção para sensibilidade adequada).

## 🚨 Gravidade / classificação

- **Neutropenia febril de alto risco** (neutrófilos <100/mm³, neutropenia prolongada esperada >7 dias, instabilidade hemodinâmica, mucosite grave, comorbidade descompensada) exige internação e antibiótico intravenoso; baixo risco pode, em protocolos selecionados, ser manejado ambulatorialmente.
- **Síndrome de lise tumoral** é classificada em laboratorial (alterações bioquímicas sem sintomas) e clínica (com disfunção de órgão-alvo — arritmia, convulsão, lesão renal aguda) — a forma clínica exige manejo intensivo, incluindo diálise se refratária.
- **Hipertensão intracraniana por metástase** com desvio de linha média ou rebaixamento do nível de consciência é emergência neurocirúrgica potencial, além do manejo clínico com corticoide.
- **Leucostase franca** (sintomas neurológicos/respiratórios estabelecidos) exige redução urgente da contagem de blastos — hidroxiureia oral em casos menos graves, leucoaférese em casos graves/refratários.

## 💊 Tratamento

- **Neutropenia febril:** antibiótico empírico de amplo espectro com cobertura antipseudomonas (ex.: cefepime ou piperacilina-tazobactam) em até 1 hora; ajustar conforme foco e cultura; fator estimulador de colônias (G-CSF) em casos selecionados de alto risco.
- **Enterocolite neutropênica:** antibioticoterapia de amplo espectro (cobertura anti-Gram-negativos e anaeróbios, ex.: cefepime + metronidazol), repouso intestinal, suporte; cirurgia reservada para perfuração, sangramento maciço ou deterioração clínica apesar do tratamento.
- **Síndrome de lise tumoral:** hidratação venosa vigorosa (base do tratamento e da profilaxia), **rasburicase** em alto risco/ácido úrico muito elevado (checar G6PD antes), alopurinol em risco baixo/intermediário como profilaxia; corrigir hipercalemia ativamente; repor cálcio **apenas se sintomático**; diálise se lesão renal refratária ou distúrbio eletrolítico grave não controlado clinicamente.
- **Hipercalcemia maligna:** hidratação salina isotônica vigorosa primeiro, **bifosfonato IV (ácido zoledrônico)** como tratamento definitivo (efeito pleno em 2-4 dias), calcitonina para alívio rápido nas primeiras 24-48h (efeito curto, taquifilaxia), corticoide se etiologia por calcitriol/linfoma, furosemida apenas após volemia corrigida — nunca tiazídico.
- **Síndrome da veia cava superior:** tratamento oncológico direcionado à histologia (quimioterapia se pequenas células ou linfoma — ambos muito quimiossensíveis; radioterapia para outras histologias ou alívio sintomático rápido); corticoide como adjuvante em edema significativo; stent endovascular para alívio sintomático rápido em casos graves; anticoagulação se etiologia trombótica.
- **Metástase cerebral:** corticoide (dexametasona) para edema perilesional sintomático; radioterapia (holocraniana ou estereotáxica conforme número/tamanho das lesões) e/ou ressecção cirúrgica em lesão única sintomática acessível; anticonvulsivante apenas se houver crise convulsiva (não profilático de rotina).
- **Leucostase:** **hidroxiureia** para redução rápida da massa blástica (ou quimioterapia de indução definitiva conforme a leucemia de base), leucoaférese em casos graves/refratários; evitar transfusão de hemácias antes de reduzir a leucocitose (piora a viscosidade); hidratação cuidadosa (não excessiva, risco de síndrome de lise associada).
- **Carcinomatose meníngea:** quimioterapia intratecal (metotrexato, citarabina) e/ou radioterapia direcionada, associada a tratamento sistêmico do tumor primário; prognóstico reservado na maioria dos casos.

## 🔀 Diagnóstico diferencial

| Emergência | Achado discriminatório | Confundido com |
| --- | --- | --- |
| Enterocolite neutropênica | Neutropenia grave + dor em FID | Apendicite aguda (mas cirurgia é a exceção, não a regra) |
| Lise tumoral | Hipocalcemia associada a hipercalemia/hiperfosfatemia | Insuficiência renal isolada |
| Hipercalcemia maligna | PTH suprimido | Hiperparatireoidismo primário (PTH alto/inapropriado) |
| Leucostase | Hiperleucocitose extrema + hipoxemia sem foco pulmonar | Pneumonia, SDRA |
| Carcinomatose meníngea | Múltiplos pares cranianos | Metástase cerebral única (déficit focal isolado) |
| Metástase cerebral | Edema vasogênico, múltiplas lesões córtico-subcorticais | Glioblastoma (geralmente lesão única, edema também vasogênico mas outro contexto) |

## 🔤 Mnemônicos

- **Hipercalcemia — "ossos, pedras, gemidos e humores psiquiátricos"** (bones, stones, groans, psychiatric overtones): dor óssea, litíase renal, sintomas gastrointestinais, alteração de humor/cognição.

## 📋 Tabela de revisão

| Emergência | 1º passo terapêutico | Tratamento definitivo |
| --- | --- | --- |
| Neutropenia febril | Antibiótico empírico em 1h | Ajustar por foco/cultura |
| Lise tumoral | Hidratação venosa | Rasburicase (alto risco) |
| Hipercalcemia maligna | Hidratação venosa | Bifosfonato IV |
| Síndrome de VCS (pequenas células) | — | Quimioterapia imediata |
| Metástase cerebral sintomática | Corticoide (dexametasona) | Radioterapia/cirurgia |
| Leucostase | Hidroxiureia | Leucoaférese se grave |

## 📚 Referências essenciais

- NCCN Clinical Practice Guidelines in Oncology — Prevention and Treatment of Cancer-Related Infections (neutropenia febril).
- ASCO/IDSA Guideline — Outpatient Management of Fever and Neutropenia in Adults with Cancer.
- Cairo-Bishop criteria — definição e classificação laboratorial/clínica de síndrome de lise tumoral.
- ESMO Clinical Practice Guidelines — Management of Cancer Pain and Oncologic Emergencies (hipercalcemia, síndrome de veia cava superior, compressão medular).
`;

export default content.trim();
