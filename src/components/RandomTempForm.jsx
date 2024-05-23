import React from "react";
import { useForm } from "react-hook-form";
import RandomTemp from "./RandomTemp";
import { useGenerateRandomTemp } from "../hooks/useGenerateRandomTemp";

export default function RandomTempForm({
  products,
  onSaveRandomRange,
  onSubmitRandomRange,
}) {
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

  const { generateRandomTemp } = useGenerateRandomTemp();

  const onSaveTemp = (formData) => {
    const products = formData.products;

    onSaveRandomRange(products);
  };

  const onSubmitAM = (formData) => {
    const products = generateRandomTemp(formData.products);

    onSubmitRandomRange(products, "AM");
  };

  const onSubmitPM = (formData) => {
    const products = generateRandomTemp(formData.products);

    onSubmitRandomRange(products, "PM");
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
