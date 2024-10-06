import { useRef, useState } from "react";
import { useWatch } from "react-hook-form";

export function useRandomTemp({ idx, control, setValue }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const prevTemp = useRef([]);

  const minTempKey = `products[${idx}].min`;
  const maxTempKey = `products[${idx}].max`;

  const currentMin = useWatch({ control, name: minTempKey });
  const currentMax = useWatch({ control, name: maxTempKey });

  const handleDisabled = () => {
    setIsDisabled((prev) => {
      const newDisabledState = !prev;

      if (newDisabledState) {
        prevTemp.current = { currentMin, currentMax };
        setValue(minTempKey, 999);
        setValue(maxTempKey, 999);
      } else {
        setValue(minTempKey, prevTemp.current.currentMin);
        setValue(maxTempKey, prevTemp.current.currentMax);
      }

      return newDisabledState;
    });
  };

  const handleChange = (value) => {
    setValue(minTempKey, value[0]);
    setValue(maxTempKey, value[1]);
  };

  return {
    isDisabled,
    currentMin,
    currentMax,
    handleDisabled,
    handleChange,
  };
}
