import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from './card';
import Button from '../button';
import { shuffleArrayElements } from '../utils';

const ControlsContainer = styled.div`
    margin: 5em 0.5em;
    color: #0d0d0d;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Text = styled.p`
    font-size: 1.5em;
    font-weight: bold;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 20px;
    column-gap: 5px;
    margin-bottom: 20px;
`;

/*
    Assim que o componente recebe o array de cartas pela prop cardData, atualiza o estado cards com
    um array de objetos referente a cada carta. Esse array é utilizado para gerar os componentes de carta.

    Cada carta tem dois modos: inicial e aleatório.
    O inicial respeita a ordem original e serve para exibir as cartas antes do início do jogo.
    O aleatório indica qual será o valor que ela assumirá depois do jogo ter iniciado.
*/
export default function CardManager(props) {
    const [gameStarted, setGameStarted] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Retorna caso o array de cartas não esteja definido;
        if (!props.cardsData.cards) return;

        const _cards = [];

        /*
            Primeiro são criadas as propriedades padrão e do modo inicial:
            A props orderedFrontImage indica a URL do conteúdo da frente carta, de acordo com a ordem original.
            A prop backImage indica a URL da parte de trás padrão da carta.
        */

        for (let i = 0; i < props.cardsData.cards.length; i++) {
            _cards.push({
                orderedFrontImage:
                    props.cardsData.imagesUrl + props.cardsData.cards[i].image,
                backImage: props.cardsData.imageBackCard,
            });
        }

        /*
            Como otimização, cada carta já sabe seu valor aleatório antes do componente ser criado.
            A props randomFrontImage indica a URL do conteúdo da frente carta que foi recebida aleatóriamente.
            A prop randomName indica o nome da carta que foi recebida aleatóriamente.
        */

        const cardsShuffled = shuffleArrayElements(props.cardsData.cards);
        for (let i = 0; i < cardsShuffled.length; i++) {
            _cards[i].randomFrontImage =
                props.cardsData.imagesUrl + cardsShuffled[i].image;
            _cards[i].randomName = cardsShuffled[i].name;
        }

        setCards(_cards);
    }, [props.cardsData]);

    return (
        <>
            <ControlsContainer>
                {!gameStarted ? (
                    <>
                        <h1>Katreque&apos;s Tarot Game</h1>
                        <Button onClick={() => setGameStarted(true)}>
                            Iniciar o Jogo
                        </Button>
                    </>
                ) : (
                    <Text>Selecione uma carta</Text>
                )}
            </ControlsContainer>
            <CardsContainer>
                {cards.map((card, i) => {
                    return (
                        <Card
                            randomName={card.randomName}
                            randomFrontImage={card.randomFrontImage}
                            orderedFrontImage={card.orderedFrontImage}
                            backImage={card.backImage}
                            gameStarted={gameStarted}
                            key={i}
                            index={i}
                        ></Card>
                    );
                })}
            </CardsContainer>
        </>
    );
}
