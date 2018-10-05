import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './Navbar.styl';

const navbar = (props) => (
  <nav className="Navbar">
    <ul>
      <NavigationItem to="/" label="Game" />
      <NavigationItem to="/cartas" label="Cartas" />
    </ul>
  </nav>
);

export default navbar;
