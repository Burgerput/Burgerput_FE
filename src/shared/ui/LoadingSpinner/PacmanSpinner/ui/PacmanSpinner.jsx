import React from "react";
import { PacmanLoader } from "react-spinners";
import styles from "../styles.module.css";

export default function PacmanSpinner() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <PacmanLoader color="#e0f21e" margin={2} size={30} speedMultiplier={1} />
    </section>
  );
}
