import reducer, {
  transformSourceTarotToCardTypeList,
  initialState
} from '../GameReducer'
import * as actions from '../GameActions'
import cards from '../__fixtures__/cards'

const tarot = cards[0]

describe('Game Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('assign cards on succeded request', () => {
    const expectedState = { tarot }
    expect(reducer({}, {
      type: actions.TAROT.SUCCESS,
      tarot
    })).toEqual(expectedState)
  })
})
