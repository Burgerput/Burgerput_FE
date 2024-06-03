import axios from "axios";
import client from "./index";

export async function signIn(data) {
  await client
    .post("/signin", data)
    .then((res) => {
      const { accessToken, refreshToken } = res.data;

      localStorage.setItem("AccessToken", accessToken);
      localStorage.setItem("RefreshToken", refreshToken);

      return res.data;
    })
    .catch(console.error);
}
