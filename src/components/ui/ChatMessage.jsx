import React from "react";
import { useUserId } from "../../store/user";

export default function ChatMessage({ data }) {
  const { author, currentUserId, message } = data;
  const userId = useUserId();

  if (currentUserId === userId) {
    return <p>{message}</p>;
  }

  return (
    <div>
      <p>{author}</p>
      <p>{message}</p>
    </div>
  );
}
