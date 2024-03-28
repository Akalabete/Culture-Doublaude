import { LogoutButton } from "./LogoutButton";
import { getRequiredAuthSession } from "../lib/auth";
import { redirect } from "next/navigation";

export const User = async() => {
    const session = await getRequiredAuthSession();
    if (!session) {
        redirect("/auth/signin");
    }

    return (
        <>
            <div className="card w-96 bg-primary-content shadow-xl">
                <div className="card-body">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={session.user.image ?? ""} alt="avatar" />
                        </div>
                    </div>
                    <h2 className="card-title">{session.user.name}</h2>
                    <p>{session.user.email}</p>
                    <div className="card-actions justify-end">
                    {session.user.accreditationLevel === 2 && (
                        <a href="/admin" className="btn btn-primary">
                            Panneau d&apos;administration
                        </a>
                    )}
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </>
    )
} 