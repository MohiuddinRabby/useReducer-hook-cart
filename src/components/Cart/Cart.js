import React, { useContext } from "react";
import { CartContext } from "../../global/CartContext";

const Cart = () => {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <div className="container py-5">
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
