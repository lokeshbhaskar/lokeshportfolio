import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    // const data = await resend.emails.send({
    //   from: "Lokesh Portfolio <lokeshbhaskar28@gmail.com>", // must be a verified sender in Resend
    //   to: email,
    //   subject,
    //   html: `<h2>Welcome to Lokesh's Portfolio 🚀</h2>
    //          <p>${message}</p>`,
    // });

    const data = await resend.emails.send({
      from: email,
      to: "lokeshbhaskar28@gmail.com",
      subject:subject,
      text:message,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
