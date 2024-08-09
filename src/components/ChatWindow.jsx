import React, { useEffect, useState } from "react";
import styles from "./ChatWindow.module.css";
import { useSetUserName, useUserName } from "../store/user";
import { socket } from "../utils/server";
import ChatLogs from "./ChatLogs";

export default function ChatWindow() {
  const userName = useUserName();
  const setUserName = useSetUserName();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const onConnect = () => {
      socket.emit("joinAndLeave", { type: "join", userName });
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

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return (
    <section className={styles.section}>
      <p>채팅에 참여했습니다! 잠시만 기다려주세요.</p>
      <ChatLogs logs={logs} />
    </section>
  );
}
