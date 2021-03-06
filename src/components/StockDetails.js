import React from "react";
import DetailsCard from "./DetailsCard";


function StockDetails({ selectedStockData }) {
   
  return (
    <div>
      <h2 className="details-header">Details</h2>
      <div className="details-container">
        <DetailsCard selectedStockData={selectedStockData} />
      </div>
    </div>
  );
}

export default StockDetails;