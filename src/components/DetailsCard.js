import React from "react";

function DetailsCard({ selectedStockData }) {

    let {Name: name, 
        Symbol: symbol, 
        Description: description, 
        Industry: industry, 
        Exchange: exchange,
        RevenueTTM: revenue,
        EBITDA: ebitda,
        TrailingPE: peRatio,
        EPS: eps,
        DividendYield: dividendYield} = selectedStockData;

    return (
        // <div>Details!</div>
        <div className="details-card">
            <h5>{name}</h5>
            <p>Ticker: {symbol}</p>
            <p>{description}</p>
            <p>Industry: {industry}</p>
            <p>Exchange: {exchange}</p>
            <p>Revenue: ${revenue}</p>
            <p>EBITDA: ${ebitda}</p>
            <p>P/E Ratio: {peRatio}x</p>
            <p>EPS: ${eps}</p>
            <p>Dividend Yield: {dividendYield*100}%</p>
        </div>
    )
}

export default DetailsCard;

