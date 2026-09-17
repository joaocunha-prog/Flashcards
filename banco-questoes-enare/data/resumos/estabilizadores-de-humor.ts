/**
 * Resumo — Psiquiatria · Estabilizadores de humor.
 *
 * Reorganizado por entidade/fármaco (cada estabilizador de humor tem sua
 * própria seção com mecanismo, indicações, monitorização e toxicidade
 * clássica juntos) — o assunto reúne fármacos com perfis de efeito adverso
 * bastante distintos entre si, que são justamente o alvo mais cobrado em
 * prova (qual estabilizador causa qual toxicidade específica).
 *
 * Cobre a questão real do corpus (ENARE 2026 Q76 — titulação lenta de
 * lamotrigina para evitar síndrome de Stevens-Johnson). Assunto de baixa
 * incidência no banco (1 questão, cauda longa, fora do corte 80/20), mas o
 * restante do resumo é extrapolado com profundidade de alto rendimento
 * cobrindo os quatro principais estabilizadores de humor: lítio, valproato,
 * carbamazepina e lamotrigina.
 */
const content = `
## 🎯 Essencial

- **Cada estabilizador de humor tem uma toxicidade "de assinatura" que a banca adora testar isoladamente:** lítio → nefrogênica/tireoidiana/neurotoxicidade dose-dependente; valproato → hepatotoxicidade/pancreatite/teratogenicidade (defeito de tubo neural); carbamazepina → agranulocitose/hiponatremia/indução enzimática; lamotrigina → rash cutâneo grave (síndrome de Stevens-Johnson/necrólise epidérmica tóxica).
- **A titulação lenta da lamotrigina não é uma recomendação genérica de "cautela" — é a medida específica que reduz o risco de rash cutâneo grave**, incluindo síndrome de Stevens-Johnson. O risco de rash é maior com escalonamento rápido de dose e com uso concomitante de valproato (que inibe o metabolismo da lamotrigina, dobrando sua meia-vida).
- **Lítio continua sendo o padrão-ouro para transtorno bipolar**, com o melhor perfil de evidência para **redução de risco de suicídio** entre todos os estabilizadores — diferencial importante frente aos demais, que não têm essa evidência específica.
- **Ácido valproico (valproato) é teratogênico** e deve ser evitado em mulheres em idade fértil sem contracepção eficaz, pelo risco de defeito de fechamento de tubo neural e outras malformações — é o estabilizador de humor com maior risco teratogênico documentado da classe.
- **Todos os quatro fármacos exigem monitorização laboratorial específica** — lítio (litemia, função renal, TSH), valproato (função hepática, plaquetas, amilase/lipase se sintomas sugestivos), carbamazepina (hemograma, sódio, função hepática), lamotrigina (não exige nível sérico de rotina, mas exige vigilância clínica cutânea ativa, sobretudo nas primeiras 8 semanas).

## 💎 Pearls

- **Janela terapêutica estreita do lítio** (0,6-1,2 mEq/L para manutenção, podendo chegar a 1,5 mEq/L em fase aguda de mania) exige dosagem periódica de litemia — sinais precoces de intoxicação incluem tremor grosseiro, ataxia, disartria, confusão, evoluindo para convulsão e coma em intoxicação grave.
- **Interações que aumentam litemia e precipitam toxicidade:** diuréticos tiazídicos, IECA/BRA, AINEs — todos reduzem a depuração renal de lítio; desidratação e restrição sódica também elevam o risco.
- **Diabetes insipidus nefrogênico** é a toxicidade renal clássica do lítio (poliúria/polidipsia por resistência tubular ao ADH), diferente de lesão renal crônica progressiva (que também pode ocorrer com uso prolongado, mas é achado tardio).
- **Hipotireoidismo é o efeito endócrino mais comum do lítio** (inibe a liberação de hormônio tireoidiano) — monitorização periódica de TSH é obrigatória; hiperparatireoidismo/hipercalcemia também pode ocorrer, menos frequentemente lembrado em prova.
- **Carbamazepina é um potente indutor enzimático (CYP3A4)**, reduzindo a eficácia de diversas medicações metabolizadas pela mesma via — incluindo **contraceptivos hormonais orais**, o que é frequentemente cobrado como pegadinha em pacientes em idade fértil.
- **Síndrome de secreção inadequada de ADH (SIADH) com hiponatremia** é efeito adverso relativamente comum da carbamazepina (e também da oxcarbazepina), exigindo monitorização de sódio sérico, especialmente em idosos.
- **Valproato pode causar hiperamonemia mesmo sem elevação franca de transaminases** — encefalopatia hiperamonêmica induzida por valproato é diagnóstico diferencial importante em paciente com rebaixamento do nível de consciência em uso da droga, mesmo com função hepática aparentemente normal.
- **Risco de rash com lamotrigina é maior nas primeiras 8 semanas de tratamento** e aumenta significativamente se a titulação for rápida ou se houver associação com valproato (que inibe a glicuronidação da lamotrigina, exigindo ajuste de dose ainda mais lento e conservador nessa combinação).

## ⚠️ Pitfalls

- **Escalonar a dose de lamotrigina rapidamente "para acelerar a resposta clínica"** — é exatamente o erro que aumenta o risco de rash grave/Stevens-Johnson; a titulação deve seguir cronograma padronizado de semanas, mais lento ainda se associada a valproato.
- **Confundir intoxicação por lítio com efeito adverso leve esperado** (tremor fino, poliúria discreta, ganho de peso são esperados em uso crônico) — tremor grosseiro, ataxia e confusão mental são sinais de intoxicação que exigem dosagem urgente de litemia e conduta ativa.
- **Prescrever valproato em mulher em idade fértil sem discutir contracepção e risco teratogênico** — decisão que deve ser sempre compartilhada e documentada, dado o risco bem estabelecido de malformação fetal.
- **Não solicitar hemograma basal e de seguimento com carbamazepina** — o risco de agranulocitose e anemia aplásica, embora raro, exige monitorização hematológica periódica, especialmente no início do tratamento.
- **Assumir que todo estabilizador de humor tem o mesmo perfil de segurança** — a escolha do fármaco deve considerar o perfil de efeitos adversos específico de cada um frente às comorbidades e ao perfil de risco do paciente (ex.: evitar valproato em mulher em idade fértil sem contracepção; cautela redobrada com lítio em nefropatia; cautela com carbamazepina em quem usa contraceptivo hormonal).

## 📝 Como a banca cobra

**Estabilizadores de humor é um assunto de baixa incidência no corpus — apenas 1 questão registrada** (ENARE 2026 Q76, classificada como MÉDIA), perguntando diretamente qual efeito adverso grave a titulação lenta da lamotrigina busca prevenir — resposta correta síndrome de Stevens-Johnson, entre distratores que testavam outros efeitos adversos de fármacos psiquiátricos em geral (agitação, vertigem/náusea, crise hipertensiva, tireotoxicose apática) que não são específicos da lamotrigina.

Apesar de só ter aparecido uma vez no banco até agora, é um tema **de altíssimo rendimento em provas de residência médica**, porque o formato "associe o fármaco ao seu efeito adverso característico" é um dos mais recorrentes em farmacologia psiquiátrica — vale a pena memorizar a toxicidade de assinatura de cada um dos quatro estabilizadores de humor principais (lítio, valproato, carbamazepina, lamotrigina), não apenas da lamotrigina isoladamente.

## 🧠 Conceito

Os estabilizadores de humor formam um grupo farmacologicamente heterogêneo (um sal — lítio — e três anticonvulsivantes com mecanismos distintos) unificados pela indicação clínica comum: tratamento e profilaxia de episódios de humor no transtorno bipolar (mania, hipomania, depressão bipolar e manutenção). Essa heterogeneidade farmacológica é exatamente o motivo pelo qual cada fármaco carrega um perfil de toxicidade tão diferente dos demais — não compartilham mecanismo de ação, então não compartilham mecanismo de efeito adverso.

## 🔹 Lítio

- **Mecanismo:** não totalmente elucidado; envolve modulação de vias de segundo mensageiro (inositol, GSK-3β) e estabilização da neurotransmissão.
- **Indicações:** tratamento agudo da mania, profilaxia de episódios (maníacos e depressivos) no transtorno bipolar, potencialização de antidepressivo em depressão resistente; **único estabilizador com evidência robusta de redução de risco de suicídio**.
- **Monitorização:** litemia periódica (janela terapêutica estreita), função renal, TSH, cálcio.
- **Toxicidade:** diabetes insipidus nefrogênico, hipotireoidismo, tremor (fino em uso crônico, grosseiro em intoxicação), ganho de peso, e em intoxicação aguda — ataxia, disartria, confusão, convulsão, coma; risco aumentado por desidratação, uso de diuréticos/IECA/BRA/AINEs.
- 📝 **Como caiu:** não cobrado diretamente no corpus, mas é a referência-padrão de comparação da classe.

## 🔹 Valproato (ácido valproico/divalproato de sódio)

- **Mecanismo:** aumento da neurotransmissão gabaérgica e bloqueio de canais de sódio dependentes de voltagem.
- **Indicações:** tratamento agudo da mania (eficácia comparável ao lítio), profilaxia de recorrência; também anticonvulsivante de amplo espectro.
- **Monitorização:** função hepática, hemograma (plaquetopenia), amônia sérica se sintomas neurológicos inexplicados.
- **Toxicidade:** hepatotoxicidade (potencialmente grave, sobretudo em crianças pequenas), pancreatite aguda, trombocitopenia, ganho de peso, alopecia, tremor, hiperamonemia (mesmo sem elevação de transaminases) e — o mais grave em termos de saúde pública — **teratogenicidade** (defeito de fechamento de tubo neural e outras malformações), contraindicando uso em mulheres em idade fértil sem contracepção eficaz.
- 📝 **Como caiu:** não cobrado diretamente no corpus.

## 🔹 Carbamazepina

- **Mecanismo:** bloqueio de canais de sódio dependentes de voltagem, estabilizando membranas neuronais hiperexcitáveis.
- **Indicações:** tratamento agudo da mania, profilaxia (segunda linha frente a lítio/valproato pelo perfil de interação medicamentosa mais complexo).
- **Monitorização:** hemograma completo, sódio sérico, função hepática — sobretudo no início do tratamento.
- **Toxicidade:** agranulocitose e anemia aplásica (raras, mas graves), SIADH com hiponatremia, hepatotoxicidade, reações cutâneas (incluindo risco de Stevens-Johnson, maior em populações com determinados alelos HLA — HLA-B\\*1502, mais relevante em população do leste asiático), **forte indução enzimática (CYP3A4)** reduzindo eficácia de diversas medicações concomitantes, incluindo contraceptivos hormonais orais.
- 📝 **Como caiu:** citada como classe comparativa (não como resposta) na questão real de lamotrigina (ENARE 2026 Q76).

## 🔹 Lamotrigina

- **Mecanismo:** bloqueio de canais de sódio dependentes de voltagem, reduzindo liberação de glutamato.
- **Indicações:** profilaxia de episódios depressivos no transtorno bipolar (perfil de eficácia mais voltado à prevenção de depressão do que de mania) — **não é eficaz para tratamento agudo de mania**, diferencial importante frente aos demais estabilizadores.
- **Monitorização:** não exige nível sérico de rotina; exige **vigilância clínica cutânea ativa** durante a titulação.
- **Toxicidade:** rash cutâneo é o efeito adverso mais temido — pode evoluir para **síndrome de Stevens-Johnson** ou necrólise epidérmica tóxica, sobretudo com escalonamento rápido de dose ou em associação com valproato (que inibe a glicuronidação hepática da lamotrigina, dobrando sua concentração/meia-vida).
- **Titulação:** deve ser sempre lenta e gradual, seguindo cronograma padronizado ao longo de várias semanas — mais lenta ainda quando associada a valproato — exatamente a medida de segurança que reduz o risco de reação cutânea grave.
- 💎 **Pearl:** qualquer rash cutâneo durante titulação de lamotrigina deve motivar suspensão imediata da droga até avaliação — não se deve simplesmente "reduzir a dose e observar".
- 📝 **Como caiu:** ENARE 2026 Q76 — pergunta direta sobre o motivo da titulação lenta (prevenção de síndrome de Stevens-Johnson).

## 📋 Tabela

**Toxicidade de assinatura dos principais estabilizadores de humor**

| Fármaco | Toxicidade de assinatura | Monitorização-chave |
|---|---|---|
| Lítio | Diabetes insipidus nefrogênico, hipotireoidismo, neurotoxicidade dose-dependente | Litemia, função renal, TSH |
| Valproato | Hepatotoxicidade, pancreatite, teratogenicidade | Função hepática, plaquetas |
| Carbamazepina | Agranulocitose, SIADH/hiponatremia, indução enzimática | Hemograma, sódio |
| Lamotrigina | Rash cutâneo grave / Stevens-Johnson | Vigilância clínica cutânea, titulação lenta |

## 📚 Referências essenciais

- APA — Practice Guideline for the Treatment of Patients with Bipolar Disorder.
- CANMAT/ISBD Guidelines for the Management of Patients with Bipolar Disorder.
`;

export default content.trim();
