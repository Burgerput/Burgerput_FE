import React from "react";
import { useForm } from "react-hook-form";
import RandomTemp from "./RandomTemp";

export default function RandomTempForm({ products }) {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    defaultValues: {
      products: products.map(({ id, name, min, max }) => ({
        id,
        name,
        temp: [Number(min), Number(max)],
      })),
    },
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            <RandomTemp idx={idx} product={product} control={control} />
          </li>
        ))}
      </ul>
      <button>제출</button>
    </form>
  );
}
