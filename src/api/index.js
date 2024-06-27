import axios from "axios";
import { ReissueToken } from "./user";
import { redirect } from "react-router-dom";

const client = axios.create({
  // 로컬 테스트시 주석
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 600 * 1000,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
  withCredentials: true,
});

// API 요청 헤더에 AccessToken을 포함 시켜 전송.
client.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("AccessToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);

// 인증 정보가 없거나 잘못된 경우
client.interceptors.response.use(
  async (res) => {
    // 정상 범위에 있는 상태 코드일 경우
    return res;
  },
  async (error) => {
    const {
      config,
      response: { status, data },
    } = error;

    if (status === 401 && data.message === "InvalidToken") {
      localStorage.removeItem("AccessToken");
      throw redirect("/signin");
    }

    if (status === 401 && data.message === "TokenExpired") {
      const status = await ReissueToken();

      if (status === 200) {
        return client(config);
      } else {
        localStorage.removeItem("AccessToken");
        throw redirect("/signin");
      }
    }
  }
);

export default client;
