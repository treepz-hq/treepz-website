import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { format } from "date-fns";
export async function POST(req: NextRequest) {
  // Destructure the form data from the request body
  const {
    first_name,
    range,
    estimated_passengers,
    type_of_transportation,
    describe,
    how_often,
    email,
    company_name,
    last_name,
    country_code,
    phone_number,
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
    to: "info@treepz.com", // List of receivers
    subject: "New Message from Contact Form", // Subject line
    html: `
        <h2>Transportation Request Details</h2>
        <p><b>First Name:</b> ${first_name}</p>
        <p><b>Last Name:</b> ${last_name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Range:</b> From: ${format(range.from, "LLL dd, y")} To: ${format(range.to, "LLL dd, y")}</p>
        <p><b>Estimated Passengers:</b> ${estimated_passengers}</p>
        <p><b>Type of Transportation:</b> ${type_of_transportation}</p>
        <p><b>Description:</b> ${describe}</p>

        <p><b>Frequency:</b> ${how_often}</p>
        <p><b>Company Name:</b> ${company_name}</p>
        <p><b>Phone Number:</b> ${phone_number}</p>
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
