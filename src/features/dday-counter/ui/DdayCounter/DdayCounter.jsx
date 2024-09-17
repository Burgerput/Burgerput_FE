import styles from "./DdayCounter.module.css";

export default function DdayCounter({ expiryDate }) {
  const now = new Date();
  const expiry = new Date(expiryDate);
  const timeDiff = expiry - now;

  const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return (
    <article className={styles.counter}>
      <section className={styles.titleBox}>
        <p className={styles.title}>프로그램 종료 일</p>
        <p className={styles.expiryDate}>{expiryDate}</p>
      </section>
      <p className={styles.daysLeft}>D-{daysLeft}</p>
    </article>
  );
}
