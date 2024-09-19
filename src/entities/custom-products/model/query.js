import { useQuery } from "@tanstack/react-query";
import {
  getCustomFoods,
  getCustomMachines,
  submitFoods,
  submitMachines,
} from "../../../api/Products";

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
