import React from 'react';
import './Header.css';
import UserProfile from '../UserProfile/UserProfile'

const Header = (props) => {

  function greeting() {
    if(props.path !== '/') {
      return `Welcome, ${props.name}!`
    } else {
      return ''
    }
  }

  return (
    <header>
      <h1>
       {greeting()} vrad. <span id="headline">— vacation rentals around denver.</span>
      </h1>
      <nav>
        <button onClick={props.logout} >Log Out</button>
      </nav>
      <UserProfile name={props.name} travelReason={props.travelReason}/>
    </header>
  )
}

export default Header;
