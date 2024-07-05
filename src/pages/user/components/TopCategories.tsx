import { Container, SimpleGrid, Skeleton, Title } from "@mantine/core";

import { useEffect, useState } from "react";
import { ICategories } from "../utility/models/user.model";
import { useGetCategoriesQuery } from "../utility/services/user.service";
import CategoryCard from "./CategoryCard";
const TopCategories = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  const [categories, setCategories] = useState<ICategories[]>([]);
  useEffect(() => {
    if (data) {
      const updatedData = Object.values(data).map(
        (item: any, index: number) => {
          const key = Object.keys(data)[index];
          return {
            id: key,
            name: item.name,
            imageUrl: item.imageUrl,
          };
        }
      );
      setCategories(updatedData);
    }
  }, [data]);
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <Container size={"var(--mantine-container-width)"}>
      <Title order={2} mt={40} mb={20} fw={700}>
        Shop Our Top Categories
      </Title>
      <SimpleGrid cols={6} spacing="xl">
        {categories &&
          categories.map((data: any) => {
            return <CategoryCard key={data.value} carddata={data} />;
          })}
      </SimpleGrid>
    </Container>
  );
};

export default TopCategories;
