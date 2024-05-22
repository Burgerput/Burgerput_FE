import React from "react";
import { useForm } from "react-hook-form";
import RandomTemp from "./RandomTemp";

export default function RandomTempForm({ products }) {
  const { handleSubmit, control, setValue } = useForm({
    mode: "onSubmit",
    defaultValues: {
      products: products.map(({ id, name, min, max }) => ({
        id,
        name,
        temp: [Number(min), Number(max)],
      })),
    },
  });

  const onSaveTemp = (formData) => {
    console.log("Save!", formData);
  };

  const onSubmitAM = (formData) => {
    console.log("AM!", formData);
  };

  const onSubmitPM = (formData) => {
    console.log("PM!", formData);
  };

  return (
    <form>
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            <RandomTemp
              idx={idx}
              product={product}
              control={control}
              setValue={setValue}
            />
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleSubmit(onSaveTemp)}>
        저장
      </button>
      <button type="button" onClick={handleSubmit(onSubmitAM)}>
        오전 제출
      </button>
      <button type="button" onClick={handleSubmit(onSubmitPM)}>
        오후 제출
      </button>
    </form>
  );
}
