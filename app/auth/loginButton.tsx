"use client"
import style from './loginButton.module.scss';
import { signIn } from 'next-auth/react';
export const LoginButton = () => {
    return (
        <button className={style.loginbutton} 
        onClick={async () => {
            await signIn()
        }}>
            Se connecter
        </button>
    );
}