import { useForm } from "react-hook-form";
import InputTemp from "./InputTemp";
import styles from "./InputTempForm.module.css";

export default function InputTempForm({ onSubmit, products }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      products: products.map(({ id, name, min, max }) => ({
        id,
        name,
        min,
        max,
        temp: "",
      })),
    },
  });

  return (
    <form
      className={styles.form}
      id="inputForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ul className={styles.products}>
        {products.map((product, idx) => (
          <li className={styles.product} key={idx}>
            <InputTemp
              product={product}
              register={register}
              setValue={setValue}
              idx={idx}
            />
            {errors.products && errors.products[idx] && (
              <small className={styles.error}>
                {errors.products[idx].temp.message}
              </small>
            )}
          </li>
        ))}
      </ul>
    </form>
  );
}
