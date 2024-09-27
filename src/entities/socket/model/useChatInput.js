import { useState } from "react";
import { socket } from "../lib/socketClient";
import { useUserName } from "../../user";

export function useChatInput() {
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

  return { message, handleChange, handleSubmit };
}
