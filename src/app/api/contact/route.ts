// app/api/contact/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // 例: youraddress@gmail.com
      pass: process.env.GMAIL_PASS, // Gmailアプリパスワード
    },
  });

  console.log("GMAIL_USER", process.env.GMAIL_USER);
  console.log("GMAIL_PASS", process.env.GMAIL_PASS);

  try {
    await transporter.sendMail({
      from: `"お問い合わせフォーム" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // 自分に通知したいメール
      subject: `📩 新しい問い合わせ from ${data.name}`,
      text: `
名前: ${data.name}
メール: ${data.email}
電話: ${data.phone || 'なし'}
メッセージ:
${data.message}
`,
    });

    return NextResponse.json({ message: 'メール送信成功！' }, { status: 200 });
  } catch (err) {
    console.error('メール送信エラー:', err);
    return NextResponse.json({ error: '送信に失敗しました' }, { status: 500 });
  }
}
