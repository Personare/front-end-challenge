import React from "react";

import "./game.scss";

const Game = ({ children }) => (
  <div className="game">
    <div className="game__background" />
    <div className="game__content">{children}</div>
  </div>
);

export default Game;
