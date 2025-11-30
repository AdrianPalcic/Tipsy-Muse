import Stripe from "stripe";
import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";
import { createClient } from "@sanity/client";
import { Session } from "inspector/promises";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-10-29.clover",
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return new Response(`Webhook error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const workshopId = session.metadata?.workshopId;
    if (!workshopId) return NextResponse.json({ ok: true });
    const tickets = Number(session.metadata?.tickets || 1);

    // povećaj broj rezervacija za 1
    await (client as ReturnType<typeof createClient>)
      .patch(workshopId)
      .inc({ rezervirano: tickets })
      .commit();

    console.log(`Rezervirano povećano za workshop: ${workshopId}`);
  }

  return NextResponse.json({ received: true });
}
