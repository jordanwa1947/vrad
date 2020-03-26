import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      travelReason: 'leisure',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.login(this.state.name, this.state.travelReason)
  }

  render() {
    return (
      <form>
        <h3>Welcome!</h3>
        <input
          type='text'
          placeholder='name'
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
          required/>
        <input
          type='email'
          placeholder='email'
          value={this.state.email}
          name='email'
          onChange={this.handleChange}
          required/>
        <label htmlFor="travelReason">Select a reason for booking</label>
        <select
          name="travelReason"
          required
          onChange={this.handleChange}>
          <option value="leisure" defaultValue>Leisure</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
        <button
          onClick={this.handleClick}>
          Log in
        </button>
      </form>
    )
  }
}

export default Login
