import React from "react";
import styles from "../styles.module.css";

export default function Button({
  text,
  onClick,
  type,
  form,
  disabled,
  size = "middle",
}) {
  return (
    <button
      className={`${styles.buttonCommon} ${
        size === "middle" ? styles.button : styles.smallButton
      }`}
      type={type && type}
      form={form && form}
      onClick={onClick && onClick}
      disabled={disabled ? true : false}
    >
      {text}
    </button>
  );
}
