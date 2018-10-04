import gameReducer from '../../../src/reducers/gameReducer';
import * as types from '../../../src/actions/types';

describe('reducers -> gameReducer', () => {
  let state;
  let initialState;

  beforeEach(() => {
    initialState = {
      play: false,
      cards: {},
      order: [],
      selected: false,
    };
  });

  it('deve iniciar com o estado default', () => {
    state = gameReducer(undefined, {});

    expect(state).toEqual(initialState);
  });

  it('deve carregar os dados corretamente', () => {
    const json = {
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

    state = gameReducer(undefined, {
      type: types.LOAD_CARDS,
      payload: json,
    });

    expect(state.order).toEqual([1, 2]);
    expect(state.cards).toEqual({
      1: {
        name: json.cards[0].name,
        image: `${json.imagesUrl}${json.cards[0].image}`,
        imageBackCard: json.imageBackCard,
      },
      2: {
        name: json.cards[1].name,
        image: `${json.imagesUrl}${json.cards[1].image}`,
        imageBackCard: json.imageBackCard,
      },
    });
  });

  it('deve mudar play para true e selected para false ao iniciar o jogo', () => {
    state = gameReducer(state, { type: types.START_GAME });

    expect(state.play).toBeTruthy();
    expect(state.selected).toBeFalsy();
  });

  it('deve mudar play e selected para false ao parar o jogo', () => {
    state = gameReducer(state, { type: types.STOP_GAME });

    expect(state.play).toBeFalsy();
    expect(state.selected).toBeFalsy();
  });

  it('deve embaralhar a lista de cartas corretamente', () => {
    const initialOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    state = { ...initialState, order: initialOrder };
    state = gameReducer(state, { type: types.SHUFFLE_GAME });

    expect(state.order).not.toEqual(initialOrder);
  });

  it('deve selecionar a carta escolhida corretamente', () => {
    state = gameReducer(state, {
      type: types.SELECT_CARD,
      payload: { id: 1 },
    });

    expect(state.selected).toEqual(1);
  });
});
