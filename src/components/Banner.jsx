import React from "react";
import styles from "./Banner.module.css";

export default function Banner({ text }) {
  return <section className={styles.banner}>{text}</section>;
}
