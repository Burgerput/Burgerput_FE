import { useForm } from "react-hook-form";
import InputTemp from "./InputTemp";

export default function InputTempForm({ products }) {
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

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            <InputTemp
              product={product}
              register={register}
              setValue={setValue}
              idx={idx}
            />
            {errors.products && errors.products[idx] && (
              <p>{errors.products[idx].temp.message}</p>
            )}
          </li>
        ))}
      </ul>
      <button>제출</button>
    </form>
  );
}
