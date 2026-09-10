/**
 * Resumo — Geriatria · Imunização do idoso.
 *
 * Cobre o calendário vacinal do idoso no Brasil (Programa Nacional de
 * Imunizações/PNI e recomendações da Sociedade Brasileira de Imunizações,
 * SBIm) em profundidade — a questão real do corpus cobra o pacote de
 * vacinas indicadas em consulta inicial de idosa nunca vacinada após os 50
 * anos, com fatores de risco específicos (convívio com criança pequena,
 * viagem internacional para a África). Assunto de baixa incidência no banco
 * (1 questão), mas imunização do idoso é tema crescente e recorrente em
 * provas de residência de geriatria e clínica médica/medicina de família.
 */
const content = `
## 🎯 Essencial

- **O calendário vacinal do idoso no Brasil segue recomendações do Programa Nacional de Imunizações (PNI/Ministério da Saúde)**, com faixas etárias e imunobiológicos que podem **diferir dos calendários internacionais** (ex.: ACIP/CDC americano) — atenção especial a essas diferenças em prova, já que o corte etário e a disponibilidade de determinada vacina no sistema público brasileiro nem sempre coincidem com o padrão americano.
- **Influenza:** dose anual, para todo idoso (≥60 anos no calendário do PNI), independentemente de comorbidade.
- **Pneumocócicas:** esquema sequencial é a recomendação central para idosos com maior risco/sem vacinação prévia — a lógica de sequenciar uma vacina conjugada (que gera resposta imune T-dependente, com memória) seguida de uma polissacarídica (que amplia a cobertura de sorotipos) é o racional por trás do esquema combinado, e não uma vacina isolada.
- **dTpa (tríplice bacteriana acelular do tipo adulto):** indicada para reforço de proteção contra difteria, tétano e coqueluche — relevante inclusive pelo papel de "estratégia casulo" quando há convívio próximo com lactente/criança pequena ainda incompletamente vacinada, reduzindo o risco de transmissão de coqueluche ao contato de risco.
- **Herpes zoster:** existe tanto a vacina **inativada recombinante** (mais eficaz, inclusive em imunossuprimidos, esquema de duas doses) quanto a **atenuada** (esquema de dose única, contraindicada em imunossuprimidos) — a diferença entre as duas formulações e suas indicações é ponto frequente de confusão em prova.
- **Vacina contra febre amarela em idoso:** decisão individualizada por risco-benefício (risco de eventos adversos graves aumenta com a idade), reservada a quem tem indicação epidemiológica real (residente ou viajante para área de risco/recomendação) — **não deve ser prescrita de forma indiscriminada e automática "independentemente do destino de viagem"**, distratora clássica de prova.
- **Vacina contra o vírus sincicial respiratório (VSR):** incorporada mais recentemente às recomendações de imunização do idoso, voltada à prevenção de doença respiratória grave nessa faixa etária de maior risco.

## 📊 Calendário vacinal do idoso — visão geral

| Vacina | Esquema/observação |
|---|---|
| Influenza | Dose anual |
| Pneumocócica (conjugada + polissacarídica) | Esquema sequencial — conjugada seguida de VPP23 após intervalo definido, em não vacinados previamente |
| dTpa / dT | dTpa como reforço (inclusive por contato com lactente); dT de reforço a cada 10 anos quando esquema básico já completo |
| Herpes zoster | Vacina inativada recombinante (2 doses, preferencial, inclusive em imunossupressão) ou atenuada (dose única, contraindicada se imunossuprimido) |
| Hepatite B | 3 doses em não vacinados/esquema incompleto |
| Vírus sincicial respiratório (VSR) | Indicada conforme recomendação vigente para a faixa etária de maior risco |
| Febre amarela | Individualizada por risco epidemiológico/viagem, ponderando risco-benefício pela idade |
| Tríplice viral (sarampo, caxumba, rubéola) | Avaliar situação vacinal prévia — indicação depende de histórico, não é rotina automática só pelo convívio com criança |
| COVID-19 | Doses de reforço conforme recomendação vigente para o grupo de risco |

## 💎 Pearls

- **Convívio diário com criança pequena** reforça a indicação de **dTpa** (proteção contra coqueluche, estratégia casulo) — não é, por si só, indicação automática de tríplice viral no idoso, que depende do histórico vacinal prévio dele mesmo.
- **Viagem internacional para área endêmica** (ex.: África, dependendo da região) é gatilho para avaliar indicação de **febre amarela** — mas a decisão de vacinar continua sendo individualizada pelo risco-benefício etário, não uma obrigação automática "independentemente do destino".
- **Herpes zoster inativada recombinante** é preferível à atenuada em idosos, especialmente por permitir uso também em imunocomprometidos — mas isso não invalida a atenuada como opção em idosos plenamente imunocompetentes quando a recombinante não estiver disponível.
- Idoso "sem história vacinal conhecida da infância" deve ser tratado, na prática, como **não vacinado** para as vacinas de esquema básico ainda relevantes na vida adulta (ex.: hepatite B, esquema de difteria/tétano), iniciando esquema completo.

## ⚠️ Pitfalls

- **Achar que vacinas estão "contraindicadas em idosos acima de 70 anos, exceto em surto"** — isso é falso como regra geral; a maioria das vacinas recomendadas para idoso não tem limite etário superior, e a decisão é sempre por indicação/risco-benefício individual, não por um corte etário arbitrário de contraindicação.
- **Prescrever febre amarela automaticamente para todo idoso que vai viajar**, sem considerar o destino específico e o risco-benefício individual pela idade.
- **Confundir esquema de pneumocócica isolado (só VPP23 ou só uma conjugada isolada)** com o esquema sequencial recomendado, que combina as duas para ampliar cobertura e qualidade de resposta imune.
- **Usar vacina de herpes zoster atenuada em paciente imunossuprimido** — contraindicada nesse contexto; a inativada recombinante é a opção segura.
- **Ignorar o "convívio com lactente" como gatilho de dTpa**, tratando-o apenas como dado de contexto social sem repercussão na prescrição vacinal.

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus (apenas 1 questão real, ENARE 2026 Q34, classificada como MÉDIA)** — ficou fora do corte 80/20. Ainda assim, imunização do idoso é tema crescente e recorrente em provas de residência de geriatria e clínica médica, sobretudo à medida que o calendário vacinal do idoso se expande e ganha atualizações frequentes (SBIm, PNI), o que aumenta a chance de reaparecer em provas futuras.

- **ENARE 2026 Q34** apresentou uma idosa de 72 anos, hipertensa controlada, sem vacinação após os 50 anos, com dois fatores de risco adicionais no enunciado (convívio diário com neto de 2 anos e viagem internacional planejada para a África), testando o pacote correto de vacinas indicadas na consulta inicial: **influenza, VPC20 dose única, dTpa, vacina contra vírus sincicial respiratório, hepatite B em três doses e herpes zoster inativada em duas doses** (gabarito) — contra distratores que combinavam esquemas incorretos (VPC13 isolada sem sequenciamento, prescrição automática de febre amarela "independentemente do destino", ou a afirmação falsa de que vacinas estariam contraindicadas acima de 70 anos).
- O padrão de cobrança desse assunto costuma exigir reconhecer o **calendário completo aplicável ao caso específico** (não só uma vacina isolada), integrando idade, comorbidade, histórico vacinal prévio e fatores de risco individuais (contato domiciliar, viagem) — exatamente a lógica cobrada nessa questão.

## 📚 Referências essenciais

- Calendário Nacional de Vacinação — Programa Nacional de Imunizações (PNI), Ministério da Saúde, faixa etária do idoso.
- Calendário de Vacinação do Idoso — Sociedade Brasileira de Imunizações (SBIm), atualização 2024/2025.
`;

export default content.trim();
