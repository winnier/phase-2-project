import React from "react";

function SearchBar({ handleSearch }) {

  // function searchFilter(e) {
  //   handleSearch(e.)
  // }

  return (
    <div>
      <form>
        <h4>Search</h4>
        <input placeholder="AAPL, CSCO, NFLX..." onChange={e => handleSearch(e.target.value)}/>
      </form>
    </div>
  );
}

export default SearchBar;