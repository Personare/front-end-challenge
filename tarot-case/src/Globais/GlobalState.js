import { ContextoCartas } from "./GlobalContext";
import { useState } from "react"
import { GetTarot } from "../Services/request";

export const GlobalState = (props) => {

    const [tarot, setTarot] = useState([]);
  
    const getInfo = (history) => {

        GetTarot(setTarot, history)
    }

    const URL_BASE = tarot.imagesUrl;

    const URL_BACK = tarot.imageBackCard;
       
    return (
        <ContextoCartas.Provider value={{ URL_BACK, URL_BASE, tarot, getInfo }}>
            {props.children}
        </ContextoCartas.Provider>
    )
}
