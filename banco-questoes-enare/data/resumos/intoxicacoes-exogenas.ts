/**
 * Resumo — Emergências e Terapia Intensiva · Intoxicações exógenas.
 *
 * Reorganizado por entidade clínica (cada agente/toxíndrome tem sua
 * própria seção com quando suspeitar, diagnóstico, tratamento, pearl e
 * pitfall juntos), em vez de picado entre seções genéricas de tipo — o
 * assunto reúne substâncias e toxíndromes farmacologicamente distintas,
 * cada uma com antídoto e conduta próprios.
 *
 * Cobre as entidades do assunto no corpus: intoxicação por etilenoglicol
 * (indicação de hemodiálise), síndrome serotoninérgica e intoxicação por
 * metanol. Expandido com as demais toxíndromes de alto rendimento
 * (colinérgica, anticolinérgica, opioide, simpaticomimética) e
 * intoxicações específicas (paracetamol, salicilatos, antidepressivos
 * tricíclicos, lítio, monóxido de carbono) ainda não cobradas no corpus,
 * mas plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- **Reconhecer a toxíndrome pelo exame físico direciona o tratamento antes de qualquer exame laboratorial** — pupilas, pele, frequência cardíaca, peristalse e temperatura são os cinco eixos que diferenciam colinérgica, anticolinérgica, opioide e simpaticomimética.
- **Álcoois tóxicos (etilenoglicol, metanol) causam acidose metabólica com ânion-gap elevado E gap osmolar elevado** — a combinação dos dois achados é a chave diagnóstica antes mesmo da dosagem específica do álcool, e já basta para iniciar antídoto.
- **A maioria dos antídotos deste assunto trabalha bloqueando uma via metabólica ou competindo por um receptor — não "neutralizando" a substância** — fomepizol bloqueia a formação de metabólito tóxico, naloxona compete no receptor opioide, N-acetilcisteína repõe o substrato consumido na destoxificação do paracetamol.
- **Carvão ativado só é útil se administrado idealmente até 1-2h da ingestão de agente adsorvível** — não adsorve álcoois, metais pesados, ferro nem lítio, e é contraindicado se via aérea não protegida ou obstrução/perfuração gastrointestinal.
- **Toda suspeita de coingestão intencional (tentativa de autoextermínio) exige rastreio ampliado** (paracetamol sérico de rotina, mesmo sem relato do paciente) e avaliação psiquiátrica formal antes da alta — coingestões silenciosas são comuns e mudam completamente a urgência do caso.

## 📝 Como a banca cobra

**Intoxicações exógenas aparecem em 3 questões (1,42% do corpus)**, uma do EBSERH e duas do ENARE, todas testando **reconhecimento do agente pela toxíndrome/achado específico e conduta imediata**.

- **EBSERH 2026 Q55** cobrou diretamente as **indicações de hemodiálise na intoxicação por etilenoglicol** — o candidato precisa saber quando a remoção extracorpórea é obrigatória além do antídoto.
- **ENARE 2025 Q51** trouxe um quadro de **síndrome serotoninérgica**, cobrando o reconhecimento clínico (clônus, hipertermia, agitação) mais do que a farmacologia isolada.
- **ENARE 2026 Q24** cobrou **intoxicação por metanol**, com foco no achado toxicológico clássico (alteração visual) que aponta para esse álcool específico em vez de etilenoglicol.
- **Nenhuma toxíndrome clássica (colinérgica, anticolinérgica, opioide) nem intoxicação por paracetamol/tricíclicos/lítio caiu ainda no corpus** — são os candidatos mais prováveis de completar o assunto em provas futuras, seguindo o padrão de "reconhecer pelo exame físico, tratar rápido".

## 🧠 Conceito e fisiopatologia

Etilenoglicol e metanol são, por si só, relativamente pouco tóxicos — a toxicidade real vem de seus **metabólitos**, gerados pela álcool desidrogenase seguida de aldeído desidrogenase. Por isso o antídoto (fomepizol, ou etanol como alternativa) atua bloqueando essa via metabólica, competindo pela mesma enzima, e não neutralizando o álcool-mãe em si.

A **síndrome serotoninérgica** resulta do excesso de estimulação serotoninérgica nos receptores 5-HT1A e 5-HT2A do SNC e periférico, geralmente por combinação de fármacos com mecanismos serotoninérgicos distintos (ex.: inibição de recaptação + inibição de MAO). O excesso gera hiperatividade neuromuscular (clônus, hiperreflexia, mais proeminente em membros inferiores) e disautonomia — instalação em horas, diferente da síndrome neuroléptica maligna, que evolui em dias por bloqueio dopaminérgico.

As demais toxíndromes seguem a mesma lógica de reconhecimento por eixo farmacológico: agentes colinérgicos inundam a fenda sináptica de acetilcolina, anticolinérgicos bloqueiam receptores muscarínicos, opioides deprimem o centro respiratório via receptores mu, e simpaticomiméticos aumentam catecolaminas — cada eixo produz um padrão previsível de sinais vitais e exame físico que permite tratar antes da confirmação laboratorial.

## 🔹 Intoxicação por etilenoglicol

- **Quando suspeitar:** ingestão de anticongelante/produto industrial; acidose metabólica com ânion-gap e gap osmolar elevados; lesão renal aguda.
- **Diagnóstico:** metabolizado a ácido glicólico e depois oxalato — **cristais de oxalato de cálcio na urina** (formato de envelope ou agulha) são sugestivos, mas nem sempre presentes; dosagem sérica específica quando disponível, sem atrasar tratamento empírico.
- **Tratamento:** fomepizol IV (ou etanol se indisponível) + bicarbonato para acidose + tiamina e piridoxina como cofatores da via metabólica alternativa. **Indicação de hemodiálise:** acidose metabólica grave refratária, lesão renal aguda já instalada, instabilidade hemodinâmica ou nível sérico muito elevado do álcool — a diálise remove simultaneamente o álcool-mãe e os metabólitos tóxicos.
- 💎 **Pearl:** o gap osmolar cai e o ânion-gap sobe em direções opostas ao longo do tempo, conforme o álcool-mãe é metabolizado — um gap osmolar já normalizado com ânion-gap ainda alto não afasta a intoxicação, só indica fase mais avançada.
- ⚠️ **Pitfall:** adiar hemodiálise em paciente com lesão renal já instalada esperando o efeito do fomepizol isolado — o antídoto só impede *nova* formação de metabólito, não remove o que já está circulando.
- 📝 **Como caiu:** EBSERH 2026 Q55 — indicações de hemodiálise.

## 🔹 Intoxicação por metanol

- **Quando suspeitar:** ingestão de metanol (álcool combustível, produtos de limpeza adulterados); acidose metabólica com ânion-gap e gap osmolar elevados.
- **Diagnóstico:** metabolizado a ácido fórmico — toxina mitocondrial seletiva para as células ganglionares da retina e nervo óptico, causando alterações visuais (visão turva, "campo de neve") podendo evoluir para cegueira permanente se não tratada a tempo.
- **Tratamento:** fomepizol IV (ou etanol) + bicarbonato + **ácido fólico/folínico** como cofator que acelera a metabolização do ácido fórmico em CO₂ e água (via não-tóxica). Hemodiálise se acidose refratária, lesão visual já instalada ou nível sérico muito alto.
- 💎 **Pearl:** o achado visual é a pista mais discriminativa entre os dois álcoois tóxicos — lesão renal aponta etilenoglicol, lesão visual aponta metanol, apesar de o mecanismo inicial (acidose com duplo gap) ser idêntico nos dois.
- ⚠️ **Pitfall:** esperar a dosagem sérica de metanol para iniciar tratamento — a suspeita clínica com ânion-gap e gap osmolar elevados, mais o sintoma visual, já justifica iniciar fomepizol.
- 📝 **Como caiu:** ENARE 2026 Q24.

## 🔹 Síndrome serotoninérgica

- **Quando suspeitar:** uso recente de associação/aumento de dose de agentes serotoninérgicos (ISRS + IMAO, ISRS + tramadol, ISRS + triptano, ISRS + linezolida) com instalação em **horas** (geralmente <24h).
- **Diagnóstico (critérios de Hunter):** alteração do estado mental + hiperatividade autonômica (taquicardia, hipertermia, diaforese) + anormalidades neuromusculares — **clônus (especialmente ocular/espontâneo) é o achado mais específico**, junto de hiperreflexia mais proeminente em membros inferiores.
- **Tratamento:** suspensão imediata do(s) agente(s) causador(es) é a primeira medida, antes de qualquer fármaco específico; suporte com benzodiazepínico para agitação/hipertermia, resfriamento externo; ciproeptadina (antagonista serotoninérgico) em casos moderados a graves refratários ao suporte.
- 💎 **Pearl:** o principal diferencial é a síndrome neuroléptica maligna — que tem rigidez "em cano de chumbo" e **hiporreflexia** (não clônus/hiperreflexia) e instalação em **dias**, associada a antipsicóticos, não a serotoninérgicos.
- ⚠️ **Pitfall:** tratar só com suporte, sem suspender o agente causador — a suspensão é a medida mais importante, antes mesmo de qualquer fármaco específico.
- 📝 **Como caiu:** ENARE 2025 Q51.

## 🔹 Toxíndrome colinérgica

- **Quando suspeitar:** exposição a organofosforados/carbamatos (agrotóxico, ambiente rural); miose, salivação, lacrimejamento, diarreia, broncorreia, bradicardia — mnemônicos "SLUDGE" ou "DUMBELS".
- **Tratamento:** **atropina em doses altas e repetidas**, titulada pela secagem das secreções brônquicas (não pela frequência cardíaca) + **pralidoxima** precoce em organofosforados, para reativar a acetilcolinesterase antes que ela "envelheça" e a ligação se torne irreversível.
- 💎 **Pearl:** a causa de óbito mais imediata é a broncorreia/broncoespasmo (insuficiência respiratória), não a bradicardia — por isso a titulação de atropina segue a secreção pulmonar, e doses cumulativas muito acima do usual em outros contextos podem ser necessárias.
- ⚠️ **Pitfall:** titular atropina pela frequência cardíaca isolada, subdosando o paciente — a meta é secar as secreções.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Toxíndrome anticolinérgica

- **Quando suspeitar:** antidepressivos tricíclicos, anti-histamínicos de primeira geração, atropina/escopolamina, plantas (Datura); midríase, pele **seca e quente**, retenção urinária, íleo, taquicardia, agitação/delirium — mnemônico "cego como morcego, seco como osso, vermelho como beterraba, quente como o inferno, louco como um chapeleiro".
- **Diagnóstico diferencial:** distingue-se da simpaticomimética pela pele seca (não diaforética) e pelo íleo/retenção urinária (peristalse reduzida, não aumentada).
- **Tratamento:** suporte, benzodiazepínico para agitação; fisostigmina é antídoto específico, mas **contraindicada se houver suspeita de coingestão por tricíclicos** (risco de convulsão e assistolia).
- ⚠️ **Pitfall:** usar fisostigmina em paciente com QRS alargado ou suspeita de tricíclico — pode precipitar assistolia; nesse cenário, bicarbonato é a prioridade, não reverter a toxíndrome anticolinérgica.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Toxíndrome opioide

- **Quando suspeitar:** miose puntiforme, depressão respiratória (bradipneia) e rebaixamento do nível de consciência, com história ou fatores de risco para uso de opioide.
- **Tratamento:** naloxona IV/IM/intranasal, titulada em doses pequenas e repetidas — reversão abrupta em dose alta pode precipitar abstinência aguda grave em usuário crônico. **Meia-vida da naloxona é mais curta que a de muitos opioides** (sobretudo metadona e formulações de liberação prolongada), exigindo observação prolongada e doses repetidas para evitar ressedação/reapneia horas depois.
- ⚠️ **Pitfall:** liberar o paciente após uma única dose de naloxona que reverteu o quadro, sem período de observação — a ressedação pode ocorrer quando a naloxona "acaba" antes do opioide.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Toxíndrome simpaticomimética

- **Quando suspeitar:** cocaína, anfetaminas, ecstasy; midríase, taquicardia, hipertensão, agitação, hipertermia.
- **Diagnóstico diferencial:** semelhante à anticolinérgica, mas com pele **diaforética** (não seca) e peristalse preservada/aumentada — diferença que ajuda a distinguir as duas no exame físico.
- **Tratamento:** benzodiazepínico como base do tratamento (agitação, hipertensão, taquicardia respondem à sedação); **evitar betabloqueador isolado** na intoxicação por cocaína — bloqueio beta sem oposição alfa pode agravar vasoespasmo coronariano e hipertensão ("efeito alfa sem oposição"), o mesmo raciocínio usado no feocromocitoma.
- ⚠️ **Pitfall:** tratar taquicardia/hipertensão por cocaína com betabloqueador de primeira linha — risco de piora paradoxal por vasoconstrição alfa sem oposição.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Intoxicação por paracetamol

- **Quando suspeitar:** ingestão aguda em dose tóxica (geralmente >150 mg/kg ou >7,5-10 g em adulto) ou uso crônico supraterapêutico; hepatotoxicidade dose-dependente pelo metabólito NAPQI.
- **Diagnóstico:** nível sérico plotado no **nomograma de Rumack-Matthew** a partir de **4h** da ingestão aguda única (dosagem antes disso não é interpretável); transaminases e coagulograma para estadiar lesão hepática já instalada.
- **Tratamento:** **N-acetilcisteína**, com eficácia máxima se iniciada em até 8h da ingestão — repõe glutationa hepática, o substrato consumido na destoxificação do NAPQI; transplante hepático em insuficiência hepática fulminante refratária.
- ⚠️ **Pitfall:** atrasar N-acetilcisteína aguardando confirmação de lesão hepática — o nomograma orienta o início precoce antes de qualquer alteração de transaminases.
- 📝 **Como caiu:** ainda não cobrado no corpus — um dos temas de maior probabilidade de aparecer em prova futura, dado o padrão histórico do assunto.

## 🔹 Intoxicação por salicilatos

- **Quando suspeitar:** ingestão de AAS em dose alta (intencional ou acidental); zumbido, hiperventilação, confusão.
- **Diagnóstico:** distúrbio ácido-básico misto característico — **alcalose respiratória inicial** (estímulo direto do centro respiratório) seguida de **acidose metabólica com ânion-gap elevado**; nível sérico seriado, com picos tardios por absorção errática em comprimidos entéricos.
- **Tratamento:** alcalinização urinária com bicarbonato (aumenta a excreção renal do salicilato ionizado — "ion trapping"), hidratação; hemodiálise se nível muito elevado, acidose refratária ou disfunção neurológica/renal.
- 💎 **Pearl:** evitar intubação/sedação sem necessidade absoluta — a ventilação mecânica geralmente não consegue reproduzir a hiperventilação compensatória espontânea do paciente, e uma frequência respiratória "normalizada" artificialmente pode precipitar acidemia grave e piora clínica rápida.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Intoxicação por antidepressivos tricíclicos

- **Quando suspeitar:** overdose intencional; rebaixamento, convulsão, arritmia, associado a achados anticolinérgicos.
- **Diagnóstico:** ECG é o exame mais importante — **QRS alargado (>100ms)** e eixo desviado para a direita (onda R terminal em aVR) predizem convulsão e arritmia, mais úteis que o nível sérico.
- **Tratamento:** **bicarbonato de sódio IV** para QRS alargado ou arritmia — reduz a cardiotoxicidade pelo efeito de sódio e alcalinização, não pelo pH em si; benzodiazepínico para convulsão; evitar antiarrítmicos classe Ia/Ic (potencializam a cardiotoxicidade).
- ⚠️ **Pitfall:** usar fisostigmina para reverter os sintomas anticolinérgicos do tricíclico — contraindicada nesse contexto, risco de assistolia; a prioridade é bicarbonato.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Intoxicação por lítio

- **Quando suspeitar:** uso terapêutico crônico com desidratação/insuficiência renal associada (mais grave que a aguda) ou ingestão aguda maciça; tremor grosseiro, ataxia, confusão, convulsão.
- **Diagnóstico:** nível sérico seriado, função renal e eletrólitos — sintomas neurológicos correlacionam melhor com gravidade do que o nível isolado na intoxicação crônica.
- **Tratamento:** hidratação, suspensão do fármaco; hemodiálise em nível muito elevado ou disfunção neurológica grave — **carvão ativado não tem papel aqui**, pois não adsorve lítio.
- ⚠️ **Pitfall:** administrar carvão ativado esperando algum efeito na intoxicação por lítio — substância não adsorvível, medida sem benefício.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Intoxicação por monóxido de carbono

- **Quando suspeitar:** exposição em ambiente fechado com fonte de combustão (aquecedor, gerador, incêndio); cefaleia, confusão, náusea — inespecífico, exige alto índice de suspeita epidemiológica.
- **Diagnóstico:** dosagem direta de **carboxihemoglobina por cooximetria** — a **saturimetria de pulso comum não distingue** carboxihemoglobina de oxihemoglobina, podendo mostrar saturação falsamente normal/alta.
- **Tratamento:** oxigênio a 100% por máscara não reinalante; oxigênio hiperbárico em intoxicação grave (perda de consciência, gestante, isquemia miocárdica, nível muito elevado).
- ⚠️ **Pitfall:** confiar na saturimetria de pulso normal para descartar a intoxicação — o oxímetro convencional não detecta essa toxicidade específica.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**Eixos de diferenciação das principais toxíndromes**

| Toxíndrome | Pupila | Pele | FC | Peristalse | Antídoto |
|---|---|---|---|---|---|
| Colinérgica | Miose | Úmida, secreções | Bradicardia | Aumentada (diarreia) | Atropina + pralidoxima |
| Anticolinérgica | Midríase | Seca e quente | Taquicardia | Reduzida (íleo) | Fisostigmina (seletiva) |
| Opioide | Miose puntiforme | Normal/fria | Bradicardia, bradipneia | Reduzida | Naloxona |
| Simpaticomimética | Midríase | Diaforética | Taquicardia | Normal/aumentada | Benzodiazepínico (suporte) |

## 📚 Referências essenciais

- American Academy of Clinical Toxicology — Guideline for the Management of Toxic Alcohol Poisoning.
- UpToDate — Serotonin Syndrome: Diagnosis and Management.
- Goldfrank's Toxicologic Emergencies.
`;

export default content.trim();
