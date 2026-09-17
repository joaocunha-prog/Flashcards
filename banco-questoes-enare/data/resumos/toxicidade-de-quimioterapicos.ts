/**
 * Resumo — Oncologia · Toxicidade de quimioterápicos.
 *
 * Assunto de baixa incidência no corpus (1 questão real, cauda longa, fora
 * do corte 80/20): ENARE 2025 Q12 (reação relacionada à infusão de
 * rituximabe em esquema R-CHOP). Cobre em profundidade a reação
 * infusional a anticorpos monoclonais (o mecanismo realmente cobrado) e
 * extrapola, com o mesmo nível de detalhe, as toxicidades órgão-específicas
 * clássicas de quimioterápicos citotóxicos e de terapias-alvo mais cobradas
 * em provas de residência, além da síndrome de lise tumoral.
 */
const content = `
## 🎯 Essencial

- **Reação relacionada à infusão (RRI) é diferente de reação alérgica IgE-mediada clássica** — é liberação de citocinas (síndrome de liberação de citocinas leve) desencadeada pela lise rápida de células-alvo (linfócitos B CD20+, no caso do rituximabe) durante infusão rápida, e não uma hipersensibilidade tipo I verdadeira na maioria dos casos.
- **Fator de risco mais importante para RRI grave: primeira infusão e alta carga tumoral** (muitas células-alvo circulantes/tecido linfoide volumoso) — por isso a RRI é classicamente mais intensa no primeiro ciclo e atenua nos ciclos seguintes.
- **Prevenção padrão antes de rituximabe (e outros monoclonais infusionais): pré-medicação com paracetamol + anti-histamínico (e frequentemente corticoide) cerca de 30 minutos antes**, associada a **velocidade de infusão escalonada** (início lento, aumento gradual) — pular a pré-medicação ou infundir rápido demais é a causa evitável mais comum de RRI sintomática.
- **Quadro típico da RRI:** febre, calafrios, cefaleia, rinite, tosse, broncoespasmo leve, náusea — geralmente nas primeiras horas após o início da infusão, autolimitado, sem foco infeccioso ou alteração de exames complementares.
- **Diferenciar RRI de infecção em paciente neutropênico é o ponto central da armadilha de prova** — RRI cursa com exames normais e resolução rápida sem antibiótico, mas diante de neutropenia é prudente e frequentemente obrigatório iniciar cobertura antibiótica empírica enquanto se aguarda a evolução, já que os dois quadros podem se sobrepor clinicamente no início.

## 💎 Pearls

- Rituximabe é anticorpo monoclonal anti-CD20 — não é quimioterápico citotóxico clássico, mas entra nos protocolos combinados (R-CHOP) e tem perfil de toxicidade próprio (RRI, reativação de hepatite B, leucoencefalopatia multifocal progressiva rara) diferente dos agentes citotóxicos do mesmo esquema.
- **Vincristina** (o "V" do R-CHOP/CHOP) tem toxicidade dose-limitante **neurológica** (neuropatia periférica sensitivo-motora, íleo paralítico, não hematológica) — diferente da maioria dos citotóxicos, cuja toxicidade limitante é medular.
- **Doxorrubicina** (antraciclina) tem toxicidade cardíaca cumulativa dose-dependente (cardiomiopatia dilatada) — monitorar fração de ejeção antes e durante o tratamento; dose cumulativa vitalícia é o principal fator de risco.
- **Ciclofosfamida** causa cistite hemorrágica por acroleína (metabólito tóxico excretado na urina) — previne-se com hidratação vigorosa e mesna (agente uroprotetor que inativa a acroleína na bexiga).
- Reações infusionais tendem a **diminuir de intensidade a cada ciclo subsequente**, à medida que a carga de células-alvo cai — uma reação leve no primeiro ciclo não impede reexposição com pré-medicação reforçada e infusão mais lenta.

## ⚠️ Pitfalls

- Atribuir febre pós-infusão em paciente neutropênico só à RRI sem iniciar investigação/antibiótico empírico — a neutropenia febril é diagnóstico de exclusão só depois de afastada/controlada a possibilidade infecciosa, nunca o contrário.
- Confundir RRI com anafilaxia verdadeira e tratar só com epinefrina/suporte de via aérea sem reconhecer que a maioria dos casos responde a pausa da infusão + anti-histamínico/antitérmico e reinício mais lento.
- Esquecer de rastrear hepatite B (HBsAg/anti-HBc) antes de iniciar rituximabe — reativação de hepatite B é risco reconhecido da depleção de linfócitos B, independentemente de RRI.
- Assumir que toda toxicidade em esquema combinado (como R-CHOP) é do agente mais "notório" — cada droga do esquema tem um órgão-alvo de toxicidade característico, e a pergunta de prova costuma testar exatamente essa atribuição correta.
- Não ajustar a velocidade de infusão nos ciclos seguintes após uma RRI no primeiro ciclo — a conduta correta é retomar com infusão mais lenta e pré-medicação otimizada, não suspender definitivamente a droga por um evento leve/moderado.

## 🩺 Quadro clínico e diagnóstico diferencial

- **Reação relacionada à infusão:** minutos a poucas horas após início da infusão; febre, calafrios, sintomas respiratórios altos (rinite, tosse), cefaleia, náusea — exames laboratoriais e de imagem normais, resolução espontânea ou com suporte em 24-48h.
- **Síndrome de liberação de citocinas mais grave** (mais associada a outras imunoterapias, como anticorpos biespecíficos e terapias com células CAR-T, mas no espectro fisiopatológico da mesma família de reação): hipotensão, hipóxia, disfunção de múltiplos órgãos — graduação por escalas específicas (ASTCT), manejo com suporte hemodinâmico/ventilatório e, em graus mais altos, tocilizumabe (bloqueio de IL-6).
- **Síndrome de lise tumoral:** hiperuricemia, hipercalemia, hiperfosfatemia, hipocalcemia secundária — tipicamente 12-72h após início de quimioterapia em neoplasias de alta carga proliferativa (linfomas de alto grau, leucemias agudas); risco maior com rituximabe associado a quimioterapia em linfoma de alta carga tumoral. Prevenção com hidratação vigorosa e alopurinol ou rasburicase (conforme risco).
- **Toxicidade cardíaca por antraciclina:** insidiosa, dose-cumulativa-dependente, pode se manifestar meses a anos após o tratamento — rastreio com ecocardiograma seriado em protocolos de alto risco.
- **Toxicidade pulmonar por bleomicina:** fibrose pulmonar dose-dependente; atenção especial à **restrição de oxigênio suplementar em alta concentração** durante anestesia/procedimentos em quem já recebeu bleomicina, pelo risco de agravar a lesão pulmonar.

## 💊 Tratamento e manejo

- **RRI leve a moderada:** pausar a infusão, tratar sintomas (antitérmico, anti-histamínico, broncodilatador se broncoespasmo), retomar em velocidade mais lenta após resolução.
- **RRI grave/anafilactoide:** suspender definitivamente naquele ciclo, suporte de via aérea/hemodinâmico, considerar pré-medicação reforçada (incluindo corticoide) e infusão ainda mais lenta em tentativas futuras, ou substituição por biossimilar/alternativa terapêutica conforme protocolo.
- **Neutropenia febril concomitante ou em dúvida diagnóstica:** hemoculturas, antibioticoterapia empírica de amplo espectro sem atraso, independentemente da suspeita de RRI concomitante.
- **Cardiotoxicidade por antraciclina:** limitar dose cumulativa, considerar formulação lipossomal ou cardioprotetor (dexrazoxano) em protocolos de alto risco, suspender/trocar esquema se queda relevante da fração de ejeção.
- **Cistite hemorrágica por ciclofosfamida:** hidratação vigorosa e mesna concomitante são profiláticos padrão, não resgate.

## 📝 Como a banca cobra

**"Toxicidade de quimioterápicos" é um assunto de baixa incidência neste banco — apenas 1 questão real no corpus completo**: ENARE 2025 Q12 (MÉDIA), que pede o raciocínio mais confiável diante de febre, cefaleia, rinite e tosse horas após a infusão de rituximabe em paciente sob R-CHOP, com exames normais e evolução sem intercorrência em 24h — resposta correta: **reação relacionada à infusão rápida do rituximabe (450 mg/h) sem a pré-medicação adequada**, descartando os distratores de pneumocistose, sepse em nadir, hipersensibilidade à vincristina e hiperestimulação ovariana.

Mesmo com baixa representação no corpus, toxicidade de quimioterápicos é tema de alto rendimento em provas de residência porque combina dois eixos muito cobráveis: **reconhecer o perfil de toxicidade específico de cada droga** (fácil de tabelar e decorar) e **diferenciar toxicidade esperada de complicação infecciosa/emergência** em paciente imunossuprimido — o mesmo racional que aparece disfarçado em questões de neutropenia febril e infecções oportunistas em oncologia.

## 📋 Tabela

**Toxicidade órgão-específica dos citotóxicos e agentes-alvo mais cobrados**

| Droga | Toxicidade característica | Profilaxia/manejo |
|---|---|---|
| Rituximabe | Reação relacionada à infusão; reativação de hepatite B | Pré-medicação + infusão escalonada; rastreio de HBV |
| Doxorrubicina (antraciclina) | Cardiotoxicidade cumulativa (cardiomiopatia dilatada) | Limite de dose cumulativa; ecocardiograma seriado |
| Ciclofosfamida | Cistite hemorrágica (acroleína) | Hidratação vigorosa + mesna |
| Vincristina | Neuropatia periférica; íleo paralítico | Ajuste/limite de dose; evitar em neuropatia prévia |
| Cisplatina | Nefrotoxicidade; ototoxicidade; neuropatia periférica | Hidratação vigorosa; monitorar função renal |
| Bleomicina | Fibrose pulmonar dose-dependente | Evitar alta FiO2 em quem já recebeu a droga |
| Taxanos (paclitaxel) | Neuropatia periférica; reação de hipersensibilidade | Pré-medicação com corticoide/anti-histamínico |
| Oxaliplatina | Neuropatia sensitiva aguda desencadeada pelo frio | Orientar evitar frio nos dias pós-infusão |
| 5-fluorouracila/capecitabina | Isquemia coronariana (vasoespasmo); síndrome mão-pé | Suspender se dor torácica; cuidados com a pele |
| Trastuzumabe | Cardiotoxicidade geralmente reversível (não dose-cumulativa) | Ecocardiograma seriado; costuma reverter com suspensão |

## 📚 Referências essenciais

- NCCN Clinical Practice Guidelines in Oncology — Management of Immunotherapy-Related Toxicities / Hematopoietic Growth Factors.
- ASCO Clinical Practice Guideline — Prevention and Management of Infusion Reactions and Cardiac Dysfunction Associated with Chemotherapy.
`;

export default content.trim();
