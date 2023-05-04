import React from "react";
import NavigationBar from "../pages/shared/NavigationBar";
import { Outlet } from "react-router-dom";
import Banner from "../pages/Home/Banner";
import ChefsData from "../pages/Home/chef/ChefsData";

const MainLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <ChefsData></ChefsData>
    </div>
  );
};

export default MainLayout;
