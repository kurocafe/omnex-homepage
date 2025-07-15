// app/api/contact/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  // 通知用
  const infoTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.INFO_USER, // 例: youraddress@gmail.com
      pass: process.env.INFO_PASS, // Gmailアプリパスワード
    },
  });
  
  // 通知用
  const replyTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REPLY_USER, // 例: youraddress@gmail.com
      pass: process.env.REPLY_PASS, // Gmailアプリパスワード
    },
  });
  console.log("INFO_USER", process.env.INFO_USER);
  console.log("INFO_PASS", process.env.INFO_PASS);
  console.log("REPLY_USER", process.env.REPLY_USER);
  console.log("REPLY_PASS", process.env.REPLY_PASS);

  try {
    // 通知
    await infoTransporter.sendMail({
      from: `"Contact Form" <${process.env.INFO_USER}>`,
      to: process.env.TEST_USER, // 自分宛に通知（テストユーザ）
      cc: "yoshiya@omnexjp.com",
      subject: `📩 New Inquiry from ${data.name}`,
      text: `
[Contact Inquiry]

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Company Name: ${data.company || 'N/A'}
Type of Business: ${data.business || 'Not selected'}
Country of Origin: ${data.country || 'Not provided'}
Industry: ${data.industry || 'Not provided'}
Product Category: ${data.category || 'Not provided'}
Experience in Japanese Market: ${data.experience || 'Not selected'}
Target Timeframe: ${data.timeframe || 'Not provided'}

Message:
${data.message}

------------------------
Submission Date: ${new Date().toLocaleString('en-US')}
`,
});

    // お客様への自動返信
    await replyTransporter.sendMail({
      from: `"Onmex JP Support" <${process.env.REPLY_USER}>`,
      to: data.email,
      subject: 'Thank you for your inquiry',
      text: `
Dear ${data.name},

Thank you for contacting us.
We have received your inquiry and will review the details shortly.
One of our representatives will get back to you as soon as possible.

---------------------------------
Omnex
takayoshi@omnexjp.com
`,
    });

    return NextResponse.json({ message: 'メール送信成功！' }, { status: 200 });
  } catch (err) {
    console.error('メール送信エラー:', err);
    return NextResponse.json({ error: '送信に失敗しました' }, { status: 500 });
  }
}
