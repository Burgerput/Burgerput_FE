import React, { useState } from "react";
import styles from "./Footer.module.css";
import HowToUse from "./HowToUse";
import DdayCounter from "./ui/DdayCounter";
import UpdatedValueChecker from "./UpdatedValueChecker";
import Socket from "./Socket";
import Modal from "./ui/Modal";

export default function Footer() {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
  return (
    <footer className={styles.footer}>
      <article className={styles.tools}>
        <DdayCounter expiryDate="2024-12-31" />
        <HowToUse />
        <UpdatedValueChecker />
        <button onClick={handleModalOpen}>모달 열기</button>
        {openModal && (
          <Modal onClose={handleModalClose}>모달이 열렸어요.</Modal>
        )}
      </article>
      <p className={styles.copyright}>
        Copyright 2023. Etart, Frolip All Rights Reserved
      </p>
    </footer>
  );
}
