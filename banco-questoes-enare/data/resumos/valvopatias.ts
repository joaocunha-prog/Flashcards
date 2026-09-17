/**
 * Resumo — Cardiologia · Valvopatias.
 *
 * Reorganizado por entidade clínica (cada valvopatia tem sua própria seção
 * com semiologia, diagnóstico, tratamento, pearl e pitfall juntos) — o
 * assunto reúne doenças valvares distintas cuja diferenciação em prova
 * depende quase inteiramente do reconhecimento fino de ausculta e pulso,
 * que se confundem entre si nos distratores.
 *
 * Cobre a questão real do corpus (ENARE 2026 Q69 — estenose aórtica grave,
 * semiologia completa: pulso parvus et tardus, sopro sistólico ejetivo em
 * foco aórtico com irradiação para carótidas, fenômeno de Gallavardin,
 * quarta bulha, A2 hipofonética). Assunto de baixa incidência no banco (1
 * questão, cauda longa, fora do corte 80/20), mas o restante do resumo é
 * extrapolado com profundidade de alto rendimento cobrindo as principais
 * valvopatias cobráveis em prova: estenose e insuficiência aórtica,
 * estenose e insuficiência mitral, e prolapso da valva mitral.
 */
const content = `
## 🎯 Essencial

- **Cada valvopatia tem uma assinatura semiológica própria** (foco de ausculta, timing do sopro, formato, irradiação e manobras que o modificam) — bancas de residência exploram esses detalhes finos, não apenas "sopro sistólico vs. diastólico".
- **Estenose aórtica grave é a valvopatia mais cobrada em prova**: sopro sistólico ejetivo em crescendo-decrescendo, foco aórtico (2º EIC direito), irradiação para carótidas, pulso *parvus et tardus* (amplitude reduzida e ascenso lento), A2 hipofonética/ausente e quarta bulha (pela hipertrofia ventricular concêntrica compensatória).
- **Manobras dinâmicas ajudam a diferenciar sopros que "parecem" estenose aórtica:** a manobra de Valsalva **reduz** a maioria dos sopros (inclusive o da estenose aórtica) por diminuir o retorno venoso, mas **aumenta** o sopro da cardiomiopatia hipertrófica obstrutiva — diferencial clássico e frequentemente cobrado junto com estenose aórtica.
- **Fenômeno de Gallavardin:** irradiação atípica do sopro de estenose aórtica para o ápice, onde pode soar mais agudo e musical, mimetizando sopro de insuficiência mitral — armadilha clássica de exame físico.
- **Tríade sintomática clássica da estenose aórtica grave sintomática** (angina, síncope/pré-síncope aos esforços, dispneia/insuficiência cardíaca) marca ponto de inflexão prognóstica — uma vez sintomático, o prognóstico sem troca valvar piora abruptamente (sobrevida média de poucos anos), tornando a intervenção (cirúrgica ou TAVI) indicada.

## 🔹 Estenose aórtica

- **Semiologia:** sopro sistólico ejetivo (crescendo-decrescendo), foco aórtico (2º espaço intercostal direito) com irradiação para carótelas/carótidas e, por vezes, para o ápice (Gallavardin); pico mesossistólico tardio quanto mais grave a estenose; A2 hipofonética ou ausente (calcificação valvar reduz a mobilidade); B4 (quarta bulha) por hipertrofia ventricular esquerda concêntrica; pulso *parvus et tardus*; ictus sustentado e propulsivo, deslocado lateralmente em fases avançadas.
- **Etiologia:** calcificação senil (mais comum em idosos), valva aórtica bicúspide congênita (causa mais comum em pacientes mais jovens), doença reumática (associada a acometimento mitral concomitante).
- **Diagnóstico:** ecocardiograma transtorácico — área valvar <1,0 cm² e/ou gradiente médio ≥40 mmHg e/ou velocidade de jato ≥4 m/s definem estenose aórtica grave.
- **Tratamento:** troca valvar (cirúrgica ou transcateter/TAVI) indicada em estenose grave sintomática, ou em assintomática com disfunção de ventrículo esquerdo (fração de ejeção <50%) ou outros critérios de gravidade estrutural — vasodilatadores/diuréticos devem ser usados com cautela pelo risco de hipotensão em ventrículo com pré-carga dependente.
- 💎 **Pearl:** a quarta bulha reflete contração atrial vigorosa contra um ventrículo hipertrofiado e pouco complacente — sua presença reforça a cronicidade e a gravidade da sobrecarga de pressão.
- ⚠️ **Pitfall:** confundir esclerose aórtica (espessamento valvar sem repercussão hemodinâmica significativa, sopro sistólico suave sem irradiação relevante para carótidas e sem os demais achados de gravidade) com estenose aórtica grave — a presença de pulso *parvus et tardus*, A2 hipofonética e B4 é o que distingue gravidade hemodinâmica real de achado incidental benigno.
- 📝 **Como caiu:** ENARE 2026 Q69 — vinheta completa e clássica de estenose aórtica grave, com toda a semiologia característica.

## 🔹 Insuficiência aórtica

- **Semiologia:** sopro diastólico em decrescendo, aspirativo, foco aórtico acessório (3º espaço intercostal esquerdo, borda esternal esquerda), melhor audível com o paciente sentado, inclinado para frente, em expiração forçada; pulso em martelo d'água/Corrigan (ascenso rápido e colapso rápido, amplo); pode haver sopro de Austin-Flint (ruflar diastólico em foco mitral por turbulência do jato regurgitante aórtico atingindo a valva mitral).
- **Sinais periféricos clássicos** (insuficiência aórtica crônica grave): sinal de Musset (balanço da cabeça sincronizado com o pulso), sinal de Quincke (pulsação capilar visível no leito ungueal), sinal de Duroziez (sopro duplo à compressão da artéria femoral), sinal de Traube ("tiro de pistola" na ausculta femoral) — pressão de pulso alargada (sistólica alta, diastólica baixa).
- **Etiologia:** doença da raiz aórtica/dilatação anular (hipertensão crônica, síndrome de Marfan, dissecção aórtica), doença valvar primária (endocardite infecciosa — causa de insuficiência aguda grave —, doença reumática, valva bicúspide).
- **Tratamento:** troca valvar indicada em insuficiência aórtica grave sintomática ou com disfunção/dilatação ventricular esquerda progressiva, mesmo assintomática; vasodilatadores podem ser usados como ponte em pacientes sintomáticos com contraindicação cirúrgica.
- ⚠️ **Pitfall:** confundir os múltiplos sinais periféricos clássicos (Musset, Quincke, Duroziez, Traube) — todos refletem o mesmo mecanismo fisiopatológico (pressão de pulso alargada), não entidades separadas.

## 🔹 Estenose mitral

- **Semiologia:** ruflar diastólico (mais audível em decúbito lateral esquerdo, foco mitral, com a campânula do estetoscópio), estalido de abertura logo após B2 (quanto mais próximo de B2, mais grave a estenose), hiperfonese de B1.
- **Etiologia:** doença reumática é, de longe, a causa mais comum e mais cobrada em prova — história de febre reumática na infância/adolescência é dado relevante na anamnese.
- **Complicações características:** fibrilação atrial (pela dilatação atrial esquerda crônica) com risco tromboembólico elevado, hipertensão pulmonar secundária, hemoptise por ruptura de vasos brônquicos colaterais congestos.
- **Tratamento:** valvoplastia mitral por balão percutânea (primeira escolha quando a anatomia valvar é favorável) ou cirurgia (comissurotomia/troca valvar) em estenose grave sintomática; anticoagulação obrigatória se fibrilação atrial associada.
- 💎 **Pearl:** fácies mitral (rubor malar violáceo) reflete baixo débito cardíaco crônico associado a vasoconstrição cutânea compensatória — achado clássico, hoje menos comum pela redução da doença reumática em países desenvolvidos, mas ainda relevante no Brasil.

## 🔹 Insuficiência mitral

- **Semiologia:** sopro holossistólico (pansistólico), foco mitral, irradiação para axila; B1 pode estar hipofonética; B3 presente em casos crônicos graves por sobrecarga de volume.
- **Etiologia:** degenerativa/mixomatosa (prolapso de valva mitral) é a causa mais comum de insuficiência mitral primária crônica em países desenvolvidos; isquêmica (disfunção/ruptura de músculo papilar pós-infarto — causa de insuficiência mitral **aguda** grave, emergência cardiológica); endocardite infecciosa; doença reumática.
- **Tratamento:** reparo valvar (preferível à troca, quando anatomicamente factível) indicado em insuficiência mitral primária grave sintomática ou com sinais de disfunção/dilatação ventricular esquerda, mesmo assintomática.
- ⚠️ **Pitfall:** não reconhecer insuficiência mitral aguda pós-infarto (ruptura de músculo papilar) como emergência cirúrgica — cursa com edema agudo de pulmão súbito e sopro que pode ser surpreendentemente discreto pela igualização rápida de pressões entre átrio e ventrículo esquerdos.

## 🔹 Prolapso da valva mitral

- **Semiologia:** clique mesossistólico seguido de sopro sistólico tardio em foco mitral — a manobra de Valsalva e a posição ortostática **antecipam** o clique e o sopro (menor volume ventricular, prolapso mais precoce); agachamento **atrasa** o clique/sopro (maior volume ventricular).
- **Perfil clínico:** frequentemente assintomático, achado incidental de ausculta em jovens (mais comum em mulheres); geralmente benigno, mas pode evoluir com insuficiência mitral progressiva relevante em uma minoria dos casos.
- **Conduta:** seguimento clínico/ecocardiográfico periódico na maioria dos casos; intervenção cirúrgica reservada a insuficiência mitral significativa associada.
- 💎 **Pearl:** é a valvopatia cuja ausculta característica mais muda de forma previsível com manobras posturais/dinâmicas — conhecimento frequentemente cobrado em forma de pergunta sobre "o que acontece com o sopro ao levantar/agachar".

## 📋 Tabela

**Diferencial semiológico das principais valvopatias**

| Valvopatia | Timing do sopro | Foco principal | Irradiação | Pulso/achado associado |
|---|---|---|---|---|
| Estenose aórtica | Sistólico ejetivo | Aórtico (2º EIC D) | Carótidas, ápice (Gallavardin) | Parvus et tardus, B4, A2 hipofonética |
| Insuficiência aórtica | Diastólico em decrescendo | Aórtico acessório (3º EIC E) | — | Pulso em martelo d'água, pressão de pulso alargada |
| Estenose mitral | Ruflar diastólico (mesodiastólico) | Mitral (decúbito lateral esquerdo) | — | Estalido de abertura, B1 hiperfonética |
| Insuficiência mitral | Holossistólico | Mitral | Axila | B3 (crônica), B1 hipofonética |
| Prolapso de valva mitral | Sistólico tardio, com clique | Mitral | — | Clique/sopro antecipado por Valsalva/ortostase |

## 📚 Referências essenciais

- ACC/AHA Guideline for the Management of Patients with Valvular Heart Disease.
- ESC/EACTS Guidelines for the Management of Valvular Heart Disease.
`;

export default content.trim();
