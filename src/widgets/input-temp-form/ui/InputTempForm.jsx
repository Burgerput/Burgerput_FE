import styles from "../styles.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputTemp } from "../../../features/input-temp";

export default function InputTempForm({ onSubmit, products, pageLocation }) {
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

  if (products.length === 0) {
    return (
      <section className={styles.empty}>
        <p>먼저 사용할 제품을 선택해주세요.</p>
        <Link className={styles.navigate} to={`/select/${pageLocation}`}>
          선택하러 가기
        </Link>
      </section>
    );
  }

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
