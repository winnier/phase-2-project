import React from "react";

function WatchlistCard({ stock, onClickDelete }) {
    return (
      <div>
        <div className="watchlist-card">
          <div className="watchlist-card-body" onClick={() => onClickDelete(stock)}>
            <h5 className="watchlist-card-title">{stock.Name}</h5>
            <div className="watchlist-card-details">
              <p className="watchlist-ticker">{stock.Symbol}</p>
              <p className="watchlist-price">{stock["Last Sale"]}</p>
              <p className="watchlist-sector">{stock.Sector}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default WatchlistCard;
