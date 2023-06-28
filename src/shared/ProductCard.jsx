import { Card, Group, Image, Text } from "@mantine/core";
import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Card>
      <Card.Section>
        <Image
          src={product.productImage[0]?.inputImage}
          height={400}
          alt="Product Image"
        />
      </Card.Section>
      <Group>
        <Text weight={700}>{product.productName}</Text>
        <Text>{product.productPrice}</Text>
      </Group>
    </Card>
  );
};

export default ProductCard;
