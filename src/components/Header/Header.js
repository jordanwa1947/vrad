import React from 'react';
import './Header.css';
import UserProfile from '../UserProfile/UserProfile'
import { NavLink } from 'react-router-dom'

const Header = (props) => {

  function headerLogic() {
    if(props.path !== '/') {
      return (
        <>
          <h1>
           Welcome {props.name}! vrad. <span id="headline">— vacation rentals around denver.</span>
          </h1>
          <nav>
            <button onClick={props.logout}>Log Out</button>
            <button onClick={props.goToFavorites}>{props.favoriteCount} Favorites</button>
          </nav>
          <UserProfile name={props.name} travelReason={props.travelReason}/>
        </>
      )
    } else {
      return (
        <>
          <h1>
           vrad. <span id="headline">— vacation rentals around denver.</span>
          </h1>
        </>
      )
    }
  }

  return (
    <header>
      {headerLogic()}
    </header>
  )
}

export default Header;
