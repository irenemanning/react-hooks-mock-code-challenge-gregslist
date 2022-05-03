import React, { useState } from "react";

function ListingCard({ listing, deleteListing }) {
  let {id, description, updateListing, image, location} = listing
  const [faveBtn, setFaveBtn] = useState(false)
  function toggleFavorite(){
    setFaveBtn(!faveBtn)
  }
  function handleDelete() {
    fetch("http://localhost:6001/listings/" + id, {
      method: "DELETE",
    })
    .then((r)=>r.json())
    .then(()=> deleteListing(listing))
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {faveBtn ? (
          <button onClick={toggleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
