import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import LoginLayout from "../layout/LoginLayout";
import ChefsDetailsLayout from "../layout/ChefsDetailsLayout";
import ChefDetails from "../pages/chef-details-page/ChefDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/home",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "/chef-details",
    element: <ChefsDetailsLayout></ChefsDetailsLayout>,
    children: [
      {
        path: ":id",
        element: <ChefDetails></ChefDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/chefs-data/${params.id}`),
      },
    ],
  },
]);

export default router;
