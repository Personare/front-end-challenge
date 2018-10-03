import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.sass';

const navbar = (props) => (
  <nav className="Navbar">
    <ul>
      <li>
        <Link to="/">Game</Link>
      </li>
      <li>
        <Link to="/cartas">Cartas</Link>
      </li>
    </ul>
  </nav>
);

export default navbar;
