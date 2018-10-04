import * as actions from '../../../src/actions';
import * as types from '../../../src/actions/types';

describe('Actions -> index', () => {
  it('deve carregar os dados corretamente', () => {
    const data = { item: 1 };
    const action = {
      type: types.LOAD_CARDS,
      payload: data
    };

    expect(actions.loadCards(data)).toEqual(action);
  });
});
