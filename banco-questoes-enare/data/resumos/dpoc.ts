/**
 * Resumo — Pneumologia · DPOC.
 *
 * Cobre as entidades do assunto no corpus: exacerbação da DPOC com
 * necessidade de oxigenoterapia controlada (risco de hipercapnia) e
 * exacerbação hipercápnica com indicação de ventilação não invasiva.
 * Também traz, como extrapolação de alto rendimento ainda não cobrada nas
 * provas reais, o diagnóstico espirométrico, a classificação GOLD ABE de
 * doença estável, a sobreposição asma-DPOC, o índice BODE, o tratamento
 * farmacológico de manutenção (incluindo terapia tripla e roflumilaste),
 * opções cirúrgicas, comorbidades relevantes, indicações de oxigenoterapia
 * domiciliar prolongada e deficiência de alfa-1 antitripsina.
 */
const content = `
## 🎯 Essencial

- **Oxigenoterapia na exacerbação da DPOC deve ser controlada e titulada**, alvo de **SpO2 88-92%** — saturação mais alta que isso pode precipitar ou agravar retenção de CO2 (hipercapnia).
- **Excesso de oxigênio piora a hipercapnia por três mecanismos:** piora do desequilíbrio ventilação-perfusão (abolição da vasoconstrição hipóxica compensatória), efeito Haldane (hemoglobina desoxigenada carreia menos CO2) e, em menor grau, redução do drive respiratório hipóxico.
- **Ventilação não invasiva (VNI) é a primeira escolha** na exacerbação da DPOC com **acidose respiratória (pH <7,35 com PaCO2 elevada)** e desconforto respiratório, reduzindo necessidade de intubação, tempo de internação e mortalidade.
- **Contraindicações à VNI:** rebaixamento do nível de consciência não relacionado à hipercapnia (a hipercapnia leve/moderada por si não contraindica), instabilidade hemodinâmica, vômitos incoercíveis, incapacidade de proteger via aérea, trauma/cirurgia facial recente.
- **Tríade terapêutica da exacerbação:** **broncodilatador de curta ação (beta-2 agonista + anticolinérgico) + corticoide sistêmico + antibiótico** (se critérios de Anthonisen — aumento de dispneia, volume e purulência do escarro).
- **Falha de melhora clínica/gasométrica após 1-2h de VNI bem ajustada** é sinal de alarme para intubação orotraqueal — não insistir indefinidamente na VNI diante de piora.
- **Diagnóstico de DPOC exige espirometria:** relação VEF1/CVF <0,7 pós-broncodilatador confirma obstrução fixa (não totalmente reversível) — sem espirometria, o diagnóstico é apenas presuntivo, mesmo com quadro clínico típico.
- **Classificação GOLD ABE (doença estável)** combina sintomas (mMRC/CAT) e histórico de exacerbações para guiar o tratamento farmacológico de manutenção — substitui a antiga classificação ABCD ao unificar B e C num único grupo "E" de alto risco de exacerbação, independente da intensidade sintomática.
- **Sobreposição asma-DPOC (ACO — asthma-COPD overlap)** deve ser considerada em paciente com obstrução fixa, mas com componente de reversibilidade importante e/ou eosinofilia sanguínea elevada — nesse fenótipo, o corticoide inalatório tem papel maior e mais precoce do que na DPOC "pura".

## 💎 Pearls

- **Retenedores crônicos de CO2** têm o drive respiratório parcialmente dependente da hipóxia (não só do CO2) — por isso a correção rápida e excessiva da hipoxemia pode reduzir esse estímulo, embora esse não seja o mecanismo dominante da hipercapnia induzida por O2 (o efeito V/Q é o principal).
- **Cateter nasal de baixo fluxo ou máscara de Venturi com FiO2 baixa e ajustada** são preferíveis a máscaras não reinalantes de alto fluxo na exacerbação, exatamente para permitir a titulação fina do alvo de saturação.
- **Corticoide sistêmico em curso curto (5 dias costuma bastar)** — cursos prolongados não trazem benefício adicional e aumentam efeitos adversos.
- **Antibiótico só é indicado com critérios de Anthonisen presentes (especialmente escarro purulento)**, não em toda exacerbação indiscriminadamente.
- **VNI reduz o trabalho respiratório e melhora a troca gasosa** sem os riscos infecciosos e de lesão de via aérea associados à intubação — por isso é preferida sempre que não houver contraindicação.
- **Oxigenoterapia domiciliar prolongada (>15h/dia) reduz mortalidade** em DPOC estável com hipoxemia crônica significativa (PaO2 ≤55 mmHg, ou ≤59 mmHg com cor pulmonale/policitemia/hipertensão pulmonar) — é uma das poucas intervenções com impacto comprovado em sobrevida na doença estável, junto com a cessação do tabagismo.
- **Deficiência de alfa-1 antitripsina** deve ser suspeitada em DPOC de início precoce (<45 anos), enfisema predominantemente em bases pulmonares (ao contrário do padrão apical do enfisema por tabagismo) e/ou história familiar — dosar alfa-1 antitripsina sérica nesses cenários.
- **Vacinação contra influenza (anual) e pneumococo** reduz frequência e gravidade de exacerbações — parte essencial do manejo da doença estável, frequentemente esquecida na prática.
- **Índice BODE** (IMC, obstrução — VEF1, dispneia — mMRC, capacidade de exercício — teste de caminhada de 6 minutos) é o principal preditor de mortalidade na DPOC estável, mais robusto isoladamente do que o VEF1 sozinho.
- **Doença cardiovascular é a principal causa de morte em portadores de DPOC**, não a insuficiência respiratória — rastreio e controle agressivo de fatores de risco cardiovascular fazem parte do manejo integral da doença estável.
- **Farmacoterapia para cessação do tabagismo (vareniclina, bupropiona, terapia de reposição de nicotina)** aumenta significativamente a taxa de sucesso comparada ao aconselhamento isolado — vareniclina costuma ser a mais eficaz entre as opções.
- **Cirurgia redutora de volume pulmonar** beneficia um subgrupo específico (enfisema de predomínio em lobos superiores, baixa capacidade de exercício após reabilitação) — fora desse perfil, o risco cirúrgico pode superar o benefício.
- **Comorbidades frequentemente subdiagnosticadas na DPOC:** osteoporose (uso crônico de corticoide, sedentarismo), ansiedade/depressão (relacionadas à dispneia crônica) e sarcopenia — rastreio ativo melhora desfecho funcional global, não só respiratório.

## ⚠️ Pitfalls

- **Ofertar oxigênio em alto fluxo "para normalizar" a saturação em DPOC exacerbada** — pode empurrar o paciente para acidose respiratória grave por piora da hipercapnia.
- **Contraindicar VNI só porque o paciente está hipercápnico e um pouco sonolento** — a hipercapnia leve a moderada com rebaixamento leve, revertido rapidamente pela própria VNI, não é contraindicação absoluta; só a incapacidade de proteger via aérea/coma é.
- **Adiar VNI esperando "piorar mais" antes de instituir** — o benefício é maior quando iniciada precocemente diante de acidose respiratória já estabelecida, sem aguardar falência respiratória plena.
- **Prescrever antibiótico para toda exacerbação, independentemente do aspecto do escarro** — uso indiscriminado sem os critérios de Anthonisen.
- **Insistir em VNI sem reavaliação gasométrica** — a ausência de melhora do pH/PaCO2 em 1-2h deve levar à decisão de intubação, não à espera prolongada.
- **Diagnosticar DPOC só pela clínica (tabagista com dispneia crônica), sem espirometria confirmatória** — o diagnóstico formal exige VEF1/CVF <0,7 pós-broncodilatador; outras causas de dispneia crônica podem mimetizar o quadro.
- **Indicar oxigenoterapia domiciliar prolongada baseado só na saturação de repouso pontual** — a indicação formal exige gasometria arterial confirmando hipoxemia crônica nos critérios definidos, não apenas oximetria de consultório.
- **Iniciar corticoide inalatório isoladamente (sem broncodilatador de longa ação associado) como manutenção de rotina** — o corticoide inalatório em DPOC é sempre associado a LABA/LAMA e reservado a fenótipos com exacerbações frequentes e/ou eosinofilia, pelo risco aumentado de pneumonia.
- **Focar só no VEF1 para estimar prognóstico** — índices compostos (BODE) e o histórico de exacerbações têm maior valor preditivo de mortalidade do que a função pulmonar isolada.
- **Negligenciar rastreio cardiovascular por atribuir toda dispneia à DPOC** — doença cardiovascular coexistente é comum e é a principal causa de morte nesses pacientes, podendo mimetizar/agravar a dispneia de causa respiratória.

## 📝 Como a banca cobra

**DPOC aparece em 2 questões (0,94% do corpus)**, ambas do EBSERH, ambas em cenário de **exacerbação aguda**, testando o manejo respiratório imediato mais do que o tratamento crônico de manutenção.

- **EBSERH 2025 Q36** cobrou a **oxigenoterapia controlada na exacerbação da DPOC**, testando o conhecimento do alvo de saturação (88-92%) e o risco de hipercapnia por oxigenoterapia excessiva.
- **EBSERH 2026 Q36** testou a **exacerbação hipercápnica com indicação de ventilação não invasiva**, exigindo reconhecer os critérios gasométricos (acidose respiratória) que definem a indicação de VNI como primeira linha antes de considerar intubação.

## 🧠 Conceito e fisiopatologia

Na exacerbação da DPOC, a piora da obstrução ao fluxo aéreo e do aprisionamento de ar aumenta o trabalho respiratório e compromete as trocas gasosas, levando a hipoxemia e, em graus mais avançados, a hipercapnia com acidose respiratória. A oferta excessiva de oxigênio nesse contexto abole a vasoconstrição pulmonar hipóxica que o organismo usa para desviar sangue de áreas mal ventiladas para áreas bem ventiladas — sem essa compensação, o sangue passa por alvéolos mal ventilados sem trocar CO2 adequadamente, piorando a relação ventilação-perfusão e, por consequência, a hipercapnia. O efeito Haldane contribui de forma acessória: a hemoglobina mais saturada de oxigênio tem menor capacidade de carrear CO2 dissolvido/carbamino, liberando CO2 adicional no plasma.

A VNI (tipicamente em modo bilevel) atua ofertando pressão de suporte inspiratória (reduzindo o trabalho muscular respiratório) e pressão expiratória positiva (contrapondo o auto-PEEP gerado pelo aprisionamento aéreo), o que melhora a ventilação alveolar efetiva e permite eliminar CO2 de forma mais eficiente, revertendo a acidose respiratória sem os riscos da via aérea artificial.

Na doença estável, a DPOC resulta da combinação, em proporções variáveis, de destruição do parênquima alveolar (enfisema, que reduz a retração elástica e colapsa as pequenas vias aéreas na expiração) e inflamação crônica de pequenas vias aéreas (bronquite crônica, que estreita o lúmen por edema e hipersecreção) — ambos os mecanismos, geralmente desencadeados por exposição inalatória crônica (tabagismo na maioria dos casos), convergem para a limitação irreversível ao fluxo aéreo detectada na espirometria.

## 🩺 Quadro clínico

- **Exacerbação da DPOC:** piora aguda da dispneia basal, aumento do volume e/ou purulência do escarro, uso de musculatura acessória, taquipneia.
- **Exacerbação hipercápnica grave:** rebaixamento progressivo do nível de consciência, flapping (asterixe), cefaleia, sonolência — sinais de retenção de CO2 que devem motivar gasometria arterial imediata.
- **Doença estável:** dispneia crônica progressiva aos esforços, tosse produtiva crônica (bronquite crônica: ≥3 meses/ano por 2 anos consecutivos), tórax em tonel e uso de musculatura acessória em fases avançadas.

## 🔎 Diagnóstico

- **Gasometria arterial** é o exame-chave para guiar a conduta: define hipoxemia, hipercapnia e o grau de acidose respiratória (pH), determinando se há indicação de VNI.
- **Oximetria de pulso contínua** para titular a oxigenoterapia dentro do alvo de 88-92%.
- **Radiografia de tórax e exames laboratoriais** para excluir diagnósticos diferenciais/desencadeantes (pneumonia, pneumotórax, TEP).
- **Espirometria com prova broncodilatadora** é obrigatória para o diagnóstico formal de DPOC (VEF1/CVF <0,7 pós-broncodilatador) e para classificar a gravidade da obstrução pelo VEF1 (% do previsto).
- **Classificação GOLD ABE**, baseada em sintomas (escala mMRC ou questionário CAT) e número/gravidade de exacerbações no último ano, orienta a escolha do tratamento inalatório de manutenção.
- **Índice BODE (0-10 pontos)** combina IMC, VEF1 pós-broncodilatador, escala de dispneia mMRC e distância percorrida no teste de caminhada de 6 minutos — usado para estimar prognóstico e apoiar decisões como encaminhamento para transplante pulmonar.
- **Contagem de eosinófilos no sangue periférico** ajuda a prever resposta ao corticoide inalatório — valores mais altos (geralmente ≥300 células/µL) favorecem seu uso associado a broncodilatador de longa ação em exacerbadores frequentes.

## 💊 Tratamento

- **Oxigenoterapia controlada:** cateter nasal ou máscara de Venturi com FiO2 baixa, titulada para SpO2 88-92%.
- **Broncodilatadores:** beta-2 agonista de curta ação + anticolinérgico de curta ação, inalatórios, em doses repetidas.
- **Corticoide sistêmico:** curso curto (cerca de 5 dias).
- **Antibiótico:** se critérios de Anthonisen presentes (piora de dispneia, volume e purulência do escarro).
- **Ventilação não invasiva:** primeira linha diante de acidose respiratória (pH <7,35 com PaCO2 elevada); reavaliar em 1-2h e escalar para intubação orotraqueal se não houver melhora.
- **Manutenção da doença estável:** broncodilatador de longa ação (LABA e/ou LAMA) conforme grupo GOLD; associar corticoide inalatório em exacerbadores frequentes com eosinofilia; oxigenoterapia domiciliar prolongada se hipoxemia crônica critério; reabilitação pulmonar e cessação do tabagismo em todos os estágios — as duas intervenções não farmacológicas com maior impacto em desfecho.
- **Terapia tripla inalatória (LABA + LAMA + corticoide inalatório)** reservada a exacerbadores frequentes com sintomas persistentes apesar de dupla broncodilatação, especialmente com eosinofilia associada.
- **Roflumilaste (inibidor de fosfodiesterase-4)** é opção oral adjuvante no fenótipo bronquite crônica com exacerbações frequentes e VEF1 <50% do previsto, reduzindo frequência de exacerbações.
- **Cessação do tabagismo com suporte farmacológico** (vareniclina, bupropiona ou reposição de nicotina) associada a aconselhamento comportamental, oferecida a todo paciente tabagista ativo, independente do estágio da doença.
- **Cirurgia redutora de volume pulmonar ou bulectomia** em casos selecionados de enfisema heterogêneo grave; **transplante pulmonar** avaliado em doença muito avançada (BODE alto) refratária a tratamento clínico otimizado.

## 📚 Referências essenciais

- GOLD Report — Global Strategy for Prevention, Diagnosis and Management of COPD.
- Diretriz Brasileira de Doença Pulmonar Obstrutiva Crônica — Sociedade Brasileira de Pneumologia e Tisiologia.
`;

export default content.trim();
