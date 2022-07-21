// import axios from "axios";
import { useContext } from "react";
import { CardContext } from "../contexts/cardContext";

const Testes = () => {

  const {card, image_path} = useContext(CardContext)

  // useEffect(() => {
  
  //     getCard();
  
  //     getPaths();
  
  // })

  // const [teste, setTeste] = useState([])

  // const [teste2, setTeste2] = useState([])

  // useEffect(() => {

  //   getTeste();

  //   getPaths();

  // }, [])

  // const getTeste = async () => {
  //   const response = await axios.get('/tarot.json')
  //   // console.log(response.data.cards)
  //   setTeste(response.data.cards)
  // }

  // const getPaths = async () => {
  //   const response = await axios.get('/tarot.json')
  //     // console.log(response.data.cards)
  //     setTeste2(response.data)
  //   }

  // const image_path = teste2.imagesUrl;
  // console.log(image_path)

  return (
    <>  
      {card.map((card) => {
        return (
          <div>
            <p>{card.name}</p>
            <img src={`${image_path}${card.image}`} alt={card.name} />
          </div>
        )
      })}
    </>
  )
}

export default Testes;