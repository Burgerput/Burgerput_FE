import React from "react";
import styles from "../styles.module.css";

export default function AdminProfileInput({
  register,
  label,
  id,
  type,
  defaultValue,
  placeholder,
  validation,
  errors,
}) {
  return (
    <article className={styles.inputBox}>
      <label className={styles.label}>{label}</label>
      <section className={styles.wrapper}>
        <input
          className={styles.input}
          id={id}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          autoComplete="off"
          {...register(id, validation)}
          aria-invalid={errors[id] ? true : false}
        />
        {errors[id] && (
          <small className={styles.error} role="alert">
            {errors[id].message}
          </small>
        )}
      </section>
    </article>
  );
}
