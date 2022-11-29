import React from "react";

function Search({ setSearchTerm }) {

  const onSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search For: </label>
      <input
        type="text"
        id="search"
        // style={{width: 100}}
        placeholder="Trinkets, odds and ends, that sort of thing..."
        onChange={(e) => onSearch(e)}
      />
    </div>
  );
}

export default Search;