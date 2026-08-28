/**
 * Resumo — Pneumologia · DPOC.
 *
 * Cobre as entidades do assunto no corpus: exacerbação da DPOC com
 * necessidade de oxigenoterapia controlada (risco de hipercapnia) e
 * exacerbação hipercápnica com indicação de ventilação não invasiva.
 */
const content = `
## 🎯 Essencial

- **Oxigenoterapia na exacerbação da DPOC deve ser controlada e titulada**, alvo de **SpO2 88-92%** — saturação mais alta que isso pode precipitar ou agravar retenção de CO2 (hipercapnia).
- **Excesso de oxigênio piora a hipercapnia por três mecanismos:** piora do desequilíbrio ventilação-perfusão (abolição da vasoconstrição hipóxica compensatória), efeito Haldane (hemoglobina desoxigenada carreia menos CO2) e, em menor grau, redução do drive respiratório hipóxico.
- **Ventilação não invasiva (VNI) é a primeira escolha** na exacerbação da DPOC com **acidose respiratória (pH <7,35 com PaCO2 elevada)** e desconforto respiratório, reduzindo necessidade de intubação, tempo de internação e mortalidade.
- **Contraindicações à VNI:** rebaixamento do nível de consciência não relacionado à hipercapnia (a hipercapnia leve/moderada por si não contraindica), instabilidade hemodinâmica, vômitos incoercíveis, incapacidade de proteger via aérea, trauma/cirurgia facial recente.
- **Tríade terapêutica da exacerbação:** **broncodilatador de curta ação (beta-2 agonista + anticolinérgico) + corticoide sistêmico + antibiótico** (se critérios de Anthonisen — aumento de dispneia, volume e purulência do escarro).
- **Falha de melhora clínica/gasométrica após 1-2h de VNI bem ajustada** é sinal de alarme para intubação orotraqueal — não insistir indefinidamente na VNI diante de piora.

## 💎 Pearls

- **Retenedores crônicos de CO2** têm o drive respiratório parcialmente dependente da hipóxia (não só do CO2) — por isso a correção rápida e excessiva da hipoxemia pode reduzir esse estímulo, embora esse não seja o mecanismo dominante da hipercapnia induzida por O2 (o efeito V/Q é o principal).
- **Cateter nasal de baixo fluxo ou máscara de Venturi com FiO2 baixa e ajustada** são preferíveis a máscaras não reinalantes de alto fluxo na exacerbação, exatamente para permitir a titulação fina do alvo de saturação.
- **Corticoide sistêmico em curso curto (5 dias costuma bastar)** — cursos prolongados não trazem benefício adicional e aumentam efeitos adversos.
- **Antibiótico só é indicado com critérios de Anthonisen presentes (especialmente escarro purulento)**, não em toda exacerbação indiscriminadamente.
- **VNI reduz o trabalho respiratório e melhora a troca gasosa** sem os riscos infecciosos e de lesão de via aérea associados à intubação — por isso é preferida sempre que não houver contraindicação.

## ⚠️ Pitfalls

- **Ofertar oxigênio em alto fluxo "para normalizar" a saturação em DPOC exacerbada** — pode empurrar o paciente para acidose respiratória grave por piora da hipercapnia.
- **Contraindicar VNI só porque o paciente está hipercápnico e um pouco sonolento** — a hipercapnia leve a moderada com rebaixamento leve, revertido rapidamente pela própria VNI, não é contraindicação absoluta; só a incapacidade de proteger via aérea/coma é.
- **Adiar VNI esperando "piorar mais" antes de instituir** — o benefício é maior quando iniciada precocemente diante de acidose respiratória já estabelecida, sem aguardar falência respiratória plena.
- **Prescrever antibiótico para toda exacerbação, independentemente do aspecto do escarro** — uso indiscriminado sem os critérios de Anthonisen.
- **Insistir em VNI sem reavaliação gasométrica** — a ausência de melhora do pH/PaCO2 em 1-2h deve levar à decisão de intubação, não à espera prolongada.

## 📝 Como a banca cobra

**DPOC aparece em 2 questões (0,94% do corpus)**, ambas do EBSERH, ambas em cenário de **exacerbação aguda**, testando o manejo respiratório imediato mais do que o tratamento crônico de manutenção.

- **EBSERH 2025 Q36** cobrou a **oxigenoterapia controlada na exacerbação da DPOC**, testando o conhecimento do alvo de saturação (88-92%) e o risco de hipercapnia por oxigenoterapia excessiva.
- **EBSERH 2026 Q36** testou a **exacerbação hipercápnica com indicação de ventilação não invasiva**, exigindo reconhecer os critérios gasométricos (acidose respiratória) que definem a indicação de VNI como primeira linha antes de considerar intubação.

## 🧠 Conceito e fisiopatologia

Na exacerbação da DPOC, a piora da obstrução ao fluxo aéreo e do aprisionamento de ar aumenta o trabalho respiratório e compromete as trocas gasosas, levando a hipoxemia e, em graus mais avançados, a hipercapnia com acidose respiratória. A oferta excessiva de oxigênio nesse contexto abole a vasoconstrição pulmonar hipóxica que o organismo usa para desviar sangue de áreas mal ventiladas para áreas bem ventiladas — sem essa compensação, o sangue passa por alvéolos mal ventilados sem trocar CO2 adequadamente, piorando a relação ventilação-perfusão e, por consequência, a hipercapnia. O efeito Haldane contribui de forma acessória: a hemoglobina mais saturada de oxigênio tem menor capacidade de carrear CO2 dissolvido/carbamino, liberando CO2 adicional no plasma.

A VNI (tipicamente em modo bilevel) atua ofertando pressão de suporte inspiratória (reduzindo o trabalho muscular respiratório) e pressão expiratória positiva (contrapondo o auto-PEEP gerado pelo aprisionamento aéreo), o que melhora a ventilação alveolar efetiva e permite eliminar CO2 de forma mais eficiente, revertendo a acidose respiratória sem os riscos da via aérea artificial.

## 🩺 Quadro clínico

- **Exacerbação da DPOC:** piora aguda da dispneia basal, aumento do volume e/ou purulência do escarro, uso de musculatura acessória, taquipneia.
- **Exacerbação hipercápnica grave:** rebaixamento progressivo do nível de consciência, flapping (asterixe), cefaleia, sonolência — sinais de retenção de CO2 que devem motivar gasometria arterial imediata.

## 🔎 Diagnóstico

- **Gasometria arterial** é o exame-chave para guiar a conduta: define hipoxemia, hipercapnia e o grau de acidose respiratória (pH), determinando se há indicação de VNI.
- **Oximetria de pulso contínua** para titular a oxigenoterapia dentro do alvo de 88-92%.
- **Radiografia de tórax e exames laboratoriais** para excluir diagnósticos diferenciais/desencadeantes (pneumonia, pneumotórax, TEP).

## 💊 Tratamento

- **Oxigenoterapia controlada:** cateter nasal ou máscara de Venturi com FiO2 baixa, titulada para SpO2 88-92%.
- **Broncodilatadores:** beta-2 agonista de curta ação + anticolinérgico de curta ação, inalatórios, em doses repetidas.
- **Corticoide sistêmico:** curso curto (cerca de 5 dias).
- **Antibiótico:** se critérios de Anthonisen presentes (piora de dispneia, volume e purulência do escarro).
- **Ventilação não invasiva:** primeira linha diante de acidose respiratória (pH <7,35 com PaCO2 elevada); reavaliar em 1-2h e escalar para intubação orotraqueal se não houver melhora.

## 📚 Referências essenciais

- GOLD Report — Global Strategy for Prevention, Diagnosis and Management of COPD.
- Diretriz Brasileira de Doença Pulmonar Obstrutiva Crônica — Sociedade Brasileira de Pneumologia e Tisiologia.
`;

export default content.trim();
