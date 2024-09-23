import { useState } from "react";
import { useSubmitActions } from "../../../ui-state";
import { useManagerState } from "../../../manager";

export function useSubmitRandomRange({ submitCustomTemp }) {
  const [submissionData, setSubmissionData] = useState(null);
  const { handleWarning, setLoading, setResult } = useSubmitActions();
  const manager = useManagerState();

  const handleSubmit = (data) => {
    setLoading(true);
    submitCustomTemp(data)
      .then((res) => setResult(res.data))
      .finally(() => setLoading(false))
      .catch((error) => {
        console.error(error);
        setResult("error");
      });
  };

  const onSubmitRandomRange = (products, time) => {
    if (manager === null || manager.length === 0) {
      handleWarning(1500, "매니저를 선택해주세요.");
      return;
    }

    const submissionPayload = { manager, products, time };

    setSubmissionData(submissionPayload);

    handleSubmit(submissionPayload);
  };

  const handleRetrySubmit = () => {
    if (!submissionData) return;

    handleSubmit(submissionData);
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
