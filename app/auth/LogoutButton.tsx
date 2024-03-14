"use client"
import style from './LoginButton.module.scss';
import { signOut } from 'next-auth/react';
export const LogoutButton = () => {
    return (
        <button className={style.loginbutton} 
        onClick={async () => {
            await signOut()
        }}>
            Se déconnecter
        </button>
    );
}