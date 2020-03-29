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
    let { listing, viewListings} = this.props;
    return(
      <article className="listing-card">
        <h2>{listing.name}</h2>
        <p>{listing.listing_id}</p>
        <button>View Details</button>
      </article>
    )
  }
}

export default Listing;
