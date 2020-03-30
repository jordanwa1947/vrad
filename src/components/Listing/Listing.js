import React from 'react'
import './Listing.css';

class Listing extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      details: props.listing.details
    }
  }

  render() {
    let { listing, viewListingDetails } = this.props;
    return(
      <article className="listing-card">
        <h2>{listing.name}</h2>
        <button onClick={() => viewListingDetails(listing.listing_id)}>View Details</button>
        <div className="overlay"></div>
        <img src={`/images/${listing.listing_id}_a.jpg`}></img>
      </article>
    )
  }
}

export default Listing;
