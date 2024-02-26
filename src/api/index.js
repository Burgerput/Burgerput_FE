import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 600 * 1000,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default client;
