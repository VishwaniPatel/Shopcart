import React from "react";
import { HeaderSection } from "./Header";
import { Outlet } from "react-router-dom";

const Master = () => {
  return (
    <>
      <HeaderSection />
      <Outlet></Outlet>
    </>
  );
};

export default Master;
