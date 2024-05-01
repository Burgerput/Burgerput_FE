import React from "react";
import styles from "./Footer.module.css";
import HowToUse from "./HowToUse";
import DdayCounter from "./ui/DdayCounter";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <article>
        <DdayCounter expiryDate="2024-12-31" />
        <HowToUse />
      </article>
      <p className={styles.copyright}>
        Copyright 2023. Etart, Frolip All Rights Reserved
      </p>
    </footer>
  );
}
