import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Providers } from "./providers";
import { router } from "./routes";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Providers router={router} client={queryClient} />);
