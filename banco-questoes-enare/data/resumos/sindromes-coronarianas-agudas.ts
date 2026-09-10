/**
 * Resumo — Cardiologia · Síndromes coronarianas agudas.
 *
 * Cobre o espectro de síndrome coronariana aguda (SCA com supra de ST,
 * SCA sem supra de ST/angina instável) — apresentação eletrocardiográfica,
 * papel da troponina e tendências epidemiológicas — eixo cobrado na única
 * questão real do corpus para este assunto (EBSERH 2025 Q54, sobre a
 * tendência epidemiológica de queda do IAM com supra de ST). Assunto de
 * baixa incidência no corpus (1 questão), fora do corte 80/20, mas
 * extrapolado com profundidade de alto rendimento por ser tema central de
 * qualquer prova de residência médica.
 */
const content = `
## 🎯 Essencial

- **A incidência do IAM com supradesnivelamento de ST (IAMCSST) vem caindo ao longo das décadas**, enquanto a proporção relativa de SCA sem supra de ST (angina instável e IAMSSST) vem crescendo — resultado de melhor controle de fatores de risco cardiovascular (estatinas, controle pressórico, cessação de tabagismo) e diagnóstico mais sensível com troponina de alta sensibilidade, que capta eventos antes subdiagnosticados.
- **SCA sem supra de ST é hoje mais frequente que SCA com supra de ST** na maioria das séries contemporâneas — não o contrário.
- **Infradesnivelamento de ST é achado esperado e frequente na SCA sem supra** — não afasta o diagnóstico nem obriga a pensar em diagnóstico alternativo (como pericardite, que classicamente cursa com **supra difuso e côncavo**, não infra).
- **Troponina é sempre útil diante de equivalente anginoso, mesmo sem supra de ST** — várias causas podem elevar troponina além de SCA (miocardite, embolia pulmonar, sepse, insuficiência renal, taquiarritmia), mas isso não torna o exame inútil: a cinética (curva de subida e queda) e o contexto clínico é que fazem a diferenciação, não a decisão de não solicitar o exame.
- **Doença coronariana multiarterial (三 vasos) é comum em SCA sem supra com dor típica** — a ausência de supra de ST não implica doença menos extensa; muitas vezes reflete oclusão subtotal, colateral já desenvolvida ou território menos elétrico-dominante, não menor gravidade anatômica.

## 💎 Pearls

- A queda relativa do IAMCSST reflete sobretudo prevenção primária/secundária eficaz (estatina de alta potência, controle de HAS/DM, cessação de tabagismo) — não significa que doença coronariana global esteja em queda, e sim uma mudança de perfil dentro do espectro de SCA.
- Troponina de alta sensibilidade permitiu detectar infartos "silenciosos" ou com sintomas atípicos que antes ficariam sob o rótulo de angina instável — parte do motivo do crescimento relativo de SCASSST no diagnóstico é justamente essa maior sensibilidade analítica, não só epidemiológica.
- Equivalentes anginosos (dispneia, síncope, sudorese, dor epigástrica, fadiga inexplicada) são especialmente relevantes em idosos, diabéticos (neuropatia autonômica mascarando dor) e mulheres — grupos classicamente subdiagnosticados quando se exige dor torácica típica como critério obrigatório.
- ECG normal não afasta SCA — cerca de 1 em cada 5 a 10 pacientes com IAM confirmado por troponina tem ECG inicial sem alterações isquêmicas óbvias; ECGs seriados aumentam a sensibilidade.
- Supradesnivelamento em aVR com infra difuso multiderivacional sugere lesão de tronco de coronária esquerda ou doença triarterial grave — reconhecer esse padrão muda a urgência da estratégia invasiva.

## ⚠️ Pitfalls

- **Achar que a incidência de IAMCSST está estável ou aumentando** — a tendência histórica documentada é de queda, atribuída a prevenção mais eficaz.
- **Achar que angina instável é mais rara que IAM sem supra por conta da "maior sensibilidade dos testes sanguíneos"** — o racional é o oposto: testes mais sensíveis reclassificam parte do que antes seria "angina instável" como IAMSSST (troponina positiva), tornando esse subgrupo relativamente mais comum, e não fazendo a angina instável "sumir" por aumento absoluto de sua incidência.
- **Descartar SCA por causa de infradesnivelamento de ST**, achando que só o supra conta — infra é exatamente o achado eletrocardiográfico esperado em boa parte dos casos sem supra.
- **Não solicitar troponina achando que "tem várias outras causas de elevação"** — a existência de diagnósticos diferenciais para troponina elevada não invalida sua utilidade diagnóstica em equivalente anginoso; interpretar dentro do contexto clínico é a habilidade cobrada, não evitar o exame.
- **Achar que doença triarterial é incomum em dor típica sem supra** — é achado frequente, e subestimar essa possibilidade pode levar a estratificação de risco inadequada.

## 🩺 Quadro clínico

Dor torácica típica (opressiva, retroesternal, irradiada para membro superior esquerdo/mandíbula, associada a sudorese e náusea) é a apresentação clássica, mas equivalentes anginosos (dispneia súbita, síncope, fadiga, dor epigástrica) são comuns, sobretudo em idosos, diabéticos e mulheres. A duração e o caráter da dor (em repouso, progressiva, refratária a nitrato) ajudam a diferenciar angina estável de instável.

## 🔎 Diagnóstico

- **IAMCSST:** supradesnivelamento de ST ≥1 mm em pelo menos 2 derivações contíguas (ou critérios específicos para V2-V3 conforme sexo/idade) ou bloqueio de ramo esquerdo novo em contexto clínico compatível — indicação de reperfusão imediata (angioplastia primária, preferencialmente, ou trombólise se indisponível em tempo hábil).
- **SCA sem supra (IAMSSST/angina instável):** ECG sem supra (pode haver infra, inversão de onda T ou ser normal) + troponina elevada com curva compatível (IAMSSST) ou troponina normal com quadro clínico sugestivo de isquemia (angina instável) — a diferenciação entre os dois depende exclusivamente da troponina, não do ECG.
- **Estratificação de risco (escores como GRACE/TIMI)** orienta o tempo até estratégia invasiva (imediata, precoce ou seletiva) em SCASSST.

## 💊 Tratamento

- **Base comum a toda SCA:** dupla antiagregação plaquetária (AAS + inibidor de P2Y12), anticoagulação parenteral, estatina de alta potência, beta-bloqueador (se sem contraindicação) e IECA/BRA conforme função ventricular.
- **IAMCSST:** reperfusão o mais rápido possível — angioplastia primária é a estratégia preferencial (dentro da janela de tempo porta-balão); trombólise é alternativa quando angioplastia primária não está disponível em tempo hábil, mas carrega risco de complicações hemorrágicas que exigem vigilância (ver o resumo de doenças da aorta e vasculares para o diagnóstico diferencial de deterioração pós-trombolítico).
- **SCASSST:** estratégia invasiva (cateterismo) conforme estratificação de risco — imediata se instabilidade, precoce (24-72h) se risco intermediário/alto, conservadora/seletiva se baixo risco.

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus — apenas 1 questão real registrada** (EBSERH 2025 Q54, dificuldade MÉDIA), sobre a tendência epidemiológica de queda da incidência de IAM com supra de ST — testando conhecimento de epidemiologia cardiovascular contemporânea, não só reconhecimento de quadro clínico. Os distratores exploraram erros conceituais clássicos: achar que infra de ST afasta SCA sem supra, achar que troponina é inútil sem supra de ST, e inverter a relação de frequência entre angina instável e IAM sem supra.

Mesmo com só 1 aparição neste banco específico, síndrome coronariana aguda é **o tema mais central e recorrente de qualquer prova de residência médica em cardiologia/clínica médica** — vale dominar profundamente o espectro completo (IAMCSST, IAMSSST, angina instável), mesmo além do ângulo epidemiológico específico já cobrado.

## 📚 Referências essenciais

- Diretriz de síndrome coronariana aguda sem supradesnivelamento de ST — American College of Cardiology/American Heart Association (ACC/AHA) e European Society of Cardiology (ESC).
- Diretriz de infarto agudo do miocárdio com supradesnivelamento de ST — ACC/AHA/ESC.
`;

export default content.trim();
