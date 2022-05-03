import React from "react";

function Search({ filterListings, seachText, setSearchText, listings, setListings }) {
  
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted")
    setListings(filterListings)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={seachText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
