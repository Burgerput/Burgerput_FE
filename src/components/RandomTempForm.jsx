import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import RandomTemp from "./RandomTemp";
import { useGenerateRandomTemp } from "../hooks/useGenerateRandomTemp";
import styles from "./RandomTempForm.module.css";

export default function RandomTempForm({
  products,
  onSaveRandomRange,
  onSubmitRandomRange,
}) {
  const { handleSubmit, control, setValue } = useForm({
    mode: "onSubmit",
    values: {
      products: products.map((product) => ({
        ...product,
        min: Number(product.min),
        max: Number(product.max),
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

  const { fields } = useFieldArray({
    control,
    name: "products",
  });

  return (
    <form className={styles.form}>
      <ul className={styles.list}>
        {fields.map((product, idx) => (
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
      <section className={styles.btnContainer}>
        <button type="button" onClick={handleSubmit(onSaveTemp)}>
          범위 저장
        </button>
        <button type="button" onClick={handleSubmit(onSubmitAM)}>
          오전 제출
        </button>
        <button type="button" onClick={handleSubmit(onSubmitPM)}>
          오후 제출
        </button>
      </section>
    </form>
  );
}
