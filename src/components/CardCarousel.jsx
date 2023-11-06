import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  useMantineTheme,
  rem,
  Container,
  Text,
  Skeleton,
} from "@mantine/core";
import ProductCard from "../shared/ProductCard";
import useProducts from "../hook/useProducts";
import { useState, useEffect } from "react";
import useCategories from "../hook/useCategories";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

export function CardsCarousel() {
  const { data: categories, isLoading } = useCategories();
  const { data: product } = useProducts();
  const [productsToBeDisplay, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  if (isLoading) {
    return (
      <>
        <Skeleton height={20} mt={6} width="100%" radius="xl" />
        <Skeleton height={20} mt={6} width="100%" radius="xl" />
        <Skeleton height={20} mt={6} width="100%" radius="xl" />
      </>
    );
  }
  // get last added product from add categories
  const getProductData = (categories, products) => {
    const lastAddedProducts = categories.map((category) => {
      const productsInCategory = products.filter(
        (product) => product.categoryId == category.value
      );
      const sortedProducts = productsInCategory.sort((a, b) => b.id - a.id);

      const lastProduct = sortedProducts[0];
      return lastProduct;
    });
    return lastAddedProducts;
  };

  // display product card for all categories
  const slides =
    productsToBeDisplay &&
    productsToBeDisplay?.map((item) => (
      <Carousel.Slide key={item?.id}>
        <ProductCard product={item} key={item?.id} />
      </Carousel.Slide>
    ));

  useEffect(() => {
    const products = getProductData(categories, product);
    setProducts(products);
  }, []);

  return (
    <Container size="xl">
      <Text size={28} mt={40} mb={20} fw={700}>
        Latest Products For You!
      </Text>
      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
