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
      from: `"お問い合わせフォーム" <${process.env.INFO_USER}>`,
      to: process.env.TEST_USER, // 自分宛に通知（テストユーザ）
      cc: "yoshiya@omnexjp.com",
      subject: `📩 新しい問い合わせ from ${data.name}`,
      text: `
名前: ${data.name}
メール: ${data.email}
電話: ${data.phone || 'なし'}
メッセージ:
${data.message}
`,
    });

    // お客様への自動返信
    await replyTransporter.sendMail({
      from: `"Onmex JP Support" <${process.env.REPLY_USER}>`,
      to: data.email,
      subject: 'お問い合わせありがとうございます',
      text: `
${data.name} 様

この度はお問い合わせいただきありがとうございます。
内容を確認の上、担当者よりご連絡いたします。

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
