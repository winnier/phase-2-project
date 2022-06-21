import React from "react"
import SearchBar from "./SearchBar"
import StockContainer from "./StockContainer"

function StockPage() {



    return (
        <div>
           <SearchBar />
        <div className="row">
            <div className="col-8">
            <StockContainer />
            </div>
       </div>
        </div>
    )
}

export default StockPage;