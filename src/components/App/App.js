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
      fireRedirect: false
    };
  }

  login = (name, travelReason) => {
    this.setState({name: name, travelReason: travelReason})
    this.setState({fireRedirect: true})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path='/' render={() => <Login login={this.login}/>} />
          {this.state.fireRedirect && <Redirect to='/areas'/>}
          <Route exact path='/areas' component={Areas} />
          <Route path='/areas/:area-id/listings' component={Listings} />
        </main>
      </div>
    )
  }
}

export default App;
