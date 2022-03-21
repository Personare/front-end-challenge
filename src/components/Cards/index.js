import React, { useContext } from "react";
import { CardsContainer, FlipCard, FlipCardInner, CardFront, CardBack } from "./styles";
import tarot from "../../../tarot.json";
import { useLocation, useNavigate } from "react-router-dom";
import GameContext from "../../context/GameContext";

export default function Cards() {
  const cards = tarot.cards;
  const backCardUrl = tarot.imageBackCard;
  const cardUrl = tarot.imagesUrl;
  const { gameOn, setGameOn ,setSelectedCardId } = useContext(GameContext);
  const location = useLocation();
  const navigate = useNavigate();

  if(location.pathname !== "/") {
    setGameOn(true);
  }

  function handleClick(e) {
    e.preventDefault();
    if (gameOn) {
      setSelectedCardId(Math.round(Math.random() * (cards.length - 1)));
      navigate("/end-game");
    }
  }

  return (
    <CardsContainer gameOn={gameOn}>
      {
        cards.map((c, i) => {
          return (
            <FlipCard key={i} gameOn={gameOn} onClick={handleClick}>
              <FlipCardInner>
                <CardFront>
                  <img src={cardUrl + c.image}/>
                </CardFront>
                <CardBack>
                  <img src={backCardUrl}/>
                </CardBack>
              </FlipCardInner>
            </FlipCard>
          );
        })
      }
    </CardsContainer>
  );
}
