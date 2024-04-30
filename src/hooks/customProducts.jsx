import { useQuery } from "@tanstack/react-query";
import {
  getCustomMachines,
  submitMachines,
  getCustomFoods,
  submitFoods,
} from "../api/Products";
import { useState } from "react";
import { useHandleWaring, useSetLoading, useSetResult } from "../store/uiState";
import { useManagerState } from "../store/manager";

function dataMutation(queryKey, getProductFunc, submitFunc, productKey) {
  const productsQuery = useQuery([queryKey], getProductFunc, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const setProductsTemp = ({ manager, products, location }) =>
    submitFunc({
      mgrname: manager?.label,
      [productKey]: products,
      time: location?.state,
    });

  return { productsQuery, setProductsTemp };
}

export function useCustomMachines() {
  return dataMutation(
    "customMachines",
    getCustomMachines,
    submitMachines,
    "customMachine"
  );
}

export function useCustomFoods() {
  return dataMutation("customFoods", getCustomFoods, submitFoods, "customFood");
}

export function useCustomProducts({ location, setProductsTemp }) {
  const [products, setProducts] = useState([]);
  const handleWarning = useHandleWaring();
  const manager = useManagerState();
  const setLoading = useSetLoading();
  const setResult = useSetResult();

  const handleSubmit = (e) => {
    e && e.preventDefault();
    const hasEmptyTemp = products.some((product) => !product.temp);

    if (hasEmptyTemp || manager === null) {
      handleWarning();
      return;
    }

    setLoading(true);

    setProductsTemp({
      manager,
      products,
      location,
    })
      .then((res) => {
        setResult(res.data);
      })
      .finally(() => setLoading(false))
      .catch(console.error);
  };

  return {
    handleSubmit,
    products,
    setProducts,
  };
}
