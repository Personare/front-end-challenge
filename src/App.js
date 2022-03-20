import React from "react";
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
  return (
    <Router>
      <Header />
      <Game />
    </Router>
  );
}
