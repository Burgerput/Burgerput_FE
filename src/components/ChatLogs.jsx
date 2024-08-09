import React from "react";
import InfoMessage from "./ui/InfoMessage";
import ChatMessage from "./ui/ChatMessage";

export default function ChatLogs({ logs }) {
  return (
    <article>
      <ul>
        {logs?.map((log, idx) => (
          <li key={idx}>
            {log.type === "info" ? (
              <InfoMessage message={log.message} />
            ) : (
              <ChatMessage data={log} />
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
