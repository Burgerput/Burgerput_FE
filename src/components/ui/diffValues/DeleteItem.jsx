import React from "react";
import styles from "./diffValues.module.css";

export default function DeleteItem({ item }) {
  const { name, min, max } = item;
  return (
    <article className={styles.del}>
      <h2>제거된 목록이 있어요!</h2>
      <p>{name}</p>
      <p>
        {min} ~ {max}
      </p>
    </article>
  );
}
