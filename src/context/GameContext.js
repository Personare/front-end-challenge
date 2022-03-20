import React, { createContext, useState } from 'react';

const GameContext = createContext();
export default GameContext;

export function GameProvider({ children }) {
  const [gameOn, setGameOn] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const value = {
    gameOn,
    setGameOn,
    selectedCardId,
    setSelectedCardId
  }

  return (
    <GameContext.Provider value={value}>
      { children }
    </GameContext.Provider>
  );
}
