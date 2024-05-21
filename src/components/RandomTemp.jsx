import Slider from "rc-slider";
import React from "react";
import { Controller } from "react-hook-form";

export default function RandomTemp({ product, control }) {
  console.log(product);
  const { id, initMax, initMin, max, min, name } = product;
  return (
    <article>
      <p>{name}</p>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Slider
            {...field}
            range
            onChange={(event) => field.onChange([event[0], event[1]])}
            defaultValue={[Number(min), Number(max)]}
            min={Number(initMin)}
            max={Number(initMax)}
            allowCross={false}
          />
        )}
      />
    </article>
  );
}
