import React from "react";
import styles from "../styles.module.css";
import { Link } from "react-router-dom";
import { BsSignpostSplit } from "react-icons/bs";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <article className={styles.textBox}>
        <h2 className={styles.title}>잘못된 경로에 접근했어요!</h2>
        <section className={styles.article}>
          <p className={styles.description}>
            해당 경로는 우리 사이트에서 지원하지 않는 경로예요.
          </p>
          <p>아래 버튼을 클릭하면 처음 페이지로 이동할 수 있어요.</p>
          <Link to="/">
            <button className={styles.button}>버거풋으로 이동하기</button>
          </Link>
        </section>
      </article>
      <BsSignpostSplit className={styles.mapSign} />
    </section>
  );
}
