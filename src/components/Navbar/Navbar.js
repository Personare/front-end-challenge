import React from 'react';
import { Link } from 'react-router-dom';

import NavigationItem from './NavigationItem/NavigationItem';
import './Navbar.sass';

const navbar = (props) => (
  <nav className="Navbar">
    <ul>
      <NavigationItem to="/" label="Game" />
      <NavigationItem to="/cartas" label="Cartas" />
    </ul>
  </nav>
);

export default navbar;
