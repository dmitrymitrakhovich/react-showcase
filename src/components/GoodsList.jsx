import React from "react";
import GoodsItem from "./GoodsItem";

export default function GoodsList({
  goods = [],
  addToBasket = Function.prototype,
}) {
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}
