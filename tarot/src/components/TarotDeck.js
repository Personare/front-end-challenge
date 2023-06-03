import React, { useState } from "react";
import Card from "./Card";
import tarotData from "../tarot.json";
import { Deck } from "../styles/CardStyle";
const TarotDeck = () => {
  const [shuffledDeck, setShuffledDeck] = useState(tarotData.cards);

  const shuffleDeck = () => {
    const shuffledCards = [...shuffledDeck];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }
    setShuffledDeck(shuffledCards);
  };

  return (
    <div className="tarot-deck">
      <Deck>
        {shuffledDeck.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            image={tarotData.imagesUrl + card.image}
            imageBackCard={tarotData.imageBackCard}
          />
        ))}
      </Deck>
      <button onClick={shuffleDeck}>Iniciar Jogo</button>
    </div>
  );
};

export default TarotDeck;