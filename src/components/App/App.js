import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Areas from '../Areas/Areas';
import Listings from '../Listings/Listings';
import ListingDetails from '../ListingDetails/ListingDetails';
import './App.css';

import { Route, NavLink, Redirect } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      travelReason: '',
      pathString: ''
    };
  }

  login = (name, travelReason) => {
    this.setState({
      name: name,
      travelReason: travelReason,
      pathString: '/areas'
    })
  }

  viewListings = (areaID) => {
    this.setState({pathString: `/areas/${areaID}/listings`})
  }

  viewListingDetails = (listingID) => {
    this.setState({pathString: `/api/v1/listings/${listingID}`})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Redirect to={this.state.pathString} />
          <Route
            exact path='/'
            render={() => <Login login={this.login}/>}
          />
          <Route
            exact path='/areas'
            render={() =>
              <Areas viewListings={this.viewListings}/>}
          />
          <Route
            path='/areas/:areaID/listings'
            render={({match}) =>
              <Listings
                viewListingDetails={this.viewListingDetails}
                match={match}/>}
          />
          <Route
            path='/api/v1/listings/:listingID'
            render={({match}) => <ListingDetails
              viewListings={this.viewListings}
              match={match}/>
          }
          />
        </main>
      </div>
    )
  }
}

export default App;
