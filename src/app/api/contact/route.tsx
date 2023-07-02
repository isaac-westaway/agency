import { NextRequest, NextResponse } from "next/server";

import { render } from "@react-email/components";

import { transporter, smtpEmail } from "@/src/app/components/contact/nodemailer";

import EmailComponent from "@/src/app/components/contact/email";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, business, email, message, service } = body;

  const emailHtml = render(
    <EmailComponent name={name} business={business} service={service} email={email} message={message} />
  );

  const options = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "New Contact Message",
    html: emailHtml,
  };

  try {
    // Send email using the transporter
    await transporter.sendMail({
      ...options
    });
    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Failed to send email:", error);
  }
  return new Response("OK");
}