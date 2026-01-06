import { useState } from "react";

import type { InitialValues } from "../interfaces/product-card.interface";

export const useProduct = (initialValues?: InitialValues) => {
  const [count, setCount] = useState(initialValues?.count || 0);

  const increaseBy = (value: number) => {
    let newValue = Math.max(0, count + value);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCount(newValue);
  };

  const reset = () => {
    setCount(initialValues?.count || 0);
  };

  return {
    count,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues.maxCount === count,

    increaseBy,
    reset,
  };
};
