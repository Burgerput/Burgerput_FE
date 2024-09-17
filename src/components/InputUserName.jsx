import React from "react";
import styles from "./InputUserName.module.css";
import { useForm } from "react-hook-form";
import { socket } from "../utils/server";
import { useSetUserName } from "../entities/user";

export default function InputUserName() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const setUserName = useSetUserName();

  const onEntrance = async (userName) => {
    return await fetch(`${import.meta.env.VITE_CHAT_SERVER_URL}/api/entrance`, {
      method: "POST",
      body: JSON.stringify({ userName }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onSubmit = async (data) => {
    setUserName(data.userName);
    const res = await onEntrance(data.userName);

    if (res.status === 200) {
      socket.connect();
    }
  };

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <p className={styles.description}>
          채팅에 사용될 닉네임을 입력해주세요.
        </p>
        <p>
          <span className={styles.span}>주의!!</span> 관리자와의 원할한 소통을
          위해
        </p>
        <p>매장명을 꼭! 기입해주세요! ex) 청터지민</p>
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
        <button className={styles.button}>취소</button>
      </div>
    </section>
  );
}
