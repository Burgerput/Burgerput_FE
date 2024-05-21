import React from "react";
import { Controller, useForm } from "react-hook-form";
import RandomTemp from "./RandomTemp";

export default function RandomTempForm({ products }) {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        {products.map((product, idx) => (
          <li>
            <RandomTemp product={product} control={control} />
          </li>
        ))}
      </ul>
      <button>제출</button>
    </form>
  );
}
