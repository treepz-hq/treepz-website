import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  // Destructure the form data from the request body
  const {
    full_name,
    infotonote,
    startDate,
    endDate,
    location,
    type_of_transportation,
    email,
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
        <h2>Event Request Details</h2>
        <p><b>Full Name:</b> ${full_name}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Trip Start Date:</b> ${startDate}</p>
<p><b>Trip End Date:</b> ${endDate}</p>

        <p><b>Type of Vehicle:</b> ${type_of_transportation}</p>
        <p><b>Info to Note:</b> ${infotonote}</p>

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
