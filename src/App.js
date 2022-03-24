import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { GameProvider } from "./context/GameContext";

import Header from "./components/Header";
import Game from "./components/Game";
import Result from "./components/Result";

export default function App() {
  return (
    <Router>
      <GameProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Game />}/>
          <Route path="/end-game" element={<Result />}/>
        </Routes>
      </GameProvider>
    </Router>
  );
}
