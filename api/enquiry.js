// Vercel serverless function — forwards contact-form enquiries to the owner's WhatsApp.
// Uses CallMeBot's free WhatsApp API (https://www.callmebot.com/blog/free-api-whatsapp-messages/).
// Required env vars (Vercel → Project → Settings → Environment Variables):
//   CALLMEBOT_PHONE  — WhatsApp number that receives enquiries, with country code (e.g. 919363741301)
//   CALLMEBOT_APIKEY — API key CallMeBot sends to that number after activation

const LIMITS = { name: 80, phone: 15, email: 120, service: 80, message: 1500 };

const clean = (value, max) => String(value ?? '').replace(/\s+/g, ' ').trim().slice(0, max);

const parseBody = (req) => {
  if (req.body && typeof req.body === 'object') return req.body;
  try { return JSON.parse(req.body || '{}'); } catch { return {}; }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = parseBody(req);

  // Honeypot — real visitors never see or fill this field
  if (body.company) return res.status(200).json({ ok: true });

  const name = clean(body.name, LIMITS.name);
  const phone = clean(body.phone, LIMITS.phone).replace(/[^\d+]/g, '');
  const email = clean(body.email, LIMITS.email);
  const service = clean(body.service, LIMITS.service) || 'General Inquiry';
  const message = String(body.message ?? '').trim().slice(0, LIMITS.message);

  if (!name || !/^\+?\d{10,13}$/.test(phone) || !message) {
    return res.status(400).json({ ok: false, error: 'Please fill in your name, a valid phone number and a message.' });
  }

  const { CALLMEBOT_PHONE, CALLMEBOT_APIKEY } = process.env;
  if (!CALLMEBOT_PHONE || !CALLMEBOT_APIKEY) {
    return res.status(503).json({ ok: false, error: 'WhatsApp delivery is not configured' });
  }

  const digits = phone.replace(/\D/g, '');
  const replyNumber = digits.length === 10 ? `91${digits}` : digits;
  const receivedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });

  const text = [
    '*New enquiry — harikeerth.in*',
    '',
    `*Name:* ${name}`,
    `*Phone:* ${phone}`,
    `*Email:* ${email || '—'}`,
    `*Service:* ${service}`,
    `*Message:* ${message}`,
    '',
    `Reply on WhatsApp: https://wa.me/${replyNumber}`,
    `Received: ${receivedAt}`,
  ].join('\n');

  const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(CALLMEBOT_PHONE)}`
    + `&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(CALLMEBOT_APIKEY)}`;

  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
    const result = await response.text();
    // CallMeBot answers 200 with an HTML page either way; only its success wording means delivered.
    // Anything else fails so the visitor is offered the WhatsApp fallback instead of a lost lead.
    const delivered = /queued|message sent/i.test(result) && !/error|invalid|not activated/i.test(result);
    if (!response.ok || !delivered) {
      console.error('CallMeBot rejected the message:', response.status, result.slice(0, 300));
      return res.status(502).json({ ok: false, error: 'WhatsApp delivery failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('CallMeBot request failed:', err);
    return res.status(502).json({ ok: false, error: 'WhatsApp delivery failed' });
  }
}
