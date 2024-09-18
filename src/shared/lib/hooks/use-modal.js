import { useState } from "react";

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
