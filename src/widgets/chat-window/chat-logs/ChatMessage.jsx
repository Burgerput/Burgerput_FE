import React from "react";
import styles from "../styles.module.css";
import { useUserId } from "../../../entities/user";

export default function ChatMessage({ data }) {
  const { author, currentUserId, message } = data;
  const userId = useUserId();

  if (currentUserId === userId) {
    return (
      <div className={styles.sendedBox}>
        <p className={styles.sendMessage}>{message}</p>
      </div>
    );
  }

  return (
    <div className={styles.receivedBox}>
      <p className={styles.author}>{author}</p>
      <p className={styles.receivedMessage}>{message}</p>
    </div>
  );
}
