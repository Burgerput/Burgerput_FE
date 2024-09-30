import React, { useState } from "react";
import styles from "../styles.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onSubmit" });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await signIn(data)
      .then((status) => {
        if (status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        if (err === "Invalid username/password supplied") {
          resetField("password");
          setError("비밀번호를 다시 한 번 확인해주세요.");
        }

        if (err === "Account not found") {
          resetField("id");
          setError("존재하지 않는 아이디입니다. 다시 입력해주세요.");
        }
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {error && <p className={styles.signinError}>{error}</p>}
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
          비밀번호
        </label>
        <input
          className={styles.input}
          id="password"
          type="password"
          {...register("password", {
            required: "비밀번호는 필수 입력 사항입니다.",
          })}
        />
        {errors.password && (
          <small className={styles.error}>{errors.password.message}</small>
        )}
      </article>
      <button
        disabled={isSubmitting}
        className={`${styles.button} ${isSubmitting && styles.disabled}`}
      >
        로그인
      </button>
    </form>
  );
}
