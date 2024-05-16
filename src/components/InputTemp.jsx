import React, { useState } from "react";

export default function InputTemp({ product, register, setValue, idx }) {
  const [disabled, setDisabled] = useState(false);
  const { _, name, min, max } = product;

  const handleDisabled = () => {
    setDisabled((prev) => !prev);

    if (!disabled) {
      setValue(`products[${idx}].temp`, 999);
    } else {
      setValue(`products[${idx}].temp`, "");
    }
  };

  return (
    <label>
      <p>{name}</p>
      <p>
        {min} ~ {max}
      </p>
      <input
        type="number"
        disabled={disabled}
        {...register(`products[${idx}].temp`, {
          required: disabled ? undefined : "온도는 필수 입력 사항입니다.",
          valueAsNumber: true,
          min: {
            value: disabled ? undefined : min,
            message: `온도를 ${min} 이상으로 기입해주세요.`,
          },
          max: {
            value: disabled ? undefined : max,
            message: `온도를 ${max} 이하로 기입해주세요.`,
          },
        })}
      />
      <button type="button" onClick={handleDisabled}>
        결품
      </button>
    </label>
  );
}
