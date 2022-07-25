import { useEffect, useState } from 'react';
import {shuffle} from 'lodash';

import Card from '../../components/Card'; 
import Button from '../../components/Button';
import CardIntepretation from '../../components/CardInterpretation';  
import Modal from '../../components/Modal';
import * as S from './styles'

type Card = {
  name: string
  image: string
}

type Result = {
  imagesUrl: string
  cards: Array<Card>
}

const App=() =>{
  const [selectedCard, setSelectedCard] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [showCards, setShowCards] = useState<boolean>(true);
  const [result, setResult] = useState<Result>({imagesUrl:'', cards: []});
  
  const handleClick = (name: string) =>{
    setSelectedCard(name);
    setTimeout(()=>toggleModal(),500)
  }

  const handleStartGame =() =>{
    setShowCards(false);
    setSelectedCard('');
    setTimeout(()=>setResult({
      ...result,
      cards: shuffle(result.cards)
    }),500)
  }
  
  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  };

  const getSelectedCard = () => {
    const card: Card = result.cards.filter(({ name }) => name === selectedCard)[0]
    return card
  }

  useEffect(() => {
    const api = async () => {
      const data = await fetch("tarot.json", {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData);
    };
    api();
  }, []);

  return (
    <>
      <S.ButtonContainer>
        <Button onClick={handleStartGame}> Iniciar jogo</Button>
      </S.ButtonContainer>
      <S.TarotStyle>
        {result.cards.map(({name, image})=>(
          <Card
            imagesUrl={result.imagesUrl}
            image={image}
            name={name} 
            key={name}
            handleClick={handleClick}
            flipped={selectedCard === name || showCards}
          />
        ))} 
      </S.TarotStyle> 
      {isModalVisible && (
        <Modal onBackdropClick={toggleModal}>
          <CardIntepretation
            imagesUrl={result.imagesUrl}
            name={getSelectedCard().name}
            image={getSelectedCard().image}
          />
        </Modal>  
      )}
    </>
  );
}

export default App;
