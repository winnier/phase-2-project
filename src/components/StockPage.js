import React from "react"
import SearchBar from "./SearchBar"
import StockContainer from "./StockContainer"




function StockPage({ displayList, handleAddToPortfolio, handleSearch, handleAddToDetails }) {


    return (
        <div className="stock-page">
            <div className="all-stocks-container">
                <div className="col-8">
                <StockContainer 
                displayList={ displayList } 
                handleAddToPortfolio={ handleAddToPortfolio } 
                handleAddToDetails={ handleAddToDetails } />
                </div>
            
            </div>            
            <div className="search-container">
                <SearchBar handleSearch={handleSearch}/>
            </div>
        </div>
    )
}

export default StockPage;