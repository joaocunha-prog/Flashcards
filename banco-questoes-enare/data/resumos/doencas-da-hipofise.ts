/**
 * Resumo — Endocrinologia · Doenças da hipófise.
 *
 * Reorganizado por entidade clínica, já que o assunto reúne tumores e
 * síndromes hipofisárias distintas. O adenoma hipofisário não funcionante
 * com hiperprolactinemia por efeito haste é a entidade com grounding real
 * no corpus (EBSERH 2026 Q48). As demais entidades (prolactinoma,
 * acromegalia, doença de Cushing, apoplexia hipofisária,
 * pan-hipopituitarismo) são extrapolações de alto rendimento ainda não
 * cobradas no corpus. Assunto de baixa incidência no corpus (1 questão),
 * fora do corte 80/20.
 */
const content = `
## 🎯 Essencial

- **Macroadenoma (>1 cm) causa sintomas por dois mecanismos distintos e independentes**: efeito de massa (compressão do quiasma óptico → hemianopsia bitemporal; compressão do tecido hipofisário normal → hipopituitarismo) e, se for funcionante, hipersecreção hormonal específica. Um adenoma não funcionante causa só o primeiro mecanismo.
- **Hiperprolactinemia por "efeito haste" (stalk effect)** ocorre quando uma lesão selar/suprasselar comprime o pedículo hipofisário e interrompe o transporte de dopamina do hipotálamo até os lactotrofos — como a dopamina é o principal **inibidor tônico** da secreção de prolactina, a interrupção do fluxo causa hiperprolactinemia **discreta a moderada** (tipicamente <100-150 ng/mL), bem diferente da elevação **maciça** (frequentemente >200-250 ng/mL, muitas vezes na casa dos milhares) esperada em macroprolactinoma verdadeiro.
- **Regra prática mais cobrada em prova:** quanto **maior o tumor** e **menor a prolactina**, mais provável é efeito haste (adenoma não funcionante comprimindo a haste); quanto **maior a prolactina em relação ao tamanho do tumor**, mais provável é prolactinoma verdadeiro — a correlação entre tamanho tumoral e nível hormonal é a chave diagnóstica central do diferencial.
- **"Efeito gancho" (hook effect)** é uma armadilha laboratorial distinta: em prolactinomas gigantes com prolactina extremamente alta, o imunoensaio pode saturar e reportar um valor **falsamente baixo/normal** — por isso, diante de tumor grande com prolactina "baixa demais para o tamanho da lesão", pede-se **diluição seriada da amostra**; se o valor real for muito maior após diluição, confirma-se prolactinoma verdadeiro (não efeito haste).
- **Hemianopsia bitemporal** é o achado visual clássico de compressão do quiasma óptico por lesão selar/suprasselar — o quiasma cruza as fibras nasais (temporais no campo visual) de cada olho, então a compressão central afeta os campos temporais bilaterais.
- **Perda de eixos hormonais na compressão hipofisária segue ordem preferencial**: gonadotrófico (LH/FSH) e do hormônio do crescimento costumam ser os primeiros afetados; tireotrófico (TSH) e adrenocorticotrófico (ACTH) costumam ser mais resistentes e falham depois — por isso é comum encontrar LH/FSH baixos com TSH e cortisol ainda preservados num quadro inicial de compressão.

## 💎 Pearls

- Homem com macroadenoma não funcionante costuma procurar atendimento tardiamente, já com sintomas visuais (hemianopsia, dificuldade para dirigir à noite) ou hipogonadismo avançado (perda de libido, disfunção erétil, testículos reduzidos) — diferente da mulher, que costuma ser diagnosticada mais cedo por irregularidade menstrual associada à hiperprolactinemia (mesmo discreta), tornando o diagnóstico mais tardio e com tumores maiores no sexo masculino um padrão epidemiológico reconhecido.
- Ausência de galactorreia não afasta hiperprolactinemia — homens raramente galactorreiam mesmo com prolactina elevada (falta o priming estrogênico/de progesterona da mama), então esse achado negativo não deve ser usado para descartar o diagnóstico.
- Acromegalia tem em média 7-10 anos de atraso diagnóstico por progressão insidiosa dos traços faciais/das extremidades — fotos antigas comparativas do paciente são uma ferramenta clínica clássica de suspeita.
- Doença de Cushing (adenoma corticotrófico) e síndrome de Cushing por causa exógena de corticoide se diferenciam pelo ACTH: **suprimido** na causa exógena/adrenal, **normal ou elevado** na doença de Cushing hipofisária.
- Apoplexia hipofisária é emergência endócrina clássica: cefaleia súbita e intensa ("pior dor de cabeça da vida"), alteração visual aguda e oftalmoplegia, por hemorragia/infarto agudo dentro de um adenoma pré-existente — insuficiência adrenal aguda secundária é a complicação que mais mata se não tratada com corticoide de estresse imediato.
- Síndrome da sela vazia pode ser primária (herniação aracnóidea através de diafragma selar incompetente) ou secundária (após cirurgia, radioterapia ou infarto hipofisário) — muitas vezes achado incidental de imagem sem repercussão hormonal.

## ⚠️ Pitfalls

- **Diagnosticar macroprolactinoma só porque a prolactina está elevada**, sem correlacionar magnitude do valor com o tamanho do tumor — o cenário clássico de armadilha de prova é justamente prolactina discretamente elevada + tumor grande = efeito haste, não prolactinoma.
- **Não pedir diluição seriada diante de tumor gigante com prolactina "normal ou pouco elevada"** — pode estar perdendo um prolactinoma verdadeiro mascarado pelo efeito gancho do imunoensaio.
- **Achar que ausência de galactorreia afasta hiperprolactinemia**, sobretudo em homens.
- **Tratar todo macroadenoma com hiperprolactinemia como prolactinoma** (iniciando agonista dopaminérgico como primeira linha) — no adenoma não funcionante com efeito haste, o tratamento definitivo é cirúrgico (ressecção transesfenoidal), já que o agonista dopaminérgico não reduz esse tipo de tumor.
- **Não reconhecer craniofaringioma e hipofisite linfocítica como diferenciais relevantes** de lesão selar/suprasselar — craniofaringioma é mais comum em crianças/jovens e pode calcificar (achado radiológico característico); hipofisite linfocítica é mais comum em mulheres no periparto, com espessamento difuso da haste/glândula.
- **Deixar de repor corticoide de estresse em suspeita de apoplexia hipofisária** enquanto se aguarda confirmação de imagem — a insuficiência adrenal aguda secundária é a ameaça imediata à vida nesse cenário.

## 🩺 Quadro clínico

- **Efeito de massa (comum a qualquer macroadenoma):** cefaleia progressiva, hemianopsia bitemporal (ou outros defeitos de campo visual conforme direção do crescimento), diplopia se invasão de seio cavernoso (compressão de nervos oculomotores).
- **Adenoma não funcionante com hiperprolactinemia por efeito haste:** sintomas de hipogonadismo (perda de libido, disfunção erétil em homens; irregularidade menstrual em mulheres), sem galactorreia proeminente, associados aos sintomas de efeito de massa.
- **Prolactinoma verdadeiro:** galactorreia (mais comum em mulheres), irregularidade menstrual/amenorreia, infertilidade, perda de libido e disfunção erétil em homens — sintomas geralmente mais precoces e proeminentes que no efeito haste, mesmo em tumores menores.
- **Acromegalia:** crescimento de extremidades (mãos, pés), prognatismo, macroglossia, sudorese excessiva, artralgias, síndrome do túnel do carpo, apneia do sono, hipertensão e resistência insulínica/diabetes.
- **Doença de Cushing:** obesidade central, fácies em lua cheia, giba dorsal, estrias violáceas largas, fraqueza muscular proximal, hipertensão, hiperglicemia, fragilidade capilar/equimoses fáceis.
- **Apoplexia hipofisária:** cefaleia súbita e intensa, náusea/vômito, alteração visual aguda, oftalmoplegia, rebaixamento do nível de consciência, podendo evoluir rapidamente para colapso hemodinâmico por insuficiência adrenal aguda.
- **Pan-hipopituitarismo:** combinação de sintomas conforme os eixos afetados — fadiga e hipotensão (ACTH/cortisol), intolerância ao frio e ganho de peso (TSH), hipogonadismo (LH/FSH), baixa estatura em crianças ou sarcopenia/dislipidemia em adultos (GH).

## 🔎 Diagnóstico

- **RM de sela túrcica com contraste** é o exame de escolha para caracterizar qualquer lesão hipofisária (tamanho, extensão suprasselar, compressão de quiasma, desvio da haste, invasão de seio cavernoso).
- **Avaliação hormonal completa obrigatória diante de qualquer massa selar:** prolactina, TSH e T4 livre, cortisol basal (± ACTH), LH/FSH e hormônio sexual correspondente (testosterona ou estradiol), IGF-1 (rastreio de acromegalia) — tanto para identificar hipersecreção quanto para mapear hipopituitarismo associado.
- **Diante de prolactina elevada com tumor grande, sempre correlacionar magnitude com tamanho** e considerar diluição seriada se houver suspeita de efeito gancho (tumor muito grande com prolactina desproporcionalmente baixa).
- **Campimetria visual (campo visual por confrontação ou computadorizado)** documenta e quantifica hemianopsia bitemporal, servindo de base para seguimento pós-tratamento.
- **Teste de supressão com dexametasona (1 mg overnight) e cortisol salivar noturno** são os rastreios iniciais de síndrome de Cushing; ACTH plasmático diferencia causa ACTH-dependente (hipofisária/ectópica) de ACTH-independente (adrenal/exógena).

## 💊 Tratamento

- **Adenoma não funcionante sintomático (efeito de massa/compressão visual):** cirurgia transesfenoidal é o tratamento de escolha — agonista dopaminérgico não tem papel aqui, mesmo diante de hiperprolactinemia associada, já que essa hiperprolactinemia é secundária (efeito haste), não a causa do tumor.
- **Prolactinoma verdadeiro:** agonista dopaminérgico (cabergolina como primeira linha, mais eficaz e mais bem tolerada que bromocriptina) é o tratamento de primeira linha mesmo em macroprolactinomas — reduz tanto a prolactina quanto o volume tumoral; cirurgia reservada a refratariedade, intolerância ou apoplexia.
- **Acromegalia:** cirurgia transesfenoidal como primeira linha; análogos de somatostatina, antagonista do receptor de GH (pegvisomanto) ou agonista dopaminérgico para doença residual/recorrente; radioterapia em casos refratários.
- **Doença de Cushing:** cirurgia transesfenoidal como primeira linha; terapia medicamentosa (inibidores de esteroidogênese) ou radioterapia para doença persistente/recorrente.
- **Apoplexia hipofisária:** corticoide de estresse (hidrocortisona) imediato, independentemente de confirmação laboratorial de insuficiência adrenal; cirurgia de descompressão de urgência se déficit visual progressivo ou rebaixamento de consciência; manejo conservador com monitorização estrita é possível em casos leves e estáveis.
- **Pan-hipopituitarismo:** reposição hormonal dirigida por eixo afetado — corticoide sempre priorizado sobre levotiroxina quando ambos os eixos estão deficientes (repor tireoide antes de corticoide pode precipitar crise adrenal, pelo aumento do metabolismo do cortisol).

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus — apenas 1 questão real registrada** (EBSERH 2026 Q48, dificuldade MÉDIA), com uma vinheta desenhada exatamente para testar o diferencial entre macroprolactinoma e adenoma não funcionante com hiperprolactinemia por efeito haste: homem com macroadenoma de 2,3 cm, hemianopsia bitemporal, hipogonadismo, **sem galactorreia**, prolactina de 85 ng/mL (elevada, mas discretamente para o tamanho do tumor) confirmada por diluição seriada (afastando efeito gancho) — o gabarito exigiu reconhecer que a magnitude da prolactina era baixa demais para um tumor daquele tamanho ser um prolactinoma verdadeiro, apontando para efeito haste.

Mesmo com só 1 aparição neste banco específico, doenças da hipófise são **tema clássico e recorrente em provas de residência médica em endocrinologia**, com o diferencial prolactinoma vs. efeito haste sendo um dos pontos mais frequentemente armadilhados — vale dominar também acromegalia, doença de Cushing e apoplexia hipofisária, igualmente prováveis em provas futuras.

## 📚 Referências essenciais

- Diretriz de diagnóstico e tratamento de hiperprolactinemia — Endocrine Society.
- Diretriz de diagnóstico e tratamento de acromegalia — Endocrine Society/Pituitary Society.
- Diretriz de diagnóstico da síndrome de Cushing — Endocrine Society.
`;

export default content.trim();
