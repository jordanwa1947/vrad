import React from 'react'
import './Area.css';

class Area extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      listings: props.area.listings
    }
  }

  render() {
    let { area, viewListings} = this.props;
    return(
      <section className="area-card">
        <h3>{area.name}</h3>
        <p>Also known as {area.shortname}</p>
        <p>{area.description}</p>
        <button onClick={() => viewListings(area.id)}>View Listings</button>
      </section>
    )
  }
}

export default Area;
