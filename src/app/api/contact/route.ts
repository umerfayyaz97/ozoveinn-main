import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, subject, message } =
      await req.json();

    console.log("Request body:", {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "rausama851@gmail.com",
      subject: `Contact form submission from ${firstName} ${lastName}`,
      text: `
                Name: ${firstName} ${lastName}
                Email: ${email}
                Phone: ${phone}
                Subject: ${subject}
                Message: ${message}
            `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
