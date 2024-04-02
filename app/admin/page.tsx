import { getAuthSession } from '@/src/lib/auth';
import { LoginButton } from '@/src/auth/LoginButton';
import style from './page.module.scss';
import { AdminPanel } from '@/src/auth/Admin';
import { AddReferencedButton, AddCSVReferencedButton, ListUsersButton, ListReferencedButton } from '@/app/components/AdminFunctions';


export default async function Page() {
    const session = await getAuthSession();
    if (session) {
        return (
            <main>
                <div className="flex mt-[20vh] justify-center h-screen">
                    <div className="mx-auto">
                        <AdminPanel />
                    </div>
                    <div className="mx-auto">
                        <AddReferencedButton />
                        <AddCSVReferencedButton />
                        <ListUsersButton />
                        <ListReferencedButton />
                    </div>
                </div>
            </main>
        )
    }
    return (
        <main>
            <div className="flex mt-[20vh] justify-center h-screen">
                <div className="mx-auto">
                    <h1>Connexion</h1>
                    <LoginButton />
                </div>
            </div>
        </main>
    );
}

