import React from "react";
import SignInForm from "../components/SignInForm";
import styles from "./SignIn.module.css";
import { SiBurgerking } from "react-icons/si";

export default function SignIn() {
  return (
    <section className={styles.section}>
      <article className={styles.info}>
        <h1 className={styles.info__title}>보안을 위해 로그인이 필요해요!</h1>
        <p className={styles.info__description}>
          버거풋은 웹에 공개되어 있어요. 일반 사용자가 악의적으로 젠풋을
          마음대로 입력할 수 있어 만일을 대비해 로그인 기능을 도입했어요.
        </p>
        <p className={styles.info__description}>
          아이디와 패스워드는 단순히 해당 매장의 접근만을 허용하기 위한 장치로
          관리자가 직접 만들어 제공해요.
        </p>
        <p className={styles.info__description}>
          하지만 걱정하지 마세요! 처음 로그인 이후로 다시 로그인 창을 보는
          번거로움은 없을 거예요!
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
