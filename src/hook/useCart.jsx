import React, { useEffect, useState } from "react";
import { getCartProducts } from "../service/ProductDataService";

const useCartData = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const getItems = async () => {
    const id = localStorage.getItem("customerId");
    await getCartProducts(id).then((res) => {
      const response = res.data.cart;
      setCartProducts(response);
    });
  };

  useEffect(() => {
    getItems();
  }, []);

  return cartProducts;
};

export default useCartData;
