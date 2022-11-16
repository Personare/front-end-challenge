import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from '../components/card';

const ControlsContainer = styled.div`
    height: 100px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.p`
    font-size: 1.5em;
    font-weight: 700;
`;

const Button = styled.button`
    color: white;
    background-color: darkcyan;
    font-size: 1.5em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid green;
    border-radius: 3px;
    cursor: pointer;
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
    Implementação O(n) do Fisher-Yates Shuffle sem bias.
    https://bost.ocks.org/mike/shuffle
*/
export const shuffleCards = (array) => {
    const cards = [...array];
    let m = cards.length,
        t,
        i;

    while (m) {
        i = Math.floor(Math.random() * m--);

        t = cards[m];
        cards[m] = cards[i];
        cards[i] = t;
    }

    return cards;
};

/*
    Assim que o componente recebe o array de cartas pela prop cardData, atualiza o estado cards com
    um array de objetos referente a cada carta. Esse array é utilizado para gerar os componentes de carta.

    Cada carta tem dois modos: inicial e aleatório.
    O inicial respeita a ordem original e serve para exibir as cartas antes do início do jogo.
    O aleatório indica qual será o valor que ela assumirá depois do jogo ter iniciado.
*/
export default function CardManager(props) {
    const [jogoIniciado, setJogoIniciado] = useState(false);
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

        const cardsShuffled = shuffleCards(props.cardsData.cards);
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
                <>
                    {!jogoIniciado ? (
                        <Button onClick={() => setJogoIniciado(true)}>
                            Iniciar o Jogo
                        </Button>
                    ) : (
                        <Text>Selecione uma carta:</Text>
                    )}
                </>
            </ControlsContainer>
            <CardsContainer>
                {cards.map((card, i) => {
                    return (
                        <Card
                            randomName={card.randomName}
                            randomFrontImage={card.randomFrontImage}
                            orderedFrontImage={card.orderedFrontImage}
                            backImage={card.backImage}
                            jogoIniciado={jogoIniciado}
                            key={i}
                            index={i}
                        ></Card>
                    );
                })}
            </CardsContainer>
        </>
    );
}
