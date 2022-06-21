import React from "react";
import StockCard from "./StockCard";

function StockContainer({ stockDb }) {
  
  const stockList = stockDb.map(item => {
    return <StockCard key={item.Symbol} stock={item} />
  })
  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;