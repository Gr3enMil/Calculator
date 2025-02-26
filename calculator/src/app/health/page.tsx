import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { JSX } from 'react';
import styles from "./page.module.css";


export const metadata: Metadata = {
    title: 'Zdraví – Kalkulačky',
    description: 'Kalkulačky pro zdraví: bmi, kcal a další užitečné nástroje.',
  };
  

export default function HousingPage(): JSX.Element {

  return (
    <section className={styles.health}>
      <h1>Zdraví – Kalkulačky</h1>
      <p>Vyberte si kalkulačku pro zdraví, která vám usnadní plánování a výpočty!</p>
      <div className={styles.categories}>
        <Link href="/health/bmi" className={styles.card}>
            <Image
              src="/bmi.svg"
              alt="Kalkulačka BMI"
              width={50}
              height={50}
              className={styles.image}
            />
            <p>Kalkulace vašeho BMI.</p>
        </Link> 
        <Link href="/health/kalorie" className={styles.card}>
            <Image
              src="/kalorie.svg"
              alt="Kalkulačka kalorií"
              width={50}
              height={50}
              className={styles.image}
            />
            <p>Výpočet kcal</p>
        </Link>
      </div>
    </section>
  );
}
