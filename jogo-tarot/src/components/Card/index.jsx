import { CardContainer, CardDescription, CardFace, Scene } from "./style";
import React, { useContext } from "react";
import { CardContext } from "../../contexts/cardContext";
import { Container } from "../Container/style";

const Card = () => {
    const { card, image_path, back_card, flip } = useContext(CardContext);

    return (
        <Container>
            {card.map((card) => {
                return (
                    <Scene>
                        <CardContainer
                            className={`card ${flip ? "is-flipped" : ""}`}
                        >
                            <CardFace className="card__face--front">
                                <img
                                    src={`${image_path}${card.image}`}
                                    alt={card.name}
                                />
                                <CardDescription>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </CardDescription>
                            </CardFace>
                            <CardFace className="card__face--back">
                                <img src={`${back_card}`} alt={card.name} />
                            </CardFace>
                        </CardContainer>
                    </Scene>
                );
            })}
        </Container>
    );
};

export default Card;
