/**
 * Resumo — Neurologia · Síndromes medulares e desmielinizantes.
 *
 * Reorganizado por entidade clínica, já que o assunto reúne doenças
 * desmielinizantes e mielopatias distintas. A neuromielite óptica (NMOSD) é
 * a entidade com grounding real no corpus (EBSERH 2026 Q59), incluindo o
 * cuidado-chave de evitar interferon-beta. Esclerose múltipla, mielite
 * transversa idiopática/ADEM, mielopatia por deficiência de B12 e as
 * síndromes medulares anatômicas clássicas (Brown-Séquard, artéria
 * espinhal anterior, compressão medular aguda) são incluídas como
 * extrapolações de alto rendimento. Assunto de baixa incidência no corpus
 * (1 questão), fora do corte 80/20.
 */
const content = `
## 🎯 Essencial

- **Neuromielite óptica (NMOSD)** é doença autoimune distinta da esclerose múltipla, mediada por **anticorpo anti-aquaporina-4 (AQP4-IgG)** em cerca de 70-80% dos casos — atinge preferencialmente **nervo óptico** (neurite óptica, frequentemente bilateral e mais grave) e **medula espinhal**, com lesões medulares classicamente **longitudinalmente extensas** (≥3 corpos vertebrais contíguos na RM), diferente das lesões curtas e múltiplas típicas de esclerose múltipla.
- **Soluços e vômitos incoercíveis inexplicados** são um pródromo altamente específico de NMOSD, por acometimento da área postrema (núcleo do trato solitário, no assoalho do quarto ventrículo, rica em AQP4) — reconhecer essa síndrome de área postrema como manifestação de NMOSD (e não como quadro gastrointestinal primário) é um dos pontos mais armadilhados do tema.
- **Tratamento agudo de surto de NMOSD:** corticoide IV em pulsoterapia (metilprednisolona 1 g/dia por 3-5 dias) como primeira linha; **plasmaférese precoce** deve ser considerada cedo diante de resposta incompleta — o limiar para escalar para plasmaférese é mais baixo na NMOSD do que na esclerose múltipla, dado o maior potencial de sequela grave e permanente por surto.
- **Cuidado-chave que muda o prognóstico: NUNCA tratar NMOSD com terapias modificadoras de doença desenhadas para esclerose múltipla — sobretudo interferon-beta** — essas drogas podem **piorar** a frequência e a gravidade dos surtos de NMOSD (mecanismo imunológico distinto: NMOSD é predominantemente humoral/mediada por anticorpo, enquanto interferon-beta modula resposta mais voltada à fisiopatologia da EM). O erro de tratar NMOSD como se fosse EM é o pitfall mais grave e mais cobrável do tema.
- **Bandas oligoclonais no líquor são tipicamente NEGATIVAS na NMOSD** (presentes em <20-30% dos casos) — ao contrário da esclerose múltipla, onde costumam ser positivas (>90% dos casos); esse achado é um diferencial laboratorial de apoio importante, não apenas de imagem.
- **Diferencial soroló­gico dentro do espectro de doenças desmielinizantes com envolvimento de nervo óptico + medula:** AQP4-IgG positivo define NMOSD clássica; MOG-IgG positivo define uma entidade relacionada mas distinta — **doença associada a anticorpo anti-MOG (MOGAD)** — com curso, prognóstico e resposta terapêutica diferentes (MOGAD costuma ter melhor prognóstico e maior resposta a corticoide/tendência a monofasicidade em crianças).

## 💎 Pearls

- Tratamento de manutenção da NMOSD para prevenir novos surtos usa imunossupressores/imunobiológicos dirigidos à via humoral (rituximabe, inibidores de complemento, bloqueadores de receptor de IL-6, azatioprina, micofenolato) — de novo, não as terapias modificadoras de EM.
- Mielite extensa longitudinal (≥3 segmentos vertebrais) não é sinônimo automático de NMOSD — sarcoidose neurológica, lúpus com mielite transversa, deficiência de cobre e alguns casos de MOGAD também podem causar lesões extensas; o contexto clínico e a sorologia fecham o diagnóstico.
- RM de encéfalo tipicamente normal (ou sem lesões "típicas de EM") na fase inicial da NMOSD ajuda a diferenciar de esclerose múltipla, embora lesões encefálicas possam ocorrer em NMOSD avançada (área postrema, hipotálamo, tronco encefálico periependimário).
- Degeneração combinada subaguda (mielopatia por deficiência de vitamina B12) causa desmielinização das colunas posteriores (perda de propriocepção/sensibilidade vibratória, ataxia sensitiva) e do trato corticoespinhal (espasticidade, Babinski) — combinação de sinais de segundo neurônio sensitivo (colunas posteriores) com sinais de primeiro neurônio motor (piramidal) na mesma topografia é a pista clássica; reposição de B12 deve ser iniciada assim que suspeitada, sem esperar confirmação completa se a suspeita for forte, pelo risco de dano irreversível.
- Síndrome de Brown-Séquard (hemissecção medular) causa perda de força e propriocepção/vibração **ipsilateral** à lesão (trato corticoespinhal e colunas posteriores cruzam acima ou não cruzam na medula) com perda de dor/temperatura **contralateral** (trato espinotalâmico já cruzado no nível de entrada) — padrão clássico de prova, geralmente por trauma penetrante.
- Síndrome da artéria espinhal anterior causa perda de força bilateral e perda de dor/temperatura bilateral (2/3 anteriores da medula), com **preservação da propriocepção/sensibilidade vibratória** (colunas posteriores, irrigadas pelas artérias espinhais posteriores) — dissociação sensitivo-motora característica.
- Compressão medular aguda (ex.: metástase vertebral, abscesso epidural, hérnia discal extrusa) é emergência neurológica com janela curta para preservação de função — corticoide em dose alta (dexametasona) é medida imediata enquanto se organiza descompressão cirúrgica ou radioterapia, conforme a causa.

## ⚠️ Pitfalls

- **Iniciar interferon-beta em quadro de mielite extensa achando que se trata de "alta atividade inflamatória desmielinizante" genérica** — sem confirmar o diagnóstico específico, esse é o erro mais grave possível: interferon-beta pode piorar NMOSD.
- **Achar que bandas oligoclonais negativas afastam doença desmielinizante autoimune** — na NMOSD, a negatividade é o padrão esperado, não um achado que descarta o diagnóstico.
- **Não valorizar soluços/vômitos incoercíveis inexplicados como pródromo neurológico** — tratar como quadro gastrointestinal isolado atrasa o diagnóstico de síndrome de área postrema.
- **Confundir NMOSD com MOGAD** assumindo que qualquer mielite extensa + neurite óptica é a mesma entidade — a sorologia (AQP4 vs. MOG) muda prognóstico e abordagem terapêutica de manutenção.
- **Anticoagular empiricamente diante de mielopatia aguda "porque a progressão é rápida demais para ser autoimune"** — a velocidade de progressão isolada não afasta etiologia autoimune/inflamatória; muitas mielites autoimunes evoluem em horas a poucos dias.
- **Aguardar culturas antes de iniciar corticoide em mielite** quando a suspeita infecciosa é baixa e o quadro é compatível com etiologia autoimune — atraso desnecessário de imunoterapia piora desfecho funcional.
- **Confundir síndrome de Brown-Séquard com síndrome da artéria espinhal anterior** — a primeira tem padrão sensitivo dissociado por lateralidade (ipsilateral motor/propriocepção, contralateral dor/temperatura), a segunda por modalidade (poupa propriocepção bilateralmente).

## 🔹 Neuromielite óptica (NMOSD)

- **Quadro:** neurite óptica (frequentemente bilateral/grave, com sequela visual maior que na EM) e/ou mielite longitudinalmente extensa (paraparesia/tetraparesia rapidamente progressiva, nível sensitivo, disfunção esfincteriana); síndrome de área postrema (soluços e vômitos incoercíveis) como pródromo característico.
- **Diagnóstico:** AQP4-IgG positivo (célula-based assay) é o marcador mais específico; RM de medula com lesão ≥3 segmentos vertebrais, edema e realce; RM de encéfalo tipicamente sem lesões típicas de EM na fase inicial; bandas oligoclonais tipicamente negativas.
- **Tratamento agudo:** metilprednisolona IV em pulsoterapia (1 g/dia, 3-5 dias); plasmaférese precoce se resposta incompleta.
- **Cuidado-chave:** evitar terapias modificadoras de EM, sobretudo interferon-beta — risco de piora do curso da doença.
- **Manutenção:** imunossupressão/imunobiológico dirigido (rituximabe, inibidores de complemento, bloqueio de IL-6, azatioprina/micofenolato).
- 📝 **Como caiu:** EBSERH 2026 Q59 — vinheta com pródromo de soluços/vômitos incoercíveis, mielite extensa T2 (C7-T7), AQP4-IgG positivo e MOG-IgG negativo, testando tratamento agudo correto e o cuidado-chave de evitar interferon-beta.

## 🔹 Esclerose múltipla

- **Quadro:** surtos de disfunção neurológica focal disseminados no tempo e no espaço — neurite óptica (unilateral, menos grave que na NMOSD), mielite (lesões curtas, não longitudinalmente extensas), síndromes de tronco encefálico/cerebelo, sintomas sensitivos.
- **Diagnóstico:** critérios de McDonald (disseminação temporal e espacial por clínica + RM); bandas oligoclonais tipicamente positivas no líquor; RM de encéfalo com lesões periventriculares, justacorticais, infratentoriais e medulares características.
- **Tratamento:** corticoide IV para surto agudo; terapias modificadoras de doença (interferon-beta, acetato de glatirâmer, fingolimode, natalizumabe, ocrelizumabe, entre outras) para manutenção — aqui, ao contrário da NMOSD, o interferon-beta é opção terapêutica válida.
- 📝 **Como caiu:** ainda não cobrado no corpus — mas é a base do diferencial mais cobrável da NMOSD.

## 🔹 Mielite transversa idiopática e ADEM

- **Mielite transversa idiopática:** disfunção medular aguda/subaguda sem etiologia identificada após investigação extensa (infecciosa, autoimune sistêmica, desmielinizante específica) — diagnóstico de exclusão.
- **Encefalomielite disseminada aguda (ADEM):** mais comum em crianças, tipicamente monofásica, pós-infecciosa ou pós-vacinal, com encefalopatia (alteração do nível de consciência/comportamento) associada a lesões multifocais na RM — diferencia-se de EM/NMOSD pela encefalopatia proeminente e curso predominantemente monofásico.
- **Tratamento:** corticoide IV em pulsoterapia como primeira linha para ambas; imunoglobulina IV ou plasmaférese para casos refratários.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Mielopatia por deficiência de vitamina B12 (degeneração combinada subaguda)

- **Quadro:** perda de propriocepção e sensibilidade vibratória (colunas posteriores) com ataxia sensitiva, associada a sinais de primeiro neurônio motor (espasticidade, hiperreflexia, Babinski) — combinação característica de déficit sensitivo posterior com síndrome piramidal.
- **Diagnóstico:** dosagem de B12 sérica (pode estar limítrofe — ácido metilmalônico e homocisteína elevados são mais sensíveis), investigação de causa (anemia perniciosa, dieta vegana estrita, má absorção, uso crônico de metformina/inibidor de bomba de prótons).
- **Tratamento:** reposição de B12 (inicialmente parenteral) assim que a suspeita for forte — déficits podem ser irreversíveis se o tratamento for postergado.
- 📝 **Como caiu:** ainda não cobrado no corpus — diferencial relevante de mielopatia subaguda.

## 🔹 Síndromes medulares anatômicas

- **Brown-Séquard (hemissecção medular):** perda de força e propriocepção/vibração ipsilateral; perda de dor/temperatura contralateral (1-2 níveis abaixo da lesão); causa clássica: trauma penetrante.
- **Artéria espinhal anterior:** perda de força bilateral e perda de dor/temperatura bilateral; propriocepção/vibração preservadas; causa clássica: isquemia (cirurgia de aorta, hipotensão prolongada).
- **Compressão medular aguda** (metástase vertebral, abscesso epidural, hérnia discal extrusa): dor localizada seguida de déficit motor/sensitivo progressivo e disfunção esfincteriana — emergência com corticoide em dose alta imediato e descompressão (cirúrgica ou radioterápica, conforme causa) o quanto antes.
- 📝 **Como caiu:** ainda não cobrado no corpus — síndromes anatômicas clássicas, alto potencial de cobrança futura.

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus — apenas 1 questão real registrada** (EBSERH 2026 Q59, dificuldade MÉDIA), com uma vinheta rica desenhada para testar o reconhecimento completo de NMOSD: pródromo de soluços/vômitos incoercíveis (síndrome de área postrema), mielite longitudinalmente extensa (C7-T7) com nível sensitivo em T6, RM de encéfalo sem lesões típicas de EM, bandas oligoclonais negativas e AQP4-IgG positivo com MOG-IgG negativo — o gabarito exigiu tanto o tratamento agudo correto (pulsoterapia + plasmaférese precoce se resposta incompleta) quanto o cuidado-chave de **evitar interferon-beta**, descartando distratores que tratavam a mielite extensa como sinal de "alta atividade de EM" (justificando erroneamente o uso de interferon-beta), isquemia medular, TVC medular e mielite infecciosa.

Mesmo com só 1 aparição neste banco específico, o diferencial entre NMOSD, esclerose múltipla e outras mielopatias é **tema de alto risco em provas de residência médica em geral** — o erro de tratar NMOSD com terapia modificadora de EM é um dos "pitfalls farmacológicos" mais citados na literatura de neurologia, tornando esse ponto específico especialmente rentável de dominar mesmo fora do 80/20 deste banco.

## 📚 Referências essenciais

- Critérios diagnósticos internacionais para transtornos do espectro da neuromielite óptica — International Panel for NMO Diagnosis (IPND).
- Critérios de McDonald para diagnóstico de esclerose múltipla — American Academy of Neurology (AAN)/consenso internacional.
- Diretriz de diagnóstico e manejo de doença associada a anticorpo anti-MOG (MOGAD) — consenso internacional de especialistas.
`;

export default content.trim();
