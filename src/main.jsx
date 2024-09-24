import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import AdminProfile from "./pages/AdminProfile";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import { SelectFoods, SelectMachines } from "./pages/select-products";
import { InputFoodTemp, InputMachineTemp } from "./pages/input-temp";
import {
  RandomFoodTemp,
  RandomMachineTemp,
  RandomTempGuide,
} from "./pages/random-temp";
import { EditManagers } from "./pages/edit-managers";

const checkAuth = () => {
  const token = localStorage.getItem("AccessToken");

  if (!token) {
    throw redirect("/signin");
  }

  return token;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    loader: checkAuth,
    children: [
      { index: true, path: "/", element: <Main />, loader: checkAuth },
      { path: "address", element: <AdminProfile />, loader: checkAuth },
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
