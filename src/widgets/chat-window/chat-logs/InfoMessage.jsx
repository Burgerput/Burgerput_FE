import React from "react";
import styles from "../styles.module.css";

export default function InfoMessage({ message }) {
  return <p className={styles.infoMessage}>{message}</p>;
}
