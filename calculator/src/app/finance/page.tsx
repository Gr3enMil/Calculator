import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { JSX } from 'react';
import styles from "./page.module.css";


export const metadata: Metadata = {
    title: 'Finance – Kalkulačky',
    description: 'Kalkulačky pro finance: hypotéka, investice, spoření a další užitečné nástroje.',
  };
  

export default function HousingPage(): JSX.Element {

  return (
    <section className={styles.finance}>
      <h1>Finance – Kalkulačky</h1>
      <p>Vyberte si kalkulačku pro spoření, investice nebo hypotéku!</p>
      <div className={styles.categories}>
        <Link href="/finance/hypoteka" className={styles.card}>
            <Image
              src="/hypoteka.svg"
              alt="Kalkulačka Hypotéky"
              width={50}
              height={50}
              className={styles.image}
            />
            <p>Kalkulace hypotéky.</p>
        </Link> 
        <Link href="/finance/investice" className={styles.card}>
            <Image
              src="/investice.svg"
              alt="Kalkulačka investice"
              width={50}
              height={50}
              className={styles.image}
            />
            <p>Kalkulace investic</p>
        </Link>
        <Link href="/finance/sporeni" className={styles.card}>
            <Image
              src="/sporeni.svg"
              alt="Kalkulačka spoření"
              width={50}
              height={50}
              className={styles.image}
            />
            <p>Výpočet spoření</p>
        </Link>
      </div>
    </section>
  );
}
