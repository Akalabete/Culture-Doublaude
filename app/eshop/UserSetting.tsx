import { Button } from "../../components/ui/button";
import { redirect } from 'next/navigation';
import { getAuthSession } from "@/src/lib/auth";
import prisma from "@/src/lib/prisma";
import { stripe } from "@/src/lib/stripe"; 




export const AccountSettingButton = () => {
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
                           // userPlan: true,
                        },
                    });

                    if (!user){
                        throw new Error("No user found");
                    }
                   /* if (user.userPlan === "PREMIUM") {
                        throw new Error("User already has a premium plan");
                    }*/
                    const stripeCustomerId = user?.stripeCustomerId ?? undefined;
                    if (!stripeCustomerId) {
                        throw new Error("No stripe customer ID");
                    }
                    const session = await stripe.billingPortal.sessions.create({
                        customer: user.stripeCustomerId ?? "",
                        return_url: "http://localhost:3000/account/billing",
                    });
                    

                    if (!session.url) {
                        throw new Error("No session URL");
                    }
                    redirect(session.url);
                }}
            >
                Accounts Settings
            </Button>
        </form>
    )
}