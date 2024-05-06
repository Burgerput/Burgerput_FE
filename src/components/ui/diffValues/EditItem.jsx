import React from "react";
import styles from "./diffValues.module.css";

function changedMinValue({ list }) {
  const [prev, cur] = list;
  return (
    <li>
      <h4>최소 온도가 변경 되었어요.</h4>
      <p>
        {prev}에서 {cur}
      </p>
    </li>
  );
}

function changedMaxValue({ list }) {
  const [prev, cur] = list;
  return (
    <li>
      <h4>최대 온도가 변경 되었어요.</h4>
      <p>
        {prev}에서 {cur}
      </p>
    </li>
  );
}

function changedName({ list }) {
  const [prev, cur] = list;
  return (
    <li>
      <h4>이름이 변경 되었어요.</h4>
      <p>
        {prev}에서 {cur}
      </p>
    </li>
  );
}

function DefaultComponent() {
  return <li>Unknown type error</li>;
}

export default function EditItem({ item }) {
  const { name, diff } = item;

  const types = {
    min: changedMinValue,
    max: changedMaxValue,
    name: changedName,
  };

  return (
    <article className={styles.Add}>
      <h2>변경된 목록이 있어요!</h2>
      <p>{name}</p>
      <ul>
        {diff.map((list, index) => {
          const Component = types[Object.keys(list)] || DefaultComponent;
          return <Component key={index} list={Object.values(list)[0]} />;
        })}
      </ul>
    </article>
  );
}
