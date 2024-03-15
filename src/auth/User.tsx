import { LogoutButton } from "./LogoutButton";
import { getAuthSession } from "../lib/auth";


export const User = async() => {
    const session = await getAuthSession();
    
    if (!session?.user) {
        return <p>Aucun utilisateurs enregistrés</p>
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
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </>
    )
} 