/**
 * Resumo — Nefrologia · Injúria renal aguda.
 *
 * Cobre as entidades do assunto no corpus: indicações de terapia renal
 * substitutiva de urgência e nefrite intersticial aguda induzida por
 * anti-inflamatório não esteroidal. Inclui também extrapolações de alto
 * rendimento (classificação KDIGO, causas pré/renal/pós-renal, índices
 * urinários, outras causas de NIA, modalidades de TRS) ainda não cobradas
 * no corpus, mas plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

### Indicações de diálise de urgência

- **Indicações clássicas de diálise de urgência na IRA (mnemônico AEIOU):** **A**cidose refratária, **E**letrólitos (hipercalemia refratária/grave), **I**ntoxicação exógena por substância dialisável, **O**verload de volume refratário a diurético, **U**remia sintomática (encefalopatia, pericardite, sangramento urêmico) — qualquer um desses, isoladamente, já justifica indicar TRS.
- **Hipercalemia grave com alterações eletrocardiográficas refratária a tratamento clínico** é indicação de diálise de urgência independente do valor absoluto de creatinina/ureia.
- **Critérios de estadiamento da IRA (KDIGO)** usam variação de creatinina e débito urinário — servem para classificar gravidade, mas as indicações de diálise de urgência independem do estágio numérico quando há complicação refratária. **Ainda não cobrado no corpus:** estágio 1 = creatinina 1,5-1,9x basal (ou aumento ≥0,3 mg/dL em 48h) ou débito urinário <0,5 mL/kg/h por 6-12h; estágio 2 = creatinina 2-2,9x basal ou débito <0,5 mL/kg/h por ≥12h; estágio 3 = creatinina ≥3x basal (ou ≥4,0 mg/dL) ou início de TRS ou débito <0,3 mL/kg/h por ≥24h ou anúria por ≥12h.
- **Classificação etiológica pré-renal/renal (intrínseca)/pós-renal** organiza o raciocínio diagnóstico: pré-renal (hipovolemia, baixo débito cardíaco, vasodilatação sistêmica, AINE/IECA em estado de menor volume efetivo) é a mais comum e potencialmente reversível com correção rápida; pós-renal (obstrução) deve sempre ser excluída com ultrassonografia de vias urinárias antes de assumir causa renal intrínseca.

### Nefrite intersticial aguda

- **Nefrite intersticial aguda (NIA)** por AINE é causa comum e frequentemente subdiagnosticada de IRA — piora da função renal dias a semanas após início do fármaco, muitas vezes sem a tríade clássica completa (febre, rash, eosinofilia).
- **Suspender o agente causador é a medida terapêutica mais importante na NIA medicamentosa** — a maioria dos casos melhora só com isso, sem necessidade de corticoide.
- **Sedimento urinário na NIA:** leucocitúria estéril, podendo haver eosinofilúria (achado sugestivo, mas não obrigatório nem exclusivo) e hematúria discreta.
- **AINEs causam lesão renal por mecanismos duplos:** redução da perfusão renal (inibição de prostaglandinas vasodilatadoras — mecanismo hemodinâmico/pré-renal) e reação de hipersensibilidade tubulointersticial (NIA) — são entidades distintas que podem coexistir no mesmo paciente.
- **Ainda não cobrado no corpus:** outras causas farmacológicas frequentes de NIA além dos AINEs — **betalactâmicos (penicilinas, cefalosporinas), sulfonamidas, inibidores de bomba de prótons, alopurinol, rifampicina e diuréticos** — todos exigem o mesmo raciocínio de suspensão do agente como conduta central.
- **Contraste iodado** é outra causa importante de IRA hospitalar (nefropatia induzida por contraste) — hidratação venosa periprocedimento e uso da menor dose eficaz de contraste são as principais medidas preventivas em pacientes de risco (DRC prévia, diabetes, desidratação).

## 🩺 Quadro clínico

- **IRA pré-renal:** sede, hipotensão, taquicardia, mucosas secas — sinais de hipovolemia/baixo débito, responde à reposição volêmica.
- **NTA estabelecida:** oligúria ou não-oligúria conforme etiologia, sem resposta a volume isolado.
- **NIA medicamentosa:** frequentemente assintomática do ponto de vista renal, achado laboratorial isolado; quando presente, a tríade febre+rash+eosinofilia é minoria.
- **Uremia sintomática** (extrapolação): náuseas/vômitos, prurido, alteração do nível de consciência, atrito pericárdico, sangramento por disfunção plaquetária — sinais que por si só já indicam TRS de urgência.

## 💎 Pearls

- A **tríade clássica da NIA** (febre + rash + eosinofilia) está presente em **menos de 10%** dos casos — não exigi-la para suspeitar do diagnóstico, especialmente com história temporal compatível de uso de AINE.
- **Eosinofilúria** tem sensibilidade e especificidade limitadas para NIA — um resultado negativo não exclui o diagnóstico.
- A **biópsia renal** é reservada para casos de NIA sem melhora após suspensão do fármaco ou quando o diagnóstico permanece incerto, não é necessária na maioria dos casos típicos.
- **Corticoide na NIA medicamentosa** é considerado em casos que não melhoram apenas com a suspensão do agente, não como primeira conduta universal.
- Uma única indicação absoluta (ex.: hipercalemia refratária com alteração de ECG) já basta para indicar TRS de urgência — não é necessário "somar" vários critérios.
- **Ainda não cobrado, mas de alto rendimento:** os **índices urinários** ajudam a diferenciar pré-renal de necrose tubular aguda (NTA) — fração de excreção de sódio (FeNa) <1% sugere pré-renal e >2% sugere NTA; em paciente em uso de diurético, usar a **fração de excreção de ureia (FeUreia)** <35% (pré-renal), pois o diurético invalida a FeNa.
- **Rabdomiólise** é causa importante de IRA intrínseca (mioglobinúria, CPK muito elevada, hipercalemia e hipocalcemia precoces) — tratamento com hidratação vigorosa e correção de distúrbios, sem papel comprovado de alcalinização urinária de rotina segundo evidências mais recentes.
- **Síndrome cardiorrenal** (disfunção cardíaca causando/piorando disfunção renal e vice-versa) é diagnóstico diferencial relevante em paciente com IRA e congestão — o manejo de volume é mais delicado que na IRA isolada.
- **TINU (nefrite tubulointersticial + uveíte)** é forma rara, mas didática, de NIA autoimune/idiopática em jovens, útil como diagnóstico diferencial de NIA sem exposição medicamentosa clara.
- **Dose de fármacos em IRA:** vários antimicrobianos e outros medicamentos de uso comum exigem ajuste de dose/intervalo conforme a função renal estimada — reavaliar continuamente à medida que a função renal muda durante a internação.
- **Pericardite urêmica** é indicação de diálise por si só, e nesse contexto específico a anticoagulação sistêmica plena durante a diálise deve ser evitada/minimizada pelo risco de tamponamento hemorrágico.

## ⚠️ Pitfalls

- **Exigir a tríade completa (febre, rash, eosinofilia) para diagnosticar NIA** — presente numa minoria dos casos; a maioria se apresenta apenas com piora da função renal e leucocitúria estéril.
- **Manter o AINE "só reduzindo a dose"** diante de suspeita de NIA — a conduta correta é suspender completamente o agente.
- **Iniciar corticoide de rotina em toda NIA medicamentosa** antes de dar tempo para a resposta à simples suspensão do fármaco.
- **Adiar indicação de diálise de urgência esperando "creatinina piorar mais"** diante de critério absoluto já presente (hipercalemia refratária com alteração de ECG, acidose grave, edema pulmonar refratário, uremia sintomática).
- **Confundir lesão pré-renal hemodinâmica por AINE com NIA** — mecanismos e evolução diferentes, embora ambos decorram do mesmo fármaco.
- **Não excluir causa pós-renal com ultrassonografia** antes de assumir causa intrínseca em paciente com IRA de etiologia não esclarecida.
- **Ajustar dose de fármacos renalmente excretados de forma incorreta** (ou esquecer de ajustar) durante episódio de IRA, expondo o paciente a toxicidade adicional.
- **Anticoagular plenamente durante diálise em paciente com pericardite urêmica** — risco de tamponamento hemorrágico; usar heparinização mínima/regional nesse cenário específico.
- **Não hidratar adequadamente antes de exame com contraste iodado** em paciente de risco, perdendo a principal medida preventiva de nefropatia induzida por contraste.

## 📝 Como a banca cobra

**Injúria renal aguda aparece em 2 questões (0,94% do corpus)**, uma do EBSERH e uma do ENARE, cobrindo os dois polos do assunto: **quando dialisar** e **uma causa específica e comum de IRA**.

- **EBSERH 2026 Q44** testou diretamente as **indicações de terapia renal substitutiva de urgência**, exigindo reconhecer que critérios como hipercalemia refratária ou acidose grave, isoladamente, já justificam a diálise.
- **ENARE 2025 Q39** trouxe um caso de **nefrite intersticial aguda por anti-inflamatório**, exigindo reconhecer o padrão temporal (uso recente de AINE) e o achado de leucocitúria estéril, sem depender da tríade clássica completa.

## 🧠 Conceito e fisiopatologia

A IRA representa uma queda aguda da taxa de filtração glomerular, com acúmulo de escórias nitrogenadas e desequilíbrio hidroeletrolítico e ácido-base. Quando essas alterações ultrapassam a capacidade de compensação clínica — hipercalemia com risco arrítmico, acidose metabólica grave, sobrecarga volêmica refratária a diurético ou sinais de uremia em órgãos-alvo (pericárdio, sistema nervoso, coagulação) — a diálise deixa de ser opcional e passa a ser medida de suporte vital, independentemente do número absoluto de creatinina.

A **nefrite intersticial aguda** é uma reação de hipersensibilidade tipo tardia (mediada por células T) ao fármaco, gerando infiltrado inflamatório no interstício renal com edema e disfunção tubular — daí a leucocitúria estéril e, por vezes, eosinofilúria. Já a lesão pré-renal por AINE decorre da inibição das prostaglandinas vasodilatadoras que mantêm a perfusão glomerular em estados de menor volume efetivo (idosos, desidratados, uso concomitante de IECA/diurético) — mecanismo puramente hemodinâmico, reversível com a interrupção do fármaco e reposição volêmica, sem componente imunológico.

A **necrose tubular aguda (NTA)**, forma mais comum de IRA intrínseca, decorre de isquemia prolongada ou lesão tóxica direta às células tubulares — perda da capacidade de reabsorção de sódio, o que explica a FeNa elevada em contraste com o estado pré-renal, no qual os túbulos ainda reabsorvem sódio ativamente em resposta à hipoperfusão.

## 🔎 Diagnóstico

- **Indicações de TRS de urgência:** hipercalemia refratária/com alteração de ECG, acidose metabólica grave refratária, sobrecarga de volume refratária a diurético, uremia sintomática (encefalopatia, pericardite, sangramento), intoxicação exógena dialisável.
- **NIA por AINE:** história temporal de uso do fármaco, piora aguda/subaguda da função renal, sedimento urinário com leucocitúria estéril ± eosinofilúria, exclusão de outras causas; biópsia reservada a casos duvidosos ou refratários.
- **Investigação etiológica geral da IRA** (extrapolação): ultrassonografia renal para excluir causa obstrutiva, avaliação volêmica clínica, FeNa/FeUreia para diferenciar pré-renal de NTA, CPK se suspeita de rabdomiólise, sedimento urinário sempre.

## 💊 Tratamento

- **Critério absoluto de TRS presente:** iniciar diálise de urgência sem atraso, independentemente do estágio KDIGO isolado.
- **NIA medicamentosa:** suspender imediatamente o AINE (ou outro agente causador); suporte clínico e monitorização da função renal.
- **NIA sem melhora após suspensão:** considerar corticoterapia e avaliar biópsia renal.
- **Lesão pré-renal por AINE:** suspender o fármaco e otimizar volemia/perfusão renal.
- **Escolha da modalidade de TRS** (extrapolação): hemodiálise intermitente para pacientes hemodinamicamente estáveis; **terapia renal substitutiva contínua (CRRT)** preferida em instabilidade hemodinâmica/UTI, por permitir remoção de volume e solutos de forma mais gradual.
- **Rabdomiólise:** hidratação venosa vigorosa precoce como principal medida para prevenir/atenuar a IRA associada.

## 📚 Referências essenciais

- KDIGO Clinical Practice Guideline for Acute Kidney Injury.
- UpToDate — Acute Interstitial Nephritis: Clinical Manifestations and Diagnosis.
- Diretriz da Sociedade Brasileira de Nefrologia (SBN) sobre Indicações de Terapia Renal Substitutiva na IRA.
`;

export default content.trim();
