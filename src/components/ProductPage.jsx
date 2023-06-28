import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumbs";
import {
  Container,
  Grid,
  Skeleton,
  Image,
  Text,
  Group,
  Flex,
  Space,
  createStyles,
  Divider,
  Button,
} from "@mantine/core";
import { getProductById } from "../service/ProductDataService";

const useStyles = createStyles((theme) => ({
  img: {
    display: "none",
  },
}));

const ProductPage = () => {
  const { classes } = useStyles();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const getProduct = async () => {
    console.log(productId);
    await getProductById(productId).then((res) => {
      const response = res.data;
      setProduct(response);
    });
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log(product);
  useEffect(() => {
    // Simulating fetching data from the database
    setTimeout(() => {
      // Assuming `products` is fetched and available here
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return (
      <>
        <Skeleton height={20} mt={6} width="100%" radius="xl" />
        <Skeleton height={20} mt={6} width="100%" radius="xl" />
        <Skeleton height={20} mt={6} width="100%" radius="xl" />
      </>
    );
  }
  const setImage = (id) => {
    if (id == 1) {
      setIndex(1);
    }
    if (id == 2) {
      setIndex(2);
      console.log("Second Image");
    }
    if (id == 3) {
      setIndex(3);
    }
  };
  return (
    <Container size="xl">
      <Breadcrumb />
      <Grid>
        <Grid.Col span={6}>
          <Image
            src={product.productImage[index]?.inputImage}
            height={500}
            alt="Product Image"
            radius="md"
            fit="cover"
          />
          <Space h="md"></Space>
          <Flex gap="md" direction="row">
            <Grid>
              <Grid.Col span={3}>
                <input
                  type="radio"
                  id="img1"
                  name="radioImage"
                  onChange={() => setImage(0)}
                  className={classes.img}
                />
                <label htmlFor="img0">
                  <Image
                    src={product.productImage[0]?.inputImage}
                    alt="Product Image"
                    height={150}
                    radius="md"
                    fit="cover"
                  />
                </label>
              </Grid.Col>
              <Grid.Col span={3}>
                <input
                  type="radio"
                  id="img1"
                  name="radioImage"
                  onChange={() => setImage(1)}
                  className={classes.img}
                />
                <label htmlFor="img1">
                  <Image
                    src={product.productImage[1]?.inputImage}
                    alt="Product Image"
                    height={150}
                    radius="md"
                    fit="cover"
                  />
                </label>
              </Grid.Col>
              <Grid.Col span={3}>
                <input
                  type="radio"
                  id="img2"
                  name="radioImage"
                  onChange={() => setImage(2)}
                  className={classes.img}
                />
                <label htmlFor="img2">
                  <Image
                    src={product.productImage[2]?.inputImage}
                    alt="Product Image"
                    height={150}
                    radius="md"
                    fit="cover"
                  />
                </label>
              </Grid.Col>
              <Grid.Col span={3}>
                <input
                  type="radio"
                  id="img3"
                  name="radioImage"
                  onChange={() => setImage(3)}
                  className={classes.img}
                />
                <label htmlFor="img3">
                  <Image
                    src={product.productImage[3]?.inputImage}
                    alt="Product Image"
                    height={150}
                    width={150}
                    radius="md"
                    fit="cover"
                  />
                </label>
              </Grid.Col>
            </Grid>
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <Group>
            <Flex direction="column">
              <Text weight={700} size={30}>
                {product.productName}
              </Text>
              <Space h="md"></Space>
              <Text>{product.productDescription}</Text>
              <Text>{product.productPrice}</Text>
              <Text>{product.productQuantity}</Text>
            </Flex>
            <Divider my="sm" />
            <Button>Buy Now</Button>
            <Button>Add to Cart</Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ProductPage;
