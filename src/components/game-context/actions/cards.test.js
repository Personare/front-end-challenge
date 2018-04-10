import { CARDS_MOCK } from '../../../helpers/mocks';

import { getParsedCards } from './cards';


const expectedCards = [
  {
    image: `${CARDS_MOCK.imagesUrl}${CARDS_MOCK.cards[0].image}`,
    imageBackCard: CARDS_MOCK.imageBackCard,
    name: CARDS_MOCK.cards[0].name,
  },
  {
    image: `${CARDS_MOCK.imagesUrl}${CARDS_MOCK.cards[1].image}`,
    imageBackCard: CARDS_MOCK.imageBackCard,
    name: CARDS_MOCK.cards[1].name,
  },
];

describe('getParsedCards()', () => {
  it('should return an expected card', () => {
    const parsedCards = getParsedCards(CARDS_MOCK);
    expect(parsedCards).toEqual(expectedCards);
  });
});
