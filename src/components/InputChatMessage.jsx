import React, { useState } from "react";
import { socket } from "../utils/server";
import { useUserName } from "../store/user";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        disabled={disabled}
      />
      <button disabled={disabled}>전송</button>
    </form>
  );
}
