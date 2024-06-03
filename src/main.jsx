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
import { getUser } from "./api/user";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    loader: async () => {
      const data = await getUser();

      const token = data?.AccessToken;

      if (!token) {
        throw redirect("/signin");
      }

      return data;
    },
    children: [
      { index: true, path: "/", element: <Main /> },
      { path: "address", element: <AdminProfile /> },
      { path: "select/machines", element: <CustomMachines /> },
      { path: "select/foods", element: <CustomFoods /> },
      { path: "select/managers", element: <EditManagers /> },
      { path: "zenput/machines", element: <InputMachineTemp /> },
      { path: "zenput/foods", element: <InputFoodTemp /> },
      { path: "cheat/help", element: <CheatModeGuide /> },
      { path: "cheat/machine", element: <RandomMachineTemp /> },
      { path: "cheat/food", element: <RandomFoodTemp /> },
    ],
  },
  {
    path: "signin",
    element: <SignIn />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
