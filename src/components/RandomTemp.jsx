import Slider from "rc-slider";
import React, { useCallback, useRef, useState } from "react";
import { Controller, useWatch } from "react-hook-form";

function RandomTemp({ idx, product, control, setValue }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const prevTemp = useRef([]);

  const { initMax, initMin, name } = product;

  const minTempKey = `products[${idx}].min`;
  const maxTempKey = `products[${idx}].max`;

  const currentTemp = useWatch({
    control,
    name: `products[${idx}]`,
  });

  const { min: currentMin, max: currentMax } = currentTemp;

  const handleDisabled = useCallback(() => {
    setIsDisabled((prev) => !prev);

    if (!isDisabled) {
      prevTemp.current = { currentMin, currentMax };
      setValue(minTempKey, 999);
      setValue(maxTempKey, 999);
    } else {
      setValue(minTempKey, prevTemp.current.currentMin);
      setValue(maxTempKey, prevTemp.current.currentMax);
    }
  }, [idx, setValue, currentMin, currentMax, isDisabled]);

  const handleChange = (value) => {
    setValue(minTempKey, value[0]);
    setValue(maxTempKey, value[1]);
  };

  return (
    <article>
      <p>{name}</p>
      <p>{currentMin}</p>
      <button type="button" onClick={handleDisabled}>
        결품
      </button>
      <Controller
        name={`products[${idx}]`}
        control={control}
        render={({ field }) => (
          <Slider
            {...field}
            range
            disabled={isDisabled}
            value={[currentMin, currentMax]}
            onChange={handleChange}
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
