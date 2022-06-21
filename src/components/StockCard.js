import React from "react";

function StockCard() {

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{"Company Name"}</h5>
          <p className="card-ticker">{"Stock Ticker"}</p>
          <p className="card-text">{"Stock Price"}</p>
          <p className="card-sector">{"Stock Sector"}</p>
        </div>
      </div>
    </div>
  );
}

export default StockCard;