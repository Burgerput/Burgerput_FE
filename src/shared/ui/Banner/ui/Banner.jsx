import React from "react";
import styles from "../styles.module.css";

export default function Banner({ text }) {
  return <section className={styles.banner}>{text}</section>;
}
