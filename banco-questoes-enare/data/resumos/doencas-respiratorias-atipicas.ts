/**
 * Resumo — Infectologia · Doenças respiratórias atípicas.
 *
 * Cobre pneumonias "atípicas" comunitárias (Mycoplasma pneumoniae,
 * Chlamydophila/Chlamydia pneumoniae e Legionella pneumophila), com foco em
 * epidemiologia, transmissão, manifestações extrapulmonares e diagnóstico —
 * eixo cobrado na única questão real do corpus para este assunto (EBSERH
 * 2025 Q50, sobre transmissão e apresentação clínica do M. pneumoniae).
 * Assunto de baixa incidência no corpus (1 questão), fora do corte 80/20,
 * mas extrapolado com profundidade de alto rendimento por ser tema clássico
 * de prova de residência.
 */
const content = `
## 🎯 Essencial

- **"Atípica" não descreve gravidade nem "raridade" — descreve o agente**: bactérias sem parede celular clássica (*Mycoplasma*) ou intracelulares obrigatórias (*Chlamydophila*, *Legionella*), que não coram no Gram e não respondem a beta-lactâmicos isolados.
- **Mycoplasma pneumoniae** é transmitido por **gotículas respiratórias**, tem **período de incubação longo** (2-3 semanas) e causa **doença clinicamente aparente em uma minoria dos infectados** (cerca de 3 a cada 4 infecções são subclínicas ou limitadas a vias aéreas superiores) — por isso surtos se arrastam por semanas a meses em coletividades fechadas (quartéis, escolas, alojamentos).
- **A apresentação mais comum do M. pneumoniae é infecção de vias aéreas superiores/traqueobronquite**, não pneumonia — quando causa pneumonia, é tipicamente a "pneumonia ambulante" (walking pneumonia): quadro arrastado, tosse seca persistente, sintomas sistêmicos desproporcionalmente leves para o achado radiológico.
- **Manifestações extrapulmonares são a marca registrada do Mycoplasma**: otite média (com ou sem miringite bolhosa), faringite, anemia hemolítica por crioaglutininas (IgM anti-antígeno I de hemácia), eritema multiforme/síndrome de Stevens-Johnson, encefalite, Guillain-Barré, miocardite.
- **Diagnóstico é predominantemente clínico-epidemiológico** — sorologia (IgM) e PCR são os métodos confirmatórios reais; a pesquisa de crioaglutininas é um teste **inespecífico e insensível** (positivo em outras infecções, negativo em boa parte dos casos confirmados), não devendo ser usada como método diagnóstico isolado combinado ao Gram (que, por definição, não cora bactérias sem parede).
- **Legionella pneumophila** é adquirida por **inalação de aerossóis contaminados** (torres de resfriamento, sistemas de ar-condicionado, chuveiros, umidificadores) — **não há transmissão pessoa a pessoa** — e cursa classicamente com **hiponatremia**, diarreia, alteração do estado mental e elevação de transaminases, além de acometimento pulmonar.
- **Chlamydophila pneumoniae** produz quadro mais brando, frequentemente com **rouquidão/laringite** proeminente, em adultos jovens saudáveis.

## 💎 Pearls

- Miringite bolhosa (bolhas hemorrágicas na membrana timpânica) é classicamente associada ao Mycoplasma, embora seja achado pouco sensível — quando presente, é bastante sugestivo.
- Anemia hemolítica por crioaglutininas aparece cerca de 2-3 semanas após o início dos sintomas respiratórios — padrão temporal que ajuda a fechar o diagnóstico retrospectivamente.
- A radiografia de tórax do Mycoplasma costuma mostrar **infiltrado intersticial/reticular difuso ou broncopneumonia**, desproporcional ao exame físico discreto ("acha muito na imagem, acha pouco na ausculta") — dissociação clínico-radiológica é a pista clássica de prova.
- Antígeno urinário para *Legionella* detecta só o sorogrupo 1 (responsável pela maioria dos casos, mas não todos) — um resultado negativo não afasta legionelose se a suspeita clínica for alta.
- Surto de pneumonia associado a torre de resfriamento, hotel, cruzeiro ou hospital com sistema hidráulico antigo é a vinheta clássica de Legionella.
- Hiponatremia desproporcional em paciente com pneumonia comunitária é uma pista clássica (mas não exclusiva) de Legionella — SIADH-like por mecanismo ainda não totalmente elucidado.

## ⚠️ Pitfalls

- **Achar que pneumonia é a apresentação mais frequente do M. pneumoniae** — a afinidade do agente é maior por epitélio ciliado de vias aéreas superiores; a maioria das infecções fica restrita a essa topografia ou é subclínica.
- **Superestimar a taxa de doença sintomática** — a maior parte das infecções por Mycoplasma é assintomática ou oligossintomática, não "doença clinicamente aparente em ~80%" como um distrator induz a pensar.
- **Achar que o período de incubação é curto** — é justamente longo (2-3 semanas), o que explica surtos arrastados, não curtos, em coletividades.
- **Usar Gram + crioaglutininas como método diagnóstico definitivo** — o Gram não cora Mycoplasma (sem parede celular) e crioaglutininas têm sensibilidade/especificidade baixas isoladamente.
- **Tratar pneumonia atípica com beta-lactâmico isolado** — sem parede celular (Mycoplasma) ou por ser intracelular obrigatório (Chlamydophila, Legionella), esses agentes são intrinsecamente resistentes a beta-lactâmicos; o tratamento exige classe com ação intracelular (macrolídeo, tetraciclina ou fluoroquinolona respiratória).
- **Pedir cultura de escarro rotineira para Legionella** — a cultura em meio especial (BCYE) existe mas é lenta e pouco sensível na prática; antígeno urinário é o teste de escolha para diagnóstico rápido.

## 🩺 Quadro clínico

- **Mycoplasma:** início insidioso, tosse seca persistente e proeminente (podendo durar semanas), febre baixa a moderada, cefaleia, mal-estar; exame pulmonar frequentemente discreto (estertores discretos ou ausentes) mesmo com infiltrado radiológico relevante.
- **Chlamydophila:** quadro mais brando ainda, com faringite e rouquidão/laringite proeminentes, em jovens saudáveis; muitas vezes autolimitado.
- **Legionella:** quadro mais sistêmico e grave — febre alta, calafrios, tosse (pode ser seca ou produtiva), dispneia, além de **sintomas extrapulmonares marcantes**: diarreia aquosa, dor abdominal, confusão mental/alteração do sensório, mialgia importante. É a "atípica que se comporta como típica grave".

## 🔎 Diagnóstico

- **Mycoplasma:** sorologia IgM/IgG pareada ou PCR de swab nasofaríngeo/escarro (método mais sensível e específico atualmente disponível); crioaglutininas são complementares e inespecíficas, nunca método isolado de confirmação.
- **Legionella:** antígeno urinário (rápido, mas só detecta sorogrupo 1) associado a cultura em meio BCYE (padrão-ouro, mas lento) quando disponível; PCR de escarro/lavado broncoalveolar também é usado.
- **Achados laboratoriais de suporte:** hiponatremia e elevação de transaminases favorecem Legionella; anemia hemolítica com Coombs direto positivo (complemento) e crioaglutininas favorecem Mycoplasma.
- **Radiografia de tórax:** infiltrado desproporcional ao exame físico é comum aos três agentes, mas não diferencia entre eles isoladamente — o diagnóstico etiológico definitivo depende de teste microbiológico específico, não de padrão radiológico.

## 💊 Tratamento

- **Classe terapêutica comum aos três agentes:** macrolídeo (azitromicina, claritromicina) ou fluoroquinolona respiratória (levofloxacino, moxifloxacino) — cobrem organismos intracelulares. Doxiciclina é alternativa eficaz, sobretudo para Mycoplasma e Chlamydophila.
- **Legionella** costuma exigir tratamento mais prolongado (7-14 dias, mais longo em imunossuprimidos) e frequentemente internação, dada a maior gravidade sistêmica; fluoroquinolona respiratória ou azitromicina são as opções preferenciais.
- **Beta-lactâmicos não têm papel isolado** no tratamento dirigido para atípicos — em pneumonia comunitária de cobertura empírica ampla (sem agente identificado), a associação beta-lactâmico + macrolídeo é estratégia consagrada justamente para cobrir também os atípicos.

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus — apenas 1 questão real registrada** (EBSERH 2025 Q50, dificuldade MÉDIA), sobre transmissão e apresentação clínica do *Mycoplasma pneumoniae*. A questão testou justamente os pontos mais armadilhados do tema: a banca colocou como distratores a ideia de que pneumonia seria a apresentação mais comum (é o contrário — via aérea superior predomina), que a doença seria sintomática na maioria dos infectados (é minoria), que a incubação seria curta (é longa) e que Gram + crioaglutininas fechariam o diagnóstico (não fecham) — e a alternativa correta foi justamente sobre a **otite média com ou sem miringite bolhosa** como forma reconhecida de adoecimento.

Mesmo com só 1 aparição neste banco específico, pneumonias atípicas são tema **clássico e recorrente em provas de residência médica em geral** — o "pacote" de diferenciação entre Mycoplasma, Chlamydophila e Legionella (transmissão, manifestações extrapulmonares, hiponatremia, crioaglutininas) é testado com frequência em provas nacionais de clínica médica e infectologia, então vale a pena dominar mesmo com essa amostra pequena.

## 📚 Referências essenciais

- Diretriz de pneumonia adquirida na comunidade da American Thoracic Society/Infectious Diseases Society of America (ATS/IDSA).
- UpToDate/literatura de referência sobre *Mycoplasma pneumoniae*, *Chlamydophila pneumoniae* e *Legionella pneumophila* — epidemiologia, quadro clínico e diagnóstico.
`;

export default content.trim();
