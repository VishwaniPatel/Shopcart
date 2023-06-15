import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  useMantineTheme,
  rem,
  Container,
  Text,
} from "@mantine/core";
import ProductCard from "../shared/ProductCard";
import useProducts from "../hook/useProducts";
import { useState, useEffect } from "react";

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
  const product = useProducts();
  const [products, setProducts] = useState(product);
  const [loading, setLoading] = useState(true);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = products.map((item, index) => (
    <Carousel.Slide key={index}>
      <ProductCard product={item} />
    </Carousel.Slide>
  ));
  useEffect(() => {
    setProducts(product);
  }, [product]);
  useEffect(() => {
    // Simulating fetching data from the database
    setTimeout(() => {
      // Assuming `products` is fetched and available here
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Container size="xl">
      <Text size={28} mt={40} mb={20} fw={700}>
        Todays Best Deals For You!
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
