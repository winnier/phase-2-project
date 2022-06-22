import React from 'react'
import StockCard from './StockCard'


function MyPortfolio({ watchlist, handleDeletePortfolio }) {
    const portfolioList = watchlist.map((item) => {
        return <StockCard key={ item.Symbol } stock={ item } onClickDelete={ handleDeletePortfolio }/>
    })
    
    return (
        <div>
            { portfolioList }
        </div>
    )
}

export default MyPortfolio;
