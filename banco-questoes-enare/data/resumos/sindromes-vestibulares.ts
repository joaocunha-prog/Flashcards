/**
 * Resumo — Neurologia · Síndromes vestibulares.
 *
 * Reorganizado por entidade clínica (cada síndrome vestibular tem sua
 * própria seção com quadro clínico, diagnóstico, tratamento, pearl e
 * pitfall juntos), em vez de picado entre seções genéricas de tipo — o
 * assunto reúne causas periféricas (Ménière, VPPB, neurite vestibular),
 * uma causa central mimetizadora (AVC de fossa posterior) e um diferencial
 * funcional (migrânea vestibular), cada uma com conduta radicalmente
 * diferente.
 *
 * Cobre a entidade do assunto no corpus: doença de Ménière, incluindo
 * orientação dietética e reconhecimento do quadro clínico clássico. Inclui
 * também extrapolações de alto rendimento (VPPB, neurite vestibular, exame
 * HINTS para síndrome vestibular aguda central, migrânea vestibular)
 * ainda não cobradas no corpus, mas plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- **A duração do episódio de vertigem é o principal eixo diferencial das síndromes vestibulares periféricas:** segundos (VPPB), 20 minutos a horas (Ménière), dias contínuos (neurite vestibular/labirintite).
- **Toda síndrome vestibular aguda contínua (dias) com sinais neurológicos associados exige excluir AVC de fossa posterior** com o exame HINTS antes de rotular como "labirintite" — é o erro de maior gravidade potencial do assunto.
- **Ménière e migrânea vestibular são frequentemente confundidas** quando a história de cefaleia não é ativamente investigada — ambas cursam com episódios recorrentes de vertigem.

## 📝 Como a banca cobra

**Síndromes vestibulares aparece em 2 questões (0,94% do corpus)**, ambas do ENARE, e ambas sobre **doença de Ménière** especificamente. Nenhuma questão do corpus até agora cobrou VPPB, neurite vestibular, o exame HINTS ou migrânea vestibular — são as extrapolações de maior potencial de cobrança deste resumo, sobretudo o HINTS pelo risco clínico de errar o diagnóstico.

- **ENARE 2026 Q49** cobrou o reconhecimento do **quadro clínico clássico** da doença de Ménière (tríade vertigem + hipoacusia flutuante + zumbido), questão classificada como fácil.
- **ENARE 2025 Q31** foi além do reconhecimento e testou a **orientação dietética** (restrição de sódio como primeira medida terapêutica/preventiva), classificada como difícil — provavelmente por exigir conhecimento específico de manejo não farmacológico, além do diagnóstico.

## 🧠 Conceito e fisiopatologia

- Distinção periférico vs. central (base fisiopatológica do exame HINTS): lesão do labirinto/nervo vestibular → nistagmo unidirecional, suprimido pela fixação visual, sem outros sinais neurológicos
- Lesão de tronco/cerebelo → nistagmo que muda de direção, não suprimido pela fixação, frequentemente com outros sinais de tronco
- Dentro das causas periféricas, o mecanismo específico determina a duração do episódio
- Deslocamento mecânico de otólitos para um canal semicircular (VPPB) → vertigem de segundos, desencadeada por posição
- Distensão do labirinto membranoso por acúmulo de endolinfa (Ménière) → crises de minutos a horas
- Inflamação/neurite do próprio nervo vestibular (neurite vestibular) → vertigem contínua por dias, enquanto a inflamação persiste
- Migrânea vestibular foge dessa lógica mecânica/inflamatória periférica — envolve os mesmos circuitos de sensibilização trigeminovascular da enxaqueca clássica, com ativação anômala de vias vestibulares centrais

💡 Pensa assim: quanto mais "mecânico e rápido" o gatilho (otólito caindo de posição), mais curta a crise; quanto mais "inflamatório e lento" o processo, mais longa e contínua a vertigem.

## 🔹 Doença de Ménière

- **Quando suspeitar:** tríade clássica — **vertigem episódica recorrente + hipoacusia neurossensorial flutuante + zumbido**, geralmente unilateral, com sensação de **plenitude aural** associada; episódios duram **20 minutos a algumas horas**; náuseas e vômitos intensos costumam acompanhar a crise. A flutuação da audição é característica marcante — piora durante e logo após a crise, podendo melhorar (mas não normalizar totalmente) nos intervalos nas fases iniciais; com a progressão da doença, a perda auditiva tende a se tornar permanente.
- **Diagnóstico:** clínico, apoiado em audiometria tonal seriada documentando hipoacusia neurossensorial flutuante (tipicamente para graves nas fases iniciais). Os **critérios da Bárány Society/AAO-HNS** classificam em "definida" (≥2 episódios de vertigem espontânea de 20 min a 12h + hipoacusia documentada em pelo menos uma ocasião + sintomas auditivos flutuantes) e "provável". **RM de conduto auditivo interno com contraste** é indicada em todo caso de hipoacusia neurossensorial assimétrica/unilateral para excluir **schwannoma vestibular** antes de fechar o diagnóstico — a imagem exclui, não confirma.
- **Tratamento:** **restrição de sódio na dieta é a orientação de primeira linha** — reduz a frequência dos episódios ao diminuir a retenção de líquido no compartimento endolinfático; associar redução de cafeína e álcool. **Diuréticos** (ex.: hidroclorotiazida) se a resposta dietética for insuficiente. Refratário: injeção intratimpânica de corticoide ou gentamicina; cirurgia (descompressão do saco endolinfático, labirintectomia, secção do nervo vestibular) em casos extremos e incapacitantes.
- 💎 **Pearl:** a **crise otolítica de Tumarkin** ("drop attack" vestibular) é manifestação rara e dramática da doença avançada — queda súbita sem perda de consciência, por disfunção abrupta dos otólitos. **Ménière bilateral** ocorre numa proporção significativa de pacientes ao longo da evolução — considerar em quadros que pareciam unilaterais, mas evoluem com sintomas auditivos contralaterais.
- ⚠️ **Pitfall:** tratar crise aguda de Ménière com manobra de Epley (erro de generalizar a conduta do VPPB) ou ignorar a orientação dietética como primeira medida, partindo direto para tratamento farmacológico/cirúrgico mais invasivo. Restrição de sódio isoladamente não abole as crises em todos os pacientes — é medida de redução de frequência/intensidade, não de cura, e deve ser mantida mesmo quando diurético é associado.
- 📝 **Como caiu:** ENARE 2026 Q49 — quadro clínico clássico; ENARE 2025 Q31 — orientação dietética (restrição de sódio).

## 🔹 Vertigem posicional paroxística benigna (VPPB)

- **Quando suspeitar:** vertigem de **segundos**, desencadeada por **mudança de posição** (deitar, virar na cama, olhar para cima) — sem sintomas auditivos associados (diferença central frente a Ménière e labirintite).
- **Diagnóstico:** manobra de **Dix-Hallpike positiva** (nistagmo torcional/vertical de latência curta, caráter fatigável à repetição) confirma clinicamente, sem necessidade de exames de imagem ou audiometria.
- **Tratamento:** manobra de reposicionamento de otólitos (**Epley** ou Semont) — tratamento específico e resolutivo, não farmacológico.
- 💎 **Pearl:** vertigem posicional persistente após tratamento de VPPB deve levantar suspeita de VPPB de **canal diferente** do tratado originalmente (lateral vs. posterior) ou de causa central mimetizando VPPB — reavaliar com manobras diagnósticas específicas de cada canal, não repetir a mesma manobra indefinidamente.
- ⚠️ **Pitfall:** solicitar RM de rotina em VPPB típico (Dix-Hallpike clássico, resposta esperada à manobra) — exame desnecessário quando o quadro é tipicamente periférico e autolimitado.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Neurite vestibular e labirintite

- **Quando suspeitar:** vertigem **contínua e intensa por dias**, geralmente pós-viral, **sem hipoacusia** se for neurite vestibular pura (acometimento só do nervo vestibular); labirintite = neurite + hipoacusia/zumbido, por acometimento coclear associado.
- **Diagnóstico:** clínico — nistagmo espontâneo horizontal-torcional unidirecional, suprimido pela fixação visual; exame **HINTS com padrão "tranquilizador"** (impulso cefálico anormal + nistagmo unidirecional + ausência de skew); exame calórico no seguimento costuma mostrar hipofunção vestibular unilateral.
- **Tratamento:** vestibulossupressores (anti-histamínicos, benzodiazepínicos) e antieméticos por **período curto** — uso prolongado retarda a compensação vestibular central; **reabilitação vestibular precoce** associada, para acelerar a compensação central.
- ⚠️ **Pitfall:** não aplicar (ou não reconhecer) o exame HINTS em síndrome vestibular aguda contínua — pode levar a alta indevida de um AVC de fossa posterior mascarado como "labirintite". Manter vestibulossupressor por tempo prolongado — atrasa a compensação central e prolonga a incapacidade funcional.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Síndrome vestibular aguda central (AVC de fossa posterior)

- **Quando suspeitar:** síndrome vestibular aguda contínua com sinais neurológicos associados — diplopia, disartria, ataxia de tronco, cefaleia occipital — em paciente com fatores de risco cardiovascular.
- **Diagnóstico:** exame **HINTS** (Head Impulse, Nystagmus, Test of Skew) diferencia periférico de central na síndrome vestibular aguda: impulso cefálico **normal** + nistagmo que **muda de direção** + desvio **skew presente** é o padrão "perigoso" (mnemônico **INFARCT**) que sugere origem central e exige neuroimagem. Diante desse padrão, **RM de crânio com difusão em caráter de urgência** — a TC de crânio pode ser normal nas primeiras horas de AVC isquêmico de fossa posterior e não deve ser usada para excluir essa hipótese.
- **Tratamento:** protocolo de AVC isquêmico (trombólise/trombectomia conforme janela e elegibilidade).
- 💎 **Pearl:** paradoxalmente, o HINTS "perigoso" tem **impulso cefálico normal** (não anormal) — é o achado invertido em relação ao que se espera intuitivamente de uma lesão central, e é justamente esse detalhe que a banca costuma explorar para testar se o candidato decorou o exame ou entendeu a lógica.
- ⚠️ **Pitfall:** confiar apenas na ausência de "sinais neurológicos clássicos" (déficit motor evidente, disartria grosseira) para descartar causa central — o HINTS é mais sensível que a "gestalt" clínica isolada para detectar AVC de fossa posterior na síndrome vestibular aguda, inclusive mais sensível que a RM feita muito precocemente.
- 📝 **Como caiu:** ainda não cobrado no corpus — é o diagnóstico de maior risco clínico do assunto se perdido.

## 🔹 Migrânea vestibular

- **Quando suspeitar:** episódios de vertigem associados a **cefaleia migranosa** (ou história prévia de enxaqueca), fotofobia/fonofobia — **sem** a hipoacusia progressiva característica de Ménière.
- **Diagnóstico:** critérios da Bárány Society — episódios de vertigem de intensidade moderada a grave, com duração variável (5 minutos a 72h, mais ampla que a de Ménière), associados a pelo menos um sintoma migranoso (cefaleia com características enxaquecosas, fotofobia/fonofobia, aura visual) em pelo menos metade dos episódios, e história de enxaqueca com ou sem aura.
- **Tratamento:** manejo semelhante ao da enxaqueca — profilático (mesmas classes usadas na enxaqueca crônica) e sintomático nas crises; não responde a restrição de sódio nem a diuréticos como na Ménière.
- 💎 **Pearl:** a duração dos episódios de migrânea vestibular é mais **variável e ampla** (minutos a dias) que a de qualquer síndrome vestibular periférica isolada — quando a duração não se encaixa claramente em VPPB/Ménière/neurite, migrânea vestibular deve entrar no diferencial, especialmente com história pessoal de enxaqueca.
- ⚠️ **Pitfall:** confundir migrânea vestibular com Ménière por não investigar ativamente história de cefaleia/enxaqueca associada aos episódios de vertigem — a ausência de hipoacusia progressiva é o dado que mais afasta Ménière.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**Diferencial das síndromes vestibulares por duração e achados associados**

| Entidade | Duração do episódio | Sintomas auditivos | Gatilho/achado-chave |
|---|---|---|---|
| VPPB | Segundos | Ausentes | Mudança de posição, Dix-Hallpike positivo |
| Doença de Ménière | 20 min a horas | Hipoacusia flutuante + zumbido + plenitude aural | Tríade clássica |
| Neurite vestibular / labirintite | Dias contínuos | Ausentes (neurite) / presentes (labirintite) | Pós-viral, HINTS "tranquilizador" |
| Migrânea vestibular | Minutos a dias (variável) | Ausentes | Cefaleia migranosa associada |
| AVC de fossa posterior | Dias contínuos (síndrome vestibular aguda) | Variável | HINTS "perigoso" (INFARCT) |

## 📚 Referências essenciais

- American Academy of Otolaryngology–Head and Neck Surgery — Clinical Practice Guideline: Ménière's Disease.
- Bárány Society — Diagnostic Criteria for Ménière's Disease (Consensus Document).
- Kattah JC, et al. HINTS to diagnose stroke in the acute vestibular syndrome. Stroke.
- Bárány Society — Diagnostic Criteria for Vestibular Migraine (Consensus Document).
`;

export default content.trim();
