import React from "react";
import { BarLoader } from "react-spinners";
import styles from "./LoadingSpinner.module.css";

export default function LoadingBarSpinner() {
  return (
    <section className={styles.section}>
      <BarLoader color="#e1dcdc" height={5} width={300} />
    </section>
  );
}
