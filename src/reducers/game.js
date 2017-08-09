import { LOAD, START, STOP, SHUFFLE, SELECT } from 'actions/game';
import shuffle from 'lodash/shuffle';

const INITIAL_STATE = {
    play: false,
    cards: {},
    order: [],
    selected: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD: {
            // TODO: refatorar
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

        case START:
            return { ...state, play: true, selected: false };

        case STOP:
            return { ...state, play: false, selected: false };

        case SHUFFLE: {
            const order = shuffle(state.order);
            return { ...state, order };
        }

        case SELECT:
            return { ...state, selected: action.payload.id };

        default:
            return state;
    }
};
