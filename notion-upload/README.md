# notion-upload

Sobe resumos em Markdown para o Notion **com as imagens**. Colar o `.md` no Notion só traz o texto,
porque os caminhos locais (`figuras/fig1.png`) não existem para o Notion. Este script envia cada
imagem pela API de upload de arquivos do Notion e a coloca como bloco de imagem nativo, no ponto
certo do texto, com a legenda do markdown como legenda da figura.

## Configuração (uma vez só)

1. **Crie a integração.** Abra <https://www.notion.so/profile/integrations> → *New integration* →
   tipo *Internal*, escolha o workspace. Em *Capabilities*, deixe marcados *Read*, *Update* e
   *Insert content*. Copie o *Internal Integration Secret* (começa com `ntn_`).
2. **Dê acesso à página.** No Notion, abra a página onde os resumos vão ficar (por exemplo,
   "Resumos") → `•••` no canto superior direito → *Connections* → adicione a sua integração.
   As subpáginas herdam o acesso.
3. **Instale e configure:**

   ```bash
   cd notion-upload
   npm install
   cp .env.example .env
   ```

   No `.env`, cole o token em `NOTION_TOKEN` e, se quiser um destino padrão, o link da página em
   `NOTION_PARENT`.

Requer Node 18 ou mais recente.

## Uso

```bash
# um resumo, criado como subpágina da página padrão do .env
node upload.mjs ~/Resumos/insuficiencia-cardiaca.md

# escolhendo a página de destino (cole o link copiado do Notion)
node upload.mjs ~/Resumos/ic.md --parent "https://www.notion.so/Resumos-1a2b3c4d5e6f40718293a4b5c6d7e8f9"

# como linha de um banco de dados do Notion
node upload.mjs ~/Resumos/ic.md --database "https://www.notion.so/1a2b3c4d5e6f40718293a4b5c6d7e8f9"

# anexando também o PDF no topo da página
node upload.mjs ~/Resumos/ic.md --pdf ~/Resumos/ic.pdf

# uma pasta inteira: cada .md vira uma página
node upload.mjs ~/Resumos/cardiologia/

# conferir o que seria enviado, sem tocar no Notion
node upload.mjs ~/Resumos/ic.md --dry-run
```

O título da página é o primeiro `# Título` do arquivo (que sai do corpo para não aparecer
duplicado); sem ele, o nome do arquivo. `--title "..."` sobrescreve.

## Como referenciar as imagens no .md

Os caminhos são relativos à pasta do `.md`. Todos estes formatos funcionam:

```markdown
![Figura 1 — Cascata da IC](figuras/fig1.png)
![Figura 2](<figuras/minha figura.png>)
<img src="figuras/fig3.png" alt="Figura 3">
![[fig4.png]]                      ← estilo Obsidian
![ECG](https://exemplo.com/ecg.png) ← imagem da web: entra como link externo
```

Se o caminho não existir, o script procura um arquivo com o mesmo nome nas subpastas do `.md`.
Imagem que não for encontrada vira o aviso *[imagem não encontrada: …]* na página e no terminal,
sem interromper o envio.

A legenda (o texto entre `[ ]`) vira a legenda da figura no Notion. Formatos aceitos: PNG, JPG,
GIF, WEBP, SVG, HEIC, TIFF — até 20 MB por arquivo.

## O que é convertido

Títulos, negrito/itálico/código/links, listas (com qualquer profundidade), checklists, tabelas,
citações, blocos de código, equações `$$…$$` e linhas horizontais. Avisos no estilo GitHub viram
callouts do Notion:

```markdown
> [!WARNING]
> Não iniciar betabloqueador na IC descompensada.
```

`NOTE` 📝, `TIP` 💡, `IMPORTANT` ❗, `WARNING` ⚠️, `CAUTION` 🛑, `PEARL` 💎, `PITFALL` 🚩.

## Limitações

- Células de tabela no Notion só aceitam texto: uma imagem dentro de tabela é colocada logo abaixo
  da tabela.
- Rodar de novo cria outra página; o script não atualiza uma página existente.
- Arquivos acima de 20 MB precisam ser reduzidos antes.

## Problemas comuns

| Mensagem | Causa |
| --- | --- |
| `404 … Could not find page` | A página não foi conectada à integração (passo 2). |
| `401 … API token is invalid` | Token errado ou revogado no `.env`. |
| `Defina NOTION_TOKEN` | O `.env` não existe nesta pasta ou está sem o token. |
