import React from 'react';
import './Listings.css';

class Listings extends React.Component {
  constructor() {
    super()
    this.state = {
      listings: []
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
      .then(areaDetails => areaDetails.listings.map(listing => {
        return this.fetchListing(listing)
      }))
      .then(listingPromises => Promise.all(listingPromises))
      .then(data => this.setState({listings: data}))
  }

  render() {
    return(
      <p>Sup brah</p>
    )
  }

}

export default Listings;
