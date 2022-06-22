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

  function handleAddToPortfolio(newItem) {
    if (watchlist.indexOf(newItem) === -1) {
       setWatchlist([...watchlist, newItem]) 
    } else {
      console.log("Stock is already in portfolio!")
    }
  } 

  function handleDeletePortfolio(deleteItem) {
    const foundIndex = watchlist.findIndex(item => deleteItem.Symbol === item.Symbol);
    if (foundIndex === -1) {
        console.log("Stock is not in portfolio");
    } else {
        const copyArray = [...watchlist];
        copyArray.splice(foundIndex, 1);
        setWatchlist(copyArray);
    }
}

  // fetch(`https://www.alphavantage.co/query?function=${pull_function}&symbol=${ticker}&apikey=A85G8HED7A54MTDR`)
  // .then(res => res.json())
  // .then((data) => console.log(data))

  return (
    <div>
      <NavBar/>
      <StockPage stockDb={ stockDb } handleAddToPortfolio={ handleAddToPortfolio }/>
      <hr></hr>
      <MyPortfolio watchlist={ watchlist } handleDeletePortfolio={ handleDeletePortfolio } />
    </div>
  );
}

export default App;