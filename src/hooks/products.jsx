import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllFoods,
  getAllMachines,
  setCustomFoods,
  setCustomMachines,
} from "../api/Products";
import { useCustomProducts } from "../store/products";
import { useHandleSuccess } from "../store/uiState";

function dataMutation(queryKey, getItemFunc, setItemFunc, invalidateKeys) {
  const queryClient = useQueryClient();
  const products = useCustomProducts();
  const handleSuccess = useHandleSuccess();

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
          handleSuccess();
        },
      }
    );
  };

  return { productsQuery, handleSubmitProducts };
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
