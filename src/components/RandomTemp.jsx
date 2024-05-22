import Slider from "rc-slider";
import React, { useCallback, useRef, useState } from "react";
import { Controller, useWatch } from "react-hook-form";

function RandomTemp({ idx, product, control, setValue }) {
  const [disabled, setDisabled] = useState(false);
  const prevTemp = useRef([]);

  const { initMax, initMin, name } = product;
  const [currentMin, currentMax] = useWatch({
    control,
    name: `products[${idx}].temp`,
  });

  const handleDisabled = useCallback(() => {
    setDisabled((prev) => !prev);

    if (!disabled) {
      prevTemp.current = [currentMin, currentMax];
      setValue(`products[${idx}].temp`, [999, 999]);
    } else {
      setValue(`products[${idx}].temp`, prevTemp.current);
    }
  }, [idx, setValue, currentMin, currentMax, disabled]);

  return (
    <article>
      <p>{name}</p>
      <p>{currentMin}</p>
      <button type="button" onClick={handleDisabled}>
        결품
      </button>
      <Controller
        name={`products[${idx}].temp`}
        control={control}
        render={({ field }) => (
          <Slider
            {...field}
            range
            value={field.value}
            onChange={(value) => field.onChange(value)}
            defaultValue={field.value}
            min={Number(initMin)}
            max={Number(initMax)}
            allowCross={false}
          />
        )}
      />
      <p>{currentMax}</p>
    </article>
  );
}

export default React.memo(RandomTemp);
