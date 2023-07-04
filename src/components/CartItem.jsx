import { ActionIcon, Button, Flex, Image, Table } from "@mantine/core";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import {
  deleteCartProduct,
  updateCartProduct,
} from "../service/ProductDataService";
const CartItem = ({ cartData, updateTotalPrice, onDeleteProduct }) => {
  const [cart, setCart] = useState({
    counter: cartData.quantity,
    Price: cartData.price,
  });
  const removeHandler = () => {
    if (cart.counter > 1) {
      const updatedCounter = cart.counter - 1;
      setCart({
        counter: updatedCounter,
      });
      const id = localStorage.getItem("customerId");
      updateCartProduct(id, cartData.id, updatedCounter);
    }
  };

  const addHandler = () => {
    const updatedCounter = cart.counter + 1;
    setCart({
      counter: updatedCounter,
    });
    const id = localStorage.getItem("customerId");
    updateCartProduct(id, cartData.id, updatedCounter);
  };

  const deleteCartItemHandler = async (id) => {
    const custId = localStorage.getItem("customerId");
    onDeleteProduct(custId, id);
  };

  return (
    <tr>
      <td>{cartData.name}</td>
      <td>{cartData.price}</td>
      <td>
        <Flex gap={10}>
          <ActionIcon variant="filled" color="red">
            <IconMinus onClick={removeHandler} />
          </ActionIcon>
          {cart.counter}
          <ActionIcon variant="filled" color="#033d2a">
            <IconPlus onClick={addHandler} />
          </ActionIcon>
        </Flex>
      </td>
      <td>
        <Image
          maw={100}
          mx="auto"
          radius="md"
          src={cartData.image}
          alt="Product image"
        />
      </td>
      <td>{cartData.totalPrice}</td>
      <td>
        <ActionIcon variant="outline" color="red">
          <IconTrash onClick={() => deleteCartItemHandler(cartData.id)} />
        </ActionIcon>
      </td>
    </tr>
  );
};

export default CartItem;
