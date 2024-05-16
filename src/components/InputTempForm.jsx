import { useForm } from "react-hook-form";

export default function InputTempForm({ products }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      products: products.map(({ id, name, min, max }) => ({
        id: id,
        name: name,
        min: min,
        max: max,
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
        {products.map(({ id, name, min, max }, idx) => (
          <li key={id}>
            <label>
              <p>{name}</p>
              <p>
                {min} ~ {max}
              </p>
              <input
                type="number"
                {...register(`products[${idx}].temp`, {
                  required: "온도는 필수 입력 사항입니다.",
                  valueAsNumber: true,
                  min: {
                    value: min,
                    message: `온도를 ${min} 이상으로 기입해주세요.`,
                  },
                  max: {
                    value: max,
                    message: `온도를 ${max} 이하로 기입해주세요.`,
                  },
                })}
              />
            </label>

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
