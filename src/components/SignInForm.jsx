import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "../api/user";
import { useNavigate } from "react-router-dom";
import styles from "./SignInForm.module.css";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    signIn(data)
      .then((res) => {
        if (res) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("로그인 과정에 문제가 발생했어요!");
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <article className={styles.article}>
        <label className={styles.label} htmlFor="id">
          아이디
        </label>
        <input
          autoFocus
          className={styles.input}
          id="id"
          type="text"
          autoComplete="off"
          {...register("id", {
            required: "아이디는 필수 입력 사항입니다.",
          })}
        />
        {errors.id && (
          <small className={styles.error}>{errors.id.message}</small>
        )}
      </article>
      <article className={styles.article}>
        <label className={styles.label} htmlFor="password">
          패스워드
        </label>
        <input
          className={styles.input}
          id="password"
          type="password"
          {...register("password", {
            required: "패스워드는 필수 입력 사항입니다.",
          })}
        />
        {errors.password && (
          <small className={styles.error}>{errors.password.message}</small>
        )}
      </article>
      <button className={styles.button}>로그인</button>
    </form>
  );
}
