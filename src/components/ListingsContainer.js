import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  function updateListings(alteredListing){
    const copyListing = [...listings]
    const oldListing = listings.find((listing) => listings.id === alteredListing.id)
    const i = listings.indexOf(oldListing)
    copyListing.splice(i, 1, alteredListing)
    setListings(copyListing)
  }
  function deleteListing(deletedListing) {
    const filterListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(filterListings)
  }
  const mapListings = listings.map((listing)=> (<ListingCard listing={listing} updateListings={updateListings} deleteListing={deleteListing} key={listing.id}/>))
  return (
    <main>
      <ul className="cards">
        {mapListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
