import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, company, email, phone, message } = body;

    if (!name || !company || !email || !validateEmail(email)) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const salesEmail = process.env.SALES_EMAIL || 'sales@dthree.co';

    // Email to sales team
    await transporter.sendMail({
      from: `"D3 Website" <${process.env.SMTP_USER}>`,
      to: salesEmail,
      subject: `New Lead: ${name} — ${company}`,
      html: `
        <h2 style="color:#002147;font-family:Arial,sans-serif;">New Lead from D3 Website</h2>
        <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse;width:100%">
          <tr><td style="padding:8px 0;color:#8898AA;font-weight:600;width:120px">Name</td><td style="padding:8px 0;color:#3D3D5C">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#8898AA;font-weight:600">Company</td><td style="padding:8px 0;color:#3D3D5C">${company}</td></tr>
          <tr><td style="padding:8px 0;color:#8898AA;font-weight:600">Email</td><td style="padding:8px 0;color:#3D3D5C"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#8898AA;font-weight:600">Phone</td><td style="padding:8px 0;color:#3D3D5C">${phone || 'Not provided'}</td></tr>
          <tr><td style="padding:8px 0;color:#8898AA;font-weight:600;vertical-align:top">Message</td><td style="padding:8px 0;color:#3D3D5C">${message || 'No message provided'}</td></tr>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#8898AA;font-family:Arial,sans-serif">Submitted from D3 website at ${new Date().toISOString()}</p>
      `,
    });

    // Auto-response to lead
    await transporter.sendMail({
      from: `"D3 — Digital Data Dimensions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting D3',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#003580;padding:32px;border-radius:8px 8px 0 0">
            <h1 style="color:#fff;margin:0;font-size:24px">D3 <span style="color:#FF6B2B">Digital Data Dimensions</span></h1>
          </div>
          <div style="background:#F4F6FB;padding:32px;border-radius:0 0 8px 8px">
            <p style="color:#3D3D5C;font-size:16px">Dear ${name},</p>
            <p style="color:#3D3D5C;font-size:15px;line-height:1.7">Thank you for reaching out to D3. We've received your enquiry and a member of our team will be in touch within 24 hours.</p>
            <p style="color:#3D3D5C;font-size:15px;line-height:1.7">In the meantime, you can explore our solutions at <a href="https://dthree.co" style="color:#FF6B2B">dthree.co</a>.</p>
            <div style="margin-top:32px;padding-top:24px;border-top:1px solid #E2E8F0">
              <p style="color:#8898AA;font-size:13px;margin:0">D3 — Digital Data Dimensions</p>
              <p style="color:#8898AA;font-size:13px;margin:4px 0">Manama, Kingdom of Bahrain</p>
              <p style="color:#8898AA;font-size:13px;margin:4px 0"><a href="tel:+97317000000" style="color:#8898AA">+973 1700 0000</a> · <a href="mailto:info@dthree.co" style="color:#8898AA">info@dthree.co</a></p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
