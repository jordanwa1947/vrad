import React from 'react'
import './Listing.css';

class Listing extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let { name, listing_id, viewListingDetails } = this.props;
    return(
      <article className="listing-card">
        <h2>{name}</h2>
        <button onClick={() => viewListingDetails(listing_id)}>View Details</button>
        <div className="overlay"></div>
        <img src={`/images/${listing_id}_a.jpg`}></img>
      </article>
    )
  }
}

export default Listing;
