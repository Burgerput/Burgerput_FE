import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  getAllFoods,
  getAllMachines,
  setCustomFoods,
  setCustomMachines,
} from "../api/Products";

function dataMutation(queryKey, getItemFunc, setItemFunc, invalidateKeys) {
  const queryClient = useQueryClient();
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState();

  const productsQuery = useQuery([queryKey], getItemFunc, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const addCustomProducts = useMutation(
    ({ products }) => setItemFunc(products),
    {
      onSuccess: () => {
        invalidateKeys.forEach((key) => queryClient.invalidateQueries([key]));
      },
    }
  );

  const handleSubmitProducts = (e) => {
    e.preventDefault();
    addCustomProducts.mutate(
      { products },
      {
        onSuccess: () => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(null);
          }, 3000);
        },
      }
    );
  };

  return { productsQuery, handleSubmitProducts, success, setProducts };
}

export function useMachines() {
  return dataMutation("machines", getAllMachines, setCustomMachines, [
    "customMachines",
    "customMachinesTemp",
    "machines",
  ]);
}

export function useFoods() {
  return dataMutation("foods", getAllFoods, setCustomFoods, [
    "customFoods",
    "customFoodsTemp",
    "foods",
  ]);
}
