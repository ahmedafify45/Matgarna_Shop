import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO!],
      subject: `New Message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return NextResponse.json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Try again!" },
      { status: 500 }
    );
  }
}
