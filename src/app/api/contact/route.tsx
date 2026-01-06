import React from "react";
import { Resend } from "resend";
import { ContactEmailTemplate } from "../../../components/emailTemplates/contactEmail";
import { rateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("Received form data:", { name, email, subject, message });

    const ip = req.headers.get("x-forwarded-for") || "0.0.0.0";
    const { allowed, error: rateLimitError } = await rateLimit(email, ip, "contact");

    if (!allowed) {
      return Response.json(
        { error: rateLimitError || "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["notgetin18@gmail.com"],
      subject: `New Portfolio Message: ${subject}`,
      react: (
        <ContactEmailTemplate
          name={name}
          email={email}
          subject={subject}
          message={message}
        />
      ) as React.ReactElement,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    // console.log("Email sent successfully:", data);

    return Response.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("API error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
