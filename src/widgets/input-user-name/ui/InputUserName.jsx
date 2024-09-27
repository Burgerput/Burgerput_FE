import React from "react";
import styles from "../styles.module.css";
import { useInputUserName } from "../../../entities/user";

export default function InputUserName({ onClose }) {
  const { register, handleSubmit, errors, onSubmit } = useInputUserName();

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <p className={styles.description}>
          채팅에 사용될 닉네임을 입력해주세요.
          <br />
          <span className={styles.span}>주의!!</span> 관리자와의 원할한 소통을
          위해
          <br />
          매장명을 꼭! 기입해주세요! ex) 청터지민
        </p>
        <form
          className={styles.form}
          id="userNameForm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className={styles.input}
            autoFocus
            autoComplete="off"
            id="userName"
            type="text"
            {...register("userName", {
              required: "닉네임은 필수 입력 사항입니다.",
            })}
          />
          {errors.userName && (
            <small className={styles.error}>{errors.userName.message}</small>
          )}
        </form>
      </article>
      <div className={styles.div}>
        <button form="userNameForm" className={styles.button}>
          입력
        </button>
        <button className={styles.button} onClick={onClose}>
          취소
        </button>
      </div>
    </section>
  );
}
