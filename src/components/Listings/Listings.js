import React from 'react';
import Listing from '../Listing/Listing';
import './Listings.css';

class Listings extends React.Component {
  constructor() {
    super()
    this.state = {
      listings: [],
      favorites: [],
      area: ''
    }
  }

  fetchListing(listingURL) {
    return fetch(`http://localhost:3001${listingURL}`)
    .then(response => response.json())
    .then(listing => listing)
  }

  componentDidMount() {
    const { match: { params } } = this.props
    fetch(`http://localhost:3001/api/v1/areas/${params.areaID}`)
      .then(response => response.json())
      .then(areaDetails => {
        this.setState({area: areaDetails.name})
        return areaDetails.listings.map(listing => {
          return this.fetchListing(listing)
        })
      })
      .then(listingPromises => Promise.all(listingPromises))
      .then(data => this.setState({listings: data}))
  }

  buildListingComponents = () => {
    return this.state.listings.map(listing => {
      return (
        <Listing
          key={listing.id}
          listing={listing}
          viewListingDetails={this.props.viewListingDetails}
        />
      )
    })
  }

  render() {
    return (
      <section className="listings-container">
        <h2 id="listings-container-header">Listings in {this.state.area}</h2>
        {this.buildListingComponents()}
      </section>
    )
  }

}

export default Listings;
