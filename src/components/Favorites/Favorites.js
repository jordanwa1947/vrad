import React from 'react';
import Listing from '../Listing/Listing';
import './Favorites.css';

class Favorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteListings: props.favoriteListings
    }
  }

  buildListingComponents = () => {
    return this.state.favoriteListings.map(listing => {
      return (
        <Listing
          key={listing.listing_id}
          listing_id={listing.listing_id}
          name={listing.name}
          viewListingDetails={this.props.viewListingDetails}
        />
      )
    })
  }

  render() {
    return (
      <section className="listings-container">
        <h2 id="listings-container-header">Favorites in {this.state.area}</h2>
        {this.buildListingComponents()}
      </section>
    )
  }

}

export default Favorites;
