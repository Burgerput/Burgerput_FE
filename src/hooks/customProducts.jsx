import { useQuery } from "@tanstack/react-query";
import {
  getCustomMachines,
  submitMachines,
  getCustomFoods,
  submitFoods,
} from "../api/Products";
import { useState } from "react";
import { useHandleWaring, useSetLoading, useSetResult } from "../store/uiState";

function dataMutation(queryKey, getProductFunc, submitFunc, productKey) {
  const productsQuery = useQuery([queryKey], getProductFunc, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const setProductsTemp = ({ selectManager, products, location }) =>
    submitFunc({
      mgrname: selectManager?.label,
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
  const [selectManager, setSelectManager] = useState("");
  const [products, setProducts] = useState([]);
  const handleWarning = useHandleWaring();
  const setLoading = useSetLoading();
  const setResult = useSetResult();

  const handleSubmit = (e) => {
    e && e.preventDefault();
    const hasEmptyTemp = products.some((product) => !product.temp);

    if (hasEmptyTemp || selectManager.length === 0) {
      handleWarning();
      return;
    } else {
      setLoading(true);

      setProductsTemp({
        selectManager,
        products,
        location,
      })
        .then((res) => {
          setResult(res.data);
        })
        .finally(() => setLoading(false))
        .catch((error) => console.log(error));
    }
  };

  return {
    selectManager,
    setSelectManager,
    handleSubmit,
    products,
    setProducts,
  };
}
