import { 
  CardContainer,
  CardDescription, 
  CardFace, 
  CardInfo, 
  CardName, 
  Scene 
} from "./style";
import React, { useContext } from "react";
import { CardContext } from "../../contexts/cardContext";
import { Container } from "../Container/style";

const Card = () => {

  const {card, image_path, back_card, flip} = useContext(CardContext)

  return (
      <Container>
        {card.map((card, index) => {
          return (
              <Scene key={index}>
                <CardContainer className={`card ${flip ? "is-flipped":""}`}>
                  <CardFace className="card__face--front">
                    <img src={`${image_path}${card.image}`} alt={card.name} />
                    <CardInfo>
                      <CardName>{card.name}</CardName>
                      <hr />
                      <CardDescription>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                      </CardDescription>
                    </CardInfo>
                  </CardFace>
                  <CardFace className="card__face--back">
                    <img src={`${back_card}`} alt={card.name} />
                  </CardFace>
                </CardContainer>
              </Scene>
          )
        })}
      </Container>
  )
}

export default Card;