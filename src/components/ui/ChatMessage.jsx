import React from "react";

export default function ChatMessage({ data }) {
  const { author, message } = data;
  return (
    <div>
      <p>{author}</p>
      <p>{message}</p>
    </div>
  );
}
