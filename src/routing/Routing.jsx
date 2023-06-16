import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../core/Login";
import Registration from "../core/Registration";
import Home from "../pages/Home";
import AddProductForm from "../components/AddProductForm";
import Master from "../core/Master";
const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="" element={<Master />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/add-product" element={<AddProductForm />}></Route>
      </Route>
    </Routes>
  );
};

export default Routing;
