import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./components/RootLayout.jsx";
import { Login } from "./components/Login.jsx";
import { Products } from "./components/Products.jsx";
import { ProductDetail } from "./components/ProductDetail.jsx";
import { UserProvider } from "./context/UserContext";
import { BasketProvider } from "./context/BasketContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },

      {
        path: "products",
        children: [
          {
            index: true,
            element: <Products />,
          },

          {
            path: ":id",
            element: <ProductDetail />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BasketProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </BasketProvider>
    </UserProvider>
  </React.StrictMode>
);
