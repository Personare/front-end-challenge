import { Container } from "./style";
import { useContext } from "react";
import { CardContext } from "../../contexts/cardContext";
import { Button } from "../Button/style";

const Header = () => {

  const { flip, handleFlipCard} = useContext(CardContext)

  return (
    <Container>
      <h1>
        {flip 
        ? 'Clique em iniciar o jogo para virar as cartas' 
        : 'Passe o mouse para virar uma carta'}
      </h1>
      {flip ? <Button onClick={handleFlipCard}>{flip ? 'Iniciar o Jogo' : ''}</Button> : ''}
    </Container>
  )
}

export default Header;