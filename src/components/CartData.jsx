import React, { useEffect, useState } from "react";
import { getCartProducts } from "../service/ProductDataService";
import { Table, Text, Flex, Container, Space, Image } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

const CartData = () => {
  const getItems = async () => {
    const id = localStorage.getItem("customerId");
    await getCartProducts(id).then((res) => {
      const response = res.data.cart;
      console.log(response);
      setCartItems(response);
    });
  };
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  useEffect(() => {
    getItems();
  }, []);

  const rows = cartItems.map((data, index) => (
    <tr key={data.id}>
      <td>{index + 1}</td>
      <td>{data.name}</td>
      <td>{data.price}</td>
      <td>{data.quantity}</td>
      <td>
        <Image
          maw={100}
          mx="auto"
          radius="md"
          src={data.image}
          alt="Product image"
        />
      </td>
      <td>{data.price * data.quantity}</td>
      <td>
        <IconTrash />
      </td>
    </tr>
  ));
  return (
    <Container>
      <Text weight={700} size={30}>
        My cart
      </Text>
      <Space h="md"></Space>
      <Table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Product Image</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
};

export default CartData;
