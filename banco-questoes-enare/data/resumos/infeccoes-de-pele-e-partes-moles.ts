/**
 * Resumo — Infectologia · Infecções de pele e partes moles.
 *
 * Reorganizado por entidade clínica (cada infecção tem sua própria seção
 * com quando suspeitar, diagnóstico, tratamento, pearl e pitfall juntos),
 * em vez de picado entre seções genéricas de tipo.
 *
 * Cobre as entidades do assunto no corpus: fasceíte necrotizante
 * estreptocócica e o papel da clindamicina, osteomielite por contiguidade
 * a partir de lesão por pressão e abscesso odontogênico cervical com risco
 * de mediastinite. Inclui também extrapolações de alto rendimento
 * (algoritmo purulento vs. não purulento, erisipela/celulite, impetigo,
 * piomiosite, pé diabético infectado, celulite periorbitária vs. orbitária,
 * mionecrose clostridial, síndrome do choque tóxico estreptocócico,
 * infecções por exposição a água/mordedura) ainda não cobradas no corpus,
 * mas plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- A primeira pergunta de qualquer SSTI é **purulenta ou não purulenta** — purulento pensa em *S. aureus* (incluindo CA-MRSA) e prioriza drenagem; não purulento pensa mais em *Streptococcus pyogenes* e prioriza antibiótico sistêmico.
- A segunda pergunta é **superficial ou profunda/necrotizante** — dor desproporcional ao exame físico é o sinal mais precoce de infecção necrotizante e nunca deve esperar confirmação de imagem/laboratório para indicar cirurgia.
- **Nenhuma infecção necrotizante de partes moles (fasceíte, mionecrose) é tratada só com antibiótico** — debridamento cirúrgico precoce e agressivo é sempre parte do tratamento, nunca opcional.
- Diante de infecção que se propaga por planos profundos (cervical, óssea, mediastinal), **a via de disseminação por contiguidade explica a gravidade** — um foco aparentemente trivial (úlcera de pressão, dente) pode evoluir para osteomielite ou mediastinite em dias.

## 📝 Como a banca cobra

**Infecções de pele e partes moles aparece em 4 questões (1,89% do corpus)**, entre EBSERH e ENARE, com foco em reconhecimento de gravidade e conduta imediata.

- **EBSERH 2026 Q54** cobrou o papel da clindamicina na fasceíte necrotizante estreptocócica — o ponto central é entender que ela age como antitoxina, associada ao betalactâmico.
- **ENARE 2025 Q7** e **ENARE 2025 Q30** trouxeram o mesmo tema — osteomielite por contiguidade em lesão por pressão — em duas questões diferentes da mesma prova, reforçando a importância da biópsia óssea como método diagnóstico correto.
- **ENARE 2026 Q62** cobrou abscesso odontogênico cervical com risco de mediastinite, testando o reconhecimento dos sinais de disseminação para espaços profundos.

## 🧠 Conceito e fisiopatologia

- SSTI variam num espectro de **profundidade**, e essa profundidade determina tanto o quadro clínico quanto a urgência terapêutica:
  - Epiderme → impetigo
  - Derme superficial/linfáticos → erisipela
  - Derme profunda/subcutâneo → celulite
  - Fáscia → fasceíte necrotizante
  - Músculo → piomiosite, mionecrose
- Nas infecções necrotizantes, o dano não é só isquêmico: exotoxinas pirogênicas do *S. pyogenes* funcionam como **superantígenos**, amplificando de forma desproporcional a resposta inflamatória sistêmica → por isso bloquear a síntese dessas toxinas (clindamicina) é estratégia complementar essencial ao debridamento
- Infecções **por contiguidade** (osteomielite a partir de úlcera, mediastinite a partir de foco odontogênico) se espalham ao longo de planos teciduais/fasciais contínuos, sem depender de bacteremia → por isso um foco superficial aparentemente controlado pode já ter alcançado estruturas profundas quando os sinais de alarme aparecem

💡 Pensa assim: quanto mais fundo o plano acometido (pele → derme → fáscia → músculo), mais silencioso o início e mais rápida a evolução — a fasceíte "grita pouco na pele e mata rápido por dentro", daí a dor desproporcional ao exame ser o sinal de alarme mais valioso.

## 🔹 Fasceíte necrotizante

- **Quando suspeitar:** dor desproporcional ao exame físico (sinal mais precoce e sensível, muitas vezes antes de qualquer alteração cutânea visível), evoluindo em horas para edema tenso, bolhas hemorrágicas, crepitação (se houver gás tecidual), hipoestesia por destruição de nervos e toxicidade sistêmica rápida.
- **Diagnóstico:** essencialmente clínico — a exploração cirúrgica é o padrão-ouro; escore **LRINEC** e achados de imagem (gás em partes moles) auxiliam, mas **nunca devem atrasar** a decisão cirúrgica diante de alta suspeita.
- **Tratamento:** **debridamento cirúrgico precoce e agressivo** + antibiótico de amplo espectro, incluindo **clindamicina associada a um betalactâmico** (nunca clindamicina isolada) — a clindamicina age como **antitoxina** (inibe síntese proteica bacteriana, reduzindo exotoxinas), enquanto betalactâmicos perdem eficácia em alto inóculo com baixa atividade metabólica (efeito Eagle).
- **Classificação microbiológica:** tipo I — polimicrobiana, mista aeróbia-anaeróbia, mais comum em diabéticos/imunossuprimidos e em região perineal (**gangrena de Fournier** é sua forma clássica); tipo II — monomicrobiana, geralmente *S. pyogenes*, pode acometer indivíduos hígidos; tipo III — *Vibrio* ou *Clostridium*, associada a exposição aquática ou trauma.
- 💎 **Pearl:** pode complicar com **síndrome do choque tóxico estreptocócico** (hipotensão + disfunção de múltiplos órgãos + rash escarlatiniforme) — reforça a lógica de associar clindamicina ao esquema, além do suporte hemodinâmico intensivo.
- ⚠️ **Pitfall:** usar clindamicina como monoterapia, ou aguardar confirmação por imagem/laboratório antes de indicar cirurgia com alta suspeita clínica — o atraso aumenta a mortalidade de forma exponencial.
- 📝 **Como caiu:** EBSERH 2026 Q54 — papel da clindamicina.

## 🔹 Mionecrose clostridial (gangrena gasosa) — diferencial da fasceíte

- **Quando suspeitar:** dor intensa e crepitação por gás tecidual, geralmente após trauma penetrante ou cirurgia contaminada.
- **Tratamento:** o mesmo princípio da fasceíte — debridamento cirúrgico agressivo + antibiótico (penicilina + clindamicina) — reforçando que nenhuma infecção necrotizante se trata só com antibiótico.
- 📝 **Como caiu:** ainda não cobrado no corpus — diferencial clássico de fasceíte necrotizante.

## 🔹 Osteomielite por contiguidade (lesão por pressão)

- **Quando suspeitar:** úlcera de pressão crônica que não cicatriza, com trajeto fistuloso, exposição óssea visível ou teste **"probe-to-bone"** positivo (sonda atinge osso ao explorar a lesão).
- **Diagnóstico:** RM é o exame de imagem mais sensível; **biópsia óssea com cultura é o padrão-ouro microbiológico** — swab superficial de úlcera **nunca** deve guiar antibioticoterapia, pois reflete colonização de pele, não o patógeno ósseo real.
- **Tratamento:** debridamento do tecido necrótico/úlcera + antibioticoterapia prolongada dirigida por biópsia óssea, tipicamente **6 semanas** quando não há amputação completa do foco.
- 💎 **Pearl:** ao contrário da osteomielite hematogênica, a por contiguidade **não exige bacteremia** — a infecção se propaga diretamente do tecido mole/úlcera adjacente ao osso, formando biofilme que dificulta penetração antibiótica sem debridamento associado.
- ⚠️ **Pitfall:** diagnosticar/tratar com cultura de swab de úlcera — gera cobertura de colonizantes, não do patógeno real, e leva a falha terapêutica.
- 📝 **Como caiu:** ENARE 2025 Q7 e ENARE 2025 Q30 — mesmo tema em duas questões da mesma prova, reforçando a biópsia óssea.

## 🔹 Abscesso odontogênico cervical e mediastinite descendente

- **Quando suspeitar:** edema cervical progressivo a partir de foco dentário, com **trismo, disfagia, sialorreia, voz abafada** ("voz de batata quente") — sinais de comprometimento de espaços cervicais profundos, com risco de disseminação por contiguidade fascial até o **mediastino (mediastinite descendente)**.
- **Diagnóstico:** TC de pescoço/tórax com contraste para mapear extensão e avaliar comprometimento de via aérea/mediastino.
- **Tratamento:** drenagem cirúrgica + antibiótico cobrindo flora mista aeróbia e anaeróbia oral (ampicilina-sulbactam ou clindamicina), com **manejo precoce de via aérea** se houver sinais de comprometimento — tratamento oral ambulatorial isolado é insuficiente diante de sinais de alarme.
- 💎 **Pearl:** **angina de Ludwig** é celulite (não abscesso franco) bilateral do espaço submandibular, com risco de obstrução de via aérea por elevação do assoalho da boca/língua — o manejo de via aérea é prioridade junto ao antibiótico, mesmo sem coleção drenável.
- ⚠️ **Pitfall:** menosprezar trismo/disfagia como "só dor de dente", ou tratar com antibiótico oral ambulatorial isolado diante de sinais de alarme — ambos atrasam o reconhecimento de comprometimento de espaços profundos.
- 📝 **Como caiu:** ENARE 2026 Q62.

## 🔹 Erisipela e celulite

- **Quando suspeitar:** erisipela — bordas nítidas e elevadas, limite bem demarcado entre pele afetada e sã, acometimento de derme superficial e linfáticos, geralmente estreptocócica; celulite — bordas mal definidas, mais profunda (derme profunda/subcutâneo), mais associada a *S. aureus* (incluindo cepas MRSA).
- **Fatores de risco para recorrência:** linfedema crônico, insuficiência venosa e **tinha pedis interdigital** (porta de entrada frequentemente negligenciada) — tratar a porta de entrada reduz recorrência tanto quanto o antibiótico do episódio agudo.
- **Tratamento:** antibiótico oral cobrindo estreptococo (e estafilococo sensível) na forma não purulenta, sem necessidade rotineira de cobertura CA-MRSA; 5-7 dias na forma não complicada.
- ⚠️ **Pitfall:** não investigar/tratar a porta de entrada em quadro recorrente, tratando só o episódio agudo repetidamente.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Infecções purulentas (abscesso, furúnculo, impetigo)

- **Impetigo:** predominante na infância, altamente contagioso — não bolhoso (crostas melicéricas, mais comum, *S. pyogenes* e/ou *S. aureus*) e bolhoso (bolhas flácidas, exclusivamente por *S. aureus* produtor de toxina esfoliativa). Localizado responde a mupirocina tópica; formas extensas/bolhosas disseminadas podem exigir antibiótico oral.
- **Abscesso/furúnculo:** incisão e drenagem costuma ser suficiente nos casos leves/moderados, com antibiótico oral cobrindo **CA-MRSA** (sulfametoxazol-trimetoprima, clindamicina ou doxiciclina) quando há fator de risco ou falha de resposta inicial.
- **Piomiosite:** infecção purulenta primária do músculo esquelético, mais comum em climas tropicais e imunossuprimidos, geralmente por *S. aureus* — dor muscular localizada, febre e massa palpável; RM é o exame mais sensível, já na fase inicial antes de flutuação clinicamente evidente; exige drenagem além do antibiótico.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Pé diabético infectado e celulite periorbitária vs. orbitária

- **Pé diabético infectado:** classificação própria (IDSA/PEDIS) de gravidade, com avaliação obrigatória de doença arterial periférica e rastreio de osteomielite subjacente (teste "probe-to-bone" e imagem) sempre que a úlcera for profunda ou crônica — não tratar como SSTI simples.
- **Celulite periorbitária (pré-septal):** infecção superficial às estruturas orbitárias, geralmente benigna, tratada com antibiótico oral.
- **Celulite orbitária:** proptose, dor à movimentação ocular, oftalmoplegia — emergência com risco de perda visual e extensão intracraniana, exigindo TC de órbita e frequentemente drenagem cirúrgica.
- ⚠️ **Pitfall:** tratar celulite periorbitária e orbitária como a mesma entidade — a distinção muda completamente a urgência e a via de tratamento.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Infecções por exposição a água e mordeduras

- ***Vibrio vulnificus*** (água salgada morna) pode causar fasceíte necrotizante fulminante, sobretudo em cirróticos; ***Aeromonas*** (água doce) é causa análoga menos comum — cobrado classicamente quando a história menciona exposição aquática.
- **Mordeduras:** animal (*Pasteurella multocida*) e humana (flora mista, incluindo *Eikenella*) têm cobertura empírica padrão com amoxicilina-clavulanato.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**Classificação de gravidade das SSTI (IDSA) — organiza a decisão terapêutica além do diagnóstico etiológico**

| Gravidade | Sinais | Conduta |
|---|---|---|
| Leve | Sem sinais sistêmicos | Ambulatorial, antibiótico oral |
| Moderada | Sinais sistêmicos presentes, sem instabilidade | Pode exigir antibiótico parenteral |
| Grave | Sepse, falha de resposta, imunossupressão | Internação, amplo espectro, reavaliação cirúrgica |

Em toda SSTI internada, **reavaliar e descalonar o antibiótico empírico** assim que cultura/antibiograma estiverem disponíveis é conduta esperada — manter amplo espectro indefinidamente após identificação do patógeno é erro de manejo.

## 📚 Referências essenciais

- IDSA Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections.
- IDSA Clinical Practice Guideline for the Diagnosis and Treatment of Diabetic Foot Infections (referência para osteomielite por contiguidade e pé diabético).
- Diretrizes de manejo de infecções cervicais profundas em cirurgia de cabeça e pescoço.
`;

export default content.trim();
