import React from "react";

export default function AddedOrRemovedItem({ item, type }) {
  const { name, min, max } = item;
  const titles = {
    add: "추가된 항목이 있어요!",
    del: "제거된 항목이 있어요!",
  };
  return (
    <article>
      <h2>{titles[type]}</h2>
      <p>{name}</p>
      <p>
        {min} ~ {max}
      </p>
    </article>
  );
}
