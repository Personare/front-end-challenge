import React, { createContext, useState } from 'react';

const GameContext = createContext();
export default GameContext;

export function GameProvider({ children }) {
  const [gameOn, setGameOn] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [cards, setCards] = useState([]);
  const [cardUrl, setCardUrl] = useState("");
  const [backCardUrl, setBackCardUrl] = useState("");

  const value = {
    gameOn,
    setGameOn,
    selectedCardId,
    setSelectedCardId,
    cards,
    setCards,
    cardUrl,
    setCardUrl,
    backCardUrl,
    setBackCardUrl
  }

  return (
    <GameContext.Provider value={value}>
      { children }
    </GameContext.Provider>
  );
}
