import React from "react";
import { Link, useParams } from "react-router-dom";
import BreadcrumbsUI from "./Breadcrumbs";
import { Container, SimpleGrid } from "@mantine/core";
import useProducts from "../hook/useProducts";
import ProductCard from "../shared/ProductCard";
const CategoryPage = () => {
  // get categort id using params
  const { categoryId } = useParams();
  const products = useProducts();
  // filter products for selected category id
  const categoryProducts = products.filter((res) => {
    return res.categoryId == categoryId;
  });
  //  diplay all products for selected category
  const product = categoryProducts.map((item) => (
    <ProductCard product={item} key={item.id} />
  ));
  return (
    <Container size="xl">
      <BreadcrumbsUI />
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {product}
      </SimpleGrid>
    </Container>
  );
};

export default CategoryPage;
