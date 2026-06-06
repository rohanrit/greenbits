import { getConsultationDb } from '@/lib/consultationDb';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      website,
      message,
      newsletterOptIn,
    } = req.body || {};

    const errors = [];

    if (!firstName || typeof firstName !== 'string' || !firstName.trim()) errors.push('firstName');
    if (!lastName || typeof lastName !== 'string' || !lastName.trim()) errors.push('lastName');
    if (!email || typeof email !== 'string' || !email.trim()) errors.push('email');
    if (!phone || typeof phone !== 'string' || !phone.trim()) errors.push('phone');
    if (!message || typeof message !== 'string' || !message.trim()) errors.push('message');

    if (errors.length) {
      return res.status(400).json({
        error: 'Missing or invalid fields',
        fields: errors,
      });
    }

    const db = getConsultationDb();

    const stmt = db.prepare(
      `INSERT INTO consultation_submissions
        (first_name, last_name, email, phone, website, message, newsletter_opt_in)
       VALUES
        (?, ?, ?, ?, ?, ?, ?)`
    );

    const info = stmt.run(
      firstName.trim(),
      lastName.trim(),
      email.trim(),
      phone.trim(),
      website ? website.trim() : null,
      message.trim(),
      newsletterOptIn ? 1 : 0
    );

    return res.status(200).json({
      ok: true,
      id: info.lastInsertRowid,
    });
  } catch (err) {
    console.error('[consultation-submit]', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

