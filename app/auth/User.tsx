import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { LogoutButton } from "./LogoutButton";



export const User = async() => {
    const session = await getServerSession(authConfig);
    if (!session?.user) {
        return <p>Aucun utilisateurs enregistrés</p>
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={session.user.image ?? ""} alt="avatar" />
                    </div>
                </div>
                <h2 className="card-title">{session.user.name}</h2>
                <p>{session.user.email}</p>
                <div className="card-actions justify-end">
                    <LogoutButton />
                </div>
            </div>
        </div>
    )
} 