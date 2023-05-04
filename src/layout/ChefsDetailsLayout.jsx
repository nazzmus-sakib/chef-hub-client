import React from "react";
import NavigationBar from "../pages/shared/NavigationBar";
import { Outlet } from "react-router-dom";

const ChefsDetailsLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default ChefsDetailsLayout;
