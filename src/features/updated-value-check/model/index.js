import { client } from "../../../shared/api";

// 달라진 목록을 받아오는 api
export async function getDiffValue() {
  return await client
    .get("/loading/result")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
