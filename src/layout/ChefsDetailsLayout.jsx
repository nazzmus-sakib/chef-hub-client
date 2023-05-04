import React from "react";
import NavigationBar from "../pages/shared/NavigationBar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/shared/Footer";

const ChefsDetailsLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <ScrollRestoration></ScrollRestoration>
      <Footer></Footer>
    </div>
  );
};

export default ChefsDetailsLayout;
