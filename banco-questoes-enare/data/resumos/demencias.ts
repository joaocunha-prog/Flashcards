/**
 * Resumo — Neurologia · Demências.
 *
 * Reorganizado por entidade clínica (cada tipo de demência tem sua própria
 * seção com quadro clínico, diagnóstico, tratamento, pearl e pitfall
 * juntos) — o assunto reúne etiologias distintas de síndrome demencial
 * cuja diferenciação em prova depende do reconhecimento de padrões
 * clínicos e temporais característicos de cada uma.
 *
 * Cobre a questão real do corpus (EBSERH 2025 Q31 — reconhecimento de que
 * a apresentação clássica da doença de Creutzfeldt-Jakob é demência
 * rapidamente progressiva, em contraste com afirmativas incorretas sobre
 * Alzheimer, fatores de risco modificáveis e demência vascular). Assunto
 * de baixa incidência no banco (1 questão, cauda longa, fora do corte
 * 80/20), mas o restante do resumo é extrapolado com profundidade de alto
 * rendimento cobrindo as principais demências cobráveis em prova:
 * Alzheimer, vascular, corpos de Lewy, frontotemporal, Creutzfeldt-Jakob e
 * hidrocefalia de pressão normal (causa potencialmente reversível).
 */
const content = `
## 🎯 Essencial

- **O eixo mais cobrado no diferencial de demências é o padrão temporal e o padrão cognitivo/comportamental inicial** — velocidade de progressão (meses vs. anos), domínio cognitivo predominantemente afetado no início (memória episódica vs. função executiva/personalidade vs. cognição visuoespacial/flutuação) e presença de sinais motores associados.
- **Doença de Creutzfeldt-Jakob é a causa clássica de demência rapidamente progressiva** — evolução de semanas a poucos meses (não anos), associada a mioclonias, ataxia e sinais piramidais/extrapiramidais, com desfecho fatal geralmente dentro de um ano do início dos sintomas — reconhecer esse padrão temporal é o que mais diferencia de todas as outras causas de demência.
- **Doença de Alzheimer** é a causa mais comum de demência em geral, com início insidioso e progressão lenta e gradual, tipicamente iniciando por **déficit de memória episódica** (dificuldade para reter informações novas) — sintomas neuropsiquiátricos (ansiedade, depressão, alteração de personalidade) podem preceder o declínio cognitivo franco em parte dos casos, mas não são a regra na maioria.
- **Fatores de risco modificáveis para demência** (segundo evidência consolidada): perda auditiva não tratada, tabagismo, hipertensão arterial não controlada, obesidade, diabetes, sedentarismo, isolamento social, depressão, traumatismo cranioencefálico, poluição do ar e **baixo** nível educacional (não alto — baixa escolaridade é fator de risco, escolaridade elevada é fator de reserva cognitiva/proteção).
- **Nem toda demência é irreversível** — sempre investigar causas potencialmente tratáveis antes de fechar diagnóstico de demência neurodegenerativa primária: hipotireoidismo, deficiência de vitamina B12, neurossífilis, hidrocefalia de pressão normal, hematoma subdural crônico, depressão (pseudodemência).

## 🔹 Doença de Alzheimer

- **Quando suspeitar:** início insidioso, progressão lenta e gradual ao longo de anos, com déficit predominante de **memória episódica recente** (esquece eventos recentes, repete perguntas, perde objetos) evoluindo depois para comprometimento de linguagem, praxia e função executiva.
- **Diagnóstico:** clínico, apoiado por testes cognitivos (Mini-Exame do Estado Mental, MoCA); neuroimagem (RM) mostrando atrofia hipocampal/temporal medial ajuda a apoiar o diagnóstico e excluir outras causas; biomarcadores liquóricos (beta-amiloide, tau, fosfo-tau) e PET amiloide são usados em contextos de pesquisa/dúvida diagnóstica.
- **Tratamento:** inibidores da colinesterase (donepezila, rivastigmina, galantamina) na fase leve a moderada; memantina (antagonista NMDA) em fase moderada a grave; terapias anti-amiloide (anticorpos monoclonais) representam avanço mais recente, com uso ainda restrito a fases muito iniciais e critérios específicos.
- 💎 **Pearl:** é a causa mais comum de demência em todas as faixas etárias acima dos 65 anos — a "regra do bom senso" em prova é que, na ausência de padrão atípico descrito na vinheta (progressão muito rápida, sinais motores precoces, flutuação, alucinações visuais proeminentes), Alzheimer é a resposta mais provável.
- ⚠️ **Pitfall:** achar que a maioria dos casos de Alzheimer começa por sintomas neuropsiquiátricos isolados (ansiedade, depressão, mudança de personalidade) — a apresentação inicial mais típica e mais prevalente é o declínio de memória episódica, não o quadro neuropsiquiátrico puro.
- 📝 **Como caiu:** citada como afirmativa incorreta na questão real do corpus (EBSERH 2025 Q31) — a alternativa que dizia que "quase 75% dos casos começam com ansiedade/depressão/alteração de personalidade" estava errada.

## 🔹 Demência vascular

- **Quando suspeitar:** história de eventos cerebrovasculares (AVC isquêmicos, múltiplos infartos lacunares, doença de pequenos vasos), progressão tipicamente **em degraus** (piora abrupta associada a novo evento vascular, seguida de platô), em vez da progressão insidiosa e contínua do Alzheimer — déficits focais associados (alteração de marcha, sinais piramidais, incontinência urinária precoce) são comuns.
- **Fatores de risco:** os mesmos da doença cerebrovascular em geral — hipertensão, diabetes, dislipidemia, fibrilação atrial, tabagismo.
- **Diagnóstico:** neuroimagem evidenciando lesões vasculares (infartos corticais/subcorticais múltiplos, doença extensa de substância branca) compatíveis com o déficit cognitivo apresentado.
- **Tratamento:** controle rigoroso dos fatores de risco cardiovascular (é a intervenção mais eficaz para reduzir progressão); inibidores da colinesterase têm benefício mais limitado do que no Alzheimer.
- ⚠️ **Pitfall:** associar trauma craniano de repetição à demência vascular — trauma repetido está classicamente associado à **encefalopatia traumática crônica**, não à demência vascular, que decorre de doença cerebrovascular isquêmica/hemorrágica.
- 📝 **Como caiu:** citada como afirmativa incorreta na questão real do corpus (EBSERH 2025 Q31) — a alternativa que associava trauma craniano de repetição à demência vascular estava errada.

## 🔹 Demência com corpos de Lewy

- **Quando suspeitar:** tríade característica — **flutuação cognitiva** proeminente (variação importante de atenção/alerta ao longo de horas/dias), **alucinações visuais** bem formadas e recorrentes (frequentemente precoces no curso da doença), e **parkinsonismo** espontâneo (rigidez, bradicinesia) — o comprometimento cognitivo tende a preceder ou surgir simultaneamente ao parkinsonismo (diferente da demência da doença de Parkinson, em que o parkinsonismo motor precede o declínio cognitivo em anos).
- **Achado de alto rendimento:** **sensibilidade importante a antipsicóticos típicos/de alta potência** — podem precipitar piora extrapiramidal grave e até síndrome neuroléptica maligna-símile, exigindo cautela extrema na escolha de antipsicótico caso necessário (preferir doses baixas de antipsicóticos atípicos com menor bloqueio dopaminérgico).
- **Tratamento:** inibidores da colinesterase têm boa resposta (inclusive para os sintomas neuropsiquiátricos/alucinações); evitar antipsicóticos típicos.
- 💎 **Pearl:** distúrbio comportamental do sono REM (paciente "atua" os sonhos, com movimentos e vocalizações durante o sono REM) é achado precoce característico, podendo preceder o quadro cognitivo em anos.
- ⚠️ **Pitfall:** prescrever antipsicótico típico para controlar alucinações visuais sem suspeitar de demência com corpos de Lewy — risco de reação extrapiramidal grave.

## 🔹 Demência frontotemporal

- **Quando suspeitar:** início mais precoce que as demais causas neurodegenerativas (frequentemente antes dos 65 anos), com alteração de **personalidade e comportamento** proeminente e precoce (desinibição, apatia, perda de empatia, comportamento compulsivo/estereotipado, hiperoralidade) ou, na variante de linguagem, afasia progressiva — a **memória episódica é relativamente preservada no início**, ao contrário do Alzheimer.
- **Diagnóstico:** neuroimagem com atrofia frontal e/ou temporal anterior, tipicamente assimétrica.
- **Tratamento:** sem terapia específica aprovada que modifique o curso; manejo sintomático comportamental (inibidores seletivos de recaptação de serotonina podem ajudar em sintomas comportamentais; inibidores da colinesterase e memantina geralmente **não** têm o mesmo benefício observado no Alzheimer, podendo inclusive piorar sintomas em alguns casos).
- 💎 **Pearl:** a preservação relativa da memória associada a mudança de personalidade marcante e precoce é o que mais diferencia de Alzheimer nesse diagnóstico diferencial.

## 🔹 Doença de Creutzfeldt-Jakob

- **Quando suspeitar:** **demência rapidamente progressiva** (semanas a poucos meses, muito mais rápida que qualquer outra causa neurodegenerativa comum), associada a **mioclonias** (achado muito característico), ataxia cerebelar, sinais piramidais e/ou extrapiramidais, e alterações visuais/comportamentais — desfecho tipicamente fatal em menos de um ano.
- **Mecanismo:** doença priônica — acúmulo de proteína príon mal dobrada (PrPSc) com neurodegeneração espongiforme; a maioria dos casos é esporádica, mas existem formas genéticas (mutação do gene PRNP) e adquiridas (iatrogênica, variante associada à encefalopatia espongiforme bovina).
- **Diagnóstico:** RM de crânio com sequência de difusão (DWI) mostrando hipersinal cortical em "listrão" (ribboning) e/ou em núcleos da base; eletroencefalograma com complexos periódicos trifásicos generalizados (achado clássico, embora nem sempre presente); proteína 14-3-3 e RT-QuIC no líquor apoiam o diagnóstico.
- **Tratamento:** não existe tratamento específico eficaz — manejo é exclusivamente de suporte; a doença é invariavelmente fatal.
- 💎 **Pearl:** é a demência que mais quebra a expectativa de "toda demência evolui lentamente" — reconhecer o padrão temporal ultrarrápido é a chave diagnóstica central, tanto na prática clínica quanto em prova.
- 📝 **Como caiu:** EBSERH 2025 Q31 — a alternativa correta afirmava exatamente que a apresentação clássica da doença de Creutzfeldt-Jakob é de demência rapidamente progressiva.

## 🔹 Hidrocefalia de pressão normal

- **Quando suspeitar:** tríade clássica de Hakim-Adams — **distúrbio de marcha** (geralmente o primeiro e mais proeminente sinal, marcha em pequenos passos, "magnética", com dificuldade de iniciar o movimento), **incontinência urinária** e **declínio cognitivo** (mais um comprometimento de função executiva/lentificação do que amnésia franca) — é uma das poucas causas de demência potencialmente **reversível** com tratamento adequado.
- **Diagnóstico:** neuroimagem com dilatação ventricular desproporcional à atrofia cortical presente; teste de punção lombar de alívio ("tap test") com melhora clínica objetiva da marcha após retirada de grande volume de líquor apoia fortemente o diagnóstico e prediz resposta à derivação.
- **Tratamento:** derivação ventrículo-peritoneal — a melhora, sobretudo da marcha, pode ser significativa quando o diagnóstico e a intervenção ocorrem precocemente, antes de dano neuronal estabelecido.
- 💎 **Pearl:** entre as causas reversíveis de demência, é a que tem maior potencial de melhora completa quando tratada a tempo — por isso deve estar sempre no topo do diferencial diante da tríade clássica.
- ⚠️ **Pitfall:** rotular a tríade como "demência mista do idoso" sem investigar ativamente hidrocefalia de pressão normal por imagem — perde-se uma causa tratável.

## 📋 Tabela

**Diferencial temporal e clínico das principais demências**

| Entidade | Velocidade de progressão | Achado inicial predominante | Achado motor associado |
|---|---|---|---|
| Alzheimer | Lenta, insidiosa (anos) | Memória episódica | Ausente (fases iniciais) |
| Vascular | Em degraus, associada a eventos | Variável, déficits focais | Sinais piramidais, marcha alterada |
| Corpos de Lewy | Lenta a moderada | Flutuação cognitiva, alucinações visuais | Parkinsonismo |
| Frontotemporal | Lenta a moderada, início mais precoce | Personalidade/comportamento ou linguagem | Ausente (fases iniciais) |
| Creutzfeldt-Jakob | Rápida (semanas a meses) | Cognição global, comportamento | Mioclonias, ataxia |
| Hidrocefalia de pressão normal | Subaguda a crônica | Marcha (antes da cognição) | Marcha "magnética" |

## 📝 Como a banca cobra

**Demências é um assunto de baixa incidência no corpus — apenas 1 questão registrada** (EBSERH 2025 Q31, classificada como MÉDIA), no formato de afirmativas comparando várias causas de demência simultaneamente (Alzheimer, fatores de risco modificáveis, Creutzfeldt-Jakob, demência vascular, doença aterosclerótica) — a alternativa correta reconhecia a apresentação clássica da doença de Creutzfeldt-Jakob como demência rapidamente progressiva, enquanto as demais traziam erros conceituais sutis sobre outras entidades do diferencial.

Apesar de só ter aparecido uma vez no banco até agora, demências é tema **extremamente recorrente em provas de residência médica**, por reunir várias entidades com padrões clínicos discretos e comparáveis entre si — formato de questão "compare múltiplas causas de demência" tende a se repetir, tornando o domínio do diferencial completo (não apenas de Alzheimer) de alto rendimento.

## 📚 Referências essenciais

- American Academy of Neurology (AAN) — Practice Guideline for Dementia.
- National Institute on Aging – Alzheimer's Association (NIA-AA) — critérios de diagnóstico para doença de Alzheimer e declínio cognitivo.
`;

export default content.trim();
