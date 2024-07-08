import { redirect } from "react-router-dom";
import client from "./index";

export async function signIn(data) {
  return await client
    .post("/signin", data)
    .then((res) => {
      if (res.status === 200) {
        const AccessToken = res.data.accessToken;
        localStorage.setItem("AccessToken", AccessToken);

        return res.status;
      }
    })
    .catch((err) => {
      const { status, data } = err.response;

      if (status === 401) {
        return Promise.reject(data);
      }
    });
}

export async function ReissueToken() {
  return await client
    .post("/refresh-token") //
    .then((res) => {
      if (res.status === 200) {
        const AccessToken = res.data.accessToken;

        localStorage.setItem("AccessToken", AccessToken);

        return res.status;
      }
    })
    .catch((e) => {
      localStorage.removeItem("AccessToken");
      window.location.href = "/signin";
      return Promise.reject(error);
    });
}
