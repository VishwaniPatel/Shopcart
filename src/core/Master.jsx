import React, { useEffect } from "react";
import { HeaderSection } from "./Header";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../service/ProductDataService";
const Master = () => {
  return (
    <>
      <HeaderSection />
      <Outlet></Outlet>
    </>
  );
};

export default Master;
