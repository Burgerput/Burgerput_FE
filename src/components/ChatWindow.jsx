import React, { useEffect, useState } from "react";
import styles from "./ChatWindow.module.css";
import { useSetUserId, useSetUserName, useUserName } from "../store/user";
import { socket } from "../utils/server";
import ChatLogs from "./ChatLogs";
import InputChatMessage from "./InputChatMessage";

export default function ChatWindow() {
  const userName = useUserName();
  const setUserName = useSetUserName();
  const setUserId = useSetUserId();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const onConnect = () => {
      socket.emit("joinAndLeave", { type: "join", userName });
      setUserId(socket.id);
    };

    const onDisconnect = () => {
      setUserName("");
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.on("joinAndLeave", (data) => {
      setLogs((prev) => [...prev, { type: data.type, message: data.message }]);
    });

    socket.on("chat", (chatData) => {
      setLogs((prev) => [...prev, { type: "chat", ...chatData }]);
    });

    if (socket.connected) onConnect();

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("joinAndLeave");
      socket.off("chat");
    };
  }, []);

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
