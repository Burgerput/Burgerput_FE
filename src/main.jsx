import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
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
    path: "*",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
