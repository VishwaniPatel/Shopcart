import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  setCartItems: () => {},
});

export default CartContext;
