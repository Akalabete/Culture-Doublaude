"use client"
import style from './LoginButton.module.scss';
import { signOut } from 'next-auth/react';
export const LogoutButton = () => {
    return (
        <button className="btn btn-primary" 
        onClick={async () => {
            await signOut()
        }}>
            Se déconnecter
        </button>
    );
}