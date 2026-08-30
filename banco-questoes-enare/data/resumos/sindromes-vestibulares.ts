/**
 * Resumo — Neurologia · Síndromes vestibulares.
 *
 * Cobre as entidades do assunto no corpus: doença de Ménière, incluindo
 * orientação dietética e reconhecimento do quadro clínico clássico. Inclui
 * também extrapolações de alto rendimento (diferencial completo com VPPB,
 * neurite vestibular e causas centrais, exame HINTS, migrânea vestibular,
 * critérios diagnósticos formais) ainda não cobradas no corpus, mas
 * plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- **Doença de Ménière = tríade clássica: vertigem episódica recorrente + hipoacusia neurossensorial flutuante + zumbido**, geralmente unilateral, com sensação de plenitude aurical associada.
- Fisiopatologia atribuída à **hidropisia endolinfática** — acúmulo excessivo de endolinfa no labirinto membranoso, distendendo o sistema endolinfático.
- **Episódios de vertigem duram de 20 minutos a algumas horas** (diferente do VPPB, que dura segundos, e da neurite vestibular, que dura dias) — a duração do episódio é um dos principais diferenciais entre as síndromes vestibulares periféricas.
- **Orientação dietética de primeira linha: restrição de sódio** — reduz a frequência dos episódios ao diminuir a retenção de líquido no compartimento endolinfático; também se recomenda reduzir cafeína e álcool.
- **Diuréticos (ex.: hidroclorotiazida)** são usados como terapia de manutenção quando a restrição dietética isolada não controla os episódios.
- **Diagnóstico é clínico**, baseado em critérios de recorrência dos episódios associados a hipoacusia documentada por audiometria (que mostra padrão flutuante, tipicamente para graves nas fases iniciais) — exames de imagem servem para excluir outras causas (ex.: schwannoma vestibular), não para confirmar Ménière.
- **Doença progressiva:** ao longo do tempo, a perda auditiva tende a se tornar permanente e os episódios vertiginosos podem se tornar menos frequentes, mas com sintomas de desequilíbrio crônico residual.
- **Náuseas e vômitos intensos** costumam acompanhar a crise aguda de Ménière, contribuindo para o caráter incapacitante do episódio mesmo sendo autolimitado em horas.
- **Ainda não cobrado no corpus, mas alta probabilidade:** o **diagnóstico diferencial completo das síndromes vestibulares periféricas** por duração do episódio — **segundos** (vertigem posicional paroxística benigna, VPPB, desencadeada por mudança de posição, Dix-Hallpike positivo), **20 minutos a horas** (Ménière), **dias contínuos** (neurite vestibular/labirintite, geralmente pós-viral, sem hipoacusia se for neurite pura) — e o **exame HINTS** (Head Impulse, Nystagmus, Test of Skew) para diferenciar vertigem periférica de causa central (AVC de fossa posterior) na síndrome vestibular aguda: impulso cefálico normal + nistagmo que muda de direção + desvio skew presente é o padrão "perigoso" (mnemônico INFARCT) que sugere origem central e exige neuroimagem.

## 💎 Pearls

- A **plenitude aural** (sensação de ouvido "tampado" ou pressão) que precede ou acompanha a crise é um pista frequentemente citada nas vinhetas, além do zumbido.
- A **flutuação da audição** é característica marcante — piora durante e logo após a crise, podendo melhorar (mas não normalizar totalmente) nos intervalos, especialmente nas fases iniciais da doença.
- Em crises muito frequentes/refratárias à dieta e diuréticos, opções de segunda linha incluem **injeção intratimpânica de corticoide ou gentamicina**, e em casos extremos, procedimentos cirúrgicos (labirintectomia, secção do nervo vestibular) — reservados para doença incapacitante refratária.
- **Manobra de reposicionamento (Epley)** não tem papel na doença de Ménière — é tratamento específico do VPPB; não confundir as condutas entre as duas síndromes vestibulares periféricas mais cobradas.
- O diagnóstico diferencial mais importante a excluir com exame de imagem é o **schwannoma vestibular** (neurinoma do acústico), que também causa hipoacusia unilateral e zumbido, mas tipicamente sem o padrão flutuante e episódico da Ménière.
- **Ainda não cobrado, mas de alto rendimento:** os **critérios diagnósticos formais da Bárány Society/AAO-HNS** classificam Ménière em "definida" (≥2 episódios de vertigem espontânea de 20 min a 12h + hipoacusia neurossensorial documentada em pelo menos uma ocasião + sintomas auditivos flutuantes no ouvido afetado) e "provável" (critérios clínicos sem confirmação audiométrica completa).
- **Migrânea vestibular** é diagnóstico diferencial cada vez mais reconhecido: episódios de vertigem associados a cefaleia migranosa (ou história prévia de enxaqueca), fotofobia/fonofobia, sem a hipoacusia progressiva característica de Ménière — confundida com Ménière quando a cefaleia não é ativamente perguntada.
- A **crise otolítica de Tumarkin** ("drop attack" vestibular) é manifestação rara e dramática da doença de Ménière avançada — queda súbita sem perda de consciência, por disfunção abrupta dos otólitos.
- **Ménière bilateral** ocorre em uma proporção significativa de pacientes ao longo da evolução (estimativas variam, mas cresce com o tempo de doença) — vale considerar em quadros que inicialmente pareciam unilaterais, mas evoluem com sintomas auditivos no ouvido contralateral.
- **Restrição de sódio isoladamente não abole as crises** em todos os pacientes — é medida de redução de frequência/intensidade, não de cura, e deve ser mantida mesmo quando diurético é associado.
- **Vertigem posicional persistente após tratamento de VPPB** deve levantar suspeita de VPPB de canal diferente do tratado originalmente (lateral vs. posterior) ou de causa central mimetizando VPPB — reavaliar com manobras diagnósticas específicas de cada canal.

## ⚠️ Pitfalls

- **Tratar crise aguda de Ménière com manobra de Epley** — erro de generalizar a conduta do VPPB para todas as vertigens periféricas.
- **Ignorar a orientação dietética (restrição de sódio) como primeira medida**, partindo direto para tratamento farmacológico/cirúrgico mais invasivo.
- **Esperar perda auditiva permanente e fixa para diagnosticar Ménière** — a marca da doença nas fases iniciais é justamente a flutuação, não a perda auditiva estável.
- **Não solicitar exame de imagem para excluir schwannoma vestibular** em hipoacusia neurossensorial unilateral, mesmo quando o quadro parece clinicamente típico de Ménière.
- **Confundir a duração dos episódios** — vertigem de segundos sugere VPPB, não Ménière; vertigem de dias contínuos sugere neurite vestibular, não Ménière.
- **Não aplicar (ou não reconhecer) o exame HINTS em síndrome vestibular aguda contínua** — pode levar a alta indevida de um AVC de fossa posterior mascarado como "labirintite".
- **Confundir migrânea vestibular com Ménière** por não investigar ativamente história de cefaleia/enxaqueca associada aos episódios de vertigem.
- **Repetir a manobra de Epley indefinidamente sem reavaliar o canal semicircular acometido** diante de vertigem posicional persistente, em vez de reconsiderar o diagnóstico (canal errado, causa central).
- **Solicitar RM de rotina em VPPB típico** (Dix-Hallpike clássico, resposta esperada à manobra) — exame desnecessário quando o quadro é tipicamente periférico e autolimitado.

## 📝 Como a banca cobra

**Síndromes vestibulares aparece em 2 questões (0,94% do corpus)**, ambas do ENARE, e ambas sobre **doença de Ménière** especificamente.

- **ENARE 2026 Q49** cobrou o reconhecimento do **quadro clínico clássico** da doença de Ménière (tríade vertigem + hipoacusia flutuante + zumbido), questão classificada como fácil.
- **ENARE 2025 Q31** foi além do reconhecimento e testou a **orientação dietética** (restrição de sódio como primeira medida terapêutica/preventiva), classificada como difícil — provavelmente por exigir conhecimento específico de manejo não farmacológico, além do diagnóstico.

## 🧠 Conceito e fisiopatologia

A doença de Ménière é atribuída à **hidropisia endolinfática**: acúmulo anormal de endolinfa no labirinto membranoso (ducto e sáculo endolinfáticos), levando à distensão progressiva das estruturas do ouvido interno. Períodos de ruptura da membrana que separa endolinfa e perilinfa (ou de disfunção transitória da homeostase iônica) desencadeiam as crises agudas de vertigem, com estimulação anormal do labirinto vestibular e da cóclea — explicando por que vertigem, hipoacusia e zumbido tendem a ocorrer simultaneamente durante a crise.

A restrição de sódio dietética reduz a retenção hídrica sistêmica e, por extensão, a pressão osmótica que favorece o acúmulo de endolinfa — por isso é a intervenção de primeira linha, mesmo antes de considerar diuréticos, que atuam pelo mesmo racional fisiopatológico de reduzir o volume de líquido no compartimento endolinfático.

O raciocínio geral das síndromes vestibulares periféricas versus centrais se apoia na distinção entre lesão do labirinto/nervo vestibular (nistagmo unidirecional, suprimido pela fixação visual, sem outros sinais neurológicos) e lesão de tronco/cerebelo (nistagmo que muda de direção, não suprimido pela fixação, frequentemente acompanhado de outros sinais de tronco) — base fisiopatológica do exame HINTS.

Na **migrânea vestibular**, o mecanismo proposto envolve os mesmos circuitos de sensibilização trigeminovascular da enxaqueca clássica, com ativação anômala de vias vestibulares centrais durante a crise — o que explica por que a vertigem acompanha (ou substitui) a cefaleia em pacientes com predisposição migranosa, sem o componente de hidropisia endolinfática que caracteriza a Ménière.

## 🩺 Quadro clínico

- **Crise típica:** vertigem episódica de 20 minutos a algumas horas, associada a náuseas/vômitos, hipoacusia neurossensorial flutuante (geralmente unilateral), zumbido e plenitude aural.
- **Entre crises:** pode haver melhora parcial da audição nas fases iniciais; com a progressão da doença, perda auditiva permanente e desequilíbrio crônico residual.
- **Diferencial pela duração do episódio:** segundos (VPPB), 20 min-horas (Ménière), dias (neurite vestibular/labirintite).
- **Ainda não cobrado, mas relevante:** VPPB não cursa com sintomas auditivos e é desencadeada por movimento cefálico (Dix-Hallpike positivo com nistagmo característico); neurite vestibular cursa com vertigem contínua intensa por dias, sem hipoacusia (labirintite = neurite + hipoacusia/zumbido, por acometimento coclear associado); síndrome vestibular aguda com sinais neurológicos associados (diplopia, disartria, ataxia de tronco, cefaleia occipital) sugere causa central e exige investigação de AVC de fossa posterior.

## 🔎 Diagnóstico

- **Doença de Ménière:** diagnóstico clínico apoiado em audiometria tonal seriada documentando hipoacusia neurossensorial flutuante (tipicamente para graves nas fases iniciais); os **critérios da Bárány Society/AAO-HNS** classificam em "definida" (≥2 episódios de vertigem espontânea de 20 min a 12h + hipoacusia documentada em pelo menos uma ocasião + sintomas auditivos flutuantes) e "provável".
- **RM de conduto auditivo interno com contraste** é indicada em todo caso de hipoacusia neurossensorial assimétrica/unilateral para excluir schwannoma vestibular antes de fechar o diagnóstico de Ménière — a imagem exclui, não confirma o diagnóstico.
- **VPPB:** manobra de Dix-Hallpike positiva (nistagmo torcional/vertical de latência curta, caráter fatigável à repetição) confirma o diagnóstico clinicamente, sem necessidade de exames de imagem ou audiometria.
- **Neurite vestibular:** diagnóstico clínico — vertigem contínua intensa por dias, nistagmo espontâneo horizontal-torcional unidirecional suprimido pela fixação visual, exame HINTS com padrão "tranquilizador" (impulso cefálico anormal + nistagmo unidirecional + ausência de skew); exame calórico no seguimento costuma mostrar hipofunção vestibular unilateral.
- **Síndrome vestibular aguda com sinais de alerta central** (HINTS "perigoso"/INFARCT, ou sinais neurológicos associados): exige RM de crânio com difusão em caráter de urgência — a TC de crânio pode ser normal nas primeiras horas de AVC isquêmico de fossa posterior e não deve ser usada para excluir essa hipótese.

## 💊 Tratamento

- **Crise aguda:** sintomáticos vestibulossupressores (ex.: anti-histamínicos, benzodiazepínicos) e antieméticos por curto período; uso prolongado desses fármacos deve ser evitado por retardar a compensação vestibular central.
- **Manutenção/prevenção de crises:** restrição de sódio na dieta (primeira linha), redução de cafeína/álcool, diurético (ex.: hidroclorotiazida) se resposta dietética insuficiente.
- **Refratário à terapia clínica:** injeção intratimpânica de corticoide ou gentamicina; cirurgia (descompressão do saco endolinfático, labirintectomia, secção do nervo vestibular) em casos extremos e incapacitantes.
- **Ainda não cobrado, mas de alto rendimento:** VPPB trata-se com manobra de reposicionamento de otólitos (Epley/Semont), não farmacologicamente; neurite vestibular trata-se com vestibulossupressores por período curto (para não atrasar a compensação central) associados a reabilitação vestibular precoce; síndrome vestibular aguda com sinais de alerta central segue protocolo de AVC.

## 📚 Referências essenciais

- American Academy of Otolaryngology–Head and Neck Surgery — Clinical Practice Guideline: Ménière's Disease.
- Bárány Society — Diagnostic Criteria for Ménière's Disease (Consensus Document).
- Kattah JC, et al. HINTS to diagnose stroke in the acute vestibular syndrome. Stroke.
- Bárány Society — Diagnostic Criteria for Vestibular Migraine (Consensus Document).
`;

export default content.trim();
