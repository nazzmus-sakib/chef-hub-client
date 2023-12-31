import React from "react";
import NavigationBar from "../pages/shared/NavigationBar";
import { Outlet } from "react-router-dom";
import Banner from "../pages/Home/Banner";
import ChefsData from "../pages/Home/chef/ChefsData";
import Services from "../pages/Home/Services";
import Contact from "../pages/Home/Contact";
import Footer from "../pages/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <ChefsData></ChefsData>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
