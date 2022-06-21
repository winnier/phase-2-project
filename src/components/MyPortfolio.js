import React from 'react'
import StockCard from './StockCard'


function MyPortfolio({ watchlist }) {
    const portfolioList = watchlist.map((item) => {
        return <StockCard key={item.Symbol} stock={item} />
    })

console.log(watchlist)

    
    return (
        <div>
            { portfolioList }
        </div>
    )
}

export default MyPortfolio;
