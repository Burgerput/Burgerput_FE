import { io } from "socket.io-client";

const URL = "http://3.35.254.106:8080/";

export const socket = io(URL, {
  autoConnect: false,
});
