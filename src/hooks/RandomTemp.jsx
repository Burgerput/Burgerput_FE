import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCustomTempFood,
  getCustomTempMachine,
  setCustomTempFood,
  setCustomTempMachine,
  submitFoods,
  submitMachines,
} from "../api/Products";
import { useHandleSuccess } from "../store/uiState";

function dataMutation(
  queryKey,
  getItemFunc,
  setCustomTempFunc,
  submitFunc,
  productKey
) {
  const { data } = useQuery([queryKey], getItemFunc, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const queryClient = useQueryClient();
  const handleSuccess = useHandleSuccess();

  const setCustomTemp = useMutation(
    ({ products }) => setCustomTempFunc(products),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey]);
        handleSuccess();
      },
    }
  );

  const submitCustomTemp = ({ manager, products, time }) =>
    submitFunc({
      mgrname: manager?.label,
      [productKey]: products,
      time,
    });

  return { data, setCustomTemp, submitCustomTemp };
}

export function useRandomMachineTemp() {
  return dataMutation(
    "randomMachineTemp",
    getCustomTempMachine,
    setCustomTempMachine,
    submitMachines,
    "customMachine"
  );
}

export function useRandomFoodTemp() {
  return dataMutation(
    "randomFoodTemp",
    getCustomTempFood,
    setCustomTempFood,
    submitFoods,
    "customFood"
  );
}
