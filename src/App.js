import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App() {

  let ticker = 'CSCO'

  let pull_function = 'TIME_SERIES_DAILY'

  fetch(`https://www.alphavantage.co/query?function=${pull_function}&symbol=${ticker}&apikey=A85G8HED7A54MTDR`)
  .then(res => res.json())
  .then((data) => console.log(data))

  return (
    <div>
      <h1>Finance!</h1>
    </div>
  );
}

export default App;