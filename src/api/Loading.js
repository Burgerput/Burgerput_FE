import client from "./index";

export async function getCurrentItems() {
  return await client
    .get("/loading")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
