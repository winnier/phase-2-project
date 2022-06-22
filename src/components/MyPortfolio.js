import React from 'react'
import WatchlistCard from './WatchlistCard'
import StockCard from './StockCard'


function MyPortfolio({ watchlist, handleDeletePortfolio }) {
    const portfolioList = watchlist.map((item) => {
        return <WatchlistCard key={ item.Symbol } stock={ item } onClickDelete={ handleDeletePortfolio }/>
    })
    
    return (
        <div>
            <div className='watchlist-container'>
                { portfolioList }
            </div>
        </div>
    )
}

export default MyPortfolio;
