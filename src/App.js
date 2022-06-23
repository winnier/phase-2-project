import React, { useState, useEffect } from "react"
import './App.css';
import NavBar from './components/NavBar'
import StockPage from './components/StockPage'
import MyPortfolio from './components/Watchlist'
import StockDetails from "./components/StockDetails";
import { Route, Routes } from "react-router-dom"
import Watchlist from "./components/Watchlist";
import { useNavigate } from 'react-router-dom'



function App() {

// let Component
//   switch (window.location.pathname) {
//     case "/":
//       Component= App
//       break
//     case "/watchlist":
//       Component= MyPortfolio
//       break  
//     case "/stockpage":
//       Component= StockPage
//       break
//     case "/stockdetails":
//       Component= StockDetails
//       break  
//   }




  const [stockDb, setStockDb] = useState([])
  const [displayList, setDisplayList] = useState([])
  const [watchlist, setWatchlist] = useState([])
  const [detailList, setDetailList] = useState([])

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

  let navigate = useNavigate()


  function handleAddToDetails(newItem) {
    if (detailList.indexOf(newItem) === -1) {
      setDetailList([...detailList, newItem])
      navigate("../stockdetails", {replace: true})
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
      <NavBar />
      <div className="container"></div>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/watchlist" element={<Watchlist 
            watchlist={ watchlist }
            handleDeletePortfolio={ handleDeletePortfolio }
            onCickAddToDetails={handleAddToDetails}
          />} />
          <Route path="/stockpage" element={<StockPage
            displayList={ displayList }
            handleAddToPortfolio={ handleAddToPortfolio }
            handleSearch={handleSearch}
            handleAddToDetails={ handleAddToDetails }
            detailList={ detailList }/>} />
          <Route path="/stockdetails" element={<StockDetails detailList={ detailList } />} />
        </Routes>
      {/* <h2>My Watchlist</h2>
      <MyPortfolio 
        watchlist={ watchlist }
        handleDeletePortfolio={ handleDeletePortfolio }
        onCickAddToDetails={handleAddToDetails}
      />
      <br></br>
      <hr></hr>
      <StockPage
        displayList={ displayList }
        handleAddToPortfolio={ handleAddToPortfolio }
        handleSearch={handleSearch}
        handleAddToDetails={ handleAddToDetails }
        detailList={ detailList }/>
      <hr></hr>
      <StockDetails detailList={ detailList } /> */}
    </div>
  );
}

export default App;