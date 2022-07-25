import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CardContext = createContext();

const CardProvider = ({children}) => {

  const [card, setCard] = useState([])
  const [path, setPath] = useState([])
  const [flip, setFlip] = useState(true)

  useEffect(() => {
  
    getCard();

    getPaths();

  });

  const getCard = async () => {
    const response = await axios.get('/tarot.json')
    setCard(response.data.cards)
  }

  const getPaths = async () => {
    const response = await axios.get('/tarot.json')
    setPath(response.data)
  }

  const handleFlipCard = () => {
    setFlip(!flip)
  }

  const image_path = path.imagesUrl;

  const back_card = path.imageBackCard;

  return (
    <CardContext.Provider value={{card, path, image_path, back_card, flip, handleFlipCard}}>
      {children}
    </CardContext.Provider>
  )
}

export default CardProvider;