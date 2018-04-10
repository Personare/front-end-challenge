import { GAME_STATUS } from '..';
import { getCardInfos } from '../../../api/cards';

export const getParsedCards = ({ cards = [], imagesUrl, imageBackCard }) => (
  cards.map(card => (
    {
      ...card,
      imageBackCard,
      image: `${imagesUrl}${card.image}`,
    }
  ))
);

export async function setInitialCards() {
  try {
    const infos = await getCardInfos();
    this.setState({
      cards: getParsedCards(infos),
    });
  } catch (error) {
    throw error;
  }
}

export function selectCard({ name, image }) {
  if (this.state.status === GAME_STATUS.started) {
    this.setState({
      cardSelected: { name, image },
    });
  }
}

export function shuffleCards(cards = []) {
  return cards
    .map(card => [Math.random(), card])
    .sort((card, nextCard) => card[0] - nextCard[0])
    .map(card => card[1]);
}

export function isShuffling() {
  setTimeout(() => {
    this.setState({
      deckStatus: {
        shuffled: true,
        isShuffling: false,
      },
    });
  }, 1000);
}
