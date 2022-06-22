import React from "react";

function WatchlistCard({ stock, onClickDelete, onCickAddToDetails }) {
    return (
      <div>
        <div className="watchlist-card">
          <div className="watchlist-card-body" onClick={() => onClickDelete(stock)}>
            <div className="card-top-row">
              <h5 className="watchlist-card-title">{stock.Name}</h5>
              <button className="watchlist-remove-btn">x</button>
            </div>
            <div className="watchlist-card-details">
              <p className="watchlist-ticker">{stock.Symbol}</p>
              <p className="watchlist-price">{stock["Last Sale"]}</p>
              <p className="watchlist-sector">{stock.Sector}</p>
              <button
                className="details-button"
                onClick={() => onCickAddToDetails(stock)}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default WatchlistCard;
