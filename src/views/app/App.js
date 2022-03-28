import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import tarotJson from '../../tarot.json';
import './App.css';

const tarotCards = tarotJson.cards.map((card) => {
  return {
    ...card,
    open: true,
  };
});

function App() {
  const [cards, setCards] = useState(tarotCards);

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function handleStartGame() {
    const newCards = [...cards];
    const shuffledCards = shuffleArray(newCards);
    const closedShuffledCards = shuffledCards.map((card) => {
      return {
        ...card,
        open: false,
      };
    });

    setCards(closedShuffledCards);
  }

  function handleOpenCard(name) {
    const newCards = [...cards];
    const thereIsAnOpenLetter = newCards.some((card) => card.open === true);
    const cardsWithAnOpen = newCards.map((card) => {
      if (card.name === name && !thereIsAnOpenLetter) {
        return {
          ...card,
          open: true,
        };
      } else {
        return {
          ...card,
          open: false,
        };
      }
    });

    setCards(cardsWithAnOpen);
  }

  function handleCloseCard(name) {
    const newCards = [...cards];
    const cardsWithAnOpen = newCards.map((card) => {
      if (card.name === name) {
        return {
          ...card,
          open: false,
        };
      } else {
        return card;
      }
    });

    setCards(cardsWithAnOpen);
  }

  return (
    <div className='App'>
      <ReactTooltip place='bottom' html={true} />
      <header>
        <h1>Tarot O Jogo</h1>
        <p>
          Para Iniciar, clique no Botão.
          <br /> O jogo acaba quando não houverem mais cartas.
        </p>
      </header>
      <main>
        <button onClick={handleStartGame}>Iniciar</button>
        <ul>
          {cards.map((card) => (
            <li
              data-html={true}
              data-tip={
                card.open
                  ? `<p style="text-align: center; padding-bottom: .4rem;">${card.name}</p><p>lorem lorem lorem lorem</p>`
                  : 'Clique aqui para ver a carta'
              }
              onClick={
                card.open
                  ? () => handleCloseCard(card.name)
                  : () => handleOpenCard(card.name)
              }
              key={card.name}
              className={card.open ? 'active' : null}
            >
              <img
                className='card'
                src={tarotJson.imagesUrl + card.image}
                alt={card.name}
              />
              <img
                className='cardBackground'
                src={tarotJson.imageBackCard}
                alt='Fundo da carta'
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
