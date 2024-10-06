import React from "react";
import styles from "../styles.module.css";
import Slider from "rc-slider";
import { useRandomTemp } from "../lib/hooks/useRandomTemp";
import "rc-slider/assets/index.css";

export default function RandomTemp({ idx, product, control, setValue }) {
  const { initMax, initMin, name } = product;

  const { isDisabled, currentMin, currentMax, handleDisabled, handleChange } =
    useRandomTemp({ idx, setValue, control });

  const DISABLED_STYLE = `${isDisabled && styles.disabled}`;
  const SLIDER_STYLE = `${styles.slider__temp} ${DISABLED_STYLE}`;

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
        <Slider
          range
          disabled={isDisabled}
          value={[currentMin, currentMax]}
          onChange={handleChange}
          min={initMin}
          max={initMax}
          allowCross={false}
        />
        <p className={SLIDER_STYLE}>{currentMax} ºF</p>
      </section>
    </article>
  );
}
