import { client } from "../../../shared/api";

export async function getManagerList() {
  return await client
    .get("/back/managers")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function addManager(manager) {
  await client.post("/back/managers", JSON.stringify(manager));
}

export async function deleteManger(manager) {
  await client.post("/back/manager", JSON.stringify(manager));
}

export async function getAccounts() {
  return await client
    .get("/back/accounts")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function submitAccounts(accounts) {
  await client.post("/back/accounts", JSON.stringify(accounts));
}
