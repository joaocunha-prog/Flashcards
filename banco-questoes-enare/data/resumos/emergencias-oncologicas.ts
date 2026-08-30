/**
 * Resumo — Oncologia · Emergências oncológicas.
 *
 * Cobre as entidades do assunto no corpus: hipercalcemia maligna,
 * compressão medular metastática, síndrome da veia cava superior,
 * enterocolite neutropênica (tiflite) e dor oncológica refratária com
 * hipercalcemia leve e insuficiência renal. Inclui também extrapolações de
 * alto rendimento (síndrome de lise tumoral, neutropenia febril fora do
 * contexto de tiflite, tamponamento cardíaco neoplásico) ainda não
 * cobradas no corpus, mas plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- **Hipercalcemia da malignidade** é a causa mais comum de hipercalcemia em pacientes internados. Tratamento da forma grave/sintomática: **salina isotônica venosa + calcitonina (ação rápida) + bisfosfonato IV (ação sustentada, começa em 2-4 dias)**.
- **Sinais de alarme em lombalgia que obrigam investigar compressão medular:** dor noturna, refratária, com febre e/ou perda ponderal inexplicada, associada a déficit neurológico progressivo — pedir **RM de urgência**.
- **Compressão medular metastática confirmada:** **dexametasona imediata**, seguida de radioterapia (ou cirurgia descompressiva se instabilidade, déficit rapidamente progressivo ou diagnóstico histológico necessário).
- **Síndrome da veia cava superior:** causa neoplásica mais comum é câncer de pulmão; causas benignas (trombose relacionada a cateter/dispositivo) estão em ascensão. Convulsão nesse contexto sugere **edema cerebral**, mais comum que metástase cerebral isolada.
- **Enterocolite neutropênica (tiflite):** dor em quadrante inferior direito + febre + neutropenia grave, com espessamento de parede cecal e/ou pneumatose na TC — manejo clínico (antibiótico de amplo espectro, repouso intestinal), cirurgia reservada para perfuração/necrose.
- **Dor oncológica refratária:** rotação de opioide (ex.: para fentanil transdérmico) quando há efeitos adversos ou resposta inadequada, associando bisfosfonato para dor óssea e ajustando dose conforme função renal.
- **Ainda não cobrado no corpus, mas candidato natural: síndrome de lise tumoral** — tríade de hipercalemia + hiperfosfatemia + hiperuricemia, com hipocalcemia secundária (pela precipitação de fosfato de cálcio), tipicamente após início de quimioterapia em neoplasias de alta carga tumoral e proliferação rápida (linfomas de alto grau, leucemias agudas). Prevenção com hiper-hidratação e alopurinol (ou rasburicase em alto risco) antes do primeiro ciclo.
- **Neutropenia febril isolada** (sem foco abdominal): febre ≥38,3°C com neutrófilos <500/mm³ é emergência que exige antibioticoterapia empírica de amplo espectro (cobertura antipseudomonas) em até 1 hora, mesmo sem foco definido.

## 💎 Pearls

- A hipercalcemia maligna tem **dois mecanismos principais**: mediada por PTHrp (tumores sólidos, mais comum) e por metástases osteolíticas diretas (mieloma, câncer de mama) — o padrão de PTH/PTHrp ajuda a diferenciar, mas não muda a urgência do tratamento.
- **Hidratação isolada nunca é suficiente** na hipercalcemia grave — reduz mas não normaliza; sempre associar terapia específica (calcitonina + bisfosfonato).
- Na compressão medular, o **corticoide é dado antes mesmo da confirmação por imagem** quando a suspeita clínica é forte — atraso piora desfecho neurológico irreversivelmente.
- **Rotação de opioides exige recálculo de dose equianalgésica**, não é uma troca 1:1 entre fármacos diferentes.
- Bisfosfonatos IV exigem **ajuste ou contraindicação relativa em insuficiência renal significativa** — ácido zoledrônico é mais nefrotóxico que pamidronato em infusão rápida; denosumabe é alternativa que não depende de função renal (mas exige monitorar hipocalcemia).
- Na **síndrome de lise tumoral**, o escore de risco (Cairo-Bishop) orienta se a profilaxia é com alopurinol (baixo/médio risco) ou rasburicase (alto risco) — rasburicase é contraindicada em deficiência de G6PD (risco de hemólise).
- **Tamponamento cardíaco neoplásico** (derrame pericárdico maligno) pode se apresentar de forma insidiosa — dispneia progressiva, turgência jugular, pulso paradoxal; ecocardiograma à beira do leito confirma, pericardiocentese de alívio é a conduta de emergência.
- A febre pode estar **atenuada ou ausente** em neutropenia profunda mesmo com infecção grave estabelecida — qualquer sinal sistêmico sutil em paciente neutropênico deve ser valorizado.

## ⚠️ Pitfalls

- **Tratar hipercalcemia moderada a grave só com hidratação**, sem calcitonina/bisfosfonato — trata parcialmente e recidiva rápido.
- **Aguardar confirmação radiológica completa antes de iniciar dexametasona** em suspeita forte de compressão medular — a demora piora o prognóstico neurológico.
- **Tratar convulsão em síndrome de veia cava superior automaticamente como metástase cerebral** — edema cerebral é etiologia mais comum nesse cenário.
- **Indicar cirurgia de rotina na enterocolite neutropênica** sem sinais de perfuração/necrose — a conduta inicial é clínica.
- **Ignorar a função renal ao escolher/dosar bisfosfonato** — pode precipitar ou agravar lesão renal.
- **Aguardar hemocultura positiva para iniciar antibiótico em neutropenia febril** — o início empírico não pode esperar confirmação microbiológica.
- **Prescrever rasburicase sem rastrear deficiência de G6PD** — risco de hemólise grave.
- **Hidratar agressivamente sem monitorar potássio/fósforo em risco de lise tumoral** — hiper-hidratação isolada não previne o distúrbio eletrolítico sem o alopurinol/rasburicase associado.

## 📝 Como a banca cobra

**Terceiro assunto mais frequente do corpus (7 questões, 3,3%)**, todas do ENARE — nenhuma questão do EBSERH neste recorte. A banca cobra sistematicamente **reconhecimento do quadro + conduta imediata**, quase nunca só o diagnóstico isolado.

- **Hipercalcemia maligna** apareceu 2 vezes (ENARE 2025 Q5 e ENARE 2026 Q1), a segunda associada a provável mieloma múltiplo (lesões líticas, globulina alta) — vale já pensar em investigação de gamopatia monoclonal quando a hipercalcemia vem com esse pacote laboratorial.
- **Compressão medular** apareceu 2 vezes: uma pelo ângulo dos **sinais de alarme** que motivam a investigação (ENARE 2025 Q4) e outra já com o diagnóstico fechado, testando a **conduta terapêutica** (ENARE 2026 Q11) — as duas se complementam.
- **Enterocolite neutropênica** (ENARE 2025 Q48) e **dor refratária com hipercalcemia leve + insuficiência renal** (ENARE 2026 Q32) trazem a camada de ajuste terapêutico em paciente oncológico complexo, com múltiplas comorbidades simultâneas.
- **Síndrome da veia cava superior** (EBSERH 2025 Q32) testou especificamente a ascensão das causas benignas (trombose relacionada a dispositivo) — não assumir automaticamente etiologia neoplásica.

## 🧠 Conceito e fisiopatologia

A hipercalcemia da malignidade ocorre por dois mecanismos principais: secreção tumoral de **PTHrp** (peptídeo relacionado ao PTH, que ativa o mesmo receptor e aumenta reabsorção óssea e renal de cálcio) — o mecanismo mais comum, típico de carcinomas escamosos — ou por **osteólise direta** mediada por citocinas locais liberadas por células tumorais metastáticas no osso (mieloma, câncer de mama). Em ambos, o excesso de cálcio circulante causa poliúria, desidratação e piora da função renal, criando um círculo vicioso que agrava a própria hipercalcemia.

A compressão medular metastática comprime diretamente a medula ou suas raízes por extensão epidural de uma metástase vertebral — o edema vasogênico secundário responde rapidamente a corticoide em altas doses, o que explica por que a dexametasona é dada antes mesmo da confirmação radiológica completa em suspeita clínica forte.

A **síndrome de lise tumoral** decorre da destruição maciça e súbita de células tumorais (espontânea ou, mais comumente, após quimioterapia), liberando conteúdo intracelular — potássio, fósforo e ácidos nucleicos (metabolizados a ácido úrico) — em volume que excede a capacidade de depuração renal, formando cristais que podem precipitar lesão renal aguda obstrutiva.

## 🩺 Quadro clínico

- **Hipercalcemia:** confusão mental, constipação, poliúria, desidratação, letargia — "ossos, pedras, gemidos abdominais e grunhidos psíquicos".
- **Compressão medular:** dor dorsal progressiva, pior à noite/decúbito, fraqueza em membros, alteração esfincteriana, nível sensitivo.
- **Síndrome de veia cava superior:** edema de face/pescoço, turgência jugular, circulação colateral, dispneia, cefaleia.
- **Enterocolite neutropênica:** dor em quadrante inferior direito, febre, diarreia, em paciente neutropênico grave pós-quimioterapia.
- **Síndrome de lise tumoral:** arritmia (por hipercalemia), tetania/parestesias (por hipocalcemia), oligúria (por nefropatia úrica), geralmente 24-72h após início de quimioterapia citorredutora.
- **Tamponamento cardíaco neoplásico:** dispneia progressiva, taquicardia, turgência jugular, hipotensão, pulso paradoxal — tríade de Beck pode estar incompleta.

## 🔎 Diagnóstico

- **Hipercalcemia maligna:** cálcio total/iônico elevado, PTH suprimido (diferencia de hiperparatireoidismo primário, onde o PTH está elevado ou inapropriadamente normal); PTHrp elevado sugere mecanismo humoral; investigar proteinúria de Bence Jones/eletroforese de proteínas se houver suspeita de mieloma (lesões líticas, anemia, insuficiência renal associadas).
- **Compressão medular:** RM de coluna total (não só do nível suspeito — metástases costumam ser multifocais) é o exame de escolha; TC é alternativa se RM contraindicada.
- **Síndrome de veia cava superior:** TC de tórax com contraste define massa mediastinal, trombose associada a cateter e extensão da obstrução.
- **Enterocolite neutropênica:** TC de abdome com espessamento de parede cecal/pneumatose intestinal, em paciente com neutropenia grave confirmada em hemograma.
- **Síndrome de lise tumoral:** eletrólitos (potássio, fósforo, cálcio), ácido úrico e função renal seriados nas primeiras 48-72h após início de quimioterapia em tumores de alto risco.

## 🚨 Gravidade

- **Hipercalcemia:** classificada como leve (<12 mg/dL), moderada (12-14 mg/dL) e grave (>14 mg/dL ou sintomática) — a gravidade sintomática, não só o valor numérico, define a urgência terapêutica.
- **Compressão medular:** déficit motor progressivo ou instalado é emergência cirúrgica/radioterápica absoluta — quanto mais rápida a progressão, pior o prognóstico de recuperação funcional.
- **Síndrome de lise tumoral:** classificação de Cairo-Bishop distingue lise tumoral laboratorial (alterações bioquímicas sem repercussão clínica) de clínica (com lesão renal, arritmia ou convulsão) — a laboratorial já exige monitorização e correção ativa antes de progredir.

## 💊 Tratamento

- **Hipercalcemia grave:** salina isotônica + calcitonina + bisfosfonato IV (ajustado à função renal); denosumabe como alternativa em insuficiência renal significativa.
- **Compressão medular:** dexametasona imediata + radioterapia (ou descompressão cirúrgica conforme instabilidade/déficit).
- **SVC:** tratamento da causa de base; radioterapia é opção, não é primeira escolha universal em todo tipo histológico; trombose por cateter trata-se com anticoagulação e considera remoção do dispositivo.
- **Enterocolite neutropênica:** antibiótico de amplo espectro, suporte, cirurgia reservada para complicação.
- **Dor refratária:** rotação de opioide com recálculo de dose equianalgésica + bisfosfonato para componente ósseo.
- **Lise tumoral:** hiper-hidratação + alopurinol (profilaxia em risco baixo/médio) ou rasburicase (alto risco, exceto deficiência de G6PD); hemodiálise se hipercalemia grave ou lesão renal refratária.
- **Neutropenia febril:** antibiótico empírico de amplo espectro com cobertura antipseudomonas em até 1 hora, independentemente de foco identificado.

## 🔀 Diferencial

- **Hipercalcemia maligna vs. hiperparatireoidismo primário** — PTH suprimido na primeira, elevado/inapropriadamente normal na segunda; ambas podem coexistir em paciente oncológico, mas o padrão de PTH orienta a investigação inicial.
- **Compressão medular metastática vs. abscesso epidural** — ambos cursam com dor dorsal + déficit neurológico progressivo; febre alta e fatores de risco infecciosos (uso de drogas injetáveis, bacteriemia recente, procedimento espinhal) apontam para abscesso, que exige drenagem além de antibiótico.
- **Síndrome de veia cava superior neoplásica vs. trombose relacionada a cateter/dispositivo** — a etiologia benigna vem crescendo em frequência com o uso disseminado de cateteres venosos centrais de longa permanência em pacientes oncológicos, e muda o tratamento (anticoagulação ± remoção do dispositivo, em vez de terapia direcionada ao tumor).
- **Enterocolite neutropênica vs. colite por Clostridioides difficile** — ambas cursam com dor abdominal e diarreia em paciente recém-exposto a quimioterapia/antibiótico; toxina para C. difficile nas fezes ajuda a diferenciar quando o quadro não é tipicamente localizado em ceco/quadrante inferior direito.

## 🔤 Mnemônicos

- **Hipercalcemia — "ossos, pedras, gemidos abdominais e grunhidos psíquicos":** dor óssea, litíase renal, sintomas gastrointestinais (constipação, náusea) e sintomas neuropsiquiátricos (confusão, letargia, depressão).
- **Síndrome de lise tumoral — tétrade metabólica:** hiper**c**alemia + hiper**f**osfatemia + hiper**u**ricemia + hipo**c**alcemia secundária — os quatro distúrbios que se instalam juntos após a lise celular maciça (fósforo liberado se liga ao cálcio circulante, consumindo-o).

## 📚 Referências essenciais

- NCCN Guidelines — Management of Immunotherapy-Related Toxicities e Oncologic Emergencies.
- ESMO Clinical Practice Guidelines — Malignant Spinal Cord Compression e Management of Febrile Neutropenia.
- ASCO Guideline — Bone-Modifying Agents in Metastatic Cancer.
- Cairo-Bishop Consensus — Definition and Classification of Tumor Lysis Syndrome.
`;

export default content.trim();
