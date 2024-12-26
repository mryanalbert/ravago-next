import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .transform((val) => val.trim()),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .transform((val) => val.trim()),
  phone: z
    .string()
    .min(1, "Contact number is required")
    .transform((val) => val.trim()),
  message: z
    .string()
    .min(1, "Message cannot be empty")
    .transform((val) => val.trim()),
});

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const result = contactFormSchema.safeParse({ name, email, phone, message });

    if (!result.success) {
      return NextResponse.json(
        { errors: result.error.errors },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.gmail.com",
      port: 587,
      secure: false,
    });

    const mailToCompanyOptions = {
      from: `"${name}" <no-reply@ravago.com.ph>`,
      to: "ryan.masungsong@ravago.com.ph",
      subject: "New Costumer Message",
      html: `<p>You have a new message from ${name} (${email}, ${phone})</p><p>${message}</p>`,
    };

    const mailToSender = {
      from: `"Ravago" <no-reply@ravago.com.ph>`,
      to: email,
      subject: "Email received by Ravago",
      html: `<p>You have messaged Ravago</p>`,
    };

    // Send both emails asynchronously in parallel
    await Promise.all([
      transporter.sendMail(mailToCompanyOptions),
      transporter.sendMail(mailToSender),
    ]);

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
}
