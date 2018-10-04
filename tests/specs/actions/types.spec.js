import * as types from '../../../src/actions/types';

describe('actions -> types', () => {
  it('deve ter os valores corretos setados', () => {
    expect(types.LOAD_CARDS).toEqual('load_cards');
    expect(types.SELECT_CARD).toEqual('select_card');
    expect(types.START_GAME).toEqual('start_game');
    expect(types.STOP_GAME).toEqual('stop_game');
    expect(types.SHUFFLE_GAME).toEqual('shuffle_game');
  });
});
