/**
 * Resumo — Psiquiatria · Transtornos alimentares.
 *
 * Reorganizado por entidade clínica (cada transtorno alimentar tem sua
 * própria seção com quadro clínico, diagnóstico, tratamento, pearl e
 * pitfall juntos) — o assunto reúne diagnósticos distintos do DSM-5 que se
 * confundem entre si nos distratores de prova (anorexia nervosa, bulimia
 * nervosa, transtorno de compulsão alimentar periódica e ARFID), e a
 * diferenciação exige comparar critérios lado a lado.
 *
 * Cobre a questão real do corpus (ENARE 2026 Q53 — transtorno de ingestão
 * alimentar evitativo-restritivo, ARFID, em paciente adulto com evitação
 * alimentar por sintomas gastrointestinais e sensibilidade a texturas, sem
 * alteração de imagem corporal). Assunto de baixa incidência no banco (1
 * questão, cauda longa, fora do corte 80/20), mas o restante do resumo é
 * extrapolado com profundidade de alto rendimento cobrindo todo o espectro
 * de transtornos alimentares do DSM-5.
 */
const content = `
## 🎯 Essencial

- **O critério que mais separa ARFID de anorexia nervosa é a ausência de perturbação da imagem corporal e de medo de ganhar peso.** No ARFID, a restrição alimentar decorre de desinteresse por comida, sensibilidade sensorial (textura, cheiro, aparência) ou medo de consequências aversivas (engasgar, vomitar, dor abdominal) — nunca do desejo de emagrecer.
- **Anorexia nervosa** exige a tríade: restrição calórica com peso significativamente baixo, medo intenso de ganhar peso (ou comportamento persistente que o impede, mesmo com peso baixo) e perturbação da percepção do próprio peso/forma corporal (ou negação da gravidade do baixo peso).
- **Bulimia nervosa** exige episódios recorrentes de compulsão alimentar **seguidos de comportamento compensatório inadequado** (vômito autoinduzido, laxantes/diuréticos, jejum, exercício excessivo) — sem os dois elementos juntos (compulsão + compensação), o diagnóstico não se sustenta.
- **Transtorno de compulsão alimentar periódica (TCAP/binge eating disorder)** tem episódios de compulsão alimentar recorrentes, mas **sem** comportamento compensatório regular — é o transtorno alimentar mais associado a sobrepeso/obesidade.
- **Nenhum transtorno alimentar do DSM-5 exige explicação puramente "física"** — sempre que sintomas gastrointestinais persistentes levam à restrição alimentar progressiva sem doença orgânica que explique a magnitude do quadro, e sem alteração de imagem corporal, pensar em ARFID antes de exaurir a investigação gastroenterológica repetidamente.

## 📝 Como a banca cobra

**Transtornos alimentares é um assunto de baixa incidência no corpus — apenas 1 questão registrada** (ENARE 2026 Q53, classificada como FÁCIL), com vinheta clássica de ARFID: paciente adulto com evitação alimentar progressiva por sintomas dispépticos e sensibilidade a texturas, perda ponderal significativa (IMC 18 kg/m²), investigação gastroenterológica sem achados que expliquem a magnitude do quadro, e — o ponto-chave do enunciado — **sem** insatisfação prévia com a imagem corporal nem desejo de emagrecer, o que descarta anorexia nervosa apesar do baixo peso.

Apesar de só ter aparecido uma vez no banco até agora, transtornos alimentares são tema **clássico e recorrente em provas de residência médica e concursos de psiquiatria** — o DSM-5 trouxe o ARFID como categoria relativamente nova (substituindo o antigo "transtorno alimentar da infância"), e bancas gostam de testar justamente a capacidade de diferenciá-lo de anorexia nervosa, já que os dois cursam com restrição alimentar e perda de peso significativa. Vale a pena dominar os critérios diagnósticos completos de todo o espectro (anorexia, bulimia, TCAP, ARFID) e suas diferenças mais sutis.

## 🧠 Conceito

Os transtornos alimentares compartilham um núcleo comum de relação disfuncional com a comida, mas se diferenciam pelo **motivo** da restrição/compulsão e pela **presença ou ausência de perturbação da imagem corporal**: anorexia e bulimia nervosa têm a autoavaliação indevidamente influenciada pelo peso/forma corporal como critério nuclear; ARFID e TCAP não exigem essa perturbação — no ARFID a motivação é sensorial/aversiva/desinteresse, e no TCAP o problema é a perda de controle sobre a ingesta, sem o componente compensatório da bulimia.

## 🔹 Anorexia nervosa

- **Critérios (DSM-5):** restrição da ingesta energética levando a peso corporal significativamente baixo (considerando idade, sexo, desenvolvimento e saúde física); medo intenso de ganhar peso ou tornar-se gordo, ou comportamento persistente que interfere no ganho de peso, mesmo estando com peso baixo; perturbação na percepção do peso/forma do próprio corpo, indevida influência do peso/forma corporal na autoavaliação, ou negação persistente da gravidade do baixo peso atual.
- **Subtipos:** restritivo (perda de peso via dieta, jejum, exercício excessivo, sem compulsão/purgação recorrente nos últimos 3 meses) e compulsão periódica/purgativo (com episódios recorrentes de compulsão e/ou purgação).
- **Complicações clínicas:** amenorreia (não é mais critério diagnóstico obrigatório no DSM-5, mas é achado comum), bradicardia, hipotensão, osteopenia/osteoporose, lanugo, alterações eletrolíticas, síndrome de realimentação ao reintroduzir alimentação em desnutrição grave.
- **Tratamento:** abordagem multidisciplinar (nutricional, psicoterápica — terapia familiar baseada em evidência é primeira linha em adolescentes, terapia cognitivo-comportamental especializada em adultos — e psiquiátrica); internação hospitalar indicada em instabilidade clínica grave (bradicardia extrema, distúrbio hidroeletrolítico grave, risco de síndrome de realimentação, risco de vida).
- 💎 **Pearl:** é o transtorno psiquiátrico com uma das maiores taxas de mortalidade entre todos os diagnósticos psiquiátricos, por complicações clínicas e suicídio.
- ⚠️ **Pitfall:** diagnosticar anorexia nervosa apenas pelo baixo peso, sem confirmar medo de ganhar peso e perturbação de imagem corporal — é exatamente essa lacuna que diferencia do ARFID.
- 📝 **Como caiu:** não cobrado diretamente no corpus, mas é o principal diferencial da questão real de ARFID (ENARE 2026 Q53).

## 🔹 Bulimia nervosa

- **Critérios (DSM-5):** episódios recorrentes de compulsão alimentar (ingestão de quantidade de comida definitivamente maior do que a maioria das pessoas comeria em período semelhante, com sensação de perda de controle) seguidos de comportamento compensatório inadequado recorrente (vômito autoinduzido, uso indevido de laxantes/diuréticos/outros medicamentos, jejum, exercício físico excessivo); frequência mínima de uma vez por semana por 3 meses; autoavaliação indevidamente influenciada pela forma e peso corporais; ausência de anorexia nervosa concomitante (se os critérios de anorexia forem preenchidos, o diagnóstico prevalente é anorexia, subtipo compulsão/purgativo).
- **Peso corporal:** tipicamente normal ou até sobrepeso — diferente da anorexia, o baixo peso não é critério.
- **Achados clínicos de purgação recorrente:** erosão do esmalte dentário, hipertrofia de glândulas parótidas ("face de esquilo"), sinal de Russell (calosidades no dorso da mão por indução de vômito), alcalose metabólica hipocalêmica e hipoclorêmica pelo vômito recorrente.
- **Tratamento:** terapia cognitivo-comportamental especializada é primeira linha; **fluoxetina** é o único antidepressivo com indicação formal aprovada especificamente para bulimia nervosa, geralmente em doses mais altas do que as usadas para depressão.
- 💎 **Pearl:** a fluoxetina em altas doses é uma das poucas indicações psicofarmacológicas com aprovação específica para um transtorno alimentar.
- ⚠️ **Pitfall:** classificar como bulimia qualquer sintoma gastrointestinal recorrente pós-alimentar (como soluços) sem confirmar que existe compulsão alimentar E comportamento compensatório verdadeiro — foi exatamente esse raciocínio equivocado que um dos distratores da questão real tentou induzir.
- 📝 **Como caiu:** citada como distrator na questão real de ARFID (ENARE 2026 Q53) — soluços recorrentes não configuram comportamento compensatório de bulimia.

## 🔹 Transtorno de compulsão alimentar periódica (TCAP)

- **Critérios (DSM-5):** episódios recorrentes de compulsão alimentar (mesma definição da bulimia), associados a pelo menos 3 dos seguintes: comer mais rapidamente que o normal, comer até sentir-se desconfortavelmente cheio, comer grandes quantidades sem fome física, comer sozinho por vergonha, sentir-se aflito/culpado/deprimido após o episódio; **sem** comportamento compensatório recorrente; frequência mínima de uma vez por semana por 3 meses.
- **Perfil clínico:** é o transtorno alimentar mais prevalente na população geral, fortemente associado a sobrepeso/obesidade e comorbidades metabólicas, embora possa ocorrer em qualquer faixa de peso.
- **Tratamento:** terapia cognitivo-comportamental especializada; **lisdexanfetamina** tem indicação farmacológica específica aprovada para TCAP moderado a grave em adultos.
- ⚠️ **Pitfall:** diagnosticar TCAP apenas pela presença de perda de peso — o critério central é a compulsão recorrente com perda de controle, não a variação ponderal (que, ao contrário do enunciado da questão real de ARFID, tende a ser ganho de peso, não perda).
- 📝 **Como caiu:** citado como distrator na questão real de ARFID (ENARE 2026 Q53) — perda ponderal significativa é incompatível com TCAP.

## 🔹 Transtorno de ingestão alimentar evitativo-restritivo (ARFID)

- **Critérios (DSM-5):** perturbação alimentar (falta de interesse aparente por comer, esquiva baseada em características sensoriais do alimento, ou preocupação com consequências aversivas de comer — engasgar, vomitar, dor) que leva a um ou mais de: perda de peso significativa (ou falha em atingir o ganho de peso/crescimento esperado em criança), deficiência nutricional significativa, dependência de suplementação nutricional oral/enteral, ou interferência marcante no funcionamento psicossocial — **sem** evidência de perturbação da percepção do peso/forma corporal e **sem** ser mais bem explicado por outra condição médica ou transtorno mental.
- **Perfil clínico:** historicamente descrito em crianças ("seletividade alimentar" extrema), mas reconhecido no DSM-5 como diagnóstico possível em qualquer idade, incluindo adultos — frequentemente desencadeado ou agravado por evento estressor (mudança de rotina, luto, experiência aversiva prévia com comida, como engasgo).
- **Diagnóstico diferencial ativo:** exige exclusão razoável de causa orgânica gastrointestinal proporcional ao quadro (o achado de gastrite leve/esteatose discreta, sem explicar a magnitude da restrição e da perda ponderal, reforça — não descarta — a hipótese psiquiátrica) e de transtorno depressivo maior (que pode cursar com redução de apetite, mas não com a seletividade sensorial/medo específico de consequências aversivas característicos do ARFID).
- **Tratamento:** abordagem multidisciplinar — terapia cognitivo-comportamental adaptada, exposição gradual a alimentos evitados, manejo nutricional, e tratamento de comorbidades (ansiedade é comum em associação).
- 💎 **Pearl:** o "gatilho" clássico de ARFID em adulto é um evento aversivo específico (engasgo, vômito após certo alimento, mudança abrupta de rotina/luto) seguido de generalização progressiva da evitação a cada vez mais tipos de alimento — padrão presente na questão real do corpus (divórcio como estressor desencadeante).
- ⚠️ **Pitfall:** insistir em rotular o quadro como "puramente gastroenterológico" diante de exames sem alteração proporcional à gravidade clínica, atrasando o encaminhamento psiquiátrico.
- 📝 **Como caiu:** ENARE 2026 Q53 — vinheta completa de ARFID em adulto, com evitação por sintomas dispépticos e sensibilidade a texturas, sem alteração de imagem corporal.

## 📋 Tabela

**Diferencial dos principais transtornos alimentares do DSM-5**

| Característica | Anorexia nervosa | Bulimia nervosa | TCAP | ARFID |
|---|---|---|---|---|
| Perturbação de imagem corporal | Sim (critério central) | Sim (critério central) | Não | Não |
| Peso corporal | Significativamente baixo | Normal/sobrepeso | Frequentemente sobrepeso/obesidade | Baixo ou déficit nutricional |
| Compulsão alimentar | Pode ocorrer (subtipo) | Sim, obrigatória | Sim, obrigatória | Não |
| Comportamento compensatório | Pode ocorrer (subtipo) | Sim, obrigatório | Não | Não |
| Motivação da restrição | Medo de engordar | — | — | Sensorial/desinteresse/medo de consequência aversiva |

## 📚 Referências essenciais

- Manual Diagnóstico e Estatístico de Transtornos Mentais, 5ª edição, texto revisado (DSM-5-TR) — American Psychiatric Association, critérios de transtornos alimentares e da ingestão alimentar.
`;

export default content.trim();
