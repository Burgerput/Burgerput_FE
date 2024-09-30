import { client } from "../../../shared/api";

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
