import { Resend } from "resend";
import { BlogSubscriptionEmail } from "../../../components/emailTemplates/blogSubscriptionEmail";
import { checkAndAddSubscription, rateLimitByEmail } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY_BLOG_SUBSCRIPTION!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    // Basic validation
    if (!email) {
      return Response.json(
        { error: "Email fields are required" },
        { status: 400 }
      );
    }

    console.log("Received form data from blog subscription:", { email });

    const { subscribed, message } = await checkAndAddSubscription(email);
    if (subscribed) {
      return Response.json(
        { error: message },
        { status: 409 } // Conflict status for duplicates
      );
    }

    const { allowed, remaining } = await rateLimitByEmail(email);

    console.log("remaining", remaining);

    if (!allowed) {
      return Response.json(
        {
          error: "Too many attempts! Please wait 2 hour before trying again.",
        },
        { status: 429 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["notgetin18@gmail.com"],
      subject: `Blog Subscribtion`,
      react: BlogSubscriptionEmail({
        subscriberEmail: email,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);
    return Response.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("API error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
