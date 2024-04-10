import { useQuery } from "@tanstack/react-query";
import {
  getCustomMachines,
  submitMachines,
  getCustomFoods,
  submitFoods,
} from "../api/Products";
import { useState } from "react";

export function useCustomProducts({ location, setProductsTemp }) {
  const [selectManager, setSelectManager] = useState("");
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleWarning = () => {
    setWarning(true);
    setTimeout(() => {
      setWarning(false);
    }, 1500);
  };

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
    warning,
    result,
    loading,
    products,
    setProducts,
    setResult,
  };
}

export function useCustomMachines() {
  const productsQuery = useQuery(["customMachines"], getCustomMachines, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const setProductsTemp = ({ selectManager, products, location }) =>
    submitMachines({
      mgrname: selectManager?.label,
      customMachine: products,
      time: location?.state,
    });

  return { productsQuery, setProductsTemp };
}

export function useCustomFoods() {
  const praoductsQuery = useQuery(["customFoods"], getCustomFoods, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const setProductsTemp = ({ selectManager, products, location }) =>
    submitFoods({
      mgrname: selectManager?.label,
      customFood: products,
      time: location?.stte,
    });

  return { productsQuery, setProductsTemp };
}
