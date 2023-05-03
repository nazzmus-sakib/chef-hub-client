import React from "react";
import NavigationBar from "../pages/shared/NavigationBar";
import { Outlet } from "react-router-dom";
import Banner from "../pages/Home/Banner";

const MainLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
    </div>
  );
};

export default MainLayout;
