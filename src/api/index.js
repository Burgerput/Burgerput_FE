import axios from "axios";

const client = axios.create({
  // 로컬 테스트시 주석
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 600 * 1000,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
  },
});

export default client;
