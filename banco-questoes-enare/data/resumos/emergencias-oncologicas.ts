/**
 * Resumo — Oncologia · Emergências oncológicas.
 *
 * Reorganizado por entidade clínica (cada emergência tem sua própria seção
 * com quando suspeitar/quadro, diagnóstico, gravidade, tratamento, pearl e
 * pitfall juntos) — antes esse conteúdo estava picado entre seções
 * genéricas de tipo, misturando hipercalcemia, compressão medular, SVC e
 * tiflite no mesmo bloco de "Tratamento" ou "Diagnóstico".
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

- A banca cobra sistematicamente **reconhecimento do quadro + conduta imediata**, quase nunca só o diagnóstico isolado — cada entidade abaixo tem uma ação de emergência específica, não intercambiável.
- **Hipercalcemia da malignidade** é a causa mais comum de hipercalcemia em pacientes internados; **compressão medular** e **SVC** são emergências estruturais tempo-dependentes; **tiflite** e **neutropenia febril** são emergências infecciosas ligadas à imunossupressão do tratamento oncológico.
- A gravidade **sintomática**, não só o valor numérico de um exame, é o que define a urgência em quase todas as entidades deste assunto (hipercalcemia, síndrome de lise tumoral).

## 📝 Como a banca cobra

**Terceiro assunto mais frequente do corpus (7 questões, 3,3%)**, todas do ENARE — nenhuma questão do EBSERH neste recorte.

- **Hipercalcemia maligna** apareceu 2 vezes (ENARE 2025 Q5 e ENARE 2026 Q1), a segunda associada a provável mieloma múltiplo (lesões líticas, globulina alta) — vale já pensar em investigação de gamopatia monoclonal quando a hipercalcemia vem com esse pacote laboratorial.
- **Compressão medular** apareceu 2 vezes: pelo ângulo dos **sinais de alarme** que motivam a investigação (ENARE 2025 Q4) e já com o diagnóstico fechado, testando a **conduta terapêutica** (ENARE 2026 Q11).
- **Enterocolite neutropênica** (ENARE 2025 Q48) e **dor refratária com hipercalcemia leve + insuficiência renal** (ENARE 2026 Q32) trazem a camada de ajuste terapêutico em paciente oncológico complexo com múltiplas comorbidades simultâneas.
- **Síndrome da veia cava superior** (EBSERH 2025 Q32) testou especificamente a ascensão das causas benignas (trombose relacionada a dispositivo) — não assumir automaticamente etiologia neoplásica.
- **Síndrome de lise tumoral e tamponamento cardíaco neoplásico ainda não foram cobrados no corpus** — são as extrapolações de maior probabilidade dentro deste assunto, dado o padrão histórico de cobrar emergências oncológicas pouco exploradas.

## 🧠 Conceito e fisiopatologia

As emergências oncológicas compartilham um padrão: uma alteração local (compressão física, obstrução vascular, invasão intestinal) ou sistêmica (liberação humoral, lise celular maciça) rompe rapidamente um equilíbrio que o organismo não consegue compensar a tempo — daí a exigência de conduta imediata, muitas vezes antes de confirmação completa por imagem/laboratório. A hipercalcemia maligna ocorre por secreção de **PTHrp** (mecanismo humoral, mais comum, ativa o mesmo receptor do PTH) ou por **osteólise direta** mediada por citocinas de metástases ósseas; em ambos, o excesso de cálcio circulante causa poliúria e desidratação, criando um círculo vicioso que agrava a própria hipercalcemia. A compressão medular metastática comprime diretamente a medula por extensão epidural de metástase vertebral, com edema vasogênico que responde rapidamente a corticoide.

## 🔹 Hipercalcemia maligna

- **Quando suspeitar:** confusão mental, constipação, poliúria, desidratação, letargia ("ossos, pedras, gemidos abdominais e grunhidos psíquicos") em paciente oncológico — cálcio elevado costuma ser achado incidental que precede o reconhecimento clínico.
- **Mecanismo:** mediada por **PTHrp** (tumores sólidos, mais comum — carcinomas escamosos de pulmão/cabeça e pescoço) ou por **osteólise direta** (mieloma múltiplo, câncer de mama) — o padrão de PTH ajuda a diferenciar, mas não muda a urgência do tratamento.
- **Gravidade:** leve (<12 mg/dL), moderada (12-14 mg/dL) e grave (>14 mg/dL ou sintomática, independentemente do valor absoluto).
- **Diagnóstico:** cálcio total/iônico elevado, **PTH suprimido** (diferencia de hiperparatireoidismo primário, onde o PTH está elevado ou inapropriadamente normal); PTHrp elevado sugere mecanismo humoral. Cálcio + lesões líticas + anemia + insuficiência renal → investigar mieloma (eletroforese de proteínas, cadeias leves livres).
- **Tratamento:** **salina isotônica venosa + calcitonina (ação rápida) + bisfosfonato IV (ação sustentada, começa em 2-4 dias)**; hidratação isolada nunca é suficiente — reduz mas não normaliza. Denosumabe é alternativa em insuficiência renal significativa, pois não depende de função renal (mas exige monitorar hipocalcemia, sobretudo se houver deficiência de vitamina D associada).
- 💎 **Pearl:** ácido zoledrônico é mais nefrotóxico que pamidronato em infusão rápida — ajustar velocidade de infusão ou trocar o bisfosfonato conforme função renal, não simplesmente evitar a classe inteira.
- ⚠️ **Pitfall:** tratar hipercalcemia moderada a grave só com hidratação, sem calcitonina/bisfosfonato — trata parcialmente e recidiva rápido.
- 📝 **Como caiu:** ENARE 2025 Q5 · ENARE 2026 Q1 (associada a provável mieloma).

## 🔹 Compressão medular metastática

- **Quando suspeitar:** dor dorsal progressiva, pior à noite/decúbito, com sinais de alarme — dor noturna refratária, febre e/ou perda ponderal inexplicada, fraqueza em membros, alteração esfincteriana, nível sensitivo — que obrigam investigar com **RM de urgência**.
- **Diagnóstico:** RM de **coluna total** (não só do nível suspeito — metástases costumam ser multifocais) é o exame de escolha; TC é alternativa se RM contraindicada.
- **Tratamento:** **dexametasona imediata**, mesmo antes da confirmação radiológica completa em suspeita clínica forte, seguida de radioterapia (ou cirurgia descompressiva se instabilidade, déficit rapidamente progressivo ou necessidade de diagnóstico histológico).
- 💎 **Pearl:** o corticoide é dado antes mesmo da confirmação por imagem quando a suspeita clínica é forte — atraso piora desfecho neurológico de forma irreversível; déficit motor progressivo ou instalado é emergência absoluta, quanto mais rápida a progressão, pior o prognóstico de recuperação funcional.
- ⚠️ **Pitfall:** aguardar confirmação radiológica completa antes de iniciar dexametasona em suspeita forte — a demora piora o prognóstico neurológico.
- 🔀 **Diferencial:** abscesso epidural cursa com dor dorsal + déficit progressivo semelhante, mas com febre alta e fatores de risco infecciosos (uso de drogas injetáveis, bacteriemia recente, procedimento espinhal) — exige drenagem além de antibiótico, não corticoide isolado.
- 📝 **Como caiu:** ENARE 2025 Q4 (sinais de alarme) · ENARE 2026 Q11 (conduta terapêutica).

## 🔹 Síndrome da veia cava superior

- **Quando suspeitar:** edema de face/pescoço, turgência jugular, circulação colateral, dispneia, cefaleia — causa neoplásica mais comum é câncer de pulmão, mas **causas benignas (trombose relacionada a cateter/dispositivo) estão em ascensão** com o uso disseminado de cateteres de longa permanência em pacientes oncológicos.
- **Diagnóstico:** TC de tórax com contraste define massa mediastinal, trombose associada a cateter e extensão da obstrução.
- **Tratamento:** da causa de base — radioterapia é opção, não é primeira escolha universal em todo tipo histológico; trombose por cateter trata-se com anticoagulação e considera remoção do dispositivo, não terapia direcionada ao tumor.
- 💎 **Pearl:** convulsão nesse contexto sugere **edema cerebral** (mais comum que metástase cerebral isolada) — não assumir automaticamente disseminação intracraniana.
- ⚠️ **Pitfall:** tratar convulsão em SVC automaticamente como metástase cerebral, ou assumir toda SVC como neoplásica sem considerar trombose por cateter.
- 📝 **Como caiu:** EBSERH 2025 Q32 — causas benignas emergentes.

## 🔹 Enterocolite neutropênica (tiflite)

- **Quando suspeitar:** dor em quadrante inferior direito + febre + neutropenia grave, geralmente pós-quimioterapia.
- **Diagnóstico:** TC de abdome com espessamento de parede cecal e/ou pneumatose intestinal.
- **Tratamento:** manejo **clínico** (antibiótico de amplo espectro, repouso intestinal); cirurgia reservada para perfuração/necrose.
- 🔀 **Diferencial:** colite por *Clostridioides difficile* também cursa com dor abdominal e diarreia em paciente recém-exposto a quimioterapia/antibiótico — toxina nas fezes ajuda a diferenciar quando o quadro não é tipicamente localizado em ceco/quadrante inferior direito.
- ⚠️ **Pitfall:** indicar cirurgia de rotina sem sinais de perfuração/necrose — a conduta inicial é clínica.
- 📝 **Como caiu:** ENARE 2025 Q48.

## 🔹 Dor oncológica refratária

- **Conduta:** rotação de opioide (ex.: para fentanil transdérmico) quando há efeitos adversos ou resposta inadequada, com **recálculo de dose equianalgésica** — nunca troca 1:1 entre fármacos diferentes; associar bisfosfonato para dor de componente ósseo, ajustando dose conforme função renal.
- **Contexto combinado:** quando surge junto com hipercalcemia leve e insuficiência renal, o ajuste de opioide (evitar acúmulo de metabólitos renais, sobretudo morfina) e a decisão sobre bisfosfonato (nefrotoxicidade) precisam ser resolvidos simultaneamente, não em sequência isolada.
- ⚠️ **Pitfall:** ignorar a função renal ao escolher/dosar bisfosfonato ou opioide — pode precipitar ou agravar lesão renal e acúmulo tóxico de metabólitos.
- 📝 **Como caiu:** ENARE 2026 Q32.

## 🔹 Síndrome de lise tumoral

- **Quando suspeitar:** 24-72h após início de quimioterapia citorredutora em neoplasia de alta carga tumoral e proliferação rápida (linfomas de alto grau, leucemias agudas), com arritmia (hipercalemia), tetania/parestesias (hipocalcemia) e oligúria (nefropatia úrica).
- **Mecanismo:** destruição maciça de células tumorais libera potássio, fósforo e ácidos nucleicos (metabolizados a ácido úrico), excedendo a capacidade de depuração renal e precipitando cristais que causam lesão renal aguda obstrutiva; o fósforo liberado se liga ao cálcio circulante, causando hipocalcemia secundária.
- **Gravidade:** classificação de **Cairo-Bishop** distingue lise tumoral **laboratorial** (alterações bioquímicas sem repercussão clínica, mas já exige monitorização e correção ativa) de **clínica** (com lesão renal, arritmia ou convulsão).
- **Tratamento/prevenção:** hiper-hidratação + **alopurinol** (profilaxia em risco baixo/médio, segundo o escore de Cairo-Bishop) ou **rasburicase** (alto risco, **contraindicada em deficiência de G6PD** pelo risco de hemólise); hemodiálise se hipercalemia grave ou lesão renal refratária.
- ⚠️ **Pitfall:** hidratar agressivamente sem monitorar potássio/fósforo, ou prescrever rasburicase sem rastrear G6PD — risco de hemólise grave.
- 📝 **Como caiu:** ainda não cobrado no corpus — candidato natural de alto rendimento.

## 🔹 Neutropenia febril

- **Quando suspeitar:** febre ≥38,3°C (ou ≥38°C sustentada por 1h) com neutrófilos <500/mm³, mesmo **sem foco definido** — a febre pode estar atenuada ou ausente em neutropenia muito profunda apesar de infecção grave estabelecida.
- **Tratamento:** antibioticoterapia empírica de amplo espectro com **cobertura antipseudomonas**, iniciada em até **1 hora**, independentemente de hemocultura ou foco identificados.
- ⚠️ **Pitfall:** aguardar hemocultura positiva para iniciar antibiótico — o início empírico não pode esperar confirmação microbiológica.
- 📝 **Como caiu:** ainda não cobrado no corpus isoladamente (a tiflite, ENARE 2025 Q48, é uma causa específica de neutropenia febril com foco abdominal).

## 🔹 Tamponamento cardíaco neoplásico

- **Quando suspeitar:** derrame pericárdico maligno de instalação insidiosa — dispneia progressiva, turgência jugular, taquicardia, hipotensão, pulso paradoxal; a tríade de Beck pode estar incompleta.
- **Diagnóstico:** ecocardiograma à beira do leito confirma colapso diastólico de câmaras direitas.
- **Tratamento:** pericardiocentese de alívio é a conduta de emergência; janela pericárdica cirúrgica em recidiva.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔤 Mnemônicos

- **Hipercalcemia — "ossos, pedras, gemidos abdominais e grunhidos psíquicos":** dor óssea, litíase renal, sintomas gastrointestinais (constipação, náusea) e sintomas neuropsiquiátricos (confusão, letargia, depressão).
- **Síndrome de lise tumoral — tétrade metabólica:** hiper**c**alemia + hiper**f**osfatemia + hiper**u**ricemia + hipo**c**alcemia secundária.

## 📚 Referências essenciais

- NCCN Guidelines — Management of Immunotherapy-Related Toxicities e Oncologic Emergencies.
- ESMO Clinical Practice Guidelines — Malignant Spinal Cord Compression e Management of Febrile Neutropenia.
- ASCO Guideline — Bone-Modifying Agents in Metastatic Cancer.
- Cairo-Bishop Consensus — Definition and Classification of Tumor Lysis Syndrome.
`;

export default content.trim();
