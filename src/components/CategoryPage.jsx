import React from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumbs";
import { Container, SimpleGrid } from "@mantine/core";
import useProducts from "../hook/useProducts";
import ProductCard from "../shared/ProductCard";
const CategoryPage = () => {
  const { categoryId } = useParams();
  const products = useProducts();
  const categoryProducts = products.filter((res) => {
    return res.categoryId == categoryId;
  });
  const product = categoryProducts.map((item, index) => (
    <Link to={"/product-detail/" + item.id} key={item.id}>
      <ProductCard product={item} />
    </Link>
  ));
  return (
    <Container size="xl">
      <Breadcrumb />
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {product}
      </SimpleGrid>
    </Container>
  );
};

export default CategoryPage;
