import React from "react";
import styles from "./BackDrop.module.css";

export default function BackDrop({ onClose }) {
  return <div className={styles.backDrop} onClick={onClose} />;
}
