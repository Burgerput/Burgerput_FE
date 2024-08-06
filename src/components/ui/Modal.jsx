import React from "react";
import { createPortal } from "react-dom";
import BackDrop from "./BackDrop";

export default function Modal({ children, onClose }) {
  if (typeof window === "undefined") return null;

  const element = document.getElementById("modal-root");

  return (
    <>
      {createPortal(
        <section>
          <BackDrop onClose={onClose} />
          <button onClick={onClose}>닫기</button>
          {children}
        </section>,
        element
      )}
    </>
  );
}
