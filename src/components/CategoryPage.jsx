import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumbs";
import { Container } from "@mantine/core";
import useProducts from "../hook/useProducts";
const CategoryPage = () => {
  const { categoryId } = useParams();
  const products = useProducts();
  const categoryProducts = products.filter((res) => {
    return res.categoryId == categoryId;
  });
  console.log(categoryProducts);
  return (
    <Container size="xl">
      <Breadcrumb />
    </Container>
  );
};

export default CategoryPage;
