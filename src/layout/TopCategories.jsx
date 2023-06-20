import React from "react";
import { ImageCard } from "../shared/CategoryCard";
import { Container, Grid, Text } from "@mantine/core";
import furniture from "../assets/images/furniture.png";
import bags from "../assets/images/bags.png";
import books from "../assets/images/books.png";
import tech from "../assets/images/tech.png";
import sneakers from "../assets/images/sneakers.png";
import travel from "../assets/images/travel.png";
const TopCategories = () => {
  const categories = [
    {
      id: 1,
      category: "Furniture",
      backgroundImg: furniture,
    },
    {
      id: 2,
      category: "Hand Bag",
      backgroundImg: bags,
    },
    {
      id: 3,
      category: "Books",
      backgroundImg: books,
    },
    {
      id: 4,
      category: "Tech",
      backgroundImg: tech,
    },
    {
      id: 5,
      category: "Sneakers",
      backgroundImg: sneakers,
    },
    {
      id: 6,
      category: "Travel",
      backgroundImg: travel,
    },
  ];
  return (
    <Container size="xl">
      <Text size={28} mt={40} mb={20} fw={700}>
        Shop Our Top Categories
      </Text>
      <Grid gutter="xl">
        {categories.map((data, index) => {
          return (
            <Grid.Col lg={2} md={4} key={index}>
              <ImageCard cardData={data} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default TopCategories;
