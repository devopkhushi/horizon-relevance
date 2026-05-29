import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = req.body || {};

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const {
      EMAIL_USER,
      EMAIL_PASS,
      EMAIL_TO,
    } = process.env;

    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      return res.status(500).json({ success: false, message: "Email service not configured" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mail = {
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: `New Contact Form Submission - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || ""}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mail);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to send message" });
  }
}

