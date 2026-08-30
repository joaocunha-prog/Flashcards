/**
 * Resumo — Infectologia · Infecções sexualmente transmissíveis.
 *
 * Cobre as entidades do assunto no corpus: síndrome artrite-dermatite
 * gonocócica (gonococcemia disseminada), sífilis latente tardia em pessoa
 * vivendo com HIV, sífilis secundária e manejo sindrômico do corrimento
 * uretral. Também traz, como extrapolação de alto rendimento além do que
 * já foi cobrado, a sífilis congênita, a reação de Jarisch-Herxheimer, o
 * manejo sindrômico de úlcera genital e de corrimento vaginal, linfogranuloma
 * venéreo, donovanose e testagem combinada, seguindo o PCDT de Atenção
 * Integral às Pessoas com IST do Ministério da Saúde (tema com programa
 * nacional próprio).
 */
const content = `
## 🎯 Essencial

- **Infecção gonocócica disseminada (síndrome artrite-dermatite):** tenossinovite migratória + poliartralgia + lesões cutâneas pustulosas/vesiculopustulosas em extremidades, por bacteremia de Neisseria gonorrhoeae a partir de foco mucoso geralmente **assintomático**. Tratamento com **ceftriaxona parenteral**, em dose e duração maiores que a gonorreia não complicada.
- **Sífilis** tem estadiamento clínico que define o esquema: primária (cancro duro), secundária (rash palmo-plantar, condiloma plano, linfadenopatia generalizada), latente recente (<1 ano) e **latente tardia** (>1 ano ou duração indeterminada) — cada estágio tem número de doses de penicilina diferente, conforme o **PCDT de IST do Ministério da Saúde**.
- **Sífilis latente tardia (ou de duração indeterminada):** penicilina benzatina 2,4 milhões UI, **1x/semana por 3 semanas (3 doses, total 7,2 milhões UI)** — diferente da sífilis recente, tratada com dose única.
- Em **pessoa vivendo com HIV**, o diagnóstico e o tratamento da sífilis seguem os **mesmos critérios** da população geral — a coinfecção não muda o esquema de penicilina conforme o estágio, mas exige atenção a queda mais lenta da titulação sorológica e maior vigilância para neurossífilis.
- **Corrimento uretral:** o manejo sindrômico cobre empiricamente as duas causas mais prováveis (gonorreia + clamídia) simultaneamente, sem esperar confirmação laboratorial — **ceftriaxona (gonococo) + azitromicina (clamídia)**, com tratamento concomitante das parcerias sexuais, conforme o PCDT de IST.
- **Sífilis congênita** decorre de transmissão vertical por sífilis materna não tratada ou tratada inadequadamente (esquema incompleto, droga diferente de penicilina, ou tratamento concluído há menos de 30 dias do parto) — é agravo de notificação compulsória e evitável com pré-natal e tratamento adequados do casal.
- O **PCDT de Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (Ministério da Saúde)** é a referência oficial brasileira: define o manejo sindrômico (corrimento uretral, corrimento vaginal, úlcera genital) e os esquemas de sífilis por estágio adotados no SUS — os esquemas descritos neste resumo seguem essa diretriz, coerente com CDC/OMS nos pontos centrais aqui cobrados.

## 💎 Pearls

- Neurossífilis pode ocorrer em qualquer estágio — se houver sintoma neurológico/oftálmico/auditivo sugestivo, a **punção lombar é indicada independentemente do estágio sorológico**.
- Alergia à penicilina em gestante com sífilis exige **dessensibilização**, não substituição por outro antibiótico — a penicilina é a única droga com eficácia comprovada para prevenir sífilis congênita.
- O seguimento de sífilis usa **VDRL/RPR quantitativo seriado** (queda de pelo menos 2 diluições em 6 meses indica resposta adequada) — o teste treponêmico permanece reagente indefinidamente, mesmo após cura, e não serve para monitorar resposta.
- A gonococcemia disseminada costuma partir de infecção mucosa primária **assintomática** (cervicite/uretrite subclínica) — a ausência de sintomas genitais não exclui o diagnóstico.
- O manejo sindrômico do corrimento uretral não deve aguardar cultura/NAAT para iniciar o tratamento, embora a coleta de amostra antes do tratamento seja recomendada quando possível.
- A **reação de Jarisch-Herxheimer** é reação febril aguda autolimitada (febre, mialgia, cefaleia, piora transitória das lesões) que pode ocorrer nas primeiras 24h após a primeira dose de penicilina para sífilis — não é alergia e não contraindica manter o esquema; é mais comum na sífilis secundária, pela alta carga treponêmica.
- **Tratamento adequado da sífilis na gestação**, para prevenir sífilis congênita, exige: penicilina benzatina no esquema correto para o estágio, **iniciado e concluído até 30 dias antes do parto**, com queda documentada da titulação e avaliação/tratamento também da parceria sexual.
- O manejo sindrômico brasileiro do corrimento uretral (ceftriaxona + azitromicina, sem aguardar confirmação laboratorial) segue o PCDT de IST mesmo diante da tendência internacional recente de tratar gonorreia com ceftriaxona isolada quando clamídia é excluída por NAAT — no Brasil, a baixa disponibilidade de teste molecular rápido na atenção primária mantém a dupla cobertura empírica como conduta padronizada.

## ⚠️ Pitfalls

- **Tratar sífilis latente tardia com dose única de penicilina benzatina** (esquema de sífilis recente) — subtrata a forma tardia, que exige 3 doses semanais.
- **Trocar o esquema de penicilina por outro antibiótico** em pessoa vivendo com HIV com sífilis, achando que a coinfecção exige conduta diferente — o esquema é o mesmo, com vigilância adicional.
- **Usar teste treponêmico isolado para monitorar resposta ao tratamento** — ele não serve para seguimento, apenas para diagnóstico.
- **Tratar corrimento uretral cobrindo só gonococo ou só clamídia** isoladamente — o manejo sindrômico cobre ambos concomitantemente.
- **Descartar gonococcemia disseminada por ausência de sintomas genitais concomitantes** — o foco mucoso costuma ser assintomático.
- **Confundir a reação de Jarisch-Herxheimer com alergia à penicilina** e suspender o tratamento por esse motivo — a conduta é manejo sintomático (antitérmico) e manutenção do esquema.
- **Considerar tratamento materno de sífilis "adequado" sem checar o intervalo até o parto** — tratamento concluído menos de 30 dias antes do parto não é considerado adequado para afastar sífilis congênita, exigindo investigação e tratamento do recém-nascido.
- **Tratar úlcera genital baseando-se apenas na aparência típica**, sem cobrir sífilis e herpes concomitantemente — coinfecção é comum e o manejo sindrômico existe justamente para não depender de diferenciação clínica perfeita à beira do leito.

## 📝 Como a banca cobra

**Infecções sexualmente transmissíveis aparece em 4 questões (1,89% do corpus)**, todas do ENARE, cobrando reconhecimento de apresentações atípicas e esquemas terapêuticos exatos por estágio.

- **ENARE 2025 Q25** cobrou a síndrome artrite-dermatite gonocócica, testando o reconhecimento da gonococcemia disseminada a partir de um quadro articular/cutâneo.
- **ENARE 2025 Q64** (classificada como difícil) trouxe sífilis latente tardia em pessoa vivendo com HIV — combina o esquema terapêutico correto por estágio com a ausência de mudança de conduta pela coinfecção.
- **ENARE 2026 Q28** cobrou sífilis secundária, unindo diagnóstico clínico e esquema terapêutico.
- **ENARE 2026 Q29** testou o manejo sindrômico do corrimento uretral.

## 🧠 Conceito e fisiopatologia

A Neisseria gonorrhoeae pode disseminar-se por via hematogênica a partir de mucosa infectada, causando a síndrome artrite-dermatite — poliartralgia migratória, tenossinovite e lesões cutâneas por embolização séptica de pequenos vasos, geralmente sem artrite séptica purulenta clássica na maioria das articulações acometidas (que pode ocorrer quando a doença evolui para monoartrite séptica verdadeira).

A sífilis é doença sistêmica causada pelo Treponema pallidum, cujos estágios refletem diferentes fases da resposta imune do hospedeiro: lesão primária no sítio de inoculação, disseminação hematogênica na fase secundária, período de latência imunológica e potencial reativação tardia com dano tecidual imunomediado (fase terciária). O tempo de infecção determina a carga treponêmica presumida e, por isso, a duração necessária do tratamento — quanto mais longa ou indeterminada a infecção, mais doses são exigidas.

A reação de Jarisch-Herxheimer resulta da lise maciça e súbita de espiroquetas logo após a primeira dose eficaz de antibiótico, com liberação de produtos bacterianos que desencadeiam resposta inflamatória sistêmica transitória — fenômeno descrito também em outras espiroquetoses (leptospirose, doença de Lyme), mas classicamente lembrado no tratamento da sífilis, sobretudo secundária.

A transmissão vertical do Treponema pallidum ocorre por via transplacentária em qualquer fase da gestação, sendo mais provável e mais grave quanto maior a carga treponêmica materna (maior risco na sífilis primária/secundária não tratada) — daí a exigência de esquema completo e tempestivo (concluído com antecedência mínima antes do parto) para considerar a gestante adequadamente tratada.

## 🩺 Quadro clínico

- **Gonococcemia disseminada:** tríade de tenossinovite migratória (punhos, dedos, joelhos, tornozelos), poliartralgia e lesões cutâneas pustulosas/vesiculopustulosas indolores em extremidades — pode evoluir para monoartrite séptica purulenta verdadeira em uma única articulação.
- **Sífilis primária:** cancro duro — úlcera única, indolor, de base endurecida, que cicatriza espontaneamente em semanas mesmo sem tratamento (o que não significa cura da infecção).
- **Sífilis secundária:** rash maculopapular difuso incluindo palmas e plantas, condiloma plano (lesões úmidas hipertróficas em áreas intertriginosas), linfadenopatia generalizada, alopecia em clareira e sintomas constitucionais — é o estágio de maior carga treponêmica circulante e, por isso, de maior transmissibilidade.
- **Sífilis latente:** ausência completa de sinais/sintomas, diagnóstico apenas sorológico — a distinção entre recente e tardia depende da história de exposição/sintomas prévios, não do exame físico.
- **Corrimento uretral:** secreção uretral purulenta ou mucopurulenta, disúria — a intensidade da secreção não distingue com segurança gonococo de clamídia, daí a cobertura dupla empírica.

## 🔎 Diagnóstico

- **Gonococcemia disseminada:** hemocultura (baixa sensibilidade), cultura/NAAT de sítios mucosos mesmo assintomáticos, análise de líquido articular se houver artrite séptica verdadeira.
- **Sífilis:** teste treponêmico (FTA-ABS/teste rápido) associado a teste não treponêmico (VDRL/RPR) quantitativo para estadiamento e seguimento; o tempo de exposição/sintomas define o esquema quando a duração é conhecida.
- **Corrimento uretral:** abordagem sindrômica não espera confirmação laboratorial para tratar, mas a coleta de amostra prévia é recomendada.
- **Sífilis congênita:** avaliar todo recém-nascido de mãe com sífilis pelo esquema materno (adequado ou não) e pela evolução do VDRL do bebê comparado ao materno; exame físico, radiografia de ossos longos e, quando indicado, líquor.
- **Úlcera genital (manejo sindrômico):** avaliar simultaneamente sífilis (cancro duro indolor), herpes genital (vesículas/úlceras dolorosas recorrentes), cancro mole/chancroide (úlcera dolorosa com adenopatia supurativa) e, mais raramente, linfogranuloma venéreo e donovanose.

## 💊 Tratamento

- **Gonococcemia disseminada:** ceftriaxona parenteral, dose maior e curso mais longo (geralmente 7 dias) que a gonorreia não complicada, com transição para via oral possível após melhora clínica.
- **Sífilis primária/secundária/latente recente:** penicilina benzatina 2,4 milhões UI, dose única IM.
- **Sífilis latente tardia/duração indeterminada/terciária (não neuro):** penicilina benzatina 2,4 milhões UI, 1x/semana por 3 semanas.
- **Neurossífilis:** penicilina cristalina IV por 10-14 dias.
- **Corrimento uretral (manejo sindrômico):** ceftriaxona + azitromicina, com tratamento das parcerias sexuais.
- **Corrimento vaginal (manejo sindrômico):** cobre concomitantemente as três causas mais prováveis conforme o quadro — vaginose bacteriana e tricomoníase (metronidazol) e candidíase (antifúngico tópico/oral) —, associando cobertura para cervicite (gonococo/clamídia) quando há fatores de risco.
- **Úlcera genital (manejo sindrômico):** cobrir sífilis e herpes genital como causas mais prováveis; associar cobertura para cancro mole conforme prevalência local.

## 🧭 Além do grounding: o que mais pode cair

- **Sífilis congênita** é desfecho evitável e tema clássico de pediatria/infectologia: notificação compulsória, critérios de tratamento materno inadequado (droga diferente de penicilina, esquema incompleto, ou concluído há menos de 30 dias do parto, ou parceria não tratada) e conduta no recém-nascido exposto.
- **Reação de Jarisch-Herxheimer** é achado clássico de prova nas primeiras 24h após a primeira dose de penicilina para sífilis — reconhecer que não é alergia evita a suspensão indevida do tratamento.
- **Manejo sindrômico de úlcera genital** amplia o raciocínio além do corrimento uretral: sífilis, herpes genital e cancro mole são as causas centrais, cada uma com padrão clássico de dor e adenopatia que ajuda a diferenciá-las à beira do leito.
- **Manejo sindrômico de corrimento vaginal** é o par natural do corrimento uretral, cobrindo vaginose bacteriana, tricomoníase e candidíase, com atenção a cervicite concomitante em populações de maior risco.
- **HPV e prevenção do câncer de colo do útero:** vacinação (idealmente antes do início da vida sexual), rastreio citológico/HPV-DNA e conduta diante de condiloma acuminado são extensões relevantes do tema IST com forte carga de saúde pública no Brasil.
- **PrEP e PEP para HIV** integram a mesma linha de cuidado das demais IST (aconselhamento, testagem combinada, tratamento de parcerias) e são tema crescente de prova por sua relevância em política pública recente.
- **Testagem combinada** (HIV, sífilis, hepatites B e C) é recomendada a todo paciente diagnosticado com qualquer IST, dada a sobreposição de vias de transmissão e a frequência de coinfecções assintomáticas.
- **Resistência antimicrobiana da Neisseria gonorrhoeae** motivou o abandono da monoterapia com azitromicina e o reforço da dose de ceftriaxona nos protocolos mais recentes — tema de vigilância epidemiológica que pode aparecer em questões sobre atualização terapêutica.
- **Linfogranuloma venéreo** (Chlamydia trachomatis sorotipos L1-L3) cursa classicamente com úlcera genital transitória e indolor seguida de linfadenopatia inguinal volumosa e dolorosa, por vezes com fistulização ("sinal do sulco") — tratamento com doxiciclina por período prolongado (21 dias), diferente do esquema padrão de clamídia genital não complicada.
- **Donovanose (granuloma inguinal)** causa úlceras genitais crônicas, indolores, de bordas elevadas e sangramento fácil ao toque, sem adenopatia satélite verdadeira (pseudobubões) — endêmica em algumas regiões do Brasil, com boa resposta a azitromicina prolongada.

## 📚 Referências essenciais

- PCDT de Infecções Sexualmente Transmissíveis — Ministério da Saúde.
- CDC Sexually Transmitted Infections Treatment Guidelines.
- Manual de Controle das DST — Ministério da Saúde.
`;

export default content.trim();
