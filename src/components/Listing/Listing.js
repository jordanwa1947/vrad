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
        <button>View Details</button>
        <div className="overlay"></div>
        <img src={`/images/${listing.listing_id}_a.jpg`}></img>
      </article>
    )
  }
}

export default Listing;
