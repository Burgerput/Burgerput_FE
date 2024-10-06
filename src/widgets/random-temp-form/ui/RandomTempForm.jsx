import React from "react";
import styles from "../styles.module.css";
import { useFieldArray, useForm } from "react-hook-form";
import { RandomTemp } from "../../../features/random-temp";
import { useGenerateRandomTemp } from "../../../features/generate-random-temp";

export default function RandomTempForm({
  products,
  onSaveRandomRange,
  onSubmitRandomRange,
}) {
  const { handleSubmit, control, setValue } = useForm({
    mode: "onSubmit",
    defaultValues: {
      products: products.map((product) => ({
        ...product,
        initMin: Number(product.initMin),
        initMax: Number(product.initMax),
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

  const onSubmitTemp = (formData, state) => {
    const products = generateRandomTemp(formData.products);

    onSubmitRandomRange(products, state);
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
        <button
          type="button"
          onClick={handleSubmit((formData) => onSubmitTemp(formData, "AM"))}
        >
          오전 제출
        </button>
        <button
          type="button"
          onClick={handleSubmit((formData) => onSubmitTemp(formData, "PM"))}
        >
          오후 제출
        </button>
      </section>
    </form>
  );
}
