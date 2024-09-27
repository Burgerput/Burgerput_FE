import { client } from "../../../../shared/api";

export async function getCustomMachines() {
  return await client
    .get("/back/enter/machines")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function getCustomFoods() {
  return await client
    .get("/back/enter/foods")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function submitMachines(machines) {
  return await client.post("/back/enter/machines", JSON.stringify(machines));
}

export async function submitFoods(foods) {
  return await client.post("/back/enter/foods", JSON.stringify(foods));
}
