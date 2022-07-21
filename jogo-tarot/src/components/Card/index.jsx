import { CardContent, InsideContainer } from "./style";
import React, { useContext } from "react";
import { CardContext } from "../../contexts/cardContext";
import { Container } from "../Container/style";

const Card = () => {

  const {card, image_path, back_card} = useContext(CardContext)

  return (
    <>
      <Container>
        {card.map((card) => {
          return (
            <CardContent key={card.name}>
              <InsideContainer>
                <img src={`${image_path}${card.image}`} alt={card.name} />
                <div className="card-info">
                  <div className="card-name">
                    {card.name}
                  </div>
                  <hr />
                  <div className="card-description">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                  </div>
                </div>
              </InsideContainer>
            </CardContent>
          )
        })}
      </Container>
      <img src={back_card} alt="" />
      <button>Iniciar o Jogo</button>
    </>
  )
}

export default Card;