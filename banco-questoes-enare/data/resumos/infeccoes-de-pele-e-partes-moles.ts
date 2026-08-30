/**
 * Resumo — Infectologia · Infecções de pele e partes moles.
 *
 * Cobre as entidades do assunto no corpus: fasceíte necrotizante
 * estreptocócica e o papel da clindamicina, osteomielite por
 * contiguidade a partir de lesão por pressão e abscesso odontogênico
 * cervical com risco de mediastinite. Também traz, como extrapolação de
 * alto rendimento além do que já foi cobrado, a classificação de
 * gravidade das SSTI, o algoritmo purulento vs. não purulento, o pé
 * diabético infectado, impetigo, piomiosite, celulite periorbitária vs.
 * orbitária e a classificação microbiológica da fasceíte necrotizante.
 */
const content = `
## 🎯 Essencial

- **Fasceíte necrotizante** é emergência cirúrgica: dor desproporcional ao exame físico, edema tenso, bolhas hemorrágicas, toxicidade sistêmica de instalação rápida. O tratamento é **debridamento cirúrgico precoce e agressivo + antibiótico de amplo espectro** — nenhum antibiótico isolado substitui a cirurgia.
- **Clindamicina** é adicionada ao esquema pelo seu **efeito antitoxina** (inibe a síntese proteica bacteriana, reduzindo a produção de exotoxinas do Streptococcus pyogenes) — ela é **associada** a um betalactâmico, não o substitui, porque betalactâmicos perdem eficácia em alto inóculo bacteriano com baixa atividade metabólica (efeito Eagle).
- **Osteomielite por contiguidade** a partir de úlcera de pressão: suspeitar quando a lesão não cicatriza, expõe osso ou tem trajeto fistuloso até estrutura óssea. O diagnóstico definitivo é por **biópsia óssea com cultura**, que guia a antibioticoterapia dirigida — não pela cultura de swab superficial, que reflete colonização de pele.
- **Abscesso odontogênico cervical** pode disseminar por contiguidade fascial até espaços cervicais profundos e daí para o **mediastino (mediastinite descendente)** — sinais de alarme: trismo, disfagia, dispneia e edema cervical extenso.
- Diante de sinais de disseminação cervical profunda: **TC de pescoço/tórax com contraste + drenagem cirúrgica precoce + antibiótico de amplo espectro** cobrindo flora mista aeróbia e anaeróbia oral — tratamento oral ambulatorial isolado é insuficiente nesse cenário.
- Nem toda infecção de pele é purulenta ou grave: a IDSA classifica as SSTI em **purulentas vs. não purulentas** e em graus de gravidade **leve/moderada/grave**, e essa classificação é o que guia a escolha entre tratamento ambulatorial oral e internação com antibiótico parenteral.
- **Impetigo** (predominante na infância, altamente contagioso) tem duas formas: não bolhoso (crostas melicéricas, o mais comum, por S. pyogenes e/ou S. aureus) e bolhoso (bolhas flácidas, exclusivamente por S. aureus produtor de toxina esfoliativa) — casos localizados respondem bem a tratamento tópico.

## 💎 Pearls

- Escore **LRINEC** e achados de imagem (gás em partes moles) auxiliam na fasceíte necrotizante, mas **não devem atrasar** a decisão cirúrgica quando a suspeita clínica é alta.
- A **dor desproporcional ao exame** é o sinal mais precoce e sensível de fasceíte necrotizante, muitas vezes presente antes de qualquer alteração cutânea visível.
- A osteomielite por contiguidade tem fisiopatologia diferente da hematogênica: **não exige bacteremia**, a infecção se propaga diretamente do tecido mole/úlcera adjacente ao osso.
- Swab superficial de úlcera cutânea **nunca** deve guiar antibioticoterapia de osteomielite — reflete colonização, não necessariamente o patógeno ósseo real.
- **Angina de Ludwig** é celulite (não abscesso franco) bilateral do espaço submandibular, com risco de obstrução de via aérea por elevação do assoalho da boca/língua — o manejo de via aérea é prioridade junto ao antibiótico.
- **Erisipela** (mais superficial, bordas bem demarcadas, envolvimento linfático, geralmente estreptocócica) e **celulite** (mais profunda, bordas mal definidas, mais associada a Staphylococcus aureus, incluindo cepas MRSA) são frequentemente confundidas — a distinção orienta a escolha empírica de antibiótico.
- Fatores de risco que predispõem a episódios recorrentes de celulite/erisipela incluem **linfedema crônico, insuficiência venosa e tinha pedis interdigital** (porta de entrada frequentemente negligenciada) — tratar a porta de entrada reduz a recorrência tanto quanto o antibiótico do episódio agudo.
- Lesões purulentas (abscesso, furúnculo, carbúnculo) devem ter cobertura empírica para **Staphylococcus aureus resistente à meticilina adquirido na comunidade (CA-MRSA)** quando há fatores de risco ou falha de resposta inicial — celulite não purulenta isolada geralmente não exige essa cobertura.
- **Piomiosite** é infecção purulenta primária do músculo esquelético, mais comum em climas tropicais e em imunossuprimidos, geralmente por S. aureus — cursa com dor muscular localizada, febre e massa palpável, exigindo drenagem além do antibiótico.
- **Infecção de sítio cirúrgico** costuma surgir entre o 5º e o 10º dia de pós-operatório, mas febre alta e toxicidade sistêmica já nas primeiras 24-72h levantam suspeita de patógeno mais agressivo (Streptococcus pyogenes ou Clostridium), exigindo reabordagem cirúrgica precoce.

## ⚠️ Pitfalls

- **Aguardar confirmação por imagem/laboratório** antes de indicar cirurgia em fasceíte necrotizante com alta suspeita clínica — o atraso aumenta a mortalidade de forma exponencial.
- **Usar clindamicina como monoterapia** na fasceíte necrotizante estreptocócica — ela deve ser associada a um betalactâmico, não substituí-lo.
- **Diagnosticar osteomielite por contiguidade com cultura de swab de úlcera** — gera tratamento inadequado, cobrindo colonizantes em vez do patógeno real.
- **Tratar abscesso odontogênico cervical com sinais de alarme apenas com antibiótico oral ambulatorial** — esses sinais exigem internação, imagem e frequentemente drenagem cirúrgica.
- **Menosprezar trismo/disfagia como "só dor de dente"** — são sinais de comprometimento de espaços cervicais profundos.
- **Não investigar/tratar a porta de entrada** (tinha pedis, linfedema, insuficiência venosa) em celulite/erisipela recorrente — tratar só o episódio agudo sem abordar o fator predisponente leva a recidivas frequentes.
- **Tratar toda celulite/abscesso empiricamente sem cobrir CA-MRSA** em cenário purulento com fator de risco — pode levar à falha terapêutica em área de alta prevalência de resistência.
- **Ignorar o pé diabético infectado como categoria à parte** — a avaliação de gravidade (leve/moderada/grave, classificação IDSA/PEDIS) e a investigação de osteomielite subjacente mudam a conduta em relação a uma SSTI simples.
- **Tratar celulite periorbitária (pré-septal) e celulite orbitária como a mesma entidade** — a orbitária (proptose, dor à movimentação ocular, oftalmoplegia) é emergência com risco de perda visual e extensão intracraniana, exigindo TC de órbita e frequentemente drenagem cirúrgica, ao contrário da forma pré-septal, mais benigna.

## 📝 Como a banca cobra

**Infecções de pele e partes moles aparece em 4 questões (1,89% do corpus)**, entre EBSERH e ENARE, com foco em reconhecimento de gravidade e conduta imediata.

- **EBSERH 2026 Q54** cobrou o papel da clindamicina na fasceíte necrotizante estreptocócica — o ponto central é entender que ela age como antitoxina, associada ao betalactâmico.
- **ENARE 2025 Q7** e **ENARE 2025 Q30** trouxeram o mesmo tema — osteomielite por contiguidade em lesão por pressão — em duas questões diferentes da mesma prova, reforçando a importância da biópsia óssea como método diagnóstico correto.
- **ENARE 2026 Q62** cobrou abscesso odontogênico cervical com risco de mediastinite, testando o reconhecimento dos sinais de disseminação para espaços profundos.

## 🧠 Conceito e fisiopatologia

A fasceíte necrotizante é uma infecção fulminante da fáscia superficial com trombose de vasos perfurantes, levando a necrose tecidual rápida por isquemia associada à ação de toxinas bacterianas — as exotoxinas pirogênicas do S. pyogenes funcionam como superantígenos, amplificando de forma desproporcional a resposta inflamatória sistêmica. Por isso, bloquear a síntese dessas toxinas (clindamicina) é estratégia complementar essencial ao debridamento cirúrgico.

A osteomielite por contiguidade ocorre pela extensão direta da infecção de tecidos moles adjacentes (úlceras de pressão, feridas cirúrgicas, focos odontogênicos) ao osso, formando biofilme bacteriano que dificulta a penetração antibiótica sem debridamento associado.

Infecções odontogênicas se disseminam ao longo de planos fasciais cervicais virtualmente contínuos até o mediastino — o que explica por que um foco dentário aparentemente trivial pode evoluir para mediastinite fatal em questão de horas a poucos dias, exigindo vigilância ativa para sinais de progressão.

A distinção clínica entre erisipela e celulite reflete a profundidade da infecção na pele: a erisipela acomete derme superficial e vasos linfáticos (bordas nítidas, elevadas), enquanto a celulite acomete derme profunda e tecido subcutâneo (bordas mal definidas) — essa diferença de profundidade tem correlação com o patógeno mais provável e, por vezes, com a resposta terapêutica esperada.

## 🩺 Quadro clínico

- **Fasceíte necrotizante:** dor desproporcional ao exame nas primeiras horas, evoluindo para edema tenso, equimoses, bolhas hemorrágicas, crepitação (quando há gás tecidual) e hipoestesia por destruição de terminações nervosas — a progressão para toxicidade sistêmica costuma ser rápida, em horas.
- **Osteomielite por contiguidade:** úlcera crônica que não cicatriza, com trajeto fistuloso, exposição óssea visível ou teste "probe-to-bone" positivo (sonda atinge osso ao explorar a lesão).
- **Abscesso odontogênico cervical:** edema cervical progressivo, trismo, disfagia, sialorreia e voz abafada ("voz de batata quente") quando há comprometimento de espaços profundos.
- **Impetigo:** lesões crostosas melicéricas (forma não bolhosa) ou bolhas flácidas que se rompem facilmente (forma bolhosa), predominando em face e extremidades expostas de crianças.
- **Erisipela vs. celulite:** a erisipela tem bordas nítidas e elevadas, com limite bem demarcado entre pele afetada e sã; a celulite tem bordas mal definidas e progressão mais insidiosa, refletindo acometimento mais profundo.

## 🔎 Diagnóstico

- **Fasceíte necrotizante:** essencialmente clínico (dor desproporcional, evolução rápida, toxicidade sistêmica); TC/RM e LRINEC auxiliam, mas a exploração cirúrgica é o padrão-ouro.
- **Osteomielite por contiguidade:** RM é o exame de imagem mais sensível; biópsia óssea com cultura é o padrão-ouro microbiológico.
- **Abscesso odontogênico cervical:** TC de pescoço/tórax com contraste para mapear extensão e avaliar comprometimento de via aérea/mediastino.
- **SSTI em geral:** classificar como purulenta ou não purulenta e como leve, moderada ou grave — essa dupla classificação (IDSA) define via de administração do antibiótico e necessidade de internação.
- **Piomiosite:** RM é o exame mais sensível para identificar a coleção intramuscular já na fase inicial, antes de haver flutuação clinicamente evidente.

## 💊 Tratamento

- **Fasceíte necrotizante:** debridamento cirúrgico precoce e amplo + antibiótico de amplo espectro, incluindo clindamicina associada a betalactâmico (penicilina, quando S. pyogenes confirmado).
- **Osteomielite por contiguidade:** debridamento do tecido necrótico/úlcera + antibioticoterapia prolongada dirigida por biópsia óssea.
- **Abscesso odontogênico cervical:** drenagem cirúrgica + antibiótico cobrindo flora mista oral (ex.: ampicilina-sulbactam ou clindamicina), com manejo precoce de via aérea se houver sinais de comprometimento.
- **SSTI purulenta leve/moderada:** incisão e drenagem costuma ser suficiente, com antibiótico oral cobrindo CA-MRSA (sulfametoxazol-trimetoprima, clindamicina ou doxiciclina) se houver fator de risco.
- **SSTI não purulenta (celulite/erisipela) leve/moderada:** antibiótico oral cobrindo estreptococo (e estafilococo sensível), sem necessidade rotineira de cobertura para CA-MRSA.
- **Impetigo localizado:** mupirocina tópica é suficiente na maioria dos casos; formas extensas ou bolhosas disseminadas podem exigir antibiótico oral (cefalexina, ou sulfametoxazol-trimetoprima se houver suspeita de CA-MRSA).

## 🧭 Além do grounding: o que mais pode cair

- **Classificação de gravidade das SSTI (IDSA):** leve (sem sinais sistêmicos, tratamento ambulatorial oral), moderada (sinais sistêmicos presentes, mas sem instabilidade, pode exigir antibiótico parenteral) e grave (sinais de sepse, falha de resposta, imunossupressão) — essa estratificação organiza toda a decisão terapêutica além do diagnóstico etiológico.
- **Algoritmo purulento vs. não purulento** é a primeira bifurcação prática no manejo de SSTI: purulento pensa em S. aureus (incluindo CA-MRSA) e prioriza drenagem; não purulento pensa mais em Streptococcus pyogenes e prioriza antibiótico sistêmico sem necessidade de drenagem.
- **Pé diabético infectado** merece classificação própria (IDSA/PEDIS), com avaliação obrigatória de doença arterial periférica e rastreio de osteomielite subjacente (teste "probe-to-bone" e imagem) sempre que a úlcera for profunda ou crônica.
- **Duração da antibioticoterapia** costuma ser subestimada em prova: celulite/erisipela não complicada 5-7 dias; osteomielite por contiguidade tratada sem amputação completa do foco, tipicamente 6 semanas; fasceíte necrotizante, até resolução dos sinais sistêmicos e ausência de necessidade de novos debridamentos.
- **Infecções por exposição a água ou animais**: Vibrio vulnificus (água salgada morna, pode causar fasceíte necrotizante fulminante em cirróticos) e Aeromonas (água doce) são causas menos comuns, mas classicamente cobradas quando a história menciona exposição aquática; mordeduras de animais (Pasteurella multocida) e humanas (flora mista, incluindo Eikenella) têm cobertura empírica padrão com amoxicilina-clavulanato.
- **Mionecrose clostridial (gangrena gasosa)** é diagnóstico diferencial de fasceíte necrotizante, com crepitação por gás tecidual, geralmente após trauma penetrante ou cirurgia contaminada — o tratamento também é debridamento cirúrgico agressivo mais antibiótico (penicilina + clindamicina), reforçando o princípio de que nenhuma infecção necrotizante de partes moles é tratada só com antibiótico.
- **Classificação da fasceíte necrotizante por tipo microbiológico:** tipo I (polimicrobiana, mista aeróbia-anaeróbia, mais comum em diabéticos/imunossuprimidos e em região perineal — gangrena de Fournier é sua forma clássica), tipo II (monomicrobiana, geralmente Streptococcus pyogenes, pode acometer indivíduos hígidos) e tipo III (Vibrio ou Clostridium, associada a exposição aquática ou trauma) — a classificação orienta a cobertura antibiótica empírica inicial.
- **Síndrome do choque tóxico estreptocócico** pode complicar fasceíte necrotizante ou outra infecção invasiva por S. pyogenes: hipotensão + disfunção de múltiplos órgãos (renal, hepática, coagulopatia, rash escarlatiniforme) — reforça a lógica de associar clindamicina (antitoxina) ao esquema, além do suporte hemodinâmico intensivo.
- Em toda SSTI internada, **reavaliar e descalonar o antibiótico empírico assim que a cultura e o antibiograma estiverem disponíveis** é conduta esperada — manter cobertura de amplo espectro indefinidamente após identificação do patógeno é erro de manejo, não só de diagnóstico.

## 📚 Referências essenciais

- IDSA Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections.
- IDSA Clinical Practice Guideline for the Diagnosis and Treatment of Diabetic Foot Infections (referência para osteomielite por contiguidade e pé diabético).
- Diretrizes de manejo de infecções cervicais profundas em cirurgia de cabeça e pescoço.
`;

export default content.trim();
