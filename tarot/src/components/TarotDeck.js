import React, { useState } from "react";
import Card from "./Card";
import tarotData from "../tarot.json";
import { Deck } from "../styles/CardStyle";


const TarotDeck = () => {
  const [TarotData, setTarotData] = useState(tarotData.cards);



  return (
    <div className="tarot-deck">
      <Deck>
        {TarotData.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            image={tarotData.imagesUrl + card.image}
            imageBackCard={tarotData.imageBackCard}
          />
        ))}
      </Deck>

    </div>
  );
};

export default TarotDeck;