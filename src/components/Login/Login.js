import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.login(this.state.username)
  }

  render() {
    return (
      <form>
        <h3>Please log in</h3>
        <input
          type='text'
          placeholder='username'
          value={this.state.username}
          name='username'
          onChange={this.handleChange}/>
        <input
          type='password'
          placeholder='password'
          value={this.state.password}
          name='password'
          onChange={this.handleChange}/>
        <button
          onClick={this.handleClick}>
          Log in
        </button>
      </form>
    )
  }
}

export default Login
