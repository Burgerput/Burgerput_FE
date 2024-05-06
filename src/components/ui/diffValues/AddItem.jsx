import React from "react";
import styles from "./diffValues.module.css";

export default function AddItem({ item }) {
  const { name, min, max } = item;
  return (
    <article className={styles.Add}>
      <h2>추가된 목록이 있어요!</h2>
      <p>{name}</p>
      <p>
        {min} ~ {max}
      </p>
    </article>
  );
}
