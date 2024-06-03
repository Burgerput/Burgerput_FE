import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import AdminProfile from "./pages/AdminProfile";
import CustomMachines from "./pages/CustomMachines";
import CustomFoods from "./pages/CustomFoods";
import EditManagers from "./pages/EditManagers";
import InputMachineTemp from "./pages/InputMachineTemp";
import InputFoodTemp from "./pages/InputFoodTemp";
import NotFound from "./pages/NotFound";
import CheatModeGuide from "./pages/CheatModeGuide";
import RandomMachineTemp from "./pages/RandomMachineTemp";
import RandomFoodTemp from "./pages/RandomFoodTemp";
import SignIn from "./pages/SignIn";

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
        element: <CustomMachines />,
        loader: checkAuth,
      },
      { path: "select/foods", element: <CustomFoods />, loader: checkAuth },
      { path: "select/managers", element: <EditManagers />, loader: checkAuth },
      {
        path: "zenput/machines",
        element: <InputMachineTemp />,
        loader: checkAuth,
      },
      { path: "zenput/foods", element: <InputFoodTemp />, loader: checkAuth },
      { path: "cheat/help", element: <CheatModeGuide />, loader: checkAuth },
      {
        path: "cheat/machine",
        element: <RandomMachineTemp />,
        loader: checkAuth,
      },
      { path: "cheat/food", element: <RandomFoodTemp />, loader: checkAuth },
    ],
  },
  {
    path: "signin",
    element: <SignIn />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
