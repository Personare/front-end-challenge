import React from "react";
import {cards, imageBackCard,imagesUrl} from "./tarot.json"

export function Cards() {
    const imageCard = {...imageBackCard, ...imagesUrl, ...cards}
    return (
        <ul>
            {cards.map((card) => {
                return <Card name={card.name} image={card.image}/>
            })}
        </ul>
    )
}
