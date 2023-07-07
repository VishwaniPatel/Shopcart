import React from "react";

// created context to use cart items in multiple components
const CartContext = React.createContext({
  cartItems: [],
  setCartItems: () => {},
});

export default CartContext;
