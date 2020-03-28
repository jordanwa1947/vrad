import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <header>
      <h1>Welcome, {props.name}! vrad. <span id="headline">— vacation rentals around denver.</span></h1>
      <nav>
        <button>Log Out</button>
      </nav>
    </header>
  )
}

export default Header;
