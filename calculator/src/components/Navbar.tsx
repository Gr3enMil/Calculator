// src/components/Navbar.tsx
"use client";

import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className={styles.navbar}>
      <h1><Link href="/" >Calculators</Link></h1>
      <div className={styles.menu}>
        <Image src={isOpen? "/menuclose.svg" : "/menu.svg"} 
              alt="menu" 
              width={50} height={50}
              onClick={()=>setIsOpen(!isOpen) }></Image></div>
      <ul className={`${styles.navlinks} ${!isOpen ? styles.hide : ''}`}>
        <li><Link href="/" onClick={()=>setIsOpen(false)}>Home</Link></li>
        <li><Link href="/finance" onClick={()=>setIsOpen(false)}>Finance</Link></li>
        <li><Link href="/health" onClick={()=>setIsOpen(false)}>Zdraví</Link></li>
        <li><Link href="/housing" onClick={()=>setIsOpen(false)}>Bydlení</Link></li>
        <li><Link href="/business" onClick={()=>setIsOpen(false)}>Podnikání</Link></li>
      </ul>
    </nav>
  );
}
