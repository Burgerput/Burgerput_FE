import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSubmitActions } from "../../../ui-state";
import { useManagerState } from "../../../manager";

export function useCustomProducts({ setProductsTemp }) {
  // submit data
  const [submissionData, setSubmissionData] = useState(null);
  const location = useLocation();
  const manager = useManagerState();

  // UI State Actions.
  const { handleWarning, setLoading, setResult } = useSubmitActions();

  const onSubmit = (formData) => {
    if (manager === null || manager.length === 0) {
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
