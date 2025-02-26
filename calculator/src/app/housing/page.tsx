import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { JSX } from 'react';
import styles from "./page.module.css";


export const metadata: Metadata = {
    title: 'Bydlení – Kalkulačky',
    description: 'Kalkulačky pro bydlení: energie, rekonstrukce a další užitečné nástroje.',
  };
  

export default function HousingPage(): JSX.Element {

  return (
    <section className={styles.housing}>
      <h1>Bydlení – Kalkulačky</h1>
      <p>Vyberte si kalkulačku pro bydlení, která vám usnadní plánování a výpočty!</p>
      <div className={styles.categories}>
        <Link href="/housing/energie" className={styles.card}>
            <Image
              src="/energie.svg"
              alt="Kalkulačka energií"
              width={50}
              height={50}
              className={styles.image}
            />
            <p>Kalkulace spotřeby energií a nákladů.</p>
        </Link> 
        <Link href="/housing/rekonstrukce" className={styles.card}>
            <Image
              src="/rekonstrukce.svg"
              alt="Kalkulačka rekonstrukce"
              width={50}
              height={50}
              className={styles.image}
            />
            <p>Plánování a náklady na rekonstrukce.</p>
        </Link>
      </div>
    </section>
  );
}
