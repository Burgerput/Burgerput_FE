import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCustomTempFood,
  getCustomTempMachine,
  setCustomTempFood,
  setCustomTempMachine,
  submitFoods,
  submitMachines,
} from "../api/Products";
import { useSubmitActions } from "../store/uiState";
import { useState } from "react";
import { useManagerState } from "../store/manager";

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
  const { handleSuccess } = useSubmitActions();

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

export function useSubmitRandomRange({ submitCustomTemp }) {
  const [submissionData, setSubmissionData] = useState(null);
  const { handleWarning, setLoading, setResult } = useSubmitActions();
  const manager = useManagerState();

  const onSubmitRandomRange = (products, time) => {
    if (manager === null || manager.length === 0) {
      handleWarning(1500, "매니저를 선택해주세요.");
      return;
    }

    const submissionPayload = { manager, products, time };

    setSubmissionData(submissionPayload);
    setLoading(true);

    submitCustomTemp(submissionPayload)
      .then((res) => setResult(res.data))
      .finally(() => setLoading(false))
      .catch((error) => {
        console.error(error);
        setResult("error");
      });
  };

  const handleRetrySubmit = () => {
    if (!submissionData) return;

    setLoading(true);
    submitCustomTemp(submissionData)
      .then((res) => setResult(res.data))
      .finally(() => setLoading(false))
      .catch((error) => {
        console.error(error);
        setResult("error");
      });
  };

  return { onSubmitRandomRange, handleRetrySubmit };
}

export function useSaveRandomRange({ setCustomTemp }) {
  const { handleWarning } = useSubmitActions();

  const onSaveRandomRange = (products) => {
    const hasDisabled = products.some((product) => product.min === 999);

    if (hasDisabled) {
      handleWarning(1500, "결품 범위는 저장할 수 없습니다.");
      return;
    }

    setCustomTemp.mutate({ products });
  };

  return { onSaveRandomRange };
}
