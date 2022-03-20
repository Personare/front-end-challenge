import React, { useContext } from "react";
import CardsContainer from "./styles";
import tarot from "../../../tarot.json";
import { useLocation, useNavigate } from "react-router-dom";
import GameContext from "../../context/GameContext";

export default function Cards() {
  const cards = tarot.cards;
  const backCardUrl = tarot.imageBackCard;
  const cardUrl = tarot.imagesUrl;
  const { gameOn, setGameOn } = useContext(GameContext);
  const location = useLocation();
  const navigate = useNavigate();

  if(location.pathname !== "/") {
    setGameOn(true);
  }

  function handleClick(e) {
    e.preventDefault();
    navigate("/end-game");
  }

  return (
    <CardsContainer gameOn={gameOn}>
      {
        cards.map((c, i) => {
          if(!gameOn) {
            return <img key={i} src={cardUrl + c.image}/>;
          } else {
            return <img key={i} src={backCardUrl} onClick={handleClick}/>;
          }
        })
      }
    </CardsContainer>
  );
}
