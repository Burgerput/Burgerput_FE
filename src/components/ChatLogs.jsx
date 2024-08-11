import React from "react";
import InfoMessage from "./ui/InfoMessage";
import ChatMessage from "./ui/ChatMessage";
import styles from "./ChatLogs.module.css";

export default function ChatLogs({ logs }) {
  return (
    <ul className={styles.chats}>
      {logs?.map((log, idx) => (
        <li className={styles.message} key={idx}>
          {log.type === "info" ? (
            <InfoMessage message={log.message} />
          ) : (
            <ChatMessage data={log} />
          )}
        </li>
      ))}
    </ul>
  );
}
