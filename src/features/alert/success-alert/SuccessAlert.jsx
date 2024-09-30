import React from "react";
import styles from "../styles.module.css";
import { Button } from "../../../shared/ui/Button";

export default function SuccessAlert({ handleClose }) {
  return (
    <section className={styles.section}>
      <article className={styles.content}>
        <header className={styles.header}>제출 성공</header>
        <p className={styles.description}>값을 정상적으로 제출했습니다.</p>
      </article>
      <Button onClick={handleClose} text={"닫기"} size="small" />
    </section>
  );
}
