import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";



function StockCard({ stock, onClickAdd, onCickAddToDetails }) {

  const [inWatchlist, setInWatchlist] = useState(false)
  
  function watchlistConfirm() {
    setInWatchlist(true)
  }

  let navigate = useNavigate();

  async function handleNavigate(e) {
    navigate("../watchlist", { replace: true })
  }

  function WatchlistBtn() {
    if(inWatchlist) {
      return (
        <button 
          className="watchlist-btn"
          onClick={() => handleNavigate()}
        >
          Added to Watchlist
        </button>
      )
    }
  }

  function handleDetailsClick(e, selectedStock) {
    e.stopPropagation()
    onCickAddToDetails(selectedStock)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={() => {
            onClickAdd(stock)
            watchlistConfirm()
        }}>
          <div className="card-top-row">
            <h5 className="card-title">{stock.Name}</h5>
            <WatchlistBtn />
          </div>
          <div className="card-details">
            <p className="ticker">{stock.Symbol}</p>
            <p className="price">{stock["Last Sale"]}</p>
            <p className="sector">{stock.Sector}</p>
            <button
              className="details-button"
              onClick={(e) => handleDetailsClick(e, stock)}
            >
              Details
            </button>
            {/* <span>
              <div className="ui center aligned segment basic">
                <button
                  className="ui mini red button"
                  onClick={() => onCickAddToDetails(stock)}
                >
                  Details
                </button>
              </div>
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockCard;