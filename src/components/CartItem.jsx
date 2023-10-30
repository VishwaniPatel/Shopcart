import { ActionIcon, Button, Flex, Image, Table } from "@mantine/core";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import React, { useState, useReducer, useContext } from "react";
import {
  deleteCartProduct,
  updateCartProduct,
} from "../service/ProductDataService";
import CartContext from "./CartContext";

// reducer function to increment and decrement product quantity
// reducer function to update quantity and cart state
const quantityReducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        quantity: state.quantity + 1,
        cart: {
          ...state.cart,
          counter: state.cart.counter + 1,
        },
      };
    case "decrease":
      return {
        ...state,
        quantity: state.quantity - 1,
        cart: {
          ...state.cart,
          counter: state.cart.counter - 1,
        },
      };
    default:
      return state;
  }
};

const CartItem = ({ cartData, updateTotalPrice, onDeleteProduct }) => {
  const initialState = {
    quantity: 1,
    cart: {
      counter: cartData.quantity,
      price: cartData.price,
    },
  };

  const [{ quantity, cart }, dispatchQuantity] = useReducer(
    quantityReducer,
    initialState
  );
  // increase product quantity
  const addHandler = () => {
    if (quantity < cart.counter) {
      dispatchQuantity({ type: "increase" });
    }
  };

  // decrease product quantity
  const removeHandler = () => {
    if (quantity > 1) {
      dispatchQuantity({ type: "decrease" });
    }
  };

  // get customer id from local storage, pass cutomer id and product id using props
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
      <td>{cart.counter * cartData.price}</td>
      <td>
        <ActionIcon variant="outline" color="red">
          <IconTrash onClick={() => deleteCartItemHandler(cartData.id)} />
        </ActionIcon>
      </td>
    </tr>
  );
};

export default CartItem;
