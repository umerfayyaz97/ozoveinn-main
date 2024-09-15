import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      orderNumber,
      date,
      time, // Added time here
      pickup,
      destination,
      vehicleName,
      passengers,
      distanceToEnd,
      additionalOptions,
      hourlyBookingCount,
      additionalVehicleCount,
      totalPrice,
      splitPaymentDetails,
      contact,
      noteToDriver,
      occasion,
    } = body;

    // Log request body for debugging
    console.log("Request Body:", body);

    // Validate required fields
    if (!orderNumber || !totalPrice || !vehicleName || !contact) {
      return NextResponse.json(
        {
          error:
            "Missing required fields. Please check orderNumber, totalPrice, vehicleName, and contact.",
        },
        { status: 400 }
      );
    }

    if (
      typeof totalPrice !== "number" ||
      isNaN(totalPrice) ||
      totalPrice <= 0
    ) {
      return NextResponse.json(
        { error: "Invalid totalPrice. It must be a positive number." },
        { status: 400 }
      );
    }

    // Ensure the contact object contains valid data
    if (!contact.name || !contact.email || !contact.phone) {
      return NextResponse.json(
        {
          error:
            "Contact information is incomplete. Please provide name, email, and phone.",
        },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin") || "http://localhost:3000";

    // Log the creation of the Stripe session for debugging
    console.log(`Creating Stripe Checkout Session for order #${orderNumber}`);

    // Create the Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Booking Order #${orderNumber}`,
            },
            unit_amount: Math.round(totalPrice * 100), // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      metadata: {
        orderNumber,
        date: date || "N/A",
        time: time || "N/A", // Added time here
        pickup: pickup || "N/A",
        destination: destination || "N/A",
        vehicleName,
        passengers: passengers?.toString() || "N/A",
        distanceToEnd: distanceToEnd?.toString() || "N/A",
        additionalOptions: additionalOptions?.length
          ? additionalOptions.join(", ")
          : "None",
        hourlyBookingCount: hourlyBookingCount?.toString() || "N/A",
        additionalVehicleCount: additionalVehicleCount?.toString() || "N/A",
        totalPrice: totalPrice.toString(),
        splitPaymentDetails: splitPaymentDetails
          ? JSON.stringify(splitPaymentDetails)
          : "N/A",
        contactName: contact.name,
        contactEmail: contact.email,
        contactPhone: contact.phone,
        noteToDriver: noteToDriver || "None",
        occasion: occasion || "None",
      },
    });

    // Log success of session creation
    console.log("Stripe Checkout Session created successfully:", session.id);

    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (err) {
    // Log error details
    console.error("Error creating Stripe Checkout Session:", err.message);

    // Return error response with detailed message
    return NextResponse.json(
      { error: "Server Error", details: err.message },
      { status: 500 }
    );
  }
}
