import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchText, setSearchText] = useState("")
  const filterListings = listings.filter(
    (listing)=> listing.description.toLowerCase().includes(searchText.toLowerCase())
  );
  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then((r)=>r.json())
    .then((data)=> {
      setListings(data)
    });
  }, []);

  return (
    <div className="app">
      <Header filterListings={filterListings} listings={listings} setListings={setListings} seachText={searchText}
      setSearchText={setSearchText} />
      <ListingsContainer listings={listings} setListings={setListings}/>
    </div>
  );
}

export default App;
