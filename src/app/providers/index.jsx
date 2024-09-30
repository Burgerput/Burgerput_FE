import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

export const Providers = ({ router, client }) => {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
