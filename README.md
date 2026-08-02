# Gastos do mês

Interface para lançar gastos mensais (pela web ou pelo WhatsApp), categorizados automaticamente por palavras-chave.

## Estrutura

- `public/` — frontend (HTML/CSS/JS estático, sem build).
- `shared/categorize.js` — lógica de categorização, usada tanto pelo frontend quanto pelo backend.
- `server/` — backend Node/Express: API REST de despesas + webhook do WhatsApp Cloud API.

## Rodando localmente

```bash
cd server
npm install
cp .env.example .env
npm start
```

Acesse `http://localhost:3000`. Os dados ficam em `server/data/expenses.json`.

Sem preencher as variáveis do WhatsApp no `.env`, a interface web funciona normalmente — só o webhook fica inativo.

## Integrando com o WhatsApp (Meta Cloud API)

1. **Crie um app no Meta for Developers**: acesse https://developers.facebook.com/apps, crie um app do tipo "Business" e adicione o produto **WhatsApp**.
2. **Pegue as credenciais de teste**: em *WhatsApp > API Setup* você já tem um número de teste, um `Temporary access token` e o `Phone number ID`. Copie-os para `WHATSAPP_ACCESS_TOKEN` e `WHATSAPP_PHONE_NUMBER_ID` no `.env`.
   - O token temporário expira em 24h; para algo permanente, gere um *System User token* em *Business Settings*.
3. **Pegue o App Secret**: em *App settings > Basic*, copie o `App secret` para `WHATSAPP_APP_SECRET` (usado para validar que os webhooks realmente vêm da Meta).
4. **Defina um verify token**: escolha qualquer string secreta e coloque em `WHATSAPP_VERIFY_TOKEN` no `.env`.
5. **Exponha seu servidor publicamente** (a Meta exige HTTPS público para o webhook):
   - Em desenvolvimento, use `ngrok http 3000` (ou similar) e copie a URL `https://...ngrok...`.
   - Em produção, use a URL do seu deploy.
6. **Configure o webhook**: em *WhatsApp > Configuration*, defina:
   - Callback URL: `https://SEU_DOMINIO/webhook`
   - Verify token: o mesmo valor de `WHATSAPP_VERIFY_TOKEN`
   - Clique em "Verify and Save", depois inscreva-se (Subscribe) no campo `messages`.
7. **Restrinja quem pode lançar gastos**: adicione seu número (formato `5521999999999`, sem `+`) em `WHATSAPP_ALLOWED_SENDERS` no `.env`. Sem isso, qualquer pessoa que enviar mensagem para o número da Meta consegue criar gastos.
8. **Reinicie o servidor** (`npm start`) para carregar o `.env`.

### Como lançar gastos pelo WhatsApp

Envie uma mensagem de texto para o número configurado, no formato `valor descrição`:

```
50 mercado
32,90 uber
120 farmácia
```

O bot responde confirmando o valor, a descrição e a categoria detectada automaticamente. Você ainda pode corrigir a categoria depois pela interface web.

### Observações

- No modo de teste (número de teste da Meta), só números previamente adicionados como "testadores" em *API Setup* conseguem enviar mensagens ao bot.
- Para atender qualquer número sem essa restrição, é preciso submeter o app para revisão da Meta e usar um número de telefone comercial verificado.
