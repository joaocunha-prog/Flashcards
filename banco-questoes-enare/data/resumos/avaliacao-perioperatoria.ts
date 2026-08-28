/**
 * Resumo — Emergências e Terapia Intensiva · Avaliação perioperatória.
 *
 * Cobre as entidades do assunto no corpus: manejo perioperatório de
 * estatina e avaliação de risco cardiovascular pré-operatório (índice de
 * risco cardíaco revisado, capacidade funcional e decisão de solicitar
 * exames complementares antes de cirurgia não cardíaca).
 */
const content = `
## 🎯 Essencial

- **Estatina: NÃO suspender no perioperatório.** Deve ser mantida (inclusive no dia da cirurgia) em quem já usa cronicamente — reduz eventos cardiovasculares e mortalidade perioperatória, efeito pleiotrópico independente do LDL.
- **Avaliação de risco cardiovascular pré-operatório segue um algoritmo escalonado:** urgência da cirurgia → doença cardíaca ativa/instável → risco cirúrgico → capacidade funcional → índice de risco (RCRI) → necessidade de exame complementar.
- **Capacidade funcional ≥4 METs (subir 2 lances de escada sem sintomas)** dispensa investigação cardíaca adicional na maioria dos casos, mesmo em quem tem fatores de risco.
- **Índice de Risco Cardíaco Revisado (RCRI/Lee):** cirurgia de alto risco, DAC, ICC, doença cerebrovascular, diabetes insulino-dependente e creatinina >2 mg/dL — cada um soma 1 ponto; ≥2 pontos eleva risco de evento cardíaco maior.
- **Cirurgia de emergência não espera avaliação cardiológica extensa** — otimiza-se o que for possível no tempo disponível e opera-se.
- **Betabloqueador: não iniciar de novo no perioperatório imediato** só por causa da cirurgia — risco de bradicardia/hipotensão superar benefício; manter se já em uso crônico.
- **Exame complementar (ex.: ecocardiograma, teste de estresse) só se o resultado for mudar a conduta** — pedir por rotina, sem essa premissa, é conduta ultrapassada.

## 💎 Pearls

- **Dispneia aos mínimos esforços ou incapacidade de subir um lance de escada** já classifica capacidade funcional baixa (<4 METs) e reforça a indicação de investigação adicional antes de cirurgia de alto risco.
- **Síndrome coronariana aguda recente (<60 dias), ICC descompensada, arritmia significativa e doença valvar grave sintomática** são as "condições cardíacas ativas" que adiam cirurgia eletiva independentemente do RCRI.
- **Biomarcadores (BNP/troponina) pré-operatórios** têm papel crescente em cirurgia de alto risco com RCRI elevado, mas não substituem a avaliação clínica funcional.
- **Estatina de início recente (poucos dias antes da cirurgia) também deve ser mantida**, não é motivo para suspensão isolada.
- **Anti-hipertensivos IECA/BRA** costumam ser suspensos no dia da cirurgia pelo risco de hipotensão intraoperatória refratária — distinto da conduta da estatina, que é o oposto (manter).

## ⚠️ Pitfalls

- **Suspender estatina "para operar com segurança"** — é justamente o contrário do recomendado; suspensão associa-se a pior desfecho cardiovascular.
- **Pedir ecocardiograma ou teste ergométrico de rotina para todo paciente antes de cirurgia não cardíaca** — só indicado quando o resultado muda a conduta e a capacidade funcional é baixa/indeterminada.
- **Adiar cirurgia de emergência para "otimização cardiológica completa"** — não se aplica; otimiza-se o possível e opera-se.
- **Iniciar betabloqueador novo no perioperatório imediato pensando em "proteção cardíaca"** — aumenta risco de eventos adversos (AVC, hipotensão, bradicardia).
- **Confundir capacidade funcional subjetiva do paciente com RCRI** — são ferramentas complementares, não substituem uma à outra.

## 📝 Como a banca cobra

**Avaliação perioperatória aparece em 2 questões (0,94% do corpus)**, ambas pelo ENARE, testando o raciocínio de decisão prática (manter ou suspender droga; pedir ou não exame) mais do que memorização de escore isolado.

- **ENARE 2025 Q55** cobrou o **manejo perioperatório de estatina** — a resposta esperada é manter o uso, sem suspensão pré-operatória.
- **ENARE 2026 Q56** testou a **avaliação de risco cardiovascular pré-operatório**, no fluxo de decidir se o paciente precisa de investigação cardíaca adicional antes de cirurgia não cardíaca, apoiado em capacidade funcional e fatores de risco do RCRI.

## 🧠 Conceito e fisiopatologia

A avaliação perioperatória cardiovascular busca estimar o risco de evento cardíaco maior (infarto, morte cardíaca) no perioperatório e decidir se alguma intervenção (exame, otimização farmacológica, adiamento) reduz esse risco sem atrasar desnecessariamente uma cirurgia indicada. O raciocínio central é sequencial: primeiro se pergunta se a cirurgia é urgente (se for, o processo de investigação encurta drasticamente); depois se há doença cardíaca ativa que precise ser tratada antes de qualquer coisa; só então se avalia risco cirúrgico e capacidade funcional do paciente.

A manutenção da estatina no perioperatório reflete o conceito de que seus benefícios (estabilização de placa aterosclerótica, efeito anti-inflamatório) atuam de forma relativamente rápida e sua retirada abrupta pode gerar efeito rebote pró-inflamatório, aumentando risco isquêmico justamente no período de maior estresse cardiovascular da cirurgia.

## 🔎 Diagnóstico

- **Estratificação de risco cirúrgico:** classificar a cirurgia proposta como baixo ou alto risco de evento cardíaco.
- **Capacidade funcional:** estimar em METs por história (subir escadas, caminhar em aclive, atividades domésticas).
- **RCRI (índice de Lee):** somar pontos por cirurgia de alto risco, DAC, ICC, doença cerebrovascular, diabetes insulino-dependente e creatinina >2 mg/dL.
- **Exame complementar dirigido:** só solicitar se capacidade funcional baixa/indeterminada e RCRI elevado, e se o resultado alterar a conduta cirúrgica ou farmacológica.

## 💊 Tratamento

- **Manter estatina** de uso crônico durante todo o perioperatório, sem interrupção.
- **Manter betabloqueador** já em uso; não iniciar de novo apenas pela cirurgia.
- **Suspender IECA/BRA no dia da cirurgia**, conforme protocolo institucional, pelo risco de hipotensão intraoperatória.
- **Otimizar condições cardíacas ativas** (ICC descompensada, síndrome coronariana recente, arritmia significativa) antes de cirurgia eletiva; em emergência, operar com o suporte possível.

## 📚 Referências essenciais

- ACC/AHA Guideline for Perioperative Cardiovascular Management for Patients Undergoing Noncardiac Surgery.
- ESC/ESA Guidelines on Non-cardiac Surgery: Cardiovascular Assessment and Management.
`;

export default content.trim();
