import React from "react";

function StockCard() {

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{"Compant Name"}</h5>
          <p className="card-text">{"Stock Price"}</p>
        </div>
      </div>
    </div>
  );
}

export default StockCard;