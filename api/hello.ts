import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  return res.json({
    message: `Hello ${name}!`,
  })
}
// hello.ts

export default async function handler(req, res) {
  // إضافة رؤوس CORS للسماح بالاتصال من أي مصدر
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // تحقق من طريقة الطلب
  if (req.method === 'OPTIONS') {
    // التعامل مع طلبات OPTIONS الخاصة بـ CORS
    res.status(200).end();
    return;
  }

  // بقية المنطق هنا
  res.status(200).json({ message: "تم الاتصال بنجاح" });
}

