import { Button } from "../../components/ui/button";
import { redirect } from 'next/navigation';
import { getAuthSession } from "@/src/lib/auth";
import prisma from "@/src/lib/prisma";
import { stripe } from "@/src/lib/stripe"; 

export const BuyButton = () => {
    return (
        <form>
            <Button
                formAction= {async () => {
                    "use server";
                    

                    const authSession = await getAuthSession();
                    const user = await prisma.user.findUnique({
                        where: {
                            id: authSession?.user?.id ?? "",
                        },
                        select: {
                            stripeCustomerId: true,
                        },
                    });

                    

                    const stripeCustomerId = user?.stripeCustomerId ?? undefined;

                    const session = await stripe.checkout.sessions.create({
                        customer: stripeCustomerId,
                        mode: "subscription",
                        payment_method_types: ["card"],
                        line_items: [
                          {
                            price: process.env.NODE_ENV === "development" ? "price_1Ow2s7BZW7iXZSlZh40eDtnQ" : "",
                            quantity: 1,
                          }
                        ],
                        success_url: "http://localhost:3000/success",
                        cancel_url: "http://localhost:3000/cancel",
                    });

                    

                    if (!session.url) {
                        throw new Error("No session URL");
                    }
                    redirect(session.url);
                }}
            >
                Acheter cet article
            </Button>
        </form>
    )
}