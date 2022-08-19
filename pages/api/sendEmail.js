import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.NEXT_PUBLIC_KEY_SENDGRID);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const messages = `
  Name:${body.name}\r\n
  Email:${body.email}\r\n
  Message:${body.message}\r\n
  `;

  const data = {
    to: "junior.wembopa@gmail.com",
    from: "junior.wembopa@gmail.com",
    templateId: "d-70aae1d37e27435b8a9d8c03e2451021",
    dynamic_template_data: {
      subject: "Nouveau message Analytics Clever",
      message: messages.replace(/\r\n/g),
      html: messages.replace(/\r\n/g, "<br>"),
    },
  };
  sgMail.send(data);
  res.status(200).json({ message: "ok" });
}
