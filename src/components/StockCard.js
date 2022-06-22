import React from "react";


function StockCard({ stock, onClickAdd, onClickDelete }) {

  return (
    <div>
      <div className="card" onClick={() => onClickAdd(stock)}>
        <div className="card-body" onClick={() => onClickDelete(stock)}>
          <h5 className="card-title">{stock.Name}</h5>
          <div className="card-details">
            <p className="ticker">{stock.Symbol}</p>
            <p className="price">{stock["Last Sale"]}</p>
            <p className="sector">{stock.Sector}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockCard;