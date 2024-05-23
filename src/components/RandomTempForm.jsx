import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import RandomTemp from "./RandomTemp";
import { useSuccess, useWarning } from "../store/uiState";

export default function RandomTempForm({ products, onSaveRandomRange }) {
  const { handleSubmit, control, setValue } = useForm({
    mode: "onSubmit",
    defaultValues: {
      products: products.map(({ id, name, min, max }) => ({
        id,
        name,
        min: Number(min),
        max: Number(max),
      })),
    },
  });

  const warning = useWarning();
  const success = useSuccess();

  const onSaveTemp = (formData) => {
    const products = formData.products;

    onSaveRandomRange(products);
  };

  const onSubmitAM = (formData) => {
    console.log("AM!", formData);
  };

  const onSubmitPM = (formData) => {
    console.log("PM!", formData);
  };

  return (
    <form>
      {warning && <p>{warning}</p>}
      {success && <p>저장 성공!</p>}
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
