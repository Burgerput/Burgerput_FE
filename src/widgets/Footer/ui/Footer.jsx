import React from "react";
import styles from "../styles.module.css";
import InputUserName from "../../../components/InputUserName";
import ChatWindow from "../../../components/ChatWindow";
import { socket } from "../../../utils/server";
import { UpdatedValueChecker } from "../../../features/updated-value-check";
import { DdayCounter } from "../../../features/dday-counter";
import { HowToUse } from "../../../features/how-to-use";
import { useUserName } from "../../../entities/user";
import { Modal, useModal } from "../../../shared/ui/Modal";

export default function Footer() {
  const userName = useUserName();

  const onSocketDisconnect = () => {
    socket.disconnect();
  };

  const { openModal, handleModalOpen, handleModalClose } =
    useModal(onSocketDisconnect);

  return (
    <footer className={styles.footer}>
      <article className={styles.tools}>
        <DdayCounter expiryDate="2024-12-31" />
        <HowToUse />
        <UpdatedValueChecker />
        <button className={styles.chat} onClick={handleModalOpen}>
          관리자에게 문의하기
        </button>
        {openModal && (
          <Modal onClose={handleModalClose}>
            {userName ? <ChatWindow /> : <InputUserName />}
          </Modal>
        )}
      </article>
      <p className={styles.copyright}>
        Copyright 2023. Etart, Frolip All Rights Reserved
      </p>
    </footer>
  );
}
