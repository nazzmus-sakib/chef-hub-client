import React from "react";
import NavigationBar from "../pages/shared/NavigationBar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/shared/Footer";

const ChefsDetailsLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div style={{ minHeight: "calc(100vh - 144px)" }}>
        <Outlet></Outlet>
      </div>
      <ScrollRestoration></ScrollRestoration>
      <Footer></Footer>
    </div>
  );
};

export default ChefsDetailsLayout;
