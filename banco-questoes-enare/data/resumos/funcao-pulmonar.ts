/**
 * Resumo — Pneumologia · Função pulmonar.
 *
 * Cobre a interpretação de provas de função pulmonar (espirometria,
 * volumes/capacidades pulmonares, DLCO) em profundidade — a questão real do
 * corpus cobra o reconhecimento do padrão obstrutivo (VEF1 reduzido, CVF
 * reduzida, capacidade pulmonar total aumentada). Assunto de baixa
 * incidência no banco (1 questão), mas interpretação de espirometria é tema
 * transversal e recorrente em pneumologia, clínica médica e medicina de
 * família.
 */
const content = `
## 🎯 Essencial

- **A espirometria é o exame-chave para diferenciar padrão obstrutivo de padrão restritivo** — o raciocínio central é sempre olhar primeiro a **relação VEF1/CVF** (índice de Tiffeneau): reduzida define obstrução; normal ou aumentada, associada a volumes reduzidos, sugere restrição.
- **Padrão obstrutivo:** VEF1 reduzido de forma desproporcional à CVF → **relação VEF1/CVF reduzida** (classicamente <0,70, ou abaixo do limite inferior da normalidade ajustado por idade/sexo/altura). A CVF pode estar normal ou reduzida (por aprisionamento aéreo), mas a queda do VEF1 é sempre proporcionalmente maior.
- **Padrão restritivo:** VEF1 e CVF reduzidos **proporcionalmente**, mantendo a relação VEF1/CVF normal ou até aumentada. A confirmação definitiva de restrição exige **capacidade pulmonar total (CPT) reduzida** na pletismografia — a espirometria isolada só sugere, não fecha o diagnóstico de restrição.
- **Capacidade pulmonar total (CPT) aumentada** é o achado que confirma **hiperinsuflação pulmonar**, marca registrada da doença obstrutiva crônica avançada (ex.: DPOC/enfisema) — o ar fica aprisionado atrás de vias aéreas colapsadas/estreitadas, elevando o volume residual e, por consequência, a CPT.
- **Prova broncodilatadora positiva** (aumento de VEF1 ≥12% **e** ≥200 mL após broncodilatador) indica reversibilidade significativa — clássica da asma, mas pode estar presente (parcialmente) em parte dos pacientes com DPOC também, então isoladamente não fecha diagnóstico diferencial entre as duas.

## 📊 Classificação e interpretação

- **Obstrutivo:** VEF1/CVF reduzida. Causas clássicas — asma, DPOC (bronquite crônica/enfisema), bronquiectasias, fibrose cística.
- **Restritivo:** VEF1/CVF normal/aumentada, CPT reduzida na pletismografia. Causas — doenças intersticiais pulmonares (fibrose pulmonar), doenças da parede torácica (cifoescoliose, obesidade grave), doenças neuromusculares (fraqueza da musculatura respiratória), derrame pleural volumoso, ressecção pulmonar.
- **Padrão misto:** VEF1/CVF reduzida **e** CPT reduzida — coexistência de componente obstrutivo e restritivo (ex.: DPOC associado a fibrose pulmonar, combinação cada vez mais reconhecida na prática).
- **Gravidade da obstrução** (classificação GOLD para DPOC, com base no VEF1 pós-broncodilatador em % do previsto): leve (≥80%), moderada (50-79%), grave (30-49%), muito grave (<30%).
- **DLCO (capacidade de difusão do monóxido de carbono):** ajuda a diferenciar causas dentro de cada padrão — reduzida no enfisema (destruição de parede alveolar reduz a área de troca) e nas doenças intersticiais; **normal ou aumentada na asma e na bronquite crônica pura** (sem destruição parenquimatosa); reduzida também em doenças vasculares pulmonares (hipertensão pulmonar, tromboembolismo pulmonar crônico) mesmo com espirometria normal.

## 🔎 Como interpretar passo a passo (lógica de prova)

1. Checar a **qualidade do exame** (curvas reprodutíveis, esforço adequado) — exame mal executado pode simular padrão restritivo falso-positivo (esforço submáximo reduz CVF artificialmente).
2. Olhar a **relação VEF1/CVF** → reduzida = obstrutivo; normal/aumentada com volumes baixos = suspeita de restritivo (confirmar com CPT).
3. Se obstrutivo, checar a **resposta ao broncodilatador** (reversibilidade) e classificar a gravidade pelo VEF1 % do previsto.
4. Se restritivo confirmado (CPT reduzida), usar a **DLCO** e o contexto clínico para diferenciar causa parenquimatosa de extraparenquimatosa (parede torácica/neuromuscular).
5. Avaliar sinais de **hiperinsuflação** (CPT aumentada, volume residual aumentado) como marcador de doença obstrutiva avançada/aprisionamento aéreo.

## 💎 Pearls

- **CVF reduzida não define obstrução sozinha** — o que define é a relação VEF1/CVF reduzida; CVF baixa pode ocorrer tanto na obstrução (por aprisionamento aéreo, esvaziamento incompleto no tempo do exame) quanto na restrição (por volume pulmonar verdadeiramente menor).
- **Capacidade pulmonar total aumentada é incompatível com padrão restritivo puro** — restrição sempre cursa com CPT reduzida; CPT aumentada é assinatura de hiperinsuflação obstrutiva.
- **Índice de Tiffeneau (VEF1/CVF) diminui fisiologicamente com a idade** — usar o limite inferior da normalidade ajustado (não um corte fixo de 0,70) evita falso-positivo de obstrução em idosos saudáveis e falso-negativo em jovens.
- Curva fluxo-volume com aspecto de "concavidade" no ramo descendente é sugestiva de obstrução; achatamento tanto na porção inspiratória quanto expiratória sugere obstrução de via aérea superior/extratorácica fixa (ex.: estenose traqueal).

## ⚠️ Pitfalls

- **Diagnosticar restrição só com VEF1/CVF normal**, sem confirmar CPT reduzida na pletismografia — espirometria isolada não fecha diagnóstico de restrição, apenas levanta a suspeita.
- **Confundir CVF reduzida com restrição automaticamente**, ignorando que obstrução grave com aprisionamento aéreo também reduz a CVF.
- **Atribuir toda prova broncodilatadora negativa à ausência de asma** — muitos asmáticos, sobretudo em fase de bom controle, podem ter espirometria basal normal ou prova broncodilatadora negativa no dia do exame; testes de broncoprovocação (metacolina) podem ser necessários quando a suspeita clínica persiste.
- **Não considerar padrão misto** quando VEF1/CVF e CPT estão ambos reduzidos — é achado comum e clinicamente relevante (pior prognóstico funcional que cada componente isolado).

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus (apenas 1 questão real, ENARE 2025 Q72, classificada como MÉDIA)** — ficou fora do corte 80/20. Ainda assim, interpretação de espirometria é tema transversal e de altíssima recorrência em provas de residência (pneumologia, clínica médica, medicina de família), então vale estudo aprofundado mesmo com essa única aparição neste banco específico.

- **ENARE 2025 Q72** descreveu uma mulher de 65 anos com VEF1 diminuído, CVF diminuída e **capacidade pulmonar total aumentada** — o achado de CPT aumentada é o que resolve a questão a favor de **padrão obstrutivo** (gabarito), eliminando "restritivo" como resposta plausível apesar da CVF reduzida também estar presente (armadilha clássica para quem olha só a CVF sem considerar a CPT).
- O padrão histórico de cobrança desse tema em provas de residência é justamente testar se o candidato sabe que **CPT aumentada = hiperinsuflação = obstrutivo**, mesmo diante de uma CVF reduzida que, isoladamente, poderia sugerir restrição a um candidato menos atento.

## 📚 Referências essenciais

- ATS/ERS (American Thoracic Society/European Respiratory Society) — Standardization of Spirometry e diretrizes de interpretação de testes de função pulmonar (atualização 2019/2021).
- GOLD (Global Initiative for Chronic Obstructive Lung Disease) — classificação de gravidade da obstrução em DPOC.
`;

export default content.trim();
