import React from "react"
import SearchBar from "./SearchBar"
import StockContainer from "./StockContainer"

function StockPage({ stockDb }) {
    

    return (
        <div>
           <SearchBar />
        <div className="row">
            <div className="col-8">
            <StockContainer stockDb={stockDb}/>
            </div>
       </div>
        </div>
    )
}

export default StockPage;