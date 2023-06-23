import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumbs";
import { Container } from "@mantine/core";
import useProducts from "../hook/useProducts";

const ProductPage = () => {
  const { productId } = useParams();
  const products = useProducts();
  console.log(productId);
  return (
    <Container size="xl">
      <Breadcrumb />
    </Container>
  );
};

export default ProductPage;
