require('dotenv').config();

const express = require('express');
const path = require('path');
const { randomUUID } = require('crypto');

const { loadExpenses, saveExpenses } = require('./store');
const { verifySignature, sendWhatsAppMessage, parseExpenseMessage } = require('./whatsapp');
const { detectCategory, CATEGORY_NAMES } = require('../shared/categorize');

const PORT = process.env.PORT || 3000;
const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const APP_SECRET = process.env.WHATSAPP_APP_SECRET;
const ALLOWED_SENDERS = (process.env.WHATSAPP_ALLOWED_SENDERS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const app = express();

app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/shared', express.static(path.join(__dirname, '..', 'shared')));

// ---- Expenses API ----

app.get('/api/expenses', (req, res) => {
  res.json(loadExpenses());
});

app.post('/api/expenses', (req, res) => {
  const { description, amount, date, category } = req.body || {};
  const parsedAmount = Number(amount);

  if (!description || !parsedAmount || parsedAmount <= 0 || !date) {
    return res.status(400).json({ error: 'invalid payload' });
  }

  const expense = {
    id: randomUUID(),
    description: String(description).trim(),
    amount: parsedAmount,
    date,
    category: category && category !== 'auto' && CATEGORY_NAMES.includes(category)
      ? category
      : detectCategory(description),
    source: 'web',
  };

  const expenses = loadExpenses();
  expenses.push(expense);
  saveExpenses(expenses);

  res.status(201).json(expense);
});

app.patch('/api/expenses/:id', (req, res) => {
  const { category } = req.body || {};
  if (!category || !CATEGORY_NAMES.includes(category)) {
    return res.status(400).json({ error: 'invalid category' });
  }

  const expenses = loadExpenses();
  const expense = expenses.find((exp) => exp.id === req.params.id);
  if (!expense) return res.status(404).json({ error: 'not found' });

  expense.category = category;
  saveExpenses(expenses);

  res.json(expense);
});

app.delete('/api/expenses/:id', (req, res) => {
  const expenses = loadExpenses();
  const next = expenses.filter((exp) => exp.id !== req.params.id);
  saveExpenses(next);
  res.status(204).end();
});

// ---- WhatsApp Cloud API webhook ----

app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token && token === VERIFY_TOKEN) {
    return res.status(200).send(challenge);
  }
  res.sendStatus(403);
});

app.post('/webhook', (req, res) => {
  // Meta expects a fast 2xx ack; process the message after responding.
  res.sendStatus(200);

  if (APP_SECRET) {
    const signature = req.get('X-Hub-Signature-256');
    if (!verifySignature(req.rawBody, signature, APP_SECRET)) {
      console.warn('Webhook signature verification failed');
      return;
    }
  }

  handleIncomingMessage(req.body).catch((err) => {
    console.error('Error handling WhatsApp webhook payload', err);
  });
});

async function handleIncomingMessage(body) {
  const message = body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
  if (!message || message.type !== 'text') return;

  const from = message.from;

  if (ALLOWED_SENDERS.length && !ALLOWED_SENDERS.includes(from)) {
    console.warn(`Ignoring WhatsApp message from unauthorized sender: ${from}`);
    return;
  }

  const parsed = parseExpenseMessage(message.text.body);

  if (!parsed) {
    await replyTo(from, 'Não entendi o valor. Envie algo como: "50 mercado" ou "32,90 uber".');
    return;
  }

  const category = detectCategory(parsed.description);
  const expense = {
    id: randomUUID(),
    description: parsed.description || 'Gasto via WhatsApp',
    amount: parsed.amount,
    date: new Date().toISOString().slice(0, 10),
    category,
    source: 'whatsapp',
  };

  const expenses = loadExpenses();
  expenses.push(expense);
  saveExpenses(expenses);

  await replyTo(
    from,
    `✅ Registrado: ${expense.description} - R$ ${expense.amount.toFixed(2)} (${category})`
  );
}

async function replyTo(to, body) {
  if (!ACCESS_TOKEN || !PHONE_NUMBER_ID) {
    console.warn('WhatsApp credentials not configured; skipping reply');
    return;
  }
  try {
    await sendWhatsAppMessage({ accessToken: ACCESS_TOKEN, phoneNumberId: PHONE_NUMBER_ID, to, body });
  } catch (err) {
    console.error(err);
  }
}

app.listen(PORT, () => {
  console.log(`Monthly expenses server running on http://localhost:${PORT}`);
});
