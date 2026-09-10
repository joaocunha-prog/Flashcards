/**
 * Resumo — Geriatria · Sarcopenia e fragilidade.
 *
 * Tema coeso (não há split por entidade clínica) — sarcopenia e fragilidade
 * são duas síndromes geriátricas distintas mas profundamente relacionadas,
 * tratadas aqui em conjunto porque o corpus e a literatura as abordam de
 * forma integrada (a via de rastreio/diagnóstico é a mesma pergunta clínica
 * central do tema).
 *
 * Cobre a questão real do corpus (ENARE 2026 Q41 — algoritmo de rastreio
 * de sarcopenia com o questionário SARC-F seguido de teste de força).
 * Assunto de baixa incidência no banco (1 questão, cauda longa, fora do
 * corte 80/20), mas o restante do resumo é extrapolado com profundidade de
 * alto rendimento: algoritmo completo EWGSOP2 (Find-Assess-Confirm-
 * Severity), fenótipo de fragilidade de Fried, pontos de corte, tratamento
 * (exercício resistido, proteína, vitamina D) e armadilhas clássicas de
 * prova de geriatria.
 */
const content = `
## 🎯 Essencial

- **Sarcopenia é a perda progressiva e generalizada de massa e força muscular esquelética**, associada a risco aumentado de quedas, fraturas, incapacidade funcional e mortalidade — não é "fraqueza normal do envelhecimento", é uma síndrome diagnosticável e tratável.
- **O algoritmo diagnóstico não começa por exame de imagem.** A sequência correta (EWGSOP2 — European Working Group on Sarcopenia in Older People, 2ª atualização) é: **rastreio (Find) → força muscular (Assess) → quantidade/qualidade muscular (Confirm) → desempenho físico (Severity)**.
- **Rastreio:** questionário **SARC-F** (5 itens autorreferidos: força, auxílio para caminhar, levantar-se de cadeira, subir escadas, quedas) — pontuação ≥4 indica risco aumentado e aciona a próxima etapa.
- **Avaliação de força (não massa):** **dinamometria de preensão palmar** (grip strength) ou **teste de levantar-se da cadeira 5 vezes** (chair stand test) — força reduzida já define "sarcopenia provável", suficiente para iniciar intervenção mesmo antes da confirmação por imagem.
- **Confirmação:** medida de massa/quantidade muscular por **DEXA** (absortometria de raios-X de dupla energia) ou **bioimpedância** — exames de imagem mais sofisticados (TC, RM) ficam reservados a pesquisa, não à prática clínica de rotina.
- **Gravidade:** desempenho físico (velocidade de marcha, SPPB, teste de caminhada de 400 m, Timed Up and Go) — desempenho reduzido associado a força e massa reduzidas define **sarcopenia grave**.
- **Fragilidade (fenótipo de Fried)** é síndrome mais ampla, multissistêmica, com 5 critérios: perda de peso não intencional, exaustão autorreferida, fraqueza (preensão palmar), lentidão da marcha e baixo nível de atividade física — **≥3 = frágil, 1-2 = pré-frágil, 0 = robusto**. Sarcopenia é um componente físico central da fragilidade, mas os construtos não são sinônimos.

## 💎 Pearls

- **Dinapenia** é o termo técnico para perda de força muscular isolada, sem necessariamente haver perda proporcional de massa — é comum a banca cobrar que força e massa muscular **não** caem sempre em paralelo, o que justifica testar força antes de confirmar massa.
- A ordem F-A-C-S do EWGSOP2 é desenhada para ser **factível na atenção primária**: SARC-F e teste de levantar-se da cadeira não exigem equipamento sofisticado, ao contrário de DEXA — por isso o algoritmo começa pelo mais simples e acessível.
- **Sarcopenia primária** (relacionada apenas ao envelhecimento) se distingue de **sarcopenia secundária** (relacionada à inatividade, doença — insuficiência de órgãos, neoplasia, doença endócrina — ou nutrição inadequada) — a maioria dos casos em idosos hospitalizados/fragilizados é secundária ou mista.
- **Obesidade sarcopênica**: coexistência de excesso de gordura corporal com massa/força muscular reduzida — o IMC normal ou elevado pode mascarar a sarcopenia subjacente, sendo uma armadilha clássica de reconhecimento.
- A **escala Clinical Frailty Scale (Rockwood)**, de avaliação clínica global (1 a 9, de "muito apto" a "doença terminal"), é uma alternativa amplamente usada ao fenótipo de Fried, sobretudo em ambiente hospitalar, por ser mais rápida (julgamento clínico estruturado, sem necessidade dos 5 testes).
- **Velocidade de marcha <0,8 m/s** é, isoladamente, um dos preditores mais robustos de desfechos adversos em idosos (quedas, hospitalização, mortalidade) e compõe tanto o rastreio de fragilidade quanto a etapa de gravidade da sarcopenia.
- Suplementação proteica **sem exercício resistido associado** tem efeito modesto sobre massa/força muscular — o pilar terapêutico mais robusto é sempre o **treinamento de força**, com a proteína funcionando como adjuvante, não substituto.

## ⚠️ Pitfalls

- **Pular direto para exame de imagem (DEXA, RM, TC) sem antes rastrear com SARC-F e avaliar força** — é o erro mais cobrado no corpus: a sequência correta prioriza instrumentos simples e acessíveis antes de exames de imagem.
- **Confundir sarcopenia (síndrome muscular específica) com fragilidade (síndrome multissistêmica mais ampla)** como se fossem sinônimos intercambiáveis — compartilham fisiopatologia e fatores de risco, mas são constructos diagnósticos distintos, com instrumentos de avaliação próprios.
- **Assumir que IMC normal ou sobrepeso exclui sarcopenia** — a obesidade sarcopênica é subdiagnosticada exatamente por essa suposição.
- **Tratar sarcopenia apenas com suplementação nutricional**, sem prescrever exercício físico resistido — a evidência mais forte de reversibilidade é do exercício, não da dieta isolada.
- **Achar que perda de força e perda de massa muscular sempre andam juntas** — a dinapenia pode preceder ou ocorrer de forma desproporcional à perda de massa, daí a lógica do algoritmo avaliar força antes de confirmar massa.

## 📝 Como a banca cobra

**Sarcopenia e fragilidade é um assunto de baixa incidência no corpus — apenas 1 questão registrada** (ENARE 2026 Q41, classificada como FÁCIL), cobrando exatamente a sequência de rastreio e avaliação de força do algoritmo EWGSOP2 (SARC-F seguido de preensão palmar ou teste de levantar-se da cadeira), em cenário de saúde da família.

Apesar de só ter aparecido uma vez no banco até agora, é um tema **clássico e crescente em provas de residência médica** — geriatria vem ganhando peso proporcional ao envelhecimento populacional, e sarcopenia/fragilidade são dos poucos temas geriátricos com algoritmo diagnóstico objetivo e bem definido (o que os torna atrativos para questões de múltipla escolha, que exigem resposta inequívoca). Vale a pena dominar o algoritmo F-A-C-S completo, os pontos de corte de força/velocidade de marcha e a distinção sarcopenia-vs-fragilidade, pois é conteúdo de alto rendimento mesmo fora do corte 80/20 deste banco específico.

## 🧠 Conceito e fisiopatologia

A sarcopenia resulta de um desequilíbrio progressivo entre síntese e degradação proteica muscular, acelerado por inatividade física, inflamação crônica de baixo grau ("inflammaging"), resistência anabólica (menor resposta muscular a estímulos proteicos/hormonais com o envelhecimento), declínio hormonal (testosterona, GH/IGF-1, estrogênio) e perda de unidades motoras alfa. A fragilidade, por sua vez, reflete um estado de reserva fisiológica reduzida em múltiplos sistemas (muscular, imune, endócrino, cardiovascular) que compromete a capacidade do idoso de responder a estressores agudos (infecção, cirurgia, internação) — a sarcopenia é o componente muscular mais mensurável e acionável dentro dessa síndrome mais ampla.

## 🔎 Diagnóstico — algoritmo EWGSOP2 (Find-Assess-Confirm-Severity)

1. **Find (rastreio):** SARC-F ≥4 pontos, ou suspeita clínica em idoso com queixas funcionais (dificuldade para subir escadas, carregar peso, quedas recentes).
2. **Assess (força):** dinamometria de preensão palmar (<27 kg em homens, <16 kg em mulheres, valores de referência EWGSOP2) **ou** teste de levantar-se da cadeira 5 vezes (≥15 segundos é anormal) — força reduzida define **sarcopenia provável**, suficiente para já iniciar intervenção.
3. **Confirm (massa/quantidade muscular):** DEXA ou bioimpedância com índice de massa muscular apendicular reduzido confirma o diagnóstico de **sarcopenia**.
4. **Severity (desempenho físico):** velocidade de marcha ≤0,8 m/s, SPPB baixo, ou teste de caminhada de 400 m alterado/não completado define **sarcopenia grave**.

**Fenótipo de fragilidade de Fried** (5 critérios, avaliados independentemente do algoritmo de sarcopenia): perda de peso não intencional (≥4,5 kg ou ≥5% do peso corporal no último ano), exaustão autorreferida, fraqueza por dinamometria, lentidão da marcha e baixo gasto energético em atividade física. ≥3 critérios = frágil; 1-2 = pré-frágil; 0 = robusto.

## 💊 Tratamento

- **Exercício físico resistido (treinamento de força)** é a intervenção com maior nível de evidência para reverter ou atenuar sarcopenia — deve ser prescrito de forma individualizada e progressiva, associado a componente aeróbico e de equilíbrio quando possível (reduz risco de quedas).
- **Ingesta proteica adequada:** 1,0-1,2 g/kg/dia no idoso saudável, podendo chegar a 1,2-1,5 g/kg/dia no idoso sarcopênico/frágil ou em recuperação de doença aguda, distribuída ao longo do dia (evitar concentração toda em uma refeição).
- **Correção de deficiência de vitamina D**, quando presente, é recomendada como medida adjuvante (relevância principalmente em quem tem hipovitaminose documentada, não suplementação universal empírica).
- **Não há fármaco aprovado especificamente para sarcopenia** — testosterona, inibidores de miostatina e outros agentes anabólicos permanecem investigacionais, com balanço risco-benefício ainda não favorável para uso rotineiro.
- **Manejo da fragilidade** é multidimensional: além do exercício e nutrição, inclui revisão de polifarmácia, tratamento de comorbidades, suporte social e prevenção de quedas — abordagem de equipe multiprofissional, não apenas prescrição isolada.

## 📚 Referências essenciais

- EWGSOP2 — European Working Group on Sarcopenia in Older People, 2ª atualização (algoritmo Find-Assess-Confirm-Severity e pontos de corte de força/desempenho).
- Fried LP et al. — critérios do fenótipo de fragilidade (Cardiovascular Health Study).
- Clinical Frailty Scale (Rockwood) como instrumento alternativo de avaliação global de fragilidade.
`;

export default content.trim();
