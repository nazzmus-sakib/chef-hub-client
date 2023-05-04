import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import LoginLayout from "../layout/LoginLayout";
import ChefsDetailsLayout from "../layout/ChefsDetailsLayout";
import ChefDetails from "../pages/chef-details-page/ChefDetails";
import Services from "../pages/Home/Services";
import Blog from "../pages/blog/Blog";
import ErrorPage from "../pages/shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
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
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/home",
    element: <HomeLayout></HomeLayout>,
  },

  {
    path: "/chef-recipies",
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
