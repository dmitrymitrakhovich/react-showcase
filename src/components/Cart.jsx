import React, { useContext } from "react";
import { ShopContext } from "../context";

export default function Cart() {
  const { quantity = 0, handleBasketShow } = useContext(ShopContext);

  return (
    <div
      className='cart blue darken-4 white-text'
      onClick={() => handleBasketShow()}
    >
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
}
