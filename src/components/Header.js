import React from "react";
import Search from "./Search";

function Header({ filterListings, searchText, setSearchText, listings, setListings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterListings={filterListings} searchText={searchText} setSearchText={setSearchText} listings={listings} setListings={setListings} />
    </header>
  );
}

export default Header;
