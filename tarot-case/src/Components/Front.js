
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
            <p>{card.name}</p>
            <img src={URL_BASE + card.image} />
            <p>bla bla bla</p>
        </Cartas>
    })

    return (
                       

            <Tabuleiro>
                {showCards}
            </Tabuleiro>
   

    )

}
