import React from "react"
import SearchBar from "./SearchBar"
import StockContainer from "./StockContainer"



function StockPage({ displayList, handleAddToPortfolio, handleSearch }) {
  

    return (
        <div className="stock-page">
            <div className="search-container">
                <SearchBar handleSearch={handleSearch}/>
            </div>
            <div className="all-stocks-container">
                <div className="col-8">
                <StockContainer displayList={displayList} handleAddToPortfolio={handleAddToPortfolio} />
                </div>
            </div>
        </div>
    )
}

export default StockPage;