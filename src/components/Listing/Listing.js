import React from 'react'
import './Listing.css';

class Listing extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  fetchListing(listingID) {
    return fetch(`http://localhost:3001/api/v1/listings/${listingID}`)
      .then(response => response.json())
      .then(listingDetails => listingDetails)
  }

  render() {
    let { name, listing_id, viewListingDetails, addToFavorites } = this.props;
    return(
      <article className="listing-card">
        <h2>{name}</h2>
        <button className="favorite-button" onClick={async () => addToFavorites( await this.fetchListing(listing_id))}>Favorite</button>
        <button onClick={() => viewListingDetails(listing_id)}>View Details</button>
        <div className="overlay"></div>
        <img src={`/images/${listing_id}_a.jpg`}></img>
      </article>
    )
  }
}

export default Listing;
