import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
const Layout = () => {

  const count = useSelector((state) => state.cart.cartItems)


  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total Price: ${count*25}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
