import React from "react";

function StockCard({stock}) {
console.log(stock)
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.Name}</h5>
          <p className="card-ticker">{stock.Symbol}</p>
          <p className="card-text">{stock["Last Sale"]}</p>
          <p className="card-sector">{stock.Sector}</p>
        </div>
      </div>
    </div>
  );
}

export default StockCard;