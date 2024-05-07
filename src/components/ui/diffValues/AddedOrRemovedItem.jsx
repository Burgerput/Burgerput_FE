import React from "react";
import styles from "./AddedOrRemovedItem.module.css";

export default function AddedOrRemovedItem({ item, type }) {
  const { name, min, max } = item;
  const titles = {
    add: "추가된 항목이 있어요!",
    del: "제거된 항목이 있어요!",
  };
  return (
    <article>
      <h3 className={styles.title}>{titles[type]}</h3>
      <p className={styles.name}>{name}</p>
      <p className={styles.temp}>
        ({min}ºF ~ {max}ºF)
      </p>
    </article>
  );
}
