import reducer, {
  transformSourceTarotToCardTypeList,
  initialState
} from '../GameReducer'
import * as actions from '../GameActions'
import tarot from '../__fixtures__/cards'

describe('Game Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('assign cards on succeded request', () => {
    const expectedState = { ...initialState, tarot }
    expect(reducer(initialState, {
      type: actions.TAROT.SUCCESS,
      tarot
    })).toEqual(expectedState)
  })

  it('assign cards on update message', () => {
    const expectedState = { ...initialState, tarot }
    expect(reducer(initialState, {
      type: actions.TAROT.UPDATE,
      tarot
    })).toEqual(expectedState)
  })

  it('change gameState', () => {
    const myCustomGameState = 'CUSTOM_GAME_STATE'
    const expectedState = { gameState: myCustomGameState }
    expect(reducer(undefined, {
      type: actions.GAME.CHANGE_STATE,
      gameState: myCustomGameState
    })).toEqual(expectedState)
  })
})
