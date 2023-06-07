// src/components/TarotGame.js
import React, { useState } from "react";
import TarotDeck from "./TarotDeck";

const TarotGame = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  return (
    <div className="tarot-game">
      {selectedCard ? (
        <div className="card-details">
          <h2>{selectedCard}</h2>
          <p>Descrição da carta...</p>
        </div>
      ) : (
        <TarotDeck onCardClick={handleCardClick} />
      )}
    </div>
  );
};

export default TarotGame;
