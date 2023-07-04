import React, { useEffect, useState, useContext } from "react";
import { deleteCartProduct, getCartProducts } from "../service/ProductDataService";
import { Table, Text, Flex, Container, Space, Image, Group } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import CartContext from "./CartContext";
import useCartData from "../hook/useCart";
import CartItem from "./CartItem";
const CartData = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const getCartData = useCartData();
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);  
  useEffect(() => {
    setCartData(cartItems);
  }, [cartItems]);

  useEffect(() => {
    setCartItems(getCartData);
  }, [getCartData]);


  useEffect(() => {
    totalAmountHandler();
  }, [cartData]);

  const totalAmountHandler = () => {
    if (cartData) {
      setTotal(
        cartData.reduce(
          (total, item) => (total += parseInt(item.totalPrice)),
          0
        )
      );
    }
  };
  const updateTotalPrice = (updatedPrice) => {
    setTotal(total + parseInt(updatedPrice));
  };
  const deleteProductHandler = async (custId, deleteItemId) => {
    if (deleteItemId) {
      await deleteCartProduct(custId, deleteItemId);
      setCartItems((prevData) => prevData.filter((item) => item.id !== deleteItemId))
    }
  }

  return (
    <Container>
      <Text weight={700} size={30}>
        My cart
      </Text>
      <Space h="md"></Space>
      {(cartItems.length < 1) ? <Text>Your Cart is Empty</Text> : 
      <Table>
         <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Product Image</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

        {cartData.map((data) => {
        return (
          <CartItem key={data.id} cartData={...data} updateTotalPrice={updateTotalPrice} onDeleteProduct={deleteProductHandler} />
        );
      })}
          
         </tbody>
      
      </Table>
      }
      <Text fz="xl" fw={700} ta="right">Total Amount: {total}</Text>
    
    </Container>
  );
};

export default CartData;
