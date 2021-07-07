import axios from "axios"
import { useEffect, useState } from "react"
import { RequestCard } from "../Services/request"


const Table = () => {
    const [tarot, setTarot] = useState([]);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [lado, setLado] = useState(false);

    const getInfo = () => {

        axios.get("tarot.json")
            .then((res) => {
                setTarot(res.data)
            })

    }
    const URL_BASE = tarot.imagesUrl;

    const URL_BACK = tarot.imageBackCard;

    const cards = tarot.cards;

    const sorteio = () => {
        const i = Math.floor(Math.random() * 10)
        setName(cards[i].name)
        setImage(cards[i].image)
        setLado(!lado)
    }

    return (
        <div>
            {cards ? <p>Jogue</p> : <button onClick={getInfo}>START</button>}

            <div onMouseUp={sorteio}>
                <img src={URL_BACK} />
            </div>

            <card >
                {lado && (
                    <carta>
                        <img src={URL_BASE + image} />
                        <p>Essa carta quer dizer isso e aquilo outro</p>
                    </carta>
                )}
            </card>


        </div>
    )
}
export default Table