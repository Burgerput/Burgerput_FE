import React from "react";
import styles from "../styles.module.css";
import ChatLogs from "../chat-logs/ChatLogs";
import InputChatMessage from "../input-chat-message/InputChatMessage";
import { useSocket } from "../../../entities/socket";

export default function ChatWindow() {
  const logs = useSocket();

  return (
    <section className={styles.section}>
      {logs.length === 0 && (
        <p className={styles.desc}>채팅에 참여했습니다! 잠시만 기다려주세요.</p>
      )}
      <ChatLogs logs={logs} />
      <InputChatMessage disabled={logs.length === 0} />
    </section>
  );
}
