import React, { useState } from "react";
import styles from "./InputChatMessage.module.css";
import { socket } from "../utils/server";
import { useUserName } from "../store/user";
import { BsSendFill } from "react-icons/bs";

export default function InputChatMessage({ disabled }) {
  const [message, setMessage] = useState("");
  const userName = useUserName();

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("chat", {
      currentUserId: socket.id,
      author: userName,
      message,
    });

    setMessage("");
  };

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
