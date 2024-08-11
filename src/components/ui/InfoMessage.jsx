import React from "react";
import styles from "./message.module.css";

export default function InfoMessage({ message }) {
  return <p className={styles.infoMessage}>{message}</p>;
}
