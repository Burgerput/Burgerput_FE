import { client } from "../../../shared/api";

export async function getAllMachines() {
  return await client
    .get("/back/select/machines")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function getAllFoods() {
  return await client
    .get("/back/select/foods")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function setCustomMachines(customMachines) {
  await client.post("/back/select/machines", JSON.stringify(customMachines));
}

export async function setCustomFoods(customFoods) {
  await client.post("/back/select/foods", JSON.stringify(customFoods));
}
