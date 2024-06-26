import Slider from "rc-slider";
import React, { useCallback, useRef, useState } from "react";
import { Controller, useWatch } from "react-hook-form";
import styles from "./RandomTemp.module.css";
import "rc-slider/assets/index.css";

function RandomTemp({ idx, product, control, setValue }) {
  const { initMax, initMin, name } = product;

  const [isDisabled, setIsDisabled] = useState(false);
  const prevTemp = useRef([]);

  const DISABLED_STYLE = `${isDisabled && styles.disabled}`;
  const SLIDER_STYLE = `${styles.slider__temp} ${DISABLED_STYLE}`;

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
    <article className={styles.product}>
      <section className={styles.info}>
        <p className={`${styles.info__title} ${DISABLED_STYLE}`}>{name}</p>
        <p className={`${styles.info__temp} ${DISABLED_STYLE}`}>
          ({initMin} ~ {initMax} ºF)
          <button
            className={styles.info__btn}
            type="button"
            onClick={handleDisabled}
          >
            결품
          </button>
        </p>
      </section>
      <section className={styles.slider}>
        <p className={SLIDER_STYLE}>{currentMin} ºF</p>
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
        <p className={SLIDER_STYLE}>{currentMax} ºF</p>
      </section>
    </article>
  );
}

export default React.memo(RandomTemp);
