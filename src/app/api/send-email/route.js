import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body

    const {
      orderNumber,
      date,
      time,
      pickup,
      destination,
      passengers,
      contact,
      totalPrice,
      vehicleDetails,
    } = body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail password or app password
      },
    });

    const mailOptions = {
      from: `"Your Company" <${process.env.EMAIL_USER}>`,
      to: "eternitywatches212@gmail.com", // Your receiving email
      subject: `New Booking: ${orderNumber}`,
      html: `
        <h1>Booking Confirmation</h1>
        <p><strong>Order Number:</strong> ${orderNumber}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Pickup Location:</strong> ${pickup}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
        <p><strong>Vehicle:</strong> ${vehicleDetails.name}</p>
        <p><strong>Total Price:</strong> $${totalPrice}</p>
        <p><strong>Contact Name:</strong> ${contact.name}</p>
        <p><strong>Contact Email:</strong> ${contact.email}</p>
        <p><strong>Contact Phone:</strong> ${contact.phone}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
