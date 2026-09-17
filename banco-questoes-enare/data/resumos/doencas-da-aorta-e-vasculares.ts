/**
 * Resumo — Cardiologia · Doenças da aorta e vasculares.
 *
 * Reorganizado por entidade clínica, já que o assunto reúne doenças
 * distintas da aorta e do sistema vascular periférico. A dissecção aguda de
 * aorta tipo A é a entidade com grounding real no corpus (EBSERH 2026 Q33 —
 * deterioração após trombolítico administrado para suspeita de IAM com
 * supra inferior, na verdade uma dissecção com tamponamento). As demais
 * entidades (aneurisma de aorta abdominal, doença arterial periférica,
 * isquemia arterial aguda de membro) são extrapolações de alto rendimento
 * ainda não cobradas no corpus. Assunto de baixa incidência no corpus
 * (1 questão), fora do corte 80/20.
 */
const content = `
## 🎯 Essencial

- **Dor torácica súbita, intensa, "em facada", irradiada para o dorso/interescapular, em hipertenso mal controlado** é a vinheta clássica de dissecção aórtica — e deve sempre entrar no diagnóstico diferencial de dor torácica aguda, junto de SCA e embolia pulmonar, antes de qualquer terapia de reperfusão.
- **Dissecção de aorta pode mimetizar IAM com supra de ST** quando o retalho da dissecção compromete o óstio coronariano (mais comumente a coronária direita, gerando supra inferior) — reconhecer esse mimetismo é a essência do raciocínio de alto rendimento do tema.
- **Trombolítico é contraindicação absoluta em dissecção aórtica** — se administrado por engano (suspeita de IAM não diferenciada de dissecção), o risco de sangramento maciço para dentro do falso lúmen e para o pericárdio aumenta drasticamente, podendo causar **tamponamento cardíaco agudo** e morte rápida.
- **Sinais de alarme que devem levantar a suspeita de dissecção antes de trombolisar:** assimetria de pulsos ou de pressão arterial entre os membros, sopro de insuficiência aórtica nova, alargamento de mediastino na radiografia de tórax, dor com características migratórias (irradia conforme a dissecção progride).
- **Classificação de Stanford:** tipo A envolve a aorta ascendente (com ou sem extensão distal) — **emergência cirúrgica**; tipo B poupa a aorta ascendente (só descendente) — manejo inicial **clínico** (controle rigoroso de frequência cardíaca e pressão arterial), reservando cirurgia/endovascular para complicações (isquemia de órgão-alvo, ruptura iminente, dor refratária).
- **Tamponamento cardíaco agudo** (tríade de Beck: hipotensão, turgência jugular, bulhas hipofonéticas; mais pulso paradoxal) após dissecção tipo A é emergência com necessidade de intervenção cirúrgica imediata — pericardiocentese de alívio pode ser ponte, mas não substitui a correção cirúrgica definitiva.

## 💎 Pearls

- Diferença de pressão arterial sistólica >20 mmHg entre os dois braços é um achado clássico (embora pouco sensível isoladamente) de dissecção envolvendo o arco aórtico.
- D-dímero muito elevado tem alto valor preditivo negativo para dissecção quando a probabilidade pré-teste é baixa — mas não deve atrasar exame de imagem definitivo (angiotomografia) quando a suspeita clínica é alta.
- Angiotomografia de aorta é o exame de escolha na maioria dos serviços por rapidez e disponibilidade; ecocardiograma transesofágico é alternativa em paciente instável demais para transporte à tomografia.
- Síndromes genéticas de tecido conjuntivo (Marfan, Ehlers-Danlos vascular, Loeys-Dietz) e valva aórtica bivalvulada são fatores de risco importantes para dissecção em pacientes **jovens sem hipertensão** — sempre considerar esse diferencial fora do perfil "hipertenso mal controlado de meia-idade".
- Aneurisma de aorta abdominal é predominantemente **assintomático até a ruptura ou expansão aguda** — rastreio por ultrassonografia é recomendado em homens de 65-75 anos com história de tabagismo.
- Claudicação intermitente (dor em membro inferior desencadeada por esforço, aliviada com repouso) é o sintoma clássico de doença arterial periférica crônica — índice tornozelo-braquial (ITB) <0,9 confirma o diagnóstico.

## ⚠️ Pitfalls

- **Trombolisar por suspeita de IAM sem excluir dissecção** diante de sinais de alarme (dor irradiada para dorso, assimetria de pulsos/PA, sopro de insuficiência aórtica nova) — é o erro mais grave e mais cobrável do tema, com potencial de tamponamento fatal.
- **Atribuir deterioração hemodinâmica pós-trombolítico a "falha de reperfusão" ou choque cardiogênico por IAM**, sem considerar a possibilidade de dissecção com tamponamento — sobretudo diante da tríade de Beck e pulso paradoxal.
- **Tratar dissecção tipo B como emergência cirúrgica de rotina** — o manejo inicial padrão é clínico (controle de FC/PA), reservando intervenção para complicação.
- **Confundir isquemia arterial aguda de membro com trombose venosa profunda** — a primeira cursa com membro pálido, frio, sem pulso e dor intensa de instalação súbita (os "6 Ps": pain, pallor, pulselessness, paresthesia, paralysis, poikilothermia); a segunda cursa com membro edemaciado, quente, hiperemiado.
- **Adiar imagem definitiva de aorta esperando D-dímero** em paciente com alta probabilidade pré-teste de dissecção — o D-dímero ajuda a afastar quando a suspeita é baixa, não deve atrasar angiotomografia quando a suspeita é alta.

## 🩺 Quadro clínico

- **Dissecção aórtica:** dor torácica ou dorsal súbita, intensa, descrita como "rasgando" ou "em facada", podendo migrar conforme a progressão do retalho; síncope, déficit neurológico focal (extensão para carótidas), isquemia mesentérica ou renal (extensão para ramos abdominais), assimetria de pulsos.
- **Aneurisma de aorta abdominal roto:** dor abdominal ou lombar súbita e intensa, massa pulsátil abdominal, hipotensão — tríade clássica (nem sempre completa).
- **Doença arterial periférica crônica:** claudicação intermitente, pele fria e atrófica, rarefação de pelos, pulsos distais reduzidos/ausentes; dor em repouso e úlceras isquêmicas nos estágios mais avançados.
- **Isquemia arterial aguda de membro:** os "6 Ps" (dor, palidez, ausência de pulso, parestesia, paralisia, poiquilotermia) de instalação súbita — emergência vascular com janela curta para salvamento do membro.

## 🔎 Diagnóstico

- **Dissecção aórtica:** angiotomografia de aorta (exame de escolha na maioria dos cenários); ecocardiograma transesofágico se instabilidade impedir transporte; radiografia de tórax pode mostrar alargamento de mediastino, mas não confirma nem afasta.
- **Aneurisma de aorta abdominal:** ultrassonografia (rastreio e diagnóstico inicial); angiotomografia para planejamento cirúrgico ou suspeita de ruptura.
- **Doença arterial periférica:** índice tornozelo-braquial (ITB); angiotomografia ou angiografia para planejamento de revascularização.
- **Isquemia arterial aguda:** diagnóstico clínico (exame vascular) com confirmação por angiotomografia/arteriografia, sem atrasar a revascularização diante de quadro típico grave.

## 💊 Tratamento

- **Dissecção tipo A:** cirurgia de emergência (substituição do segmento acometido); controle imediato de FC e PA (beta-bloqueador IV, ex.: esmolol, antes de vasodilatador, para evitar taquicardia reflexa que aumentaria o estresse de cisalhamento aórtico) enquanto se organiza a ida ao centro cirúrgico.
- **Dissecção tipo B não complicada:** manejo clínico — controle rigoroso de FC (alvo <60 bpm) e PA sistólica (alvo 100-120 mmHg), com beta-bloqueador seguido de vasodilatador se necessário.
- **Dissecção tipo B complicada** (isquemia de órgão-alvo, ruptura iminente, dor refratária, expansão): reparo endovascular (TEVAR) ou cirurgia aberta.
- **Tamponamento por dissecção tipo A:** correção cirúrgica de emergência é o tratamento definitivo; pericardiocentese pode ser usada como ponte em instabilidade extrema, mas com cautela (retirar volume mínimo necessário, já que a descompressão pode acelerar sangramento pelo aumento do gradiente de pressão).
- **Aneurisma de aorta abdominal:** acompanhamento com imagem seriada se assintomático e abaixo do limiar cirúrgico; reparo eletivo (endovascular ou aberto) acima do limiar de diâmetro ou com crescimento rápido; reparo de emergência se rotura.
- **Isquemia arterial aguda:** anticoagulação imediata com heparina e revascularização urgente (embolectomia, trombólise dirigida por cateter ou cirurgia, conforme causa e tempo de isquemia).

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus — apenas 1 questão real registrada** (EBSERH 2026 Q33, dificuldade MÉDIA), com uma vinheta desenhada especificamente para testar o mimetismo entre dissecção aórtica tipo A e IAM com supra inferior: paciente hipertenso mal controlado, dor torácica irradiada para o dorso, ECG com supra inferior levando à trombólise — e depois deterioração com hipotensão, confusão, turgência jugular, bulhas hipofonéticas e pulso paradoxal (tríade de Beck completa + pulso paradoxal), fechando o quadro de **tamponamento cardíaco por dissecção tipo A complicada**. Os distratores exploraram diagnósticos alternativos plausíveis para deterioração pós-trombolítico (choque cardiogênico por falha de reperfusão, ruptura de músculo papilar, embolia pulmonar, anafilaxia) — todos descartáveis pela combinação específica de sinais de tamponamento.

Mesmo com só 1 aparição neste banco específico, dissecção de aorta é **tema clássico e de alta letalidade em provas de residência médica em geral**, com potencial de aparecer em vinhetas de emergência/cardiologia — o reconhecimento do mimetismo com IAM e a contraindicação de trombolítico são pontos de corte frequentes entre acerto e erro.

## 📚 Referências essenciais

- Diretriz de doenças da aorta torácica — American College of Cardiology/American Heart Association (ACC/AHA).
- Diretriz de doenças da aorta — European Society of Cardiology (ESC).
- Diretriz de manejo de doença arterial periférica — ACC/AHA/Society for Vascular Surgery.
`;

export default content.trim();
