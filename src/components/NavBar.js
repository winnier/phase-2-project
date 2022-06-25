// import React from "react";

// function NavBar() {

//   return (
//     <div>
//       <h1 className="App-logo App-header">Finance!</h1>     
//     </div>
//   );

  
// }

// export default NavBar;
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {

  return (
  
    <nav className="nav">
      <a>
        <img className="nav-logo" src="./images/bull-market.png" alt="bull logo"></img>
      
      <Link to="/" className="site-title">FlatDaq</Link>
      </a>
        <ul>
          <CustomLink to="/stockpage">Stocks</CustomLink>
          <CustomLink to="/watchlist">My Watchlist</CustomLink>
          <CustomLink to="/stockdetails">Details</CustomLink>
        </ul>
    </nav>

  )
}

function CustomLink({ to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={ to } {...props}>
        { children }
      </Link>
    </li>
  )
}
