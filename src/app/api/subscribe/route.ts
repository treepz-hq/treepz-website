
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  // Destructure the form data from the request body
  const {
    email,
  } = await req.json();

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail", // Replace with your email service
    auth: {
      user: "info@treepz.com", // Replace with your email
      pass: "wueetbfvsyyweupd", // Replace with your email password
    },
  });

  // Set up email data
  const mailOptions = {
    from: ` <${email}>`, // Sender address
    to: "marketing@treepz.com", // List of receivers
    subject: "New Subscriber to Mailing List from Website", // Subject line
    html: `
        <h2>New Addition to the mailing list</h2>
        <p><b>Email:</b> ${email}</p>
    `, // Plain text body
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
