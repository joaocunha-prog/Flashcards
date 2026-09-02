/**
 * Resumo — Infectologia · Infecções sexualmente transmissíveis.
 *
 * Reorganizado por entidade clínica (cada IST tem sua própria seção com
 * quando suspeitar, diagnóstico, tratamento, pearl e pitfall juntos), em vez
 * de picado entre seções genéricas de tipo.
 *
 * Cobre as entidades do assunto no corpus: síndrome artrite-dermatite
 * gonocócica (gonococcemia disseminada), sífilis latente tardia em pessoa
 * vivendo com HIV, sífilis secundária e manejo sindrômico do corrimento
 * uretral. Inclui também extrapolações de alto rendimento (sífilis
 * congênita, reação de Jarisch-Herxheimer, manejo sindrômico de úlcera
 * genital e de corrimento vaginal, linfogranuloma venéreo, donovanose,
 * testagem combinada e HPV/rastreio de câncer de colo) ainda não cobradas
 * no corpus, mas plausíveis em provas futuras — seguindo o PCDT de Atenção
 * Integral às Pessoas com IST do Ministério da Saúde (tema com programa
 * nacional próprio).
 */
const content = `
## 🎯 Essencial

- O **PCDT de Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (Ministério da Saúde)** é a referência oficial brasileira: define o manejo sindrômico (corrimento uretral, corrimento vaginal, úlcera genital) e os esquemas de sífilis por estágio adotados no SUS.
- **Manejo sindrômico** é o fio condutor de metade das entidades deste tema: tratar empiricamente as causas mais prováveis de uma síndrome (corrimento, úlcera), sem esperar confirmação laboratorial — a lógica se repete em corrimento uretral, corrimento vaginal e úlcera genital.
- **Sífilis** tem estadiamento clínico que define o número de doses de penicilina — quanto mais longa/indeterminada a duração da infecção, mais doses são exigidas; coinfecção por HIV **não muda** o esquema por estágio, apenas a vigilância.
- **Testagem combinada** (HIV, sífilis, hepatites B e C) é recomendada a todo paciente diagnosticado com qualquer IST, dada a sobreposição de vias de transmissão e a frequência de coinfecções assintomáticas.

## 📝 Como a banca cobra

**Infecções sexualmente transmissíveis aparece em 4 questões (1,89% do corpus)**, todas do ENARE, cobrando reconhecimento de apresentações atípicas e esquemas terapêuticos exatos por estágio.

- **ENARE 2025 Q25** cobrou a síndrome artrite-dermatite gonocócica, testando o reconhecimento da gonococcemia disseminada a partir de um quadro articular/cutâneo.
- **ENARE 2025 Q64** (classificada como difícil) trouxe sífilis latente tardia em pessoa vivendo com HIV — combina o esquema terapêutico correto por estágio com a ausência de mudança de conduta pela coinfecção.
- **ENARE 2026 Q28** cobrou sífilis secundária, unindo diagnóstico clínico e esquema terapêutico.
- **ENARE 2026 Q29** testou o manejo sindrômico do corrimento uretral.

## 🧠 Conceito e fisiopatologia

- Sífilis é doença sistêmica pelo *Treponema pallidum*, cujos estágios refletem diferentes fases da resposta imune do hospedeiro:
  - Lesão primária no sítio de inoculação
  - Disseminação hematogênica na fase secundária
  - Período de latência imunológica
  - Potencial reativação tardia com dano tecidual imunomediado (fase terciária)
- Quanto maior a carga treponêmica presumida, **mais doses de penicilina** são necessárias
- *Neisseria gonorrhoeae* pode disseminar-se por via hematogênica a partir de mucosa infectada (geralmente assintomática), causando a síndrome artrite-dermatite por embolização séptica de pequenos vasos
- Reação de Jarisch-Herxheimer resulta da lise maciça e súbita de espiroquetas logo após a primeira dose eficaz de antibiótico
  - Fenômeno descrito também em outras espiroquetoses, mas classicamente lembrado no tratamento da sífilis secundária, de maior carga treponêmica
- Transmissão vertical do *T. pallidum* é transplacentária em qualquer fase da gestação, mais provável e mais grave quanto maior a carga treponêmica materna → daí a exigência de esquema completo e tempestivo para considerar a gestante adequadamente tratada

💡 Pensa assim: mais tempo de doença/mais carga treponêmica = mais "doses de reforço" de penicilina — é por isso que sífilis recente leva 1 dose e sífilis tardia/indeterminada leva 3.

## 🔹 Infecção gonocócica disseminada (síndrome artrite-dermatite)

- **Quando suspeitar:** tenossinovite migratória (punhos, dedos, joelhos, tornozelos) + poliartralgia + lesões cutâneas pustulosas/vesiculopustulosas indolores em extremidades, por bacteremia de *N. gonorrhoeae* a partir de foco mucoso geralmente **assintomático** (cervicite/uretrite subclínica) — pode evoluir para monoartrite séptica purulenta verdadeira em uma única articulação.
- **Diagnóstico:** hemocultura (baixa sensibilidade), cultura/NAAT de sítios mucosos mesmo assintomáticos, análise de líquido articular se houver artrite séptica verdadeira.
- **Tratamento:** **ceftriaxona parenteral**, dose maior e curso mais longo (geralmente 7 dias) que a gonorreia não complicada, com transição para via oral possível após melhora clínica.
- 💎 **Pearl:** a ausência de sintomas genitais concomitantes **não exclui** o diagnóstico — o foco mucoso costuma ser silencioso.
- ⚠️ **Pitfall:** descartar gonococcemia disseminada por ausência de queixa genital.
- 📝 **Como caiu:** ENARE 2025 Q25.

## 🔹 Sífilis adquirida — estadiamento e tratamento

- **Primária:** cancro duro — úlcera única, indolor, de base endurecida, cicatriza espontaneamente em semanas mesmo sem tratamento (o que não significa cura da infecção). Tratamento: penicilina benzatina 2,4 milhões UI, dose única IM.
- **Secundária:** rash maculopapular difuso incluindo palmas e plantas, condiloma plano (lesões úmidas hipertróficas em áreas intertriginosas), linfadenopatia generalizada, alopecia em clareira e sintomas constitucionais — estágio de maior carga treponêmica circulante e, por isso, de maior transmissibilidade. Mesmo esquema da primária (dose única).
- **Latente:** ausência completa de sinais/sintomas, diagnóstico apenas sorológico. **Recente** (<1 ano): dose única. **Tardia** (>1 ano ou duração indeterminada): **penicilina benzatina 2,4 milhões UI, 1x/semana por 3 semanas (3 doses, total 7,2 milhões UI)** — diferente da forma recente.
- **Neurossífilis (qualquer estágio):** se houver sintoma neurológico/oftálmico/auditivo sugestivo, **punção lombar é indicada independentemente do estágio sorológico**; tratamento com penicilina cristalina IV por 10-14 dias.
- **Em pessoa vivendo com HIV:** diagnóstico e tratamento seguem os **mesmos critérios** da população geral — a coinfecção **não muda** o esquema de penicilina conforme o estágio, mas exige atenção a queda mais lenta da titulação sorológica e maior vigilância para neurossífilis.
- 💎 **Pearl:** seguimento com **VDRL/RPR quantitativo seriado** (queda de pelo menos 2 diluições em 6 meses indica resposta adequada) — o teste treponêmico permanece reagente indefinidamente, mesmo após cura, e **não** serve para monitorar resposta.
- ⚠️ **Pitfall:** tratar sífilis latente tardia com dose única (subtrata a forma tardia); ou trocar o esquema de penicilina por outro antibiótico em pessoa vivendo com HIV achando que a coinfecção exige conduta diferente; ou usar teste treponêmico isolado para monitorar resposta.
- 📝 **Como caiu:** ENARE 2025 Q64 (latente tardia em PVHIV) e ENARE 2026 Q28 (secundária).

## 🔹 Alergia à penicilina e reação de Jarisch-Herxheimer

- **Alergia à penicilina em gestante com sífilis:** exige **dessensibilização**, não substituição por outro antibiótico — a penicilina é a única droga com eficácia comprovada para prevenir sífilis congênita.
- **Reação de Jarisch-Herxheimer:** reação febril aguda autolimitada (febre, mialgia, cefaleia, piora transitória das lesões) nas primeiras 24h após a primeira dose de penicilina para sífilis — **não é alergia** e não contraindica manter o esquema; mais comum na sífilis secundária, pela alta carga treponêmica; manejo é sintomático (antitérmico).
- ⚠️ **Pitfall:** confundir a reação de Jarisch-Herxheimer com alergia à penicilina e suspender o tratamento por esse motivo.
- 📝 **Como caiu:** ainda não cobrado no corpus — achado clássico de prova nas primeiras 24h após a 1ª dose.

## 🔹 Sífilis congênita

- **Mecanismo:** transmissão vertical por sífilis materna não tratada ou **tratada inadequadamente** — esquema incompleto, droga diferente de penicilina, ou tratamento concluído **há menos de 30 dias do parto**, ou parceria sexual não tratada.
- **Conduta:** agravo de notificação compulsória, evitável com pré-natal e tratamento adequados do casal; todo recém-nascido de mãe com sífilis deve ser avaliado pelo esquema materno (adequado ou não) e pela evolução do VDRL do bebê comparado ao materno, exame físico, radiografia de ossos longos e, quando indicado, líquor.
- 💎 **Pearl:** "tratamento adequado" na gestação exige três critérios simultâneos — esquema correto para o estágio, penicilina (não outra droga) e **conclusão até 30 dias antes do parto** — faltando qualquer um, o recém-nascido é investigado e tratado como sífilis congênita.
- ⚠️ **Pitfall:** considerar tratamento materno "adequado" sem checar o intervalo até o parto.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Corrimento uretral — manejo sindrômico

- **Conduta:** cobre empiricamente as duas causas mais prováveis (gonorreia + clamídia) simultaneamente, sem esperar confirmação laboratorial — **ceftriaxona (gonococo) + azitromicina (clamídia)**, com tratamento concomitante das parcerias sexuais.
- 💎 **Pearl:** o manejo sindrômico brasileiro (dupla cobertura empírica) segue o PCDT mesmo diante da tendência internacional recente de tratar gonorreia com ceftriaxona isolada quando clamídia é excluída por NAAT — no Brasil, a baixa disponibilidade de teste molecular rápido na atenção primária mantém a dupla cobertura como conduta padronizada. A **resistência antimicrobiana da *N. gonorrhoeae*** motivou o abandono da monoterapia com azitromicina e o reforço da dose de ceftriaxona nos protocolos mais recentes.
- ⚠️ **Pitfall:** tratar corrimento uretral cobrindo só gonococo ou só clamídia isoladamente.
- 📝 **Como caiu:** ENARE 2026 Q29.

## 🔹 Corrimento vaginal e úlcera genital — manejo sindrômico (extensão natural do corrimento uretral)

- **Corrimento vaginal:** cobre concomitantemente as três causas mais prováveis — vaginose bacteriana e tricomoníase (metronidazol) e candidíase (antifúngico tópico/oral) —, associando cobertura para cervicite (gonococo/clamídia) quando há fatores de risco.
- **Úlcera genital:** cobrir sífilis (cancro duro indolor) e herpes genital (vesículas/úlceras dolorosas recorrentes) como causas mais prováveis; associar cobertura para cancro mole/chancroide (úlcera dolorosa com adenopatia supurativa) conforme prevalência local — coinfecção é comum, e o manejo sindrômico existe justamente para não depender de diferenciação clínica perfeita à beira do leito.
- ⚠️ **Pitfall:** tratar úlcera genital baseando-se apenas na aparência típica, sem cobrir sífilis e herpes concomitantemente.
- 📝 **Como caiu:** ainda não cobrado no corpus como síndrome própria — mas é par natural do corrimento uretral já cobrado.

## 🔹 Linfogranuloma venéreo e donovanose (diferenciais de úlcera genital crônica)

- **Linfogranuloma venéreo** (*Chlamydia trachomatis* sorotipos L1-L3): úlcera genital transitória e indolor seguida de linfadenopatia inguinal volumosa e dolorosa, por vezes com fistulização ("sinal do sulco") — tratamento com doxiciclina por período prolongado (21 dias), diferente do esquema padrão de clamídia genital não complicada.
- **Donovanose (granuloma inguinal):** úlceras genitais crônicas, indolores, de bordas elevadas e sangramento fácil ao toque, **sem** adenopatia satélite verdadeira (pseudobubões) — endêmica em algumas regiões do Brasil, boa resposta a azitromicina prolongada.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 HPV e prevenção do câncer de colo do útero

- **Conduta:** vacinação (idealmente antes do início da vida sexual), rastreio citológico/HPV-DNA e conduta diante de condiloma acuminado — extensão relevante do tema IST, com forte carga de saúde pública no Brasil.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📋 Tabela

**Esquema de penicilina benzatina por estágio de sífilis**

| Estágio | Esquema | Duração até considerar "tratamento adequado" |
|---|---|---|
| Primária/secundária/latente recente | 2,4 milhões UI, dose única IM | Concluído ≥30 dias antes do parto (se gestante) |
| Latente tardia/indeterminada/terciária (não neuro) | 2,4 milhões UI, 1x/semana × 3 semanas | Concluído ≥30 dias antes do parto (se gestante) |
| Neurossífilis | Penicilina cristalina IV, 10-14 dias | — |

## 📚 Referências essenciais

- PCDT de Infecções Sexualmente Transmissíveis — Ministério da Saúde.
- CDC Sexually Transmitted Infections Treatment Guidelines.
- Manual de Controle das DST — Ministério da Saúde.
`;

export default content.trim();
