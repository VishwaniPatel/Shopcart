import React, { useEffect } from "react";
import { CategoryCard } from "../shared/CategoryCard";
import { Container, Grid, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import useSubCategories from "../hook/useSubcategories";
const TopSubCategories = ({ categoryId }) => {
  const subCategories = useSubCategories();
  const filteredData = subCategories.filter((res) => res.id == categoryId);
  useEffect(() => {
    console.log(filteredData);
  }, []);
  return (
    <Container size="xl">
      <Text size={28} mt={40} mb={20} fw={700}>
        Shop Our Top Categories
      </Text>
      <Grid gutter="xl">
        {filteredData.map((data, index) => {
          return (
            <Grid.Col lg={2} md={4} key={index}>
              <Link to={"/category/" + data.value} key={data.value}>
                <CategoryCard key={data.value} carddata={data} />
              </Link>
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default TopSubCategories;
