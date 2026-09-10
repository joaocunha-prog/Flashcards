/**
 * Resumo — Emergências e Terapia Intensiva · Distúrbios ácido-base.
 *
 * Cobre o método sistemático de interpretação gasométrica (pH, componente
 * respiratório, componente metabólico, ânion gap, delta-delta) com foco em
 * distúrbios mistos em paciente crítico — eixo cobrado na única questão
 * real do corpus para este assunto (EBSERH 2026 Q43, sobre distúrbio
 * ácido-base misto triplo em UTI). Assunto de baixa incidência no corpus
 * (1 questão), fora do corte 80/20, mas extrapolado com profundidade de
 * alto rendimento por ser habilidade central de qualquer prova de
 * emergência/terapia intensiva.
 */
const content = `
## 🎯 Essencial

- **Interpretação ácido-base é sequencial, nunca "olhar só o pH"**: (1) o pH define acidemia ou alcalemia; (2) olhar PaCO₂ e HCO₃⁻ para saber qual é o distúrbio primário (o que "acompanha" o pH na mesma direção fisiopatológica); (3) checar se a compensação esperada está dentro da faixa prevista por fórmula; (4) calcular o **ânion gap** sempre, mesmo que o HCO₃⁻ pareça normal; (5) se ânion gap elevado, calcular o **delta-delta** para caçar um segundo distúrbio metabólico escondido.
- **Compensação nunca "normaliza" o pH — ela só atenua o desvio.** Se a compensação levar o pH de volta à faixa normal (7,35-7,45), isso é sinal de **distúrbio misto**, não de compensação "perfeita" — compensação fisiológica isolada nunca corrige o pH para a normalidade completa.
- **Fórmula de Winter** (para acidose metabólica): PaCO₂ esperado = 1,5 × HCO₃⁻ + 8 (± 2). Se o PaCO₂ medido estiver **abaixo** do previsto pela fórmula, existe uma **alcalose respiratória sobreposta**; se estiver **acima**, existe uma **acidose respiratória sobreposta**.
- **Ânion gap = Na⁺ − (Cl⁻ + HCO₃⁻)**, normal em torno de 8-12 mEq/L — **sempre corrigir para a albumina** quando ela está baixa (cada queda de 1 g/dL na albumina abaixo de 4 g/dL reduz o ânion gap esperado em cerca de 2,5 mEq/L); em hipoalbuminemia, um ânion gap "normal" pelo valor bruto pode, na verdade, já estar elevado depois da correção — erro clássico de armadilha em paciente crítico/desnutrido.
- **Delta-delta (ΔAG/ΔHCO₃⁻)** compara o quanto o ânion gap subiu acima do normal com o quanto o HCO₃⁻ caiu abaixo do normal: se a razão for <1, existe uma **acidose metabólica hiperclorêmica (ânion gap normal) associada**; se a razão for >2, existe uma **alcalose metabólica associada** (o HCO₃⁻ "deveria" ter caído mais do que caiu, dado o quanto o ânion gap subiu).
- **Distúrbios triplos são possíveis e são o cenário mais armadilhado de prova**: acidose metabólica de ânion gap elevado + alcalose metabólica (por perda de cloro/volume, diuréticos, aspiração gástrica) + alcalose ou acidose respiratória (dependendo do padrão ventilatório) podem coexistir no mesmo paciente crítico, cada uma com sua própria causa identificável no enunciado.

## 💎 Pearls

- Em paciente com múltiplas fontes plausíveis de distúrbio (choque séptico = acidose lática de ânion gap elevado; furosemida + aspiração gástrica + perda de cloro = alcalose metabólica hipoclorêmica/hipocalêmica; hiperventilação espontânea ou taquipneia sobreposta ao ventilador = alcalose respiratória), o gabarito de prova tende a ser o **distúrbio misto/triplo**, não o distúrbio isolado mais "óbvio".
- Hipocalemia é um achado de suporte clássico da alcalose metabólica por perda de volume/cloro (hipovolemia ativa reabsorção renal de sódio às custas de secreção de potássio e H⁺) — reforça a hipótese de componente metabólico alcalótico mesmo com HCO₃⁻ não muito elevado (mascarado pela acidose metabólica concomitante).
- Lactato muito elevado é o marcador mais direto de acidose metabólica de ânion gap elevado por hipoperfusão/choque — deve sempre entrar na composição do raciocínio, mesmo que o HCO₃⁻ isolado não pareça dramaticamente baixo (porque outro distúrbio metabólico pode estar "puxando" o HCO₃⁻ de volta para cima).
- Ventilação mecânica com parâmetros fixos (volume corrente e frequência respiratória programados) não impede alcalose respiratória se o paciente tiver **drive ventilatório espontâneo sobreposto** (agitação, dor, disparo adicional de ciclos) — PaCO₂ baixo mesmo em modo controlado deve levantar essa suspeita, não ser descartado por "o ventilador está programado para frequência X".
- Abordagem de Stewart (íons fortes, ácidos fracos não voláteis, PaCO₂) é um modelo alternativo mais robusto fisiologicamente para casos complexos de UTI, mas o modelo de Henderson-Hasselbalch com ânion gap/delta-delta continua sendo o padrão mais cobrado e suficiente para a esmagadora maioria das provas.

## ⚠️ Pitfalls

- **Olhar só o pH e classificar o distúrbio pela "direção final"** — um pH próximo do normal pode esconder dois ou três distúrbios que se compensam mutuamente; é obrigatório checar PaCO₂, HCO₃⁻, ânion gap e delta-delta sempre, mesmo com pH aparentemente tranquilizador.
- **Não corrigir o ânion gap pela albumina** em paciente crítico/desnutrido (hipoalbuminemia é a regra em sepse) — pode levar a subestimar (ou até não detectar) uma acidose de ânion gap elevado clinicamente relevante.
- **Assumir compensação respiratória "adequada" sem aplicar a fórmula de Winter** — comparar de cabeça, sem calcular, é a fonte mais comum de erro em questões desenhadas para ter distúrbio misto.
- **Ignorar o delta-delta e não caçar o segundo distúrbio metabólico** quando o ânion gap está elevado — a maioria dos pacientes graves de UTI com múltiplas intervenções (diuréticos, aspiração, fluidoterapia) tem mais de um processo metabólico atuando ao mesmo tempo.
- **Achar que ventilação mecânica "controlada" impede alcalose respiratória** — drive espontâneo sobreposto pode gerar hiperventilação real mesmo com parâmetros programados fixos.
- **Confundir acidose metabólica hiperclorêmica isolada com um distúrbio misto** — hipercloremia por si só (ex.: excesso de solução salina 0,9%) causa acidose metabólica de ânion gap **normal**; presença de ânion gap elevado concomitante indica que outro processo (ex.: acidose lática) está sobreposto, não que a causa seja só hiperclorêmica.

## 🩺 Quadro clínico

Distúrbios ácido-base raramente têm apresentação clínica própria e específica — o quadro é dominado pela doença de base (sepse, insuficiência renal, uso de diuréticos, vômitos/aspiração, hiperventilação por dor/ansiedade/lesão de SNC). Sinais indiretos incluem padrão respiratório compensatório (respiração de Kussmaul na acidose metabólica grave), alteração do nível de consciência (acidemia ou alcalemia graves), arritmias associadas a distúrbios eletrolíticos concomitantes (hipocalemia da alcalose metabólica, hipercalemia da acidose metabólica grave).

## 🔎 Diagnóstico

Sequência sistemática de leitura gasométrica:

1. **pH:** <7,35 = acidemia; >7,45 = alcalemia.
2. **Distúrbio primário:** PaCO₂ e HCO₃⁻ na mesma direção do pH indicam qual é primário (ex.: pH baixo + HCO₃⁻ baixo = acidose metabólica primária; pH baixo + PaCO₂ alto = acidose respiratória primária).
3. **Compensação esperada:** aplicar fórmula correspondente (Winter para acidose metabólica; regras análogas para os demais distúrbios primários) — desvio da faixa esperada indica distúrbio misto adicional.
4. **Ânion gap** (corrigido pela albumina) — sempre calcular, independentemente do valor do HCO₃⁻.
5. **Delta-delta**, se ânion gap elevado — para detectar componente metabólico adicional (hiperclorêmico se razão <1; alcalose metabólica se razão >2).
6. **Eletrólitos e contexto clínico** (uso de diuréticos, aspiração gástrica, volume infundido, drive ventilatório) para atribuir causa a cada componente identificado.

## 💊 Tratamento

O tratamento é sempre da **causa de base** de cada componente identificado, não do número da gasometria isoladamente:

- **Acidose metabólica de ânion gap elevado (lática/cetótica/urêmica/tóxica):** tratar a causa (ressuscitação hemodinâmica no choque, insulina na cetoacidose, diálise na urêmica/intoxicação grave) — bicarbonato exógeno tem papel limitado e controverso, reservado a acidemia extrema (pH muito baixo) com repercussão hemodinâmica.
- **Alcalose metabólica por perda de volume/cloro:** reposição volêmica com solução salina (alcalose "cloro-responsiva"), reposição de potássio associada.
- **Componente respiratório:** ajuste de parâmetros ventilatórios (frequência, volume-minuto) conforme o padrão identificado, sempre em conjunto com o manejo da causa de base (sedação/analgesia se hiperventilação por dor/agitação, por exemplo).
- **Reavaliação seriada:** gasometrias repetidas para acompanhar resposta às intervenções, já que múltiplos componentes podem evoluir em ritmos diferentes.

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus — apenas 1 questão real registrada** (EBSERH 2026 Q43, dificuldade MÉDIA), com uma vinheta desenhada para ter **distúrbio triplo**: paciente séptico em UTI, com lactato elevado (acidose metabólica de ânion gap elevado), uso de furosemida + aspiração gástrica contínua + hipocalemia (alcalose metabólica por perda de volume/cloro/potássio), e hiperventilação espontânea sobreposta ao ventilador (alcalose respiratória) — resultando em pH alcalêmico apesar da acidose metabólica grave de base, justamente porque os três componentes se somam na mesma direção alcalótica (exceto o metabólico de ânion gap, que "puxa" para acidose mas é numericamente superado pelos outros dois). O gabarito exigiu reconhecer os três distúrbios simultâneos, não apenas o mais óbvio.

Mesmo com só 1 aparição neste banco específico, distúrbios ácido-base são **habilidade central e testada com altíssima frequência em provas de residência médica em geral**, especialmente em emergência e terapia intensiva — o método sistemático (ânion gap corrigido + delta-delta + fórmulas de compensação) é aplicável a praticamente qualquer vinheta gasométrica futura, tornando o investimento de estudo aqui desproporcionalmente rentável frente à baixa amostra deste banco específico.

## 📚 Referências essenciais

- Diretriz/consenso de interpretação de distúrbios ácido-base em medicina intensiva — Society of Critical Care Medicine (SCCM) e literatura de referência em fisiologia ácido-base (Stewart, Henderson-Hasselbalch).
`;

export default content.trim();
