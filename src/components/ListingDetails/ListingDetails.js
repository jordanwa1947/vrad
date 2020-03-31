import React from 'react'
import './ListingDetails.css';

class ListingDetails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      addToFavorites: this.props.addToFavorites,
      listing: {
        name: '',
        listing_id: '',
        address: {
          street: '',
          zip: ''
        },
        details: {
          features: []
        }
      }
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props
    fetch(`http://localhost:3001/api/v1/listings/${params.listingID}`)
      .then(response => response.json())
      .then(areaDetails => this.setState({listing: areaDetails}))
  }

  render() {
    const { listing } = this.state
    return(
      <section>
        <h2>Listing Detail for {listing.name}</h2>
        <div className="listing-details-container">
          <section className="listing-images">
            <img src={`/images/${listing.listing_id}_a.jpg`}></img>
            <img src={`/images/${listing.listing_id}_b.jpg`}></img>
            <img src={`/images/${listing.listing_id}_c.jpg`}></img>
          </section>
          <h4>Features:</h4>
          {listing.details.features.map((feature) => {
            return (<p>{feature}</p>)
          })}
          <p>Beds: {listing.details.beds}</p>
          <p>Baths: {listing.details.baths}</p>
          <p>Address: {listing.address.street}, {listing.address.zip}</p>
          <p>Cost Per Night:  ${listing.details.cost_per_night}</p>
          <button onClick={() => this.state.addToFavorites(this.state.listing)}>
            Favorite
          </button>
          <button>Back</button>
        </div>
      </section>
    )
  }
}

export default ListingDetails;
