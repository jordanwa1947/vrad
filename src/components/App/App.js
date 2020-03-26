import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Areas from '../Areas/Areas';
import './App.css';

import { Route, NavLink } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      travelReason: ''
    };
  }

  login = (username, travelReason) => {
    this.setState({username: username, travelReason: travelReason})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path='/areas' component={Areas} />
          <Route exact path='/' render={() => <Login login={this.login}/>} />
        </main>
      </div>
    )
  }
}

export default App;
