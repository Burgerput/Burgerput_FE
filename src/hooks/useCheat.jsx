import { useRef, useState } from "react";
import {
  getCustomTempFood,
  getCustomTempMachine,
  setCustomTempFood,
  setCustomTempMachine,
  submitFoods,
  submitMachines,
} from "../api/Products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRandomTemp } from "./useRandomTemp";
import { useManagerState } from "../store/manager";

export function useCheatProducts({ setCustomTemp, submitCustomTemp }) {
  const [products, setProducts] = useState("");
  const manager = useManagerState();
  const [result, setResult] = useState(false);
  const [status, setStatus] = useState({
    warning: null,
    success: false,
    loading: false,
  });

  const setTime = useRef();
  const { generateRandomTemp } = useRandomTemp();

  const handleWarning = (type) => {
    type === "missing" &&
      setStatus((prev) => ({ ...prev, warning: "missing" }));
    type === "manager" &&
      setStatus((prev) => ({ ...prev, warning: "manager" }));
    setTimeout(() => {
      setStatus((prev) => ({ ...prev, warning: null }));
    }, 1500);
  };

  const handleSave = (e) => {
    e.preventDefault();

    const hasMissing = products.some((product) => product.min === 999);

    if (hasMissing) {
      handleWarning("missing");
      return;
    } else {
      setCustomTemp.mutate(
        { products },
        {
          onSuccess: () => {
            setStatus((prev) => ({ ...prev, success: true }));
            setTimeout(() => {
              setStatus((prev) => ({ ...prev, success: false }));
            }, 4000);
          },
        }
      );
    }
  };

  const handleSubmit = (e) => {
    e && e.preventDefault();

    const newProducts = generateRandomTemp(products);
    const time = setTime?.current;

    if (!manager) {
      handleWarning("manager");
      return;
    }

    setStatus((prev) => ({ ...prev, loading: true }));
    submitCustomTemp({
      manager,
      newProducts,
      time,
    })
      .then((res) => {
        setResult(res.data);
      })
      .finally(() => setStatus((prev) => ({ ...prev, loading: false })))
      .catch(console.error);
  };

  return {
    handleSave,
    handleSubmit,
    setProducts,
    setResult,
    products,
    status,
    result,
    setTime,
  };
}
