import { authConfig } from '@/pages/api/auth/[...nextauth]';
import {getServerSession } from 'next-auth';
import { LoginButton } from '@/app/auth/LoginButton';
import style from './page.module.scss';
import { User } from '@/app/auth/User';

export default async function Page() {
    const session = await getServerSession(authConfig);
    if (session) {
        return (
            <main>
                <div className="flex mt-[20vh] justify-center h-screen">
                    <div className="mx-auto">
                        <User />
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






/*
import style from './page.module.scss';

import { authenticate } from '@/app/lib/actions';


export default function Page() {
    return (
      <form action={authenticate}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    )
  }

  'use client'
import { AuthContext } from '../components/auth/authContext';
import styles from './page.module.scss';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '../components/modal/page';

export default function Login() {
    const [isRegistered, setIsRegistered] = useState(true);   
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const { isConnected, setIsConnected } = React.useContext(AuthContext);
    const router = useRouter();
    const handleLogin = async(e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const loginData = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
            if (response.status === 200) {
                const data = await response.json();
                console.log(data.token);
                sessionStorage.setItem('authToken', data.token)
                setModalTitle('Succès');
                setModalMessage(`Bonjour ${data.user.username}`);
                setIsModalOpen(true);
                setIsConnected(true);
            }
            else if (response.status === 401) {
                setModalTitle('Erreur');
                setModalMessage('Mauvais identifiants');
                setIsModalOpen(true);
                console.log('Mauvais identifiants');                
            }
        } catch (error) {
            console.error("error while connecting to server:", error);
        }
    }

       
    const handleRegistration = async(e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const registerData = {
            username: formData.get('username') as string,
            firstname: formData.get('firstname') as string,
            lastname: formData.get('lastname') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };
        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerData),
            });
            if (response.status === 201) {
                setModalTitle('Succès');
                setModalMessage('Utilisateur enregistré');
                setIsModalOpen(true);
                setIsRegistered(true);
                
            }
            else if (response.status === 400) {
                setModalTitle('Erreur');
                setModalMessage('???');
                setIsModalOpen(true);               
            }
            else 
            {
                setModalTitle('Erreur');
                setModalMessage(`Erreur ${response.status}`);
                setIsModalOpen(true);
            }
        } catch (error) {
            console.error("error while connecting to server:", error);
        }
    }
    return (
        
            <section className={styles.login}>
                <h1 className={styles.login__title}>{isRegistered ? 'Connexion' : 'Inscription'}</h1>
                {isRegistered ? (
                    <form className={styles.login__form} onSubmit={handleLogin}>
                        <label className={styles.login__form__label} htmlFor="email">Email</label>
                        <input className={styles.login__form__input} type="email" id="email" name="email" />
                        <label className={styles.login__form__label} htmlFor="password">Mot de passe</label>
                        <input className={styles.login__form__input} type="password" id="password" name="password" />
                        <div className={styles.login__form__buttonContainer}>
                            <button className={styles.login__form__button} type="submit">Se connecter</button>
                            <button className={styles.login__form__button} onClick={() => setIsRegistered(!isRegistered)}>Pas encore inscrit ?</button>
                        </div>
                    </form>
                ) : (
                    <form className={styles.registration__form} onSubmit={handleRegistration}>
                        <label className={styles.registration__form__label} htmlFor="username">Nom d&apos;utilisateur</label>
                        <input className={styles.registration__form__input} type="text" id="username" name="username" />
                        <label className={styles.registration__form__label} htmlFor="firstname">Prénom</label>
                        <input className={styles.registration__form__input} type="text" id="firstname" name="firstname" />
                        <label className={styles.registration__form__label} htmlFor="lastname">Nom de famille</label>
                        <input className={styles.registration__form__input} type="text" id="lastname" name="lastname" />
                        <label className={styles.registration__form__label} htmlFor="email">Email</label>
                        <input className={styles.registration__form__input} type="email" id="email" name="email" />
                        <label className={styles.registration__form__label} htmlFor="password">Mot de passe</label>
                        <input className={styles.registration__form__input} type="password" id="password" name="password" />
                        <div className={styles.registration__form__buttonContainer}>
                            <button className={styles.registration__form__button} type="submit">S&apos;enregistrer</button>
                            <button className={styles.registration__form__button} onClick={() => setIsRegistered(!isRegistered)}>Déjà inscrit ?</button>
                        </div>
                    </form>
                )}
                <Modal
                    title={modalTitle}
                    message={modalMessage}
                    isOpen={isModalOpen}
                    onClose= {isConnected ? 
                        (
                            () => {setIsModalOpen(false);
                            router.push('/');}
                        ):(
                            () => {
                            setIsModalOpen(false);
                            router.push('/login');}
                        )
                    }
                />
            </section>
       
    );
}*/