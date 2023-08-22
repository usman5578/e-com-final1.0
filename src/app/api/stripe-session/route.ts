import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, { apiVersion: "2022-11-15" });

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log('body',body);
  try {
    if (body.length > 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1NRaAECFpC5PrpNRml4c5WiD" },
          { shipping_rate: "shr_1NRa8uCFpC5PrpNRWt32dql0" },
        ],
        line_items: body.map((item: any) => {
          return {
            price_data: {
              currency: "pkr",
              product_data: {
                name: item.title,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
        }),
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      return NextResponse.json({ session });
    } else {
      console.log("hello fromthe other side");
      return NextResponse.json({ message: "No Data FOund" });
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(err.message);
  }
}
