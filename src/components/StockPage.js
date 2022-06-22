import React from "react"
import SearchBar from "./SearchBar"
import StockContainer from "./StockContainer"
import StockDetails from "./StockDetails"



function StockPage({ watchlist, displayList, handleAddToPortfolio, handleSearch, handleAddToDetails }) {
  

    return (
        <div className="stock-page">
            <div className="search-container">
                <SearchBar handleSearch={ handleSearch }/>
            </div>
            <div className="all-stocks-container">
                <div className="col-8">
                <StockContainer displayList={ displayList } handleAddToPortfolio={ handleAddToPortfolio } handleAddToDetails={ handleAddToDetails } />
                </div>
            
            </div>
            <br></br>
            <hr></hr>
            <div className="all-stocks-container">
                <div className="col-8">
                <StockDetails watchlist={ watchlist } />
                </div>
            
            </div>
            <div className="search-container">
                <SearchBar handleSearch={handleSearch}/>
            </div>
        </div>
    )
}

export default StockPage;