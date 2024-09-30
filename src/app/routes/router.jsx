import { createBrowserRouter, redirect } from "react-router-dom";
import { NotFound } from "../../pages/not-found";
import { EditAdminProfile } from "../../pages/edit-admin-profile";
import { EditManagers } from "../../pages/edit-managers";
import { InputFoodTemp, InputMachineTemp } from "../../pages/input-temp";
import {
  RandomFoodTemp,
  RandomMachineTemp,
  RandomTempGuide,
} from "../../pages/random-temp";
import { SelectFoods, SelectMachines } from "../../pages/select-products";
import { SignIn } from "../../pages/sign-in";
import App from "../App";

const checkAuth = () => {
  const token = localStorage.getItem("AccessToken");

  if (!token) {
    throw redirect("/signin");
  }

  return token;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    loader: checkAuth,
    children: [
      { path: "address", element: <EditAdminProfile />, loader: checkAuth },
      {
        path: "select/machines",
        element: <SelectMachines />,
        loader: checkAuth,
      },
      { path: "select/foods", element: <SelectFoods />, loader: checkAuth },
      { path: "select/managers", element: <EditManagers />, loader: checkAuth },
      {
        path: "zenput/machines",
        element: <InputMachineTemp />,
        loader: checkAuth,
      },
      { path: "zenput/foods", element: <InputFoodTemp />, loader: checkAuth },
      {
        path: "zenput/random/guide",
        element: <RandomTempGuide />,
        loader: checkAuth,
      },
      {
        path: "zenput/random/machine",
        element: <RandomMachineTemp />,
        loader: checkAuth,
      },
      {
        path: "zenput/random/food",
        element: <RandomFoodTemp />,
        loader: checkAuth,
      },
    ],
  },
  {
    path: "signin",
    element: <SignIn />,
  },
]);
