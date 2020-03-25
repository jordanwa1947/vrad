import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Areas from '../Areas/Areas';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  login = (username) => {
    this.setState({username: username})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Login login={this.login}/>
        </main>
      </div>
    )
  }
}

export default App;
