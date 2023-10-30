import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../core/Login";
import Registration from "../core/Registration";
import Home from "../pages/Home";
import AddProductForm from "../components/AddProductForm";
import Master from "../core/Master";
import ProductPage from "../components/ProductPage";
import CategoryPage from "../components/CategoryPage";
import CartData from "../components/CartData";
import ManageCategoryPage from "../components/ManageCategoryPage";
import AddSubCategoryPage from "../components/AddSubCategory";
const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="" element={<Master />}>
        <Route path="" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/add-product" element={<AddProductForm />}></Route>
        <Route path="/category/:categoryId" element={<CategoryPage />}></Route>
        <Route
          path="/category/:categoryId/product-detail/:productId"
          element={<ProductPage />}
        />
        <Route path="/cart" element={<CartData />}></Route>
      </Route>
      <Route path="/manage-category" element={<ManageCategoryPage />}></Route>
      <Route path="/add-subcategory" element={<AddSubCategoryPage />}></Route>
    </Routes>
  );
};

export default Routing;
