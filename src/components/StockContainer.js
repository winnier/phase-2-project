import React from "react";
import StockCard from "./StockCard";


function StockContainer({ stockDb, handleAddToPortfolio }) {

  
  const stockList = stockDb.map(item => {
    return <StockCard key={item.Symbol} stock={item} handleAddToPortfolio={handleAddToPortfolio}/>
  })
  return (
    <div>
      <h2>Stocks</h2>
      <div>
        {stockList}
      </div>
    </div>
  );
}

export default StockContainer;