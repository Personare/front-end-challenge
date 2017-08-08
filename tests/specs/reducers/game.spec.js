import game from 'reducers/game';
import * as actions from 'actions/game';
import { expect } from 'chai';

describe('Reducer :: game', () => {
    let state;
    let initial;

    beforeEach(() => {
        initial = {
            play: false,
            cards: {},
            order: [],
            selected: false,
        };
        state = game(undefined, {});
    });

    it('LOAD : Pega dados do json passando para normalized state', () => {
        const mockJson = {
            imagesUrl: 'https://imagesUrl.com.br/images/',
            imageBackCard: 'https://imageBackCard.com.br/back-blue-card.png',
            cards: [
                {
                    name: 'O MAGO',
                    image: 'arcano1.jpg',
                },
                {
                    name: 'A SACERDOTISA',
                    image: 'arcano2.jpg',
                },
            ],
        };

        state = game(undefined, {
            type: actions.LOAD,
            payload: mockJson,
        });

        expect(state.order).to.eql([1, 2]);
        expect(state.cards).to.eql({
            1: {
                name: mockJson.cards[0].name,
                image: `${mockJson.imagesUrl}${mockJson.cards[0].name}`,
                imageBackCard: mockJson.imageBackCard,
            },
            2: {
                name: mockJson.cards[1].name,
                image: `${mockJson.imagesUrl}${mockJson.cards[1].name}`,
                imageBackCard: mockJson.imageBackCard,
            },
        });
    });

    it('START : Muda "play" para true e selected para false', () => {
        state = game(state, { type: actions.PLAY });
        expect(state.play).to.be.true;
        expect(state.selected).to.be.false;
    });

    it('STOP : Muda "play" e selected para false', () => {
        state = game(state, { type: actions.PLAY });
        expect(state.play).to.be.true;
    });

    it('SHUFFLE : Embaralha a lista "order"', () => {
        const initialOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        state = { ...initial, order: initialOrder };
        state = game(state, { type: actions.SHUFFLE });
        expect(state.order).to.be.not.eql(initialOrder);
    });
});
