import React, { useState, useCallback } from "react";
import Header from "../Header";
import SellContainer from "../SellContainer";
import BuyContainer from "../BuyContainer";
import "./styles.css";

const Container = () => {
  const [buys, updateBuys] = useState([]);
  const [sells, updateSells] = useState([]);
  const onBuyClick = useCallback(() => {
    updateBuys((buys) => [
      ...buys,
      {
        id: Math.random(),
        size: Math.random().toFixed(4),
        price: 37000 + (Math.random() * 2000).toFixed(2)
      }
    ]);
  });
  const onSellClick = useCallback(() => {
    updateSells((sells) => [
      ...sells,
      {
        id: Math.random(),
        size: Math.random().toFixed(4),
        price: 37000 + (Math.random() * 2000).toFixed(2)
      }
    ]);
  });

  return (
    <div className="container">
      <Header buyClick={onBuyClick} sellClick={onSellClick} />
      <SellContainer sellBids={sells} />
      <BuyContainer buyBids={buys} />
    </div>
  );
};

export default Container;
