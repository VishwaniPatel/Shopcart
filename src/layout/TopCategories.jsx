import React from "react";
import { CategoryCard } from "../shared/CategoryCard";
import { Container, Grid, Text } from "@mantine/core";
import useCategories from "../hook/useCategories";
import { Link } from "react-router-dom";
const TopCategories = () => {
  const categories = useCategories();
  console.log("categories", categories);
  return (
    <Container size="xl">
      <Text size={28} mt={40} mb={20} fw={700}>
        Shop Our Top Categories
      </Text>
      <Grid gutter="xl">
        {categories.map((data, index) => {
          return (
            <Grid.Col lg={2} md={4} key={index}>
              <Link to={"/category/" + data.value} key={data.value}>
                <CategoryCard key={data.value} cardData={data} />
              </Link>
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default TopCategories;
