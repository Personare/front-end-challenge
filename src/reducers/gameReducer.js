import { shuffle } from 'lodash';
import {
  LOAD_CARDS, SELECT_CARD, START_GAME, STOP_GAME, SHUFFLE_GAME,
} from '../actions/types';

const INITIAL_STATE = {
  play: false,
  cards: {},
  order: [],
  selected: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_CARDS: {
      const cards = {};
      const order = [];
      action.payload.cards.forEach((item, key) => {
        cards[key + 1] = {
          name: item.name,
          image: `${action.payload.imagesUrl}${item.image}`,
          imageBackCard: action.payload.imageBackCard,
        };
        order.push(key + 1);
      });

      return { ...state, cards, order };
    }

    case SELECT_CARD:
      return { ...state, selected: action.payload.id };

    case START_GAME:
      return { ...state, play: true, selected: false };

    case STOP_GAME:
      return { ...state, play: false, selected: false };

    case SHUFFLE_GAME: {
      const order = shuffle(state.order);
      return { ...state, order };
    }

    default:
      return state;
  }
};
