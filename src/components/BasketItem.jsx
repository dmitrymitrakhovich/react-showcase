import React from "react";

export default function BasketItem({
  id,
  name,
  price,
  quantity,
  removeFromBasket = Function.prototype,
  decQuantity = Function.prototype,
  incQuantity = Function.prototype,
}) {
  return (
    <li className='collection-item'>
      {name}{" "}
      <i
        className='material-icons basket-quantity'
        onClick={() => decQuantity(id)}
      >
        remove
      </i>
      {quantity}
      <i
        className='material-icons basket-quantity'
        onClick={() => incQuantity(id)}
      >
        add
      </i>{" "}
      = {price * quantity}$
      <span className='secondary-content' onClick={() => removeFromBasket(id)}>
        <i className='material-icons basket-delete'>close</i>
      </span>
    </li>
  );
}
