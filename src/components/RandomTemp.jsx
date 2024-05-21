import Slider from "rc-slider";
import React from "react";
import { Controller, useWatch } from "react-hook-form";

export default function RandomTemp({ idx, product, control }) {
  const { initMax, initMin, name } = product;
  const [currentMin, currentMax] = useWatch({
    control,
    name: `products[${idx}].temp`,
  });
  return (
    <article>
      <p>{name}</p>
      <p>{currentMin}</p>
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
