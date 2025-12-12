import { Resend } from "resend";
import { ContactEmailTemplate } from "../../../components/emailTemplates/contactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request, res: Response) {
  console.log("process.env.RESEND_API_KEY", process.env.RESEND_API_KEY);

  const { name, email, subject, message } = await req.json();

  if(!name || !email || !subject || !message){
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  console.log("resp", name, email, subject, message )


  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["notgetin18@gmail.com"],
      subject:  subject,
      react: ContactEmailTemplate({
        name: name,
        email: email,
        subject: subject,
        message: subject,
      }),
    });

    if (error) {
      console.log("error 39", error)
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
