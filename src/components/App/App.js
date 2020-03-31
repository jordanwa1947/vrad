import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Areas from '../Areas/Areas';
import Listings from '../Listings/Listings';
import ListingDetails from '../ListingDetails/ListingDetails';
import UserProfile from '../UserProfile/UserProfile';
import Favorites from '../Favorites/Favorites';
import './App.css';

import { Route, NavLink, Redirect } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      travelReason: '',
      pathString: '/',
      favorites: []
    };
  }

  login = (name, travelReason) => {
    this.setState({
      name: name,
      travelReason: travelReason,
      pathString: '/areas'
    })
  }

  logout = () => {
    this.setState({
      pathString: '/'
    })
  }

  viewListings = (areaID) => {
    this.setState({pathString: `/areas/${areaID}/listings`})
  }

  viewListingDetails = (listingID) => {
    this.setState({pathString: `/listings/${listingID}`})
  }

  addToFavorites = (favorite) => {
    this.setState({
      favorites: this.state.favorites.concat([favorite])
    })
  }

  goToFavorites = () => {
    this.setState({pathString: '/favorites'})
  }

  render() {
    return (
      <div className="App">
        <Header
          goToFavorites={this.goToFavorites}
          name={this.state.name}
          logout={this.logout}
          travelReason={this.state.travelReason}
          path={this.state.pathString}
        />
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
            exact path='/areas/:areaID/listings'
            render={({match}) =>
              <Listings
                viewListingDetails={this.viewListingDetails}
                match={match}/>}
          />
          <Route
            exact path='/listings/:listingID'
            render={({match}) => <ListingDetails
              viewListings={this.viewListings}
              match={match}
              addToFavorites={this.addToFavorites}
            />
          }
          />
          <Route
            exact path='/favorites'
            render={({match}) => <Favorites
              favoriteListings={this.state.favorites}
              viewListingDetails={this.viewListingDetails}
              match={match}
            />
          }
          />
        </main>
      </div>
    )
  }
}

export default App;
