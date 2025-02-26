import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className={styles.home}>
      <h1>Vítejte na Smart Calculators</h1>
      <p>Vyberte si kategorii a začněte s výpočty!</p>
      <div className={styles.categories}>
        <Link href="/finance" className={styles.card}>
          <Image src="/finance.svg" className={styles.image} width={50} height={50} alt="Finance" />
          <p>Hypotéky, spoření a další.</p>
        </Link>
        <Link href="/health" className={styles.card}>
          <Image src="/health.svg" className={styles.image} width={50} height={50} alt="Health" />
          <p>BMI, kalorické výpočty a další.</p>
        </Link>
        <Link href="/housing" className={styles.card}>
          <Image src="/housing.svg" className={styles.image} width={50} height={50} alt="House" />
          <p>Energie, rekonstrukce a další.</p>
        </Link>
        <Link href="/business" className={styles.card}>
          <Image src="/business.svg" className={styles.image} width={50} height={50} alt="Business" />
          <p>DPH, zisk a další.</p>
        </Link>
      </div>
    </section>
  );
} 
