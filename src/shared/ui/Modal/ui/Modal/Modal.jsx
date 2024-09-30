import React from "react";
import styles from "./Modal.module.css";
import BackDrop from "../BackDrop/BackDrop";
import { createPortal } from "react-dom";

export default function Modal({ children, onClose }) {
  if (typeof window === "undefined") return null;

  const element = document.getElementById("modal-root");

  return (
    <>
      {createPortal(
        <section className={styles.modal}>
          <BackDrop onClose={onClose} />
          <button className={styles.button} onClick={onClose}>
            닫기
          </button>
          {children}
        </section>,
        element
      )}
    </>
  );
}
