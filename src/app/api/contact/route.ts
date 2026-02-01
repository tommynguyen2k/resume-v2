import { NextResponse } from 'next/server';

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

type ContactBody = {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildHtmlEmail(body: ContactBody): string {
  const { name, email, company, subject, message } = body;
  const companyLine = company
    ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>`
    : '';
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: sans-serif; line-height: 1.6; color: #333;">
  <h2>Connect / Job invite from portfolio</h2>
  <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
  <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
  ${companyLine}
  <hr style="border: none; border-top: 1px solid #eee; margin: 1.5em 0;">
  <h3>Message</h3>
  <pre style="white-space: pre-wrap; background: #f5f5f5; padding: 1em; border-radius: 6px;">${escapeHtml(message)}</pre>
</body>
</html>
  `.trim();
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? 'noreply@example.com';
  const senderName = process.env.BREVO_SENDER_NAME ?? 'Portfolio Contact';
  const recipientEmail =
    process.env.BREVO_CONTACT_RECIPIENT ?? process.env.BREVO_SENDER_EMAIL ?? 'truongnguyen1582000@gmail.com';

  if (!apiKey) {
    console.error('BREVO_API_KEY is not set');
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 503 }
    );
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = body;
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: 'Name, email, subject, and message are required.' },
      { status: 400 }
    );
  }

  const htmlContent = buildHtmlEmail(body);

  try {
    const res = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email: recipientEmail, name: 'Tommy Nguyen' }],
        replyTo: { email: email.trim(), name: name.trim() },
        subject: `[Portfolio] ${subject.trim()}`,
        htmlContent,
        textContent: [
          `From: ${name} <${email}>`,
          body.company?.trim() ? `Company: ${body.company.trim()}` : null,
          `Subject: ${subject}`,
          '',
          message,
        ]
          .filter(Boolean)
          .join('\n'),
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error('Brevo API error:', res.status, err);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json(
      { error: 'Network error. Please try again later.' },
      { status: 502 }
    );
  }
}
