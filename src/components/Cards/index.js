import React from "react";
import CardsContainer from "./styles";
import tarot from "../../../tarot.json";
import { useLocation } from "react-router-dom";

export default function Cards() {
  const location = useLocation();
  const cards = tarot.cards;
  const backCardUrl = tarot.imageBackCard;
  const cardUrl = tarot.imagesUrl;

  return (
    <CardsContainer>
      {
        cards.map((c, i) => {
          if(location.pathname === "/") {
            return <img key={i} src={cardUrl + c.image}/>;
          } else {
            return <img key={i} src={backCardUrl}/>;
          }
        })
      }
    </CardsContainer>
  );
}
