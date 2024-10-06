import React from "react";
import styles from "./styles.module.css";
import { SignInForm } from "../../widgets/sign-in-form";
import { SiBurgerking } from "react-icons/si";

export default function SignIn() {
  return (
    <section className={styles.section}>
      <article className={styles.info}>
        <h1 className={styles.info__title}>
          <span className={styles.emphasize}>잠깐!</span> 보안을 위해 로그인이
          필요해요!
        </h1>
        <p className={styles.info__description}>
          버거풋은 웹에 공개되어 있어요. 젠풋 입력에 대한 보안을 강화하기 위해
          로그인 기능을 도입했어요.
        </p>
        <p className={styles.info__description}>
          접근 제한을 목적으로 개발한 로그인 기능이기 때문에 아이디와 패스워드는
          관리자가 만들어 제공해요.
        </p>
        <p className={styles.info__description}>
          처음 로그인 이후 로그인 상태는 6개월간 유지 돼요.
        </p>
      </article>
      <article className={styles.article}>
        <SignInForm />
        <p className={styles.icon}>
          <SiBurgerking className={styles.burger} />
        </p>
      </article>
    </section>
  );
}
