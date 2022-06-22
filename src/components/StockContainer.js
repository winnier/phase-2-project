import React from "react";
import StockCard from "./StockCard";


function StockContainer({ displayList, handleAddToPortfolio, handleAddToDetails }) {

  
  const stockList = displayList.map(item => {
    return <StockCard key={ item.Symbol } stock={ item } onClickAdd={ handleAddToPortfolio } onCickAddToDetails={ handleAddToDetails }/>
  })
  return (
    <div>
      <h2>Stocks</h2>
      <div className="card-container">
        {stockList}
      </div>
    </div>
  );
}

export default StockContainer;