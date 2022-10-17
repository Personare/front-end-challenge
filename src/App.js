import Cards from "./components/Cards"
import useRequestData from "./hooks/useRequestData"
import { AppCointainer, CardContainer } from "./styled"


export default function App() {
  const data = useRequestData("tarot.json");
  // console.log(data);

  

  const changImage = (event) => {
    // console.log(event.target);
    if (event.target.src === data.imageBackCard) {
      event.target.src = data.imagesUrl + event.target.name;
    } else {
      event.target.src = data.imageBackCard;
    }
  };

  return (
    
    <AppCointainer>
     
      <img
        src={
          "https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2018/05/07094247/imagemmarcavertical.jpg"
        }
        alt={"personare"}
      />
      <h1>Tarot</h1>

      <CardContainer>
      
        {data.length !== 0 &&
          data.cards.map((card) => {
            return (
              <Cards
                key={card.name}
                backCard={data.imageBackCard}
                cardImage={card.image}
                onClick={changImage}
                // descricao={card.description}
              />
            );
          })}
      </CardContainer>
    </AppCointainer>
  );
}