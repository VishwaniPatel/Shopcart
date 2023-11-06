import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useReducer,
} from "react";
import { Link, useParams } from "react-router-dom";
import BreadcrumbsUI from "./Breadcrumbs";
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
  Paper,
  Box,
  Notification,
} from "@mantine/core";
import { addCartProducts, getProductById } from "../service/ProductDataService";
import {
  IconMinus,
  IconPlus,
  IconTruck,
  IconTruckReturn,
} from "@tabler/icons-react";
import CartContext from "../context/CartContext";

const useStyles = createStyles((theme) => ({
  img: {
    display: "none",
  },
}));

// reducer function to increase and decrease product quantity
const quantityReducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { quantity: state.quantity + 1 };
    case "decrease":
      return { quantity: state.quantity - 1 };
    default:
      return state;
  }
};
const ProductPage = () => {
  const { classes } = useStyles();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const initialState = { quantity: 1 };
  const [{ quantity }, dispatchQuantity] = useReducer(
    quantityReducer,
    initialState
  );
  const { setCartItems } = useContext(CartContext);

  // Get product details using service by product id
  const getProduct = async () => {
    await getProductById(productId).then((res) => {
      const response = res.data;
      setProduct(response);
    });
  };
  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    // Simulating fetching data from the database
    setTimeout(() => {
      // Assuming `products` is fetched and available here
      setLoading(false);
    }, 1000);
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

  // Set id for image preview
  const setImage = (id) => {
    if (id == 1) {
      setIndex(1);
    }
    if (id == 2) {
      setIndex(2);
    }
    if (id == 3) {
      setIndex(3);
    }
  };
  // On click on button increase product quantity
  const handleIncreaseQuantity = () => {
    if (quantity < product.productQuantity) {
      dispatchQuantity({ type: "increase" });
    }
  };
  // On click on button decrease product quantity
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      dispatchQuantity({ type: "decrease" });
    }
  };

  // On click of add to cart button this function executes
  const handleAddToCart = () => {
    // Create an item object with the necessary information
    const item = {
      id: product.id,
      name: product.productName,
      price: product.productPrice,
      quantity: quantity,
      image: product.productImage[0].inputImage,
      totalPrice: product.productPrice * quantity,
    };
    const custId = localStorage.getItem("customerId");
    // Add the item to the cart
    addCartProducts(custId, item);
    setCartItems((prevItems) => [...prevItems, item]);
  };
  return (
    <Container size="xl">
      <BreadcrumbsUI></BreadcrumbsUI>
      <Grid gutter={50}>
        <Grid.Col span={6}>
          <Image
            src={product?.productImage[index]?.inputImage}
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
              <Divider my="sm" />
              <Text weight={700} size={24}>
                ₹ {product.productPrice}
              </Text>
              <Text>Offer price ₹ {product.offerPrice}</Text>
              <Divider my="sm" />
              <Flex align={"center"}>
                <Paper bg="#f6f6f6" display="flex" p={10} radius={50} mr={20}>
                  <IconMinus onClick={handleDecreaseQuantity} />
                  <Text mx={10}>{quantity}</Text>
                  <IconPlus onClick={handleIncreaseQuantity} />
                </Paper>
                <Text>
                  {" "}
                  Only {product.productQuantity} items left! Don't miss it.
                </Text>
              </Flex>
            </Flex>
            <Flex direction={"column"}>
              <Group mb={20}>
                <Button mr={16} color="teal">
                  Buy Now
                </Button>
                <Link to="/cart">
                  <Button variant="outline" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                </Link>
              </Group>
              <Group>
                <Flex direction={"column"} w={400}>
                  <Box p={20}>
                    <IconTruck />
                    <Text>Free Delivery</Text>
                  </Box>
                  <Box p={20}>
                    <IconTruckReturn />
                    <Text>Return Delivery</Text>
                  </Box>
                </Flex>
              </Group>
            </Flex>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ProductPage;
