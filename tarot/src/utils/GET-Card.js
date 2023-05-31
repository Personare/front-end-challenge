import React, { useEffect, useState } from "react";
import tarotData from "../tarot.json"
import axios from "axios";

function GetCard(){
    const [card, setCard] = useState([])

    useEffect(() => {
        setCard(tarotData)
      }, []);

      console.log(card)
  return (
    <div>
      <h2>Cartas do Tarot</h2>
      <ul>
       {card.cards.map((card)=>{
        <li>{card.name}</li>

       })}
      </ul>
    </div>
  );
}

export default GetCard