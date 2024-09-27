import { useEffect, useState } from "react";
import { socket } from "../../socket";
import { useSetUserId, useSetUserName, useUserName } from "../../user";

export function useSocket() {
  const userName = useUserName();
  const setUserName = useSetUserName();
  const setUserId = useSetUserId();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const onConnect = () => {
      socket.emit("join", userName);
      setUserId(socket.id);
    };

    const onDisconnect = () => {
      setUserName("");
    };

    const handleSetInfoLogs = (data) => {
      setLogs((prev) => [...prev, { type: data.type, message: data.message }]);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.on("join", (data) => handleSetInfoLogs(data));
    socket.on("leave", (data) => handleSetInfoLogs(data));

    socket.on("chat", (chatData) => {
      setLogs((prev) => [...prev, { type: "chat", ...chatData }]);
    });

    if (socket.connected) onConnect();

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("join");
      socket.off("leave");
      socket.off("chat");
    };
  }, []);

  return logs;
}
