import React, { useState } from "react";
import styles from "./InputTemp.module.css";

export default function InputTemp({ product, register, setValue, idx }) {
  const [disabled, setDisabled] = useState(false);
  const { id, name, min, max } = product;

  const handleDisabled = () => {
    setDisabled((prev) => !prev);

    if (!disabled) {
      setValue(`products[${idx}].temp`, 999);
    } else {
      setValue(`products[${idx}].temp`, "");
    }
  };

  return (
    <label className={styles.label} htmlFor={id}>
      <article className={styles.text}>
        <p className={styles.text__title}>{name} </p>
        <p className={styles.text__temp}>
          ({min} ~ {max}ºF)
        </p>
      </article>
      <article className={styles.inputBox}>
        <button
          className={styles.inputBox__btn}
          type="button"
          onClick={handleDisabled}
        >
          결품
        </button>
        <input
          id={id}
          className={`${styles.inputBox__input} ${
            disabled && styles.disabled__input
          }`}
          type="number"
          disabled={disabled}
          {...register(`products[${idx}].temp`, {
            required: disabled ? undefined : "온도는 필수 입력 사항입니다.",
            valueAsNumber: true,
            min: {
              value: disabled ? undefined : min,
              message: `온도를 ${min} 이상으로 기입해주세요.`,
            },
            max: {
              value: disabled ? undefined : max,
              message: `온도를 ${max} 이하로 기입해주세요.`,
            },
          })}
        />
        <p
          className={`${styles.inputBox__temp} ${
            disabled && styles.disabled__temp
          }`}
        >
          ºF
        </p>
      </article>
    </label>
  );
}
