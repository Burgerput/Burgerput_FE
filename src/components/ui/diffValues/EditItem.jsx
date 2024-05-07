import React from "react";
import styles from "./EditItem.module.css";

function ChangedValueComponent({ type, list }) {
  const [prev, cur] = list;
  const titles = {
    min: "으로 최소 온도가 변경되었어요.",
    max: "으로 최대 온도가 변경되었어요.",
    name: "로 이름이 변경되었어요.",
  };

  return (
    <li className={styles.detail__list}>
      <p className={styles.detail__desc}>
        <span>{prev}</span>에서 <span>{cur}</span>
        {`${titles[type]}`}
      </p>
    </li>
  );
}

export default function EditItem({ item }) {
  const { name, diff } = item;

  return (
    <article>
      <h3 className={styles.title}>{name}가 변경됐어요!</h3>
      <ul className={styles.detail}>
        {diff.map((list, index) => {
          const keys = Object.keys(list);
          const values = Object.values(list)[0];
          return (
            <ChangedValueComponent key={index} type={keys} list={values} />
          );
        })}
      </ul>
    </article>
  );
}
