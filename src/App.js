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

  useEffect(() => {
    fetch("http://localhost:3000/stocks")
    .then(response => response.json())
    .then(items => {
        setStockDb(items);
    });
  }, []);



  // fetch(`https://www.alphavantage.co/query?function=${pull_function}&symbol=${ticker}&apikey=A85G8HED7A54MTDR`)
  // .then(res => res.json())
  // .then((data) => console.log(data))

  return (
    <div>
      <NavBar/>
      <StockPage stockDb={stockDb}/>
      {/* <MyPortfolio/> */}
    </div>
  );
}

export default App;