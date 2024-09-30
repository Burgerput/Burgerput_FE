import React from "react";
import styles from "../styles.module.css";
import { Button } from "../../../shared/ui/Button";

export default function ErrorAlert({ handleRetry, handleClose }) {
  return (
    <section className={styles.section}>
      <article className={styles.content}>
        <header className={styles.header}>에러 발생</header>
        <p className={styles.description}>
          입력에 실패했습니다. 다시 시도해주세요.
        </p>
      </article>
      <article className={styles.container}>
        <Button onClick={handleRetry} text={"확인"} size="small" />
        <Button onClick={handleClose} text={"닫기"} size="small" />
      </article>
    </section>
  );
}
