import * as actions from '../../../src/actions';
import * as types from '../../../src/actions/types';

describe('actions -> index', () => {
  it('deve carregar os dados corretamente', () => {
    const data = { item: 1 };
    const action = {
      type: types.LOAD_CARDS,
      payload: data
    };

    expect(actions.loadCards(data)).toEqual(action);
  });

  it('deve setar a carta selecionada corretamente', () => {
    const data = { id: 1 };
    const action = {
      type: types.SELECT_CARD,
      payload: data
    };

    expect(actions.selectCard(1)).toEqual(action);
  });

  it('deve disparar a action de iniciar o jogo corretamente', () => {
    const action = {
      type: types.START_GAME
    };

    expect(actions.startGame()).toEqual(action);
  });

  it('deve disparar a action de parar o jogo corretamente', () => {
    const action = {
      type: types.STOP_GAME
    };

    expect(actions.stopGame()).toEqual(action);
  });

  it('deve disparar a action de embaralhar o jogo corretamente', () => {
    const action = {
      type: types.SHUFFLE_GAME
    };

    expect(actions.shuffleGame()).toEqual(action);
  });
});
