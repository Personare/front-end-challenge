import React, { useContext } from "react";
import { ResultContainer, CardContainer } from "./styles";
import GameContext from "../../context/GameContext";

export default function Result() {
  const { selectedCardId, cards, cardUrl } = useContext(GameContext);
  
  return (
    <ResultContainer>
      <CardContainer>
        <img src={cardUrl + "arcano" + selectedCardId + ".jpg"}/>
        <h2>{cards[selectedCardId - 1].name}</h2>
      </CardContainer>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere mollitia vel sint obcaecati quam nesciunt blanditiis magnam saepe repudiandae. Dignissimos et id, voluptatem consequatur iste dolores exercitationem aperiam dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum nulla tempora itaque aperiam dicta esse et veniam hic. Dolorum, voluptatem minima illo quas quidem expedita necessitatibus vitae fuga ipsa? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dicta suscipit voluptatum nulla eaque error sunt saepe. Dolorem possimus, doloribus exercitationem ratione unde architecto voluptates dicta accusantium, harum, magni obcaecati?</p>
    </ResultContainer>
  );
}
