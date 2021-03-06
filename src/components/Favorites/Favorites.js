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
    return this.props.favoriteListings.map(listing => {
      return (
        <Listing
          key={listing.listing_id}
          listing_id={listing.listing_id}
          name={listing.name}
          viewListingDetails={this.props.viewListingDetails}
          addToFavorites={this.props.addToFavorites}
        />
      )
    })
  }

  render() {
    return (
      <section className="listings-container">
        <h2 id="listings-container-header">Favorites</h2>
        {!this.props.favoriteListings.length ? <h3>No Favorites</h3> : this.buildListingComponents()}
      </section>
    )
  }

}

export default Favorites;
