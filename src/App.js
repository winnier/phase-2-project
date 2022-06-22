import React, { useState, useEffect } from "react"
import './App.css';
import NavBar from './components/NavBar'
import StockPage from './components/StockPage'
import MyPortfolio from './components/MyPortfolio'



function App() {

  let ticker = 'CSCO'

  let pull_function = 'GLOBAL_QUOTE'

  const [stockDb, setStockDb] = useState([])
  const [displayList, setDisplayList] = useState([])
  const [watchlist, setWatchlist] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/stocks")
    .then(response => response.json())
    .then(items => {
        setStockDb(items);
        setDisplayList(items);
    });
  }, []);

  function handleAddToPortfolio(newItem) {
    if (watchlist.indexOf(newItem) === -1) {
       setWatchlist([...watchlist, newItem]) 
    }
  }

  function handleSearch(searchText) {
    setDisplayList(stockDb.filter(item => {
      let nameMatch = item.Name.toLowerCase().includes(searchText.toLowerCase())
      let tickerMatch = item.Symbol.toLowerCase().includes(searchText.toLowerCase())
      return nameMatch || tickerMatch
    }))
  }

  function handleDeletePortfolio(deleteItem) {
    const foundIndex = watchlist.findIndex(item => deleteItem.Symbol === item.Symbol);
    if (foundIndex !== -1) {
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
      <h2>My Watchlist</h2>
      <MyPortfolio watchlist={ watchlist } handleDeletePortfolio={ handleDeletePortfolio }/>
      <hr></hr>
      <StockPage displayList={ displayList } handleAddToPortfolio={ handleAddToPortfolio }  handleSearch={handleSearch}/>
    </div>
  );
}

export default App;