const crypto = require('crypto');

const GRAPH_API_VERSION = 'v20.0';

function verifySignature(rawBody, signatureHeader, appSecret) {
  if (!signatureHeader || !rawBody) return false;
  const expected = 'sha256=' + crypto.createHmac('sha256', appSecret).update(rawBody).digest('hex');
  const expectedBuf = Buffer.from(expected);
  const receivedBuf = Buffer.from(signatureHeader);
  if (expectedBuf.length !== receivedBuf.length) return false;
  return crypto.timingSafeEqual(expectedBuf, receivedBuf);
}

async function sendWhatsAppMessage({ accessToken, phoneNumberId, to, body }) {
  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${phoneNumberId}/messages`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body },
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`WhatsApp send failed (${res.status}): ${errText}`);
  }
  return res.json();
}

const FILLER_WORDS = /\b(gastei|paguei|comprei|gasto|de|do|da|no|na|em|com|reais|r\$)\b/gi;

function parseExpenseMessage(text) {
  const match = text.match(/(\d+(?:[.,]\d{1,2})?)/);
  if (!match) return null;

  const amount = parseFloat(match[1].replace(',', '.'));
  if (!amount || amount <= 0) return null;

  const withoutAmount = text.slice(0, match.index) + ' ' + text.slice(match.index + match[1].length);
  const description = withoutAmount.replace(FILLER_WORDS, ' ').replace(/\s+/g, ' ').trim();

  return { amount, description: description || text.trim() };
}

module.exports = { verifySignature, sendWhatsAppMessage, parseExpenseMessage };
