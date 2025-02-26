import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { JSX } from 'react';
import styles from "./page.module.css";


export const metadata: Metadata = {
    title: 'Business – Kalkulačky',
    description: 'Kalkulačky pro podnikání: dph, marže a další užitečné nástroje.',
  };
  

export default function HousingPage(): JSX.Element {

  return (
    <section className={styles.business}>
      <h1>Business – Kalkulačky</h1>
      <p>Vyberte si kalkulačku pro podnikání, která vám usnadní plánování a výpočty!</p>
      <div className={styles.categories}>
        <Link href="/business/dph" className={styles.card}>
            <Image
              src="/dph.svg"
              alt="Kalkulačka DPH"
              width={50}
              height={50}
              className={styles.image}
            />
            <p>Kalkulace DPH.</p>
        </Link> 
        <Link href="/business/marze" className={styles.card}>
            <Image
              src="/marze.svg"
              alt="Kalkulačka marže"
              width={50}
              height={50}
              className={styles.image}
            />
            <p>Kalkulace marže</p>
        </Link>
      </div>
    </section>
  );
}
