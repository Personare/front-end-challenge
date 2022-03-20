import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import Game from "./components/Game";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/game-on" element={<Game />}/>
          {/* <Route path="/end-game" element={<Result />}/> */}
        </Routes>
    </Router>
  );
}
