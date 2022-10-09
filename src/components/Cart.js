import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
const Cart = () => {

  const count = useSelector((state) => state.cart.cartItems)

  return (
    <div className="cartIcon">
      <h3>Cart: {count} Items</h3>
    </div>
  );
};

export default Cart;
