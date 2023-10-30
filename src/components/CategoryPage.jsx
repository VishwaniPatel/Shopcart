import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BreadcrumbsUI from "./Breadcrumbs";
import { Container, Flex, Select, SimpleGrid } from "@mantine/core";
import useProducts from "../hook/useProducts";
import ProductCard from "../shared/ProductCard";
import useSubCategories from "../hook/useSubcategories";
import FilterProductData from "./FilterProducts";
import TopSubCategories from "../layout/TopSubCategories";
const CategoryPage = () => {
  // get category id using params
  const { categoryId } = useParams();
  // const [filteredData, setFilteredData] = useState([]);
  const subcategories = useSubCategories();
  const [subCategoryValue, setSubCategoryValue] = useState("");
  const products = useProducts();
  // filter products for selected category id
  const categoryProducts = products.filter((res) => {
    return res.categoryId == categoryId;
  });

  // Callback function to handle data received from the child component
  const handleSubCategory = (value) => {
    setSubCategoryValue(value);
  };

  return (
    <Container size="xl">
      <Flex align={"center"} justify={"space-between"}>
        <BreadcrumbsUI />
        <FilterProductData id={categoryId} setValue={handleSubCategory} />
      </Flex>
      <TopSubCategories categoryId={categoryId} />
      <SimpleGrid mt={20} cols={4} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {subCategoryValue
          ? categoryProducts
              .filter((response) => response.subCategoryId == subCategoryValue)
              .map((data) => {
                return <ProductCard product={data} key={data.id} />;
              })
          : categoryProducts.map((item) => (
              <ProductCard product={item} key={item.id} />
            ))}
      </SimpleGrid>
    </Container>
  );
};

export default CategoryPage;
