import React, { createContext, useState } from 'react';

const GameContext = createContext();
export default GameContext;

export function GameProvider({ children }) {
  const [gameOn, setGameOn] = useState(false);

  const value = {
    gameOn,
    setGameOn
  }

  return (
    <GameContext.Provider value={value}>
      { children }
    </GameContext.Provider>
  );
}
