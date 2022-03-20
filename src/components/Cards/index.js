import React, { useContext } from "react";
import CardsContainer from "./styles";
import tarot from "../../../tarot.json";
import { useLocation } from "react-router-dom";
import GameContext from "../../context/GameContext";

export default function Cards() {
  const { gameOn, setGameOn } = useContext(GameContext);
  const location = useLocation();
  const cards = tarot.cards;
  const backCardUrl = tarot.imageBackCard;
  const cardUrl = tarot.imagesUrl;

  if(location.pathname !== "/") {
    setGameOn(true);
  }

  return (
    <CardsContainer gameOn={gameOn}>
      {
        cards.map((c, i) => {
          if(!gameOn) {
            return <img key={i} src={cardUrl + c.image}/>;
          } else {
            return <img key={i} src={backCardUrl}/>;
          }
        })
      }
    </CardsContainer>
  );
}
