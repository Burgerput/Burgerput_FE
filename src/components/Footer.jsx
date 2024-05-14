import React from "react";
import styles from "./Footer.module.css";
import HowToUse from "./HowToUse";
import DdayCounter from "./ui/DdayCounter";
import UpdatedValueChecker from "./UpdatedValueChecker";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <article className={styles.tools}>
        <DdayCounter expiryDate="2024-12-31" />
        <HowToUse />
        {/* <UpdatedValueChecker /> */}
      </article>
      <p className={styles.copyright}>
        Copyright 2023. Etart, Frolip All Rights Reserved
      </p>
    </footer>
  );
}
