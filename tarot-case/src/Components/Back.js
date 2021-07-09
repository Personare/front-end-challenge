
import { useContext, useState } from "react"
import { ContextoCartas } from "../Globais/GlobalContext"
import { Tabuleiro, Cartas } from "../Styled/styledComponents"

export const Back = () => {
    const { URL_BACK, URL_BASE, tarot, } = useContext(ContextoCartas)

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [lado, setLado] = useState(false);


    const cards = tarot.cards;

    const sorteio = () => {
        const i = Math.floor(Math.random() * 10)
        setName(cards[i].name)
        setImage(cards[i].image)
        setLado(!lado)

    }


    const showBack = tarot && tarot.cards && tarot.cards.map((card) => {
        return <Cartas onClick={sorteio} key={card.name}>
            <p></p>
            <img src={URL_BACK} />
        </Cartas>
    })

    return (


        <Tabuleiro>
            {lado ?
                <Cartas onClick={sorteio}>
                    <p>{name}</p>
                    <img src={URL_BASE + image} />
                    <p>Se a carta {name} apareceu
                        <br />para você é por que....</p>

                </Cartas> :
                showBack}
        </Tabuleiro>


    )

}
