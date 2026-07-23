import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import CreateId from "../pages/CreateId";
import Login from "../pages/Login";
import DetailedProduct from "../Components/DetailedProduct";
import AuthLayout from "../Layoutes/AuthLayout";
import MainLayout from "../Layoutes/MainLayout";
import DetailedProductpage from "../pages/DetailedProductpage";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "register",
          element: <CreateId />,
        },
      ],
    },
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "products",
          element: <Shop />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products/:id",
          element: <DetailedProductpage />,
        },
      ],
    }
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
