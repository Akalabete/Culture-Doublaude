import Image from "next/image";
import styles from "./page.module.css";
import { authConfig } from '@/pages/api/auth/[...nextauth]';
import {getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authConfig);
  if (session) {
      return <p>{JSON.stringify(session, null, 2)}</p>}
  return (
    <main>
      
    </main>
  );
}
