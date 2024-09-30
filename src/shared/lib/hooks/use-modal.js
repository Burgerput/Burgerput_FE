import { useState } from "react";
import { useSubmitActions } from "../../../entities/ui-state";

export function useModal(onCloseCallback) {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);

    if (typeof onCloseCallback === "function") onCloseCallback();
  };

  return { openModal, handleModalOpen, handleModalClose };
}

export function useModalWithTemp(handleRetrySubmit) {
  const { setResult } = useSubmitActions();

  const handleModalClose = () => {
    setResult(false);
  };

  const handleRetry = () => {
    handleRetrySubmit();
    setResult(false);
  };

  return { handleModalClose, handleRetry };
}
