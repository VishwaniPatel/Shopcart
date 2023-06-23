import { Card, Group, Image, Text } from "@mantine/core";
import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Card>
      <Card.Section>
        <Image
          src={product.productImage[0].inputImage}
          // src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={400}
          alt="Norway"
        />
      </Card.Section>
      <Group>
        <Text>{product.productName}</Text>
      </Group>
    </Card>
  );
};

export default ProductCard;
