import React from "react";

function ChangedValueComponent({ type, list }) {
  const [prev, cur] = list;
  const titles = {
    min: "최소 온도가 변경되었어요.",
    max: "최대 온도가 변경되었어요.",
    name: "이름이 변경되었어요.",
  };

  return (
    <li>
      <h4>{titles[type]}</h4>
      <p>{`${prev} -> ${cur}`}</p>
    </li>
  );
}

export default function EditItem({ item }) {
  const { name, diff } = item;

  return (
    <article>
      <h2>{name}가 변경됐어요!</h2>
      <ul>
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
