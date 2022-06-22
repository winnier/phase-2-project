import React from 'react'
import WatchlistCard from './WatchlistCard'


function MyPortfolio({ watchlist, handleDeletePortfolio, onCickAddToDetails }) {
    const portfolioList = watchlist.map((item) => {
        return <WatchlistCard key={ item.Symbol } stock={ item } onClickDelete={ handleDeletePortfolio } onCickAddToDetails={onCickAddToDetails}/>
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
