import React from 'react'
import WatchlistCard from './WatchlistCard'


function Watchlist({ watchlist, handleDeletePortfolio, onCickAddToDetails }) {

    const portfolioList = watchlist.map((item) => {
        return <WatchlistCard key={ item.Symbol } stock={ item } onClickDelete={ handleDeletePortfolio } onCickAddToDetails={onCickAddToDetails}/>
    })
    
    return (
        <div className='watchlist-page'>
            <h2 className='watchlist-header'>My Watchlist</h2>
            <div className='watchlist-container'>
                { portfolioList }
            </div>
        </div>
    )
}

export default Watchlist;
