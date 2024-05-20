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
import { useLocation } from "react-router-dom";

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

export function useCustomProducts({ setProductsTemp }) {
  // submit data
  const [submissionData, setSubmissionData] = useState(null);
  const location = useLocation();
  const manager = useManagerState();

  // UI State.
  const handleWarning = useHandleWaring();
  const setLoading = useSetLoading();
  const setResult = useSetResult();

  const onSubmit = (formData) => {
    if (manager === null || manager.length < 0) {
      handleWarning();
      return;
    }

    const products = formData.products;

    const submissionPayload = { manager, products, location };

    // 제출 후 에러 발생시 사용될 데이터 저장.
    setSubmissionData(submissionPayload);
    setLoading(true);

    setProductsTemp(submissionPayload)
      .then((res) => {
        setResult(res.data);
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        console.error(error);
        setResult("error");
      });
  };

  const handleRetrySubmit = () => {
    if (!submissionData) return;

    setLoading(true);
    setProductsTemp(submissionData)
      .then((res) => {
        setResult(res.data);
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        console.error(error);
        setResult("error");
      });
  };

  return {
    location,
    onSubmit,
    handleRetrySubmit,
  };
}
