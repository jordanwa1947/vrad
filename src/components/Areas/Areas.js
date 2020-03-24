import React from 'react';
import Area from '../Area/Area';

class Areas extends React.Component {
  constructor() {
    super()
    this.state = {
      areas: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areaData => {
        const promises = areaData.areas.map(area => {
          return fetch(`http://localhost:3001${area.details}`)
            .then(response => response.json())
            .then(areaDetails => {
              return {
                shortname: area.area,
                name: areaDetails.name,
                description: areaDetails.about
              }
            })
        })
        return Promise.all(promises)
      })
      .then(areaData => {
        this.setState({
          areas: areaData
        })
      })
  }

  buildAreaComponents = () => {
    return this.state.areas.map(area => {
      return <Area key={area.id} area={area} />
    })
  }

  render() {
    return(
      <section>
        {this.buildAreaComponents()}
      </section>
    )
  }
}

export default Areas;
