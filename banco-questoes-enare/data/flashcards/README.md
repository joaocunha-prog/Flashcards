# Flashcards Anki — corte 80/20 do ENARE/EBSERH

47 arquivos `.txt` prontos para importar no [Anki](https://apps.ankiweb.net/): um por assunto do
corte 80/20 (46 arquivos, mesmo ranking de `../resumos/`) + `escalas-e-tabelas.txt`, com as escalas e
tabelas cobradas no corpus (Forrest, Child-Pugh, MELD, King's College, HAS-BLED, CHA₂DS₂-VASc,
TI-RADS, Bethesda, Gleason, CURB-65, FIB-4, NAFLD Fibrosis Score, NYHA, Glasgow).

Cada arquivo é gerado a partir do resumo correspondente em `../resumos/<slug>.ts` (mesma fonte de
verdade médica, já validada) e cita banca (ENARE/EBSERH), ano e número real da questão sempre que o
card vem de uma vinheta do corpus — sem dado inventado.

## Formato

Todos os arquivos usam o notetype **Cloze** do Anki, texto separado por tabulação, com o cabeçalho:

```
#separator:tab
#html:true
#notetype:Cloze
#deck:ENARE-EBSERH::80-20::<Tema>::<Assunto>
```

Cada linha de dado tem exatamente 3 campos separados por TAB: `Text`, `Extra`, `Tags`.

- **Text** — o card cloze (`{{c1::...}}`, podendo ter `{{c2::...}}` etc. na mesma linha). HTML é
  permitido (negrito, itálico, listas).
- **Extra** — mostrado só depois de revelar a resposta: explicação, pitfall, mnemônico (marcado com
  🔤) ou uma imagem (`<img src="arquivo.svg">`, ver `media/`).
- **Tags** — tokens hierárquicos (`Assunto::<slug>`, `Banca::ENARE`/`Banca::EBSERH`, `Ano::<ano>`,
  `Dificuldade::FACIL|MEDIA|DIFICIL`, `Conceito` para cards sem questão associada, `Mnemonico` para
  cards de mnemônico).

## Como importar no Anki

1. Abra o Anki (desktop) e, se algum arquivo referenciar imagem (`<img src="...">`), copie **antes**
   todo o conteúdo de `media/` para a pasta de mídia da sua coleção:
   - Linux: `~/.local/share/Anki2/<Perfil>/collection.media/`
   - macOS: `~/Library/Application Support/Anki2/<Perfil>/collection.media/`
   - Windows: `%APPDATA%\Anki2\<Perfil>\collection.media\`

   (Import de texto no Anki **não** copia mídia automaticamente — só o `.apkg` faz isso.)
2. `Arquivo → Importar` e selecione um `.txt` por vez (ou selecione vários de uma vez, se sua versão
   do Anki permitir múltiplos arquivos). O Anki lê o cabeçalho e já pré-seleciona o notetype **Cloze**
   e o deck indicado — confirme e importe.
3. Repita para os 47 arquivos. Como cada um declara seu próprio `#deck:`, os cards caem organizados
   em subdecks de `ENARE-EBSERH::80-20::...`, um por tema/assunto (e um deck à parte para
   `Escalas e Tabelas`).
4. Use as tags (`Banca::`, `Ano::`, `Dificuldade::`, `Mnemonico`) para filtrar o estudo — ex. revisar
   só os cards `Mnemonico`, ou só os de `Dificuldade::DIFICIL`.

Se sua versão do Anki for antiga e não reconhecer as diretivas `#notetype:`/`#deck:` no cabeçalho,
selecione manualmente o notetype "Cloze" e o deck de destino na tela de importação — o restante do
arquivo (3 colunas por linha) continua funcionando normalmente.

## Densidade e mnemônicos

O número de cards por assunto é proporcional ao número de questões do assunto no corpus (assuntos
como `hiv-aids`, com 11 questões, têm bem mais cards que assuntos com só 2 questões). Todo arquivo tem
pelo menos 1 card de mnemônico — alguns usam mnemônicos já consagrados na literatura médica (ex.:
CHA₂DS₂-VASc, CURB-65, que já são siglas mnemônicas por natureza), outros são recursos de memorização
criados para este material e claramente rotulados como tal (nunca apresentados como "oficiais").

## Imagens

Poucas, usadas só onde um diagrama genuinamente ajuda mais que texto/tabela (algoritmos de decisão,
fluxogramas curtos). Ficam em `media/`, referenciadas via `<img src="nome.svg">` no campo Extra do
card correspondente. Nenhuma é uma imagem médica "realista" (ECG, radiografia, histologia) — são
diagramas esquemáticos simples, para evitar risco de representar algo tecnicamente incorreto.
