"use client"
import { useRouter } from 'next/router';

function AddReferencedButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/admin/add-referenced');
    }

    return <button onClick={handleClick}>Ajouter un référencé</button>;
}

function AddCSVReferencedButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/admin/add-csv-referenced');
    }

    return <button onClick={handleClick}>Ajouter un CSV de référencés</button>;
}

function ListUsersButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/admin/list-users');
    }

    return <button onClick={handleClick}>Lister les utilisateurs</button>;
}

function ListReferencedButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/admin/list-referenced');
    }

    return <button onClick={handleClick}>Lister les référencés</button>;
}

export { AddReferencedButton, AddCSVReferencedButton, ListUsersButton, ListReferencedButton };