'use client'
import React, { useState, useEffect } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
//import { AuthContext } from '../auth/authContext';


const Header: React.FC = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const [bubbleHere, setBubbleHere] = useState(true);
    //const { isConnected, setIsConnected } = React.useContext(AuthContext);
    const router = useRouter();
    const pathname = usePathname();
    
    const toggleNav = () => {
        setNavVisible(!isNavVisible);
    };

    const updateBubbleHere = () => {
        if (typeof window !== 'undefined') {
            setBubbleHere(window.matchMedia('(max-width: 768px)').matches);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateBubbleHere);
        return () => {
            updateBubbleHere();
            window.removeEventListener('resize', updateBubbleHere);
        };
    }, []);

    const navList = (
        <ul className={styles.header__content__nav__list} onClick={toggleNav}>
            <li>
                <Link href="/">
                    <span className={`link ${pathname === '/' ? 'active' : ''}`} style={{ color: pathname === '/' ? 'red' : 'inherit' }}>Accueil</span>
                </Link>
            </li>
            <li>
                <Link href="/annuaire">
                    <span className={`link ${pathname === '/annuaire' ? 'active' : ''}`} style={{ color: pathname === '/annuaire' ? 'red' : 'inherit' }}>Annuaire</span>
                </Link>
            </li>
            <li>
                <Link href="/eshop">
                    <span className={`link ${pathname === '/eshop' ? 'active' : ''}`} style={{ color: pathname === '/eshop' ? 'red' : 'inherit' }}>Boutique</span>
                </Link>
            </li>
            <li>
                <Link href="/actu">
                    <span className={`link ${pathname === '/actu' ? 'active' : ''}`} style={{ color: pathname === '/actu' ? 'red' : 'inherit' }}>Actu</span>
                </Link>  
            </li>
            <li>
                <Link href="/login">
                    <span className={`link ${pathname === '/login' ? 'active' : ''}`} style={{ color: pathname === '/login' ? 'red' : 'inherit' }}>Connexion</span>
                </Link>
            </li>
        </ul>
    );

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.header__content}>
                    <div className={styles.header__content__logo}>
                       
                    </div>
                    <div className={styles.header__content__nav}>
                        {bubbleHere ? (isNavVisible ? (
                            <div onMouseLeave={() => setNavVisible(false)}>
                                {navList}
                            </div>
                        ) : (
                            <div className={styles.header__content__nav__dots}
                                onMouseEnter={() => setNavVisible(true)}
                            >
                                ...
                            </div>
                        )) : (
                            <div className={styles.header__content__nav__list__container}>
                                {navList}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
/* 
fin de ma liste
 <li>
               {!isConnected ? (
                    <Link href="/login">
                        <span className={`link ${pathname === '/login' ? 'active' : ''}`} style={{ color: pathname === '/login' ? 'red' : 'inherit' }}>Connexion</span>
                    </Link>
                ) : (
                    <Link href="/" onClick={() => {
                        setIsConnected(false);
                        sessionStorage.removeItem('authToken');
                        }
                    }>
                        <span className={`link ${pathname === '/' && isConnected ? '' : 'active'}`} style={{ color: pathname === '/' && isConnected ? 'inherit' : 'red' }}>Déconnexion</span>
                    </Link>
                )}
            </li>
            */