import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from "./components/Header";
import Game from "./components/Game";
import { GameProvider } from "./context/GameContext";

export default function App() {
  return (
    <Router>
      <GameProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Game />}/>
          <Route path="/game-on" element={<Game />}/>
          {/* <Route path="/end-game" element={<Result />}/> */}
        </Routes>
      </GameProvider>
    </Router>
  );
}
