/**
 * Resumo — Cardiologia · Doenças do pericárdio e miocárdio.
 *
 * Reorganizado por entidade clínica (cada doença tem sua própria seção com
 * quadro clínico, diagnóstico, tratamento, pearl e pitfall juntos), em vez
 * de picado entre seções genéricas de tipo — o nome do assunto reúne
 * cardiomiopatias (sarcoidose cardíaca, Takotsubo, amiloidose) e doenças do
 * pericárdio propriamente dito (pericardite aguda, tamponamento,
 * constrição), que são entidades clinicamente distintas mesmo pertencendo
 * ao mesmo Subtheme do banco.
 *
 * Cobre as entidades do assunto no corpus: sarcoidose cardíaca de alto
 * risco (indicação de cardiodesfibrilador implantável) e cardiomiopatia de
 * Takotsubo. Inclui também extrapolações de alto rendimento (amiloidose
 * cardíaca, pericardite aguda, tamponamento cardíaco, pericardite
 * constritiva) ainda não cobradas no corpus, mas plausíveis em provas
 * futuras — nenhuma questão até agora testou doença pericárdica
 * propriamente dita.
 */
const content = `
## 🎯 Essencial

- **Sarcoidose cardíaca:** suspeitar diante de BAV inexplicado em jovem, arritmia ventricular ou disfunção de VE sem causa isquêmica — a indicação de CDI depende de critérios de risco arrítmico, não só da atividade inflamatória.
- **Cardiomiopatia de Takotsubo:** disfunção sistólica transitória do VE (tipicamente com abaulamento apical) após estresse emocional/físico intenso, mimetizando síndrome coronariana aguda com coronárias angiograficamente normais.
- **RM cardíaca com realce tardio pelo gadolínio** é a ferramenta central para diferenciar essas cardiomiopatias entre si e de infarto — o padrão de realce (mesocárdico/multifocal, difuso subendocárdico, ausente, ou subendocárdico/transmural em território coronariano) é o dado mais discriminativo.
- **Doenças do pericárdio** (extrapolação, ainda não cobrada) formam um espectro evolutivo: pericardite aguda → derrame/tamponamento (se acúmulo rápido) → pericardite constritiva (sequela crônica) — reconhecer em qual ponto do espectro o paciente está muda completamente a urgência da conduta.

## 📝 Como a banca cobra

**Doenças do pericárdio e miocárdio aparecem em 2 questões (0,94% do corpus)** — uma do EBSERH, uma do ENARE — cada uma isolando uma cardiomiopatia distinta. Nenhuma questão do corpus até agora cobrou doença pericárdica propriamente dita (pericardite, tamponamento, constrição) nem amiloidose cardíaca — são as extrapolações de maior potencial de cobrança deste resumo.

- **EBSERH 2026 Q32** cobrou **sarcoidose cardíaca de alto risco**, com foco na **indicação de CDI** diante de critérios de risco arrítmico — testando se o candidato sabe que o dispositivo é indicado pelo substrato de risco, não apenas pela atividade inflamatória.
- **ENARE 2025 Q70**, de nível mais fácil, cobrou a **cardiomiopatia de Takotsubo**, no cenário clássico de disfunção ventricular transitória após estresse emocional/físico intenso, com coronárias normais.

## 🧠 Conceito e fisiopatologia

- As **cardiomiopatias infiltrativas/funcionais** (sarcoidose, amiloidose, Takotsubo) comprometem o músculo cardíaco por mecanismos completamente diferentes entre si:
- Sarcoidose → substituição por granuloma e fibrose
- Amiloidose → depósito extracelular de proteína mal dobrada
- Takotsubo → toxicidade catecolaminérgica transitória
- Mas convergem no mesmo desafio diagnóstico: distinguir umas das outras e de doença coronariana exige RM cardíaca com atenção ao padrão de realce tardio, não apenas ao ecocardiograma

- As **doenças do pericárdio** têm fisiopatologia distinta: a inflamação (viral na maioria dos casos idiopáticos) ou o acúmulo de líquido no saco pericárdico comprometem primariamente o envelope que envolve o coração, não o músculo cardíaco em si
- No tamponamento, o acúmulo rápido de líquido eleva a pressão intrapericárdica acima da pressão de enchimento das câmaras direitas, comprometendo o enchimento diastólico e o débito cardíaco
- Por isso a velocidade de acúmulo importa mais que o volume absoluto (200 mL agudos tamponam; 1-2 L de acúmulo lento/crônico podem ser bem tolerados)

💡 Pensa assim: o pericárdio agudo é como encher um saco plástico rígido rápido demais — estoura a pressão antes de conseguir "esticar"; o pericárdio crônico é o mesmo saco esticando devagar ao longo de meses, e por isso acomoda muito mais volume sem sufocar o coração.

## 🔹 Sarcoidose cardíaca

- **Quando suspeitar:** paciente com sarcoidose sistêmica conhecida (ou achados extracardíacos sugestivos) que desenvolve **bloqueio atrioventricular inexplicado em jovem**, arritmia ventricular ou disfunção ventricular sem causa isquêmica — BAV total em jovem sem causa aparente é "bandeira vermelha" clássica.
- **Diagnóstico:** RM cardíaca com realce tardio em padrão **não isquêmico** (mesocárdico/epicárdico, multifocal); **PET-CT com FDG** identifica inflamação ativa versus fibrose já estabelecida — orienta decisão entre imunossupressão e dispositivo. Biópsia endomiocárdica tem baixa sensibilidade (acometimento em placas, pode dar falso-negativo mesmo com doença presente).
- **Tratamento:** corticoide/imunossupressor para inflamação ativa; marca-passo definitivo se BAV significativo; **CDI indicado por critérios de alto risco** — FEVE reduzida significativa, TV sustentada/parada cardíaca prévia, ou indicação de marca-passo em paciente jovem com sarcoidose (substrato arritmogênico persiste mesmo após controle inflamatório).
- 💎 **Pearl:** para o PET-CT com FDG ser interpretável, o paciente precisa de preparo dietético específico (dieta hipoglicídica/rica em gordura, jejum prolongado) que suprime a captação fisiológica de glicose pelo miocárdio normal — sem esse preparo, o exame perde acurácia e pode gerar falso-positivo difuso.
- ⚠️ **Pitfall:** tratar sarcoidose cardíaca só com imunossupressão e ignorar o risco arrítmico — mesmo com controle inflamatório, a fibrose residual mantém substrato para arritmia ventricular maligna.
- 📝 **Como caiu:** EBSERH 2026 Q32 — indicação de CDI por critério de alto risco.

## 🔹 Cardiomiopatia de Takotsubo

- **Quando suspeitar:** dor torácica aguda e/ou dispneia após gatilho **emocional ou físico intenso** (luto, susto, mas também cirurgia, sepse, AVC, crise asmática grave — não restringir a gatilhos emocionais), predominando em mulheres na pós-menopausa; ECG evolui de forma parecida com IAM (supra de ST inicial, depois inversão difusa de onda T e QT prolongado).
- **Diagnóstico:** cateterismo coronário **sem lesão obstrutiva significativa** (obrigatório antes de fechar o diagnóstico) + abaulamento apical característico (ballooning) no ecocardiograma/ventriculografia; ausência de realce tardio transmural na RM diferencia de infarto e ajuda a diferenciar de miocardite; critérios InterTAK. Elevação de BNP desproporcional ao grau de troponina é sugestiva, mas não definitiva.
- **Tratamento:** suporte hemodinâmico na fase aguda — **evitar inotrópicos beta-agonistas se houver obstrução dinâmica da via de saída do VE** (piora a obstrução); tratamento de suporte até recuperação (regra geral em dias a semanas); identificar e tratar o gatilho.
- 💎 **Pearl:** existem variantes atípicas além do padrão apical clássico (~80% dos casos) — variante **basal (reverse Takotsubo)** e **medioventricular**, mais raras e mais facilmente confundidas com outras cardiomiopatias se o examinador não pensar ativamente nelas.
- ⚠️ **Pitfall:** assumir que Takotsubo é sempre benigno e autolimitado sem monitorização — a fase aguda pode cursar com choque cardiogênico e obstrução dinâmica da via de saída do VE, exigindo internação com suporte.
- 📝 **Como caiu:** ENARE 2025 Q70 — cenário clássico, coronárias normais.

## 🔹 Amiloidose cardíaca

- **Quando suspeitar:** idoso com espessamento miocárdico ao ecocardiograma associado a **baixa voltagem no ECG** — essa dissociação eletromecânica (parede espessa, mas voltagem baixa) é a pista mais discriminativa frente a hipertrofia ventricular por HAS ou cardiomiopatia hipertrófica genuína (que cursam com voltagem alta). **Síndrome do túnel do carpo bilateral**, muitas vezes anos antes das manifestações cardíacas, é sinal de alerta clássico para amiloidose ATTR.
- **Diagnóstico:** cintilografia com pirofosfato de tecnécio (⁹⁹ᵐTc-PYP) tem alta sensibilidade/especificidade para **amiloidose ATTR (transtirretina)** sem necessidade de biópsia quando há captação cardíaca importante e ausência de gamopatia monoclonal (eletroforese de proteínas/cadeias leves livres normais); presença de componente monoclonal exige biópsia (endomiocárdica ou de gordura abdominal) para diferenciar **AL (cadeias leves)** de ATTR — a distinção muda completamente o tratamento. RM com realce tardio de padrão difuso subendocárdico é sugestiva, mas não substitui a confirmação etiológica.
- **Tratamento:** ATTR — estabilizadores de transtirretina (tafamidis) retardam progressão; AL — quimioterapia dirigida ao clone de plasmócitos (semelhante ao mieloma), com urgência maior pela evolução mais agressiva.
- 💎 **Pearl:** amiloidose AL e ATTR exigem tratamentos radicalmente diferentes (quimioterapia vs. estabilizador de proteína) — por isso jamais tratar amiloidose cardíaca como diagnóstico único sem subtipar.
- ⚠️ **Pitfall:** confundir o realce tardio difuso subendocárdico da amiloidose com o padrão mesocárdico/multifocal da sarcoidose ou com o subendocárdico/transmural em território coronariano do infarto — os três têm implicações terapêuticas completamente diferentes.
- 📝 **Como caiu:** ainda não cobrado no corpus — diferencial infiltrativo de alto rendimento frente à sarcoidose cardíaca.

## 🔹 Pericardite aguda

- **Quando suspeitar:** dor torácica pleurítica, ventilatório-dependente, que piora deitado e melhora ao inclinar-se para frente; atrito pericárdico à ausculta — diagnóstico com **≥2 de 4 critérios**: essa dor característica, atrito pericárdico, supradesnível difuso de ST/infradesnível de PR no ECG, e derrame pericárdico novo/piorado.
- **Tratamento:** AINE em dose alta **+ colchicina** (associação reduz recorrência de forma comprovada — conduta padrão, não opcional) como primeira linha; corticoide reservado para contraindicação/refratariedade, pelo maior risco de recorrência associado ao seu uso precoce.
- 💎 **Pearl:** troponina pode estar elevada na pericardite aguda por extensão inflamatória ao epicárdio superficial (**miopericardite**) sem significar síndrome coronariana — mas exige ecocardiograma para excluir disfunção ventricular associada, já que miopericardite tem prognóstico distinto de pericardite pura.
- ⚠️ **Pitfall:** prescrever AINE em pericardite pós-infarto (síndrome de Dressler) sem considerar que AINEs (exceto aspirina) podem interferir na cicatrização da área infartada — nesse contexto específico, aspirina é preferida a outros AINEs.
- 📝 **Como caiu:** ainda não cobrado no corpus — candidato natural de alto rendimento.

## 🔹 Tamponamento cardíaco

- **Quando suspeitar:** tríade de Beck (hipotensão, turgência jugular, bulhas abafadas) + pulso paradoxal (queda >10 mmHg da PA sistólica na inspiração) — quadro de choque obstrutivo, frequentemente evoluindo a partir de pericardite/derrame conhecido.
- **Diagnóstico:** ecocardiograma com colapso diastólico de câmaras direitas (colapso do átrio direito na sístole tardia e do ventrículo direito na diástole precoce são os sinais mais precoces e sensíveis) e variação respiratória exagerada do fluxo mitral/tricúspide; **eletrocardiograma com alternância elétrica** (variação de amplitude do QRS batimento a batimento, pelo "balanço" do coração dentro do derrame) é achado clássico, embora pouco sensível.
- **Tratamento:** pericardiocentese (ou janela pericárdica cirúrgica) emergencial; expansão volêmica como medida-ponte, **evitando ventilação com pressão positiva antes da drenagem** (piora o retorno venoso já comprometido, podendo precipitar colapso hemodinâmico).
- 💎 **Pearl:** **tamponamento de baixa pressão** pode ocorrer em pacientes hipovolêmicos (ex.: em diálise, desidratados) com pressões de enchimento basais mais baixas — a tríade de Beck e o pulso paradoxal podem estar atenuados ou ausentes, exigindo alto índice de suspeição clínica mesmo sem o quadro florido.
- ⚠️ **Pitfall:** puncionar derrame pericárdico assintomático e pequeno só porque existe — pericardiocentese é reservada para tamponamento ou suspeita etiológica que mude conduta (ex.: purulento, neoplásico), não para todo derrame identificado.
- 📝 **Como caiu:** ainda não cobrado no corpus — candidato natural de alto rendimento.

## 🔹 Pericardite constritiva

- **Quando suspeitar:** sequela crônica de pericardite (viral, TB, pós-cirurgia cardíaca, radioterapia) com pericárdio espessado e não complacente, causando fisiologia restritiva — sinais de congestão sistêmica predominante (edema, ascite, turgência jugular) desproporcionais aos sintomas de congestão pulmonar, e **sinal de Kussmaul** (aumento paradoxal da PVJ na inspiração).
- **Diagnóstico:** TC/RM evidenciando espessamento e/ou calcificação pericárdica; cateterismo hemodinâmico com sinal de "dip-plateau" e discordância ventricular à respiração (interdependência ventricular) quando o diagnóstico permanece incerto pela imagem isolada.
- **Tratamento:** pericardiectomia cirúrgica em doença sintomática refratária — único tratamento definitivo, já que o pericárdio fibrosado não regride com terapia clínica.
- 💎 **Pearl:** **pericardite efusivo-constritiva** é entidade intermediária — derrame associado a constrição já estabelecida, identificada quando a pressão intrapericárdica permanece elevada mesmo após drenagem do derrame (a constrição do pericárdio visceral persiste independentemente do líquido).
- ⚠️ **Pitfall:** confundir pericardite constritiva com cardiomiopatia restritiva só pela apresentação clínica — a distinção exige imagem (espessamento pericárdico) e, em casos duvidosos, cateterismo hemodinâmico, pois o tratamento (pericardiectomia vs. manejo clínico da miocardiopatia) é completamente diferente.
- 📝 **Como caiu:** ainda não cobrado no corpus — candidato natural de alto rendimento.

## 📋 Tabela

**Diferencial de realce tardio pelo gadolínio na RM cardíaca**

| Entidade | Padrão de realce | Voltagem no ECG | Diagnóstico de apoio |
|---|---|---|---|
| Sarcoidose cardíaca | Mesocárdico/epicárdico, multifocal | Normal ou BAV | PET-CT com FDG (inflamação ativa) |
| Amiloidose (ATTR/AL) | Difuso subendocárdico | Baixa (dissociação com parede espessa) | Cintilografia com pirofosfato (ATTR); biópsia (AL) |
| Infarto do miocárdio | Subendocárdico/transmural, território coronariano | Ondas Q conforme território | Cateterismo com lesão obstrutiva |
| Takotsubo | Ausente (ou mínimo) | Inversão difusa de onda T, QT longo | Cateterismo sem lesão obstrutiva |
| Miocardite | Mesocárdico/epicárdico, não coronariano | Variável | Elevação de troponina + RM (critérios de Lake Louise) |

## 📚 Referências essenciais

- Heart Rhythm Society Expert Consensus Statement on Arrhythmias in Cardiac Sarcoidosis.
- International Takotsubo Diagnostic Criteria (InterTAK).
- ESC Guidelines for the Diagnosis and Management of Pericardial Diseases.
- ESC/EACVI Guideline sobre diagnóstico e tratamento de amiloidose cardíaca.
- Diretriz da Sociedade Brasileira de Cardiologia sobre Miocardites e Cardiomiopatias.
`;

export default content.trim();
