import axios from "axios";
import client from "./index";

export async function getUser() {
  return await axios
    .get("/data/user.json")
    .then((res) => res.data)
    .catch(console.error);
}
