import React from "react";
import NavigationBar from "../pages/shared/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";

const LoginLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div style={{ minHeight: "calc(100vh - 144px)" }}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;
