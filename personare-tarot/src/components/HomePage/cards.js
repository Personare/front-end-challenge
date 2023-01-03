import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import './styles.css';


export const Cards = ({ flipped = false, id }) => {

    const [cartas, setCartas] = useState()

    useEffect(() => {
        axios
            .get("https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json")
            .then((response) => {
                setCartas(response.data)
            }).catch((error) => {console.log(error)})
    }, [])
   
    useEffect(() =>{
        axios
            .get()
            .then((response) => {
                setCartas(response.data)
            }).catch((error) => {console.log(error)})
    }, [])
    const urlBackImage = cartas && cartas.imageBackCard;

    const urlImage = cartas && cartas.imagesUrl;

    const cardContentClassNames = ['card_content']
    flipped && cardContentClassNames.push('card_content--flipped')
    

    const [cardName, setCardName] = useState("")

    return (
        <>
            <div>
                {cartas && cartas.cards.map((card) => {
                    if (card.image === cardName) {
                        return (
                            < div onClick={()=>setCardName('')} key={card.name} className="card">
                                <div className={cardContentClassNames.join('')} ></div>
                                <div className="card_image card_image--front card_image">

                                    <img  src={urlImage + cardName} alt="errorImage" />

                                </div>

                            </div>
                        )
                    } else {
                        return (
                            < div onClick={()=>setCardName(card.image)} key={card.name} >
                           
                                 <div className={cardContentClassNames.join('')} ></div>
                                <div className="card_image card_image--front card_image">
                                    <img  src={urlBackImage} alt="errorImage"/>
                                </div>

                            </div>
                        )}

                })}
            </div>
        </>

    )
}
