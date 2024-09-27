import { client } from "../../../../shared/api";

export async function getCustomTempMachine() {
  return await client
    .get("/back/cheatMachine")
    .then((res) => res.data)
    .catch((error) => console.error(error));
}

export async function getCustomTempFood() {
  return await client
    .get("/back/cheatFood")
    .then((res) => res.data)
    .catch((error) => console.error(error));
}

export async function setCustomTempMachine(machines) {
  await client.post("/back/cheatMachine", JSON.stringify(machines));
}

export async function setCustomTempFood(foods) {
  await client.post("/back/cheatFood", JSON.stringify(foods));
}

export async function submitMachines(machines) {
  return await client.post("/back/enter/machines", JSON.stringify(machines));
}

export async function submitFoods(foods) {
  return await client.post("/back/enter/foods", JSON.stringify(foods));
}
