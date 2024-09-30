import React from "react";
import styles from "../styles.module.css";
import { BsSendFill } from "react-icons/bs";
import { useChatInput } from "../../../entities/socket";

export default function InputChatMessage({ disabled }) {
  const { message, handleChange, handleSubmit } = useChatInput;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="메세지를 입력해주세요."
        autoFocus
        disabled={disabled}
      />
      <button className={styles.button} disabled={disabled}>
        <BsSendFill />
      </button>
    </form>
  );
}
