import React, { useState } from "react";
import tarotData from "../tarot.json";


const ImageCard = () => {
    const image = tarotData.cards

    console.log(image)

    return (
        <div>
             {image.map((card, index) => (
                <img key={index} src={tarotData.imagesUrl + card.image} alt={card.name}></img>
             ))}
        </div>  
    )
}

export default ImageCard