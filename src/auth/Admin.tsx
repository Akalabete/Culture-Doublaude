import { LogoutButton } from "./LogoutButton";
import { getRequiredAuthSession } from "../lib/auth";
import { redirect } from "next/navigation";

export const AdminPanel = async() => {
    const session = await getRequiredAuthSession();
    if (!session || session.user.accreditationLevel !== 2) {
        redirect("/auth/signin");
    }

    return (
        <>
            <h1>admin pannel</h1>
            <LogoutButton />
        </>
    )


}