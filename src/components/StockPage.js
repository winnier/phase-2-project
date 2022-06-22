import React from "react"
import SearchBar from "./SearchBar"
import StockContainer from "./StockContainer"



function StockPage({ displayList, handleAddToPortfolio, handleSearch }) {
  

    return (
        <div>
            <div className="search-container">
                <SearchBar handleSearch={handleSearch}/>
            </div>
            <div className="row">
                <div className="col-8">
                <StockContainer displayList={displayList} handleAddToPortfolio={handleAddToPortfolio} />
                </div>
            </div>
        </div>
    )
}

export default StockPage;