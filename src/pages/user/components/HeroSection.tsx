import {
  BackgroundImage,
  Button,
  Container,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { IHeroSection } from "../utility/models/user.model";
import { useGetHeroSectionQuery } from "../utility/services/user.service";

const HeroSection = () => {
  const { data, isLoading } = useGetHeroSectionQuery();
  const [heroSectionData, setHeroSectionData] = useState<IHeroSection[]>([]);
  useEffect(() => {
    if (data) {
      const updatedData = Object.values(data).map(
        (item: any, index: number) => {
          const key = Object.keys(data)[index];
          return {
            id: key,
            image: item.imageUrl,
            title: item.title,
            subtitle: item.subtitle,
          };
        }
      );
      setHeroSectionData(updatedData);
    }
  }, [data]);

  return (
    <>
      {!isLoading && heroSectionData.length > 0 ? (
        heroSectionData.map((item) => (
          <BackgroundImage key={item.id} src={item.image} py={80}>
            <Container size={"var(--mantine-container-width)"}>
              <Title size={44} c="primary" fw={900} py={12} maw={500} lh={1.5}>
                {item.title}
              </Title>
              <Text mt={30} maw={500} opacity={0.7}>
                {item.subtitle}
              </Text>
              <Button radius="xl" size="xl" mt={40} my={50}>
                Explore
              </Button>
            </Container>
          </BackgroundImage>
        ))
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default HeroSection;
