import client from "./index";

// 기기 목록을 받아오는 api
export async function getAllMachines() {
  return await client
    .get("/back/select/machines")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

// 식품 목록을 받아오는 api
export async function getAllFoods() {
  return await client
    .get("/back/select/foods")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

// 선택한 기기 목록을 전송하는 api
export async function setCustomMachines(customMachines) {
  await client.post("/back/select/machines", JSON.stringify(customMachines));
}

// 선택한 식품 목록을 전송하는 api
export async function setCustomFoods(customFoods) {
  await client.post("/back/select/foods", JSON.stringify(customFoods));
}

// 선택한 기기 목록을 받아오는 api
export async function getCustomMachines() {
  return await client
    .get("/back/enter/machines")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

// 완료된 기기 온도 값을 전달하는 api
export async function submitMachines(machines) {
  return await client.post("/back/enter/machines", JSON.stringify(machines));
}

// 선택한 식품 목록을 받아오는 api
export async function getCustomFoods() {
  return await client
    .get("/back/enter/foods")
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

// 완료된 식품 온도 값을 전달하는 api
export async function submitFoods(foods) {
  return await client.post("/back/enter/foods", JSON.stringify(foods));
}

// 기기 최종 제출을 요청하는 api
export async function submitResultMachines() {
  await client.get("/back/msubmit");
}

// 식품 최종 제출을 요청하는 api
export async function submitResultFoods() {
  await client.get("/back/fsubmit");
}

// 저장된 기기 온도 범위를 요청하는 api
export async function getCustomTempMachine() {
  return await client
    .get("/back/cheatMachine")
    .then((res) => res.data)
    .catch((error) => console.error(error));
}

// 저장된 식품 온도 범위를 요청하는 api
export async function getCustomTempFood() {
  return await client
    .get("/back/cheatFood")
    .then((res) => res.data)
    .catch((error) => console.error(error));
}

// 지정한 기기 온도 범위를 저장하는 api
export async function setCustomTempMachine(machines) {
  await client.post("/back/cheatMachine", JSON.stringify(machines));
}

// 지정한 식품 온도 범위를 저장하는 api
export async function setCustomTempFood(foods) {
  await client.post("/back/cheatFood", JSON.stringify(foods));
}
