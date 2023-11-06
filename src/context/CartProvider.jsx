import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";

const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const contextValue = {
    cartItems,
    setCartItems,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
