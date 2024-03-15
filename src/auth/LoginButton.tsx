"use client"

import { signIn } from 'next-auth/react';
import React from 'react'; // Add this line

export const LoginButton = () => {
    return (
        <button className="btn btn-primary" // Add quotes around the class name
        onClick={async () => {
            await signIn()
        }}>
            Se connecter
        </button>
    );
}