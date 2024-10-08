import axios from "axios";

export const client = axios.create({
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

    if (status === 401 && data === "InvalidToken") {
      localStorage.removeItem("AccessToken");
      window.location.href = "/signin";
      return Promise.reject(error);
    }

    if (status === 401 && data === "TokenExpired") {
      const status = await ReissueToken();

      if (status === 200) {
        return client(config);
      } else {
        localStorage.removeItem("AccessToken");
        window.location.href = "/signin";
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

async function ReissueToken() {
  return await client
    .post("/refresh-token") //
    .then((res) => {
      if (res.status === 200) {
        const AccessToken = res.data.accessToken;

        localStorage.setItem("AccessToken", AccessToken);

        return res.status;
      }
    })
    .catch(() => {
      localStorage.removeItem("AccessToken");
      window.location.href = "/signin";
      return Promise.reject(error);
    });
}
