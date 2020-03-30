import React from 'react';
import Area from '../Area/Area';
import './Areas.css';
import { Redirect } from 'react-router-dom'


class Areas extends React.Component {
  constructor() {
    super()
    this.state = {
      areas: [],
      currentArea: null
    }
  }

  fetchAreaDetails(areaData) {
    const promises = areaData.areas.map(area => {
      return fetch(`http://localhost:3001${area.details}`)
        .then(response => response.json())
        .then(areaDetails => {
          return {
            id: areaDetails.id,
            shortname: area.area,
            name: areaDetails.name,
            description: areaDetails.about
          }
        })
    })
    return Promise.all(promises)
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areaData => this.fetchAreaDetails(areaData))
      .then(areaDetails => {
        this.setState({
          areas: areaDetails
        })
      })
  }

  buildAreaComponents = () => {
    return this.state.areas.map(area => {
      return <Area key={area.id} area={area} viewListings={this.props.viewListings} />
    })
  }

  render() {
    return(
      <section className="areas-container">
        {this.buildAreaComponents()}
      </section>
    )
  }
}

export default Areas;
