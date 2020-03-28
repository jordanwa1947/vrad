import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Areas from '../Areas/Areas';
import Listings from '../Listings/Listings';
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

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path='/' render={() => <Login login={this.login}/>} />
          <Redirect to={this.state.pathString} />
          <Route exact path='/areas' render={() => <Areas viewListings={this.viewListings}/>} />
          <Route path='/areas/:area_ID/listings' component={Listings} />
        </main>
      </div>
    )
  }
}

export default App;
