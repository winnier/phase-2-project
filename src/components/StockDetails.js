import React from "react";
import StockCard from "./StockCard";


function StockDetails({ watchlist  }) {
    const stockList = watchlist.map(item => {
        return <StockCard key={ item.Symbol } stock={ item } />
      })
   
  return (
    <div>
      <h2>Details</h2>
      <div className="details-container">
        { stockList }
      </div>
    </div>
  );
}

export default StockDetails;