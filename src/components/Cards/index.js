import React, { useContext, useEffect } from "react";
import { CardsContainer, FlipCard, FlipCardInner, CardFront, CardBack } from "./styles";
import { useNavigate } from "react-router-dom";
import GameContext from "../../context/GameContext";

export default function Cards() {
  const { 
    gameOn, 
    setGameOn, 
    setSelectedCardId,
    cards,
    setCards,
    cardUrl,
    setCardUrl,
    backCardUrl, 
    setBackCardUrl 
  } = useContext(GameContext);
  const navigate = useNavigate();

  useEffect(() => {
    setGameOn(false);
    fetch("./tarot.json").then(resp => {
      return resp.json();
    }).then(data => {
      setCards(data.cards);
      setCardUrl(data.imagesUrl);
      setBackCardUrl(data.imageBackCard);
    })
  }, []);

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
