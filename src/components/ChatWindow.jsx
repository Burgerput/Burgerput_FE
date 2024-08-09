import React, { useEffect } from "react";
import styles from "./ChatWindow.module.css";
import { useSetUserName, useUserName } from "../store/user";
import { socket } from "../utils/server";

export default function ChatWindow() {
  const userName = useUserName();
  const setUserName = useSetUserName();

  useEffect(() => {
    const onConnect = () => {
      socket.emit("joinAndLeave", { type: "join", userName });
    };

    const onDisconnect = () => {
      setUserName("");
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return <section className={styles.section}></section>;
}
