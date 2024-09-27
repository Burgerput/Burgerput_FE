import React, { useEffect, useRef } from "react";
import InfoMessage from "./InfoMessage";
import ChatMessage from "./ChatMessage";
import styles from "../styles.module.css";

export default function ChatLogs({ logs }) {
  const scrollRef = useRef();

  const scrollToBottom = () => {
    const scrollHeight = scrollRef?.current.scrollHeight;
    scrollRef.current?.scrollTo({ top: scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [logs]);

  return (
    <ul className={styles.chats} ref={scrollRef}>
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
