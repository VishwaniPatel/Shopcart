import { Button, Card, Group, Image, Text } from "@mantine/core";
import React, { useState, useContext, useEffect } from "react";
import { addCartProducts } from "../service/ProductDataService";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {}, [product]);
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
    <Card>
      <Card.Section mb={10}>
        <Link
          to={`/category/${product?.categoryId}/product-detail/${product?.id}`}
        >
          <Image
            src={product?.productImage[0]?.inputImage}
            height={400}
            alt="Product Image"
            radius={15}
          />
        </Link>
      </Card.Section>
      <Group position="apart">
        <Text weight={700}>{product?.productName}</Text>
        <Text>₹ {product?.productPrice}</Text>
      </Group>
      <Link to="/cart">
        <Button variant="outline" onClick={handleAddToCart} mt={20}>
          Add to Cart
        </Button>
      </Link>
    </Card>
  );
};

export default ProductCard;
