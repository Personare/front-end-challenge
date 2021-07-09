
import { useContext, useEffect} from "react"
import { ContextoCartas } from "../Globais/GlobalContext"
import {  Tabuleiro, Cartas } from "../Styled/styledComponents"

export const Front = ()=>{
    const { URL_BASE, tarot, getInfo} = useContext(ContextoCartas)

    useEffect(()=>{
        getInfo()
    }, [])

    const showCards = tarot && tarot.cards && tarot.cards.map((card) => {
        return <Cartas key={card.name}>
            <h3>{card.name}</h3>
            <img src={URL_BASE + card.image} />
           
        </Cartas>
    })

    return (
                       

            <Tabuleiro>
                {showCards}
            </Tabuleiro>
   

    )

}
