import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import './styles.css';


export const Cards = () => {

    const [cartas, setCartas] = useState([])
    const [randomCard, setRandomCard] = useState(false)
    const [imageCard, setImageCard] = useState("")

    useEffect(() => {
        axios
            .get("https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json")
            .then((response) => {
                setCartas(response.data)
            }).catch((error) => { console.log(error) })
    }, [])

    const shuffle = () => {
        const shuffleCards = Math.floor(Math.random() * 78)
        setImageCard(cartas.cards[shuffleCards].image)
        setRandomCard(!false)

    }
    const mapCartas = cartas.cards && cartas.cards.map((card) => {
        return (

            < div onClick={shuffle} key={card.name} className="card">
                <img src={cartas.imageBackCard} alt="errorImage" />
            </div>
        )
    }) 
   
    return (
        <>
            <button className="button-start" onClick={()=>window.location.reload(false)}>Iniciar Jogo!</button>
            <div className="card_content">
            <div className="card_image">
                {randomCard ? (
                    <img src={cartas.imagesUrl + imageCard} alt="errorImage" />
                ) : (<div>
                    {mapCartas}
                </div>)}
            </div>
            </div>
        </>

    )
}
