import React, { useEffect, useState } from "react";
import styles from "./CustomProducts.module.css";
import { useCustomProductsActions } from "../store/products";

export default function CustomProducts({ value, checkedIt }) {
  const { name, min, max, id } = value;
  const [checked, setChecked] = useState(checkedIt);
  const { addProduct, deleteProduct } = useCustomProductsActions();

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    if (checked) {
      addProduct({ id, min, max, checked });
    } else {
      deleteProduct(id);
    }
  }, [checked]);

  return (
    <div className={styles.product}>
      <input
        className={styles.check}
        type='checkbox'
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={id}>
        {name}
        <span className={styles.text__temp}>
          ({min} ~ {max} ºF)
        </span>
      </label>
    </div>
  );
}
