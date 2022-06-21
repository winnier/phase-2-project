import React, { useState, useEffect } from "react"
import './App.css';
import NavBar from './components/NavBar'
import StockPage from './components/StockPage'
import MyPortfolio from './components/MyPortfolio'
import SearchBar from './components/SearchBar'



function App() {

  let ticker = 'CSCO'

  let pull_function = 'GLOBAL_QUOTE'

  const [stockDb, setStockDb] = useState([])
  const [watchlist, setWatchlist] = useState([])

  // fetch(`https://www.alphavantage.co/query?function=${pull_function}&symbol=${ticker}&apikey=A85G8HED7A54MTDR`)
  // .then(res => res.json())
  // .then((data) => console.log(data))

  return (
    <div>
      <NavBar/>
      <h1>Finance!</h1>
      <hr></hr>
    
      <StockPage/>
      <MyPortfolio/>
     
    </div>
  );
}

export default App;