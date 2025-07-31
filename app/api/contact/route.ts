import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { fullName, email, phone, message } = await request.json();

if (!fullName || !email || !message) {
  return NextResponse.json({ error: "الرجاء ملء جميع الحقول المطلوبة." }, { status: 400 });
}


     const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "nutrsalma@gmail.com",           // Gmail address
      pass: "yfzmsvgvifumstml",              // App password (not Gmail password)
    },
    })

    const clinicHtml = `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #70b2af; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #70b2af; padding: 20px; text-align: center;">
            <h2 style="margin: 0; color: white;">📩 طلب جديد من نموذج التواصل</h2>
          </div>
          <div style="padding: 20px; direction: rtl; text-align: right;">
            <p><strong>الاسم:</strong> ${fullName}</p>
            <p><strong>البريد الإلكتروني:</strong> ${email}</p>
            <p><strong>رقم الهاتف:</strong> ${phone || "لم يتم الإدخال"}</p>
            <p><strong>الرسالة:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      </div>
    `

    const userHtml = `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #70b2af; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #70b2af; padding: 20px; text-align: center;">
            <h2 style="margin: 0; color: white;">🤝 شكرًا لتواصلك معنا</h2>
          </div>
          <div style="padding: 20px; direction: rtl; text-align: right;">
            <p><strong>الاسم:</strong> ${fullName}</p>
            <p>نشكر تواصلك مع <strong>عيادة سلمى الحبيشي للتغذية</strong>. تم استلام رسالتك بنجاح وسنقوم بالرد عليك في أقرب وقت ممكن.</p>
            
            <h3 style="margin-top: 20px;">📝 تفاصيل رسالتك:</h3>
            <p><strong>الاسم:</strong> ${fullName}</p>
            <p><strong>البريد الإلكتروني:</strong> ${email}</p>
            <p><strong>رقم الهاتف:</strong> ${phone || "لم يتم الإدخال"}</p>
            <p><strong>الرسالة:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #70b2af;" />

            <p style="text-align: center;">🌿 شكراً لاختياركم عيادتنا، نتمنى لكم دوام الصحة والعافية.</p>
            <p style="margin-top: 30px; text-align: center;">تحياتنا،<br><strong>فريق عيادة سلمى الحبيشي</strong></p>
          </div>
        </div>
      </div>
    `

    // Send to clinic
    await transporter.sendMail({
      from: `"عيادة سلمى الحبيشي" <nutrsalma@gmail.com>`,
      to: "nutrsalma@gmail.com",
      subject: `📬 نموذج تواصل جديد من ${fullName}`,
      html: clinicHtml,
    })

    // Send confirmation to user
    await transporter.sendMail({
      from: `"عيادة سلمى الحبيشي" <nutrsalma@gmail.com>`,
      to: email,
      subject: "📩 تم استلام رسالتك - عيادة سلمى الحبيشي",
      html: userHtml,
    })

    return NextResponse.json({ message: "تم إرسال الرسائل بنجاح." }, { status: 200 })
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("EMAIL ERROR:", error.message); // Log error message
  } else {
    console.error("EMAIL ERROR:", error); // Handle if error is not an instance of Error
  }
  return NextResponse.json({ error: "حدث خطأ أثناء إرسال الرسائل" }, { status: 500 });
}
}